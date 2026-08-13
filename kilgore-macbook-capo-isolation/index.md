# Kilgore Trout, Phase 2 verification on the MacBook

Run 2026-08-13 on MacBookPro, home `/Users/brandonchavez`, against the iMac's
`kilgore-guitar-2026-08-13` bundle delivered through iCloud `sfg/`. Manifest
verified 27 of 27, zero failures. Nothing was promoted and no ledger entry was
written by this pass.

## Status

Phase 2 has not produced an accepted result. Three items block acceptance.

1. `IMPOSSIBLE_SPAN` still fails at bar 62.938 of the chain49 Rhythm staff.
2. The source mix is absent, and both external drives are unmounted here.
3. The gate hash moved from `7a4696cd` to `ece41376`, so the promotion
   invariant refuses chain49 until it is re-promoted with a declared basis.

## Tier 1 and 1b, source fidelity against c-tied

| Build | Hard profile | Pitch | Position | Notes moved | Verdict |
|---|---|---|---|---|---|
| s6389251-chain49.gp | IMPOSSIBLE_SPAN x1 | PASS | PASS | 5 L, 14 R (1-2%) | FAIL |
| ALLPARTS-PLAYABLE.gp | clean | PASS | FAIL | 528 L, 837 R (64%, 100%) | REVIEW |
| s6389251-BEST.gp = iter48 | IMPOSSIBLE_SPAN x1 | PASS | FAIL | blanket refret | FAIL |
| ALLPARTS-SOURCE-FAITHFUL.gp | IMPOSSIBLE_SPAN x2 | PASS | PASS | - | FAIL |
| c-tied.gp (stem source) | SPAN x19, TIE x70 | baseline | baseline | - | FAIL |
| songsterr-ai-reference.gp | clean | n/a | n/a | - | PASS |

ALLPARTS-PLAYABLE is the only build with no hard failure, and it earns that by
rewriting the performance.

**Corrected 2026-08-13.** A first pass reported that PLAYABLE moved 100% of its
healthy Rhythm notes. That number is raw position change, and it overstates the
fault, because c-tied's Rhythm frets were written for capo 0 while the file
declares capo 2. Any build keeping capo 2 must lower every fret by 2 just to be
correct. Measured against that minimal repair:

| Build vs c-tied, Rhythm | At the minimal repair | Beyond it |
|---|---|---|
| ALLPARTS-PLAYABLE (keeps capo 2) | 466 of 891, 52.3% | **425 of 891, 47.7%** |
| s6389251-chain49 (drops capo to 0) | 842 unmoved, 94.5% | 48 of 891, 5.4% |

**PLAYABLE relocates 47.7% of the Rhythm staff beyond what the repair required.**
The over-relocations run to a higher string at a much lower fret: (+1 string, -7
fret) x128, (+1, -11) x31, (+2, -12) x26. That is the cost function that likes
low frets walking the part toward the nut, and it is the same shape as iter48
under a different filename. The corrected figure is smaller than the first one
and it still separates the two builds by an order of magnitude.

## The Rhythm capo mutation

c-tied carries capo 2 on Rhythm and chain49 carries capo 0. The tuning is
identical in both, `36 45 50 55 59 64`.

| | c-tied Rhythm | chain49 Rhythm |
|---|---|---|
| capo | 2 | 0 |
| notes | 891 | 891 |
| stored MIDI matches fingering | 0 | 891 |
| stored MIDI differs | 891, delta -2 | 0 |

**Classification: supported correction.** Every c-tied Rhythm note contradicts
itself. The frets were written for an uncapoed neck while the capo field claims
2, so the fingering sounds a whole step above the pitch the file declares.
chain49 removed the spurious capo flag and left the frets alone, which
reconciled the file with itself. The Lead staff carries capo 0 in both files
and agrees with its own fingering throughout, so the defect was confined to
Rhythm.

### The clean capo test, run 2026-08-13 on the MacBook

The iMac's live audit states the capo finding as a hypothesis: *"This audit
measured that the capo-0 Rhythm staff agrees with the audio far better. It did
not isolate the capo as the cause by holding everything else fixed. The clean
test is to re-render c-tied.gp's Rhythm staff at capo 0 with no other change and
re-measure."*

