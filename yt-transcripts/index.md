# Davis Mattek & Ship Chasing, caption index

A searchable index of the captions on two YouTube channels. Built to be run
locally: the caption text is a corpus on disk, and the published page holds
metadata and links.

## Layout

| File | Committed | What it is |
|---|---|---|
| `fetch.py` | yes | the harness, needs `yt-dlp` and real network |
| `sources.json` | yes | the two channels — **URLs still blank** |
| `manifest.json` | yes | per-video metadata, rewritten by every fetch |
| `index.html` | yes | the page: stats, corpus table, search |
| `_local/transcripts/*.json` | **no** | the caption text, gitignored |

## Running it

```
pip3 install -U yt-dlp
python3 fetch.py                 # every source, newest 40 each
python3 fetch.py --limit 100     # deeper
python3 fetch.py --source mattek # one channel
python3 fetch.py <video-url>     # ad-hoc, ignores sources.json
python3 fetch.py --refresh       # re-pull what is already on disk
```

Videos already in `_local/` are skipped unless `--refresh`, so a repeat run
only costs the new uploads. One bad video is caught and reported, never fatal.

## Notes

Manual English captions are preferred over machine ones, and which was used is
recorded per video and shown in the page's *Captions* column — an `auto` row is
a speech recogniser's guess, worth remembering before quoting from one.
Automatic captions arrive as a rolling window where each event repeats the tail
of the one before it; the parser drops those repeats by the `aAppend` flag and
by a prefix check behind it, so text is not doubled under either shape.

Search runs over `_local/`, so it works from the machine that ran the fetch.
Served from GitHub Pages the corpus table and links still render and the search
box says plainly that the text is not reachable from there.

## State

Nothing fetched yet — `sources.json` needs the two channel URLs first. The page
was checked against fixtures in all three states: empty corpus, populated with
local text, and populated with `_local/` absent.
