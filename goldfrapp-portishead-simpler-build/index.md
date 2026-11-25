# Goldfrapp and Portishead Simpler Build

Build sheet, 2026-11-09. Local rigs for Live 11.3.30 on Jacks-iMac. Sources are labeled in every section.

## Two-band build spec

- **Band 1, Portishead (built 2026-11-05).** 12 rigs in 2 album sets. Dummy 1994 at 90 BPM A minor, Third 2008 at 104 BPM D minor. Ten rigs are printed, two were empty. Source: the Portishead Era Rigs README, measured by the earlier build.
- **Band 2, Goldfrapp (built 2026-11-09).** 6 rigs for Seventh Tree 2008 at 96 BPM E minor, plus 8 Simpler presets. Tempo and key are my own choice, with no source behind them.
- **Source of both rankings is ChatGPT.** Thread A, Plugin List Clarification (Portishead) and Thread B, Goldfrapp Plugin List (Seventh Tree). Reported to me, never verified against how either record was made.
- **Every starter clip is an original phrase.** No melody, chord progression, lyric or sample from either band is reproduced.
- **Nobody has listened to any of it.** No listening test was run, and no target spectrum was measured because no Goldfrapp or Portishead audio is on this Mac.

## The two Live Sets

Both sets were written 2026-11-12 and opened in Live 11.3.43. Every rig below lives in one of them. Links open on this Mac only.

- **Nostalgia Goldfrapp 001**, 8 instrument tracks: [/Users/drwu/Music/Ableton/Nostalgia Live Sets/Nostalgia Goldfrapp 001 Project/Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als). Run `open "/Users/drwu/Music/Ableton/Nostalgia Live Sets/Nostalgia Goldfrapp 001 Project/Nostalgia Goldfrapp 001.als"`
- **Nostalgia Portishead 001**, 9 instrument tracks: [/Users/drwu/Music/Ableton/Nostalgia Live Sets/Nostalgia Portishead 001 Project/Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als). Run `open "/Users/drwu/Music/Ableton/Nostalgia Live Sets/Nostalgia Portishead 001 Project/Nostalgia Portishead 001.als"`
- Set index: https://7onething1.github.io/nostalgia-live-sets/

## V2 song racks, first batch (2026-11-25)

Built from the ChatGPT V2 order of 2026-11-24. V1 files are untouched. Every number below was measured from an offline render with pedalboard at 48 kHz. A round trip means the state was written into the .adg, read back, reloaded into a fresh plugin and measured again. **Nobody has listened to any of these yet**, and nothing has been compared against the records.

| Rack | Synth | Spec target | Measured | Live 11.3.43 load |
|---|---|---|---|---|
| Mysterons Ghost Lead V2 | Mini V3 | triangle, mono, glide 100 to 150 ms, vibrato 5 to 6 Hz subtle | pitch within 1.6 cents on A3, A4 and E5; glide 140 ms; vibrato 5.57 Hz at 13 cents; round trip identical | Mini V3 created, no errors |
| Plastic Helicopter V2 | ARP 2600 V3 | noise plus low osc, 8 to 12 Hz cyclic modulation | chop 9.99 Hz, 15 dB deep, tempo-free; round trip 9.99 Hz | ARP 2600 V3 created, no errors |
| The Rip Pulse V2 | Mini V3 | saw plus pulse, 1/16 arpeggio, dark cutoff | 8.0 notes/s at 120 BPM (1/16, synced, so 9.9/s at 149 BPM); centroid about 1.5 kHz; round trip identical | Mini V3 created, no errors |
| Machine Gun Percussion V2 | Live Drum Rack | metallic kick, snare, noise hits, 40 to 150 ms, clean and crushed | 6 synthesized one-shots, 48 kHz 24-bit, -1 dBFS peak, C1 to A1; crushed versions are separate pads, no Saturator or Phaser-Flanger yet | opened, no errors; sample load on a track not confirmed |
| Dummy Dusty Break V2 | Live Drum Rack | dusty resampled break kit (critique P1, Portishead percussion) | 6 synthesized one-shots (soft kick, dusty snare, rim, closed and open hat, 12-bit vinyl kick), 48 kHz 24-bit, -1 dBFS, C1 to A1 | opened, no errors; load on a track not confirmed |
| Monster Love Dream Choir V2 | Live Simpler x2 in a rack | VP-330 female and layered voice, attack 300 ms, release 2.5 s, HP 150 Hz, chorus, 3 s reverb, blend macro | 5 + 9 zones, every path resolves; envelope reads 300 / 2500 ms; rack has EQ Eight 150 Hz low cut, Chorus, Reverb 3 s in each chain; **no blend macro**, both voices sound together | opened, no errors; load on a track not confirmed |

