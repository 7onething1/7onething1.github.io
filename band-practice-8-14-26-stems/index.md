# Band practice 8.14.26, stems for 04 05 06

Live page: https://7onething1.github.io/band-practice-8-14-26-stems/

## What this is

Songs 04, 05 and 06 from the 8.14.26 practice tape, separated into instrument
stems. The band is two guitars, one bass, drums, and a vocal on some passes.

## The mono constraint

All three files are mono. Left minus right measures exactly zero and correlation
reads 1.0, so the channels are bit-identical. Guitar 1 and Guitar 2 cannot be
separated by pan, and both guitarists come out inside one `guitar.wav`. No
register split was applied, because that would be an inference presented as a
measurement.

## Method

| Model | Gives | Used for |
|---|---|---|
| `htdemucs_6s` | drums, bass, other, vocals, guitar, piano | the guitar stem |
| `htdemucs` | drums, bass, other, vocals | bass, drums, vocals |

Both passes ran on CPU at 24 bit. Stems were summed back to one channel after
separation. The sources are bit-identical across channels, and Demucs still emits
two channels because its model runs a stereo path internally. Those output channels
differ slightly, measured at 0.0136 max on the take 41 guitar stem. Each delivered
stem is the average of the two. Per-stem measurements land in `manifest.json`.

## Who was playing

The drum chair rotates. On some takes it is empty because that player moved to
second guitar or to bass. Take 32 carries a kit at 19.8% of energy peaking at
-13.8 dB. Takes 36 and 41 carry nothing above -40 dB, and both models agree, so
the silence is an empty drum chair rather than a separation failure.

## Results

### Song 01, `01_0-34-29_take28_score88.wav`

- Position in tape: 0:34:28, 4:07 long, 143 BPM, 6 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 82.1% | 90% | -10.8 |
| bass | 17.7% | 74% | -18.3 |
| drums | 0.0% | 6% | -54.6 |
| vocals | 0.0% | 9% | -38.9 |
| other | 0.2% | 25% | -30.8 |

### Song 02, `02_0-38-39_take29_score67.wav`

- Position in tape: 0:38:38, 2:27 long, 79 BPM, 2 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 77.7% | 80% | -13.5 |
| bass | 11.3% | 27% | -16.5 |
| drums | 11.0% | 54% | -22.0 |
| vocals | 0.0% | 8% | -53.0 |
| other | 0.1% | 23% | -40.3 |

### Song 03, `03_0-43-17_take31_score90.wav`

- Position in tape: 0:43:16, 3:42 long, 118 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 90.2% | 99% | -12.8 |
| bass | 1.8% | 29% | -21.7 |
| drums | 8.0% | 89% | -20.9 |
| vocals | 0.0% | 2% | -43.9 |
| other | 0.0% | 8% | -51.4 |

### Song 04, `04_0-47-03_take32_score90.wav`

- Position in tape: 0:47:02, 3:39 long, 125 BPM, 4 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 75.0% | 97% | -15.3 |
| bass | 9.3% | 79% | -20.8 |
| drums | 15.7% | 92% | -20.2 |
| vocals | 0.0% | 12% | -49.2 |
| other | 0.0% | 25% | -56.1 |

### Song 05, `05_0-55-28_take36_score82.wav`

- Position in tape: 0:55:27, 5:03 long, 111 BPM, 7 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 89.6% | 88% | -15.7 |
| bass | 10.2% | 40% | -18.8 |
| drums | 0.0% | 38% | -59.9 |
| vocals | 0.0% | 6% | -48.2 |
| other | 0.2% | 5% | -29.1 |

### Song 06, `06_1-05-46_take41_score80.wav`

- Position in tape: 1:05:45, 10:54 long, 143 BPM, 23 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 90.2% | 88% | -12.5 |
| bass | 8.9% | 35% | -18.4 |
| drums | 0.0% | 6% | -50.5 |
| vocals | 0.9% | 3% | -20.9 |
| other | 0.1% | 4% | -29.2 |

### Song 07, `07_1-21-11_take47_score88.wav`

- Position in tape: 1:21:10, 4:20 long, 88 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 89.7% | 98% | -17.6 |
| bass | 8.7% | 58% | -22.5 |
| drums | 0.0% | 100% | -70.8 |
| vocals | 0.0% | 1% | -41.4 |
| other | 1.6% | 11% | -26.3 |

### Song 08, `08_1-26-47_take49_score84.wav`

- Position in tape: 1:26:46, 4:35 long, 128 BPM, 7 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 70.6% | 73% | -10.2 |
| bass | 29.3% | 70% | -15.7 |
| drums | 0.0% | 2% | -38.8 |
| vocals | 0.1% | 5% | -27.1 |
| other | 0.0% | 22% | -54.8 |

