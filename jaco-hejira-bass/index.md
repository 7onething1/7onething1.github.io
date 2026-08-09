# Jaco on Hejira: the four bass parts

Built 2026-08-09 for the audition. Bar numbers are 1-based, times run from the top of
each recording.

Live: https://7onething1.github.io/jaco-hejira-bass/

Jaco overdubbed bass on four of the nine Hejira tracks: 1 Coyote, 5 Hejira, 7 Black
Crow, 9 Refuge of the Roads. Those four are on the page, full bass part, every bar.

## Read it like this

| Mark | Means |
|---|---|
| 5 | fret 5 |
| <5> | natural harmonic at fret 5 |
| (5) | tied, let it ring, do not restrike |
| 5~ | vibrato |
| 5/ | slide |
| x | dead note |
| *14 | the tab already writes a NODE PITCH here as an ordinary stopped note |

Top line is the thinnest string. Small number top-left of each box is the bar, grey
number top-right is where that bar lands in the recording.

## Black Crow is a half step down, verified

The tab states bass tuning D#1 G#1 C#2 F#2. That claim was checked against the
recording rather than taken on trust. Pitch-class profile of the isolated bass stem
against the 968 struck notes of the bass track:

| Reading | Correlation to the recording |
|---|---|
| **as written, Eb tuning** | **+0.867** |
| if standard tuning | -0.026 |

Best of all twelve transpositions is 0 semitones, so the tab's tuning is right. Top
classes line up: audio D# 12.4 / A# 10.5 / C# 9.5 against tab D# 45.7 / A# 15.6 / C# 14.7.

The other three songs are standard E1 A1 D2 G2.

## The three nodes

Brandon's ear, verbatim: "the 7th fret D and 5th and 9th G." The letter names the
string, not the note. Standard tuning E1 A1 D2 G2 = MIDI 28 33 38 43.

| Node | Partial | Sounds | MIDI | Hz |
|---|---|---|---|---|
| D string, 7th fret | 3rd, +19 | A3 | 57 | 220.0 |
| G string, 5th fret | 4th, +24 | G4 | 67 | 392.0 |
| G string, 9th fret | 5th, +28 | B4 | 71 | 493.9 |

On Black Crow those nodes sound a half step lower with the instrument: G#3, F#4, A#4.

## The detector is dead, and here is the number that killed it

A spectral detector was built across the previous session to place these harmonics.
Its suppressor list contained a physically wrong rule: it required the harmonic to be
twice as loud as the note an octave below it. For the G string 5th fret that is G3,
which is the open G string's own 2nd mode and rings whenever the string rings. That
one line produced "G string 5th fret: zero events in Hejira."

Removing every same-string mode from the suppressor set fixed it and recovered 12
G-string-5th events on Hejira where there had been none. The corrected detector was
then run against control stems from the same song, which the earlier session never did:

| purity floor | Hejira bass | guitar (control) | drums (control) |
|---|---|---|---|
| >= 6 | 59 | 18 | **80** |
| >= 10 | 52 | 10 | 48 |
| >= 15 | 34 | 6 | 25 |
| >= 20 | 24 | 3 | 17 |
| >= 30 | 15 | 1 | 10 |
| >= 40 | 10 | 0 | **5** |
| >= 60 | 4 | 0 | 2 |

The drum stem produces as many harmonic events as the bass stem. Best bass-to-drums
ratio at any threshold is 2.0, so about half of anything it reports is a cymbal. No
detector output was written to any staff. Script: transcribe_harmonics_v2.py.

## What replaced it: the node-pitch index

Grounded in the tabs themselves, no audio inference. Every place a tab already writes
one of the three node pitches as an ordinary stopped note is a place a harmonic can go
without changing which pitch sounds.

| Song | D string 7 (A3) | G string 5 (G4) | G string 9 (B4) |
|---|---|---|---|
| Hejira | **5**, all written at G string fret 14 | 0 | 0 |
| Refuge of the Roads | **24**, at G14 and D19 | 0 | 0 |
| Coyote | **29**, all at G string fret 14 | 0 | 0 |
| Black Crow | 0 | 0 | 0 |

Two things fall out. **G4 and B4 are written zero times in all four tabs**, so every
tab misses those pitches outright, which is why none of them sound right. And **every
single A3 is written at G string fret 14**, up at the top of the G string where nobody
plays a passing note. Refuge adds D string 19. Those are the D-string-7th-fret harmonic
spots, and they are marked in teal on the page.

Hejira: bars 13, 44, 44, 81, 81.
Refuge: bars 14, 14, 39, 42, 42, 42, 44, 44, 67, 67, 69, 70, 72, 73, 73, 73, 100, 101,
101, 115, 141, 141, 142, 142.
Coyote: bars 50, 51, 52, 64 x4, 65 x3, 134, 135 x3, 136, 149, 150 x3, 180 x2, 187 x2,
188 x2, 190 x2, 191 x2.

## Per song

| Song | Bars | Notes | BPM | Tuning | Harmonics written |
|---|---|---|---|---|---|
| Coyote (Shadows and Light, live) | 203 | 1158 | 160 | standard | **11**, from Brandon's bars |
| Hejira | 141 | 471 | 85 | standard | 0 |
| Black Crow | 184 | 968 | 170 | **Eb, half step down** | 0 |
| Refuge of the Roads | 199 | 656 | 114 | standard | 0 |

Coyote's eleven sit at G string 5th fret, bars 14, 21, 27, 35, 39, 43, 44, 45, 46, 47,
48, written from the bar numbers Brandon gave by ear. Bar 23 was left as the chord he
said was correct. He said bar 52 onward stops matching the recording.

## Songsterr state

Nothing was published to Songsterr. All four tabs on the site were authored by other
people, and the standing rule is that a stranger's tab never gets revised. Black Crow
2657660 is a human tab credited to Jaco with the correct Eb tuning, so the
transcription credit authorized for it was not needed and not spent. Credits stay at
17 of 50.

| Song | Songsterr id | Author |
|---|---|---|
| Coyote, Shadows and Light | 4448708 | another user, Editor |
| Hejira | 6072564 | 076runner, AI generated |
| Refuge of the Roads | 6072578 | AI generated |
| Black Crow | 2657660 | human, Eb tuning, Jaco credited |

## Files

- Sheet source: ~/Projects/_outputs/hejira-bass-fix/build_audition_sheet.py
- Bass part JSON per song: ~/Projects/_outputs/hejira-bass-fix/audition/*.json
- Extractor: ~/Projects/_outputs/hejira-bass-fix/extract_bass.py
- Corrected detector plus its own refutation: transcribe_harmonics_v2.py
- Guitar Pro files: coyote/coyote_bass_HARMONICS_v1.gp, hejira_songsterr_LIVE_export.gp,
  blackcrow/blackcrow_songsterr_export.gp, refuge/refuge_songsterr_export.gp

## Machine note, 2026-08-09

The internal disk hit 99% (924 GiB used of 957, real writable space near zero) during
this build. Writes failed with ENOSPC while df still reported 14 GiB free, which is the
macOS purgeable-space gap. Largest trees: Older Downloads HUGE 134 GB, Desktop 156 GB,
Projects 191 GB, _outputs 148 GB of that. T7 Shield had 17 GiB free, Black had 3.3 GiB.
Nothing was deleted or moved to fix it.
