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


## 2026-08-15: measured against the RECORDING, and two results withdrawn

`audio_accuracy.py` was written 2026-08-13 and never run. It has now run on all
ten songs. The `/goal` evaluator named this gap and it was the right one: every
prior gate compared a candidate to the inherited Songsterr tab, which is a
preservation question, so a build passes it while reproducing notes nobody played.

**The first run's attack control was broken.** A rigid 2.517s decoy is the wrong
null for tabs carrying 2 to 5 attacks per detected onset. On 07 MOP and 09 MHL the
deliberately wrong decoy OUTSCORED the real tab. Replaced with the
shuffled-interval null. Timing and pitch are now judged separately.

| song | z | recall | shuffled | pitch | decoy | timing | pitch |
|---|---|---|---|---|---|---|---|
| 01 Seedy Shade | 5.2 | 32.3% | 27.9% | 68.6% | 12.8% | established | established |
| 02 Flake | 8.7 | 46.1% | 54.5% | 56.6% | 14.6% | no | established |
| 03 Gene | 17.7 | 41.4% | 27.0% | 76.0% | 8.9% | established | established |
| 04 Six Feet Under | 5.6 | 37.4% | 23.1% | 79.5% | 6.6% | established | established |
| 05 Sleep Vs Death | 16.7 | 30.3% | 21.3% | 72.3% | 12.0% | established | established |
| 07 MOP | 13.5 | 36.2% | 37.6% | 63.9% | 8.7% | no | established |
| 08 JGBFTL | REFUSED, aligns at no tempo |||||||
| 09 MHL | 12.9 | 42.9% | 39.8% | 75.4% | 8.2% | no | established |
| 10 Trapped | 11.1 | 42.1% | 40.4% | 82.9% | 6.0% | no | established |
| 11 Ambulance | 7.7 | 33.4% | 32.0% | 70.7% | 11.2% | no | established |

Pitch established on all nine aligned songs, chance 25%. Timing on four.

### Chroma identification, validated before use

Each tab picks its own recording out of ten stems. Chance 1/10, scored 6/10.
Hits sit at r >= 0.929, misses at r <= 0.783.

11 Ambulance 0.977, 03 Gene 0.946, 04 Six Feet 0.935, 05 Sleep 0.933,
01 Seedy Shade 0.931, 10 Trapped 0.929 all rank 1st.
07 MOP 0.783, 02 Flake 0.756, 09 MHL 0.756 miss.
**08 JGBFTL 0.703 is the weakest and picks 03 Gene's stem over its own.**

### The Flake muted-strum repair was REFUSED

Brandon: "flake of the year has chords where muted strings should be."

A first detector's 3.4x lift is WITHDRAWN: it ran at offset 0.0 when Flake's real
alignment is +2.600s.

Building the proper control exposed two bugs, both found by it returning zero:
GPIF Notes are SHARED definitions at document level, not Track children, so every
muted note in the album was invisible (Flake's 5 definitions expand to 188 real
muted attacks); and (string, fret) matching was wrong even after the ids resolved.

With 473 pooled muted attacks against 6,250 pitched, the control FAILED:

| axis | muted | pitched | AUC |
|---|---|---|---|
| decay ratio | 2.495 | 5.382 | **0.522** |
| sustain support | 0.443 | 0.572 | **0.617** |

The 2.9 mean gap on decay ratio is outlier-driven. AUC 0.5 is a coin flip.
**No .gp was edited.** The hypothesis is credible and unproven.

Deeper obstacle: those `Muted` marks were written by the same Songsterr AI under
audit, so calibrating against them is circular.

### 04 Six Feet Under bar 58

Brandon: "bar 58 sounds like a weird chord not quite right." Unsupported notes by
bar: 57 at 10%, **58 at 30%**, 59 at 20%, **60 at 37.5%**, 61 at 0%, 62 at 8.3%.
The rough patch is real across 58 to 60; bar 58 is not uniquely bad.

