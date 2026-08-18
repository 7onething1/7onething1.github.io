# Band practice 8.14.26, stems

Live page: https://7onething1.github.io/band-practice-8-14-26-stems/

## What this is

Every song from the 8.14.26 practice tape separated into five instrument stems.
The set is 32 songs and 148 minutes. 3 are separated and
29 are still running at the time this page was built.

## Method

The tape is mono and most of its energy sits in the low end, outside what Demucs
was trained on. Raw separation drops the guitar stem into bass register, measured
at 93.9% below 250 Hz on song 04. The mix gets a corrective tilt first, then
separation runs, then the inverse tilt goes back on every delivered stem.

| Model | Supplies | Why |
|---|---|---|
| `htdemucs_6s` | guitar, other | the only model with a guitar head |
| `htdemucs` | bass, drums, vocals | four heads hold more capacity per source |

Both guitarists sit inside one `guitar.wav`, since bit-identical channels carry no
pan cue. A silent drums stem means an empty chair, because the drum chair rotates.

## Results

### 01, `01_0-34-29_take28_score88.wav`

- 4:07 long, tape 0:34:28, 143 BPM
- Still separating at build time

### 02, `02_0-38-39_take29_score67.wav`

- 2:27 long, tape 0:38:38, 79 BPM
- Still separating at build time

### 03, `03_0-43-17_take31_score90.wav`

- 3:42 long, tape 0:43:16, 118 BPM
- Still separating at build time

### 04, `04_0-47-03_take32_score90.wav`

- 3:39 long, tape 0:47:02, 125 BPM

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 65.9% | 97% | -7.7 |
| bass | 18.5% | 79% | -10.6 |
| drums | 15.6% | 88% | -13.3 |
| vocals | 0.0% | 65% | -49.0 |
| other | 0.0% | 7% | -50.6 |

### 05, `05_0-55-28_take36_score82.wav`

- 5:03 long, tape 0:55:27, 111 BPM

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 20.3% | 92% | -18.1 |
| bass | 79.6% | 72% | -9.6 |
| drums | 0.0% | 46% | -43.1 |
| vocals | 0.0% | 4% | -43.0 |
| other | 0.1% | 7% | -28.9 |

### 06, `06_1-05-46_take41_score80.wav`

- 10:54 long, tape 1:05:45, 143 BPM

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 25.6% | 80% | -11.6 |
| bass | 73.1% | 66% | -8.0 |
| drums | 0.0% | 45% | -40.8 |
| vocals | 1.0% | 6% | -16.7 |
| other | 0.3% | 5% | -20.9 |

### 07, `07_1-21-11_take47_score88.wav`

- 4:20 long, tape 1:21:10, 88 BPM
- Still separating at build time

### 08, `08_1-26-47_take49_score84.wav`

- 4:35 long, tape 1:26:46, 128 BPM
- Still separating at build time

### 09, `09_1-31-35_take50_score84.wav`

- 5:01 long, tape 1:31:34, 115 BPM
- Still separating at build time

### 10, `10_1-36-38_take51_score92.wav`

- 4:58 long, tape 1:36:37, 128 BPM
- Still separating at build time

### 11, `11_1-43-28_take54_score83.wav`

- 9:38 long, tape 1:43:27, 109 BPM
- Still separating at build time

### 12, `12_1-55-01_take57_score80.wav`

- 9:16 long, tape 1:55:00, 92 BPM
- Still separating at build time

### 13, `13_2-11-23_take66_score79.wav`

- 2:27 long, tape 2:11:22, 61 BPM
- Still separating at build time

### 14, `14_2-13-58_take67_score81.wav`

- 3:12 long, tape 2:13:57, 80 BPM
- Still separating at build time

### 15, `15_2-19-28_take72_score76.wav`

- 8:19 long, tape 2:19:27, 125 BPM
- Still separating at build time

### 16a, `16a_00-00_to_02-55.wav`

- 2:55 long, tape 2:30:22, cut out of file 16
- Still separating at build time

### 16b, `16b_02-55_to_08-50.wav`

- 5:55 long, tape 2:33:17, cut out of file 16
- Still separating at build time

### 16c, `16c_08-50_to_13-54.wav`

- 5:04 long, tape 2:39:12, cut out of file 16
- Still separating at build time

### 16d, `16d_13-54_to_18-35.wav`

- 4:41 long, tape 2:44:16, cut out of file 16
- Still separating at build time

### 16e, `16e_18-35_to_25-21.wav`

- 6:46 long, tape 2:48:57, cut out of file 16
- Still separating at build time

### 16f, `16f_25-21_to_28-41.wav`

- 3:20 long, tape 2:55:43, cut out of file 16
- Still separating at build time

### 16g, `16g_28-41_to_31-40.wav`

- 2:59 long, tape 2:59:03, cut out of file 16
- Still separating at build time

### 16h, `16h_31-40_to_35-27.wav`

- 3:47 long, tape 3:02:02, cut out of file 16
- Still separating at build time

### 17a, `17a_00-00_to_04-17.wav`

- 4:17 long, tape 3:06:46, cut out of file 17
- Still separating at build time

### 17b, `17b_04-17_to_09-11.wav`

- 4:54 long, tape 3:11:03, cut out of file 17
- Still separating at build time

### 17c, `17c_09-11_to_12-28.wav`

- 3:17 long, tape 3:15:57, cut out of file 17
- Still separating at build time

### 17d, `17d_12-28_to_15-04.wav`

- 2:36 long, tape 3:19:14, cut out of file 17
- Still separating at build time

### 17e, `17e_15-04_to_18-14.wav`

- 3:10 long, tape 3:21:50, cut out of file 17
- Still separating at build time

### 17f, `17f_18-14_to_22-01.wav`

- 3:47 long, tape 3:25:00, cut out of file 17
- Still separating at build time

### 17g, `17g_22-01_to_24-42.wav`

- 2:41 long, tape 3:28:47, cut out of file 17
- Still separating at build time

### 18, `18_3-33-28_take80_score71.wav`

- 2:12 long, tape 3:33:27, 125 BPM
- Still separating at build time

### 19, `19_3-35-49_take81_score72.wav`

- 3:50 long, tape 3:35:48, 128 BPM
- Still separating at build time

## Files

Stems: `~/Projects/_outputs/band-practice-stems/STEMS/<stub>/`
Whole songs: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`
Segments: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs-split/`
Driver: `~/Projects/_outputs/band-practice-stems/run_song2.sh`
