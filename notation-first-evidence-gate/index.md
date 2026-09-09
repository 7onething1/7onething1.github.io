# The notation-first evidence gate, and what running it found

Built 2026-09-08 as `~/.claude/skills/transcription-repair/tr_verify.py`. 24 selftests pass, exit 0. Adjudicated 2,784 real notation claims against five isolated stems in 38.7 s.

Live: https://7onething1.github.io/notation-first-evidence-gate/

## The premise, checked

Brandon's brief: notation generates candidate claims first, stems verify second, mixed audio never invents an instrument identity an isolated stem could establish, and disagreements stay visible.

**That architecture already existed on this Mac, in prose.** `/perfect-stem-read` states all four points: line 291 for the order, line 151 for the identity rule, line 17 for preserving disagreement. It is 291 lines and it returns no exit status. That is the gap, and it is exactly the gap Brandon named when he said written rules were insufficient because the workflow could ignore them. So `tr_verify.py` is that document's enforcement arm rather than a new architecture. It imports `tr_ledger` for notation and `tr_audio` for measurement and adds no reader or detector of its own.

## The eight rules, all executable

| Rule | What it refuses | Selftest |
|---|---|---|
| R1 | A claim with no notation origin. There is no `from_audio()` constructor | audio-origin claim returns UNRESOLVED |
| R2 | Mixed audio assigning identity for a lane an isolated stem covers. `assign_identity()` raises, and no flag softens it | raises for lane 38 when a snare stem exists |
| R3 | Any resolver. SUPPORTED, CONTRADICTED, UNRESOLVED, NO_STEM, and nothing collapses UNRESOLVED | `resolved_by_inference` is structurally 0 |
| R4 | A verdict without provenance: stem path, sha256, time, dB, nearest onset | decided verdicts all carry a source hash |
| R5 | An unqualified index into a multi-entry source | refuses `[0]` of 12 sync entries |
| R6 | A bar-fill walker unproved on grace notes and tuplets | a walker counting grace rhythms fails |
| R7 | An empty claim set passing as a clean run | zero verdicts is a hard failure |
| R8 | Position units guessed rather than stated | beat 3 of 4/4 lands at the bar midpoint |

R5 through R8 are not in the brief. Each one exists because it caught a real error, three of them inside this module.

## Running it found three bugs in itself

The first real-data run returned **0 claims** and reported `provenance_complete: true`. The second returned **399 of 521 kicks CONTRADICTED**, which no drum tab could survive.

| Bug | Symptom | Cause |
|---|---|---|
| track filter | 0 claims, and a clean pass | `--track` passed a string; `tr_ledger` compares ids numerically |
| bar index base | every claim off by one bar | `tr_ledger` emits 0-based bars; the driver assumed 1-based |
| position units | 399 false CONTRADICTED | `NOTE_VALUE` is denominated in **whole notes**, Quarter = 1/4. The driver divided by quarters-per-bar, a 4x error |

The units bug is the same shape as the one a peer session reported this morning about instance counts against beat-reference counts. A histogram tells the truth only when both sides carry the same unit.

**Prose could not have found any of the three.** They surfaced because the module ran against real audio and produced a number implausible enough to check.

## The real run

2,784 notation claims from `HANDS-s6857183-Brandon-edit.gp`, against the five Moises stems, on the metronome-anchored clock.

| Verdict | Count | Share |
|---|---|---|
| SUPPORTED | 1,514 | 54.4% |
| CONTRADICTED | 578 | 20.8% |
| UNRESOLVED | 692 | 24.9% |
| NO_STEM | 0 | 0.0% |

`resolved_by_inference: 0`, and that zero is structural rather than measured, because no resolver exists in the module.

**Every tom lane abstains on identity.** Lanes 41, 45 and 47 return UNRESOLVED with no SUPPORTED at all, and 48 and 50 carry only CONTRADICTED and UNRESOLVED. That is R2 and the separability note working: the toms stem is one channel, so it can place a stroke in time and cannot say which drum. The bar 55 collision behaves the same way.

## It corrects one of my own published claims

My audit page said bar 1's written crash "loses its support", reading 8.27 percent cymbal energy against a 33 percent floor.

The gate disagrees. With units correct the crash sits at **40.703 s**, and the ride-profile detector finds an onset **27 ms away**, so it reads SUPPORTED. My earlier figure was a band-magnitude share across a trimmed window, which measures loudness rather than attack presence. Onset proximity is the more direct test of whether something was struck, so the crash stands and my withdrawal of it is itself withdrawn.

## What it would and would not have caught today

Brandon's claim was that this architecture would have blocked a substantial class of today's errors. Tested honestly:

| Today's error | Caught by | Verdict |
|---|---|---|
| 12.50 s sync error, from indexing 12 video entries with `[0]` | R5 | caught, and R5 is not in the brief |
| Missing intro, from an 8:42 versus 9:05 master mismatch | `tr_gate.recording_identity`, which already existed | not caught by R1-R4 |
| 43 overfilled bars, from counting grace-note rhythms | R6 | caught, and R6 is not in the brief |

**The brief's four rules caught none of today's three**, because none was an unsupported musical claim. All three were bugs in reading data. The brief does cover the historical Watermelon class: the coda counts of 81, 86 and 47 toms, the ghost sweeps, and every instance of a pitch in one stem being read as proof that instrument played it.

That is the useful correction. An evidence gate on audio stops a workflow from asserting music it cannot hear. It does not stop a workflow from misreading its own inputs, and today every failure was the second kind.

## Files

- `~/.claude/skills/transcription-repair/tr_verify.py`
- `~/.claude/skills/perfect-stem-read/SKILL.md`, the governing prose this enforces
- Prior-art decision logged to `~/.claude/truth/prior_art_checks.jsonl` as adapt
