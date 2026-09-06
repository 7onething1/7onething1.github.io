# Tab against printed chart: six songs measured

Zomby Woof, Andy, Drowning Witch, Keep It Greasey, The Central Scrutinizer and Watermelon In Easter Hay compared bar by bar against professional drum
transcriptions. Ghost and staccato marks ignored. 2026-09-05. Nothing uploaded.

## Andy s21495, human tab by Leonard, tracks its chart

Timing would have aligned this wrong: 0:09 at the tab's 120 bpm lands on bar 5, and bars 1 to
8 are 24 closed hi-hats and 4 kicks with no snare. Matching on shape puts the chart at bars 9
to 16. **Kick agrees within one stroke in all eight bars.** The snare difference is not
reported, because at 12 px per staff space the detector returned 31 to 43 heads per bar where
a dozen exist.

## Drowning Witch s620961, one note wrong

Passage identified three ways: chart 9/8 at 130, tab bars 67 to 70 at bpm 130, album FLAC
measured at 130.8 by librosa. Eight of nine eighths match. **The seventh reads kick in the
chart and snare in the tab**, across four bars. The tab also writes nine closed hi-hats and
zero open, zero pedal there, while using both lanes in bars 60, 61, 64, 65 and 66.

## Zomby Woof s412162, four copied bars

Drumnet prints bar numbers at every system start, so the mapping is read off the page.
**Tab bars 10 to 13 are four identical bars**, each `floor tom 4, kick 4, low-mid tom 8`, with
no hi-hat and no snare. Drumnet's matching bar has about 22 events including snare, two pedal
hi-hat strokes and two grace notes. **The tab has zero grace notes across all 115 bars.**

Bars 14 onward are not compared: Drumnet's bar 14 measures 386 px per beat against a 208
median, so a barline was missed and everything after shifts.

## Keep It Greasey s604777, meter disagreement of 12 sixteenths

Tab r8852151 by Ben Dibden1: 248 bars, 4948 notes, **629 ghost notes, 29 grace beats, 17 drum
lanes**. My 2026-08-29 sweep revision on this tab was **blocked by a moderator**, so the ghosts
survived. It is the only tab in the set where the damage was stopped before it published.

Both Odd Meter Lesson pages print quiet strokes as **noteheads inside round brackets**, the
exact notation the sweep read as a defect.

Verse 1 agrees on three sources: chart 19/16 at 0:35, tab's first 19/16 at bar 22, 37.1 s,
161 of 248 bars in 19/16.

**Verse 2 agrees too, and my earlier reading was wrong.** I reported the chart writing
**24/16** against the tab's 21/16 and called it a twelve-sixteenth gap. I had read the
signature off an 880 px downscaled overview. Cropped at native resolution and enlarged nine
times, Verse 1 reads **19/16** and Verse 2 reads **21/16**, and both match the tab.

Independently confirmed: Arthur Barrow describes choruses in 4/4 with verses in 19/16 and
21/16. **24/16 appears in no source. The tab needs no change on this song.**

Two mistakes, one cause: reading a signature off a downscaled image, then blocking the item
as "source exhausted" without searching. Now gates G33 and G38 in
`~/.claude/skills/_shared/no_stop_gate.py`.

## Watermelon In Easter Hay s35881, 1,317 ghost marks lost and live

Chart: Drumnet, by BartoRomeo, "(1:20) A", quarter 55.47. Structure **matches**: both alternate
4/4 and 5/4, the tab has 53 and 52 of them, and the tempos sit 0.95 percent apart at 55.47
against 56.00.

**Lane counts are not reportable.** The chart's staff lines sit 5.0 px apart against a 15 px
floor. An eye-read suggests ~16 ride in the 4/4 bar against the tab's 14, and that is
deliberately not a finding.

**The real damage needs no scan.** Ben Dibden1's r7715683 carries **1,317** ghost marks, 1,316
ride and 1 crash across 103 of 105 bars. My live r8768414 carries **0**, same 2,091 notes. It
is a ride piece, 1,724 of 2,091 notes are ride. My queued restore r8908034 is `1317 of 1317
present, 0 missing, 0 invented`.

## What separates the two kinds of tab

Both human tabs track their charts. The machine tabs fail in a shape: identical bars
repeated forward, hi-hat articulation collapsed to closed, no grace notes anywhere, kick and
snare swapped on an off-beat.

## Method

1. Identify the passage on meter, tempo and event count together, never on position.
2. Measure lanes rather than reading them. Kick is lane 0.5, snare lane 2.5.
3. Build the subdivision grid from the hi-hat positions, not by dividing bar width.
4. Validate each bar against its own meter; a width outlier means a missed barline.
5. Below about 15 px per staff space, notehead isolation on beamed music is unreliable.
