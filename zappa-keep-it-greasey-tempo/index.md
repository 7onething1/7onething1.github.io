# Keep It Greasey: the tempo, measured

Frank Zappa, *Joe's Garage*, 1979. Songsterr **s604777**, live tab **r8852151** by Ben Dibden1,
part 8 "Vinnie Colaiuta", 248 bars, 4948 notes, 629 ghost flags.

Two publishers print **quarter = 134** for the 3:18 guitar-solo passage. The recording plays that
passage at **136.7**, drifting from 135.7 to 137.9.

Session of 2026-09-06. Nothing here has been uploaded to Songsterr. No ghost flag has been moved,
added or removed.

| | |
|---|---|
| Measured quarter at 3:18 | **136.7**, range 135.7 to 137.9 |
| Printed by two publishers | 134 |
| R at 134 in that window | **0.0167**, below its own null of 0.0518 |
| Metronome intervals on a 20 ms lattice | **1,170 of 1,170** |
| Estimator error at matched difficulty, end to end | **0.04 BPM** |
| Cross-family offset range for measure 102 | **4.290 s, anchor unmeasured** |
| Ghost flags touched | **0 of 629** |

## 0. Scope limit, read this first

Everything below establishes **the tempo of the audio between 198 and 238 s**. That window is tied to
the printed 3:18 marker by the lead stem, which sits at digital silence through 197 s and enters at
198.275 s against a printed 198.000 s.

**It is not established that this window is measures 102 to 104.** That mapping comes from the tab's
own score map. Queue item `q-2026-09-06-acaf55` tested it and **failed to establish it**, and section
12 carries that measurement. Any sentence here that names a
measure number is carrying that assumption, and the blocker-2 row in section 11 is labelled a scale
estimate for exactly this reason.

## 1. The lock, and what came in

An onset-by-onset comparison of Songsterr ghost flags against snare-stem detections returned
**9 agreements of 20** where the base rate alone predicts **10.0**. A permutation test over 20,000
shuffles of the ghost labels gave a shuffled mean of 8.89 and sd 1.36, so
**p(shuffled >= observed) = 0.739**. Zero of 629 flags receive audio support.

That negative stands and this page does not revisit it. A detector disagreeing with a reading made
by eye and by ear loses. **The 629 flags stay where the transcriber put them.**

The previous session closed with three measured blockers and a queue item asking which of four tempo
numbers is correct: the printed **134**, the metronome stem's **136**, the folder name's **142**, and
a local grid sweep peaking at **143.5**.

## 2. The metronome stem is synthetic

**Verdict: it is a beat tracker's output rendered to a wav.** Digital silence plus 1,171
bit-identical copies of one click sample.

| Test | Metronome stem | Snare stem, same folder, same separation |
|---|---|---|
| Duration | 501.660 s | 501.840 s |
| Exact-zero sample fraction | 0.4238 | 0.0061 |
| Samples left after masking 10 ms pre and 350 ms post every click | 1,561,721, **every one exactly 0.0**, peak 0.0 | not applicable |
| Distinct click peak amplitudes | **1**, all exactly 1.0 at 0.0 dBFS | not applicable |
| Pairwise waveform cosine similarity, 685,035 pairs | mean **1.000000**, min **1.000000** | not applicable |
| md5 of 300 ms stereo windows, 64,405 windows | **55 distinct hashes, each appearing exactly 1,171 times** | not applicable |

A source separation cannot produce a stem shorter than its siblings, and it cannot produce 1,171
bit-identical transients at full scale over digital silence.

## 3. Nine values per interval

1,171 clicks give 1,170 intervals. **Every interval falls within one sample of a multiple of 882
samples**, which is 20 ms at 44.1 kHz. Fraction inside two samples of that lattice: **1.0000**.

| Lattice step | Interval | Implied quarter BPM | Count | Share |
|---|---|---|---|---|
| 18 | 360 ms | 166.667 | 21 | 1.8% |
| 19 | 380 ms | 157.895 | 75 | 6.4% |
| 20 | 400 ms | 150.000 | 159 | 13.6% |
| 21 | 420 ms | **142.857** | 322 | 27.5% |
| **22** | **440 ms** | **136.364** | **383** | **32.7%** |
| 23 | 460 ms | 130.435 | 174 | 14.9% |
| 24 | 480 ms | 125.000 | 27 | 2.3% |
| 25 | 500 ms | 120.000 | 8 | 0.7% |
| 26 | 520 ms | 115.385 | 1 | 0.1% |

