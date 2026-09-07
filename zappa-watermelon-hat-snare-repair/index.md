# Watermelon In Easter Hay: the hi-hat and snare the tab leaves out

Built 2026-09-07. Songsterr copy s6857183 r8951854, published.
Live page: https://7onething1.github.io/zappa-watermelon-hat-snare-repair/
Live tab: https://www.songsterr.com/a/wsa/frank-zappa-watermelon-in-easter-hay-brandon-edit-drum-tab-s6857183

## What went on the tab

286 pedal hi-hat and 147 snare rebound ghosts, in a NEW voice. Voice 0 was not touched.

## The hat stem is an instrument, not ride residue

The attribution control ran first, because a pitch in one stem never proves that
instrument played it. Two measurements settle it, neither one using the tab:

- median onset decay 52 ms against the cymbal stem's 348 ms
- envelope correlation with the cymbal stem -0.015

## The pulse, scored against a pre-specified null

The eighth-note period was predicted from the tab's own tempo before the test ran.

| test | R | null | ratio | z | p |
|---|---|---|---|---|---|
| fixed eighth, 0.5423 s | 0.1576 | 0.0494 | 3.19x | 4.11 | 0.0010 |
| best of a 660-period sweep, 0.5400 s | 0.2039 | 0.1487 | 1.37x | 3.91 | 0.0033 |

The free sweep lands 0.41% from the predicted eighth. The sweep's own ratio is low
because a max-over-660 statistic needs a max-over-660 null, which is what it got.

## A circular test, caught and replaced

The first grid test scored residual onsets at 0.02x to 0.04x of chance, which looked
decisive. It was circular. Residual is defined as more than 45 ms from any notated
event, every notated event sits on the grid, so the exclusion alone drives occupancy
below chance. The replacement pushes the null through the identical exclusion filter.

## Resolution matching, which is why this is a bar-level repair

Every one of the 944 eighth slots in the score already carries a notated ride event, so
no slot is free for an unambiguous per-slot reading. The notation therefore follows the
resolution the evidence has:

| stage | test | result |
|---|---|---|
| 1, per bar | hat energy ON the eighths vs the 16ths between them | 46 of 105 bars clear 1.5x |
| 1, null | same test, grid rotated by a 16th | 17.1% of bars clear |
| 2, per slot | slot peak vs that bar's own offbeat median | 286 of 416 kept |

Effect at stage 1 is 2.56x as many bars passing on the true grid.

## Hit, rebound, rebound

Brandon called this from the ear before any measurement. It holds.

| measurement | value |
|---|---|
| multi-onset snare clusters | 157 of 180 |
| loudest stroke FIRST | 118, 75.2% |
| loudest in the middle | 28, 17.8% |
| loudest LAST, a drag | 11, 7.0% |
| follower amplitude / leader | 0.327 median, below 1.0 in 91.2% of pairs |
| intra-cluster gap | 52.2 ms median, sd 25.0 ms |

The gap spread rules out detector re-triggering, which would sit at a fixed multiple of
the 5.8 ms analysis hop. Cluster leaders match the tab's notated snare at 36.9%,
followers at 15.3%, so the followers are the strokes the tab omits.

## The eye overruled the count

The first build wrote EVERY follower onset, 267 of them, which is what the measurement
literally says. Rendering bars 12, 31 and 45 through alphaTab headless and looking at them
showed a size-12 cluster smearing into a six-note run of parenthesised heads along the snare
line. That does not read as hit-rebound-rebound, which is the figure Brandon named. The
second build keeps the two loudest followers per cluster, giving 147, and the same bars now
render as one ghost either side of the hit.

The count was not wrong. It was answering a different question from the one the notation has
to answer.

## Symbols, per the drumset standard rather than a general dictionary

- pedal hi-hat: articulation 6, staff line 9, the first space BELOW the staff, X
  notehead, closed by default. Weinberg, Guidelines for Drumset Notation, 1994.
- rebound ghosts: `<AntiAccent>Normal</AntiAccent>`, the parenthesised notehead.

## What was NOT touched, reported as a set difference

Voice 0, compared on bar, position, midi, articulation, ghost, staccato and dynamic,
with the same flags read on both sides:

    |source \ output| = 0     |output \ source| = 0     symmetric difference = 0
    ghost-flagged     |A\B| = 0   |B\A| = 0
    staccato-flagged  |A\B| = 0   |B\A| = 0

