# Archived Chats, 2026-09-10

Brandon asked for the older chats to be archived, the ones he had not touched
recently, leaving 15 active. The pass archived 28 of 33 selected. Nine of those 28
were wrong and need restoring.

## What went wrong
I ranked chats by the app's `lastActivityAt`. That field advances on app bookkeeping
events carrying no user turn. The last five records in the stale chat below were
`artifact-autoreact-ledger`, `bridge-session`, `last-prompt`, `frame-link` and
`artifact-comment-monitor`, the newest stamped 2026-09-10T04:58:39. The field reports
that a chat changed. It does not report that Brandon used it.

An earlier draft blamed the babysit and digest launchd jobs for the bump. Reading
`babysit_daemon.sh` shows it only sweeps and alerts, so that attribution was wrong and
is corrected here.

The correct signal is the last genuine user ask inside the transcript, counting only
user turns with no hook or harness marker. Measured that way, 9 archived chats had a
real ask inside the last three hours.

## The proof
`Finder search bug` carried an app timestamp of 2026-09-10T03:33, which reads as
today. Its last genuine ask landed 35.7 hours earlier than the pass. Ranking on the app clock
floated it above chats Brandon had used minutes earlier.

## Restore these 9
Each had a genuine ask within three hours of the pass. No unarchive call is exposed to
a session, so they come back from the sidebar's Archived list, one click each.

| Chat | Last real ask | App clock said |
|---|---|---|
| Untitled tab upload to Songsterr | 1.4h | 2026-09-10T03:59 |
| Song creation status from 8-28 | 1.4h | 2026-09-10T03:59 |
| Chat GPT abuse prevention | 1.5h | 2026-09-10T04:00 |
| Unarchived chats performance impact | 1.5h | 2026-09-10T03:56 |
| Watermelon chat fraud prevention | 1.5h | 2026-09-10T03:55 |
| Chat updates to ChatGPT sync | 1.6h | 2026-09-10T03:51 |
| Zappa program scope ETA | 1.8h | 2026-09-10T03:43 |
| What why | 2.5h | 2026-09-10T02:59 |
| [keep-it-greasey-drum-handoff-2026-09-08] | 2.8h | 2026-09-10T02:39 |

## Counts
- 33 chats selected, 28 archived, verified by reading `isArchived` back from the app store
- 19 of the 28 were correct, with no genuine ask in three hours or more
- 9 of the 28 were wrong and are listed above
- 3 refused, each wedged on an open turn
- 19 chats are active right now, so the list is still above 15
- 70 files produced by the archived chats still exist on disk

## Why the list will not sit at 15
22 sessions were created in the six hours around this pass, four of them in the last
twenty minutes while chats were being archived. Archiving cannot hold a target count
against that rate.

## The chats that refused
Three of the oldest chats refuse the archive call. `Appleseed cast chat` waits on a
`mcp__claude-in-chrome__file_upload` call the no-Chrome gate now blocks for good, idle
51 hours. `Watermelon chat refund request` waits on an unanswered question widget, idle
31 hours. `Guitar leakage regression pipeline` holds a queued harness message. New
sessions also spawned during the pass.

## Nothing was deleted
All transcripts remain under `~/.claude/projects/-Users-brandonchavez/`. Any archived
chat reopens from the Archived list.
