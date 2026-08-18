# Jam session work product, locator

Located 2026-08-17. Second-brain retrieval test. Every path below was stat'd on disk, nothing inferred.

**The answer: the 7.3.26 jam.** One 4 h 32 m master recording, mapped into 100 contiguous
performances, of which 29 drum-carrying songs were cut and separated. Two full pipeline runs
exist: a July 8 silence-cull, and a July 19 drum-aware rebuild that replaced it.

| metric | value |
|---|---|
| master duration | 4:32:24 |
| songs cut | 29 |
| music extracted | 2:06 |
| performances mapped | 100 |
| full stem packages | 6 |

## Master, verified three times over

`md5 9892b41f4d84bb224fdb37c8156a6ff3` matches on all three copies: the run source, the
jam-cull repull, and the original capture `7.3.26 - 7_7_26, 4.57 PM_1.m4a` at the root of
T7 Shield. 49,868,049 bytes, aac 44100 Hz stereo, 4:32:24, full start-to-end decode PASS.

## Pipeline chain

4h32m master ✓ → 100-perf song map ✓ → 29 lossless cuts (gone) → Demucs 6-stem (gone) →
DrumSep 5-piece (gone) → 29 mp3 renders ✓ → 6 stem packages ✓

### The intermediate audio is gone, and it is reproducible

T7 Shield was mounted during this session (`disk3`, 1 TB NTFS). The tree the symlinks point
at, `/Volumes/T7 Shield/jam-7-3-26-rebuild/`, no longer exists. A search for
`cuts_manifest.json` across T7 Shield, Black and `~/Projects` returned nothing, and no
`song0*.wav` survives on either external.

Nothing irreplaceable was lost. The master is intact in three byte-identical copies and
`song_map.json` holds all 100 performance windows, so `cut_refine.py` regenerates the cuts
deterministically. Separation is CPU time, not information. Redoing it costs 20 to 50
minutes per song for Demucs plus DrumSep. Six finished 7-stem packages survived off that
drive and do not need redoing.

## The 29 songs, mapped back to the master

The naming is not sequential in time: song01 to song03 were the three priority drum cuts
done first, then song04 to song29 fill the remaining 26 in timeline order. That
reconstruction was validated against three independent anchors it was not fitted to. song09,
song10 and song11 each carry a `PROVENANCE.md` recording exact source timestamps, and all
three land within 1.5 s.

| file | source window | length | drums |
|---|---|---|---|
| song01 | 0:01:05-0:10:53 | 9:48 | HIGH 0.76 |
| song02 | 1:36:16-1:40:02 | 3:46 | HIGH 0.70 |
| song03 | 4:11:22-4:14:30 | 3:10 | HIGH 0.69 |
| song04 | 0:14:16-0:17:41 | 3:25 | MEDIUM 0.46 |
| song05 | 0:22:04-0:26:10 | 4:08 | HIGH 0.51 |
| song06 | 0:26:10-0:31:10 | 4:59 | MEDIUM 0.44 |
| song07 | 0:34:39-0:37:58 | 2:27 | MEDIUM 0.36 (DELTA 52s) |
| song08 | 0:47:49-0:54:08 | 6:19 | MEDIUM 0.41 |
| song09 | 1:03:28-1:07:25 | 3:57 | HIGH 0.52 |
| song10 | 1:13:34-1:16:53 | 3:19 | HIGH 0.69 |
| song11 | 1:23:03-1:26:22 | 3:17 | MEDIUM 0.34 |
| song12 | 1:26:22-1:32:17 | 5:53 | HIGH 0.48 |
| song13 | 1:41:40-1:44:51 | 3:11 | HIGH 0.54 |
| song14 | 1:48:06-1:51:11 | 3:06 | HIGH 0.63 |
| song15 | 1:51:11-1:54:22 | 3:09 | HIGH 0.51 |
| song16 | 2:24:00-2:28:49 | 4:49 | MEDIUM 0.31 |
| song17 | 2:41:14-2:48:14 | 7:01 | MEDIUM 0.40 |
| song18 | 2:50:36-2:54:18 | 3:43 | MEDIUM 0.31 |
| song19 | 3:00:27-3:03:43 | 3:16 | MEDIUM 0.26 |
| song20 | 3:12:12-3:16:03 | 3:49 | MEDIUM 0.33 |
| song21 | 3:16:03-3:21:43 | 5:39 | MEDIUM 0.38 |
| song22 | 3:21:43-3:24:51 | 3:08 | MEDIUM 0.32 |
| song23 | 3:28:01-3:31:13 | 3:12 | MEDIUM 0.38 |
| song24 | 3:34:03-3:38:58 | 4:54 | MEDIUM 0.36 |
| song25 | 3:47:05-3:52:05 | 5:00 | MEDIUM 0.30 |
| song26 | 3:54:31-4:00:10 | 5:39 | MEDIUM 0.42 |
| song27 | 4:06:20-4:09:38 | 3:18 | HIGH 0.54 |
| song28 | 4:16:06-4:20:08 | 4:01 | MEDIUM 0.24 |
| song29 | 4:23:53-4:28:40 | 4:49 | MEDIUM 0.30 |