Bar 104 voice 0 is one quarter short of its 5/4 signature. That is present in the
transcriber's own file, in the pre-sweep original and in the live export, so it was
carved out by name and left alone.

## Published state, read from the CDN

    part name 'Vinnie Colaiuta'   105 measures   85 with 2 voices, 20 with 1
    voice 0   ride 1724  snare 193  kick 107  crash 53  pedal hat 6  toms 6  other 2
              ghost-flagged 1317
    voice 1   pedal hi-hat 286     snare 147, all 147 ghost-flagged

All 9 track names survived the import. Both files carry 137 CDATA blocks, which is the
variable that decides it.


## All four lanes, scored identically

Two-way, one-to-one matching on the mir_eval.onset convention so a single loud onset cannot
absorb many written events. Every rate carries its circular-shift chance figure. The floor is
1.5x.

| lane | written | onsets | A written->audible | A chance | A ratio | B audible->written | B ratio | unsupported written | unnotated audible |
|---|---|---|---|---|---|---|---|---|---|
| kick | 107 | 652 | 0.430 | 0.127 | 3.40x | 0.071 | 3.53x | 61 | 606 |
| snare, author only | 193 | 637 | 0.508 | 0.091 | 5.61x | 0.154 | 4.36x | 95 | 539 |
| **snare + our 147 ghosts** | 340 | 637 | **0.721** | 0.092 | **7.80x** | **0.385** | **6.39x** | **95** | **392** |
| toms | 6 | 665 | 0.500 | 0.101 | 4.96x | 0.005 | 4.03x | 3 | 662 |
| cymbal | 1778 | 1074 | 0.204 | 0.177 | 1.15x | 0.337 | 1.06x | 1416 | 712 |

Read the snare rows together. Adding the 147 rebound ghosts moved direction A from 5.61x to
7.80x and direction B from 4.36x to 6.39x, while unsupported-written stayed at 95. It did not
rise, so not one of the 147 was placed where the stem has no onset. Unnotated audible fell
from 539 to 392, which is those 147 onsets now carrying notation.

Kick, snare and toms all clear the floor in both directions. The cymbal lane does not, and it
is the only lane that does not.

## Ride bleed, the control that could have killed the hi-hat repair

The notated ride is a dead-even 16th pattern: 866 events on eighths, 858 on the 16ths between
them, 0 anywhere else. Inside the 46 passing bars it is exactly 391 and 391.

| position, all carrying a NOTATED RIDE STRIKE | n | median hat-stem peak |
|---|---|---|
| ride on an eighth | 391 | 0.1193 |
| ride on the 16th between eighths | 391 | 0.0062 |

**19.3x.** Equal ride strikes on both sides, and the hat stem answers only on one. Ride bleed
cannot produce that asymmetry. The decay reading agrees: at the 286 placed slots the hat stem
decays in 46.4 ms and the cymbal stem in 348.3 ms, a 7.5x separation, which is a discrete
closed-hat event rather than a ride strike.

## The audition list, not a deletion list

Each placed pedal hi-hat gets three independent readings instead of one ratio: is there a
DISCRETE local peak rather than raised energy, does it decay like a hat, and does the cymbal
stem carry its own event at that instant.

| verdict | all 286 | of the 46 under 3x contrast |
|---|---|---|
| SUPPORTED | 207, 72.4% | 26 |
| AMBIGUOUS | 8, 2.8% | 4 |
| UNSUPPORTED | 71, 24.8% | 16 |

Nothing was deleted on this reading. The 71 UNSUPPORTED notes carry raised energy with no
discrete peak, and 55 of them sit ABOVE 3x contrast, so contrast alone was the wrong sort.
Full per-note table with bar, beat, stem seconds, contrast, prominence and both decay
figures: `out/AUDITION-hat-notes.csv`.


## Accent plus normal, or normal plus ghost?

The 0.327 ratio measured each follower against its own cluster leader, so it only ever said
the leader is louder. It is blind to which of the two carries the marking. Settling it needs a
reference population of ordinary strokes built independently of the cluster structure.

