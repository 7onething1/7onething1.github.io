# Cosmik Debris Live: the hi-hat audit

Songsterr tab **s1154774**, titled *Cosmik Debris Live*, measured against the audio it is
synced to. Measured 2026-09-05.

## The question

The tab is AI-generated, uploaded by DavidxHanes in March 2025. Its drum track writes
**1,053 closed hi-hats, 81 open hi-hats and 24 pedal hi-hats**. Does that hi-hat writing
describe what the drummer played.

## The audio

Songsterr stores the videos a tab is synced to. The primary one is YouTube `Dp6LT2MdaPI`,
"FRANK ZAPPA COSMIK DEBRIS", 2010-03-09.

| Measure | Value |
|---|---|
| Duration | 8:06.4 (486.4 s). The studio cut runs 4:14, so this is live. |
| Felt tempo | 76.1 BPM median across 24 windows, each significant |
| Independent check | 76.6 BPM from HF envelope autocorrelation |
| Tempo drift | 72.6 to 82.4 BPM across the performance |
| Hat band level | 6 to 14 kHz sits 29 to 34 dB below peak, so a hat verdict is possible |

## Method

1. Notation read from Songsterr's public JSON, no authentication.
2. Audio pulled to WAV through the YouTube politeness gate, one fetch.
3. Drum stem separated with Demucs htdemucs. On the raw mix a hat detector returns 840
   onsets in 60 seconds, which is guitar and vocal sibilance, so the stem is required.
4. Cymbal events from spectral flux in 7 to 14 kHz on the stem.
5. Open versus closed by **gap-ring ratio**: HF energy just before the next hit divided by
   this hit's peak. Choked hats die, open hats ring.
6. Every detector validated against a null.

A first decay measure was discarded. Time to fall to 35 percent of peak pinned 1,802 of
4,564 events at the 500 ms ceiling, because in a shuffle the next hat arrives before the
previous one decays.

## The hi-hat verdict

| Tab section | What the tab writes | events | mean ring |
|---|---|---|---|
| bars 45-65 | 225 closed, 0 open | 323 | 0.654 |
| bars 92-113 | 240 closed, 9 open | 358 | 0.699 |
| bars 129-146 | 143 closed, 0 open, 24 pedal | 205 | 0.239 |
| bars 123-125 | 0 closed, **23 open** | 52 | 0.719 |
| bars 150-154 | 19 closed, **25 open** | 49 | 0.402 |

Pooled, the blocks the tab calls closed average **0.576**. The blocks it calls open average
**0.565**, fractionally lower. Mann-Whitney for open exceeding closed gives **p = 0.80**.
Sweeping the sync offset across sixteen seconds produced no stable rescue.

The ring-ratio distribution across 2,081 hat events is **unimodal**. On this source, after
separation, closed and open are not cleanly separable by any threshold. That is a limit of
the recording as well as a finding about the tab.

## Four structural failures that need no alignment

**1. The opening is impossible.** Bars 1 to 4 write 81 snare hits, 14 crashes and 4 kicks in
11 seconds, with zero hi-hat. That is 99 notes. The actual first 11 seconds holds 26 onsets.
The densest 11 seconds anywhere in the performance holds 64. The audio opens with one onset
at 0.023 s and then nothing until 2.171 s.

**2. Every pedal hi-hat sits in one block.** All 24 fall inside bars 129 to 146. The other
145 bars contain none.

**3. The open-hat sections are all-or-nothing.** Bars 123 to 125 carry 23 open and zero
closed. Bars 45 to 65 carry 225 closed and zero open.

**4. The hat line is thin.** Median 0.60 tab hat notes per detected cymbal event across
30-second windows. Between 349 and 380 seconds the tab writes five notes, all open, against
176 detected events.

## The alignment test

The kick settles whether the tab tracks the performance at all, and it is independent of the
hat question. The kick detector was validated first: 24 of 24 windows show a significant kick
period, and the median local period of 788 ms agrees with the 784 ms HF estimate.

| Test | global match | local match |
|---|---|---|
| Tab kicks vs the real audio | 45.5% | 73.3% |
| Tab kicks vs the same audio **reversed** | 43.4% | 68.9% |
| Tab kicks vs random onsets, same count | 35.5% | 55.3% |

The tab beats its own null by 4.4 points, and the margin is not significant (p = 0.11). Its
kick pattern matches the performance about as well as it matches that performance played
backwards. The tab has the density and the idiom. It does not carry the events.

The global test was unfair and was rerun. The tab holds a flat tempo. The band drifts,
so the local test lets the offset float by up to eight seconds per fifteen-second window.
That is the most generous test available and the verdict survives it.

**The clock.** The tab writes 120 BPM in 12/8 for 135 bars, a felt beat of 80. The
performance sits at 76.1, so the tab runs about 5 percent fast, and computes to 460.2 s
against 486.4 s of audio, a 5.4 percent shortfall. The 9/8 bar and the three 11/8 bars are
dropped beats absorbing drift. They are not meter.

## The second transcription

Songsterr holds exactly two Cosmik Debris tabs. There is no independent transcription of this
live performance on the site.

| Tab | Kind | bars | computed | meter | closed | open | pedal |
|---|---|---|---|---|---|---|---|
| s1154774 Live | AI, DavidxHanes | 159 | 7:40 | 12/8 with 9/8 and 11/8 | 1,053 | 81 | 24 |
| s412177 | human-revised, 398 favourites | 80 | 4:19 | 4/4 throughout | 501 | 10 | 1 |

The studio tab computes to 4:19.5 against a 4:14 album track, so its tempo map is sound. Its
open hats are 2.0 percent of the hat family. The live tab's are 7.0 percent.

A German musicological analysis of *Apostrophe (')* in the local Zappa drum-source archive
gives Cosmik Debris a duration of 4:16 and states its meter as **6/8 and 4/4**, with the
blues schema behind the guitar solo and the strophe-refrain form. Its 6/8 is compatible with
12/8, since one 12/8 bar is two of 6/8. Nothing in it supports 9/8 or 11/8.
Source: `08-analysis/zappa-analysis/cosmic-debris7.jpg` in `~/Projects/_outputs/zappa-drum-sources/`,
a copyrighted scan, described and not reproduced.

## A correction to our own earlier page

The Apostrophe (') page scores s1154774 at **+84.1 percent** over length, comparing 7:40
against the 4:10 studio runtime. It is a live tab synced to an 8:06 live video, so 7:40 is
5.4 percent short. The 84 percent figure came from the wrong reference recording. The note counts there, 3,135 and 1,581, were
reproduced exactly here, so the pipeline was right and the reference recording was wrong.

## Honest limits

- Open versus closed is not cleanly separable on this source. The claim is that the tab's
  open markings carry no measurable signal, which is weaker than a note-by-note correction.
- Onset detection undercounts simultaneous notes. Density ratios are indicative.
- Demucs leaves artefacts. The stem is cleaner than the mix and is not a multitrack.
- Which live performance this is remains unnamed. The upload gives no date or venue.
- The two alternate synced videos were not pulled. One gated fetch was made.

## What this means for using the tab

For playing along, s1154774 gives a broadly correct shuffle idiom at roughly the right
density and close to the right length. For learning what this drummer played, ignore the
hi-hat detail, discard the opening four bars, and read the meter as 12/8 throughout. The
human-revised studio tab s412177 is the better document of the part, at the cost of being a
different performance.
