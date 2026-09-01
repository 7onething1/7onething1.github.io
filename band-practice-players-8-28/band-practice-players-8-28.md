# Band Practice Players 8.28

Every complete take from the 8.28.26 practice tape, one player each. Rebuilt 2026-09-01
after a detector fault was found and fixed.

## Read this first

The 8.28 session was recorded to a roughly 4 GB WAV, then sent by text. Messages transcoded
it to 24 kbps AAC on the way, an 87x reduction, and that transcode is the only copy on this
Mac. These players are a reference for finding parts and marking timecodes. The lossless
master is still on the recording machine.

## What is here

- 27 players, one per complete take
- 18 of them are new in this pass, 9 are the old 12 restored to full length
- 22 of 27 clean on a from-scratch re-check, 5 flagged for a brief internal stop near the head
- 174 minutes kept out of a 312 minute tape, about 56%
- 120 takes analysed

## Why this replaces the 12-song read

The first pass on this tape returned 12 songs and 34 minutes. That was a detector fault and
the session was never that quiet.

Calibrating what counts as playing, `find_songs.py` clusters four features and weights pulse
salience heaviest at 1.5x, then weights it again when choosing which cluster means playing.
On this board mix that feature carries no signal. Measured inside the 12 confirmed songs it
read 0.112, against 0.123 outside them, so the strongest voice in the clustering was noise.
It dropped 90 minutes of playing outright and clipped the songs it did keep down to their
loudest cores. Every one of the original 12 sits inside a longer take in this set.

Two independent checks settle it.

An energy and low-end profile built from scratch, calibrated on the 12 confirmed songs,
recalls 94.5% of them. It marks 37 further stretches, 5,373 seconds, that the old run never
cut a take from. Those stretches carry a low-to-mid ratio of 15.9 against 13.9 inside the
confirmed songs and 0.34 in known conversation.

Sampling those stretches through faster-whisper returns zero words, matching a known song
window. A known conversation window from the same tape transcribes as speech at 0.17 words
per second. The stretches are the band playing.

The fix is a new `--calib loudness` option that drops salience from the split. The default
path is unchanged, so every other tape detects the same way it always has. Verified by re-running the
default on this same file and getting the original numbers back.

## What the session was

| Verdict | Count | Meaning |
|---|---|---|
| SONG | 27 | Complete take, shipped as a player |
| FALSE_START | 7 | A real attempt, abandoned, replayed later |
| WORKSHOP | 13 | The band drilling one section |
| FRAGMENT | 59 | A stab, a riff check, a count-in |
| NOODLE | 14 | No steady pulse, tuning or playing over talk |

About 56% of the tape was run-throughs. The longest single take runs 21:50 from 4:32:15, and
the speech probe finds no talk inside it, so it reads as continuous playing.

## Every timecode, so the real file is a one-liner

All 120 takes were exported with exact start and end times, not only the 27 keepers. The
transcode has the identical 18745.516 second duration as the master it came from, so the
timecodes land on the lossless WAV unchanged. When the 4 GB file arrives, nothing needs
detecting again.

```
./cut_8-28-26.sh /path/to/8-28-26-master.wav
```

Cuts all 27 songs with stream copy, so the PCM is untouched.

| File | What it holds |
|---|---|
| `8-28-26-timestamps.xlsx` | All 120 takes with verdict, score, BPM and reasons, plus a CutList sheet of the 27 keepers with ready ffmpeg arguments |
| `8-28-26-timestamps.json` | The same data for scripts |
| `cut_8-28-26.sh` | Runnable cut list, takes the master as its argument |

## Verification

22 keepers pass a from-scratch re-check measured against the room floor rather than their own
quiet passages: no dead air at the head, no early stop, no internal stops, 97-100% above the
floor. The 5 flagged keepers each carry a brief internal stop within the first 20 seconds.
They were left whole and untrimmed, so nothing played is lost. Measured against the source,
kept takes average -6.7 dB and dropped fragments -17.1 dB.

All 27 encodes were probed against their source durations at build time.

## Paths

- Source: `~/Music/Band-Practice/8.28.26.m4a`
- Songs, all 27: `~/Music/Band-Practice/songs-clean-8-28-v2/`
- Songs, the 18 new ones only: `~/Music/Band-Practice/songs-8-28-NEW/`
- Songs, the 9 already shipped: `~/Music/Band-Practice/songs-8-28-PREVIOUSLY-SHIPPED/`
- Timestamps: `~/Music/Band-Practice/8-28-26-timestamps.xlsx`
- Cut script: `~/Music/Band-Practice/cut_8-28-26.sh`
- Detector output: `~/Projects/_outputs/real-song-finder/bp-8-28-26-v2/`
- Previous 12-song read: `~/Music/Band-Practice/previous-12song-read/`
- Skill patch backup: `~/.claude/skills/real-song-finder/find_songs.py.bak-precalib-20260901`

## Who was playing, measured

The roster rotates on these tapes, so a silent stem is an empty chair and not a
separation failure. Measured with htdemucs_6s and the peak criterion from the 8.14
work, where an empty chair reads near -40 dB.

**No take on either tape has an empty bass chair.** On 8.28, nine candidates were
separated at three windows each, and the quietest bass peak found anywhere was -21.7 dB
inside song 02. On 8.14, all 19 separated songs carry bass, the quietest peak -14.1 dB.

The method does detect an empty chair, and it reports one for **drums**. Five of the 19
8.14 songs have no drummer: takes 28, 36, 41, 47 and 67, reading 0.00 to 0.01 percent
share with peaks from -30.7 dB down to -53.6 dB. On 8.28 the closest is song 16 at
3:01:21, holding 0.00 to 0.01 percent drums across all three windows.

| Take | Tape | Bass share | Bass peak | Drums share | Drums peak | Chair |
|---|---|---|---|---|---|---|
| song 02 | 8.28 | 0.32 to 6.42% | -21.7 dB | 54.6 to 95.6% | -0.1 dB | both filled |
| song 04 | 8.28 | 3.92 to 7.97% | -8.2 dB | 25.7 to 36.4% | -0.1 dB | both filled |
| song 16 | 8.28 | 0.01 to 54.1% | -11.8 dB | 0.00 to 0.01% | -39.5 dB | no drums |
| 07_take47 | 8.14 | 8.71% | -6.5 dB | 0.00% | -53.6 dB | no drums |
| 05_take36 | 8.14 | 10.21% | -6.6 dB | 0.00% | -44.5 dB | no drums |
| 14_take67 | 8.14 | 80.66% | -5.7 dB | 0.01% | -45.6 dB | no drums |

Two limits worth stating. These tapes are mono, so two guitars cannot be split into
separate stems and both land in one guitar stem. And a share number on a bass-heavy
board mix moves around a lot, which is why the chair test reads peak level instead.

## Related

- 8.14.26 lossless session: https://7onething1.github.io/band-practice-players/
- Method write-up: https://7onething1.github.io/band-practice-songs/
