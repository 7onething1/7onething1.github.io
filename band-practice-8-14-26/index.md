# Band practice, 8.14.26

Live page: https://7onething1.github.io/band-practice-8-14-26/

## What this is

Three hours and forty five minutes of band practice, cut into the takes that hold up.
Nineteen songs came out, every one longer than two minutes. False starts, section
drills, room chatter and dead air stayed behind.

## Source

- File: `8.14.26 - 8:17:26, 7.17 PM.wav` from Google Drive
- Size: 3,584,105,324 bytes, 3:45:27 long
- Format: 44.1 kHz, 24 bit, stereo PCM
- Local copy: `~/Music/Band-Practice/band-practice-8-14-26.wav`

## What came out

| Measure | Value |
|---|---|
| Takes found | 83 |
| Songs kept | 19 |
| False starts proven | 3 |
| Section drills | 7 |
| Fragments | 54 |
| Music delivered | 148 minutes |
| Tape discarded | 78 minutes |
| Delivered format | 44.1 kHz, 24 bit wav |
| Delivered size | 2.2 GB |

Audio lives in `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`.

## Two long takes

File 16 runs 35 minutes and file 17 runs 25 minutes. Both are continuous playing.
File 17 holds no break longer than two seconds anywhere in its length. File 16 holds
one three second break at the eight minute mark. Neither one is a segmentation error.
They need a human ear to decide whether they cover several ideas.

## Hand corrections after the machine pass

Three files carried dead air at the head that the re-check caught. Files 06, 14 and 16
were re-cut from the source at 1.05, 1.55 and 3.20 seconds later. Originals sit in
`songs/pre-headtrim/` and were never deleted.

## Tool change

`find_songs.py` used to force 44.1 kHz and 16 bit on every wav export, which would have
dropped a bit depth from this 24 bit source. It now probes the source and matches it.
Backup: `find_songs.py.bak-preserve24bit-20260817`.

## Open questions

- Do files 16 and 17 need splitting, and where
- Do any of the twelve strong takes under two minutes deserve export as well

## Update, 8.18.26: files 16 and 17 are split

Boundary analysis found 13 song changes across the two long takes, so 60 minutes
came out as 15 tracks. Cuts, evidence and preview audio:
https://7onething1.github.io/band-practice-8-14-26-splits/

Every song in the set (32 files, 148 minutes) is running through htdemucs_6s
for 6-stem separation at 24 bit.
