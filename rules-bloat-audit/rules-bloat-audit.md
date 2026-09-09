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

---

## 09. Sharpest single cut: the music-library map is 100% dead
`~/.claude/CLAUDE.md` cites **69 paths, loaded every session. 22 alive, 47 dead (68%).**
2 of the 47 are `<route>` templates, so 45 are genuinely dead.
- `~/Music/Loops` — MISSING ENTIRELY
- `~/Music/mashup_dashboard/` — gone, with all 11 named scripts
- `~/Music/Mashups/TOP_30/` — gone
- `/Volumes/T7 Shield` — not mounted (drive, recoverable, different case)

The whole merged CLAUDE_LIBRARY_LOCATIONS section (~6,577 bytes) describes a filesystem that no longer exists.

## 10. Archived skills — 9 in `~/.claude/skills_disabled/`, all disabled 2026-08-12
| Skill | Data still exists | Verdict |
|---|---|---|
| **stem-frequency-map** | Yes, scripts+evals+refs+assets | **RE-ENABLE.** Surrogate-vs-direct QA in executable form, which is the live problem |
| ableton-pack-quality | canon path unresolvable | Re-enable when a pack ships |
| eyephim-oracle | tarot is the revenue lane, different reader from Kate | Hold, enable per reader |
| music-theory-corpus-check | **No**, Adam Neely corpus gone | Keep off |
| rhythmic-displacement-melody-grid | MIDI lane dormant | Keep off |
| question-response-audit | client work inactive | Keep off |
| frozen-board-scroller | kid mode retired | Move to archive |
| reddit-shift-stories | stub | Move to archive |
| voice-input | advice valid, not a skill | Convert to memory note |

Disabling all 9 saved **7,761 chars/turn (~1,940 tok)**. Working proof the same treatment on ~140 live never-invoked skills recovers ~10x that.

## 11. KEEP / MERGE / MOVE / ARCHIVE
- **KEEP verbatim:** never-delete; provenance and claim grounding; destructive-edits-need-instruction (plus: no queue item may propose editing Brandon's hooks).
- **MERGE, no content lost:** "evidence outranks surrogate measurement" is currently 7 notes / ~16.8 KB (stems-outrank-printed-charts, one-professional-transcription-outranks-the-ai-tab, stem-detection-must-attribute-the-instrument, a-check-that-agrees-is-not-a-check-that-closes, evidence-direction-confirming-vs-refuting, two-methods-disagree-find-your-own-bug-first, score-a-transcription-against-its-own-null). One authoritative formulation + 6 pointers.
- **MOVE to where they are used:** song-specific discoveries → song handoffs. Failed-technique records (envelope thresholding, multiband flux, dome/bell) → transcription-repair skill.
- **ARCHIVE:** music-library map (100% dead); kid mode (51 notes); ~140 never-invoked skill folders.
- **REWRITE:** the 163 Vercel notes that outvote the live GitHub Pages policy 12:1.

## 12. Provenance correction
The envelope-thresholding withdrawal is **real and on record** in session `55ae6cf2`: toms 3,325 whole-song = 16.38/bar against the tab's 0.56; kick 38 vs 23; snare 11 vs 8-9. Multiband flux failed the same way. Two independent formulations failed on the same lane.

The specific "**108 tom detections vs 29 hand-counted**" pairing traces to exactly ONE file: this session's own transcript (`47e763e6`), where it arrived inside a relayed message. Not sourced to any prior measured session. **The rule stands on the verified 3,325 figure.** The 108-vs-29 figure is carried as someone else's claim, not as a measurement.
