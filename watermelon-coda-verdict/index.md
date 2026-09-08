# Watermelon In Easter Hay, the Coda toms settled against the stems

Frank Zappa, Joe's Garage Act III. Songsterr s35881, drum track, Vinnie Colaiuta.
Twenty-nine tom events were handed from the chart read to the stem session on 2026-09-08.
This page gives every one of them a status. Nothing was uploaded.

## The question this page closes

The chart read produced 179 tom noteheads and handed 29 of them over for testing. The stem
session returned verdicts on 20 and marked the remaining 9 UNTESTABLE, because the alignment
anchors stop at notation second 462.9 and the clock drifts 165 to 773 milliseconds past it.

**The drum kit stops playing at 538.9 seconds**, and that measurement stands. A first pass read
that as refuting the four chart tom heads in GP bars 103 and 104, on a constant-tempo
extrapolation placing both bars after 539.7 s. Looking at the printed page withdrew that
verdict. The chart's final system carries a FERMATA and a two-step drop to mp then pp, so the
performance does not hold constant tempo through the ending and those windows cannot be
trusted. All four heads are printed as filled ovals on the G line, confirmed at 8x. They return
to no verdict, joining the five in bars 99 to 101.

## Every one of the 29 events

| Group | Heads | Status | Evidence |
|---|---|---|---|
| GP bar 25, the ten-note run | 10 | MOOT | Brandon wrote 8 by hand 26 minutes after import. Stem supports 8 to 9 at every threshold. |
| GP bar 95 | 4 | REFUTED | 0 of 4 at every threshold down to 0.2 percent of peak, where the detector finds 2,049 onsets. |
| GP bar 97 | 6 | 4 WEAK | Four supported at 0.2 percent, two of those also at 5 percent. Ship labelled weak. |
| GP bars 99, 100, 101 | 5 | NO VERDICT | Bar presence fails its control at 1.15x. Clock drift exceeds one sixteenth. |
| GP bars 103, 104 | 4 | NO VERDICT | All four confirmed by eye as filled ovals at 8x. Constant-tempo placement invalidated by the closing fermata. |

Ten moot, four refuted, two firm, four weak, nine without a verdict. All 29 accounted for.

## Where the kit stops

Peak band energy per second, straight off each stem, no threshold and no alignment.

| stem second | toms | kick | snare | cymbals | hat | reading |
|---|---|---|---|---|---|---|
| 537 | 17.54 | 48.29 | 0.000 | 11.49 | 25.34 | kit playing |
| 538 | 2.11 | 43.93 | 0.000 | 7.95 | 56.11 | last bar of playing |
| 539 | 0.41 | 0.016 | 0.000 | 3.70 | 10.56 | kick and toms gone |
| 541 | 0.021 | 0.016 | 0.000 | 7.51 | 1.27 | cymbal ring-out only |
| 543 | 0.00002 | 0.016 | 0.000 | 0.21 | 0.015 | silence |

On the clock fitted to the last eight anchors, slope 1.01266, GP bar 103 spans stem 539.72 to
544.06 and GP bar 104 spans 544.06 to 545.27, and bar 105 extrapolates to 549.5 s against a
file ending at 545.27 s. That slope assumes constant tempo. The printed page shows a FERMATA
over the closing bar plus a drop to mp then pp, so the ending is held by an unknown amount.
The kit stopping at 538.9 s is measured and stands. Which notated bars sit under 539 to 545 s
is not settled.

Eye check images: sys46_chartbars93-94_x8.png and sys47_chartbars95-96_x8.png in this folder.

## Why bars 99, 100 and 101 have no verdict

The in-region control is the Coda bars the chart marks empty: GP 93, 94, 96, 98 and 102.

| threshold | chart-tom bars | chart-empty bars | ratio | result |
|---|---|---|---|---|
| 5 percent of peak | 3.00 | 2.60 | 1.15x | FAIL, under the 1.5x floor |
| 2 percent | 5.40 | 5.00 | 1.08x | FAIL |
| 1 percent | 9.00 | 8.20 | 1.10x | FAIL |

Counting all seven claimed bars including the two dead ones gives 0.82x, below chance. There
are 17 real tom attacks at 5 percent between 506 and 541 seconds. They land in chart-empty
bars as often as in chart-tom bars.

A position-matched test would be stronger and it is unavailable. Drift runs 165 to 773
milliseconds and one sixteenth is 267.9 milliseconds, so the uncertainty is wider than the
grid spacing.

## Detector controls

| window | 5% | 2% | 1% | 0.5% | 0.2% | role |
|---|---|---|---|---|---|---|
| 541 to 545 s, song over | 0 | 0 | 0 | 0 | 0 | negative control, clean |
| 496 to 501 s, toms quiet | 0 | 0 | 1 | 1 | 2 | negative control |
| 486 to 496 s, toms audible | 9 | 16 | 19 | 21 | 28 | positive control |
| 506 to 541 s, the Coda | 17 | 33 | 61 | 96 | 131 | region under test |

### Three detector faults found and recorded

1. Median absolute deviation taken on a clipped residual. Negatives were set to zero, then
   the scale was computed, so over half the samples were zero, the deviation collapsed, and
   the threshold became infinite. Every window returned zero, including known-good ones.
2. A staircase baseline minted its own peaks. The running median was sampled every 16 frames
   and held flat, a step every 0.093 seconds. Subtracting it leaves a sawtooth peaking on the
   step boundaries, and the Coda onsets arrived spaced 85 to 95 milliseconds apart.
3. A threshold cut from the population it filters. Scaling to local noise let a near-silent
   window out-detect every loud one, 4.20 per second against 3.40 where toms are audible.

## One correction to the record

The notation clock runs at quarter equals 56. The tempo automation stores 56 against a
half-note unit, and reading that as a quarter value doubles it. Bar 93 is 4/4 spanning 447.857
to 452.143 seconds, which is 1.0714 seconds per quarter and confirms 56 directly. At 56 the
105 bars occupy 8 minutes 26 seconds, fitting a 9 minute 5 second track. One sixteenth is
267.9 milliseconds, and any earlier figure of 133.9 is the doubled reading.

## The decision, which belongs to Brandon

Revision r8968524 stands on copy tab s6857183. Nothing here has been uploaded.

| Route | What it means now |
|---|---|
| Leave r8968524 as it stands | The two firm bar-97 heads stay out. The eight refuted stay out, correctly. |
| Fold in what survived | Two firm heads in GP bar 97, four more labelled weak. Eight refuted dropped, five held. |
| Roll back to toms-only | Returns to CHART-TOMS-s35881-Brandon-edit.gp, 179 chart toms, voice 0 byte-identical. |

Two further items carry agreement from both sessions and neither is applied. GP bar 14 holds
four heads that are x noteheads on the page, which the skip rule removes, and the stem
supports only two of six at 5 percent. GP bar 93 holds two heads the stem supports at both 5
percent and 0.2 percent, and those look solid.
