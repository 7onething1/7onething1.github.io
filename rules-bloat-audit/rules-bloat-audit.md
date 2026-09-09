# Rules Bloat Audit — 2026-09-09

Measured from `~/.claude/`, three CLAUDE.md files, 900 memory notes, and 134 transcripts (20,895 tool calls). No sampling.

## Headline
- Fixed rule context per turn: **~41,416 tokens**
- Of that, **~20,379 tokens buy nothing** (descriptions of skills never invoked)
- Skill tool invocations: **54 of 20,895 tool calls = 0.26%**
- **165 of 182 skills never invoked once**
- **298 of 731 cited file paths are dead (41%)**

## Measured
| Source | Chars | Tokens | Loaded |
|---|---|---|---|
| Skill descriptions (173 SKILL.md) | 89,918 | ~22,479 | every turn |
| MEMORY.md | 40,730 | ~10,182 | every session, TRUNCATED |
| CLAUDE.md x3 | 35,019 | ~8,754 | every session |

## Memory
- 900 notes, 2.9 MB. 351 untouched 90+ days. 210 linked by no other note.
- 143 notes carry retire/supersede language and stay live.
- 51 notes still mention kid mode (retired 2026-07-13).
- 163 notes say Vercel vs 13 GitHub Pages, while policy is GitHub Pages for new pages.
- Only 2 of 900 notes are orphaned from both indexes. Indexing discipline is sound.

## Hooks
- 39 wired: Stop 16, PreToolUse 10, UserPromptSubmit 6, SessionStart 3, PostToolUse 3, Notification 1.
- `block_desktop_writes.py` wired TWICE in PreToolUse.
- 15 hook scripts on disk unwired.

## Healthy, do not cut
- fifty-gates: 63 gates defined, runner iterates generically, all 63 execute. Verified.
- Core behavioral gates (grounding, never-delete, stem attribution, live-URL verify, batching).

## Ranked proposal
1. Archive ~140 never-invoked skills → ~20,000 tok/turn, 15 min
2. Cap SKILL.md descriptions at 200 chars → ~4,000 tok/turn
3. Cut MEMORY.md under 20 KB so it stops truncating
4. Fix 7 most-cited dead paths, starting `~/MAP.md`
5. Rewrite the Vercel majority so the live host wins
6. Move 143 self-retired notes to MEMORY_ARCHIVE
7. Merge 3 CLAUDE.md into one
8. Remove duplicate block_desktop_writes hook
9. Collapse 16 Stop hooks into one runner
10. Move 249 .bak files (10 MB) out of `.claude`

**Items 1, 3, 8 alone recover ~20,000 tok/turn in under 90 minutes, deleting nothing.**

## Not done
No files moved, edited, archived or deleted. Read-only audit. Every proposed action is a move into an archive folder, per the never-delete rule.