**WITHDRAWN: "the metronome stem reads 136.00 BPM median."** That number is the 440 ms bin holding
32.7% of intervals. Re-running the previous session's exact window, 190 to 212 s, reproduces its
figures to the digit: 50 clicks, median 440.00 ms, p10 420.0, p90 480.0. The eight distinct interval
values there are 380, 400, 420, 440, 460, 480, 500 and 520 ms, every one a lattice step. The p10 to
p90 spread read as evidence the click track is not a fixed grid is the quantizer.

A quarter note at the printed 134 BPM is 447.76 ms, which no single interval can express. A run of
alternating steps does encode an intermediate average, so the lattice constrains instantaneous values
rather than long-window means. **No single interval in this stem can express 134, and its median can
only land on a lattice step.**

The folder name's `142bpm` is the same instrument talking. 142.857 is the 420 ms bin and the mean
interval across the file is 428.15 ms, which is 140.14 BPM. **The filename and the metronome stem
are one estimate, not two.**

## 4. Control: the audio is not speed-shifted

The folder is named `D minor-142bpm-442hz`. A file resampled to a 442 Hz reference would carry every
tempo figure with it, so it was tested first, and the result gates every BPM figure below.

| Stem | Global cents vs A440 | Implied A | 30 s windows | Window median | Read |
|---|---|---|---|---|---|
| bass | +14.0 | 443.6 Hz | 16 | +18.2 | usable |
| lead | +14.0 | 443.6 Hz | 16 | +14.9 | usable |
| rhythm | +8.0 | 442.0 Hz | 16 | +6.1 | usable |
| piano | +1.4 | 440.4 Hz | 3 | +3.0 | too sparse |
| vocals | -49.8 | 427.5 Hz | 8 | -17.5 | unstable, discarded |

The three stems with sustained pitched content agree: the audio sits **8 to 18 cents sharp of A440**,
matching the folder's label. Taking A440 as the band's reference, that is a playback ratio between
1.0046 and 1.0104, so **about 1.0% of speed under that assumption**. The 134 to 142 gap is 6%, so speed does not
account for it.

Stated limit: this assumes the band tuned to A440, which is not established here. The bound holds as
written and the conclusion does not depend on the exact value inside it.

## 5. Method, and the bias it replaces

Onsets come from the **summed kit**, six stems: kick, snare, hat, cymbals, toms and other_kit. The
measurement no longer rests on quiet snare detections at -42 to -50 dBFS. Onset detection runs at
hop 128, 44.1 kHz.

The statistic is **circular concentration** over a candidate period T:

```
R = |mean( exp( 2*pi*i * t_k / T ) )|        E[R] under the null = sqrt(pi) / (2*sqrt(N))
```

Phase is optimized implicitly, so **no anchor click enters the measurement** and the rendered
metronome is never touched.

**Why the earlier sweep peaked at 143.5.** The previous statistic was the fraction of onset gaps
falling within 25 ms of a sixteenth multiple. A fixed absolute tolerance against a variable period
is biased toward short periods by construction. A random gap lands within tau of a multiple of T
with probability 2*tau/T. At tau = 25 ms that is **44.7%** for the 111.9 ms sixteenth of quarter =
134, and **47.8%** for the 104.5 ms sixteenth of quarter = 143.5. The three-point tilt toward 143.5
is the tolerance. The earlier section's own quoted chance floor of 45.4% is that quantity.

## 6. The estimator, validated end to end

**The first version was too easy and this replaces it.** The original validation generated onset
*times* and handed them to the estimator, so it tested the statistic and never the pipeline. It also
returned R = 0.81 where the real window returns **0.4377**, which means the synthetic was easier than
the recording. Both faults are fixed here. Every run now synthesises **audio** and passes it through
the same `onset_strength` then `onset_detect` chain at hop 128, 44.1 kHz, delta 0.03.

Signal built to the measured conditions of the 198-238 s window: onset density 7.3 per second, two
amplitude populations 22 dB apart with a quiet share of 0.545, kit-like exponentially decaying
broadband transients, and a -60 dBFS noise floor.

### Clean condition, 12 ms jitter

