# Archived Chats, 2026-09-10

Brandon asked for the older chats to be archived so only 15 stay active. The list went
from 48 down to 18 in one pass.

## Counts
- The pass opened with 48 active chats, 47 listed plus the session running it
- 33 were selected, every one older than the working set
- 28 archived, confirmed by reading `isArchived` back from the app's own session store
- 4 refused, each wedged on a turn that cannot close by itself
- 6 are pinned and stay pinned
- 46.8% of all measured asks in the archived set remain open
- 70 files produced by the archived chats still exist on disk

## Why the count is 18 and not 15
The 4 refused chats are the 4 oldest remaining, so the only way to reach 15 by
archiving would have been to close chats from today's working set. Those four archive
from the sidebar in one click each, which lands the list at 14. The list also moved
during the pass: two kept chats ended and a new one spawned.

## The four that refused, and why each is stuck
- **Watermelon chat refund request**, an open `AskUserQuestion`, unanswered for 24 hours
- **Appleseed cast chat**, an open `mcp__claude-in-chrome__file_upload` call, idle 50 hours, now blocked for good by the no-Chrome gate
- **Zappa AI transcription update SLIME**, a queued harness message holds the turn open
- **Guitar leakage regression pipeline**, a queued harness message holds the turn open

Retried five times across the pass. The thing each one waits on will not arrive, so
waiting longer changes nothing.

## How the percentage is computed
Per chat, count every genuine user ask, ignoring harness and hook text. An ask counts
as answered when the assistant did real tool work ahead of the next ask. Percent
left is the share of asks with no such work behind them. Every chat in this pass had a
local transcript, so every one carries a real number and none is blank.

## How each chat was joined to its transcript
The app session id and the transcript filename sit in separate namespaces, so a direct
uuid join returns nothing. All 33 joined by exact title through
`~/.claude/no_quit_state/babysit_state.json`, which carries a fresh title-to-uuid map.
No fuzzy timestamp matching was needed, so no chat is measured against another chat's
transcript.

## Nothing was deleted
All 155 transcripts remain under `~/.claude/projects/-Users-brandonchavez/`. Any
archived chat reopens from the Archived list.
