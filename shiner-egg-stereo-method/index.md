# Reading a record the way these analyses do

**Route:** `/shiner-egg-stereo-method/`
**Built:** 2026-08-05
**Worked example:** Shiner, "The Truth About Cows", *The Egg* (2001), track 01

## What this is

Six written theory analyses were handed over as PDFs. This page extracts the method they
share, maps each analytical move onto a measurement that can be taken from audio, and
proves the mapping on one song by treating the written analysis as an answer key.

Result: **8 of 10 written claims confirmed straight from the stereo mix**, 1 partly
corroborated, 1 reported as not testable by this method.

## The source documents

| Document | Pages | Song | Audio available |
|---|---|---|---|
| The Truth About Cows, Rhythm Gtr. | 3 | Shiner, *The Egg* tr. 01 | yes, Black drive |
| Shiner, Bells and Whistles | 7 | Shiner, *The Egg* tr. 07 | yes, Black drive |
| Shiner, "Pills" | 3 | Shiner, *The Egg* tr. 10 | yes, Black drive |
| Hooray for Earth, "Say Enough" | 2 | *Racy* tr. 03 | yes, 6 stems |
| Trey's Improv on "Tweezer" | 5 | Phish jam | yes, T7 Shield, not mounted |
| Brandon Page riffs | 1 | tab sheet, no prose | n/a |

Two of the eight uploads were duplicates, confirmed by md5: Bells and Whistles and
Tweezer were each uploaded twice.

## The finding

The habit that makes these documents work is that **they read the stereo field as
structure**. "Gtr 1 (right ear), Gtr 2 (left ear)" is the premise the rest of each
analysis rests on.

That is also the one thing the existing stem pipeline destroys. Demucs six-stem
separation returns a single mono `guitar.wav`, so every observation about two parts,
about double-tracking, about one guitar playing G lydian against the other's G aeolian,
is gone before the analysis begins.

**The stereo pass has to run on the mix first, and it costs nothing:** no torch, no
model weights, no separation time.

## Measured on The Truth About Cows

- L/R correlation: median **0.650**, 10th percentile 0.447, minimum **-0.045**
  (a centre-panned mix rides above 0.95)
- Side/mid energy: **-6.82 dB**
- Tempo: **99.38 BPM**, against the written marking of 98
- Stable low-register roots: **A 48 runs, F 15**, next root down is B at 7
- Mode test: C# leads C natural by **+0.128** on the A chord and trails by **-0.125**
  on the F chord, a differential of **+0.253**, which is exactly the one note that
  separates A mixolydian b6 from F lydian

## Not settled by this method

- **Drop-D tuning.** Bass guitar occupies the same register, so a full mix cannot
  attribute a low note to an instrument. Needs a guitar-only stem.
- **The G section.** The written B minor to A minor to G minor descent reads the guitar
  parts. B and A are unambiguous in the low register, and the bass never settles on G.

## Files

- `stereo_field.py` in `~/Projects/_outputs/stereo-field-analysis/`
- `claim_test.py` in the same directory
- Measurement JSON: `cows_field.json`, `cows_claims.json`
- Split audio evidence: L, R, mid, side WAVs

## One correction made during the build

The first version of the root test averaged chroma across whole sections and reported
"the underlying harmony is A to F" as contradicted. The run-based tracker on the same
audio said A and F clearly. Two of my own methods disagreed, so the fault was mine:
averaging blurs every chord into one profile and lets passing tones outvote the roots
the music sits on. The test was rewritten to require temporal persistence, and the same
bug was fixed in the section-root test, which had been calling the B section "A".
