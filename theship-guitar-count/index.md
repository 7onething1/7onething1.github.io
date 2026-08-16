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


## 2026-08-15 final: the audit was grading the wrong file

Brandon: "For Six Feet Under, Lead Guitar, starting at bar 71, the rapid sixteenth
or thirty-second-note figure is spurious, and the lead guitar is tacet there."

The graded file writes **ZERO** lead attacks in bars 66-81. He was not wrong.
There are two files.

| copy | Lead total | Lead bars 71-81 |
|---|---|---|
| `_AUDITION_2026-08-07/` (what this audit graded) | 199 | **0** |
| `_fullband_gp/` | 199 | 0 |
| `UPGRADED_GUITAR_ready_to_import/` | **763** | **152** |
| `_upload_staging_2026-08-07/` (**what ships**) | **763** | **152** |

**Every number on this page grades a file that is not the one staged for upload.**

### Marginal explanatory value: a filler test needing no staff separation

| song | attacks added | new onsets explained | yield | verdict |
|---|---|---|---|---|
| 05 Sleep Vs Death | 190 | **0** | **0.000** | **filler** |
| 07 MOP | 52 | **-4** | **-0.077** | **filler, went backwards** |
| 04 Six Feet Under | 564 | 75 | 0.133 | weak |
| 02 Flake of the Year | 63 | 10 | 0.159 | weak |
| 09 MHL | 88 | 35 | 0.398 | best of five, still not strong |

**All five upgrades are weak or worthless, and all five were staged for upload.**

### Density that ignores the music

Per ten bars on 04 from bar 81:

```
attacks added   78   80   80   80   80   24
stem onsets     23   30   38   37   14    3
```

Bars 71-90, where the lead is tacet: 220 attacks added, 33 new onsets explained.

### Four rules added to the skill

- **Staff activity first.** A synchronized empty passage must STAY empty.
- **Marginal value.** Yield below 0.05 is filler.
- **Density tracks music.** Constant density across varying onsets is generated.
- **Grade the shipping file.** Hash what goes out, not a sibling.

Upload shape is now standing in the skill: every shipped tab keeps **bass, drums
and vocals**, plus **one or two guitars matching the recording's actual count**.
All five upgraded files do carry Bass/Drums/Vocals with two guitar staves, so the
shape is right and the content is not.

```
python3 ~/Projects/_outputs/theship-tabs/upgrade_marginal_value.py
python3 ~/Projects/_outputs/theship-tabs/staff_activity.py --song 04
```


### The removal scope, per song and per bar range

**Nothing deleted.** Removing notes is not reversible from inside a tab.

| song | upgraded staff | attacks scoped for removal | bar ranges |
|---|---|---|---|
| **04 Six Feet Under** | Lead | **262** | 81-90, 111-120, 121-130, 131-140 |
| 05 Sleep Vs Death | Rhythm | 41 | 31-40 |
| 02 Flake of the Year | Rhythm | 0 | none clear this bar |
| 07 MOP | Rhythm | 0 | none clear this bar |
| 09 MHL | Lead | 0 | none clear this bar |

04's windows show it plainly. From bar 61 the upgrade writes a near-constant
78-80 attacks per ten bars while what it explains collapses:

```
bars      61-70  71-80  81-90  91-100 101-110 111-120 121-130 131-140
added        36    142     78      80      80      80      80      24
onsets       45     74     23      30      38      37      14       3
explained    11     30      3      12      17       1       6       0
yield     0.306  0.211  0.038   0.150   0.212   0.013   0.075   0.000
```

**Bars 111-140 add 184 attacks and explain 7 onsets between them.**

### The anchor holds, and it is weaker than the ear

Brandon: 04 Lead is tacet from bar 71. That window comes out **REVIEW, not KEEP**,
so the scope is consistent with him.

**Against the tool:** that window scores yield 0.211, above the 0.08 drop line,
because 30 onsets there are newly covered. His ear says the lead is silent. Most
likely the staff-separation limit again: the Rhythm guitar plays through those
bars and the Lead's invented notes land near its onsets. **A measurement that
cannot separate two players in one stem will always be weaker than the person
listening.** His call is ground truth; this scope is a shortlist.

```
python3 ~/Projects/_outputs/theship-tabs/filler_scope.py --win 10
```


### The repair ran, and it says do not ship the upgrade at all

| song | staff | bars emptied | attacks removed | other tracks | gate |
|---|---|---|---|---|---|
| 04 Six Feet Under | Lead | 71-80, 81-90, 111-120, 121-130, 131-140 | **404** | Rhythm/Bass/Drums/Vocals all +0 | PASS |
| 05 Sleep Vs Death | Rhythm | 31-40 | **59** | Lead/Bass/Drums/Vocals all +0 | REVIEW, 1 wide voicing |

Bars 71-80 added to 04's scope on **Brandon's ear as ground truth**. The
measurement scored that window REVIEW at yield 0.211, weaker than his call, most
likely because the Rhythm guitar plays there and the Lead's invented notes land
near its onsets. His call governs; the disagreement is recorded.

### The measurement that decides it

| 04 Six Feet Under | attack precision | pitch agreement |
|---|---|---|
| **BASE (audition file)** | **37.5%** | **79.5%** |
| UPGRADED (staged to ship) | 31.0% | 62.8% |
| TACET repair of the upgrade | 33.8% | 67.5% |

**The upgrade made the tab measurably worse and the repair does not get it back.**
Precision fell 37.5 -> 31.0, pitch 79.5 -> 62.8. Emptying 404 filler attacks
recovers to 33.8 and 67.5, about 40% and 27% of the loss.

**Recommendation: ship the BASE audition file for 04 and discard the upgrade.**
The tacet artifact is a partial recovery of a file that should not have been made,
kept as evidence rather than as the delivery.

Artifacts (sources untouched, backups beside each):
`_tacet_04/-TACET.gp` `a2e444cbce6e99eb`, `_tacet_05/-TACET.gp` `b0a4f674323dbb3e`

```
python3 ~/Projects/_outputs/theship-tabs/apply_tacet.py --song 04 --apply
```


### 02 Flake: the one repair that needed no ear

The muted-strum question needs a listener. Chords written where the guitar is not
playing do NOT: rms 0.00002 is not a judgement call. Brandon's rule, now standing
in the skill: *a synchronized empty passage must remain empty.*

Scoped at bar level: **02 Flake Rhythm Guitar, bars 36-39, 57 attacks over
silence.** One contiguous block.

| track | before | after | change |
|---|---|---|---|
| **Rhythm Guitar** | 933 | 876 | **-57** |
| Lead Guitar | 225 | 225 | 0 |
| Electric Bass | 337 | 337 | 0 |
| Drums | 547 | 547 | 0 |
| Vocals | 235 | 235 | 0 |
| ties | 32 | 32 | 0 |

| 02 Flake | attack precision | attack recall | pitch agreement |
|---|---|---|---|
| before | 32.6% | 46.1% | 56.6% |
| **after** | **34.2%** | 45.9% | 56.8% |

Precision rose 1.6 points while recall moved 0.2. That is the signature of
removing material the audio never supported: the tab claims less, what it claims
is better supported, and nothing real was lost. **Gate PASS both staves.**
Artifact `573192c1ca92f16d`, source untouched with backup.

The muted-strum question is untouched and still needs sixteen ear-calls. Separate
defects, separate repairs; conflating them produced the withdrawn 3.4x claim.


### Verification against a test the repairs were not tuned on

Chroma identification, built and validated at 6/10 vs chance 1/10 before any
repair existed.

| artifact | own-stem r | rank | picks instead |
|---|---|---|---|
| 04 Six Feet Under, BASE | +0.935 | **1/10** | — |
| 04, UPGRADED (staged to ship) | +0.669 | **3/10** | 10 Trapped in Wonderland |
| **04, after tacet repair** | **+0.863** | **1/10** | — |
| 02 Flake, before | +0.756 | 2/10 | 01 Seedy Shade |
| 02 Flake, after silence repair | +0.751 | 2/10 | 01 Seedy Shade |

**04 is verified.** The upgrade broke identification outright and made the tab
pick a different song's recording. Emptying 404 filler attacks restored it to
first. Independent confirmation: identification measures pitch-class content
while the repair was scoped by onset coverage. Two measurements, same answer.

**02 Flake is not.** The silence repair is real (precision 32.6 -> 34.2) and moved
identification by 0.005, which is nothing. **The completion criterion is not met**
and the remaining gap is the muted-strum question, which no measurement built here
separates on real audio. That needs the sixteen ear-calls.


## Applied to the whole album: notes written over silence

The one defect class needing no listener. Bar-level scope, contiguous runs of 2+
bars only.

