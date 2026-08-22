# Shiner · BELIEVEYOUME: Tab Workbench

Census taken 2026-08-17. Every Songsterr tab, Guitar Pro file, and stem folder for the ten songs, matched song by song.





## Songs 9 and 10, and the audit is complete

### Asleep in the Trunk: 88.9% attack recall on a file that is almost empty

| Measure | Value | What it means |
|---|---|---|
| Attack recall | 88.9%, 16 of 18 | The highest recall on the record, from the emptiest file |
| **Attack precision** | **1.1%, 7 of 663** | The number that exposes it |
| Map | 1 anchor, 8 tab attacks | Health gate FAILS, fewer than two anchors |
| Pitch separation | -22.2 (55.6% vs a 77.8% control) | Inverted, on n=18 |
| Length | 274.7 s at 173 bpm in 3/4 vs a 278.9 s mix | The shell has the right bar count and tempo |

**The sharpest case on the board for never reading recall alone.** A tab of 173 notes across 264 bars scores 88.9% attack recall, higher than every real transcription measured. Precision at 1.1% catches it, and the health gate refuses the map at one anchor. Three independent checks disagree with the flattering number.

### Jackie: the cleanest map on the record

| Stage | Result |
|---|---|
| Length | 170.0 s at 144 bpm vs a 173.0 s mix, 1.7% apart |
| Map | 66.3% alignment vs 14.5% control, gain +51.7, 20 anchors |
| Map health | **PASS, best measured**: clamped 1.7%, max run 12, unique 0.984, span 98% |
| Attack recall | 68.9%, 717 of 1041, decoy 25.1% |
| Attack precision | 89.0%, 381 of 428 |
| Timing | median 70.0 ms, p90 176.3 ms, n=919 |
| Pitch agreement | 62.8% vs 52.8% control, separation +10.0 |
| Duration | -0.015 vs +0.014, no power |
| Classification | 0 supported, 5 unresolved, 88 unsupported |

Jackie's map beats The Mutiny's on every health measure. Its single guitar staff is genuine and the notation carries zero playability faults.

**All ten songs now carry both halves**, every one run off the internal disk.

## Plan: finishing every /goal requirement

| /goal requirement | Status | Evidence |
|---|---|---|
| Attack precision and recall | Done | 88.0% and 74.1%, validated 5.70x against a wrong stem |
| Pitch agreement | Done | 53.4% vs 51.0% control, no power, reported with control |
| Timing error | Done | median 48.2 ms, p90 204.0 ms, n=2534 |
| **Duration and tie agreement** | **Not implemented** | audio_accuracy_audit.py documents it in its header and never codes it |
| Channel ownership per note | Done | Refused at -0.0115 against a 0.05 threshold |
| DTW map, validated | Done | 5.75x, bar CV 2.22% over 126/135, PASSES health gate |
| Full playability tier | Done | Lead REVIEW, Rhythm one flag refuted as a held-pedal false positive |
| Candidate artifact hash | Done | source 21b37b73b6f35faa, rejected candidate c2c7710ee5488821 |
| Preservation census | Done | 3260 in, 3260 out, zero lost, zero invented |
| **Checkpoint ledger entry** | **Missing** | no baseline exists for this song |
| **Per-note discrepancy classification** | **Missing** | the 795 unmatched attacks are counted, never itemised |

### Phase 1. Close the three executable gaps, no new research needed

1. **Implement duration and tie agreement.** `written_attacks()` already returns `duration_beats`, so the data is there and only the comparison is missing. Ship it with a shifted-time control like every other measure.
2. **Itemise the 795 unmatched attacks.** The earlier attempt saturated at 100% because it rebuilt the map with `np.interp`. The tool's own `BM.apply_map(tab_t, rec_t, times)` is the call that produces 74.1%, so extraction goes through that call and yields each miss with staff and bar.
3. **Classify every miss** as supported correction, unsupported change, or unresolved ambiguity, the wording that /goal uses.
4. **Initialise the checkpoint ledger** with `--init-checkpoint` so a future candidate has a baseline.


### Phase 1 executed, all three gaps closed

Run through the audit's own `BM.build`, `BM.apply_map`, `nearest` and `DECOY_S`. New tool: `miss_and_duration_audit.py`.

**Gap 1. Duration and tie agreement, now implemented.**

| Measure | n | Correlation | Control | Separation | Verdict |
|---|---|---|---|---|---|
| Written duration vs decay-to-half-energy | 2219 | -0.060 | +0.021 | -0.081 | No discriminating power |

The /goal line item is satisfied: the measure exists, ran, and is reported with its control. The result belongs on the refused list.

**Gap 2. The 991 misses, itemised and classified.**

| Classification | Bars | Meaning |
|---|---|---|
| **Supported correction** | **0** | Miss far above the song rate AND the decoy stays low there |
| Unresolved ambiguity | 9 | Miss high, decoy misses too, so the detector explains it |
| Unsupported change | 122 | No evidence of a discrepancy |

Song-wide the attack measure discriminates hard: 74.1% real against 11.1% decoy at +7.3 s, 6.7x. Per bar, no discrepancy is isolated. The nine unresolved bars are 3, 20, 49, 117, 124, 125, 126, 129, 130, each with a decoy miss of 75% to 100%.

**Zero bars in The Mutiny reach the evidence bar for a licensed correction.**

**Gap 3. Checkpoint ledger.** Initialised. `CHECKPOINT.json` and `RECEIPTS.jsonl` sit beside the song, status `best_validated_so_far`.


### Correction: the first Mutiny miss numbers were wrong

`AAA.nearest` returns a DISTANCE and **0.0 is falsy in Python**, so `(nearest(t) or 9e9) <= WINDOW` turned every exact match into a miss. The tell appeared on The Alligator, where the tool read 0.3% recall against the reference tool's 40.9% on identical inputs.

| The Mutiny | Buggy run | Corrected |
|---|---|---|
| Attack recall | 67.7% | 74.1%, matching the reference tool exactly |
| Misses | 991 | 795 |
| Supported correction | 0 | 0, unchanged |
| Unresolved ambiguity | 12 bars | 9 bars |
| Unsupported change | 119 bars | 122 bars |

The conclusion survives: zero supported corrections. The lesson is a process one. Cross-check a derived metric against the reference tool's own number BEFORE building classification on it; "close enough" is not a check.

### Song 2 of 10: The Alligator, full pipeline

| Stage | Result |
|---|---|
| Two guitars or one covering | **MIXED**, co-activity 97.7%, role flip **34.3**, one staff covering for another |
| Map | 42.0% vs 4.1% control, gain +37.9, 8 anchors |
| Map health | PASS, marginally: clamped 10.6%/12%, max run 73/120, unique 0.895/0.85, span 90%/85% |
| Attack recall | 40.9%, 893 of 2186, decoy 4.8% |
| Attack precision | 100.0%, 154 of 154, the saturation shape |
| Pitch agreement | **63.5% vs 39.6% control, separation +24.0**, the first not labelled no-power |
| Timing | median 54.9 ms, p90 236.4 ms |
| Duration | +0.249 vs +0.273 control, separation -0.024, no power |
| Playability | **PASS on both staves**, zero faults |

**The Alligator tab stops 44 seconds before the song does.** 86 bars at 120 bpm is 172.0 s; the stem runs 216.1 s. Zero repeat markers, zero alternate endings, and the map runs near one-to-one (tab 154.00 s at recording 153.77 s), so the tempo is right. About 44 seconds, roughly 22 bars, is untranscribed. No audio metric was needed to find this.

| Classification | Bars | Which |
|---|---|---|
| **Supported correction** | **2** | bar 21 (11 attacks, miss 100%, decoy 81.8%), bar 54 (38 attacks, miss 100%, decoy 81.6%) |
| Unresolved ambiguity | 4 | bars 18, 42, 44, 57 |
| Unsupported change | 80 | no evidence |

Both supported bars are marginal. The stem yields 154 onsets across 216 s, 0.71 per second, so a 100% miss carries less weight than on The Mutiny's 718-onset channel. Both clear the decoy test by about 18 points against a 15-point threshold. Honest label: candidate for listening.


