# Impossible-Guitar Chat Cluster: Token Waste Audit
**Date:** 2026-08-12
**Scope:** 6 sessions, 2026-08-10 through 2026-08-12
**Method:** direct read of `usage` records in `~/.claude/projects/-Users-drwu/*.jsonl`, plus `/session-audit` (`analyze.py`) over the 30 most recent sessions.
**Note:** session `81d2b7bf` was still live and writing during this audit, so its counts are a floor.

## The cluster

| Session | Output tok | Context read | Turns | Batch % | Errors | Dup reads | Repeat bash | Hours |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 0cf2ca1c | 443,387 | 93,357,009 | 190 | 0% | 12 | 2 | 39 | 4.9 |
| 665cdd96 | 889,441 | 324,880,161 | 452 | 0% | 6 | 20 | 28 | 38.1 |
| d4624b2a | 748,154 | 262,978,409 | 346 | 0% | 5 | 4 | 27 | 4.5 |
| 242ef1ad | 175,127 | 15,847,907 | 56 | 0% | 2 | 4 | 10 | 0.5 |
| 758ba450 | 525,968 | 140,389,478 | 272 | 0% | 10 | 0 | 53 | 2.3 |
| 81d2b7bf | 1,879,609 | 808,770,476 | 1,044 | 0% | 7 | 0 | 270 | 29.9 |
| **TOTAL** | **4,661,686** | **1,646,223,440** | **2,360** | **0%** | **42** | **30** | **427** | **80** |

204 real user prompts produced 4,496 assistant turns. That is **22.0 assistant turns per prompt**.

## Waste line items, largest first

### 1. Context-bloat tax: 493,513,569 tokens (29% of all context read)
Every turn re-reads the whole accumulated context. Held to a 300K working context, the same 2,360 turns would have read 1.15B instead of 1.65B.

| Session | Actual | At 300K cap | Tax | Tax % |
|---|---:|---:|---:|---:|
| 0cf2ca1c | 93,357,009 | 85,803,249 | 7,553,760 | 8% |
| 665cdd96 | 324,880,161 | 246,346,860 | 78,533,301 | 24% |
| d4624b2a | 262,978,409 | 201,205,953 | 61,772,456 | 23% |
| 242ef1ad | 15,847,907 | 15,847,907 | 0 | 0% |
| 758ba450 | 140,389,478 | 117,479,954 | 22,909,524 | 16% |
| 81d2b7bf | 808,770,476 | 486,025,948 | **322,744,528** | **39%** |
| **TOTAL** | **1,646,223,440** | **1,152,709,871** | **493,513,569** | **29%** |

`81d2b7bf` peaked at a **997,204-token context** and ran **29.9 hours**. `665cdd96` ran **38.1 hours**. Both breach the standing `end long sessions` gate, and the gate is the fix.

### 2. Idle keepalive turns: 166 turns, 83,757,498 context tokens for zero work
Turns whose only action was `sleep N; echo waited`.

| Session | Idle turns | Context tokens burned | Share of that session |
|---|---:|---:|---:|
| 81d2b7bf | 155 | 80,494,480 | 9% |
| 665cdd96 | 9 | 2,859,740 | <1% |
| 0cf2ca1c | 1 | 207,824 | <1% |
| d4624b2a | 1 | 195,454 | <1% |
| **TOTAL** | **166** | **83,757,498** | |

Plus 42 `ScheduleWakeup` calls. The `/loop` was authorized by Brandon, so this is not a policy breach. It is still 83.7M tokens of sleeping, and a sleep turn pays full context price for an empty result.

### 3. Rework: the skill that ends the problem was written last
`~/.claude/skills/impossible-guitar-parts/SKILL.md` was created **2026-08-12 18:03**. Measured against that timestamp, **100% of the cluster's 4.66M output tokens were spent before the skill existed**. The same defect was re-diagnosed cold in at least four separate sessions:

- 08-10 `0cf2ca1c` "is it fraud, do all the appleseed cast songs have guitars ba..."
- 08-10 `665cdd96` "Finish the appleseed cast chats here"
- 08-10 `d4624b2a` "resume Apple Seed Cast chat review and fix the skill"
- 08-11 `81d2b7bf` "**still** seeing impossible guitar parts and two guitars arragned for one"

### 4. Serialization: 0% batching on 2,360 tool calls
The standing gate targets above 40%. Every independent call was a solo round trip, in all six sessions. The 30-session `/session-audit` returns the same 0%, so this is systemic rather than local to this cluster.

### 5. Churn: 427 repeated bash commands, 30 duplicate reads, 42 tool errors
Top repeats include the same Kilgore Trout `gp_swap` rebuild fired 20 times, and a second variant 14 times.

## Outcome

The cluster's last user messages are "still seeing impossible guitar parts" (08-11) and "why did yo stop" (08-12 23:08). 4.66M output tokens and 80 hours did not close the defect.

## Fixes, ranked by tokens recovered

1. **Clear at 300K context.** Recovers ~29% of context spend, ~494M tokens on this cluster alone. Write a handoff, `/clear`, reopen.
2. **Stop paying for sleep.** 83.7M tokens went to `sleep; echo waited`. Use a real wait condition or end the turn.
3. **Write the skill first.** `impossible-guitar-parts` now exists, so run `/impossible-guitar-parts` on the next tab instead of re-deriving the hand-span rules.
4. **Batch independent calls.** 0% against a 40% target across 2,360 calls.
5. **One session per defect.** Four cold restarts on one bug is the largest structural cost here.
