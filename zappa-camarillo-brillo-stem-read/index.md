# Camarillo Brillo, read against the stems

Frank Zappa, *Over-Nite Sensation*, 1973. Drum staff audit, 2026-09-09.

```
LOCKED    s187082  "Camarillo Brillo"  head r5563501, aiGenerated=true, 151 bars
OUTCOME   s187082 does not describe this recording; the matching tab is s412176
RE-AIMED  s412176  "Camarillo Brillo"  r6172310, aiGenerated=false, 122 bars
          drum staff credited "Ralph Humphrey (Drums)", the Over-Nite Sensation drummer
AUDIO     14 stems, 238.144 s, 44.1 kHz stereo, supplied by Brandon
```

## The short version

The queued job asked for a two-hands repair at five instants in s187082, bars 37 through 41, where
a ride, a snare and a low tom are written on one eighth. Those five instants are real inside that
file. The file itself has no correspondence to this performance, so removing a surface there would
have polished a tab that describes something else.

## 1. The five instants

Parsed from `s187082 r5563501` part index 3. All five sit on beat four with frets 38, 45 and 51,
meaning snare plus low tom plus ride. The count and the surfaces both match the earlier sweep.

## 2. Assets

Fourteen stems, 238.1439 s each, 44100 Hz stereo, 14 distinct SHA256 values. Kit lanes are Kick,
Snare, Toms, Hi-Hat, Cymbals and other_kit. Provenance is generated separation, so every event
carries a leakage caveat rather than the authority of a genuine isolated multitrack.

## 3. Recording identity

| Source | Claim | Implied length |
|---|---|---|
| s187082 own tempo map | 151 bars, 600.5 quarters, 132 bpm | 272.95 s |
| Songsterr sync clock for s187082 | 151 measure points, 1.84 s per bar | ~277 s |
| Brandon's stems | measured tempogram peak 120.19 bpm | 238.14 s |

At the measured tempo this recording holds about 119 bars of 4/4. The tab claims 150.

A positive control ran first, so a failure verdict would mean something. Onsets detected from the
stems themselves scored z of +23.79 on kick and +12.03 on snare against a shift null. Every
attempt to align s187082 failed: Songsterr's own clock as is, that clock rescaled, and a free
affine search. Dynamic time warping agreed, and the stems played backwards fit the tab better
than the stems played forwards.

## 4. The tab that does match

s412176 carries real personnel, Ralph Humphrey on drums and Tom Fowler on bass, both correct for
Over-Nite Sensation. The tab carries no AI flag and runs 122 bars at 120 bpm stepping to 122 bpm at
bar 10, predicting 240.33 s against 238.14 s of audio.

| Tab | Bars | AI | Real | Reversed | Gap | Shifted 97 s | Gap |
|---|---|---|---|---|---|---|---|
| s412176 | 122 | no | 0.5888 | 0.4969 | **+0.0918** | 0.4557 | **+0.1330** |
| s187082 | 151 | yes | 0.3011 | 0.3003 | +0.0008 | 0.2958 | +0.0053 |

s412176 beats its own reversed control by 0.0918 and s187082 differs from its reversed control by
0.0008. The raw gaps carry the finding, so no ratio is taken between them; a near-zero denominator
would manufacture a large number without adding evidence.

## 5. Verdict on the five instants

UNRESOLVED. No surface gets removed from s187082 on this evidence. Bars 37 through 41 cannot be
placed anywhere in this audio, so there is no timestamp at which to ask the cymbal stem whether a
fresh ride attack occurred.

The same census on s412176 returned zero three-surface instants across 1,769 note events. State it
at the width the evidence supports: the five stacks are transcription defects in s187082 because they
require impossible simultaneous stick assignments, and which component of each stack is erroneous
still needs stem-level verification.

| Measure | s187082 | s412176 |
|---|---|---|
| Bars | 151 | 122 |
| Drum note events | 2296 | 1769 |
| Distinct drum voices | 8 | 9 |
| Pedal hi-hat lane | absent | 13 events |
| Ride | 75 | 147 |
| Toms | 68 | 391 |
| Three-surface instants | 5 | **0** |

## 6. Quality of the matching tab

| Lane | Notes | Mean support | Null | z | Supported | Enrichment |
|---|---|---|---|---|---|---|
| Snare | 335 | 0.1653 | 0.0623 | +6.77 | 20.3% | 4.1x |
| Kick | 439 | 0.2777 | 0.1572 | +6.59 | 13.9% | 2.8x |
| Hi-hat | 398 | 0.2421 | 0.1223 | +4.02 | 13.1% | 2.6x |
| Toms | 388 | 0.1694 | 0.1041 | +3.51 | 10.6% | 2.1x |
| Cymbals | 182 | 0.1844 | 0.0896 | +1.95 | 6.6% | 1.3x |

Four lanes clear the reference-class threshold at the lane level. Read that precisely: these
numbers show significant aggregate correspondence between the written lane and its separated stem,
and individual questionable events remain subject to direct stem verification. A lane statistic
cannot certify a single note. Only 20.3 percent of written snares and between 10.6 and 13.9 percent
of the other written events meet the support criterion.

The cymbal lane sits under the 1.5x floor, so all 193 written cymbal events were carried into a
per-event pass. The 182 in the table is the subset that maps inside the recording; the other 11 fall
past the end of the audio.

## 7. The per-event pass, and the null that was wrong