### Song 3 of 10: So Far So, blocked at the map stage

| Stem tried | Onsets | Alignment | Gain | Anchors | Clamped | Max run | Span | Health |
|---|---|---|---|---|---|---|---|---|
| Rhythm Guitars | 83 | 16.6% | +14.1 | 3 | 38.1% | 302 | 62% | FAIL x4 |
| Solo Guitars | 85 | 24.0% | +21.0 | 4 | 26.8% | 175 | 73% | FAIL x4 |
| Other Guitar | 132 | 75.4% | +72.1 | 2 | 73.9% | 704 | 26% | FAIL x4 |

**The highest alignment gain of the session came from the most degenerate map, and the health gate caught it.** Other Guitar scores 75.4% and +72.1, beating The Mutiny's best, on **two anchors** that clamp 73.9% of the tab and collapse 704 consecutive attacks onto one audio time. `beat_map.py` ACCEPTED it. Without the health gate this would have been So Far So's headline number.

**All three stems fail on all four criteria, so no per-note audio metric is interpretable here.** Cause: 83 to 132 onsets across 259 s is 0.32 to 0.51 per second against The Mutiny's 2.86.

| Stage | Result |
|---|---|
| Tab length vs song | 258.5 s written against a 259.7 s stem, 0.4% apart. Complete. |
| Two guitars or one covering | **MIXED**, co-activity 66.7% over 64 of 96 bars, role flip **39.6**, worst of the three |
| Playability | **FAIL**, one IMPOSSIBLE_SPAN per staff |

Both faults involve ties, the shape that proved to be a held pedal on The Mutiny:

- `bar 66.0 Lead Guitar: s2f9 s3f7 s4f3~, span 6, tie on s4, sounding [57, 60, 60]`
- `bar 106.0 Rhythm Guitar: s0f4 s1f2 s2f9~ s3f4 s4f3 s5f2, span 7, tie on s2. The offered alternative is ALSO span 7, so no narrower voicing exists.`

The Lead staff carries the same TUNING_EVIDENCE review as The Mutiny.


### Song 4 of 10: My Mirror Hates Me, the cleanest so far

| Stage | Result |
|---|---|
| Tab length vs song | 282.1 s written against a 286.9 s stem, 1.7% apart |
| Two guitars or one covering | **TWO_PARTS**, co-activity 94.0% over 125 of 133 bars, role flip **8.3** |
| Map health, all three stems | **All three PASS**, the first song where every guitar stem yields a usable map |
| Attack recall | 66.3%, 949 of 1432, decoy 10.2%, 6.5x |
| Pitch agreement | 55.8% vs 52.2% control, +3.6, no power |
| Duration | +0.012 vs -0.039 control, +0.051, no power |
| Playability | **PASS on both staves, zero faults** |
| Classification | 1 supported (bar 81), 7 unresolved, 111 unsupported |

| Stem | Onsets | Alignment | Gain | Anchors | Clamped | Max run | Health |
|---|---|---|---|---|---|---|---|
| Rhythm Guitars | 456 | 64.4% | +52.8 | 18 | 5.3% | 57 | PASS |
| Other Guitar | 367 | 50.4% | +43.2 | 14 | 9.1% | 98 | PASS |
| Solo Guitars | 321 | 45.8% | +40.2 | 12 | 7.6% | 82 | PASS |

**The one supported bar is too thin to act on.** Bar 81 carries 4 attacks, miss 75%, decoy 50%. Three of four missing on a 4-attack bar with the decoy 25 points below is inside what an onset detector does by chance.

### Four songs profiled, side by side

| Song | Length match | Staff roles | Map health | Attack recall | Playability | Supported bars |
|---|---|---|---|---|---|---|
| The Mutiny | good | TWO_PARTS, flip 7.0 | PASS | 74.1% | clean once refuted | 0 |
| My Mirror Hates Me | 1.7% apart | TWO_PARTS, flip 8.3 | PASS on all 3 | 66.3% | PASS, zero faults | 1, too thin |
| The Alligator | 44 s untranscribed | MIXED, flip 34.3 | PASS, marginal | 40.9% | PASS, zero faults | 2, marginal |
| So Far So | 0.4% apart | MIXED, flip 39.6 | FAIL, all 3 | n/a | FAIL x2, tie-related | not measurable |

**A pattern is forming.** The two songs reading TWO_PARTS also carry healthy maps and high attack recall. The two reading MIXED are the two with structural problems: The Alligator is missing 44 seconds, and So Far So cannot produce a usable map from any stem. Role flip and map health are tracking together, worth testing on the remaining six rather than assuming.


### Song 5 of 10: Endless Summer, and the first successful correction

**Correction to my own reading first.** I recorded the tab as 83 s longer than the song. That was my error: **Endless Summer is in 3/4**, 179 of 192 bars, 581 quarter-beats. At 140 bpm that is 249.0 s against a 246.4 s song, 1% apart. The tab is complete. I had assumed 4/4.

I then suspected the tooling mishandled meter, since `ASE.events` derives bar length from notes and defaults to 4.0 on an empty bar. **Measured, refuted:** drift is -0.4 s on Endless Summer and 0.0 s on The Mutiny.

| Stage | Result |
|---|---|
| Meter | 3/4 dominant, 179 of 192 bars, 581 quarter-beats |
| Tab length | 249.0 s at 140 bpm vs a 246.4 s song and mix |
| Staff roles | **TWO_PARTS**, co-activity 56.8%, role flip 9.2 |
| Map health | Both stems PASS (lead 18 anchors, 4.2% clamped) |
| Playability, source | Lead PASS, Rhythm **FAIL IMPOSSIBLE_SPAN x20** |

| Shape | Span | Alternative | New span | Pitches | Ties | Instances |
|---|---|---|---|---|---|---|
| s0f6 s1f3 s2f6 s3f8 | 5 | s0f6 s1f3 s2f6 s4f4 | 3 | [42,46,54,61] both | none | 12 |
| s2f10 s3f12 s4f15 | 5 | s1f15 s2f17 s4f15 | 2 | [58,65,72] both | none | 8 |

**The first attempt regressed 20 faults into 533, and exposed the cause of both earlier failures.**

| Attempt | Notes edited | Notes moved | Before | After |
|---|---|---|---|---|
| The Mutiny, in place | 1 | 3 positions | 1 | 5 |
| Endless Summer, in place | 3 | 274 | 20 | 533 |
| **Endless Summer, cloned** | 0 edited, **9 cloned** | **0** | 20 | **0** |

GPIF keeps every `<Note>` in one shared pool and the same id is reused by many beats, so an in-place edit rewrites every beat referencing it. The fix is to deepcopy the notes a flagged beat needs into fresh ids and repoint only that beat. Beat shapes must be snapshotted before editing: the in-place run found 1 beat per shape where the cloned run found 3.

**The validated candidate:**

| Gate | Result |
|---|---|
| Tier 1 pitch preservation | **PASS**, 3917 in and out, zero lost, zero invented, 27 distinct both ways |
| Tier 1b position | **PASS**, zero notes moved outside repaired beats |
| Playability | **PASS both staves**, IMPOSSIBLE_SPAN **20 to 0** |
| Checkpoint | **KEEP THE CHECKPOINT**. Hard total 20 to 0, hand skip 0.0% to 1.8%, trade must be licensed |
| Hashes | source a54bbb8f582aad48, candidate 1bf5b965e04ff740 |

The candidate is validated and deliberately not promoted. Removing 20 impossible spans at the price of 1.8% hand skip is a judgment about how the record should read.


### Song 6 of 10: Not Too Much, 15 spans down to 1

| Stage | Result |
|---|---|
| Meter and length | 122 bars all 4/4, 488 quarter-beats, 344.5 s at 85 bpm vs a 348.1 s stem |
| Staff roles | **TWO_PARTS**, co-activity 69.2%, role flip **2.3**, cleanest of all six |
| Playability, source | Lead REVIEW (hand skip 59%), Rhythm **FAIL IMPOSSIBLE_SPAN x15** |

