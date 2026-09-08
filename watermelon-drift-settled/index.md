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


### The 4.25 s headline, re-read by eye

The worst flat-grid error also sits at bar 1, and two bar-1 claims on this page were withdrawn, so this one was checked the same way.

**Bar 1 is not detached here.** Across bars 1 to 15 the flat error reads 2.60, 2.51, 2.31, 2.15, 2.01, monotonic with no step, and the whole curve is a smooth S through zero near bar 33 to its low at bar 65.

| Population | Worst error | Peak-to-peak | RMS |
|---|---|---|---|
| flat 56.000, all 105 bars | 2.60 s at bar 1 | 4.25 s | 1.16 s |
| flat 56.000, bar 1 dropped | 2.51 s at bar 2 | 4.16 s | 1.14 s |
| **live r8973454, all bars** | **0.05 s at bar 56** | **0.09 s** | **0.03 s** |

Dropping bar 1 moves peak-to-peak by 0.09 s. **The headline stands unchanged.** The same bar was genuinely detached in the sync-point measurement and is ordinary here, so an eye check belongs to each claim rather than being inherited.

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

## 5. Crash cymbals: two detectors, both refused

The tab writes 51 crashes, one per phrase start from bar 4 to 96. Two detectors were built and **rendered and read**, and the render settled both.

**The written crashes are real.** A crash should out-peak an ordinary ride stroke. The 51 written crash positions against the 1,501 non-coincident ride strokes:

| Feature | Crash median | Ride median | Ratio | AUC | p |
|---|---|---|---|---|---|
| Peak 3-10 kHz energy | 0.3614 | 0.0908 | **3.98x** | **0.894** | 5.2e-22 |
| Decay ratio 60-450 ms | 0.786 | 0.645 | 1.22x | 0.606 | 0.005 |

AUC 0.894 means a random written crash beats a random ride stroke 89 times in 100. An earlier version of this page rested this on "42 of 51 detected"; the render showed that detector firing on every ride stroke, so a hit proved only that a cymbal was struck. **That claim is withdrawn** and replaced by the table above.

**Adding crashes fails on both detectors:**

| Detector | New candidates | Null on lead guitar | Ratio | Verdict |
|---|---|---|---|---|
| Flux plus decay | 132 | 82 | 1.61x | fails the null |
| Peak energy, author floor | 310 | 89 | 3.48x | passes the null, fails on density |

310 additions is **2.95 crashes per bar**, six times the author's 0.49, for nine minutes. No drummer plays that. The floor sits at 1.73x the ride median, so about a tenth of the 1,501 ride strokes clear it alone.

**Nothing was added.** Queued as `q-2026-09-08-f370c3`. It could not be done now because both available features stop short: decay separates at AUC 0.606, and peak energy confirms known crashes while returning an impossible density. Unblocking needs a lane outside this stem set, meaning `other_kit`, an inter-channel pan test, or a cleaner separation, held to 2.5x over a guitar control *and* a density inside the author's own range.

## 6. The video sync points, and a defect claim I withdrew

**Withdrawn: "bar 1 is 0.818 s early".** I measured it two ways and both said 0.81 s. A stop gate demanded an outlier in a width check be re-read by eye first. Rendering the 8:42 master killed the claim: **neither candidate lands on a musical event.**

| Landmark in the 8:42 master | Time |
|---|---|
| First 5% crossing, 180-1200 Hz | 0.511 s |
| First 5% crossing, 3-10 kHz | 4.493 s |
| **First 5% crossing, 40-160 Hz, band entry** | **17.845 s** |
| Video's bar-1 sync point | 12.710 s |
| Extrapolated bar 1 | 13.528 s |

The tab's bar 1 sits in a sparse solo-guitar passage and the band enters about five bars later. My "two independent confirmations" both rested on the same 36.870 s metromap anchor, so they were one measurement stated twice.

The anchor itself does check out independently: the first drum onset in the 9:05 stems is 41.204 s, mapping to 17.862 s in the 8:42 timeline against 17.845 s read off this master, **agreeing to 17 ms**.

**What survives.** My first residuals were also inflated by anchoring at `point[0]`, which is the one bar that disagrees.

| Primary video XACocSRTFJY | Anchored at point[0] | Body-anchored |
|---|---|---|
| Worst absolute error | 0.94 s | 0.81 s, at bar 1 |
| RMS | 0.80 s | **0.09 s** |
| Median after bar 6 | not computed | **0.028 s** |
| Bars off by more than 1 s | not computed | **0 of 105** |

The points track the performance to about 30 ms through the body.

**The 105-point count, read by eye rather than inferred.** That video carries 105 points where eleven others carry 106. Rendered as inter-point intervals against the tab's bar durations, a missing interior point would show as one interval about two bars long. **No doubled interval exists in either video.**

| | Intervals | Median error | Last interval | Matches |
|---|---|---|---|---|
| primary, 105 points | 104 | 0.049 s | 4.370 s | bar 104 at 4.286 s |
| alt, 106 points | 105 | 0.065 s | 5.320 s | bar 105 at 5.357 s |

Nothing is missing from the interior; only the terminal boundary. Bar 105's end is extrapolated from the tab's own tempo, which `r8973454` now makes accurate, so calling it a defect overstated it.

**What the eye added.** Interval 1 runs long in **both** videos, **+0.79 s primary and +0.82 s alt**, while every later residual hugs zero. Two independently synced videos placing bar 1 the same way relative to bar 2 points at the tab's notated bar-1 length rather than one video's sync being wrong. That strengthens the withdrawal above. For video-synced playback `r8973454` therefore changes little across the body; it fixes Songsterr's own MIDI playback and within-bar interpolation.

**The route exists.** Across the five page bundles, 2,693,991 characters: `videoSync` 31 times, `video/sync` twice, `POST /api/video-points/process`, event `video/syncPointsPublished`, and the editor command **`commands/editor:pointsReplace`**. Two browser bridges are live on this Mac. **No `pointsReplace` was fired**, for evidence rather than access: after the eye check there is no verified replacement value.

## 6b. A peer session's four claims, re-derived

Session `b1d3-427a-96a4-355bdf049d0a` sent measurements. Each was re-derived rather than accepted.

| Peer claim | My measurement | Verdict |
|---|---|---|
| Tab bar-1-to-bar-105 span 501.4 s | 501.36 s fitted, 501.35 s live | CONFIRMED |
| `BASE-r8972739-live-head` Crash1 50, Crash2 1, 2,834 notes, upload matches | identical across base, TEMPOFIX, TEMPOFIX-INT | CONFIRMED exactly |
| 51 written crashes beat a circular-shift null at 2.83x | 4.87x, 0 of 300 rotations reach it, p = 0.000 | same direction, larger |
| HANDS and live disagree on ~150 tom notes | HANDS 41:1 43:44 47:4 48:81 50:30 vs live 41:62 43:0 47:111 48:14 50:0 | CONFIRMED lane for lane |

Their 6-12 kHz ratio of 1.59x reads 3.09x here on the same band. Different magnitude, same direction, so **the written crashes rest on two independent nulls**. Their bar-by-bar sync residual could not be reproduced, since it compares a `metromap.json` not on disk in this session.

## 7. Reinstated with evidence

An earlier session recorded a 23.3 second duration gap, explained it with an invented lead-in, and withdrew the explanation. The gap is now measured at 23.34 s with a 3.9 ms standard deviation, and the Central Scrutinizer intro is named by Brandon's sources as its content.

Source files: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/TEMPOFIX-on-r8972739-Brandon-edit.gp` and `TEMPOFIX-INT-on-r8973389-Brandon-edit.gp`.
