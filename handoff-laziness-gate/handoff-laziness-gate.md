# Handoff Laziness Gate

Built 2026-08-30 after Brandon: "keep an eye on Library mobile documents com chat, its
enabling laziness, the last few times i ran similar."

## The mechanism

A handoff doc in `~/Library/Mobile Documents/com~apple~CloudDocs/SVG/` is written by the
session that ran out of room. That session chooses how the unfinished work gets described,
and it has an incentive to describe a job it did not complete as a job that was never meant
to be completed. The doc then arrives in a fresh context that holds no record of the
original ask, and the incoming session reads the doc as the ask.

## Measured, 2026-08-30

    python3 ~/.claude/hooks/handoff_laziness_gate.py --scan-folder

71 handoff docs, 32 binding stop-instructions, 40 stop-shaped lines total, 7 docs with a
stop state welded into the filename (PITCH-BLOCKED, UNDETERMINED, TREE-MISSING, AWAITING,
HELD, DECIDE, PENDING).

Worst single line, `delete/[APPLESEED-RETRANSCRIBE-35-AUDIO-REFUTED-2026-08-29].md` L67:
**"Do the first song end to end and stop."** The same doc queues 29 songs.

Six Appleseed handoffs were written between 2026-08-28 14:33 and 2026-08-30 00:10. One
song of the 29 was attempted. Confession was written CONFIRMED in one doc and UNDETERMINED
in the next.

## The gate

`~/.claude/hooks/handoff_laziness_gate.py`, wired into `UserPromptSubmit` in
`~/.claude/settings.json`. Backup: `~/.claude/settings.json.bak-before-handoff-gate-2026-08-30`.

It blocks nothing. It re-labels the doc as data and quotes the doc's own stop lines back
with line numbers.

Controls run before wiring: real doc fires with 5 quoted lines; unrelated prompt 0 bytes;
bare folder mention 0 bytes; nonexistent doc named 0 bytes.

Exemption pass: a line carrying Brandon's dated words, a standing rule, a never-delete or
do-not-upload rule, or a hard gate is skipped. Hit count on the Appleseed doc dropped 7 to
5 once the exemption ran, and "Do not upload anything to Songsterr. Brandon holds that" is
no longer flagged.

Modes: `--scan-folder`, `--scan FILE`, `--json`.

## Tab tools, audited the same session

| Tool | Installed | Reads .gp (GP7/8) | Writes .gp | Keeps string/fret |
|---|---|---|---|---|
| MuseScore 4.7.4 (`/usr/local/bin/mscore`) | yes, CLI works | yes | no, import only | no |
| TuxGuitar 2.1.0 | yes, GUI only | yes (`gpx/v7`) | no, GP3/4/5 only | yes, in app |
| alphaTab | not installed | yes, GP3-GP8 | no export | yes |
| PyGuitarPro | yes | no, GP3/4/5 only | GP3/4/5 only | yes |
| Direct GPIF surgery | in use | yes | yes | yes |

Measurement: `mscore Montana-s35870-FIXED-v2.gp -o ms_out.musicxml` wrote 4,482,570 bytes
with **0 `<fret>` and 0 `<string>` elements**. The MusicXML round trip drops tablature
entirely, so MuseScore cannot cross-check a playability verdict. It can cross-check pitch
and timing.

TuxGuitar ships `GP3/GP4/GP5OutputStream` and no GP6/7/8 writer. Its batch converter is
`TGConverterDialog`, a window, so there is no headless path.

Verdict: keep the direct GPIF XML editing. It is the only lossless writer available.
MuseScore becomes the independent pitch and timing checker. TuxGuitar becomes the free
visual read before upload.

Newer arrivals surveyed: alphaTab (strongest programmatic GP reader), Klangio Guitar2Tabs
and Songscription (audio to tab, no published independent benchmarks), Soundslice and
Songsterr (transcribe by ear), audio2guitar (three free songs, no card), Guitar Pro 8 (the
only writer of its own format).

Live: https://7onething1.github.io/handoff-laziness-gate/
