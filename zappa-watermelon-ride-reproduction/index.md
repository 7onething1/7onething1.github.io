# Watermelon In Easter Hay s35881, ride-ghost status

**LOCKED: `s35881`**, drum track 8 "Vinnie Colaiuta", tab `PRESWEEP-r7715683.gp`.
Written 2026-09-06 from a saved script set in `tools/`. Detector reconciled this pass.

## Inputs, full SHA-256

| role | bytes | sha256 |
|---|---|---|
| `PRESWEEP-r7715683.gp` | 51,234 | `687445e3371131fd87070055eb01b43984684d2b02140d0c060510799043a016` |
| `r8768414-LIVE-EXPORT.gp` | 51,028 | `5a8de7ebb7577ec8deb6db4397e302614b1df397f2c69e308202a882788abde4` |
| `RESTORED-s35881.gp` | 74,935 | `89ebaa33cf652320a0da36b7fd3827c6abda842f31d5ce25834ac03e52018ef1` |
| cymbals `.mp3` (detector source) | 21,812,387 | `68006410f6b01831bd6d41ecdee35ece5690dcd1b400f2f2da193bece7c6941e` |
| cymbals `.wav` | 96,185,118 | `84fd9fd648630c0d65945f7abe6e24994562ddf8d88960ad7dbc90722bade21b` |
| snare `.wav` | 96,185,118 | `d07d4cf6a91f1a30f0411bfe74df3d8bf52d4372a3f3378d09cd2aab99425062` |
| AI transcription `.gp` | 36,190 | `b5a69749c67fbcb5fa49bc78f94b9b0710a1db0efc0f92b0ae662bc3adf42b88` |

---

## 1. THE DETECTOR IS RECONCILED

The 3.51x threshold gap is closed. It was an operator difference, and the band was right.

| operator | definition | 80th pct of positive flux, MP3 |
|---|---|---|
| **B, the published one** | sum the band first, then take the positive first difference | **4.407** |
| A, used in my first pass | difference each bin, rectify, then sum | 14.303 |

Operator B on the MP3 across bins 2000 to 12000 Hz inclusive puts the published **4.41 at
percentile 80.01**. Operator A cancels nothing before rectifying, so it runs about 3.2 times
larger. **Every result in my earlier pass carrying threshold 15.487 came from operator A and
is withdrawn.**

`tools/detectorB.py` freezes it: stereo MP3 read float32, unweighted channel mean to mono, no
amplitude scaling, `np.hanning(1024)`, 256-sample hop, frame-start timestamps, summed rFFT
magnitude over the band, positive first difference, threshold at the 80th percentile of
strictly positive flux. A match means the **maximum** positive flux inside a +/-45 ms window
exceeds 4.41. It identifies no instrument and no discrete onset, so the phrase throughout is
**"matched the flux criterion"**.

### 1.1 Double counting is ruled out, confirming the earlier result

Under operator B, supra-threshold excursions run median 6 ms, 90th percentile 17 ms, max
81 ms, and **none exceeds 181 ms**, so none can span two 271 ms-spaced windows.

- 1,723 adjacent scored pairs, all 1,724 positions occupying distinct (bar, position) slots.
- Excursions satisfying at least one scored position: **1,479**. Satisfying more than one: **1**.

My earlier claim that 24.7 percent of ghost hits shared an excursion is **withdrawn**. It was
an artefact of operator A, whose excursions reached 1,741 ms.

---

## 2. THE COINCIDENCE RESULT UNDER THE CORRECT DETECTOR

| quantity | this reconstruction | reported |
|---|---|---|
| observed ghost | **61.2%** | 71.3% |
| observed plain | **65.9%** | 75.3% |
| per-note eligible-only null | **62.2%** (sd 0.012, 95% 0.597-0.643) | 49.0% (sd 0.013, 95% 0.465-0.517) |
| **ratio** | **0.98x** (95% 0.95-1.02) | 1.45x (95% 1.38-1.53) |

