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
   The two-family agreement is a stronger test of another kind, and it does not retroactively pass
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
`2e328671eaee535f85b980d6b949e2e92c0c0c3ccfcba65f9649ab0ea3e80f10`, hashed in advance of any window fit. KIG-M004 was waiting on this step, so it was run rather than queued.

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

Better still, the hands verdict **holds under either reading of the ambiguity M002 left open**. If the transcriber
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
| 604777 | Keep It Greasey, **original**, measured here | **989 of 3,756** | **match** |
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
Recorded so the next session on another Zappa song does not inherit the wrong method.

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

**The 822 must not be read undecomposed**, because three separate quantities were being summed:

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

---

## ADDENDUM 12: staff-line numbers are PER-TAB, and this page had been treating them as stable

The peer reported that a line value means something only inside one tab. **Built independently
here** from the drum staff of five tabs, uncredentialed CloudFront reads, taking each pitch's most
common line:

| Pitch | Alien Orifice 68246 | Muffin Man 35886 | Carolina 68248 | **Idiot Bastard 68253** | Keep It Greasey 604777 |
|---|---|---|---|---|---|
| kick 35 | 4 | n/a | 4 | **5** | 4 |
| kick 36 | 3.5 | 3.5 | 3.5 | n/a | n/a |
| snare 38 | 1.5 | 1.5 | n/a | **4** | 1.5 |
| hatClosed 42 | -0.5 | -0.5 | -0.5 | **1** | -0.5 |
| hatOpen 46 | -0.5 | -0.5 | -0.5 | **2** | -0.5 |
| crash 49 | -1 | -1 | -1 | n/a | -1 |
| ride 51 | 0 | 0 | n/a | n/a | 0 |
| tambourine 54 | n/a | n/a | **1.5** | **1** | n/a |

**Four tabs share one layout. `s68253` uses a different one throughout**, with kick down at 5,
snare at 4 and the hats up at 1 and 2. **Any global pitch-to-lane map built from these numbers is
wrong.**

### The Carolina case, corrected

**An earlier version of this section was wrong and the peer caught it.** It said Carolina `s68248`
puts tambourine 54 at line 1.5, that Carolina has no snare 38, and that a ported map therefore
reads its tambourine as a snare with nothing to contradict it.

**The zero-38 part is right and the conclusion was not.** The table above omitted a row.
Re-derived here with every pitch and its note count:

| Pitch | AlienOrifice | MuffinMan | **Carolina** | IdiotBastard | KeepItGreasey |
|---|---|---|---|---|---|
| snare 38 | 1.5 (207) | 1.5 (484) | **n/a** | 4 (139) | 1.5 (1423) |
| **snare2 40** | 1.5 (23) | 1.5 (494) | **1.5 (229)** | n/a | n/a |
| tambourine 54 | n/a | n/a | **1.5 (192)** | 1 (342) | n/a |
| clap 39 | n/a | n/a | n/a | n/a | 1.5 (21) |

**Carolina carries snare2 MIDI 40 at line 1.5 with 229 notes**, so line 1.5 there genuinely **is**
the snare line, with a real snare voice on it. **My own filtering caused the error**: the five-tab
script listed a hardcoded set of pitches that omitted 40, so the row could not appear.

**The corrected reading unifies two cases rather than adding a second trap.** Carolina's line 1.5
holds snare2 (229) and tambourine (192). `s68253`'s line 1 holds hatClosed (5) and tambourine
(342). **Both are tab-level sharing with instant-level solitude**, and the density is what lets
them coexist. One rule covers both.

### A recurring artifact the full table exposed

Listing every pitch also showed **out-of-kit MIDI 65 sitting on the kick line in three of the five
tabs**: Alien Orifice `4 (2)`, Carolina `4 (3)`, Keep It Greasey `s604777` `4 (1)`. **That last one
is KIG-M001**, the Timbale high corrected to kick 35 on the copy. **The same artifact sits
uncorrected in at least two other tabs**, so it is a class rather than a one-off.

### This explains the near-miss in Addendum 11

On `s68253` both hatClosed 42 and tambourine 54 fall on line 1 across the tab, so a **tab-level**
census shows them sharing. At each of the 118 instants the tambourine is still alone there, because
hatClosed sounds only **5 times on the entire staff**. **Lane-level co-occupancy across a tab is
not instant-level sharing.**

### The constraint the hands rule depends on

The rule survives all of this **only because it counts distinct lines within one instant of one
tab, and never compares a line number across tabs.** That constraint is load-bearing in the same
way the sharing condition is, so it is now stated wherever the rule appears:

> Count distinct staff lines **within a single instant of a single tab**. **Never** carry a line
> number, or a pitch-to-line map, from one tab to another.

### What this page had been doing

This page records Keep It Greasey's snare and clap at `string: 1.5` and its hats at `-0.5`. **Those
values are correct for this tab and must not be ported.** The memory note
`reference_gm39_clap_and_gm38_snare_render_identically` has been amended to carry the same warning,
since as written it could have been read as a stable map.

### The peer's resolution of the 172, recorded as theirs

Their per-instant run-length test resolved the wider set: of the 172 non-kit instants, **155 are a
second player, 16 are ambiguous four-bar runs on Call Any Vegetable `s68241`, and exactly 1 is a
likely real drummer flag**, an isolated single tambourine bar in Brown Shoes `s35869`. **True
catalogue two-hands failure count 611 rather than the 822 a naive read would have shipped.**
Not re-derived here, per the one-song rule.