**The health gate caught a high-gain degenerate map for the third time.**

| Stem | Onsets | Alignment | Gain | Anchors | Clamped | Max run | Health |
|---|---|---|---|---|---|---|---|
| Rhythm Guitars | 60 | 52.7% | +51.5 | 3 | 58.3% | 568 | FAIL x4 |
| Solo Guitars | 437 | 34.3% | +27.1 | 18 | 22.8% | 222 | FAIL x4 |
| **Other Guitar** | 427 | 38.1% | +30.3 | 20 | 5.7% | 55 | **PASS** |

| Shape | Span | Alternative | New span | Ties | Instances | Action |
|---|---|---|---|---|---|---|
| s0f2 s1f5 s2f7 s3f7 | 5 | s0f2 s2f0 s3f2 s4f3 | 1 | none | 12 | repaired |
| s0f1 s1f5 s2f7 s3f7 | 6 | s0f1 s2f0 s3f2 s4f3 | 2 | none | 2 | repaired |
| s1f8~ s2f8~ s3f7~ s4f3 s5f1 | 7 | s0f13 s1f13 s2f12 s3f7 s4f6 | 7 | s1,s2,s3 | 1 | left as written |

The third shape holds ties on three strings and its alternative is also span 7, the held-chord pattern that proved correct on The Mutiny. The script skipped those beats itself.

**Both candidates, with receipts:**

| Candidate | run_id | Artifact | Gate | Checkpoint | Hard faults | Preservation | Position | Declared |
|---|---|---|---|---|---|---|---|---|
| endless-summer-refret-cloned.gp | 9108ce5b89c369e4 | 1bf5b965e04ff740 | 553ab252e1d1cd72 | a54bbb8f582aad48 | 20 to 0 | PASS | PASS | True |
| not-too-much-refret-cloned.gp | d27623407f403a43 | 15911652a98631e2 | 553ab252e1d1cd72 | e0a024dbc0023730 | 15 to 1 | PASS | PASS | True |

Neither is promoted. Endless Summer trades 0.0% to 1.8% hand skip for 20 spans removed; Not Too Much trades 7.7% to 9.1% for 14. The gate asks for that trade to be licensed with evidence.


### Song 7 of 10: Lazarus, blocked on both maps, with forced octave leaps

The Phase 0 re-pull could not be completed as a `.gp`: Songsterr serves notation as JSON per track with no `.gp` export over plain HTTP, and the only other Lazarus file on disk holds the identical 138 bars and three tracks. The audit ran on the local file; the live `s5476396` with its vocal and drum staves remains the better source nothing local can supply.

| Stage | Result |
|---|---|
| Meter and length | 138 bars all 4/4, 552 quarter-beats, 283.1 s at 117 bpm vs a 281.0 s stem |
| Tempo | GPIF says 117. The stem folder is named "180bpm", which is wrong. |
| Staves | Three only. Rhythm 100% occupancy, Lead 50.7%, Bass 95.7%. No vocal, no drums. |
| Staff roles | **TWO_PARTS**, co-activity 50.7% |
| Playability | Rhythm **PASS**, 1392 notes, zero faults. Lead **REVIEW**, SHIFT x68, severe JUMP x12 |

**Both maps fail, so no audio verification is possible.**

| Stem | Onsets | Alignment | Anchors | Clamped | Max run | Health |
|---|---|---|---|---|---|---|
| rhythm | 13 | 8.7% | 1 | n/a | n/a | FAIL, fewer than two anchors |
| lead | 134 | 22.8% | 6 | 18.3% | 202 | FAIL x4 |

Thirteen onsets across 281 s is 0.05 per second. Lazarus joins So Far So as a song where no stem yields an interpretable map.

**The octave leaps are forced by the fretboard.** 136 SHIFT and JUMP records concentrate on one string: s5 carries 210, s4 carries 60, s2 carries 2.

- `SHIFT bar 16.812  s5f8   sounding [70]  hand moves 12.0 frets in 128 ms`
- `JUMP  bar 17.062  s5f20  sounding [82]  12.0 frets in 128 ms, 94 frets/sec`

**Pitch 82 has exactly one placement on a Drop C guitar, `s5f20`.** Pitch 70 has four. So the high note cannot move, and the only refret available raises the low note to `s4f13`, shortening the leap from 12 frets to 7. The gate flags a 7-fret move in 128 ms as a JUMP too, so that repair trades one flag for another.

**Nothing was changed on Lazarus.** Audio accuracy comes before any fretboard choice, both maps fail, and there is no way to check whether pitch 70 and 82 are the right notes. The Lead staff is also 50.7% occupancy with 472 of 718 notes tied, the thin-lead signature flagged in Phase 0.


### Correction: the drive being absent blocks LESS than I said

A complete copy of all ten `.gp` files lives on the internal disk at `~/Desktop/Brandon-Vault/New Folder With Items 2/New Folder With Items 7/IF YOU CAN'T FIND SOMETHING ITS HERE/BandBooks/BELIEVEYOUME/_canonical_2026-06-04/songs/`. What is genuinely missing is the STEMS.

| Work | Needs | Runnable without the drive |
|---|---|---|
| Content gate, staff roles, playability | the `.gp` only | YES |
| Beat map, audio accuracy, mir_eval | stems | no |

### Song 8 of 10: Broken Satellites, the notation half

| Stage | Result |
|---|---|
| Content | 171 bars, 9071 notes, 53.0 per bar, PASS |
| Staff roles | **TWO_PARTS**, co-activity 60.9%, role flip **0.0**, cleanest of all eight |
| Structure | **FAIL, TRACKCOUNT: 3 guitar staves against a gate of 2** |
| Lead Guitar | REVIEW TUNING_EVIDENCE, plus a JUMP at bar 41 of 17 frets in 259 ms |
| Rhythm Guitar | PASS, zero faults, its Copy scores identically |
| Vocals | 335 notes, 67 stacked beats, the most vocal harmony on the record |

**The duplicate staves are exact, and the fix is the re-pull rather than a repair.** `Rhythm Guitar Copy` holds 2671 notes at 98.8%, identical to `Rhythm Guitar`. `Copy` holds 530 at 96.5%, identical to the bass. Phase 0 established the live `s5084035` returns five clean tracks with Lead 924, Rhythm 2671 and Vocals 335 matching ours exactly. The structural fail is an artifact of the local file.


### Songs 9 and 10: Asleep in the Trunk and Jackie, notation half

| Song | Content gate | Staff roles | Playability | Vocals |
|---|---|---|---|---|
| Asleep in the Trunk | **FAIL, EMPTY SHELL**. 264 bars, 173 notes, 0.66/bar. Lead holds ZERO notes. Rhythm plays 12 of 264 bars. | n/a on a shell | Lead REVIEW on zero notes; Rhythm REVIEW, hand skip 57% | 14 notes over 264 bars, monophonic |
| Jackie | PASS, 102 bars, 3013 notes, 29.5/bar | **SINGLE_STAFF**, one guitar only | Rhythm Guitar **PASS**, zero faults | 139 notes, 39.2% occupancy, monophonic |

Asleep confirms on the local copy what Phase 0 found against the live tab: our file is a shell while `s5085156` holds 7245 notes. Jackie's single guitar staff is genuine, since the live tab also returns one.

**The notation half is now complete for all ten songs.** Content gate, staff-role audit and the full playability tier have run on every one. What remains for the three unfinished songs is the AUDIO half only, which needs the stems.


### The field-standard metric, finally run, and it is weak

`mir_eval.transcription` note-level F-measure is the MIREX standard and the one thing this pipeline had never executed. **It has now been run**, and it needed no drive: tabs, full-mix mp3s and per-instrument YIN transcriptions of the stems are all on the internal disk.

**The first run said 28.8x and I did not publish it, because the control was almost empty.** `so_far_so_rhythm_guitar_PYIN.mid` holds 105 notes across 189.6 s against the Mutiny reference's 7639 across 248.4 s. Re-run against three density-matched controls:

| Pairing | Reference notes | F at 50 ms | F at 250 ms | Ratio, 50 ms |
|---|---|---|---|---|
| **CORRECT, the_mutiny rhythm YIN** | 7639 over 248.4 s | **0.046** | **0.112** | reference |
| WRONG, endless_summer rhythm YIN | 8381 over 245.2 s | 0.036 | 0.097 | 1.28 |
| WRONG, my_mirror rhythm YIN | 8225 over 283.5 s | 0.021 | 0.052 | 2.14 |
| WRONG, so_far_so rhythm YIN | 3537 over 248.7 s | 0.023 | 0.054 | 2.00 |

**Worst-case discrimination is 1.28x at 50 ms and 1.16x at 250 ms, both under the 1.5 bar.** Attack recall remains the leader at 5.70x.

**This is not a clean verdict on mir_eval.** The reference is a YIN transcription and YIN is monophonic, so on a chordal rhythm guitar it captures one pitch per instant, which is why absolute F sits at 0.046. The metric is handicapped by the reference rather than judged on its own terms.

**The clean test is one install away.** `basic_pitch` is present in `~/venvs/audio_midi_311` and crashes with SIGFPE (exit 136) because neither `tensorflow` nor `tflite-runtime` is installed there. `pip install 'basic-pitch[tf]'` into that venv should fix it, and mir_eval can then be re-run against a polyphonic reference. That is a package install rather than research, and it is the highest-value next action on the board.


### mir_eval with a POLYPHONIC reference: it works, and no install was needed

`basic_pitch`'s default model is `nmp.mlpackage` (CoreML), which crashes with SIGFPE. `nmp.onnx` ships in the same directory and `onnxruntime 1.23.2` was already installed, so selecting ONNX fixed it. No tensorflow, no tflite-runtime, no download.

| Pairing, reference is basic_pitch on the full mix | Ref notes | P | R | F at 50 ms | F at 250 ms | Ratio |
|---|---|---|---|---|---|---|
| **CORRECT the_mutiny.mp3** | 1444 | 0.060 | 0.100 | **0.075** | **0.205** | reference |
| WRONG endless_summer.mp3 | 1860 | 0.036 | 0.047 | 0.041 | 0.101 | 1.83 |
| WRONG so_far_so.mp3 | 1231 | 0.009 | 0.017 | 0.012 | 0.046 | 6.48 |
| WRONG my_mirror_hates_me.mp3 | 1642 | 0.004 | 0.006 | 0.005 | 0.011 | 15.14 |

**Worst-case 1.83x at 50 ms and 2.04x at 250 ms. Both clear the 1.5 bar, so mir_eval is USABLE.** All four references are full mixes, so density is comparable by construction (1231 to 1860 against the correct 1444), which removes the confound that faked the earlier 28.8x.

| Measure | Worst-case discrimination | Verdict |
|---|---|---|
| Attack recall, health-gated map | **5.70x** | the leader |
| Map alignment | 5.75x | valid, song level only |
| **mir_eval note F, polyphonic reference** | **2.04x at 250 ms** | USABLE, second validated discriminator |
| mir_eval note F, monophonic YIN reference | 1.28x | weak, the reference was the handicap |
| Everything else measured this session | under 1.5x or inverted | unusable |

**Absolute F is low because the reference is the FULL MIX**, so basic_pitch transcribes bass, drums and vocals alongside the guitar while the estimate is one guitar staff. The isolated stem would raise it, and that is the one thing still wanting the drive. The discrimination holds without it.


### Broken Satellites, audio half, and it needed no drive either

The local full-mix mp3s cover all ten songs, so the audio pipeline runs on them.

| Stage | Result |
|---|---|
| Length | 353.8 s at 116 bpm against a 362.7 s mix, 2.5% apart |
| Map | 35.1% alignment vs 5.1% control, gain +30.0, 16 anchors |
| Map health | **PASS**, clamped 8.3%, max run 114, unique 0.917, span 92% |
| Attack recall | 32.9%, 1855 of 5645, decoy 5.3%, **6.2x** |
| Attack precision | 89.6%, 311 of 347 |
| Timing | median 125.4 ms, p90 176.3 ms, n=2340 |
| Pitch agreement | **53.2% vs 44.8% control, separation +8.4**, and the tool withheld its no-power label |
| Duration | -0.079 vs -0.006 control, no power |
| Classification | 2 supported (bars 4, 28), 0 unresolved, 146 unsupported |

**The 5645 written attacks are inflated by the duplicate staves.** This file carries `Rhythm Guitar Copy` and `Copy`, so roughly a third are counted twice and 32.9% is a floor. The re-pull of `s5084035` would raise it.

Both supported bars carry 40 and 90 attacks with 100% miss against decoys at 80.0% and 83.3%, clearing the threshold by a wider margin than The Alligator's. Treat them as listening candidates.

**Eight of ten songs now carry both halves.** Only Asleep in the Trunk and Jackie remain, and their local mp3s exist.

### Phase 2. The decision that is not mine

Nine measures tested with controls on both sides, only attack recall survived, so today a corrected file cannot be justified note by note. Three ways forward:

- **Accept the inherited tab** with its documented profile: 74.1% attack recall, 88.0% precision, 48.2 ms median timing, zero genuine playability faults.
- **Fund the missing-signal work.** The space is mapped; what is untried is a learned or template matcher rather than a hand-designed statistic.
- **Correct by ear** with the tools as evidence rather than as the licenser.

### Phase 3. The other nine songs

- **Ready now, five:** Not Too Much, The Alligator, So Far So, My Mirror Hates Me, and Endless Summer
- **Needs a re-pull first, two:** Lazarus, Broken Satellites
- **Blocked on stems, two:** Asleep in the Trunk, Jackie need six-stem re-separation
- **Pilot already run:** The Mutiny

Phase 1 closes the three /goal line items missing for implementation reasons rather than research reasons, which leaves exactly one precise gap. Per-note correction stays blocked either way.

## Phase 0 result: run, measured, closed

Executed 2026-08-17. Live notation pulled per track off the Songsterr CDN route `st_gpdiff.py` uses, then counted bar by bar. Four of five items settled by measurement.

**A measurement bug was caught and fixed before reporting.** Songsterr encodes a rest as `{"notes":[{"rest":true}]}`, so the first pass scored rests as notes and returned 100% occupancy everywhere. Every number below excludes rests.

| Song | Live rev | Live notes | Local notes | Verdict | What it settled |
|---|---|---|---|---|---|
| Asleep in the Trunk | 7798309 | 7245 | 173 | Re-pull | The source was always fine, our copy was the defect. 42x the content. Vocals 14 to 311. |
| Lazarus | 7834445 | 8672 | 3319 | Re-pull | New tab carries the vocal (228) and drum (2040) staves the local file lacks. 207 bars against 138. |
| Jackie | 7834599 | 3014 | 3013 | No action | Correction: the local copy is current. Track for track identical, vocals 139 against 139. |
| Broken Satellites | 6648000 | 5870 | 9071 | Use live | The Copy tracks exist only in our file. Lead 924, Rhythm 2671, Vocals 335, identical to ours. The extra 3201 local notes are the copies. |
| Broken Satellites BC | 7791000 | 4700 | n/a | Reject | Lead holds 129 notes at 13.3% occupancy against 924 at 60.2% on s5084035. |

**The vocal answer holds on the live tabs, from Songsterr's own flag.** Every song returns `isVocalTrack: true` on exactly one track. Not one returns two. Live Asleep vocal carries 15 stacked beats, live Broken Satellites carries 67.

**New Phase 1 item.** The Lazarus lead holds 154 notes at 43% occupancy with zero stacks, and the BC lead holds 129 at 13.3%. That is the documented Songsterr solo failure. Read the lead's note count and fret range before accepting any tab.


## Phase 1 result: The Mutiny, measured

Run 2026-08-17 against `08_the_mutiny/songsterr.gp`, sha256 `21b37b73b6f35faa`, 135 bars, 4906 notes.