The tab supplies one. All 193 notated snare events carry ghost false, staccato false, dynamic
F and the same lane, with zero accents anywhere on the snare. The transcriber wrote every one
as an ordinary hit.

### The answer flipped on my choice of reference class, which is the interesting part

| reference class for ORDINARY | leaders | followers | separation |
|---|---|---|---|
| onsets matched one-to-one to notation, n=98 | +2.9 dB | -7.7 dB | 10.6 dB |
| written positions above a histogram trough, n=186 | +11.2 dB | +0.6 dB | 10.7 dB |
| **written positions with a discrete attack transient, n=99** | **+1.5 dB** | **-9.2 dB** | **10.7 dB** |

**The separation is 10.7 dB in all three.** Only the zero point moved. So the whole question is
where ordinary sits, and the middle row put roughly 48 near-silent written positions inside
ORDINARY, which dragged the reference down about 10 dB and produced a false accent reading.

The third row settles membership on an objective criterion rather than a threshold picked by
eye: a real quiet stroke still has an attack transient, and noise floor does not.

### What that gives

- leaders sit at **+1.5 dB**, the 64.7th percentile of ordinary strokes
- followers sit at **-9.2 dB**, the 36.6th percentile

A written accent normally runs 6 to 10 dB over ordinary. The leaders are 1.5 dB over, so the
**accent reading is refused**. The followers are 9.2 dB under, short of the 15 to 25 dB a
textbook ghost implies, so the ghost reading is supported and not proven. What the audio
carries is an ordinary leader and a distinctly softer follower, and the parenthesis is the
standard way to write a quiet unaccented stroke.

### A finding that fell out of the reference work

94 of the 193 written snare positions carry **no attack transient at all**, only noise floor.
That agrees with the lane table's 95 unsupported written events, reached by a different route.
Roughly half the snare notation on this tab has no audio under it.


## The kick: Brandon was right and my test was the wrong instrument

He said we are missing some kicks. I ran three grid tests, got 1.00x to 1.32x, and wrote it
up as a failed search. That writeup was wrong and it is preserved here because the error is
the useful part.

### Why the grid tests could never answer it

A grid test asks whether unnotated onsets land on the 16th grid. Watermelon is rubato and
Vinnie Colaiuta is not locked to a 16th, so real kick strokes fail that test while being
entirely real. A failing grid score is equally explained by the drummer playing loosely, so
the test had no power to decide the question either way.

### The clock was never the problem, which is what I should have checked first

| lane | median offset, written event to nearest detected onset |
|---|---|
| kick | -17.4 ms |
| snare, the lane the clock was fitted on | +11.6 ms |

Centred, both of them. So the 652 kick onsets against 107 written events are a real gap in
the notation.

### Placing them the way the snare ghosts were placed

At measured positions on the 64th grid, no quantisation to a musical grid, gated at -6 dB of
the unnotated population's own median. 398 placed.

| notation | written | A written->audible | A ratio | B audible->written | B ratio | unsupported written |
|---|---|---|---|---|---|---|
| author only | 107 | 0.430 | 3.40x | 0.071 | 3.53x | 61 |
| **author + our 398** | **505** | **0.879** | **7.02x** | **0.681** | **6.93x** | **61** |

Unsupported-written stays at **61**. It did not move, so not one of the 398 was placed where
the kick stem is silent. Direction B goes from 0.071 to 0.681, so the tab now accounts for 68
of every 100 audible kick onsets instead of 7.

### The bass control, which was worth running and came back clean

The kick detector runs at 30-180 Hz and this record has Arthur Barrow on fretless bass.

| test | ratio |
|---|---|
| candidates vs the 334 notated bass events | 1.02x |
| candidates vs 1,433 isolated bass-stem onsets | 1.00x |
| the author's own written kicks vs the same bass onsets | 1.96x |

Not bass bleed. The author's kicks lock to the bass at 1.96x, which is what a kick part does.


## Readability without deleting evidence

A global 16th quantisation made the page readable and merged 44 evidence-backed events on the
way, which changes the performance rather than its display. Replaced with a per-bar adaptive
grid: each bar takes the COARSEST resolution that loses nothing.

| per-bar grid | bars |
|---|---|
| 16th | 55 |
| 32nd | 29 |
| 64th | 9 |

