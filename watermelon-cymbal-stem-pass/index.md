# Watermelon In Easter Hay: the cymbal stem pass

> **SUPERSEDED 2026-09-08, later the same day.** The cymbal-lane conclusion below was measured on the
> wrong clock. Rebuilt on the Moises metronome stem, same detector, same stem, same 1,573 notes:
> confirm 19.3% -> 40.2%, ratio 1.46x -> 3.17x, separation 1.45x -> 3.00x. Verdict flips weak -> SEPARATES.
>
> What was wrong: this page anchored its clock on 97 snare matches. On the held-out kick lane that
> alignment recovers 226 of 504 kicks (44.8%, span 59.3-506.1 s); the metronome clock recovers 286 of 504
> (56.7%, span 41.3-528.5 s), winning by 60 kicks while covering 41 more seconds.
>
> NOT overturned: the tom result moved the other way (70.2% -> 60.1% confirm, still separating at 4.51x),
> and the 101-collision comparison has NOT been rerun on the new clock, so its verdict is untested.
>
> Full rebuild: https://7onething1.github.io/watermelon-metronome-clock/


Event-by-event audio check of the 101 colliding cymbal strokes. Songsterr copy s6857183,
head revision r8968524. Built 2026-09-08.
Live: https://7onething1.github.io/watermelon-cymbal-stem-pass/

## Governing hierarchy

Stem event first, instrument identity second, score timing third, Guitar Pro lane last.
No verdict here uses hand availability. No verdict uses a chart lane to name a drum.

## The findings

- The 101 colliding strokes confirm at 19.8 percent. The other 1,472 cymbal notes confirm
  at 19.3 percent. The collision criterion selected nothing.
- The whole 1,573-note cymbal lane runs at 1.46 times chance on its own stem. Snare scores
  6.89, kick 5.21 and toms 7.71 through identical machinery.
- Bleed control passed. Notated toms carrying no notated cymbal confirm at 9.2 percent,
  which is below the 13.3 percent chance floor. Tom transients are not manufacturing
  cymbal confirmations.
- Per-event power is insufficient on the cymbal lane. About a third of any single CONFIRMED
  is signal. The 101 are a queue, never a repair command.
- All 49 sub-sixteenth tom positions sit a median 15.4 ms from a tom-stem onset and 81.8 ms
  from the sixteenth grid. The regrid is contraindicated.
- Display bar 25 confirms the ear edit at 19 of 19 pairwise orderings, 129.2 Hz down to 80.7 Hz.
- Display bar 57 is UNRESOLVED and neither side of it is a finding. The measurement is withdrawn
  on its own terms: six consecutive strokes reading an identical 86.1 Hz at 5.38 Hz bin resolution
  is a tracker lock, so a single-F0 read cannot support a direction claim. The chart cannot settle
  it either, because this scan is 5.0 px per staff space against a 15 px notehead floor
  (q-2026-09-06-c45c11). What survives is the ten-stroke rms decay 0.0180 -> 0.0067, a loudness
  contour that does not depend on the failed F0. Waits on a ~3x rescan.

## Controls, all pre-registered before scoring

| Notated lane | vs stem | n | confirm | chance | ratio |
|---|---|---|---|---|---|
| Tom | toms | 168 | 0.702 | 0.091 | 7.71x |
| Snare | snare | 342 | 0.477 | 0.069 | 6.89x |
| Kick | kick | 504 | 0.448 | 0.086 | 5.21x |
| Cymbal | cymbals | 1573 | 0.193 | 0.133 | 1.46x |
| Cymbal | bass | 1573 | 0.203 | 0.219 | 0.93x |

Pre-registration hash: 3c7852967a66919806a81dde02212e5076ad073798d74dbd7ba43f1251e63557

## Clock parity

The alignment was fitted on the original tab. Both files hold 105 bars, 472 quarter notes,
one tempo at 56 bpm, zero meter disagreements, maximum bar-start delta 0.0000 ms. The 97
anchors are snare matches, so cymbals play no part in building the ruler they are graded by.

## Snare reconciliation

193 counts plain non-ghost snare instances. 342 counts all instances in r8968524, being 193
plain plus 149 restored ghosts. On the chart side this disk holds four reader passes giving
83, 136, 137 and 154 heads from one image. The 124 came from a parallel session and is not
on this disk. Neither side holds the same quantity across the two comparisons.

## What was not done

No note was added, moved or removed. Nothing was uploaded to Songsterr.

Source: ~/Projects/_outputs/zappa-watermelon-cymbal-stem-pass/