**Headline: three of four evidence measures lost to their own controls, so none licenses a note change.** Each ran its own control and reported that it lost.

### Two guitars or one part split

`staff_role_audit.py`: co-activity 50.4%, both staves play in 68 of 135 bars, role flip 7.0. Verdict **TWO_PARTS**. Genuine two-guitar runs at bars 7-35, 71-80, 101-105, 111-130. The Mutiny is clear of the one-part-chopped-in-two defect.

### Beat-to-seconds map

| Stem | Onsets | Alignment | Control | Gain | Anchors | Bar CV | Verdict |
|---|---|---|---|---|---|---|---|
| Rhythm Guitars (stereo) | 236 | 30.8% | 7.3% | +23.5 | 12 | 7.20%, 10 bars off | Reject |
| RhythmGtr [L] | 292 | 35.2% | 8.5% | +26.7 | 15 | 3.02% | Weaker |
| RhythmGtr [R] | 718 | 73.6% | 17.5% | +56.1 | 32 | 2.22%, 0 off | **Accepted** |

Covers 126 of 135 bars, mean bar 1.8469s against nominal 1.8462s. The stereo sum masks transients the isolated channel keeps.

### Audio accuracy

| Measure | Number | Control | Verdict |
|---|---|---|---|
| Attack recall | 74.1% (2273 of 3068) | n/a | Usable |
| Attack precision | 88.0% (632 of 718) | n/a | Usable |
| Timing post-warp | median 0.0 ms | circular | Discarded |
| Timing as the tab asserts it | median 48.2 ms, p90 204.0 ms, n=2534 | n/a | Usable |
| Pitch agreement | 53.4% | 51.0% shifted-time, +2.4 | **No discriminating power** |
| Ownership separation | +0.2651 | +0.2766 shifted, gain -0.0115 vs 0.05 | **Refused** |
| Attack-string evidence | -0.197 | -0.215 over its own control | **Not usable** |
| Register evidence | 1368 of 3260 (42.0%) below the 150 Hz floor | n/a | BLIND_REGISTER |

The stem holds under 2% of its energy below 150 Hz while 46.6% of the Rhythm part and 24.3% of the Lead are written below it, down to 65.4 Hz. Drop C puts the low C at 65.4 Hz.


### The register-aware fix, tested and refuted

The full mix at `Music to Stem/Beleiveyoume/BELIEVEYOUME (2025)/03 - The Mutiny.flac` runs 251.490295s against the stems' 251.490295s, identical to the sample. A combined file was built with a 4-pole crossover: guitar right channel above 150 Hz, full mix below. Then a negative control: the same tab against So Far So's guitar stem.

| Pairing | Map align | Attack recall | Attack precision | Pitch agree | Pitch control | Pitch separation |
|---|---|---|---|---|---|---|
| Mutiny tab vs its own RhythmGtr [R] | 73.6% | 74.1% | 88.0% | 53.4% | 51.0% | +2.4 |
| Mutiny tab vs register-aware combine | 73.4% | 74.1% | 87.8% | 51.0% | 47.2% | +3.9 |
| Mutiny tab vs its own full mix | 54.9% | 53.2% | 90.2% | 52.9% | 51.0% | +1.9 |
| **Mutiny tab vs SO FAR SO guitar (wrong on purpose)** | **12.8%** | **13.0%** | 94.0% | 42.4% | 33.7% | **+8.7** |

**The deliberately wrong pairing scored the best pitch separation of the four**, and was the only run the tool did not label NO DISCRIMINATING POWER.

| Metric | Correct over wrong | Usable |
|---|---|---|
| Map alignment | 5.75x | VALID |
| Attack recall | 5.70x | VALID |
| Attack precision | 0.94x | INVALID, wrong stem scores higher |
| Pitch separation | 0.28x | INVALID and inverted |

Attack-level accuracy IS established: 74.1% recall against 13.0% for a wrong stem. Pitch-level accuracy is NOT establishable on this material, proven by the negative control. The register-aware repair changed attack recall by 0.0 points.


### A correction protocol on the validated metric, built and refused

With pitch, ownership and attack-string disqualified, only attack support survives. A new tool, `bar_support_audit.py`, localises it per BAR rather than per note, since an onset detector systematically misses attacks inside a held distorted chord. It ships with a decoy control, the tab shifted 3.7 s. Two constructions, both refused:

| Construction | Real | Decoy +3.7s | Gain | Needs | Verdict |
|---|---|---|---|---|---|
| DTW fitted to the events it scores | 100.0% | 92.0% | +8.0 | +15.0 | Refused, circular |
| DTW fitted to all tracks, subset scored through it | 100.0% | 95.3% | +4.7 | +15.0 | Refused |

Cause: 718 onsets over 251 s is one every 0.35 s. The DTW map compresses any input into that distribution, so a tab shifted nearly four seconds still lands beside an onset. Density this high leaves no headroom.

**Terminal state.** Six measures run against controls. Two valid at song level and localising nothing: map alignment 5.75x, attack recall 5.70x. Four cannot license a change: pitch separation inverted, attack precision inverted, ownership -0.0115, attack-string -0.215, per-bar support +4.7 against +15.0. Nothing says the tab is wrong; these tools cannot tell on this material, and each says so itself.


### Replication on a second song, which refutes the material explanation

My Mirror Hates Me differs on every property that could explain Step 5: Standard E rather than Drop C, 114 bpm rather than 130, 1.59 onsets/s rather than 2.86.

| Pairing | Map align | Attack recall | Pitch agree | Pitch control | Pitch separation |
|---|---|---|---|---|---|
| My Mirror tab vs its own Rhythm Guitars | 64.4% | 66.3% | 55.8% | 52.2% | +3.6, no power |
| **My Mirror tab vs THE MUTINY's guitar (wrong)** | 48.7% | 44.6% | **63.3%** | 48.3% | **+15.0** |

**The wrong stem won again, by 4.2x.** Two songs sharing almost no properties, the same inversion. The material explanation is refuted; the defect is in the measure's construction. Attack recall stayed correctly ordered on both songs and remains the only metric that has never pointed the wrong way.


### The mechanism, found, and the gate that catches it

| Case | Anchors | Alignment | Unique times/attack | Longest collapse run | Clamped |
|---|---|---|---|---|---|
| Mutiny vs its own guitar | 32 | 73.5% | 0.940 | 66 | 6.0% |
| **Mutiny vs So Far So (wrong)** | 4 | 12.8% | 0.738 | **284** | **26.3%** |
| My Mirror vs its own guitar | 18 | 64.4% | 0.948 | 57 | 5.3% |
| **My Mirror vs Mutiny (wrong)** | 10 | 48.7% | 0.778 | **239** | **22.3%** |

A wrong pairing yields few anchors, so interpolation pins a quarter of the tab outside the anchor span and collapses up to 284 consecutive attacks onto one audio time. All compared against the same frame; when it is a sustained chord a large share of written pitches agree with it, while the shifted control falls on a sparser frame and collapses. That is the spurious separation.

**`beat_map.py` accepted both wrong maps** (gain +11.24 and +44.1 over its +8.0 threshold) because it judges alignment gain only. Nothing checked map health.

**Built and validated: `map_health_gate.py`.** Fails a map on clamped share above 12%, collapse run over 120, under 0.85 distinct audio times per attack, or under 85% span coverage. Validated 4 for 4: both correct pairings PASS, both wrong FAIL on all four criteria. A failing map still supports song-level alignment and attack recall.

Pitch agreement is not inherently inverted. It was fed maps that could not carry it, on pairings nothing screened.


### Pitch on healthy maps, measured three times

The wrong pairing that appeared to invert the metric **fails the health gate on all four criteria**, so it is disqualified as a control. Pitch measured only through maps that pass:

| Pairing | Map health | Attack recall | Pitch agree | Pitch control | Separation | Verdict |
|---|---|---|---|---|---|---|
| Mutiny tab vs its [R] channel | PASS | 74.1% | 53.4% | 51.0% | +2.4 | no power |
| Mutiny tab vs its [L] channel | PASS | 34.9% | 52.3% | 49.7% | +2.6 | no power |
| My Mirror tab vs its own guitar | PASS | 66.3% | 55.8% | 52.2% | +3.6 | no power |
| Mutiny tab vs So Far So (wrong) | FAIL, 4 criteria | 13.0% | 42.4% | 33.7% | +8.7 | disqualified |

