# Band Practice Songs

8-14-26 board tape. Complete takes only, false starts and chatter removed. 2026-09-01.

## What went wrong first

The earlier pass cut the tape into 100 equal 2:15 slices on a blind clock grid.
Boundaries landed wherever the timer said, so songs were cut in half and every
false start, tuning pause and bit of chatter stayed in.

## Result

- 22 songs kept
- 21 verified clean on a from-scratch re-check
- 146.5 minutes kept of 225.5 minutes of tape (65%)
- 79 minutes of false starts, fragments, noodling and drilling dropped

## Pipeline

| Stage | Result |
|---|---|
| Takes segmented | 83 |
| First pass, default threshold | 31 kept, 17 survived re-check |
| Stricter pass, score 70 / min-song 60s | 20 kept, 13 survived re-check |
| Head trims applied | 6 files |
| Long take split into songs | 1 take into 3 |
| Final | 22 songs, 21 verified clean |

## Dropped

| Verdict | Count | Meaning |
|---|---|---|
| FRAGMENT | 46 | A stab, a riff check, a count-in |
| NOODLE | 9 | No steady pulse, tuning or playing over talk |
| WORKSHOP | 5 | The band drilling one section repeatedly |
| FALSE_START | 3 | A real attempt, abandoned, replayed later |

## Honest gaps

The speech confirmation pass returned nothing usable. All 83 takes came back
UNKNOWN with zero contradictions, because the room is silent between takes and
whisper had no talk to transcribe. It is not counted as a passing check.

Song 14 reads 83% above the room floor and is the one file still flagged. Its gap
analysis found zero stops over 1.2 s, so the low reading is a quiet passage rather
than chatter.

Songs 17, 18 and 19 came out of one 35.5 minute block. Two independent methods
agreed on the cut points: silence gaps at 8:24 and 28:42, and a tempo analysis run
2026-08-18 that found boundaries at 8:50 and 28:41. Cuts sit on the gap edges.

Song 20 is a single 24:42 jam, left whole. One 1.6 s gap across the whole span, so
no evidence of separate songs inside it.

## Head trims

| Song | Trimmed | Why |
|---|---|---|
| 6 | 29.3s | Four separate stops before the take settled |
| 8 | 12.5s | Stop at 11s |
| 10 | 19.1s | Stop at 18s |
| 12 | 7.2s | Stop at 5s |
| 15 | 9.4s | Head air plus a stop at 8s |
| 17 | 4.1s | Dead air at head |

## Paths

- Source: `~/Music/Band-Practice/band-practice-8-14-26.wav`
- Songs: `~/Music/Band-Practice/songs-clean/`
- Manifest: `~/Music/Band-Practice/songs-clean-manifest.xlsx` (named table `Songs`)
- Detector output: `~/Projects/_outputs/real-song-finder/bp-8-14-26-strict/`
