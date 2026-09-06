# Watermelon In Easter Hay s35881, ride-ghost status

**LOCKED: `s35881` "Watermelon In Easter Hay"**, drum track 8 "Vinnie Colaiuta".
Written 2026-09-06 from a rerunnable script set in `tools/`. Every number regenerates from
the hashed inputs below.

## Inputs, full SHA-256

| role | bytes | sha256 |
|---|---|---|
| `PRESWEEP-r7715683.gp` | 51,234 | `687445e3371131fd87070055eb01b43984684d2b02140d0c060510799043a016` |
| `r8768414-LIVE-EXPORT.gp` | 51,028 | `5a8de7ebb7577ec8deb6db4397e302614b1df397f2c69e308202a882788abde4` |
| `RESTORED-s35881.gp` | 74,935 | `89ebaa33cf652320a0da36b7fd3827c6abda842f31d5ce25834ac03e52018ef1` |
| `RESTORED-s35881-v2.gp` | 74,935 | `89ebaa33cf652320a0da36b7fd3827c6abda842f31d5ce25834ac03e52018ef1` |
| cymbals stem `.wav` | 96,185,118 | `84fd9fd648630c0d65945f7abe6e24994562ddf8d88960ad7dbc90722bade21b` |
| snare stem `.wav` | 96,185,118 | `d07d4cf6a91f1a30f0411bfe74df3d8bf52d4372a3f3378d09cd2aab99425062` |
| AI transcription `.gp` | 36,190 | `b5a69749c67fbcb5fa49bc78f94b9b0710a1db0efc0f92b0ae662bc3adf42b88` |

Earlier drafts printed 48 of the 64 hex characters. These are the complete digests.
`RESTORED-s35881.gp` and `RESTORED-s35881-v2.gp` are byte-identical.

---

## 1. THE HEADLINE FINDING, restated at the correct layer

**The pre-sweep file contains 1,316 Ride (middle) ghost notations produced by one shared
AntiAccent-marked Note definition. It does not contain 1,316 independently encoded ghost
decisions.**

`tools/definition_census.py` reads the definition table directly.

| definition | occurrences | AntiAccent | distinct Beat defs | bars |
|---|---|---|---|---|
| **id 431** | **1,316** | `Normal` | 9 | 1 to 102 |
| **id 432** | **408** | absent | 9 | 1 to 104 |

Those two definitions produce every one of the 1,724 ride occurrences.

**id 432 is the property-identical plain counterpart.** Every stored property matches id 431
apart from the AntiAccent element itself.

| property | id 431 | id 432 |
|---|---|---|
| InstrumentArticulation | 15 | 15 |
| Midi | 51 | 51 |
| Fret | 51 | 51 |
| String | 5 | 5 |
| ConcertPitch / TransposedPitch | C-1 | C-1 |
| beat Dynamic on every occurrence | `F` (1,316 of 1,316) | `F` (408 of 408) |
| **AntiAccent** | **`Normal`** | **absent** |

So definition identity introduces no confounding property. The 1,316 occupied score
positions remain 1,316 real positions for acoustic measurement. Label provenance has one
dominant source, so any claim about transcription intent carries far less replication than
the occurrence count suggests.

### 1.1 The confound that does survive is metric position

| position in the beat | id 432 (plain) | id 431 (ghost) |
|---|---|---|
| on the quarter-note beat | **407** | **2** |
| offbeat sixteenth, slot 1 | 0 | 405 |
| offbeat sixteenth, slot 2 | 1 | 456 |
| offbeat sixteenth, slot 3 | 0 | 453 |

Bars 1, 2, 12, 40 and 92 print the same shape. Ride plain on the beat, ride ghosted on the
three offbeat sixteenths. Two events out of 1,724 break the rule.

The definitions are property-identical and their usage is metrically segregated. Ghost
status and metric position stay inseparable in this tab, and only 2 ghosted ride notes sit
on a beat, so a metric-position control is impossible here.

---

## 2. THE SWEEP MECHANISM, established structurally

| | ride definitions | ride occurrences | drum-track ghost occurrences |
|---|---|---|---|
| pre-sweep `r7715683` | **2** (431 ghost, 432 plain) | 1,724 | 1,317 |
| post-sweep `r8768414` | **1** (id 418, no AntiAccent) | 1,724 | 0 |