The Cmaj7-should-be-C reading is REFUTED by head-to-head: across all 9 attacks
carrying `C3 G3 B3 E4 G4`, written B3 averages 8.34 vs C4's 8.26, and C4 wins only
44%. Those per-note flags are detector noise.

### 01 Seedy Shade

**One guitar**, confirmed by Brandon 2026-08-15. The audio test was inconclusive
here and his call settles it.

### New tools

```
python3 ~/Projects/_outputs/theship-tabs/audio_accuracy_sweep.py
python3 ~/Projects/_outputs/theship-tabs/muted_classify.py --pool
python3 ~/Projects/_outputs/theship-tabs/bar_probe.py --song 04 --bar 58
python3 ~/Projects/_outputs/theship-tabs/jgbftl_diagnose.py
```


## Same day: the synthetic control acquits the classifier and convicts the labels

A failed control has two causes needing opposite responses: the classifier cannot
separate the classes, or the labels are wrong. Real audio cannot tell them apart.
Synthetic audio can, because its labels are true by construction.

60 pitched and 60 muted attacks, **identical transients**, differing only in
harmonic decay (600 ms vs 30 ms), placed on the real Flake stem at working level.

| axis | pitched | muted | AUC synthetic | AUC on tabs' own marks |
|---|---|---|---|---|
| decay ratio | 1.988 | 0.123 | **1.000** | 0.522 |
| sustain support | 0.910 | 0.797 | 0.451 | 0.617 |

**The method is sound; the tabs' `Muted` marks are not usable ground truth**,
which is what a mark written by the transcription under audit should be expected
to be. Against my own interest: AUC of exactly 1.000 means the synthetic is
easier than the record, so this licenses the method and NOT its threshold.

### How many muted chords are actually in Flake, asked without labels

If a song hides written chords the record plays dead, its chord attacks are
bimodal in decay ratio. Uniform is 0.555.

| song | chord attacks | bimodality | below decay 0.5 |
|---|---|---|---|
| 10 Trapped | 473 | 0.770 | 7.2% |
| 01 Seedy Shade | 80 | 0.712 | 2.5% |
| 09 MHL | 242 | 0.699 | 18.2% |
| 04 Six Feet Under | 244 | 0.621 | 11.9% |
| 05 Sleep Vs Death | 105 | 0.344 | 3.8% |
| 11 Ambulance | 771 | 0.260 | 0.9% |
| 03 Gene | 235 | 0.228 | 1.7% |
| 07 MOP | 283 | 0.212 | 4.2% |
| **02 Flake** | 925 | **0.191** | 7.1% |

**02 Flake is the LEAST bimodal song in the album.** Its chord attacks are one
population, so there is no large hidden set of chords the record plays as dead
strums.

**What survives:** 66 of Flake's 925 chord attacks (7.1%) sit below decay 0.5 and
are the bounded candidate set. Dozens of local corrections, not a systemic
rewrite. The ear-call is not refuted and its scale is now known. No .gp edited,
because turning those 66 into edits needs a threshold synthetic data cannot give.

```
python3 ~/Projects/_outputs/theship-tabs/muted_synth_control.py
```


### The threshold transfer was tried and failed, closing the no-labels route

Set at the 1st percentile of synthetic pitched attacks (decay **1.525**), the
threshold catches 100% of synthetic muted at 1% false-positive. Applied to Flake
it flags **346 of 925 chord attacks (37.4%)** against 9.2 expected. Not credible:
real rung chords in a dense mix decay faster than clean synthetic ones, so the
threshold measures my synthesiser against a record, not a rung chord against a
dead one. It also contradicts the bimodality result on the same audio, where
Flake is the album's LEAST bimodal song.

Every label-free path is now run and exhausted: circular marks fail at AUC 0.522,
synthetic proves the method at AUC 1.000 but carries no threshold, bimodality
bounds the population without naming members. **No .gp edited at any point.**


### A bug of mine that nearly became a defect report on two songs

