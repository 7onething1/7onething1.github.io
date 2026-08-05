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

## What the engraved notation added (second pass)

The staves are vector drawings and the fret numbers are outlined paths, so a text
extraction returns the annotation prose and none of the music. Rendering the pages with
PyMuPDF and reading the tab against the exact staff-line coordinates recovers the notes.

**The document form:** tablature only, no standard staff. Two systems stacked, Gtr 1
(right ear) above Gtr 2 (left ear), rhythm slashes under each, bar numbers in the left
margin, tempo and tuning declared once at the head, handwriting face throughout.

**Bar 1, the A chord**
- Gtr 1: open 5th string and 7th fret 4th string, so A2 and A3 in octaves
- Gtr 2: 7th fret 4th string and 6th fret 3rd string, so A3 and C#4
- Together: A major, root and major 3rd, no 5th

**Bar 2, the F chord**
- Gtr 1: frets 6, 5, 3 on the low string, a chromatic walk G#2 to G2 to F2
- Gtr 2: 7th fret 4th string and **5th** fret 3rd string, so A3 and C4
- Together: F, A and C, exactly as the annotation says

**The whole modal move is one finger.** Gtr 2 shifts the 3rd string from fret 6 to fret 5,
which is C# down to C natural. That single semitone is the entire difference between
A mixolydian b6 and F lydian, and it is the quantity the audio test measured at **+0.253**
with no access to the tab.

**Why the persistence filter was right.** The analyst marks G# and G as chromatic passing
tones resolving to F. The root tracker keeps only pitches held 0.6 s or longer, so both
were filtered out and the structural roots came through clean at A 48, F 15. A human
judgement about which notes carry the harmony and a duration threshold agreed on the same
bars for the same reason.

## Hazard: the text layer drops accidentals

"C#" extracts as "C" and "G#" as "G". That turns "A mixolydian b6 has a C#" into a claim
about C natural and inverts its meaning. Any pipeline reading these PDFs as prose must
render and read the pages, or it builds on wrong pitch data.

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
