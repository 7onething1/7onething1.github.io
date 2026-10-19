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
| This session before the fix | 64 tool turns, 0 batched = 0.0% | above 40% |
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

## The change that shipped

`~/.claude/hooks/batch_streak_gate.py`, wired as a `PostToolUse` hook on `Bash|Read|Grep|Glob` in
`~/.claude/settings.json` (previous settings backed up to
`settings.json.bak-pre-batch-streak-20261019-143412`).

Known-answer control, run before trusting it:

| Fixture | Result | Expected |
|---|---|---|
| 3 single-call turns | quiet | quiet |
| 4 single-call turns | fired | fired |
| 5 single-call turns | quiet | quiet, between thresholds |
| 8 single-call turns | fired | fired |
| 4 singles then a batched turn | quiet | quiet |
| malformed stdin / empty payload / missing file | exit 0 | exit 0 |

## Not done, and not claimed

The 493 shell redirects and the duplicate reads have no mechanical check yet; both remain prose
only. Whether this session's own settings watcher picked up the new hook is unverified, since the
nudge only fires on a four-turn run of single calls; a new session loads it for certain.

No Vercel deploy, per the standing rule that this Mac ships to GitHub Pages.
