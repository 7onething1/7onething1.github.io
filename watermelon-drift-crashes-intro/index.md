# Watermelon: drift, crashes, intro, and two headlines I withdrew

Read-only audit, 2026-09-08. Songsterr `s6857183`, revision `r8972739`, Watermelon In Easter Hay, Vinnie Colaiuta. No Guitar Pro file and no Songsterr tab was modified.

Live: https://7onething1.github.io/watermelon-drift-crashes-intro/

Brandon asked what the open Watermelon chats say about three complaints: drift, missing crashes, a missing intro. Two of the three turned out to be my own measurement errors. The wrong numbers stay on this page next to what killed them.

## What stands and what fell

| Claim | Verdict |
|---|---|
| The .gp carried a flat 56.000 bpm map, peak error 4.26 s at bar 65 | **Stands.** Fixed to 0.006 s worst residual |
| Crash lane is stamped on every even bar, nothing after bar 96 | **Stands** |
| 132 crashes found and not shipped | **Stands** |
| Bar 105 short a quarter on five tracks | **Stands** |
| Tom lane split, roughly 150 notes | **Stands** |
| Drums enter on bar 2, and bar 1's written crash is unsupported | **Stands** |
| Songsterr fires 12.50 s early at bar 1 | **Withdrawn** |
| Bars 104 and 105 drift, 7 of 105 bars off by over a second | **Withdrawn** |
| The tab is missing a 36.87 s intro, 6.8 percent of the record | **Withdrawn** |
| 43 bars on the Zappa track overfill their meter | **Withdrawn** |

## Withdrawal 1: the sync error

I published −12.50 s at bar 1 and seven bars off by more than a second.

**Cause, traced.** Songsterr returns **twelve** video-sync entries for this tab. The primary is the entry whose `feature` field is null. I loaded the list and took `[0]`, which is `VZS-QuMBZdk`, one of **seven alternative uploads** whose first sync points spread across **28.02 s**, from 21.42 to 49.44. Each YouTube upload carries its own lead-in, so measuring one against my stem clock produces a large head difference by construction.

**The primary, `XACocSRTFJY`, measured properly:**

| Measure | Alternative I wrongly used | Primary |
|---|---|---|
| median absolute error | 0.010 s | 0.030 s |
| worst bar | 12.530 s at bar 1 | 0.800 s at bar 1 |
| bars off by over 1.00 s | 7 of 105 | **0 of 105** |
| bar 104 / bar 105 | −1.05 / −1.84 s | **−0.030 / +0.040 s** |

The 0.800 s at bar 1 matches the 0.818 s the sibling session measured independently, and that session rendered the 8:42 master, read the bar by eye, and withdrew it. **The Songsterr sync is clean.**

## Withdrawal 2: the missing intro

**The masters differ and that is the whole gap.** Songsterr syncs to the 8:42 edit at 522.436 s. The stems are the 9:05 Joe's Garage master at 545.267 s. Same performance, 23.34 s cut from the head. The primary video's offset measured here is −23.360 s, agreeing to 18 ms. The tab is not missing a head. The stems carry one the tab's master does not have.

The head is near-silence regardless. The `other` stem's 45.1 percent is one transient at 17.71 s, and across the whole 36.87 s it sits above 5 percent of its in-song peak for **0.12 seconds in total**.

**What survives.** The drums enter on bar 2. Kick first crosses 10 percent at 41.21 s and cymbals at 41.24 s, and bar 2 starts at 41.25 s, so both are that downbeat landing 40 ms inside bar 1's window. Trim 0.30 s off bar 1's end and the kick reading falls from 48.62 percent to **0.04 percent**. Bar 1 is silent, and the tab writes a crash into it measuring **8.27 percent** against the 33 percent floor.

## Withdrawal 3: the 43 overfilled bars

My meter walk read 4.19 of 4.00 quarters at bar 10 and 5.40 of 5.00 at bar 87 on the Zappa track. All 43 flagged bars carry `<GraceNotes>` beats, and a grace note consumes no bar time. The walker counted grace rhythms as real duration.

## Drift, the part that was real

The tab held one tempo automation at a flat 56.000 bpm for a performance that moves, peaking at **4.26 s of error at bar 65**. Session `a13ba186` built a 105-value per-bar map from the metronome stem. Verified here: after removing a constant offset the worst residual across all 105 bars is **0.006 s at bar 43**, and the tab span of 501.4 s equals the recording's bar-1-to-bar-105 span to the millisecond.

## Missing crashes, which stands

The drum staff holds 51 crash notes on bar 1, then every even bar from 4 through 96, plus bar 55. Nothing after bar 96, so the coda carries none. One Crash 2 in the whole tab, and no china, splash or ride bell.

Session `c6454a97` wrote `crash_find.json`: **132 candidates across 74 bars**, bar 2 through 98, against a null of 82, so 1.61x chance.