| True BPM | Recovered median | Max absolute error | R | Detector recall | Detector precision | Timing bias |
|---|---|---|---|---|---|---|
| 134.000 | 134.0004 | **0.024** | 0.811 | 0.997 | 0.997 | +5.45 ms |
| 136.700 | 136.7116 | **0.013** | 0.805 | 0.993 | 0.997 | +5.51 ms |
| 137.500 | 137.5011 | **0.014** | 0.799 | 0.993 | 0.997 | +5.53 ms |
| 142.857 | 142.8571 | **0.027** | 0.785 | 0.987 | 0.997 | +5.70 ms |

**The detector reports every onset about 5.5 ms late.** A constant shift leaves the period estimate
untouched, because the statistic is phase-invariant. Anchoring is where it counts, and section 12 carries it forward.

### Matched difficulty, route A: raise jitter until R meets the real 0.4377

| Jitter sd | R | Recovered median, true 136.7 | Max absolute error | Matches the real R |
|---|---|---|---|---|
| 12 ms | 0.798 | 136.687 | 0.013 | no, far easier |
| 18 ms | 0.611 | 136.687 | 0.037 | no |
| **24 ms** | **0.421** | **136.699** | **0.037** | **yes** |
| 30 ms | 0.274 | 136.699 | 0.062 | no, harder |
| 36 ms | 0.186 | 136.674 | **26.42** | no, past the cliff |
| 42 ms | 0.168 | 127.904 | **27.58** | no, past the cliff |

**The method has a cliff and the real data sits well above it.** Down to R near 0.27 the estimator
holds to 0.06 BPM. Below R near 0.19 it breaks completely, missing by 26 BPM. The observed R of
0.4377 is roughly 2.3 times the breakdown level.

### Matched difficulty, route B: model the measured drift instead of raising jitter

The 5-second table in section 9 shows the passage accelerating from 135.72 to 137.87. A linear ramp
across exactly that range, with ordinary 12 ms jitter, was synthesised and run end to end.

| Model | R produced | R observed on the real audio | Recovered median | True midpoint | Bias |
|---|---|---|---|---|---|
| linear ramp 135.72 to 137.87, 12 ms jitter | **0.4347** | **0.4377** | 136.44 | 136.795 | -0.357 BPM |

**The low R is explained.** Modelling the passage as a tempo ramp across the measured range
reproduces the observed R to **0.003**. The recording's R of 0.4377 is what ordinary drift over 40
seconds looks like, and it is not detector failure and not a wrong metrical reading. Under that model
the single-window estimator sits **0.36 BPM low** of the true midpoint, well inside the 2.15 BPM
spread reported as the answer.

**Where the model still differs from the recording.** The synthetic ramp carries **uniform onset
density**. The real window does not: onsets thicken later, which is why the real 40-second single fit
lands at 137.46, *above* its sub-window median of 136.66, in the opposite direction to the synthetic
bias. Density weighting is an unmodelled term, and it is one reason the sub-window curve is reported
as the answer rather than the single fit.

## 7. The metrical level, tested

Wide sweep, 40 to 900 ms, over the solo passage.

| Period | Reading | R | vs null 0.0518 |
|---|---|---|---|
| **109.10 ms** | the fundamental | **0.4359** | 8.4x |
| 54.60 ms | half of 109.10, the same grid read at twice the rate | 0.2461 | 4.8x |
| 218.24 ms | the eighth | 0.0465 | below |
| 327.36 ms | dotted eighth | 0.0337 | below |
| 436.48 ms | the quarter | 0.0299 | below |
| 518.32 ms | 4.75 sixteenths, a quarter of the 19/16 bar | 0.0419 | below |
| 2073.28 ms | **one true 19/16 bar** | 0.0376 | below |

One fundamental and its half. **A previous version of this table labelled 518.32 ms "one 19/16 bar",
which was wrong: 518.32 ms is 4.75 sixteenths and the bar is 19 of them, 2073.28 ms. The bar period is
now measured and listed at R = 0.0376.** Every longer multiple sits at or below the null, which is what a
running sixteenth subdivision with no eighth-level accent looks like. Reading 109.12 ms as the
sixteenth gives a 19/16 bar of **2.073 s**, against the tab's notated **2.111 s** for measure 102.
**Two independent routes to the same bar length settle the level.**

## 8. The result at 3:18

Solo passage 198 to 238 s. Both Alfred page 64 and the DRUM Groove Analysis page mark this passage
from 3:18, and the lead stem enters at 198.275 s against that printed 198.000 s, so the window is
tied to the printed marker by audio. Nothing ties it to a measure number by audio. 293 kit onsets. Single best-fit period across the 40 seconds gives quarter = 137.46, R =
0.4377 against a null expectation of 0.0518, Rayleigh p = 4.2e-25, and above all 200 draws of an
interval-shuffle null whose max-R averaged 0.226.

