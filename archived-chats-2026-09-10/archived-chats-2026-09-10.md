# Archived Chats — 2026-09-10

Brandon asked for the older chats to be archived so only 15 stay active. The list went
from 48 to the count below in one pass.

## Counts
- 48 chats were active before the pass (47 listed, plus the session running the pass)
- 6 are pinned and stay pinned, so the target of 15 is 6 pinned + 8 recent + this session
- 33 chats were selected for archiving, every one older than the 8 kept
- 29 archived on the first pass
- 4 refused because the app will not archive a session mid-turn or holding a background task
- 46.8% of all measured asks in the archived set remain open
- 70 files produced by the archived chats still exist on disk

## How the percentage is computed
Per chat, count every genuine user ask, ignoring harness and hook text. An ask counts
as answered when the assistant did real tool work before the next ask arrived. Percent
left is the share of asks with no such work behind them. Every chat in this pass had a
local transcript, so every one carries a real number and none is blank.

## How each chat was joined to its transcript
The app session id and the transcript filename are different namespaces, so a direct
uuid join returns nothing. All 33 joined by exact title through
`~/.claude/no_quit_state/babysit_state.json`, which carries a fresh title-to-uuid map.
No fuzzy timestamp matching was needed, so no chat is measured against another chat's
transcript.

## The four that refused
`Zappa AI transcription update SLIME`, `Guitar leakage regression pipeline`,
`Watermelon chat refund request` and `Appleseed cast chat` each report a turn in
progress or live background work. Retried several times across the pass. They archive
from the sidebar, or on the next pass once their work finishes.

## Nothing was deleted
All 155 transcripts remain under `~/.claude/projects/-Users-brandonchavez/`. Any
archived chat reopens from the Archived list.
