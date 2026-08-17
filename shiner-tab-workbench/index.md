# Shiner · BELIEVEYOUME: Tab Workbench

Census taken 2026-08-17. Every Songsterr tab, Guitar Pro file, and stem folder for the ten songs, matched song by song.



## Phase 0 result: run, measured, closed

Executed 2026-08-17. Live notation pulled per track off the Songsterr CDN route `st_gpdiff.py` uses, then counted bar by bar. Four of five items settled by measurement.

**A measurement bug was caught and fixed before reporting.** Songsterr encodes a rest as `{"notes":[{"rest":true}]}`, so the first pass scored rests as notes and returned 100% occupancy everywhere. Every number below excludes rests.

| Song | Live rev | Live notes | Local notes | Verdict | What it settled |
|---|---|---|---|---|---|
| Asleep in the Trunk | 7798309 | 7245 | 173 | Re-pull | The source was always fine, our copy was the defect. 42x the content. Vocals 14 to 311. |
| Lazarus | 7834445 | 8672 | 3319 | Re-pull | New tab carries the vocal (228) and drum (2040) staves the local file lacks. 207 bars against 138. |
| Jackie | 7834599 | 3014 | 3013 | No action | Correction: the local copy is current. Track for track identical, vocals 139 against 139. |
| Broken Satellites | 6648000 | 5870 | 9071 | Use live | The Copy tracks exist only in our file. Lead 924, Rhythm 2671, Vocals 335, identical to ours. The extra 3201 local notes are the copies. |
| Broken Satellites BC | 7791000 | 4700 | n/a | Reject | Lead holds 129 notes at 13.3% occupancy against 924 at 60.2% on s5084035. |

**The vocal answer holds on the live tabs, from Songsterr's own flag.** Every song returns `isVocalTrack: true` on exactly one track. Not one returns two. Live Asleep vocal carries 15 stacked beats, live Broken Satellites carries 67.

**New Phase 1 item.** The Lazarus lead holds 154 notes at 43% occupancy with zero stacks, and the BC lead holds 129 at 13.3%. That is the documented Songsterr solo failure. Read the lead's note count and fret range before accepting any tab.

## Vocal harmony: the direct answer

**No. Not one tab carries a second vocal staff.** Measured across 10 local `.gp` files and 17 live Songsterr revisions, counting any track whose name matches vocal, voice, sing, vox, lyric or harmon, cross-checked against MIDI program 66. Every tab holds exactly one `Vocals` staff. The old Lazarus holds none. Zero of 27 hold two.

**Harmony does exist, written as stacked notes on that single staff.** Five of ten stack notes inside the vocal part, up to three at once.

| Song | Vocal staves | Vocal notes | Stacked beats | Max stack | Reading |
|---|---|---|---|---|---|
| So Far So | 1 | 342 | 53 | 3 | Three-part harmony on one staff |
| Broken Satellites | 1 | 335 | 67 | 2 | Most stacked beats on the record |
| The Mutiny | 1 | 247 | 18 | 2 | Two-part in places |
| My Mirror Hates Me | 1 | 177 | 17 | 3 | Three-part in places |
| Not Too Much | 1 | 189 | 6 | 2 | Barely stacked |
| The Alligator | 1 | 178 | 0 | 1 | Monophonic, no written harmony |
| Endless Summer | 1 | 210 | 0 | 1 | Monophonic, no written harmony |
| Jackie | 1 | 139 | 0 | 1 | Monophonic, no written harmony |
| Asleep in the Trunk | 1 | 14 | 0 | 1 | 14 notes across 264 bars, the staff is empty |
| Lazarus (local) | 0 | 0 | 0 | 0 | No vocal staff; the live 2026-07-11 build has one |

There is no existing second staff to correct. Every harmony pass is either splitting a stack into its own staff, or building a harmony line from the vocal stem where the notation carries none.

## Note content, every staff

| Song | Bars | Total | Lead | Rhythm | Bass | Drums | Vocal | Notes/bar |
|---|---|---|---|---|---|---|---|---|
| Broken Satellites | 171 | 9071 | 924 | 2671 | 530 | 1410 | 335 | 53.0 |
| Not Too Much | 122 | 6885 | 811 | 3333 | 876 | 1676 | 189 | 56.4 |
| Endless Summer | 192 | 5639 | 1139 | 2778 | 595 | 917 | 210 | 29.4 |
| So Far So | 140 | 4941 | 579 | 1413 | 770 | 1837 | 342 | 35.3 |
| The Mutiny | 135 | 4906 | 674 | 2586 | 505 | 894 | 247 | 36.3 |
| My Mirror Hates Me | 134 | 4722 | 342 | 1270 | 612 | 2321 | 177 | 35.2 |
| The Alligator | 86 | 4134 | 698 | 1586 | 439 | 1233 | 178 | 48.1 |
| Lazarus | 138 | 3319 | 718 | 1392 | 1209 | 0 | 0 | 24.1 |
| Jackie | 102 | 3013 | 0 | 1241 | 581 | 1052 | 139 | 29.5 |
| Asleep in the Trunk | 264 | 173 | 0 | 33 | 101 | 25 | 14 | 0.7 |