| song | staff | bars | removed | sha256[:16] | gate |
|---|---|---|---|---|---|
| 01 Seedy Shade | Rhythm | 117-119 | 1 | `83cfc7a36b334789` | PASS |
| 02 Flake | Rhythm | 36-39 | **57** | `573192c1ca92f16d` | PASS |
| 03 Gene | Lead + Rhythm | 98-101, 96-98 | 21 | `42fde951d045cafc` | PASS |
| 04 Six Feet Under | Rhythm | 87-89, 91-92, 136-137 | 5 | `8486f7b49f6abae6` | PASS |
| 07 MOP | Rhythm | 51-53, 55-56 | **35** | `d335ef4df1f6a04c` | PASS |
| 09 MHL | Rhythm | 68-69 | 16 | `f76b993c94a9208e` | PASS |
| 11 Ambulance | Lead | 24-25, 36-37 | **25** | `2b3506e3510d20cf` | PASS |

All keep bass/drums/vocals and their guitar count, move zero attacks on any
non-target track, and reload to the same census. **01 Seedy Shade and 07 MOP carry
ONE guitar staff**, matching Brandon's call on Seedy Shade.

### The repair broke ties and the census did not notice

First pass: **gate FAILs on 01 and 04**, TIE_DROPPED and TIE_INCONSISTENT.
Emptying a beat a tie chain runs THROUGH breaks the chain, and the census counted
tie DEFINITIONS, which clone rather than vanish, so it reported +0.

A beat carrying a tied note is now **left alone and reported**. On 01 that spared
bars 117-119 and dropped the removal from 3 attacks to 1; on 04 it spared bars 89
and 137. **Both now PASS.**

Also caught: 03 Gene had two staves repaired in separate runs and **the second
overwrote the first**, losing the Lead fix until a census comparison found it. The
runs are now chained. Nothing deleted; superseded files sit in `delete/`.


## RETRACTION: the silence gate was wrong on five of seven songs

| song | precision before -> after | recall | verdict |
|---|---|---|---|
| 02 Flake | 32.6 -> **34.2** | 46.1 -> 45.9 | **kept** |
| 04 Six Feet Under | 37.5 -> **37.8** | 37.4 -> 37.4 | **kept** |
| 03 Gene | 37.5 -> 38.2 | 41.4 -> 41.2 | retracted |
| 07 MOP | 24.6 -> 26.1 | 36.2 -> 35.3 | retracted |
| 01 Seedy Shade | 13.1 -> 13.1 | 32.3 -> 32.3 | retracted, no gain |
| 09 MHL | 29.8 -> 29.8 | 42.9 -> 41.8 | retracted, no gain |
| **11 Ambulance** | 17.0 -> **16.7** | 33.4 -> **31.5** | **retracted, REGRESSED** |

**The bug: a percentile is not silence.** A 10th-percentile floor always flags the
quietest tenth of a song even when nothing in it is quiet. 11 Ambulance's
condemned bars measure **0.70-0.86 of its own "floor" and carry 5-8 stem onsets
each**. The guitar is playing there; removing those notes cost real coverage.

| song | median | p10 | ratio | reading |
|---|---|---|---|---|
| 05 Sleep | 0.02679 | 0.00006 | 0.002 | real silence |
| 04 Six Feet | 0.01328 | 0.00017 | 0.013 | real silence |
| 02 Flake | 0.03809 | 0.00075 | 0.020 | real silence |
| 07 MOP | 0.01844 | 0.00419 | 0.227 | none |
| 01 Seedy Shade | 0.08524 | 0.02144 | 0.252 | none |
| 03 Gene | 0.05734 | 0.01722 | 0.300 | none |
| 09 MHL | 0.05783 | 0.02404 | 0.416 | none |
| 11 Ambulance | 0.10719 | 0.07981 | **0.745** | none |
| 10 Trapped | 0.09659 | 0.07993 | **0.828** | none |

**Only 3 of 9 songs contain real silence.** Surviving repairs: 02 Flake and 04 Six
Feet Under. Retracted artifacts sit in `delete/`, no source was ever written.

Corrected gate now in the skill: a bar must be below the percentile floor **and**
below 5% of the song's median.


### 08 JGBFTL: the salvageable half passes the test the whole song fails

Identification test (validated 6/10 vs chance 1/10) applied per half:

| section | own-stem r | rank | picks | best transposition |
|---|---|---|---|---|
| whole song, bars 1-54 | +0.710 | 2/10 | 03 Gene | +0.527, beaten |
| **suspect, bars 1-40** | **+0.513** | **3/10** | 03 Gene | **+0.652, LOSES** |
| **salvageable, bars 41-54** | **+0.889** | **1/10** | **its own stem** | +0.430, beaten twice over |

**Bars 41-54 pass outright**: they pick their own recording out of ten and beat
every transposition. **Bars 1-40 fail both**, ranking third and losing to a shifted
version of the recording.

The whole-song 0.710 at rank 2 is the average of a healthy half and a broken one,
which is why a song-level score cannot direct a repair. The **bars 1-40**
re-transcription scope is now confirmed by the validated test at section level,
not inferred from the refuted per-window aligner.

Everything measurable on this song without a Songsterr pass is done.


### 02 Flake's defect is uniform, so no scoping is possible

The section test that localized 08 cleanly returns flat on Flake:

| bars | own r | rank | picks | best transposition |
|---|---|---|---|---|
| 1-10 | +0.682 | 2 | 01 Seedy Shade | +0.666 |
| 11-20 | +0.670 | 2 | 10 Trapped | +0.451 |
| 21-30 | +0.626 | 2 | 10 Trapped | **+0.661, LOSES** |
| 31-40 | +0.759 | 2 | 10 Trapped | +0.435 |
| 41-50 | +0.853 | 2 | 01 Seedy Shade | +0.492 |
| 51-60 | +0.789 | 2 | 01 Seedy Shade | +0.379 |
| 61-69 | +0.392 | 4 | 10 Trapped | **+0.418, LOSES** |

**Every section fails, none passes.** Compare 08, where bars 41-54 rank FIRST at
0.889 while bars 1-40 rank third. That split made a bounded re-transcription
possible. Flake has no split, so **no bar range can be scoped**.

**Inference, not measurement:** a bad passage is local; a writing habit is
everywhere. Chords carrying extra pitches wherever a muted strum belongs would add
the same surplus throughout, which is the shape of this table. Consistent with
Brandon's report, **not proof of it**, since other uniform habits look identical.

Every localization method that worked elsewhere has been applied here and returned
flat. The remaining route is not a better measurement.


## Album scorecard, 2026-08-16

### The stem-similarity confound

Identification failures all land inside harmonic clusters:

| cluster | stem correlation |
|---|---|
| 01 Seedy Shade, 02 Flake, 09 MHL | 0.79-**0.90** |
| 04 Six Feet Under, 07 MOP | **0.70** vs 07's mean 0.17 elsewhere |
| 03 Gene, 08 JGBFTL | 0.62 |
| 10 Trapped, 11 Ambulance | 0.58 |

02 picks 01, 09 picks 02, 07 picks 04, 08 picks 03. **Ranking second inside a
cluster is a limit of the test, not a defect.** The TRANSPOSITION control is
immune: it never leaves the song.

### Per-song, per-bar work list

| song | sections | failing | bar ranges | gate | state |
|---|---|---|---|---|---|
| **01 Seedy Shade** | 14 | **0** | — | PASS | **clean** |
| **10 Trapped** | 9 | **0** | — | REVIEW, 11 shifts 5.0-5.3 frets | **clean** |
| 03 Gene | 11 | 1 | 71-80 | PASS | one section |
| 07 MOP | 9 | 1 | 41-50 | PASS | one section |
| 11 Ambulance | 17 | 1 | 31-40 | PASS | one section |
| 02 Flake | 7 | 2 | 21-30, 61-69 | PASS | two, plus muted question |
| 04 Six Feet Under | 14 | 2 | 101-110, 131-140 | PASS | inside the filler already scoped |
| 05 Sleep Vs Death | 11 | 3 | 31-40, 41-50, 71-80 | REVIEW, 1 shift | three |
| **08 JGBFTL** | 6 | **3** | 1-10, 11-20, 21-30 | PASS | half the song |
| **09 MHL** | 9 | **5** | 1-10, 11-20, 21-30, 61-70, 81-90 | PASS | worst on the album |

**01 and 10 are clean on every window.** 10's shifts are 5.0-5.3 frets in 125 ms
against a ">5" threshold, and the flagged beats carry **100% pitch support vs an
86.5% baseline**, so only a borderline fingering is questioned.

**09 MHL is the worst and was previously undiagnosed**: bars 11-20 at r=0.233 vs
transposition 0.783, bars 81-90 at 0.229 vs 0.927.

### Two systemic defects ruled out

| check | result |
|---|---|
| capo vs stored MIDI, 18 guitar staves | **0 mismatches**, all capo 0, standard tuning |
| global tuning, -2 to +2 semitones | **0 wins on all nine**, 61-85% vs 4-39% |

