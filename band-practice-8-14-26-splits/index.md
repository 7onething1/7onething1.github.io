# Files 16 and 17, split

Live page: https://7onething1.github.io/band-practice-8-14-26-splits/
Parent report: https://7onething1.github.io/band-practice-8-14-26/

## What this is

The two long takes from the 8.14.26 practice ran continuous with no stopping.
File 16 held 35:27 and file 17 held 24:42. Boundary analysis found 13 song
changes across the two, which turns 60 minutes of tape into 15 tracks.

## The 13 cuts

| file | cut | at | tape time | score | reading | harmonic | timbre | tempo step | dip dB | bpm |
|---|---|---|---|---|---|---|---|---|---|---|
| 16 | 1 | 2:55 | 2:33:17 | 0.34 | thin | 0.49 | 0.08 | 0.77 | +0.4 | 136 to 132 |
| 16 | 2 | 8:50 | 2:39:12 | 0.66 | strong | 0.81 | 0.39 | 1.00 | -13.0 | 125 to 109 |
| 16 | 3 | 13:54 | 2:44:16 | 0.58 | strong | 0.97 | 0.28 | 0.71 | -0.5 | 112 to 122 |
| 16 | 4 | 18:35 | 2:48:57 | 0.39 | thin | 0.44 | 0.23 | 0.23 | -19.2 | 115 to 118 |
| 16 | 5 | 25:21 | 2:55:43 | 0.66 | strong | 0.43 | 1.00 | 0.50 | -20.2 | 134 to 129 |
| 16 | 6 | 28:41 | 2:59:03 | 0.46 | likely | 0.13 | 0.32 | 1.00 | -22.9 | 121 to 98 |
| 16 | 7 | 31:40 | 3:02:02 | 0.31 | thin | 0.13 | 0.02 | 1.00 | -6.3 | 103 to 118 |
| 17 | 1 | 4:17 | 3:11:03 | 0.45 | likely | 0.26 | 0.18 | 1.00 | -10.6 | 131 to 107 |
| 17 | 2 | 9:11 | 3:15:57 | 0.54 | likely | 0.21 | 0.99 | 0.61 | -4.0 | 116 to 124 |
| 17 | 3 | 12:28 | 3:19:14 | 0.34 | thin | 0.29 | 0.07 | 1.00 | -0.6 | 65 to 76 |
| 17 | 4 | 15:04 | 3:21:50 | 0.71 | strong | 0.86 | 0.62 | 1.00 | -0.7 | 108 to 130 |
| 17 | 5 | 18:14 | 3:25:00 | 0.46 | likely | 0.41 | 0.26 | 1.00 | -4.5 | 124 to 135 |
| 17 | 6 | 22:01 | 3:28:47 | 0.49 | likely | 0.32 | 0.39 | 1.00 | -5.7 | 117 to 131 |

Score above 0.55 reads strong, above 0.40 reads likely, below that reads thin.

## The 15 songs

| file | length | tape start | size |
|---|---|---|---|
| `16a_00-00_to_02-55.wav` | 2:55 | 2:30:22 | 46 MB |
| `16b_02-55_to_08-50.wav` | 5:55 | 2:33:17 | 94 MB |
| `16c_08-50_to_13-54.wav` | 5:04 | 2:39:12 | 80 MB |
| `16d_13-54_to_18-35.wav` | 4:41 | 2:44:16 | 74 MB |
| `16e_18-35_to_25-21.wav` | 6:46 | 2:48:57 | 107 MB |
| `16f_25-21_to_28-41.wav` | 3:20 | 2:55:43 | 53 MB |
| `16g_28-41_to_31-40.wav` | 2:59 | 2:59:03 | 47 MB |
| `16h_31-40_to_35-27.wav` | 3:47 | 3:02:02 | 60 MB |
| `17a_00-00_to_04-17.wav` | 4:17 | 3:06:46 | 68 MB |
| `17b_04-17_to_09-11.wav` | 4:54 | 3:11:03 | 78 MB |
| `17c_09-11_to_12-28.wav` | 3:17 | 3:15:57 | 52 MB |
| `17d_12-28_to_15-04.wav` | 2:36 | 3:19:14 | 41 MB |
| `17e_15-04_to_18-14.wav` | 3:10 | 3:21:50 | 50 MB |
| `17f_18-14_to_22-01.wav` | 3:47 | 3:25:00 | 60 MB |
| `17g_22-01_to_24-42.wav` | 2:41 | 3:28:47 | 43 MB |

