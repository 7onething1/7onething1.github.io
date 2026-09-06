# Zappa Program Scope

The whole program on one page, written because a handoff narrowed the project to a single song and
the receiving chat inherited no outline. Every count below was read live from `songsterr.com/api`
on 2026-09-06.

Live page: https://7onething1.github.io/zappa-program-scope/

## 0. The plan, corrected 2026-09-06

**CORRECTED 2026-09-06.** Phase 1 was reported complete. An account-wide sweep then found a
seventeenth affected song with no restore at all, `s412170` Trouble Every Day (Live). See section
0e. For the sixteen the ledger covered, all already carry a restore revision, and every one has its pre-sweep baseline on disk. Fifteen
restores sit in the moderator queue and one has published. Sending a second restore would stack a
duplicate behind one a moderator has yet to read, which is the failure already visible on Uncle
Meat.

| # | Phase | What it does | Upload method | State |
|---|---|---|---|---|
| 1 | Ghost restore | Put back every stripped parenthesised notehead against the pre-sweep baseline | Revision on the original tab | uploaded, awaiting moderators |
| 1b | Rejection watch | Rebuild from the on-disk baseline for any restore a moderator blocks | One replacement revision, never a stack | standing |
| 2 | Rebuild to match transcriptions | Correct each tab against the printed chart, bar by bar | **Create and edit a copy of the current tab** | 9 charts idle, 7 songs |
| 3 | Audio-evidence repairs | Add textures proven from isolated kit stems | Copy of the current tab | 2 built on Watermelon |

**The upload rule that separates phase 1 from phase 2.** A ghost restore repairs damage this
account caused, so it belongs on the original tab as a revision. A transcription-matched rebuild is
a different reading of the music, so it uses create and edit a copy of the current tab. That keeps
another transcriber's work intact and puts our version beside it.

## 0b. Phase 1 audit: baseline and restore, per song

Zero gaps. Baselines under `~/Projects/_outputs/songsterr-zappa-paren-fix/`.

| song id | title | flags | baseline on disk | restore | state |
|---|---|---:|---|---|---|
| s35881 | Watermelon In Easter Hay | 1,317 | PRESWEEP-r7715683.gp | r8908034 | held |
| s35886 | Muffin Man | 578 | PRESWEEP-r7716657.gp | r8906880 | held |
| s620961 | Drowning Witch | 419 | PRESWEEP-r2606944.gp | r8908109 | held |
| s35870 | Montana | 317 | PRESWEEP-r7294223.gp | r8907028 | held |
| s1105085 | The Black Page | 173 | RESTORE-r7108692.gp | r8907247 | held |
| s35878 | Nanook Suite | 168 | RESTORE-r7807785.gp | r8907360 | held |
| s35865 | Nanook Rubs It | 168 | RESTORE-r4719269.gp | r8907423 | held |
| s412178 | Inca Roads | 165 | RESTORE-r7750859.gp | r8907511 | held |
| s68248 | Carolina Hard-Core Ecstasy | 144 | PRESWEEP-r593836.gp | r8908182 | held |
| s35884 | Oh No | 141 | PRESWEEP-r7494834.gp | r8908239 | held |
| s68246 | Alien Orifice | 86 | PRESWEEP-r7636083.gp | r8907689 | held |
| s35887 | What's New In Baltimore? | 59 | PRESWEEP-r8555291.gp | r8908276 | held |
| s748459 | Fembot In A Wet T-Shirt | 57 | PRESWEEP-r8742638.gp | r8907601 | held |
| s20690 | Uncle Meat (YCDTOSA Vol. 2) | 24 | PRESWEEP-r24054.gp | r8909627 | held |
| s749523 | Catholic Girls | 16 | PRESWEEP-r1971732.gp | r8907778 | held |
| s5820647 | Zomby Woof (Mothers) | 10 | RESTORE-r7605020-presweep.gp | r8906157 | landed |

## 0c. What the moderators actually said

Exactly two revisions on this account carry a moderator report, and both are the sweep's own
deletions rather than any repair.

- Keep It Greasey s604777, r8768457, 629 flags. Report kind `unclear`: "It probably did not make
  the tab more accurate to the original performance." Blocked.
- Zoot Allures s35883, r8769199, 53 flags. Same report, same wording. Blocked.

