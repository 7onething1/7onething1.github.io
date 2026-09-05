# Joe’s Garage vs the Songsterr GPs

Full-song, AI transcription, drums present. Measured 2026-09-05.

Album reference release: Joe’s Garage: Acts I, II & III / 1987 / 2e620afe-b861-442a-8f85-df5ad7fac350

## The three filters

- **Full song**: tab duration from its own signatures and tempo automation, against the
  MusicBrainz album track length, inside plus or minus 20 percent.
- **AI transcription**: Songsterr's `aiGenerated` flag or `createdVia` reading `AI`.
- **Has drums**: a drum staff carrying real notes, rests excluded.

## What passed (7 of 22 tabs)

| Song | Tab | Bars | Tab length | Album | Delta | Drum notes | All staves |
|---|---|---|---|---|---|---|---|
| Crew Slut | s4982983 | 194 | 6:26 | 6:32 | -1.5% | 2,723 | 6,277 |
| Sy Borg | s3362954 | 281 | 8:58 | 8:56 | +0.5% | 2,376 | 8,343 |
| Joe's Garage | s615252 | 171 | 6:12 | 6:15 | -0.8% | 1,949 | 2,861 |
| Dong Work For Yuda | s768189 | 146 | 4:03 | 5:03 | -19.7% | 1,606 | 4,125 |
| Outside Now | s1200335 | 70 | 5:26 | 5:50 | -6.7% | 1,537 | 3,933 |
| Lucille Has Messed My Mind Up | s187088 | 175 | 5:50 | 5:43 | +2.0% | 1,049 | 4,896 |
| Catholic Girls | s187085 | 124 | 4:19 | 4:26 | -2.3% | 172 | 380 |

## Every tab measured

| Song | Tab | AI | Bars | Length | Album | Delta | Drums | Total | Empty staves |
|---|---|---|---|---|---|---|---|---|---|
| A Token Of My Extreme | s817574 | no | 5 | 0:15 | 5:30 | -95.5% | 66 | 106 | - |
| A Token Of My Extreme | s627331 | no | 10 | 0:30 | 5:30 | -90.9% | 0 | 93 | - |
| Catholic Girls | s749523 | no | 127 | 4:03 | 4:26 | -8.5% | 1,847 | 6,380 | - |
| Catholic Girls | s187085 | AI | 124 | 4:19 | 4:26 | -2.3% | 172 | 380 | - |
| Crew Slut | s4982983 | AI | 194 | 6:26 | 6:32 | -1.5% | 2,723 | 6,277 | - |
| Dong Work For Yuda | s768189 | AI | 146 | 4:03 | 5:03 | -19.7% | 1,606 | 4,125 | Electric Bass (finger) |
| Fembot In A Wet T-Shirt | s748459 | no | 84 | 2:40 | 4:45 | -43.7% | 1,197 | 3,713 | - |
| Joe's Garage | s187096 | no | 137 | 6:24 | 6:15 | +2.6% | 2,027 | 5,232 | - |
| Joe's Garage | s615252 | AI | 171 | 6:12 | 6:15 | -0.8% | 1,949 | 2,861 | - |
| Keep It Greasey | s604777 | no | 248 | 8:18 | 8:22 | -0.7% | 4,948 | 14,444 | - |
| Keep It Greasey | s754950 | no | 121 | 2:54 | 8:22 | -65.2% | 0 | 406 | - |
| Lucille Has Messed My Mind Up | s187088 | AI | 175 | 5:50 | 5:43 | +2.0% | 1,049 | 4,896 | - |
| On The Bus | s1309087 | no | 119 | 4:39 | 4:18 | +8.5% | 0 | 979 | - |
| Outside Now | s1200335 | AI | 70 | 5:26 | 5:50 | -6.7% | 1,537 | 3,933 | - |
| Outside Now | s4552353 | no | 75 | 5:57 | 5:50 | +2.1% | 567 | 3,408 | - |
| Packard Goose | s35875 | no | 512 | 11:54 | 11:34 | +2.9% | 4,768 | 13,572 | - |
| Stick It Out | s980112 | no | 168 | 4:20 | 4:34 | -5.1% | 0 | 1,392 | - |
| Sy Borg | s3362954 | AI | 281 | 8:58 | 8:56 | +0.5% | 2,376 | 8,343 | - |
| The Central Scrutinizer | s3554079 | no | 92 | 3:30 | 3:23 | +3.6% | 1,465 | 3,019 | - |
| The Central Scrutinizer | s796119 | no | 27 | 1:01 | 3:23 | -69.9% | 0 | 169 | - |
| Watermelon In Easter Hay | s35881 | no | 105 | 8:25 | 9:09 | -7.9% | 2,091 | 4,856 | - |
| Why Does It Hurt When I Pee? | s3098900 | no | 46 | 2:19 | 2:36 | -10.4% | 527 | 1,339 | - |

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
