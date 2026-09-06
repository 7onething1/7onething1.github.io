# Watermelon In Easter Hay: the isolated-stem rerun

Queue item `q-2026-09-06-855491`. Run on MacBookPro, 2026-09-06, against the 15 isolated
stems at `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`. Jacks-iMac does
not hold those stems, so every audio number in the incoming handoff came from the full mix
after HPSS. This page is the same measurement carried out on the separated hat and snare.

## Verdict

**Repair 1 stays unauthorised.** The isolated stem was the named fix for the full-mix
landmark result and it changes nothing: full mix returned 2 of 4 at p_perm 0.202, the hat
stem returns 2 of 4 at p_perm 0.1995.

**The affine alignment fails on the stem as well.** The snare stem scores 86 of 193 at
offset 38.400 s, against 79 of 193 at offset -1.750 s on the full mix. Two fits of one
recording landing 40 seconds apart, and the 44.6% rate barely clears the 42.5% a recording
the tab never transcribes already scored.

**The open -35 ms residual is now diagnosed as a constant lead.** All four chick landmarks
sit on hat-stem onsets that arrive early, mean -49.4 ms, median -52.7 ms, spread 25.1 ms.
Leave-one-out holds 4 of 4.

## Preconditions, verified before any measurement

| Check | Result |
|---|---|
| Stems present on this Mac | 15 files, 96 MB each |
| Stem duration | 545.266667 s on every stem |
| Source FLAC duration | 545.27 s |
| Time transfer | durations agree, so audio timestamps carry across unchanged |
| Tab census reproduced here | 193 snare, 1,724 ride, 107 kick, 6 pedal hi-hat, 2,091 total |
| Weinberg reference authenticated | SHA256 `7e9288210467177f565b367a3c6a3bd36a3e7bcbb75c6eab28325a82bf30ee12`, 256,197 bytes, identical to the public article |

The `112bpm-442hz` in the folder name is detected metadata. Nothing was time-stretched.

## Detector, pre-registered parameters, no retuning

HPSS-percussive, gamma 100, M 10, refractory 0.04 s, density target 2.0 per second,
tolerance 0.05 s. Identical to `run_controls.sh`.

| Stem | Onsets | Threshold | Density | Duration |
|---|---|---|---|---|
| snare | 1,090 | 0.00370 | 1.999/s | 545.27 s |
| hat | 1,091 | 0.00085 | 2.001/s | 545.27 s |

## Gate N9 landmark test, hat stem

Landmarks 181.93, 183.03, 184.10, 185.19 s.

```
hits               2 of 4  (50%)
residuals (ms)     [-48.1, -33.5]
median |residual|  40.8 ms
FAILED landmarks   [184.1, 185.19]
nearest onset (ms) [58.6, 57.3]
pattern-rotation   p_perm = 0.1995 over 2000 rotations (mean 0.76 hits)
coverage           p_cover = 0.1951, expected false 0.78 of 4
binomial           p = 0.173  (advisory only)
VERDICT            UNDETERMINED
```

Four reasons the gate refuses it: only 4 landmarks against a minimum of 8, hit coverage 50%
against a required 75%, p_perm 0.1995 over the 0.01 bar, and no stated selection rule.

## Negative control, same landmarks against the snare stem

```
hits               1 of 4  (25%)
FAILED landmarks   [181.93, 183.03, 185.19]
nearest onset (ms) [71.3, 683.7, 150.2]
pattern-rotation   p_perm = 0.5105
VERDICT            UNDETERMINED
```

The hat stem carries more of this pattern than the snare, and it still falls short.

## Affine alignment, snare stem against the 193-event notated snare lane

| Source | Offset | Scale | Hits | Rate |
|---|---|---|---|---|
| Snare stem, this Mac | 38.400 s | 1.0100 | 86 / 193 | 44.6% |
| Full mix, Jacks-iMac | -1.750 s | 1.0140 | 79 / 193 | 40.9% |
| Full mix, wide window | 66.700 s | 1.0140 | 81 / 193 | 42.0% |
| 102 Joe's Garage, a recording the tab does not transcribe | -1.350 s | 1.2680 | 82 / 193 | 42.5% |
| Eight-control mean | | | | 26.1% |

