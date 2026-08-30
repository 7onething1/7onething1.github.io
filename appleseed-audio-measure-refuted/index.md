# Three clock bugs under the Appleseed audio verdicts

29 of 46 songs were marked audio refuted on 2026-08-29 and queued for re-transcription. Three
separate defects sit underneath that number, each measured against tabs whose answer is known.
The confirmation threshold was then validated leave-one-song-out, which retired the first
rescore's confirmed count.

## Verdict

- **The 29-song work order is invalid.** The same procedure refutes 3 of 8 HUMAN Songsterr tabs
  against their own recordings, and 7 of 11 supported verdicts reverse under
  duration-matched controls. `full_catalogue_audio_audit.py` is retired from decision making.
- **The bar-length bug is real and its confirmed-count gain is withdrawn.** Reading each bar
  from its time signature recovers a median 9.6 s of drift per file. The reported gain of
  4 of 46 to 8 of 46 was read at an unvalidated sep >= 5.0 cut. At the validated cut the meter
  clock confirms 4 of 46, and the note-driven clock was never scored there.
- **Recording-derived tempo maps did not help.** All 46 were written and measured; at a threshold
  read off their own negative controls, 0 of 46 machine tabs confirm.

## Bug one, control selection

`librosa.sequence.dtw(subseq=False)` spans both sequences and the audit picks controls by onset
count, ignoring duration. A shorter control forces compression, which becomes flat runs.
Confession's winning control put 663 of 1859 hits on ONE onset; its own map put 3.

Repairs tried, on the 8 known-good human tabs (a working measure scores 8 of 8): raw warped
percent 3, duration-matched controls 2, distinct-onset score 0, banded DTW at five radii 3/3/2/3/3,
chance-normalised warped gain 4, pre-warp chance-normalised 6.

## Bug two, the reader's clock

`attack_string_evidence.events()` takes each bar's length from `max(onset + duration)` over
note-bearing beats, so a bar ending in a rest loses that time for the rest of the song.

| measure | value |
|---|---|
| files drifting over 1 s | 48 of 54 |
| over 5 s | 40 |
| worst | 92.7 s |
| median \|notation length - recording length\| | 0.9 s |
| median \|reader length - recording length\| | 12.5 s, worst 92.5 s |

The notation matches the recording. The reader does not. The 8 human tabs drift 0.0 to 2.4 s
because Songsterr exports carry no trailing rests, an unisolated confound in the first
known-answer test.

## Bug three, the onset frame

`beat_map.py` uses `onset_detect(backtrack=True)`, which walks each detection back to the energy
minimum. `beat_track` places beats on peaks. Signed offset is a fixed -58 ms on 5 of 6 stems, 5
frames at hop 256. Beats hit the reference onsets 2.6% of the time against a 13.6% chance level,
worse than random; with backtracking off, 63.7%. Backtracking is kept and the beat grid is moved,
by each stem's own median offset, so no tab is consulted.

## Three clocks, same negative controls

| configuration | cut | confirmed | machine | undetermined | false positives |
|---|---|---|---|---|---|
| note-driven clock, constant bpm | sep >= 5.0 (in-sample) | 7 | 4 of 46 | 42 | 0 of 162 |
| meter clock, constant bpm | sep >= 5.0 (retired) | 11 | 8 of 46 | 38 | 1 of 162 |
| meter clock + frame-corrected tempo map | sep >= 25.8 (in-sample) | 3 | 0 of 46 | 46 | 0 of 162 |
| **meter clock, validated leave-one-out** | **sep >= 7.7, z >= 5.0** | **7** | **4 of 46** | **42** | 1 of 162 |

The first three rows read their cut from the same sample they then judge, so the last row is the
one that governs. The tempo map needs sep >= 25.8 because a known wrong pairing reaches +25.7
there, against about +5 under a constant bpm. Lifting both sides equally is not an improvement.

## The confirmation threshold, validated

Setting the cut from the observed negative-control maximum is post hoc calibration, and it
guarantees zero false positives inside that same sample. Brandon called that on 2026-08-29, so
the cut was re-derived leave-one-song-out: for each song the threshold comes from the other 45
songs' negative controls alone, and the held-out song is judged by a number it never contributed
to.

