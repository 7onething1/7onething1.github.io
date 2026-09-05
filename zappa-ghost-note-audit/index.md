# The Zappa ghost note debacle

Audited 2026-09-05. All 105 Frank Zappa tabs on Songsterr were queried against the live
API. 104 returned clean reads. One private tab, Zomby Woof2 (s6685613), did not resolve.

## What happened

Songsterr draws a ghost note as a notehead inside round brackets. That is the standard
rendering and it carries real musical information, the quiet stroke a drummer plays
between the accented ones. A sweep run on 2026-08-29 and 2026-08-30 treated those
brackets as a defect and removed them across twenty Zappa tabs.

Sixteen of those revisions are now the current published revision. 3,842 ghost note
flags were dropped on tabs the public sees today.

## The numbers

| Category | Tabs | Ghost notes |
|---|---|---|
| Stripping revision is live and public | 16 | 3,842 |
| Submitted, not the current revision | 4 | 723 |
| Flagged, never submitted | 4 | 19 |
| Total tabs touched | 20 | |

## Root cause, three layers

1. **A house rule applied outside its scope.** The staccato-dot-at-velocity-31 rule comes
   from `stems-to-guitar-pro-drums`, which builds a tab from an isolated drum stem. The
   sweep carried it onto community tabs written by other people.
2. **The wrong element name hid the evidence.** GPIF spells a ghost
   `<AntiAccent>Normal</AntiAccent>`. A search for `<Ghost>` returns zero in every file,
   and that zero was read as proof the ghosts were absent.
3. **The audit measured note counts and missed the loss.** The preservation check compared
   pitch, rhythm and position across 120,579 beat events and found zero differences.
   Articulation sat outside what it measured.

The 2026-08-31 handoff already recorded that the sweep was the wrong unit of work and said
not to resume it. No revision was withdrawn, and Songsterr offers no withdraw control.

## Fixed so far

Zomby Woof s412162, revision r8904052. Eight ghost notes restored on snare across bars 6
to 9, let-ring at zero, every other lane unchanged.

## Still open

- Sixteen live tabs need a restoring revision, one tab per pass.
- Zoot Allures s35883 needs its queued r8769199 neutralised. The live tab still holds all
  53 ghosts today.
- Watermelon In Easter Hay s35881 is the largest single loss at 1,317 flags. Its revision
  claimed those were ride and crash rather than ghosts, so that reading needs checking
  against the audio before anything is restored.

## Checked against the printed charts

Re-checked 2026-09-05 against the four transcriptions on disk, measured off the scans.

**Ryan Brown's page carries eight pedal hi-hat marks**, one full space below the bottom
staff line, pixel-identical at width 13 and ink 33, spread over three of his four systems.
Drumnet's bar 1 carries the same three marks at the same height in its own dialect. Bar 1
of Brown's page puts an accent within 2px of each of the three open hi-hats and a pedal
hi-hat within 2px of each of the three snares.

**A claim of mine was wrong.** I reported the tab holds no pedal hi-hat events. It holds 23,
across bars 6, 7, 8, 9, 15, 17, 18, 41, 42, 43, 44, 99, 100 and 102. Bar 1 is the omission.

**Bar 5 accents belong on notes one and three** of each quintuplet, ten in all. The tab
accented note two, five in all. Bar 16 is the same figure and was kept consistent.

**The barring source count was wrong.** Kasper Sloots' 10/16 sits at 1:39 to 2:10, framed by
7/8 and 5/4. Brown's page is headed at 0:00. Zappa Analysis never voted on the opening bar.

Build `Zomby-Woof-BROWN-rev3.gp`: 115 master bars unchanged, time signatures identical,
rhythm and tuplet census identical, master bars 1, 5 and 16 touched, no string collisions,
ghosts held at 8, let-ring at 0, all 10 tracks named.

## Sources

- `~/Library/Mobile Documents/com~apple~CloudDocs/sfg/zappa-drum-repair-2026-08-31/`
- `~/Projects/_outputs/songsterr-zappa-paren-fix/`
- `songsterr.com/api/meta/<songId>` read 2026-09-05