Chord support by string position looked damning: **01 Seedy Shade lowest string
2.5%, second-lowest 5.0%**, against 71.2% highest. 09 MHL 16.1% vs 63.4%.

Entirely my artifact. By frequency instead of by string, **support is 0% below
130 Hz in every song**, because the Demucs guitar stem keeps ~1.32% of the mix at
60-90 Hz. My classifier read the fundamental only, so it reported the stem's
blindness as the tab's error.

| song | notes | below 130 Hz |
|---|---|---|
| 09 MHL | 1116 | **44.7%** |
| 07 MOP | 1435 | **39.7%** |
| 04 Six Feet Under | 1100 | 34.9% |
| 10 Trapped | 1646 | 30.3% |
| 01 Seedy Shade | 1026 | 22.5% |
| 11 Ambulance | 3299 | 18.9% |
| 05 Sleep Vs Death | 748 | 15.6% |
| 03 Gene | 1654 | 6.2% |
| 02 Flake | 3169 | 4.0% |

**Published pitch agreement is unaffected**: the audit uses `tone_energy`, which
already summed f0+2f0+3f0. An 82 Hz low E has its 2nd harmonic at 165 Hz.

### The pass criterion was the other bug

With harmonics summed the mean gaps widened enough to print CONTROL PASSED. It
should not have. A mean gap was already wrong once (decay ratio, 2.9 gap at AUC
0.522). The gate now requires **AUC >= 0.80**.

| axis | AUC before | AUC after | required |
|---|---|---|---|
| sustain support | 0.617 | **0.687** | 0.80 |
| decay ratio | 0.522 | 0.589 | 0.80 |

Real improvement, still short. **Control fails at 0.687, no .gp edited.**

### Retracted same day

09 MHL's written duration is 171.9s against a 241.0s stem (ratio 0.713, every
other song 0.96-1.00). I called that a new defect. It is not: the guitar stops
playing at ~155s and the 220-241s region is **rms 0.0000**, digital silence with
noise-floor artifacts. The tab covers all real playing.


## 2026-08-15 late: candidate ranking works, section diagnostic refuted

Brandon rejected "nothing executable remains" and he was right. Three corrections
to my language first:

1. NOT "the method works, the labels do not". The defensible claim: the decay
   feature works on that synthetic construction while the Songsterr marks show
   almost no relationship to it. **Real muted vs rung guitar remains unvalidated.**
2. Bimodality at 0.191 is useful negative evidence against a SHARPLY SEPARATED
   second population. It does **not** bound the true muted count to 66.
3. Removed: "everything still open needs an input only you can give."

### Candidate ranking, validated

All 925 Flake chord attacks ranked on **nine features chosen to fail differently**:
decay ratio, sustain support, HNR, spectral flatness, HF transient proportion,
post-transient periodicity, sustain-envelope slope, chroma stability, neighbour
delta. Each z-scored against this song's own attacks.

**Control it could have failed:** noise features would scatter. Top 50 sit a
median **0.54s** apart vs **2.49s** for random 50, **z = -5.6**. They concentrate
in **100-120s** and **20-40s**, nothing after 120s.

Candidate ordering, NOT a classification. Nine features reading one recording can
agree and be wrong together. Artifact: `candidates_02.json`.

### Section defect map for 08 JGBFTL: REFUTED

16-bar windows aligned independently, scored against their own shuffled rhythm.
On 08 it said CONTENT, every window failing. The controls killed it: known-good
04 (z +2.4, +0.8), 05 (+0.8, -0.3), 01 (-0.0) show the same pattern. 03 Gene was
the outlier.

Two earlier versions also caught: a free 0.55-2.00 scale grid pinned at the 1.98
edge, and a free offset search reporting backwards jumps in a song with none.

**08 JGBFTL's defect stays unclassified**, for a specific reason: per-window
positioning needs a global anchor and JGBFTL has none.

```
python3 ~/Projects/_outputs/theship-tabs/flake_candidates.py --song 02 --top 40
python3 ~/Projects/_outputs/theship-tabs/jgbftl_sections.py --song 08
```


