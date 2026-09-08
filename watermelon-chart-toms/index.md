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
| Toms in the tab at the start | 6, all six inside the 96 bars the chart transcribes |
| Toms added from the chart | **179**, over those same 96 bars |
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
- controls: snare 154 chart heads median 220, kick 410 chart heads median 201

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

Both comparisons run over **the chart's own 96 bars only**, GP display 10 through 105. The
tab's headline totals of 193 snare and 107 kick cover 105 bars, and the nine the chart never
transcribes hold 16 snare and 8 kick. All 6 of the tab's toms fall inside the chart's span,
so the 6-to-179 comparison needs no restriction.

- The scan is 595x842 and a notehead is 4 to 5 px. The reader finds 154 snare heads against
  the tab's 177 over the same bars, so it misses some in the busiest bars. Every miss is a
  tom still absent, never a tom invented.
- The chart writes 410 kicks against the tab's 99 over the same bars. Measured in passing,
  not acted on.
- A rescan at 12+ px per notehead would settle both.

## Tools

All under `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/tools/`:
`systems_median.py`, `barlines_full.py`, `chart_heads_full.py`, `chart_grid.py`,
`tom_plan_chart.py`, `build_chart_toms.py`.

## A second reading of the same chart, uploaded in parallel

While this build ran, another session read the same Drumnet pages and published to the copy
tab `s6857183` "Watermelon In Easter Hay Brandon edit": revision `8968036` at 17:17 UTC and
`8968524` at 17:43. Quoting that revision's own note, not this build: the chart supplied the tom count and drum,
Moises stems supplied the timing, **that session placed 164 toms** and withheld 34. **This build
placed 179**, which is the number every figure here refers to.

**Agreement.** The live tab's section markers sit at exactly the bar indices this build used
(Bridge 1 at index 25, Solo at 41). A bar-shift sweep peaks at zero (59 matches) against 6 and
7 at plus or minus one. **32 of 48 tom-carrying bars hold identical per-drum counts**, and the
G lane totals 46 in both.

**Divergence, tom lanes only:**

| GP bar | This build | Live tab | What the chart shows at 9x |
|---|---|---|---|
| 25 | 10 | 3 | a run of ten filled ovals in chart bar 16, eight on D and two higher |
| 15 | 3 | 6 | three solid ovals in chart bar 6, one top-line and two on D, none on G |
| 95, 97, 99, 100, 101, 103, 104 | 19 | 0 | the Coda, marked p / pp / "cymbal on dome" |
| 14, 93 | 0 | 6 | not yet inspected |

**Scope differs.** This build adds toms only over the chart's 96 bars with voice 0
byte-identical. The live revision rewrote the kit across all 105 bars: kick 107 to 504, snare
193 to 342, pedal hi-hat 6 to 245, ride 1724 to 1522. Only the tom lanes were compared, so
nothing here judges the rest of that revision.
