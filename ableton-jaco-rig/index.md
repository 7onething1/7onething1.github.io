# Your Ableton rig: the setup, the three faults, and the Jaco chain

Measured 2026-08-10 from `/Applications`, `/Library/Audio/Plug-Ins`, `iloktool auths`, and
`~/Library/Preferences/Ableton/Live 11.3.43/PluginScanner.txt`.

## 1. What you actually have

| What | Where | State |
|---|---|---|
| Ableton Live 11 Suite 11.3.43 | `/Applications/Ableton Live 11 Suite.app` | installed |
| Ableton Live 9 Suite 9.7.5 | `/Applications/Ableton Live 9 Suite.app` | legacy |
| Waves V16, 213 plugins | `/Applications/Waves/Plug-Ins V16` | primary |
| Waves V12, 195 plugins | `/Applications/Waves/Plug-Ins V12` | keep for 12 exclusives |
| Waves V14 stub, Waves Harmony | `/Applications/Waves/Plug-Ins V14` | 4 items |
| Waves V15 stub, GTRSolo | `/Applications/Waves/Plug-Ins V15` | 5 items |
| WaveShells 12.7, 14.19, 15.5, 16.0, 16.7, 16.8 | Components + VST3 | six shells |
| UA SSL E Channel Strip | `.component` + `.vst3` + `.lunacomponent` | authorized |
| UA SSL G Bus Compressor | `.component` + `.vst3` + `.lunacomponent` | authorized |
| UA 175B, 176, Fairchild 660, Fairchild 670 | same three formats | authorized |
| UA LA-2A, LA-3A, Pultec EQP-1A, MEQ-5, HLF-3C | same three formats | authorized |
| UA Lexicon 224, Dream Amp, PolyMAX, Waterfall B3 | same three formats | authorized |
| MixWave EHX Big Muff, Deluxe Memory Man | `.component` + `.vst3` | authorized |

Totals: Live 11.3.43, 408 Waves plugin bundles across two versions, 15 UA plugins, 21 iLok
authorization chains all reading Authorized.

## 2. The three faults

**Fault 1. The VST3 custom folder points at the Audio Units folder.** Live's scanner log:

```
2026-08-08T18:27:07: VST3: scanning plugins in "/Library/Audio/Plug-Ins/VST3" (local)
2026-08-08T18:27:07: VST3: scanning plugins in "/Library/Audio/Plug-Ins/Components" (custom)
2026-08-08T18:28:22: VST3: finished scanning plugins
```

The `(custom)` line is the VST3 Plug-In Custom Folder preference, set to the Audio Units
directory. Live walks 66 Audio Unit bundles with its VST3 loader. VST3 scan takes 75 seconds
against 9 seconds for VST2.

**Fault 2. The user VST3 folder did not exist.** 84 logged instances of
`error: Reading directory failed: No such file or directory` on `~/Library/Audio/Plug-Ins/VST3`,
going back to at least 2026-07-12. Folder created, so the next scan comes back clean.

**Fault 3. Waves is installed twice.** V12 holds 195 bundles, V16 holds 213, and 183 are the same
plugin in both. Only 12 are V12-only, and they are worth keeping V12 for: Abbey Road Chambers,
Abbey Road Saturator, Abbey Road Vinyl, J37, TG12345, REDD17, REDD37-51, RS56, Reel ADT,
ARPlates, KingsMic, OVox. Reach for V16 by default and go to V12 for those 12.

## 3. Two of my notes were wrong

| Note on file | What it claimed | Measured today |
|---|---|---|
| `reference_uad_luna_only` | All UA plugins are `.lunacomponent`, Luna only, never Ableton | False. All 15 are installed as `.component`, `.vst3`, and `.lunacomponent`. The AU and VST3 copies load in Live 11. |
| `project_mixwave_78_dollars_undelivered` | The $78 MixWave EHX purchase was delivered but not activated | Now activated. `iloktool auths` reports both EHX pedals Authorized. |

Consequence for the bass work: the UA SSL E Channel Strip and SSL G Bus Compressor are usable
inside Ableton right now.

## 4. The fix, in order

