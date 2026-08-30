# Confession, re-derived from its stem

The Appleseed Cast, Low Level Owl Vol II track 12. Every note re-detected from
`12 - Confession.guitar.wav` with basic_pitch on the ONNX model. Nothing carried over from the
previous notation except the container: tuning D A D G B E, capo 0, 408 bars of 4/4 at 174 bpm, and
the untouched Bass and Drums staves.

## Playability, finished

| measure | inherited tab | re-derived, 32nd grid |
|---|---|---|
| hard failures | 16 | **0** |
| IMPOSSIBLE_SPAN | 8 | 0 |
| HIGHFRET | 4 | 0 |
| PITCH_UNAVAILABLE | 4 | 0 |
| gate verdict | FAIL | REVIEW, hand-skip diagnostic only |
| guitar staves | Guitar | Guitar + Guitar 2 (split), 16 notes moved |

The seven unplayable chords span up to 43 semitones, which is two guitarists on one staff. Dealt
across two staves with the fretboard re-solved, 63 of 3922 positions changed, every pitch intact.

## Round trip, written against reparsed

3922 of 3922 events matched, 0 missing, 0 added, 0 pitches changed, 3059 onset ticks all preserved.
Keyed on absolute tick, MIDI pitch, duration and track.

## Audio, before and after

| file | attacks | audio | chance | gain | z | best wrong stem | separation | verdict |
|---|---|---|---|---|---|---|---|---|
| inherited tab | 2702 | 13.1% | 13.6% | -0.4 | -1.5 | -0.9 | +0.5 | undetermined |
| re-derived, 16th grid | 2705 | 15.4% | 13.6% | +1.9 | +6.8 | -0.8 | +2.7 | undetermined |
| **re-derived, 32nd grid** | 3059 | 18.0% | 13.5% | **+4.5** | +15.3 | -0.7 | **+5.2** | undetermined |

A 16th grid at 174 bpm pushed 31.0% of attacks outside the 30 ms window before anything was
compared. The 32nd grid pushes 0.0%.

The confirmation cut is separation >= 7.7 with z >= 5.0, established leave-one-song-out over 162
known-wrong pairings across 54 songs: the same 7 confirm in-sample and held out, 1 false positive in
162, threshold stable (median 7.7, range 5.1 to 7.7). Confession reaches +5.2, so
on audio it is UNDETERMINED. Do not promote on that basis.

The audio number measures detector agreement rather than pitch accuracy, since basic_pitch produced
these notes from this same recording.

## Artifact

`appleseed-regen-2026-08-28/confession_rederive/Confession-32nd-FINAL.gp`
sha256 `52df966249b0541ade217c070586d20477fc0418ba70ca28b2adc38ed315b5cb`
validator run_id `e184ad420e21b1d1`, gate sha256 `9b21d05326633dde`
250,801 bytes, 408 bars, 2 guitar staves, Bass and Drums untouched.

Playable yes, audio-accurate not established.
