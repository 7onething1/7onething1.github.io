# Your Ableton rig: the setup, the three faults, and the Jaco chain

Measured and repaired 2026-08-10 from `/Applications`, `/Library/Audio/Plug-Ins`, `iloktool auths`,
and `~/Library/Preferences/Ableton/Live 11.3.43/PluginScanner.txt`.

Two of the three faults are fixed and measured. Plugin scan dropped from **83.65 seconds to
3.50 seconds**.

## Scan time, before and after

| Pass | Before | After | Change |
|---|---:|---:|---:|
| VST3 | 74.68 s | 2.23 s | 97% faster |
| VST2 | 8.97 s | 1.28 s | 86% faster |
| **Total** | **83.65 s** | **3.50 s** | **96% faster** |

Both figures come from Live's own `PluginScanner.txt`, the 2026-08-08 scan against the 2026-08-10
scan after the fix.

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

### Fault 1. The VST3 custom folder pointed at the Audio Units folder. FIXED.

Live's scanner log on 2026-08-08:

```
2026-08-08T18:27:07: VST3: scanning plugins in "/Library/Audio/Plug-Ins/VST3" (local)
2026-08-08T18:27:07: VST3: scanning plugins in "/Library/Audio/Plug-Ins/Components" (custom)
2026-08-08T18:28:22: VST3: finished scanning plugins   74.68 s
```

What that custom pass found: 9 Arturia plugins whose installer nests a VST3 binary inside the Audio
Unit bundle at `Contents/Resources/plugin.vst3`. ARP 2600 V3, DX7 V, Jun-6 V, Jup-8 V4, Mellotron V,
Modular V3, OB-Xa V, Prophet V3, Wurli V2.

All nine already exist as standalone `.vst3` files in `/Library/Audio/Plug-Ins/VST3`, which Live
scans anyway on the line above. The custom pass contributed zero unique plugins and scanned all
nine a second time.

What I did: Live keeps that path in `Preferences.cfg` as a UTF-16LE string behind a 4-byte length
prefix, which is why it never showed up in a plain text search. I backed the file up, then
repointed it to `/Users/drwu/Library/Audio/Plug-Ins`. That is exactly the same 34 characters, so
the patch went in byte for byte with no structural change and no size change. The folder holds four
empty subfolders and nothing to scan.

```
2026-08-10T14:13:53: VST3: scanning plugins in "/Users/drwu/Library/Audio/Plug-Ins" (custom)
2026-08-10T14:13:55: VST3: finished scanning plugins   2.23 s
```

### Fault 2. The user VST3 folder did not exist. FIXED.

Every scan since at least 2026-07-12 threw `error: Reading directory failed: No such file or
directory` on `~/Library/Audio/Plug-Ins/VST3`, 84 logged errors in total. I created the folder. The
2026-08-10 scan logged zero errors.

### Fault 3. Waves is installed twice, 183 plugins deep. LEFT ALONE ON PURPOSE.

V12 holds 195 bundles, V16 holds 213, and 183 are the same plugin in both. Only 12 are V12-only,
and they are worth keeping V12 for: Abbey Road Chambers, Abbey Road Saturator, Abbey Road Vinyl,
J37, TG12345, REDD17, REDD37-51, RS56, Reel ADT, ARPlates, KingsMic, OVox.

The WaveShells live in `/Library/Audio/Plug-Ins`, owned by `root:wheel`, so trimming them needs your
password. With the custom folder fixed the whole scan now runs in 3.5 seconds, so the remaining cost
of the duplication is browser clutter rather than time.

## 3. Four corrections, two of them mine from this page

| Note | What it claimed | Measured |
|---|---|---|
| `reference_uad_luna_only` | All UA plugins are `.lunacomponent`, Luna only, never Ableton | False. All 15 are installed as `.component`, `.vst3`, and `.lunacomponent`. The AU and VST3 copies load in Live 11. |
| `project_mixwave_78_dollars_undelivered` | The $78 MixWave EHX purchase was delivered but not activated | Now activated. `iloktool auths` reports both EHX pedals Authorized. |
| This page, v1 | "Live walks 66 Audio Unit bundles hunting for a VST3 entry point each one lacks" | Wrong reasoning. The custom pass did find 9 real VST3 binaries nested inside Arturia `.component` bundles. The waste was duplication. The fix was right for the wrong reason. |
| This page, v1 | "`Fretless.adg` is a rack shell with no devices in it" | False. It holds Waves CLA Bass on the factory "Scoop" preset, loaded through the V12 shell (12.7.0), with 26 parameters exposed to the rack macros. My scan looked for `<AuPluginDevice>` and Live 11 stores it as `<Vst3Preset>`, so a bad regex read a full rack as empty. |