1. Clear the VST3 custom folder. Settings, Plug-Ins, VST3 Plug-In Custom Folder. Clear it or point
   it at `/Library/Audio/Plug-Ins/VST3`. Leave Use Audio Units on.
2. Rescan with option held for a full rebuild.
3. Use V16 by default, V12 only for the 12 exclusives.
4. Fill `Fretless.adg`, which is a 4,150-byte rack shell with no devices in it, saved 2025-11-26.
5. Save the dialed chain back over `Fretless.adg`.

## 5. The Jaco fretless chain

Reference rig: 1962 Fender Jazz fretless, fingerboard epoxied, Rotosound roundwounds, bridge
pickup carrying most of the signal, into an Acoustic 360 preamp and 361 cabinet.

| # | Stage | Plugin | Settings | Why |
|---|---|---|---|---|
| 1 | Level ride | Bass Rider (V16) | Default, target around -12 dB | The spread runs from harmonic whispers to hard 16ths. Ride first so the compressor shapes tone rather than level. |
| 2 | Console preamp | Scheps 73 (V16) | Low shelf 110 Hz cut 2 dB. Mid bell 700 Hz push 3 to 4 dB. High shelf 10 kHz push 2 dB. | The 700 Hz push is the bark. The 10 kHz shelf is roundwound zing and harmonic bloom. |
| 3 | Compression | CLA-76 (V16) | Ratio 4:1, attack 3 to 4, release 6 to 7, 4 to 6 dB GR | The 1176 is the compressor on this sound. Slowish attack passes the finger transient, fast release sustains the mwah. |
| 4 | Channel strip | UA SSL E Channel Strip | HPF 40 Hz. Dip 250 to 300 Hz by 2 to 3 dB, narrow. Mid bell 800 Hz, small push. | The E-series carve. The dip removes the box that the 700 Hz push exposes. |
| 5 | Saturation | Kramer Tape (V16) | Drive to just before the 100 to 400 Hz band thickens | Quarter inch tape, standing in for the Acoustic 360 preamp and the tape master. |
| 6 | Sub, optional | RBass (V16) | Low band only, leave out above the 5th fret | Generates fundamental harmonics so the low E reads on small speakers. |
| 7 | Bus | UA SSL G Bus Compressor | Ratio 4:1, attack 30 ms, auto release, 2 dB GR | Glue on the bass bus or mix bus. Two dB is the whole job. |

Space: keep it close to dry. On a send use Abbey Road Chambers from V12 for a real chamber, or the
UA Lexicon 224 for a longer digital tail. The 224 is a 1978 unit, later than the 1976 sessions.

Dirt: the Acoustic 360 had a fuzz circuit in the preamp. Closest match is the MixWave EHX Big Muff,
now licensed. Run it parallel at low blend rather than in series.

## 6. What the chain cannot do

No plugin makes a fretted bass sound fretless. The mwah is physical, a string sliding on an
epoxy-coated fingerboard with no fret to stop it, plus left-hand pressure and slide speed. The
chain shapes a tone that is already fretless. On a fretted DI it gives midrange bark and tape
warmth, and the glide is still missing.

Three things carry more of this sound than any of the seven stages: play the bridge pickup, use
roundwounds, and let notes ring into each other so the harmonics stack.

## 7. Files

| File | What it is |
|---|---|
| `~/Projects/_outputs/waves-mercury-mixer/jaco-rig/Jaco_Fretless_Bass.mix_plan.md` | Chain spec with plugin IDs and per-slot dial notes. |
| `~/Projects/_outputs/waves-mercury-mixer/jaco-rig/Jaco_Fretless_Bass.xps` | StudioRack chain that loads in Live, carrying the builder's template slots rather than the Jaco slots. Container only, drag the seven plugins in. |
| `~/Music/Ableton/User Library/Presets/Audio Effects/Audio Effect Rack/Fretless.adg` | Empty rack shell, 4,150 bytes, saved 2025-11-26. |

Related: [Jaco on Hejira, the four bass parts](../jaco-hejira-bass/),
[Hejira bass harmonics](../hejira-bass-harmonics/),
[MixWave EHX activation](../mixwave-ehx-activation-fix/)
