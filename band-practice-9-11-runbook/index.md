# Band Practice 9-11 Runbook

The steps and skills that produced the 8-28 deliverable, mapped onto the new 9.11.26 tapes. Assembled 2026-09-13.

**The new project is five microphone tapes of one 4-hour practice, and 8-28 was four.** Same shape, same chain, one new variable.

## Source: what is on the Black drive

All five measured with `soundfile.info`. Durations agree within 1.5 s, which is what makes them simultaneous mic captures of one take.

| File in `/Volumes/Black/Downloads/` | Duration | Length | Rate | Ch | Format | Size |
|---|---|---|---|---|---|---|
| `9.11.26 - 9_11_26, 10.42 PM-005.wav` | 14728.5 s | 4h 05m | 44100 | 2 | PCM_24 | 3.90 GB |
| `9.11.26 - 9_11_26, 11.02 PM-002.wav` | 14728.5 s | 4h 05m | 44100 | 2 | PCM_24 | 3.90 GB |
| `9.11.26 - 9_11_26, 11.06 PM-004.wav` | 14727.0 s | 4h 05m | 44100 | 2 | PCM_24 | 3.90 GB |
| `9.11.26 - 9_11_26, 11.14 PM-001.wav` | 14727.0 s | 4h 05m | 44100 | 2 | PCM_24 | 3.90 GB |
| `9.11.26 - 9_11_26, 11.17 PM-003.wav` | 14728.5 s | 4h 05m | 44100 | 2 | PCM_24 | 3.90 GB |

| | 8-28 run | 9-11 run | Consequence |
|---|---|---|---|
| Mic tapes | 4 | 5 | Every best-mic-per-lane test has five candidates |
| Tape length | 18,745.374 s (5h 12m) | 14,727 to 14,728.5 s (4h 05m) | Shorter map, likely fewer songs than twelve |
| Rate / depth | 44100, 2ch, PCM_24 | 44100, 2ch, PCM_24 | Identical, cut settings carry over |
| Per-file size | 4.96 GB | 3.90 GB | 19.5 GB total input |
| Master location | `/Volumes/Black/Downloads/` | `/Volumes/Black/Downloads/` | Same drive, already found |

8-28 master: `8.28.26 - 9_1_26, 4.53 PM.wav`, 4,960,025,948 bytes, 18745.374 s. Provenance closed at 13 of 13 bit-exact across four mics.

## Skills: the three-skill chain, in order

1. **`/jam-stem-rebuild`** — one long tape becomes verified, synchronized, provenance-tracked stem packages
2. **`/composite-stem-alignment`** — several mics of the same take become one composite
3. **`/multimic-stem-fix`** — the five corrections that burned whole sessions

In reach for the tail end but not run on 8-28: `/stems-to-guitar-pro-drums` (drums to notation), `/five-stem-song-analyst` (per-song analysis).

## Steps: the seven, hard-ordered, from jam-stem-rebuild

1. **Pull and verify the source master first.** No Demucs, DrumSep, or enhancement until verification passes. Record all 13 manifest fields. This is where the 8-28 session broke down: mic3 was called "not obtainable" after searching Drive, the T7, and the boot volume, never `/Volumes/Black`. All five 9-11 tapes are already located and measured.
2. **New production root**, separate from any prior run. Prior outputs labelled `PRIOR_RUN_REFERENCE`, never deleted, never used as inputs. Suggested: `~/Projects/_outputs/band-practice-9-11/`.
3. **Drum-aware song map** of the whole recording. Never trust an old map. A volume-drop cull misses drum-driven performances on a near-continuous jam. Map the kick-band periodic pulse directly.
4. **Lossless cuts** at source rate and channels, boundaries snapped to quiet valleys. Keep count-ins, lead-in, decay. Never clip a transient.
5. **Demucs serially** — `htdemucs_6s`, producing bass, guitar, drums, other, vocals, piano.
6. **DrumSep serially** on each Demucs `drums.wav` — MDX23C, producing kick, snare, toms, hh, cymbals. Demucs first is the rule, since DrumSep has no not-a-drum output.
7. **Synchronized package** per song: bass, guitar, kick, snare, toms, hihat, cymbals. Frame-matched, time-zero, provenance table written.

## Corrections: the five lessons from multimic-stem-fix

1. **Zero-offset, sample-locked mics.** True inter-mic delay is 0 samples on one interface. `source_align` computed spurious offsets and pushed guitar 2.24 ms and bass 5.1 ms out of sync. Measure with GCC-PHAT on raw cuts, 40 to 2000 Hz, at three points. Within ~10 samples of 0 means use offset 0.
2. **Cut the aborted takes.** Kick plus snare windowed peak, 1 s windows at -32 dBFS. Keep runs of 5 s or more, merge gaps under 3 s, take the largest.
3. **Best mic per lane by real content, never a fixed default.** Bass differed between perf08 and perf09. Picking a default is how the bass got lost at -37 dBFS when another mic held it at -21.
4. **Restore cymbal and hihat top-end.** MDX23C strips 8 to 11 dB of 6 to 16 kHz air. Blend the highpassed full Demucs drums stem into hihat (HP 6 kHz, gain 1.0) and cymbals (HP 4 kHz, gain 0.7).
5. **Boundary fades kill the pop.** About 8 ms fade in and out on every lane at the keep-window edges.

## Gates: four thresholds the 8-28 run had to retune

