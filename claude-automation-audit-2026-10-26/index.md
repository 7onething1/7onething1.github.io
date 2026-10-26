# Automation Audit and Change Report, 26 October 2026

A continuation controller that ran unattended and finished the job, ten defects
found by testing it, and a free upgrade reverted for breaking two standing gates.

Machine: Jacks-iMac. Cost of everything below: $0. Code written: 1,596 lines across
two skills. Defects found in my own work: 10. Improvements reverted after testing: 1.

## The seven asks

| # | Ask | Status |
|---|---|---|
| 1 | Five-minute automatic continuation | Running unattended, 20 launchd runs at exit 0 |
| 2 | Revisit the X.com conversation against reality | Done, 4 of 5 free actions had never been implemented |
| 3 | Verify and improve | Done, 10 defects fixed, 1 improvement reverted as a regression |
| 4 | Lyrics without AI reproducing text | Built, 33 songs loaded, 0 verbatim lines in the AI-facing export |
| 5 | Complete change report | This page |
| 6 | Second optimization pass | Done, reported separately |
| 7 | Durable scheduled process | Verified live on a closed app |

## The controller

Claude Code holds the queue and decides what to send. The browser sessions do the
work. Code at `~/.claude/skills/continuation-controller/`, state and logs at
`~/.claude/continuation/`.

Proven on a conversation that was already dead. The MTG deck chat had stalled at
12:29 PM on the word `continue`, cut off mid-sentence at "After twenty", showing
`Connection interrupted`. The controller classified it as stalled, quoted the exact
point of interruption, and asked for the one outstanding step. ChatGPT worked 2m 43s
and produced Revision 21.

That conversation then hit its length limit. The controller marked it blocked with
the true reason, and `ctl.py migrate` seeded a fresh chat from the verified
checkpoint, carried the finished step across with its evidence, and re-pointed the
target. ChatGPT picked up at step 2 and declined to redo step 1.

**It then ran unattended.** The first scheduled run raised "python3.13 wants access
to control Google Chrome" and three ticks failed inside that consent window. Once it
was answered, the controller sent three nudges at 13:08, 13:18 and 13:33, closed five
queue steps on evidence ChatGPT reported itself, and marked the work complete at
13:38. 20 launchd runs, last exit code 0, 3 errors all inside the consent window.

## Before and after

| What | Before | After |
|---|---|---|
| Continuing a browser AI session | You type `continue` | 3 nudges, 5 steps closed, nobody at the keyboard |
| Your MTG conversation | Stalled 12:29 on a cut-off sentence | Complete 13:38, all five steps evidenced |
| launchd jobs doing continuation | 0 of 40 | 1, 20 runs at exit 0 |
| Obsidian | 1.12.7 | 1.14.5, 14 plugins carried over |
| Claude Code vault access | Read only, `mcpServers` empty | 15 tools, patch and append, delete denied |
| Lyric text reaching a model | The blocker | 0 verbatim lines in the export |
| Truncation flag, same corpus | 17 of 33 | 0 of 33 |
| Turn counting on claude.ai | 0 and 0 | 1 and 1 |

## Nine defects found by testing my own work

1. Insert verified by a 24-character prefix, so a stale composer passed and the wrong text was submitted as success.
2. A regex backslash in the JS payload killed the AppleScript bridge.
3. The Enter fallback reported success and submitted nothing, stranding 1,764 characters in the composer.
4. The composer lives inside `main`, so unsent text counted as conversation progress.
5. The prompt quoted the strings the probe counts, inflating turn counters 6 to 8 and 5 to 6.
6. Truncation flagged anything ending on a letter, firing on 17 of 33 real rows.
7. A patch printed success and changed nothing, because I never asserted the match.
8. The step-closing marker could match the controller's own instruction.
9. One `EVIDENCE:` line closed two queue steps, because the report stays visible in the tail on later ticks.
10. The skill file claimed claude.ai renders `Claude said:`. It renders `Claude responded:`, so Claude turn counting read zero forever.

## Lyrics

Exact text moves locally (embedded tags, `.lrc`, packs already on disk, your
clipboard). AI works on `features --out`, which carries hashes, counts, structure and
flags with no lyric text. Verified: 0 verbatim lines in 15,060 bytes.

33 songs loaded. Quality pass found 3 rows carrying invisible unicode (U+2005, U+205F
in Beach House lyrics) and 1 podcast episode wrongly holding a lyrics tag.

## Unfinished

- Claude Duet waitlist, Claude Dashboards: account actions on your login.
- A second live target: the claude.ai path is verified end to end, and no Claude conversation currently carries outstanding work worth registering.
- Obsidian Sync at $48 a year: outside a free-only brief.
