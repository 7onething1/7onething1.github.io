# Watermelon In Easter Hay, reconciled and shipped

Four parallel sessions had four answers for one drum staff. This is the decision list and the single revision that went live.

**Live:** Songsterr `s6857183` revision `r8970744`, published, hash `v0-3-2-kXpvKWZs5NRnBy84`.

## What shipped

Sixty-three notes asked one drum to sound twice at the same instant. Every one sat in voice 1 on top of a voice-0 note that the original transcriber wrote as a single plain stroke. They came out. Nothing else on the staff moved.

- Drum staff 2,833 to 2,770
- Same-instant same-drum stacks 63 to 0
- Voice 0 identical at 1,889 notes
- 42 bars touched, 9 of 9 track names kept

## The eight decisions

| Question | Decision | What settled it |
|---|---|---|
| Which build ships | Live head, repaired in place | v10 to v13 and the chart build both read from RESTORED, so either would wipe the kit rewrite and the bar 25 fill |
| The 63 double-strikes | Removed | r7715683 writes exactly one plain stroke at all 63 positions |
| Ride ghost notation | Left as set | Brandon's own edit, accent on beat 1 with 2, 3 and 4 plain |
| 202 absent ride notes | Left absent | Cymbal stem reads 0.30x to 0.50x of the 88 bars that kept their ride |
| Coda toms, bars 95 to 104 | Withheld | Chart-tom bars beat chart-empty controls by 1.15x, under the 1.5x floor |
| Bar 25 fill | Left at 8 | Tom stem supports 8 to 9 at every threshold |
| Bar 93, 2 toms | Kept | Supported at 5% and at 0.2% of stem peak |
| Cymbal lane | No per-event action | Lane confirms at 1.46x, so no single event can be promoted |

## The defect

The earlier pass found 49 and stopped at the snare. Sweeping every drum found 12 more on the kick and 2 on the high mid tom.

| Drum | Known before | Full sweep | Removed |
|---|---|---|---|
| Snare | 49 | 49 | 49 |
| Kick | 0 | 12 | 12 |
| High mid tom | 0 | 2 | 2 |
| **Total** | **49** | **63** | **63** |

## The lineage that would have caused damage

| Build | Parent | Kick | Snare | Pedal hat | Toms | Distinct tom drums | Verdict |
|---|---|---|---|---|---|---|---|
| LIVE r8968524 | the tab | 504 | 342 | 245 | 168 | 6 | ship this |
| EXPERIMENT-v13 | RESTORED | 504 | 342 | 245 | 191 | 2 | rejected |
| CHART-TOMS | RESTORED | 107 | 193 | 6 | 185 | 4 | rejected |
| RESTORED-TEXTSAFE-v2 | ghost restore | 107 | 193 | 6 | 6 | 2 | parent only |

v13 disagrees with itself about which drum is playing. It stores identity twice, as a `Midi` property and as an `InstrumentArticulation` index, and the two disagree. Stated in both scopes, since GPIF deduplicates note definitions: **2 note ELEMENTS** disagree, referenced from **173 note INSTANCES**. Read one way its 191 toms are 45x4 and 48x187; read the other way, 41x62, 45x4, 47x111, 48x14. The two readings reconcile exactly, 62 + 111 + 14 = 187. The live head and the shipped file each return zero disagreeing elements. On a percussion staff the `Midi` property carries a pitched value and the kit index lives in `InstrumentArticulation`, stated in `tr_ledger.py:189`. (Corrected 2026-09-08: an earlier version quoted the single-lane figure as the whole story. The articulation is the field the notation renders, so its numbers are the ones to quote.)

The chart build never carried the kit rewrite, so it would have taken the kick from 504 back to 107.

## The same gates, run against the real stems

Shipped artifact `sha256 bc5ce3de02153f39`.

| Gate | Result | Detail |
|---|---|---|
| Regression, scope track 8 | PASS | 2,765 out-of-scope instances byte-identical, meters, bar count and track names unchanged, 63 in-scope changes |
| Alignment, snare stem | UNUSABLE | 115 of 342 at 50 ms. The notated snare series is near-periodic, so the rotation null has no power. Routes to a landmark test, run separately at 2 of 4, p 0.20 |
| Removed positions vs their own stem | 42 of 63 | onset within 70 ms, median 35.0 ms; 34 snare, 6 kick, 2 tom |
| Two hands, max 2 | 16 instants over | identical in baseline and shipped, so inherited |

The promotion gate blesses edits resting on stem timing and needs a CONFIRMED alignment first. This alignment is not CONFIRMED, so that gate would refuse. The 63 removals rest on provenance instead: r7715683 writes one plain stroke at all 63, which is a document fact needing no clock. Nothing here is promoted as stem-validated.

## Sixteen instants still ask for three hands