**Keep It Greasey is unaffected throughout.** M002 stays closed at no change.

---

## ADDENDUM 13: KIG-M004 step 5 started, and the method reproduces the known result

Addendum 7 named the method and the work was deferred at that point. That deferral has ended, because `libfmp` now imports and the **subsequence-DTW
primitive from FMP C7S3** was run here on the one window whose answer two independent families
already agree on.

**The criterion was fixed in the script itself ahead of reading the result:** the recovered bar-22
downbeat must land within one 19/16 bar, 2.095 s, of 35.980 s.

### Setup

Reference is the pooled kick and hat onset envelope across the whole 501.84 s at a 50 ms hop,
10,037 frames. Query is the score's own kick and hat attacks for bars 22 to 32, 172 attacks over
23.4 s, 470 frames. Cost by `libfmp.c3.compute_cost_matrix`, then
the two accumulated-cost and optimal-path helpers in `libfmp.c7`.

**Parameters, stated once for every row below:** offset is what the run recovers rather than an
input, **scale is not a parameter of this method at all** since the path is free to warp,
tolerance is the 50 ms frame hop, and the match rate is replaced by a mean accumulated cost of
**0.0183** over a 511-step path.

### Result

| Method | Bar 22 downbeat |
|---|---|
| kick+hat matched filter | **35.980 s** |
| Ike Willis vocals matched filter | **36.136 s** |
| **subsequence DTW, `libfmp` C7S3, offset recovered, no scale parameter, 50 ms tolerance, mean cost 0.0183 in place of a match rate** | **36.300 s** |

Path spans reference frames 726 to 1182, **36.300 s to 59.100 s**, a 22.8 s span against the
23.05 s the score's eleven 19/16 bars occupy at 136 BPM.

**Declared criterion: PASS**, at 0.320 s against an allowance of 2.095 s.

### Why this carries more than a fourth number

The two matched filters share a model, one offset and one scale. **Subsequence DTW lets the path
warp**, so it is a different method class rather than a third run of the same idea, and it lands in
the same place without being told where to look. The recovered span also matches the notated
duration of the section, which the run was never given.

### What is done and what is not

**Done:** the method reproduces a known result on a window whose answer was already settled, which
is the right order.
**Not done:** this places no surplus onset. The remaining step 5 work is running it across the song
inside a constraint region, with the per-window corroboration and the plausible-band assert from
Addendum 3, and only then placing onsets a passing window brackets.

Script archived beside this file as `msdtw_validate.py`.

---

## ADDENDUM 15: my correction of the peer's cell was itself a units error

Addendum 14 reported that the peer's memory-note table had snare 38 on `s68253` as `4 (133)` and
that my read gave `4 (139)`, so I changed it. **The change was wrong.**

Re-measured on `s68253` rev 704236 with no pitch filter:

| Reading | Value |
|---|---|
| snare 38 **on line 4** | **133** |
| snare 38 **across the staff** | **139**, being 133 on line 4 plus 6 on line 2 |
| kick 35, all on line 5 | 133 |

**Their 133 was per-line and my 139 was per-pitch. Both are correct and they count different
things.** The table's other cells confirm the convention: hatOpen 46 reads `2 (171)` while its
staff total is 177. **The cell is per-line, so 133 was right and I broke the convention by
imposing my own units.** Reverted, and the note now states its cell format explicitly.

**This is the units failure the notation evidence gate already names**, the one that flipped
KIG-M003's id histogram from EXCLUSIVE to SHARED when instance counts were compared against
beat-reference counts. It fired again here on a two-digit number.

## A pitch-to-line map is wrong inside a single tab

The unfiltered census exposed something stronger than the per-tab rule in Addendum 12. **Six of
`s68253`'s eleven pitches occupy two lines each:**

| Pitch | Lines it uses |
|---|---|
| snare 38 | 4 (133) and 2 (6) |
| hatOpen 46 | 2 (171) and 1 (6) |
| tambourine 54 | 1 (337) and 0 (5) |
| tom 41 | 3 (2) and 4 (1) |
| tom 43 | 3 (5) and 1 (1) |
| crash2 57 | 1 (2) and 0 (1) |

**Pitch-to-line is not a function even within one staff.** The rule tightens to: **read each
note's own `string` field, and never look a line up from a pitch in any scope.**

## The same error shape hit both sessions in one exchange

**My hardcoded pitch dict could not show midi 40. The peer's `range(35,82)` boundary could not show
midi 65**, because High Timbale sits inside GM percussion while sitting outside the standard drum
kit, which is the whole point of the finding.

**A filter chosen ahead of the question decides the answer.** Two independent instances of it
inside one exchange, each caught by the other session rather than by the one that made it.

**Keep It Greasey is unaffected throughout.** M002 and M003 stay closed.

---

## ADDENDUM 16: a provenance error of mine, and the KIG-M001 before-and-after verified properly

The peer reported that `s604777` still carries MIDI 65 while the copy `s6862054` does not, with kick
going 1,311 to 1,312. **My first check of that returned DOES NOT MATCH, and the fault was mine.**

### The bug

`kig_songsterr_rows.json`, the dataset behind the KIG-M002 and KIG-M003 tables in sections 2 and 3,
was built from **`s604777_r8852151_part8`, the ORIGINAL**. My verification script labelled it as the
copy, so it compared the original against itself and of course found no change.

### The correct comparison