**Definition 431 did not survive with its flag stripped. It does not exist in the
post-sweep file at all.** The two ride definitions were merged into a single definition
id 418 carrying all 1,724 occurrences and 18 distinct Beat definitions, against 9 and 9
before. The whole note table was renumbered, which is the signature of an export and import
round trip rather than a surgical attribute edit.

The one additional Crash high ghost came from **definition id 428**, 1 occurrence.

### 2.1 What this means for restoration

Writing AntiAccent onto id 418 would ghost **all 1,724** occurrences, including the 408 that
were never ghosted. **Copy-on-write is mandatory.** The repair has to split id 418 back into
two definitions by occurrence position, matched against `PRESWEEP-r7715683.gp`, and the
repair ledger has to record definition-level changes and expanded occurrence-level changes
separately. That distinction is what prevents a second mass edit.

---

## 3. GHOST CENSUS, reconciled by track and scope

Three figures circulate. All three are correct at different scopes.

| scope | pre-sweep | post-sweep live |
|---|---|---|
| **whole file, all 9 tracks** | **1,333** | **16** |
| track 0 "Frank Zappa", guitar | 16 | 16 |
| **track 8 "Vinnie Colaiuta", drums** | **1,317** | 0 |
| track 8, Ride (middle) lane only | **1,316** | 0 |
| track 8, Crash high lane only | 1 | 0 |
| tracks 1 to 7 | 0 | 0 |

1,333 = 1,317 + 16. The sweep removed the 1,317 drum-track flags and left the 16 guitar
flags untouched. Both `RESTORED-s35881.gp` files carry 1,333 again.

---

## 4. THE 1,724 AGAINST 596 QUESTION, closed

| | `PRESWEEP-r7715683.gp` | `Unknown Artist-206 Watermelon...gp` |
|---|---|---|
| tracks | 9, drum track 8 "Vinnie Colaiuta" | 3, drum track 1 "Drums" |
| bars | 105 | 279 |
| meters | 53x 4/4, 52x 5/4 | 230x 4/4, 48x 2/4, 1x 6/4 |
| tempo | 56 BPM, one automation | 135 then 110 BPM, two automations |
| total quarter notes | 472 | 1,022 |
| notation span | 3.75 to 500.36 s | 40.89 to 545.71 s |
| drum note instances | 2,091 | 1,428 |
| Ride (middle) | 1,724 | 596 |
| snare lane | Electric Snare MIDI 40, 193 | Snare MIDI 38, 11 |
| Hi-Hat closed | 0 | 125 |
| Pedal Hi-Hat | 6 | 0 |
| Kick | 107 | 475 |

Five facts each rule out flag removal on their own. The snare lane changes MIDI number and
drops from 193 to 11. Closed hat goes from 0 to 125. Kick rises from 107 to 475. The bar
grid more than doubles. The notation spans start 37 seconds apart. Removing AntiAccent
preserves note instances and cannot do any of that.

**Verdict: two independent transcriptions of two different renderings.** Deletion, rebar and
flag stripping are all excluded. This item is closed and needs no audio work.

---

## 5. DETECTOR SPECIFICATION, stated completely

Earlier prose left the match rule underdetermined. This is the rule the scripts implement.

| element | definition |
|---|---|
| audio | one channel, the arithmetic mean of the two stem channels, float in [-1, 1] |
| window | `np.hanning(1024)`, applied unnormalised |
| hop | 256 samples at 44,100 Hz = 5.805 ms |
| magnitude | `abs(rfft(frame * window))`, no scaling by NFFT or by window sum |
| band | bins with centre frequency inside the stated range, inclusive |
| flux | `d = mag[k] - mag[k-1]`, negatives set to zero, then **summed** (L1) over band bins |
| frame 0 | previous frame taken as zeros, so `flux[0] = 0` |
| threshold | a percentile of the flux values that are strictly positive |
| **match** | **presence: any single frame inside +/-45 ms whose flux exceeds the threshold** |

**The match rule is presence, not a local maximum and not a separately identified onset.**
Consecutive frames from one flux excursion can therefore support a match, and one broad
excursion can serve more than one window. Section 8 measures that directly. Under this rule
the correct description of a positive is "matched the flux criterion", never "an onset was
detected".

