#!/usr/bin/env python3
"""
apc20_setgen.py - generate Ableton Live 11 Sets fitted to the Akai APC20 grid.

WHY
The APC20 addresses Live's Session View in banks of 8 tracks x 5 scenes (40 pads).
A set whose track count is not a multiple of 8, or whose scene count is not a
multiple of 5, forces the performer to bank mid-song. This tool reshapes a donor
Live 11 Set into exact APC20 bank geometry.

METHOD - subtractive reshape
The tool only DELETES tracks, scenes and clip slots, then renames what is left.
It never invents XML and never renumbers an object Id. Every element in the
output is unmodified Live-authored markup, so pointer integrity holds by
construction. Growing past the donor geometry is refused on purpose.

THE Id MODEL (learned by probing real sets, not assumed)
  Pointee Id                 globally unique, allocated from NextPointeeId
  MidiTrack/AudioTrack/
  GroupTrack Id              unique object id from the same counter, NOT positional
  MidiClip/AudioClip Id      LOCAL to their slot, they legitimately repeat 0,1,2
  Scene Id, ClipSlot Id      positional, 0-based, must stay sequential
Renumbering a track Id breaks TrackGroupId and routing references. This tool
therefore leaves every object Id exactly as Live wrote it.

GROUP TRACKS
A GroupTrack's children point at it through TrackGroupId. A blind trim can leave
a child whose parent was cut, or a group with no children left. Both are repaired
here: orphaned children are ungrouped, childless groups are dropped and the track
count is topped back up.

USAGE
  apc20_setgen.py --inspect IN.als
  apc20_setgen.py --donor IN.als --out OUT.als --banks 1
  apc20_setgen.py --donor IN.als --out OUT.als --tracks 8 --scenes 5 --blank
  apc20_setgen.py --donor IN.als --out OUT.als --banks 2 --spec myset.json

SPEC JSON
  {"track_names": [...], "scene_names": [...], "track_colors": [28, 14, ...]}
"""
import argparse
import gzip
import json
import sys
import xml.etree.ElementTree as ET

GRID_W = 8   # APC20 clip-launch view width, in tracks
GRID_H = 5   # APC20 clip-launch view depth, in scenes
TRACK_TAGS = ("MidiTrack", "AudioTrack", "GroupTrack")

# Live writes this exact declaration. ElementTree emits single quotes and a
# lowercase charset, which is valid XML but not byte-faithful to Live's output.
LIVE_DECL = b'<?xml version="1.0" encoding="UTF-8"?>\n'


def load(path):
    """Return (root, trailing) so the writer can reproduce the source byte-for-byte."""
    with gzip.open(path, "rb") as f:
        raw = f.read()
    return ET.fromstring(raw), (b"\n" if raw.endswith(b"\n") else b"")


def save(root, path, trailing=b""):
    body = LIVE_DECL + ET.tostring(root, encoding="utf-8", xml_declaration=False) + trailing
    with gzip.open(path, "wb", compresslevel=9) as f:
        f.write(body)


def tracks_of(liveset):
    return [t for t in liveset.find("Tracks") if t.tag in TRACK_TAGS]


def track_id(t):
    v = t.get("Id")
    return int(v) if v is not None else None


def group_id_of(t):
    g = t.find("TrackGroupId")
    return int(g.get("Value")) if g is not None else -1


def set_group_id(t, value):
    g = t.find("TrackGroupId")
    if g is not None:
        g.set("Value", str(value))


def clip_slot_lists(track, non_empty_only=False):
    """Every ClipSlotList under a track (MainSequencer and FreezeSequencer).

    A GroupTrack legitimately carries one EMPTY list. Callers that compare
    lengths against the scene count must skip those.
    """
    lists = track.findall(".//ClipSlotList")
    return [c for c in lists if len(c)] if non_empty_only else lists


def get_name(track):
    n = track.find("Name")
    if n is None:
        return "?"
    ef = n.find("EffectiveName")
    return ef.get("Value") if ef is not None else "?"


