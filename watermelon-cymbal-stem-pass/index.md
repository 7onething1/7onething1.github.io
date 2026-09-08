# Watermelon In Easter Hay: the cymbal stem pass

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
