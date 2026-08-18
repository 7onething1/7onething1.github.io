# Plan to finish every /goal condition

Built 2026-08-17, Phase 1 run 2026-08-18. Two declarative completion conditions exist, and neither can pass today.

## Where both stand

- **Guitar transcription** (`~/.claude/skills/impossible-guitar-parts/GOAL.md`): blocked on four executable implementation gaps plus one open research question.
- **Community canon** (`~/.claude/skills/community-os/GOAL.md`): blocked on a condition that describes a corpus state that has moved on, so it would judge against a false premise.
- Only 2 of 73+ skills carry a `/goal` condition at all.

**Corrected 2026-08-18:** my first pass searched only Downloads and the BELIEVEYOUME tree. Widening it found working `CHECKPOINT.json` ledgers under `_outputs/theship-tabs/` and `_outputs/appleseed-allparts/`, plus a persisted `beats_to_seconds.json` for Kilgore Trout. The ledger machinery is proven on other bands and had never been applied to BELIEVEYOUME. Phase 1 has now seeded it.

## Goal 1 status, twelve requirements

| # | Requirement | Status | Evidence or gap |
|---|---|---|---|
| 1 | Attack timing | done | recall 74.1%, precision 88.0%, 5.70x over a wrong stem |
| 2 | Note pitch | no power | 53.4% vs 51.0% control on every healthy map, reported with control |
| 3 | Duration and sustain | **RUN 2026-08-18** | r=-0.046 vs +0.023 control, separation -0.069, refuses itself |
| 4 | Guitar ownership | refused | gain -0.0115 against a 0.05 threshold |
| 5 | Tuning and capo | done | Drop C, low C at 65.4 Hz |
| 6 | Repeated/doubled notes | done | `octave_copy_gate.py` |
| 7 | Discrepancies classified | **RUN 2026-08-18** | 753 misses itemised per bar: 2 supported correction, 10 unresolved, 119 unsupported |
| 8 | Twelve playability checks | done | Rhythm's one flag refuted as a held-pedal false positive |
| 9 | comparison_basis lineage | **4 of 6** | checkpoint, songsterr_reference, beat_map, audio all hashed. Only `stem_source` open |
| 10 | Persistent checkpoint state | **seeded** | ledger with 2 entries + receipts at `_outputs/impossible-guitar-parts/believeyoume-mutiny/` |
| 11 | Scope enforcement | honoured | span-fix candidate rejected at 1 fault to 5 |
| 12 | **Primary evidence exists** | **2 songs blocked** | Asleep and Jackie are 4-stem only, no isolated guitar audio |

## Goal 2, the stale premise

The condition asserts the only ingested episode is the 32-line worked sample. Measured reality: 12+ episodes ingested, three real sources (782 + 727 + 89 units of commentary and interview), scored canon records with claims and hypotheses. All four gates the condition specifies exist on disk. None has been run with its exit code captured outside a pipe, which the condition explicitly requires.

## Phase 1: make the guitar goal satisfiable

One song (The Mutiny), no research needed.

1. **Implement duration and sustain agreement.** `written_attacks()` returns `duration_beats`; ship the comparison with a shifted-time control.
2. **Itemise the 795 unmatched attacks** through `BM.apply_map`, not `np.interp` (that saturates at 100%). One row per miss with staff, bar, beat, pitch.
3. **Classify each miss** as supported correction / unsupported change / unresolved ambiguity, the condition's own wording.
4. **Persist the map and seed the ledger.** Save the validated [R]-channel map to `beats_to_seconds.json`, run `--init-checkpoint`, then run the gate with the full flag set to write `comparison_basis`.

Expected outcome: `best_validated_so_far` with verdict FAIL, meaning INCOMPLETE. That is correct and gives every later song a baseline.


## Phase 1 result, run 2026-08-18

Three of four steps closed. The fourth ran to a single named blocker, and the blocker is a missing artifact rather than a missing step. All numbers from `mutiny-songsterr.gp`, sha256 `21b37b73b6f35faa`.

**Correction:** my plan recorded duration agreement and miss classification as unbuilt. The concurrent session had written `miss_and_duration_audit.py` at 17:01 on 2026-08-17 implementing all three. It had not been run on The Mutiny. Running it is what this pass did.

| Measure | Result | Control | Verdict |
|---|---|---|---|
| Beat map alignment | 73.2% | 14.8% | gain +58.5, ACCEPTED |
| Map health, four criteria | clamped 5.1%, run 55, unique 0.949, span 95% | limits 12 / 120 / 0.85 / 85% | **PASS on all four** |
| Attack recall | 75.5% (2315 of 3068) | 12.7% decoy | usable |
| **Duration vs decay-to-half** | r = -0.046, n=2291 | +0.023 shifted | **separation -0.069, NO DISCRIMINATING POWER** |

The duration measure refuses itself, which is a legitimate answer to a condition asking for a measured number rather than a claim.

### The 753 misses, classified

Song miss rate 24.5%, over the 131 bars holding at least 4 attacks.

| Class | Bars | The flagged bars |
|---|---|---|
| **supported correction** | 2 | **bar 2** (8 attacks, miss 100.0%, decoy 25.0%), **bar 8** (9 attacks, miss 77.8%, decoy 55.6%) |
| unresolved ambiguity | 10 | 5, 22, 119, 125, 126, 127, 128, 131, 132, 133 |
| unsupported change | 119 | every remaining bar |