### Per-feature validation: one dropped, ranking held

Each of the ranking features scored separately on synthetic truth:

| feature | AUC | verdict |
|---|---|---|
| decay ratio | 1.000 | keep |
| spectral flatness | 1.000 | keep |
| HF transient | 1.000 | keep |
| harmonic-to-noise | 1.000 | keep |
| chroma stability | 0.986 | keep |
| envelope slope | 0.894 | keep |
| periodicity | 0.723 | keep |
| **sustain support** | **0.552** | **dropped** |

Sustain support also managed only 0.617 then 0.687 on the real pooled control.
Weak in both places.

This test can CONDEMN a feature; it cannot CERTIFY one, since the synthetic case
is easier than the record.

**Pruned ranking re-run through the clustering control: z = -5.5** vs -5.6 for the
nine-feature version. Top-50 overlap **76%**, top-20 **75%**, same passages.

Pruning did not improve anything; both cluster about equally, so the dropped axis
carried some real signal on this record. What it establishes is **stability**: the
localization does not depend on which features are included.

**Listening list** (pruned ranking, top 12):

```
 1    2.60s  E3 B3 E4 G#4       7   36.17s  C#3 G#3 C#4 E4
 2  112.78s  G#4 B4 E5          8    2.78s  E3 B3 E4 G#4
 3   76.17s  G#2 D#3 G#3 C4     9  103.85s  E3 E4
 4  113.31s  G#4 B4 E5         10   21.17s  E3 B3 E4 G#4
 5  112.06s  G#4 B4 E5         11   30.46s  G#2 D#3 G#3 C4
 6   94.03s  E3 E4             12  112.24s  G#4 B4 E5
```

Rank 1 at 2.60s is the alignment offset itself, the tab's first attack. Suspect it:
an edge position is where a window feature has least context.

```
python3 ~/Projects/_outputs/theship-tabs/feature_validate.py
```


### The listening pass is hosted

https://7onething1.github.io/theship-flake-labels/

24 clips, 12 from the top of the ranking and 12 from the bottom, in TIME order so
the ranking does not prime the ear. The listener's calls are the ground truth; the
seven-feature ranking only decides which 24 attacks are worth hearing.


## 2026-08-15 later: the ranker was detecting SILENCE

Brandon: "94.03s is silent". That was rank 6 on the list I handed him.

**21 of the top 50 sit at or below the song's 10th-percentile loudness floor,
against 5 expected.** The 100-120s "cluster" is a quiet passage (112.06s reads
rms 0.00002). An attack over silence has no sustain, no harmonics, no periodicity
and no chroma stability, so it maxes out every sustain feature at once.

**RETRACTED: the z=-5.6 clustering localization.** The whole-song null was wrong,
exactly as Brandon predicted.

### Two questions, separated

**Defect A: chords written where the guitar is not playing.** 93 of 925 (10.1%),
in three stretches:

| stretch | length |
|---|---|
| 101.17s - 114.74s | **13.57s of written chords over silence** |
| 94.03s - 95.64s | 1.61s |
| 115.28s - 115.99s | 0.71s |

Its own defect, its own repair, NOT evidence of muting.

**Defect B: the muted question**, asked of the 832 audible attacks only.

| control | result | reading |
|---|---|---|
| density-matched clustering | z = -3.8 | survives a density-preserving null |
| feature redundancy | **4.6 of 7 dims** | HNR/periodicity r=0.75, flatness/HF r=0.65 |
| leave-one-out decay_ratio | **50/50 unchanged** | contributes nothing |
| leave-one-out hf_transient | 30/50 | this + flatness ARE the detector |

**Synthetic transfer failure:** decay_ratio scored **AUC 1.000** synthetic and
changes the real top 50 by **nothing**. Brandon's warning, measured.

### The one positive control

