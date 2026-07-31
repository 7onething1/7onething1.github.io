# Mare Vitalis: drum tabs for Songsterr, whole album

The Appleseed Cast, 31 July 2026. All ten tracks built from DrumSep 5-piece splits through
`/stems-to-guitar-pro-drums`. Every file passed the same 19-point render gate.
**15,300 notes across 1,215 bars.**

Sister page to [Illumination Ritual](https://7onething1.github.io/appleseed-illumination-ritual-drumtab/),
which is closed at 10 of 10 and 20,890 notes.

## The album

| # | Song | BPM | Bars | Notes | Bells | Open hat | Ghosts | Flams | Tempo conf |
|---|---|---|---|---|---|---|---|---|---|
| 01 | The Immortal Soul of Mundo Cani | 172 | 78 | 498 | 0 | 10 | 7 | 19 | MEDIUM |
| 02 | Fishing the Sky | 187 | 174 | 1,738 | 12 | 26 | 116 | 68 | LOW |
| 03 | Forever Longing the Golden Sunsets | 152.75 | 174 | 2,160 | 0 | 0 | 145 | 116 | MEDIUM |
| 04 | Mare Mortis | 136 | 114 | 1,897 | 0 | 23 | 192 | 68 | LOW |
| 05 | Santa Maria | 138.25 | 116 | 1,605 | 8 | 27 | 143 | 101 | LOW |
| 06 | Secret | 87 | 96 | 1,494 | 0 | 20 | 66 | 70 | MEDIUM |
| 07 | ...And Nothing Less | 88.25 | 100 | 1,359 | 0 | 17 | 102 | 42 | MEDIUM |
| 08 | Poseidon | 137.25 | 118 | 1,146 | 0 | 14 | 66 | 75 | HIGH |
| 09 | Kilgore Trout | 181.75 | 106 | 1,243 | 0 | 31 | 48 | 65 | MEDIUM |
| 10 | Storms | 95 | 139 | 2,119 | 0 | 28 | 145 | 26 | MEDIUM |

Album totals: 20 bells, 196 open hats, **0 rim clicks**, 1,030 ghosts, 650 flams,
106 crashes, 1,688 rides.

## It did not need the external drive

This album was queued as blocked on `/Volumes/Black`, which is not mounted. All ten tracks
were already demucs-separated locally at `~/Projects/_outputs/mare-vitalis-demucs/`, every
one with a `drums.mp3`. Only the DrumSep stage was missing, and that runs on local files.
Separation ran 02:01 to 05:40 with zero skips, 218 to 474 MB of output per song, and every
hat and cymbal lane cleared the 8-16 kHz air-band reality gate.

## Two detector bugs this album exposed

**The cut did not know which side the ornament was on.** `two_class_cut` maximized
separation without caring which class ended up small, so on six of ten songs it isolated
the 5% *dimmest* cymbals and labelled the remaining **95% "bright"**. The ornament ceiling
rejected that as nonsense, which was the right outcome by the wrong mechanism, and it
discarded real bells along with it. Making the cut side-aware recovered **12 bells on
Fishing the Sky**, **8 on Santa Maria**, and open hats on Mare Mortis (0 to 23) and And
Nothing Less (0 to 17).

**A capped search made the cap look like a measurement.** With the size ceiling in place,
any lane preferring a larger class settles exactly on it. Poseidon reported a rim class at
precisely **0.450**, the ceiling value to three decimals, and it passed every other
control: body-vs-loudness correlation 0.18, ghost overlap 40%. The splitter now reports
saturation and refuses a split whose optimum sat on the boundary. Poseidon went from
**108 rim clicks to 0**, and its ghost count recovered from **36 to 66**, because a runaway
rim class eats the snares that ghost detection ranks within.

**The control that makes those fixes trustworthy.** Illumination Ritual came through all
three changes byte-identical: 25 bells, 26 open hats, 26 crashes, 386 rides, 75 ghosts,
88 flams. Gates of this shape are easy to write in a form that silently deletes
everything, and only a known-good song catches that.

## The grids here are genuinely weak, and are labelled so

Backbeat concentration tops out near **0.29** on this record, against 0.54 on Illumination
Ritual and 0.78 on Clearing Life. Confidence came back 1 HIGH, 6 MEDIUM, 3 LOW. Mare
Vitalis is a more atmospheric album with less backbeat for the discriminator to lock onto.

The octaves are right. Every one of the five suspect tempos beat both its double and its
half on the backbeat test, including the three low ones: Secret at 87, And Nothing Less at
88.25, Storms at 95. So these are correct tempos carrying honest low confidence, and the
bar numbers should be checked against the audio before anything is submitted.

## Rim clicks: zero across both albums

Twenty songs now, and every one has refused the side-stick class, each for a stated reason:
the ghost confound on some, the ornament ceiling on others, constraint saturation on
Poseidon. Either these two records have no rim-click parts, or this detector cannot find
them on this material. It has not been shown that a rim part exists and was missed.

## What the gate proves, and what it does not

All ten files passed 19 checks: ladder velocities, one fixed staff slot per drum family,
kick and side stick apart, ride as GM 51, zero ghost parentheses, every ghost carrying its
dot, every flam surviving as a legal grace, per-drum counts matching the ledger, and zero
physical conflicts. That proves each file is well formed and matches its event ledger.

It says nothing about whether the detection heard the right thing. The 108-rim Poseidon
passed all 19. Whether Guitar Pro and Songsterr draw these is the check that happens in the
editor.

## Files

`~/Projects/_outputs/stems-to-guitar-pro-drums/mare-vitalis/`, ten `.gp5` files plus
per-song `results.jsonl` carrying the tempo fit and every articulation control decision.
Both earlier runs are preserved in `pre_side_aware_2026-07-31/` and
`pre_saturation_2026-07-31/`.

Sources: [Discogs](https://www.discogs.com/master/151878-The-Appleseed-Cast-Mare-Vitalis),
[Wikipedia](https://en.wikipedia.org/wiki/Mare_Vitalis).
