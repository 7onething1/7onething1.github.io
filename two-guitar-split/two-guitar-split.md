# Two guitar split

Which songs carry a recoverable second guitarist, measured from the stereo guitar stem.

## Result, 26 songs

| Verdict | Count | Meaning |
|---|---|---|
| SEPARABLE | 20 | one channel carries attacks the other never plays |
| MONO | 3 | L and R correlate 0.85 to 0.90, the second part is not in the file |
| UNISON | 2 | both channels play the same attacks |
| UNUSABLE | 1 | the shifted-time control nearly matches the score |

Six of the 26 cannot be fixed by any method or any purchase.

## Why the existing tabs cannot be split note by note

Every position on Kilgore Trout's 449-position rhythm staff, offset searched over
plus or minus 3 seconds at 10 ms steps:

| Window (ms) | Best offset (s) | Matched % | Shifted control % | Margin |
|---|---|---|---|---|
| 30 | -2.26 | 29.6 | 22.7 | 6.9 |
| 50 | -2.28 | 43.9 | 36.1 | 7.8 |
| 80 | -2.89 | 61.0 | 57.5 | 3.5 |
| 120 | -2.39 | 75.9 | 71.0 | 4.9 |
| 200 | -2.25 | 90.0 | 86.6 | 3.4 |

Loosening the window raises the real score and its control together, so the
matches are density and never alignment. The tool refuses rather than writing a
confident two-staff file out of noise.

## The route that works

Split the audio, not the tab. Both channels share one clock.

```
python3 ~/.claude/skills/two-guitar-split/split_stem_channels.py \
    --stem "<song>/guitar.mp3" --out-dir <work>/split
```

Then transcribe each channel on its own and write the two results onto two
guitar staves. Two guitars, never four.

## First song through the whole chain

The Immortal Soul of Mundo Cani, margin 70.8.

| Stage | Left / Gtr 1 | Right / Gtr 2 |
|---|---|---|
| Transcribed notes | 610 | 691 |
| Attacks unique to that channel | 358 | 446 |
| Written to staff | 529 | 633 |
| Playability gate | REVIEW, 0 hard failures | REVIEW, 0 hard failures |
| Drums / Vocals preserved | 352 | 22 |

Pitch-class agreement where the two channels coincide is 52.0% against a 25.4%
shifted control, margin +26.6.

Not established: pitch accuracy (this is detector output), note lengths and ties
(16th grid only), the last 5 seconds (notation 123.4 s against audio 128.4 s).
Nothing uploaded.

## Audio accuracy audit

| Measure | Result | Reading |
|---|---|---|
| DTW map | 26.7% vs 8.1% random, gain +18.6 | ACCEPTED |
| Attack recall | 24.4% (284 of 1162) | low |
| Attack precision | 91.7% (122 of 133 onsets) | 8.7 attacks per onset, so density |
| Timing pre-warp | median 104.8 ms, p90 220.6 ms | post-warp 0.0 ms is circular |
| Pitch agreement | 50.9% vs 47.0% control | no discriminating power |
| Ownership, canonical tool | +0.2651 vs +0.2766 | INVALID, that tool's corpus is Shiner |

### Channel ownership against a human tab of the same song

Chance-normalised; the +5 s shift control lands at -0.1 and +0.3, which is zero.

| Number | This artifact | Human Songsterr tab |
|---|---|---|
| Gtr1 separation over best wrong stem | +0.4 | +0.4 |
| Gtr2 separation over best wrong stem | -3.2 | -16.3 |
| Gtr1 own minus other channel | -2.8 | -5.4 |
| Gtr2 own minus other channel | +2.0 | -1.2 |

VERDICT: audio accuracy UNDETERMINED, not refuted. The human tab fails the same
controls as badly or worse, and on one staff its shifted control beat its real
channel, so the measure has no power on this song. This artifact matches or beats
the human tab on all four numbers.

## Pitch evidence, timing-free

Cosine similarity, staff pitch-class histogram against channel mean chroma.

| Scored against | Gtr 1 | Gtr 2 |
|---|---|---|
| its OWN channel | 0.9139 | 0.9047 |
| WRONG: Kilgore Trout (same album, same tuning) | 0.6514 | 0.6491 |
| WRONG: Mars Volta, Octahedron | 0.6904 | 0.6549 |
| WRONG: Simple Forms | 0.5615 | 0.6197 |
| WRONG: Branches on the Arrow Peak | 0.4525 | 0.4608 |
| SEPARATION over best wrong stem | +0.2235 | +0.2498 |

Same measure on the human Songsterr tab of this song:

| Number | This artifact | Human tab |
|---|---|---|
| Gtr1 cosine to own channel | 0.9139 | 0.6703 |
| Gtr2 cosine to own channel | 0.9047 | 0.8009 |
| Gtr1 separation over best wrong | +0.2235 | +0.2130 |
| Gtr2 separation over best wrong | +0.2498 | +0.0416 |

PITCH CONTENT CONFIRMED and better than the human tab. The measure has power
because it separates on the human tab too.

NOT settled: which channel (the two channels' chroma are near-identical, 0.9139
vs 0.8957 and 0.9047 vs 0.9313), timing (recall 24.4%, pre-warp median 104.8 ms),
and duration/ties (none written).

## Timing

| Build | Median residual | p90 | Paired | Notation span | Drift R2 |
|---|---|---|---|---|---|
| This artifact, 16th grid | 118.9 ms | 289.0 ms | 244/461 | 123.2 s | 0.002 |
| 32nd grid, REJECTED | 112.3 ms | 289.0 ms | 374/675 | 123.3 s | 0.012 |
| Human Songsterr tab | 95.1 ms | 262.1 ms | 100/197 | 116.6 s | 0.001 |

Scatter, not drift: slope +0.0002 s/s, R2 0.002, and a 5% tempo search buys 6 ms.

The 32nd grid moved timing only 118.9 -> 112.3 ms and cost 17 rapid-shift
violations plus one severe jump, so it is rejected and kept beside the artifact.

Only 131 onsets are detectable across 129 s of this stem, so the reference is
sparse and sets a floor. The human tab of this song sits at 95.1 ms on the same
measure; this artifact is 17 ms above it and tracks the record's length better,
4.65% short against 9.87%.

## Provenance

Zero note ids and zero beat ids inherited from the Songsterr AI tab. 25 of 529
and 13 of 633 events coincide on bar/position/fret/string/pitch, 4.7% and 2.1%,
sharing no elements. No note content is inherited.

## Sources

- `~/Projects/_outputs/impossible-guitar-parts/kilgore-role-separation-2026-09-07/channel_separability_report.csv`
- `~/.claude/skills/impossible-guitar-parts/channel_asymmetry_check.py`
- `~/.claude/skills/two-guitar-split/`
