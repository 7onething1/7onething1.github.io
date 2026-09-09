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

The same census on s412176 returned zero three-surface instants across 1,769 note events. The
impossible stacks belong to the AI tab, not to the performance.

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

## 7. The per-event cymbal pass

All 193 written cymbal events went through an event-level pass. Timestamps were tightened first: 546
kick and snare landmarks gave a sliding local correction that pulled the median residual from -36.0 ms
to -1.2 ms, with 67 percent of landmarks inside 50 ms.

The per-event verdict is threshold-dominated, so none of it gets promoted. A null drawn from quiet
gaps returned 28.5 percent supported. A null drawn from the eighth-note grid returned 9.3 percent
supported. Same events, same audio, same detector. Both nulls are contaminated, one by silence and one
by unwritten ride playing.

### What survives without a threshold

| Detector delta | Attacks in stem | Written | Matched 1:1 | Audio without notation | Written without support |
|---|---|---|---|---|---|
| 0.010 | 856 | 182 | 120 | 736 | 62 |
| 0.020 | 673 | 182 | 103 | 570 | 79 |
| 0.030 | 555 | 182 | 90 | 465 | 92 |
| 0.050 | 409 | 182 | 74 | 335 | 108 |
| 0.080 | 302 | 182 | 64 | 238 | 118 |
| 0.120 | 229 | 182 | 54 | 175 | 128 |

At every setting the stem carries more cymbal attacks than the tab writes. The direction is omission
rather than fabrication, and it does not depend on the threshold.

### Local contrast, every lane

For each written note, compare its own stem's novelty against the other seven eighth positions in the
same bar. A random position in the same bar is the null, so tempo, density and section loudness cancel.

| Lane | Notes | Mean within-bar rank | Null | Null p99 | z | Event-level verdict |
|---|---|---|---|---|---|---|
| Snare | 335 | 0.550 | 0.437 | 0.471 | +7.39 | stem can adjudicate |
| Kick | 439 | 0.517 | 0.436 | 0.470 | +5.71 | stem can adjudicate |
| Toms | 388 | 0.466 | 0.435 | 0.466 | +2.16 | cannot, at the p99 bar |
| Cymbals | 182 | 0.445 | 0.437 | 0.488 | +0.38 | cannot adjudicate |
| Hi-hat | 398 | 0.442 | 0.439 | 0.472 | +0.24 | cannot adjudicate |

Snare and kick pass at z above five, so the test works. Section 6 found significant aggregate
correspondence on four lanes. At event level only two of those four survive. The same stem pack that
can settle an individual snare stroke cannot settle an individual ride stroke.

## 8. The investigation queue

Every in-range cymbal event was cut to audio. 178 events produced 356 files, an isolated Cymbals
excerpt and a full-kit excerpt each, windowed 0.45 s before the written instant and 0.75 s after,
ranked worst first by within-bar novelty rank.

Nine of the fifteen worst are a crash written on beat one of a bar between 69 and 102, which is a
recognisable machine habit rather than a drummer's choice. That pattern is a lead worth hearing,
never a licence to delete.

Queue and audio: `~/Projects/_outputs/zappa-camarillo-brillo/cymbal_pass/`

## 9. Settled, open, next

**Settled.** The five instants are an artifact of a non-matching AI tab. s412176 tracks this recording
and carries zero playability violations. Its kick and snare lanes hold up at event level, at z of
+5.71 and +7.39 against a matched within-bar null.

**Open.** The 193 cymbal events stay unsettled, and the pass established why rather than guessing.
This separated Cymbals stem has no event-level discriminating power on this recording, proven by a
test that snare and kick both pass. Hi-hat and toms inherit the same limit. Whether s187082 describes
some other Camarillo Brillo performance is untested, because only this recording was available.

**Next.** Listen through the ranked queue, starting with the nine crashes written on beat one between
bars 69 and 102. The statistic has done what it can do here. Any edit goes onto a copy.

Evidence under `~/Projects/_outputs/zappa-camarillo-brillo/`.
