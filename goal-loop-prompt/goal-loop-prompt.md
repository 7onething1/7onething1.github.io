# The goal and loop prompt that does not let Claude stop early

Written 2026-08-29. The problem it solves, in one line: **`/goal`'s completion
evaluator reads the conversation and nothing else**, so a well-written summary
passes it. Claude ends up grading its own homework by describing the homework.

Anthropic's docs say the evaluator "judges your condition against what Claude has
surfaced in the conversation." It is a prompt hook. Prompt hooks cannot run
commands and cannot read files. Only `command`, `http` and `mcp_tool` hooks can.

So a goal condition written as a *description of a finished state* is
unenforceable. A goal condition written as **a demand for specific command output**
is enforceable, because the evaluator can see whether that output is in the
transcript, and Claude cannot fabricate an exit code it never ran without lying in
a way the command hook then catches.

---

## The rule the prompt is built on

> Write every condition so the only way to satisfy it is to paste a command's
> output. A condition a sentence can satisfy will be satisfied by a sentence.

---

## The template

Paste this into `/goal`, replacing the bracketed parts.

```
Finish [THE TASK], where finished means ALL of the following are true and each is
proven by output already printed in this conversation, not by a claim about it:

1. ENUMERATION. A numbered checklist of every distinct sub-ask appears in the
   transcript, written before the work started. If the user added asks mid-turn,
   the list was extended and re-shown. No item may be merged away or reworded
   smaller.

2. PER-ITEM EVIDENCE. Beside every item there is one of: a file path that a
   command in this transcript read, a live URL with the http code a curl in this
   transcript returned, or the stdout of the command that did the work. An assertion that the item
   is done carries no weight here.

3. GATE EXIT CODES. For every gate that applies, the transcript shows the command
   AND its numeric exit code, printed by `echo "exit=$?"` or equivalent. A gate
   described as passing without its exit code counts as not run.

4. NEGATIVE CHECK. For at least one gate, the transcript shows it FAILING on a
   deliberately bad input, in this session. A gate that has never been seen to refuse
   anything is unproven as a gate.

5. NOTHING PARKED AS A SUBSTITUTE. Queueing an item leaves it undone. If an item
   was queued instead of done, the condition is NOT met unless the user explicitly
   said to park that specific item.

6. MEASURE THE CONTENT. For every artifact produced, the transcript shows a
   measurement of what is INSIDE it (a count, a diff, a rendered read), not only
   that it exists and the writer exited 0. A fixed-shape tool will emit a full-size empty
   file and exit 0.

7. THE STOP-CHAIN RAN. `python3 ~/.claude/skills/session-fraud-check/session_fraud_check.py --hard-only`
   appears in this transcript with its RESULT line.

If any of 1 through 7 is unproven, the goal is NOT met, and the correct next
action is to do the missing work, never to explain why it is acceptable to stop.
```

## The one-line version, for small tasks

```
Finish [TASK]. Not met until the transcript shows, for every sub-ask, the command
output that proves it, every applicable gate with its numeric exit code, and a
session_fraud_check --hard-only RESULT line. A described result carries no weight here.
```

## For `/loop`

`/loop` re-enters on a schedule and makes no judgement about completion. Pair it with the
goal above so the loop has a terminating condition that is evidence-shaped, and
add this line so an idle tick cannot masquerade as progress:

```
On each iteration, either produce new command output that advances an unmet
numbered item, or state which item is blocked and what specific input is needed.
A tick that only restates prior progress is a no-op and must be reported as one.
```

---

## Why the prompt is not enough on its own, and what backs it

The evaluator verifies nothing. It can only notice that the transcript *looks*
like it holds evidence, so a determined summariser defeats it.

The authority therefore has to sit in a `command` Stop hook, which does read
files and does return an exit code. This repo already has that layer:

| hook | what it enforces | wired |
|---|---|---|
| `done_claim_gate.py` | no "done" language unless the turn actually read the artifact or ran the fraud check | yes |
| `fraud_check_gate.py` | the fraud scanner ran | yes |
| `source_grounding_gate.py` | factual claims carry sources | yes |
| `ask_drift_gate.py` | the reply addresses the thing the user named | yes |
| `no_idle_stop_gate.py` | completion-shaped reply + empty queue = keep working | **NO, written but never installed** |

The gap found while writing this: **`no_idle_stop_gate.py` was authored and left
out of `settings.json`**, so the one gate aimed squarely at stopping-too-early has
never fired. Installing it is part of this deliverable.

## How to use it

1. `/goal` then paste the template with the task filled in.
2. Work. Every claim you make, print the command that proves it first.
3. The goal auto-clears when the condition holds. If it will not clear, the
   condition is telling you an item is unproven; find which numbered item has no
   output beside it.

## What this deliberately does not do

It leaves the prompt itself untrusted on purpose. The prompt's whole job is to
demand artifacts that a separate executable layer can then check. The prompt sets
the shape of the evidence, and the command hooks decide whether it is real.
