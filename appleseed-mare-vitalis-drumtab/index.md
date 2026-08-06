# Mare Vitalis: drum tabs for Songsterr, whole album

The Appleseed Cast. Built 31 July 2026, corrected 6 August 2026. All ten tracks built from
DrumSep 5-piece splits through `/stems-to-guitar-pro-drums`. Every file passed the same
19-point render gate.
**14,277 notes across 1,215 bars.**

Sister page to [Illumination Ritual](https://7onething1.github.io/appleseed-illumination-ritual-drumtab/),
which is closed at 10 of 10 and 19,609 notes.

## What changed on 6 August 2026

Every number this page carried was measured on 31 July, before the flam fix of 4 August and
before any phantom hit was removed. Nothing regenerated the page, so it kept publishing
counts for files that no longer existed in that form. Three generations of the same twenty
songs were live at once: the 31 July build behind the old tables, the 4 August flam fix in
the output folders, and a phantom strip that had reached only four Mare Vitalis songs. The
other sixteen were run through the phantom pass on 6 August, all twenty are now filed in one
folder at `~/Projects/_outputs/stems-to-guitar-pro-drums/canonical_2026-08-06/`, and every
count on this page is read straight out of the shipped `.gp5`.

The old page said **15,300 notes**. The 31 July files it described held **14,459**, so that
figure was never a read of a file at any generation. Same on the sister page: it said
20,890 against a file total of 19,718.

## The album

| # | Song | BPM | Bars | Notes | Bells | Open hat | Ghosts | Flams | Tempo conf |
|---|---|---|---|---|---|---|---|---|---|
| 01 | The Immortal Soul of Mundo Cani | 172 | 78 | 463 | 0 | 6 | 7 | 6 | MEDIUM |
| 02 | Fishing the Sky | 187 | 174 | 1,700 | 12 | 24 | 115 | 4 | LOW |
| 03 | Forever Longing the Golden Sunsets | 152.75 | 174 | 1,945 | 0 | 0 | 143 | 38 | MEDIUM |
| 04 | Mare Mortis | 136 | 114 | 1,759 | 0 | 20 | 191 | 19 | LOW |
| 05 | Santa Maria | 138.25 | 116 | 1,489 | 8 | 20 | 142 | 7 | LOW |
| 06 | Secret | 87 | 96 | 1,423 | 0 | 17 | 63 | 9 | MEDIUM |
| 07 | ...And Nothing Less | 88.25 | 100 | 1,290 | 0 | 10 | 100 | 3 | MEDIUM |
| 08 | Poseidon | 137.25 | 118 | 1,066 | 0 | 12 | 65 | 10 | HIGH |
| 09 | Kilgore Trout | 181.75 | 106 | 1,202 | 0 | 26 | 43 | 0 | MEDIUM |
| 10 | Storms | 95 | 139 | 1,940 | 0 | 24 | 142 | 1 | MEDIUM |

Album totals: 20 bells, 159 open hats, **0 rim clicks**, 1,011 ghosts, 97 flams,
103 crashes, 1,667 rides.

## 182 hits came out, and 353 flagged ones stayed in

Flams fell from **647 to 97** in the 4 August pass, because the first build wrote grace
notes onto rolls a drummer cannot play. A flam is an effect on a note rather than a note of
its own, so removing 550 of them changed no note count. The phantom strip is what moved the
note total, by **182**.

The stripper refuses to delete from a lane whose best alignment offset does not lock,
because deleting on a bad alignment removes real hits. Three songs hit that refusal on the
kick lane and lost nothing: **Storms (200 flagged), ...And Nothing Less (145) and The
Immortal Soul of Mundo Cani (8)**. On those three the flagged count records a suspicion the tool could not settle, and
those bars want an ear before submission.

## Rim clicks: zero across both albums

Twenty songs, and every one refused the side-stick class, each for a stated reason. It has
not been shown that a rim part exists and was missed. Full per-song measurement:
https://7onething1.github.io/appleseed-rim-click-evidence/

## Files

Ten `.gp5` files in
`~/Projects/_outputs/stems-to-guitar-pro-drums/canonical_2026-08-06/`, with `measured.json`
carrying every count on this page and the path each file was assembled from. Earlier
generations are preserved in `pre_side_aware_2026-07-31/`, `pre_saturation_2026-07-31/`
and `pre_flamfix_2026-08-04/`.
