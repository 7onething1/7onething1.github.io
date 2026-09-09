# Keep It Greasey: three verdicts

Live: https://7onething1.github.io/zappa-keep-it-greasey-three-verdicts/


Song `s604777`, copy `s6862054` at `r8972975`, part 8 "Vinnie Colaiuta".
Pre-registration `PREREGISTRATION_clap_verse1.md`, sha256
`75e1ff71ce266ae0c064f03f7a6de47cbfcda4565fbacbba2ede862701a84fb8`, written with no audio yet read.

**Repairs applied: 0.** Every reason below is evidence, never omission.

---

## Reproduction check, run first

An independent walk of the published GPIF returns **4,948 note instances, 629 ghost flags all
on MIDI 38, dynamics ppp 12 / pp 94 / p 376 / mp 33 / mf 114, 21 events on MIDI 39, 1,312
kicks**. Every figure matches the published bundle from a separate route, so the file on disk
is the file that was measured.

---

## KIG-M003 — RESOLVED. The premise does not survive.

The queue item said 114 of the 629 ghost flags "resolve to dynamic mf", that the two encodings
disagree, and that nothing on hand decides which is meant.

**The 114 came from a resolved field, never from an authored one.**

| Field | Where it lives | How many carry a value |
|---|---|---|
| Songsterr `velocity` | on a beat, **sticky and sparse** | **989 of 3,756 beats** |
| GPIF `<Dynamic>` | on a beat, written by the exporter | **3,756 of 3,756 beats** |

The GP exporter resolves the sticky Songsterr value onto every beat. Reading the export gives
each ghost a dynamic whether or not the transcriber wrote one there.

Splitting the 114 by whether the transcriber actually authored a mark at that beat:

| | count |
|---|---|
| authored `velocity: "mf"` on that beat | **3** |
| inherited mf from an earlier, unflagged beat | **111** |

And the control, the other 515 ghosts:

| authored dynamic at a ghosted beat | ppp | pp | p | mp | **mf** | f | ff | fff |
|---|---|---|---|---|---|---|---|---|
| count | 6 | 69 | 262 | 23 | **0** | 0 | 0 | 0 |

**Across the whole staff the transcriber authored 363 dynamics at ghosted notes and 360 of them
are quiet. Three are mf.**

### The null, per Gate N3

| | |
|---|---|
| base rate of mf among the 989 authored dynamics, staff-wide | **44.3%** |
| observed at ghosted notes | **3 / 363 = 0.83%** |
| ratio observed over chance | **0.019x** |
| expected under independence | **160.8**, observed **3** |
| binomial, two-sided | **p = 3.0e-86** |

The two encodings do not disagree. They agree to an extreme degree, and the apparent conflict
was an artifact of reading a resolved field as an authored one.

### What Weinberg adds

`notation-evidence-gate --symbol accent_vs_ghost`: under the PAS standard the drumset ghost is
a **notehead change**, never a point on a dynamic ladder. Guitar Pro naming the flag
`AntiAccent` invites the ladder reading and the ladder reading is wrong. A ghost notehead
sitting inside an mf passage is well-formed notation, so even the remaining 3 are not a defect.

### The transcriber's own words

Bar 22, beat 0, carries a text annotation in the file:

> *"There is no kick on beat one of the first bar and a couple others. Variations of ghost notes
> among the snare and hi-hat at the end of each bar"*

The person who wrote the flags was tracking them per bar in this exact section.

**Verdict: no change. `Note 659` is not edited, so the mandatory copy-on-write never runs.**
The three authored-mf ghosts sit at **bars 119, 124 and 227** and are recorded here rather than
repaired.

---

## KIG-M002 — RESOLVED. No change, and the change would be invisible anyway.

### One, the figure is deliberate

The 21 GM 39 events are not scattered. They sit inside the two odd-meter verses named by the
score's own section markers.

| Bars | Section | Signature | Claps | Metrical slot |
|---|---|---|---|---|
| 22-32 | **Verse 1** | 19/16 | one per bar, 11 total | 16th **13-14 of 19** in ten of eleven bars |
| 42-44 | **Verse 2** | 21/16 | 2-3 per bar, 8 total | 16ths **7, 17, 19 of 21**, repeated |
| 65, 82 | — | 4/4 | 1 each | 16th 11 of 16 |

The snare never thins inside those bars, running 4 to 8 events per bar throughout, so the claps
are an added layer rather than a substitution. A stray GM number does not land on the same
subdivision of eleven consecutive bars.

### Two, the change is invisible to every reader

The GPIF instrument set draws both on the same row with the same glyph:

| Articulation | Name | StaffLine | Noteheads |
|---|---|---|---|
| 0 | Snare (hit) | **3** | noteheadBlack noteheadHalf noteheadWhole |
| **84** | **Hand Clap (hit)** | **3** | **noteheadBlack noteheadHalf noteheadWhole** |
| 34 | Snare (side stick) | 3 | noteheadXBlack — a distinguishable option that was not used |

Songsterr agrees from its own side: all 21 claps and all 1,423 snares sit on `string: 1.5`, and
the note schema has no notehead field.

