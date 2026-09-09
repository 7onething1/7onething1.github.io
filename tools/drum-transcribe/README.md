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

`selftest.py` synthesises a pattern whose every hit position and instrument is
known, runs the detector, and scores the output:

```
clean : 64/64 onsets, 0 spurious, 1.6 ms mean error, BD/SD/HH all 1.00 precision and recall
hard  : same, with timing jitter, velocity variation and a ~20 dB worse noise floor
        -> HH recall 0.97, everything else 1.00; tempo confidence drops 0.92 -> 0.54
```

**That number is not a real-world accuracy figure.** The test signal is synthetic:
the three drums occupy clean, separable bands, there is no room, no bleed, no
cymbal wash, no tuning drift. It proves the pipeline logic is correct, nothing
more. Accuracy on an actual stem is unknown until it is run on one and the output
is compared against a tab a human verified.

The `--csv` output has one row per onset with its band energies, so any
individual call the tool made can be checked against the audio.

## Reading the grid error

`grid error` is how far the onsets sit from the quantisation grid. A few ms means
the tempo is right. If it approaches a quarter of a grid step the tool prints a
warning: the tempo or subdivision is wrong and the tab should not be used.
