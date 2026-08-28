# Zappa on Songsterr: parenthesis audit

Live: https://7onething1.github.io/zappa-songsterr-paren-audit/

27 tabs across Over-Nite Sensation and Roxy & Elsewhere.

## Finding

The parenthesised notehead is Songsterr's `ghost: true` note flag. House rule (stems-to-guitar-pro-drums): ghosts get the **staccato dot at velocity 31**, never the parentheses.

- 3 of 27 tabs carry parenthesised drum notes, all hand-tabbed.
- All 17 AI tabs carry zero.
- Montana: human drum track 212, Percussion 105, its own AI drum track 0.
- Hand tabs median 92 bars vs 181 for AI.

## Affected

| Tab | songId | Parens | Drums | Bars |
|---|---|---|---|---|
| Montana | s35870 | 317 | Ac Snare x95, El Snare x79, Bass Drum x24, Low Floor Tom x3 | 7, 8, 9, 10, 13, 14, 15, 16, 17, 18 |
| Zomby Woof | s412162 | 32 | Closed HH x18, Pedal HH x4, Ac Snare x2, Hi-Mid Tom x2 | 4, 13, 15, 40, 41, 42, 43 |
| Trouble Every Day (Live) | s412170 | 9 | Crash 1 x6, Pedal HH x3 | 1, 67, 69 |

## All tabs

| Album | Tab | songId | Source | Rev | Bars | Drum notes | Parens | Synced |
|---|---|---|---|---|---|---|---|---|
| ONS | Montana | s35870 | Hand | 4 | 142 | 2821 | 317 | yes |
| ONS | Zomby Woof | s412162 | Hand | 10 | 114 | 1574 | 32 | yes |
| ONS | Camarillo Brillo | s412176 | Hand | 3 | 122 | 1769 | 0 | yes |
| ONS | Camarillo Brillo (alt) | s187082 | AI | 1 | 151 | 2296 | 0 | yes |
| ONS | Dinah Mo Hum (alt) | s1137599 | AI | 1 | 190 | 2961 | 0 | yes |
| ONS | Dinah Moe Hum | s5469271 | AI | 1 | 203 | 2909 | 0 | yes |
| ONS | Dirty Love | s35862 | Hand | 3 | 75 | 1244 | 0 | yes |
| ONS | Fifty-Fifty | s5469260 | AI | 1 | 200 | 3271 | 0 | yes |
| ONS | I'm The Slime | s642618 | Hand | 3 | 80 | 1352 | 0 | yes |
| ONS | I'm The Slime (alt) | s2826582 | AI | 1 | 81 | 1508 | 0 | yes |
| ONS | I'm The Slime 1 | s4663113 | AI | 1 | 81 | 1530 | 0 | yes |
| ONS | Montana (live) | s1381052 | AI | 1 | 141 | 2129 | 0 | yes |
| ONS | Montana Solo | s797870 | GP import | 1 | 9 | 0 | 0 | no |
| ROXY | Trouble Every Day (Live) | s412170 | Hand (legacy) | 1 | 92 | 852 | 9 | yes |
| ROXY | Be-Bop Tango | s5469948 | AI | 1 | 477 | 4820 | 0 | yes |
| ROXY | Cheepnis | s5469732 | AI | 1 | 200 | 2266 | 0 | yes |
| ROXY | Don't You Ever Wash That Thing? | s2829238 | AI | 1 | 165 | 2189 | 0 | yes |
| ROXY | Dummy Up | s5469676 | AI | 1 | 181 | 2169 | 0 | yes |
| ROXY | Echidna's Arf (alt) | s2825336 | AI | 1 | 135 | 1928 | 0 | yes |
| ROXY | Echidna's Arf of You | s35891 | Hand | 4 | 100 | 1671 | 0 | yes |
| ROXY | More Trouble Every Day | s187105 | AI | 1 | 239 | 109 | 0 | yes |
| ROXY | Penguin in Bondage | s5469710 | AI | 1 | 251 | 1547 | 0 | yes |
| ROXY | Pygmy Twylyte | s627774 | Hand (legacy) | 1 | 61 | 986 | 0 | yes |
| ROXY | Pygmy Twylyte (alt) | s2847936 | AI | 1 | 63 | 1093 | 0 | yes |
| ROXY | Son Of Orange County | s187084 | AI | 1 | 187 | 0 | 0 | yes |
| ROXY | Trouble Every Day (alt) | s2247271 | AI | 1 | 180 | 2672 | 0 | yes |
| ROXY | Village Of The Sun | s412175 | Hand (legacy) | 1 | 43 | 402 | 0 | yes |
