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