| File | Drum notes | Crash 1 | Crash 2 | Tempo automations |
|---|---|---|---|---|
| `BASE-r8972739-live-head.gp` | 2834 | 50 | 1 | 1 |
| `TEMPOFIX-on-r8972739-Brandon-edit.gp` | 2834 | 50 | 1 | 105 |

Identical drum histograms. The upload carries tempo and nothing else.

## Bar 105 and the tom split, both standing

Bar 105 is short exactly one quarter on **five tracks**, not one: Cuccurullo twice, Tubular Bells, Glockenspiel, Colaiuta. Stems read kick 10.5 percent and hat 19.4 percent of their bars 1-97 peak, under the 33 percent floor, so the fill is a rest. Recorded as F7.

Tom lanes, roughly 150 notes apart: local HANDS reads 41:1 43:44 47:4 48:81 50:30, live r8972739 reads 41:62 43:0 47:111 48:14 50:0. The live tab uses only the two lowest lanes. The upload adopts the live reading.

## The tom split: settled half way

The standing record says per-tom identity is closed because pitch medians of 90.7 to 95.6 Hz overlap. That was measured on one bar and it does not hold across the tab.

The 185 measured tom strokes separate into **three pitch clusters at 80.5, 94.0 and 119.6 Hz**. Centre separations 13.5 and 25.7 Hz against within-cluster spreads of 7.1, 3.1 and 12.6 Hz, so **separation-to-spread ratios of 1.90x and 2.04x**, both clearing the 1.5x floor. Variance explained rises from 64.1 percent at two clusters to 77.0 percent at three. The toms are separable.

**What stopped a verdict.** Deciding which lane scheme the clusters back needs each stroke joined to the note written at that instant. `tom_f0.json` is a proposal grid rather than a read of the written file: rows carry their own `midi` and a `brandon` flag, bars are zero-based against the files' one-based, and positions sit on a different subdivision. After correcting the bar base, **12 of 185 strokes match HANDS and 11 of 185 match the live head**. A 6 percent join cannot reassign 150 notes. Settling it needs f0 re-extracted at the written note positions.

## A peer correction, verified, and it found a hole in our own safety rule

The Keep It Greasey session sent a units trap from its own file. Tested here rather than adopted.

| note | rows in the plan | beat-references | instances file-wide | verdict |
|---|---|---|---|---|
| 419 | 13 | 13 | **193** | shared |
| 425 | 2 | 23 | **46** | shared |

Comparing 13 rows against 13 beat-references reads note 419 as exclusive. It is not. Both notes in the 15-row plan are shared definitions, where the ledger named only one.

**The hole.** Our rule says a plan whose rows repeat one id is editing a shared definition. Note 419 repeats thirteen times so the rule catches it. Note 425 appears twice and carries 46 instances, so the rule misses it. Repetition inside a plan is a symptom of sharing rather than a test for it.

**The corrected pre-flight.** Compare each plan note's row count against its instance count across the whole file, both in the same unit, and check the instance total against an independently known figure. Here that is 2,784 drum instances.

**The ledger's damage figure was off.** Re-censusing the quarantined file against its parent: 179 instances lost, which the ledger has right, spanning **90 distinct bars rather than 79**. The 15 intended removals sit inside that 179, so pure collateral is **164 instances across 85 bars**, split 177 snare and 2 high floor tom. The kept file removes exactly 15 with 0 added.

**Beat 899 is on the drum staff**, all 176 referencing voices on track 8. The peer withdrew a comparison against a Keep It Greasey beat at 739 voices, which sits on a guitar track. That comparison never appeared in this ledger, so nothing needed changing there.

## Queue

- `q-2026-09-08-6f84a3` intro gap, **withdrawn**, master mismatch
- `q-2026-09-08-a45b41` sync points, **withdrawn**, wrong video entry
- `q-2026-09-08-613ab9` 132 crashes unwritten, open
- `q-2026-09-08-629fc2` tom lane split. Toms ARE separable at 1.90x and 2.04x, correcting the standing closed-layer claim. Blocked on the join: `tom_f0.json` is a proposal grid and only 12 of 185 strokes align with the written notes
- `q-2026-09-08-70d3f0` bar 105, measured here, write held
- `q-2026-09-08-c9d5f7` 202 disputed ride notes, open
- `q-2026-09-08-85d746` playability audit and upload, held by the sibling session
- `q-2026-09-08-b08085` bar 55 beat 2, blocked at a named layer: the Moises toms stem is one channel, pitch medians 90.7 to 95.6 Hz overlap, best pan pair 0.73x against the 1.5x floor, and no isolated drum release exists for Joe's Garage

## Sources

`metromap.json` (session a13ba186). `/Users/brandonchavez/vp.json`, `crash_find.json`, `offset_lossless.json` (session c6454a97). The Moises stem set at `/Users/Shared/206 Watermelon in Easter Hay-E major-112bpm-442hz/`. Direct GPIF census of five Guitar Pro files. Detector spec frozen to the project standard: 1024-point Hann, 256 hop, 44.1 kHz, positive spectral flux in a named band, circular-shift null at 200 draws. Raw figures in `data.json`.
