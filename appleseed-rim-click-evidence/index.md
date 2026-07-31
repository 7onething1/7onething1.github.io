# Rim clicks across 20 Appleseed Cast songs: what the detector actually measured

31 July 2026. Every one of the 20 drum tabs came back with **zero rim clicks**. Rather
than leave that as a bare refusal, this is the measurement behind it, per song, with
1-based bar numbers so any disagreement lands on a specific bar.

## The discriminator

A side stick and a quiet snare share a signature: little shell body in 150-450 Hz. The
thing that separates them is whether thin body travels with *quietness*. If body energy
correlates with loudness, the thin hits are simply the soft ones, which makes them ghost
notes. If the two decouple, thin-bodied hits are landing at normal volume, and that is
what a side-stick part looks like.

So the number that matters per song is **corr(body, loudness)**. Low means rim-like.

## Three songs are candidates. Seventeen are not.

| corr | Song | Album | Reading |
|---|---|---|---|
| **+0.167** | 02 Great Lake Derelict | Illumination Ritual | **candidate** |
| **+0.180** | 08 Poseidon | Mare Vitalis | **candidate** |
| **+0.248** | 07 Barrier Islands (Do We Remain) | Illumination Ritual | **candidate** |
| +0.371 | 06 Secret | Mare Vitalis | ghosts |
| +0.459 | 01 Adriatic to Black Sea | Illumination Ritual | ghosts |
| +0.476 | 03 Simple Forms | Illumination Ritual | ghosts |
| +0.527 | 05 30 Degrees 3 Am | Illumination Ritual | ghosts |
| +0.624 | 04 Mare Mortis | Mare Vitalis | ghosts |
| +0.673 | 03 Forever Longing the Golden Sunsets | Mare Vitalis | ghosts |
| +0.679 | 10 Illumination Ritual | Illumination Ritual | ghosts |
| +0.685 | 07 ...And Nothing Less | Mare Vitalis | ghosts |
| +0.688 | 09 Clearing Life | Illumination Ritual | ghosts |
| +0.728 | 06 Branches on the Arrow Peak Revelation | Illumination Ritual | ghosts |
| +0.736 | 08 North Star Ordination | Illumination Ritual | ghosts |
| +0.774 | 10 Storms | Mare Vitalis | ghosts |
| +0.784 | 01 The Immortal Soul of Mundo Cani | Mare Vitalis | ghosts |
| +0.804 | 09 Kilgore Trout | Mare Vitalis | ghosts |
| +0.811 | 05 Santa Maria | Mare Vitalis | ghosts |
| +0.848 | 02 Fishing the Sky | Mare Vitalis | ghosts |

The gap between 0.248 and 0.371 is the cleanest break in the list, and the three below it
sit far from the rest of the distribution.

**None of the three was refused for the ghost reason.** Great Lake Derelict and Barrier
Islands were refused by the ornament size ceiling; Poseidon by constraint saturation. So
on those three the ghost confound was never the objection, which is exactly why they are
worth an ear.

## 02 Great Lake Derelict, 137 BPM, corr +0.167

Refused because the low-body class covered 95% of the snare lane. Median body 0.292.

| Bar | Time | Body | Level | Centroid | Sustain |
|---|---|---|---|---|---|
| 30 | 61.59s | 0.080 | -35.7 dB | 4930 Hz | 0.03 |
| 33 | 66.01s | 0.110 | **-18.4 dB** | 4884 Hz | 0.39 |
| 32 | 64.69s | 0.102 | **-18.8 dB** | 4545 Hz | 0.40 |
| 67 | 126.34s | 0.140 | -21.9 dB | 4606 Hz | 0.41 |
| 18 | 40.47s | 0.113 | -21.4 dB | 4192 Hz | 0.35 |
| 37 | 73.03s | 0.145 | -23.0 dB | 4373 Hz | 0.42 |
| 9 | 24.30s | 0.152 | -21.1 dB | 4230 Hz | 0.39 |
| 50 | 96.11s | 0.157 | -26.4 dB | 4179 Hz | 0.35 |

Bars 32 and 33 are the strongest case on the whole record: body at roughly a third of the
song's median, at a level within 1 dB of an ordinary hit.

## 08 Poseidon, 137.25 BPM, corr +0.180

Refused because the split saturated the size cap. Median body 0.383.

| Bar | Time | Body | Level | Centroid | Sustain |
|---|---|---|---|---|---|
| 79 | 169.51s | 0.062 | -37.6 dB | 4288 Hz | 0.15 |
| 47 | 113.64s | 0.238 | **-19.7 dB** | 4618 Hz | 0.16 |
| 49 | 117.79s | 0.265 | **-17.9 dB** | 4588 Hz | 0.21 |
| 79 | 170.26s | 0.260 | **-17.5 dB** | 4518 Hz | 0.20 |
| 44 | 109.02s | 0.250 | -18.3 dB | 4551 Hz | 0.25 |
| 46 | 112.56s | 0.228 | -19.5 dB | 4277 Hz | 0.21 |
| 63 | 142.28s | 0.270 | -18.4 dB | 4354 Hz | 0.17 |
| 48 | 116.04s | 0.281 | -19.4 dB | 4445 Hz | 0.18 |

Bars 44 through 49 form a contiguous run at full level with short sustain, which is the
shape of a section played on the stick rather than scattered soft hits.

## 07 Barrier Islands (Do We Remain), 148 BPM, corr +0.248

Refused because the low-body class covered 95% of the snare lane. Median body 0.237.

| Bar | Time | Body | Level | Centroid | Sustain |
|---|---|---|---|---|---|
| 96 | 155.42s | 0.096 | -23.5 dB | 5364 Hz | 0.24 |
| 149 | 241.36s | 0.124 | -28.7 dB | 5778 Hz | 0.29 |
| 145 | 234.92s | 0.139 | -29.7 dB | 5654 Hz | 0.24 |
| 152 | 246.25s | 0.127 | -28.9 dB | 5662 Hz | 0.29 |
| 142 | 230.56s | 0.138 | -28.9 dB | 5407 Hz | 0.29 |
| 56 | 90.69s | 0.103 | -24.2 dB | 4995 Hz | 0.32 |
| 148 | 239.30s | 0.170 | -25.9 dB | 5224 Hz | 0.22 |
| 11 | 17.98s | 0.124 | -25.4 dB | 4941 Hz | 0.32 |

Bars 142 to 152 cluster in the outro, which is where a drummer most often drops to the
rim. Levels here are lower than the other two candidates, so this is the weakest of the
three.

## What this changes

The blanket claim was "zero rim clicks on all 20, and that is a measurement". The
measurement is better read as two groups. Seventeen songs show thin body travelling with
quietness, so those hits are ghost notes and the tabs are right to mark them that way.
Three songs show the decoupling a real side-stick part produces, and were refused by size
rules rather than by the ghost test.

Converting any of them stays gated on hearing it, since a detector that fires on its own
negative control has said nothing. The bars above are where to listen: **Great Lake
Derelict 32-33**, **Poseidon 44-49**, **Barrier Islands 142-152**.

Source data: `rim_evidence.json`, generated from the same DrumSep snare lanes the tabs
were built from. Method and refusal rules in
`~/.claude/skills/stems-to-guitar-pro-drums/sd_lanes.py`.