**That test has now been run.** `c-tied-RHYTHM-CAPO0.gp` is c-tied with exactly
one XML property changed, `CapoFret` on track index 1 from 2 to 0. Every other
byte of the archive was copied through unaltered.

| Build | Rhythm capo | Rhythm pitch supported | Rhythm owner agrees | Lead, the control |
|---|---|---|---|---|
| c-tied as shipped | 2 | 167/677, **24.7%** | 45.6% | 64.2% / 54.2% |
| c-tied, capo 0 only | 0 | 397/626, **63.4%** | **71.9%** | 64.2% / 54.2% |
| s6389251-chain49 | 0 | 426/656, 64.9% | 71.8% | 65.5% / 53.9% |

**The hypothesis is now a verdict. The capo is the cause.**

- The swing to be explained is 24.7% to 64.9%, which is 40.2 points. The capo
  alone delivers 38.7 of them, **96% of the total**. Every other edit chain49
  made is worth the remaining 1.5 points.
- Owner agreement runs 45.6% to 71.8%, which is 26.2 points. The capo alone
  delivers 26.3. **The Rhythm staff moving to the correct stem is not a separate
  correction. It is the same correction.** The live audit lists those as two
  findings, and this test shows one cause under both.
- The Lead staff reads 64.2% and 54.2% in both runs, identical to four
  significant figures. The edit touched only Rhythm and only Rhythm moved, which
  is the control this test needed.

### Why the pitch gate passed c-tied anyway

`pitch_census()` resolves each note as
`p = m if m is not None else sounding_pitch(tun, capo, s, f)`. The stored MIDI
value wins whenever it exists, and c-tied stores a correct MIDI value on every
note. The gate compared two identical pitch multisets and reported
`gone none / new none`, while the fingering a guitarist reads was wrong on all
891 notes. The audio audit reads the other field, and that is what exposed it.

## Phase 2, audio accuracy with shared denominators

Each staff is scored against its own stem lane. A note counts as supported when
its measured salience beats all three controls: wrong pitch by one semitone,
wrong pitch by six, and wrong time. Notes below 130 Hz are dropped from the
numerator and the denominator together, so the unjudgeable low register cannot
inflate any score.

| Transcription | Lead supported | Rhythm supported | Combined | Rhythm owner | Staff to stem | Control sep. |
|---|---|---|---|---|---|---|
| chain49 | 391/597, 65.5% | 426/656, 64.9% | 817/1253, 65.2% | 71.8% | L 2.29 dB, R 2.93 dB | 87.9% @ 10.5 dB |
| songsterr | 118/215, 54.9% | 418/1018, 41.1% | 536/1233, 43.5% | 73.7% | L 2.88 dB, R 3.52 dB | 74.0% @ 5.2 dB |
| c-tied | 367/572, 64.2% | 167/677, 24.7% | 534/1249, 42.8% | 45.6% | both to L, 0.87 dB | 70.5% @ 4.8 dB |
| SYNTH control | 236/281, 84.0% | 269/347, 77.5% | 505/628, 80.4% | 83.7% | L 21.8 dB, R 19.3 dB | 99.1% @ 25.5 dB |

The capo finding and the audio audit corroborate each other from independent
directions. The audit scores `sounding_pitch(tun, capo, s, f)`, which is what a
player physically produces. c-tied's Rhythm staff scores 24.7% against the same
recording where chain49's scores 64.9%, and the whole-step error is a complete
mechanical explanation for that gap. Neither measurement was built to test the
other.

### On stem ownership

The figures of 70.5% separation and 4.8 dB margin belong to the c-tied audit,
where both staves map to the left stem and Rhythm holds a 0.87 dB margin.
Ownership there is genuinely unresolved. chain49 separates its staves onto
distinct lanes at 2.29 dB and 2.93 dB, and the synthetic control reaches 99.1%
at 25.5 dB, which establishes that the detector behaves on cleanly separated
material. Stem attribution stays out of any accuracy claim regardless.

## The single remaining hard failure

