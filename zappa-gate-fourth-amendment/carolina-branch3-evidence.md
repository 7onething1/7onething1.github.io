# Carolina Hard-Core Ecstasy s68248 — branch-three evidence, 2026-09-06

Worked while revision `r8908182` sits on moderation. None of this needs an upload.

## 0. Two claims in the queue item were wrong on disk

| Queue item said | Measured 2026-09-06 |
|---|---|
| "the professional drum archive is on the iMac" | It is on THIS MacBook: `~/Projects/_outputs/zappa-drum-sources/`, **1,346 files**, 12 source folders |
| "no professional transcription covers this song" | True for DRUMS only. Kasper Sloots transcribes Carolina **three times**: 1975 Bongo Fury, 1976 FZ:OZ, 1984 YCDTOSA Vol. IV |

## 1. Lane-by-lane audit against printed transcriptions

**Drum coverage stands at zero and the original claim survives for drums.** DRUM Magazine's
Ryan Brown set covers 7 songs, Pete Sweeney's `Vinnietranscriptions.pdf` covers Dong Work For
Yuda and Keep It Greasy, Drumnet was never recovered. None reach Carolina.

## 2. Source disagreements reconciled

A new independent source entered the picture today. Sloots's 1975 transcription was missing
from the local mirror and was fetched from `zappa-analysis.com` (http 200):

- `carolina-hard-core-ecstasy-1975.htm` (1,375 B) + two notation scans, 875x362 and 828x449
- `carolina-hard-core-ecstasy-1975.mid` (3,550 B), format 1, 8 tracks, 96 ticks/quarter

Parsed from that MIDI: **4/4 throughout, 86.4 BPM, 8 bars, 399 note-ons.**

**It votes on the opening 8 bars alone.** It carries keyboard, bass and melody, and it is not a
drum chart, so it settles tempo and meter and says nothing about the kick lane.

| Reading | Meter | Opening tempo |
|---|---|---|
| Sloots 1975, deposited I-depot The Hague, spring 2017 | 4/4 | **86.4 BPM** |
| Songsterr s68248 (`carolina-BASE-8769058.gp`) | 4/4, all 102 bars | **79 BPM** |

The two agree on meter. **The tab runs 8.56% slow against Sloots's MIDI on the opening.**

### Glyph provenance, read at native resolution

The 86.4 BPM is the MIDI's tempo meta event and nothing else. The score was checked directly:
a 1:1 crop of `carolina-hard-core-ecstasy-1975a.jpg` (875x362 native), taken at full pixel
resolution and upscaled only for viewing, never downscaled.

What the top system actually carries: a boxed rehearsal number **1**, an **8va**, treble clef,
a key signature of **one sharp**, and a time signature of **4/4**. The bass staff below repeats
one sharp and 4/4.

**No metronome mark appears anywhere on the top system.** So the tempo comparison rests on
Sloots's MIDI realization alone, and it is not a disagreement with a written tempo. One sharp
is consistent with the C Lydian reading his prose gives for bars 5-8.

## 3. Chart-to-tab bar mapping

Sloots's written structure for the 1975 opening, checkable against the tab:

- bars 1-4: theme one of two bars, played twice, chord progression **C-Em-Am7-D**
- bars 5-8: theme two of two bars, played twice, key **C Lydian**
- bars 9-10: the sung bars begin, stable in C Lydian

## 4. Audio-side check against the recording named in `api/meta/68248` `videos[]`

The synced recording is YouTube `FBNLOWiQSvY`, "Carolina Hard-Core Ecstasy (Live)", measured
**360 s** through the polite gate. That matches the published 5:59 Bongo Fury live length.

Tempo automations in the tab: 79 BPM from bar 0, 71 at bar 98, 66 at bar 100, 45 at bar 101.

| Bars | BPM | Count | Seconds |
|---|---|---|---|
| 0-97 | 79 | 98 | 297.72 |
| 98-99 | 71 | 2 | 6.76 |
| 100 | 66 | 1 | 3.64 |
| 101 | 45 | 1 | 5.33 |
| **total** | | **102** | **313.45** (preflight reports 309.9) |

**Shortfall against the record: 46.55 s, which is 12.93% of 360 s.**

**The shortfall is missing material and never a tempo error.** Filling 360 s at the tab's own
79 BPM needs **118.5 bars** against the 102 it carries, so roughly **16.5 bars of content are
unnotated**. Raising the tempo toward Sloots's 86.4 makes it worse: 102 bars at 86.4 runs
283.33 s, which **widens** the gap by 30.12 s.

## 5. What a moderator or Brandon needs in order to unblock this

1. **Moderator:** review `r8908182`, submitted 2026-09-05 18:34:22, `isOnModeration: true`,
   `isBlocked: false`. The precedent `r8769058` took about 58 hours (2026-08-30 00:31 in,
   2026-09-01 10:21 reviewed by Darr, conclusion `fair`).
2. **Then one upload, never two.** `carolina-KICKFIX-CRASHFIX.gp` passes preflight on every
   check apart from STACKED and NAMEDROP once `--record-seconds 360` is supplied.
3. **NAMEDROP needs a decision.** Songsterr's importer clears 6 custom track names: Frank Zappa,
   Elec. Piano, Rythmn Gtr., Vox 1, Vox 2, Frank Vox. Either say so in the revision description
   so a moderator restores them, or pass `--allow-name-drop` knowingly.
4. **The 16.5 missing bars are a separate revision.** They are a GRID-INHERITED defect of the
   base tab, the kickfix keeps the exact grid, and fixing them means re-gridding the vocal too.

## Commands

```bash
python3 ~/.claude/skills/_shared/yt_polite.py -- --print "%(duration)s" FBNLOWiQSvY
curl -sS https://www.songsterr.com/api/meta/68248/revisions
python3 ~/.claude/skills/songsterr-upload/preflight_import.py \
  --import-file carolina-KICKFIX-CRASHFIX.gp --ai-export carolina-BASE-8769058.gp \
  --record-seconds 360 --song-id 68248
```