## Applying the Perfect Stem Read spec (installed as /perfect-stem-read)

Declaring the scope fields the spec requires surfaced a defect the earlier reconciliation missed.

| Field | PRESWEEP r7715683 | BASELINE r8968524 |
|---|---|---|
| SHA-256 (16) | 687445e3371131fd | 4376b4a39dd1a466 |
| Voices | [0] | [0, 1] |
| Total snare instances | 193 | 342 |
| Plain / ghost | 193 / 0 | 193 / 149 |
| Grace notes | 0 | 0 |
| Distinct 16th positions | 193 | 293 |
| Positions carrying two notes | 0 | 49 |

All 49 doubled positions are a plain snare in voice 0 stacked with a ghost snare in voice 1 at the
identical bar and sixteenth slot. The pattern is unanimous. A drummer cannot strike one snare loudly
and quietly at the same instant, so these are 49 notation collisions the ghost restore introduced.
Resolved on provenance rather than audio. No edit proposed.

## Gaps in this pass, measured against the spec

- No wrong-recording control was run on the alignment. The clock was inherited (97 snare anchors) and
  proved identical across both GP files, and a deliberately incorrect recording was never tested.
- The leakage gate ran as a single bleed control (toms with no notated cymbal, 9.2 percent, below the
  13.3 percent floor). Template similarity and silent-passage detection rates were not measured.

## Wrong-recording control (closes the first spec gap)

Watermelon's notated events, through the Watermelon clock, scored against Keep It Greasey, a different
Zappa performance run through the same Moises separator.

| Lane | n | Right recording | Wrong recording | Separation |
|---|---|---|---|---|
| Tom | 168 | 7.71x | 1.36x | 5.67x |
| Snare | 342 | 6.89x | 0.78x | 8.86x |
| Kick | 504 | 5.21x | 0.70x | 7.49x |
| Cymbal | 1573 | 1.46x | 1.00x | 1.45x |

Three lanes collapse against the wrong performance, so the clock is specific to this recording. The
cymbal lane returns exactly 1.00x on the wrong recording and 1.46x on its own, so some cymbal notation
is genuinely supported. The 1.45x separation sits under the 1.5x floor, so the lane characterises well
and cannot promote an individual edit. Data: data/wrong_recording.json

## Leakage gate (closes q-2026-09-08-39914f) and the number that reframes the page

Templates built from this recording only. An isolated event has no other drum notated within 50 ms:
865 isolated cymbals, 59 isolated toms. Margin = similarity to the cymbal template minus similarity
to the tom-bleed template.

| Population | n | Margin median | Cymbal-stem energy | Tom-stem energy |
|---|---|---|---|---|
| Isolated cymbal (target) | 400 | +0.0078 | 168.1 | 0.2 |
| Isolated tom (bleed signature) | 59 | -0.0071 | 87.6 | 182.7 |
| The 101 | 101 | -0.0038 | 148.2 | 154.4 |

A tom alone puts 87.6 of energy into the cymbal stem against 168.1 for a real isolated cymbal, so this
separation leaks about half a cymbal's worth of energy on every tom hit.

### The two routes corroborate

| Subset of the 101 | n | Margin median | Reads as |
|---|---|---|---|
| Onset CONFIRMED | 20 | +0.0131 | cymbal, above the isolated-cymbal median |
| Onset ABSENT | 80 | -0.0058 | near the tom-bleed median |

Mann-Whitney CONFIRMED > ABSENT, p = 0.0001. Two independent measurements agree, so the 20 confirmed
strokes are real cymbal.

### Detector recall, the important number

On the 865 cleanest cymbals, those with no other drum within 50 ms, the detector confirms only
14.9 percent against a 13.3 percent floor. That is 1.12x, essentially chance, and an 85 percent miss
rate on known-good events. Isolated cymbals therefore score WORSE than the tom-coincident 101 (1.49x)
and worse than the lane as a whole (1.46x).

CORRECTION: the earlier claim that "the whole 1,573-note cymbal lane is the defect at 1.46x" is a
statement about the DETECTOR, never about the notation. Nothing about whether the cymbal notation is
correct follows from it. ABSENT carries no information and never licenses a removal, since 85 percent
of known-good cymbals come back ABSENT. Every one of the 101 stays.

Detector rate through notation-silent passages: 0.98/s inside 4 stretches totalling 19.4 s, against
2.96/s elsewhere, ratio 0.33. Small sample, little weight on its own.

Data: leakage_gate.json, leakage_gate2.json, leakage_gate3.json, leakage_gate4.json
