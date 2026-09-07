# FINAL VALIDATION, Keep It Greasey s604777

Frank Zappa, *Joe's Garage*. Songsterr tab **r8852151** by Ben Dibden1, part 8
"Vinnie Colaiuta", **248 bars, 4,948 drum events, 629 ghost flags**. Re-pulled and
re-verified at the start of this pass and again at the end. **Untouched.**

## Headline

Six independent procedures now place bar 102's downbeat between **197.88 and 198.20 s**,
beside the printed 3:18 marker. One of them, `18a2dd`, passed a gate written down before
it ran. The drum lanes then tested that map from outside, and **all five prefer a window
slid one bar later**, which disqualifies it for placing any individual note.

**Repairs applied: 0.** The reason is recorded per finding in `CHANGELOG.json` and it is
policy plus evidence, never omission.

## Events checked, by lane

| Lane | Notated | Isolated stem | Detected onsets | Two-direction result |
|---|---|---|---|---|
| kick | 1,311 | yes | 1,343 at delta 0.03, 1,324 at 0.12 | count agrees within 2.4%, surplus 32 |
| snare | 1,423 | yes | 1,624 at 0.03, 1,426 at 0.05 | count agrees within 3 events at delta 0.05 |
| hi-hat closed, open, pedal | 1,156 | yes | 1,482 at 0.03, 1,102 at 0.08 | notated count sits between two settings |
| ride, crash, bell, splash, china | 543 | yes | 875 at 0.03, 541 at 0.08 | notated count sits between two settings |
| toms, five lanes | 493 | yes | 1,154 at 0.03, 456 at 0.12 | stem is contaminated, see below |
| GM 39 clap on the snare line | 21 | shares the snare stem | | intent unresolved |
| GM 65 on the kick line | 1 | shares the kick stem | | encoding slip, see `KIG-M001` |
| **total** | **4,948** | | **9,757 rows in `stem_onsets.csv`** | |

Every lane the file uses is covered. The earlier lane census in the project record listed
fifteen lanes and 4,926 events. **It omitted GM 39 and GM 65, which is 22 events.**

## What each verdict rests on

**Direct onset evidence, isolated stem, passage level: 4,926 events.** Every kick, snare,
hat, cymbal and tom event belongs to a lane whose matching stem was detected across the
whole song and adjudicated by two tests that need no alignment.

**Direct onset evidence, instance level: 0 events.** No individual notated event was
matched to an individual detected onset, because the anchor does not survive its own
external check.

**Grid energy: 0 events.** Every kit lane has an isolated stem here, so the weaker route
was never needed.

**Mixed-stem evidence only: 0 events.** The `other_kit` stem carries 3,279 onsets at a
median peak of -46.23 dB and was used for nothing.

**Bar-level counts: 6 bars scored, 0 surviving.** Bars 130 to 134 and bar 101 fell inside
the 14.0 s where the gated map holds. The five-bar run then failed the bar-shift check.
Bar 101 has no neighbour inside the covered region, so it cannot be shift-tested.

## The two tests that need no anchor

**Valley.** A stem carrying two real dynamic populations has a bimodal peak-dB histogram.

| Lane | Valley | Dip | Reading |
|---|---|---|---|
| kick | none | | one population, no quiet class |
| snare | **-18.63 dB** | 0.302 | two populations |
| hat | -28.74 dB | 0.009 | one mode with a quiet tail |
| cymbal | -40.17 dB | 0.041 | one mode with a quiet tail |
| tom | -35.49 dB | 0.446 | two populations |

The snare valley at -18.63 dB reproduces the 2026-09-06 arbitration's valley at -19 dB
from a fresh detection run.

**Grid.** Do the events land on a sixteenth at the measured 136.7 BPM? The baseline is
the phase-uniform rate 2*tol/g, which is 0.4557 at 25 ms tolerance. A jitter null lands
at 0.433 to 0.491, so the two baselines agree.

