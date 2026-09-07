# I'm The Slime, drum transcription state

Frank Zappa, Over-Nite Sensation, 1973. Measured 2026-09-07 on Brandons-MacBook-Pro.
Live page: https://7onething1.github.io/zappa-slime-transcription/

Every number below came from notation. No audio was read this session, because the drive
holding the stems is not mounted.

## The verdict

Three premises in the assignment did not survive contact with the disk.

| Premise | Reality |
|---|---|
| Good dedicated Moises Pro stems on the drive | `ls /Volumes/` returns one entry, Macintosh HD. No I'm The Slime audio exists on the internal disk. |
| The existing AI Guitar Pro we did | No Guitar Pro file for this song exists under Projects. All four Songsterr tabs belong to other people. |
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

None of these is ours, so none of them can take a revision. Any work starts with
Create a copy to edit on whichever tab becomes the donor.

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

**Failure one.** Sloots timed the outro guitar solo on the album take at 2:42 to 3:15. The
tab clock puts the lead guitar density jump at 2:28.0. The two readings sit fourteen seconds
apart on the same event.

**Failure two.** Eighty one bars fill 209.3 seconds and eighty bars fill 206.7 seconds. The
album take is listed at 3:34, which is 214 seconds. The tab clock is five to seven seconds
short. That figure carries a caveat, because the 3:34 came from a catalogue listing and not
from a file measured on this Mac.

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

Paul Pappas transcribed the song in full for Hal Leonard in 2011. That book is copyrighted
and is not on this Mac.

Our own Over-Nite Sensation band book sits at
`~/Projects/drwu-overflow/bandbooks-library/zappa-overnite.pdf`, pages 9 to 12. Its section
map lists round timestamps at thirty second spacing, which is template filler, and its key
and tempo claim conflicts with Sloots on the opening. That page carries no transcription evidence.

## Six jobs blocked on the T7 Shield

1. Anchor the clock. Find the outro solo entry in the audio and reconcile it against bar 59
   and against the Sloots 2:42 mark. Rebuild the tempo map, then start the lane work.
2. Rewrite bars 1 to 10. Take the kick and the crash from their own stems across the opening
   twenty seconds and replace the sixteen note unison.
3. Settle bars 57 to 62. Read the ride and hi-hat stems separately and score expected
   rhythmic slots rather than counting transients.
4. Assign the toms. Cluster the tom stem by pitch and map the clusters onto floor, low and
   mid using the fills as whole figures. Bar 21 is the first test.
5. Sweep both directions. Work the 205 flagged cells, finding written notes with no stem
   support and stem events with nothing written.
6. Check the dropouts. Wherever kick, snare and tom fall silent, read each cymbal stem on its
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
| Album take runs 3:34 | Catalogue listing recalled, no audio file measured | unverified |
| Drum performer on the take | Not established this session | open |

## Working files

`~/Projects/_outputs/zappa-slime-transcription/`

- `tabs/` holds meta plus full track JSON for all four songs, nineteen track files.
- `analysis/compare_tabs.py` produces the per bar lane census and the flag list.
- `analysis/tab_comparison.json` holds lane totals, per bar counts and 205 flags.
- `analysis/timing_map_from_tabs.json` holds the bar to seconds map.

Palette: Isle of Dogs (Wes Anderson). Six colours, all six used.
