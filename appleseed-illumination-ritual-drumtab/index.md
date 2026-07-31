# Illumination Ritual: drum tabs for Songsterr, whole album

The Appleseed Cast, 31 July 2026. All ten tracks built from DrumSep 5-piece splits through
`/stems-to-guitar-pro-drums`. Every file passed the same 19-point render gate.
**20,890 notes across 1,570 bars.**

## The album

| # | Song | BPM | Bars | Notes | Bells | Rim | Ghosts | Flams | Tempo conf |
|---|---|---|---|---|---|---|---|---|---|
| 01 | Adriatic to Black Sea | 177 | 241 | 2,372 | 58 | 0 | 175 | 165 | MEDIUM |
| 02 | Great Lake Derelict | 137 | 149 | 2,864 | 163 | 0 | 157 | 365 | MEDIUM |
| 03 | Simple Forms | 144 | 61 | 898 | 0 | 0 | 43 | 65 | MEDIUM |
| 04 | Cathedral Rings | 155 | 178 | 2,438 | 0 | 0 | 241 | 118 | HIGH |
| 05 | 30 Degrees 3 Am | 161 | 161 | 1,980 | 0 | 0 | 107 | 140 | MEDIUM |
| 06 | Branches on the Arrow Peak Revelation | 138 | 102 | 1,401 | 0 | 0 | 107 | 92 | LOW |
| 07 | Barrier Islands (Do We Remain) | 148 | 153 | 2,349 | 0 | 0 | 166 | 203 | HIGH |
| 08 | North Star Ordination | 155.25 | 217 | 2,653 | 0 | 0 | 197 | 321 | HIGH |
| 09 | Clearing Life | 154 | 171 | 2,203 | 10 | 0 | 138 | 177 | HIGH |
| 10 | Illumination Ritual | 168 | 137 | 1,732 | 25 | 0 | 75 | 88 | MEDIUM |

Track 04 nearly did not happen. The album's separation script skipped it on the note
"already has a published 6-stem set", and that stem pack carries bass, guitars, keys,
metronome, other and vocals with **no drums file at all**. A drums stem for it does exist,
filed under `~/Music/Loops/_EXCLUDED_lower_quality/`, 277.1 s at -18.2 dBFS. DrumSep split
it into five pieces (hi-hat 71.5% air band, cymbals 21.9%, no silent lane), and its tempo
came back **155 at HIGH confidence**, matching the stem-service prior exactly.

## Two corrections to what was published yesterday

**The inventory was wrong.** Yesterday's page said two Appleseed Cast songs had 5-piece
splits. Nine did. Seven were sitting in
`~/Projects/_outputs/illumination-ritual-demucs/drumsep/` behind an `_DRUMSEP_ALL_DONE`
marker and a validated manifest, in a directory that was never opened.

**Illumination Ritual was at the wrong tempo.** It shipped at 145 BPM, taken from a
stem-service filename. Building a real estimator for the other eight produced a test that
could be run backwards on the finished one, and snare-backbeat concentration puts it at
**168**. The same test returns 154 on Clearing Life at 0.780 against a 0.180 runner-up,
matching that song's independent prior exactly, which is what makes it trustworthy here.

## Tempo: three estimators are wrong before one works

- **Milliseconds off the grid** improves monotonically as the grid gets finer, so the scan runs to the top of its range. It reported 184.5 BPM.
- **Scale-free phase error anchored at the first onset** is still wrong, because the first onset is rarely the downbeat. It scored the correct answer worse than random.
- **A grid-capacity filter** rejected every candidate including the known-good one, because its second condition was measuring flam spacing rather than grid spacing.
- **Snare-backbeat concentration works.** The right grid puts the strong snares on two slots eight sixteenths apart; a wrong grid smears them. Score concentration only, since the slot index is arbitrary until the downbeat is known.

Four songs came back HIGH, five MEDIUM, one LOW. Treat MEDIUM and LOW bar numbers as
provisional against the audio.

## An ornament is a minority of its lane

The first album run produced garbage that still passed every render gate:

| Song | First run | Class share of its lane | After the fix |
|---|---|---|---|
| 07 Barrier Islands | 506 rim, 10 ghosts | 95% | 0 rim, 166 ghosts |
| 07 Barrier Islands | 282 bells, 14 rides | 95% | 0 bells |
| 07 Barrier Islands | 513 open hats, 135 closed | 79% | closed hat part restored |
| 02 Great Lake Derelict | 458 rim, 9 ghosts | 95% | 0 rim, 157 ghosts |
| 05 30 Degrees 3 Am | 196 bells, 27 rides | over ceiling | 0 bells |

Bells, rim clicks and open hats are accents inside a part, so a class covering most of its
lane is a bad cut. `MAXFRAC_ORNAMENT = 0.45` in `sd_lanes.py`. A runaway rim class also
**starves ghost detection**, since ghosts rank within the hits still called snare, so a
collapsed ghost count is the symptom to watch for.

Adriatic to Black Sea kept its 58 bells and 175 ghosts through the fix, which is the
control proving the ceiling does not just delete everything.

## Rim clicks: zero on all ten, and that is a measurement

Every one of the ten refused the side-stick class. On Illumination Ritual the reason was the ghost
confound: body energy correlated with loudness at +0.679 and 13 of 13 low-body hits sat
inside the ghost class. On Barrier Islands and Great Lake Derelict the reason was the
ornament ceiling. Either the album has no rim-click parts, or this detector cannot find
them on this material. It has not been shown that a rim part exists and was missed.

## What the gate does and does not prove

All ten files passed 19 checks: ladder velocities, one fixed staff slot per drum family,
kick and side stick apart, ride as GM 51, zero ghost parentheses, every ghost carrying its
dot, every flam surviving as a legal grace, per-drum counts matching the ledger, and zero
physical conflicts. That proves each file is well formed and matches its event ledger.

It says nothing about whether the detection heard the right thing. The 506-rim file passed
all 19. Whether Guitar Pro and Songsterr draw these correctly is the check that has to
happen in the editor.

## Files

`~/Projects/_outputs/stems-to-guitar-pro-drums/appleseed-illumination-ritual/`, ten
`.gp5` files plus per-song `results.jsonl` carrying the tempo fit and every articulation
control decision. The pre-fix run is preserved in `pre_ornament_ceiling_2026-07-31/`.

Sources: [Discogs release](https://www.discogs.com/release/25022929-The-Appleseed-Cast-Illumination-Ritual),
[Spotify](https://open.spotify.com/album/3wr2LFFZVHa3FXdftVlBGm),
[Wikipedia](https://en.wikipedia.org/wiki/Illumination_Ritual).
