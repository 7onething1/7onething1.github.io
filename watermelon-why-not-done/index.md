# Why the Watermelon GP is not done and not perfect

Measured 2026-09-08 on MacBookPro. Subject: Songsterr s6857183 r8970744, Watermelon In Easter Hay, Vinnie Colaiuta drum staff.

## What it cost

Nine days, 56 sessions, 26,293 assistant turns, 9.57 billion tokens on one drum tab. That is 78 percent of the whole project's transcript volume. Output was 31.3M tokens against 9.39B cache reads, a ratio of 300 to 1, so the budget went to re-reading context rather than producing work. One session ran 3,521 turns across five days without a clear. The folder holds 103 analysis scripts, 13 of them named build_gp and 14 named verify_gp, plus 48 published pages and 3.8 GB of spectrogram cache.

## The root cause

The tab is written at a flat 56.000 bpm for a live take that averages about 55.3. One tempo automation covers all 105 bars. By the final bar the written grid sits 6.29 seconds ahead of the recording, close to six beats. Every stem-versus-tab comparison across nine days asked whether a hit landed where the drummer had already left.

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

1. **Coda hole, bars 98 to 104**, recording 8:25 to 8:58. The tab writes 8 attacks (three in bar 98, two in 99, one each in 100, 101 and 103, none in 102 or 104). Eye-gated stem reading, after rendering the waveforms and reading them: kick [6,7,4,6,6,5,5] = 39, toms [11,5,4,6,6,7,8] = 47, so **86 eye-confirmed kick and tom attacks**. Bars 101 to 103 carry 36 of them with the guitar at zero, which makes that stretch bleed-proof. Only bar 105 belongs empty.

   Three withdrawals, forced by looking. The earlier figure of **81 stem attacks is withdrawn**: it came from a spectral-flux detector at the 95th percentile and bundled 12 snare marks fired on a flat trace plus cymbal marks on a decaying wash. The claim that **guitar control is zero in six of the seven bars is withdrawn**: the guitar plays in bars 98, 99, 100 and 104. **Snare and cymbal content in the coda is withdrawn entirely.** Pictures: `coda-flux-pass.png` and `coda-eye-gated.png`. Figures: `eye_gated.json`.

2. **Sixteen three-hand instants** across bars 29, 41, 45, 49, 52, 53, 54, 55, 56, 57, 85 and 89. Fifteen of the sixteen ask for a snare or tom, a hi-mid tom and the ride on one instant. Inherited from r8968524.
3. **The tempo map itself**, one automation at 56.000 bpm. It concealed and confused the other two defects rather than producing them: the sixteen collisions were written into r8968524, and the missing coda notation is absent from the GP on its own terms.

## The fix

`metromap.json` anchors tab bar 1 to click index 51 at t = 36.87 s and interpolates every bar boundary through the click grid, reaching bar 105 at 538.23 s. `tempomap.json` is the onset-derived map, kept as an independent second witness.

## The finite work that remains

Scope set by Brandon 2026-09-08, a closed list. 1) Write the metronome map into the working GP (`q-2026-09-08-cddb5a`). 2) Transcribe bars 98 to 104 against that clock (`577c81`). 3) Resolve the sixteen three-surface collisions (`baae9d`). 4) Recheck the 202 disputed ride notes (`c9d5f7`). 5) One final stem-matched playability audit (`85d746`). No further detector unless one of these five produces contradictory evidence.

## Corrections applied 2026-09-08

Brandon caught two errors in the first publication of this page. The coda tab count read seven and the data holds eight, corrected above. The tempo map was described as producing the other two defects, and it concealed them, corrected above. A third correction came from a stop gate demanding the eye outrank the detector, which withdrew the 81-attack figure, the snare and cymbal coda content, and the zero-guitar control.

## The process lesson

When an alignment gate fails, repair the clock first, then write detectors. Render every detector count and read it with your own eyes first, then publish it: the flux pass put twelve snare marks on a flat trace and would have shipped as fact. A detector cannot out-measure a broken time base, and 103 of them could not. The winning clock had been sitting in the stem folder for two days. Inventory what the separation already handed you, then build only what is missing.
