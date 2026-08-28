# Guitar Transcription Workstation

Built and measured 2026-08-28 on Jacks-iMac (x86_64, macOS 13.7.8).

## Corrections to the proposed setup

1. **This Mac is Intel, not Apple Silicon.** `uname -m` returns x86_64. The Apple Silicon
   rationale for pinning Basic Pitch to Python 3.10 does not apply.
2. **A new 3.10 Basic Pitch env would rebuild a working one and reintroduce a crash.**
   `~/venvs/audio_midi_311` holds basic-pitch 0.4.0 on Python 3.11.15 with onnxruntime
   1.23.2. The default model is `saved_models/icassp_2022/nmp.mlpackage` (CoreML), which
   SIGFPEs on this Mac. `nmp.onnx` ships beside it. `env.sh` pins
   `BASIC_PITCH_MODEL_TYPE=onnx` and a pytest case fails if the pin is dropped.
3. **The validator stack was installed already, minus pytest.** Python 3.13.6 carried 13 of
   the 14 proposed packages. pytest 9.1.1 installed. Demucs 4.0.1 is in `~/venvs/demucs`
   on Python 3.12.13 with torch 2.2.2.
4. **`validate_song.py` mostly exists.** 25 gates live in
   `~/.claude/skills/impossible-guitar-parts/`, tuned against recorded regression cases.
   The new script orchestrates them rather than forking them.

## Repo

`~/Music/guitar-transcription` (git initialised, 1 commit)

| File | Does |
|---|---|
| `env.sh` | Pins the three interpreters and the ONNX model type |
| `doctor.py` | 33 live checks; exits non zero on hard failure |
| `validate_song.py` | Resolves candidate + stem, runs the gates, one verdict, JSON to `reports/` |
| `tests/test_workstation.py` | Package imports, ONNX pin, gate presence, human-tab regression anchor, 22-fret pitch ceiling |

## Mundo Cani, live run

| Gate | Verdict | Detail |
|---|---|---|
| playability | REVIEW | 585 notes, 539 attacks, hand skip 42%, SHIFT x4, severe JUMP x7, isolated octave x6, ownership suspect x9. BPM 172. |
| octave copy / note loss | PASS | 0.0% copy rate on both guitar staves |
| audio accuracy | NOT RUN | needs a validated beat map |
| duration / tie | NOT RUN | needs a validated beat map |

**Finding:** the existing two-staff split put 585 notes on Guitar and 1 note on Guitar 2.
The split ran and produced a file that does almost nothing.

**Note:** another session was editing `~/Projects/_outputs/APPLESEED-DELIVERY-2026-08-28/`
during this run. Nothing here writes into that tree.

## Remaining blocker

Guitar Pro 8's Homebrew cask is a `pkg` artifact and prompts for an admin password:

    brew install --cask guitar-pro

Sonic Visualiser 5.2.1 installed cleanly. `doctor.py` goes to zero hard failures once
Guitar Pro is in.
