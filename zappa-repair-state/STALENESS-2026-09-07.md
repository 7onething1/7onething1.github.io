# ghost_sweep.json is stale beyond Watermelon

Checked 2026-09-07 against `/api/meta/<songId>/revisions` on songsterr.com. Only the
Watermelon row was corrected in the JSON, because it is the only one measured note by note
here. The rest are reported, not rewritten.

| songId | title | liveRev in the file | actual latest | state |
|---|---|---|---|---|
| 35870 | Montana | 8787106 | 8945851 | STALE |
| 35875 | Packard Goose | 1794391 | 1794391 | current |
| 35878 | Nanook Suite | 8769001 | 8907360 | STALE |
| 35881 | Watermelon In Easter Hay | 8768414 | 8908034 | STALE, **corrected** |
| 35883 | Zoot Allures | 7179991 | 8769199 | STALE |
| 35884 | Oh No | 8769089 | 8908239 | STALE |

Five of the six songs spot-checked point at a revision that is no longer live, so their
verdicts describe a tab that has since moved. A verdict computed against a superseded
revision is not evidence about the current one.

**Montana 35870 appears TWICE in the file**, same values both times. Worth de-duplicating
before the board is rebuilt.

## What was measured for Watermelon, and how

Read directly from CloudFront for revision 8908034, part 8:

    part name ''      105 measures      2091 notes      1317 ghosts
    lanes 36:107  40:193  44:6  45:4  46:1  48:2  49:53  51:1724  57:1

That matches the pre-sweep expectation exactly, so the row now reads RESTORED.

**One defect the ghost count does not cover.** The part name comes back as an empty string.
All nine track names on s35881 are blank, which is the NAMEDROP damage from r8908034 and is
still open on that tab. A tab can be ghost-RESTORED and still be missing its authored
musician credits.

Backup of the previous file: `ghost_sweep.json.bak-pre-s35881-fix-2026-09-07`.
