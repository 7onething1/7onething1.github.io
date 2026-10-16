# Stem Inventory

Measured 2026-10-16 on Jacks-iMac by walking the mounted disks. Not read from the old stem map, which is stale.

## Headline

- **717** song folders, **4,315** stem files, **146.62 GB** of stem audio.
- **80.68 GB** of that has no copy on any external drive.
- The **T7 Shield is not plugged in**, so the Phish jam corpus, Goldfrapp, and parts of Radiohead, Shiner, Beach House and The Life and Times could not be counted.
- **Black is full**: 1.8 TB capacity, 1.9 GB free.

## Tonight's copy, A Perfect Circle

Most of A Perfect Circle was on Black before tonight. Two sets were missing and are now copied, with counts checked on both sides:

| Set | Files | Bytes | Destination |
|---|---|---|---|
| 13th Step, FLAC source demucs | 36 | 152,810,128 | `/Volumes/Black/stems/htdemucs_6s/13th Step (FLAC source)/` |
| APC stem loops | 13 | 40,660,090 | `/Volumes/Black/stems/htdemucs_6s/A Perfect Circle - STEM LOOPS/` |

Source and destination agree exactly on file count and byte total for the first set. AppleDouble `._` sidecars that exFAT creates were excluded from both counts.

On the drive before tonight and left untouched: `13th step apc` 330 files 571 MB, `APC Mercs` 240 files 413 MB, plus 7.2 GB of drum-kit splits and 106 MB of drum stems at the root of Black.

The APC stem loops folder held 230 entries. Only 13 resolved. The other 217 were dead symlinks with no file behind them.

## Four problems found along the way

1. **The old stem map is dead.** `~/Projects/stem-map/stem-map.md` was generated 2026-06-20 and references a Desktop path. That tree was dragged into the vault and is now at `Brandon-Vault/New Folder With Items 2/New Folder With Items 7/IF YOU CAN'T FIND SOMETHING ITS HERE/`.
2. **The stem library is a shell.** `~/Music/STEMS_LIBRARY/` is a symlink farm. 918 of 1,288 links are dead, 71 percent. All 864 broken music links share one pre-migration prefix. Worst hit: The Life and Times 294, A Perfect Circle 217, Beach House 165, Radiohead 108, Smashing Pumpkins 84.
3. **A half-finished copy on Black.** `/Volumes/Black/htdemucs_6s` is an interrupted duplicate of `/Volumes/Black/stems/htdemucs_6s`. Seven of its fifteen album folders hold zero audio. The good pool is the one under `/stems/`. Nothing was deleted.
4. **The T7 Shield is offline**, so this inventory is incomplete by design.

## Everything we have stemmed

| Artist or collection | Kind | Songs | Files | GB | Backed up |
|---|---|---|---|---|---|
| Band practice 9-11 | your band | 58 | 450 | 19.40 | internal only |
| The Mars Volta | record | 29 | 224 | 18.03 | both disks |
| The Appleseed Cast | record | 93 | 546 | 16.94 | both disks |
| Dream Theater | record | 13 | 148 | 16.00 | both disks |
| Phish | record | 61 | 332 | 11.21 | both disks |
| Band practice rebuild | your band | 72 | 374 | 11.17 | internal only |
| A Perfect Circle | record | 72 | 314 | 8.61 | both disks |
| Radiohead | record | 60 | 413 | 7.72 | both disks |
| Hooray For Earth | record | 22 | 132 | 5.98 | internal only |
| Yes | record | 2 | 24 | 5.26 | drive only |
| Tame Impala | record | 12 | 78 | 3.99 | drive only |
| Rush | record | 6 | 36 | 3.57 | drive only |
| Evidence / QA copies | working | 48 | 288 | 3.35 | internal only |
| stem-player working set | working | 12 | 72 | 3.09 | internal only |
| Shiner | record | 27 | 66 | 2.42 | both disks |
| Band practice 8-28 | your band | 12 | 36 | 2.39 | internal only |
| Joni Mitchell | record | 5 | 30 | 1.76 | internal only |
| Beach House | record | 12 | 126 | 0.89 | both disks |
| Guitar-split working set | working | 2 | 12 | 0.82 | internal only |
| The Life and Times | record | 43 | 258 | 0.75 | both disks |
| Band practice / memo capture | your band | 6 | 34 | 0.66 | internal only |
| Bass-fix working set | working | 4 | 22 | 0.63 | internal only |
| unclassified | working | 30 | 180 | 0.62 | internal only |
| Smashing Pumpkins | record | 7 | 84 | 0.57 | drive only |
| Band practice / band-midi | your band | 6 | 18 | 0.39 | internal only |
| Working set | working | 2 | 13 | 0.31 | internal only |
| Nine Inch Nails | record | 1 | 5 | 0.10 | internal only |
| **Total** | | **717** | **4,315** | **146.62** | |

Counts exclude loop packs and sample libraries. A song folder counts when it holds two or more different stems.

## What is worth doing next

- **The Appleseed Cast is the real exposure.** Roughly 39 GB across five internal pools (`APPLESEED-CAST-ALL` 28 GB, `lowlevelowl1-demucs` 3.7 GB, `lowlevelowl2-demucs` 3.3 GB, `illumination-ritual-demucs` 3.6 GB, `mare-vitalis-demucs` 770 MB). Black holds only its drum stems. This copy needs the T7 Shield, because Black has 1.9 GB free.
- **Your own band practice recordings** are the biggest unbacked block, roughly 34 GB across four pools, internal only.
- **Repoint the stem library.** All 864 dead links share one prefix, so a search and replace onto the live pool would restore the index without moving any audio.
- **Regenerate the stem map** with `build_stem_map.py` so it stops pointing at the old location.

## Provenance

Figures come from a direct `os.walk` of the mounted disks on 2026-10-16, counting a folder as a song when it holds two or more distinct stem names. exFAT AppleDouble `._` files were excluded from every count. The T7 Shield was not mounted and is absent from every row. The pre-existing `stem-map.md` totals (27 artists, 278 songs, 1,349 files, 56.76 GB) are lower because its paths no longer resolve.
