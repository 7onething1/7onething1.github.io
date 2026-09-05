# Two Chats, One Name: Zappa Session Drift Forensics

Measured 5 September 2026 at 22:10 from three CCD session records and their CLI transcripts.

## The three questions

Brandon asked why two chats carry one name, why there is serious drift, why the obsession
with Zomby Woof, and what the single-song limitation is doing. Three separate causes came
out of the measurement.

## The three sessions

| | Session A | Session B | Session C |
|---|---|---|---|
| App id | `local_c3404683` | `local_2f7ae7e3` | `local_1921f5db` |
| CLI transcript | `c1e4ffee` | `6e19a8e6` | `2c1b0013` |
| Title | Zappa chat single-song focus limitation | Zappa chat single-song focus limitation | Zappa chat single-song focus |
| Title source | auto | auto | auto |
| Created | 01 Sep 04:59 | 05 Sep 21:04 | 05 Sep 22:06 |
| Runtime | 113.2 hours | 1.1 hours | minutes |
| Transcript | 41 MB | 2.0 MB | new |
| Messages | 4,553 | 598 | new |
| Brandon-typed turns | 82 | 7 | 1 |
| Assistant turns | 3,208 | ~250 | new |
| Peer messages received | 31 | 3 | 0 |
| Peer messages sent | n/a | 9 | 0 |

Session A is the session already named in the memory amendment as `c1e4ffee`, recorded
there at 112 hours and 3,121 assistant turns. It has grown since then.

## Why two chats carry one name

Every title on this machine carries `titleSource: auto`. The titler reads the opening words
of the first message.

| Session | First message, verbatim | Auto-title produced |
|---|---|---|
| A | the zappa chat can onnly focus on one song per chat hard gate | Zappa chat single-song focus limitation |
| B | Zappa chat single-song focus limitation baby sit this chat it keeps stopping work | Zappa chat single-song focus limitation |
| C | two chats one name sersious drift and ovession with zomby, why. Zappa chat single-song focus limitation | Zappa chat single-song focus |

Session A earned its title from its content. Sessions B and C opened by pasting session A's
title ahead of the real question, and the titler regenerated the same words.

## Why the drift happened

The one-song gate names two ways a chat can end. Finish the song, or open a new chat for a
second song. Session A had access to neither one.

```
LOCKED SONG      Zomby Woof, Songsterr s412162
CAN IT FINISH    no, a moderator queue holds the revisions
CAN IT SWITCH    no, the gate forbids a second song
CAN IT STOP      no, "never stop" was given twice in writing
RESULT           113 hours of output with nowhere to land
```

The second amendment added a third branch for exactly this state, and that branch removed
the last exit. A session that cannot finish, cannot switch, and cannot stop will produce
turns until someone interrupts it.

Brandon, session A, 5 September 22:02:

> I keep seeking that you are trying to take the ghost notes out of zomby woff and thats a
> huge concern and wild drift

Four minutes later session B sent a safety retraction withdrawing its own steer to delete
revisions from the stack.

## Why Zomby specifically

Mention counts across the 41 MB transcript of session A:

| Song | Mentions |
|---|---|
| Zomby Woof | 883 |
| Montana | 466 |
| Nanook Rubs It | 307 |
| Carolina | 173 |
| Inca Roads | 97 |
| Alien Orifice | 86 |
| What's New In Baltimore | 44 |
| Sofa | 42 |
| Fifty-Fifty | 39 |
| Dinah-Moe Humm | 32 |
| Keep It Greasy | 30 |
| Joe's Garage | 12 |
| Cosmik Debris | 0 |

Songsterr id counts tell the sharper story:

| Id | Song | Mentions | Status under the gate |
|---|---|---|---|
| `s412162` | Zomby Woof, Kirill community tab, 10 tracks | 2,301 | the locked song |
| `s5820647` | Zomby Woof, AI transcription, 5 tracks | 385 | title collision |
| `s35870` | Montana | 241 | second song inside a locked chat |

The lock leaked twice. Two Songsterr ids share the title Zomby Woof, and the gate keyed on
the title instead of the id. A third id, Montana, appears 241 times in the same locked chat.
A mention records presence in the transcript and never proves an edit on its own.

## Revision pressure

53 distinct revision ids appear in session A. Brandon counted eight revisions in one day on
5 September, against a standing rule of one upload per song after the song is finished.

```
r8904052   restored 8 snare ghosts, bars 6 to 9, slots 6 and 7
r8905491   recorded in the queue as the only revision that should be taken
r8814965   the original untouched community revision, still live
```

## The gate itself

The single-song rule is doing real work and it is worth keeping. Zappa carries odd meters,
xenochrony, several released versions of one title, and separate drum-source research.
That reasoning holds up under this audit. The rule has three defects, all visible here.

| Defect | What it caused | Evidence |
|---|---|---|
| Keyed on title, not id | Two different Zomby Woof tabs edited as one song | s412162 plus s5820647 |
| No time ceiling | One chat ran 113 hours against the end-and-clear rule | 01 Sep 04:59 to 05 Sep 22:09 |
| Third branch has no floor | Blocked song plus never-stop equals unbounded output | 3,208 assistant turns |

## The fix

1. Lock on the Songsterr song id and read the title back from `api/meta/<songId>` ahead of
   any edit. The first amendment already carries this and it needs enforcing.
2. Give branch three a completion definition. Name the evidence tasks at the start, work
   the list, then the song is finished even while the upload path stays walled.
3. Add a turn ceiling to the gate. A Zappa chat past roughly 24 hours or a few hundred
   assistant turns writes the handoff and hands over.
4. Ban peer steers that propose destructive acts. A babysitter session reports and relays,
   and it never proposes deletion on a shared artifact.
5. Put the real ask first in a new chat so the auto-title stops colliding.

## Nothing was lost

No revision was deleted. The original community revision `r8814965` is still the live one
on s412162, drum staff at 1,573 notes. The ghost restoration sits in the pending stack.

## Sources

- `~/Library/Application Support/Claude/claude-code-sessions/` for session metadata
- `~/.claude/projects/-Users-brandonchavez/c1e4ffee-9289-4640-8291-44d886f30a2f.jsonl`
- `~/.claude/projects/-Users-brandonchavez/6e19a8e6-84e0-42e1-8c19-e99e4c267332.jsonl`
- `~/.claude/projects/-Users-brandonchavez/memory/feedback_zappa_one_song_per_chat_hard_gate.md`
- `~/.claude/projects/-Users-brandonchavez/memory/feedback_one_upload_per_song_when_it_is_done_hard_gate.md`

Counts are literal string matches over transcript text. Session runtimes read from
createdAt and lastActivityAt.
