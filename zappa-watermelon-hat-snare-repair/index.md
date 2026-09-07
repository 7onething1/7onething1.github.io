# Watermelon In Easter Hay: the hi-hat and snare the tab leaves out

Built 2026-09-07. Songsterr copy s6857183 r8951854, published.
Live page: https://7onething1.github.io/zappa-watermelon-hat-snare-repair/
Live tab: https://www.songsterr.com/a/wsa/frank-zappa-watermelon-in-easter-hay-brandon-edit-drum-tab-s6857183

## What went on the tab

286 pedal hi-hat and 147 snare rebound ghosts, in a NEW voice. Voice 0 was not touched.

## The hat stem is an instrument, not ride residue

The attribution control ran first, because a pitch in one stem never proves that
instrument played it. Two measurements settle it, neither one using the tab:

- median onset decay 52 ms against the cymbal stem's 348 ms
- envelope correlation with the cymbal stem -0.015

## The pulse, scored against a pre-specified null

The eighth-note period was predicted from the tab's own tempo before the test ran.

| test | R | null | ratio | z | p |
|---|---|---|---|---|---|
| fixed eighth, 0.5423 s | 0.1576 | 0.0494 | 3.19x | 4.11 | 0.0010 |
| best of a 660-period sweep, 0.5400 s | 0.2039 | 0.1487 | 1.37x | 3.91 | 0.0033 |

The free sweep lands 0.41% from the predicted eighth. The sweep's own ratio is low
because a max-over-660 statistic needs a max-over-660 null, which is what it got.

## A circular test, caught and replaced

The first grid test scored residual onsets at 0.02x to 0.04x of chance, which looked
decisive. It was circular. Residual is defined as more than 45 ms from any notated
event, every notated event sits on the grid, so the exclusion alone drives occupancy
below chance. The replacement pushes the null through the identical exclusion filter.

## Resolution matching, which is why this is a bar-level repair

Every one of the 944 eighth slots in the score already carries a notated ride event, so
no slot is free for an unambiguous per-slot reading. The notation therefore follows the
resolution the evidence has:

| stage | test | result |
|---|---|---|
| 1, per bar | hat energy ON the eighths vs the 16ths between them | 46 of 105 bars clear 1.5x |
| 1, null | same test, grid rotated by a 16th | 17.1% of bars clear |
| 2, per slot | slot peak vs that bar's own offbeat median | 286 of 416 kept |

Effect at stage 1 is 2.56x as many bars passing on the true grid.

## Hit, rebound, rebound

Brandon called this from the ear before any measurement. It holds.

| measurement | value |
|---|---|
| multi-onset snare clusters | 157 of 180 |
| loudest stroke FIRST | 118, 75.2% |
| loudest in the middle | 28, 17.8% |
| loudest LAST, a drag | 11, 7.0% |
| follower amplitude / leader | 0.327 median, below 1.0 in 91.2% of pairs |
| intra-cluster gap | 52.2 ms median, sd 25.0 ms |

The gap spread rules out detector re-triggering, which would sit at a fixed multiple of
the 5.8 ms analysis hop. Cluster leaders match the tab's notated snare at 36.9%,
followers at 15.3%, so the followers are the strokes the tab omits.

## The eye overruled the count

The first build wrote EVERY follower onset, 267 of them, which is what the measurement
literally says. Rendering bars 12, 31 and 45 through alphaTab headless and looking at them
showed a size-12 cluster smearing into a six-note run of parenthesised heads along the snare
line. That does not read as hit-rebound-rebound, which is the figure Brandon named. The
second build keeps the two loudest followers per cluster, giving 147, and the same bars now
render as one ghost either side of the hit.

The count was not wrong. It was answering a different question from the one the notation has
to answer.

## Symbols, per the drumset standard rather than a general dictionary

- pedal hi-hat: articulation 6, staff line 9, the first space BELOW the staff, X
  notehead, closed by default. Weinberg, Guidelines for Drumset Notation, 1994.
- rebound ghosts: `<AntiAccent>Normal</AntiAccent>`, the parenthesised notehead.

## What was NOT touched, reported as a set difference

Voice 0, compared on bar, position, midi, articulation, ghost, staccato and dynamic,
with the same flags read on both sides:

    |source \ output| = 0     |output \ source| = 0     symmetric difference = 0
    ghost-flagged     |A\B| = 0   |B\A| = 0
    staccato-flagged  |A\B| = 0   |B\A| = 0

Bar 104 voice 0 is one quarter short of its 5/4 signature. That is present in the
transcriber's own file, in the pre-sweep original and in the live export, so it was
carved out by name and left alone.