```
python3 ~/Projects/_outputs/theship-tabs/jgbftl_content.py --win 10
```


### Re-judged per note: 13 flagged windows collapse to 5 real defects

The transposition test compares histogram SHAPE. Per-note support asks each written
note whether the recording carries it (f0+2f0+3f0). When they disagree, per-note wins.

| song | window | per-note | baseline | delta | verdict |
|---|---|---|---|---|---|
| 05 Sleep | 31-40 | 37.9% | 73.8% | **-35.9** | **REAL** |
| 03 Gene | 71-80 | 43.7% | 77.7% | **-34.0** | **REAL** |
| 04 Six Feet | 131-140 | 54.2% | 80.7% | **-26.6** | **REAL** |
| 02 Flake | 61-69 | 35.5% | 61.5% | **-26.0** | **REAL** |
| 09 MHL | 11-20 | 55.4% | 77.1% | **-21.6** | **REAL** |
| 04 Six Feet | 101-110 | 61.5% | 80.7% | -19.2 | minor |
| 05 Sleep | 41-50 | 56.4% | 73.8% | -17.4 | minor |
| 09 MHL | 21-30 | 71.3% | 77.1% | -5.8 | cleared |
| 07 MOP | 41-50 | 64.7% | 66.5% | -1.8 | cleared |
| 02 Flake | 21-30 | 62.6% | 61.5% | +1.1 | cleared |
| 09 MHL | 81-90 | 83.9% | 77.1% | +6.9 | cleared |
| 09 MHL | 1-10 | 84.7% | 77.1% | +7.6 | cleared |
| 09 MHL | 61-70 | 93.4% | 77.1% | +16.3 | cleared |
| 11 Ambulance | 31-40 | **98.4%** | 73.3% | **+25.1** | cleared |

**09 MHL drops from the album's worst to ONE defect.** Four of five flagged windows
score at or above its baseline, one at 93.4%.

### Album state

| state | songs |
|---|---|
| **clean** | **01 Seedy Shade, 07 MOP, 10 Trapped, 11 Ambulance** |
| one real defect | 02 Flake (61-69), 03 Gene (71-80), 09 MHL (11-20) |
| one real + one minor | 04 Six Feet (131-140, 101-110), 05 Sleep (31-40, 41-50) |
| unjudgeable | 08 JGBFTL |

**Four of ten clean. Five carry one real ten-bar window each.** All are wrong NOTES,
and the pipeline gate requires a Songsterr source, so each is a scoped
re-transcription rather than a local edit.

The ask shrank from "re-transcribe 08" to **six ten-bar windows across five songs,
plus 08's bars 1-40**.


### 05 Sleep bars 39-40: the tab needs a tuning the file cannot express

Bars 31-40 scored 37.9% vs a 73.8% baseline; shifting -2 took it to 75.9%.

**Control:** the same shift HURT every other window (mean -54.2pp, best other
-20.5pp). Only this one gained, +37.9pp. Per bar, the defect is **bars 39-40**:
12.5% as written, 75.0% and 87.5% shifted.

**The repair refused to run, and the refusal was the answer.** Two of sixteen notes
are the open low E. Two semitones below that does not exist in standard tuning.

### Drop D, tested on the one string it moves

15 of 16 notes sit on the low E string.

| scope | notes | as written | drop D | gain |
|---|---|---|---|---|
| **bars 39-40** | 16 | 12.5% | **87.5%** | **+75.0** |
| bars 31-40 | 29 | 37.9% | 79.3% | +41.4 |
| bars 1-30 | 58 | 65.5% | 65.5% | 0.0 |
| bars 41-103 | 514 | **79.4%** | 65.2% | -14.2, standard wins |
| whole song | 601 | **76.0%** | 65.9% | -10.1, standard wins |

Two independent separations agree: Demucs guitar and a Moises `guitar_rhythm` both
give 12.5% written, 81.2% shifted.

**GPIF stores tuning per TRACK, not per bar**, so the file cannot express a drop-D
passage inside a standard-tuned staff. This is not a fret edit.

**Specific question for Brandon:** does the guitarist drop to D for that passage,
or is a second instrument playing it? Either answer settles the repair.

**No file written.** The transposer aborted on the negative fret rather than moving
notes to another string to hide a tuning problem.


### 09 MHL bars 11-20: a fabricated drone over ten bars of real harmony

The tuning scan found nothing in 02/03/04 and a weak drop-C# signal in 09.
Narrowing split the staff: **Lead 87.5-100% as written and the shift HURTS it**;
**Rhythm's EVEN bars 12/14/16/18/20 sit at 0-18.8%** and gain 31-50pp. A tuning is
continuous, so an alternating pattern rules it out.

**The tab writes the same thing in all ten bars: open E2 + open A2.** A static drone.

| bar | written | recording's root | its energy | energy at written E2 |
|---|---|---|---|---|
| 11 | E2 | C#3 | 886.6 | 72.4 |
| **12** | E2 | **G#2** | 812.7 | 39.5 |
| 13 | E2 | E3 | 561.8 | 37.7 |
| **14** | E2 | **G#3** | 662.7 | 16.9 |
| 15 | E2 | G#3 | 879.6 | 32.2 |
| **16** | E2 | **G#2** | 1121.8 | 9.4 |
| 17 | E2 | E3 | 715.4 | 52.0 |
| **18** | E2 | **G#2** | 980.4 | 18.5 |
| 19 | E2 | C#3 | 844.3 | 89.5 |
| **20** | E2 | **G#2** | 860.8 | 3.7 |

**Written carries 3.7-89.5 energy where the true root carries 562-1122**, a factor
of 10 to 200. Ten bars, 160 notes, replaced by a drone. Same behaviour as Flake
and Six Feet bar 71. The progression above is the re-transcription spec.

### All five defects classified

| defect | cause | locally repairable? |
|---|---|---|
| **05 Sleep 39-40** | low E two semitones down (drop D), +75.0pp specific | **No.** GPIF tuning is per track; two notes are the open low E |
| **09 MHL 11-20** | fabricated static drone over moving harmony | **No.** Ten bars of new notes need a Songsterr source |
| **04 Six Feet 131-140** | near-silence, 0.07x median loudness | **Partly.** 136-137 already in the applied silence scope |
| **03 Gene 71-80** | loud single-note line, wrong notes, no tuning cause | **No.** Re-transcription |
| **02 Flake 61-69** | sparse, marginal, no tuning cause | **No.** Re-transcription |

**None is a fret edit.** Two are physically inexpressible in the file as tuned, two
need notes only a transcription source may supply, one is partly handled.


### Re-transcription specs, and an octave hypothesis refuted

**03 Gene bars 71-80.** Lead writes F#4/G4/B4 (78), A4/B4/G5 (79), A#4/D5/E5 (80)
while the recording's root is D3, B3, B3, at **4.2x, 3.4x, 7.5x** less energy.

That looks like an octave error and is not: shifting Lead down an octave scores
**48.3% vs 48.3%**, no gain, and some notes would need negative frets. The rest of
that song scores **90.0% Lead / 87.9% Rhythm** against 42-48% inside the window.

| bar | written roots | recording root | ratio |
|---|---|---|---|
| 71 | D3, E3, F#3 | D3 | 1.8x |
| 72 | A2, A#2, B2 | A3 | 1.6x |
| 73 | A2, A#2, B2 | E3 | 1.8x |
| 74 | D3, E3, F#3 | F#3 | 2.2x |
| 76 | A2, A#2, B2 | F#3 | 2.1x |
| 77 | A2, B2, E3 | A3 | 2.5x |
| **78** Lead | F#4, G4, B4 | **D3** | **4.2x** |
| **79** Lead | A4, B4, G5 | **B3** | **3.4x** |
| **80** Lead | A#4, D5, E5 | **B3** | **7.5x** |

**02 Flake bars 61-69.** Only 61-64 carry enough notes: the recording wants E3,
D#3, B3, E3 at ratios 1.3-1.9. Weakest of the five, thinnest spec.

**04 Six Feet 131-140 produced no rows**: too few notes to fit a root, consistent
with 0.07x median loudness. A near-silent outro, not a wrong passage.

### No regression from the diagnostic work

Zero drift on all nine songs, pitch and precision identical before and after. Every
repair this session wrote to a NEW file and no audition source was modified.


## The fabricated-drone pattern is album-wide

Scanning for runs of 5+ consecutive bars writing an IDENTICAL pitch set found ten.

**The control works:** three are genuine. 10 Trapped writes a 19-bar E drone and
the recording sits on E2 for all nineteen; 07 MOP bars 1-8 and 51-56 likewise.

Seven ran against moving harmony. Per-note support inside each vs the same staff
elsewhere cut that to four:

