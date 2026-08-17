# Shiner · BELIEVEYOUME: Tab Workbench

Census taken 2026-08-17. Every Songsterr tab, Guitar Pro file, and stem folder for the ten songs, matched song by song.

## Verdict

| # | Song | Verdict | GP guitars | GP vocal | Isolated gtr stem | Bars | Blocker |
|---|---|---|---|---|---|---|---|
| 1 | Asleep in the Trunk | BLOCKED | 2 | yes | none | 264 | 4-stem FLAC only, guitar inside `other.flac` |
| 2 | The Alligator | READY | 2 | yes | lead + rhythm | 86 | has `audio_truth.gp3` prior |
| 3 | The Mutiny | READY, best first | 2 | yes | Rhythm L + R + Solo | 135 | only song with true L/R splits |
| 4 | So Far So | READY | 2 | yes | Rhythm + Solo + Other | 140 | tab private on Songsterr (403) |
| 5 | My Mirror Hates Me | READY | 2 | yes | Rhythm + Solo + Other | 134 | Standard E, the only one |
| 6 | Endless Summer | READY | 2 | yes | lead + rhythm | 192 | none |
| 7 | Lazarus | REPAIR FIRST | 2 | MISSING | lead + rhythm | 138 | no vocal staff, no drum staff |
| 8 | Not Too Much | READY | 2 | yes | Rhythm + Solo + Other | 122 | D Standard, not Drop D |
| 9 | Broken Satellites | REPAIR FIRST | 3 + 1 dupe | yes | Rhythm + Solo + Other | 171 | Copy tracks, 5-string bass under Drop C guitar |
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

## Four traps

1. **Three numbering schemes.** Canonical folder `03_` is Broken Satellites, stem folder `03 -` is The Mutiny. Match on title, and ignore the leading digits entirely. Album order comes from `sources.yaml` and the stem prefixes, which agree.
2. **Broken Satellites copy tracks.** `Rhythm Guitar Copy` plus a second duplicate track, `Copy`. The bass is 5-string standard `23 28 33 38 43` under a Drop C guitar, where every other song uses `24 31 36 41`. Run the octave-copy gate first.
3. **Asleep in the Trunk time signature.** Songsterr says 3/4, the MIDI metadata and book cards say 4/4. Unresolved, and it changes every bar number across 264 bars.
4. **No guitar evidence for two songs.** Asleep and Jackie were separated to four stems. A pitch in `other` does not prove the guitar played it. Re-separate to six stems first.

## Every vocal staff is a sax in disguise

All nine vocal tracks carry MIDI program 66 on a six-string standard-tuning staff, the known Songsterr AI shape. Classify by track name and ignore the program.

## Queue

1. The Mutiny: real L/R guitar files, so the two-guitar split validates against ground truth
2. The Alligator: has a stem-corrected prior and a resolved key
3. Not Too Much, So Far So, My Mirror Hates Me, Endless Summer
4. Lazarus: guitar and bass proceed now, vocal melody has to be built rather than corrected
5. Broken Satellites: resolve copies and bass tuning first
6. Asleep in the Trunk, Jackie: re-separate, settle Asleep's time signature

## Paths

- Tabs, GP, charts, lyrics: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/_canonical_2026-06-04/songs/<NN_slug>/`
- Stems, all ten: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/`
- Stems, eight, redundant: `/Volumes/T7 Shield/Full wav files for music books are here/`
- Keys and method trails: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/keys_resolved.yaml`
- Songsterr audit: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/SONGSTERR_AUDIT_2026-06-03.md`
- Stem vs MIDI disputes: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/STEM_VS_MIDI_AUDIT_2026-06-03.md`

## Skills this feeds

`/impossible-guitar-parts`, `/composite-stem-alignment`, `/songsterr-tab-guide`, `/songsterr-upload`, `/five-stem-song-analyst`, `/audio-stems-to-midi`
