# Watermelon: the drift, the missing crashes, the missing intro

Read-only audit, 2026-09-08. Subject: Songsterr `s6857183`, revision `r8972739`, Watermelon In Easter Hay, Vinnie Colaiuta. No Guitar Pro file and no Songsterr tab was modified.

Live page: https://7onething1.github.io/watermelon-drift-crashes-intro/

## The four headline numbers

| Figure | Meaning |
|---|---|
| 36.87 s | of the recording has no bars in the tab |
| -12.50 s | Songsterr sync error at bar 1, correct to 30 ms from bar 6 |
| 132 | crash candidates found, none of them shipped |
| 0.006 s | worst tempo residual after the fix, down from 4.26 s |

## 1. The eleven open chats

| Session | Opening ask | Turns | Last write | Covers |
|---|---|---|---|---|
| `5d61ff43` | Hi-hat pedal hits from the stem, snare match, cymbal types, ghosts | 6778 | 17:05 | Hats, snare, ghosts |
| `c6454a97` | Finish watermelon chat here, appears to be some drift as the song goes on | 490 | 17:44 running | Drift, crashes, sync |
| `a13ba186` | Figure out why the gp is not yet done and perfect | 1122 | 17:41 | The clock, the coda |
| `fa6067bd` | Why | 1552 | 17:33 | Upload route |
| `51599dec` | Resume the watermelon chat here, get me a human to refund | 432 | 17:33 running | Cost accounting |
| `9eba7baf` | Look at songsterr tab as its playing and determine what matches | 1537 | 17:14 | Playback matching |
| `febeaae6` | Pick up final watermelon chat here, start cymbal stem pass | 978 | 17:05 | Cymbals |
| `e3bdde95` | Look at active watermelon chats start to finish | 297 | 17:05 | Model comparison |
| `fe22e363` | Make decisions and reconcile and upload the finished | 1277 | 15:54 | Reconcile |
| `73dc03a2` | Resume Tom locations in watermelon GP handoff | 1237 | 15:50 | Toms |
| `bfac0d81` | Get the tom locations added to the watermelon GP | 1434 | 14:20 | Toms |

One of the eleven has looked at the intro, and it found the problem two minutes before this audit started. Two have touched crashes. Nine never mention either. The tom question absorbed three sessions and produced two incompatible answers.

## 2. Drift is two separate faults

**Fault one, inside the Guitar Pro file. Fixed.** The tab carried a single tempo automation at a flat 56.000 bpm for a performance that moves. Peak bar-start error reached 4.26 s at bar 65, growing through the song exactly as an ear reports it. Session `a13ba186` built a 105-value per-bar map from the metronome stem. Verified here: remove one constant offset of 36.87 s and the worst residual across all 105 bars falls to 0.006 s at bar 43. Tab span 501.4 s equals the recording's bar-1-to-bar-105 span of 501.4 s.

**Fault two, inside Songsterr's own sync map. Open.**

| Bar | Sync error | Reading |
|---|---|---|
| 1 | -12.50 s | starts twelve and a half seconds before the drums enter |
| 2 | -7.73 s | still far ahead |
| 3 | -4.50 s | closing |
| 4 | -2.36 s | closing |
| 5 | -1.02 s | almost there |
| 6 to 103 | 0.030 s median | this span is correct |
| 104 | -1.05 s | drops out at the coda |
| 105 | -1.84 s | final bar |

Seven of 105 bars miss by more than a second and all seven sit at the front or the end. The middle is already synced to thirty milliseconds. Uploading the tempo map fixes the file's timeline shape. It does not move these sync points.

## 3. The missing intro

The recording runs 545.3 s. The tab covers 501.4 s. Bar 1 of the tab sits at 0.000 s on its own clock and the recording's bar 1 lands at 36.870 s, so the first 36.87 seconds has no bars, which is 6.8 percent of the record.

The drums lose nothing. Every drum stem is silent before bar 1, peaking at 0.0 to 0.1 percent of its in-song peak. The lead guitar, bass and piano stems are silent too. One stem is loud across that window, the `other` bucket at 45.1 percent of its own in-song peak, which is where Moises routes the opening material. No track in the tab carries a note of it, and tracks 0, 1, 3, 4, 6 and 7 hold nothing through bar 8.

The missing intro and the opening drift are one problem wearing two names. Songsterr stretches its first five sync points across the hole.

## 4. The missing crashes

The drum staff holds 51 crash notes in 105 bars, placed on bar 1, then every even bar from 4 through 96, plus bar 55. That is a rule rather than a transcription. Nothing appears after bar 96, so the coda carries no crash. One Crash 2 exists in the whole tab, and the drum staff holds no china, no splash and no ride bell.

The 51 written crashes are real: 2.83x a circular-shift null at 50 ms, and 1.59x brighter than the ride instants in the 6 to 12 kHz band, clearing the 1.5x promotion floor. The crash work ahead is additive.

