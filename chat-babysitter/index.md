# Chat Babysitter

A watchdog that reads the tail of every Claude chat transcript on this Mac and
classifies how each one ended. Verdicts come from the transcript, never from a
chat's own summary of itself.

## What it runs

`~/.claude/skills/babysit-chats/babysit.py`

```bash
python3 ~/.claude/skills/babysit-chats/babysit.py --since 7d
python3 ~/.claude/skills/babysit-chats/babysit.py --since 24h --flagged-only --json
python3 ~/.claude/skills/babysit-chats/babysit.py --html ~/Projects/drwu-htmls/public/chat-babysitter/index.html
```

Reads `~/.claude/projects/*/*.jsonl`. State lands in
`~/.claude/no_quit_state/babysit_state.json`.

## The rules

| Rule | Severity | What it catches |
|---|---|---|
| `ABANDONED_MIDTOOL` | hard | A tool call that never returned. The chat announced work and the process died holding it. |
| `PUNTED_TO_QUESTION` | hard | Ended on an `AskUserQuestion` or `ExitPlanMode` nobody answered. A dismissed question is a denial, not a pause. |
| `DONE_NO_PROOF` | hard | Claimed done with no path, URL, http code, code block or tool call anywhere in the reply block. |
| `UNANSWERED_USER` | hard | Last event is a user turn with no reply. |
| `QUIT_PHRASE` | hard | Ended on one of the 74 permission-asking phrases in `QUIT_PHRASES.txt`. |
| `PLAN_NO_EXEC` | warn | Promised a next step in future tense, then went silent. |
| `DECISION_PARKED` | info | Stopped on a quit phrase but parked the decision as a `q-YYYY-MM-DD-xxxxxx` queue id. Honest. |

## False positives fixed during the build

The first pass flagged 11 chats. Five of those were detector bugs, and each one
was traced to a cause rather than filtered out.

1. **Proof read from the final turn only.** A sign-off turn after a proof-heavy
   turn read as fraud. The rule now judges the whole reply block.
2. **The harness writes into the user role.** Stop-hook feedback arrives as a
   `user` record, which was resetting the reply block and hiding the proof.
   `HARNESS_TURN` now skips those.
3. **`All three routes return 200` was not counted as proof.** The regex wanted
   `200 OK`.
4. **`the saver is running now` read as a broken promise.** Past-tense
   confirmations are now excluded from `PLAN_NO_EXEC`.
5. **A parked decision read as a quit.** A stop that hands over a real decision
   and files a queue id is `DECISION_PARKED`, not fraud.

## Root cause of the quitting

`stop_gate.py` is the gate that refuses a premature stop. It is wired **0 times**
in `settings.json` and `settings.local.json`, while 13 other Stop hooks are
installed. Run standalone it works:

```
no-quit-shift: REFUSING stop. 135 item(s) still QUEUED, ready work.
```

Arming it is a live decision, not a safe default: with 160 open queue items it
would refuse every stop in every chat until the backlog drains. That call is
Brandon's.