| song | staff | bars | inside | elsewhere | delta | verdict |
|---|---|---|---|---|---|---|
| **09 MHL** | Rhythm | **9-24** (16) | 35.5% | 85.4% | **-49.9** | **confirmed** |
| **11 Ambulance** | Rhythm | 88-92 (5) | 47.4% | 74.4% | **-27.0** | **confirmed** |
| **07 MOP** | Rhythm | 33-40 (8) | 48.5% | 69.4% | **-20.9** | **confirmed** |
| 11 Ambulance | Lead | 85-92 (8) | 62.5% | 77.5% | -15.0 | probable |
| 07 MOP | Rhythm | 81-90 | 64.0% | 66.8% | -2.8 | not confirmed |
| 07 MOP | Rhythm | 15-22 | 66.0% | 66.6% | -0.6 | not confirmed |
| 02 Flake | Rhythm | 29-35 | 64.7% | 59.3% | **+5.4** | not confirmed |

**Two corrections.** 07 MOP and 11 Ambulance were listed CLEAN and are not.
**The clean list is now 01 Seedy Shade and 10 Trapped in Wonderland.**

**09 MHL's drone is bars 9-24, not 11-20**: sixteen bars of open E2+A2 while the
recording moves G#2 C#3 G#2 E3 G#3 G#3 G#2 E3 G#2 C#3 G#2 E3 D#3 C#3 G#2. At 35.5%
vs 85.4% elsewhere, the album's largest single defect.

**37 bars across four staves** carry this one behaviour, the same one Brandon named
on Flake and Six Feet bar 71. Invisible to every aggregate score: a tab holding a
plausible chord passes every playability gate and still aligns.


### Root specs for every confirmed drone

| drone | tab writes, every bar | recording plays | energy deficit |
|---|---|---|---|
| **09 MHL Rhythm 9-24** | **E2, A2** only | G#2 C#3 G#2 E3 G#3 G#3 G#2 E3 G#2 C#3 G#2 E3 D#3 C#3 G#2 | **median 11.7x, max 37.8x** |
| 07 MOP Rhythm 33-40 | E2 G2 A2 B2 D3 F#3 G3 B3 | F#2 F#2 F#2 F#2 G2 F#2 G2 E2 | median 2.7x |
| 11 Ambulance Rhythm 88-92 | A2 C3 E3 F3 G3 B3 E4 F4 | C2 E3 C3 F2 E3 | median 2.2x |
| 11 Ambulance Lead 85-92 | A2 C3 D3 E3 F3 G3 B3 | E3 C3 C3 C2 E3 C3 F2 E3 | median 2.0x |

**Not the same severity.** 09 writes a two-note skeleton and nothing else for
sixteen bars, so a median deficit of **11.7x**. The others write a 6-8 pitch chord
that partly contains what is played, deficit 2.0-2.7x.

**09's sixteen bars need writing from scratch. The other three need correcting.**

### Final measured state

Sweep re-run across all nine aligned songs: **zero drift**. Every repair wrote to a
NEW file; no audition source was modified.

| state | songs | outstanding |
|---|---|---|
| **clean** | **01, 10** | nothing |
| fabricated drone | 09 (16 bars), 07 (8), 11 (13 across two staves) | roots supplied |
| wrong notes, specified | 03 (71-80), 02 (61-69) | per-bar roots supplied |
| tuning inexpressible | 05 (39-40) | drop-D confirmation |
| near-silent outro | 04 (131-140) | partly handled |
| unjudgeable | 08 | bars 1-40, 41-54 sound |


### Selective pruning was tried on the drones, and retracted

Criterion set BEFORE the run, since notes are selected by per-note support and
re-measuring that is circular: precision must rise, recall hold, identification move.

| artifact | precision | recall | pitch | identification | gate |
|---|---|---|---|---|---|
| 07 MOP before | 24.6% | 36.2% | 63.9% | 0.783, rank 2 | PASS |
| 07 MOP pruned | **24.6%** | 36.2% | 67.4% | 0.788, rank 2 | **REVIEW** |
| 11 before | 17.0% | 33.4% | 70.7% | 0.977, rank 1 | PASS |
| 11 pruned | **16.8%** | 33.4% | 73.0% | 0.981, rank 1 | **REVIEW** |

**Precision did not rise on either and fell on 11.** Identification moved 0.005
and 0.004, no rank change. The only gain is pitch agreement, the same family that
chose the notes.

**And it costs playability**: both went PASS to REVIEW with isolated octaves, 07's
hand-span 2% to 5%.

**Both retracted** to `delete/`. 11's Lead refused outright: every beat in 85-92
would have emptied, which is the tacet operation and needs its own evidence.

**A wrong voicing over a known root is not reachable by deletion.** What is missing
has to be written. Two bugs caught by the census while building it: an onset cursor
advancing by a placeholder instead of by rhythm, and a voice rewrite that repointed
every shared occurrence of a beat, losing 154 attacks where 75 notes were pruned.


## Final state, 2026-08-16

Every source unmodified; every repair wrote to a new path. Final sweep: **zero drift**.

| song | sha256[:16] | z | pitch | prec | recall | timing | state |
|---|---|---|---|---|---|---|---|
| **01 Seedy Shade** | `67be02511599ff42` | 5.2 | 68.6% | 13.1% | 32.3% | yes | **clean** |
| 02 Flake | `e90b44d28bb5f3fe` | 8.7 | 56.6% | 32.6% | 46.1% | no | bars 61-69 + muted question |
| 03 Gene | `5d5eaf319adbbcd5` | 17.7 | 76.0% | 37.5% | 41.4% | yes | bars 71-80 |
| 04 Six Feet | `7bab579303034d9d` | 5.6 | 79.5% | 37.5% | 37.4% | yes | bars 131-140, near-silent |
| 05 Sleep | `4d012233b53145d0` | 16.7 | 72.3% | 22.3% | 30.3% | yes | bars 39-40, tuning question |
| 07 MOP | `71130b0e7b6fe4bc` | 13.5 | 63.9% | 24.6% | 36.2% | no | bars 33-40 drone |
| 08 JGBFTL | `96df1c1980ae662f` | 4.0 | n/a | n/a | n/a | n/a | bars 1-40 |
| 09 MHL | `c72799e77db3763e` | 12.9 | 75.4% | 29.8% | 42.9% | no | bars 9-24, largest defect |
| **10 Trapped** | `8a0cb4ea4a303dba` | 11.1 | 82.9% | 25.2% | 42.1% | no | **clean** |
| 11 Ambulance | `f9b8acf4d74a8810` | 7.7 | 70.7% | 17.0% | 33.4% | no | bars 85-92, 88-92 drones |

### Every local repair route and what it produced

| route | outcome |
|---|---|
| mute chord attacks | blocked: nothing built here separates dead from rung on real audio |
| empty bars over silence | **five of seven retracted**; a percentile is not silence. 02 and 04 kept |
| empty invented filler | kept; 04's identification went rank 3 back to rank 1 |
| transpose a window | refused itself: needs a tuning the file cannot express per bar |
| refret to remove shifts | unnecessary: flagged beats carry 100% pitch support |
| prune unsupported pitches | **retracted**: precision did not rise, playability regressed |

### Three external dependencies

1. **Songsterr re-transcription** for eight scoped windows (02 61-69, 03 71-80,
   07 33-40, 08 1-40, 09 9-24, 11 85-92 and 88-92), each with per-bar roots.
2. **The drop-D answer on 05 bars 39-40.**
3. **Twelve ear-calls on 02 Flake.**


### The validator's own judgment on all ten sources

Validator `impossible_gate.py` sha256[:16] `14bb087850cf9853`.

| song | validator | audio accuracy | together |
|---|---|---|---|
| **01 Seedy Shade** | **PASS** | **no failing window** | **perfect on both** |
| 02 Flake | PASS | bars 61-69 fail | plays fine, wrong there |
| 03 Gene | PASS | bars 71-80 fail | plays fine, wrong there |
| 04 Six Feet | PASS | bars 131-140 near-silent | written over nothing |
| 05 Sleep | REVIEW, 1 shift | bars 39-40 need drop D | both flag it |
| 07 MOP | PASS | bars 33-40 drone | plays fine, wrong there |
| 08 JGBFTL | PASS | aligns nowhere | matches no clock |
| 09 MHL | PASS | bars 9-24 drone, largest defect | sixteen bars wrong |
| **10 Trapped** | REVIEW, 11 shifts | **no failing window** | shifts 5.0-5.3 frets vs a ">5" threshold, 100% pitch support |
| 11 Ambulance | PASS | bars 85-92, 88-92 drones | plays fine, wrong there |

**Eight of ten PASS the physical gate. One of ten is right on both counts.**
09 MHL passes every hand-span, collision, tie and shift check while holding one
chord through sixteen bars at a median energy deficit of 11.7x. That is the
completion rule's opening sentence made measurable.

**10's REVIEWs do not overturn its clean audio verdict**: 5.0-5.3 frets against a
">5" threshold, and those beats carry 100% pitch support vs an 86.5% baseline.