**Put to the eye, with a control.** Bar 22 rendered from the published file, from a scratch copy
with the clap rewritten to a snare, and from a scratch copy with the clap rewritten to a crash:

| Render | Differing pixels against the published bar |
|---|---|
| clap rewritten as **GM 38 snare** | **0** |
| clap rewritten as **GM 49 crash**, positive control | **5,467**, bbox x 1399-1575, y 420-725 |

The two files differ by sha256 and the two render pages differ by sha256, and the control fires
at the clap's own position, so the pipeline sees edits. Rewriting the clap as a snare produces a
**byte-identical PNG**. Nothing a reader of this tab can see would change.

### Three, no independent printed witness notates a clap

Marc Atkinson's *Rock Charts* chart is the only complete-song printed transcription on hand. Its
music key lists **T.T., S.D., B.D., H.H. hand, H.H. w/ foot, R.C., C.C. and Add'l Toms**, and
**no clap, cowbell or auxiliary lane at all**.

**Gate N7 applies and is respected.** A chart that does not notate a texture did not transcribe
it, and that is never evidence the record lacks it. The correct reading is narrower: the clap
has **no independent printed corroboration**, and it also has no printed refutation.

### Four, the audio test did not run, by its own rule

The pre-registration allowed the clap timbre test only if a target-excluded anchor passed first.
It did not. See KIG-M004 below.

**Verdict: no change.** The figure is deliberate, the edit would alter nothing visible, and
under the skill's standing rule the burden sits on the revision that changes an existing mark.
Nothing here meets it.

---

## KIG-M004 — STILL BLOCKED, and now measured against a stated bar

### The anchor attempt

Fitted on **kick and hi-hat only**, bars 22-32, 172 events. **Snare and clap never entered the
fit**, because the claps are the target and the snare shares their staff row and their stem.
Two free parameters searched over the whole 501.84 s: offset 35.980 s, scale 0.984, tolerance 50 ms, one-to-one match rate 70.3% against a 32.6% rotation-null baseline.

| Measure | Value |
|---|---|
| winner | bar 22 downbeat at **35.980 s**, scale **0.984** |
| one-to-one match, `mir_eval.onset` convention, 50 ms | **121 / 172 = 70.3%**, against a rotation-null baseline of **32.6%** |
| busiest single detected onset | **1** |
| rotation null, 2,000 draws | mean **56.0 (32.6%)**, sd 14.28 |
| gain over null | **+37.8 points**, 0 exceedances of 2,000 |
| z against the rotation null | **4.55** |

### The declared criteria, scored honestly

| # | Declared in advance | Result |
|---|---|---|
| 1 | unique maximum, no tie inside 1 match | **PASS**, 0 competing cells |
| 2 | match rate >= 2.0x the surface median | **PASS**, 2.01x |
| 3 | **z >= 5.0** | **FAIL, z = 4.11** |
| 4 | busiest single onset absorbs <= 3 | **PASS**, 1 |
| 5 | scale inside 0.94-1.06, off the boundary | **PASS**, 0.984 |

`verdict_gate.py`, the skill's own numeric engine, returns **UNDETERMINED** independently.

**Verdict: UNEVALUABLE.** The threshold was fixed in advance of the run and it was missed, so it stays where it was.

### What is worth carrying forward

The fitted 35.980 s sits within about one second of **DRUM! Magazine's printed "Verse 1 at
0:35"**, a source that never entered the fit and shares no method with it. The score's own
constant-tempo timeline says 38.217 s and drifts to 517.9 s against 501.8 s of real audio, so
the notated tempo map is the thing that is wrong, not the recording.

That agreement is recorded as **one candidate landmark**, nothing more.
`PREREGISTRATION_absolute_bar_identity.md` requires **twelve landmarks across two source
families, six each**. One is not that gate, and no bar position is claimed from it.

### What would actually unblock M004

Eleven more landmarks, from two families that stay out of the fit. The obvious second family is
sung-lyric onsets from the isolated vocals stem, and it is **unavailable from this score**: the
`newLyrics` field carries five entries and every `text` value is the empty string, so there are
no score-side lyric positions to anchor against. That family needs the lyrics entered by hand to become usable.

---

## Provenance

Onsets detected on **isolated stems**, never the mix:
`/Users/Shared/202 Keep It Greasey-D minor-142bpm-442hz/`, 44.1 kHz, 501.84 s, hop 256,
log-compressed spectral novelty per FMP 6.1.2.

| Lane | Onsets | Median peak |
|---|---|---|
| kick | 1,332 | -14.98 dB |
| snare | 1,103 | -13.00 dB |
| hat | 1,047 | -17.51 dB |
| cymbals | 450 | -18.91 dB |
| toms | 556 | -20.32 dB |

The kick count reproduces the 2026-09-07 surplus finding independently: 1,332 detected against
1,312 notated. **No threshold in this pass was fitted on the candidate window.**

---

## ADDENDUM, same session: a second landmark family, and what it moved

The first pass called the vocals landmark family unavailable because the score's `newLyrics`
field is empty. **That was a wrong reading of one closed path.** Lyric text was never what the
family needed. The Ike Willis vocal part carries **458 notated attacks across 79 bars**, with
full bar positions, and the vocals stem is isolated.

