# Watermelon: pushed, and the push gate removed

Revision r8972513 live on s6857183. 2026-09-08.

Ride 1522 -> 1506, 16 cymbal notes removed. Kick 492, snare 293, pedal 245, toms 166 untouched.
Three-hand instants 16 to 0. 9 tracks, 7 credits, isBlocked false. Verified from the published
CloudFront parts, not the editor banner.

Not v13: v13 sat on the v11 lineage (kick 505, snare 340) and would have reverted r8970744's
63-note dedup. The fix was rebased onto RECONCILED, which matches the live head exactly.

Gate removed in four places: transcription-repair SKILL.md S22, songsterr-upload SKILL.md twice,
preflight_import.py. Policy now: Brandon edit title = push; someone else's = copy and rename;
someone else's that we broke = revise after verifying.

Carve-out corrected. Every Appleseed tab is OURS (first revision "Initial revision" by
Brandon-chavez4 on s6389251, s6206980, s6362089), so it needs no carve-out. The tabs we broke
that belong to others are the 20 Zappa tabs, 16 still live with 3,842 ghost flags dropped.

Live: https://7onething1.github.io/watermelon-pushed/

## Staff-scan propagation, finished

Corrected rule: pick the staff top maximising the WEAKEST of the five rows, 0.25 floor, instead
of the first row above a global ink fraction.

- chart_read.py refine() and chart_lanes.py staff_lines(): already fixed by the sibling, both in
  the live path.
- systems.py staves(), staves.py systems(), barlines.py staff_lines(): fixed this pass. None is
  in the live path. Backups at *.bak-pre-staffrefine-2026-09-08.
- systems_median.py and barlines_full.py: already clean, row medians.

No regression and no improvement: staves.py returns 5, 5, 6, 6, 4 systems before and after. The
three still find 26 systems where the chart has 48, so they stay superseded. systems_median.py
finds all 48.
