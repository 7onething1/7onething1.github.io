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