| Candidate | Where it comes from | R | Against null 0.0518 |
|---|---|---|---|
| 134.000 | Alfred p64 and DRUM Groove Analysis | **0.0167** | **below the null** |
| 135.000 | the tab's own automation at measure 101 | 0.1786 | 3.4x |
| 136.364 | the rendered metronome's modal bin | 0.0548 | 1.1x |
| 142.857 | the folder name | 0.0236 | **below the null** |
| 143.500 | the previous session's sweep peak | 0.0647 | 1.2x |
| **137.463** | **measured** | **0.4377** | **8.5x** |

## 9. The drift curve

Five-second sub-windows. Every one is individually strong, R between 0.59 and 0.83 against nulls
near 0.15.

| 198 s | 203 s | 208 s | 213 s | 218 s | 223 s | 228 s | 233 s |
|---|---|---|---|---|---|---|---|
| 135.72 | 135.89 | 135.89 | 136.86 | 137.87 | 136.46 | 137.84 | 137.44 |

**WITHDRAWN: 137.46 as the headline figure.** Median **136.66**, range **135.72 to 137.87**, spread
2.15 BPM. The sub-window sequence rises overall and changes direction twice, and the 40-second single fit is
weighted toward the later, denser windows. **136.7 with a 2.1 BPM spread is the honest figure.**

Other windows. Bootstrap intervals measure onset sampling noise only. **They do not measure tempo
drift inside a window**, and the table above shows drift is the larger term.

| Window | Onsets | Best quarter BPM | R | Bootstrap CI 95% | p vs interval-shuffle null |
|---|---|---|---|---|---|
| 198-238 s, the solo | 293 | 137.46 | 0.438 | 137.19 to 137.54 | <0.005, 0 of 200 |
| 340-400 s | 517 | 140.58 | 0.342 | 139.53 to 140.66 | <0.005, 0 of 200 |
| 400-460 s | 512 | 135.33 | 0.262 | 133.57 to 137.82 | 0.015 |
| whole song | 3456 | 137.87 | 0.107 | 137.09 to 138.53 | <0.005, 0 of 200 |

**The song is not at one tempo**, which agrees with the tab carrying 19 tempo automations between
64 and 139.

## 10. What this settles

**NOT SUPPORTED: the printed 134 does not match what the recording plays at 3:18.** It scores 0.0167, below its
own null of 0.0518, in the same window two publishers print it. The measured value is 2 to 4 BPM
higher. At most 1.0% of that gap can be playback speed. The estimator was validated to 0.03 BPM
against synthetic ground truth including 134 itself.

**REFUTED: 143.5 and 142.857.** 143.5 was a tolerance artifact of the earlier statistic and scores
0.0647 against a null of 0.0518. 142.857 scores below the null, and it was never independent
evidence, being the same beat tracker's output as the metronome stem.

**SUPPORTED: the transcriber's own tempo map is the closest candidate.** The live tab's automation
reads 135 at measure 101. The audio at 198 to 203 s measures 135.72. A gap of **0.7 BPM, 0.5%**, and
closer than every printed and machine-derived figure on the list.

**COINCIDENCE, NOT EVIDENCE: the metronome's 136.364.** It lands near the measured 136.7. That is a
property of the lattice spacing. In this range a 20 ms grid can emit only 130.435, 136.364 or
142.857, so landing near a true value carries no information about the recording.

## 11. The three blockers, before and after

| Blocker as inherited | Status after this pass |
|---|---|
| **1. Onset timing precision.** 23 to 29 ms median absolute residual against a 111.9 ms sixteenth, 17 of 33 onsets inside 25 ms of the best grid. | **DISQUALIFIED AS STATED.** The best-scoring grid was anchored on the first metronome click. A beat time on a 20 ms lattice can sit anywhere within half a step of the true beat, so up to 10 ms of the residual was injected by the reference, which is up to 8.9% of a subdivision. True onset precision is now unknown rather than established at 23 ms. |
| **2. Tempo-map drift.** Notated 498.36 s against a 501.84 s stem, 0.7%, roughly one 19/16 bar of positional uncertainty at 198 s. | **REDUCED, AS A SCALE ESTIMATE.** The inherited figure applied a whole-song accumulation locally. Comparing the tab's notated 2.111 s for measure 102 against the audio's 19 x 110.52 ms = 2.100 s gives 11 ms per bar, 0.55%, about 35 ms over three bars. **That comparison presumes the 198-203 s window is measure 102**, which is `q-2026-09-06-acaf55`. Read it as the scale of tempo-map error, not as a measure-anchored result. |
| **3. Detector reliability at low level.** Many quiet detections sit at -42 to -50 dBFS on a separated stem, where separation artifacts and bleed are not excluded. | **UNTOUCHED, STILL STANDS.** This pass sidestepped it by summing the whole kit rather than solving it. Any instance-level claim still has to face it. |

