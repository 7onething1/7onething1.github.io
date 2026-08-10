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

All nine also exist as standalone `.vst3` files in `/Library/Audio/Plug-Ins/VST3`, which Live
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

### Fault 4. The two MixWave EHX pedals were blacklisted. FIXED.

On 2026-08-06 at 18:52 Live checked `MixWave EHX Big Muff.vst3`, hung for eight minutes, then
logged `Failed to load plugin: calling 'bundleEntry' failed` followed by `VST3: not a plugin`. That
is the PACE hang from the window when the licenses were still undeposited. Live cached the "not a
plugin" verdict against those file paths and stopped retrying, which is why the clean 2026-08-10
scan never mentioned them once.

The bundles are `root:wheel`, so I could not change their timestamps to force a recheck. Instead I
copied both `.vst3` bundles into `~/Library/Audio/Plug-Ins/VST3`, a path I own and one Live scans as
`(user)`. A fresh path carries no cached verdict. The originals stay where they are.

```
2026-08-10T14:26:45: VST3: found: MixWave EHX Big Muff            vendor: MixWave
2026-08-10T14:26:48: VST3: found: MixWave EHX Deluxe Memory Man   vendor: MixWave
```

First load took 5.2 s and 3.2 s while PACE handshook, and the recheck seconds later took under a
second each. Both now appear in the browser under VST3.

### Fault 5. `Fretless.adg` had no chain container. BUILT.

Two discoveries made this cheap. First, the Waves VST3 class ID is a plain ASCII string, `"VST"`
plus the 4-character plugin code plus 9 characters of the lowercase name. Your CLA Bass reads
`VSTCBAScla bass `, and Live's own log confirms the pattern on Waves Harmony as `VSTHRMSwaves har`.
Second, your existing racks are a library of known-good plugin states, so nothing had to be
invented.

The rack also turned out to hold two devices, not one: CLA Bass plus a UAD plugin (`UADxU3AX`,
saved on a preset named "Synthy Bass Hold Sustain"). I cloned the StudioRack device node out of
`Brandon Vox 2.adg` and inserted it, since StudioRack carries an entire Waves chain as a single
device.

| Check | Result |
|---|---|
| Devices in the rack | 3: `VSTCBAScla bass `, `UADxU3AX`, `VSTWRHSstudiorac` |
| XML validity | parses under `ElementTree` |
| Opened in Live 11.3.43 | loaded with zero errors in `Log.txt`, no crash report, Live quit clean |
| Original preserved | `Fretless_BEFORE_2026-08-10.adg` |

The last step is yours and it takes a couple of minutes. StudioRack currently carries the
"Brandon Grunge'" chain it came from. Open it, clear the slots, and drop in Bass Rider, Scheps 73,
CLA-76, Kramer Tape and RBass per the table in section 5. I stopped short of writing those five
states by hand because I have no parameter data for them, and guessing it is what produced three
failed rack rebuilds in May.

### Fault 6. Greyed slots and every macro at zero. FIXED.

Two separate problems in the chain I first loaded, both mine.

The greyed slots: Chris Baseford's Bass chain calls SSLChannel, the Waves SSL 4000 Collection, which
you do not own. Measured `V12=0, V16=0`. A missing plugin draws in italic grey. The other grey
items, GTR Amp, LoAir and CLA-76, are installed and simply switched off in that preset. I picked
that chain on plugin names without checking ownership first, which was the error.

The zeroed macros: Baseford's eight macros are level controls (DI Level, Amp Level, DIST Level, SUB
Level). Factory chain presets store macro names and carry no macro values (`QuickKeysValuesList`,
`MacroValue`: zero occurrences in the file). So every knob initialised at 0, which is why three of
the four parallel columns read `-inf` and the chain passed no signal.

The fix: I swept every factory bass chain against your installed bundles and swapped in
Lamps / Bass / Bass 1 (API-550, API-2500, Kramer Tape, VU Meter). Zero missing plugins, all four
slots `plugin_bypass=false` and `plugin_disabled=false`, so nothing draws grey. Its three macros are
Distortion, Mudness, Brightness, which are character controls rather than levels, so zero is a
neutral starting point and audio passes. Kramer Tape is stage 5 of the spec and API-550 covers the
midrange push.