### 5.1 The published threshold 4.41 is recovered, and its documented band is wrong

17 processing variants were tested against the 3.51x gap: channel aggregation, integer
against float scaling, three window normalisations, four magnitude scalings, L1 against L2
aggregation, percentile population, resampling and five frequency bands.

**One variant lands on the published number. A 2000 to 5000 Hz band gives 4.389.** In that
band 4.41 sits at the 80.1st percentile of positive flux, agreeing with the written rule. In
the documented 2000 to 12000 Hz band the same 4.41 sits at the 41.9th percentile.

The published threshold is real. The band printed beside it is wrong.

---

## 6. ALIGNMENT, locked and exposed

The clock model used for scoring is **piecewise-linear through the accepted snare anchors**,
`np.interp` on (notation seconds to stem seconds). The global (offset, scale) line seeds
anchor matching and supplies the residual used to prune mispairings. **No ride event is
scored against the global line.**

`tools/align.py` recovers offset 37.590 s, scale 1.0122, effective 55.33 BPM against the
published 37.60 s, 1.012 and 55.34 BPM. The snare picker returns 616 onsets at 1.13 per
second against the published 615. 97 anchors survive a robust prune. 96 segments carry local
slopes from 0.959 to 1.054. Residual scatter against the global line is 39 ms.

`out/alignment_spec.json`, `out/anchors.csv`, `out/segments.csv` and
`out/ride_scoring_times.csv` carry every anchor pair, residual, interpolation segment and
scoring timestamp.

### 6.1 Anchor gap, defined once

**"Anchor gap" means the distance from a position to the nearer of the two anchors that
bracket it**, `min(t - lo, hi - t)`. Validation and filtering both use that definition, in
`tools/anchor_sensitivity.py` and `tools/ride_analysis.py`. It is not the interval between
the surrounding anchors, which would be roughly twice as large.

### 6.2 Alignment error against anchor gap, from 5,469 held-out tests

Withholding every third anchor from a dense set never creates a large gap, so it cannot
measure error at 10 to 20 s. Deliberate thinning at 8 levels produced 5,469 held-out tests.

| anchor gap | n | median | 90th pct | max | share over 45 ms |
|---|---|---|---|---|---|
| 2 to 5 s | 1,592 | 22.7 ms | 52.0 ms | 113.5 ms | 15.6% |
| 5 to 10 s | 1,582 | 27.6 ms | 60.7 ms | 101.6 ms | 25.5% |
| 10 to 20 s | 1,337 | 29.8 ms | 75.5 ms | 132.6 ms | 31.0% |
| 20 to 40 s | 740 | 27.0 ms | 70.9 ms | 152.0 ms | 27.7% |
| over 40 s | 218 | 40.5 ms | 87.1 ms | 150.2 ms | 45.9% |

Degradation is gradual. **No band keeps its 90th percentile inside the 45 ms detector
half-window**, so alignment error contributes misses everywhere, including the best-anchored
regions. The distance filter stays exploratory, and a 10 s cutoff does not establish reliable
performance across the region it keeps.

---

## 7. THE COINCIDENCE RESULT DOES NOT REPRODUCE

`out/threshold_sweep.csv` carries the full curve: 20 threshold and band combinations from the
42nd to the 97th percentile, with observed rate, null mean, null 95 percent interval and
ratio at every point. One shared pool of 200 draws is reused across the curve, so movement
along it is detector movement.

| band | threshold | percentile | ghost observed | ghost null | ratio |
|---|---|---|---|---|---|
| 2000-12000 | 4.410 (published) | 41.9 | 80.7% | 82.0% | **0.98x** |
| 2000-12000 | 15.487 (its own 80th) | 80.0 | 53.6% | 55.0% | **0.97x** |
| 2000-5000 | 4.410 (published) | 80.1 | 48.2% | 48.5% | **0.99x** |
| 2000-5000 | 4.389 (its own 80th) | 80.0 | 48.3% | 48.7% | **0.99x** |

**The ghost ratio stays inside 0.97 to 1.05 at every one of the 20 settings.** Recovering the
4.41 threshold in its consistent band does not raise it, so the threshold discrepancy is not
the source of the 1.45x.

