# I'm The Slime, drum transcription state

Frank Zappa, Over-Nite Sensation, 1973. Drum part by Ralph Humphrey. Measured 2026-09-07 on Brandons-MacBook-Pro.
Live page: https://7onething1.github.io/zappa-slime-transcription/

Numbers below come from three sources: the four published Songsterr tabs, the Kasper Sloots
handwritten score, and a fifteen stem Moises Pro separation at 96 kHz found in `/Users/Shared`.

## Correction, and where the first pass went wrong

The first version of this page reported the stems unreachable, on the strength of a volume list
showing only Macintosh HD. That search covered Projects, Music, the Desktop anchors and the
external drives. It never touched `/Users/Shared`, which held a complete fifteen stem separation
of this song the whole time. Keep It Greasey and Watermelon In Easter Hay keep their stems in
the same folder. Search that path first on any Zappa audio question.

One published claim is withdrawn. The first pass called the solo entry a fourteen second failure,
comparing a tab clock reading of 2:28 against the Sloots timestamp of 2:42. The lead stem puts
the solo entry at 2:33, in audio bar 56. Sloots picked 2:42 as a clip start inside the solo, so
it was never a claim about the first bar. The gap is five seconds and the overstatement was mine.

## The verdict

Three premises in the assignment did not survive contact with the disk.

| Premise | Reality |
|---|---|
| Good dedicated Moises Pro stems | TRUE, in `/Users/Shared/Frank Zappa - 02 - I'm the Slime-F# minor-87bpm-443hz/`. Fifteen files, 96 kHz, 24 bit, 213.752 s, six piece drum split plus a metronome track. |
| The existing AI Guitar Pro we did | None existed. All four Songsterr tabs belong to other authors, so the donor was picked by favorites and exported. |
| Our human transcriptions on hand | One partial score by Kasper Sloots, covering the opening. It is the only human drum notation for this song on this Mac. |

I'm The Slime is not among the 34 song ids on the Zappa program scope page. It holds no
pre-sweep baseline on disk and no restore in the moderation queue. The ghost sweep never
touched it. The song needs a new transcription from a blank start.

## The four Songsterr tabs

Read from `api/meta` on 2026-09-07.

| Song id | Title | Author | Made via | Created | Views | Bars | Drum notes |
|---|---|---|---|---|---|---|---|
| s642618 | I'm The Slime | David-129 | Editor | 2026-08-02 | 7,768 | 80 | 1,354 |
| s4663113 | I'm The Slime 1 | nick3388 | AI | 2026-04-04 | 46 | 81 | 1,532 |
| s2826582 | I'm The Slime (Mothers Of Invention) | Aaron-Albrecht | AI | 2025-11-06 | 963 | 81 | 1,510 |
| s6070985 | I'm The Slime (The Mothers) | Joshua-Rendall | AI | 2026-07-16 | 0 | 81 | 306 |

None of these is ours, so none can take a revision. That is the condition for making a copy,
never a reason to stop. Donor selection goes by `favoritesCount`, because favorites are the only
field that records a player choosing the tab. **s642618 wins at 229 against 55, 9 and 1.**

## Bars 1 to 10 are not a drum part

Bar 2 through bar 10 hold sixteen sixteenth notes per bar in every tab. Each one is a kick
and a crash struck together, with no tuplet and no rest, at 120 beats per minute. That is
eight kick strokes and eight crash strokes every second for nine straight bars.

The raw beat, copied out of the tab JSON:

    duration [1,16]  tuplet none  rest none  notes [(36 kick, 3.5), (49 crash, -1)]

David-129 thinned the crash to four strikes per bar across bars 6 to 9 and added a single
snare. The sixteen note kick line survives untouched in all four tabs. The repair here is a
rewrite from the audio, and no ghost note pass reaches it.

Sloots reads the same passage in 12/8 with a four times three to four times two subdivision
change. Every tab is 4/4 from bar 1 with no signature change anywhere. Sloots records that
Paul Pappas made the same 4/4 choice in the Hal Leonard book. Writing 4/4 is defensible.
Writing straight sixteenths on a kick and crash unison is a separate problem.

## Lane totals across the whole song

| Lane | David-129 | nick3388 | Aaron-Albrecht | Joshua-Rendall |
|---|---|---|---|---|
| Kick | 406 | 450 | 441 | 145 |
| Snare | 274 | 346 | 340 | 5 |
| Hi-hat closed | 144 | 187 | 231 | 0 |
| Hi-hat open | 8 | 51 | 50 | 0 |
| Floor tom | 33 | 0 | 0 | 0 |
| Low tom | 0 | 19 | 21 | 0 |
| Mid tom | 112 | 61 | 61 | 0 |
| Ride | 218 | 188 | 154 | 0 |
| Crash | 157 | 228 | 210 | 85 |

