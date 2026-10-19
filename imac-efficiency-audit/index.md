# iMac Efficiency Audit

Route: `/imac-efficiency-audit`
Built: 2026-10-19 on Jacks-iMac
Host: GitHub Pages (`7onething1.github.io`). This Mac does not deploy drwu-htmls to Vercel.

## The question

Brandon asked how this Mac could become more efficient the way the MacBook did.

## The answer, and the correction to the premise

The MacBook found no faster setting. Its own first finding was that switching off 52 unused
Anthropic skills buys no speed, because skills load as bare names: roughly 1,300 characters of an
88,000-token start. What it actually produced was a list of ten named mistakes, each with an
executable fix, six of them about choosing the wrong route and paying in round trips.

Applying that same method here found one failure larger than anything on the MacBook's list.

## Measured on this Mac, 2026-10-19

| Measure | Observed | Target |
|---|---|---|
| Parallel tool-call rate, 30 sessions | 540 of 9,009 turns = 6% | above 40% |
| This session, measured by message.id | 128 tool turns, 42 batched = 32.8% | above 40% |
| Bash share of tool calls | 8,413 | n/a |
| Shell redirects in place of Write | 493 | under 10 |
| Worst duplicate reads in one session | 35 | 0 |
| Cache hit ratio | 99.4% | above 90% |
| Skill invocations | 16 | above 10 |
| Agent dispatches | 0 | n/a, policy forbids them here |

Source: `~/.claude/skills/session-audit/analyze.py`, report saved to
`~/Projects/_outputs/session-audit/session_eval_2026-10-19.txt`. The per-session figure comes from
a direct parse of this session's own transcript.

## The diagnosis

Batching has been a hard gate in `CLAUDE.md` since 2026-07-19 and has its own memory file. Both are
prose, and prose produced 6%. Of the 52 hooks on this Mac, none measured tool-call shape. Every
hard gate that actually holds here holds because something runs and refuses.

## The four checks that shipped

The first three read a signal the audit measured. The fourth reads one the audit does not measure at
all, found by parsing this session's own transcript. All print one line and return zero on every
path, so none can block a tool call. Each was proven against inputs with known answers in BOTH directions first,
because on 2026-08-29 a fix on this Mac passed its single positive control, shipped, and then failed
a negative control already sitting on disk.

| Hook | Event and matcher | Controls |
|---|---|---|
| `batch_streak_gate.py` | PostToolUse, `Bash\|Read\|Grep\|Glob` | 5 of 5 (3 quiet, 4 fire, 5 quiet, 8 fire, 4-then-batched quiet) |
| `write_tool_nudge.py` | PreToolUse, `Bash` | 14 of 14 (5 positives fired, 9 negatives quiet) |
| `duplicate_read_gate.py` | PostToolUse, `Read` | 10 of 10 (fires on the 3rd read and every 3rd after) |
| `invocation_failure_gate.py` | PostToolUse, `Bash` | 11 of 11 (6 positives, all real failures from this session; 5 negatives) |

Each also exits 0 on malformed stdin, an empty payload, a missing file and the wrong tool.

Settings backups: `.bak-pre-batch-streak-20261019-143412`, `.bak-pre-write-dup-20261019-144123` and
`.bak-pre-invocation-20261019-145327`. After wiring: 4 PreToolUse entries, 4 PostToolUse entries,
7 UserPromptSubmit hooks, 14 top-level keys, all intact.

### What each negative control protects

`write_tool_nudge.py` stays quiet for `/dev/null`, a heredoc feeding python stdin, `curl -o
/dev/null`, a bare `2>&1`, a comparison operator inside a test, and any redirect into the
scratchpad. Without those exclusions it would fire on most commands and be ignored within a turn.

## Not done, and not claimed

All three anti-patterns the audit reports now have a running check, and a fourth pattern the audit
cannot see has one too: calls spent guessing an invocation, 12 of 126 results in this session, 9.5%,
found only by parsing the transcript directly. Three limits remain, and
none is hidden. Each check is a nudge rather than a refusal, deliberately: blocking a shell
redirect would break legitimate pipelines. The fourth also fires on a log that merely quotes a
failure. And whether the session that wired them loaded them is now settled: it did not, proven by
probe at 14:46, because the settings watcher only watches directories that held a settings file when
the session began. A new session loads all four.

No Vercel deploy, per the standing rule that this Mac ships to GitHub Pages.

## Correction, 2026-10-19 15:05

An earlier version reported this session at **0.0% batching across 64 tool turns**. That was my own
parser bug, not a real result. Claude Code writes ONE JSONL RECORD PER CONTENT BLOCK, so a message
carrying three parallel calls becomes three records of one call each; counting per record can never
see a batched turn. The MacBook documented and fixed this on 2026-08-12 in
`sfg/skill-sync-2026-08-12-session-audit-meter-fix`, and `session-audit/analyze.py` on this Mac
already carried the fix, which is why the 6% figure stands. My parser did not.

Re-measured keyed on `message.id`: record-split ratio **2.41**, tool turns **128**, batched **42**,
rate **32.8%**, 1.37 calls per turn, distribution `{1: 86, 2: 38, 3: 3, 4: 1}`.

`batch_streak_gate.py` carried the same bug in its first version and would have fired permanently on
a session that batches well. Fixed to key on `message.id` and re-proved on **8 of 8** controls,
including two fully-batched fixtures (3 calls per message across 15 records, and 2 per message across
8 records) that must stay quiet and do.
