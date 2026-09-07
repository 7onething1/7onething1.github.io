# Watermelon In Easter Hay: the cymbal notation does not track the cymbal stem

Built 2026-09-07 15:00 CDT. Two-direction audio check of Songsterr tab s35881.
Live: https://7onething1.github.io/zappa-watermelon-cymbal-two-way/

## The finding

- 1,778 notated cymbal events match the cymbal stem at **1.14x** chance forward and **1.27x** backward. Both under the 1.5x floor.
- The same method scores snare notation against the snare stem at **5.74x / 5.28x**, kick at 3.00x, toms at 3.67x.
- The notated cymbal lane matches the **snare** stem better (2.14x) than its own (1.14x).
- Not a ceiling artifact: headroom runs to 6.0x forward and 3.1x backward.

## What it does not license

- It does not justify leaving the author's ghost marks stripped. Provenance settles that, not audio.
- No cymbal event was added, removed or moved on the strength of this measurement.
- The upload still repairs real damage: the live tab shows all 9 track names as empty strings.

## Thresholds

| flux pct | onsets | A written->audible | A null | A ratio | B audible->written | B null | B ratio |
|---|---|---|---|---|---|---|---|
| 80 | 2478 | 0.476 | 0.444 | 1.07x | 0.382 | 0.318 | 1.20x |
| 90 | 1533 | 0.311 | 0.282 | 1.10x | 0.391 | 0.321 | 1.22x |
| 95 | 929 | 0.193 | 0.174 | 1.11x | 0.402 | 0.322 | 1.25x |
| 97.5 | 576 | 0.132 | 0.109 | 1.21x | 0.422 | 0.321 | 1.32x |
| 99 | 307 | 0.070 | 0.062 | 1.13x | 0.414 | 0.321 | 1.29x |

## Positive controls

| lane | stem | notated | onsets | A ratio | B ratio |
|---|---|---|---|---|---|
| snare  (midi 38,40) | snare | 193 | 466 | 5.90x | 5.23x |
| kick   (midi 35,36) | kick | 107 | 652 | 3.00x | 3.28x |
| toms   (midi 41-50) | toms | 6 | 569 | 3.67x | 3.45x |
| cymbal (midi 49,51) | cymbals | 1778 | 929 | 1.16x | 1.26x |

Kick is the load-bearing control: independent anchors, independent band, 3.00x.

## Negative control

| lane | vs stem | A ratio | B ratio | note |
|---|---|---|---|---|
| cymbal | cymbals | 1.14x | 1.27x | its own stem |
| cymbal | snare | 2.14x | 1.07x |  |
| cymbal | kick | 1.12x | 1.26x |  |
| cymbal | bass | 0.87x | 0.98x |  |
| cymbal | piano | 1.03x | 1.08x |  |
| snare | cymbals | 2.32x | 2.32x |  |
| snare | snare | 5.74x | 5.28x | its own stem |
| snare | kick | 0.32x | 0.37x |  |
| snare | bass | 1.28x | 1.31x |  |
| snare | piano | 1.08x | 1.16x |  |

## The submission artifact

| file | CDATA | Chord | verdict |
|---|---|---|---|
| PRESWEEP-r7715683.gp (saved original) | 137 | 8 | the reference |
| **RESTORED-s35881-TEXTSAFE-v2.gp** | **137** | **8** | **exact parity, ship this** |
| RESTORED-s35881-TEXTSAFE.gp | 136 | 7 | one CDATA and one chord short |
| r8768414-LIVE-EXPORT.gp (live tab) | 136 | 6 | two chords lost on the tab |
| RESTORED-s35881-v3-with-chord.gp | 0 | 7 | quarantined, wipes all 9 names |

The chord did not vanish through a new transcription decision. The original has 8 chord
elements, the live tab has 6, and TEXTSAFE-v2 restores both with an empty symmetric
difference on chord ids and beat-level chord references against the original.

What the upload changes against the live tab: positions 0, dynamics 0, anti-accent +1,317.

sha256: `87020f8c4243a7441db8187b4d7356b300e62b4d013787343de5ea4a0cfe27fd`

Live tab read this session: artist Frank Zappa, latest revision 8908034, all 9 track names empty.

## Method

Spectral flux, 1024-pt Hann, 256 hop, 44.1 kHz. Cymbals and snare 2-12 kHz, kick 30-180 Hz,
toms 80 Hz-3 kHz. Local maxima above the Nth flux percentile, 60 ms minimum separation.
Piecewise-linear clock through 97 accepted snare anchors, scoring restricted to the anchor
span 59.33 s to 506.08 s. 45 ms tolerance. Null is 200 circular shifts of the notated set.

Tools: `tools/cymbal_two_way.py`, `tools/lane_control.py`, `tools/cross_stem.py`.