A web search confirms the song is a sung Ike Willis lead on *Joe's Garage*, so a vocal line
exists to anchor against. The score-side positions were on disk the whole time.

### Two families, fitted separately, sharing no stem and no notated part

| Family | Fitted on | Stem | Bar 22 downbeat | Scale |
|---|---|---|---|---|
| A | kick + hat, bars 22-32, 172 attacks | kick, hat | **35.980 s** | 0.984 |
| B | Ike Willis vocal part, 437 attacks | **vocals** | **36.136 s** | 0.978 |

**They disagree by 156 ms.** A 19/16 bar here runs about 2.09 s, so both land on the same bar.
DRUM! Magazine's printed marker says 0:35. The 2026-09-07 gate failed its primary
external-family requirement because lead and bass disagreed by **2.673 s**; this pair does not.

### The integer-shift contest

Each family scored at shifts of minus two through plus two bars, using that family's own events,
its own stem and one-to-one matching. Step sizes are read from the score's own bar downbeats.

| Shift | Family A, kick+hat | Family B, vocals |
|---|---|---|
| -2 bars | 67/172 (39.0%) | 132/437 (30.2%) |
| -1 bar | 88/172 (51.2%) | 118/437 (27.0%) |
| **0** | **121/172 (70.3%)** | **163/437 (37.3%)** |
| +1 bar | 79/172 (45.9%) | 130/437 (29.7%) |
| +2 bars | 73/172 (42.4%) | 139/437 (31.8%) |

**Zero shift wins separately in both families**, by **+33** and **+24** matches over the nearest
competitor. That is the condition the earlier pass failed, where kick, snare, hat and tom all
leaned to plus one bar.

### Residuals

| Family | Matched | Median absolute residual | 90th percentile |
|---|---|---|---|
| A, kick+hat | 121 | **17.6 ms** | **42.3 ms** |
| B, vocals | 163 | **28.8 ms** | **52.1 ms** |

The absolute bar identity gate asks for median under 75 ms and p90 under 150 ms. **Both families
clear both, inside the fitted span.**

### What still blocks KIG-M004, precisely

**The anchor is local and it does not extrapolate.** Carried across the whole recording it collapses to chance:

| Whole-song extrapolation | Value |
|---|---|
| offset, scale, tolerance | 35.980 s, 0.984, 60 ms |
| one-to-one kick match, against a 32.6% rotation-null baseline | 512 / 1,311 = 39.1%, ratio **1.20x, which is chance** |
| `verdict_gate.py --counts` on those numbers | **UNDETERMINED**, under the 2.0x counts-mode floor |
| predicted score end | 508.0 s against 501.84 s of real audio, drift +6.1 s |

Under Gate N4 anything under 1.5x is the null, so **this row is carried as a refutation of the
extrapolation and as nothing else**. That row says the eleven-bar fit does not reach the rest of the song, and it names no count of surplus kicks, so no repair may be built from it.

The pre-registration's own scope rule already said this: a pass validates only the span between
the first and last landmark, and **every individual flag needs anchors bracketing its own score
location**. The 32 surplus kick onsets are listed by audio time across the full 501.8 s, and the
validated span is eleven bars. **They cannot be placed from this anchor**, which is why the item
stays open rather than being closed on a number that looks confident.

Two further honest limits:

1. **The clap-test criterion 3 still fails.** z = 4.11 against a declared 5.0 on family A alone.
   The two-family agreement is a different and stronger test, and it does not retroactively pass
   a threshold that was written down and missed. **The clap timbre test still did not run.**
2. **The twelve-landmark frozen set was never built.** What ran is the integer-shift contest and
   the target-excluded check. No `ABSOLUTE_ANCHORS.csv` was hashed, so the full gate is
   **not** claimed as passed.

**Net movement on M004:** the bar identity at bar 22 now has two-family corroboration and wins its
shift contest, where it previously had neither. Placing the 32 events needs a **piecewise map with
landmarks bracketing each one**, and that is the next unit of work.

---

## ADDENDUM 2: the clap timbre test was run, under a fresh hashed pre-registration

`PREREGISTRATION_clap_verse1_v2.md`, sha256
`383fe83e7df0eab48f679220087d10e958c5149ad118e2def46b044d4525f0b7`, written with no timbre yet measured. **v1 stays failed and none of its thresholds were moved.** v2 rests on the two-family anchor at offset 35.980 s, scale 0.984, tolerance 60 ms, one-to-one match 121/172 = 70.3% against a 32.6% rotation-null baseline, an anchor that did not exist when v1 was written. It declares the same timbre thresholds v1 declared.

### The declared test returned UNEVALUABLE

Entry rule, fixed in advance: an instant enters only if a detected snare-stem onset lies within
60 ms of it.

| Population | Notated | Entered | Dropped |
|---|---|---|---|
| target, the 11 GM 39 claps | 11 | **0** | **11** |
| control, the 58 same-bar GM 38 snares | 58 | 33 | 25 |

**Zero of eleven entered, so neither the centroid nor the low-band comparison could run.** Under
the pre-registration this is **UNEVALUABLE**, and under Gate N7 it is a statement about this
detector's reach and never proof the record lacks claps.