Present before this edit and after it. Bars 29, 41, 45, 49, 52, 53, 54, 55, 56, 57, 85, 89 at beats 1 and 3, each a tom under an untouched ride with the snare on the same instant. Resolving them means dropping one of three lanes, and the ride cannot be adjudicated per event at 1.46x.

## The two bad note definitions, named

| Note element | Midi property claims | Articulation renders | Referenced from |
|---|---|---|---|
| 439 | 48, hi mid tom | 47, low mid tom | 111 instances |
| 441 | 48, hi mid tom | 41, low floor tom | 62 instances |

111 + 62 = 173, and 62 + 111 + 14 = 187. CHART-TOMS is the control at 14 elements and zero disagreements.

### Four ways to read this file and get a clean wrong number

| Mistake | Returns | Why it looks fine |
|---|---|---|
| Counting note ELEMENTS as notes | 445 against an expected 191 | GPIF deduplicates |
| Joining on a reader with no note id | "2834 disagree" | every row compares against None |
| Looking for `<Property name="InstrumentArticulation">` | 0 disagreements | it is a DIRECT CHILD of `<Note>`; found on 0 of 15 reachable notes |
| Applying one track's kit table to every track | ~416 in every file | note elements are shared across tracks |

**The rule: a dual-field checker must test for DISAGREEMENT between the fields, never for a sentinel value.** The two cases do not overlap here, so a sentinel test cannot see this defect. A checker keyed on `Midi == -1` would pass this file: 0 of 15 notes read -1 in v13 and 0 of 14 in the chart build. The missing-value case and the disagreeing-value case are separate failure modes.

## Per-head tom identity: both routes run, both closed

| Route | Measurement | Floor | Verdict |
|---|---|---|---|
| Pitch, f0 of the attack | five lane-assigned drums return medians 90.7 to 95.6 Hz | separable clusters | CLOSED |
| Pan, inter-channel level | best pair 0.73x; medians order sensibly (48 +0.34, 43 +0.08, 50 -0.27) and IQRs of 0.70 to 0.85 swamp it | 1.5x | CLOSED |

Source separation blends the toms in both dimensions. It preserves that a tom was struck and when, never which one.

Source layer, checked rather than assumed: the stem source is 44.1 kHz 16-bit with 2.56% of energy above 20 kHz, so it is full-bandwidth and not lossy-derived, and a 96 or 192 kHz master adds nothing drums live in. Commercially sold stems for this album are re-recorded by session musicians. The original studio multitrack would settle it and is not publicly released.

Per-head identity is closed at a named layer rather than pending.

## Counts reconciled under one scope

Every figure is a Guitar Pro note instance on track 8, never a raw stem detection.

| Figure | Value | Scope |
|---|---|---|
| Snare, plain only | 193 | author r7715683, unchanged throughout |
| Snare, all instances | 342 | r8968524, 193 plain plus 149 restored ghosts |
| Snare, all instances | 293 | r8970744, after 49 duplicate ghosts came out |
| Distinct snare positions | 293 | identical in both revisions |
| Chart snare heads | not reportable | 5.0 px per staff space, below the 15 px floor |

The 342 against 293 gap is entirely the 49 stacked positions.

## The ride, settled on the stem

Null is the 88 bars that kept their ride, median band energy 49.2.

| Bar | Author wrote | Live holds | Cymbal energy | Against null | Verdict |
|---|---|---|---|---|---|
| 87 | 20 | 0 | 14.6 | 0.30x | pause confirmed |
| 53 | 20 | 3 | 20.2 | 0.41x | pause confirmed |
| 51 | 20 | 0 | 23.0 | 0.47x | pause confirmed |
| 17 | 20 | 0 | 24.6 | 0.50x | pause confirmed |

Bars 2, 4 and 98 to 105 fall outside the anchor span, so they carry no verdict and were left alone.

## The resolution ceiling, applied to every chart reading here

The scan underlying every chart observation in this lineage is 5.0 px per staff space. Per-head identity needs 6, a notehead count needs 15, and magnifying adds nothing.

A chart reading may say heads are PRESENT at a POSITION, and that the engraving prints filled ovals rather than x noteheads. It may never say how many, and never which drum.

Two observations were withdrawn rather than defended: a stacked-notehead reading at chart bar 20 is gone, and the chart bar 86 check survives only as "filled noteheads are present", never as four and never on a named drum.

The three-hands finding does not depend on any of this. That the 16 instants are identical in baseline and shipped is a comparison between two Guitar Pro files.

## Gates

Drum staff -63, voice 0 untouched, other eight tracks identical across 2,765 positions, only kick and snare and high mid tom changed, all 1,038 voice bars keep their duration, zero stacks remain, 137 of 137 CDATA wrappers preserved, NAMEDROP-CLEAR.

The first build went through ElementTree and lost every CDATA wrapper, which is the exact state that blanked 9 of 9 names on the original tab. It was redone as text surgery on the raw GPIF.

Source: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/RECONCILED-s6857183-Brandon-edit.gp`
