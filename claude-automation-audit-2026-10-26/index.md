# Automation Audit and Change Report, 26 October 2026

A continuation controller that works, nine defects found by testing it, and one
permission click standing between it and running unattended.

Machine: Jacks-iMac. Cost of everything below: $0. Code written: 1,596 lines across
two skills. Defects found in my own work: 9. Improvements reverted after testing: 1.

## The seven asks

| # | Ask | Status |
|---|---|---|
| 1 | Five-minute automatic continuation | Built and tested, one OS consent pending |
| 2 | Revisit the X.com conversation against reality | Done, 4 of 5 free actions had never been implemented |
| 3 | Verify and improve | Done, 9 defects fixed, 1 improvement reverted as a regression |
| 4 | Lyrics without AI reproducing text | Built, 33 songs loaded, 0 verbatim lines in the AI-facing export |
| 5 | Complete change report | This page |
| 6 | Second optimization pass | Done, reported separately |
| 7 | Durable scheduled process | Installed and loaded, blocked on one click |

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

**Blocking item:** macOS raised "python3.13 wants access to control Google Chrome".
Click OK, then run
`python3 ~/.claude/skills/continuation-controller/ctl.py doctor`.

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

## Lyrics

Exact text moves locally (embedded tags, `.lrc`, packs already on disk, your
clipboard). AI works on `features --out`, which carries hashes, counts, structure and
flags with no lyric text. Verified: 0 verbatim lines in 15,060 bytes.

33 songs loaded. Quality pass found 3 rows carrying invisible unicode (U+2005, U+205F
in Beach House lyrics) and 1 podcast episode wrongly holding a lyrics tag.

## Unfinished

- Unattended controller runs: one macOS consent click.
- Obsidian 1.12.7 to 1.14.5: Obsidian is running and serving the REST API the new MCP bridge uses.
- Claude Duet waitlist, Claude Dashboards: your account.
- Claude in Chrome target: no claude.ai conversation was open to register.