Block-preserving nulls, contiguous runs displaced together with within-block spacing kept:

| null | eligible | null mean | sd | 95% interval | ratio ghost |
|---|---|---|---|---|---|
| per-note eligible-only | 100.0% | 0.622 | 0.012 | 0.597-0.643 | **0.98x** |
| block of 4 | 98.3% | 0.623 | 0.019 | 0.586-0.660 | **0.98x** |
| block of 8 | 94.4% | 0.627 | 0.026 | 0.576-0.674 | **0.98x** |
| block of 16 | 94.1% | 0.623 | 0.031 | 0.566-0.678 | **0.98x** |

The measured association is stable across the tested per-note and block-preserving
randomisations. That is a narrow statement about the procedures tested.

### 2.1 Alignment cannot account for the gap

A rigid offset sweep from -150 to +150 ms under detector B **peaks at exactly 0 ms with
61.2 percent**. No shift improves it, so 61.2 percent is the ceiling this alignment and this
detector reach on this audio. The reported 71.3 percent sits above that ceiling, so a better
global alignment does not explain the difference.

**Two numbers reproduce exactly and two do not.** The threshold and the no-double-counting
result reproduce. The observed rate and the null mean do not, and the residual difference is
not yet located.

---

## 3. THE DEFINITION CENSUS

| definition | occurrences | AntiAccent | distinct Beat defs | bars |
|---|---|---|---|---|
| **id 431** | **1,316** | `Normal` | 9 | 1 to 102 |
| **id 432** | **408** | absent | 9 | 1 to 104 |

**id 432 is the property-identical plain counterpart.** InstrumentArticulation 15, Midi 51,
Fret 51, String 5, ConcertPitch and TransposedPitch C-1, beat Dynamic `F` on 100 percent of
occurrences, in both. Definition identity introduces no confounding property.

The 1,316 ghost occurrences are 1,316 played occurrences inheriting one AntiAccent property
from one shared reusable definition. They are not 1,316 independently encoded editorial
decisions. Their 1,316 score positions remain valid locations for acoustic measurement, and
any statement about transcriber intent carries one dominant label source.

### 3.1 The confound that survives is metric position

| position in the beat | id 432 (plain) | id 431 (ghost) |
|---|---|---|
| on the quarter-note beat | **407** | **2** |
| offbeat, slot 1 | 0 | 405 |
| offbeat, slot 2 | 1 | 456 |
| offbeat, slot 3 | 0 | 453 |

Only 2 ghosted ride notes sit on a beat, so a metric-position control is impossible here.
Ghost positions are always the offbeats immediately following a plain strike.

### 3.2 The stripping mechanism, at the definition layer

| | ride definitions | ride occurrences | drum ghost occurrences |
|---|---|---|---|
| pre-sweep `r7715683` | **2** (431 ghost, 432 plain) | 1,724 | 1,317 |
| post-sweep `r8768414` | **1** (id 418, no flag) | 1,724 | 0 |

**Definition 431 does not survive.** It is absent from the post-sweep file. The two ride
definitions were merged into a single `id 418` carrying all 1,724 occurrences and 18 Beat
definitions against 9 and 9 before, with the note table renumbered wholesale. That is an
export and import round trip rather than an attribute edit. The one extra Crash high ghost
came from `id 428`.

**Restoration consequence.** Writing AntiAccent onto id 418 would ghost all 1,724 occurrences
including the 408 that were never ghosted. Copy-on-write is mandatory: split id 418 back into
two definitions by occurrence position against the pre-sweep file, and record definition-level
and expanded occurrence-level changes separately in the ledger.

### 3.3 Ghost census reconciled by scope

