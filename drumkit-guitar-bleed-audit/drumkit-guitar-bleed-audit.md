# Drum kit guitar-bleed audit — band practice 8.28, four-mic master

Measured 2026-09-04 on Brandons-MacBook-Pro.

## Question asked

Did the skill transfer from the other Mac come across wrong? The earlier drum-kit
separation gave a kick that was a kick and cymbals that were cymbals. The 8.28 run
put guitars all over the cymbals and the snare.

## Answer

The skill transfer is intact. `~/.claude/skills/jam-stem-rebuild/SKILL.md` still
carries the correct hard ordering at steps 5 and 6: Demucs first, then DrumSep on the
Demucs `drums.wav`.

The 8.28 v2 run departed from that ordering. `drumkit_from_mic.sh` feeds
`_kitsource_mic1_presence_lift.wav` straight into DrumSep. That file is the raw room
mic with +5 dB at 2.5 kHz and +7 dB at 6 kHz, which is the band the guitar amps
occupy. DrumSep was trained on isolated drum stems and its heads sum back to its
input, so the guitar had to land somewhere. It landed in snare and cymbals.

## Evidence

Percent of each lane explained by a per-bin least-squares projection of the two
verbatim guitar mics. The reference is a separate physical transducer, so no model
grades its own output.

Song 13, seconds 60 to 120:

| lane  | mic-direct | Demucs-first |
|-------|-----------:|-------------:|
| snare |      58.5% |         1.9% |
| crash |      48.2% |         4.4% |
| toms  |      27.9% |         3.8% |
| ride  |      26.7% |         4.9% |
| kick  |      12.6% |         7.4% |
| hh    |       7.7% |         3.1% |

Across the 11 paired songs the snare lane runs 25.6% to 76.9% on the mic-direct path
(median 56.2%) and 0.9% to 9.8% on the Demucs-first path (median 6.8%). Every song
moves the same direction. Full sweep in `bleed_sweep.json`.

Lane shape agrees. Mic-direct snare: centroid 1011 Hz, 4.5% above 5 kHz, crest 18.5 dB.
Demucs-first snare: centroid 3445 Hz, 27.4% above 5 kHz, crest 32.2 dB.

A lag search from -3 s to +3 s confirms the Demucs-first result is not an artifact of
misalignment: best-lag snare 2.2% against 1.9% at zero lag.

## Status, 2026-09-04

Phase 1 is running. Launched 15:42:49 as launchd job `com.drwu.phase1-song12-song16`,
building song12 and song16 through `do_song.sh` on the correct Demucs-first path, and
self-verifying with the bleed measurement at the end. Log:
`8-28/phase1_song12_song16.log`, marker `PHASE1_DONE`.

The 13 contaminated kits were quarantined at 15:44, 17 GB moved to
`v2-mic-lanes/.../delete/CONTAMINATED-drumkits-2026-09-04/`. Nothing deleted. Each
song folder keeps a `QUARANTINED-drumkit.md` with the location and the reason. The
verbatim mic lanes were left in place.

## Plan

1. Adopt the 11 Demucs-first kits already on disk, retire the mic-direct kits into a
   sibling `delete/` folder. Run `do_song.sh 12` and `do_song.sh 16` under launchd to
   fill the two gaps. About 3 hours of unattended machine time.
2. Level and air, through `multimic-stem-fix` lesson 4, which blends the highpassed
   full Demucs drums stem back into hh and crash. Gate every lane with
   `composite-stem-alignment/scripts/drum_lane_reality_gate.py`.
3. Optional punchy version: cancel the guitar mics out of mic 1 before Demucs. The
   prototype takes mic 1 from 41.6% guitar to 17.1% while keeping 96% of the kick
   band. Validate end to end on song 13 before any batch.

## Do not touch

`com.drwu.chain-8-14-missing6` is live under launchd and runs the correct
Demucs-then-DrumSep chain with a drum-level gate. Leave it running.

## Files

- Page: `~/Projects/drwu-htmls/public/drumkit-guitar-bleed-audit/`
- Sweep data: `bleed_sweep.json`
- Cancellation prototype: `guitar_cancel.py.txt`
- Kits measured: `~/Projects/_outputs/band-practice-stems/8-28/`