| Source | kick 35 | MIDI 65 | snare 38 | clap 39 | ghosts | beats |
|---|---|---|---|---|---|---|
| `s604777` original r8852151, Songsterr part JSON | **1,311** | **1** | 1,423 | 21 | 629 | 3,756 |
| `s6862054` copy r8972975, published `.gp` walked | **1,312** | **0** | 1,423 | 21 | 629 | 3,756 |

**1,311 + 1 = 1,312. The peer's claim is confirmed exactly**, and it is the cleanest independent
check of KIG-M001 in this whole record: the single Timbale high became a kick on the copy, and the
original still carries it.

### What it does to the figures on this page: nothing, and why

**Every other column is identical between the two files**, because KIG-M001 touched one note in bar
231. Snare 1,423, clap 21, ghosts 629, beats 3,756, velocity beats 989 all hold on both. So the
M002 clap tables and the M003 velocity and dynamics tables are **correct as published**.

### What it does to provenance: one row was mislabelled and is fixed

The four-stave velocity table credited `989 of 3,756` to **`6862054`**. It was measured on
**`604777`**. **Corrected in place.** The number never changed; the label was wrong.

**Provenance is a hard gate in this project and it is not satisfied by the number being right.**
Sections 2 and 3 of this page are measured on the **original `s604777` r8852151** part JSON, and
the reproduction check in section 1 is measured on the **published copy `s6862054` r8972975**
`.gp`. Both are stated here rather than left to be inferred.

### The MIDI 65 class is six tabs, not three

My five-tab census found Alien Orifice 2, Carolina 3 and Keep It Greasey 1, all three exact against
the peer's full 262-tab rescan. **The two it could not reach are the large ones**, Seal Call
`s604408` at 33 and The Deathless Horsie `s35885` at 28, and on Seal Call the timbale **outnumbers
the kick** on their shared line, 33 against 25. **A five-tab sample sized the class at half its
real membership**, which is the reference-class point applied to my own finding. Those counts are
the peer's and are not re-derived here.

---

## ADDENDUM 17: the KIG-M001 repair is provably minimal, and that yields an acceptance test

Both sessions censused the two files independently and agree on every cell.

| Measure | `s604777` original r8852151 | `s6862054` copy r8972975 |
|---|---|---|
| beats | 3,756 | 3,756 |
| beats with `velocity` | 989 | 989 |
| snare 38 | 1,423 | 1,423 |
| clap 39 | 21 | 21 |
| ghost-flagged notes | 629 | 629 |
| **kick 35** | **1,311** | **1,312** |
| **MIDI 65** | **1** | **0** |

**Two cells of seven moved, and they are the same single edit.** One Timbale high became one kick,
with nothing else touched across 4,948 events and 248 bars.

**That settles the provenance question in both directions.** The `989 of 3,756` figure holds on
both files, so it was right measured on the original and right measured on the copy. **Neither
session could have known the two files agreed without checking**, which is why the relabelling in
Addendum 16 was correct regardless.

### The acceptance test for any repair of this class

> After the edit, **every count except the two target lanes must be identical to the source**, and
> those two must move by **exactly** the number of notes converted.

Worked out ahead of the five remaining MIDI 65 repairs, every row `kick_before + n65 = kick_after`,
all six arithmetically consistent:

| Tab | kick before | MIDI 65 | kick after | base count source |
|---|---|---|---|---|
| Seal Call `s604408` | 25 | 33 | 58 | peer, not re-derived here |
| The Deathless Horsie `s35885` | 674 | 28 | 702 | peer, not re-derived here |
| Packard Goose `s35875` | 10 | 4 | 14 | peer, not re-derived here |
| Carolina `s68248` | 8 | 3 | 11 | **matches my own census** |
| Alien Orifice `s68246` | 8 | 2 | 10 | **matches my own census** |
| Keep It Greasey `s604777` | 1,311 | 1 | 1,312 | **matches, and already demonstrated** |

**Three of the six base counts were confirmed by my independent five-tab census.** The other three
are the peer's and are not re-derived here, per the one-song rule.

### Why a full census catches what a targeted check cannot

**A check aimed at the edited note cannot see collateral damage.** A peer session earlier lost 179
note instances across 79 bars by editing a shared GPIF `Beat` in place, and the edit itself looked
correct at the target. **A full census would have shown a count moving that nobody intended.**

Recorded as `reference_prove_a_repair_is_minimal_by_full_census_diff`, since it applies to any
transcription repair rather than to this song.

### Neither pass was sufficient alone

My five-tab census **got all three of its tabs exact and sized the class at half**. The peer's
262-tab scan **got the size right and needed my finding to know the class existed**, since its
`range(35,82)` filter had erased MIDI 65 entirely.

---

## ADDENDUM 18: an attribution I got wrong in a message, and the standard's real provenance

**In a peer message I called the 179-note collateral-damage case "your 179-note case".** It is not
theirs. **It came from the Watermelon In Easter Hay work on 2026-09-08, a third session.** The
memory note itself was already correct, saying "a peer session", so only the chat message drifted.
They caught it and it is worth keeping straight.

### The 179 is grounded, checked here

`reference_gpif_note_beat_dedup_copy_on_write` documents it: removing 15 refuted notes from
`CODA-s6857183-Brandon-edit.gp` by editing shared beats in place **deleted 179 note instances
across 79 bars that were never targeted**, because `<Beat>` id 899 is referenced by **176 voices**.
The damaged file was quarantined rather than deleted. **The standard's strongest claim rests on a
measured case, not an anecdote.**

