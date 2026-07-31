# Illumination Ritual: a drum tab for Songsterr

The Appleseed Cast, 30 July 2026. Built from the DrumSep 5-piece split through the
rebuilt `/stems-to-guitar-pro-drums`. Bells are in. Rim clicks are not, and this page
says why.

## What exists as drumkit stems

Two Appleseed Cast songs have a full 5-piece DrumSep split (kick, snare, toms, hi-hat,
cymbals): **10 Illumination Ritual** and **09 Clearing Life**. Everything else in the
library is a Demucs `drums.wav` or a 2-bar loop. This pass does Illumination Ritual.
Clearing Life is queued rather than bulk-built.

- 118 bars at 145 BPM
- 1,674 notes written
- 25 ride bell hits
- 0 rim clicks, and that is the honest answer

## The articulation controls

A DrumSep lane is one kit piece, never one articulation. The cymbal lane holds crashes,
bow rides and bell hits together. Splitting them is where bells come from, and each split
had to survive the control that would expose it as an invention.

| Articulation | Verdict | The control, and what it measured |
|---|---|---|
| **Ride bell** (GM 53) | NOTATED, 25 | A bell must not be the crashes and must not be hi-hat bleed. Bright hits overlap the long hits **1 of 26**, and coincide with a hat-lane onset **0 of 26**. They cluster in musical runs (bars 2, 5-9, 12-18, 23-26, 30-35, 38-44, 49-52, 70). |
| **Open hi-hat** (GM 46) | NOTATED, 26 | Sustain separates at 1.256 with a score of 7.94. Placement is complementary to the bells, in the back half of the song. |
| **Rim click / side stick** (GM 37) | REFUSED, 0 | A side stick has little shell body, and so does a quiet hit. Body energy correlates with loudness at **+0.679**, and **13 of 13** low-body hits sit inside the ghost class. These are ghost notes. Notating them as side stick would be invention. |
| **Ghost notes** | NOTATED, 75 | Softest snare hits, written with the staccato dot and velocity 31, never the parentheses. |
| **Flams** | NOTATED, 88 | Same-lane pairs 10-35 ms apart, written as `GraceEffect(duration=64)`, a true 32nd. |
| **Hat / cymbal reality** | PRESENT | Air-band gate: hat 59.5% of energy in 8-16 kHz at -46.4 dB, cymbals 23.2% at -37.4 dB. Both far above the 0.5% floor, so neither lane is DrumSep hallucinating. |

## The tempo, and two wrong turns caught on the way

145 BPM was a filename prior, not an established fact, so it got tested. Two of my own
methods were broken before one worked.

- **Mean quantization error in milliseconds is a broken objective.** A finer grid always scores better, so the scan ran to the top of its range and reported **184.5 BPM**. Any metric that improves monotonically with tempo is measuring the grid, not the music.
- **Scale-free phase error with a fixed grid origin was still wrong.** Anchoring the grid at the first onset scored 145 BPM at 0.314, which is *worse* than the 0.25 a random set of times gives. The first onset is not the downbeat, so every tempo was being scored against the wrong phase.
- **Fitting tempo and phase jointly settled it.** 145.00 BPM wins on three onset sets that fail differently: all lanes 0.183, snare alone 0.186, the strongest 40% 0.187. Kick alone puts 168 marginally first at 0.175 with 145 second at 0.197. The prior was right.
- **The drums stop at 194.9 s of a 243.8 s file.** 118 bars is the real length of the drum part, not a truncation. The song has a drumless outro.

## What the file contains

| Lane | Notes | Lane | Notes |
|---|---|---|---|
| Kick (36) | 401 | Ride (51) | 386 |
| Snare (38) | 247 | Ride bell (53) | 25 |
| Closed hat (42) | 458 | Crash (49) | 26 |
| Open hat (46) | 26 | Toms (47) | 163 |

Articulation: 75 ghosts, 88 flams, 141 accents. **58 removals**, every one by a named
rule: 53 same-drum-same-slot merges, 2 crash-and-ride resolved, 2 hat pairs resolved,
1 three-hand moment resolved.

## Gate proof

```
ledger 1732 hits, 58 removed by rule (merged_same_drum_same_slot=53,
resolved_crash_ride=2, resolved_hat_pair=2, resolved_three_hand=1),
expecting 1674 notes

  PASS  every velocity on the 16-step ladder      offenders=[]
  PASS  one fixed string slot per drum family     offenders={}
  PASS  kick and side stick never share a slot
  PASS  ride is GM 51, never GM 59                ride59=0
  PASS  zero ghostNote parentheses                parentheses=0
  PASS  every requested ghost carries the dot     asked=75 dots=75
  PASS  every requested flam survived as a grace  asked=88 got=88
  PASS  per-drum counts match the event ledger    asked,got={}
  PASS  total note count matches the ledger       1674 -> 1674
  PASS  zero hat_pair / snare_rim / crash_ride / three_hand

19 passed, 0 failed   EXIT=0

negative control, the pre-fix writer on the same ledger:  8 failed, EXIT=1
```

## The one check nobody here can run

Whether Guitar Pro and Songsterr actually **draw** this is not checkable from this side.
Load the `.gp5` in the Songsterr editor with Upload, audition it against the original
audio, and look at the ride line and the bell hits before Submit. Submitting is a public
edit to your account, so that stays your call.

---

File: `~/Projects/_outputs/stems-to-guitar-pro-drums/Appleseed-Cast-Illumination-Ritual-drums-v2.gp5`

Source: `~/Projects/_outputs/drumsep-cast/10 - Illumination Ritual/drums/` (DrumSep
MDX23C 5-piece, 44.1 kHz, 243.8 s, 97.2% captured). Built with
`/stems-to-guitar-pro-drums`.
