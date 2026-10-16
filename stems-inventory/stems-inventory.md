# Stem Inventory

Walked 2026-10-16 on Jacks-iMac with all three disks mounted (internal, T7 Shield, Black). Live page: https://7onething1.github.io/stems-inventory/

## Headline

- **940** song folders, **5,103** stem files, **187.87 GB** of stem audio, across **93 pools** and **22 artists**.
- **56.49 GB** of that has no copy on any external drive.
- **186 shortcuts built**, every one resolving to a real folder.
- Both externals are nearly full: T7 Shield 8.0 GB free, Black 1.9 GB free.

## How to find any of it now

Hub: `~/Projects/stem-map/STEMS-FINDER`

| Item | What it is |
|---|---|
| `by-artist/` | one folder per artist, a shortcut to each of that artist's pools across all three disks, named with disk and size |
| `by-disk/` | the same 93 pools grouped by the disk holding them |
| `WHERE-ARE-THE-STEMS.txt` | the whole map as plain text, including the traps below |
| `refresh.sh` | rebuilds all of it from a fresh walk |

Inside **each of the 93 pools** there are now two entries, both sorting to the top of a Finder window:

- `_STEMS-FINDER` — a shortcut back to the hub
- `_WHERE-ARE-THE-STEMS.txt` — the same text map

So landing in any stem folder on any disk gets you to all the others. Verified: 93 of 93 pools have both, and 186 of 186 hub links resolve to a real directory.

## Four traps on these disks

1. **A half-finished copy.** `/Volumes/Black/htdemucs_6s` duplicates `/Volumes/Black/stems/htdemucs_6s`, and 7 of its 15 album folders hold zero audio, including both A Perfect Circle folders, A Farewell To Kings, Life and times, Currents. Use the one under `/stems/`. Nothing was deleted.
2. **The stem library is a shell.** `~/Music/STEMS_LIBRARY/` is a symlink farm, 918 of 1,288 links dead (71 percent). All 864 broken music links point at a pre-migration `Moises_Input/stems` path.
3. **The old map is dead.** `~/Projects/stem-map/stem-map.md` (2026-06-20) targets a tree that has since moved into `Brandon-Vault/New Folder With Items 2/New Folder With Items 7/IF YOU CAN'T FIND SOMETHING ITS HERE/`.
4. **exFAT inflates counts.** Both drives write a `._` sidecar beside every file, so a naive count doubles. Every figure here excludes them.

## A Perfect Circle, copied and verified

| Set | Files | Bytes | Destination |
|---|---|---|---|
| 13th Step, FLAC source demucs | 36 | 152,810,128 | `/Volumes/Black/stems/htdemucs_6s/13th Step (FLAC source)/` |
| APC stem loops | 13 | 40,660,090 | `/Volumes/Black/stems/htdemucs_6s/A Perfect Circle - STEM LOOPS/` |

Source and destination agree exactly on file count and byte total for the first set. The loops folder held 230 entries and only 13 resolved; the other 217 were dead symlinks with no file behind them.

On the drive beforehand and left untouched: `13th step apc` 330 files 571 MB, `APC Mercs` 240 files 413 MB, plus 7.2 GB of drum-kit splits and 106 MB of drum stems at the root of Black.

## Everything we have stemmed

| Artist or collection | Kind | Pools | Songs | Files | GB | Which disks |
|---|---|---|---|---|---|---|
| Your band practice | your band | 6 | 176 | 929 | 34.82 | T7 + internal |
| Phish | record | 15 | 113 | 579 | 27.28 | T7 + Black + internal |
| The Mars Volta | record | 4 | 39 | 224 | 18.03 | Black + internal |
| The Appleseed Cast | record | 7 | 93 | 546 | 16.94 | Black + internal |
| Dream Theater | record | 2 | 24 | 144 | 15.73 | Black |
| Working sets | working | 15 | 94 | 513 | 14.99 | T7 + internal |
| Band books corpus | working | 4 | 53 | 319 | 14.61 | T7 + internal |
| A Perfect Circle | record | 5 | 60 | 246 | 8.07 | Black |
| Radiohead | record | 5 | 62 | 359 | 7.72 | Black + internal |
| Mixed Moises output | working | 1 | 20 | 117 | 5.68 | T7 |
| Yes | record | 2 | 4 | 24 | 5.26 | Black |
| Tame Impala | record | 2 | 13 | 78 | 3.99 | Black |
| Rush | record | 1 | 6 | 36 | 3.57 | Black |
| Fugazi | record | 1 | 11 | 66 | 2.86 | T7 |
| Shiner | record | 5 | 26 | 54 | 1.94 | Black + internal |
| Joni Mitchell | record | 1 | 5 | 30 | 1.76 | internal only |
| Unsorted | working | 4 | 6 | 33 | 0.92 | T7 + internal |
| Mixed, to be stemmed | working | 1 | 11 | 67 | 0.84 | T7 |
| Mixed stem output | working | 6 | 49 | 289 | 0.80 | T7 + internal |
| Beach House | record | 2 | 18 | 108 | 0.75 | Black |
| The Life and Times | record | 2 | 43 | 258 | 0.75 | Black + internal |
| Smashing Pumpkins | record | 2 | 14 | 84 | 0.57 | Black |
| **Total** | | **93** | **940** | **5,103** | **187.87** | |

Counts exclude loop packs and sample libraries. A song folder counts when it holds two or more distinct stems, so drum-split folders of kick, snare, hihat, toms and cymbals count too.

## What is still open

- **The Appleseed Cast has no full backup.** Roughly 39 GB of folder space across five internal pools (`APPLESEED-CAST-ALL` 28 G, `lowlevelowl1-demucs` 3.7 G, `lowlevelowl2-demucs` 3.3 G, `illumination-ritual-demucs` 3.6 G, `mare-vitalis-demucs` 770 M). The drives hold only its drum stems and one album, and neither has the room. Needs space cleared or a new disk.
- **Your own band practice** is the biggest single block, 34.82 GB over six pools, part on T7 and the rest internal only.
- **Repoint the stem library.** All 864 dead links share one prefix, so a search and replace onto the live pool restores the index without moving any audio.
- **Regenerate or retire the old map**, since the hub refreshes itself.

## Provenance

Figures come from a direct `os.walk` of the internal disk, the T7 Shield and Black on 2026-10-16. A folder counts as a song when it holds two or more distinct stem names. exFAT AppleDouble `._` files were excluded from every count. Overlapping scan roots (the T7 root and its own subfolders) were deduplicated by path before any figure was computed, which dropped 86 double-counted rows. The six flat drum-split folders at the root of Black are listed from direct measurement, since they hold no per-song subfolders.