| Lane | Notated-count set | Surplus set |
|---|---|---|
| kick | 1.889x | **1.646x** |
| snare | 1.887x | **1.501x** |
| hat | 1.694x | 1.369x |
| cymbal | 1.782x | 1.223x |
| tom | 1.289x | **1.706x** |

Kick and snare surpluses clear 1.5x. Hat and cymbal surpluses do not, so those two
lanes' extra detections read as separator residue. **The tom row is inverted**: its
loudest 493 detections are less grid-locked than its quiet 661, which is what a
contaminated stem looks like and is why no tom claim is made here.

## Score-internal coherence, and its null

The file stores loudness twice, as a ghost bracket and as a sticky beat dynamic.
Resolving the dynamics in notated order:

| | ppp | pp | p | mp | mf | f | ff | fff |
|---|---|---|---|---|---|---|---|---|
| **629 flagged** | 12 | 94 | 376 | 33 | 114 | 0 | 0 | 0 |
| **794 unflagged** | 0 | 0 | 3 | 10 | 754 | 18 | 4 | 5 |

Mean dynamic rank 2.227 against 4.031, a gap of **1.804 ladder steps**. Mann-Whitney
**z = -30.58, effect A = 0.0907**.

Within-bar spacings: the flagged set sits 1 or 2 sixteenths apart on **62.89%** of its
gaps, the unflagged set on 35.88%. Permuting the ghost label among snare events **inside
each bar**, 2,000 draws, gives a null mean of 0.5391 and a 95th percentile of 0.5651.
Observed is **1.167x** the null with **0 of 2,000 draws** reaching it. The ratio is
modest and the separation is certain.

The 2026-09-06 stem arbitration found the quiet population at 1 and 2 sixteenths and the
loud at 3 and 5. The notation says the same thing from its own side, with no alignment
between them.

## The anchor, four procedures run this pass

*Bar numbers in this section are read from the Songsterr part JSON for revision 8852151, saved at `raw/8.json` and inventoried in `score_event_inventory.csv`.*

**Whole-song kick-sequence DTW.** Criteria fixed in `PREREGISTRATION_kick_dtw.md` before
the run. Coverage 88.5% within 50 ms PASS. Slope 0.9938 to 1.0257 against a declared
0.98 to 1.02 FAIL. Held-out cymbal 52.6% against 18.8% chance, **2.80x**, PASS. The
leave-one-block-out criterion was **invalid as written**: fixed-endpoint DTW forces the
remaining score across the same audio, which is why it reported 60 to 87 second
disagreements. **Verdict: fails, 2 of 4.**

**Split-half independent fits.** Two maps fitted on overlapping halves disagree by
**11.6 s** across their 60 s overlap, with a range of only 441 ms, so one fit has slipped
by a near-constant lag rather than warping differently. At 2.7 kick onsets per second
that lag is about 31 events, close to the 32-event surplus. **Verdict: fails.**

**`18a2dd`, slope-gated chroma DTW.** Criteria fixed in `PREREGISTRATION_18a2dd.md`
before the run: the [0.98, 1.02] slope gate declared in advance, three band radii, three
windows, nine cells of nine runs.

| Criterion | Declared | Observed | |
|---|---|---|---|
| within-cell stability | 7 of 9 cells under 100 ms | **9 of 9**, ranges 0 to 23.2 ms | PASS |
| across-cell agreement | medians span under 100 ms | **0.4 ms** | PASS |
| not a band artifact | every offset under 0.60 of its band | max 0.427 | PASS |
| survivorship | at least 4 of 9 runs kept per cell | 4 or 5 | PASS |

**Verdict: passes all four.** Bar 102's downbeat maps to **197.880 s**.

**`04ae20`, the three parts that were skipped.** A 13-block local map needed landmarks
those parts do not have, so they were unevaluable and never a verdict.

