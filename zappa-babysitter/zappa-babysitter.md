# Zappa Babysitter

Why the Zappa chat keeps stopping, measured from its own transcript.

Target session: `local_c3404683`, titled "Zappa chat single-song focus limitation".
Transcript read: `c1e4ffee-9289-4640-8291-44d886f30a2f.jsonl`, 8,529 rows, on 2026-09-05.

## The verdict

The chat is not quitting from laziness. It is being bounced by Brandon's own Stop hooks.
Across 112 hours the transcript records 47 restarts caused by those gates against 30 turns
Brandon actually typed. One gate, `chat_donelink_gate`, produced 27 of the 47. The session
has also been context-compacted twice today, and it has run 4.7 days against a standing
rule that caps a chat at one day.

## Session shape

| Measure | Value |
|---|---|
| Session age | 112 hours, 08-31 23:59 to 09-05 16:07 |
| Transcript rows | 8,529 |
| Assistant turns | 2,950 |
| Stop-hook bounces | 47 |
| Turns Brandon typed | 30 |
| Context compactions | 2, both on 09-05 |

## What restarts the chat

| Origin | Turns | What it is |
|---|---|---|
| Stop-hook bounce | 47 | A gate rejected the reply and forced a rewrite |
| Image paste | 31 | Brandon dropping chart scans in for reading |
| Brandon typed | 30 | Actual instructions |
| /loop tick | 14 | Autonomous timer waking the session |
| Peer-session message | 6 | The sibling Zappa chat relaying findings |
| Skill injection | 2 | songsterr-upload and ship loading in |
| Context compaction | 2 | Ran out of context and resumed from a summary |

## Which gate does the stopping

| Stop hook | Bounces |
|---|---|
| `chat_donelink_gate` | 27 |
| `ask_drift_gate` | 6 |
| `next_action_gate` | 4 |
| `chat_color_gate` | 3 |
| `search_before_blocked_gate` | 3 |
| `no_permission_questions_gate` | 3 |
| unparsed | 1 |

### The defect in chat_donelink_gate

The gate blocks any reply carrying a completion word unless the reply also has a markdown
link whose target starts with `http`. Its word list includes **verified**.

A forensic audit session says "verified" in almost every reply, because verifying is the
entire job. Its work products are local files such as `rev5-Zomby-Woof-GHOSTS-RESTORED.gp`,
which have no public URL. The session did link its work product, as a relative markdown
link:

    [rev5-Zomby-Woof-GHOSTS-RESTORED.gp](s412162/rev5-Zomby-Woof-GHOSTS-RESTORED.gp)

The gate's pattern is `\[[^\]]+\]\((https?://[^\s)]+)\)`, so a relative target fails to
match and the reply is rejected. The session complied with the rule as Brandon wrote it and
was bounced anyway. That happened 27 times.

## The locked song

Zomby Woof, song id **s412162**, the 10-track community tab by Kirill, live revision
r8814965, 114 bars. This chat owns s412162 and the Songsterr upload pipeline. The other
Zomby Woof, `s5820647`, is a separate 5-track AI transcription belonging to a different
chat. Reading the title alone caused a cross-song edit earlier today.

## Why the upload path is walled

    FAIL  STACKED  7 revision(s) are already queued unreviewed on song 412162

Six revisions sit pending moderation on s412162 and Songsterr publishes no withdraw
control. Every further upload asks a moderator to read a diff that a later upload replaces.
The route forward on this song runs through a moderator or through Brandon.

## Unblocked right now, zero uploads

1. **Lane-resolve the Phase 2 count gap, bars 2 to 9** (`q-2026-09-05-40f052`). The audit
   reads Ryan Brown 137 events against tab 127 across bars 1 to 9, so the tab runs 10
   short. The file's own caveat says those are shape-filtered notehead counts rather than
   lane-resolved readings. Resolving them per lane says which drum each missing event
   belongs to.
2. **Settle two tom disagreements**, bar 4 slot 16 and bar 15 slot 16. Both read low tom in
   the author's file and high floor tom in the rebuilt one. That changes which drum sounds.

## Waiting on Brandon

1. Keep the bar 2 rebar or revert it. Bar 2 went from 10/16 into 5/16 plus 5/16 and is
   already submitted. Sources split two against two: Ryan Brown and Daniel Bedard write two
   bars of 5/16, Drumnet and Zappa Analysis write a single 10/16.
2. Supersede the revision stack or wait for moderation. Six are queued: 8902998, 8903141,
   8903886, 8904052, 8905411, 8905491. Only r8905491 should be taken.
3. Fix `chat_donelink_gate` or leave it strict. Accepting a markdown link to a local path
   ends 27 of the 47 bounces.

## Recommendation

Retire the 112-hour session and open a fresh one locked to s412162. The standing rule caps
a chat at one day. This one has run 4.7 days and compacted twice today, so every restart
resumes from a summary and re-derives ground already covered.

Patch the link gate before the next long session. Twenty-seven bounces on one gate is the
largest tax measured here, and every bounce spends a full turn on formatting.

---

Palette: The Life Aquatic (Wes Anderson)