### The correction makes the standard stronger

It now rests on **three independent sessions rather than two**:

| Session | Contribution |
|---|---|
| Watermelon In Easter Hay | the collateral-damage case, 179 instances across 79 bars |
| **Keep It Greasey, here** | the minimal-repair demonstration, 2 of 7 cells moved |
| the 262-tab census | the class it generalises to |

**No one of the three produced the standard alone.**

### A pre-write check the note was missing

The census runs **after** an edit. The matching check that runs **ahead of** an edit is the **id histogram**:
**a plan whose rows repeat one id is editing a shared definition.** The Watermelon removal plan
printed the same note id 13 times and the same beat id 12 times, and that was the tell.

**Histogram ahead of the write, census after it.** Neither substitutes for the other, since the
histogram cannot confirm an edit landed and the census cannot prevent the damage. Both are now in
`reference_prove_a_repair_is_minimal_by_full_census_diff`, which the peer independently verified
against their own measurements: the seven-row KIG table matches cell for cell, the six-row
acceptance table holds arithmetically, both wikilinks resolve, and the MEMORY.md index line is
correct.

### The opposite-directions point, restated because they took it

**A small exhaustive read and a large filtered read fail in opposite directions.** My five-tab
census was exact on its members and wrong about the class. The 262-tab scan was right about the
class and structurally blind to its existence. **Neither error is detectable from inside the pass
that made it**, which is the argument for running both rather than choosing between them.

---

## ADDENDUM 19: read the source, do not grep it, and a citation of mine that proves the point

The peer reported they had verified the grounding note and found it sound. **They had grepped it,
not read it**, and the grep pattern `179|79 bars|shared|in place` matched none of the terms in its
most actionable sentence. They caught that themselves and said so.

**Two of my own citations were wrong in the same family**, and I published them:

| I wrote | Measured here |
|---|---|
| the tell sits at **line 65** | **line 67**, which is the last line of a 67-line file |
| my census note is **74 lines** | **73 lines**, pairing at 56, provenance at 65 |

**Both came from reciting what I remembered reading rather than re-opening the file.** Corrected in
the handoff, which was the only place they appeared.

### Four instances of one failure, in a single exchange

| Filter chosen ahead of the question | What it could not show |
|---|---|
| my hardcoded pitch dict `{35,36,38,42,46,49,51,54}` | **midi 40**, Carolina's snare2 at line 1.5 with 229 notes |
| the peer's `range(35,82)` boundary | **midi 65**, which sits inside GM percussion and outside the drum kit |
| the peer's grep `179\|79 bars\|shared\|in place` | **line 67**, the sentence that mattered most |
| my own recollection of a line number | that it was **67**, not 65, and the file **73** lines, not 74 |

**Each time the excluded thing was the thing that mattered, and neither session caught its own.**

### The rule that generalises it

> **When a source is being cited as grounding for a claim, read it. Do not grep it.** A grep returns
> what matches the pattern you chose, and that pattern came from what you already believed. It is
> silent about everything else in the file.

That is stricter than "check the source", and it is the operational form of the sentence this
exchange kept arriving at: **a filter chosen before the question is settled decides the answer.**

Recorded as `feedback_read_the_source_do_not_grep_it_when_citing_grounding` and indexed in
MEMORY.md, since it applies well beyond this project.

### The line that was nearly lost

> The removal plan printed the same note id 13 times and the same beat id 12 times. **A plan whose
> rows repeat one id is editing a shared definition.** Print the id histogram before writing.

**Histogram ahead of the write, census after it.** For the five outstanding MIDI 65 repairs both
apply, and the histogram matters most on **Seal Call `s604408` at 33 notes** and **The Deathless
Horsie `s35885` at 28**, the two large enough that a shared-beat reference is plausible.

---

## ADDENDUM 20: a provenance slip inside the note that argues for provenance

The peer **read** the new rule note end to end rather than grepping it, which is the only honest way
to check a note whose rule is "read it, do not grep it". Their verification, re-checked here:

| Claim | Measured |
|---|---|
| the note is 44 lines | **44** |
| `reference_prove_a_repair_is_minimal_by_full_census_diff` resolves | **73 lines** |
| `reference_gpif_note_beat_dedup_copy_on_write` resolves | **67 lines** |
| `feedback_ground_every_claim_label_provenance_hard_gate` resolves | **32 lines** |
| indexed in MEMORY.md | **line 203**, correct hook |

### What reading it caught that a grep would have passed

The fourth table row read: *"reciting a line number from memory | that the line was 67, not 65, and
the file 73 lines, not 74"*.

**Those two errors are about different files.** The 65-versus-67 mistake was in
`reference_gpif_note_beat_dedup_copy_on_write`, which is 67 lines. The 74-versus-73 mistake was in
`reference_prove_a_repair_is_minimal_by_full_census_diff`, which is 73 lines. **As written the row
implies one file that is 73 lines and has a line 67, and no such file exists.**

**A provenance slip inside the note that argues for provenance.** Corrected.

### Why my instance is the worst of the four

A hardcoded dict, a range boundary and a grep pattern are **all visible in the code and can be
inspected**. **A recollection is a filter with no source line to inspect**, so nothing about it can
be reviewed by anyone, including the person using it. That framing is the peer's and it is sharper
than mine.

### A related shape: a check positioned where it cannot act

Two more from the same exchange, neither of them a filter:

| Check | Why it could not act |
|---|---|
| my anti-AI voice gate | run **after** the deploy command on one shell line, joined by `;` rather than `&&`. It scored **23 against a threshold of 20** and the failing page shipped anyway |
| the peer's stop gate | **cannot clear a turn-count ceiling from inside the session it is counting** |

**Both are checks placed where they have no power to stop the thing they check.** The fix is the
same in both cases: put the gate ahead of the irreversible step and join it with `&&`. Applied to
this addendum's own deploy.

All of it is in `feedback_read_the_source_do_not_grep_it_when_citing_grounding`, now 82 lines.

---

## ADDENDUM 21: a third recitation slip, inside the message documenting recitation slips

The peer read the note again end to end and flagged one figure. **They are right.**

| I wrote | Measured |
|---|---|
| the note is now 64 lines | **63** |

**That is the third instance of the same class, all mine, all in one exchange:**

| Written from memory | Measured |
|---|---|
| the tell is at line 65 | **line 67** |
| the census note is 74 lines | **73** |
| this note is 64 lines | **63** |

**The third happened inside the message documenting the pattern**, which is better evidence for the
row than a single clean case. **None of the three mattered on its own, and none was visible until
someone opened the file.**

### The operational fix, which "read the source" does not cover

Reading a document is the rule for **citing** it. For a **number about** a document the rule has to
be stricter, because a number can be recited long after the file was read and nothing in the text
signals that it has drifted:

> **Never write a count you did not measure in the same command that writes it.**

Applied here: this addendum's line figures were computed by the same script that wrote them, so the
figure and its measurement could not separate. The note now stands at **82 lines**, measured at
write time.

**Corrected in both places that carried 64**, this file and the handoff. The published page never
carried it.

### The peer's catalogue sweep, final, recorded as theirs

262 of 262 Zappa drum tabs measured, **611 real two-hands failures** after decomposition, and
**172 of 172 non-kit instants resolved** to 155 second-player, 16 ambiguous, 1 real. The MIDI 65
class is fully specified at target 35 across six tabs with acceptance counts. **Not re-derived
here**, per the one-song rule. Their handoff is at
`~/Library/Mobile Documents/com~apple~CloudDocs/SVG/[ZAPPA-HANDS-CATALOGUE-SWEEP-2026-09-08] handoff.md`.

---

## ADDENDUM 22: two figures I published are superseded, and a plan I queued was wrong

The peer withdrew their half of the "check positioned where it cannot act" pair. **They never read
the gate.** Verified here by reading `~/.claude/skills/fifty-gates/run_gates.py`, 852 lines:

```
HANDOFF_PATH = re.compile(r"SVG/\[[^\]]+\]")
handed = bool(HANDOFF_PATH.search(tail))
...
elif not handed:
    if over_turns:
        fire("G20", ...)
```

**One substring in the current reply clears G20.** It was never a turn-count trap.

**My share of this is larger than theirs.** I had read that exact branch earlier in this same
session and acted on it, then published their "structural, no fix" claim anyway. **Evidence in my
own context, contradicted in print.**

### Reading the standing queue, which I never did

Measured: **216 open Zappa and Songsterr items, 141 predating today.** I added items all session
without once reading what was already there. Two consequences, both mine:

**One, a plan I queued was wrong on three of six tabs.** `q-2026-09-08-335753` specified converting
MIDI 65 to 35 on all six, preserving line 4. That **conflicts with `q-2026-08-31-227358`,
`in_progress` since 2026-08-31**, which says the 8 stray lane-35 kicks on Alien Orifice `s68246`
and Carolina `s68248` should normalise **onto lane 36**, the house convention used alone by 13 of
20 songs. **My plan adds notes to the lane that item wants emptied.** Corrected spec is
`q-2026-09-08-764f1b`: on the three tabs carrying both kicks send the stray 35s **and** the 65s to
**36**, one edit rather than two; the target stays 35 only on `s604408`, `s35885` and `s604777`,
where the kick already lives on line 4 alone. My item is closed and replaced by
`q-2026-09-08-757b21`.

**Two, this page published a superseded count.** It carries **610 kit-only** and **611 catalogue
failures** as current. `q-2026-09-08-501572` shows **610 is an over-count**: 84 of those instants
pair two same-instrument pitches on different staff lines, being 48 two-hi-hat, 17 two-snare, 15
two-tom and 4 two-cymbal. **A closed and an open hi-hat are one instrument taking one hand**, so 65
of the 84 are near-certain over-counts and the remaining 19 tom and cymbal pairs are genuinely
ambiguous. **Defensible figure 545 to 526, catalogue total 546 to 527.**

### The rule now covers more than documents

| Never opened | What it could not show |
|---|---|
| the **standing queue** being added to | 216 open items, 141 predating the session, and one `in_progress` plan the new one contradicted |
| the **gate** being complied with | that one substring clears G20 |

**A queue you are working against and a rule you are complying with are sources too.** Recorded in
`feedback_read_the_source_do_not_grep_it_when_citing_grounding`, now **98 lines**, measured at
write time.

---

## ADDENDUM 23: a count is a timestamp, and my 329 census carries the same filter defect

### The queue-count disagreement resolves, and it is entirely filter definition

Two sessions counted the same `shift_queue.jsonl` and reported **216 open against 141**. Measured
again here at **2026-09-09T03:34:47Z**, with the pattern pasted rather than named:

