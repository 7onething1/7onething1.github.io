# Hejira: two harmonics Jaco played, one the guitar played

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

On that evidence alone the first pass reported all three nodes confirmed. **That reading
was wrong.** The detector only ever looked at the bass stem, and its test compared the
harmonic band against the open string's own fundamental inside that one stem. That
separates a harmonic from a fretted note and says nothing about which instrument made the
tone.

## The G string node is the nylon guitar

Brandon heard it before any of this was measured. Three checks agree with him.

| Check | G str 5th, G4 | D str 7th, A3 | D str 9th, F#4 |
|---|---|---|---|
| Events where the bass stem dominates | **5 of 8** | 2 of 2 | **12 of 12** |
| Bass share of the band | **20 to 47%** | 48 to 66% | **46 to 78%** |
| Times this pitch occurs anywhere in the song | **0** | 132 | very common |
| Diatonic to B major | no | no | yes |

**G natural does not occur in this song.** Across all five tracks, 2,981 pitched notes,
zero G naturals. The song is in B major, which has no G natural in it.

**The lead guitar's single most common note is G#, 192 of its 445 notes.** G#4 sits 100
cents above the G4 detection band, so a fingerpicked nylon G# with any pitch movement
reads as 392 Hz. Two of the eight G4 events are dominated by the vocal stem, which reaches
A4 and plays G# 93 times.

The A3 node is contested for the same reason. At 34.13 s, the stronger of its two events,
the guitar track in the tab plays A3 at that exact instant, and the rhythm guitar plays A
natural 109 times across the song. That placement came out too.

What settled it needed no stem separation: **the guitar is already in the tab, so its
whereabouts are known.** The first pass never checked the detected onsets against the
transcription's own guitar tracks, or against the song's pitch-class content.

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
var r = await fetch('http://127.0.0.1:8791/hejira_bass_HARMONICS_v5.gp');
var f = new File([await r.blob()], 'hejira_bass_HARMONICS_v5.gp');
await importRevisionInput.onchange({target: {files: [f]}});
// -> Successfully uploaded hejira_bass_HARMONICS_v5.gp   51,006 bytes   1.03 s
```

The handler posts the file to `/data/convert` as form field `source` and dispatches the
returned parts into the editor. That endpoint is a pure function reachable with a plain
credentialed fetch, which is how the 383 harmonic corruption was caught before anything
was imported.

## What is in the editor now

Proof by round trip: import, then use Songsterr's own export control to pull the editor's
current state back out, then count by position.

Measured through Songsterr's own `/data/convert`, the converter the editor itself uses:

| Converted part | Before | After |
|---|---|---|
| Lead Guitar | 562 | 562 |
| Rhythm Guitar | 1542 | 1542 |
| **Electric Bass (finger)** | 493 | **494** |
| Drums | 1472 | 1472 |
| Vocals | 668 | 668 |

**11 harmonic positions: F#4 x10, A3 x1, G4 x0.** Bar 128 goes from 0 to 1, its whole bar
rest replaced by an F#4 where the AI transcription printed silence. Bar sums stay exact at
4.0 throughout, and every harmonic note is reachable from exactly one position.

They sit at bars 16, 23, 46, 53, 67, 80, 87, 109, 128, 135, with bar 46 carrying two.
Placement is reliable early and drifts late: 141 bars at a flat 85 bpm is 398.12 s against
401.23 s of audio, a 0.78 percent gap accumulating to 1.10 bars by the end of the song.

## The one open decision

Tab 6072564 was authored by `076runner`. Import changes editor state only. Verified after
the import: revisionId 7930670, revision count 1, 5 tracks, createdVia AI, the published
tab untouched. Submitting a revision is outward facing and overwrites a public tab, so it
stays Brandon's act. The Submit control was enabled the entire time and was deliberately
not pressed.

## Files

In `~/Projects/_outputs/hejira-bass-fix/`:

- `hejira_bass_HARMONICS_v5.gp`, the corrected tab, 51,006 bytes
- `build_v4.py`, copy-on-write builder
- `verify_v4.py`, the 19 check gate, including reference count
- `stem_attribution.py`, which stem actually sounds each detection
- `guitar_alibi.py`, what the tab guitar plays at each onset
- `harmonic_hunt.py`, spectral detector
- `harmonic_events_all.json`, full event list with timestamps
- `v4_report.json`, every placement, with what it replaced and how

Jaco played bass on 4 of the 9 tracks on Hejira: Coyote, Hejira, Black Crow, Refuge of
the Roads. Black Crow is tuned a half step down, Eb Ab Db Gb, which any tab built for it
has to carry.
