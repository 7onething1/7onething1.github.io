# Goal Loop Gate

Three hard gates wired into Claude Code on this Mac, 2026-09-09.

Brandon: *"every chat hard gate treat my asks as /goal and /loop until done, stop
stopping. hard gate that is work avoidance if you have a question ask chat gpt claude
chrome, making sure another chat is not already asking it."*

Brandon: *"anytime a chat is reporting findings, make it check with chat today hard gate."*

## What was broken

`completion_stop_hook.py` is the one gate on this Mac that decides stopping from project
state rather than from the wording of a reply. It abstains whenever no task contract is
open. Nothing opened a contract on an ordinary ask, so the strongest gate sat idle
through every turn.

## The three gates

| Gate | Piece | Hook point |
|---|---|---|
| Every ask is a goal | `~/.claude/hooks/goal_loop_gate.py` | UserPromptSubmit |
| Deduplicate the question | `~/.claude/skills/_shared/question_dedup.py` | called by hand and by the findings gate |
| Check findings today | `~/.claude/hooks/findings_chatgpt_gate.py` | Stop, ahead of completion_stop_hook |

State lives in `~/.claude/no_quit_state/contracts/<session8>.json` and
`~/.claude/no_quit_state/chatgpt_question_ledger.jsonl`.

## Behaviours exercised

Seven behaviours were exercised against throwaway sessions and fixtures. This records
what was tried. It is not comprehensive validation, since a full confusion set of
known-duplicate and known-different question pairs has not been run, so the thresholds
stay provisional.

1. A contract with open outcomes refuses the stop and names each one.
2. An outcome marked met on evidence that does not verify still refuses.
3. One session cannot edit another session's contract.
4. A paraphrased sibling question is caught at 0.62 to 0.64 similarity.
5. A question with the same vocabulary naming a different song and tab id clears.
6. An identical findings payload moves COVERED to STALE when the evidence count steps 73 to 74.
7. A 314-character report written only in numbers is caught, and work narration passes.

## What the ChatGPT check changed

These findings went to ChatGPT before the page shipped, which applies the third gate to
itself. Four corrections came back and all four are implemented.

| Correction | What changed |
|---|---|
| Word overlap is the wrong authority for findings coverage | Coverage is transactional: check id, payload fingerprint, evidence watermark. Similarity survives behind `--allow-similarity` only. |
| Any new measurement after a check should invalidate it | The watermark records evidence count and newest mtime; new evidence reads STALE. |
| A duplicate needs a shared subject anchor | A duplicate must share a file, song, id, url, route or proper name when both sides carry any. |
| The 500-character and two-marker rule was weaker than the stated guarantee | Floor dropped to 220 characters and numeric claims count as their own evidence of a report. |

## A latent bug this exposed

`queue_state.py` compared an offset-aware contract timestamp against naive queue
timestamps and raised `TypeError`, which surfaced as "completion state could not be
evaluated" and fail-closed. Fixed by normalising both sides through `_aware()`. Pre-fix
copy kept at `queue_state.py.PRE_TZFIX_2026-09-09.bak`.

## The gate turned on itself within the hour

A background-task completion notice reached `goal_loop_gate.py` through the same stdin
channel as a typed turn, scored 0.00 overlap against the open instruction, and the pivot
rule closed a contract carrying ten required outcomes. A `MACHINE_TEXT` guard now makes
notifications, system reminders, command stdout and hook output open nothing and supersede
nothing. The contract was rebuilt from `scope_contract_history.jsonl` with `closed_at`
cleared and a `restore_reason` recorded.

## Backups taken

- `settings.json.bak-pre-goalloop-2026-09-09`
- `completion_stop_hook.py.PRE_PERSESSION_2026-09-09.bak`
- `queue_state.py.PRE_TZFIX_2026-09-09.bak`
- `question_dedup.py.PRE_FINDINGS_2026-09-09.bak`

Palette: Fantastic Mr. Fox, Wes Anderson rotation.
