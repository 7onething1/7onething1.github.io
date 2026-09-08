# Watermelon In Easter Hay: the two-hands audit

Songsterr copy s6857183, head revision r8968524. Built 2026-09-08.

- Measures scanned: 105
- Measures where the cymbal voice has zero rests under 3+ toms: 21
- Colliding cymbal strokes: 101
- Sub-sixteenth tom beats: 41
- Measures Brandon changed by hand: index 24, 26

The screenshot was Brandon's editor diff on top of r8968036. It published as r8968524,
"Fixed tom fills and rolls", 17:43:08Z 2026-09-08.

Causes, measured: tom positions carried raw stem onsets instead of the chart's sixteenth grid,
30 of 40 tom measures more than 0.20 of a sixteenth off; the cymbal voice was never re-marked
against the fills; the chart reader misses snare heads in busy measures; Low-Mid and Low Floor
Tom were outside the chart's three-lane map.

Nothing was uploaded. A corrected build needs a fresh export of r8968524.

Live: https://7onething1.github.io/watermelon-two-hands-audit/

## Instrument attribution (fails its null)

Instruments are named from staff position plus the tab's own InstrumentSet, never from the
notehead glyph. StaffLine 0 Ride (51, 53), 1 Tom Very High (50), 2 Tom High (48), 4 Tom Medium
(47), 5 Very Low Floor Tom (41), 6 Tom Very Low (43), 3 Electric Snare (40), 7 and 8 kick.

## Data provenance note

The onset positions quoted for tab index 24 (11.23 to 18.63 sixteenths, strengths 11.3 to 54.2)
were read from data/tom_plan.json before a parallel session overwrote that file at 12:56 on
2026-09-08. The current file holds 8 events at exact sixteenths with strength 0.0, which is the
hand fix written back. tom_plan2.json followed at 13:02.

The isolated toms stem over the index-24 fill window sits at 16.94x the
surrounding energy. Against 4000 random same-width windows from the same stem, the 95th
percentile is 26.45 and p = 0.061. The stem does not independently
attribute the instrument at this bar. The count of ten filled heads is established on the native
crop. The +9 offset stays confirmed at song level, p = 0.0104, which is a different claim.