```
IMPOSSIBLE_SPAN   bar 62.938   Rhythm Guitar
    written  s0f11 s1f4   span 7   ties none
    sounding [47, 49]   attacked [47, 49]
    held span 7 frets against a 4-fret hand at 128 bpm
    simplest legal alternative -> span 7: s0f11 s1f4
```

On this tuning the pitch 47 sits at s0f11 or s1f2, and 49 sits at s1f4 or
s0f13. Every complete voicing of both notes together spans at least 7 frets, so
no refingering closes this. The gate is correct to refuse it, and refingering is
the wrong instrument for the job.

### Superseded by the iMac, and my read was wrong twice

**This whole section is stale, and it is kept here as a record of two errors.**
The iMac's live audit at `7onething1.github.io/kilgore-guitar-accuracy-audit/`
had already cleared this span before the bundle reached me. Its Phase 3 removed
Note id 2407, Rhythm, beat 247.750, which took span 7 to span 0 and moved the
gate FAIL to REVIEW. The head build is now **chain62**, thirteen promotions past
chain49.

Where I was wrong:

1. **I called pitch 47 unmeasurable and unresolved.** The iMac measured it at
   35.88 dB in the Rhythm's own stem, where it passes all three controls, +6.1
   against the semitone, +12.0 against the tritone, +5.8 against wrong time. The
   130 Hz floor in the audit build I was handed excluded it. A later run did not.
2. **I withdrew the pitch 49 failure as ambient, and that withdrawal was the
   error.** Pitch 49 fails its wrong-time control by 18 dB. The window's median
   failure is 2.53 dB. Eighteen is seven times the ambient, so the signal was
   real and I talked myself out of it. The iMac read it correctly: pitch 49 is
   louder in the Lead's stem, the Lead staff writes it one beat either side at
   246.750 and 248.250, and the chord was two guitars written onto one staff.

The lesson is the one already in the index as
`feedback_evidence_direction_confirming_vs_refuting`. A weak-margin region
lowers confidence in marginal calls. It does not license discarding a call that
clears the ambient level by seven times.

### Original reading, retained for the record

The two notes were looked up in `audit_chain49.json` at beat 247.75, which is
where the gate's bar 62.938 lands at 128 bpm under `bar = 1 + beat/4`.

| Note | f0 | Measurable | Salience vs wrong-time control | Read |
|---|---|---|---|---|
| pitch 47, s0f11 | 123.47 Hz | **no**, under the 130 Hz floor | not scored | UNRESOLVED |
| pitch 49, s1f4 | 138.59 Hz | yes | sal 31.87 against ctrlT 49.90 | UNRESOLVED |

**Verdict: UNRESOLVED on both notes.** Pitch 47 sits below the `low_hz: 130.0`
measurability floor, so it is excluded from both numerator and denominator and
stays unresolved until the source mix arrives.

Pitch 49 was first read here as NOT SUPPORTED. **That read was wrong and is
withdrawn.** It loses to its wrong-time control, and so does the median note in
that whole window: across beats 224 to 256 the median `sal - ctrlT` margin is
**-2.53 dB**, against +9 to +14 dB everywhere before beat 160. A note failing
where the median note also fails carries no information about that note. The
correct read is that the measurement has no discriminating power there.

The actionable consequence: **do not refinger this beat, and do not promote past
it either.** The evidence at bar 62.938 is too weak to convict or acquit the
chord, and the lower note needs the source mix regardless.

### The regional dip, now explained

Rhythm support by 32-beat window runs 67 to 89 percent through beat 160, falls
to 41 to 46 percent across beats 160 to 256, and recovers to 68 to 76 percent
from beat 288 onward. Bar 62.938 sits inside the worst window.

**First hypothesis, refuted.** Low register does not explain it. Spearman rho
between the share of sub-130 Hz notes and the support rate is -0.236 across 13
windows, which is weak, and the windows at beats 288 to 352 carry 17 to 20
percent sub-130 Hz notes while scoring 68 to 74 percent support.

**What it actually is: the guitar signal drops, and the controls hold still.**

| Beats | Median sal | Median ctrlT | Margin | Support |
|---|---|---|---|---|
| 0-160 | 40.2 to 45.1 | 28.5 to 31.7 | +9.5 to +14.3 | 67 to 89% |
| 160-256 | 31.0 to 32.1 | 29.3 to 34.6 | **+1.7 to -2.5** | 41 to 46% |
| 288-384 | 52.4 to 53.7 | 27.8 to 31.7 | +20.7 to +25.4 | 68 to 76% |