| scope | pre-sweep | post-sweep live |
|---|---|---|
| whole file, all 9 tracks | **1,333** | **16** |
| track 0 "Frank Zappa", guitar | 16 | 16 |
| track 8 drums | **1,317** | 0 |
| track 8, Ride (middle) only | **1,316** | 0 |
| track 8, Crash high only | 1 | 0 |

1,333 = 1,317 + 16. The sweep removed the drum flags and left the guitar flags.

---

## 4. SPECTRAL IDENTITY OF DISPUTED POSITIONS

Reference exemplars: plain ride positions that matched the flux criterion with the nearest
anchor inside 3 s, giving **171** references. Disputed set: ghost positions at the same anchor
quality, giving **770**. Features measured on the mono MP3 in a window from 30 ms before to
180 ms after each position.

| feature | plain median | ghost median | ghost / plain |
|---|---|---|---|
| transient peak | 0.0254 | 0.0102 | **0.403** |
| attack-to-floor ratio | 4.227 | 1.480 | **0.350** |
| post-peak RMS, 30 ms | 0.0209 | 0.0072 | 0.346 |
| **decay ratio, 100-180 ms over 0-30 ms** | 0.494 | 0.656 | **1.327** |
| pre-window RMS | 0.0052 | 0.0055 | 1.049 |
| attack time | 11.5 ms | 11.1 ms | 0.969 |
| spectral centroid | 9,009 Hz | 8,138 Hz | 0.903 |
| share 9 to 16 kHz | 0.389 | 0.345 | 0.886 |
| share 5 to 9 kHz | 0.374 | 0.424 | 1.134 |

Section-matched over 12 equal sections, 9 of which carry at least 5 of each:

- **transient peak lower at ghost positions in 9 of 9 sections**
- **attack-to-floor ratio lower at ghost positions in 9 of 9 sections**
- decay ratio higher at ghost positions in 7 of 9 sections

**Reading it descriptively.** At ghost positions the cymbal band shows a much lower transient
peak, a far weaker attack relative to the local floor, a flatter decay profile and a darker
spectrum with less 9 to 16 kHz content. Those four together are what residual decay from a
preceding strike looks like, since cymbal highs shed fastest.

**The design cannot separate decay from a genuinely soft stroke.** Ghost positions are always
the offbeats immediately after a plain strike, so decay is exactly what sits there whether or
not a soft stroke was also played. No classifier accuracy is claimed, and no individual
position is adjudicated.

---

## 5. STRUCTURAL FACTS THAT STAND

- The ride part fills roughly 94 percent of available eighth-note positions under the
  corrected metric reading. The tab is extraordinarily dense regardless of per-stroke validity.
- Notated 56 BPM corresponds to a musical pulse near 112 BPM. The hat-derived working period
  is 540.8 ms, about 110.95 BPM. My measured adjacent-ride spacing is 271.1 ms, matching the
  270.4 ms eighth at that pulse. Metric equivalence and whole-performance timestamp
  equivalence stay distinct, and anchored synchronisation is required for any comparison.
- 135.2 ms is **half** an eighth at this pulse rather than a whole one. A shift of that size
  lands maximally far from every grid position, so the original shifted null tested the worst
  case instead of a random one.

## 6. ANCHOR QUALITY

`tools/align.py` recovers offset 37.590 s, scale 1.0122, effective 55.33 BPM against the
reported 37.60 s, 1.012 and 55.34 BPM, with 616 snare onsets at 1.13 per second against 615.
97 anchors survive against a reported 137. Scoring uses a piecewise-linear map through those
anchors, and the global line is diagnostic only.

"Anchor gap" means distance to the nearer bracketing anchor. 5,469 held-out tests from
deliberate thinning:

