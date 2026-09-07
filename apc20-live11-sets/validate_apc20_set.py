#!/usr/bin/env python3
"""
validate_apc20_set.py - prove an .als is structurally sound AND fits the APC20 grid.

Every check below is calibrated against sets Ableton Live itself wrote. A check
that fails on a Live-authored file is a broken check, not a broken file, and the
first three drafts of this script failed exactly that way. The Id model in
particular was learned by probing, not assumed:

  Pointee Id                globally unique, allocated from NextPointeeId
  Track Id                  unique object id from the same counter, NOT positional
  MidiClip/AudioClip Id     LOCAL to their slot, they legitimately repeat 0,1,2
  Scene Id, ClipSlot Id     positional, 0-based, sequential
  GroupTrack                legitimately carries one EMPTY ClipSlotList

CORRECTNESS  (exit non-zero on failure)
  V1  file is real gzip and inflates
  V2  inflated bytes parse as XML with an <Ableton> root
  V3  Live schema attributes are present and intact
  V4  every non-empty ClipSlotList holds exactly one slot per Scene
  V5  Pointee Ids are globally unique; track Ids are unique among tracks
  V5b Scene Ids and ClipSlot Ids are sequential from 0
  V6  NextPointeeId exceeds every Pointee Id and every track Id
  V9  group integrity: no orphaned child, no childless GroupTrack

FIT  (warn only)
  V7  track count is a whole number of APC20 banks (multiple of 8)
  V8  scene count is a whole number of APC20 banks (multiple of 5)
"""
import gzip
import sys
import xml.etree.ElementTree as ET
from collections import Counter

GRID_W, GRID_H = 8, 5
TRACK_TAGS = ("MidiTrack", "AudioTrack", "GroupTrack")