def set_name(track, name):
    n = track.find("Name")
    if n is None:
        return
    for tag in ("EffectiveName", "UserName"):
        el = n.find(tag)
        if el is not None:
            el.set("Value", name)


def strip_clips(track):
    """Empty every clip slot, leaving the slot skeleton intact."""
    n = 0
    for csl in clip_slot_lists(track):
        for cs in csl:
            inner = cs.find("ClipSlot")
            if inner is None:
                continue
            val = inner.find("Value")
            if val is None:
                continue
            for child in list(val):
                val.remove(child)
                n += 1
    return n


def reindex(elements):
    for i, el in enumerate(elements):
        el.set("Id", str(i))


def fit_tracks(liveset, want):
    """Trim to exactly `want` tracks, then repair group references.

    Object Ids are never rewritten. Only whole <Track> elements are removed.
    """
    container = liveset.find("Tracks")
    have = len(tracks_of(liveset))
    if want > have:
        sys.stderr.write(
            f"refusing to add tracks: donor has {have}, you asked for {want}.\n"
            f"Cloning a track duplicates its object Ids and Live may reject the set.\n"
            f"Use a donor with at least {want} tracks instead.\n")
        sys.exit(2)

    repairs = {"ungrouped": 0, "groups_dropped": 0}
    for _ in range(12):                      # converges well inside this bound
        trs = tracks_of(liveset)
        for t in trs[want:]:
            container.remove(t)
        trs = tracks_of(liveset)
        kept_ids = {track_id(t) for t in trs}

        # a retained child whose group was cut becomes ungrouped
        for t in trs:
            gid = group_id_of(t)
            if gid != -1 and gid not in kept_ids:
                set_group_id(t, -1)
                repairs["ungrouped"] += 1

        # a retained group with no children left is dropped
        child_of = {}
        for t in trs:
            gid = group_id_of(t)
            if gid != -1:
                child_of[gid] = child_of.get(gid, 0) + 1
        childless = [t for t in trs
                     if t.tag == "GroupTrack" and child_of.get(track_id(t), 0) == 0]
        if not childless:
            break
        for t in childless:
            container.remove(t)
            repairs["groups_dropped"] += 1
        # dropping a group leaves room, so the loop tops the count back up

    final = len(tracks_of(liveset))
    if final != want:
        sys.stderr.write(
            f"could not reach {want} tracks after group repair (got {final}).\n"
            f"The donor does not have {want} group-clean tracks. Use a bigger donor.\n")
        sys.exit(3)
    return repairs


def fit_scenes(liveset, want):
    """Trim to exactly `want` scenes and match every track's slot count."""
    scenes = liveset.find("Scenes")
    have = len(scenes)
    if want > have:
        sys.stderr.write(
            f"refusing to add scenes: donor has {have}, you asked for {want}.\n"
            f"Cloning a scene duplicates its object Ids and Live may reject the set.\n"
            f"Use a donor with at least {want} scenes instead.\n")
        sys.exit(2)
    for s in list(scenes)[want:]:
        scenes.remove(s)
    reindex(list(scenes))

    for tr in tracks_of(liveset):
        for csl in clip_slot_lists(tr):
            if not len(csl):
                continue                     # a GroupTrack's empty list stays empty
            for cs in list(csl)[want:]:
                csl.remove(cs)
            reindex(list(csl))


def rename_from_spec(liveset, spec):
    trs = tracks_of(liveset)
    for i, name in enumerate(spec.get("track_names", [])):
        if i < len(trs):
            set_name(trs[i], name)
    for i, col in enumerate(spec.get("track_colors", [])):
        if i < len(trs):
            c = trs[i].find("Color")
            if c is not None:
                c.set("Value", str(col))
    scenes = liveset.find("Scenes")
    for i, name in enumerate(spec.get("scene_names", [])):
        if i < len(scenes):
            n = scenes[i].find("Name")
            if n is not None:
                n.set("Value", name)


