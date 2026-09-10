# drum-transcribe

Onset detection and drum classification for an **isolated drum stem**. Reads the
audio samples and reports what it measured.

```bash
pip install -r requirements.txt
python3 selftest.py            # ground-truth check, prints PASS/FAIL
python3 transcribe.py STEM.wav --csv onsets.csv
```

## What it does

1. Spectral-flux onset detection on a log-compressed STFT.
2. Onsets snapped to the attack in the waveform (~2 ms accuracy on the test signal).
3. Per-onset classification into BD / SD / HH by band energy, measured as the
   energy the hit *added* (window after the onset minus the window before, so the
   previous hit's ring does not count). Gates are independent, so a kick and a
   hat on the same beat both register.
4. Tempo by autocorrelation of the onset envelope.
5. Quantisation to a grid, with the fit error printed.

## What it does not do

- **It does not separate a full mix.** Feed it a drum stem. A full mix will produce
  garbage, and it will not tell you it is garbage.
- **It does not distinguish toms, ride, or crash.** Anything with snare-like
  spectral shape reads as SD; anything cymbal-shaped reads as HH.
- **It misses a hat masked by a louder snare** on the same onset when the snare is
  more than ~20 dB up in the 8-16 kHz band.
- **It does not detect ghost notes below the onset threshold**, and it does not
  infer them. A missing ghost note is missing, not invented.
- **It does not guess.** An onset whose spectrum matches no gate is reported as
  `?`, and shows up in the tab as a `?` lane.

## Verifying it rather than trusting it

Two tests, and the second is the one that matters.

### 1. `selftest.py` — synthetic, checks the pipeline logic

Synthesises a pattern whose every hit position and instrument is known:

```
clean (30 dB SNR) : 64/64 onsets, 0 spurious, 1.4 ms mean error
hard  (15 dB SNR, timing jitter, velocity variation)
both              : BD 1.00 / SD 1.00 / HH-exposed 1.00 precision and recall
                    HH-masked recall 0.60 (a hat sharing an onset with a
                    louder drum; reported separately, does not gate the test)
```

**This proves the pipeline logic is correct and nothing else.** An earlier
version of this file scored 1.00 while the tool scored **0.00** on real
hi-hats, because the synthetic hat put its energy above 8 kHz and the synthetic
kick put its energy in 110-350 Hz — neither of which real drums do. Synthetic
audio you wrote yourself will confirm whatever you already believed.

### 2. `validate_stems.py` — real audio, checks whether it actually works

```bash
python3 validate_stems.py /path/to/stem_dir [seconds]
```

Expects a directory of separated stems named `kick.mp3`, `snare.mp3`,
`hihat.mp3`, `toms.mp3`, `cymbals.mp3`. It sums them into a mix, runs the
detector on the mix, then uses the individual stems to say what each onset
really was, and scores the spectral guess against it.

Measured on four sets of separated stems in this repository, 45 s each, F1:

| stems | BD | SD | HH | unclassified |
|---|---|---|---|---|
| `jam-rebuild-song10` | 0.64 | 0.83 | 0.53 | 42 of ~130 |
| `jam-rebuild-song11` | 0.78 | 0.22 | 0.16 | 148 of ~197 |
| `jam-rebuild-song12` | 0.63 | 0.74 | 0.44 | 76 of ~210 |
| `believeyoume/asleep-in-the-trunk` | 0.65 | 0.42 | 0.85 | 20 of ~179 |

Mean F1 across all three classes and all four sets: **0.57**.

### What that means

**This is a rough first pass to be corrected by ear. It is not a tab you can
publish.** Better than half its calls are right on kick and snare; hi-hat swings
between 0.16 and 0.85 depending on the material. `song11` in particular is close
to useless — dense cymbal wash leaves no quiet window to measure a floor
against, and 75% of its onsets come back unclassified.

Two caveats that make even those numbers softer than they look:

- The ground truth is **DrumSep's separation, not a human transcription**. These
  numbers measure agreement with another model, which has its own errors.
- The source is **96 kbps mono mp3**, which discards everything above ~13.5 kHz.

### Lossless WAVs

Two lossless drum clips (44.1 kHz stereo 16-bit, full bandwidth to ~21.7 kHz)
were run for comparison:

| file | known BPM (bars / duration) | measured | unclassified |
|---|---|---|---|
| `drum_TheAlligator_bars3-6.wav` | 120.0 | 120.19 | 0 of 30 |
| `drum_ExplosionsInTheSky_bars1-4.wav` | 115.7 | 117.45 | 1 of 17 |

The tempo agreement on the first is independent: 120.0 comes from the file
name's bar count over the duration, 120.19 from autocorrelation.

**Abstention drops to near zero on lossless input, but that is not accuracy.**
There is no ground truth for these two clips — no separated stems, no verified
tab — so nothing here says the BD/SD/HH labels are right. Only the stem table
above rests on ground truth.

Placement is still unreliable: on the first file 2 of 30 onsets sit more than a
quarter of a grid step off (worst 57 ms, where a 16th note is 125 ms), and it
renders 3 bars for a clip known to be 4. The tool now says so rather than
printing a tidy tab over it.

The `--csv` output has one row per onset with its band energies, so any
individual call can be checked against the audio rather than taken on trust.

## Reading the grid error

`grid error` is how far the onsets sit from the quantisation grid. A few ms means
the tempo is right. If it approaches a quarter of a grid step the tool prints a
warning: the tempo or subdivision is wrong and the tab should not be used.

Tempo confidence on the jam stems measured 0.14-0.17, which is low. Pass
`--bpm` when you know the tempo; do not trust the measured one at that
confidence.
