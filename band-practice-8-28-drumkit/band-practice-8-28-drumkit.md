# Band practice 8.28, guitar and drum kit

Two takes from the 8.28 tape separated twice. First into six instrument stems, keeping
guitar and drums. Then the drum track again into six individual kit pieces.

Live: https://7onething1.github.io/band-practice-8-28-drumkit/

## What was asked

Separate both takes, keep one or two guitars and the drums, drop vocals, keys and bass.
Then run the drum track through a second separation so the kit arrives as individual pieces.

## Sources

- `~/Music/Band-Practice/songs-8-28-LOSSLESS/13_tape2-21-16.wav` (634.1s)
- `~/Music/Band-Practice/songs-8-28-LOSSLESS/11_tape2-02-20.wav` (533.0s)

Both are mono: max|L-R| measures exactly 0.0 and correlation reads 1.0, so both guitarists
share one `guitar.wav` and no stereo split is possible.

## Method

1. Profile the mix. Song 13 measured 87.4% below 250 Hz, song 11 measured 92.6%. Both sit
   far outside the balance Demucs was trained on.
2. Tilt ahead of separation: `highpass=f=45`, cuts of 9 dB at 90 Hz and 5 dB at 200 Hz,
   lifts of 5 dB at 2.5 kHz and 7 dB at 6 kHz. No inverse tilt on the output.
3. Demucs 4.0.1 `htdemucs_6s` on the tilted audio. Keep guitar and drums.
4. MDX23C DrumSep, the aufr33 + jarredou six-stem checkpoint, on the drum stem.
   Rebuilt from a HuggingFace mirror and verified at 437,652,699 bytes.
5. Assemble the 60-second blocks with a 10 ms joint ramp, and scale any lane that
   exceeds full scale.

## Verification, all twelve lanes

| song | lane | peak dBFS | joint step | clipped samples |
|---|---|---|---|---|
| 13 | kick | -7.7 | 0.00000000 | 0 |
| 13 | snare | -1.9 | 0.00000000 | 0 |
| 13 | toms | -16.4 | 0.00000000 | 0 |
| 13 | hh | -10.4 | 0.00000000 | 0 |
| 13 | ride | -15.5 | 0.00000000 | 0 |
| 13 | crash | -7.9 | 0.00000000 | 0 |
| 11 | kick | -7.5 | 0.00000000 | 0 |
| 11 | snare | -0.3 | 0.00000000 | 0 |
| 11 | toms | -8.2 | 0.00000000 | 0 |
| 11 | hh | -12.2 | 0.00000000 | 0 |
| 11 | ride | -16.8 | 0.00000000 | 0 |
| 11 | crash | -12.8 | 0.00000000 | 0 |

Song 11's snare took a -1.28 dB gain, since the separator output ran past full scale and
PCM_24 would have clipped 34 samples.

## Where the files are

    ~/Projects/_outputs/band-practice-stems/8-28/
      song13/band/      guitar.wav drums.wav
      song13/drumkit/   kick snare toms hh ride crash
      song11/band/      guitar.wav drums.wav
      song11/drumkit/   kick snare toms hh ride crash

Colours from The Grand Budapest Hotel (Wes Anderson, 2014).