### Song 09, `09_1-31-35_take50_score84.wav`

- Position in tape: 1:31:34, 5:01 long, 115 BPM, 6 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 75.6% | 98% | -12.3 |
| bass | 23.9% | 77% | -16.6 |
| drums | 0.0% | 3% | -49.7 |
| vocals | 0.4% | 4% | -23.1 |
| other | 0.0% | 4% | -34.4 |

### Song 10, `10_1-36-38_take51_score92.wav`

- Position in tape: 1:36:37, 4:58 long, 128 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 76.0% | 92% | -11.6 |
| bass | 2.3% | 21% | -21.4 |
| drums | 16.9% | 77% | -19.2 |
| vocals | 4.1% | 4% | -12.2 |
| other | 0.8% | 2% | -20.6 |

### Song 11, `11_1-43-28_take54_score83.wav`

- Position in tape: 1:43:27, 9:38 long, 109 BPM, 10 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 47.7% | 96% | -10.7 |
| bass | 7.2% | 34% | -19.5 |
| drums | 7.7% | 53% | -20.8 |
| vocals | 37.1% | 13% | -6.6 |
| other | 0.3% | 5% | -25.8 |

### Song 12, `12_1-55-01_take57_score80.wav`

- Position in tape: 1:55:00, 9:16 long, 92 BPM, 11 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 50.6% | 86% | -6.7 |
| bass | 17.9% | 46% | -12.6 |
| drums | 4.5% | 21% | -14.5 |
| vocals | 27.0% | 9% | -7.1 |
| other | 0.0% | 15% | -41.2 |

### Song 13, `13_2-11-23_take66_score79.wav`

- Position in tape: 2:11:22, 2:27 long, 61 BPM, 3 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 20.2% | 96% | -18.6 |
| bass | 65.9% | 52% | -14.4 |
| drums | 0.2% | 0% | -21.9 |
| vocals | 13.8% | 3% | -7.5 |
| other | 0.0% | 100% | -44.8 |

### Song 14, `14_2-13-58_take67_score81.wav`

- Position in tape: 2:13:57, 3:12 long, 80 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 18.7% | 91% | -16.8 |
| bass | 80.7% | 88% | -13.8 |
| drums | 0.0% | 100% | -57.6 |
| vocals | 0.0% | 100% | -55.8 |
| other | 0.6% | 8% | -22.2 |

### Song 15, `15_2-19-28_take72_score76.wav`

- Position in tape: 2:19:27, 8:19 long, 125 BPM, 6 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 38.3% | 93% | -12.0 |
| bass | 58.6% | 44% | -13.9 |
| drums | 0.0% | 0% | -26.9 |
| vocals | 3.1% | 6% | -16.1 |
| other | 0.1% | 1% | -21.6 |

### Song 16, `16_2-30-17_take74_score79.wav`

- Position in tape: 2:30:16, 35:27 long, 122 BPM, 40 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 27.0% | 70% | -6.8 |
| bass | 39.5% | 78% | -11.3 |
| drums | 3.6% | 33% | -7.8 |
| vocals | 19.6% | 19% | -7.3 |
| other | 10.5% | 10% | -6.3 |

### Song 17, `17_3-06-47_take77_score80.wav`

- Position in tape: 3:06:46, 24:42 long, 128 BPM, 32 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 20.5% | 42% | -7.1 |
| bass | 41.1% | 96% | -11.9 |
| drums | 6.2% | 14% | -6.6 |
| vocals | 23.0% | 20% | -6.1 |
| other | 9.1% | 16% | -6.9 |

### Song 18, `18_3-33-28_take80_score71.wav`

- Position in tape: 3:33:27, 2:12 long, 125 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 14.2% | 73% | -12.3 |
| bass | 10.6% | 46% | -13.7 |
| drums | 5.2% | 6% | -7.9 |
| vocals | 56.8% | 20% | -6.1 |
| other | 13.3% | 17% | -6.9 |

### Song 19, `19_3-35-49_take81_score72.wav`

- Position in tape: 3:35:48, 3:50 long, 128 BPM, 5 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 89.5% | 95% | -10.1 |
| bass | 8.7% | 38% | -14.5 |
| drums | 1.3% | 10% | -16.3 |
| vocals | 0.0% | 47% | -56.2 |
| other | 0.5% | 4% | -19.5 |

## Files

Stems: `~/Projects/_outputs/band-practice-stems/<stub>/band/`
Sources: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`
