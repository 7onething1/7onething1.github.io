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