## 12. The anchor, unmeasured

Queue item `q-2026-09-06-acaf55`. It asks where measure 102 begins in the audio. It ran twice, and
**the second run overturned the first.**

**Index base, settled first.** The record's **measure 102 is 0-based index 101**: starts **196.8549
s**, **19/16**, **2.1111 s**, bpm 135, read from the tab's `signature` and `automations.tempo` fields
rather than from any image. That matches the previously recorded 196.898 to 199.009 s to **43 ms**
with an identical duration. The first run labelled one bar late and that is corrected.

**Run one, and why it does not stand.** It scanned a global offset across plus or minus 1.5 s and
reported a cross-family range of 1,928 ms, with kick at +1.176 and hat at +1.174. **The cymbal peak
sat at +1.490, ten milliseconds from the search boundary**, which is the tell that the window was too
narrow.

**Run two: plus or minus 3.0 s, 3,001 offsets,** with a scan-aware permutation null that faces the
same search, a bootstrap over notated events, and a sweep of the peak-over-mean cut.

| Source | Family | Run 1 | Run 2 | Peak/mean | Scan-aware p | Bootstrap 95% CI |
|---|---|---|---|---|---|---|
| part 4 Arthur Barrow, bass | bass | +0.410 | +0.412 | 1.56 | 0.165 | [-1.644, +1.876] |
| part 7 Warren Cuccurullo, rhythm | guitar | +1.372 | **+2.012** | 1.40 | 0.560 | [-2.518, +2.988] |
| part 6 Peter Wolf, piano | keys | -0.752 | **-2.278** | 3.19 | 1.000 | [-2.506, +0.028] |
| part 8 frets 35,36, kick | within-part | +1.176 | +1.182 | 2.53 | **<0.005** | [+0.725, +1.504] |
| part 8 frets 49-57, cymbals | within-part | +1.490 | +1.490 | 5.17 | 0.075 | [+0.700, +2.244] |
| part 8 frets 42,44,46, hat | within-part | +1.174 | **+2.954**, at the boundary | 1.57 | 0.430 | [+0.622, +2.990] |

**Run one was an artifact of the narrow window.** The hat vote moved **1.78 s** once the scan widened,
guitar moved 0.64 s and keys 1.53 s. Only kick and cymbal held. **The "kick and hat agree to 2 ms"
line from run one is withdrawn.** That agreement was inside one detector frame of 2.902 ms to begin
with, below what the hop can support, and it did not survive the wider search.

**What the range is and is not.** Cross-family range at the published 1.35 cut is now **4.290 s**,
more than two 19/16 bars. **This is the maximum minus the minimum of selected point estimates. It
carries no confidence level and no coverage interpretation**, so calling it "anchor uncertainty" gave
it more meaning than the calculation supports. The bootstrap intervals are the quantity that does
carry coverage, and every one spans seconds.

| Peak/mean cut | Sources kept | Cross-family range |
|---|---|---|
| 1.20 to 1.35 | 6 | 4.290 s |
| 1.40 and 1.50 | 5 | 3.768 s |
| 2.00 | 3 | 3.614 s |

No cut produces convergence, so the picture is not sensitive to the threshold.

**The drum vote, correctly named.** Calling it circular was too strong. **Every disputed ghost label
sits on the snare lane, and this anchor uses kick, cymbal and hat only**, so it reuses no ghost label
and no snare detection. The right name is a **within-part target-excluded anchor**. What it lacks is
external-source independence, since it still depends on the same transcribed part. Freeze it first and
test snare outcomes afterwards, never fit and judge in one step. On that reading the kick vote is the
only estimate that passes a scan-aware null, at **p < 0.005, 0 of 200 draws**, placing measure 102
near **198.037 s**, with a bootstrap interval still 0.78 s wide.

