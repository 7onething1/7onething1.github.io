# Watermelon In Easter Hay: the hi-hat and snare the tab leaves out

Built 2026-09-07. Songsterr copy s6857183 r8951709, published.
Live page: https://7onething1.github.io/zappa-watermelon-hat-snare-repair/
Live tab: https://www.songsterr.com/a/wsa/frank-zappa-watermelon-in-easter-hay-brandon-edit-drum-tab-s6857183

## What went on the tab

286 pedal hi-hat and 267 snare rebound ghosts, in a NEW voice. Voice 0 was not touched.

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
    voice 1   pedal hi-hat 286     snare 267, all 267 ghost-flagged

All 9 track names survived the import. Both files carry 137 CDATA blocks, which is the
variable that decides it.

## Method

Spectral flux, 1024-pt Hann, 256 hop, 44.1 kHz. Hat 8-16 kHz for per-slot work and
2-12 kHz for onsets, snare 2-12 kHz, kick 30-180 Hz. Piecewise-linear clock through 97
snare anchors, span 59.33 s to 506.08 s. Nulls are circular shifts or exclusion-matched
uniform draws, 200 to 2000 draws each.

Source stems: `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`
Tools: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/tools/`