Native-device files (the Drum Rack and the Simpler presets) give no "Created" line in Live's log, so the log shows only that Live received the file, not that it loaded.

### Changed from the spec
- **The Rip moved from Jun-6 V to Mini V3.** Jun-6 V state written by the script reloads with every continuous value at its minimum (volume -60 dB), so that rack was moved to `delete/` and rebuilt on Mini V3, which round-trips exactly. It uses the Mysterons rack's EQ, Echo and Reverb chain.
- **The Plastic chop comes from the ARP 2600 sequencer, not its LFO.** The LFO to VCA route had no measurable effect in the default patch. The sequencer, set to one flat pitch in Free mode, retriggers the envelope at 10 Hz.

### Not built, needs hands-on programming in Live
- **Threads (Modular V3):** its patch cables are not exposed as parameters, and tuning and VCA changes had no measurable effect on the default patch.
- **Roads (Wurli V2) and Little Bird (Mellotron V plus Prophet V3):** these synths do not survive a scripted state round trip (Wurli V2: 18 of the first 40 values changed; Prophet V3: 12; Mellotron V: 12), so a scripted patch could not be verified.

### Round-trip test by synth
Exact: Mini V3, ARP 2600 V3, Modular V3. Values change on reload: Jun-6 V, Prophet V3, Wurli V2, Mellotron V, Jup-8 V4.

### Builder hard-fail (critique P0)
`build_simpler_adv.py` now stops with exit code 1 and states the reason when any input WAV is skipped or missing. Before, it dropped skipped files without a word and exited only when no zones were built at all. A negative test (a WAV with no derivable note, and a missing WAV) fails as intended. The positive rebuild of the MiniV3 Bass set still writes all 12 zones. Backup: `build_simpler_adv.py.bak-hardfail-2026-11-25`.

### Sustain loops (critique P0)
Forward sustain loops with a 7.5 percent crossfade now sit on all 40 zones of the 4 rendered Portishead presets: Dummy MiniV3 Bass, Dummy VP330 Male Air, Third ARP2600 Lead and Third Modular Drone. Each zone passes three checks on a 20 s numeric render:
- **Seam jump:** at most 2.94 times the median.
- **Level drift:** at most 0.43 dB.
- **Silence:** none.

MiniV3 C0 is the weakest loop, with a 5.8 dB level range. The other 5 presets use Puremagnetik samples that already looped. The existing Nostalgia Portishead 001 set saved its own copy of each device, so the loops apply only when a preset is loaded fresh. Backups end in `.bak-sustainloop-20261125-094403`. Nobody has listened to the loops.

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
| 1 Nostalgia SH-101, the Mysterons lead | No SH-101 model. Nearest track in Nostalgia Portishead 001: Third ARP2600 Lead Multisample | Stand-in only, my mapping |
| 2 Waves Electric 88 Rhodes | Electric Grand 80 present, 88 not confirmed | Unresolved |
| 3 Nostalgia Mellotron and Chamberlin | Mellotron V | Covered, octave fault |
| 4 Nostalgia Vox Continental | No Vox model. Nearest track in Nostalgia Portishead 001: Dummy RS09 Organ Bed | Stand-in only, my mapping |
| 5 Nostalgia Minimoog and Taurus | Mini V3 | Direct model match for the Minimoog |
| 6 Nostalgia ARP 2600 and Odyssey | ARP 2600 V3 | 2600 matches, Odyssey does not |
| 7 Nostalgia Prophet-5 | Prophet V3 | Direct model match |
| 8 Nostalgia Fairlight and Emulator II | No Fairlight or Emulator model, and no track for it in Nostalgia Portishead 001 | GAP |
| 9 Nostalgia old drum machines | DM ARP 2600 Drums by Flatpack (Legacy), relevance unchecked | Unresolved |
| 10 TAL-BassLine-101 | No TAL plugin. Bass in Nostalgia Portishead 001: Dummy MiniV3 Bass Multisample | Stand-in only, my mapping |

ChatGPT flagged all Portishead settings as Portishead-inspired treatments, not claims about the records.

## The Nostalgia blocker, stated once