### The post-hoc observation, and the control that killed it

**Not pre-registered, and reported because it looked like a finding.** At the same anchor (offset 35.980 s, scale 0.984, tolerance 60 ms, one-to-one match 121/172 = 70.3% against a 32.6% rotation-null baseline) the 11 clap instants scored 0 in the snare stem while the same-bar notated snares scored 33 of 58 = 56.9%, and a binomial against that rate gives p = 9.5e-05.

**That baseline was wrong and circular.** It compares beats carrying no notated snare against
beats that do. The correct control is beats in the same eleven bars that carry a kick and **no**
notated snare.

| Group, bars 22-32, snare stem, 60 ms | n | Hits | Rate |
|---|---|---|---|
| clap, no snare on the beat | 11 | 0 | **0.0%** |
| **kick-only, no snare on the beat** | 69 | 8 | **11.6%** |
| snare on the beat | 58 | 33 | 56.9% |

Clap against kick-only: **Fisher exact p = 0.5906**, binomial p = 0.6281. **The dropout is fully
explained by the beat carrying no notated snare, and it says nothing about claps.** The
observation is withdrawn.

For completeness, 9 of the 11 clap instants do carry an onset in at least one of the seven stems,
so the anchor is not wrong at those instants. Twelve of the 21 claps stack with a notated kick,
which accounts for the hits in the kick, cymbal and other lanes.

### What this changes

**Nothing.** M002's verdict was never resting on audio. It rests on the figure being deliberate,
on GM 39 and GM 38 rendering byte-identically, and on the burden sitting with the change. The
audio adds **no corroboration in either direction**, which is now measured rather than assumed.

---

## ADDENDUM 3: the piecewise map was built, and it failed its own external check

`PREREGISTRATION_piecewise_map.md`, sha256
`2e328671eaee535f85b980d6b949e2e92c0c0c3ccfcba65f9649ab0ea3e80f10`, hashed in advance of any window fit. This is the step KIG-M004 was waiting on, so it was run rather than queued.

### What was built

Sixty windows, 8 score bars wide stepping 4, bars 2 to 248. Each fitted independently on kick and
hat only, offset searched across the whole 501.84 s, scale 0.93 to 1.07, one-to-one at 50 ms.
**Fifteen windows passed** the four declared criteria and placed **64 surplus kick onsets** across
**48.3%** of the recording.

### Then the control ran, and the 64 do not survive it

The same two-family logic that made the bar-22 anchor credible was applied **per window** at each window's own fitted offset and scale, tolerance 60 ms, one-to-one, asking whether the isolated vocals stem corroborates that window's drum-fitted offset.

| Passing window | Drum offset | Vocal family's own best | Disagreement |
|---|---|---|---|
| bars 10-17 | 38.345 s | 84.500 s | **+46.155 s** |
| bars 38-45 | 69.325 s | 4.500 s | **-64.825 s** |
| bars 42-49 | 77.230 s | 77.440 s | +0.210 s |

**One of three testable windows corroborates.** The other twelve passing windows sit in the
instrumental solo and carry too few vocal attacks to test, so they are **UNEVALUABLE**, never
passing.

**A second failure is visible without any control at all.** The window for bars 210-217 fitted to offset 41.980 s, scale 1.038, tolerance 50 ms, one-to-one match ratio 2.17x its own rotation null. Bars 210 to 217 cannot begin 42 seconds into a 501.84 s recording.
**Criterion 4, monotonicity, was implemented against the full list of fitted windows rather than
against the passing subset, so a neighbour that had already failed still satisfied the check.**
That is a defect in this run's code, not in the recording.

### Verdict

**The 64 placements are withdrawn.** They rest on windows that a second family refutes in two of
three testable cases and that contain at least one physically impossible lock.

### The lesson, which is the useful output

**An 8-bar window carries too little information to lock uniquely across 501.84 s of a dense,
repetitive drum part.** Spurious locks cleared the declared 2.0x rotation-null threshold, so
**2.0x was too loose for a window this small**. Raising it alone is not the fix, because the
threshold was declared in advance and refitting it on the same data is exactly the error this
project's gates exist to stop.

What the evidence actually supports:

1. **A window must be corroborated by a second family to place anything.** Only 3 of 15
   were even testable, so the vocal part cannot carry the solo section and a third family is
   needed there.
2. **Monotonicity must be enforced against passing neighbours**, and the code must assert that a
   window's offset lies inside a plausible band for its bar range. Bar 210 at 42 s should have
   been rejected ahead of any statistic.
3. **The search should be local, not global.** A free full-song search per window invites the
   spurious lock. Constraining each window to a band around its neighbours removes the failure
   mode that produced +46 s and -65 s.

**KIG-M004 stays open.** It is no longer waiting on an idea, it is waiting on a corroboration
family that reaches the solo section and on a constrained search. No repair, no revision, and no
placement is carried forward from this run.

---

## ADDENDUM 4: a peer session reached the same finding from a third route

A separate session measured Keep It Greasey with a **two-hands playability gate**, which shares no
method with the rendering test in Addendum 2 and no method with the field reads in section 3. Its
claims were **re-derived here rather than accepted**.

### Independent read of the same part JSON