205 bar and lane cells hold a figure where the hand edited tab differs from a number both
full machine tabs agree on. Those cells are the review queue for the stem pass.

### The tom lanes never agree

Floor tom appears only in the hand edited tab, in bars 14, 22, 52, 54, 74, 76 and 80.
Low tom appears only in the machine tabs, in bars 18, 20, 39, 43, 55, 75, 77 and 80.
Bar 21 is the sharpest case. David-129 writes twenty mid tom strokes and all three machine
tabs write none.

### One passage, two different cymbals

Bars 57 to 62 read as ride in the hand edited tab and as open hi-hat in the machine tabs.
David-129 writes 44 ride strokes and no open hi-hat. nick3388 writes 41 open hi-hat strokes
and no ride. The rhythm matches closely and the instrument does not. Under the tab clock
those bars run from 2:22.7 to 2:38.7.

Count based tests cannot decide this passage. A ride played in continuous subdivisions hides
its own onsets under the decay of the preceding stroke, so the check has to score expected
rhythmic slots instead of counting transients.

## The timing map and its two failures

All four tabs carry an identical tempo automation. Bar 1 sits at 120 beats per minute and
bar 11 drops to 90, 4/4 throughout, no further change.

| Bar | BPM | Starts at | What sits there |
|---|---|---|---|
| 1 | 120 | 0:00.00 | Guitar intro, kick and crash saturation begins |
| 11 | 90 | 0:20.00 | Tempo drop, rhythm guitar riff enters |
| 21 | 90 | 0:46.67 | Tom fill disagreement, twenty strokes against zero |
| 50 | 90 | 2:04.00 | Vocal track density rises for the first time |
| 59 | 90 | 2:28.00 | Lead guitar density jumps from 1 to 19, the outro solo |
| 62 | 90 | 2:36.00 | Last bar of the ride against open hi-hat passage |
| 81 | 90 | 3:26.67 | End of the longest tab |

**Failure one, restated smaller.** The solo enters at 2:33, audio bar 56, measured off the lead
stem. The tab clock's 2:28.0 is five seconds early. The earlier fourteen second figure came from
treating Sloots' 2:42 clip start as the solo's first bar, and it is withdrawn.

**Failure two.** Eighty one bars fill 209.3 seconds and eighty bars fill 206.7 seconds. The
album take measures 213.752 s by ffprobe on the stems. The tab clock is five to seven seconds
short of the record.

Both failures point the same way. The tempo map is a generator default that was never
anchored to the recording. Anchoring it is the first stem job.

## The human transcription on hand

Kasper Sloots wrote a four staff score of the opening, held at
`~/Projects/_outputs/zappa-drum-sources/08-analysis/zappa-analysis/`.

- `im-the-slime2.jpg` carries the opening 12/8 system, three sharps, four staves.
- `im-the-slime1.jpg` carries the meter change. Its third staff turns into a percussion staff
  with X noteheads under the words I am gross. That staff holds the only human drum notation on hand.
- `im-the-slime3.jpg` carries the outro guitar solo over F#m7, B, D and E, eight bars, drawn
  from the Over-Nite Sensation guitar book.

Three readings were taken off native resolution crops rather than off the page overview, saved
under `evidence/crops/`. All four staves carry 12/8 at the opening, read at 8x. The change is to 4/4 on all four staves under a quarter equals dotted
quarter equivalence mark, read at 6x. The percussion entry writes X noteheads at two distinct
staff heights with accent marks below several of them, so Sloots notated two cymbal voices
rather than one undifferentiated hat line.

Paul Pappas transcribed the song in full for Hal Leonard in 2011. That book is copyrighted
and is not on this Mac.

Our own Over-Nite Sensation band book sits at
`~/Projects/drwu-overflow/bandbooks-library/zappa-overnite.pdf`, pages 9 to 12. Its section
map lists round timestamps at thirty second spacing, which is template filler, and its key
and tempo claim conflicts with Sloots on the opening. That page carries no transcription evidence.

## Six jobs blocked on the T7 Shield

1. [`q-2026-09-07-82ca4f`] Anchor the clock. Find the outro solo entry in the audio and reconcile it against bar 59
   and against the Sloots 2:42 mark. Rebuild the tempo map, then start the lane work.
2. [`q-2026-09-07-72bc18`] Rewrite bars 1 to 10. Take the kick and the crash from their own stems across the opening
   twenty seconds and replace the sixteen note unison.
3. [`q-2026-09-07-dadc48`] Settle bars 57 to 62. Read the ride and hi-hat stems separately and score expected
   rhythmic slots rather than counting transients.
4. [`q-2026-09-07-628127`] Assign the toms. Cluster the tom stem by pitch and map the clusters onto floor, low and
   mid using the fills as whole figures. Bar 21 is the first test.