| anchor gap | n | median | 90th pct | max | over 45 ms |
|---|---|---|---|---|---|
| 2 to 5 s | 1,592 | 22.7 ms | 52.0 ms | 113.5 ms | 15.6% |
| 5 to 10 s | 1,582 | 27.6 ms | 60.7 ms | 101.6 ms | 25.5% |
| 10 to 20 s | 1,337 | 29.8 ms | 75.5 ms | 132.6 ms | 31.0% |
| 20 to 40 s | 740 | 27.0 ms | 70.9 ms | 152.0 ms | 27.7% |
| over 40 s | 218 | 40.5 ms | 87.1 ms | 150.2 ms | 45.9% |

No band keeps its 90th percentile inside the 45 ms half-window. **No precise breakpoint at
ten seconds is established**, and the filter stays exploratory. Timing support varies across
the piece and is never guaranteed at every ride position. Report anchor proximity beside every
section-level acoustic result. Section 11 carries the weakest proximity and needs the
strongest qualification.

## 7. OTHER TRANSCRIPTION, kept separate

`Unknown Artist-206 Watermelon in Easter Hay-E-112bpm-442hz-09-06-2026(1).gp` holds 596 Ride
(middle) notes. It is a separate transcription and not a revision of s35881: 279 bars against
105, 1,022 quarter notes against 472, snare on MIDI 38 with 11 events against MIDI 40 with
193, closed hat 125 against 0, kick 475 against 107. **It cannot be used to claim the sweep
removed 1,128 ride notes.** It is evidence that another process produced a much sparser ride
part, with known lane-assignment limitations.

## 8. WITHDRAWN THIS PASS, from my own earlier work

| claim | why |
|---|---|
| threshold 15.487 and every ratio resting on it | wrong flux operator, per-bin instead of band-sum |
| "24.7% of ghost hits share an excursion" | operator A artefact; under B, 1 of 1,479 |
| "the 1.45x is not reproducible at any threshold" | too broad; the detector now reproduces exactly, and the residual gap is the observed rate and null, not the threshold |
| 174 duplicate ride timestamps | rounding artefact; all 1,724 slots are distinct |

## 9. OPEN

1. The residual gap between 61.2 percent observed here and 71.3 percent reported, and between
   a 62.2 percent and a 49.0 percent null. Not located.
2. Why the anchor reconstruction reaches 97 where 137 were reported.
3. Whether any individual occurrence of definition 431 is a fresh ride strike. The spectral
   evidence is consistent with decay and cannot exclude a soft stroke.
4. Pedal hi-hat, roughly 172 events, against 6 notated.
5. Snare rebound texture, against 193 snare events carrying zero flags.

## 8. THE TWO TRACKS, RECONSTRUCTED

Run as two independent forensic problems. Nothing below uses the 97-anchor snare map to
define a search neighbourhood.

### 8.1 Numerator: five alignments built without the 97-anchor map

`chart55.47` and `chart+scale` take the tempo from the Drumnet chart. `globalfit` is offset
and scale only. `kickmap` anchors on the KICK lane against the kick stem. `crashmap` anchors
on CRASH. 240 configurations across source stem, band, flux operator, window and threshold
percentile: `out/numerator_reconstruction.csv`.

**A clamping artefact was caught and removed before it was published.** `np.interp` clamps any
event outside the anchor span onto the endpoints. The kick map spans 4.3 to 384.6 notation
seconds, leaving **390 of 1,724 ride events outside**, all piling onto two timestamps. Those
390 lifted the rate to 71.7 percent at the documented 45 ms window and briefly looked like a
reconstruction at spec. Restricted to the 1,334 events genuinely inside the span the same
configuration gives ghost 63.4 percent against a 64.7 percent null, ratio 0.98x. The crash map
leaves 982 of 1,724 outside.

**With span restriction enforced, every configuration reproducing both reported rates uses a
65 ms window.** No 45 ms configuration survives.

### 8.2 Denominator: eight nulls, detector and population frozen

Frozen at 2000-12000 Hz, band-sum, threshold 4.407, 45 ms, 123-anchor map, all 1,724 events.
Only the displacement varies. Full diagnostics in `out/denominator_reconstruction.csv`.

