# Band Practice Players 8.28

Every complete take from the 8.28.26 practice tape, one player each. Built 2026-09-01.

## Read this first

The 8.28 session was recorded to a roughly 4 GB WAV, then sent by text. Messages transcoded
it to 24 kbps AAC on the way, an 87x reduction, and that transcode is the only copy on this
Mac. These players are a reference for finding parts and marking timecodes. The lossless
master is still on the recording machine.

## What is here

- 12 players, one per complete take
- 12 of 12 verified clean on a from-scratch re-check
- 34 minutes kept out of a 312 minute tape, about 11%
- 158 takes analysed

## What the session was

| Verdict | Count | Meaning |
|---|---|---|
| SONG | 12 | Complete take, shipped as a player |
| FALSE_START | 28 | A real attempt, abandoned, replayed later |
| WORKSHOP | 48 | The band drilling one section |
| FRAGMENT | 67 | A stab, a riff check, a count-in |
| NOODLE | 3 | No steady pulse, tuning or playing over talk |

Only 11% of the tape was run-throughs. The rest was parts work, which is what a writing
session looks like rather than a rehearsal of finished material.

## Every timecode, so the real file is a one-liner

All 158 takes were exported with exact start and end times, not just the 12 keepers. The
transcode has the identical 18745.516 second duration as the master it came from, so the
timecodes land on the lossless WAV unchanged. When the 4 GB file arrives, nothing needs
detecting again.

```
./cut_8-28-26.sh /path/to/8-28-26-master.wav
```

Cuts all 12 songs with stream copy, so the PCM is untouched.

| File | What it holds |
|---|---|
| `8-28-26-timestamps.xlsx` | All 158 takes with verdict, score, BPM and reasons, plus a CutList sheet of the 12 keepers with ready ffmpeg arguments |
| `8-28-26-timestamps.json` | The same data for scripts |
| `cut_8-28-26.sh` | Runnable cut list, takes the master as its argument |

## Verification

Every keeper passed a from-scratch re-check measured against the room floor rather than its
own quiet passages: no dead air at the head, no early stop, no internal stops, 99-100% above
the floor. Spot-checking the cut list against the source, kept takes average -8.0 dB and
dropped fragments -23.5 dB.

All 12 encodes were probed against their source durations. One was caught truncated (song 11,
missing its moov atom after an interrupted run) and re-encoded.

## Paths

- Source: `~/Music/Band-Practice/8.28.26.m4a`
- Songs: `~/Music/Band-Practice/songs-clean-8-28/`
- Timestamps: `~/Music/Band-Practice/8-28-26-timestamps.xlsx`
- Cut script: `~/Music/Band-Practice/cut_8-28-26.sh`
- Detector output: `~/Projects/_outputs/real-song-finder/bp-8-28-26/`

## Related

- 8.14.26 lossless session: https://7onething1.github.io/band-practice-players/
- Method write-up: https://7onething1.github.io/band-practice-songs/
