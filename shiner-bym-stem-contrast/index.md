# BELIEVEYOUME stems vs the stem player

Built 2026-08-17. What is on disk for Shiner's BELIEVEYOUME, and what the live stem player exposes of it.

## Short answer

**Multiple guitars: yes, on 8 of 10 songs. Multiple vocals: no, on any song, anywhere.**

- 22 guitar stems on disk, folded into 10 guitar lanes on the site
- 1 vocal stem per song is the maximum, across all five roots swept
- 101 stem files on disk, 70 lane files served

## Per-song guitar and vocal census

Root: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/`

| # | Song | Files | Gtr | Guitar stems | Voc |
|---|---|---|---|---|---|
| 01 | Asleep in the Trunk | 9 | 0 | none isolated, guitar is inside `other` | 1 |
| 02 | The Alligator | 7 | 2 | lead, rhythm | 1 |
| 03 | The Mutiny | 14 | 4 | Rhythm Guitars, RhythmGtr [L], RhythmGtr [R], Solo Guitars | 1 |
| 04 | So Far So | 12 | 3 | Rhythm Guitars, Solo Guitars, Other Guitar | 1 |
| 05 | My Mirror Hates Me | 14 | 3 | Rhythm Guitars, Solo Guitars, Other Guitar | 1 |
| 06 | Endless Summer | 7 | 2 | lead, rhythm | 1 |
| 07 | Lazarus | 7 | 2 | lead, rhythm | 1 |
| 08 | Not Too Much | 14 | 3 | Rhythm Guitars, Solo Guitars, Other Guitar | 1 |
| 09 | Broken Satellites | 13 | 3 | Rhythm Guitars, Solo Guitars, Other Guitar | 1 |
| 10 | Jackie | 4 | 0 | none isolated, guitar is inside `other` | 1 |

No lead/backing split, no harmony stem, no doubles exist on disk today.

## What the player exposes

Six hard-coded lanes for every song: drums, bass, guitar, piano (labeled Keys), vocals, midi (labeled Guide). No per-song lane list. All 70 expected lane files verified live against a 404 control.

## Measured contrasts

1. **The guitar lane is a rhythm-plus-solo sum.** Envelope cross-correlation on The Mutiny: summed rhythm+solo r=+0.835, rhythm alone r=+0.710, solo alone r=+0.286. Control (site vocals vs disk vocals) r=+0.847 as top match, so the measure is validated. The solo is about 11 dB under the rhythm and cannot be separated on the player.
2. **The Guide lane is out of sync on all 10 songs.** Worst: Asleep in the Trunk audio 278s vs guide 527s (+249s). Also Endless Summer +133s, Not Too Much -111s. Not one guide matches its song.
3. **Two songs on the player are not on the album.** Number One Crush and Only Happy When It Rains serve real audio and have no stem folder in any BELIEVEYOUME root. The album source folder holds exactly 10 FLACs.
4. **The stem map under-reports this album.** `stem-map.md` says 7 songs with plain demucs names; the folder holds 10 songs, 101 files, and Moises role labels that the map never records.

## Traps in the stem folders

- `g3.wav` (The Mutiny) reads like a third guitar and is close to empty: mean -48.7 dBFS, peak -16.1, roughly 31 dB below the real rhythm guitar and level with separation residue.
- `l.wav` (The Mutiny) is the kick drum. Band fingerprint matches So Far So's named Kick within about 3 dB across four bands.

## Next step

Give the player a per-song lane list instead of one hard-coded six-lane array. The multi-guitar stems exist today for 8 songs and need no new separation. Multi-vocal would require a fresh re-separation, since no file on disk supports it.