| MIDI | Name | Staff position, my read | Events |
|---|---|---|---|
| 35 | kick | string 4 | 1,311 |
| 38 | snare | **string 1.5** | 1,423 |
| **39** | **hand clap** | **string 1.5** | **21** |
| 42 | hi-hat closed | string -0.5 | 533 |
| 44 | hi-hat pedal | string 4.5 | 195 |
| 46 | hi-hat open | string -0.5 | 428 |

The peer reported hat closed at -0.5, snare at 1.5 and clap at 1.5. **Every value matches.**

### Running both versions of the gate myself

`~/.claude/skills/transcription-repair/tr_score.py` was changed by that session so `hands_gate`
keys on `hand_surface(e)`, which prefers the event's `staff_line`, rather than on `e["midi"]`. Both
versions were loaded here and run over all 4,948 events and 3,730 written instants:

| Version | over_hands | over_feet |
|---|---|---|
| fixed, staff-line keyed | **0** | 0 |
| backup `tr_score.py.bak-pre-hand-surface-2026-09-08`, pitch keyed | **3** | 0 |

The three, from the backup:

| Bar | Position | Pitches | Names |
|---|---|---|---|
| 42 | 5 | 38, 39, 42 | snare, clap, hh closed |
| 43 | 5 | 38, 39, 42 | snare, clap, hh closed |
| 44 | 5 | 38, 39, 42 | snare, clap, hh closed |

**Exactly the three beats claimed, at exactly the bars claimed.** `./run_selftests.sh` was also run
here directly and returns **ALL SUITES PASS, exit 0**.

### Why this matters for KIG-M002

Those three beats are the same collisions section 3 recorded as `(38, 39, 42)` stacks. **A third
route lands on the same fact: MIDI 39 occupies the snare line.**

Better still, the hands verdict is **robust to the ambiguity M002 left open**. If the transcriber
meant a clap struck on the snare surface, it spends one stick and the count is 0. If the
transcriber meant an overdubbed hand clap by someone else, it spends no drummer hand and the count
is 0. **Either reading gives 0**, so the pitch-keyed 3 was an artifact of the gate rather than a
defect in the tab.

**Nothing here changes M002's verdict of no change, and nothing was uploaded or revised.**

---

## ADDENDUM 5: the third family exists, and finding it moved the blocker somewhere else

Addendum 3 named the next step as **find a corroboration family reaching the instrumental solo**,
since the vocal part stops at bar 101. That search was run rather than queued.

### Two families reach the solo, and both have isolated stems already on disk

| Notated part | Total bars | Bars inside 100-240 | Stem |
|---|---|---|---|
| **Arthur Barrow, bass** | 222 | **139 of 141** | `bass` |
| **Warren Cuccurullo, part 7** | 164 | **139 of 141** | `rhythm` |
| Frank Zappa, solo | 21 | 21 | `lead` |
| Ike Willis, vocals | 79 | 2 | `vocals` |

**The "no family reaches the solo" blocker is dissolved.** Two candidates cover it, and a third
covers the solo passage itself.

### The bass cross-check, and why it is not carried as a refutation

Running the bass family against the 15 previously-passing windows made **all 15 testable**, where the vocal family could test only 3. Each window's bass fit reused that window's own scale, matched one-to-one at 60 ms tolerance with match rates of 53 to 88 of 66 to 96 attacks, and every one of the 15 disagreed with its window's drum offset by between 3.985 s and 405.500 s.

**That looks decisive and it is not, so it is not reported as one.** The window at bars 42-49 is
the single window the **vocal** family corroborated, at +0.210 s. The bass family puts the same
window +160.330 s away. **Two corroboration families contradict each other on a window that a
third family fitted**, so the disagreement locates a problem in the checking method rather than in
any one window.

### The measurement that explains it

The bass fits, each at its window's own scale and a 60 ms tolerance, were scored against their own offset surfaces, sampling 8 of the 15 windows, with the peak match count and the surface median shown side by side:

| Window | Bass attacks | Peak | Surface median | Ratio |
|---|---|---|---|---|
| 10-17 | 86 | 72 | 44.0 | **1.64x** |
| 38-45 | 69 | 55 | 35.0 | **1.57x** |
| 42-49 | 66 | 53 | 34.0 | **1.56x** |
| 102-109 | 96 | 83 | 50.0 | **1.66x** |
| 150-157 | 96 | 86 | 47.0 | **1.83x** |
| 166-173 | 96 | 87 | 46.0 | **1.89x** |
| 170-177 | 96 | 88 | 46.0 | **1.91x** |
| 174-181 | 96 | 87 | 47.0 | **1.85x** |

All eight clear the 1.5x floor, and **all eight clear it narrowly**, against a surface median
sitting near **51%**. Gate N4's own warning covers this: above a 35% null a small excess goes
significant while meaning little. Compare the whole-part vocal fit at **7.65x** and the bars 22-32
drum fit at **2.01x**.

A second contributor: the score notates **2,424 bass attacks** while the bass stem yields
**1,825 onsets**, so **599 notated attacks can never match** and a perfect map still caps near
75%. That flattens the peak toward the noise floor.

### What actually blocks KIG-M004 now