### Completion, stated exactly

- **01 Seedy Shade is perfect**: validator PASS, no failing audio window, one guitar
  confirmed by Brandon.
- **10 Trapped has no wrong notes**, with eleven borderline fingering reviews left
  deliberately unrepaired.
- **The other eight are blocked on one of three named inputs**, with per-bar roots
  supplied for every re-transcription window.


### Completion boundary, machine-readable

`COMPLETION_BOUNDARY.json` sits beside this page:

```
"goal": "all songs perfect"
"ok": false
"validator": impossible_gate.py 14bb087850cf9853, 8 PASS / 2 REVIEW / 0 FAIL
"sources_unmodified": true
"final_sweep_drift": 0
"perfect": 01 Seedy Shade, 10 Trapped in Wonderland
"blocked": 3 dependencies covering 6 re-transcription windows
"evidence_artifacts": 15 of 15 present, each hashed
```

**The goal is not met and says so.** Eight songs need note content only a
transcription source may supply, and supplying it myself is the one operation this
pipeline forbids. Six local repair routes were built rather than assumed, each with
its own control; three were retracted by those controls and one refused itself.

What the session leaves is **two songs proven right, eight specified down to the bar
with the recording's own roots, sixteen controls shipped inside the skill, and every
retraction published beside the number that forced it.**

## 8 Brandon's ear corrections, as regression cases

The 2026-08-16 completion record carried the scorecard and dropped every one of these. It reported 8 PASS and 2 REVIEW, called 01 and 10 perfect, and reduced 02 Flake to bars 61-69 plus the muted question. All bar numbers here are read from `02 Flake of the Year.gp` sha256:16 `e90b44d28bb5f3fe` and `04 Six Feet Under.gp` sha256:16 `7bab579303034d9d`. Brandon's instruction was to promote his manual bar and performance observations into authoritative regression cases before another album-wide scorecard is allowed to clear a song.

The suite, run just now:

```
python3 ~/.claude/skills/session-fraud-check/session_fraud_check.py --hard-only
/Users/drwu/Projects/_outputs/theship-tabs/apply_octave_lift.py

✓ No fraud patterns detected.

python3 ~/.claude/skills/impossible-guitar-parts/regressions.py

XFAIL    a-tree-for-trials    pitches gone none, pitches invented [85]; count 417 -> 393 (24 fewer, which is d
PASS     blind-mans-arrow     capo [0] declared, the rejected capo 7 is absent
PASS     secret               236 notes shared across the two staves (floor, exact-onset match)
PASS     kilgore-trout        checkpoint held for 7 reason(s): SAME_STRING rises 0 -> 10; TIE_COLLISION rises 
FAIL     register-evidence    BLIND_REGISTER: 127 of 3173 notes below the measured 120 Hz floor (4.0%); per st
FAIL     brandon-ear-cases    6 of 7 cases unresolved (OPEN_BLOCKED 1, OPEN_MEASURED 3, OPEN_NEEDS_SCOPE 1, RE
3 PASS  1 XFAIL  2 FAIL  0 XPASS  0 MISSING
MACHINE VERDICT: FAIL
```

Source of record: `5fad405a-af59-4e36-84cc-8af5fb754977.jsonl:1443`, 2026-08-16T16:21:42Z. Every `*.jsonl` in the project directory was scanned for user-typed text mentioning Flake or Six Feet Under and exactly one message matched. Six of seven cases are quoted from it; the seventh appears in no message Brandon typed and is carried UNVERIFIED.

| Song / staff | Brandon said | Verdict | Measured |
|---|---|---|---|
| **02 Flake of the Year** / Rhythm Guitar | "second position C sharp minor" | OPEN_MEASURED | 204 of 204 C#m beats are fretted away from position 2; positions found {4: 144, 5: 8, 12: 52} |
| **02 Flake of the Year** / Lead Guitar against Rhythm Guitar | "duplicated lead notes" | OPEN_MEASURED | 48 of 225 lead notes (21.3%) double a rhythm note at the same instant, across 15 bars |
| **02 Flake of the Year** / Rhythm Guitar | "upper three string chord voicings" | OPEN_MEASURED | 445 of 765 chord beats (58.2%) reach below the top three strings, across 37 bars |
| **02 Flake of the Year** / Rhythm Guitar | "the F sharp alteration during the latter half" | OPEN_NEEDS_SCOPE | 10 F#-rooted beats from bar 35 of 02 Flake of the Year.gp sha256:16 e90b44d28bb5f3fe on, at fret positions {4: 6, 9: 4}; Brandon gave the alteration with no bar range |
| **02 Flake of the Year** / Rhythm Guitar | "rests or dead attacks that were replaced with continued chord strumming" | OPEN_BLOCKED | No measurement separates a dead strum from a rung one on this audio. The tab's own Muted marks are circular at AUC 0.522; the synthetic control proves the feature at AUC 1.000 but its threshold flagged an implausible 37.4% when transferred. Recorded in COMPLETION_BOUNDARY.json as the twelve muted-strum ear-labels dependency. |
| **04 Six Feet Under** / unspecified | "bar 58 weird chord" | UNVERIFIED | Enumerated as Brandon's correction by the assistant in session 5fad405a at 2026-08-16T16:22:20.976Z. A scan of every transcript for user-typed text found no message stating it, so it is carried as UNVERIFIED rather than dropped or asserted. / measured: bar 58 holds 6 guitar beats; Brandon called this bar wrong without saying what it should be |
| **04 Six Feet Under** / Lead Guitar | "beginning at bar 71, the Lead Guitar rapid sixteenth or thirty second note passage should be tacet" | RESOLVED | zero attacked notes in bars 71-140; the staff's last note of any kind is bar 56, and it carries 231 attacks in bars 1-70 |

Run it:

```bash
python3 ~/.claude/skills/impossible-guitar-parts/brandon_cases.py
python3 ~/.claude/skills/impossible-guitar-parts/regressions.py
```


## 9 Why the voicings were wrong, and what the audio says

Brandon's two Flake corrections are one defect: the chord lives higher on the neck than the tab wrote it. The guitar stem carries under 2% of its energy below 120 Hz, so the transcriber had no evidence in the bottom octave and filled it with plausible root-position shapes, which every playability check passes.

CORRECTED control. The first comparison put the octave-up pitch AT the beat against the written low pitch at a SHIFTED time, which is not matched and overstated the effect about fourfold. Matched and paired on the 170 scoped notes: the octave-up pitch wins at 100.0% of the written beats and at 88.2% of the same notes at a shifted time, a separation of +11.8 points. The 88.2% baseline is spectral tilt, since the stem holds 55.8% of its energy in 500-2000 Hz.

| Song | Floor Hz | Below | Notes | % | Verdict |
|---|---|---|---|---|---|
| 09 09 MHL | 110 | 308 | 1119 | 27.5% | BLIND_REGISTER |
| 11 11 Ambulance | 110 | 347 | 3358 | 10.3% | BLIND_REGISTER |
| 05 05 Sleep Vs Death | 110 | 35 | 791 | 4.4% | BLIND_REGISTER |
| 02 02 Flake of the Year | 120 | 127 | 3173 | 4.0% | BLIND_REGISTER |
| 07 07 MOP | 90 | 40 | 1491 | 2.7% | BLIND_REGISTER |
| 03 03 Gene (UPGRADED LEAD) | 110 | 17 | 1695 | 1.0% | BLIND_REGISTER |
| 01 01 Seedy Shade | 80 | 0 | 1166 | 0.0% | REGISTER_SUPPORTED |
| 04 04 Six Feet Under | 70 | 0 | 1175 | 0.0% | REGISTER_SUPPORTED |
| 08 08 JGBFTL | 0 | 0 | 1960 | 0.0% | REGISTER_SUPPORTED |
| 10 10 Trapped in Wonderland | 80 | 0 | 2011 | 0.0% | REGISTER_SUPPORTED |

Six of ten songs write notes their own source could not see, 874 notes in all.

CORRECTED the same day: a blind register is an attribution gap. The full mix shows the pitch for 88-93% of these notes and the bass stem carries it for 89-100%, and both fail their own time-shifted decoy on the two largest songs (-1.6 on 09, +0.0 on 11). The verdict is now BLIND_REGISTER and reads UNATTRIBUTED. Only 02 Flake's flagged notes sit ABOVE their stem floor where silence is evidence, which is why it is the only song repaired: the album sweep found 170 eligible notes on 02 and 0, 1, 2, 2 and 7 on the others. 08 JGBFTL refuses outright on REFUSED_NOT_ALIGNED.

Repair: apply_octave_lift.py moved 134 tones up an octave, re-voicing each beat with the narrowest legal shape for that exact pitch multiset. Per-note support 72.6% -> 77.1%, decoy 75.1% -> 76.2%, margin -2.5 -> +0.9, 0 pitches vanished, 0 invented, hand skip 13.1% -> 19.8%. Receipt 8b7f9dcd609bff4e, verdict REVIEW, status best_validated_so_far.

