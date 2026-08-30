#!/usr/bin/env python3
"""fetch.py -- pull YouTube captions for the sources listed in sources.json.

Run this on a machine that can actually reach YouTube:

    pip3 install -U yt-dlp
    python3 fetch.py                 # every source in sources.json
    python3 fetch.py --source mattek # one source
    python3 fetch.py <url> [<url>]   # ad-hoc, bypasses sources.json
    python3 fetch.py --refresh       # re-pull videos already on disk

Full caption text lands in _local/transcripts/<video-id>.json and stays there:
_local/ is gitignored, so the corpus is not republished. What does get
committed is manifest.json -- id, title, channel, date, duration, word count --
which is what index.html renders. Open the page from this folder on the machine
that ran the fetch and the search box reads _local/ too.
"""
import argparse
import json
import os
import re
import sys
from datetime import datetime, timezone

HERE = os.path.dirname(os.path.abspath(__file__))
LOCAL = os.path.join(HERE, "_local", "transcripts")
MANIFEST = os.path.join(HERE, "manifest.json")
SOURCES = os.path.join(HERE, "sources.json")

# Caption tracks to try, best first. Manual captions beat machine ones.
LANG_PREFS = ("en", "en-US", "en-GB", "en-orig")


def die(msg):
    sys.stderr.write("!! %s\n" % msg)
    sys.exit(1)


try:
    from yt_dlp import YoutubeDL
except ImportError:
    die("yt-dlp not installed.  pip3 install -U yt-dlp")


def load_sources(only=None):
    if not os.path.exists(SOURCES):
        die("missing %s" % SOURCES)
    with open(SOURCES) as fh:
        srcs = json.load(fh)["sources"]
    if only:
        srcs = [s for s in srcs if s["key"] == only]
        if not srcs:
            die("no source with key %r in sources.json" % only)
    blank = [s["key"] for s in srcs if not s.get("url")]
    if blank:
        die("sources.json has no url for: %s\n   Fill in the channel or "
            "playlist URL, or pass URLs on the command line." % ", ".join(blank))
    return srcs


def list_videos(url, limit):
    """Enumerate a channel/playlist without touching each video page."""
    opts = {"extract_flat": "in_playlist", "skip_download": True,
            "quiet": True, "no_warnings": True, "ignoreerrors": True,
            "playlistend": limit}
    with YoutubeDL(opts) as ydl:
        info = ydl.extract_info(url, download=False)
    if not info:
        return []
    if info.get("_type") not in ("playlist", "multi_video"):
        return [info]                      # a single video URL
    out = []
    for entry in info.get("entries") or []:
        if not entry:
            continue
        if entry.get("_type") in ("playlist", "url") and entry.get("entries"):
            out.extend(e for e in entry["entries"] if e)   # channel tab -> tabs
        else:
            out.append(entry)
    return out[:limit] if limit else out


def pick_track(info):
    """Best English json3 caption track, plus whether a human wrote it."""
    for store, kind in ((info.get("subtitles") or {}, "manual"),
                        (info.get("automatic_captions") or {}, "auto")):
        langs = list(LANG_PREFS) + sorted(k for k in store if k.startswith("en"))
        for lang in langs:
            for track in store.get(lang) or []:
                if track.get("ext") == "json3" and track.get("url"):
                    return track["url"], kind, lang
    return None, None, None


def parse_json3(raw):
    """json3 -> [{t: start seconds, s: text}].

    Auto-captions arrive as a rolling window: each event repeats the tail of
    the last one and marks the repeat with aAppend. Dropping those segments
    handles the usual shape; the prefix check after it catches variants that
    do not set the flag, so the text is not doubled either way.
    """
    events = json.loads(raw).get("events") or []
    cues, dropped = [], 0
    for ev in events:
        segs = ev.get("segs")
        if not segs:
            continue
        text = "".join(s.get("utf8", "") for s in segs if not s.get("aAppend"))
        text = re.sub(r"\s+", " ", text).strip()
        if not text:
            continue
        if cues and (text == cues[-1]["s"] or cues[-1]["s"].endswith(text)):
            dropped += 1
            continue
        cues.append({"t": round((ev.get("tStartMs") or 0) / 1000.0, 2), "s": text})
    return cues, dropped


