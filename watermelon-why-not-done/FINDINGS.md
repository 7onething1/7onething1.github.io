# Watermelon In Easter Hay, s6857183: findings ledger

Append-only. One entry per finding, each naming the file it was measured in and the file it was written into.

---

## F1. Bar 105 voice 0 holds 4.0 quarters inside a 5/4 bar

**Status:** open, queued as `q-2026-09-08-70d3f0`
**Found:** 2026-09-08, during the bar-length integrity check on the coda write
**Measured in:** `RECONCILED-s6857183-Brandon-edit.gp`, `TEMPOMAP-s6857183-Brandon-edit.gp`, `CODA-s6857183-Brandon-edit.gp`
**Written into:** this file, plus `~/Projects/drwu-htmls/public/watermelon-why-not-done/index.md` and `index.html`, plus `coda_write.json` field `pre_existing_defect`

Voice 0 of bar 105 sums to 4.0 quarter notes. The master bar declares 5/4, so the voice runs one quarter short. All 104 other bars fill their meter exactly.

**Not caused by this session's edits.** The same shortfall is present in RECONCILED, which predates both the tempo-map write and the coda write. Verified by walking every bar's voice-0 duration in all three files and printing the bars whose sum differs from the declared meter: each file returns exactly `[(105, 4.0, '5/4')]`.

**Why it is not fixed here.** Padding a quarter rest and correcting the meter carry different musical meanings, and bar 105 is the final bar, where the stems carry zero drum content. That decision belongs with the playability audit, `q-2026-09-08-85d746`, rather than inside a kick edit.

---

## F2. Three coda counts retired before the surviving one

**Status:** closed
**Found:** 2026-09-08
**Measured in:** the Moises stem set at `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`
**Written into:** this file, plus `index.md`, `index.html`, `final_coda.json`, `refclass.json`, `eye_gated.json`

- **81** came from a spectral-flux detector at the 95th percentile that had never been rendered or read. Withdrawn after the render showed 12 snare marks fired on a flat trace.
- **86** replaced it and was also wrong. Its 10 percent threshold was cut from the coda window itself, which is R1-self-referential under `/reference-class`.
- **39** became **35** once the 100 ms refractory stopped resetting at every bar line, which double-counted strokes straddling one.
- **47 toms** withdrawn entirely. The coda tom stem peaks at 20.5 percent of its bars 1-97 peak while the author-calibrated threshold sits at 33 percent.

**Surviving:** 35 author-calibrated kick attacks, PASS on all six reference-class checks.

---

## F3. The flat 56.000 bpm tempo map was the root blocker

**Status:** fixed 2026-09-08
**Measured in:** `RECONCILED-s6857183-Brandon-edit.gp`
**Written into:** this file, plus `index.md`, `index.html`, `tempo_map.json`, `metromap.json`

One tempo automation covered all 105 bars against a take that moves. Peak bar-start error 4.26 s at bar 65. Fixed by writing 105 per-bar automations into `TEMPOMAP-s6857183-Brandon-edit.gp`, which drops the worst error to 6.4 ms and lifts the kick-and-snare match from 0.276 to 0.685.

The earlier published figure of 6.29 s of drift is corrected to 4.26 s. It came from forcing a straight line onto a curve using the weaker onset-derived map.