**One row does not reconcile.** song07's mp3 runs 2:27 while its mapped performance is 3:19,
a 52 s gap well past what valley-snapping explains. Every other row agrees within 12 s. The
cut manifest that would settle it was on the cleared drive.

## Every directory, with status

| what | path | state |
|---|---|---|
| run root, map, PROJECT_STATE.md, logs | `~/Projects/_outputs/jam-7-3-26-rebuild/` | partial |
| 29 cut songs as mp3 plus playable index.html | `~/Projects/_outputs/jam-7-3-26-rebuild-mp3/` | local |
| 3 complete 7-stem packages (song09/10/11) | `~/Projects/_outputs/jam-eligible-sections/` | 3 of 10 |
| 2 drumkit packages (song02/04), bright variants | `~/Projects/_outputs/jam-cull-drumkit-stems/` | local |
| Demucs 6-stem for 11 songs, drum_rank.json | `~/Projects/_outputs/jam-cull-stems/` | local |
| July 8 cull, 20 clips, "Session July 3 - 12 songs" | `~/Projects/_outputs/jam-cull/7.3.26-7.7.26/` | local |
| 20 loudness-balanced mp3 renders | `~/Projects/_outputs/jam-rebalance/songs-balanced/` | local |
| QA toolkit, integrity_full.py, scan_mics_v2.py | `~/Projects/_outputs/jam-fullfreq-verify/` | local |
| separate one-take run, same night | `/Volumes/T7 Shield/bandpractice_stems/` | on T7 |
| the original capture | `/Volumes/T7 Shield/7.3.26 - 7_7_26, 4.57 PM_1.m4a` | on T7 |
| 24-bit cuts and all separation output | `/Volumes/T7 Shield/jam-7-3-26-rebuild/` | CLEARED |

## Why the rebuild replaced the cull

Silence-splitting cannot find songs in a continuous jam. The July 8 pass cut on volume drops
and produced 20 clips, half of them tagged `maybe`. A jam that never stops has almost no
silences to split on, so the drum-driven performances were missed. The July 19 rebuild maps
the kick band directly, using periodic pulse plus broadband groove novelty, and found 29 drum
performances of three minutes or more inside the same recording, 2h06m of music out of 4h32m.
That method is now the `/jam-stem-rebuild` skill.

## Second-brain test result

Semantic retrieval missed this entirely. `/ask` returned 23 cited hits above the 0.60 gate
across corpus, vault, memory and the domain registry. Not one pointed at the 7.3.26 jam.
Vault hits went to a Phish video project and a Reba jam-anatomy session; corpus hits went to
a mixing-engineering book. The work was found by listing the output directory.

- The run had no vault note. `PROJECT_STATE.md` lives in the output folder, outside the
  indexed tree, so nothing describing it was ever embedded.
- The chats layer ranks by raw term count and surfaced four transcripts whose top matches
  were boilerplate tool preambles, not jam content.
- Fixed 2026-08-17: a project note was written to `Brandon-Vault/20 Projects/` and the vault
  reindexed (15,116 new chunks, 4,439 files). The same question now returns that note at
  0.722, ranked first.

## Two T7 Shields

Brandon owns two Samsung PSSD T7 Shield enclosures. The 2 TB one carries the NTFS volume
named `Black`; the 1 TB one carries the volume named `T7 Shield`. A `diskutil` listing
showing only `Black` does not mean T7 is absent, it means the other enclosure is unplugged.
Check `ioreg -c IOBlockStorageDevice` before concluding anything about which drive is
attached.

---

Durations measured with ffprobe. Source windows from `maps/song_map.json`. Drive state from
`diskutil`, `ioreg` and `find`.