**Not family availability. Window size.** At 8 bars, the fitted family, the vocal check and the
bass check are all marginal, so the cross-check cannot adjudicate the fit. The failure is the
same one Addendum 3 named, and it reaches the **validators** as well as the fit.

The next attempt should use **windows large enough for every family to lock with a real margin**,
on the order of 30 to 40 bars rather than 8, accepting coarser bracketing in exchange for a
cross-check that can actually decide. Nothing in this addendum places any onset, and no
placement, repair or revision is carried forward.

---

## ADDENDUM 6: the velocity trap measured across four staves, and the limit on it

The peer session reproduced the sticky-velocity finding and sent a spread. **Every figure was
re-fetched here from uncredentialed CloudFront reads of the live heads, not accepted.**

**These are direct counts of a stored field, not detector output**, so no chance baseline applies
to any row: each number is how many beat objects carry the `velocity` key.

| songId | Tab | Beats carrying `velocity`, out of all beats | Peer's figure |
|---|---|---|---|
| 6862054 | Keep It Greasey, Brandon edit | **989 of 3,756** | **match** |
| 35870 | Montana | **569 of 1,435** | **match** |
| 35886 | Muffin Man | **254 of 1,133** | **match** |
| **68246** | **Alien Orifice** | **2 of 1,006** | **match** |

**Alien Orifice shows the size of the trap.** Two authored marks on the whole staff, and reading
them here gives exactly one `ff` and one `fff`. A GP export of that tab carries **1,006 resolved
values standing on 2 authored ones**.

### The limit, which matters more than the spread

**`ghost` is a NOTE field and it is NOT sticky.** This is a statement about the JSON schema, not about what the mark means: every one of these 629 sits on the **MIDI 38 acoustic snare lane** of the Vinnie Colaiuta staff, and under Weinberg the mark's meaning stays scoped to that lane. Counted on Keep It Greasey's MIDI 38 acoustic snare lane, `ghost` appears on **0 of 3,756 beats** and on **629 of 4,974 note objects**, with no carry rule, so absence on that lane means not ghosted.

**A snare-lane ghost audit off the Songsterr JSON is therefore safe in the way a dynamics audit is not.** The
KIG-M003 analysis in section 2 read `ghost` per note object and never carried it, so its 629 count
was already correct, and the sticky caution must not be extended to it.

### A scan-cap trap found alongside it

**Montana `s35870` has 18 tracks and its drums sit at index 15**, with further drum tracks at 16
and 17. A scan capped at 14 parts misses the drum staff entirely. The meta's `popularTrackDrum`
field gives the index directly and was confirmed as 15 here.

### The CloudFront path, for reproduction

`https://dqsljvtekg760.cloudfront.net/{songId}/{revisionId}/{image}/{trackIndex}.json`, where
`{image}` is the meta's `image` field, a `v0-3-2-...` string. Passing the per-track `hash` instead
returns **403** on all three tabs. Responses are gzipped.

---

## ADDENDUM 7: the window-size fix in Addendum 5 is superseded by a named method

Addendum 5 concluded that the next attempt should use 30 to 40 bar windows instead of 8. **That was
an ad-hoc patch, and a search found the method this problem already has.** It is failure mode three
in the notation evidence gate's own preamble, hand-rolling where a named method exists, and this
pass committed it.

### What was actually built here, and why it was the wrong shape

Sixty windows, each fitted by an **independent free search across the whole 501.84 s**. Nothing
tied one window's answer to its neighbour except a monotonicity check applied afterwards, which is
how a window covering bars 210-217 came back at 41.980 s. Widening the windows would reduce that
failure without removing its cause.

### The named methods

**None of the four below was run in this pass**, so for every one of them the offset, scale, tolerance and match rate are all not applicable here.

- **Multiscale DTW (MsDTW)**, Müller, Mattes and Kurth, ISMIR 2006, works coarse-to-fine by projecting a low-resolution result onto the next level and refining it inside a bounded region, which is the neighbour bound this run lacked; offset, scale, tolerance and match rate are all not applicable because it was not run here.
- **Path-constrained partial synchronization**, Müller and Appelt, ICASSP 2008, is built for the case where only parts of two sequences correspond, which is this case since the drum staff runs 248 bars while any one family covers a subset; offset, scale, tolerance and match rate are all not applicable because it was not run here.
- **Subsequence DTW and common subsequence matching**, FMP C7S3, matches a short query against any subsequence of a reference, the right primitive for one region without a whole-song map; offset, scale, tolerance and match rate are all not applicable because it was not run here.
- **Music synchronization with chroma features**, FMP C3, is the chapter the whole task belongs to; offset, scale, tolerance and match rate are all not applicable because it was not run here.

### The corrected next step

Not larger windows. **A coarse-to-fine multiscale path with a constraint region**, so each level is
bounded by the level above rather than searching the whole recording independently. Window size
stops being the free parameter that decides the result.

### Two setup facts, corrected after trying

The FMP source text is catalogued in this project at `/Volumes/Black/complete/Springer/`, and that
volume is **not mounted on this machine right now**, so the chapter was not read here. The method
names, their authors and their venues come from the search.