### 7.1 Three scramble procedures agree on the ratio and disagree on the spread

The original 20-draw table applies **one** bar displacement per draw. The later procedure
samples a displacement **per note**. Both were run, plus a collision-free per-note variant.

| procedure | eligible | null mean | sd | 95% interval | ratio ghost |
|---|---|---|---|---|---|
| RIGID, one shift per draw | 69.8% | 55.1% | 5.70 | 47.6-63.7% | **0.97x** |
| PER-NOTE | 100.0% | 55.0% | 1.28 | 52.4-57.7% | **0.97x** |
| PER-NOTE collision-free | 99.6% | 54.8% | 0.31 | 54.2-55.4% | **0.98x** |

Band 2000 to 12000 Hz at its 80th percentile. The 2000 to 5000 Hz band gives 0.99x, 0.99x
and 0.98x. The mean is stable across procedures and the spread is not, which is the
dependence structure showing itself.

**What the 95 percent interval is.** It is the 2.5th to 97.5th percentile of the null hit
rate across randomisation draws. It describes variability under the randomisation only. It
carries no uncertainty from alignment, detector validity, extraction quality or recording
identity.

### 7.2 Meter eligibility, audited

A position at or beyond 4.0 quarter notes exists only in 5/4 bars. **200 of 1,724 ride notes
(11.6%) sit in that region and are ineligible for every 4/4 destination.** Across all 106
legal shifts, 64.2% of (note, shift) pairs land on an existing position. Eligibility checks
meter and the anchored span together. Instrumentation, arrangement and local cymbal activity
stay uncontrolled.

### 7.3 The per-note scramble collides

Each note drawing independently means two notes can land in the same bar at the same
position, sharing one timestamp and one verdict. **35.8% of scrambled notes collide**, stacks
up to 7 deep, leaving about 1,100 effective positions. The rigid procedure is a translation
and cannot collide. The collision-free variant rejects occupied slots.

---

## 8. SHARED-EXCURSION DEPENDENCE, measured

Contiguous supra-threshold flux runs were labelled and counted. At the 2000 to 12000 Hz
80th percentile there are 2,559 excursions, median duration 12 ms, 90th percentile 52 ms,
max 1,741 ms. One sixteenth is 271 ms, so an excursion longer than 181 ms can serve two
consecutive ride windows. **143 excursions (5.6%) are that long.**

| set | hits sharing an excursion, observed | same, scrambled |
|---|---|---|
| ghost | **24.7%** | **71.0%** |
| plain | **11.3%** | **64.8%** |

The naive hit rate is blind to this. Distinct excursions per note runs 0.432 observed against
0.293 scrambled, a ratio of 1.47x, which reflects the scramble's clustering rather than an
acoustic property of the notated positions.

---

## 9. THE METHOD DETECTS A REAL SIGNAL, so the negative is informative

An offset sweep from -300 to +300 ms, with the snare as a positive control.

| set | peak | floor | shape |
|---|---|---|---|
| notated snare against the snare stem | 65.3% at -40 ms | 15.0% | sharp, centred near zero |
| plain ride against the cymbals stem | 62.5% at -20 ms | 24.0% | localised near zero |
| ghost ride against the cymbals stem | 56.2% at -20 ms | 35.3% at -180 ms | periodic at about 271 ms |

The control rises more than fourfold and peaks where it should. Plain ride positions show a
real localised peak. Ghost ride positions rise again at plus and minus 271 ms, one sixteenth
at the measured tempo, so their curve tracks the density of the sixteenth grid.

### 9.1 Miss taxonomy

One sixteenth measures 271.1 ms and half a sixteenth measures 135.6 ms. Beyond half a
sixteenth the nearest attack belongs to a neighbouring grid slot.

| cause | ghost, 611 misses | plain, 161 misses |
|---|---|---|
| timing error, 45 to 136 ms | 269 (44.0%) | 94 (58.4%) |
| neighbouring slot, 136 to 271 ms | 263 (43.0%) | 47 (29.2%) |
| no attack within one sixteenth | 79 (12.9%) | 20 (12.4%) |
| median distance to nearest attack | 166 ms | 113 ms |

**Correction to a figure carried in the brief.** 135.2 ms is half a sixteenth at this tempo
rather than a whole one. A shift of that size lands a note maximally far from every grid
position, so the original shifted null tested the worst case instead of a random one.

