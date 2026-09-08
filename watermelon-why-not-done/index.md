# Why the Watermelon GP is not done and not perfect

Measured 2026-09-08 on MacBookPro. Subject: Songsterr s6857183 r8970744, Watermelon In Easter Hay, Vinnie Colaiuta drum staff.

## What it cost

Nine days, 56 sessions, 26,293 assistant turns, 9.57 billion tokens on one drum tab. That is 78 percent of the whole project's transcript volume. Output was 31.3M tokens against 9.39B cache reads, a ratio of 300 to 1, so the budget went to re-reading context rather than producing work. One session ran 3,521 turns across five days without a clear. The folder holds 103 analysis scripts, 13 of them named build_gp and 14 named verify_gp, plus 48 published pages and 3.8 GB of spectrogram cache.

## The root cause

The tab is written at a flat 56.000 bpm for a live take that averages about 55.3. One tempo automation covers all 105 bars. The written grid runs ahead of the recording by as much as 4.26 seconds at bar 65, close to four beats. The divergence is a curve rather than a line: it grows to bar 65, then partly recovers as the performance pushes past 56. Every stem-versus-tab comparison across nine days asked whether a hit landed where the drummer had already left.

Proof, same tab and same detector, only the clock changing:

| clock | kick + snare match | vs flat | guitar control | discrimination | coverage |
|---|---|---|---|---|---|
| flat 56.000 bpm, best single offset | 0.274 | baseline | 0.207 | 0.68x globally | all 105 bars, all wrong |
| onset-derived per-bar map | 0.521 | 1.90x | 0.158 | 3.30x | frozen on 50 of 105 bars |
| **metronome-anchored map** | **0.684** | **2.50x** | 0.196 | **3.49x** | all 105 bars |

This retro-explains all four blocked verdicts. Alignment UNUSABLE at 0.336, coda discrimination 1.15x, ride per-event 1.46x, tom pan best pair 0.73x. Each was recorded as a fact about the music. Each was a fact about the grid.

## Do we need metronome tracks? No, one already wins

Moises exported a metronome stem with the drums. It holds 997 clicks from 0.750 s to 544.070 s, median interval 0.540 s, giving 111.11 bpm or 55.56 in half time, which corroborates the 55.3 from the drum onsets by a separate route.

My first reading called it a poor ruler because its intervals are quantized to 20 ms steps. Brandon pushed back mid-session: the metronome wins on exactly the song where the onset clock was weakest. He was right. Absolute click positions track the take even when the intervals are rounded. The onset map aligns using notes already in the tab, and bars 101 to 105 hold two kick or snare events between them, so it froze there. The coda was invisible to the instrument built to inspect the coda.

Region by region the metronome wins everywhere, with its largest margin at bars 95 to 105, which is the coda: 0.514 against 0.351.

## What is still wrong in the shipped file

1. **Coda kick hole, bars 98 to 104**, recording 8:25 to 8:58. The tab writes **5 kick notes**. The recording carries **35**, per bar [7,4,5,3,5,6,5]. Magnitude 7.0x. Density 5.0 kicks per bar against the author's own median of 5.0 and p90 of 7 in bars 1 to 97. Reference-class verdict **PASS on all six checks**. Nulls: the identical 19% rule returns 10 on the lead guitar stem and 0 in the silent tail at 540.5-545.2 s.

   **The toms are withdrawn entirely: 0 survive.** The coda tom stem peaks at 20.5% of its bars 1-97 peak while the author-calibrated threshold sits at 33%, so the coda holds tom resonance and bleed rather than struck toms. The kick peaks at 91.4% of its own reference level.

   Three figures retired on the way here. **81** came from an unrendered spectral-flux detector. **86** replaced it and was also wrong, since its 10% threshold was cut from the coda window itself, the same mechanism that put 599 toms into a Zappa ballad on 2026-09-07. **39** became **35** once the 100 ms refractory stopped resetting at each bar line. Pictures: `coda-author-calibrated.png`, `coda-flux-pass.png`, `coda-eye-gated.png`. Figures: `final_coda.json`, `refclass.json`. Script: `final_kick.py`.

