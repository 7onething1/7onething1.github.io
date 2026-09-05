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

## The hi-hat verdict on the mixed stem (SUPERSEDED)

Read "The answer, from the isolated hat lane" first. Everything in this section was measured on a
Demucs drum stem carrying the whole kit at once and reached a non-result. The isolated hat lane later
resolved the same question with a sign on it. This section stands as the record of what the mixed
stem could and could not see.

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

**2. Every pedal hi-hat sits in one block.** All 24 fall inside bars 129 to 146. The other 141 bars contain none.

**3. The open-hat sections are all-or-nothing.** Bars 123 to 125 carry 23 open and zero
closed. Bars 45 to 65 carry 225 closed and zero open.

**4. The hat line is thin. WITHDRAWN.** Measured on a mixed drum stem with an over-triggering detector; the isolated hat lane shows the tab's hat density is correct. Kept so the retraction can be checked. Original text: Median 0.60 tab hat notes per detected cymbal event across
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

### What exists anywhere else, checked by search

A web search for a Cosmik Debris drum transcription returns commercial sheet music from Hal
Leonard's *Apostrophe (')* book, Virtual Sheet Music, Sheet Music Plus, Sheet Music Direct and
Stanton's. Every one is **guitar tablature**. The only dedicated drum transcription any search
surfaced is Songsterr's own s412177. The absence of a second drum transcription of this live
performance is therefore a fact about the world, checked beyond Songsterr's catalogue.

The search also settled the drum chair. Ralph Humphrey was in the band from 1973 and played the
Cosmik Debris session at Bolic Sound on 1973-05-29. Chester Thompson joined as a second drummer
in 1974, so a 1974 live Cosmik Debris can carry two drummers at once. A dual-drummer stage mix
will not reduce to one hi-hat lane, which matters for any future transcription attempt.

### An unattributed source on the meter

A German musicological analysis in the local Zappa drum-source archive gives Cosmik Debris a
duration of 4:16 and states its meter as **6/8 and 4/4**, with the blues schema behind the guitar
solo and the strophe-refrain form. Its 6/8 is compatible with 12/8, since one 12/8 bar is two of
6/8. Nothing in it supports 9/8 or 11/8.

Provenance, stated carefully: the scan is `08-analysis/zappa-analysis/cosmic-debris7.jpg` in
`~/Projects/_outputs/zappa-drum-sources/`. No page in that archive folder references it, and the
live zappa-analysis.com Cosmik Debris pages carry guitar-tab samples credited to KS with material
by Andy Aledort. This German-language scan comes from a separate source the archive did not
record, so it is treated as an unattributed secondary reading. It is copyrighted, described and
not reproduced.

## The answer, from the isolated hat lane

On the mixed drum stem the honest reply was that the measurement could not resolve it, p = 0.80 on a
unimodal distribution. On the isolated hat lane, across the complete 486.4 seconds and 1,091 hat
onsets, it resolves.

| The tab's own articulation blocks | events | median decay | p90 | reading |
|---|---|---|---|---|
| bars 123-125 **0 closed, 23 OPEN** | 23 | **110.3 ms** | 253.1 ms | choked, marked open |
| bars 150-154 **19 closed, 25 OPEN** | 30 | **91.4 ms** | 261.5 ms | choked, marked open |
| bars 45-65  225 closed, 0 open | 165 | 220.6 ms | 307.1 ms | rings, marked closed |
| bars 92-113  240 closed, 9 open | 185 | 252.5 ms | 368.6 ms | rings, marked closed |
| bars 129-146  143 closed, 24 pedal | 124 | 91.4 ms | 148.0 ms | choked, and marked closed |

**The open marks are inverted.** An open hi-hat rings and a closed one is choked by the pedal, so the
open blocks should decay slowest. Pooled, they decay **fastest**: open n = 53 median **107.4 ms**,
closed n = 474 median **180.0 ms**. Testing the direction the tab implies returns **p = 1**. Testing
the inverse returns **p = 2.8e-05**.