**The wording that survives.** `acaf55` did not establish a unique external anchor. Across the family
point estimates selected at the published cut, offsets span **4.290 s**. Of six sources, **five fail a
scan-aware permutation null**. A within-part target-excluded alignment from kick places measure 102
near 198.037 s, pending held-out snare testing and an independent external landmark set.

Nothing about the tempo measurement changes. That result covers the audio between 198 and 238 s and
nothing wider. **No external evidence on this machine places that window at measures 102 to 104.**

**Carried limitation.** The +5.5 ms detector lateness subtracted here was measured on **modelled kit
transients only**. Bass, piano and cymbal attacks may each carry their own latency. That is small beside a seconds-wide
family spread and not small beside a 31 ms marker claim.

## 13. What stays open## 13. What stays open

- **An external anchor.** Section 12 leaves the offsets spanning 4.290 s with five of six sources
  failing a scan-aware null. Closing it needs several distinctive lead or vocal landmarks rather than
  one entrance, a monotonic local map with a slope-change penalty, and landmarks held out for
  verification.
- **Blocker 3.** Low-level detector reliability on a separated stem, with a second separation method
  as the named remedy.
- **Was 134 ever right?** A printed tempo can describe another pressing, another transfer, or the transcriber's rounding. This page measures the recording on disk and says nothing about which
  artifact the publishers were listening to.
- **The publication date** of Marc Atkinson's Modern Drummer *Rock Charts* transcription, 1997 per
  Paiste's profile against an October 2000 page footer in a third-party scan.
- **A publisher-resolution copy** of that complete chart, the only complete-song printed source.
- **Classifying the 13 px Atkinson scan** by a measured error rate on known bracketed against known
  ordinary noteheads from that same scan.

**What this page does not claim.** No individual Songsterr ghost flag receives audio support from
anything here. The tempo result describes a passage. It maps no recorded stroke to any notated
event, and it is not a reason to touch r8852151.

## 14. Provenance

### Audio

| Item | Value |
|---|---|
| Stem set | 15-stem separation of the album track, `202 Keep It Greasey-D minor-142bpm-442hz`, 44.1 kHz, stereo, PCM_16 |
| Length, 14 stems | 501.840 s |
| Length, metronome stem | 501.660 s |
| Metronome stem md5 | `9fbce87924d6cf8f20ee79bb1ec29d2e` |
| Mixture | `202 Keep It Greasey-Dm-142bpm-442hz.mp3`, 320 kbps, 501.917 s, md5 `432a028f3b60b11673ac8f424c889334` |

### Scripts

All under the session tool directory for s604777. Hashes identify the exact file that produced each section.

| Script | md5 | What it produced |
|---|---|---|
| `classify_metronome.py` | `64fa7ddc7b464d6afd223d470a91f16b` | sections 2 and 3 |
| `tuning_and_tempo.py` | `b147a9db25260019107eff16f0a4c980` | section 4 |
| `pulse_period.py` | `8c1cd5e086b848fd1ad7606f983c777b` | sections 8 and 9 |
| `pulse_drift.py` | `919770ab2323a9afaeb422e841471017` | sections 7 and 9 |
| `validate_end_to_end.py` | `f5ab4e3566162e827e02a1e9e1c84307` | section 6, clean condition |
| `validate_matched_difficulty.py` | `3d12dd187446d5d77a9e37e334046d59` | section 6, matched difficulty |
| `anchor_measure102.py` | `737e96a9b467579874bd6b839e87bbf9` | section 12 |

Python 3.11.15, librosa 0.11.0, numpy 1.26.4. Random seeds fixed at 7, 11 and 17.

### Printed sources named on this page

- **Rich Lackowski**, *On the Beaten Path: Progressive Rock*, Alfred, page 64, Track 21. Read at 600
  dpi from the publisher's free sample, `content.alfred.com/catpages/00-31503.pdf`, md5
  `116b3ee7df76b9d11a1c3d4d18781d12`. Prints 19/16, quarter = 134.
- **DRUM! Magazine** Groove Analysis page for this song, headed quarter = 134.
- **Marc Atkinson**, Modern Drummer *Rock Charts*, the only complete-song chart, held here as a 180
  ppi third-party scan with incomplete chain-of-custody.
- **Songsterr** s604777, live revision r8852151 by Ben Dibden1.

---

Keep It Greasey, s604777. Session record kept locally as `KEEP-IT-GREASEY-vs-CHARTS-2026-09-05.md`.
Built 2026-09-06. Every figure came from a script in the provenance table, run on the audio named
in it.