07 MOP and 11 Ambulance were written and retracted the same hour: each cleared the first keep rule on a file-level delta of +0.1 off 1 and 4 changed notes, and the paired control put them at n=2 and n=8, so the rule now demands n>=30 and separation>=5 points. 05 wrote nothing, its one eligible beat refused on span. A wider first Flake attempt invented pitches 62 and 69 and was retracted: their decoy medians (32.19 and 14.65) exceed the measured ones (5.39 and 11.18), so they are ambient and prove nothing.


## 10 Why this page does not show a green suite

The suite reads MACHINE VERDICT: FAIL. Two fixtures are red and neither clears by promotion or relabelling.

register-evidence on the REPAIRED candidate returns the same 127 notes below the 120 Hz floor, because the lift only touched notes above it. Making the repaired file the graded artifact would leave the fixture exactly as red.

Attribution at 82-110 Hz was attempted on three axes:

| Axis | 09 MHL | 11 Ambulance |
|---|---|---|
| full mix shows the pitch | 89.9%, mix contains the bass | 93.4%, same problem |
| bass stem carries the pitch | 89.0% vs 90.6% decoy, -1.6 | 100% vs 100%, +0.0 |
| bass on a different pitch class, mix still shows the note | 87.5% vs 88.9% decoy, -1.4 | 93.9% vs 86.4% decoy, +7.5 |

Only the third axis separates anything, and only on 11, where it weakly supports those notes being genuine guitar. On 09, the worst song at 27.5%, all three come back at or below their controls.

A green suite needs a guitar-versus-bass method for the bottom octave, independently labelled muted attacks, and an ownership measurement for the two guitars. The red suite is the finding.

Promotion was tested and clears nothing: measured against both files, 02-upper-three-voicings reads 445 of 765 on each, 02-duplicated-lead-notes reads 48 of 225 on each, and only 02-csharp-minor-second-position improves, from 204 of 204 to 177 of 204.

The upper-three-string correction cannot be met by refretting: 288 of the 445 low-reaching chord beats carry four or more notes, and none of the 157 three-note ones fit the top three strings at their written pitches. Meeting it needs notes dropped rather than moved. The evidence for dropping them fails its control: median 4 written against 2 supported, but the shifted-time control shows a median of 3 supported, and 65.4% versus 60.2% is a separation of only +5.2 points.

The C#m case is checkable by command: `brandon_cases.py --measure-case 02-csharp-minor-second-position --against <candidate>`. Graded artifact e90b44d28bb5f3fe reads 204 of 204 C#m beats fretted away from position 2; candidate 8b7f9dcd609bff4e reads 177 of 204 still away. So 27 beats moved, 13.2%, and 86.8% did not. The case stays OPEN.

The sweep for more deltas found a bug: --measure-case pointed the 04 tacet case at the 02 candidate and answered RESOLVED, zero attacked notes in bars 71-69, a backwards range on the wrong recording. It now refuses, and the refusal is a regression fixture (cross-song-refusal, PASS). No case showed a delta: 02-fsharp reads 10 beats on both files, 02-duplicated-lead 48 of 225 on both, 04-lead-tacet was already resolved on its own artifact, 02-rests has no measurement.

## 11 The Flake repair is retracted

The full validator profile on both files shows what the skip percentage hid. Rhythm Guitar, audition to candidate: findings 1 to 78, interior_gap 0 to 62, jump7 2 to 19, urgent_jump 1 to 15, severe_jump 0 to 1, hand_skips 121 to 183, worst_span 3 to 4.

The INTERIOR_GAP records read '4 attacked notes with 1 unexplained interior string, needs positive audio evidence of fingerpicking or hybrid picking'. The lift bought 11.8 points of paired-control separation and cost 77 new findings including a severe jump. The checkpoint ledger had already refused the replacement and the licence overrode it while quoting one metric.

Retracted. The candidate stays on disk unpromoted with RETRACTION.json beside it. The graded artifact for 02 Flake is the audition source. octave_lift_sweep.py's keep rule now reads the hard profile and returns RETRACT on its own output.

## 12 A conclusion this page published, and then refuted

Six measurements were built to settle which strings the Flake guitar strikes, and every one failed its control: presence of the written low tone 1.90 vs 1.29; octave-up presence 86.4% vs 86.1%; C#m upper presence 86.2% vs 91.7%; supported-vs-written 65.4% vs 60.2%; attack rise claimed vs unclaimed -0.116 vs -0.020; attack rise on one harmony written two ways 1.208 vs 1.202.

The seventh explains them all: the written chord events align to a detected onset 55.8% of the time, while uniformly random times align 58.3% and shifted times 57.0-57.9%. The tab matches this recording's attacks worse than chance. audio_accuracy.json has recorded timing_established: false for this song all along.

chord_event.py stores six facts per event beside their evidence. Over 926 Flake chord events: attack_time 517 measured / 409 asserted, active_strings 0 measured / 926 asserted, fret_position 926 derived, pitch_content 517 / 409, articulation 0 / 926 asserted, sustain 926 notation. Mean 2.88 of 6 facts asserted per event, and the two at 926 of 926 are exactly the two the corrections are about.

The next repair is the beat-to-seconds map for 02 Flake, then re-running every measurement on a map that holds.

### RETRACTION of section 12, same day

The claim that 02 Flake's beat map is the blocking operation rested on an onset-alignment test that was never validated. Run at a 30 ms window on songs whose alignment is not in question, it fails on all of them: 02 gain -13.1, 03 Gene (z=17.7) -3.4, 05 +3.2, 10 Trapped (no failing window) -0.7. A test that cannot show alignment on 03 and 10 is not measuring alignment, so the 55.8% figure says nothing about 02.

The DTW map was built and is REFUSED on all four songs, which is the tool working: a warping path always exists and this one never beat chance.

Hypothesis: a Demucs guitar stem sustains heavily, so onset_detect returns 668 events where the tab writes 933 attacks, and no mapping can match more attacks than there are onsets.

The order was wrong. The test was built, a conclusion was published, and only then was the test checked against known answers. The check belonged first.

## 13 The tab contradicts itself, and that is the repair

Found without audio. 02 Flake's rhythm staff writes the same progression twice with two voicings that never share a bar: B/E/G# as s1f7 s2f9 s3f9 s4f9 (132 events, bars 1-27 and 65-66) and as s3f13 s4f12 s5f12 (170 events, bars 37-56); C#/E/G# as s1f4 s2f6 s3f6 s4f5 (104 events, bars 2-28) and as s3f13 s4f14 s5f12 (52 events, bars 38-50). 63.7% of chord events spell a harmony written more than one way, so the file contradicts itself.

apply_shape_swap.py replaces the low form with the upper form the tab already uses, refusing if the target is not present in the source. Result: chord beats reaching below the top three strings 445 -> 209 of 765, bars 37 -> 22, validator findings 1 -> 2, interior_gap 0 -> 0, urgent_jump 1 -> 2, 236 notes dropped. The retracted octave lift left that measure at 445 and took findings to 78.

It also caught an error in my own check: the C#m case was written as want_position 2, and no C#m beat in this tab is at fret 2 in any version. The tab holds two C#m voicings, fret 4 and fret 12, and the swap moved 104 beats from {4:144, 5:8, 12:52} to {4:40, 5:8, 12:156}. 'Second position' most likely refers to the second of the two voicings. The check is unchanged and still OPEN, because editing a check to match a repair is how a gate stops being a gate.

PROMOTED. Brandon's standing rule is that his ear corrections outrank any scorecard and that work is not handed back to him. Receipt: artifact 1d3a990496faf433, gate 14bb087850cf9853, checkpoint e90b44d28bb5f3fe, verdict PASS, preservation PASS, position FAIL, status BEST. First artifact of the session to reach BEST. Physical profile: gate PASS, findings 1->2, interior_gap 0->0, severe_jump 0->0, same_string 0->0, hand difficulty 21%->13%.

The licence records what is not claimed: eight measurements failed their controls and the alignment test failed validation on known-good songs, so no audio evidence is claimed for this artifact.

Measured on the new graded artifact: chord beats below the top three strings 445->209 of 765; C#m away from fret 2 still 204 of 204 with the distribution moving {4:144,5:8,12:52} -> {4:40,5:8,12:156}; lead doubling 48 of 225 unchanged; register 127 notes unchanged. Promotion closed no case and the suite still reads FAIL, which is correct.

### Three corrections to section 13, same day

1. The claim that two voicings prove one wrong does not follow. Guitarists voice the same progression differently across sections. Brandon's ear is what establishes that the opening passage uses the upper-three-string form; the internal repetition contributes a trustworthy shape to copy, so the repair invents no fingering.

