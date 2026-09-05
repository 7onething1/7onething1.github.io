# Sofa No. 1: the cymbal-on-every-beat audit

Songsterr AI tab `s6822181` revision `r8906238`. Frank Zappa, One Size Fits All, 1975.
Built 2026-09-05.

## The claim

Brandon, listening to the tab against the record: "it's like the AI Songsterr puts a cymbal
or hi-hat hit on every beat even when there's not."

This page measures that claim against the tab's own note data. The notation supports the
description. The recording has not been measured, and the last section says why.

## What this tab is

| Field | Value |
|---|---|
| Tab | s6822181, revision r8906238, 4 tracks, drums at index 3 |
| Origin | `aiGenerated: true`, `createdVia: "AI"`, created 2026-09-05 16:50Z |
| Account | Brandon's own, so revising it breaks no rule about other transcribers |
| Synced to | YouTube `mgIK23Karm4`, FrankZappaVEVO studio visualiser |
| Drummer on the take | Chester Thompson, per the MusicBrainz recording credit |
| Tab length | 2:38.3, being 99 bars at 116 BPM, against a 2:39 album track |
| Drum notes | 636, of which 251 are cymbal or hat |

## The count

| MIDI | Lane | Notes | Share |
|---|---|---|---|
| 36 | Kick | 203 | 31.9% |
| 51 | Ride | 201 | 31.6% |
| 38 | Snare | 119 | 18.7% |
| 45 | Tom low | 41 | 6.4% |
| 49 | Crash | 39 | 6.1% |
| 43 | Floor tom hi | 14 | 2.2% |
| 42 | Closed hat | 11 | 1.7% |
| 48 | Tom hi-mid | 5 | 0.8% |
| 47 | Tom low-mid | 3 | 0.5% |

Ride 51 carries 201 notes and closed hat 42 carries 11. The generator picked one cymbal and
parked on it for the length of the piece.

| Occupancy measure | Value |
|---|---|
| Notated beats in the track | 306 |
| Beats carrying any drum onset | 290, being 94.8% |
| Beats carrying a cymbal or hat | 248, being 81.0% |
| Bars saturated on every beat | 75 of 99, being 75.8% |
| Longest unbroken saturated run | 20 bars, starting at bar 2 |
| Cymbal onsets with no kick, snare or tom under them | 75 |

Bar 83 carries a separate defect. Its beat durations do not sum to its time signature, and
that renders as a misfilled bar whatever the cymbal verdict turns out to be.

## Against Zappa's own sections

Zappa marked this piece with capital-letter sections in his own scores. The Hal Leonard
One Size Fits All guitar book reproduces them, and Kasper Sloots catalogues the bar ranges
with timestamps. Reading those ranges as 3/4 returns 116.5, 114.5, 117.2, 122.7 and 116.8
BPM per section against the tab's stated 116. Two independent sources land on the same
meter and the same tempo, which is what licenses every figure here.

| Section | Bars | Starts | Beats | With cymbal | Saturation | Full bars |
|---|---|---|---|---|---|---|
| A, main theme | 1-22 | 0:00 | 66 | 61 | 92.4% | 20/22 |
| B, F-Em-Dm-G | 23-36 | 0:34 | 42 | 37 | 88.1% | 12/14 |
| C, variation | 37-64 | 0:56 | 84 | 77 | 91.7% | 25/28 |
| D, G pedal | 65-79 | 1:39 | 45 | 39 | 86.7% | 11/15 |
| E, outro | 80-103 | 2:01 | 69 | 34 | 49.3% | 7/20 |

The tab does change at every section boundary. No single bar is pasted 99 times. What it
does is hold 86% to 92% cymbal saturation across four consecutive sections that Zappa wrote
as distinct music, and drop to 49% only in the outro.

Zappa's score runs 103 bars. The tab runs 99, so it is four bars short of the published
structure.

## The repeated bars

Positions are quarter notes from the barline.

| Count | Bar content |
|---|---|
| 21 | @0 kick+ride, @1 ride, @2 snare+ride, @1.5 kick, @2.5 kick |
| 10 | @0 kick+crash, @1 ride, @2 snare+ride, @2.5 kick |
| 9 | @0 kick+ride, @1 ride, @2 snare+ride, @2.5 kick |
| 5 | @0 kick+ride, @1 ride, @2 snare+ride, @1.5 kick |
| 4 | @0 kick+crash, @1 hat, @2 snare+hat, @2.5 kick |

The five most repeated bars are the same idea written five ways, being a cymbal on beat one,
beat two and beat three. Between them they account for 49 of the 99 bars. Across the whole
track there are 46 distinct bar patterns for 99 bars.

