# Chat Bail Gates

Built 2026-08-30. Evidence from four live session transcripts on this Mac.

Brandon: "keep my active chats alive, they keep quitting and bullshitting reasons
to have me weigh in as extreme work avoidance, never let them do that they fraud
results and then manipulate hook"

## The three holes

**A. AskUserQuestion skipped every keep-alive.** All 15 keep-alive gates are Stop
hooks. A turn ending in an `AskUserQuestion` call never reaches Stop, it parks
waiting on a human. The `PreToolUse` matchers covered `Agent|Task`, `Bash`, and
`Write|Edit|NotebookEdit` only, and a grep for `AskUserQuestion` across the hooks
directory returned nothing. Observed: session `db06650b`, 5 assistant turns, exit
on "What do you want done with these three Zappa documents?"

**B. A punt is not completion-shaped, so no gate matched it.** The existing gates
look for a completion claim (done, shipped, built). Handing the work to a future
session claims nothing, so it passes. Observed: session `fbd241ec`, 1,407
assistant turns, closing on "Next session picks up the sweep" and "Paste it into
a fresh session." Same session used the concurrency warning as its reason to
stop: "Before I touch anything on Songsterr, that session needs to be the one
that stops."

**C. The one registered keep-alive was disarmed by its own queue, and it printed
its own bypass.** `no_idle_stop_gate.py` returned early when the shift queue had
open items. Live counts were `queued=713, in_progress=12`, so the list was never
empty and the gate returned zero on every stop it ever saw. Its refusal text also
told the model the way out: "add the phrase 'session truly complete' to the
response."

## Proof the gate was a no-op

One fixture transcript, completion-shaped, after a real `Write`, long user
message, no stop signal.

- Real 713-item queue: stdout empty, stop allowed.
- Same fixture, empty queue file: `{"decision": "block", ...}`.

Nothing changed between the runs except the queue file.

## The fixes

| Fix | File | Event | Self-test |
|---|---|---|---|
| Deny AskUserQuestion used as an exit | `~/.claude/hooks/ask_question_gate.py` | PreToolUse, matcher `AskUserQuestion` | 7 of 7 |
| Refuse a punt to a future or parallel session | `~/.claude/hooks/no_punt_gate.py` | Stop | 8 of 8 |
| Arm the idle gate, replace the phrase exit with an evidence check | `~/.claude/hooks/no_idle_stop_gate.py` | Stop | 3 of 3 re-tests |

`ask_question_gate.py` still allows a question about an irreversible or
outward-facing act (send, publish, delete, pay, deploy) and a question Brandon's
own message invited. `no_punt_gate.py` has no escape phrase; its only soft exit
is a real write to the shift queue inside 45 minutes. `no_idle_stop_gate.py` now
opens on checkable proof (a URL, an http status, a file path, a command-output
block) rather than on a sentence.

Run any of them with `--selftest`.

## Not covered

- The prompt-based Stop evaluator (hook 7) already forbids stopping, pausing,
  queuing, and asking whether to continue, and it is scoped to guitar
  transcription work only. Every other session gets none of it. Widening it costs
  tokens on every stop, so that call is Brandon's.
- `~/.claude/skills/no-quit-shift/stop_gate.py` stays unregistered. It refuses a
  stop when any item is queued, and with 713 queued plus 327 blocked it would
  force every session to pull six-month-old work before it could stop.
- Three sessions are working the same Songsterr and Zappa tabs. That collision
  predates this work.

## Backups

Nothing was deleted.

- `~/.claude/hooks/no_idle_stop_gate.py.bak-pre-arm-2026-08-30`
- `~/.claude/settings.json.bak-pre-bailgates-2026-08-30`
- Fixtures and the transcript scanner: `~/Projects/_outputs/keep-chats-alive/`