---

## 10. WITHDRAWN

| claim | source | why it falls |
|---|---|---|
| 1.70x, null 42.0% | brief, superseded first pass | fallback contamination, 17.2% of destinations reverted |
| **1.45x, null 49.3%** | evidence package s3 | not reproducible at any of 20 threshold and band settings, or under any of 3 scramble procedures; every result lands at 0.95x to 0.99x |
| filtered 1.55x at 10 s | evidence package s4 | filtered reruns give 1.00x to 1.05x |
| on-beat 297 ghost, 93 plain | evidence package s5 | the tab holds **2** on-beat ghost notes |
| sign test 5 of 6 on-beat sections | evidence package s6 | rests on that impossible partition |
| sign test 12 of 12 sections | evidence package s6 | recomputed as **9 of 12**, one-sided p = 0.073, two-sided p = 0.146 |
| slot table, 257 plain and 152 ghost on the beat | ghost audit s2 | notation gives 407 plain and 2 ghost |
| band 2000-12000 Hz beside threshold 4.41 | evidence package s0 | inconsistent; 4.41 is the 80th percentile of 2000 to 5000 Hz |
| "1,316 separate editorial judgments" reading | carried in the brief | one AntiAccent element on definition 431 |

## 11. HISTORICAL, not reproducible

Kept separate because no script on disk regenerates them.

- **137 anchors, split 91 fit and 46 withheld.** The reconstruction reaches 97 and saturates
  near 116 even at a 250 ms acceptance window. A different extraction must have existed.
- **Band medians 18.1, 16.9 and 70.4 ms.** The 70.4 ms figure is contradicted by 1,337
  thinning tests giving 29.8 ms.
- **Max withheld error 107.7 ms across 46 anchors.** The reconstruction gives 32 withheld
  points, median 27.3 ms, max 55.6 ms, 6 over 45 ms, none over 135.2 ms.
- **1,626 scored, 98 outside the span.** All 1,724 map inside 59.33 to 506.08 stem seconds.

## 12. OPEN

1. Whether any individual occurrence of definition 431 marks a struck ride attack. The file
   structure supplies one labelling decision, and the audio supplies no verdict.
2. Whether the flux matches are fresh attacks, residual decay or extraction artefacts.
3. Whether the AI transcription's audio rendering is the intended performance. The edit
   difference is disclosed and the alignment evidence is not yet built.
4. The 174 duplicate timestamps inside the observed 1,724. Cause not identified.
5. Pedal hi-hat, roughly 172 events, confirmed missing against 6 notated.
6. Snare rebound texture, confirmed missing against 193 snare events carrying zero flags.

## 13. WHAT THIS SUPPORTS

Under the detector, alignment and null procedures documented above, **positions occupied by
occurrences of AntiAccent-marked definition 431 matched the flux criterion at 0.95x to 0.99x
the rate of randomised eligible positions.** No configuration reaches the published 1.45x.

The ghost flag is predicted by metric position at 99.9 percent, and its 1,316 occurrences
inherit one AntiAccent element, so the file establishes neither independent per-stroke
adjudication nor a dynamics contrast that can be separated from the beat.

No deletion revision follows. Ben Dibden1's notation remains a transcriber's reading of the
record, and nothing measured here overturns it.

## 14. FILES

| artifact | path |
|---|---|
| GPIF instance extractor | `tools/gpif_events.py` |
| definition census | `tools/definition_census.py` |
| onset function | `tools/onsets.py` |
| alignment | `tools/align.py`, `out/alignment_spec.json` |
| anchor sensitivity | `tools/anchor_sensitivity.py` |
| threshold and band sweep | `tools/threshold_sweep.py`, `out/threshold_sweep.csv` |
| scramble variants | `tools/scramble_variants.py`, `out/scramble_variants.csv` |
| shared-excursion check | `tools/excursion_taxonomy.py`, `out/excursion_taxonomy.csv` |
| collision-free null | `tools/corrected_null.py`, `out/corrected_null.csv` |
| taxonomy and sections | `tools/final_measures.py` |
| anchors, segments, times | `out/anchors.csv`, `out/segments.csv`, `out/ride_scoring_times.csv` |
