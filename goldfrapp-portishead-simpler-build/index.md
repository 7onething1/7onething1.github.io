# Goldfrapp and Portishead Simpler Build

Build sheet, 2026-11-09. Local rigs for Live 11.3.30 on Jacks-iMac. Sources are labeled in every section.

## Two-band build spec

- **Band 1, Portishead (built 2026-11-05).** 12 rigs in 2 album sets. Dummy 1994 at 90 BPM A minor, Third 2008 at 104 BPM D minor. Ten rigs are printed, two were empty. Source: the Portishead Era Rigs README, measured by the earlier build.
- **Band 2, Goldfrapp (built 2026-11-09).** 6 rigs for Seventh Tree 2008 at 96 BPM E minor, plus 8 Simpler presets. Tempo and key are my choice, not sourced.
- **Source of both rankings is ChatGPT.** Thread A, Plugin List Clarification (Portishead) and Thread B, Goldfrapp Plugin List (Seventh Tree). Reported to me, never verified against how either record was made.
- **Every starter clip is an original phrase.** No melody, chord progression, lyric or sample from either band is reproduced.
- **Nobody has listened to any of it.** No listening test was run, and no target spectrum was measured because no Goldfrapp or Portishead audio is on this Mac.

## Headline local resource

**Puremagnetik String Machines (Legacy) replaces the Kontakt string layer.** Measured on this Mac: 348 WAVs (all 44.1 kHz, 24-bit), 229 MB, 30 presets in four families. The presets are Instrument Racks that wrap native Simpler devices, so no Kontakt is needed. I confirmed this by unzipping `Solina String Section.adg`: 3 Simplers.

| Family | Presets | Sample groups (WAVs) |
|---|---|---|
| ARP Solina | 7 | Violin 16, Viola 16, Horn 16, Trumpet 16, Cello 6, Contrabass 6 |
| Crumar Orchestrator | 4 | Piano 17, Violin 17, Cello 17, Clavicord 17 |
| Roland RS-09 | 11 | Str Hi/Lo Ens and Dry 9 each, six organ groups 8 to 9 each |
| Roland VP-330 | 8 | Pitched Ensemble 17, Full Layers 17, Dark Strings 17, Voice and Male groups 9, Female 4 foot 5 |

Other installed Factory Packs worth naming (listed by folder name, not opened): DM ARP 2600 Drums by Flatpack (Legacy), TS-Dreamscapes 3 (Legacy), Designer Drums, Solid Sounds, APC Step Sequencer by Mark Egloff, M4L Granulator II.

## Recommended versus installed, Seventh Tree (Thread B)

| ChatGPT rank and pick | What is installed | Cost | Verdict |
|---|---|---|---|
| 1 Real chamber strings (Spitfire BBC SO Discover, Chamber Strings Essentials) | No Spitfire product | Discover reported free by ChatGPT, price and terms unverified. Brandon downloads it. | GAP, the single highest-value action |
| 2 String machines (ARP String Ens 1, Crumar Performer, RS202 STR1) | Puremagnetik ARP Solina, Crumar Orchestrator, Roland RS-09 | Installed, 0 | Covered by family stand-in, sound not compared |
| 3 Mellotron and Chamberlin (Mell Flutes 1, Mell Phaedra Strings) | Arturia Mellotron V | Installed, 0 | Covered. Octave fault, Route A |
| 4 Acoustic guitar (own recording, NI Picked Acoustic) | Nothing | Recording, or a Kontakt library | GAP |
| 5 Analog polysynths (P5 Mellow Sawpad, Synthex Strings 1) | Prophet V3, Jup-8 V4, OB-Xa V | Installed, 0 | Alternatives exist, no rig built |
| 6 Electric piano (Waves Electric 88, Wurli EP200 Trem) | Wurli V2. Waves Electric Grand 80 present, Electric 88 not confirmed | Installed, 0 | Covered by Wurli V2 |
| 7 Electric and Moog bass (Mini Bass2, P5 Round Bass) | Mini V3, Prophet V3 | Installed, 0 | Alternatives exist, no rig built |
| 8 Vintage organs (Farfisa 1, Orchestron Organ) | RS-09 organ presets, UAD Waterfall B3 | Installed, 0 | Partial alternatives, no rig built |
| 9 Choir and voice keyboards (Mell 8V Choir 1, VP330 Choir1) | Puremagnetik VP-330, Mellotron V choir presets | Installed, 0 | Covered |
| 10 Organic percussion (Ableton Drum Rack) | Stock Live Drum Rack | 0 | Available, no rig built |

Source for the left column: ChatGPT, Thread B. Middle and right columns: measured on this Mac or taken from the install list I verified.

## Recommended versus installed, Portishead (Thread A)

| ChatGPT rank and pick | What is installed | Verdict |
|---|---|---|
| 1 Nostalgia SH-101, the Mysterons lead | No SH-101 model. Jun-6 V is the nearest architecture | Stand-in only (Dummy Ghost Lead) |
| 2 Waves Electric 88 Rhodes | Electric Grand 80 present, 88 not confirmed | Unresolved |
| 3 Nostalgia Mellotron and Chamberlin | Mellotron V | Covered, octave fault |
| 4 Nostalgia Vox Continental | Not installed | GAP |
| 5 Nostalgia Minimoog and Taurus | Mini V3 | Direct model match for the Minimoog |
| 6 Nostalgia ARP 2600 and Odyssey | ARP 2600 V3 | 2600 matches, Odyssey does not |
| 7 Nostalgia Prophet-5 | Prophet V3 | Direct model match |
| 8 Nostalgia Fairlight and Emulator II | Not installed | GAP |
| 9 Nostalgia old drum machines | DM ARP 2600 Drums by Flatpack (Legacy), relevance unchecked | Unresolved |
| 10 TAL-BassLine-101 | Not installed | GAP |

