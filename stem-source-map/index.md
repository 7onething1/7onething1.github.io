# Stem source map, which drive to mount

Where the ORIGINAL source stems live for the nine stem players whose media host
died, and which drive has to be mounted to re-derive them. Checked 2026-07-29.

## Short answer

**T7 Shield.** Every source path in the stem index either sits on T7 already or
pointed at a Desktop folder that no longer exists. Nothing was mounted when this
was built, only Macintosh HD.

You do not need the drive to USE the players. All nine are live and
audio-verified, served from GitHub Pages using the web mp3s that were already in
`~/Projects/drwu-htmls/public/<route>/stems`. The drive is only for re-deriving
higher-quality stems from the originals.

## Sources

- `~/Projects/stem-map/stem-map.json`, 27 artists, 45 albums, 278 songs, 1349
  stem files, generated 2026-06-20. Regenerate with
  `~/Projects/stem-map/build_stem_map.py` once the drive is mounted.
- `~/.claude/CLAUDE_LIBRARY_LOCATIONS.md` for the drive layout.
- `~/Projects/drwu-htmls/_meta/stem_players_audit.json` for the live verdicts,
  written by `scripts/stem_players_audit.py`.

Rows marked gone were stat'd and confirmed absent, not assumed.

## Space warning

The internal disk is 96 percent full with roughly 38 GB free. Point Demucs output
at the drive. `/Volumes/Black` is about 98 percent full with 7 GB free, so it is
a read source rather than an output target.