| null procedure | 16th phase kept | meter kept | section kept | collision | null | ratio |
|---|---|---|---|---|---|---|
| shift by whole sixteenths | 100.0% | 0.0% | 77.9% | 37.6% | 63.7% | 0.97x |
| shift by whole beats | 100.0% | 0.0% | 24.4% | 38.3% | 62.2% | 0.99x |
| bar index, position-in-bar kept | 100.0% | 56.6% | 0.2% | 39.0% | 63.1% | 0.98x |
| bar index, meter must match | 100.0% | 100.0% | 0.3% | 39.8% | 62.4% | 0.99x |
| bar index, same section | 100.0% | 100.0% | 100.0% | 0.0% | 57.4% | 1.08x |
| one offset per source bar | 100.0% | 54.5% | 0.2% | 26.5% | 63.1% | 0.98x |
| **shift by k x mean bar duration in TIME** | **2.8%** | 0.0% | 0.2% | 0.0% | **49.1%** | 1.26x |
| uniform random notation time | 3.9% | 0.0% | 8.4% | 0.0% | 51.5% | 1.20x |

**The historical 49.0 percent is reproduced to 0.1 points** by a displacement measured in time,
and its diagnostic signature is unambiguous: **sixteenth-phase preservation falls from 100
percent to 2.8 percent**. Every phase-preserving procedure lands between 62.2 and 63.7 percent.
Seed spread 0.38 points across three seeds, so the figure is stable rather than tuned.

### 8.3 The two do not share a window, and that is the whole answer

One frozen population and detector, only the window varying, with the time-shift null:

| window | ghost observed | plain observed | time-shift null | ratio |
|---|---|---|---|---|
| **45 ms, the spec** | 61.9% | 67.2% | **49.0%** | 1.26x |
| **65 ms** | **69.9%** | **74.0%** | 59.9% | 1.17x |
| historical | 71.3% | 75.3% | 49.0% | 1.45x |

The numerator matches at 65 ms. The denominator matches at 45 ms. **Taking the numerator from
the 65 ms row and the denominator from the 45 ms row gives 1.43x against the historical
1.45x.** Measured consistently at one window the ratio is 1.26x or 1.17x, never 1.45x.

**The historical 1.45x is reconstructed as a cross-window combination on top of a
phase-destroying null.** Both halves are now accounted for, and neither survives a single
consistent procedure.

## 9. THE LEDGER, and three corrections to my own earlier statements

### Correction 1: the refined map is not independently validated

**What I wrote:** that the 123-anchor refined map "agrees with the 97-anchor version at a median
difference of 0.0 ms", offered as evidence the refinement is sound.

**Why that was wrong:** the refinement searched a +/-120 to 150 ms window **centred on
predictions from that same 97-anchor map**. Agreement with the map that defined every search
neighbourhood is circular and cannot serve as independent validation. What the refinement does
show is stability under denser anchoring, which is a weaker claim.

### Correction 2: the observed-rate gap was called unlocated, and it is window width

**What I wrote:** "the residual difference is not yet located" and "the observed-rate gap is
not explained".

**Why that was wrong:** it is the match window. A 65 ms half-window gives 69.9 and 74.0 percent
against the reported 71.3 and 75.3. The documented window is 45 ms. Section 9e.

### Correction 3: "not reproducible at any threshold" was too broad

**What I wrote:** that the 1.45x "is not reproducible at any of 20 threshold and band settings".

**Why that was wrong:** the detector reproduces exactly once the flux operator is right, and
each reported figure is individually reachable. What does not reproduce is the two of them
together. Section 9f.

### The 14 unexplained anchors

137 reported minus 123 reached leaves **14 anchors unaccounted for**. They are not noise to be
rounded away. They could indicate another articulation category used as an anchor, a second
stem, a looser tolerance rule, or manual intervention, and any of those would change how the
historical map was built.

### The ledger, kept deliberately simple