| Part | Stem | Landmarks | Model | Held out | Chance | Over |
|---|---|---|---|---|---|---|
| Frank Zappa solo | lead | 17 | constant | 0.875 | 0.429 | **2.04x** |
| Ike and Denny harmonies | backing_vocals | 20 | constant | 0.900 | 0.960 | 0.94x |
| Warren Cuccurullo part 1 | rhythm | 6 | constant | 0.000 | 0.411 | 0.00x |
| Arthur Barrow, control | bass | 183 | affine | 0.495 | 0.307 | 1.61x |
| Ike Willis, control | vocals | 27 | affine | 0.615 | 0.688 | 0.89x |

The lead part clears, which gives the second passing external source that `c1d6d3` said
it lacked. The two then disagree: lead puts bar 102 at **198.197 s** and bass at
**200.870 s**. The harmonies row is **unevaluable**, since its chance rate of 0.960
leaves no room for a result. Part 1's offset hit the -3.0 s search boundary on six
landmarks and is a search-width report.

**`02a84f`, the calibrated null.** The 1.5x-over-chance rule compares an observed rate to
an analytic baseline and says nothing about what the fitter manufactures on its own. Each
draw destroys the correspondence by IOI shuffle or by time reversal, then reruns the whole
procedure, train and test split included.

| Source | Observed | IOI-shuffle p95 | Reverse p95 | Null max | p |
|---|---|---|---|---|---|
| Frank Zappa solo | 1.750x | 1.458 | 1.458 | 2.041 | **0.0283** |
| Arthur Barrow bass | 1.826x | 1.325 | 0.537 | 1.540 | **0.0000** |
| Ike Willis vocals | 1.231x | 1.119 | 1.231 | 1.454 | 0.0533 |
| Peter Wolf wurlitzer | 0.459x | 2.294 | **3.670** | 4.588 | 0.9200 |
| Warren Cuccurullo part 7 | 0.992x | 0.975 | 0.631 | 1.172 | 0.0250 |

**The 1.5x rule is not calibrated.** On the piano source the offset scan manufactures
3.670x from scrambled data. Part 7's p of 0.0250 sits beside an observed ratio of 0.992,
which is the baseline itself, so a small p there carries no alignment signal.

## Why the passing gate still does not place a note

*Bar numbers in this section are read from the Songsterr part JSON for revision 8852151, saved at `raw/8.json` and inventoried in `score_event_inventory.csv`.*

`18a2dd`'s four criteria all measure whether the retained DTW runs agree with each other.
None of them measures whether the runs are right. Extending the same procedure across the
song exposes the problem: evaluating the identical slope gate at each window's centre
instead of at bar 102 drops two windows to 0 of 9 retained and leaves one window keeping
seven runs that span **2,066 ms**. The gate is location-dependent, so its pass is a claim
about bar 102's neighbourhood and about nothing wider.

Holding the gate to its own survivorship floor across a 110 s window leaves **14.0 s of
usable map**, which is 2.8% of the song, in two stretches: 193.50 to 197.00 s and 254.25
to 264.75 s.

Six bars fall inside. The five contiguous ones, 130 to 134, were then scored under a
window slid by minus one, zero and plus one bar, every shift measured on the same three
interior bars so no shift wins by dropping one:

| Lane | shift -1 | shift 0 | shift +1 |
|---|---|---|---|
| kick | 4 | 3 | **2** |
| snare | 20 | 17 | **4** |
| hat | 19 | 25 | **11** |
| cymbal | 13 | **14** | 14 |
| tom | 23 | 20 | **4** |

Four of five lanes fit better one bar later, and snare and tom improve by a factor above
four. The drum lanes never entered this map, so they are an external check, and they say
it is about one bar late here. **n is 3 bars**, which makes this indicative and not
settled. It is enough to stop any instance-level claim.

## Reliable events found that the score omits

**32 kick onsets.** They sit 7.66 dB below the notated set's median, the smallest gap of
any lane, and land on the sixteenth grid at 1.646x baseline. The kick stem is the only kit
stem with no second dynamic population, so no quiet class explains them. **Their bar
positions are unknown** and they are listed by audio time in
`REMAINING_AMBIGUITIES.csv`.