| written shape | n | sd | range | in top 50 |
|---|---|---|---|---|
| **E3 B3 E4 G#4** | 127 | **0.63** | **-3.21 to +3.57** | 18 |
| C#3 G#3 C#4 E4 | 104 | 0.34 | -0.56 to +1.30 | 16 |
| G#4 B4 E5 | 142 | 0.32 | -0.92 to +0.71 | 1 |

E3 B3 E4 G#4 spans 6.8 z across 127 occurrences of the SAME written notes. A
detector reading tone would score them alike, as it does on G#4 B4 E5. Separating
takes of identical material is the goal, and it is the first evidence that
something beyond section structure is being measured.

### The controls are now in the skill

All twelve checks ship as `detector_controls.py` in `/impossible-guitar-parts`
with a hard gate in SKILL.md.

```
python3 ~/.claude/skills/impossible-guitar-parts/detector_controls.py
python3 ~/Projects/_outputs/theship-tabs/flake_rank_v2.py
```


### 08 JGBFTL localized, by a diagnostic that needs no alignment

Pitch-class content is order-free, so it works on a song that aligns nowhere.
Each 8-bar section scored against its own stem, every other Ship stem, and its
own 11 transpositions.

**The controls discriminated this time:** known-good songs pass 71% of sections,
08 passes 29%.

| bars | notes | own | best other | best transp | verdict |
|---|---|---|---|---|---|
| 1-8 | 308 | +0.376 | +0.631 | +0.715 | **loses to own transposition** |
| 9-16 | 318 | +0.415 | +0.674 | +0.748 | **loses to own transposition** |
| 17-24 | 276 | +0.482 | +0.616 | +0.543 | **loses to own transposition** |
| 25-32 | 256 | +0.520 | +0.772 | +0.515 | weak |
| 33-40 | 241 | +0.685 | +0.766 | +0.559 | weak |
| 41-48 | 308 | **+0.892** | +0.774 | +0.435 | passes both |
| 49-54 | 208 | **+0.885** | +0.778 | +0.421 | passes both |

**The song splits in half.** Bars 41-54 sit at 0.89, level with healthy tabs.
Bars 1-24 sit at 0.38-0.48 and lose to their own transposed selves.

**Against the finding:** the beats-other-song control fails 12/12 on 07 MOP and
8/8 on 02 Flake, both of which align cleanly, so losing to a labelmate proves
little. Even on transposition, **05 Sleep Vs Death shows a comparable 3-section
block** while being healthy.

**Specific to 08 is the CONJUNCTION:** the only song failing global alignment at
every tempo, weakest whole-song chroma at 0.703, AND three consecutive sections
losing to their own transposition. No other Ship song has more than one.

**Practical result:** re-transcription scoped to **bars 1-40 of 54**. Bars 41-54
measure as sound as the healthy tabs and are worth keeping.

```
python3 ~/Projects/_outputs/theship-tabs/jgbftl_content.py --win 8
```


### Both suspect tabs PASS every physical gate

The governing rule says it directly: "a build could pass every gate while
faithfully reproducing wrong notes." Not hypothetical here.

| artifact | sha256[:16] | staff | notes | attacks | hand% | verdict |
|---|---|---|---|---|---|---|
| 02 Flake of the Year.gp | `e90b44d28bb5f3fe` | Lead | 225 | 225 | 0% | **PASS** |
| | | Rhythm | 2948 | 2944 | 13% | **PASS** |
| 08 JGBFTL.gp | `96df1c1980ae662f` | Lead | 148 | 148 | 0% | **PASS** |
| | | Rhythm | 1812 | 1767 | 0% | **PASS** |

Validator `impossible_gate.py` sha256[:16] `14bb087850cf9853`.

**02 Flake writes 93 chords over silence and passes. 08 JGBFTL's first 24 bars
match a TRANSPOSED version of the recording better than the recording, and it
passes.** Every hand span, string collision, tie and fret shift is legal in both.
A guitarist could play these note-for-note and be playing something the band
did not.

That is why audio accuracy comes before any fretboard question, and why five of
the six detectors built for it were thrown out by their own controls.
