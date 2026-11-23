# LoudEpoch and GloryEpoch: verification showcase

Two original VST3 plug-ins. LoudEpoch is a guitar rig modeled by black-box measurement of the JHS "Loud Is More Good" as rendered by MixWave. GloryEpoch is an overdrive modeled on the JHS Morning Glory through MixWave's plug-in. All figures come from the projects' own verification files.

## Validation
- pluginval strictness 10: SUCCESS (both). Host test: LoudEpoch 230 passed, 0 failures; GloryEpoch 67 passed, 0 failures.

## Routing
Gate -> Input Level -> Input EQ/Comp -> Compressor -> Overdrive -> Distortion -> Amp -> Cab -> Delay -> Reverb -> Output EQ/Comp -> Output Level -> Limiter. Proven by bit-exact cascade tests (-240 dB for the true order, 1 to 50 dB for wrong orders). Source: docs/ROUTING.md.

## Modules (status is an editorial color on the numbers)
| module | status | headline |
|---|---|---|
| Studio blocks | green | All 24 test groups PASS their stated limits: level law 0.000 dB, comp static max 0.001 dB, comp dynamics rms 0.50 / max 2.5 dB, limiter static max 0.022 dB, EQ holdout rms 0.01 to 0.06 dB. |
| Compressor pedal | amber | 1 kHz static curve rms mean 0.64 dB (median 0.15); 100 Hz static rms mean 0.62 dB; third-octave below 9 kHz at -20 dBFS rms mean 0.72 dB. Sine gain error max 5.0 dB (Comp 7.5/10 latch). Burst gain-curve rms median 1.73 dB, worst 8.89 dB (Comp 10). THD error max mean 5.5 points. |
| Overdrive | red | 1 kHz gain error mean 2.89 / max 8.34 dB; third-octave rms mean 2.31 / worst 3.14 dB; THD error mean 5.5 dB. |
| Distortion | amber | 1 kHz static rms mean 0.87 / max 1.28 dB; 100 Hz static rms mean 1.68 / max 3.32 dB; third-octave below 9 kHz rms about 1.1 dB (max 2.56); H3 error median 6.0 / max 7.9 dB; THD error median 7.1 points (max 72, a mix-5 null outlier). |
| Amp | amber | Fundamental gain error rms mean 0.77 dB (max 2.58, worst single 3.95); THD error rms mean 2.66 dB (max 9.3); H2 rms mean 5.7 dB; H3 rms mean 2.4 dB; third-octave rms mean 1.96 dB. |
| Cab | amber | Third-octave core error rms: grid groups mean 0.47 dB; mic and cab matrix 0.25 to 1.12 dB with single bands up to 5.5 dB; multi-slot groups mean about 1.1 dB; misc max 3.74 dB. |
| Delay | green | 100 of 101 metrics within tolerance. Modulation depth and rate match to about 1 percent. |
| Reverb | green | 136 of 136 metrics within tolerance. RT60 within 0.4 s at 5 frequencies for 5 decay settings; level within 1.5 dB. |

## GloryEpoch pass 1 to pass 2
- 1 kHz gain error mean/max: not computed -> 2.89 / 8.34 dB (target < 1.5 / < 4, missed)
- Third-octave sweep rms mean/worst: 3.1 / 6.0 -> 2.31 / 3.14 dB (target < 2.5 at every corner, missed)
- THD error mean: 4.6 -> 5.52 dB (worse)
- Variant matrix: all 18 pairs PASS

## Full chain latch fix
Mean absolute fundamental error over 16 sines: Default 2.52 -> 1.76 dB, Pop GT Delay 3.55 -> 1.22 dB. Max: Default 17.25 -> 7.54, Pop GT Delay 28.32 -> 4.86. Remaining: Default 2 kHz at 0 dBFS +7.54 dB, Pop GT Delay 1 kHz -4.86 dB.

## Not verified
- No listening test of any kind for either plug-in; no audio was played.
- No load in Ableton Live 11 (LoudEpoch: not tried). GloryEpoch was not opened in Live and Live 11.3.30 compatibility is not checked.
- Steinberg VST3 validator not run for either build; only pluginval at strictness 10 and the JUCE host test.
- Host-supplied tempo in a real DAW (tested only through the BPM parameter in the host test).
- Latency change while playing in a real DAW.
- arm64 and Windows builds: Intel x86_64 only.
- Real-time CPU load was not measured.
- GloryEpoch pass-2 accuracy targets were not met (1 kHz gain error and third-octave sweep rms).
- GloryEpoch fit ran at 1x oversampling, not 4x; no 4x refit of the final set. Three corners were left out of the final joint fit.
- GloryEpoch Mix law is one probe (Mix 5), 6.7 dB off at -24 dBFS; filter shapes measured at one frequency each, dry path only.
- GloryEpoch fitted constants are behavioral values, not recovered component values; the component positions are inferred, not from a published schematic.
- LoudEpoch full chain: Default 2 kHz at 0 dBFS is +7.54 dB high and Pop GT Delay 1 kHz is 4.9 dB low; THD differences range from -16 to about +40 points; noise third-octave error reaches 11.5 dB in single bands.
- LoudEpoch standalone Compressor A/B tables were not re-run after the latch change. Not probed on the reference: Input Level other than 0, Input Type STEREO, Oversampling OFF/2X/4X, sag, and real-audio program material.

## Provenance
No reference audio, impulse response, wavetable or coefficient table is shipped; the reference was never disassembled. LoudEpoch's Overdrive is a verbatim copy of GloryEpoch's engine (hashes in docs/INTEGRATION.md).
