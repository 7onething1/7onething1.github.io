# Zappa drum notation fix: delivery state

Live: https://7onething1.github.io/zappa-paren-fix-status/

Verified 2026-08-30 against the Songsterr public API.

## Verdict

Both fix revisions exist, carry the intended change, and alter zero notes. Neither is
published. `api/meta/35870` returns 7294223 and `api/meta/412162` returns 7115188, both
predating this work. Promotion is a Songsterr moderator decision.

## Public vs fix

| Tab | Revision | State | Notes | Ghost | Staccato | Ties |
|---|---|---|---|---|---|---|
| Montana s35870 | 7294223 (Ben Dibden1, 2026-06-10) | PUBLISHED | 7966 | 574 | 261 | 276 |
| Montana s35870 | **8787106** (2026-08-30 21:49:50Z) | PENDING | 7966 | 257 | **578** | 276 |
| Zomby Woof s412162 | 7115188 (meh, 2026-05-31) | PUBLISHED | 7479 | 32 | 138 | 449 |
| Zomby Woof s412162 | **8787022** (2026-08-30 21:45:34Z) | PENDING | 7479 | **0** | **170** | 431 |

Montana: ghost -317, staccato +317, notes unchanged. Its remaining 257 brackets sit on
vocal, guitar, keys and mallet staves, left alone because the scope was drums only. On the
drum staves the count is ghost 0, with Ralph Humphrey 212 dots and Percussion 105 dots.

Zomby Woof: ghost -32, staccato +32, ties -18, notes unchanged. All 32 brackets were on
the Ralph Humphrey staff, so the file reaches ghost 0.

## Preservation

- Local, per beat event: 0 pitch differences and 0 rhythm differences across 16,103 events
  on 28 tracks.
- Live, note totals: 7966 to 7966 and 7479 to 7479, measured on Songsterr's rendering.

## Corrections to the audit record

1. "Delivered, live and verified" was wrong. The state is submitted and pending.
2. `notes=1574 BRACKETS=0 DOTS=32 TIES=0` describes Zomby Woof track 9. The whole file holds 7,479 notes.
3. Montana `BRACKETS=0 DOTS=317` is true of the drum staves and false of the file. File
   level reads 257 brackets and 578 dots.

## Concurrency, confirmed

Each tab carries two pending revisions. The 08-29 pair (Montana 8764165, Zomby Woof
8766102) removed brackets and added no dots: staccato held at 261 and 138 as ghost fell.
The 08-30 pair supplied the dots.

## Reproduce

```
curl -s https://www.songsterr.com/api/meta/35870
curl -s https://www.songsterr.com/api/meta/35870/revisions
curl -s https://www.songsterr.com/api/meta/35870/8787106
```

Per-track JSON: `https://dqsljvtekg760.cloudfront.net/<songId>/<revisionId>/<image>/<track>.json`.
Brackets are the note flag `ghost`, dots are `staccato`.

## Source files

`~/Projects/_outputs/songsterr-zappa-paren-fix/` holds `_verify_live.py`,
`_verify_pending.py`, `_live_verify_2026-08-30.json`, `PRESERVATION-DIFF-2026-08-30.txt`,
`AUDIT-RECORD-2026-08-30.md`, `SESSION-SUMMARY-for-billing.md`.
