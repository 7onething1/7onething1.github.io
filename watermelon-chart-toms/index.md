# Watermelon In Easter Hay, the chart's toms written into the tab

Live: https://7onething1.github.io/watermelon-chart-toms/
Built 2026-09-08 on MacBookPro.

## The ask

Add the Drumnet chart's tom locations to the Watermelon GP file. Brandon gave the legend
directly: the toms are **the G, the D, and the F above the F**, and **anything with an x
notehead gets skipped**.

## What shipped

| | |
|---|---|
| Toms in the tab at the start | 6 across 105 bars |
| Toms added from the chart | **179** |
| Toms now | 185 |
| Bars touched | 46 of 105 |
| Voice 0 | untouched, every ride, kick, snare and crash count identical |
| Output file | `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/CHART-TOMS-s35881-Brandon-edit.gp` |
| Source file | `~/Projects/_outputs/songsterr-zappa-paren-fix/s35881-Watermelon/RESTORED-s35881-TEXTSAFE-v2.gp` |

## The mapping

Staff positions numbered 0 for the top line down to 8 for the bottom line. The GP file's own
kit definition uses the same scale in its `StaffLine` field, so two of three carry across exactly.

| Chart | Lane | Heads | GP articulation | MIDI | StaffLine | Fit |
|---|---|---|---|---|---|---|
| the F above the F, top line | 0 | 35 | High Floor Tom (hit) | 50 | 1 | one position lower |
| the D, fourth line | 2 | 98 | High Tom (hit) | 48 | 2 | exact |
| the G, second line | 6 | 46 | Very Low Tom (hit) | 43 | 6 | exact |

The kit puts the Ride on StaffLine 0 and carries no tom there, so the chart's top-line tom
takes the highest tom slot the kit does have. Pitch order survives, 50 above 48 above 43.

## Skip the x

The top line carries the ride as x noteheads and a tom as filled ovals. They separate on ink,
measured as the mean darkness of a 5x5 box on the head:

On the top line, where the decision has to be made:

- x noteheads: ink 104 to 127 (57 of them, skipped)
- watermark letters and noise: ink 131 to 158 (18, skipped)
- **nothing at all between 159 and 185**
- filled tom heads: ink 186 to 220 (35 on the top line, 179 across all three tom lanes, kept)
- controls: snare 154 heads median 220, kick 410 heads median 201

Across all three tom lanes the cut skips 64 x-like marks, 33 watermark fragments and 4 in the
160 to 180 band.

All 179 kept heads were then looked at on a 16x contact sheet. Every tile is a solid oval.

## Bar alignment

**Chart display bar n is GP display bar n plus 9.** All nine of the chart's rehearsal marks
land on a named GP section at that offset, including a 24-bar solo in both, and the 96 chart
bars fill GP display bars 10 through 105 with none left over.

## Position inside the bar

One sixteenth is 12.22 px (median across 96 bars, range 11.43 to 13.46). Each bar was fitted
with one free parameter, the downbeat x, with the sixteenth width forced to
`(x_end - x0) / nsub`. Median position error 0.10 of a sixteenth, 90th percentile 0.21,
worst 0.28. Written as 135 sixteenths, 35 thirty-seconds, 9 sixteenth triplets placed on a
sixty-fourth grid (1/12 of a sixteenth away, about 1 px).

## Verification

- note instances 2091 to 2270, which is 2091 plus 179
- ride, snare, kick, crash and hat counts identical on both sides
- bar-length anomalies 47 in the source and 47 in the output, none new, none in a touched bar
- voices 945 to 991, one new per touched bar, all in the empty voice slot 1
- CDATA 137 to 137, so track names survive a Songsterr import
- every non-gpif zip entry byte-identical
- no Rhythm minted, every value already existed in the file

## Known limits

- The scan is 595x842 and a notehead is 4 to 5 px. The reader finds 154 snare heads against
  the tab's 193, so it misses some in the busiest bars. Every miss is a tom still absent,
  never a tom invented.
- The chart writes 410 kicks against the tab's 107. Measured in passing, not acted on.
- A rescan at 12+ px per notehead would settle both.

## Tools

All under `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/tools/`:
`systems_median.py`, `barlines_full.py`, `chart_heads_full.py`, `chart_grid.py`,
`tom_plan_chart.py`, `build_chart_toms.py`.