All 193 written cymbal events went through an event-level pass. Timestamps were tightened first: 546
kick and snare landmarks pulled the median residual from -36.0 ms to -1.2 ms, 67 percent inside 50 ms.

The first per-event verdict was threshold-dominated and none of it was promoted. A gap-drawn null gave
55 of 193 supported; an eighth-grid null gave 18 of 193. Same events, same audio, same detector.

### Two claims external review knocked down, and the reruns

**Objection one: raw detector counts cannot carry an omission claim.** Control, the identical sweep
on lanes already trusted:

| Lane | Written | Detected d=0.010 | Ratio | Detected d=0.120 | Ratio |
|---|---|---|---|---|---|
| Kick | 439 | 778 | 1.8x | 458 | 1.0x |
| Snare | 335 | 538 | 1.6x | 327 | 1.0x |
| Toms | 388 | 1158 | 3.0x | 451 | 1.2x |
| Hi-hat | 398 | 1679 | 4.2x | 965 | 2.4x |
| Cymbals | 182 | 856 | 4.7x | 229 | 1.3x |

The detector overcounts on every lane. The omission claim is withdrawn. What survives is narrower:
across every tested threshold detected cymbal attacks outnumber written cymbal events, which is
consistent with substantial omission, and detector oversegmentation prevents converting that count
difference into confirmed missing notes.

**Objection two, which reversed a published conclusion: the within-bar null is biased.** Drum
positions inside a bar are not exchangeable, because beat phase drives the probability of every
surface. If the tab omits genuine events, the seven supposedly negative positions can hold real
unwritten attacks, inflating the null and punishing an incomplete tab.

The repair holds beat phase fixed: score each written note against the same eighth position in every
other bar that carries no written note of that lane there.

| Lane | Notes | Same-bar z | Verdict | Phase-preserving z | Mean rank | Corrected |
|---|---|---|---|---|---|---|
| Hi-hat | 395 | +0.24 | fail | **+13.76** | 0.688 | pass |
| Cymbals | 180 | +0.38 | fail | **+13.40** | 0.784 | pass |
| Snare | 255 | +7.39 | pass | +10.79 | 0.690 | pass |
| Kick | 418 | +5.71 | pass | +7.10 | 0.592 | pass |
| Toms | 244 | +2.16 | fail | +6.56 | 0.617 | pass |

All five lanes pass once beat phase is held fixed, and cymbals score second highest. Written cymbals
sit at the 78th percentile of their own beat position elsewhere in the song. The earlier conclusion
that this stem pack cannot adjudicate cymbal notes was an artifact of the biased null, and it is
withdrawn.

The section 6 principle survives intact and is worth keeping separate from the result. A lane-level
enrichment measures association across many observations and never certifies an individual
annotation. The pattern is an aggregate versus event-level evaluation discrepancy. The lesson is that
the event-level test needed two attempts before its null was sound.

## 8. The investigation queue, rebuilt

| State | Count | Meaning |
|---|---|---|
| Well supported, rank >= 0.80 | 91 | top fifth of its own beat position |
| Middle, 0.50 to 0.80 | 81 | ordinary for that beat position |
| **Low rank, below 0.50** | **9** | quieter than half the same-position cells, all crashes |
| Past the end of the recording | 11 | the tab's 240.33 s overrunning a 238.14 s file |
| Off the eighth grid | 1 | no comparable pool |

| Bar | Beat | Written | Time | Novelty | Pool median | Rank |
|---|---|---|---|---|---|---|
| 43 | 1.5 | crash | 84.309 s | 0.01 | 0.02 | 0.061 |
| 12 | 1.0 | crash | 22.205 s | 0.01 | 0.02 | 0.098 |
| 72 | 1.0 | crash | 140.702 s | 0.01 | 0.02 | 0.256 |
| 69 | 3.0 | crash | 135.721 s | 0.01 | 0.03 | 0.284 |
| 74 | 1.0 | crash | 144.776 s | 0.02 | 0.02 | 0.329 |
| 11 | 3.5 | crash | 21.488 s | 0.02 | 0.03 | 0.343 |
| 77 | 2.5 | crash | 151.480 s | 0.02 | 0.02 | 0.347 |
| 35 | 3.0 | crash | 68.621 s | 0.02 | 0.03 | 0.421 |
| 11 | 3.0 | crash | 21.238 s | 0.02 | 0.03 | 0.442 |

All nine are crashes and none is a ride. 177 events produced 354 audio files, named by bar and beat
so a re-ranking never needs a re-cut.

Queue: `~/Projects/_outputs/zappa-camarillo-brillo/cymbal_pass/INVESTIGATION_QUEUE.md`

## 9. Settled, open, next

**Settled.** s412176 is the Camarillo Brillo tab that tracks this recording. It carries zero
physically impossible stacks, and all five of its drum lanes localise against their own stems once
beat phase is held fixed. The five stacks in s187082 are transcription defects in that file.

**Open.** Which component of each s187082 stack is erroneous, and the nine low-rank crashes in
s412176. Whether s187082 describes some other Camarillo Brillo performance is untested here.

**Next.** Listen to the nine, isolated stem first and full kit second. Any edit goes onto a copy.

**Audit trail.** Sections 7 and 8 exist because two claims in the first published version failed
external review. The omission claim was withdrawn after a detector-calibration control, and the
cymbal adjudication verdict was reversed after the null was rebuilt to preserve beat phase.

Evidence under `~/Projects/_outputs/zappa-camarillo-brillo/`.