Both tabs kept every ghost flag because the block landed before publication. Across all 48
revisions this account holds on Zappa tabs, no restore has drawn a report and none has been
rejected.

## 0d. Disk verification: the restores carry the notation, not just the wording

The revision description is self-reported and the submit box does not always get filled in, so a
description claiming a restore proves nothing. Every `.gp` in the repair tree was re-counted on
2026-09-06, walking `Beat -> Notes` references rather than the file's Notes pool.

**The counting trap.** GPIF `<Note>` elements are shared definitions. Inca Roads holds 14 Note
elements carrying `<AntiAccent>` and those 14 are referenced 174 times across beats. A grep of the
raw XML returns 14 and reads as near-absence. That is how
`reference_inca_roads_baseline_gp_is_post_sweep` came to declare a good pre-sweep baseline useless.
Corrected 2026-09-06.

| song id | title | baseline | after strip | restore file | removed | verdict |
|---|---|---:|---:|---:|---:|---|
| s35881 | Watermelon In Easter Hay | 1,333 | 16 | 1,333 | 1,317 | confirmed |
| s35886 | Muffin Man | 613 | 35 | 613 | 578 | confirmed |
| s620961 | Drowning Witch | 496 | 77 | 496 | 419 | confirmed |
| s35870 | Montana | 574 | 257 | 574 | 317 | confirmed |
| s1105085 | The Black Page | 173 | none on disk | 173 | 173 | restore matches baseline |
| s35878 | Nanook Suite | 171 | none on disk | 171 | 168 | restore matches baseline |
| s35865 | Nanook Rubs It | 168 | none on disk | 168 | 168 | restore matches baseline |
| s412178 | Inca Roads | 174 | none on disk | 174 | 165 | confirmed vs live JSON |
| s68248 | Carolina Hard-Core Ecstasy | 144 | 0 | 144 | 144 | confirmed |
| s35884 | Oh No | 141 | 0 | 141 | 141 | confirmed |
| s68246 | Alien Orifice | 97 | 11 | 97 | 86 | confirmed |
| s35887 | What's New In Baltimore? | 59 | 0 | 59 | 59 | confirmed |
| s748459 | Fembot In A Wet T-Shirt | 59 | 2 | 59 | 57 | confirmed |
| s20690 | Uncle Meat (YCDTOSA Vol. 2) | 84 | 60 | 84 | 24 | confirmed |
| s749523 | Catholic Girls | 16 | 0 | 16 | 16 | confirmed |
| s5820647 | Zomby Woof (Mothers) | 10 | 0 | 10 | 10 | confirmed |

- **Every restore file equals its own baseline exactly**, on all sixteen songs.
- **Twelve songs keep a post-strip export on disk and all twelve confirm the damage number**
  independently of any description.
- **Montana's damage is lane-visible.** Baseline carries Ralph Humphrey 212 and Percussion 105,
  together the claimed 317, and the published export carries zero on both staves.
- **Four songs keep no post-strip export.** Inca Roads was settled against the live part JSON, which
  returns Chester Thompson 165, Frank Zappa 6 and Ruth Underwood 3, matching the disk file exactly.

**One limit.** This census reads markings attached to a Note. A staccato dot attaches to a Beat in
GPIF, so the Montana claim that 317 ghosts were re-written as staccato dots is outside what this
count can see.


## 0e. The coverage gate: sweep the account, never the ledger

Every earlier inventory was assembled from songs that already had a repair in flight, so a damaged
tab with no repair was invisible. Sweeping all **328 tabs** under artistId 5912 for revisions
authored by this account returned **19 songs and 45 revisions**, and one had never been counted.

| song | revision | what it did | state |
|---|---|---|---|
| `s412170` Trouble Every Day (Live) | `r8766285` | removed 9 ghosts, altered 11 velocities | damage live, restore built and held |
| `s604777` Keep It Greasey | `r8768457` | would have removed 629 | blocked, tab intact |
| `s35883` Zoot Allures | `r8769199` | would have removed 53 | blocked, tab intact |

**Authorship is not damage.** Zomby Woof `s412162` holds 9 of our revisions and none is an
unrepaired strip. Each revision was classified by censusing ghosts against the revision preceding it.

**Two open limits.** 22 tabs return an empty revision history and stay unresolved after a retry, all
in the `s1870xx` range. The sweep covers artistId 5912 only, so `s5820647` and `s6822181` were
checked directly.

