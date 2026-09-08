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

---

## F4. A shared-beat edit damaged 79 bars, caught before it shipped

**Status:** caught and reverted 2026-09-08, damaged file quarantined
**Measured in:** `CODA-s6857183-Brandon-edit.gp`
**Written into:** this file, plus `~/.claude/projects/-Users-brandonchavez/memory/reference_gpif_note_beat_dedup_copy_on_write.md` and the page section on step three

The first attempt at the three-hand removals edited the shared `<Beat>` elements in place. GPIF deduplicates: `<Beat>` id 899 is referenced by **176 voices** and carries `<Note>` id 419. Removing the note from that beat removed it everywhere, deleting **179 note instances across 79 bars** that were never targeted.

**How it was caught.** The removal plan printed note id 419 thirteen times and beat id 899 twelve times. A plan whose rows repeat one id is editing a shared definition. A set-difference census against the parent file then measured the damage exactly.

**The fix.** Clone the shared beat once per voice, append the clone with a fresh id, and swap that single index in that single voice's beat list. `<Bar>` and `<Voice>` are unique in this file, 105 and 198, so cloning at the beat level is sufficient. The corrected run removed 15 with 0 added and touched no bar outside the plan.

**Disposition of the bad file.** Moved to `out/delete/HANDS-s6857183-Brandon-edit.DAMAGED-shared-beat-2026-09-08.gp`. Never deleted.

---

## F5. Bar 55 beat 2 cannot be adjudicated

**Status:** open, queued as `q-2026-09-08-b08085`
**Measured in:** `HANDS-s6857183-Brandon-edit.gp`, against the Moises stem set
**Written into:** this file, plus the page section on step three

Fifteen of the sixteen three-surface collisions resolved cleanly. Bar 55 beat 2 writes tom low (45), tom hi mid (48) and ride (51) together. The toms stem carries a strong stroke there, so the tom lane is real, and a single toms stem cannot say which tom.

Per-tom identity is closed at a named layer: pitch fails, with medians of 90.7 to 95.6 Hz overlapping across the kit, and pan fails, with a best pair at 0.73x against the 1.5x promotion floor. Only the unreleased studio multitrack would settle it. This is blocked rather than skipped.

---

## F6. Songsterr renumbers element ids on a round trip, and this session's verification is immune

**Status:** verified 2026-09-08, no change needed
**Reported by:** the peer session working Keep It Greasey, `local_0ce0aeaa`, which measured its own published re-export renumbering Beats 1,527 to 1,556 and Notes 680 to 679 with zero content change
**Measured in:** `HANDS-s6857183-Brandon-edit.gp`
**Written into:** this file, plus the page section on step three

The Songsterr exporter re-deduplicates, so `<Beat>` and `<Note>` ids do not survive an upload and re-export. Any verification that compares element ids across a round trip reads phantom edits.

**Tested here rather than assumed.** Every `<Beat>` and `<Note>` id in the head file was shifted by +5000, with every `Voices -> Beats` and `Beat -> Notes` reference rewritten to match, and the census re-run on both files. Result: **2,784 instances on each side, 0 added and 0 removed.**

The reason is that every set difference in this session keys on the tuple `(bar index, voice index, position in quarters, midi number)`, taken at `verify_coda_gp.py:46`. No element id appears in any comparison. `hands_plan.json` records ids, and it is an edit plan rather than a verification artifact.

**Carry-over for the upload step.** When `q-2026-09-08-85d746` reaches a Songsterr round trip, the comparison stays on content tuples. Do not diff ids.