**Bars 2 and 8 are the first localised evidence this thread has produced.** Nine measures across two songs had localised nothing before now.

### Ledger seeded, basis 4 of 6

Working copy, persisted map, health record and receipts at `~/Projects/_outputs/impossible-guitar-parts/believeyoume-mutiny/`.

```
stem_source            not declared        <-- the only evidence gap
checkpoint             21b37b73b6f35faa  mutiny-songsterr.gp
songsterr_reference    21b37b73b6f35faa  mutiny-songsterr.gp
beat_map               d834a8cd5513b6fd  beats_to_seconds.json
audio                  1d8767faddfaaf83  03 - The Mutiny-RhythmGtr [R].wav
status                 best_validated_so_far
```

### The blocker is album-wide

**No BELIEVEYOUME song has a full stem-derived transcription**, so `--stem-source` has nothing legitimate to point at on any of the ten. Two candidates were disqualified on provenance:

- `03-The-Mutiny-3guitars.mid` and its nine siblings are **synthesised**. `QUEUE.md` and `run_synth.sh` show the chain: `audio_to_chords.py` on the full-mix FLAC, then `synth_3_guitars.py` writing power-5, triad and arpeggio voicings from the chord JSON.
- `alligator-audio-truth.gp3` is a **12-bar generated model** from `build_alligator.py`, built against book cards plus a Moises tempo and key reading.

The condition is explicit that a filename confers no authority. The gate refusing here is the gate working.

### New Lead-staff flag

`TUNING_EVIDENCE`: string 0 is detuned -2 from the rest of the tuning and its open pitch is never used. Both guitar staves carry the identical setup `[36, 43, 48, 53, 57, 62]`. The Rhythm staff's single `IMPOSSIBLE_SPAN` at bar 3.875 stands refuted as a held-pedal false positive.

### What Phase 2 inherits

1. **Order is unchanged.** No song can complete the basis today, so the ladder runs on evidence quality.
2. **One decision unblocks all ten.** Either build a real stem-derived transcription for at least one song, or promote under `--license-blind-promotion EVIDENCE`, which the gate accepts and permanently marks as never accuracy-tested.
3. **Bars 2 and 8 of The Mutiny are worth your ear** before either.

## Phase 2: per-song ladder, one per pass

| Pass | Song | Guitar stems | Gate | Prerequisite |
|---|---|---|---|---|
| 0 | The Mutiny | 4, true L/R | pilot run | Phase 1 closes its gaps |
| 1 | The Alligator | 2 | ready | stem-corrected prior, resolved key |
| 2 | Not Too Much | 3 | ready | D Standard, confirm tuning |
| 3 | My Mirror Hates Me | 3 | ready | Standard E, map built once |
| 4 | So Far So | 3 | ready | private tab Drop C |
| 5 | Endless Summer | 2 | ready | none |
| 6 | Lazarus | 2 | re-pull | s5476396 carries Vocals + Drums |
| 7 | Broken Satellites | 3 | re-pull | copy tracks are local only |
| 8 | Asleep in the Trunk | none | re-separate | 4-stem FLAC, tab is a 173-note shell, 3/4 vs 4/4 open |
| 9 | Jackie | none | re-separate | 4-stem FLAC |

**Cheaper unblock for passes 8 and 9:** a demucs 6-stem pass exists today for exactly those two songs at `BandBooks/BELIEVEYOUME/3-guitar-derivation/_demucs_6s/htdemucs_6s/` with a `guitar.wav` each. Test whether it passes `map_health_gate.py` before running a new Moises separation.

**Per-pass checklist:** re-pull + `empty_staff_gate.py`, build map + `map_health_gate.py`, audio accuracy with controls, five-tier playability, itemise + classify, full-flag gate run.

## Phase 3: repair the conditions, close the canon goal

1. Rewrite the community-os condition against real state, demanding a surfaced `os.py list` and `os.py sources` per run so it stays correct as the corpus grows.
2. Run the four canon gates capturing each exit code before any pipe, surfacing counts.
3. Write a short register of which pipelines have a `/goal` condition and which do not, so an absent condition is visible.

## The decision that is not mine

Nine measures across two songs with controls on both sides. Attack recall is the unique survivor at 5.70x. Pitch has no discriminating power on any healthy map. Ownership refused. Per-bar support +4.7 against a +15.0 requirement. Nothing says the tab is wrong; these tools cannot tell on this material.

| Route | Cost | Result |
|---|---|---|
| **Accept the inherited tab with its profile** | Phase 1 + nine passes | Ten songs with a measured profile, ledger entry, lineage block. Condition returns complete on what it can test |
| Fund the missing-signal work | Open-ended | Space is mapped: continuous features ruled out, learned/template matcher on discrete events untried |
| Correct by ear | Your listening time | Corrections recorded as evidence, each becoming a regression case |

**Recommendation: route one**, with route three alongside on any song where you hear something wrong.

## Ownership

A concurrent session owns the guitar-tab thread and produced the Mutiny pilot measurements. Phase 1 edits `~/.claude/skills/impossible-guitar-parts/`, that session's working tree. Hand Phase 1 to it, or close it out first.
