# Watermelon In Easter Hay: counting the ride

Songsterr `s6857183`, revision `r8973454`, Vinnie Colaiuta drum staff. Drum work only, no guitar
transcription. Measured 2026-09-09 on MacBookPro against the Moises 15-stem separation of the 9:05
Joe's Garage master. Executes queue item `q-2026-09-09-56e7a3`.

## Headline

| Measure | Value | Note |
|---|---|---|
| held-out error | **0.84 notes/bar** | gate was under 1.00, rebuilt baseline 8.26 |
| stroke vs gap separability | **0.823** | shift null 0.505, kick positive control 0.750 |
| detections a written stroke explains | **66.0%** | 288 of 846 unexplained |
| forward over reversed audio | **0.95x** | 889 detections on the stem played backwards |

All five acceptance criteria pass. Two controls the gate never asked for say the counts are partly
right by cancellation, so no ride note is written to the tab.

## The abort condition was wrong

The relayed design said to abandon the detector and switch separators if held-out error stayed near
four notes a bar. That instruction needed its own measurement, because a counting failure and an
evidence failure look identical from outside.

The test: inside the 43 bars carrying a full ride, can any envelope tell a written stroke position
from the midpoint between two written stroke positions? 843 positions against 785 midpoints.

| Envelope | AUC | Shift null | z |
|---|---|---|---|
| SuperFlux 2-16 kHz, percussive | **0.823** | 0.505 +- 0.050 | 6.4 |
| SuperFlux 8-11 kHz, percussive | 0.814 | 0.502 +- 0.039 | 8.0 |
| plain flux 3-10 kHz, raw stem | 0.806 | 0.500 +- 0.053 | 5.8 |
| SuperFlux 5-8 kHz, percussive | 0.786 | 0.499 +- 0.035 | 8.3 |
| **kick stem positive control** | **0.750** | | |

The cymbal stem separates ride strokes from the gaps between them better than the kick stem
separates kicks from silence. Moises separation is not the limit.

## Stage one is inert, and the bleed is real anyway

| Quantity | Measured | Consequence |
|---|---|---|
| complex coherence, lead into cymbals, 2-16 kHz | 0.061 | complex subtraction impossible |
| magnitude correlation | 0.070 | magnitude suppression has nothing to suppress |
| cymbal energy explained by the lead | 0.8% | the stage is dropped |

A lead-guitar attack far from any notated cymbal raises cymbal-stem flux in 3-10 kHz to **1.75x**
the random-frame median at z 5.4. A notated ride stroke reaches **2.48x**. Guitar bleed arrives at
**70.7%** of the amplitude of a real ride stroke. The design's own fallback was taken: the guitar
measurements stay in as rejection features.

## The defect was proposal geometry

The first rebuild returned 3.35 notes/bar and a candidate AUC of 0.594, near chance. Proposals were
merged at 60 ms and labelled at a 90 ms tolerance while a sixteenth at 53-59 bpm is about 270 ms,
so neighbouring candidates were interchangeable.

| Merge | Tol | Proposals | AUC | MAE | median | p95 | Threshold position |
|---|---|---|---|---|---|---|---|
| 0.10 s | 40 ms | 1657 | 0.625 | 2.58 | 1.0 | 7.90 | 68.2% |
| 0.13 s | 40 ms | 1191 | 0.571 | 2.63 | 3.0 | 5.90 | 64.4% |
| **0.16 s** | **40 ms** | **901** | **0.748** | **0.84** | **1.0** | **2.00** | **29.4%, chosen** |
| 0.19 s | 40 ms | 846 | 0.793 | 0.84 | 1.0 | 2.00 | 0.0%, pinned |
| 0.22 s | 40 ms | 827 | 0.785 | 1.09 | 1.0 | 3.00 | 0.0%, pinned |

## Acceptance gate

| Criterion | Measured | Target | Result |
|---|---|---|---|
| held-out mean absolute count error | 0.84 notes/bar | under 1.00 | PASS |
| held-out median absolute error | 1.0 | at or near 0 | PASS |
| held-out 95th percentile | 2.00 | 2 or fewer | PASS |
| lead-guitar control false count | 32 of 843, 3.8% | under 5% | PASS |
| threshold position in its range | 29.4% | never at a boundary | PASS |

## Two controls the gate never asked for

**Cancellation.** Of 846 detections, 558 (66.0%) are explained by a written stroke within 40 ms and
288 (34.2% of 843) are not. False positives and missed strokes sum to a per-bar error of 0.84, and a
gate reading only totals cannot see it.

**Reversed audio.** The identical model and threshold on the time-reversed stem returns 889
detections against 846 forward, a ratio of 0.95x. The detector reads novelty in a whitened envelope,
not attack shape.

**A bug of mine, recorded.** The first run of that null reported 0 reversed detections and a 846x
ratio. Reversed detection times were computed by indexing the full frame-time array with
proposal-array positions, pushing every hit outside the 43 bars. The fairness check asking whether
the null could fire at all returned 889 of 901 reversed proposals above threshold.

## The disputed bars

| Bar | Tab writes | Detector |
|---|---|---|
| 17 | 0 | 21 |
| 51 | 0 | 20 |
| 87 | 0 | 22 |
| 99 | 0 | 21 |
| 101 | 0 | 22 |
| 103 | 0 | 22 |

No ride note is written to any of them. The next gate must require the matched share above about 90%
at a 40 ms tolerance and a reversed-audio ratio above roughly 3x.

## Two provenance defects

**The alignment file cannot referee the clock that built it.** Scoring the published 53-59 bpm map
against the snare anchors gives 659 ms rms while flat 56.000 gives 39 ms, which read at face value
reverses the drift finding. Those anchors were matched under a flat-56 assumption. The non-circular
test, notated kick and snare against onsets in the kick and snare stems, gives the repaired map
**0.890** at z 9.2 and flat 56 **0.573** at z 5.5, with a winning scale of exactly 1.0000.

**The 4.19 notes/bar baseline has no surviving script.** Both scripts the ledger names are absent
from all four project tool folders. A rebuilt absolute-threshold detector over the same bars scores
**8.26**. The within-session comparison is 8.26 against 0.84.

## On disk

- Ledger, entries F28 to F33: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/FINDINGS.md`
- Scripts: `~/Projects/_outputs/zappa-watermelon-ride-detector/tools/`
- Measurements: `~/Projects/_outputs/zappa-watermelon-ride-detector/data/*.json`