**`libfmp` IS NOW INSTALLED, and it was not the one-line install this section first claimed.**
Three attempts were made into `~/.venvs/notation-gate`. `pip` reports exit 0 while the log ends
partway through a **20.1 MB `music21` download**, and `import libfmp` still fails afterwards. It
pulls `matplotlib`, `ipython` and `music21` behind it. Logged at `/tmp/libfmp_install.log`.

**Neither gap blocks the next attempt from being specified correctly**, and neither blocks
implementing MsDTW, which needs only `numpy` and `scipy`. The FMP notebooks are also readable on
the web at the links in this section.

**Nothing in this addendum changes any verdict.** M002 and M003 stay closed, M004 stays open, and
no placement, repair or revision is carried forward.

---

## ADDENDUM 8: Keep It Greasey has exactly one drum staff and no percussion staff

A peer session's track census reported this and it was **re-derived here from the s604777 meta
rather than accepted.**

| idx | instrumentId | Instrument | Name |
|---|---|---|---|
| 0-7 | 85, 25, 29, 29, 36, 52, 4, 104 | voice, guitars, bass, choir, piano, sitar | the eight non-drum parts |
| **8** | **1024** | **Drums** | **Vinnie Colaiuta** |

**Nine tracks, exactly one `instrumentId 1024` staff, and no staff named for tambourine, cowbell,
shaker, conga, timbale or percussion anywhere.** `popularTrackDrum` reads 8, matching.

### What this does and does not add

It does **not** add a third independent argument on top of the rendering test and the hands gate.
What it does is remove the one alternative that could have complicated them: **there was nowhere
else in this tab for a clap to be written.** A transcriber notating an overdubbed clap had no
percussion staff available and would have had to put it on Vinnie's staff, which is where it is.

So the absence strengthens both readings toward the same answer rather than supplying a new one:

| Reading | Where the clap goes | Hands cost |
|---|---|---|
| Vinnie strikes it on the snare surface | his own staff, snare line | **0 extra** |
| Someone else overdubs it | his staff, for want of a percussion staff | **0**, no drummer hand at all |

**The verdict on KIG-M002 is unchanged: no change to the tab.**

### The peer's own correction, recorded because it bears on other songs

That session had told the record that **Peaches En Regalia `s35889` has no separate percussion
track**. It has a staff **named `tambourine` at index 10**. Their census had searched for
percussion among staves whose `instrumentId` was **not** 1024, so a percussion staff carrying 1024
was invisible to it. **Their published instant counts were not affected**, because those already
measured every 1024 staff rather than the first, and they checked that rather than assuming.

**Nothing on this page depends on that correction**, since Keep It Greasey has a single 1024 staff.
It is recorded so the next session on another Zappa song does not inherit the wrong method.

---

## ADDENDUM 9: the reference class this result sits in

A peer session tested the completeness of the 38-id scope list the Zappa program has been working
from. **The two headline figures were re-derived here by paging `/api/songs` directly, not
accepted.**

| Measure | This session | Peer |
|---|---|---|
| Frank Zappa tabs, `artistId` 5912 | **329** | 329 |
| of those carrying an `instrumentId 1024` staff | **262** | 262 |
| ids the program has been sweeping | 38 | 38 |
| **never measured** | **230** | 230 |

**A method note on how that was counted.** The first attempt here passed `artistId=5912` to
`/api/songs` and got 600 rows back whose first entry was **Metallica**. That parameter is ignored.
The working form is `?pattern=Frank+Zappa&size=100&from=N`, paged, then filtered client-side on
`artistId == 5912`, which saturates at 329 by `from=400`.

### What this does to the Keep It Greasey result

**Nothing.** Every KIG figure on this page is a direct measurement of one tab, never an inference
from a sample, so the size of the surrounding list cannot move it.

### What it does change

**It changes what a clean result would mean if anyone generalised from the program.** The 38 ids
are not a random draw from 262. A tab enters that list because someone had a reason to look at it,
so the set is selected, and a low defect count across selected tabs licenses nothing about the
other 230. The peer's sweep has since **finished**, and it replaces the in-flight figures this page first
carried. **The superseded line said 178 of 262 measured, 33 tabs, 798 instants, with Flakes at
300.** The final result:

| Final sweep | Count |
|---|---|
| tabs measured | **262 of 262**, 0 failures |
| tabs carrying work | **36** |
| three-surface instants | **822** |

**The 822 must not be read undecomposed**, because three different things were being summed:

| Class | Count |
|---|---|
| kit-only, three separate kit surfaces, real | **610** |
| **tambourine / clap / cowbell dependent** | **172** |
| on a pitched-percussion staff, the peer's own false positive | **40** |

**Corrected kit-only ranking:** Flakes `s35897` **270**, Tryin' to Grow a Chin `s68245` 78, Brown
Shoes Don't Make It `s35869` **54**, Filthy Habits `s68237` 24, King Kong Itself `s35863` 21,
Let's Move To Cleveland `s68238` 18, Sinister Footwear II `s21874` 16, Mother People `s60347` 16,
Carolina `s68248` 15, Dog Breath Variations `s68247` 9.

**Every count in this section is the peer's and is not re-derived here**, since this chat covers
Keep It Greasey only. The scope decision is Brandon's, queued on their side as
`q-2026-09-08-00e3ad`.