5. [`q-2026-09-07-b2681e`] Sweep both directions. Work the 205 flagged cells, finding written notes with no stem
   support and stem events with nothing written.
6. [`q-2026-09-07-b8c4e7`] Check the dropouts. Wherever kick, snare and tom fall silent, read each cymbal stem on its
   own. A quiet kit is not evidence that the cymbals stopped.

## Evidence ledger

| Claim | How it was measured | Verdict |
|---|---|---|
| No external drive is mounted | `ls /Volumes/` returns one entry, Macintosh HD | confirmed |
| No Guitar Pro file for this song on disk | ripgrep file listing over Projects filtered to Guitar Pro extensions, 60 hits, none for this song | confirmed |
| All four tabs belong to other authors | Songsterr `api/meta` author field, read 2026-09-07 | confirmed |
| Bars 2 to 10 are kick and crash sixteenth unisons | Raw beat objects in every drum track JSON | confirmed |
| Every tab is 4/4 from bar 1 | Signature array scan across all measures of all four drum tracks | confirmed |
| Identical tempo automation in all four | `automations.tempo` reads 120 at measure 0 and 90 at measure 10 in every file | confirmed |
| Bars 57 to 62 swap ride for open hi-hat | Per bar lane census, 44 ride against 41 open hi-hat | confirmed |
| Tom lane assignments do not overlap | Per bar lane census, floor tom and low tom are mutually exclusive between the sources | confirmed |
| Sloots puts the outro solo at 2:42 | Prose caption on the Over-Nite Sensation analysis page held on disk | source states it |
| Album take runs 3:34 | Wikipedia entry for the song, read 2026-09-07. No audio file measured on this Mac | confirmed by source |
| Drum performer is Ralph Humphrey | Over-Nite Sensation personnel across the Wikipedia entry and the Discogs release pages, read 2026-09-07 | confirmed by source |
| Sloots writes 12/8 on all four staves at the opening | Native resolution crop of im-the-slime2.jpg, 8x upscale, glyph read directly | confirmed |
| The change is to 4/4 with a quarter equals dotted quarter mark | Native resolution crop of im-the-slime1.jpg, 6x upscale, glyph read directly | confirmed |
| Sloots writes X noteheads at two staff heights | Native resolution crop of the percussion staff, 8x upscale | confirmed |

## Working files

`~/Projects/_outputs/zappa-slime-transcription/`

- `tabs/` holds meta plus full track JSON for all four songs, nineteen track files.
- `analysis/compare_tabs.py` produces the per bar lane census and the flag list.
- `analysis/tab_comparison.json` holds lane totals, per bar counts and 205 flags.
- `analysis/timing_map_from_tabs.json` holds the bar to seconds map.

Palette: Isle of Dogs (Wes Anderson). Six colours, all six used.


## The stems, and the clock they carry

`/Users/Shared/Frank Zappa - 02 - I'm the Slime-F# minor-87bpm-443hz/` holds fifteen files at
96 kHz, 24 bit, 213.752 s each: kick, snare, toms, hat, cymbals, other_kit, bass, lead, rhythm,
piano, wind, other, vocals, backing_vocals, metronome.

**The metronome track follows the band.** Peak picking finds 310 clicks between 0.226 s and
212.746 s, averaging 87.24 BPM. A straight line through those click times leaves a residual
swinging +788 ms to -627 ms, more than a full beat, so the click is not a rigid grid. Folding
the clicks in fours and scoring each phase against kick energy puts the downbeat on phase 3,
mean kick peak 0.378 against 0.054 on phase 2, a seven to one margin.

**The song is 77 bars of 4/4**, first downbeat at 2.166 s, mean 87.24 BPM, ranging 81.08 to
94.49. Bar 77 is partial, holding 3 clicks rather than 4, and it inherits bar 76's tempo.

### Separation check

| Lane | Peak | Active | Centroid Hz | Low/mid/high % | Verdict |
|---|---|---|---|---|---|
| kick | 0.656 | 40.5% | 1106 | 95 / 4 / 0 | Clean |
| snare | 0.551 | 23.9% | 2389 | 38 / 59 / 4 | Clean |
| toms | 0.542 | 20.3% | 1511 | 91 / 9 / 0 | Usable, shares the low band with the kick |
| hat | 0.076 | 21.0% | 4904 | 10 / 42 / 48 | Clean and quiet |
| cymbals | 0.124 | 61.5% | 4488 | 1 / 32 / 66 | Clean and busy |
| other_kit | 0.111 | 34.2% | 3774 | 86 / 12 / 3 | Low confidence, RMS 0.00078 |

### Onset census

Thresholds were chosen per lane by maximising phase lock to the metronome grid. Lock R runs 0
for a uniform scatter and toward 1 for events sitting on the grid.