Isolating the instrument raised the rate by 3.7 points and moved the winning offset 40
seconds. A wrong recording still scores within 2.1 points of the right one. The measure has
no discriminating power on this material, on a stem exactly as on a mix.

## The residual, diagnosed

Signed nearest-onset distance, landmark to hat stem. Negative means the onset arrives early.

| Landmark | Hat stem | Snare stem |
|---|---|---|
| 181.93 | -48.1 ms | -71.3 ms |
| 183.03 | -33.5 ms | -683.7 ms |
| 184.10 | -58.6 ms | -35.4 ms |
| 185.19 | -57.3 ms | -150.2 ms |

Hat stem: mean -49.4 ms, median -52.7 ms, sd 11.6 ms, spread 25.1 ms, all four negative.

Removing that constant bias, which is a fixed shift rather than a widened tolerance, puts
4 of 4 inside 50 ms. Leave-one-out, fitting the shift on three landmarks and testing the
fourth, also holds 4 of 4:

| Held out | Shift from the other three | Residual | Result |
|---|---|---|---|
| 181.93 | -57.3 ms | +9.2 ms | hit |
| 183.03 | -57.3 ms | +23.8 ms | hit |
| 184.10 | -48.1 ms | -10.5 ms | hit |
| 185.19 | -48.1 ms | -9.2 ms | hit |

Landmark spacing averages 1.0867 s against the GP quarter of 1.0714 s at 56 BPM, a ratio of
1.0142 that matches both alignment scales found independently.

## What this does not license

1. **Gate N9 still fails.** Four landmarks, no selection rule. A repair needs eight and a
   reproducible rule for choosing them.
2. **The shift is fitted on the same four instants it then improves.** Leave-one-out is
   reassuring across those four and it is not an out-of-window test.
3. **The bias cannot be checked against the six pedal hi-hat events already in the tab.**
   Carrying score time to audio time needs the affine map, and that map is discredited.
   Mapped through either fit, those six give residuals scattered from -242 ms to +980 ms,
   which measures the map rather than the texture.
4. **A detector never outranks a human reading.** The five Drumnet chart pages are the
   printed witness and they are still unread at high resolution.

## Correction to the shipped skill

`SKILL.md` ruling 3 states that the four chicks appear in the hat stem at 181.92, 183.00,
184.09 and 185.17 s, which reads as 4 of 4. Run through `verdict_gate.py` with the
pre-registered parameters, the hat stem gives 2 of 4, with the other two missing by 58.6 ms
and 57.3 ms. The 4 of 4 reading is recoverable only after removing the constant -52.7 ms
lead, which the ruling never mentions.

## Reproduce

```bash
D=~/.claude/skills/notation-evidence-gate
W=~/Projects/_outputs/notation-evidence-gate/watermelon-stem-rerun-2026-09-06
PY=~/.venvs/notation-gate/bin/python
S="/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz"

$PY $D/watermelon-evidence/novelty_onsets.py \
    "$S/206 Watermelon in Easter Hay-hat-E major-112bpm-442hz.wav" \
    --density 2.0 --out $W/ons_hat.txt

$PY $D/verdict_gate.py --landmarks 181.93,183.03,184.10,185.19 \
    --detected $W/ons_hat.txt --duration 545.27 --tolerance 0.05 \
    --label "4 chicks vs HAT STEM"
```

## Queue

- `q-2026-09-06-855491` closed by this page, with the answer UNDETERMINED on better data.
- `q-2026-09-06-57b3e8` onset-based DP alignment, IRMM 5.3, still open and now the priority,
  since the affine map is the binding constraint on every downstream test.
- `q-2026-09-06-083302` log-compressed novelty against the snare stem, partly served here.
- `q-2026-09-06-bcf816` score-informed NMF for per-note ride dynamics, open.

Working files: `~/Projects/_outputs/notation-evidence-gate/watermelon-stem-rerun-2026-09-06/`
