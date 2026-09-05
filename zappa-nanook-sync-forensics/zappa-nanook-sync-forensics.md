# Nanook Rubs It — drum tab sync forensics

Songsterr s35865, Frank Zappa, Apostrophe ('). Measured 5 September 2026 on MacBookPro.

## Verdict

The notes are right and the grid is wrong. Two separate errors sit in the time
signature and tempo layer, and they compound.

| Source of error | Size | Effect on playback |
|---|---|---|
| Tempo written 69, record runs 70.2 | +1.74% | Progressive drift, about 4.8 s by the end |
| Bar 1 and bar 109 padded, 5.5 extra quarter beats | +1.69% | Dead grid, 4 extra eighths at the front and 7 at the back |
| Combined | +3.51% | 9.72 s of error across a 4:37 track |

Record: 277.235 s. Tab notates 286.96 s.

## The file on the drive is the published tab

The Guitar Pro file and the drum staff on Songsterr carry identical content in all
109 bars, compared note by note on position in the bar plus drum MIDI number.
Both hold 1309 drum notes. Both write bar 1 as a silent 3/4 and bar 109 as 4/4.
Both carry one hidden tempo automation of 69 at bar 0. Revision 8768967 changed
parenthesised noteheads and nothing else, so the desync was inherited from the
original transcription.

## Error 1: tempo

Four independent measurements of the record, none of them 69.

| Method | Signal | Quarter BPM |
|---|---|---|
| Bar-period autocorrelation | full mix | 69.93 |
| Eighth-period autocorrelation | full mix | 70.58 |
| Normalised cross-correlation of the notated pattern | Demucs drum stem | 70.20 |
| Kick and snare onset matching | Demucs drum stem | 70.22 |
| Written in the tab | — | 69.00 |

The tempo holds steady across the track. In twenty-second windows the bar period
stays between 2.543 s and 2.601 s. The record's 6/8 bar measures 2.574 s and the
tab notates it at 2.609 s, so every one of the 101 6/8 bars runs 35 ms long.

## Error 2: padded bars

The same drum part is written twice, once standalone and once inside Nanook Suite
s35878. Aligning by drum content rather than by tempo marks, the standalone staff
lands on suite bar 38 with a score of 109.0 out of 109, against 68.0 for the
next-best offset. Zero bars differ on position and drum MIDI.

| Bar | Standalone | Suite | Eighths | Difference |
|---|---|---|---|---|
| 1, silent pickup | 3/4 | 2/8 | 6 vs 2 | +4 eighths |
| 2 to 5 | 3/4 | 6/8 | 6 vs 6 | none |
| 6 to 108 | identical meters | identical meters | — | none |
| 109, tail | 4/4 | 1/8 | 8 vs 1 | +7 eighths |

Bars 2 to 5 only look different. A 3/4 bar and a 6/8 bar both hold six eighths.
The padding is 5.5 quarter beats, 4.78 s at 69 BPM.

The suite's partial bars belong there, joining the sections on either side. Lifting
the 109 bars out to stand alone exposed those joints, and they were rounded up into
full 3/4 and 4/4 bars carrying grid time with no audio underneath.

## The arithmetic closes

```
padding    330.0 / 324.5 quarter beats   = +1.695 %
tempo      70.20 / 69.00 quarter BPM     = +1.739 %
combined   1.01695 x 1.01739 - 1         = +3.464 %
measured   286.96 s / 277.23 s           = +3.507 %
residual                                 =  0.04 points
```

A residual of 0.04 points means these two errors account for the whole discrepancy.

## The fix

| Grid | Quarter beats | Kicks matched | Snares matched | Duration error |
|---|---|---|---|---|
| As published, 69 BPM | 330.0 | 26.1% | 45.9% | +3.51% |
| Tempo corrected only | 330.0 | 45.1% | 52.3% | +1.71% |
| Tempo 70.2 plus suite meters | 324.5 | 59.5% | 76.9% | +0.04% |

Two edits, nothing touched in the notes. Set the tempo automation from 69 to 70.2.
Change bar 1 from 3/4 to 2/8 and bar 109 from 4/4 to 1/8. Grid error drops from
+3.51% to +0.04%, inside the 2% tolerance that preflight_import.py enforces.

## What stayed unresolved

The exact bar-level start offset is ambiguous. A 6/8 groove this uniform
autocorrelates at the bar, so alignments separated by about 2.56 s score almost
equally, and different fitting passes returned offsets differing by roughly two
bars. Duration and tempo do not depend on that, since both come from the record's
own period and total length. Check the start point against a structural landmark
such as the two 4/4 bars at 6 and 7.

The onset detector over-triggers, returning 551 kick-band onsets where the tab
writes 333 kicks. Over-detection makes matching easier, so 26.1% is a ceiling for
the tab as published.

## Files

- Transcription: `~/Projects/_outputs/songsterr-zappa-paren-fix/s35865-Nanook-Rubs-It/ORIGINAL-Frank Zappa-Nanook Rubs It-01-14-2026.gp`
- sha256 `d9c36bc393ba62df511d35972f8f48ccaa0b60af2e43852ecd7dac5ba6d943fc`
- Suite: `~/Projects/_outputs/songsterr-zappa-paren-fix/s35878-Nanook-Suite/ORIGINAL-Frank Zappa-Nanook Suite-07-09-2026.gp`
- Measurements: `~/Projects/_outputs/zappa-nanook-sync-forensics/findings.json`
- Ruler: YouTube `8bXSsh3Z-xE`, FrankZappaVEVO official visualizer, 277.235 s
