# Does re-deriving from the stem work?

Three Appleseed Cast songs re-transcribed from their own guitar stems with basic_pitch on the ONNX
model, nothing carried over but the container. Scored on the meter clock against a cut validated
leave-one-song-out (separation >= 7.7 with z >= 5.0).

## Answer: 1 of 3 on audio, 3 of 3 on playability

| song | build | attacks | own | chance | gain | z | separation | at cut 7.7 |
|---|---|---|---|---|---|---|---|---|
| Confession | inherited tab | 2702 | 13.1% | 13.6 | -0.4 | -1.5 | **+0.5** | under |
| Confession | re-derived, 16th | 2705 | 15.4% | 13.6 | +1.9 | +6.8 | **+2.7** | under |
| Confession | re-derived, 32nd | 3059 | 18.0% | 13.5 | +4.5 | +15.3 | **+5.2** | under |
| Adriatic to Black Sea | inherited tab | 1764 | 21.3% | 17.1 | +4.2 | +17.7 | **+4.4** | under |
| Adriatic to Black Sea | re-derived, 16th | 1765 | 25.4% | 17.1 | +8.3 | +35.7 | **+8.6** | clears |
| Adriatic to Black Sea | re-derived, 32nd | 1945 | 30.3% | 17.0 | +13.3 | +45.4 | **+12.9** | clears |
| Adriatic to Black Sea | re-derived, 32nd + 2 staves | 1945 | 30.3% | 17.0 | +13.3 | +45.4 | **+12.9** | clears |
| Blind Man's Arrow | inherited tab | 972 | 24.7% | 17.2 | +7.5 | +14.4 | **+6.4** | under |
| Blind Man's Arrow | human Songsterr tab | 581 | 41.0% | 18.2 | +22.7 | +32.8 | **+20.9** | clears |
| Blind Man's Arrow | re-derived, 32nd | 1229 | 23.1% | 16.5 | +6.6 | +16.9 | **+5.0** | under |
| Blind Man's Arrow | re-derived, 32nd + 2 staves | 1229 | 23.1% | 16.5 | +6.6 | +16.9 | **+5.0** | under |

## Where the ceiling is

Blind Man's Arrow is the one song with a human Songsterr tab on disk. A person reaches **41.0%** own
alignment on that recording; our best re-derivation reaches **23.1%**. Same tool, same stem, same
clock, a gap of **17.9 points**. That gap comes from what basic_pitch detects, rather than from the
measure or the grid. Adriatic reaches 30.3% and clears; Confession reaches 18.0% and does not. The
songs that clear are the songs the detector happens to hear well.

## Playability, uniform

| song | hard failures before | after | split | round trip |
|---|---|---|---|---|
| Confession | 16 | **0** | 16 notes to a second staff | 3922 of 3922, 0 pitches changed |
| Adriatic to Black Sea | 9 at 16th | **0** | 13 beats dealt into two parts | 2641 of 2641, 0 pitches changed |
| Blind Man's Arrow | 1 | **0** | 11 beats, 23 notes moved | 1978 written, gate REVIEW both staves |

The finer grid helps playability on every song tested, and the two-staff split resolves the remaining
unplayable beats without moving a pitch. That part is working and is independent of the audio question.

## What this does not say

The audio number measures detector agreement rather than pitch accuracy, since basic_pitch produced
these notes from these same recordings. Nothing is promoted into `09_MATCHED_38`.

Records in `~/Projects/_outputs/appleseed-regen-2026-08-28/` under `confession_rederive/`,
`adriatic_rederive/` and `blindmans_rederive/`.
