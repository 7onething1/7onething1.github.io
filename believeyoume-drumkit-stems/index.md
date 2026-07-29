# Shiner BELIEVEYOUME — drum-kit stem player

**Route:** `/believeyoume-drumkit-stems` · **Song:** 01 — Asleep in the Trunk (4:39)

The Moises drum stem for *Asleep in the Trunk* separated into its **five individual kit pieces** — kick, snare, toms, hi-hat, cymbals — via the per-lane DrumSep pass (MDX23C jarredou, `/Users/Shared/_run_engine/drumsep/`). This page is the interactive **stem player**: each piece is decoded once onto a single Web Audio clock (sample-locked, no drift on iOS), with solo / mute / volume per piece. The five pieces together reconstruct the kit; the gold **Full Kit** lane is the original parent stem (muted by default) for A/B.

## Source

- Parent stem: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/01 - Asleep in the Trunk/drums.flac`
- Separated pieces (pilot, produced in the per-lane alignment chat): `.../01 - Asleep in the Trunk/drums_pieces/{kick,snare,toms,hihat,cymbals}.flac`
- Audio host: `https://drwu-stems.vercel.app/believeyoume-drumkit-stems/stems/asleep-in-the-trunk/` (mp3 192k, CORS)

## Per-lane verification (drum-split gate)

Measured over the full 4:39 with a windowed-FFT band profile — no resampling (the long-stem resample path hangs). The gate is **real drum signal in the expected band**, not file presence. All five lanes carry genuine signal; none hit the −90 dB "empty toms" failure mode the separator can produce.

| Lane | RMS | Peak | Active | Dominant band | Verdict |
|---|---|---|---|---|---|
| Kick | −18.4 dB | −1.5 dB | 82% | sub 20–60 Hz (62%) + low (29%) | PASS |
| Snare | −24.5 dB | −0.4 dB | 76% | low-mid 120–400 Hz (86%) | REAL — body-dominant* |
| Toms | −23.8 dB | −2.1 dB | 35% | low 60–120 Hz (57%) + low-mid (16%) | PASS |
| Hi-Hat | −42.1 dB | −15.1 dB | 53% | high 5–20 kHz (81%) | PASS |
| Cymbals | −36.4 dB | −8.9 dB | 63% | high 5–20 kHz (55%) + high-mid (44%) | PASS |
| Full Kit (ref) | −16.3 dB | −0.25 dB | 99% | sub (43%) + low (29%) + low-mid (23%) | parent stem |

\*Snare captured the shell body (150–250 Hz) but is thin on the wire crack above 2 kHz — real drum signal, worth a tighter re-pass if the snap matters. All lanes are 44.1 kHz and identical length to the parent (duration test passes).

## Notes

- This chat is the **consumer** of the per-lane separation; the separation itself (pilot on track 01) was produced and validated in the sibling "per-lane alignment" chat. This page independently re-measured the five pieces before shipping.
- The remaining BELIEVEYOUME tracks (03, 04, 05, 08, 09, 10, The Alligator, Endless Summer, Lazarus) still need the same split — owned by the sibling separation chat to avoid a shared-folder race.