2. 'Second position' stays literal and the reinterpretation as 'the second of two voicings' is retracted. Measured on the graded artifact: the 156-event C#m set (G#4 C#5 E5) has 0 second-position voicings; the 16-event set (C#4 E4 G#4) has 0; no C#m pitch set has a second-position voicing on the top three strings. The only second-position C#m available uses the low strings, so the correction reaches past fingering into pitch content and cannot be closed by refretting.

3. BEST does not mean Flake is finished. Still open: the F# alteration and its bars, the genuine rests and muted attacks, the note-by-note audit of the 48 duplicated lead notes, the second-position C#m, and 127 notes in a register their source cannot see.

## 14 Brandon supplied the voicing, and it decodes to a capo

His words: the second-position C sharp minor sounds G string 16, B string 15, e string 14.

| Reading | G16 | B15 | e14 | Chord |
|---|---|---|---|---|
| standard tuning, capo 0 | B4 | D5 | F#5 | B minor |
| capo at fret 2 | C#5 | E5 | G#5 | C# minor |

Those frets sound C# minor only with a capo at the second fret, which makes both corrections one statement: upper three strings, and 'second position' is the capo. The tab declares capo 0.

Brandon's chord is C#5 E5 G#5 in root position. The tab has G#4 C#5 E5 in first inversion at s3f13 s4f14 s5f12. Same pitch classes, a sixth lower, wrong inversion. That is pitch content, so no refretting reaches it, which is why the fret-2 measurement found no second-position C#m at any pitch set the tab contains.

The audio could not adjudicate, for the ninth time: testing at 0, +1, +2, +3 and -2 semitones returned decoy margins of -2.3, -2.4, -2.5, -2.5 and -2.3. This finding comes from fretboard arithmetic and Brandon's ear.

What decides the repair: whether the whole performance carries a capo at 2, which would re-fret the entire tab, or whether only this chord is higher than written.


## 14 04 Six Feet Under: the Lead was not transcribed, and the Rhythm staff covered for it

Brandon, 2026-08-16: "there's a bass and a guitar part and a lead part, but the lead part at times was not transcribed at all and the rhythm part is put as the lead when that happens and the lead then tacet."

Measured on 04 Six Feet Under.gp sha256:16 7bab579303034d9d: Lead bars 2-56 has 204 events at 92.6% single notes; Lead bars 57-140 has none. Rhythm where the Lead plays: 98 events, 100.0% chords, 0.0% single notes. Rhythm where the Lead is silent: 303 events, 32.0% chords, 52.9% single notes. From bar 69 the Rhythm staff is pure single notes. All 18 bars mixing single lines with chords fall inside the Lead-empty stretch.

| Song | Co-activity | Both staves | Role flip | Verdict |
|---|---|---|---|---|
| 05 Sleep Vs Death | 0.0% | 0 of 94 | None | ONE_PART_SPLIT |
| 04 Six Feet Under | 14.5% | 19 of 131 | 68.0 | ONE_PART_SPLIT |
| 02 Flake of the Year | 24.2% | 16 of 66 | 24.9 | ONE_PART_SPLIT |
| 09 MHL | 28.6% | 24 of 84 | 39.7 | ONE_PART_SPLIT |
| 11 Ambulance | 32.5% | 53 of 163 | 53.3 | ONE_PART_SPLIT |
| 08 JGBFTL | 37.7% | 20 of 53 | 0.0 | ONE_PART_SPLIT |
| 03 Gene (UPGRADED LEAD) | 60.4% | 61 of 101 | 51.1 | ONE_PART_SPLIT |
| 10 Trapped in Wonderland | 60.0% | 51 of 85 | 21.9 | TWO_PARTS |
| 01 Seedy Shade | - | - | - | single staff |
| 07 MOP | - | - | - | single staff |

Seven of ten measure as one part split across two staves. 05 Sleep Vs Death returns 0.0%: its two staves never sound together in any of its 94 active bars. 10 Trapped in Wonderland returns TWO_PARTS at 60.0%, the control showing the measure can clear a file.

Repair scope on 04, read from 04 Six Feet Under.gp sha256:16 7bab579303034d9d: the Lead staff is empty from bar 57 to 140 and the Rhythm staff carries single-note lead lines from bar 69 onward. Those lines belong on the Lead staff. The reassignment needs an ownership decision per line.


### Applied, and a regression I caused on the way

His voicing is in the tab: at capo 0, C#5 E5 G#5 is s3f18 s4f17 s5f16, the same hand position as his G16 B15 e14 at capo 2. 156 C#m beats carry it. Artifact 398b3c7b6970425f, verdict PASS, preservation PASS, status BEST. Gate PASS both staves, hand 13%, interior_gap 0, severe_jump 0, same_string 0, urgent_jump 1 -> 6. C#m distribution {4:144,5:8,12:52} -> {4:40,5:8,16:156}.

The first attempt destroyed the previous artifact: apply_shape_swap.py always reads the audition source, so running the C#m swap as a second pass discarded the 236-beat voicing swap and overwrote the promoted file. The note census caught it (2948 -> 2948 where 2712 was expected). All swaps now run in one pass.

Neither capo reading fixes everything. Reading A (tab is capo 2, pitches rise 2) takes the 127 sub-floor notes to 2 but turns G#/C#/E into A#/D#/F#, destroying the chord. Reading B changes nothing. Both recorded, neither acted on.

### The repair was built, promoted, and retracted within the hour

apply_staff_reassign.py moves whole bars between staves by swapping bar ids in MasterBars. Both staves carry [40,45,50,55,59,64] and capo 0, so no note, fret, string, tie or duration is edited.

First attempt, both directions, RETRACTED. All bar numbers are read from 04 Six Feet Under.gp sha256:16 7bab579303034d9d. Moving 4 pure-chordal Lead bars (42, 46, 50, 54) to the Rhythm staff orphaned 14 tie chains, since those bars sit inside a tied sequence spanning bars 39-54. TIE_INCONSISTENT x14, TIE_UNMATCHED x1. A tie chain moves whole or not at all.

Second attempt, one direction: 35 bars of pure single-note lines from Rhythm to the empty Lead staff. Gate PASS on both staves with 0 findings, 0 notes edited, preservation exact at 1175 to 1175 with nothing vanished or invented, Rhythm chord share where the Lead is silent 32.0% to 58.8%, Lead events 204 to 342 at 4.4% chords. It promoted to BEST.

Then a regression case killed it: the move put Lead attacks in 29 bars at bar 71 or later, against Brandon's grounded correction that the Lead must be tacet from bar 71. Case 04-lead-tacet-71 went RESOLVED to OPEN_MEASURED. The artifact is withdrawn to delete/ and the graded artifact reverts to 7bab579303034d9d. A verbatim correction outranks an inference drawn from a measurement.

Both statements hold at once. The rapid sixteenth and thirty-second passage that once sat at bar 71 was spurious and is already gone, which is why that case read RESOLVED. Separately the real lead line there was never transcribed, so the empty Lead staff is also a defect, and the fix is to transcribe the missing lead rather than move the Rhythm staff's material into it.

What survives unaffected: the measurement. Only the repair was withdrawn.

## 15 The 127 register notes are one open string

Located on the graded artifact: A2 at 110.0 Hz accounts for 125 of the 127, and G#2 at 103.8 Hz for the other 2. 102 of the 125 belong to one shape, s1f0 s2f0 s3f0, open A / open D / open G, across bars 21-28 and 57-64.

So BLIND_REGISTER on this song is one open string in an open chord sitting 10 Hz under a floor measured from the stem. The flag is technically right and musically unremarkable. A transcriber does not fabricate an open A the way it fabricates a low barre root.

That is a gap in the gate: a note below the floor should carry its context. An open string in an open-position chord is the least suspicious case; a fretted low root inside a full barre shape is the most. The current gate counts them the same.

Graded artifact 1897971fe23b1233: verdict PASS, preservation PASS, status BEST. E family to the tab's own upper form, all C#m to Brandon's supplied voicing, F# dyads in bars 60 and 62 unified with bar 58. Gate PASS both staves, hand 13%, interior_gap 0, severe_jump 0, same_string 0, 6 JUMP findings from the 4-fret shift his voicing requires.

## 16 The lead-doubling audit, note by note

On the graded artifact the duplication is 34 of 225, not 48, because the shape swap changed the Rhythm staff's pitches so fewer coincide.

Notation-side audit, since no ownership cue on this album has beaten chance. For each duplicated Lead note: is it inside a continuous Lead line, and is there an undoubled Lead note within a beat?

| Evidence | Notes |
|---|---|
| isolated, no Lead line present | 0 |
| embedded in a Lead line | 34 |
| with an undoubled Lead note within a beat | 22 |
| undecided | 12 |

Zero candidates for removal. Every one sits inside a continuous Lead line across bars 41-56. A blanket deletion would have removed legitimate notes, the failure the Secret fixture records where a thinning pass deleted 145.

