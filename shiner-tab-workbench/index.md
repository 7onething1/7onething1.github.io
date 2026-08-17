# Shiner · BELIEVEYOUME: Tab Workbench

Census taken 2026-08-17. Every Songsterr tab, Guitar Pro file, and stem folder for the ten songs, matched song by song.

## Verdict

| # | Song | Verdict | GP guitars | GP vocal | Isolated gtr stem | Bars | Blocker |
|---|---|---|---|---|---|---|---|
| 1 | Asleep in the Trunk | BLOCKED | 2 | yes | none | 264 | 4-stem FLAC only, guitar inside `other.flac` |
| 2 | The Alligator | READY | 2 | yes | lead + rhythm | 86 | has `audio_truth.gp3` prior |
| 3 | The Mutiny | READY, best first | 2 | yes | Rhythm L + R + Solo | 135 | only song with true L/R splits |
| 4 | So Far So | READY | 2 | yes | Rhythm + Solo + Other | 140 | private s5110187 is Drop C; public s4938058 is a different Drop D arrangement |
| 5 | My Mirror Hates Me | READY | 2 | yes | Rhythm + Solo + Other | 134 | Standard E, the only one |
| 6 | Endless Summer | READY | 2 | yes | lead + rhythm | 192 | none |
| 7 | Lazarus | RE-PULL FIRST | 2 | yes, live | lead + rhythm | 138 | local file is a stale 3-track May export; s5476396 has 5 tracks with Vocals + Drums |
| 8 | Not Too Much | READY | 2 | yes | Rhythm + Solo + Other | 122 | D Standard, not Drop D |
| 9 | Broken Satellites | RE-PULL FIRST | 3 + 1 dupe local | yes | Rhythm + Solo + Other | 171 | copy tracks are a LOCAL artifact; live s5084035 is a clean 5-track Drop C |
| 10 | Jackie | BLOCKED | 1 | yes | none | 102 | 4-stem FLAC, single guitar staff |

## Songsterr registry

| Song | ID | HTTP | Tempo | Tuning | Time |
|---|---|---|---|---|---|
| Asleep in the Trunk | s5085156 | 200 | 173 | Drop C | 3/4 |
| The Alligator | s5083283 | 200 | 120 | Drop C | 4/4 |
| The Mutiny | s5083529 | 200 | 130 | Drop C | 4/4 |
| So Far So | s5110187 | 403 | 130 | Drop C | 4/4 |
| My Mirror Hates Me | s5418315 | 200 | 114 | Standard E | 4/4 |
| Endless Summer | s5083970 | 200 | 140 | Drop C | 4/4 |
| Lazarus | s5082702 | 200 | 117 | Drop C | 4/4 |
| Not Too Much | s5084025 | 200 | 85 | D Standard | 4/4 |
| Broken Satellites | s5084035 | 200 | 116 | Drop C | 4/4 |
| Jackie | s5418285 | 200 | 144 | Drop C | 4/4 |

Songsterr does not display a key field. Key claims come from the stems or from Brandon's ear. The Alligator is resolved to G major at high confidence off a three-stem consensus; So Far So and Broken Satellites remain open.


## Live Songsterr versus the local export

Read from `songsterr.com/api/meta/<id>/revisions` on 2026-08-17. The canonical folder was exported 2026-06-02/03 and Songsterr has moved since.