## Published state, read from the CDN

    part name 'Vinnie Colaiuta'   105 measures   85 with 2 voices, 20 with 1
    voice 0   ride 1724  snare 193  kick 107  crash 53  pedal hat 6  toms 6  other 2
              ghost-flagged 1317
    voice 1   pedal hi-hat 286     snare 147, all 147 ghost-flagged

All 9 track names survived the import. Both files carry 137 CDATA blocks, which is the
variable that decides it.


## All four lanes, scored identically

Two-way, one-to-one matching on the mir_eval.onset convention so a single loud onset cannot
absorb many written events. Every rate carries its circular-shift chance figure. The floor is
1.5x.

| lane | written | onsets | A written->audible | A chance | A ratio | B audible->written | B ratio | unsupported written | unnotated audible |
|---|---|---|---|---|---|---|---|---|---|
| kick | 107 | 652 | 0.430 | 0.127 | 3.40x | 0.071 | 3.53x | 61 | 606 |
| snare, author only | 193 | 637 | 0.508 | 0.091 | 5.61x | 0.154 | 4.36x | 95 | 539 |
| **snare + our 147 ghosts** | 340 | 637 | **0.721** | 0.092 | **7.80x** | **0.385** | **6.39x** | **95** | **392** |
| toms | 6 | 665 | 0.500 | 0.101 | 4.96x | 0.005 | 4.03x | 3 | 662 |
| cymbal | 1778 | 1074 | 0.204 | 0.177 | 1.15x | 0.337 | 1.06x | 1416 | 712 |

Read the snare rows together. Adding the 147 rebound ghosts moved direction A from 5.61x to
7.80x and direction B from 4.36x to 6.39x, while unsupported-written stayed at 95. It did not
rise, so not one of the 147 was placed where the stem has no onset. Unnotated audible fell
from 539 to 392, which is those 147 onsets now carrying notation.

Kick, snare and toms all clear the floor in both directions. The cymbal lane does not, and it
is the only lane that does not.

## Ride bleed, the control that could have killed the hi-hat repair

The notated ride is a dead-even 16th pattern: 866 events on eighths, 858 on the 16ths between
them, 0 anywhere else. Inside the 46 passing bars it is exactly 391 and 391.

| position, all carrying a NOTATED RIDE STRIKE | n | median hat-stem peak |
|---|---|---|
| ride on an eighth | 391 | 0.1193 |
| ride on the 16th between eighths | 391 | 0.0062 |

**19.3x.** Equal ride strikes on both sides, and the hat stem answers only on one. Ride bleed
cannot produce that asymmetry. The decay reading agrees: at the 286 placed slots the hat stem
decays in 46.4 ms and the cymbal stem in 348.3 ms, a 7.5x separation, which is a discrete
closed-hat event rather than a ride strike.

## The audition list, not a deletion list

Each placed pedal hi-hat gets three independent readings instead of one ratio: is there a
DISCRETE local peak rather than raised energy, does it decay like a hat, and does the cymbal
stem carry its own event at that instant.

| verdict | all 286 | of the 46 under 3x contrast |
|---|---|---|
| SUPPORTED | 207, 72.4% | 26 |
| AMBIGUOUS | 8, 2.8% | 4 |
| UNSUPPORTED | 71, 24.8% | 16 |

Nothing was deleted on this reading. The 71 UNSUPPORTED notes carry raised energy with no
discrete peak, and 55 of them sit ABOVE 3x contrast, so contrast alone was the wrong sort.
Full per-note table with bar, beat, stem seconds, contrast, prominence and both decay
figures: `out/AUDITION-hat-notes.csv`.

## Stopping condition

1. snare, kick and toms: CLOSED. All three clear 1.5x in both directions.
2. hi-hat: closes when the 71 UNSUPPORTED notes are auditioned against the isolated hat stem
   and each is kept or pulled.
3. cymbal: 1,416 written events carry no audio support at 1.15x. The detector finds 1,074
   onsets against 1,778 written, so a perfect transcription could not score above 0.60 in
   direction A. The observed 0.204 sits well under that ceiling, and this method cannot
   adjudicate a continuously played ride at 16th density. That lane needs a different
   instrument, not another run of this one.

## Method

Spectral flux, 1024-pt Hann, 256 hop, 44.1 kHz. Hat 8-16 kHz for per-slot work and
2-12 kHz for onsets, snare 2-12 kHz, kick 30-180 Hz. Piecewise-linear clock through 97
snare anchors, span 59.33 s to 506.08 s. Nulls are circular shifts or exclusion-matched
uniform draws, 200 to 2000 draws each.

Source stems: `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`
Tools: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/tools/`