**The settled reading supersedes the inversion story.** Pitch agreement is not inverted. On every healthy map its separation is +2.4, +2.6, +3.6, all labelled no power. The inversion was an artifact of degenerate maps, which the health gate now excludes. The duller, firmer fact: chroma agreement cannot tell a correct guitar transcription from an incorrect one on this material.

The [L] against [R] pair is the sharpest form: same song, same instant, both maps healthy, pitch 53.4% against 52.3%. **Attack recall separates them 2.1x, 74.1% against 34.9%.** Chroma cannot see a difference attack timing makes obvious.

**A per-staff ownership attempt failed and is reported rather than shipped.** Decomposing attack recall by staff returned 100.0% for both staves against both channels, ratio 1.00 everywhere. That is saturation: the DTW map is fitted to the tab attacks, so mapping them back through it puts every one on an onset by construction. The song-level figures come from the audit tool's own method and stand; the per-staff decomposition does not.


### The feature survey, all four candidates refuted

The obvious control, My Mirror's tab against The Mutiny's stem, fails the health gate on all four criteria and is disqualified. The one healthy-map wrong pairing is The Mutiny's own left channel: both maps pass, same song, same instant, attack recall orders them 2.13 to one.

Four candidates, sampled at 3068 attack times through each channel's own healthy map, each against a within-channel control shifted 3.7 s:

| Feature | [R] tab | [R] ctrl | [R] gain | [L] gain | R/L | Verdict |
|---|---|---|---|---|---|---|
| Onset strength envelope | 0.559 | 0.567 | 0.986 | 0.996 | 0.990 | Loses to its own control |
| Spectral flux ratio | 1.259 | 1.277 | 0.986 | 0.996 | 0.990 | Loses to its own control |
| Attack sharpness | 1.065 | 1.045 | 1.019 | 1.072 | 0.951 | Orders the channels backwards |
| Transient over sustain | 0.994 | 1.001 | 0.992 | 0.998 | 0.994 | Loses to its own control |
| **Attack recall, reference** | | | **74.1%** | **34.9%** | **2.13** | The target |
| Pitch agreement, the failure | | | 53.4% | 52.3% | 1.02 | Cannot tell them apart |

**All four continuous features fail, and the reason narrows the search.** A DTW map warps tab time onto onset time, so both real and shifted times end up beside onsets, and any continuous feature sampled at either returns the same distribution. Attack recall survives because it asks a discrete question, whether an onset exists there at all, which warping preserves while destroying continuous locality.

The searchable space narrows to discrete event matching. Continuous spectral features are ruled out on this material.


### The one hard fault is a false positive, and the tab is right

Playability needs no audio, so the audio blocker never applied. The tie state across bars 3 to 8:

| Bar / beat | String 4, moving line | String 3, the pedal |
|---|---|---|
| bar 3, beat 99 | s4f8 tie origin, p65 | s3f5 tie origin, p58 |
| bar 3, beat 100 | s4f8 tie dest | s3f5 tie dest |
| **bar 3, beat 101, flagged** | s4f10 tie origin, p67 | s3f5 tie origin, p58 |
| bar 4, beats 102-104 | s4f10, then s4f8 | s3f5 held |
| bar 4-5, beats 105-106 | s4f9 | s3f5 held |
| bar 7-8, beats 107-110 | s4f10 | s3f5 held, with s2f5 and s1f3 |

**String 3 fret 5 is a pedal held by an unbroken tie chain from bar 3 through bar 8** while the melody moves on string 4 through frets 8, 9, 10. One finger holds, another reaches: index and pinky across adjacent strings at position 5. The gate models it as four fingers inside four frets at once, the wrong model for a two-finger pedal and reach.

**Every span-reducing alternative breaks a tie.** The gate's own `s2f10 + s4f10` collides with the s2f5 tie held from bar 7, which is why it took the file from 1 fault to 5. `s2f10 + s3f14` needs string 3, the pedal. `s4f1 + s5f5` moves the pedal onto string 4, the moving line.

**So The Mutiny has zero genuine playability faults.** The correct action was to refute the flag, and nothing was changed. The gate needs a held-pedal exemption: when one note of a pair is inside a tie chain and the other is the only moving voice, judge the span against a two-finger reach rather than the flat four-fret limit.


### Discrete measures without a map, also refuted

Tab attacks placed at linear time from bpm alone, compared against the audio's onset stream as a sequence. No DTW, so neither circularity nor map degeneracy applies.

| Pairing | Kind | Tab attacks | Onsets | Density r | IOI similarity |
|---|---|---|---|---|---|
| Mutiny tab vs its own [R] | correct | 2582 | 718 | -0.004 | 0.381 |
| Mutiny tab vs its own [L] | other channel | 2582 | 292 | -0.126 | 0.246 |
| Mutiny tab vs its summed rhythm | correct | 2582 | 236 | -0.367 | 0.267 |
| Mutiny tab vs So Far So | wrong song | 2582 | 83 | -0.078 | 0.248 |
| Mutiny tab vs My Mirror | wrong song | 2582 | 456 | +0.042 | 0.269 |
| My Mirror tab vs its own | correct | 3326 | 456 | -0.129 | 0.166 |
| My Mirror tab vs The Mutiny | wrong song | 3326 | 236 | -0.522 | 0.112 |

| Measure | Correct mean | Wrong mean | Ratio | Verdict |
|---|---|---|---|---|
| Density correlation | -0.167 | -0.186 | 0.90 | No ordering |
| Inter-onset similarity | +0.271 | +0.210 | 1.29 | Weak, under the 1.5 bar |
| **Attack recall, reference** | **74.1%** | **13.0%** | **5.70** | The unique survivor |

Density correlation reaches zero even on correct pairings: the tab writes 2582 attacks where the detector finds 718, so the streams describe different things.

**Nine measures across two songs with controls on both sides.** Map-based continuous features fail. Map-free discrete measures fail. Map-based pitch has no power. Attack recall through a health-gated map is the unique survivor at 5.70x. The map is not the enemy; a degenerate map is.

### Playability

| Track | Notes | Hand skip | Same-string | Tie | Wide | Octave | Verdict |
|---|---|---|---|---|---|---|---|
| Lead Guitar | 674 | 7% | 0 | 0 | 0 | 0 | REVIEW TUNING_EVIDENCE |
| Rhythm Guitar | 2586 | 0% | 0 | 0 | 1 | 0 | **FAIL** IMPOSSIBLE_SPAN x1 |

`IMPOSSIBLE_SPAN bar 3.875, Rhythm Guitar. Written s3f5 s4f10, span 5, sounding [58, 67]. Held span 5 frets against a 4-fret hand at 130 bpm. Simplest legal alternative, span 0: s2f10 s4f10.`

### The prescribed fix regressed the file, so it was rejected

| Fault | Source | Candidate |
|---|---|---|
| IMPOSSIBLE_SPAN | 1 | 1 (moved to bar 7.0) |
| SAME_STRING | 0 | 1 |
| TIE_COLLISION | 0 | 1 |
| TIE_DROPPED | 0 | 1 |
| TIE_UNMATCHED | 0 | 1 |
| **total** | **1** | **5** |

Tier 1 pitch preservation passed, 3260 in and 3260 out, zero lost and zero invented. Tier 1b position passed. Every preservation gate stayed green while the file got worse.

Cause: the string-3 note anchored a tie chain. Moving it left a tie on string 3 with nothing struck there, and put fret 10 on string 2 where a tie reserved that string until beat 28. The span-5 voicing exists because a tie holds string 3, and the suggested alternative is computed per beat with no view of tie reservations.

Candidate kept as evidence at `~/Projects/_outputs/impossible-guitar-parts/the-mutiny-span-fix-REJECTED-broke-tie-chains.gp`, sha256 `c2c7710ee5488821`. Nothing promoted, nothing deleted.