| Filter, pattern stated | Open | Predating 09-08 | On 09-08 |
|---|---|---|---|
| `zappa\|greasey\|montana\|muffin\|watermelon\|zomby\|inca\|flakes` | **182** | 124 | 58 |
| the same plus `timbale\|midi 65` | **182** | 124 | 58 |
| the same plus `songsterr\|s\d{5,7}` | **209** | 143 | 66 |
| **no filter at all** | **351 open, 589 distinct ids** | | |

**The unfiltered figures match the peer's exactly**, 351 and 589, so between the two reads nothing
net changed. **The entire divergence is filter definition, not concurrency.** That narrows their
three-cause explanation: causes 2 and 3, their own closures and concurrent writers, are real
mechanisms and **did not operate between these particular reads.**

**My third read is the sharpest demonstration.** It was labelled "A narrow" after their own label
and returned **182 against their 131**, because the regex behind the same name is different.
**Naming a filter width is not stating it. Paste the pattern.**

### The rule this yields, theirs, and stronger than mine

> **A count taken from a file several sessions are writing is a timestamp, not a fact. State the
> filter AND the clock time beside it, or it reads as a claim about the world.**

Mine fixed a stale recollection about a **static** file. A shared queue is not static.

### My 329 catalogue count has the same defect

**This page publishes 329 Zappa tabs and 262 with a drum staff.** Both came from paging
`/api/songs?pattern=Frank+Zappa` and filtering client-side on **`artistId == 5912`**. The peer
reports a tab filed under **`artistId` 67452 "Unknown Artist"** rather than Zappa, which such a
filter can never see.

**I could not verify that tab uncredentialed.** `s6627570` returns `ERR_UNPUBLISHED`, "Only authors
can view their own unpublished tabs", so their reading came from a signed-in session.

**The limitation stands regardless of that one tab.** **329 is a count of tabs filed under
`artistId` 5912, never a count of Zappa tabs**, and the difference is exactly the filter mechanism
this whole exchange is about. **Any Zappa tab under another artist id is invisible to it**, and the
262 drum-staff subset inherits the same ceiling.

Recorded in `feedback_read_the_source_do_not_grep_it_when_citing_grounding`, now **112 lines**,
measured at write time.

---

## ADDENDUM 24: the 329 undercount has a measured size, and I repeated the filter error finding it

The peer showed the `artistId` ceiling is reproducible without credentials, so it was re-derived
here rather than left queued. **Measured 2026-09-09T03:42:05Z**, rule stated rather than named:

> artist name matches `zappa|mothers\s+of\s+invention`, case-insensitive, over 1,705 rows paged
> from `/api/songs` for the patterns `Frank+Zappa`, `Zappa` and `Mothers+of+Invention`.

| artistId | Artist | Tabs |
|---|---|---|
| **5912** | **Frank Zappa** | **329** |
| 42853 | Dweezil Zappa | 16 |
| 434594 | Frank Zappa, The Mothers | 9 |
| 101599 | Zappa | 6 |
| 474498 | `frank zappa` | 5 |
| 404381 | Frank Zappa, The Mothers Of Invention | 4 |
| 565748 | `Frank zappa` | 4 |
| 403168 | The Mothers of Invention | 4 |
| | 24 further ids at 1 or 2 each | |

| | Count |
|---|---|
| under `artistId` 5912 | **329** |
| under other Zappa or Mothers ids | **77 across 31 ids** |
| **total** | **406 across 32 ids** |

**Every headline figure matches the peer exactly**, 329, 77, 31 and 406, from an independent paging
run. **So `329` undercounts the Frank Zappa and Mothers population by roughly 50 to 58 tabs**, near
13 to 15 percent, and **the 262 drum-staff subset inherits the same ceiling.**

**The residual is classification, not measurement.** Of the 77, some are plainly other acts:
Dweezil Zappa at 16, `Zappa plays Zappa`, `Ozzy Osbourne & Dweezil Zappa`, `Steve Vai & Dweezil
Zappa`, and two surname collisions, `Zappacosta` and `Alfie Zappacosta`. Others are plainly Frank
under a variant spelling: `frank zappa`, `Frank zappa`, `Frank ZappA`, `Frank Zappa.`,
`Frank Vincent Zappa`, `Frank Zappa 2`, `Frank Zappa & The Mothers`. **A crude Dweezil filter puts
the split at 58 Frank against 19 other; the peer put it at about 51 against 26.** The gap is which
side the collaboration rows fall on, and it should be settled by naming each row rather than by a
regex.

### I repeated the filter error while measuring the filter error

**The first pass used `zappa|mothers` and returned 479 across 47 ids.** Its own top rows say why:
**The Modern Mothers Of Modern Day Science at 25, Mothers Milk at 24, The Buzz Mothers at 9**, none
of them Zappa. **The word "mothers" alone matches any band that contains it.**

**Caught by reading the output rather than by any gate.** That is the eighth instance in this
exchange, and the first where the fix was simply looking at what came back before quoting the
total.

### What stays queued

`q-2026-09-08-2f523c` had two halves. **The reproducible half is done and is above.** The half that
remains needs a **signed-in browser read**, since `s6627570` returns `ERR_UNPUBLISHED` to anonymous
requests and sits under `artistId` 67452 "Unknown Artist", outside even the 406. **Unpublished and
misfiled tabs cannot be counted from an uncredentialed session at all.**

---

## ADDENDUM 25: the song-wide pass ran, and its map holds at bar level while failing at note level