The control median stays flat between 25.8 and 34.6 dB across the entire song.
The signal median falls by roughly 10 dB across beats 160 to 256 and then rises
by roughly 21 dB after beat 288. The margin, and with it the discriminating
power, collapses in the middle.

**It is a property of the recording rather than of any transcription.** The dip
appears in all three at the same beats.

| Beats | chain49 | c-tied | songsterr |
|---|---|---|---|
| 128-160 | 73.2% | 33.8% | 50.0% |
| 160-192 | 45.9% | 4.9% | 51.2% |
| 192-224 | 40.7% | 12.7% | 36.5% |
| 224-256 | 41.0% | 25.0% | 29.4% |

No transcription is being penalised for a defect here. Beats 160 to 256 are a
low-signal passage in the right guitar stem, and every candidate loses margin
there together. Any verdict drawn from that window should be treated as
low-confidence for all three.

## Receipts

Eleven receipts ship in the bundle. Receipt `6f5b0815969eca47`, named in the
critique, appears in none of them and appears in nothing this machine ran.

| Receipt | Artifact and result |
|---|---|
| 7d1254e2, 2d4e5917 | BEST / iter48, preservation PASS, position FAIL |
| 52942b12, 4779832f | ALLPARTS-PLAYABLE, verdict REVIEW, position FAIL |
| 5538dec2, 13f93f5e | ALLPARTS-SOURCE-FAITHFUL, position PASS, SPAN x3 |
| b58a3301 | span88438, the parent chain49 replaced, not shipped |
| 14516470 | 4462de17, position PASS, SPAN x1 and TIE x1 |
| 05723529 | chain49 under the old gate 7a4696cd, position PASS |
| 236e383a, bc363696 | chain49 under gate ece41376, local, both tiers NOT_RUN |

Preservation and position read NOT_RUN on the two local receipts because those
tiers key off `--source` and `--checkpoint`, and the parent build
`s6389251-span88438.gp` was left out of the bundle. Supplying that file restores
both tiers against the true parent.

## The gate was fixed, tested, and it caught something new

`NOTATION_CONFLICT` was added to `tools/impossible_gate.py` as a hard code. It
compares every note's stored MIDI against `sounding_pitch(tun, capo, s, f)` and
hard-fails on disagreement. Backup of the original at
`tools/impossible_gate.py.bak-pre-notation-conflict-2026-08-13`.

| Build, Rhythm staff | capo | Conflicts |
|---|---|---|
| c-tied.gp | 2 | **891 of 891** |
| s6389251-chain49.gp | 0 | 0 |
| ALLPARTS-PLAYABLE.gp | 2 | 0 |
| s6389251-iter48.gp and BEST | 2 | **5** |

Two builds repair the same c-tied defect by opposite routes. chain49 changes the
capo to match the frets. PLAYABLE changes every fret to match the capo. Both
reach zero conflicts. **iter48 and BEST attempted the PLAYABLE route and left 5
notes unrepaired**, which nothing had reported before this gate existed.

Regression, run with `PYTHONPATH` set to `tools/`:

- `_tests/test_comparison_basis.py` — 8 of 8 correct
- `_tests/test_promotion_rule.py` — 38 of 38 correct
- No verdict changed anywhere except c-tied and iter48/BEST gaining the new code.
  `songsterr-ai-reference.gp` still PASSes, so the check does not fire falsely.

## What the next pass needs

1. `s6389251-span88438.gp`, the parent chain49 replaced, so preservation and
   position can run against the true parent.
2. The source mix for Mare Vitalis, so the register below 130 Hz stops being
   excluded. Both external drives are unmounted on this machine.
3. A per-note salience run on bar 62.938 alone, which decides the last hard
   failure on evidence.

## Local run receipts

`0f6733f597ebad72`, `236e383aeb91caa2`, `bc36369e6637d9f4`.

Working copy: `~/Projects/_outputs/kilgore-guitar/2026-08-13-macbook`
