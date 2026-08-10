# The Appleseed Cast tab work, audited

Checked 10 August 2026 against the files and the live services.

## Answers

- **Is it fraud?** No. The shipped page matches the files exactly, 0 mismatches across
  40 numeric rows, with `silent` printed on all six empty lanes. A rebuild started at
  1:21 PM did write bass over three near-silent stems. Found at 1:26, repaired by 1:49.
  Gate now reads 71 files checked, 0 failing.
- **All songs with guitar, bass and drums?** No. 46 of 56 built, and 6 of those
  carry an empty lane. Two Conversations (10 songs) was never built.
- **Missing bass?** Yes, 5 files: The Immortal Soul of Mundo Cani, The Waking of Pertelotte, Bird of Paradise, Convict, A Tree for Trials. All five
  measure 0.0% alive on the bass stem, but the 40 to 160 Hz band shows the low end went
  into `other` and `piano` instead. On Convict that band is 49 dB louder in `piano` than
  in `bass`, against a control where a working split puts the bass stem 21 dB ahead.
  Demucs put the bass in the wrong stem, so the record still has it.
- **Missing vocal?** All of them. 72 output files, 0 vocal tracks. 40 of
  46 songs have a real vocals stem on disk. `vocals` appears once in
  `build_allparts.py`, in the `LANES` tuple on line 100, and is never read. A Songsterr
  AI tab for this band carries 5 parts including the vocal as a Tenor Sax track.
- **Synced to YouTube?** No. Zero of the 46 files are on Songsterr. Nine tabs sit
  in the account, six of them drums only.

## Correction to the published story

The main page says a drums-only import deleted the AI guitar and bass on six songs.
`/api/meta/{songId}/revisions` returns a single "Initial revision, 1 track, createdVia GP"
for all six ids, so nothing was overwritten there. Songsterr does keep history: Cathedral
Rings has two revisions. The older tabs still exist under other ids (Fishing The Sky s1580,
Forever Longing s2038).

## The right rebuild order

Give Songsterr the YouTube link so its AI writes a 5-part tab, download that `.gp`, keep
its vocal track, and swap in the stem-built 2 guitars, bass and corrected drums. Only 3 of
46 songs have a vocal-bearing tab today: Fishing the Sky s1580, Forever Longing s2038,
On Reflection s6206980.

## The fabrication, found and repaired

`batch_twoguitar.py` (PID 44900, started 1:21 PM) had no level check, and
`verify_allparts.py` globbed `*-ALLPARTS.gp5` only, so every `*-4TRACK.gp5` bypassed it.

| Song | bass notes written | bass stem RMS | after repair |
|---|---|---|---|
| The Immortal Soul of Mundo Cani | 330 | not measured | 0 |
| Convict | 1,247 | -72.8 dBFS | 0 |
| A Tree for Trials | 205 | -71.9 dBFS | 0 |

Fixed: the gate now covers `*-4TRACK.gp5` and falls back to the three-track sidecar;
`batch_twoguitar.py` measures the bass stem before transcribing; `strip_silent_tracks.py`
repaired the three written files, each with a `.bak-before-strip-silent` copy.

Control group, same run, real bass stems came back within about 10 percent of the
three-track count.

## Empty lanes in the shipped files

- The Immortal Soul of Mundo Cani: no bass
- The Waking of Pertelotte: no bass
- Bird of Paradise: no bass
- Convict: no bass
- A Tree for Trials: no bass
- Messenger: no drums

## Songsterr

Nine private tabs. YouTube confirmed attached on Mare Mortis, Santa Maria,
Cathedral Rings and 30 Degrees 3 Am. The two four-track tabs return 403 without a login.

Full detail: <https://7onething1.github.io/appleseed-fraud-audit/>