| Song | ID | Latest rev | Built | Source | Tracks | Local? |
|---|---|---|---|---|---|---|
| So Far So | s5110187 | private | n/a | n/a | 5, Drop C | yes |
| So Far So | s4938058 | 6458676 | 2026-04-24 | AI | 5, Drop D | no |
| The Alligator | s5083283 | 6647001 | 2026-05-05 | AI | 5 | yes |
| The Alligator | s2132594 | 2834004 | 2025-08-25 | AI | 4 | no |
| The Mutiny | s5083529 | 6647326 | 2026-05-05 | AI | 5 | yes |
| Asleep In The Trunk | s5085156 | 7798309 | 2026-07-08 | Editor, hand-built | 5 | stale copy |
| Asleep In The Trunk | s4937622 | 6458071 | 2026-04-24 | AI | 5 | no |
| My Mirror Hates Me | s5418315 | 7085816 | 2026-05-29 | AI | 5 | yes |
| Endless Summer | s5083970 | 6647906 | 2026-05-05 | AI | 5 | yes |
| Lazarus | s5082702 | 6646409 | 2026-05-04 | GP import | 3 | yes, the stale one |
| Lazarus | s5476396 | 7834445 | 2026-07-11 | Editor, hand-built | 5, Vocals + Drums | no |
| Not Too Much | s5084025 | 6647986 | 2026-05-05 | AI | 5 | yes |
| Broken Satellites | s5084035 | 6648000 | 2026-05-05 | AI | 5, clean | stale copy |
| Broken Satellites BC version | s5965143 | 7791000 | 2026-07-08 | AI | 5 | no |
| Jackie | s5418285 | 7834599 | 2026-07-11 | Editor, hand-built | 4 | stale copy |
| Surgery | s5071338 | 6631358 | 2026-05-04 | AI | 5 | not an album track |
| The Truth About Cows | s5097434 | 6665514 | 2026-05-06 | AI | 5 | not an album track |

**Three local files are stale.** Lazarus, Asleep In The Trunk, and Jackie carry Editor revisions from 2026-07-08 and 2026-07-11. Lazarus matters most: `s5476396` holds Lead Guitar, Rhythm Guitar, bass, drums, and a Vocals staff at program 66.

**The Broken Satellites copy tracks were never on Songsterr.** The live tab returns five clean tracks with a Drop C bass at `41 36 31 24`. The duplicates and the five-string tuning exist only in the local file.

**Two artist pages.** `shiner-tabs-a86009` and `shiner-allen-epley-josh-newton-paul-malinowski-jason-gerken-tabs-a829768`. The Mutiny, Endless Summer, Broken Satellites, and the new Lazarus live on the second one.

## Four traps

1. **Three numbering schemes.** Canonical folder `03_` is Broken Satellites, stem folder `03 -` is The Mutiny. Match on title, and ignore the leading digits entirely. Album order comes from `sources.yaml` and the stem prefixes, which agree.
2. **Broken Satellites copy tracks, local only.** `Rhythm Guitar Copy` plus a second duplicate track, `Copy`, and a 5-string standard bass under a Drop C guitar. None of it is on Songsterr, so the duplication happened locally. Run the octave-copy gate on the local file and re-pull the live tab as reference.
3. **Asleep in the Trunk time signature.** Songsterr says 3/4, the MIDI metadata and book cards say 4/4. Unresolved, and it changes every bar number across 264 bars.
4. **No guitar evidence for two songs.** Asleep and Jackie were separated to four stems. A pitch in `other` does not prove the guitar played it. Re-separate to six stems first.

## Every vocal staff is a sax in disguise

All nine vocal tracks carry MIDI program 66 on a six-string standard-tuning staff, the known Songsterr AI shape. Classify by track name and ignore the program.

## Queue

1. The Mutiny: real L/R guitar files, so the two-guitar split validates against ground truth
2. The Alligator: has a stem-corrected prior and a resolved key
3. Not Too Much, So Far So, My Mirror Hates Me, Endless Summer
4. Lazarus: re-pull `s5476396` first, the vocal and drum staves exist there
5. Broken Satellites: re-pull the live tab, choose between `s5084035` and the 2026-07-08 `s5965143`
6. Asleep in the Trunk, Jackie: re-pull the 2026-07 hand-built revisions, re-separate to six stems, settle Asleep's time signature

## Paths

- Tabs, GP, charts, lyrics: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/_canonical_2026-06-04/songs/<NN_slug>/`
- Stems, all ten: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/`
- Stems, eight, redundant: `/Volumes/T7 Shield/Full wav files for music books are here/`
- Keys and method trails: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/keys_resolved.yaml`
- Songsterr audit: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/SONGSTERR_AUDIT_2026-06-03.md`
- Stem vs MIDI disputes: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/STEM_VS_MIDI_AUDIT_2026-06-03.md`

## Skills this feeds

`/impossible-guitar-parts`, `/composite-stem-alignment`, `/songsterr-tab-guide`, `/songsterr-upload`, `/five-stem-song-analyst`, `/audio-stems-to-midi`