Consequence for the bass work: the UA SSL E Channel Strip and SSL G Bus Compressor are usable
inside Ableton right now.

## 4. What I changed, and what is still open

| Item | State | Evidence |
|---|---|---|
| VST3 custom folder repointed | done | Path patched in `Preferences.cfg`, survived a full Live launch and quit. |
| User VST3 and VST folders created | done | Both exist. Zero directory errors in the new scan. |
| Clean rescan run and measured | done | Live launched, scanned, quit cleanly. 83.65 s to 3.50 s. |
| Preferences backed up first | done | `~/Library/Preferences/Ableton/_backup_11.3.43_2026-08-10/` |
| Trim the orphan V14 and V15 shells | needs your password | `/Library/Audio/Plug-Ins` is `root:wheel`. Low value now. |
| Build the 7-stage chain into `Fretless.adg` | not done | See below. |

### The one thing I did not do, and why

Writing the seven plugins into `Fretless.adg` programmatically means synthesizing a `<Vst3Preset>`
block per plugin: a 4-field `Uid` plus a `ProcessorState` hex blob carrying that plugin's full
parameter set. I have exactly one working example to pattern from, the CLA Bass block already in
your file.

This is the failure mode that burned roughly $200 of tokens across three rack-cloner rebuilds in
May, and the rack-builder skill carries a standing rule against hand-rolling it. Building it blind
would most likely hand you a rack that fails to load, which is worse than the rack you have.

What your file already is: a rack with Waves CLA Bass on the "Scoop" factory preset and 26
parameters wired to macros. That is stage 1 of a fretless chain already in place. Adding stages 2
through 7 is a drag-and-drop job in Live against the table below.

## 5. The Jaco fretless chain

Reference rig: 1962 Fender Jazz fretless, fingerboard epoxied, Rotosound roundwounds, bridge
pickup carrying most of the signal, into an Acoustic 360 preamp and 361 cabinet.

You are already one stage in. `Fretless.adg` holds Waves CLA Bass on "Scoop", which is a
scooped-mid voicing. That fights stage 2 below, since the whole Jaco character sits in the mids
that a scoop removes. Either move CLA Bass to the end of the chain as a flavour stage, or switch it
off while you dial stages 2 through 4 and judge whether it earns its place afterwards.

| # | Stage | Plugin | Settings | Why |
|---|---|---|---|---|
| 1 | Level ride | Bass Rider (V16) | Default, target around -12 dB | The spread runs from harmonic whispers to hard 16ths. Ride first so the compressor shapes tone rather than level. |
| 2 | Console preamp | Scheps 73 (V16) | Low shelf 110 Hz cut 2 dB. Mid bell 700 Hz push 3 to 4 dB. High shelf 10 kHz push 2 dB. | The 700 Hz push is the bark. The 10 kHz shelf is roundwound zing and harmonic bloom. |
| 3 | Compression | CLA-76 (V16) | Ratio 4:1, attack 3 to 4, release 6 to 7, 4 to 6 dB GR | The 1176 is the compressor on this sound. Slowish attack passes the finger transient, fast release sustains the mwah. |
| 4 | Channel strip | UA SSL E Channel Strip | HPF 40 Hz. Dip 250 to 300 Hz by 2 to 3 dB, narrow. Mid bell 800 Hz, small push. | The E-series carve. The dip removes the boxiness that the 700 Hz push exposes. |
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
| `~/Projects/_outputs/waves-mercury-mixer/jaco-rig/Jaco_Fretless_Bass.xps` | StudioRack chain that loads in Live, carrying the builder's template slots rather than the Jaco slots. Container only. |
| `~/Music/Ableton/User Library/Presets/Audio Effects/Audio Effect Rack/Fretless.adg` | Your existing rack, holding Waves CLA Bass on "Scoop" with 26 parameters on macros. |
| `~/Library/Preferences/Ableton/_backup_11.3.43_2026-08-10/` | Backup of `Preferences.cfg` and `PluginScanner.txt` taken before the patch. |

Related: [Jaco on Hejira, the four bass parts](../jaco-hejira-bass/),
[Hejira bass harmonics](../hejira-bass-harmonics/),
[MixWave EHX activation](../mixwave-ehx-activation-fix/)