**One block of five is right, and it is worth naming.** Bars 129 to 146 carry 143 closed and all 24
of the tab's pedal notes, and that stretch measures 91.4 ms with a p90 of 148 ms, the tightest in the
song. A pedal chick is choked by definition, so a short decay under a closed-and-pedal marking is the
tab agreeing with the audio. The inversion covers 4 blocks of 5. Reporting it as 5 of 5 would turn a finding into a slogan.

The earlier p = 0.80 was not wrong, it was blind. A drum stem carrying kick, snare, toms, ride and
crash alongside the hat cannot answer a question about hi-hat articulation.

### And the same lanes settle the ride

**All 7 ride sections wrong. All 14 hat sections right.** Twenty-one sections, every one measured on
the isolated lanes over the full track. Median hh/ride in the ride sections is 3.92 against a
whole-track baseline of 5.37. The verdict holds across 295 of 297 alignment combinations.

The tab's largest ride section, 348.5 to 377.1 seconds carrying 109 ride notes, is the closest it
comes. The ride lane peaks there at RMS 0.02053, its loudest anywhere, so the drummer does lean
toward the ride. The hat still leads it 1.52 to 1.

## The isolated kit, and what it corrects

The verdict above rests on a Demucs drum stem holding the whole kit at once. DrumSep MDX23C splits
that into six lanes, `kick snare toms hh ride crash`, so the hi-hat can be measured on its own. The
first 60-second block is analysed here, covering the tab's bars 1 to 20.

**The detector was calibrated first, then trusted.** A threshold set from each stem's own
distribution returned 340 kick onsets in 60 seconds, 5.7 per second, impossible at 76 BPM. Every
figure below uses an absolute threshold, a fixed fraction of that stem's peak, quoted as a range
across thresholds from 0.04 to 0.30.

### Confirmed: the opening is over-written

| Measure | tab s1154774 | isolated snare stem | verdict |
|---|---|---|---|
| snare rate, bars 1-4 | 7.36 /s | 1.55 to 3.02 /s | tab over-writes by 2.4x to 4.7x |
| median gap, bars 1-4 | 125 ms | 351 ms | 2.8x longer than claimed |
| shortest gap in 60 s | 125 ms sustained | 102 ms, 13 of 87 gaps | nothing sustains that rate |

The claim fails at every threshold tested. At the most permissive setting the isolated snare still
gives 3.02 hits per second against the tab's 7.36.

### New: the tab puts the drummer on the ride where the hi-hat is playing

With `hh.wav` and `ride.wav` separated, the tab's lane call is checkable against which cymbal is
 sounding. The tab marks 7 stretches as ride and 14 as hat.

| Tab says | audio window | hh rms | ride rms | hh/ride | verdict |
|---|---|---|---|---|---|
| HAT | 11.6-36.2s | 0.02734 | 0.00739 | 3.70 | correct |
| **RIDE** | 36.2-41.0s | 0.02914 | 0.00215 | 13.58 | wrong, hat dominates |
| HAT | 45.7-55.2s | 0.02739 | 0.00463 | 5.91 | correct |
| **RIDE** | 55.2-63.2s | 0.02191 | 0.00655 | 3.35 | wrong, hat dominates |
| HAT | 63.2-72.7s | 0.02726 | 0.00172 | 15.84 | correct |
| HAT | 82.2-104.4s | 0.02755 | 0.00742 | 3.71 | correct |
| HAT | 107.5-117.1s | 0.02465 | 0.00503 | 4.90 | correct |
| **RIDE** | 126.6-129.7s | 0.03288 | 0.00064 | 51.36 | wrong, ride lane near silent |

**Hat calls 14 of 14 correct. Ride calls 0 of 7.** Where the tab writes ride, the isolated ride lane is
quiet and the hi-hat lane is loud, with a median hh/ride of 3.92 across the seven, against a baseline of 4.92. The
ride is also louder inside the tab's hat sections than inside its ride sections, a straight
inversion.

**The ride finding was swept for alignment**, because section windows depend on a time mapping.
Three time scales crossed with offsets from minus 8 to plus 8 seconds gives 297 combinations of
scale, offset and ride section, each over at least a second of audio. The ride comes out louder than
the hat in **2 of 297**, 0.7 percent, and the median hh/ride across all 297 is **15.44**. Both
exceptions are the same short three-second section at one hand-picked offset. No alignment rescues
the ride calls.