| Gate | Was | Now | What the measurement showed |
|---|---|---|---|
| Reality gate, cymbal presence | 0.5% fraction arm | -66 dBFS absolute | mic1 is 83-98% below 250 Hz. The fraction arm failed by 3.8x to 50x on all six songs and would have called present cymbals absent. Now an 8th-order Butterworth bandpass on absolute band level. |
| `LANE_PERC_MIN` | 0.06 | 0.15 | Over 45 lanes: real lanes at 0.262 and above, the two bleed lanes at 0.044 and 0.064. A 4x gap. |
| Drum gate, onsets/s | percussive fraction | 2.0 onsets/s | Built a kit: 2.7 to 3.98. Refused: 1.33 to 1.93. Percussive fraction ranks them backwards. |
| GATE A room-mic guard | absent | level split | Played guitar mics -10.1 to -28.7 dBFS, room mics -30.5 to -38.4 dBFS. A 1.8 dB gap, no overlap. |

**Built, tested, rejected: bleed cancellation.** Stage 3.5 multichannel Wiener cancel in `rebuild_kit_demucs_first.py` behind `--bleed-cancel`, default OFF. On song12 it removed 34.3% of energy and dropped percussive 0.778 to 0.560 while guitar correlation stayed flat. The Demucs stem is already clean at 0.021 to 0.058 guitar, so contamination is created by the partition and there is no linear copy of the guitar mic to subtract. Do not re-derive this.

**Registration offset, already solved.** `start = take_id - 0.0697 - 0.5 = take_id - 0.5697`. Proven bit-exact on six takes, agreeing with the audit derivation to 0.3 ms. 0.0697 s is phone-clock correction, 0.5 s is pre-roll. Re-derive for 9-11, do not assume.

## Scripts: the seventeen, in the order they ran

All in `~/Projects/_outputs/band-practice-8-28-drumsep-redo/`.

| Date | Script | Purpose |
|---|---|---|
| Sep 4 | `bleed_probe.py` | Measure guitar bleed inside drumsep output lanes. |
| Sep 5 | `verify_cut_against_master.py` | Prove or disprove that a per-song mic cut is a bit-exact slice of the master. |
| Sep 5 | `build_deliverable.py` | Build the deliverable: labelled lossless WAV, one folder per song. |
| Sep 7 | `label_guitar_roles.py` | Decide which guitar mic is LEAD and which is RHYTHM, per song, from measurement. |
| Sep 7 | `relabel_10_15.py` | Re-label the songs 10-15 guitar files from the reproducible measurement. |
| Sep 7 | `repair_guitar_labels.py` | Re-derive every guitar and room file for songs 10-15 from the T7 verbatim cuts. |
| Sep 7 | `verify_deliverable.py` | Verify every verbatim file against the 4.97 GB master. |
| Sep 7 | `build_deliverable_17_22.py` | Fold the takes 17-22 drum lanes and measured guitar roles into the deliverable. |
| Sep 7 | `complete_deliverable.py` | Give every song the same four verbatim microphones. |
| Sep 7 | `mic_independence.py` | Is this microphone carrying a source of its own, or a mixture of the others? |
| Sep 7 | `all_mic_correlations.py` | Envelope correlation against the drum mic for EVERY mic instance, played or not. |
| Sep 7 | `mic_band_profile.py` | Band-energy profile of every played mic, to ask what INSTRUMENT is on it. |
| Sep 7 | `onset_lock.py` | Third vote on lead vs rhythm: which guitar locks to the drummer? |
| Sep 7 | `lane_source_test.py` | For a marginal drum lane: does it track the DRUM mic or the GUITAR mic? |
| Sep 11 | `fix_kick_bleed.py` | Strip sustained bleed out of the DrumSep kick lanes. |
| Sep 11 | `fix_lane_sustain.py` | Strip sustained bleed from snare and tom lanes. |
| Sep 11 | `repoint_als_kicks.py` | Point Live sessions at the FIXED kick lanes. |

`fix_kick_bleed.py` and `fix_lane_sustain.py` were promoted into `~/.claude/skills/composite-stem-alignment/scripts/`.

## Output: what 8-28 produced

| Folder | Dated | What it holds |
|---|---|---|
| `DELIVERABLE-8-28/` | Sep 11 | Twelve song folders, songs 10-22. The shipped set. |
| `KICK-FIXED-2026-09-11/` | Sep 11 14:14 | Nine songs, first kick de-bleed pass. |
| `KICK-FIXED-V2-2026-09-11/` | Sep 11 15:50 | Twelve songs, second kick pass after the HPSS gate revision. |
| `LANE-FIXED-2026-09-11/` | Sep 11 16:33 | Snare and tom sustain stripped. |

Verdicts: four PASS, five REVIEW_REQUIRED, two STOPPED_AT_GATE_A, one QUIET_KIT. Provenance closed at 38 of 38 bit-exact.

## Carry: what changes for 9-11

1. **Five mics, not four.** Every correlation matrix and the room-mic guard run across five candidates. The 8-28 level split is a starting hypothesis, re-measure it on this roster.
2. **The mic roster is unknown.** On 8-28 it was three players on rotating instruments. Run `mic_band_profile.py` and `mic_independence.py` before labelling anything.
3. **No lead versus rhythm call unless it is earned.** All six two-guitar songs on 8-28 shipped as guitar-A and guitar-B. Expect the same and do not force a label.
4. **Verify the master before any separation.** Step 1, and the step that cost 8-28 the most time.

---

Assembled 2026-09-13 from the 8-28 run's own files: `CLOSED-2026-09-05.md`, `RESULTS-all-songs.md`, the seventeen script docstrings, and the SKILL.md of `jam-stem-rebuild`, `composite-stem-alignment`, `multimic-stem-fix`. New-file specs measured with `soundfile.info`. Nothing estimated.