| Lane | Events | Strong | Weak | Per bar | Lock R | Note |
|---|---|---|---|---|---|---|
| kick | 350 | 157 | 193 | 4.55 | 0.402 |
| snare | 82 | 37 | 45 | 1.06 | 0.837 |
| toms | 117 | 53 | 64 | 1.52 | 0.182 |
| hat | 240 | 108 | 132 | 3.12 | 0.391 |
| cymbals | 120 | 56 | 64 | 1.56 | 0.081 | **WITHDRAWN, fails its null** |
| other_kit | 98 | 44 | 54 | 1.27 | 0.301 |

**Two detector failures worth recording.** The first pass returned zero kick and zero tom
onsets, because onset strength was aggregated with a median across 128 full range mel bands and
a kick occupies two or three of them. The second pass then found 660 kick peaks with a near even
straight-versus-triplet split in every section, which is what noise looks like. At 0.30 of the
lane maximum a six second window returns seven kick hits, four within 10 ms of a metronome
click. The threshold had been reading the noise floor.

## The editing copy

| Song id | Author | Favorites | Views | Verdict |
|---|---|---|---|---|
| s642618 | David-129 | **229** | 7,768 | Donor, highest favorites and the only hand edited tab |
| s2826582 | Aaron-Albrecht | 55 | 963 | Not chosen |
| s4663113 | nick3388 | 9 | 46 | Not chosen |
| s6070985 | Joshua-Rendall | 1 | 0 | Not chosen, its drum track is a stub |

The donor was exported through the Songsterr editor as a 38,650 byte Guitar Pro file. The
rebuilt copy carries 63 tempo automations in place of the donor's two, one per bar wherever the
measured tempo moves by a quarter of a beat per minute or more, mapped through a tab bar to
audio bar offset of minus three. That offset is corroborated twice: 80 tab bars against 77 audio
bars, and the lead stem putting the solo entry at audio bar 56 against the tab's bar 59.

Nothing else moved. A structural diff reads 267 notes, 866 beats, 80 master bars and 5 tracks in
both files. The Songsterr session is signed in with 44 transcription credits available.

Files: `gp/DONOR-s642618.gp` and `gp/SLIME-Brandon-edit-tempo-185032.gp` under
`~/Projects/_outputs/zappa-slime-transcription/`.


### The chance baseline, and the lane it kills

Null: each lane's event count held fixed, events scattered uniformly at random across the same
span under the same refractory spacing, lock measured again, 400 draws per lane.

| Lane | Events | Observed R | Null mean | Null p95 | z | p | Verdict |
|---|---|---|---|---|---|---|---|
| kick | 350 | 0.404 | 0.048 | 0.090 | 14.2 | 0.0000 | real, far outside chance |
| snare | 82 | 0.837 | 0.098 | 0.182 | 14.4 | 0.0000 | real, far outside chance |
| toms | 117 | 0.182 | 0.080 | 0.152 | 2.4 | 0.0200 | real |
| hat | 240 | 0.391 | 0.058 | 0.111 | 11.4 | 0.0000 | real, far outside chance |
| cymbals | 120 | 0.082 | 0.080 | 0.159 | 0.0 | 0.4250 | **fails** |
| other_kit | 98 | 0.301 | 0.092 | 0.184 | 4.3 | 0.0000 | real, far outside chance |

**The cymbal count does not ship.** Observed lock 0.082 against a null mean of 0.080, z of 0.0,
p of 0.425. Those 120 events are placed no better than random scatter, so the count is withdrawn
as evidence. This is the failure the brief predicted for sustained cymbals, where the decay of
one stroke buries the attack of the next. That lane needs slot scoring against the written
subdivision.

The `reference-class` gate passes all six checks on this lane once a null is quoted, because it
verifies a baseline was stated rather than that the result beats it. The measurement overrides
the gate.


## The key signature, settled by the bass stem instead of the scan

This page first reported three sharps in the Sloots key signature, read off an eight times
enlargement. Cropping that signature alone exposes the problem: it occupies 36 by 54 native
pixels. Enlarging to twenty times produces a larger blur and no more information.

The bass stem answers directly. Chroma over the opening, audio bars 1 to 10, puts F# first at
21.5 percent, then B 11.3, G 10.6, C# 10.2. The outro solo, bars 56 to 75, reads F# 17.6,
B 12.8, E 10.5, C# 10.5, which is the F#m7, B, D, E progression on the Sloots chart. The D
against D# question his prose called unresolvable reads 6.70 against 4.05, a ratio of 1.65
favouring D natural. That leans F# natural minor, so three sharps is right after all.

**The band book and Sloots describe different sections.** This page earlier called them
contradictory, C major against F# minor. The opening and outro sit on F#, B, C#, E. The verse
body, bars 20 to 45, reads A 12.6 percent, D 10.8, A# 10.8, the flat side, consistent with the
book's C, B flat, F verse chart. Calling that a contradiction was my error.