Session `c6454a97` ran a crash detector at 17:43 and wrote `crash_find.json`: 132 candidates across 74 bars, bar 2 through bar 98, against a null of 82, so 1.61x chance. Thirty-seven of those bars have no written crash.

| File | Drum notes | Crash 1 | Crash 2 | Tempo automations |
|---|---|---|---|---|
| `BASE-r8972739-live-head.gp` | 2834 | 50 | 1 | 1 |
| `TEMPOFIX-on-r8972739-Brandon-edit.gp` | 2834 | 50 | 1 | 105 |

The drum-track note histogram matches the live head note for note. The upload carries tempo and nothing else, which is the right way to ship a timing fix. The 132 crashes remain unshipped.

## 5. The lineage split nobody has called

| Lane | Local HANDS | Live r8972739 |
|---|---|---|
| 41 low floor tom | 1 | 62 |
| 43 high floor tom | 44 | 0 |
| 47 low mid tom | 4 | 111 |
| 48 hi mid tom | 81 | 14 |
| 50 high tom | 30 | 0 |
| 36 kick | 521 | 505 |
| 51 ride | 1522 | 1501 |

The live tab pushes every tom into the two lowest lanes and uses none of the three highest. The local file does the reverse. About 150 notes are affected. The shape matches a staff read one or two lanes low, a documented failure in this project's notes. The upload in flight adopts the live assignment. This audit names the split and changes nothing.

## 6. The four items your state block left open

Your paste named `HANDS-s6857183-Brandon-edit.gp`, the published `all15-removals.png`, and four queue ids.

| Queue id | Item | Status after this audit |
|---|---|---|
| `q-2026-09-08-70d3f0` | Bar 105 holds 4.0 quarters in a 5/4 bar | Understated. Short a quarter on **five tracks**, not one: Cuccurullo twice, Tubular Bells, Glockenspiel, Colaiuta, identical in all three files. Stems read kick 10.5% and hat 19.4% of their bars 1-97 peak, both under the 33% floor, so the fill is a rest. Written up as F7. |
| `q-2026-09-08-c9d5f7` | Recheck the 202 disputed ride notes | Not run. Needs the ride lane re-scored bar by bar, an edit-grade pass on a file another session is writing this minute. |
| `q-2026-09-08-85d746` | Final playability audit, owns the upload | Held. That session is uploading to this tab right now. Two writers on one tab produced the shared-beat damage in F4. |
| `q-2026-09-08-b08085` | Bar 55 beat 2, three hands | Correctly blocked. Toms stem is one channel, pitch medians 90.7 to 95.6 Hz overlap, best pan pair 0.73x against the 1.5x floor. |

**The 15 removals still stand.** `HANDS-s6857183-Brandon-edit.gp` at sha256 `c7beeaeea846da44` holds 2784 drum notes, 15 fewer than its parent, three-hand instants down from 16 to 1. Re-censused here and confirmed. None of those 15 removals are in the file being uploaded, because that file is built on the live head rather than on the HANDS lineage. The removals live only on disk.

**A correction to my own measurement.** My first meter walk called 43 bars on the Frank Zappa track overfilled, reading 4.19 of 4.00 quarters at bar 10 and 5.40 of 5.00 at bar 87. All 43 carry grace notes, and a grace note consumes no bar time. The walker counted grace rhythms as real duration. Those 43 are withdrawn. Bar 105 survives because its short voices carry no grace notes.

## 7. Still open, every one carrying an id

- 36.87 s of the record has no bars, `q-2026-09-08-6f84a3`
- Songsterr sync points at bars 1 to 5 and 104 to 105, `q-2026-09-08-a45b41`
- 132 crashes found, none written, and the coda has none at all, `q-2026-09-08-613ab9`
- The tom lane split, roughly 150 notes, `q-2026-09-08-629fc2`
- Bar 105 short a quarter on five tracks, `q-2026-09-08-70d3f0`
- The 202 disputed ride notes, `q-2026-09-08-c9d5f7`
- Playability audit and the upload, `q-2026-09-08-85d746`
- Bar 55 beat 2 asks for three hands, `q-2026-09-08-b08085`

Every one of these is an edit to the same Guitar Pro file that another session is uploading this minute. Writing while it writes is what caused the 79-bar shared-beat damage recorded as F4, so this audit measured and recorded rather than edited.

## Sources

`metromap.json` from session a13ba186. `vp.json` and `crash_find.json` from session c6454a97. The Moises stem set at `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`. Direct GPIF census of five Guitar Pro files. Detector spec frozen to the project standard: 1024-point Hann, 256 hop, 44.1 kHz, positive spectral flux in a named band, circular-shift null at 200 draws. Raw figures in `data.json`.