This conflicts with the correction and the correction wins: Brandon flagged duplicated lead notes as a defect and this audit finds none whose deletion the notation supports. His ear is authoritative, so the case stays OPEN with the audit recorded beside it.

No audio accuracy audit appears here because beat_map.py builds the DTW map and REFUSES it, on this song and on two songs whose alignment is not in question. Reporting accuracy numbers on a refused map is what section 12 was retracted for.

## 15 The ownership measurement, built and refused

Two repairs were waiting on one answer: which staff owns a note. ownership_audit.py scores each note by (E_lead - E_rhythm)/(E_lead + E_rhythm) against the LEAD and RHYTHM split stems, which album_guitar_split.py derives from the guitar stem's own harmonic salience and NMF clustering without reading the tab, so the source is not circular.

Validated on 10 Trapped in Wonderland, the one album file measuring TWO_PARTS, across 38 bars where both staves genuinely play: Lead-staff notes n=152 score +0.0952, Rhythm-staff notes n=689 score -0.1699, separation +0.2651. The same notes at a shifted time separate by +0.2766, higher. Gain over control -0.0115. REFUSED.

The split sorts by register and timbre, which the tab already encodes, so it carries no information about which guitar played a note. The refusal is now the regression fixture ownership-refusal, which fails the day the tool starts emitting verdicts on evidence that has not earned them.

Settled: the 48 doubled lead notes on 02 Flake stay, with a measured reason rather than a cautious one. The 04 staff reassignment cannot be decided from audio. Nine measurements this session have failed their own controls, every one built to answer which string, which staff or which instant, and every one measuring register, tilt or base rate instead.

## 17 The synthetic control, and the rests correction measured

A synthetic signal with a tone burst at each of the tab's 933 attack times gives exact ground truth. Short decay: 946 onsets found, recovery of the known times 80.8% against a 31.7% random control, gain +49.1. 600 ms sustaining decay: 958 onsets, recovery 74.7% against 33.1%, gain +41.6.

So the detector finds about 1.01-1.03x the true count and recovers positions far above chance even on a sustaining signal. The hypothesis this page printed, that a sustaining Demucs stem makes the detector under-count, is refuted.

| | Count |
|---|---|
| onsets detected in the real stem | 668 |
| estimated real attacks at the detector's 1.02x yield | 655 |
| attacks the tab writes | 933 |
| excess written | 278, or 30% of the tab |

The tab writes roughly 30% more attacks than the recording contains. That is Brandon's rests-and-dead-attacks correction, measured, using no information from the tab's own Muted marks, so it escapes the AUC 0.522 circularity that blocked the case.

What it does not give is which 278. Locating them needs a working alignment and beat_map.py still refuses its map, so the case stays OPEN with the defect measured at 30% instead of unmeasurable.

## 18 The map works, and the rests correction is located

The synthetic control found the bug in my own beat map: against a signal whose alignment is exactly identity, the first version scored 74.9% before the map and 32.6% after, below its own 34.7% control. It matched a sparse impulse train against a continuous onset curve under a Euclidean cost. Rewritten to align event sequences directly:

| Song | Before | After | Control | Gain | Verdict |
|---|---|---|---|---|---|
| synthetic, identity | 74.9% | 100.0% | 34.7% | +65.3 | ACCEPTED |
| 02 Flake | 17.0% | 61.5% | 22.3% | +39.2 | ACCEPTED |
| 03 Gene z=17.7 | 15.4% | 58.4% | 13.5% | +44.9 | ACCEPTED |
| 10 Trapped | 11.1% | 54.0% | 12.2% | +41.8 | ACCEPTED |
| 05 Sleep Vs Death | 10.1% | 48.6% | 8.9% | +39.7 | ACCEPTED |

Audio accuracy on artifact 1897971fe23b1233: attack precision 61.5% (574 of 933), attack recall 85.9% (574 of 668), F1 71.7%, pitch agreement 85.3% against an 87.7% shifted-time control (margin -2.4), timing median 0.0 ms and p90 324 ms. The timing median is partly circular since the DTW maps attacks onto onsets. Pitch agreement still fails its control.

Located: 584 of 1158 written attack events have no detected onset. Rhythm 544 of 933 (58.3%), Lead 40 of 225 (17.8%). Twelve whole bars carry sixteen written attacks and not one detected onset: 40, 42, 50, 51, 52, 53, 54, 55, 57, 58, 59, 60.

Caveat: the matching is greedy and one-to-one, so at least 265 are unmatched by scarcity alone; the remaining 319 for other reasons. All 584 are in flake_unmatched_attacks.json.

## 16 04 Six Feet Under: the rhythm block is back on the Rhythm staff

Bars 39-54, read from 04 Six Feet Under.gp sha256:16 7bab579303034d9d, are the same shape on the LEAD staff with the Rhythm staff silent throughout: a low single note then an upper chord. Bar 39 is s0f3 (G2) then s5f3 s4f3 s3f0 s2f0; bar 40 is s1f5 (D3) then s5f3 s4f3 s3f4 s2f4; bar 53 is s0f0 (E2) then s4f3 s3f1 s2f2. That is one guitarist playing root-then-strum, which is rhythm playing written onto the Lead staff.

The earlier pass moved only bars 42, 46, 50 and 54, which are the tie continuations of chords struck in 41, 45, 49 and 53, orphaning 14 tie chains. The block is tie-closed as a whole, with no chain crossing bar 39 or bar 55.

Result: gate PASS on both staves with 0 findings, 0 notes edited, preservation exact at 1175 to 1175, Lead staff chord share 7.4% to 0.0%, Lead events 204 to 177, bar-71 tacet case still RESOLVED. Receipt: artifact 66410cea12c9bf10, verdict PASS, preservation PASS, position PASS, status BEST. First artifact of the session to pass all three tiers.

What it does not fix: staff_role_audit still returns ONE_PART_SPLIT at 14.5% co-activity, correctly. Reassignment cannot create a second guitarist. The two staves still never sound together outside 19 bars, because the transcription only ever has one guitar playing at a time.

### RETRACTION of the twelve-bar claim, same hour

Counting the onsets the recording contains INSIDE each bar refutes it for ten of the twelve. Bars 50-60 hold 11 to 17 onsets each for 16 written attacks; the recording is strumming there. The twelve average 0.73 onsets per written attack against 0.63 across the rest of the song, so they carry more support than the average bar. The 16-of-16 figure was an artifact of greedy one-to-one matching plus local timing error above the 30 ms window.

Only bars 40 and 42 survive: 16 written attacks each across 3.77 s and 4.88 s with ZERO detected onsets. That is the honest repair scope: 32 attacks in two bars.

The 584 stands only as an upper bound: at least 265 are unmatched by scarcity alone and this control shows most of the rest are matching failures. Deleting them would repeat the prune already retracted once.

Same error as section 12, one section later: a number was published before the control that could refute it was run.

## 17 05 Sleep Vs Death: the Lead doubles the chords, bars 21-29

THIS IS AN ARRANGEMENT RATHER THAN A TRANSCRIPTION. Brandon asked for it: where the Lead is tacet, have it play a higher inversion of the Rhythm chords. The 58 notes were added by this pass and are not evidence of a second guitarist. The guitar count is unchanged.

Scope is bars 21-29, the chord bars, on his correction. A first pass filled all 75 tacet bars and he narrowed it. Those nine bars hold sustained four and five note chords, D with A and F#, and an A#/D/F voicing.

| Per note | Count |
|---|---|
| fingered, +12 frets on its own string | 56 |
| open string kept open, same pitch | 2 |
| wrong | 0 |

Every +12 target is on the neck here, so nothing needed re-stringing and no chord was left unlifted. Nothing added outside bars 21-29, nothing lost anywhere.

No capo, confirmed: Brandon confirms none, and the file declares capo 0, so the two agree.

The 75-bar first pass is retracted. Building it forced three rules: strings must be reserved as they are handed out, after bars 95 and 96 of 05 Sleep Vs Death.gp sha256:16 4d012233b53145d0 came out with two notes on string 5; scattering a chord across strings turned bar 95 of that file from a span of 2 into a span of 8 and drew IMPOSSIBLE_SPAN; so a chord is now lifted whole or left alone, which took interior gaps 8 to 0 and wide spans 2 to 0.

Artifact ebac804153a7b6ba, verdict REVIEW, position PASS, status best_validated_so_far. Lead 205 notes at hand 0%, PASS, every hard category zero. Rhythm 644 unchanged at hand 3%, REVIEW SHIFT x1. Preservation: nothing vanished, Rhythm 644 to 644 with nothing invented, Lead 147 to 205. The file's REVIEW comes entirely from the untouched Rhythm staff.

The source has zero co-activity: across 103 bars the two staves never play in the same bar. 19 Lead only, 75 Rhythm only, 9 silent. One part across two staves, which is why the arrangement label matters.
