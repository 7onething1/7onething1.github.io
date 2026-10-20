# Stopping Fraud And Waste

Route: `/stop-the-fraud-research`
Built: 2026-10-19 on Jacks-iMac
Host: GitHub Pages (`7onething1.github.io`). This Mac does not deploy drwu-htmls to Vercel.

## The ask

`/goal research how we can stop the fraud and inefficeinty`

## The short answer

Prose does not stop either one. A check that runs does, and it has never once been bypassed on this
machine.

```
a rule in CLAUDE.md with nothing that runs
   batching target written above 40% since 2026-07-19
   measured rate 6% across 9,009 tool turns          -> does not hold

a blocking Stop gate
   override markers ever created on this Mac: 0
   no ~/.claude/*.allow, no .opus_ok, no completion.allow_stop
   every substantive error this session was caught by
   a gate rather than by self-review                 -> holds
```

So gating is settled. What remains is three specific defects in how the gating is wired.

## Defect 1: a spent budget lets a failing session exit

**4 of 13 sessions had exhausted the shared 4-refusal budget.** When the budget is spent the gates
stop blocking, so each of those ended with its refusal reason unresolved, which is the exact failure
the gates exist to prevent.

The cap is correct in design. The Stop chain does not short-circuit, and `_stop_budget.py` records
that on one event the gates at chain positions 5, 6, 8 and 13 all blocked, so a per-gate ceiling of
two would have admitted up to 26 extra turns. A bigger cap only buys more turns of the same
argument. The fix is to spend fewer refusals on causes that need no judgement.

## Defect 2: the most frequent cause needs no judgement

Across those 13 sessions, "no task contract recorded" is the top refusal cause. The remedy is one
deterministic command: take the user's instruction verbatim and hand it to `scope_controller init`.
Every one of those refusals spent a round trip, and a slot of the budget, to discover something the
harness already had.

Fixed today by `auto_contract_init.py`, a UserPromptSubmit hook, 9 of 9 controls.

## Defect 3: the false-positive tax was never counted

In this session the completion gate refused four times on its "asserted claim contradicted by its
own evidence" rule, and every one was the claim parser reading a number out of prose:

| Text I wrote | What the parser made of it |
|---|---|
| `sha256` matched | the count 256 |
| "540 of 9,009 turns batched" | a shortfall of 8,469 that no count record can satisfy |
| "12 of 126 results" | a shortfall of 114 |
| "13 add-ons in the trash" | a deletion of 13 |

The rule behind it is right and worth keeping. The trigger misfires on ordinary English, and nothing
counted that until today. The established practice has a name, guardrail telemetry: every check
emits a verdict, and the false-positive rate is computed from labeled traffic. One published
interceptor reports 1.2% on 500 benign tool calls. Nothing here emitted a verdict, so the rate was
unknowable.

Now measurable by `gate_ledger.py`. First labeled tally: 11 true_catch, 2 needs_parser_fix,
2 unlabeled, across 13 sessions.

## Built today

| Thing | Event | Controls |
|---|---|---|
| `auto_contract_init.py` | UserPromptSubmit | 9 of 9 |
| `gate_ledger.py` | reader, not a gate | n/a |
| `batch_streak_gate.py` | PostToolUse | 8 of 8 |
| `write_tool_nudge.py` | PreToolUse | 14 of 14 |
| `duplicate_read_gate.py` | PostToolUse | 10 of 10 |
| `invocation_failure_gate.py` | PostToolUse | 11 of 11 |

Every one is a nudge rather than a refusal, so they never spend the Stop budget, and each returns zero
on malformed input so a malformed payload leaves the tool call alone. Prior art for the ledger was checked through
`prior_art_gate.py` before building, with the decision logged as build and its reason recorded.

## Not done, and why

**The claim parser needs the fix and I am the wrong one to make it.** It lives inside
`completion_stop_gate.py`, the gate that judges whether my claims are honest. A model editing the
rule that grades it has a conflict of interest however correct the patch looks. The remedy is small:
skip fenced code spans, and do not read a digit sequence inside a token like `sha256` as a quantity.
That is Brandon's call to make or delegate.

**4 refusals were recorded with no reason kept.** The spend survives and the cause is lost, so the
dispatcher drops it on one path. That should be traced before the cause table is trusted as
complete.

**The labeled false-positive rate comes from one session of labeling**, so the printed figure is a
floor rather than a measurement.

## Display note

One word in the gates' own refusal messages is on the house banned word list, and the voice checker
reads text with markup removed, so the verbatim string fails the check. That single word is
substituted for display on the page, the substitution is listed there, and nothing else in the cause
text is changed.

## The finding that indicts this page, added 2026-10-19 16:45

Every mechanism described above costs about 52 ms of Python interpreter startup, and the three
nudges added while writing this page made each Bash call roughly 156 ms slower. That was measured
only after Brandon asked for more honesty, which is the wrong order.

```
hook latency on ONE Bash call     695 ms across 12 processes
a do-nothing python hook           51.8 ms   <- the floor every hook pays
therefore interpreter startup      622 ms
all twelve hooks' logic combined   ~13 ms
the three nudges added today      ~156 ms, almost entirely startup

after consolidating those three into one process:
processes per Bash call            12 -> 11
measured saving                    22 ms   (the prediction was 52 ms)
my nudges still cost              ~104 ms per Bash call
```

The consolidation was proved by equivalence rather than with fresh fixtures: every original control
ran through both the old script and the new entry point, 33 paired cases returned identical
verdicts, 40 of 40 correct overall.

### The controls on this page are weak evidence

Every "N of N controls" figure here was written by the same author as the code it tests, in the same
hour. A fixture cannot catch a misunderstanding it shares with the code, and the demonstration is
already on the page: `batch_streak_gate.py` passed 5 of 5 of its own controls and was still wrong,
because every fixture counted tool calls per JSONL record exactly as the buggy code did. Those
counts show the logic matches its author's intent and nothing more.

**None of the six hooks has fired once in production.** They are not loaded in the session that wrote
them, so the honest status is written and self-tested, unverified in use. `claude_nudges.py` now
appends one line per firing to `~/.claude/_state/nudge_ledger.jsonl`, starting at zero, so that
question becomes answerable. The three test firings were moved aside rather than removed.

### The large win left on the table

Nine blocking safety gates still run one process each, about 470 ms per Bash call. Consolidating
them behind one dispatcher would recover most of that, and `stop_dispatch.py` proves the pattern
works here. Left alone deliberately: a bug in such a dispatcher drops a refusal silently, where a
bug in the nudge dispatcher only costs time. That is Brandon's call.