**The local Asleep file is a shell.** 264 bars, 173 notes, a Lead Guitar staff holding zero. It clears every rule `preflight_import.py` owns, because that gate counts staff presence and role identity and never parses a single Beat. Built today to close it: `~/.claude/skills/impossible-guitar-parts/empty_staff_gate.py`, validated at exit 1 on Asleep with five faults and exit 0 on the other nine.

## The fix plan, in order

### Phase 0. Trust the source before touching anything

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 1 | Asleep local `.gp` is a 173-note shell | Re-pull `s5085156` rev 7798309 | `/songsterr-tab-guide`, `st_gpdiff.py` | Fixed-shape tools emit full-size empty files |
| 2 | Lazarus local has no vocal or drum staff | Re-pull `s5476396` | `/songsterr-tab-guide` | Judging a source by a stale local export |
| 3 | Jackie local is two months stale | Re-pull `s5418285` rev 7834599 | `/songsterr-tab-guide` | Same |
| 4 | Broken Satellites local carries `Copy` tracks | Re-pull `s5084035`, then weigh `s5965143` | `octave_copy_gate.py` | A lead 77.4% fret+12 copy reached Songsterr |
| 5 | Nothing measured file content | Run the new gate on every re-pull | `empty_staff_gate.py`, built today | Exit 0 proves a tool ran, never that output is good |

### Phase 1. Calibrate the guitar split where ground truth exists

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 6 | No beat-to-seconds map | Build and validate on The Mutiny | `/composite-stem-alignment`, `beat_map.py` | A map beating a random control can still be seven bars wrong |
| 7 | Two guitars on one staff | Split by register and pitch against real `RhythmGtr [L]`/`[R]` | `attack_string_evidence.py`, `register_evidence.py`, `ownership_audit.py` | Splitting by panning, when 19-56% of notes are in BOTH channels |
| 8 | Lead tacet while rhythm covers | Co-activity and role-character audit | `staff_role_audit.py` | A lead with no events from bar 57 |
| 9 | Unplayable voicings | Five-tier playability grade | `impossible_gate.py` | 1111 unreachable chords shipped |
| 10 | A rebuild silently losing notes | Pitch preservation first, skip percentage last | `/impossible-guitar-parts` tier order | A processing-order bug deleted 32 notes at pitch 38 |

### Phase 2. Bass

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 11 | No bass staff checked against a bass stem | Per-beat fundamental, compared bar by bar | `/audio-stems-to-midi`, crepe and yin | Tab MIDI encodes fingering rather than sounded harmony |
| 12 | Broken Satellites bass tuning conflict | Resolve after re-pull, the live tab is Drop C | `empty_staff_gate.py` then `octave_copy_gate.py` | Treating a local edit as a source defect |

### Phase 3. Vocals, which is the harmony question

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 13 | Five songs write harmony as stacks | Verify each stack against the vocal stem before splitting it out | `/audio-stems-to-midi`, `/five-stem-song-analyst` | A pitch in one stem never proves which part sang it |
| 14 | Four songs write a monophonic vocal | Check the stem for harmony the notation omits, add a staff only where the stem carries one | `/audio-stems-to-midi` | Inventing a part the evidence does not support |
| 15 | Asleep has 14 vocal notes over 264 bars | Covered by the Phase 0 re-pull, then re-measure | `empty_staff_gate.py` | Shipping a staff that exists and is empty |
| 16 | No gate for vocal-harmony fidelity | Build one after Phase 3, on the `octave_copy_gate.py` model | GAP, nothing covers this | One mention means a recurring class |

### Phase 4. Unblock the two songs with no guitar evidence

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 17 | Asleep and Jackie are 4-stem only | Re-separate with the Moises role split | Moises Guitar parts module | A pitch inside `other` proving nothing about the guitar |
| 18 | Asleep 3/4 against 4/4 | Settle against audio on the validated beat map | `/composite-stem-alignment` | Correcting 264 bars against the wrong grid |
| 19 | Jackie has one guitar staff | Decide by pan bimodality on the re-separated stems | `/impossible-guitar-parts` guitar count | Counting guitarists by stereo width |

### Phase 5. Put the corrections back

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 20 | An import deleting parts the existing tab holds | Preflight every upload, refuse on role drop | `/songsterr-upload`, `preflight_import.py` | 72 files shipped with no vocal at all |
| 21 | A vocal uploaded as a guitar program | Keep program 66 and the sax type, classify by name | `preflight_import.py` | The vocal filed under horns by a program-first rule |
| 22 | Upload order losing audio sync | YouTube first, then import, then wait for SAVED | `/songsterr-upload` | Importing first produces a silent tab |

**One song per pass.** Phase 0 is the only step running across all ten at once, since it is a re-pull and a measurement. Everything from Phase 1 onward runs one song at a time, starting with The Mutiny.

## Verdict

| # | Song | Verdict | GP guitars | GP vocal | Isolated gtr stem | Bars | Blocker |
|---|---|---|---|---|---|---|---|
| 1 | Asleep in the Trunk | BLOCKED | 2 | yes | none | 264 | local file is a 173-note shell with a zero-note Lead staff; also 4-stem FLAC |
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