2. **Sixteen three-hand instants** across bars 29, 41, 45, 49, 52, 53, 54, 55, 56, 57, 85 and 89. Fifteen of the sixteen ask for a snare or tom, a hi-mid tom and the ride on one instant. Inherited from r8968524.
3. **The tempo map itself**, one automation at 56.000 bpm. It concealed and confused the other two defects rather than producing them: the sixteen collisions were written into r8968524, and the missing coda notation is absent from the GP on its own terms.

## The fix

`metromap.json` anchors tab bar 1 to click index 51 at t = 36.87 s and interpolates every bar boundary through the click grid, reaching bar 105 at 538.23 s. `tempomap.json` is the onset-derived map, kept as an independent second witness.

## Step one is done: the map is in the file

Written 2026-09-08 into a copy, never the original. `TEMPOMAP-s6857183-Brandon-edit.gp`, sha256 `099a59c4f2ef7ad26ca41540b46673e01127a1440ab573eccb57f95986238045`, built from RECONCILED whose sha256 `bc5ce3de...8548f` is unchanged on disk. The file held **one** tempo automation at 56.000 and now holds **105**, spanning 53.57 to 58.37 bpm.

Acceptance test from `q-2026-09-08-cddb5a`, each file driving alignment from its own tempo map plus one global sync offset:

| file | sync offset | kick + snare match | guitar control | discrimination | gate |
|---|---|---|---|---|---|
| RECONCILED, one flat 56.000 | 39.79 s | 0.276 | 0.177 | 1.56x | fails both |
| **TEMPOMAP, 105 automations** | 36.89 s | **0.685** | 0.189 | **3.64x** | **PASS on both** |

Content integrity: 2,770 notes on both sides, set difference 0 added and 0 removed, 105 masterbars. Worst bar-start error against the metronome grid is **6.4 ms**, where the old file peaked at **4.26 s**. The best sync offset of 36.89 s lands within 20 ms of the 36.87 s bar-one anchor, an independent confirmation.

Curve rendered and read (`tempo-curve.png`). The broad shape is musical: opens near 54, holds 55 to 56 through bar 60, pushes to 57 and 58.4 across bars 65 to 100 where the guitar climax sits, relaxes to 55 and 56 at bars 101 to 105. The bar-to-bar wobble of about one bpm is the metronome's 20 ms interval quantization rather than rubato. Two decimals were kept: integer rounding costs 723 ms of worst-case bar-start error against 6.4 ms. Figures in `tempo_map.json`.

The earlier "6.29 s of drift" figure is corrected. It came from forcing a straight line onto a curve, using the weaker onset-derived map.

## The finite work that remains

Scope set by Brandon 2026-09-08, a closed list. 1) **DONE 2026-09-08.** Metronome map written into TEMPOMAP-s6857183-Brandon-edit.gp, acceptance test PASS at 0.685 and 0.189 (`q-2026-09-08-cddb5a`). 2) Transcribe bars 98 to 104 against the 35 author-calibrated kick attacks (`577c81`). 3) Resolve the sixteen three-surface collisions (`baae9d`). 4) Recheck the 202 disputed ride notes (`c9d5f7`). 5) One final stem-matched playability audit (`85d746`). No further detector unless one of these five produces contradictory evidence.

## Corrections applied 2026-09-08

Brandon caught two errors in the first publication of this page. The coda tab count read seven and the data holds eight, corrected above. The coda stem count went 81, then 86, then 39, and settles at 35 kick with 0 toms after a reference-class pass. The tempo map was described as producing the other two defects, and it concealed them, corrected above. A third correction came from a stop gate demanding the eye outrank the detector, which withdrew the 81-attack figure, the snare and cymbal coda content, and the zero-guitar control.

## The process lesson

When an alignment gate fails, repair the clock first, then write detectors. Render every detector count and read it with your own eyes first, then publish it: the flux pass put twelve snare marks on a flat trace and would have shipped as fact. A detector cannot out-measure a broken time base, and 103 of them could not. The winning clock had been sitting in the stem folder for two days. Inventory what the separation already handed you, then build only what is missing.
