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
separation. The channel difference measured zero going in, so the sum lost nothing.

## Results

### Song 04, `04_0-47-03_take32_score90.wav`

- Position in tape: 0:47:03, 3:39 long, 125 BPM, 4 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 33.2% | 97% | -9.4 |
| bass | 50.2% | 92% | -8.3 |
| drums | 16.4% | 88% | -13.9 |
| vocals | 0.0% | 7% | -48.9 |
| piano | 0.1% | 4% | -18.8 |
| other | 0.0% | 100% | -61.6 |

### Song 05, `05_0-55-28_take36_score82.wav`

- Position in tape: 0:55:28, 5:03 long, 143 BPM, 7 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 13.9% | 92% | -18.1 |
| bass | 85.0% | 92% | -10.0 |
| drums | 0.0% | 100% | -72.6 |
| vocals | 0.0% | 47% | -60.1 |
| piano | 1.0% | 17% | -22.5 |
| other | 0.1% | 7% | -28.9 |

### Song 06, `06_1-05-46_take41_score80.wav`

- Position in tape: 1:05:46, 10:54 long, 143 BPM, 23 sections

| Stem | Energy share | Playing | Peak dB |
|---|---|---|---|
| guitar | 18.3% | 80% | -11.6 |
| bass | 81.0% | 88% | -5.5 |
| drums | 0.0% | 82% | -64.0 |
| vocals | 0.5% | 3% | -17.0 |
| piano | 0.0% | 11% | -27.7 |
| other | 0.2% | 5% | -20.9 |

## Files

Stems: `~/Projects/_outputs/band-practice-stems/<stub>/band/`
Sources: `~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`
