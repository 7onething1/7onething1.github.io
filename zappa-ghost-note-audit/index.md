# The Zappa ghost note debacle

Audited 2026-08-30. Moderation status re-read 2026-09-05 against
`api/meta/<songId>/revisions`, fields `isBlocked`, `isOnModeration` and `reviewed`.

## What happened

Songsterr draws a ghost note as a notehead inside round brackets. That is the platform's
own ghost notation and it carries real musical information, the quiet stroke a drummer
plays between the loud ones. A sweep run on 2026-08-29 and 2026-08-30 read those brackets
as a defect and removed them across twenty Zappa tabs.

## The numbers, by verified state

| State | Tabs | Ghost notes |
|---|---|---|
| Current public revision | 16 | 3,842 |
| Rejected by a moderator, blocked | 2 | 682 |
| Superseded, never public | 2 | 41 |
| Flagged, never submitted | 4 | 19 |

An earlier version called the 723 non-current flags "still at
risk". That was wrong. Keep It Greasey (rejected by Kirill527) and Zoot Allures (rejected
by Darr) are blocked and cannot publish. Neither needs any further action, and the
corrected Zoot Allures file built on 2026-09-05 should not be sent.

## Root cause, three layers

1. **A house rule applied outside its scope.** The staccato-dot-at-velocity-31 rule comes
   from `stems-to-guitar-pro-drums`, which builds a tab from an isolated drum stem. The
   sweep carried it onto community tabs written by other people.
2. **The wrong element name hid the evidence.** GPIF spells a ghost
   `<AntiAccent>Normal</AntiAccent>`. A search for `<Ghost>` returns zero in every file.
3. **The audit measured note counts and missed the loss.** It compared pitch, rhythm and
   position across 120,579 beat events and found zero differences. Articulation sat
   outside what it measured.

**The rule was withdrawn on 2026-09-05, in the pipeline as well as here.** A GPIF ghost
arrives on Songsterr as its own `ghost` field and draws parenthesised; a GPIF `<Accent>`
arrives as `staccato` and draws as a dot. `sd_writegp.py` now writes the native ghost
flag, and `sd_verify.py` fails any file that writes a ghost as a dot.

## Checked against the printed charts

Ryan Brown's DRUM Magazine page carries eight pedal hi-hat marks one full space below the
bottom staff line. A bitwise compare of a 14x17 window at each mark returns 0 differing
pixels across all 28 pairs. Drumnet's bar 1 carries the same three marks at the same
height in its own dialect.

**A claim of mine was wrong.** I reported the tab holds no pedal hi-hat events. It holds
23, across bars 6, 7, 8, 9, 15, 17, 18, 41, 42, 43, 44, 99, 100 and 102. Bar 1 was the
omission, and r8905491 fills it with three strokes.

**Accents cannot be expressed on a Songsterr drum staff through a Guitar Pro import.** The
note schema holds `fret`, `string`, `staccato`, `rest`, `ghost` and `tie`, with no accent
field. Revision r8905411 moved the bar 5 marks to Brown's positions and doubled them; the
rendered bar showed ten round dots and no wedges, so r8905491 put bars 5 and 16 back.

**The barring source count was wrong.** Kasper Sloots' 10/16 sits at 1:39 to 2:10, framed
by 7/8 and 5/4. Brown's page is headed at 0:00, so Zappa Analysis never voted on the
opening bar. Both the split and the single bar are structural readings, which makes the
rebar a source based editorial adjudication rather than an objective correction.

## Status, in three separate kinds

| Kind | Zomby Woof s412162 |
|---|---|
| Locally verified build | `r8905491-Zomby-Woof-PEDAL-rev4.gp`, every gate green |
| Submitted revision | r8905491, `isOnModeration=true`, part JSON reads back correct |
| Confirmed public revision | still r8814965 by Kirill, eight ghosts still missing |

Zomby Woof is not repaired in public. Six revisions from this work sit in that tab's
queue. Songsterr offers no withdraw control, so the description asks the moderator to take
the newest.

## What is left

- Sixteen live tabs need a restoring revision, one per pass, verified against the pre-sweep
  revision rather than the stripped one.
- Restore every attribute the sweep touched. It wrote a staccato dot and set velocity to 31
  as it cleared each ghost, so a restoring pass returns the ghost flag, removes the dot and
  returns the velocity, measured against the pre-sweep baseline.
- Rebase onto the current public revision so other people's later edits survive.
- Watermelon In Easter Hay is the largest single loss at 1,317 flags, and its revision
  claimed they were ride and crash, so that reading needs checking against the audio first.
- Verify the revision that actually becomes public, per tab, after moderation.
- Keep It Greasey and Zoot Allures need nothing. Both stripping revisions are blocked.

## Sources

- `~/Library/Mobile Documents/com~apple~CloudDocs/sfg/zappa-drum-repair-2026-08-31/`
- `~/Projects/_outputs/songsterr-zappa-paren-fix/`
- `~/Projects/_outputs/zappa-drum-sources/` (one folder per publisher, each with SOURCE.md)
- `songsterr.com/api/meta/<songId>/revisions` read 2026-09-05