## Onset spacing

230 of the 250 gaps between consecutive cymbal onsets are exactly one quarter note, being
92.0%. A drummer playing a slow waltz leaves gaps of several sizes across a piece. This one
holds a single size for 92% of it.

## The meter trap

Songsterr writes `signature` into a bar only when the meter changes. Reading each bar on its
own and defaulting to 4/4 reports this piece as 93 bars of 4/4, gives 63.4% saturation, and
finds 1 fully saturated bar. Carrying the signature forward gives 89 bars of 3/4, 81.0%
saturation and 75 fully saturated bars. Same file, same script, opposite verdict, and no
error was raised anywhere.

Two checks catch the mistake. Every bar's durations must sum to its bar length, and the
summed bar lengths at the stated tempo must land on the record's runtime. The correct
reading gives 2:38.3 against a 2:39 track. The wrong reading gives 3:22.

## The recording, first pass

The source the tab names, `mgIK23Karm4`, is pulled and separated. The audio runs 159.02 s
and the tab computes to 158.3 s, a 0.45% difference, so the 3/4-at-116 reading is confirmed
against the record itself and not only against Zappa's score.

High-band onsets, 7 to 14 kHz, swept across five thresholds:

| Threshold | Onsets | Per second |
|---|---|---|
| 0.04 | 353 | 2.22 |
| 0.06 | 302 | 1.90 |
| 0.08 | 234 | 1.47 |
| 0.10 | 193 | 1.21 |
| 0.14 | 151 | 0.95 |

This cuts against the simple story, and it is reported because it does. The tab writes 251
cymbal and hat notes. The measured range is 151 to 353, so 251 sits inside it. On the mixed
stem the cymbal count is not obviously too high. Two things keep the question open. That
band catches snare transients alongside cymbals, and a count says nothing about where the
hits land. A grid of 230 one-quarter-note gaps and a drummer's 251 scattered strokes can
share a total.

High-band energy across Zappa's sections:

| Section | Window | Hi-band RMS | Against track average | Tab saturation |
|---|---|---|---|---|
| A main theme | 0-34 s | 0.12646 | 1.02 | 92.4% |
| B | 34-56 s | 0.12266 | 0.99 | 88.1% |
| C variation | 56-99 s | 0.11438 | 0.93 | 91.7% |
| D G pedal | 99-121 s | 0.07278 | 0.59 | 86.7% |
| E outro | 121-158 s | 0.15254 | 1.24 | 49.3% |

Section D is the sharpest lead here. Cymbal-region energy falls to 0.59 of the track average,
the lowest of the five, while the tab holds 86.7% saturation and 36 ride notes across those
15 bars. The outro runs the other way, carrying the highest energy at 1.24 against the lowest
written saturation at 49.3%. Both readings point one direction: the writing is flat where the
playing is not.

One threshold sweep failed and is reported rather than dropped. The full-band onset sweep as
a fraction of stem peak returned 272, 161, 16, then zero. A single loud transient dominates
that envelope, so fractions of its peak are the wrong knob there. The high-band sweep above
behaves across all five settings.

## What this page does not prove

Every number here measures the notation. None of them measures Chester Thompson. Proving
that a written cymbal is absent from the record needs the recording split into separate
cymbal lanes. A mixed Demucs drums stem holds kick, snare, toms, hat, ride and crash
together and cannot say which one was struck. On Cosmik Debris that same shortcut produced
two wrong verdicts, and the six-lane split overturned both of them.

Status: the pull and the Demucs drums stem are done. The six-lane DrumSep split is running
and checkpoints per 60-second block. The last step, scoring all 248 written cymbal beats
against `ride.wav` and `hh.wav`, waits on it. Until then no claim is made about which cymbal
Chester Thompson struck.

One inventory row is now stale. The Zappa drum transcription inventory was built at 12:10
on 2026-09-05 and records Sofa No. 1 as having no drum tab of the album take. This tab was
created at 16:50, so it became the first.

## Sources

| What | Where |
|---|---|
| Tab metadata and notes | `songsterr.com/api/meta/6822181`, then `dqsljvtekg760.cloudfront.net/6822181/8906238/<hash>/3.json` |
| Live editor export | `frank zappa-Sofa No. 1-09-05-2026.gp` |
| Section letters and bar ranges | Hal Leonard One Size Fits All guitar book, via Kasper Sloots, `zappa-analysis/one-size-fits-all.htm` |
| Drum credit | MusicBrainz recording `c541a734-bc6a-437d-a2cd-76525ad307b0` |
| Analysis scripts | `~/Projects/_outputs/zappa-sofa-no1-cymbal-audit/analysis/` |
