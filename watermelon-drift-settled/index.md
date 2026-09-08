# Watermelon In Easter Hay: the drift, settled

Songsterr `s6857183`, Vinnie Colaiuta drum staff. Measured 2026-09-08 on MacBookPro against the Moises stem set and a fresh YouTube pull.

Brandon heard the tab pull away from the audio as the song went on and suspected the YouTube was a different version. The recording is the same performance. The drift was the tab's own tempo map, and a second defect inside Songsterr's storage swallowed the first attempt at fixing it.

## 1. The YouTube is the same performance

Onset envelopes from the YouTube pull were cross-correlated against the Moises source mix in seventeen twenty-second probes across the song. Sixteen lock onto one offset.

| File | Duration | Reads as | Release |
|---|---|---|---|
| Moises source mix | 545.27 s | 9:05 | Joe's Garage, with the Central Scrutinizer intro |
| YouTube pull | 522.44 s | 8:42 | Plays the Music of Frank Zappa, intro snipped |

Offset **-23.34 s**, standard deviation **3.9 ms** over a 450-second span. A speed difference of one part in ten thousand would show as 45 ms of walk. Nothing walks. Nine days of stem work was measured against the 9:05 master while the tab syncs to the 8:42 edit, and because the audio is identical that evidence stands.

## 2. The drift was the tempo map

The tab carried one tempo automation at 56.000 bpm across all 105 bars. Scoring the tab's own kick and snare against the isolated stems, with the lead guitar stem as control:

| Grid | Kick + snare | Guitar control | Discrimination |
|---|---|---|---|
| Flat 56.000, the old tab | 0.445 | 0.283 | 1.57x |
| r8973389 as served | 0.492 | 0.285 | 1.73x |
| **r8973454, live now** | **0.776** | 0.317 | **2.45x** |
| Two-decimal ideal | 0.782 | 0.317 | 2.47x |

Peak-to-peak barline error went from **4.25 s** to **0.090 s**. The old error is a curve, ahead early and 1.65 s behind by bar 65, so no single sync offset removes it.

## 3. Songsterr floors the tempo

`r8973389` wrote 53.57 to 58.37 bpm with two decimals. The published data reads integers, matching `floor()` on **105 of 105** bars and `round()` on **46**. Flooring makes every bar slow in one direction, added 4.6 s of cumulative lag, and held the match at 0.492.

The fix uses integers chosen by error diffusion: each bar's integer lands the next barline closest to the fitted metronome time, and the residual carries forward. Worst barline error **0.049 s**, against **4.57 s** for per-bar rounding.

## 4. What shipped

Two revisions, the second correcting the first. Neither moved a note.

| Check | Result |
|---|---|
| Drum staff instances | 2,834 before and after, lane for lane identical |
| All nine parts | 1061/55/334/64/360/459/324/108/2834, byte-identical |
| Track names | 9 of 9 kept, 137 CDATA wrappers preserved |
| Bars and meters | 105 bars, 53 in 4/4 and 52 in 5/4 |
| Preflight gate | PASS exit 0 on both uploads |
| Published data | 105 automations read back from CloudFront, 0 mismatches |

## 5. Crash cymbals: measured and refused

The tab writes 51 crashes, one per phrase start from bar 4 to 96. A detector calibrated on those found 132 more candidates. The same detector fires **82** times on the lead guitar stem, which holds no cymbals, so the ratio over control is **1.61x**. The separation leaks guitar into the cymbal stem. Nothing was added. Recall on the 51 written crashes was 42 of 51, so the existing crash notation is supported. Queued as `q-2026-09-08-f370c3`.

## 6. One drift source remains, outside the file

| Video | Feature | Sync points | Shape error |
|---|---|---|---|
| XACocSRTFJY | primary | 105 | 0.94 s |
| Fn9ZuGquwpQ, H9dE-EcH58A, _3cu8sDa90Y | alternative | 106 | 0.80 s |
| The other eight | alternative, backing, solo | 106 | 12.97 s |

105 measures need 106 boundaries. The primary has 105, so the last barline has no end anchor. Songsterr holds this in its sync data rather than in the file, so no upload reaches it. Queued as `q-2026-09-08-3a0c92`. The eight far-off videos are different audio, including an 8-bit cover, so their numbers are correct for what they are.

## 7. Reinstated with evidence

An earlier session recorded a 23.3 second duration gap, explained it with an invented lead-in, and withdrew the explanation. The gap is now measured at 23.34 s with a 3.9 ms standard deviation, and the Central Scrutinizer intro is named by Brandon's sources as its content.

Source files: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/TEMPOFIX-on-r8972739-Brandon-edit.gp` and `TEMPOFIX-INT-on-r8973389-Brandon-edit.gp`.