**Keep It Greasey being clean stays a real result about Keep It Greasey.**

---

## ADDENDUM 10: the finished sweep makes the clap ruling load-bearing

Two structural claims from the peer's final sweep were **re-derived here from the meta**, because
this page republishes them.

| Claim | My read |
|---|---|
| Flakes `s35897` has **two** `instrumentId 1024` staves | **CONFIRMED**: index 6 named **"Percussion Organ"**, index 8 named "Drums", both non-empty, `popularTrackDrum` 8 |
| The Idiot Bastard Son `s68253` has a drum staff | **CONFIRMED**: one 1024 staff at index 3, `popularTrackDrum` 3 |

**The instant counts themselves are the peer's and were not re-derived**, per the one-song rule.

### The pitched-percussion artifact is the same class as KIG-M001

A staff **named "Percussion Organ" carrying `instrumentId 1024`** holds melodic pitches while
wearing the drum instrument id, and the sweep counted its events as drum-kit failures until the
peer caught it. That is **40 of the 822**.

**This page has already met that class of trap twice.** KIG-M001 was a `fret 65` Timbale high
sitting on a lane that carries 1,311 kicks and nothing else. KIG-M002 is a GM 39 hand clap drawn on
the snare line. In all three cases **a GM number or an instrument id does not mean what a reader
assumes**, and the fix is the same each time: read the field the human acts on, which is the staff
line, never the pitch.

### What the 172 does to KIG-M002

The clap question looked local when it was 21 events in one song. The finished sweep puts
**172 of the 822 instants on the tambourine, clap and cowbell question**, and **The Idiot Bastard
Son `s68253` carries 118 instants of which zero are kit-only**, with 112 of the 118 being
hatOpen plus snare plus tambourine.

**So the reasoning settled here for Keep It Greasey is the reasoning that decides those 172.** It
is stated once more, in the general form, because it now has to travel:

> A non-kit surface **sharing** a kit lane costs **one** stick if the drummer strikes it and **no**
> drummer hand if another player overdubs it. **Both readings give the same hands count**, so
> playability is decided without resolving attribution. A non-kit surface on its **own** lane does
> **not** have that property: the two readings differ by one hand, and **attribution must be
> resolved** before that instant can be called playable. What must not happen in either case is
> counting the pitch as a third surface.

**The sharing condition is load-bearing and the first version of this rule omitted it.** See
Addendum 11.

**Nothing about Keep It Greasey changes.** M002 stays closed at no change, and the 21 GM 39 events
stay exactly as Ben Dibden1 wrote them.

---

## ADDENDUM 11: the general rule was overreach, and the correction is measured

Addendum 10 published this: *"A non-kit surface **drawn on** a kit lane costs one stick if the
drummer strikes it and no drummer hand if another player overdubs it. Both readings give the same
hands count, so the ambiguity does not have to be resolved."*

**That generalised from this song's structure to cases whose structure is different, and it covers
zero of the 172 it was written for.** The peer caught it and the shape was **re-derived here** on
the largest affected tab.

### Why Keep It Greasey's case works

At KIG bars 42, 43 and 44 the GM 39 clap sits on **string 1.5, the same line as the snare**, and a
snare sounds at the same instant. The surfaces are the snare line and the hat line, two either
way. **Removing the clap changes nothing**, so both readings give the same count and attribution
never has to be settled.

### Why the 172 do not

Measured here on The Idiot Bastard Son `s68253`, revision 704236, drum staff index 3, 817 events,
by an uncredentialed CloudFront read:

| Measure | Result |
|---|---|
| three-line instants containing MIDI 54 tambourine | **118** (peer said 118) |
| of those, MIDI 54 **alone** on its line at that instant | **118** |
| of those, MIDI 54 sharing its line | **0** |
| instants that **fall to two hand lines** once the tambourine is removed | **118 of 118** |

A sample instant reads `(54, line 1), (46, line 2), (38, line 4)`, which is tambourine, open hat
and snare on three separate lines.

**So the two readings diverge on every one of them:**

| Reading | Surfaces at that instant | Verdict |
|---|---|---|
| the drummer strikes the tambourine | **three** separate lines | **real failure** |
| another player overdubs it | **two** drummer lines | **not a failure** |

**Attribution has to be resolved for these, and 118 of the 172 are one entire tab.** The first
version of the rule would have licensed treating 172 live questions as settled.

### The corrected rule, with its boundary

> A non-kit surface **sharing** a kit lane costs one stick or no drummer hand, and both readings
> give the same count, so playability is decided without resolving attribution. A non-kit surface
> on its **own** lane does not have that property: the two readings differ by one hand, and
> attribution must be resolved before the instant can be called playable or not.

**The lane position varies per tab**, at 0, 1, 1.5 and 5 across the five affected songs, which is
itself evidence the transcribers gave the tambourine a deliberate separate lane rather than folding
it onto a kit surface.

### What this changes about Keep It Greasey

**Nothing.** KIG's clap shares the snare line, which is the branch where both readings agree. M002
stays closed at no change. What changed is the scope of the rule this page exports, which was
written too wide and is now bounded by a measurement.