Scope: all seven ride stretches and all twelve hat stretches measured on the isolated lanes.

### Corrected: the hat line is not thin

This page earlier reported a median ratio of **0.60** tab hat notes per detected cymbal event and
called the hat line thin. That ratio came from a detector over-triggering on a mixed stem. On the
isolated hat lane the audio gives **0.80 to 2.62** hits per second and the tab writes **2.52**. At
the measured felt beat of 76.6 BPM a shuffle two-feel, hats on beats one and three of each triplet,
is **2.56** per second. **The tab's hat density is right.** The earlier finding is withdrawn.

The same holds for the snare overall. The tab writes 1.46 hits per second across the whole song and
the isolated stem gives 1.18 to 2.03. Only the opening is wrong.

### Corrected: the missing hat in bars 1 to 4 was not an error

This page listed "zero hi-hat" among the faults of the opening. On the isolated lane the hat in the
first 11.6 seconds is genuinely sparse: RMS **0.010** against **0.026** for the rest of the block, a
ratio of 0.39, and 3 detected onsets against 88 across the full 60 seconds. **The drummer is barely
playing the hat there, so writing none is close to right.** The fault in bars 1 to 4 is the snare
count alone.

### New: the opening under-writes the kick

Bars 1 to 4 give the kick **4** notes. The isolated kick lane carries roughly **27** onsets across
the same 11.6 seconds. The opening is wrong in both directions at once, far too much snare and far
too little kick, which is what a classifier does when it assigns broadband transient energy to a
single lane.

## The tab against the transcript on the drive

The archive scan is a real second opinion, so every error claimed above was put back against it. It
analyses the studio recording, which makes it corroborating evidence rather than proof. It changed
two of the findings.

### Meter: the tab is far better than first reported

The scan gives **Metrum: 6/8 ; 4/4**. The tab's 159 bars against that:

| Meter in the tab | bars | Against the scan |
|---|---|---|
| 12/8 | 124 | Compatible. One 12/8 bar is two of 6/8. |
| 4/4 | 20 | Named in the scan's Metrum. |
| 6/8 | 6 | Named in the scan's Metrum. |
| 2/4 | 4 | Short bar. The scan's form has partial phrases, ½a and ¾a. |
| 11/8 | 4 | Not supported. |
| 9/8 | 1 | Not supported. |

**Correction to this page's own first reading.** An earlier pass called the meter map the signature
of a beat-tracker losing the shuffle, and called the 4/4 switch at bar 136 a re-grid into straight
time. The scan says 4/4 belongs to the song. The switch lands 86 percent of the way through the tab,
which is where the scan's form puts the fourth Strophe, the final Refrain and the Schluss.
**154 of 159 bars carry a meter the scan supports.** Only **5 bars, 3.1 percent**, do not.

**Those five bars are not scattered.** They are bar 2 in 9/8 and bars 4, 5, 7 and 9 in 11/8. Every
one sits inside bars 2 to 9, the same opening stretch that carries the impossible snare storm. The
meter defect and the note defect are one defect in one place, roughly the first 25 seconds. From bar
10 to the end the meter is clean.

### Ghost notes: both tabs miss what the scan writes

The scan's 4/4 Grundrhythmus carries a **parenthesised note in every bar**, and a parenthesised
notehead is a ghost. Measured across the notation, the live tab holds **3,139 notes and zero
articulation flags**. The studio tab holds 1,582 notes and zero. Neither encodes a ghost, an accent
or a staccato anywhere.

Stated fairly, this is not a mark against s1154774 alone. The human-revised studio tab omits the
ghost layer just as completely. A shuffle without ghost notes on the snare is a thinner document of
the part than the scan is, and both Songsterr tabs are that.

### What the scan leaves standing

The scan says nothing that softens the four structural failures. Its duration of 4:16 for the studio
track sits beside the studio tab's computed 4:19.5, another check that the measurement pipeline is
sound. Its short intro, its blues schema and its strophe-refrain form describe an orderly blues
shuffle, which is the opposite of a bar carrying 24 sixteenth-note snare hits under a crash on every
dotted quarter.

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