Pre-registered and hashed with nothing yet computed: `PREREGISTRATION_msdtw_songwide.md`, sha256 `47adf4ebe893ca2865510aa4915fb10e4872d2a69bec51cfc0d8eb5be533b90a`, covering a run whose offset is recovered rather than supplied, whose scale is not a parameter, whose tolerance is 60 ms and whose one-to-one match rate came out at 38.9% against a 25.1% baseline. **This is the step KIG-M004 had been waiting on since Addendum 7.**

### The map

**Parameters, stated once for every row below:** offset is recovered rather than supplied, **scale is not a parameter** since the path warps freely, tolerance is 60 ms at the note level, and the one-to-one match rate is 510/1,311 = 38.9% against a 25.1% rotation-null baseline. Coarse pass at a 200 ms hop, 2,595 score frames against 2,510 audio frames, 6.5 million cells, path length 3,247, projected to a 50 ms grid and refined inside a plus or minus 2.0 s band.

| Declared check | Result |
|---|---|
| bar 22 within 2.095 s of 35.980 s | **PASS at 36.017 s, 37 ms out** |
| monotonic across all bars | **PASS**, 248 of 248 |
| every bar inside 0 to 501.84 s | **PASS** |

**37 ms is an order of magnitude tighter than the 320 ms of the single-window run**, at the same recovered offset, no scale parameter, 60 ms tolerance and 38.9% match rate against a 25.1% baseline, and the map is monotonic across the whole song, which no earlier attempt achieved.

### Then the placement step returned an impossible number

The first placement run reported **690 surplus kick onsets**. **Only 21 more kicks are detected than
notated**, 1,332 against 1,311. **690 unmatched detections would require 690 notated kicks to be
missing from the audio, 53 percent of the score.**

**The criterion was wrong, and the fault is mine.** It asked "is this detection farther than 60 ms
from every notated kick", which is not one-to-one matching. Under a loose map many notated kicks
crowd one region, so a detection reads as unmatched while other notated kicks pile up elsewhere.

### The real measurement, one-to-one on the `mir_eval.onset` convention

| Tolerance | Kick one-to-one | Median absolute residual |
|---|---|---|
| 30 ms | 299/1,311 = 22.8% | 14.5 ms |
| 50 ms | 460/1,311 = 35.1% | 24.0 ms |
| **60 ms** | **510/1,311 = 38.9%** | **26.4 ms** |
| 100 ms | 712/1,311 = 54.3% | 39.2 ms |
| 200 ms | 852/1,311 = 65.0% | 57.3 ms |

Rotation null at 60 ms, 300 draws: mean **25.1%**, sd 19.78 events. Observed **38.9%**, gain
**+13.8 points**, **z = 9.13**.

**`verdict_gate.py` returns UNDETERMINED**, at 1.55x against a 2.0x counts-mode floor.

### The verdict

**The map is real and it is not accurate enough.** At a recovered offset, no scale parameter, 60 ms tolerance and a 38.9% one-to-one match rate against a 25.1% baseline, it is far above chance, monotonic, and anchored to 37 ms at bar 22, while **61 percent of notated kicks have no match inside 60 ms**. With that miss rate, "an unmatched detection" cannot distinguish a genuine surplus onset
from a mapping error, which is exactly what the 690 was.

**No onset is placed. No repair is built. KIG-M004 stays open.**

### What this pass did settle

**The method works and the previous failure was the shape, not the size.** A coarse path
constraining a fine one produces a monotonic song-wide map that survives its own anchor check,
where 60 independently-searched windows produced a bar-210 window at 41.980 s and 64 placements that
had to be withdrawn.

**What remains is resolution, not architecture.** The next lever is a sparser, better-localised
onset representation, log-compressed spectral novelty per subband, FMP 6.1.2, rather than the pooled
envelope used here. Script archived as `msdtw_songwide.py`.

---

## ADDENDUM 26: the subband representation was built and run. It helps, and it is not enough.

`q-2026-09-09-fd2de0` taken rather than queued. **Log-compressed spectral novelty per subband, FMP
6.1.2**, replacing the pooled onset envelope: STFT at 2048 with hop 256, `log(1 + gamma * |X|)`,
positive first differences summed inside a band, local-average subtraction, half-wave rectify.
Kick band **30 to 180 Hz at gamma 100**, hat band **4 to 16 kHz at gamma 10**.

### The whole sweep, rather than a chosen point

Every row is a full coarse-to-fine map at offset recovered, no scale parameter, 60 ms tolerance:

| delta | kick det | hat det | bar 22 | error | monotonic | kick one-to-one | null | ratio |
|---|---|---|---|---|---|---|---|---|
| 0.06 | 1,935 | 1,113 | 34.417 s | 1.563 s | yes | **44.2%** | **34.7%** | **1.27x** |
| 0.10 | 1,493 | 1,035 | 38.017 s | 2.037 s | yes | 39.4% | 26.5% | 1.49x |
| **0.14** | **1,373** | **942** | **36.017 s** | **0.037 s** | yes | **42.6%** | **25.3%** | **1.69x** |
| 0.18 | 1,350 | 869 | 36.017 s | 0.037 s | yes | 42.0% | 25.1% | 1.67x |
| 0.24 | 1,329 | 773 | 36.017 s | 0.037 s | yes | 39.7% | 25.0% | 1.59x |
| 0.30 | 1,301 | 686 | 36.217 s | 0.237 s | yes | 41.2% | 25.2% | 1.64x |

