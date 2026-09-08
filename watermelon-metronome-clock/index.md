# Watermelon rebuilt on the metronome stem

2026-09-08. Detector unchanged; only the clock changed.

## Clock comparison, held-out kick lane

| clock | kick confirmed | coverage | span |
|---|---|---|---|
| shipped snare-anchored | 226 of 504 | 44.8% | 59.3-506.1 s |
| metronome | 286 of 504 | 56.7% | 41.3-528.5 s |

997 clicks, 539.9 ms median = an eighth at the score's 56 bpm. Offset fitted on snare at click 51.

## Rescored lanes

| lane | written | onsets | confirm | chance | ratio | wrong | separation | verdict | was |
|---|---|---|---|---|---|---|---|---|---|
| kick | 504 | 909 | 56.7% | 8.6% | 6.56x | 0.94x | 6.95x | SEPARATES | 7.49x |
| snare | 342 | 691 | 56.4% | 6.9% | 8.20x | 0.77x | 10.67x | SEPARATES | 8.86x |
| hat | 246 | 549 | 51.6% | 5.2% | 9.86x | 0.87x | 11.36x | SEPARATES | not scored |
| tom | 168 | 930 | 60.1% | 8.7% | 6.94x | 1.54x | 4.51x | SEPARATES | 5.67x |
| cymbal | 1,573 | 1,323 | 40.2% | 12.7% | 3.17x | 1.06x | 3.00x | SEPARATES | 1.45x |

Cymbal lane overturned: 1,573 notes go from 1.45x separation to 3.00x. Tom dropped from 70.2% to 60.1% confirm and still separates.


## The 101-collision comparison, rerun on the metronome clock

Everything except the clock identical: same detector, 25 ms tolerance, same classifier, bars 10/13/52
excluded. Still resolves to 101 slots holding 101 instances.

| group | confirmed | rate | vs chance |
|---|---|---|---|
| the 101 colliding strokes | 37 of 101 | 36.6% | 2.83x |
| every other cymbal note | 594 of 1472 | 40.4% | 3.12x |

The original conclusion survives: the collision criterion selects nothing. Both rates roughly doubled
(19.8% and 19.3% before), and the gap stayed noise at -3.7 points, z = -0.74.
The sign flipped, which is what a null looks like. Chance on this clock is 12.9%
against the 13.3% the old pass used.