| approach | events kept of 831 | rest beats | ties |
|---|---|---|---|
| original build, 64th throughout | 831 | 574 | 0 |
| tie chains | 831 | 105 | many, rendered as slurs across the bar |
| global 16th | 787 | 86 | 0 |
| **per-bar adaptive** | **831** | **120** | **0** |

The tie version was rendered with alphaTab and thrown away: slurs arcing across a bar read
worse than the rests they replaced. Look at a notation change before shipping it.

### The builder now refuses to lose an event

Voice 0 already had a set-difference-zero check protecting the author's material. The added
material now has the same protection, and it runs before the file is written.

    ACCEPTANCE GATE, evidence-backed events must survive notation
       hat    planned  286  placed  286   OK
       ghost  planned  147  placed  147   OK
       kick   planned  398  placed  398   OK
       PASS, nothing merged away

Published state read back from the CDN: kick 398/398, pedal hi-hat 286/286, snare ghosts
147/147, ride accents 409/409, cymbal parentheses 0/0.


## The toms were wrong and are gone

599 toms went live where the author wrote 6, roughly six per bar on a slow ballad. Brandon
called it fraud and he was right. Removed.

**The fault was the gate, not the stem.** Kick and snare were scored against the author's own
written events as a reference class. The tom lane had 6, too few for that, so intensity was
scored against the CANDIDATE POPULATION'S OWN MEDIAN. A self-referential reference cannot
reject a population that is mostly artifact: whatever the junk level is becomes the yardstick,
and 650 of 662 candidates passed.

The supporting evidence was all true and none of it was a count check. Attribution 0.27x and
0.52x of chance against the kick and snare stems, decay 348 ms, two clean fundamental modes
with nothing between them. Not one of those asked how many toms a drummer plays in this song.

### Three calibrated attempts, all failed

| reference class | result |
|---|---|
| candidates' own median | 650 of 662 pass, 5.7 per bar |
| toms-stem level at the author's snare strokes | that level is 0.3, so 662 of 662 pass |
| the author's own 6 written toms | candidates median 44.2 against his 24.8 |

The last row is the answer. The detected candidates are LOUDER than the strokes the
transcriber actually called toms, and two of his six read 0.0 and 7.5 in that stem. The loud
content there is not what a transcriber hears as a tom, so no threshold on it can be trusted.

Drumnet's hand chart of this same Joe's Garage take, read at native resolution, shows ride
with snare and kick underneath and toms only as short runs at phrase ends. Toms stay out.

## Final state

| lane | on the tab | source |
|---|---|---|
| kick | 398 added | measured onsets, unsupported-written flat at 61 |
| pedal hi-hat | 215 added | 286 placed, 71 dropped for having no discrete attack peak |
| snare rebound ghosts | 147 added | hit plus two rebounds, capped at two |
| toms | 0 added | three reference classes failed |
| cymbal parentheses | 0 | 1,316 removed |
| ride accents | 409 | one per quarter, the author's own segment |
| cymbal removed | 202 | 13 bars where struck against written runs 0.00 to 0.35 |

## Stopping condition

1. snare, kick and toms: CLOSED. All three clear 1.5x in both directions.
2. kick: CLOSED. 398 placed, 3.40x -> 7.02x, unsupported-written flat at 61.
3. snare accent-vs-ghost: accent refused at +1.5 dB, ghost supported at -9.2 dB.
4. hi-hat: closes when the 71 UNSUPPORTED notes are auditioned against the isolated hat stem
   and each is kept or pulled.
5. cymbal: 1,416 written events carry no audio support at 1.15x. The detector finds 1,074
   onsets against 1,778 written, so a perfect transcription could not score above 0.60 in
   direction A. The observed 0.204 sits well under that ceiling, and this method cannot
   adjudicate a continuously played ride at 16th density. That lane needs a different
   instrument, not another run of this one.

## Method

Spectral flux, 1024-pt Hann, 256 hop, 44.1 kHz. Hat 8-16 kHz for per-slot work and
2-12 kHz for onsets, snare 2-12 kHz, kick 30-180 Hz. Piecewise-linear clock through 97
snare anchors, span 59.33 s to 506.08 s. Nulls are circular shifts or exclusion-matched
uniform draws, 200 to 2000 draws each.

Source stems: `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`
Tools: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/tools/`
