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

## Sources

- `~/Projects/_outputs/impossible-guitar-parts/kilgore-role-separation-2026-09-07/channel_separability_report.csv`
- `~/.claude/skills/impossible-guitar-parts/channel_asymmetry_check.py`
- `~/.claude/skills/two-guitar-split/`
