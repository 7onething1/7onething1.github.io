# Apostrophe (’) vs the Songsterr GPs

Full-song, AI transcription, drums present. Measured 2026-09-05.

Album reference release: Apostrophe (’) / 1974 / 6933009f-2a2d-4c9b-aa1a-274b79cab331

## The three filters

- **Full song**: tab duration from its own signatures and tempo automation, against the
  MusicBrainz album track length, inside plus or minus 20 percent.
- **AI transcription**: Songsterr's `aiGenerated` flag or `createdVia` reading `AI`.
- **Has drums**: a drum staff carrying real notes, rests excluded.

## What passed (2 of 14 tabs)

| Song | Tab | Bars | Tab length | Album | Delta | Drum notes | All staves |
|---|---|---|---|---|---|---|---|
| Apostrophe' (live) | s6035435 | 152 | 6:36 | 5:53 | +12.3% | 2,855 | 7,369 |
| Cosmik Debris | s412177 | 80 | 4:19 | 4:10 | +3.8% | 1,581 | 3,360 |

## Every tab measured

| Song | Tab | AI | Bars | Length | Album | Delta | Drums | Total | Empty staves |
|---|---|---|---|---|---|---|---|---|---|
| Apostrophe' | s6035435 | AI | 152 | 6:36 | 5:53 | +12.3% | 2,855 | 7,369 | - |
| Apostrophe' | s35873 | no | 125 | 5:48 | 5:53 | -1.2% | 0 | 3,351 | - |
| Cosmik Debris | s1154774 | AI | 159 | 7:40 | 4:10 | +84.1% | 3,135 | 8,380 | - |
| Cosmik Debris | s412177 | AI | 80 | 4:19 | 4:10 | +3.8% | 1,581 | 3,360 | - |
| Don't Eat The Yellow Snow | s6075883 | AI | 85 | 3:38 | 2:06 | +73.8% | 934 | 2,126 | - |
| Don't Eat The Yellow Snow | s35866 | no | 38 | 1:50 | 2:06 | -12.4% | 560 | 2,720 | - |
| Don't Eat The Yellow Snow | s2561609 | no | 4 | 0:12 | 2:06 | -90.3% | 0 | 44 | - |
| Excentrifugal Forz | s1014276 | no | 9 | 0:18 | 1:31 | -79.9% | 143 | 361 | - |
| Father O'Blivion | s35864 | no | 83 | 2:16 | 2:18 | -1.2% | 1,339 | 3,168 | - |
| Nanook Rubs It | s35865 | no | 109 | 4:46 | 4:37 | +3.6% | 1,309 | 4,238 | - |
| St. Alfonzo's Pancake Breakfast | s35892 | no | 63 | 1:51 | 1:52 | -0.5% | 851 | 2,829 | - |
| Stink-Foot | s2382928 | no | 226 | 6:57 | 6:35 | +5.6% | 2,599 | 9,720 | - |
| Stink-Foot | s6205368 | no | 114 | 6:50 | 6:35 | +3.9% | 2,524 | 6,923 | - |
| Uncle Remus | s35894 | no | 57 | 2:55 | 2:54 | +0.8% | 834 | 3,626 | - |

## Method

Songsterr meta API plus the CloudFront notation JSON, no browser and no login.
Counts exclude rests. Duration walks each measure at its own signature and the tempo in
force, including mid-bar tempo marks. The arithmetic was validated against the two public
Zomby Woof tabs and reproduced 5:03.86 and 5:30.84 to the hundredth of a second.

## Honest limits

- Structural measurement only. Nothing here establishes drum accuracy, cymbal choice,
  playable orchestration or attack placement. That needs the album master.
- The parenthesised-note column from the earlier page is omitted, because the two source
  tabs do not carry that count in one shared field on their current revisions.
- `aiGenerated` and `createdVia` disagree on some tabs. Either one marks a tab as AI here,
  and both are printed so the call is checkable.
- The plus or minus 20 percent band is a choice, wide enough for a fade or count-in and
  narrow enough to exclude an excerpt.