| measure | value |
|---|---|
| negative controls | 162 pairings over 54 songs (46 machine + 8 human) |
| their separation | median -2.6, p95 +0.3, max +7.6 |
| in-sample cut 7.7 | confirms 7 of 54 |
| leave-one-out | confirms the SAME 7 of 54, machine 4 and human 3 |
| held-out cut | stable, median 7.7, range 5.1 to 7.7 |
| false positives | 1 of 162 negatives judged by a cut they did not set |

**The validated standard for any promotion on this measure is separation >= 7.7 with z >= 5.0.**
An earlier pass used 5.0, a round number chosen rather than measured, and reported 8 confirmed
machine tabs. That figure was too loose and it is retired here.

## Confirmed at the validated cut, 7 of 54

- **s6389349_Mile-Marker** (human) gain +35.6, z +77.8, sep +34.7
- **s6389274_Blind-Mans-Arrow** (human) gain +22.7, z +32.8, sep +20.9
- **s6389335_A-Tree-For-Trials** (human) gain +16.7, z +12.9, sep +15.6
- **Low-Level-Owl-I-10-Mile Marker** (machine) gain +12.2, z +25.5, sep +12.5
- **Low-Level-Owl-I-06-Doors Lead to Questions** (machine) gain +9.1, z +11.9, sep +10.1
- **Low-Level-Owl-I-07-Steps and Numbers** (machine) gain +12.6, z +27.6, sep +9.7
- **Low-Level-Owl-II-09-Decline** (machine) gain +10.5, z +6.6, sep +8.7

## Withdrawn, confirmed by the 5.0 cut and below 7.7

- **Low-Level-Owl-II-03-A Place in Line** sep +7.4
- **Low-Level-Owl-II-07-Sunset Drama King** sep +7.2
- **Low-Level-Owl-I-03-Blind Mans Arrow** sep +6.4
- **Low-Level-Owl-II-08-The Last in a Line** sep +5.9

These four carry no finding against them. Undetermined means the measure cannot separate the tab
from a wrong recording at a cut that survives validation.

## Confession, rebuilt and not promoted

Re-derived end to end from its guitar stem with basic_pitch on the ONNX model, fretboard solved
with the skill's own beam. 4122 events detected, 3922 notes written, 199 dropped above the
instrument's range. The first build quantised to a 16th grid at 174 bpm and that grid was the
whole defect: it pushed 31.0% of attacks outside the 30 ms scoring window. On a 32nd grid,
0.0% fall outside it.

| measure | inherited tab | 32nd-grid rebuild |
|---|---|---|
| hard failures | 16 | 0, all seven impossible spans resolved |
| round trip | n/a | EXACT, 3922 of 3922, 0 changed pitches, 3059 onset ticks kept |
| audio gain | -0.4 | +4.5, z +15.3 |
| separation | +0.5 | +5.2, UNDETERMINED against the +7.7 cut |

sha256 `52df966249b0541a`, validator run_id `e184ad420e21b1d1`, gate `9b21d05326633dde`. Verdict
REVIEW, the hand-skip diagnostic only, preservation PASS and position PASS. On disk as
`Confession-32nd-FINAL.gp`.

**Do not promote it.** Audio accuracy comes before playability, and at the validated cut
Confession is undetermined. Its playability result is real and it is separate: hard failures 16
to 0 with an exact round trip and zero changed pitches. That is a repair worth keeping on disk
and worth nothing as an accuracy claim. The +5.2 also measures detector agreement rather than
pitch accuracy, because basic_pitch produced these notes from the same recording the score reads.

A first pass clamped a fret to force a wide chord to fit, silently turning pitch 83 into 60 on 7
chords. The fallback now preserves every pitch. Those 7 chords span up to 43 semitones, the
two-guitarists-on-one-staff case.

**Open decision:** whether to keep re-deriving at 32nd resolution across the catalogue. Adriatic
to Black Sea is the natural second test at gain +4.2, z +17.7, separation +4.4.

## Unaffected

Playability was measured against the files rather than against audio. The 1248 to 212 hard-failure
reduction and 15 of 46 hard clean both stand.

Mare Vitalis track 7 is written here as And Nothing Less. The released title begins with an
ellipsis and the filename on disk is unchanged.

Measured 29 August 2026, threshold validated the same day. Tools and raw records in
`~/Projects/_outputs/appleseed-regen-2026-08-28/`; tempo-mapped files in `tempo_mapped_gp/`,
originals untouched.