def banks(nt, ns):
    tb, sb = -(-nt // GRID_W), -(-ns // GRID_H)
    return tb, sb, tb * sb, (nt % GRID_W == 0 and ns % GRID_H == 0)


def inspect(path):
    root, _ = load(path)
    ls = root.find("LiveSet")
    trs, scenes = tracks_of(ls), ls.find("Scenes")
    nt, ns = len(trs), len(scenes)
    tb, sb, total, exact = banks(nt, ns)
    print(f"file            : {path}")
    print(f"creator         : {root.get('Creator')}")
    print(f"schema          : MajorVersion={root.get('MajorVersion')} "
          f"MinorVersion={root.get('MinorVersion')} SchemaChangeCount={root.get('SchemaChangeCount')}")
    print(f"tracks          : {nt}   scenes: {ns}")
    print(f"APC20 banks     : {tb} track-bank(s) x {sb} scene-bank(s) = {total} view(s)")
    print(f"exact grid fit  : {'YES' if exact else 'NO - performer must bank mid-set'}")
    ngroups = sum(1 for t in trs if t.tag == "GroupTrack")
    if ngroups:
        print(f"group tracks    : {ngroups} (trimming past one needs group repair)")
    print("tracks          :")
    for i, t in enumerate(trs):
        edge = "   <-- APC20 bank edge" if (i + 1) % GRID_W == 0 else ""
        print(f"  {i+1:>3}. [{t.tag:<10} Id={str(track_id(t)):>6}] {get_name(t)}{edge}")


def main():
    ap = argparse.ArgumentParser(description="Fit an Ableton Live 11 Set to the APC20 grid.")
    ap.add_argument("--donor", help="source .als to reshape")
    ap.add_argument("--out", help="destination .als")
    ap.add_argument("--tracks", type=int, help=f"target track count (default {GRID_W})")
    ap.add_argument("--scenes", type=int, help=f"target scene count (default {GRID_H})")
    ap.add_argument("--banks", type=int, help="shorthand: N banks = N*8 tracks, 5 scenes")
    ap.add_argument("--blank", action="store_true", help="empty every clip slot")
    ap.add_argument("--spec", help="JSON with track_names / scene_names / track_colors")
    ap.add_argument("--inspect", help="report grid fit of an .als and exit")
    a = ap.parse_args()

    if a.inspect:
        inspect(a.inspect)
        return
    if not (a.donor and a.out):
        ap.error("--donor and --out are required unless using --inspect")

    tracks = a.tracks if a.tracks else (a.banks * GRID_W if a.banks else GRID_W)
    scenes = a.scenes if a.scenes else GRID_H

    root, trailing = load(a.donor)
    ls = root.find("LiveSet")
    before = (len(tracks_of(ls)), len(ls.find("Scenes")))

    repairs = fit_tracks(ls, tracks)
    fit_scenes(ls, scenes)

    stripped = 0
    if a.blank:
        for t in tracks_of(ls):
            stripped += strip_clips(t)
    if a.spec:
        with open(a.spec) as f:
            rename_from_spec(ls, json.load(f))

    save(root, a.out, trailing)

    tb, sb, total, exact = banks(tracks, scenes)
    print(f"donor  : {a.donor}")
    print(f"         {before[0]} tracks x {before[1]} scenes")
    print(f"output : {a.out}")
    print(f"         {tracks} tracks x {scenes} scenes")
    print(f"         {tb} track-bank(s) x {sb} scene-bank(s) = {total} APC20 view(s)")
    print(f"         exact grid fit: {'YES' if exact else 'NO'}")
    if repairs["ungrouped"] or repairs["groups_dropped"]:
        print(f"         group repair: {repairs['ungrouped']} ungrouped, "
              f"{repairs['groups_dropped']} childless group(s) dropped")
    if a.blank:
        print(f"         cleared {stripped} clip(s)")


if __name__ == "__main__":
    main()
