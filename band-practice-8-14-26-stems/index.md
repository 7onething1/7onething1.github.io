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

### Song 04, `04_0-47-03_take32_score90.wav`

- Position in tape: 0:47:03, 3:39 long, 125 BPM, 4 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 42.0% | 97% | -9.4 |
| bass | 38.2% | 90% | -9.7 |
| drums | 19.8% | 89% | -13.8 |
| vocals | 0.0% | 80% | -49.0 |
| other | 0.0% | 100% | -61.6 |

### Song 05, `05_0-55-28_take36_score82.wav`

- Position in tape: 0:55:28, 5:03 long, 143 BPM, 7 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 20.3% | 92% | -18.1 |
| bass | 79.6% | 72% | -9.6 |
| drums | 0.0% | 46% | -43.1 |
| vocals | 0.0% | 4% | -43.0 |
| other | 0.1% | 7% | -28.9 |

### Song 06, `06_1-05-46_take41_score80.wav`

- Position in tape: 1:05:46, 10:54 long, 143 BPM, 23 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 25.6% | 80% | -11.6 |
| bass | 73.1% | 66% | -8.0 |
| drums | 0.0% | 45% | -40.8 |
| vocals | 1.0% | 6% | -16.7 |
| other | 0.3% | 5% | -20.9 |

## Files

Stems: `~/Projects/_outputs/band-practice-stems/<stub>/band/`
Sources: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`
