# The Ship — how many guitarists?

Live: https://7onething1.github.io/theship-guitar-count/

Guitar transcription audit of The Ship, 2026-08-13. Ten songs. The count of
guitarists is settled from the recording BEFORE any fingering work, because a
refret pass run on mis-owned notes produces a playable-looking tab of a
performance nobody gave.

## Result

All ten tabs pass `impossible_gate.py`. Three of them describe a band that does
not match the recording.

| # | song | tab says | BC | audio | staff dup | joint call |
|---|---|---|---|---|---|---|
| 01 | Seedy Shade | 1 staff | 0.507 | inconclusive | — | consistent, low risk |
| 02 | Flake of the Year | 2 staves | 0.586 | TWO weak | 21.3% | agrees |
| 03 | Gene | 2 staves | 0.624 | TWO firm | 43.9% | agrees, depan check advised |
| 04 | Six Feet Under | 2 staves | 0.553 | TWO weak | 39.4% | agrees |
| 05 | Sleep Vs Death | 2 staves | 0.447 | inconclusive | 0.0% | independent staves, low risk |
| 07 | MOP | 1 staff | 0.551 | TWO weak | — | unresolved: per-note test failed its control |
| 08 | JGBFTL | 2 staves | 0.330 | ONE firm | 0.7% | overdub, tab is right |
| 09 | MHL | 2 staves | 0.665 | TWO firm | 18.0% | agrees |
| 10 | Trapped in Wonderland | 2 staves | 0.627 | TWO firm | 2.6% | agrees |
| 11 | Ambulance | 2 staves | 0.337 | ONE firm | **60.0%** | **REPAIRED**: 665 duplicate attacks removed, Lead hand-skip 20% -> 0% |

Track 06 is absent from the whole tree: no stems, no tab.

## Method

Per-attack stereo position on the untouched `-guitar.mp3` stem, scored by
bimodality coefficient. The `-guitar_lead` / `-guitar_rhythm` stems were NOT
used: they came from a score-informed splitter handed the existing
transcription, so they return two stems whenever the score has two staves.

Limit, stated: this counts pan positions, not people. One guitarist overdubbing
to the same position reads as ONE. That is what resolves 08 JGBFTL.

## Metrics that failed their own controls

| synthetic case | truth | L/R corr | side energy | onset indep | BC |
|---|---|---|---|---|---|
| two guitars ±40% | TWO | 0.880 | −9.78 dB | 18.9% | 0.794 |
| two guitars ±15% | TWO | **0.985** | **−18.56 dB** | **6.5%** | 0.794 |
| one guitar, mono panned | ONE | 1.000 | −16.01 dB | 0.1% | 0.260 |
| one guitar, Haas + reverb | ONE | **0.049** | **−0.43 dB** | 8.8% | 0.265 |
| one guitar, ping-pong delay | ONE | 0.363 | −3.22 dB | **59.1%** | 0.390 |

Correlation, side energy and onset independence measure mix width, not player
count. Discarded as evidence. An earlier two-means split statistic was discarded
too: the known one-source bass stem scored 2.31, higher than every guitar.

## Reproduce

```
python3 ~/Projects/_outputs/theship-tabs/guitar_count.py
python3 ~/Projects/_outputs/theship-tabs/guitar_count_control.py
python3 ~/Projects/_outputs/theship-tabs/cross_staff_dup.py
python3 ~/.claude/skills/impossible-guitar-parts/impossible_gate.py <file>.gp
```

Tabs graded: `~/Projects/_outputs/theship-tabs/_AUDITION_2026-08-07/`, the set
matching the 2026-08-07 Songsterr live backup.

## Next

1. 11 Ambulance — per-note depan, then restaff as a whole-part operation.
2. 07 MOP — recover the second guitar before further fingering work.
3. 05 Sleep Vs Death — lowest priority.
4. Track 06 — locate or confirm it does not exist.

## Update, same day: repair and alignment

**11 Ambulance repaired.** 665 duplicated Lead attacks removed, each one a pitch
already struck on Rhythm at the same onset, so no pitch left the music. Tier 1
PASS (25->25 pitches, none gone, none invented), Tier 1b POSITION PASS (0 notes
moved), gate PASS. Lead hand-skip 20% -> 0%. 221 beats cloned before editing to
avoid the shared-definition broadcast edit.
Artifact: `_depan_2026-08-13/11-ambulance-DEPAN.gp`.
Receipt run_id 903ace3cae476d29, promotion REFUSED because the ledger has no
licence for a depan's intended instance-count reduction.

**Staff pan separation**, each written note measured against the stereo stem:

| song | staff sep | reading |
|---|---|---|
| 03 Gene | 0.316 | staves at -0.307 and +0.029, genuinely two positions |
| 05 Sleep | 0.188 | |
| 04 Six Feet | 0.125 | |
| 09 MHL | 0.052 | |
| 10 Trapped | 0.032 | |
| 11 Ambulance | **0.009** | staves at -0.166 and -0.158, on top of each other |

**Alignment.** 11 Ambulance's tempo was never wrong: offset +4.200s, scale
1.0000, librosa 156.6 vs written 156.0. Three tabs do not match their
recordings: 05 Sleep written 110 bpm plays at 101 (8.8% error), 08 JGBFTL not
aligned (z=3.3), 02 Flake not aligned (z=1.3) with a CORRECT tempo, so its
rhythm is wrong rather than its clock.

**A fourth metric was refuted.** Per-staff bimodality, meant to reveal a second
guitarist merged into one staff, scored 0.59 and 0.64 on 03 Gene's two staves,
each certainly a single player. That is why 07 MOP is unresolved rather than
confirmed.

**Track 06 does not exist**: the project's own song list skips 05 to 07.

## Correction, same day: a model bug invented two defects

My aligner read ONE tempo per song, from the first Tempo automation. Four Ship
songs carry tempo maps, and 05 Sleep Vs Death goes 110 bpm -> 90 at bar 35, a 22%
change a constant-tempo model cannot express.

RETRACTED: "05 Sleep tempo error 8.8%" and then "3.0%". Both were compromise fits.
RETRACTED: "02 Flake does not align".

With the full tempo map both align cleanly at their written tempos. 05 Sleep's
alignment control went from 2.38x to 24.25x, the strongest in the album.

Corrected staff pan separation (each written note measured against the stereo stem):

| song | staff sep |
|---|---|
| 02 Flake | **0.765** (staves hard left -0.61 and centre +0.04) |
| 03 Gene | 0.328 |
| 05 Sleep | 0.154 |
| 04 Six Feet | 0.145 |
| 10 Trapped | 0.067 |
| 09 MHL | 0.053 |
| 11 Ambulance | **0.009** (staves -0.166 and -0.158, 85x below Flake) |

Nine of ten songs align with correct tempos. **08 JGBFTL is the one genuinely
mis-timed tab**: single tempo 88 bpm written, best fit implies ~120, librosa says
103.4, and z = +4.0 against its own shuffled rhythm. It needs re-transcription
from Songsterr.