def fetch_one(ydl, video_id, source_key, refresh):
    path = os.path.join(LOCAL, "%s.json" % video_id)
    if os.path.exists(path) and not refresh:
        with open(path) as fh:
            return json.load(fh), "cached"

    url = "https://www.youtube.com/watch?v=%s" % video_id
    info = ydl.extract_info(url, download=False)
    if not info:
        return None, "unavailable"

    track_url, kind, lang = pick_track(info)
    if not track_url:
        return None, "no captions"

    cues, dropped = parse_json3(ydl.urlopen(track_url).read().decode("utf-8"))
    if not cues:
        return None, "empty captions"

    upload = info.get("upload_date")
    rec = {
        "id": video_id,
        "title": info.get("title") or "",
        "channel": info.get("uploader") or info.get("channel") or "",
        "channel_url": info.get("uploader_url") or info.get("channel_url") or "",
        "source": source_key,
        "url": "https://youtu.be/%s" % video_id,
        "upload_date": "%s-%s-%s" % (upload[:4], upload[4:6], upload[6:8]) if upload else "",
        "duration": int(info.get("duration") or 0),
        "captions": kind,
        "lang": lang,
        "fetched": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "cues": cues,
    }
    with open(path, "w") as fh:
        json.dump(rec, fh, ensure_ascii=False, separators=(",", ":"))
    note = "%s, %d cues" % (kind, len(cues))
    return rec, note + (", %d rolling dupes dropped" % dropped if dropped else "")


def words(rec):
    return sum(len(c["s"].split()) for c in rec["cues"])


def build_manifest(sources):
    """Rebuild manifest.json from whatever is in _local/. Metadata only."""
    vids = []
    for name in sorted(os.listdir(LOCAL)) if os.path.isdir(LOCAL) else []:
        if not name.endswith(".json"):
            continue
        with open(os.path.join(LOCAL, name)) as fh:
            rec = json.load(fh)
        vids.append({k: rec.get(k) for k in
                     ("id", "title", "channel", "source", "url",
                      "upload_date", "duration", "captions")}
                    | {"cue_count": len(rec["cues"]), "words": words(rec)})
    vids.sort(key=lambda v: (v.get("upload_date") or "", v["id"]), reverse=True)

    manifest = {
        "generated": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "sources": [{k: s.get(k) for k in ("key", "label", "url")} for s in sources],
        "totals": {"videos": len(vids),
                   "words": sum(v["words"] for v in vids),
                   "seconds": sum(v["duration"] or 0 for v in vids)},
        "videos": vids,
    }
    with open(MANIFEST, "w") as fh:
        json.dump(manifest, fh, ensure_ascii=False, indent=1)
    return manifest


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("urls", nargs="*", help="channel/playlist/video URLs")
    ap.add_argument("--source", help="only this sources.json key")
    ap.add_argument("--limit", type=int, default=40,
                    help="newest N videos per source (default 40)")
    ap.add_argument("--refresh", action="store_true",
                    help="re-pull videos already in _local/")
    args = ap.parse_args()

    os.makedirs(LOCAL, exist_ok=True)

    if args.urls:
        srcs = [{"key": "adhoc", "label": "ad-hoc", "url": u} for u in args.urls]
    else:
        srcs = load_sources(args.source)

    opts = {"skip_download": True, "quiet": True, "no_warnings": True,
            "ignoreerrors": True}
    got = missed = 0
    with YoutubeDL(opts) as ydl:
        for src in srcs:
            print("\n== %s  <%s>" % (src["label"], src["url"]))
            entries = list_videos(src["url"], args.limit)
            print("   %d video(s)" % len(entries))
            for entry in entries:
                vid = entry.get("id")
                if not vid:
                    continue
                title = (entry.get("title") or vid)[:64]
                try:
                    rec, note = fetch_one(ydl, vid, src["key"], args.refresh)
                except Exception as exc:                 # one bad video, keep going
                    rec, note = None, "error: %s" % exc
                if rec:
                    got += 1
                else:
                    missed += 1
                print("   %s %-64s %s" % ("ok " if rec else "-- ", title, note))

    m = build_manifest(load_sources() if not args.urls else srcs)
    print("\n%d fetched, %d skipped." % (got, missed))
    print("corpus: %d videos, %s words, %.1f hours"
          % (m["totals"]["videos"], format(m["totals"]["words"], ","),
             m["totals"]["seconds"] / 3600.0))
    print("wrote  %s" % MANIFEST)
    print("text stays in _local/transcripts/ (gitignored).")


if __name__ == "__main__":
    main()
