# transcription-repair

A Claude Code skill that repairs an existing music transcription, especially a Guitar Pro or
Songsterr drum staff, by treating the best human transcription as the musical model and
isolated stems as evidence that tests individual claims inside it.

Live page: <https://7onething1.github.io/transcription-repair-skill/>
Skill: `~/.claude/skills/transcription-repair/`

## What it is

76 executable assertions across four suites, 15 adversarial fixtures, 9 promotion
conditions, 7 evidence states. Built 2026-09-08. numpy and scipy only, so every suite runs
in the system python with no audio files on disk.

| File | Lines | Role |
|---|---|---|
| `SKILL.md` | 593 | the governing contract, 24 numbered sections |
| `tr_ledger.py` | 680 | note-instance ledger, GPIF and Songsterr readers, diff, regression |
| `tr_audio.py` | 986 | onsets, alignment gate, landmarks, cymbal attacks, tom identity, leakage |
| `tr_score.py` | 560 | musical clock, grid snapping, two-hands gate, pattern sweeps, red zone |
| `tr_gate.py` | 709 | provenance, recording identity, states, edit ledger, promotion |
| `reference/research-dossier.md` | 253 | the research, provenance marked per fact |
| `reference/gp-percussion.md` | 151 | measured Guitar Pro and Songsterr encoding facts |

## The principle

Start from the human transcription. Use stems to test claims inside it. When the two
disagree, investigate that specific disagreement rather than discarding either side.

## The pipeline

1. Asset inventory, refusing iCloud placeholders
2. Key census, so a missing key is evidence only after it runs
3. Recording identity, seven evidenced checks
4. The musical clock, integrating every tempo event including progressive ones
5. Alignment gate, one-to-one matching against four controls
6. Stem reading, where the stem label is the instrument identity
7. Grid snapping into the chart's own subdivision vocabulary
8. Two hands and two feet, run on the voice that was not edited
9. Edit ledger and a nine-condition promotion gate

## The 15 fixtures

Raw seconds carried into notation · two toms 3 Hz apart · a 6-second crash decay · missing
pedal chicks · a recurring ghost figure · a wrong recording at the same tempo · three tempo
changes · a track named Drums with no drum notes · a 4.2 px staff space · an edit touching an
unrelated track · a bar where only the ride plays · a 50 ms refractory at 170 bpm · a stale
validation hash · an unanswered identity check · a cymbal proposal weighted as a kick.

## Running it

```bash
~/.claude/skills/transcription-repair/run_selftests.sh
```

Exit 0 is the only usable result.

## Composes with

`/notation-evidence-gate` · `/songsterr-drum-repair` · `/songsterr-upload` ·
`/stems-to-guitar-pro-drums` · `/impossible-guitar-parts` · `/composite-stem-alignment`
