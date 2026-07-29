# 7.3.26 Jam Rebuild: Song 11 (drum-split stems)

Seven-lane web mixer for song 11 of the 7.3.26 jam rebuild. Every stem is decoded once onto a
single AudioContext clock (sample-locked, no drift). Solo, mute, volume per lane.

## Lanes
bass, guitar, kick, snare, toms, hi-hat, cymbals. Bass and guitar from Demucs htdemucs_6s; drums
split by DrumSep MDX23C. Encoded mono 96 kbps mp3 for web.

## Audit (passed both rules before build)
Drums present (drum RMS about -29 dB) and continuous (99% active, zero internal starts/stops).
Cuts that failed either rule were not built.

## Ableton import (raw WAVs)
Lossless WAVs: `/Volumes/T7 Shield/jam-7-3-26-rebuild/packages/song11/` with `ABLETON_IMPORT.md`.
Auto-Warp OFF, Create Fades OFF, drop each at 1.1.1, keep mixed bit depths, export 32-bit float.