## Vocal harmony: the direct answer

**No. Not one tab carries a second vocal staff.** Measured across 10 local `.gp` files and 17 live Songsterr revisions, counting any track whose name matches vocal, voice, sing, vox, lyric or harmon, cross-checked against MIDI program 66. Every tab holds exactly one `Vocals` staff. The old Lazarus holds none. Zero of 27 hold two.

**Harmony does exist, written as stacked notes on that single staff.** Five of ten stack notes inside the vocal part, up to three at once.

| Song | Vocal staves | Vocal notes | Stacked beats | Max stack | Reading |
|---|---|---|---|---|---|
| So Far So | 1 | 342 | 53 | 3 | Three-part harmony on one staff |
| Broken Satellites | 1 | 335 | 67 | 2 | Most stacked beats on the record |
| The Mutiny | 1 | 247 | 18 | 2 | Two-part in places |
| My Mirror Hates Me | 1 | 177 | 17 | 3 | Three-part in places |
| Not Too Much | 1 | 189 | 6 | 2 | Barely stacked |
| The Alligator | 1 | 178 | 0 | 1 | Monophonic, no written harmony |
| Endless Summer | 1 | 210 | 0 | 1 | Monophonic, no written harmony |
| Jackie | 1 | 139 | 0 | 1 | Monophonic, no written harmony |
| Asleep in the Trunk | 1 | 14 | 0 | 1 | 14 notes across 264 bars, the staff is empty |
| Lazarus (local) | 0 | 0 | 0 | 0 | No vocal staff; the live 2026-07-11 build has one |

There is no existing second staff to correct. Every harmony pass is either splitting a stack into its own staff, or building a harmony line from the vocal stem where the notation carries none.

## Note content, every staff

| Song | Bars | Total | Lead | Rhythm | Bass | Drums | Vocal | Notes/bar |
|---|---|---|---|---|---|---|---|---|
| Broken Satellites | 171 | 9071 | 924 | 2671 | 530 | 1410 | 335 | 53.0 |
| Not Too Much | 122 | 6885 | 811 | 3333 | 876 | 1676 | 189 | 56.4 |
| Endless Summer | 192 | 5639 | 1139 | 2778 | 595 | 917 | 210 | 29.4 |
| So Far So | 140 | 4941 | 579 | 1413 | 770 | 1837 | 342 | 35.3 |
| The Mutiny | 135 | 4906 | 674 | 2586 | 505 | 894 | 247 | 36.3 |
| My Mirror Hates Me | 134 | 4722 | 342 | 1270 | 612 | 2321 | 177 | 35.2 |
| The Alligator | 86 | 4134 | 698 | 1586 | 439 | 1233 | 178 | 48.1 |
| Lazarus | 138 | 3319 | 718 | 1392 | 1209 | 0 | 0 | 24.1 |
| Jackie | 102 | 3013 | 0 | 1241 | 581 | 1052 | 139 | 29.5 |
| Asleep in the Trunk | 264 | 173 | 0 | 33 | 101 | 25 | 14 | 0.7 |

**The local Asleep file is a shell.** 264 bars, 173 notes, a Lead Guitar staff holding zero. It clears every rule `preflight_import.py` owns, because that gate counts staff presence and role identity and never parses a single Beat. Built today to close it: `~/.claude/skills/impossible-guitar-parts/empty_staff_gate.py`, validated at exit 1 on Asleep with five faults and exit 0 on the other nine.

## The fix plan, in order

### Phase 0. Trust the source before touching anything

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 1 | Asleep local `.gp` is a 173-note shell | Re-pull `s5085156` rev 7798309 | `/songsterr-tab-guide`, `st_gpdiff.py` | Fixed-shape tools emit full-size empty files |
| 2 | Lazarus local has no vocal or drum staff | Re-pull `s5476396` | `/songsterr-tab-guide` | Judging a source by a stale local export |
| 3 | Jackie local is two months stale | Re-pull `s5418285` rev 7834599 | `/songsterr-tab-guide` | Same |
| 4 | Broken Satellites local carries `Copy` tracks | Re-pull `s5084035`, then weigh `s5965143` | `octave_copy_gate.py` | A lead 77.4% fret+12 copy reached Songsterr |
| 5 | Nothing measured file content | Run the new gate on every re-pull | `empty_staff_gate.py`, built today | Exit 0 proves a tool ran, never that output is good |

### Phase 1. Calibrate the guitar split where ground truth exists

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 6 | No beat-to-seconds map | Build and validate on The Mutiny | `/composite-stem-alignment`, `beat_map.py` | A map beating a random control can still be seven bars wrong |
| 7 | Two guitars on one staff | Split by register and pitch against real `RhythmGtr [L]`/`[R]` | `attack_string_evidence.py`, `register_evidence.py`, `ownership_audit.py` | Splitting by panning, when 19-56% of notes are in BOTH channels |
| 8 | Lead tacet while rhythm covers | Co-activity and role-character audit | `staff_role_audit.py` | A lead with no events from bar 57 |
| 9 | Unplayable voicings | Five-tier playability grade | `impossible_gate.py` | 1111 unreachable chords shipped |
| 10 | A rebuild silently losing notes | Pitch preservation first, skip percentage last | `/impossible-guitar-parts` tier order | A processing-order bug deleted 32 notes at pitch 38 |

### Phase 2. Bass

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 11 | No bass staff checked against a bass stem | Per-beat fundamental, compared bar by bar | `/audio-stems-to-midi`, crepe and yin | Tab MIDI encodes fingering rather than sounded harmony |
| 12 | Broken Satellites bass tuning conflict | Resolve after re-pull, the live tab is Drop C | `empty_staff_gate.py` then `octave_copy_gate.py` | Treating a local edit as a source defect |

### Phase 3. Vocals, which is the harmony question

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 13 | Five songs write harmony as stacks | Verify each stack against the vocal stem before splitting it out | `/audio-stems-to-midi`, `/five-stem-song-analyst` | A pitch in one stem never proves which part sang it |
| 14 | Four songs write a monophonic vocal | Check the stem for harmony the notation omits, add a staff only where the stem carries one | `/audio-stems-to-midi` | Inventing a part the evidence does not support |
| 15 | Asleep has 14 vocal notes over 264 bars | Covered by the Phase 0 re-pull, then re-measure | `empty_staff_gate.py` | Shipping a staff that exists and is empty |
| 16 | No gate for vocal-harmony fidelity | Build one after Phase 3, on the `octave_copy_gate.py` model | GAP, nothing covers this | One mention means a recurring class |

### Phase 4. Unblock the two songs with no guitar evidence

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 17 | Asleep and Jackie are 4-stem only | Re-separate with the Moises role split | Moises Guitar parts module | A pitch inside `other` proving nothing about the guitar |
| 18 | Asleep 3/4 against 4/4 | Settle against audio on the validated beat map | `/composite-stem-alignment` | Correcting 264 bars against the wrong grid |
| 19 | Jackie has one guitar staff | Decide by pan bimodality on the re-separated stems | `/impossible-guitar-parts` guitar count | Counting guitarists by stereo width |

### Phase 5. Put the corrections back

| # | Issue | Fix | Skill or gate | Past mistake it guards |
|---|---|---|---|---|
| 20 | An import deleting parts the existing tab holds | Preflight every upload, refuse on role drop | `/songsterr-upload`, `preflight_import.py` | 72 files shipped with no vocal at all |
| 21 | A vocal uploaded as a guitar program | Keep program 66 and the sax type, classify by name | `preflight_import.py` | The vocal filed under horns by a program-first rule |
| 22 | Upload order losing audio sync | YouTube first, then import, then wait for SAVED | `/songsterr-upload` | Importing first produces a silent tab |

**One song per pass.** Phase 0 is the only step running across all ten at once, since it is a re-pull and a measurement. Everything from Phase 1 onward runs one song at a time, starting with The Mutiny.

## Verdict