### s412170, and why totals could never have found it

| revision | date | author | ghosts on the percussion staff |
|---|---|---|---|
| `r279371` | 2016-09-03 | enikey87 | 9 |
| `r8766285` | 2026-08-29 | our strip | 0 |
| `r8815000` | 2026-09-01 | Kirill, live today | 3 |

Six ghosts are missing from the public tab now, all crash (fret 49) at bar 67 beats 4 to 9, and all
six notes still exist. **The velocity damage is larger than the ghost damage.** Our strip changed 11
beat velocities, Kirill repaired 5, and the remaining 6 govern **784 of 807 effective beat slots**,
because the `f` at bar 1 slot 6 sets the running dynamic for the whole track.

**Built and verified, upload held.** Built onto the live `r8815000` export with copy-on-write: Note
225 has 31 placements across 26 bars and was cloned; Beat 443 sits at two slots wanting different
dynamics and was cloned. Independent re-read shows 6 ghost false to true, 0 ghosts lost, 0 other
note-signature changes anywhere, 0 changes on other tracks, 0 dynamic mismatches against the author
across 807 slots. `preflight_import.py` refuses on `GRID notated 134.0s against a 141.0s record`.
The unmodified live base fails identically and the build is timing-neutral, so the fault is
inherited. There is no GRID override flag, so the upload waits on Brandon.


## 1. The program

Frank Zappa drum transcriptions on Songsterr are being repaired against professional printed charts
and against isolated drum stems. Four surfaces. A notation sweep on 2026-08-29 and 2026-08-30
damaged twenty community tabs and that damage is being undone. Each tab is being checked bar by bar
against transcriptions by Ryan Brown, Daniel Bedard, Todd Bishop, Pete Sweeney and the Drumnet
charts. Isolated kit stems are being used to find textures the tabs omit. Underneath sits a coverage
question, which songs have a drum reading of the album take at all.

## 2. Six workstreams

1. **Ghost-note restoration.** 3,842 flags removed from other people's tabs. 17 revisions held.
2. **Ghost adjudication.** Whether a flag on ride, hat or tambourine carries the quiet-snare
   meaning. Watermelon 1,316 on ride, Oh No 141 on closed hat, Carolina 144 on tambourine.
3. **Tab against printed chart.** Six songs measured. Nine charts idle across seven songs.
4. **Audio forensics per song.** Foot-pedal hi-hat, snare rebound texture, cymbal saturation,
   grid desync.
5. **Coverage inventory.** 37 songs across three albums. Published.
6. **Process gates.** Song locking, chat ceilings, drift measurement, handoff shape.

## 3. Ghost damage, lane-aware

1,549 flags sat on snare and 2,293 on other lanes. A ghost on a snare is unambiguous and a ghost on
a ride is a different question. Root cause had three layers: a house rule from
`stems-to-guitar-pro-drums` applied to published community work, a search for `<Ghost>` returning
zero when GPIF spells it `<AntiAccent>Normal</AntiAccent>`, and a preservation audit that measured
pitch, rhythm and position while articulation sat outside it.

## 9. Findings withdrawn, never cite again

- The Watermelon alignment at offset 33.00 s and scale 1.020, scoring 64% within 50 ms against a
  58% chance baseline.
- The Mann-Whitney z = -0.40 no-dynamic-difference result resting on that alignment.
- The claim that the 1,316 Watermelon ride flags are a proven intentional accent grid.
- The rebound-coincidence line, below chance at every picker setting tested.
- The claim that a 23.3 s duration gap is a normal lead-in or tail on a YouTube upload.

## 13. What the next chat does first

1. Read this page before locking anything.
2. Re-read moderation status live. Precedent turnaround on r8769058 was about 58 hours.
3. Lock one song id and write the lock line out loud.
4. Send no second ghost restore.
5. Ship Watermelon Repair 1, the foot-pedal hi-hat, against PRESWEEP-r7715683.gp, as a copy of the
   current tab.
6. Do not ship a deletion revision against the 1,123 unexplained ride flags.
7. When that song closes, re-lock the next Zappa id inside the same chat and announce it.

---

Built 2026-09-06. Song metadata and revision status read live from
`songsterr.com/api/meta/<songId>` and `songsterr.com/api/meta/<songId>/revisions` the same day.
Source: `~/Projects/drwu-htmls/public/zappa-program-scope/`