| quantity | historical | reproduced | status |
|---|---|---|---|
| observed ghost rate | 71.3% | 61.9% at the 45 ms spec window | **mechanism identified** as window width; a 65 ms window gives 69.9%. Exact historical implementation unresolved. |
| null rate | 49.0% | 63.3% grid-preserving | **mechanism demonstrated** as rhythmic phase destruction; off-grid gives 52.0%. Exact historical implementation unresolved. |
| ratio | 1.45x | 0.98x | **not recovered.** The two figures need different window widths, so no single procedure yields both. |

**The 1.45x enrichment is not treated as recovered.** Numerator and denominator are tracked as
separate forensic problems, because they may come from two separate implementation choices.

## 9a. THE DISCREPANCY IS THE NULL, and its likely cause is measured

Resumed 2026-09-06. Two questions were open: why 97 anchors against a reported 137, and where
the observed and null gaps come from. Both moved.

### Anchors: 123 reachable by local-window refinement

DTW was tried first and it failed. Over a sparse impulse reference the cost is near zero
wherever both signals are quiet, so the warp slides: unconstrained it disagreed with the
validated map by a **median of 7.7 s**, and inside a +/-4 s Sakoe-Chiba band still by **2.1 s**.
The map was right and the method was wrong.

**Local-window onset refinement works.** Keeping the validated map and resetting each notated
snare inside a +/-120 to 150 ms search window reaches **123 anchors** from 97. All 122 local
slopes fall inside 0.918 to 1.103, median residual against the global line is -9 ms, and the
map agrees with the 97-anchor version at a median difference of **0.0 ms** with 81.3 percent
inside 45 ms. Withheld validation at 123 anchors: n = 40, median 20.5 ms, max 145.1 ms.
Files: `tools/align_refine.py`, `out/anchors_refined.csv`, `data/alignment_refined.json`.
The failed attempt is kept at `tools/align_dtw.py` and `out/anchors_dtw.csv`.

### Better alignment moves observed and null together, so the ratio holds

| alignment | anchors | ghost observed | plain observed | null | ratio |
|---|---|---|---|---|---|
| 97 peak-picked | 97 | 61.2% | 65.9% | 62.3% | **0.98x** |
| 123 window-refined | 123 | 61.9% | 67.2% | 63.3% | **0.98x** |
| reported | 137 | 71.3% | 75.3% | 49.0% | 1.45x |

Raising anchor density lifted the observed rate by 0.7 points and the null by 1.0 point.
**Alignment quality cannot produce the reported ratio, because it moves both terms.**

### The null is the anomaly, and a grid-breaking displacement reproduces it

The score alternates 4/4 bars of 4,286 ms and 5/4 bars of 5,357 ms, and the ride sits on a
268 ms sixteenth grid. A displacement that preserves **position within the bar** keeps
destinations on that grid. A displacement measured in **time** cannot, since no fixed interval
is a whole number of bars in both meters.

| displacement procedure | destinations | null | ratio |
|---|---|---|---|
| by bar index, position-in-bar preserved | **on grid** | 63.3% | **0.98x** |
| by k x 4 quarter notes | off grid in 5/4 | 59.5% | 1.04x |
| **by k x mean bar duration in time** | **off grid** | **52.0%** | **1.19x** |
| reported | unstated | 49.0% | 1.45x |

**Off-grid destinations depress the null and inflate the ratio, in the right direction and
close to the right size.** The measured cause is section 11c: flux at an off-grid point runs
3.11 times lower than at a notated grid slot, so a null that lands between grid positions is
sampling quieter audio.

**What this accounts for and what it does not.** The null gap is largely explained: 63.3 to
52.0 against a reported 49.0. The observed-rate gap is not: 61.9 against a reported 71.3, with
alignment ruled out as the cause. Files: `tools/null_grid_test.py`, `out/null_grid_test.csv`.