Your status bar also identified the mystery device: `UADxU3AX` is the UA Fairchild 660 Compressor.

| Factory bass chain | Plugins you are missing |
|---|---|
| Lamps / Bass / Bass 1 (loaded) | none |
| Bass / Wide Analog Bass | none |
| Chris Baseford / Bass | SSLChannel |
| Count / Bass | MDMX Screamer |
| Lamps / Bass 3 | Stomp Buzz |
| Lamps / Bass 4 | Stomp Buzz, StompOctaver |
| Bass / Sub Station | OneKnobOKDriver, T1 |
| Lamps / Bass 2 | GuitarAirMixer, StompCompressor, StompEQ, StompTone |

Live loaded all three devices with no errors: `CLA Bass Stereo`, `UADx Fairchild 660 Compressor`,
`StudioVerse Audio Effects Stereo`.

### Fault 7. The Rush Manual Series pack had rotted the same way. FIXED.

The Rush Era Rigs validator reported 10 missing Max for Live devices and 16 broken `file://`
links, against 4 and 0 when it was last run on 2026-05-15.

Six of the ten were never missing. `generate_related_devices.find_m4l()` resolved device names
with a flat `M4L_BASE.iterdir()`, so it never descended into vendor subfolders. The sfg library
holds 527 `.amxd` at the top level and 555 in total. Convolution Reverb Pro sits in
`m4l_devices/`; ChoirBox, DirtyEcho and Psychedelay sit in `#NedFXBundle/`.

I added a recursive exact-name match ahead of the fuzzy pass, keeping exact authoritative so a
substring cannot produce a false hit (`TERRA` matches `Mini-Terrain` under naive containment).

| Measure | Before | After |
|---|---:|---:|
| Missing M4L devices | 10 | 6 |
| Broken `file://` links | 16 | 0 |
| Albums / rigs audited | 9 / 37 | 9 / 37 |

The 6 remaining are genuinely absent: TERRA, GranuRise-1.2.2, LFO-Cluster_6.3, Stochastic Delay.
The stored note claiming the three Ned Rush devices live only on the other Mac was wrong, and is
corrected.

The nine album `.als` sessions audit clean, because the May-14 design documents device links
rather than injecting VST blobs. Their real device references live in the 37 `INSTALL.md` files.

### All of this is now a skill: /ableton-rig-doctor

`~/.claude/skills/ableton-rig-doctor/` packages every measurement from this session.

```
python3 ~/.claude/skills/ableton-rig-doctor/audit_ableton_devices.py <file.adg|.als>
python3 ~/.claude/skills/ableton-rig-doctor/audit_ableton_devices.py --dir <pack folder>
```

Proven on a control pair: the repaired `Fretless.adg` reports 0 unresolvable, and the
pre-repair `Fretless_BASEFORD` copy still reports `SSLChannel (id SCHM)` twice.

It also carries the Waves class-id formula, the StudioRack envelope layout, the
`Preferences.cfg` patch, the blacklist recovery, and the grey-slot triage table.

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
parameter set. I have exactly one working example to pattern from, the CLA Bass block that your
file contains.

This is the failure mode that burned roughly $200 of tokens across three rack-cloner rebuilds in
May, and the rack-builder skill carries a standing rule against hand-rolling it. Building it blind
would most likely hand you a rack that fails to load, which is worse than the rack you have.

What your file contains: a rack with Waves CLA Bass on the "Scoop" factory preset and 26
parameters wired to macros. That is stage 1 of a fretless chain in place. Adding stages 2
through 7 is a drag-and-drop job in Live against the table below.

## 5. The Jaco fretless chain

Reference rig: 1962 Fender Jazz fretless, fingerboard epoxied, Rotosound roundwounds, bridge
pickup carrying most of the signal, into an Acoustic 360 preamp and 361 cabinet.

You are one stage in. `Fretless.adg` holds Waves CLA Bass on "Scoop", which is a
scooped-mid voicing. That fights stage 2 below, since the whole Jaco character comes from the mids
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
chain shapes a tone that is fretless to begin with. On a fretted DI it gives midrange bark and tape
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
