# Hejira: finding Jaco's natural harmonics, and three wrong answers on the way

Built 2026-08-08. Bar numbers are 1-based.
Live: https://7onething1.github.io/hejira-bass-harmonics/

## The three nodes

Brandon, by ear: "It does do the 7th fret D and 5th and 9th G." The letter is the
STRING. Standard tuning E1 A1 D2 G2 = MIDI 28 33 38 43.

| Node | Partial | Sounds | MIDI | Hz | In B major |
|---|---|---|---|---|---|
| D string, 7th fret | 3rd, +19 | A3 | 57 | 220.0 | no |
| G string, 5th fret | 4th, +24 | G4 | 67 | 392.0 | no |
| **G string, 9th fret** | 5th, +28 | **B4** | **71** | **493.9** | **tonic** |

## Wrong answer 1: editing a shared definition

GPIF deduplicates. `<Note>` and `<Beat>` elements are shared definitions referenced by id
from many places: **181 of 295 Note elements and 293 of 1299 Beat elements are referenced
more than once**, and note 147 alone is referenced from **32 positions**.

A first build modified notes in place, which is structurally neutral and leaves the note
count unchanged. Measured through Songsterr's own `/data/convert`:

| Converted part | Untouched | In-place edit | Copy-on-write |
|---|---|---|---|
| **Bass notes** | 493 | **762** | **497** |
| **Harmonics** | 0 | **383 across 112 measures** | **8 across 8 measures** |
| Lead / Rhythm / Drums / Vocals | 562 / 1542 / 1472 / 668 | unchanged | unchanged |

The repair is copy-on-write. Bars and voices are unshared here, 705 of each at refcount 1:

```
bar   -> voice     unshared, edit its <Beats> list directly
voice -> beat      clone if refcount > 1, then it is private
beat  -> note      always clone, then it is private
```

Reference count is the only check that separates a surgical edit from a broadcast edit.

## Wrong answer 2: the detector could not tell bass from guitar

The first detector ran on `bass.wav` alone, comparing the harmonic band against the open
string's own fundamental inside that one stem. That separates a harmonic from a fretted
note and says nothing about which instrument made the sound.

**G natural does not occur in this song.** Across all five tracks, 2,981 pitched notes,
zero G naturals, the song being B major. The lead guitar's most common note is **G#, 192 of
its 445**, 100 cents above the G4 detection band, so a fingerpicked nylon G# reads as
392 Hz.

## Wrong answer 3: the third node was the wrong string

Every earlier pass recorded it as **D string 9th fret**. Brandon said **G string 9th fret**.

| Written as | Sounds | Role in B major | Detections |
|---|---|---|---|
| D string 9th fret | F#4, 370.0 Hz | dominant | 12 confident events, for a node never named |
| **G string 9th fret** | **B4, 493.9 Hz** | **tonic** | 2 |

B4 is also one of the three pitches Blackburn's chart 498 engraves in its harmonic passage
(F#4, G#4, B4).

## The test that works: purity

A stopped E3 puts its third partial at 494 Hz, which is B4, so any threshold on energy at
B4 reads a fretted note as a harmonic. A natural harmonic is close to a pure tone, so its
own 2nd and 3rd partials are tiny.

```
purity = E(f0) / max( E(2*f0), E(3*f0) )

  ordinary fretted bass note   0.8 to 1.3     (measured on 5 notes from the tab)
  natural harmonic             9 to 98
```

With the target also required to beat every note whose overtone series reaches it (T-12,
T-19, T-24, T-28 and the open string), the whole song gives:

| Node | Sounds | Events | Bars |
|---|---|---|---|
| **D string 7th fret** | A3 | **14** | 5, 6, 8, 9, 13, 15, 20, 21, 22, 44, 79, 129 |
| G string 9th fret | B4 | 2 | 1, 11 |
| G string 5th fret | G4 | **0** | nothing anywhere in the song |

Ten of the fourteen A3 events fall in bars 5 to 22, the opening minute, which is the "few
times, a certain section" Brandon described.

## Is it in the transcription already?

Yes, as ordinary stopped notes. The bass part has **11 notes at G string fret 9** (written
E3) and one at D string fret 7, and bar 13 writes A3 at G string fret 14. Tested at all 12
spots, the fundamental is present and purity runs **0.5 to 1.2**. Those are stopped notes
played as written.

## What went into the tab

**8 harmonics: A3 x7, B4 x1**, in bars 11, 13, 15, 21 (two), 22, 45 and 80. Bass positions
471 to 471 unchanged, no bar changed note count, only the BASS track differs. Gate: 19
checks, 0 failed. Confirmed through the converter: 8 harmonics, `str1/fret7` x7 and
`str0/fret9` x1, every other part unchanged.

Seven further detections fall in bars where the bass tab is silent, and the build was
turning each into a whole-note harmonic. A whole note is 2.82 s against detections of 0.09
to 0.51 s, so bars 1, 5, 6, 8, 9 and 130 are reported here instead.

## The open decision

Tab 6072564 was authored by `076runner`. Import changes editor state only. Verified after
every import: revisionId 7930670, revision count 1, 5 tracks. Submitting a revision
overwrites a public tab, so it stays Brandon's act. The Submit control was enabled
throughout and was never pressed.

## Files

In `~/Projects/_outputs/hejira-bass-fix/`:

- `hejira_bass_HARMONICS_v6.gp`, the tab, 50,929 bytes
- `build_v4.py`, copy-on-write builder
- `verify_v4.py`, the 19 check gate
- `nodes_v2.py`, node detection on the corrected node set
- `stem_attribution.py`, which stem actually sounds each detection
- `guitar_alibi.py`, what the tab guitar plays at each onset
- `harmonic_events_v3.json`, the purity-verified event list

Jaco played bass on 4 of the 9 tracks on Hejira: Coyote, Hejira, Black Crow, Refuge of the
Roads. Black Crow is tuned a half step down, Eb Ab Db Gb, which any tab built for it has to
carry.
