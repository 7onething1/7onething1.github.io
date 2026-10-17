# Reharm architecture: the fresh local check

Measured on **Jacks-iMac**, 2026-10-17, against the September 10 Claude Code audit.
Full remediation prompt and plan: `~/Projects/_outputs/reharm-architecture-remediation/REHARM-REMEDIATION-PROMPT.md`

## The four verdicts

| Verdict | Claim | Measured |
|---|---|---|
| **Held** | per-turn context cost ~556,000 | **625,521** cache-read per assistant turn |
| **Wrong target** | edit `run_gates.py`, `completion_stop_hook.py`, `no_stop_gate_hook.py` | none of the three exists; real chain is **17 Stop hooks**, 11 of 15 inspected emit a block decision |
| **Worse than stated** | CLI imports and inspects, 3 commands missing | **zero bytes of executable Python**; `SKILL.md` line 41 already marks it not implemented |
| **Unverified** | 12 sessions, 1,610 turns, 496,941,520 tokens | Sept 10 here: **1 session, 70 turns, 43,786,490 tokens**; MacBookPro unscanned |

## Context baseline

| Item | Audit | Measured |
|---|---|---|
| Skill descriptions | 23,134 | **41,486** (169 enabled, 150 described) |
| Project CLAUDE.md | 4,125 | 3,535 |
| MEMORY.md | 10,438 | 4,968 |
| Global `~/.claude/CLAUDE.md` | 2,704 | **absent** |
| **Auto-loaded total** | **40,401** | **49,989** |
| POINTERS.md | not counted | **53,281**, retrieval only |

`POINTERS.md` is larger than the whole audited baseline and is correctly kept out of it, reached by grep. It is the pattern the skill roster should copy.

## The hook that hides

`completion_stop_gate.py` emits no block decision and no `exit(2)`, so a grep for *block* misses it. A comment at line 301 records it reaching Claude as "No stderr output" with no reason attached.

## The engine

Eight empty `__init__.py` files. Empty `bin/`, `scripts/`, `tests/{unit,property,integration,golden}`, `examples/reports`, `fixtures/{incomplete_evidence,midi_only,gp_full}`. Real and usable: `reharm-ir.schema.json` at 16,916 bytes plus three reference documents. The build is greenfield against a settled schema, which is cheaper than the repair the audit assumed.

## Three-phase plan

1. **Bound the supervisor, shrink the baseline.** Block counter on each of the 11 blocking Stop hooks, ceiling 2, third attempt passes and states the reason. Move trigger lists out of front-matter. Exit: block-block-pass test green, baseline under 25,000.
2. **Build the engine, tests first.** `doctor import map generate write-midi verify`; `doctor` exits 0 only when the five run on the fixture. Tests fail on their recorded bad case before being trusted. Exit: `bin/reharm doctor` exit 0.
3. **One song, then the MacBookPro scan.** One Shiner song, three distinct candidates, melody and bass preserved, exported, reopened, tested by bar and pitch. Exit: live page at http 200, fraud check green.

## Accuracy boundaries

File token counts are chars/4 estimates, within roughly 10%. Transcript token counts are exact from each record's `usage` field. Retention is not a factor: `cleanupPeriodDays` is 36500, 98 dates present from 2026-05-05 to 2026-10-17, all thirty September days included.

Unverified and labelled as such: the twelve-session count, the 1,610-turn count, the 496,941,520-token total, the 251 blocked stops, and the 204-of-251 attribution.