**Zero-G Nostalgia cannot be reached from this Mac, and Kontakt is not installed.** Evidence, all measured 2026-11-09: `~/Music/Ableton/User Library/Samples/Zero-G Nostalgia` is a broken symlink with 0 bytes and 0 audio files. Its chain ends at a `/Volumes/Black` path. `/Volumes` holds only `Macintosh HD` and `USB20FD`, and the USB stick holds only meeting recordings. `mdfind` for seven known Nostalgia filenames returned zero hits. So every `.nki` recommendation is not executable here, and the build moves to the local route.

## Per-rig settings

The track list is read from the two .als files on 2026-11-24. Earlier rig names (Tape Flutes, Wurli Intimate, Dummy Ghost Lead) are not tracks in either set; their presets still sit in the build folders.

| Track | Source | Live Set |
|---|---|---|
| ST Crumar Cello | Puremagnetik Crumar Orchestrator | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST Crumar Violin | Puremagnetik Crumar Orchestrator | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST RS09 Str Hi Ens | Puremagnetik Roland RS-09 | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST RS09 Str Lo Ens | Puremagnetik Roland RS-09 | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST Solina Viola | Puremagnetik ARP Solina | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST Solina Violin | Puremagnetik ARP Solina | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST VP330 Female 4ft Ens | Puremagnetik Roland VP-330 | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| ST VP330 Voice Layered Ens | Puremagnetik Roland VP-330 | [Nostalgia Goldfrapp 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Goldfrapp%20001%20Project/Nostalgia%20Goldfrapp%20001.als) |
| Dummy MiniV3 Bass Multisample | Mini V3 render | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Dummy RS09 Dust Bed | Puremagnetik Roland RS-09 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Dummy RS09 Organ Bed | Puremagnetik Roland RS-09 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Dummy VP330 Dark Strings Bed | Puremagnetik Roland VP-330 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Dummy VP330 Male Air | Puremagnetik Roland VP-330 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Third ARP2600 Lead Multisample | ARP 2600 V3 render | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Third Modular Drone Multisample | Modular V3 render | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Third RS09 High Bed | Puremagnetik Roland RS-09 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |
| Third RS09 Str Lo Bed | Puremagnetik Roland RS-09 | [Nostalgia Portishead 001.als](file:///Users/drwu/Music/Ableton/Nostalgia%20Live%20Sets/Nostalgia%20Portishead%20001%20Project/Nostalgia%20Portishead%20001.als) |

Starting values for the string rigs come from Thread B: attack 100 to 250 ms, release 1.5 to 3 s, high pass near 120 Hz, gentle wide chorus, moderate reverb. They are ChatGPT's treatment. Macro labels are text only and unverified. Both `(EMPTY)` suffixes are gone, because real samples now sit in those two folders. 93 zones across the nine Portishead presets, every sample path resolving, no key-range gaps or overlaps. A first pass of mine was archived into each album's delete/ folder, because its Arturia renders sat 12 semitones below their filename tokens. The replacements render from Arturia factory presets and carry 76 to 89 percent of their energy at the token pitch. None of the rendered samples carries loop points, so a held note stops at the end of the file.

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

The CRC-16 algorithm (poly 0x8005, init 0, over the first 16384 bytes) reproduced 3 of 3 Live-written values before I used it. A negative test skipped 2 files with a stated reason and the zone count still equalled inputs minus skipped. `ableton-version-fitter` applies to `.adv` and classed all 8 as NATIVE, which is a header check only. **Live 11.3.43 opens all 8, tested 2026-11-12.** Every one of them was loaded into a Live Set by Live: all 55 sets of this build were opened one at a time, with the window title checked, Live's log checked for `Loading document` on that exact path, and that stretch of log checked for errors. 55 of 55 passed. See https://7onething1.github.io/nostalgia-live-sets/

## The one genuine gap

**Real chamber strings have no installed equivalent.** ChatGPT ranked it first. Spitfire BBC Symphony Orchestra Discover is the single highest-value action. ChatGPT described it as free. I did not verify price or terms, and the download is Brandon's. Acoustic guitar is the second gap and needs a recording or a library.

## Provenance of this page

- **Measured on this Mac:** install lists, Puremagnetik counts, the Nostalgia blocker evidence, the writer verification numbers.
- **Reported to me:** the two ChatGPT threads, the Portishead README findings from 2026-11-05, the Mellotron V octave fault.
- **Inferred or chosen by me:** the family mappings from Nostalgia names to Puremagnetik families, tempo and key, the stock effects chains, the starter clips.
