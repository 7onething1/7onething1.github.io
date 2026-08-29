# Three clock bugs under the Appleseed audio verdicts

29 of 46 songs were marked audio refuted on 2026-08-29 and queued for re-transcription. Three
separate defects sit underneath that number, each measured against tabs whose answer is known.

## Verdict

- **The 29-song work order is invalid.** The same procedure refutes 3 of 8 HUMAN Songsterr tabs
  against their own recordings, and 7 of 11 supported verdicts reverse under
  duration-matched controls. `full_catalogue_audio_audit.py` is retired from decision making.
- **The fix that worked is the bar-length bug.** Confirmed machine tabs 4 of 46 to
  8 of 46, none lost.
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

| configuration | threshold | confirmed | machine | undetermined | false positives |
|---|---|---|---|---|---|
| note-driven clock, constant bpm | sep >= 5.0 | 7 | 4 of 46 | 42 | 0 of 162 |
| **meter clock, constant bpm** | sep >= 5.0 | **11** | **8 of 46** | **38** | 1 of 162 |
| meter clock + frame-corrected tempo map | sep >= 25.8 | 3 | 0 of 46 | 46 | 0 of 162 |

Each threshold is read off that configuration's own negative controls. The tempo map needs
sep >= 25.8 because a known wrong pairing reaches +25.7 there, against about +5 under a
constant bpm. Lifting both sides equally is not an improvement.

## Confirmed under the meter clock
- **s6389349_Mile-Marker** (human) gain +35.6, z +77.8, sep +34.7
- **s6389274_Blind-Mans-Arrow** (human) gain +22.7, z +32.8, sep +20.9
- **s6389335_A-Tree-For-Trials** (human) gain +16.7, z +12.9, sep +15.6
- **Low-Level-Owl-I-10-Mile Marker** (machine) gain +12.2, z +25.5, sep +12.5, previously supported +5.8
- **Low-Level-Owl-I-06-Doors Lead to Questions** (machine) gain +9.1, z +11.9, sep +10.1, previously refuted -1.7
- **Low-Level-Owl-I-07-Steps and Numbers** (machine) gain +12.6, z +27.6, sep +9.7, previously supported +15.5
- **Low-Level-Owl-II-09-Decline** (machine) gain +10.5, z +6.6, sep +8.7, previously supported +14.6
- **Low-Level-Owl-II-03-A Place in Line** (machine) gain +6.5, z +11.1, sep +7.4, previously refuted -10.7
- **Low-Level-Owl-II-07-Sunset Drama King** (machine) gain +7.6, z +23.1, sep +7.2, previously refuted -1.9
- **Low-Level-Owl-I-03-Blind Mans Arrow** (machine) gain +7.5, z +14.4, sep +6.4, previously refuted -22.9
- **Low-Level-Owl-II-08-The Last in a Line** (machine) gain +6.1, z +9.6, sep +5.9, previously refuted -14.4

## Confession, built and not promoted

Re-derived end to end from its guitar stem with basic_pitch on the ONNX model, quantised to a 16th
grid at 174 bpm, fretboard solved with the skill's own beam. 4122 events detected,
3922 notes written, 199 dropped above the instrument's range.

- hard failures **16 to 7**, all remaining ones IMPOSSIBLE_SPAN
- audio gain **-0.8 to -0.3**, separation
  -1.2 to -0.8, still undetermined

Playability improved and audio accuracy did not, so the file stays unpromoted. Queue status:
audio accuracy undetermined, playability repair pending reliable timing alignment, with the old
-36.6 kept only as a deprecated diagnostic.

A first pass clamped a fret to force a wide chord to fit, silently turning pitch 83 into 60 on 7
chords. The fallback now preserves every pitch. Those 7 chords span up to 43 semitones, the
two-guitarists-on-one-staff case.

## Unaffected

Playability was measured against the files rather than against audio. The 1248 to 212 hard-failure
reduction and 15 of 46 hard clean both stand.

Mare Vitalis track 7 is written here as And Nothing Less. The released title begins with an
ellipsis and the filename on disk is unchanged.

Measured 29 August 2026. Tools and raw records in
`~/Projects/_outputs/appleseed-regen-2026-08-28/`; tempo-mapped files in `tempo_mapped_gp/`,
originals untouched.
