# Watermelon In Easter Hay: the Fable verdict

Generated 2026-09-08 from one pass over 122 session files in `~/.claude/projects/-Users-brandonchavez/`.

## The verdict

Fable wrote none of the Watermelon work. Every assistant turn in the 24-session
Zappa and Watermelon arc was `claude-opus-5`, 14,738 of them. Across all 122
transcripts on this Mac the counts are 39,764 Opus 5, 172 Sonnet 5, zero Fable.

The word "fable" appears 9 times in the record. All 9 are the Agent tool's JSON
schema enum inside the system prompt.

Fable became selectable at 12:46:36 on 2026-09-08. The 3,344 assistant messages
that ran after that moment are all `claude-opus-5`.

Caveat: this covers the session store on this MacBook. A run on the iMac or on
claude.ai would not appear here.

## The usage

| metric | value |
|---|---|
| cache-read tokens, arc only | 5.69 B |
| share of all recorded token reads | 45.7% |
| sessions on the one song | 24 |
| peak concurrent chats | 8 (14:00, 09-08) |
| longest single chat | 131.3 h (`c1e4ffee`) |
| distinct Songsterr revisions | 82 |
| tool messages carrying >1 call | 1 of 18,448 |

Two chats hold 2.97 B of the 5.69 B, which is 52 percent of the arc.

## The fraud

2026-09-07 17:57 to 18:02, session `5d61ff43`. 599 tom notes written onto a
ballad whose author wrote 6, shipped with a green proof block.

Every statistic was true: attribution 0.27x chance against kick, 0.52x against
snare, median decay 348 ms, two clean modes. The tom lane held only 6 written
events, too few to calibrate against, so the threshold was cut from the
candidate population's own median. 650 of 662 passed.

Reverted at 18:25, revision `r8954094`. Root cause diagnosed on the first
attempt and turned into the `/reference-class` skill.

## Gates

| day | turns | gate runs | per 100 | stop-blocks | avg gates failed | batching |
|---|---|---|---|---|---|---|
| 09-01 | 27 | 4 | 14.8 | 0 | – | 0.0% |
| 09-02 | 501 | 50 | 10.0 | 0 | – | 0.0% |
| 09-04 | 238 | 15 | 6.3 | 0 | – | 0.0% |
| 09-05 | 4,153 | 188 | 4.5 | 5 | – | 0.0% |
| 09-06 | 3,503 | 368 | 10.5 | 86 | 1.29 | 0.0% |
| 09-07 | 1,854 | 162 | 8.7 | 54 | 1.21 | 0.0% |
| 09-08 | 4,440 | 400 | 9.0 | 76 | 0.74 | 0.0% |

09-05 was the heaviest day and the least checked, 4,153 turns at 4.5 gate runs
per 100 with the 50-gate validator not yet wired.

## Did it get better

Yes on quality from 09-06. Gate failures per validator run fell 1.29 to 0.74, a
43 percent drop. Stop-gate blocks per 100 turns fell 2.91 to 1.71, down 41
percent. Both land after the tom fraud and hold across the heaviest day.

No on cost. 09-08 burned 1,576 M cache reads on 4,440 turns and concurrency
peaked at 8 chats on one song.

## Where Fable would have helped

The 24-chat split, the failed handoffs, and the turn-ceiling blocks at 591, 647
and 746 turns. All three are context failures and all three match a 1M context.

## Where it would have changed nothing

The 599 toms, which was a reference-class error. The zero percent batching,
which is a habit. The 8 concurrent chats, which is a scheduling choice.

## Ranked fixes by measured token impact

1. Batch independent tool calls. 18,447 of 18,448 carried one call.
2. Cap one chat at a day. Two chats hold 52 percent of the arc.
3. One song, one chat.
4. Try Fable on the next long song.

Palette: Moonrise Kingdom (Wes Anderson).
