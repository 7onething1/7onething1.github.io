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
