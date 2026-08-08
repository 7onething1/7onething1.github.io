# Hejira, the bass harmonics Jaco played and nobody wrote down

Built 2026-08-08. Bar numbers are 1-based, as they read in the tab.
Live: https://7onething1.github.io/hejira-bass-harmonics/

## The claim

Brandon, by ear: natural harmonics at **G string 5th fret, D string 7th fret, D string
9th fret**, played fretless. "All others get that wrong, though the live one gets close."

Sounding pitches follow from the tuning alone: G string 5th fret is the 4th partial at
+24, sounding G4 (MIDI 67, 392.0 Hz). D string 7th fret is the 3rd partial at +19,
sounding A3 (57, 220.0 Hz). D string 9th fret is the 5th partial at +28, sounding F#4
(66, 370.0 Hz).

A natural harmonic decouples fret from pitch, and every format that matters stores the
**touched** fret, so the spec maps one to one into Songsterr's `harmonicFret` and Guitar
Pro's `HarmonicFret` with no inference.

## What four sources say

| Source | Kind | Ceiling | Harmonic notation | G str 5th | D str 7th | D str 9th |
|---|---|---|---|---|---|---|
| Igor Sardi 561, 28 pp | Guitar Pro, Bass I/II/III + TAB | none | positions only | **0** | 35 | 20 |
| Dave Blackburn 498, 4 pp | Sibelius Opus, notation | E5 | 10 circles | **0** | 0 | 3 |
| Songsterr 6072564 Hejira | AI transcription, 5 tracks | C#4 | none | 0 | 0 | 0 |
| Songsterr 4448708 Coyote live | human, Editor | C4 | none | 0 | 29 | 0 |

Blackburn's ten harmonic circles engrave F#4, G#4 and B4. Only F#4 is one of the three,
and G#4 and B4 are not clean natural harmonics out of standard tuning at all. Sardi's 28
pages carry the D string 7th and 9th fret positions in quantity and carry the G string
5th fret position zero times.

Coyote live 4448708 is the only human-edited tab of the three, and it writes A3 twenty
nine times against the Hejira AI tab's zero, as ordinary fretted notes with no harmonic
marking. Close, by the exact margin Brandon described.

## The recording settles it

The isolated bass stem was separated with htdemucs_6s from the 401.23 s album track. An
STFT at n_fft 8192, 2.69 Hz bins, looks for each node's sounding pitch as a near pure
tone, requiring the band to sit in the top 1 percent of prominence and to beat the open
string's own fundamental by 2.5 times. That ratio separates a natural harmonic from a
fretted note, which arrives with a strong fundamental and a full overtone stack.

| Node | Sounds | Sustained events | Longest | At |
|---|---|---|---|---|
| G string 5th fret | G4 | **8** | 2.60 s | 359.26 s |
| D string 7th fret | A3 | 2 | 1.72 s | 34.13 s |
| D string 9th fret | F#4 | 12 | 1.07 s | 42.72 s |

The G string 5th fret harmonic is in the recording eight times, including one that rings
for 2.6 seconds, and Sardi's chart writes it zero times. At that longest event the
Songsterr AI tab prints a whole bar rest: bar 128 is 2.824 s at 85 bpm, so a 2.60 s
harmonic was transcribed as silence.

Stated honestly, this is spectral detection with a threshold heuristic, so it is strong
evidence rather than proof. The event count and the 2.6 second duration are hard to
explain as an artefact, and the onsets give concrete places to listen.

## How 17 harmonics became 383

An earlier build wrote the harmonics by modifying notes in place, on the rule that this
is structurally neutral, cannot misfill a bar, and leaves the note count unchanged. All
of that is true, and the file was still wrong.

**GPIF deduplicates.** `<Note>` and `<Beat>` elements are shared definitions referenced
by id from many places. In this file 181 of 295 Note elements and 293 of 1299 Beat
elements are referenced more than once. Note 147 alone is referenced from 32 positions.
The 16 notes edited in place are referenced 177 times between them.

Measured through Songsterr's own `/data/convert`:

| Converted part | Untouched export | In-place build | Copy-on-write build |
|---|---|---|---|
| Lead Guitar | 562 | 562 | 562 |
| Rhythm Guitar | 1542 | 1542 | 1542 |
| **Bass notes** | 493 | **762** (+269) | **495** (+2) |
| Drums | 1472 | 1472 | 1472 |
| Vocals | 668 | 668 | 668 |
| **Harmonics** | 0 | **383** across 112 measures | **18** across 17 measures |