## 9e. THE OBSERVED-RATE GAP IS THE WINDOW, and the two deviations do not compound

The last open number. Detector frozen at 2000-12000 Hz, sum before differencing, threshold
4.407, 123-anchor map. Only the rule for turning a mapped position into a scored sample varies,
applied identically to observed and null.

| sampling rule | ghost observed | plain observed | null | ratio |
|---|---|---|---|---|
| exact mapped timestamp, nearest frame | 8.0% | 10.0% | 8.1% | 0.99x |
| local max within 1 frame, 5.8 ms | 13.1% | 13.7% | 13.3% | 0.98x |
| local max within 2 frames, 11.6 ms | 22.3% | 24.8% | 23.2% | 0.96x |
| local max within 10 ms | 19.7% | 19.6% | 20.3% | 0.97x |
| **local max within 45 ms, the spec** | **61.9%** | **67.2%** | 63.3% | **0.98x** |
| **local max within 65 ms** | **69.9%** | **74.0%** | 70.9% | **0.99x** |
| local max within half a sixteenth, 135.6 ms | 91.7% | 94.4% | 91.4% | 1.00x |
| local max within one sixteenth, 271.1 ms | 97.6% | 97.5% | 97.5% | 1.00x |

**A 65 ms half-window reproduces both reported observed rates**, 69.9 against 71.3 and 74.0
against 75.3, each inside 1.4 points. So the observed-rate gap is window width, and the
documented window is 45 ms.

**The ratio stays 0.96x to 1.01x at every window**, because widening the window lifts the null
by as much as it lifts the observed rate.

### Crossing the two deviations

| window | null construction | ghost observed | null | ratio |
|---|---|---|---|---|
| 45 ms, spec | on grid | 61.9% | 63.3% | 0.98x |
| 45 ms, spec | **off grid** | 61.9% | **52.0%** | **1.19x** |
| 65 ms | on grid | 69.9% | 70.9% | 0.99x |
| 65 ms | **off grid** | 69.9% | 62.5% | 1.12x |
| reported | unstated | 71.3% | 49.0% | 1.45x |

**They do not compound.** The wider window that reproduces the reported observed rate also
lifts the off-grid null from 52.0 to 62.5 percent, so the ratio falls from 1.19x to 1.12x. The
best reconstruction reached here is **1.19x**.

**The settled statement.** Each reported figure is individually reachable: the observed rate
under a 65 ms window, the null under an off-grid displacement at 45 ms. **No single consistent
parameter set produces both at once**, because the window that lifts one lifts the other.
Files: `tools/sampling_rule_sweep.py`, `out/sampling_rule_sweep.csv`,
`tools/full_reconstruction.py`, `out/full_reconstruction.csv`.

## 9f. THE 1.19x AGAINST 1.45x GAP, reconciled by measurement

The reported pair is 71.3 percent observed and 49.0 percent null. Section 9e showed the
observed figure needs a 65 ms half-window. So the question is what null reaches 49.0 percent
at that same window.

At 65 ms the observed ghost rate is 69.9 percent, so a 1.45x ratio requires a null of
**48.2 percent**. Three grid-breaking procedures were run at both windows.

| null procedure | null at 65 ms | ratio | null at 45 ms | ratio |
|---|---|---|---|---|
| shift by mean bar duration in time | 62.1% | 1.13x | 51.7% | 1.20x |
| mean-bar shift plus +/-135 ms jitter | 62.6% | 1.12x | 51.8% | 1.19x |
| **uniform random time in the span** | **62.6%** | 1.12x | **51.6%** | 1.20x |
| required for 1.45x | **48.2%** | 1.45x | 47.9% | 1.45x |

**Even a uniform random null, the most extreme grid-breaking possible, reaches only 62.6
percent at a 65 ms window.** Nothing gets near 48.2 percent there.