## Repairs applied

**Zero.** Four findings are in `MISMATCH_TABLE.csv`:

- **`KIG-M001`**, bar 231, position 7 sixteenths: **GM 65 on the kick staff line**, one
  event in 4,948, inside a repeating figure whose other string-4 events are all GM 35.
  This needs no audio and no anchor. It sits on another author's published tab.
- **`KIG-M002`**, 21 GM 39 hand claps drawn at the snare position across bars 22 to 32,
  42 to 44, 65 and 82. The placement is certain and the intent is not recoverable.
- **`KIG-M003`**, 114 ghost flags whose resolved dynamic is mf, the unflagged
  population's own mark. The two encodings disagree and no evidence says which is meant.
- **`KIG-M004`**, the 32 unnotated kick onsets above.

The tab is r8852151 by **Ben Dibden1**. Brandon's standing gate of 2026-09-07 is that a
revision never goes onto an original: open the original, create a copy to edit, rename it
with `Brandon edit`, and revise the copy. That is an outward publish action and it waits
on his say-so. `KIG-M001` is the one candidate ready to apply the moment he says go.

## Sources used

*Page 64 is read from the Alfred publisher sample `content.alfred.com/catpages/00-31503.pdf`, md5 `116b3ee7df76b9d11a1c3d4d18781d12`. The Modern Drummer pages are read from the local `.pdf` scan, md5 `ffedb9639f376cc54409b3f57926d488`.*

**Audio.** Fifteen stems at the shared stem folder for this song,
each 501.84 s, and the mixture mp3 beside them. Six kit stems were detected: kick, snare,
hat, cymbals, toms, other_kit. Every sha256 is in `SHA256SUMS.txt`.

**Notation.** The live part JSON for all nine parts, pulled from the Songsterr CDN at
revision 8852151, saved under `raw/`.

**Person-made references consulted, none able to corroborate an instance.**

| Source | Transcriber | Limit |
|---|---|---|
| DRUM! Odd Meter Lesson pages 1 to 3 | DRUM! Magazine | excerpt, 18 to 19 px noteheads, brackets legible |
| DRUM! Groove Analysis page | DRUM! Magazine | excerpt, verse 1 and verse 2 signatures legible |
| Modern Drummer *Rock Charts* | **Marc Atkinson** | complete song, 13 px phone scan, **classified unusable at AUC 0.582** |
| Drummerworld figures, six | Rich Lackowski, Alfred | 6 px noteheads, brackets unreadable in principle |
| Alfred publisher sample page 64 | Rich Lackowski | one passage at 3:18 |

## Bugs found in this pass, in my own work

- **Dot and tuplet double-count.** Songsterr's `duration` array already carries both, so
  applying them again pushed 88 of 248 bars past their own signature. After the fix all
  248 balance exactly.
- **A null that could not fail.** The first grid test rotated onset times circularly,
  which preserves every inter-onset interval and returns the data. It scored 1.001x on
  every set including the loud ones. Replaced by a jitter null that agrees with the
  analytic baseline.
- **A leave-one-out that could not work.** Fixed-endpoint DTW cannot hold out an interior
  block. Reported as a failure rather than quietly redesigned.
- **A shift test biased by its own edges.** Scoring shift +1 over one fewer bar lowered
  its total mechanically. Rescored on the interior bars only.

## Completion

| | |
|---|---|
| lanes with an isolated stem | 5 of 5 kit families |
| lanes tested in both directions at passage level | **5 of 5** |
| events covered by passage-level adjudication | **4,926 of 4,948** |
| events resolved at instance level | **0** |
| bars with a surviving two-direction result | **0 of 248** |
| reliable audio events found with no notation | **32 kick** |
| repairs applied | **0** |
| unresolved events listed individually | **682** |
| final revision | **8852151, unchanged, 4,948 notes, 629 ghost** |
