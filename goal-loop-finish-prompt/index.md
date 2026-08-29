# Stop-resistant goal and loop prompts

Source: `~/.claude/skills/_shared/GOAL_ALL_DONE.md`

The `/goal` evaluator judges what was surfaced in the conversation, having no way to run a
command or open a file. Both blocks demand only artefacts that appear in the transcript.
Its third verdict, Impossible, clears the goal and records a failure, so the condition
reserves that for something no one could satisfy.

## The /goal condition (3279 chars, cap 4000)

```
Evaluate whether the WHOLE job the user asked for is finished, not whether Claude finished its latest step. Judge the conversation, since that is all you can read.

Require an explicit enumeration. Claude must have restated the request as numbered sub-asks. If no such list appears, return INCOMPLETE and require it first, because an unenumerated request cannot be shown complete.

Require evidence beside every item, of a kind you can actually see in the conversation: the command that ran together with its real output, a file path with its size or hash, a URL with its HTTP status code, a measured number with units, or a validator verdict quoted from the validator. Claude's account of its own work is not evidence. A filename containing final, fixed, best, done, complete, restored, verified, or v2 is not evidence. "I ran it and it passed" with no output is not evidence. "Should be working now" is not evidence.

Return INCOMPLETE while any of these appears without a later resolution that carries evidence: an item queued for later, an item deferred, a failed gate, a failed test, a validator returning anything but pass, an unresolved review comment, a promised follow up, a stated next step, a TODO, a partial pass, a caveat that changes the answer, or a sub-ask from the original request that was never worked at all.

Return INCOMPLETE on stopping-shaped moves when executable work remains. All of these count: pausing, wrapping up, summarising progress instead of continuing, asking the user whether to continue, asking which option to take when Claude could test both, presenting an unresolved defect as a natural stopping point, offering to do the rest later, or calling remaining work out of scope when the user's own request contains it.

A local success is not completion. A script exiting zero, a build succeeding, a file being written, or an aggregate metric improving does not finish the job when a hard requirement still fails. Better numbers are not a passing gate.

Where Claude reports something blocked, require three things before accepting it: the exact operation that failed, the exact error or output it produced, and every distinct route already attempted with the result of each. One failed route is not a block. If an untried route exists that Claude has the tools to attempt, return INCOMPLETE and identify that route.

Never judge this condition impossible while any untried route exists. Impossible is reserved for a condition that can never be satisfied by anyone, and it clears the goal, so hard, slow, repeatedly failing, or currently blocked all mean INCOMPLETE instead. A task that needs a decision only the user can make is not impossible either; return INCOMPLETE and say which decision.

Accept stopping only when every enumerated sub-ask carries its own evidence, or when the remainder genuinely depends on information, access, credentials, a file that does not exist, or a decision only the user can make, documented to the standard above.

Respond with JSON only. {"ok": true} when the whole job is complete by these rules. {"ok": false, "reason": "<the exact remaining work and the next command to run>"} otherwise. The reason becomes Claude's next instruction, so write a concrete next action rather than a description of the gap.
```

## The /loop prompt (1002 chars)

```
Continue the current job to completion. Do not summarise progress, do not ask whether to continue, and do not wait for confirmation.

1. List what is still outstanding, as numbered items, taken from the user's original request plus whatever is already queued. Read the queue with: python3 ~/.claude/skills/no-quit-shift/queue.py status
2. Take the first item that has an executable next step and finish that item this pass.
3. Put real evidence for it in the reply: the command together with its output, a file path with size or hash, a URL with its HTTP status code, or a validator verdict quoted from the validator. Never an unbacked claim.
4. If an item is genuinely blocked, state the exact operation, the exact error, and every route already tried, queue it with: python3 ~/.claude/skills/no-quit-shift/queue.py add "<item>" and then move to the next item rather than stopping.
5. Finish only when every item carries its own evidence. As long as work remains, state the next action and keep going.
```

## Why each clause is there

| clause | the failure it was written against |
|---|---|
| enumeration first | chats do part of the ask, then report the part as the whole |
| evidence you can see | the evaluator reads the transcript, so a claim and its check share one source |
| filename is not evidence | `s6389251-BEST.gp` was iter48, the outlier, and its filename decided a regression call |
| queued or deferred means incomplete | queueing an item became a way to look finished while dropping it |
| stopping-shaped moves | "should I continue?" is how a turn ends short of finishing |
| exit zero is not completion | a fixed-shape tool writes a full-size empty file and still exits 0 |
| one failed route is not a block | a 403 closes one fetch path, never the information |
| the reason is the next instruction | the evaluator's text is fed back, so it has to be an action |
| impossible is not for hard | the third verdict CLEARS the goal and logs a failure, so it needs its own guard |

Written 29 August 2026.
