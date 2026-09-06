# Tab against printed chart: four songs measured

Zomby Woof, Andy, Drowning Witch and Keep It Greasey compared bar by bar against professional drum
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

Verse 2 does not. The chart writes **24/16** at 1:16; the tab has **zero 24/16 bars** and uses
**21/16** for bars 42 to 45. The 9/16 then 4/4 that follows appears in both, fixing the
location, so the block differs by 12 sixteenths, three whole beats. No audio on disk.

**Inventory correction:** the third source is not "Pete Sweeney". It is a Modern Drummer
collection holding All Blues (Jeff Wald), Dong Work For Yuda (Chris Brady) and a **complete
Keep It Greasy transcription by Marc Atkinson, October 2000**, unread.

### The biggest single-bar gap: 12 notes against 2

Drumnet's bar 14 and the tab's bar 15 are **both 2/4** between the same neighbours. Drumnet
has **12** noteheads, two beamed groups of six, all on one staff position, drawn as downward
triangles. The tab has **2**: snare with pedal hi-hat on beat one, then nothing.

Correction to my own earlier reading: I called that segment two merged bars because it
measured 386 px per beat against a 208 median. It is one dense bar. The earlier row claiming
the tab ran 10 events long in Drumnet bar 13 is withdrawn too, because the watermark crosses
that system and the detector returned 7 heads where the eye gives about 19 against the tab's 17.

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