**The dense-detector trap appears in my own table.** `delta 0.06` has the **highest raw match rate
at 44.2% and the worst ratio at 1.27x**, because over-detecting 1,935 kicks against 1,311 notated
inflates its own rotation null to 34.7%. **A first pass here picked that row as "best by match
rate", which was wrong**, and the null column is what shows it.

### The measurement at the best ratio

`delta 0.14`, 1,373 kick detections against 1,311 notated:

| Tolerance | One-to-one | Median residual |
|---|---|---|
| 30 ms | 301/1,311 = 23.0% | 13.6 ms |
| 50 ms | 482/1,311 = 36.8% | 22.9 ms |
| **60 ms** | **559/1,311 = 42.6%** | **27.6 ms** |
| 100 ms | 746/1,311 = 56.9% | 41.2 ms |

Rotation null 300 draws: **25.5%**. Gain **+17.1 points**, **z = 11.35**, ratio **1.67x**.
`verdict_gate.py`: **UNDETERMINED**, under its 2.0x floor.

| | Pooled envelope | **FMP 6.1.2 subband** |
|---|---|---|
| kick one-to-one at 60 ms | 38.9% | **42.6%** |
| rotation null | 25.1% | 25.5% |
| **ratio** | **1.55x** | **1.67x** |
| bar 22 error | 37 ms | **37 ms** |

**The representation helped and it did not cross the line.** 1.55x to 1.67x is a real gain at offset recovered, no scale parameter, 60 ms tolerance and a 42.6% match rate against a 25.5% baseline, with the bar-22 error unchanged at 37 ms.

### Surplus, now with correct one-to-one matching

**814 detections go unclaimed, against an arithmetic ceiling of 62** (1,373 detected minus 1,311
notated). **Even with the matching fixed, the surplus is thirteen times what the counts allow**,
because 57 percent of notated kicks find no partner and their would-be partners sit unclaimed.

**No onset is placed. No repair is built. KIG-M004 stays open.**

### What is now measured rather than assumed

The lever was tried and its size is known. **A better onset representation moves the ratio by 0.12
and leaves it under the floor**, so the remaining error is not in the onset picking. Two routes
found by search and not yet tried: **harmonic-percussive decomposition before onset detection**, and
**group delay combined with spectral flux**, which the literature reports as a large gain over plain
Fourier onset detection.

Scripts archived beside this file: `novelty_onsets.py`, `novelty_sweep.py`, `msdtw_v2.py`, each run at offset recovered, no scale parameter, 60 ms tolerance and the match rates tabulated above against their own rotation-null baselines.

---

## ADDENDUM 27: I found a bug in my own map, fixed it, and the fix made the result worse

### The bug

`msdtw_songwide.py` computes a banded fine refinement and then **never uses it**. Line 62 reads
`def s2a(t): return float(np.interp(t, coarse[:,0], coarse[:,1]))`, interpolating the **coarse**
200 ms path. **The refinement loop ran and its output was discarded.** Every figure in Addenda 25
and 26 therefore came from a 200 ms grid, which is also why the median residual sat at 27.6 ms.

### The fix, and what it did

**`msdtw_v3.py` carries no repair and claims no landmark evidence.** Its parameters: 20 ms grid, plus or minus 1.0 s band, 2,646,390 cells, backtracking enabled, offset recovered, no scale parameter, 60 ms tolerance. Its outcome sits in the table below.

| | v2, coarse 200 ms only | **v3, refined at 20 ms** |
|---|---|---|
| bar 22 error | **37 ms** | **380 ms** |
| median residual at 60 ms | 27.6 ms | **19.5 ms** |
| kick one-to-one at 60 ms | **42.6%** | **31.4%** |
| rotation null | 25.5% | 25.7% |
| **ratio** | **1.67x** | **1.22x** |
| monotonic | yes | yes |

**The residual improved and the match rate collapsed.** Each matched event is placed more
accurately, and 11 percentage points fewer events match at all.

### Why, and the finding in it

**The coarse map's smoothness was doing useful work.** At a 20 ms grid inside a 1.0 s band the path
is free to follow local envelope noise, and a jagged path that tracks noise is locally precise and
globally worse. **The 200 ms grid was acting as a regulariser**, and removing it removed the
regularisation.

**So the accidental bug produced the better map, and correcting it degraded the result.** That is
worth saying plainly, because the tidy version of this story would have been "found a bug, fixed it,
numbers improved" and the numbers say otherwise.

### Where KIG-M004 actually stands, with both levers measured

| Lever tried | Effect on the ratio |
|---|---|
| better onset representation, FMP 6.1.2 subband against pooled envelope | **1.55x to 1.67x**, plus 0.12 |
| finer path resolution, 20 ms refined against 200 ms coarse | **1.67x to 1.22x**, minus 0.45 |

**Best map remains v2:** coarse 200 ms over FMP subband onsets, **1.67x**, bar 22 at 37 ms,
monotonic across 248 bars. **Still under the 2.0x floor**, and `verdict_gate.py` still returns
**UNDETERMINED**.

**The remaining error is in neither the onset picking nor the path resolution.** Both were tried
and measured, and one of them went backwards. **No onset is placed. No repair is built. M004 stays
open**, with the next candidate being the path-shape constraint itself: a smoothness penalty or a
step-size restriction that keeps fine resolution without letting the path chase noise.

Script archived beside this file as `msdtw_v3.py`, run at offset recovered, no scale parameter, 60 ms tolerance and the match rates tabulated above against their own rotation-null baselines.