Bars and voices are not shared here, 705 of each at a reference count of one, so the
repair is copy-on-write down two levels:

```
bar   -> voice     unshared, edit its <Beats> list directly
voice -> beat      clone if refcount > 1, then it is private
beat  -> note      always clone, then it is private
```

Every earlier check asked whether the file was structurally sound, and every one of them
passed, because bar durations genuinely never changed. Reference count is the only
thing that separates a surgical edit from a broadcast edit.

Two traps follow from the same fact. A dedup key on a note id is wrong, because it
rejects genuinely distinct positions that share a definition; keying on bar plus ordinal
recovered two dropped placements. And an export shows fewer note elements than
positions, because Songsterr's export of 18 harmonic positions carries 3 harmonic Note
elements, one per distinct shape.

## The import that was never blocked

Five methods had failed with no upload request and no success message. All five ran
through a browser bridge whose JavaScript executes in an **isolated world**, which shares
the DOM and nothing else.

| Read from the same page, same instant | Isolated world | Main world |
|---|---|---|
| `window.trackNotsyEvent` | undefined | function |
| `window.__debug__` | undefined | function |
| `importRevisionInput.onchange` | **null** | **function** |
| pointer sequence opens a control | no | yes |

The handler had been attached the whole time. The verdict "the click never reached the
app, onchange is still null" was measuring the world boundary. Injecting a script element
reaches the main world, where the import handler is an ordinary function:

```js
var r = await fetch('http://127.0.0.1:8791/hejira_bass_HARMONICS_v4.gp');
var f = new File([await r.blob()], 'hejira_bass_HARMONICS_v4.gp');
await importRevisionInput.onchange({target: {files: [f]}});
// -> Successfully uploaded hejira_bass_HARMONICS_v4.gp   51,201 bytes   1.03 s
```

The handler posts the file to `/data/convert` as form field `source` and dispatches the
returned parts into the editor. That endpoint is a pure function reachable with a plain
credentialed fetch, which is how the 383 harmonic corruption was caught before anything
was imported.

## What is in the editor now

Proof by round trip: import, then use Songsterr's own export control to pull the editor's
current state back out, then count by position.

| Track in the editor export | Before | After | Harmonics |
|---|---|---|---|
| Lead Guitar | 445 | 445 | 0 |
| Rhythm Guitar | 1542 | 1542 | 0 |
| **Electric Bass (finger)** | 471 | **474** | **18** |
| Drums | 1428 | 1428 | 0 |
| Vocals | 523 | 523 | 0 |

18 harmonic positions: G4 x7, A3 x2, F#4 x9. Three bass bars changed note count, all
accounted for. Bar 128 goes from 0 to 1, the whole bar rest replaced by the 2.60 s G4.
Bars 109 and 116 each gain one note, because the note replaced there was a tie origin and
the harmonic drops that tie, a natural harmonic being its own attack. Bar sums stay exact
at 4.0 throughout.

Harmonics sit at bars 12, 13, 16, 23, 46, 53, 63, 67, 80, 82, 87, 90, 108, 109, 116,
128, 135. Placement is reliable early and drifts late: 141 bars at a flat 85 bpm is
398.12 s against 401.23 s of audio, a 0.78 percent gap accumulating to 1.10 bars by the
end of the song.

## The one open decision

Tab 6072564 was authored by `076runner`. Import changes editor state only. Verified after
the import: revisionId 7930670, revision count 1, 5 tracks, createdVia AI, the published
tab untouched. Submitting a revision is outward facing and overwrites a public tab, so it
stays Brandon's act. The Submit control was enabled the entire time and was deliberately
not pressed.

## Files

In `~/Projects/_outputs/hejira-bass-fix/`:

- `hejira_bass_HARMONICS_v4.gp`, the corrected tab, 51,201 bytes
- `build_v4.py`, copy-on-write builder
- `verify_v4.py`, the 18 check gate, including reference count
- `harmonic_hunt.py`, spectral detector
- `harmonic_events_all.json`, full event list with timestamps
- `v4_report.json`, every placement, with what it replaced and how

Jaco played bass on 4 of the 9 tracks on Hejira: Coyote, Hejira, Black Crow, Refuge of
the Roads. Black Crow is tuned a half step down, Eb Ab Db Gb, which any tab built for it
has to carry.
