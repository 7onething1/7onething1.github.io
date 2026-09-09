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

## Proof the chain has teeth

1. A contract with open outcomes refuses the stop and names each one.
2. An outcome marked met on evidence that does not verify still refuses.
3. One session cannot edit another session's contract.
4. A paraphrased sibling question is caught at 0.64 similarity.
5. A findings reply with no same-day ChatGPT check is blocked, and work narration passes.

## A latent bug this exposed

`queue_state.py` compared an offset-aware contract timestamp against naive queue
timestamps and raised `TypeError`, which surfaced as "completion state could not be
evaluated" and fail-closed. Fixed by normalising both sides through `_aware()`. Pre-fix
copy kept at `queue_state.py.PRE_TZFIX_2026-09-09.bak`.

## Backups taken

- `settings.json.bak-pre-goalloop-2026-09-09`
- `completion_stop_hook.py.PRE_PERSESSION_2026-09-09.bak`
- `queue_state.py.PRE_TZFIX_2026-09-09.bak`
- `question_dedup.py.PRE_FINDINGS_2026-09-09.bak`

Palette: Fantastic Mr. Fox, Wes Anderson rotation.