| # | Song | Verdict | GP guitars | GP vocal | Isolated gtr stem | Bars | Blocker |
|---|---|---|---|---|---|---|---|
| 1 | Asleep in the Trunk | BLOCKED | 2 | yes | none | 264 | local file is a 173-note shell with a zero-note Lead staff; also 4-stem FLAC |
| 2 | The Alligator | READY | 2 | yes | lead + rhythm | 86 | has `audio_truth.gp3` prior |
| 3 | The Mutiny | READY, best first | 2 | yes | Rhythm L + R + Solo | 135 | only song with true L/R splits |
| 4 | So Far So | READY | 2 | yes | Rhythm + Solo + Other | 140 | private s5110187 is Drop C; public s4938058 is a different Drop D arrangement |
| 5 | My Mirror Hates Me | READY | 2 | yes | Rhythm + Solo + Other | 134 | Standard E, the only one |
| 6 | Endless Summer | READY | 2 | yes | lead + rhythm | 192 | none |
| 7 | Lazarus | RE-PULL FIRST | 2 | yes, live | lead + rhythm | 138 | local file is a stale 3-track May export; s5476396 has 5 tracks with Vocals + Drums |
| 8 | Not Too Much | READY | 2 | yes | Rhythm + Solo + Other | 122 | D Standard rather than Drop D |
| 9 | Broken Satellites | RE-PULL FIRST | 3 + 1 dupe local | yes | Rhythm + Solo + Other | 171 | copy tracks are a LOCAL artifact; live s5084035 is a clean 5-track Drop C |
| 10 | Jackie | BLOCKED | 1 | yes | none | 102 | 4-stem FLAC, single guitar staff |

## Songsterr registry

| Song | ID | HTTP | Tempo | Tuning | Time |
|---|---|---|---|---|---|
| Asleep in the Trunk | s5085156 | 200 | 173 | Drop C | 3/4 |
| The Alligator | s5083283 | 200 | 120 | Drop C | 4/4 |
| The Mutiny | s5083529 | 200 | 130 | Drop C | 4/4 |
| So Far So | s5110187 | 403 | 130 | Drop C | 4/4 |
| My Mirror Hates Me | s5418315 | 200 | 114 | Standard E | 4/4 |
| Endless Summer | s5083970 | 200 | 140 | Drop C | 4/4 |
| Lazarus | s5082702 | 200 | 117 | Drop C | 4/4 |
| Not Too Much | s5084025 | 200 | 85 | D Standard | 4/4 |
| Broken Satellites | s5084035 | 200 | 116 | Drop C | 4/4 |
| Jackie | s5418285 | 200 | 144 | Drop C | 4/4 |

Songsterr does not display a key field. Key claims come from the stems or from Brandon's ear. The Alligator is resolved to G major at high confidence off a three-stem consensus; So Far So and Broken Satellites remain open.


## Live Songsterr versus the local export

Read from `songsterr.com/api/meta/<id>/revisions` on 2026-08-17. The canonical folder was exported 2026-06-02/03 and Songsterr has moved since.

| Song | ID | Latest rev | Built | Source | Tracks | Local? |
|---|---|---|---|---|---|---|
| So Far So | s5110187 | private | n/a | n/a | 5, Drop C | yes |
| So Far So | s4938058 | 6458676 | 2026-04-24 | AI | 5, Drop D | no |
| The Alligator | s5083283 | 6647001 | 2026-05-05 | AI | 5 | yes |
| The Alligator | s2132594 | 2834004 | 2025-08-25 | AI | 4 | no |
| The Mutiny | s5083529 | 6647326 | 2026-05-05 | AI | 5 | yes |
| Asleep In The Trunk | s5085156 | 7798309 | 2026-07-08 | Editor, hand-built | 5 | stale copy |
| Asleep In The Trunk | s4937622 | 6458071 | 2026-04-24 | AI | 5 | no |
| My Mirror Hates Me | s5418315 | 7085816 | 2026-05-29 | AI | 5 | yes |
| Endless Summer | s5083970 | 6647906 | 2026-05-05 | AI | 5 | yes |
| Lazarus | s5082702 | 6646409 | 2026-05-04 | GP import | 3 | yes, the stale one |
| Lazarus | s5476396 | 7834445 | 2026-07-11 | Editor, hand-built | 5, Vocals + Drums | no |
| Not Too Much | s5084025 | 6647986 | 2026-05-05 | AI | 5 | yes |
| Broken Satellites | s5084035 | 6648000 | 2026-05-05 | AI | 5, clean | stale copy |
| Broken Satellites BC version | s5965143 | 7791000 | 2026-07-08 | AI | 5 | no |
| Jackie | s5418285 | 7834599 | 2026-07-11 | Editor, hand-built | 4 | stale copy |
| Surgery | s5071338 | 6631358 | 2026-05-04 | AI | 5 | not an album track |
| The Truth About Cows | s5097434 | 6665514 | 2026-05-06 | AI | 5 | not an album track |

**Three local files are stale.** Lazarus, Asleep In The Trunk, and Jackie carry Editor revisions from 2026-07-08 and 2026-07-11. Lazarus matters most: `s5476396` holds Lead Guitar, Rhythm Guitar, bass, drums, and a Vocals staff at program 66.

**The Broken Satellites copy tracks were never on Songsterr.** The live tab returns five clean tracks with a Drop C bass at `41 36 31 24`. The duplicates and the five-string tuning exist only in the local file.

**Two artist pages.** `shiner-tabs-a86009` and `shiner-allen-epley-josh-newton-paul-malinowski-jason-gerken-tabs-a829768`. The Mutiny, Endless Summer, Broken Satellites, and the new Lazarus live on the second one.

## Four traps

1. **Three numbering schemes.** Canonical folder `03_` is Broken Satellites, stem folder `03 -` is The Mutiny. Match on title, and ignore the leading digits entirely. Album order comes from `sources.yaml` and the stem prefixes, which agree.
2. **Broken Satellites copy tracks, local only.** `Rhythm Guitar Copy` plus a second duplicate track, `Copy`, and a 5-string standard bass under a Drop C guitar. None of it is on Songsterr, so the duplication happened locally. Run the octave-copy gate on the local file and re-pull the live tab as reference.
3. **Asleep in the Trunk time signature.** Songsterr says 3/4, the MIDI metadata and book cards say 4/4. Unresolved, and it changes every bar number across 264 bars.
4. **No guitar evidence for two songs.** Asleep and Jackie were separated to four stems. A pitch in `other` does not prove the guitar played it. Re-separate to six stems first.

## Every vocal staff is a sax in disguise

All nine vocal tracks carry MIDI program 66 on a six-string standard-tuning staff, the known Songsterr AI shape. Classify by track name and ignore the program.

## Queue

1. The Mutiny: real L/R guitar files, so the two-guitar split validates against ground truth
2. The Alligator: has a stem-corrected prior and a resolved key
3. Not Too Much, So Far So, My Mirror Hates Me, Endless Summer
4. Lazarus: re-pull `s5476396` first, the vocal and drum staves exist there
5. Broken Satellites: re-pull the live tab, choose between `s5084035` and the 2026-07-08 `s5965143`
6. Asleep in the Trunk, Jackie: re-pull the 2026-07 hand-built revisions, re-separate to six stems, settle Asleep's time signature

## Paths

- Tabs, GP, charts, lyrics: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/_canonical_2026-06-04/songs/<NN_slug>/`
- Stems, all ten: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/`
- Stems, eight, redundant: `/Volumes/T7 Shield/Full wav files for music books are here/`
- Keys and method trails: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/keys_resolved.yaml`
- Songsterr audit: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/SONGSTERR_AUDIT_2026-06-03.md`
- Stem vs MIDI disputes: `/Volumes/T7 Shield/BandBooks/BELIEVEYOUME/STEM_VS_MIDI_AUDIT_2026-06-03.md`

## Skills this feeds

`/impossible-guitar-parts`, `/composite-stem-alignment`, `/songsterr-tab-guide`, `/songsterr-upload`, `/five-stem-song-analyst`, `/audio-stems-to-midi`
