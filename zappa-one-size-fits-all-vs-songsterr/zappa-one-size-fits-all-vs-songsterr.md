# One Size Fits All vs the Songsterr GPs

Full-song, AI transcription, drums present. Measured 2026-09-05.

Album reference release: One Size Fits All / 1975 / 0836aef5-1e2c-4d75-8440-675053311e99

## The three filters

- **Full song**: tab duration from its own signatures and tempo automation, against the
  MusicBrainz album track length, inside plus or minus 20 percent.
- **AI transcription**: Songsterr's `aiGenerated` flag or `createdVia` reading `AI`.
- **Has drums**: a drum staff carrying real notes, rests excluded.

## What passed (4 of 13 tabs)

| Song | Tab | Bars | Tab length | Album | Delta | Drum notes | All staves |
|---|---|---|---|---|---|---|---|
| Inca Roads (live) | s2824983 | 322 | 9:48 | 8:45 | +12.2% | 5,016 | 9,730 |
| Po-Jama People | s5469788 | 197 | 7:51 | 7:38 | +2.9% | 3,082 | 7,663 |
| Florentine Pogen | s2891451 | 131 | 5:38 | 5:23 | +4.9% | 1,628 | 3,866 |
| Can't Afford No Shoes | s2857465 | 89 | 2:38 | 2:37 | +0.8% | 1,045 | 3,927 |

## Every tab measured

| Song | Tab | AI | Bars | Length | Album | Delta | Drums | Total | Empty staves |
|---|---|---|---|---|---|---|---|---|---|
| Andy | s21495 | no | 176 | 5:29 | 6:03 | -9.3% | 2,461 | 6,812 | - |
| Can't Afford No Shoes | s2857465 | AI | 89 | 2:38 | 2:37 | +0.8% | 1,045 | 3,927 | - |
| Evelyn, A Modified Dog | s4430002 | AI | 33 | 1:06 | 1:05 | +1.5% | 0 | 145 | - |
| Florentine Pogen | s2891451 | AI | 131 | 5:38 | 5:23 | +4.9% | 1,628 | 3,866 | - |
| Florentine Pogen | s2024455 | no | 132 | 5:31 | 5:23 | +2.6% | 112 | 278 | - |
| Inca Roads | s2824983 | AI | 322 | 9:48 | 8:45 | +12.2% | 5,016 | 9,730 | - |
| Inca Roads | s2824994 | AI | 331 | 11:01 | 8:45 | +26.0% | 4,599 | 9,024 | - |
| Inca Roads | s412178 | no | 322 | 8:53 | 8:45 | +1.7% | 3,373 | 7,636 | - |
| Inca Roads | s2440098 | no | 32 | 1:06 | 8:45 | -87.4% | 0 | 209 | - |
| Po-Jama People | s5469788 | AI | 197 | 7:51 | 7:38 | +2.9% | 3,082 | 7,663 | - |
| San Ber'dino | s412171 | no | 85 | 3:04 | 5:51 | -47.5% | 0 | 2,777 | - |
| Sofa No. 2 | s412180 | no | 93 | 2:54 | 2:38 | +10.4% | 0 | 1,777 | - |
| Sofa No. 2 | s187106 | no | 0 | n/a | 2:38 | n/a | 0 | 0 | - |

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