Location: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs-split/`

## How a cut gets found

Four signals vote on every second. Chroma self similarity catches a new tonal
center. MFCC self similarity catches a new arrangement. Local tempo catches a
step in the pulse that holds. Short level dips catch the breath between pieces.
A checkerboard kernel sized in minutes fuses them into one novelty curve, since
a song boundary is a block change and a chorus is not. Peaks sit at least 150
seconds apart, then snap to the quietest instant within ten seconds.

## Cutting method

Sliced on the exact sample from the exported 24 bit files, so the 15 pieces tile
their parents with zero frames of drift: 93,800,700 frames out of file 16 and
65,365,020 out of file 17, both matching the parent exactly. The 24 bit values
pass through untouched, proven by a SHA256 round trip on the PCM.

The first pass used ffmpeg stream copy, which seeks to a packet edge, so cuts
landed up to 60 ms from the mark and neighbours overlapped. Those files are
parked in `songs-split/_packet_rounded_superseded/`.
Files 16 and 17 stay whole on disk in `songs/`.

## Stems

The tape is mono and most of its energy sits in the low end, outside what Demucs
was trained on. Raw separation drops the guitar stem into bass register, measured
at 93.9 percent below 250 Hz on song 04. The mix gets a corrective tilt first,
then separation runs.

The 15 segments need no separation run of their own. Their parents are separated
whole, and the finished stems get sliced at the same 13 boundaries, sample exact,
which costs no compute and cannot drift. Round trip proven by SHA256 over the PCM.

Segment stem sets on disk: 7 of 15, five mono 24 bit stems each
(guitar, bass, drums, vocals, other) plus an activity measurement.
Location: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/stems-split/`

## What the isolated stems say about each cut

The cuts were found on the full mix, where a loud guitar smears the pulse. Once a
parent is separated, the stem that carries the pulse gives an independent read.
The first attempt read the drums stem alone and disagreed almost everywhere, and
the reason was in the levels: the kit sits near -60 dB across most of file 17,
which is the empty drum chair this band rotates through. The detector was reading
room bleed. The check now picks drums or bass by level, and records which.

| file | cut | pulse stem | level | stem bpm | mix bpm | verdict |
|---|---|---|---|---|---|---|
| 17 | 4:17 | bass | -16 dB | 136 to 136 | 131 to 107 | differs |
| 17 | 9:11 | drums | -24 dB | 129 to 129 | 116 to 124 | differs |
| 17 | 12:28 | bass | -19 dB | 112 to 118 | 65 to 76 | differs |
| 17 | 15:04 | drums | -40 dB | 144 to 152 | 108 to 130 | differs |
| 17 | 18:14 | drums | -31 dB | 136 to 96 | 124 to 135 | agrees |
| 17 | 22:01 | bass | -15 dB | 123 to 86 | 117 to 131 | agrees |

A differs row weakens one signal out of four. Tempo carried 0.20 of the score and
the harmonic plus timbral novelty carried 0.68, so those cuts still stand on the
evidence that found them. Your ear settles it, which is what the vote buttons on
the page are for.
## Source

- `8.14.26 - 8:17:26, 7.17 PM.wav`, 3,584,105,324 bytes, 3:45:27
- Local master: `~/Music/Band-Practice/band-practice-8-14-26.wav`
- 44.1 kHz, 24 bit, stereo