ChatGPT flagged all Portishead settings as Portishead-inspired treatments, not claims about the records.

## The Nostalgia blocker, stated once

**Zero-G Nostalgia cannot be reached from this Mac, and Kontakt is not installed.** Evidence, all measured 2026-11-09: `~/Music/Ableton/User Library/Samples/Zero-G Nostalgia` is a broken symlink with 0 bytes and 0 audio files. Its chain ends at a `/Volumes/Black` path. `/Volumes` holds only `Macintosh HD` and `USB20FD`, and the USB stick holds only meeting recordings. `mdfind` for seven known Nostalgia filenames returned zero hits. So every `.nki` recommendation is not executable here, and the build moves to the local route.

## Per-rig settings

| Rig | Source | Key settings | Status |
|---|---|---|---|
| Seventh Tree Solina Ensemble | Puremagnetik ARP Solina | Attack 150 ms, release 2 s, HP 120 Hz | Preset written, Live load untested |
| Seventh Tree Crumar Bed | Puremagnetik Crumar Orchestrator | Same envelope, chorus wide and gentle | Preset written, Live load untested |
| Seventh Tree VP330 Choir Air | Puremagnetik Roland VP-330 | Same, 8 to 12 dB under the strings | Preset written, Live load untested |
| Seventh Tree RS09 Wash | Puremagnetik Roland RS-09 | Hi and Lo on two tracks, panned apart | Preset written, Live load untested |
| Seventh Tree Tape Flutes | Arturia Mellotron V | track_selector 1.00, clip written one octave low | Printed 2026-11-09, preview WAV 14.00 s peak -3.00 dBFS plus `.vstpreset` class `ArtuAVISMLTNProc`, Live load untested |
| Seventh Tree Wurli Intimate | Arturia Wurli V2 | Velocity 50 to 80, HP 120 Hz | Printed 2026-11-09, preview WAV 13.00 s peak -3.00 dBFS plus `.vstpreset` class `ArtuAVISWUR2Proc`, Live load untested |
| Dummy Vintage Multisample Sampler | RS-09 and VP-330 beds, Mini V3 render for bass | 90 BPM A minor, macro labels kept | Built 2026-11-09, 22 WAVs and 3 presets, 31 zones, all paths resolve |
| Third Vintage Multisample Sampler | ARP 2600 V3 and Modular V3 renders, RS-09 bed | 104 BPM D minor, macro labels kept | Built 2026-11-09, 18 WAVs and 3 presets, 27 zones, all paths resolve |

Starting values for the string rigs come from Thread B: attack 100 to 250 ms, release 1.5 to 3 s, high pass near 120 Hz, gentle wide chorus, moderate reverb. They are ChatGPT's treatment. Macro labels are text only and unverified. Both `(EMPTY)` suffixes are gone, because real samples now sit in those two folders. 58 zones across the six Portishead presets, every sample path resolving, no key-range gaps or overlaps.

Two defects surfaced during the build, both worth fixing at source. pedalboard renders these Arturia plugins as pure silence at its default `buffer_size` of 8192, so `buffer_size=512` with `num_channels=2` is required. And `build_simpler_adv.py` returns "no zones" silently for any sample path holding an apostrophe, which is why the `VP330_Male_8'_Clean` set needed its files copied in under clean names.

## The new .adv writer, measured

`_shared/build_simpler_adv.py` clones a real Live 11.3.30 Simpler preset (`Rap Kick 2.adv`) and rewrites each zone. Eight presets were built with it. Numbers below were measured by the script's own verifier.

| Check | Result across 8 presets |
|---|---|
| Gunzip and XML parse | 8 of 8 |
| Header bytes equal to template | 8 of 8 |
| Zones written | 98, equal to input WAVs 98, skipped 0 |
| Sample paths resolving to a file on disk | 98 of 98 |
| File size and CRC-16 recomputed | 98 of 98 each |
| KeyRange gaps and overlaps | 0 and 0, each spans 0 to 127 |
| Root keys from filename versus Live-written roots | 64 of 64 agree |
| Index-form roots (Crumar) taken from the Live-written preset | 34 of 34 |

The CRC-16 algorithm (poly 0x8005, init 0, over the first 16384 bytes) reproduced 3 of 3 Live-written values before I used it. A negative test skipped 2 files with a stated reason and the zone count still equalled inputs minus skipped. `ableton-version-fitter` applies to `.adv` and classed all 8 as NATIVE, which is a header check only. **Whether Live itself opens these presets is UNTESTED and needs Brandon at the DAW.**

## The one genuine gap

**Real chamber strings have no installed equivalent.** ChatGPT ranked it first. Spitfire BBC Symphony Orchestra Discover is the single highest-value action. ChatGPT described it as free. I did not verify price or terms, and the download is Brandon's. Acoustic guitar is the second gap and needs a recording or a library.

## Provenance of this page

- **Measured on this Mac:** install lists, Puremagnetik counts, the Nostalgia blocker evidence, the writer verification numbers.
- **Reported to me:** the two ChatGPT threads, the Portishead README findings from 2026-11-05, the Mellotron V octave fault.
- **Inferred or chosen by me:** the family mappings from Nostalgia names to Puremagnetik families, tempo and key, the stock effects chains, the starter clips.
