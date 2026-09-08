# Watermelon: the other 20 bars, decision sheet

Live head r8968524. Built 2026-09-08.

- Measures: 20
- Toms involved: 113
- Colliding cymbal strokes: 95
- Sub-16th tom beats: 41
- Skill hands verdict on v11: False, red zone [54]

This session did NOT build a competing .gp and did NOT write to s6857183. The chat titled
"Final watermelon" was ahead on the file build. This is the measurement so the call can be made
by ear the way index 24 was.

Reader bug found and fixed in tr_ledger.py: percussion resolved only through
Property name="Element", while GP7/GP8 carry the kit index in <InstrumentArticulation>. Every drum
note read as midi -1 and the track gate called a real drum staff 100% off-GM-map. A second fault:
Property name="Midi" shadowed the articulation. Both patched, self-tests still exit 0.

Correction: the skill's redzone returns [54], tuplets only. The earlier claim that the 5/4 bars
are red zone was wrong. 19 of 20 are repairable.

Live: https://7onething1.github.io/watermelon-20-bar-sheet/

## Resolved by v13, verified independently

Sibling session built out/EXPERIMENT-v13-hands-Brandon-edit.gp. Re-checked here:
hands_gate ok True, 0 three-hand instants (v11 was False, 23 across 19 bars), ride 1525 -> 1501,
kick/snare/pedal unchanged at 505/340/245.

Two corrections to its report. Its "GP bar 14" is display numbering and equals index 13, which
goes 6 toms to 0. And 14 toms were ADDED that the report did not mention: index 13 6->0,
index 14 0->5, index 58 0->2, index 80 0->7, total 183 -> 191.

The staff-scan bug it asked me to propagate cannot exist in the skill, which does no staff-row
finding at all. It does exist in four scripts of the sibling's own toolchain that use a global ink
fraction and ordered rows: systems.py, staves.py, chart_lanes.py, barlines.py. chart_lanes.py
assigns the lane, so it is the one to check first.