**The reconciliation.** The reported observed rate is reachable only near a 65 ms window. The
reported null is reachable only near a 45 ms window. **The published pair requires two
different window widths at once**, so the two figures cannot both come from one consistent
procedure. That is the whole residual, stated as a measurement rather than as an open question.

## 9b. THE EYE OVERRULES THE DETECTOR, and the chart corroborates the alignment

Read 2026-09-06 from `~/Projects/_outputs/zappa-drum-sources/06-drumnet/Watermelon-In-Easter-Hay_p1.jpg`
as a native-resolution crop of a 595x842 scan, upscaled only for viewing.

**BartoRomeo, drumnet.ru, "Watermelon In a Easter Hay", From Joe's Garage Act III Record,
As Played In Joe's Garage Record, for Solo Guitar & Drums.** Section marker `(1:20) A`.

| the chart shows | this reconstruction measured | agreement |
|---|---|---|
| tempo mark **quarter = 55.47** | snare-anchored effective **55.33 BPM** | 0.25% |
| alternating **4/4 and 5/4** within each system | 53x 4/4 and 52x 5/4 in the tab | exact |
| ride as a **continuous beamed sixteenth stream** of X noteheads | 1,724 ride occupying ~94% of eighth positions | exact |
| dynamic hierarchy written with **`>` accents** on selected notes | Dibden writes it with parentheses on offbeats | same content, two conventions |

**Two independent human transcriptions agree the ride runs continuous sixteenths.** They differ
only in how the dynamic hierarchy is marked. The detector says ghost positions match at the same
rate as other grid positions, and the eye says every grid position is played, so those two
statements agree rather than conflict. **The eye governs. The detector does not overturn either
transcriber.**

## 9c. PUBLISHED NOTATION AUTHORITY

Norman Weinberg, "Guidelines for Drumset Notation", *Percussive Notes*, June 1994, **page 20**,
section **Ghost Strokes**, plate **Ex. 11 "Parenthetical Notes for Ghost Strokes"**. Read at
400 DPI from the image-only scan, which carries no text layer.

> "It is recommended that parenthetical note heads be used to indicate ghost strokes... Ghost
> strokes written as parenthetical notes allow the use of this performance technique on **any
> type of instrument (drums, cymbals, cowbells, etc.)**"

Ex. 11 draws three parenthesised noteheads and the third is a **parenthesised X notehead above
the top staff line**, a ghosted cymbal. So the 1,316 ride ghosts in `PRESWEEP-r7715683.gp` are
standard-sanctioned notation, and the sweep removed a convention rather than a defect.

## 9d. GHOST AGAINST STACCATO, one predicate on both sides

The Montana repair converted ghosts into staccato dots, which is a substitution a count check
cannot see. Tested here with the same predicate applied to both flags in all three files.

| file | AntiAccent | Staccato | both on one note |
|---|---|---|---|
| `PRESWEEP-r7715683.gp` | 1,317 | **0** | 0 |
| `r8768414-LIVE-EXPORT.gp` | 0 | **0** | 0 |
| `RESTORED-s35881.gp` | 1,317 | **0** | 0 |

**No dot substitution happened on s35881.** The sweep deleted flags cleanly, so the restore is a
flag restoration plus the definition split, with no dots to remove.

## 10. CURRENT DEFENSIBLE CONCLUSION

The old Ride (middle) transcription is extraordinarily dense, filling about 94 percent of
available eighth-note positions. Its 1,316 ghost occurrences originate from **one shared
AntiAccent note definition** rather than 1,316 independent editorial decisions. Under the
reconciled detector on this audio with this alignment, ghost positions matched the flux
criterion at **0.98x** the rate of the tested null procedures. Section-matched spectral
measurement shows **lower transient peak and weaker attack-to-floor at ghost positions in 9 of
9 sections, with a flatter decay profile**, which is consistent with residual decay and does
not exclude a soft stroke.

Individual Ride (middle) strike validity remains unresolved. No deletion revision follows.
