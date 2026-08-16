# [HANDOFF 2026-08-16] 04 Six Feet Under, the octave-copy fraud and what replaced it

## Where it stands

**Live on Songsterr as `r8516865`**, tab `s5824781`, 5 tracks, published 22:03:59Z.
Artifact `b1193b60fdb84e5d`, validator `553ab252e1d1cd72`, checkpoint `66410cea12c9bf10`.

Read back from its own CloudFront parts: **296 / 1043 / 445 / 1796 / 336**, identical to the
revision it replaced, with **9 bend-bearing notes on the Lead staff**.

## What Brandon reported, and what it measured

> "the fraud just commited by not transcribing the bend and release intro solo and instead
> just kicking the rhythmn up an octive" / "also needed parts are now gone"

Both true. The delivered Lead staff was **77.4% exact fret+12 copy** of Rhythm, 606 of 783
notes; the intro was **79 of 79 across 14 of 14 bars**. The guitar staves held 2 bends and
**zero releases in any build**. Separately a 1315-note upgraded Lead was abandoned 2026-08-15
19:04 for the 247-note base.

## What was fixed

- **9 bends written into the intro**, bars 2-9, three of them bend-and-release, measured off
  the guitar stem by a detector that passed a two-way synthetic control. `intro_bend_probe.py`
  then `apply_intro_bends.py`.
- **Copy-on-write bug caught by readback.** The intro's 79 notes are only 3 distinct GPIF Note
  elements shared across 4-5 beats each, so the first write fabricated bends at unmeasured
  positions. Quarantined in `delete/`.
- **`octave_copy_gate.py`**, new, in the impossible-guitar-parts skill. Exits 1 above 50% copy.
- **`impossible_gate.py` promotion hole closed.** Preservation and position now refuse in
  ABSOLUTE mode. Sweep found 6 receipts with preservation FAIL beside promotion PROMOTED, 2 on
  04 and 4 on 05. Both retracted.

## Playability: clean and evidenced

Every validator category reads **0 on both staves**. Tier 1 preservation PASS 1175 to 1175,
Tier 1b position PASS 0 moved, hard failures 0/0, hand skip 0.0%, capo 0, EADGBE.
Sheet: `VALIDATOR_EVIDENCE_r8516865.txt`, JSON: `full_validator_r8516865.json`.

## Pitch: NOT established, and blocked on one thing

Aggregate: **+7.5 against a +24.9 realistic ceiling, so 30%**. Six measures calibrated against
labelled controls, every one refused at a bar set before it ran:

| measure | result | bar |
|---|---|---|
| ASE.Rise per-note detection | AUC 0.682 | 0.90 |
| harmonic comb, band control | AUC 0.778 | 0.90 |
| harmonic comb, matched control | AUC 0.883 | 0.90 |
| comb proposer, synthetic | 37.6% top-1 | 80% |
| basic-pitch proposer, synthetic | 28.3% top-1 | 80% |
| **both proposers, REAL audio** | **45.2%** | 80% |

Density is the variable: at 0-1 notes/sec both proposers hit 100% and detection AUC 1.000;
at 12+ everything collapses, and **645 of 1100 notes (59%) sit at 12+**.

## THE ONE OPEN STEP

**12 notes need Brandon's ear.** All three independent methods agree on a pitch and all three
differ from the tab. A/B clips are cut, 5.35s each, guitar then tab-pitch tone then
heard-pitch tone then guitar.

- `TWELVE_NOTES_FOR_YOUR_EAR.md` and `ear_clips/` beside this file
- live at `https://7onething1.github.io/theship-guitar-count/TWELVE_NOTES_FOR_YOUR_EAR.md`

**On receiving his answer:** use the confirmed notes as real-audio ground truth, recalibrate
`harmonic_comb_gate.py` and `pitch_proposer_gate.py` against them, and only if both clear 80%
rewrite the sparse band, then run `audio_accuracy_audit.py` and publish the pitch-agreement
change. Do not rewrite off the synthetic control; that assumption has failed twice on this
song.

## Open queue items

`q-2026-08-16-560465` (the ear test, the blocker), `q-2026-08-16-3a3db5` (05 Sleep Vs Death at
20.5% copy), `q-2026-08-16-fecbe5` and `q-2026-08-16-2b9971` (the measurement ladder).

## Known live bug, unfixed

**Songsterr's Guitar Pro export returns the WRONG SONG.** Six exports from the 04 editor URL
all delivered 02 Flake's 69-bar contents under a filename saying 04. Survived hard reload, new
tab, verified `og:url`, service-worker unregistration, cache deletion and tab focus. **Check
bar count and per-part notes on anything exported from Songsterr.** Peer session warned twice.
The trustworthy capture route is curl straight from CloudFront using the hash off
`performance.getEntriesByType('resource')`.

## Everything published

`https://7onething1.github.io/theship-guitar-count/` sections 21 onward. Nothing deleted;
retired material is in `delete/` folders.
