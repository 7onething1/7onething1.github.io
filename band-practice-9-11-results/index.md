# Band Practice 9-11, What the Measurements Found

Five tapes · 4 h 05 m · 44100 Hz PCM_24 · measured 2026-09-13 to 09-14 · companion to the [runbook](../band-practice-9-11-runbook/)

## Verdict

**The session is TWO microphones, not five.** Two files are bit-identical duplicates, and a third tape is from a different take entirely: it scores higher against an unrelated practice recording than against the mics it was filed with. The real take is 002 and 003, and the song list is 22 performances, not the 29 a three-mic vote produced.

## Five files, three distinct, two in the take

| | |
|---|---|
| files handed over | 5, all 14727 to 14728.5 s |
| bit-identical pairs | 2 (001 == 004, 003 == 005) |
| actually one take | **2** (mics 002 and 003) |
| songs, corrected | **22** (from 29 on the bad vote) |

## How mic001 was caught

1-second envelope cross-correlation over the full four hours, then the same test against the 8-28 practice, a different session.

| pair | best lag | r | reading |
|---|---|---|---|
| **002 / 003** | 0 s | **0.489** | peak exactly at zero lag, above every control |
| 001 / 002 | 7150 s | 0.376 | below the wrong-recording ceiling |
| 001 / 003 | 6400 s | 0.371 | below the wrong-recording ceiling |
| **001 / the 8-28 practice** | 5015 s | **0.394** | a different session, and it scores HIGHER |
| 002 / 8-28 | -70 s | 0.216 | control |
| 003 / 8-28 | -1390 s | 0.313 | control |

A second argument settles it independently. 002 and 003 align at lag 0, so a same-take 001 would have to peak at one common offset against both. Its two peaks sit **750 seconds apart**, which one take cannot produce.

**The control that failed.** A block-shuffle surrogate passed all three pairs as real. Any two band-practice recordings share long-range song-and-gap structure and beat a shuffle easily. Only scoring against a WRONG RECORDING separated them.

## What the contaminated map did

| | with mic001 (2 of 3) | the real take (002 AND 003) |
|---|---|---|
| songs | 29 | **22** |
| performance time | 97.3 min | **57.3 min** |
| fraction of tape | 39.7% | **23.3%** |

A single 14.10 minute block in the bad map resolves into **four separate 3.0 to 4.4 minute songs** once the foreign take is removed.

## The song map, and what it actually measures

A volume-drop cull misses drum-driven playing in a near-continuous jam, so the map scores the **periodic pulse in the 40 to 110 Hz kick band**. Two controls, exits non-zero if either fails.

| control | mic 002 | mic 003 | what it proves |
|---|---|---|---|
| A, shuffled surrogate | +0.114 | +0.100 | the score is periodicity, not density |
| B, cymbal 6-12 kHz | +6.97 dB | +2.14 dB | cymbals ring during performance |

**It is a low-band periodicity detector, and that is not a drum detector.** Three of the 22 songs have no drums at all on either mic: guitar and bass fundamentals share the 40 to 110 Hz band with a kick. Control A proved the periodicity was real. It never proved a kick produced it.

## Three controls that were wrong, and how

| gate | read | why it was wrong |
|---|---|---|
| Performance is louder than talk | -1.17 dB | Gaps measured LOUDER. It encoded the assumption the runbook says is false for a continuous jam. |
| Cymbal FRACTION of total energy | 0.941x | A fraction falls whenever low end rises, which is what a band playing does. It measured spectral tilt. |
| Lane percussive fraction | 0.853 | A high ratio on a toms lane at **-123.1 dBFS**, which is silence. A ratio says nothing about level. |

All three are the same defect: a ratio graded without a level arm. No threshold was lowered to force a pass; each fix changed the measurement.

## Measured throughput on this Mac

| stage | rate | result |
|---|---|---|
| Reading tapes off the external drive | 141x realtime | 4 h tape streams in 1.7 min |
| Cutting, 22 songs x 2 mics | minutes | 44 files, 1.96 GB, format matched 44/44 |
| Demucs htdemucs_6s, CPU | 1.67x realtime | 264 stems, 7.9 GB, 44/44, zero failures |
| DrumSep MDX23C, CPU | **5x SLOWER than realtime** | 118.3 min of drums, about 9.9 hours |

**MPS is 3.2x faster and produces wrong output.** On an identical file the drums stem correlated **0.333** with the CPU result at 0.5 dB SNR, and bass 0.769. `torch.backends.mps.is_available()` returns True on this Intel iMac with a Radeon Pro 570, so availability is not a safety signal. Every run must pass `-d cpu`.

## What is still unresolved

| item | measurement | status |
|---|---|---|
| Songs 03, 11, 18 | r -0.165 to -0.284 | The two mics ANTI-correlate. Song18's spectra are similar and it still anti-correlates. |
| Two guitarists | max abs L-R = 0.0 | The tapes are dual-mono, so a channel-asymmetry split has zero information. |
| 11 cut edges of 44 | 4.7 to 11.7 dB | No qualifying valley inside a 60 s radius. Flagged UNRESOLVED, never forced. |
| Songs 04, 07, 09 | drums silent | No drum signal on either mic. Excluded from DrumSep. |

## Method

Every figure is observed command output. The one estimate this project produced, a 151 to 284 GB disk requirement computed from format assumptions, was wrong by an order of magnitude: the equivalent prior run on disk measured 33 GB, and Demucs writes 1-channel PCM_24 rather than the assumed float32 stereo.

Tooling in `~/Projects/_outputs/band-practice-9-11/`: `dup_test.py` · `kick_pulse_map.py` · `cross_mic_agreement.py` · `consensus_songmap_v2.py` · `cut_songs_v6.py` · `boundary_audit.py` · `run_demucs_v6.py` · `verify_demucs_v6.py` · `run_drumsep_v6.py`

Measured on Jacks-iMac, 2026-09-13 to 2026-09-14. Step 6 was still running when this page was written; steps 1 through 5 are complete and verified on the corrected two-mic take.
