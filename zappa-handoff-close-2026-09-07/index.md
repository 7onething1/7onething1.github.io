# Zappa handoff, closed out (2026-09-07)

Successor to `[ZAPPA-PAREN-FIX-AUDIT-RECOUNTED-2026-09-06]`. Measured on MacBookPro.
Every figure came from a live API read or a census of a file on disk. Bars are 1-based.

## 1. Brandon's one action, still open

Press **Submit revision** on Zomby Woof s412162. Live read: `latestRevisionId` is still
**r8918601 by Nikita** across 21 revisions. The editor tab holds rev8 with
`undo: ENABLED, submit: ENABLED, importFiles: 0`. Publishing over another contributor's
tab is his act. Queued `q-2026-09-07-8d19fd`.

## 2. Regression fixtures, 0 PASS to 2 PASS

`regressions.py` read 0 PASS 0 FAIL 4 MISSING because every fixture pointed at
`~/Projects/_outputs/appleseed-allparts`, authored on Jacks-iMac and never synced.
It now reads **2 PASS 0 FAIL 2 MISSING**, exit still 1.

| Fixture | Verdict | Measurement |
|---|---|---|
| blind-mans-arrow | PASS | capos `[0, 0]`, the rejected capo 7 is absent |
| secret | PASS | 236 notes shared across the two guitar staves at exact onset |
| a-tree-for-trials | MISSING | needs a depanning source and result pair, never published |
| kilgore-trout | MISSING | needs solver intermediates iter4 and iter5, unpublished |

Also fixed: `cross_staff_shared` called `is_guitar` through the legacy bare-name path,
the substring test that returned False for every staff on the Zappa tabs.

## 3. Dynamics, 17 restorable and 3 not

`Dynamic` is beat-level in GPIF. 20 aligned beats differ from the author, all of them
author FF against live PP.

- **RESTORE 17**: bar 5 (5), bar 14 (3), bar 16 (5), bars 41 to 44 (1 each)
- **EXCLUDE 3**: bar 14 at onsets 1/16, 3/16, 7/16, each carrying a snare or kick the
  author never wrote

Stable under a strict lane key and under one treating kick 35 as equal to 36.
This corrects the rev8 proof's "5 of the 20" and "only 15 of 20 would have landed".

## 4. The 269/270 residue is a lane relabelling

249 of 269 pair to a live instance at the same `(bar, voice, onset, string)`:

| Lane change | Count | Reading |
|---|---|---|
| 35 to 36 | 161 | Acoustic Bass Drum to Bass Drum 1, one drum with two GM spellings |
| 45 to 43 | 86 | Low Tom to High Floor Tom, two different drums |
| 42 to 44 | 1 | Closed Hi-Hat to Pedal Hi-Hat |
| 92 to 36 | 1 | lane 92 sits outside GM percussion |

Positions are untouched. Genuinely unpaired: 20 author and 21 live, in bars 2, 14, 17
and 18 only. **Bar 17 is a rewritten bar**, 17 author-only against 14 live-only.

## 5. Two deferrals re-adjudicated

- **Watermelon s35881 restore: DONE and verified live.** `latestRevisionId` is r8908034.
  Live CDN count at build hash `v0-3-2-m9L2o7e_DgqwSJF_`: part 8 carries 1317 ghosts,
  1316 on lane 51 ride plus 1 on lane 49 crash. This reopens `q-2026-09-06-ca2848`.
- **Central Scrutinizer s3554079: still blocked, route closed.** The `/s1600/` full-size
  chart images are byte-identical to the archived copies, 27,496 bytes at 531x142 and
  22,015 bytes at 420x139. No larger scan was ever published.

## Reproduce

```bash
cd ~/Projects/_outputs/songsterr-zappa-paren-fix
/usr/bin/python3 tools/phase2_analysis.py --json s412162/PHASE2-ANALYSIS-2026-09-07.json
cd ~/.claude/skills/impossible-guitar-parts && python3 regressions.py
```

Palette: Fantastic Mr. Fox (Wes Anderson).