def check(path):
    fails, warns, lines = [], [], []

    try:
        with gzip.open(path, "rb") as f:
            raw = f.read()
        lines.append(f"V1  gzip inflates                PASS  {len(raw):,} bytes of XML")
    except Exception as e:
        return [f"V1  gzip inflates                FAIL  {e}"], [], []

    try:
        root = ET.fromstring(raw)
        assert root.tag == "Ableton"
        lines.append("V2  XML parses, <Ableton> root   PASS")
    except Exception as e:
        return [f"V2  XML parses                   FAIL  {e}"], [], []

    # SchemaChangeCount is OPTIONAL. Live's own built-in DefaultLiveSet.als omits
    # it, so requiring it fails a file Live ships. Only the first three are load-bearing.
    major, minor = root.get("MajorVersion"), root.get("MinorVersion")
    creator, scc = root.get("Creator"), root.get("SchemaChangeCount")
    if major and minor and creator:
        extra = f" / scc={scc}" if scc else " / no scc (optional)"
        lines.append(f"V3  schema attrs intact          PASS  {creator} / {minor}{extra}")
    else:
        missing = [n for n, v in (("MajorVersion", major), ("MinorVersion", minor),
                                  ("Creator", creator)) if not v]
        fails.append(f"V3  schema attrs intact          FAIL  missing {', '.join(missing)}")

    ls = root.find("LiveSet")
    trs = [t for t in ls.find("Tracks") if t.tag in TRACK_TAGS]
    scenes = list(ls.find("Scenes"))
    nt, ns = len(trs), len(scenes)

    # V4 - only NON-EMPTY lists are compared. A GroupTrack's empty
    # FreezeSequencer list is legal and Live writes it that way.
    bad, checked = [], 0
    for i, t in enumerate(trs):
        for csl in t.findall(".//ClipSlotList"):
            if not len(csl):
                continue
            checked += 1
            if len(csl) != ns:
                bad.append(f"track {i+1} list has {len(csl)} slots, {ns} scenes")
    if bad:
        fails.append(f"V4  slots-per-track == scenes    FAIL  {'; '.join(bad[:4])}")
    else:
        lines.append(f"V4  slots-per-track == scenes    PASS  {checked} non-empty list(s), all {ns}")

    # V5 - the two Id spaces, checked separately
    pointees = [int(e.get("Id")) for e in root.iter("Pointee") if e.get("Id") is not None]
    pdupes = [i for i, c in Counter(pointees).items() if c > 1]
    tids = [int(t.get("Id")) for t in trs if t.get("Id") is not None]
    tdupes = [i for i, c in Counter(tids).items() if c > 1]
    if pdupes or tdupes:
        detail = []
        if pdupes:
            detail.append(f"{len(pdupes)} Pointee Id(s) duplicated: {sorted(pdupes)[:6]}")
        if tdupes:
            detail.append(f"track Id(s) duplicated: {sorted(tdupes)[:6]}")
        fails.append(f"V5  Ids unique in their space    FAIL  {'; '.join(detail)}")
    else:
        lines.append(f"V5  Ids unique in their space    PASS  {len(pointees)} Pointees, {len(tids)} tracks")

    idx_bad = []
    sids = [int(s.get("Id")) for s in scenes if s.get("Id") is not None]
    if sids != list(range(ns)):
        idx_bad.append(f"scene Ids are {sids[:6]}..., expected 0..{ns-1}")
    for i, t in enumerate(trs):
        for csl in t.findall(".//ClipSlotList"):
            cids = [int(c.get("Id")) for c in csl if c.get("Id") is not None]
            if cids != list(range(len(csl))):
                idx_bad.append(f"track {i+1} slot Ids not sequential")
                break
    if idx_bad:
        fails.append(f"V5b positional Ids sequential    FAIL  {'; '.join(idx_bad[:3])}")
    else:
        lines.append(f"V5b positional Ids sequential    PASS  scenes 0..{ns-1}, all slot lists reindexed")

    npi_el = ls.find("NextPointeeId")
    npi = int(npi_el.get("Value")) if npi_el is not None else None
    ceiling = max(pointees + tids) if (pointees or tids) else -1
    if npi is None:
        fails.append("V6  NextPointeeId is the ceiling FAIL  element absent")
    elif npi > ceiling:
        lines.append(f"V6  NextPointeeId is the ceiling PASS  {npi} > {ceiling}")
    else:
        fails.append(f"V6  NextPointeeId is the ceiling FAIL  {npi} <= {ceiling}")

    kept = set(tids)
    orphans, child_of = [], {}
    for i, t in enumerate(trs):
        g = t.find("TrackGroupId")
        gid = int(g.get("Value")) if g is not None else -1
        if gid != -1:
            child_of[gid] = child_of.get(gid, 0) + 1
            if gid not in kept:
                orphans.append(f"track {i+1} points at missing group {gid}")
    childless = [f"group track {i+1} has no children"
                 for i, t in enumerate(trs)
                 if t.tag == "GroupTrack" and child_of.get(int(t.get("Id")), 0) == 0]
    if orphans or childless:
        fails.append("V9  group integrity              FAIL  " + "; ".join((orphans + childless)[:3]))
    else:
        ng = sum(1 for t in trs if t.tag == "GroupTrack")
        lines.append(f"V9  group integrity              PASS  {ng} group track(s), no orphans")

    tb, sb = -(-nt // GRID_W), -(-ns // GRID_H)
    if nt % GRID_W == 0:
        lines.append(f"V7  tracks fill whole banks      PASS  {nt} tracks = {tb} bank(s) of 8")
    else:
        warns.append(f"V7  tracks fill whole banks      WARN  {nt} tracks leaves {nt % GRID_W} in a partial bank")
    if ns % GRID_H == 0:
        lines.append(f"V8  scenes fill whole banks      PASS  {ns} scenes = {sb} bank(s) of 5")
    else:
        warns.append(f"V8  scenes fill whole banks      WARN  {ns} scenes leaves {ns % GRID_H} in a partial bank")
    lines.append(f"    APC20 views to cover the set =  {tb * sb}")
    return fails, warns, lines


def main():
    if len(sys.argv) < 2:
        print("usage: validate_apc20_set.py SET.als [SET2.als ...]")
        sys.exit(1)
    worst = 0
    for p in sys.argv[1:]:
        print(f"\n=== {p}")
        fails, warns, lines = check(p)
        for l in lines:
            print("  " + l)
        for w in warns:
            print("  " + w)
        for f in fails:
            print("  " + f)
        verdict = "FAIL" if fails else ("PASS with fit warnings" if warns else "PASS")
        print(f"  -> {verdict}")
        worst = max(worst, 1 if fails else 0)
    sys.exit(worst)


if __name__ == "__main__":
    main()
