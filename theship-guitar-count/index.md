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
| 07 | MOP | 1 staff | 0.551 | TWO weak | — | **GAP: second guitar missing** |
| 08 | JGBFTL | 2 staves | 0.330 | ONE firm | 0.7% | overdub, tab is right |
| 09 | MHL | 2 staves | 0.665 | TWO firm | 18.0% | agrees |
| 10 | Trapped in Wonderland | 2 staves | 0.627 | TWO firm | 2.6% | agrees |
| 11 | Ambulance | 2 staves | 0.337 | ONE firm | **60.0%** | **DEFECT: one performance in two staves** |

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
