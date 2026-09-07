# Watermelon In Easter Hay: what actually ships

Songsterr `s35881`. Built 2026-09-07 from the exhaustive handoff, which named a ship file and
carried three internal contradictions about which one it was.

## The upload path

HARD GATE, corrected by Brandon 2026-09-07. We never submit a revision to an original tab, our
own damage included.

1. Open the original tab `s35881`.
2. Click "Create a copy to edit".
3. Rename the copy with **"Brandon edit"** on the end.
4. Import `RESTORED-s35881-TEXTSAFE-v2.gp` and submit the revision on that copy.

### Preflight through /songsterr-upload

| run | reference | verdict | meaning |
|---|---|---|---|
| A | `--ai-export r8768414-LIVE-EXPORT.gp` | REFUSED, NAMEDROP | fires on r8768414's 7 names; the copy starts from r8908034, which holds zero |
| B | `--live-tracks 9` | REFUSED, GRID | count-only mode cannot see inheritance; run A printed GRID-INHERITED |

Neither fault is caused by the file. Master bars 105 vs 105 identical, tempo automations 1 vs 1
identical, MasterBars sha `457cf4db697a0341` on both sides.

### The NAMEDROP rule is too absolute

| revision | source | names present |
|---|---|---|
| s35881 `r8768414` | 136 CDATA | 7 of 9 |
| s35881 `r8908034` | ElementTree, 0 CDATA | 0 of 9 |
| s5820647 `r8906157` | ElementTree, 0 CDATA | 0 of 5 |
| s5820647 `r8932311` | CDATA-carrying | 5 of 5 |

CDATA presence in the uploaded file is the variable. TEXTSAFE-v2 carries 137.

## Full transcription comparison

Four witnesses exist on this Mac. Two are machine-readable, two are printed below the 15 px
staff-space floor.

| witness | resolution | note-level comparison |
|---|---|---|
| Songsterr `s35881 r7715683`, Ben Dibden1 | native GPIF, 104 bars | yes, the reference |
| `Unknown Artist-206 Watermelon in Easter Hay-...-09-06-2026(1).gp` | native GPIF, 279 bars | lane density only |
| Drumnet, BartoRomeo, 5 pages | 595x842, 5.0 px/staff space | no |
| Kasper Sloots page | 785x1124, 10 px spacing | no |

| lane | midi | tab | machine | reading |
|---|---|---|---|---|
| Ride (middle) | 51 | **1,724** | **596** | tab 2.9x denser |
| Electric Snare | 40 | 193 | 0 | tab only |
| Snare | 38 | 0 | 11 | machine only, different snare lane |
| Kick | 36 | 107 | 475 | machine 4.4x denser |
| Crash high | 49 | 53 | 212 | machine 4.0x denser |
| Hi-Hat closed | 42 | 0 | 125 | machine only |
| Pedal Hi-Hat | 44 | 6 | 0 | tab only |
| TOTAL | | **2,091** | **1,428** | |

The two disagree on the snare lane itself, so neither corroborates the other. The machine file
runs 230 bars of 4/4 plus 48 of 2/4 against the tab's 53 of 4/4 and 52 of 5/4, so a bar-keyed
diff is meaningless. It cannot support a claim that the sweep removed 1,128 ride notes.

## Status change, 2026-09-07 afternoon

`r8908034` cleared moderation at 14:49 UTC and is the LIVE published revision. It emptied all
nine track names, removing seven authored musician credits from the public tab: Frank Zappa,
Warren Cuccurullo, Arthur Barrow, Ed Mann, Warren Cuccurullo, Wurlitzer (Peter Wolf), Vinnie
Colaiuta.

| revision | empty names | note |
|---|---|---|
| `r7715683` Ben Dibden1 | 2 of 9 | the author's, all seven credits present |
| `r8768414` our paren sweep | 2 of 9 | our own .gp upload, 136 CDATA, names preserved |
| `r8908034` our restore, LIVE | **9 of 9** | **every name empty** |

The repair mechanism is proven here: a CDATA-carrying `.gp` upload of ours already kept the
names on this exact song. TEXTSAFE-v2 carries 137 CDATA blocks. The same repair on `s5820647`
went live as `r8932311` and restored its names.

## Wider sweep, 16 songs

Only two songs carry live credit loss: **s35881** (7 credits, our `r8908034`) and **s68248**
Carolina Hard-Core Ecstasy (3 credits, our `r8769058`, logged on 2026-09-06 and never repaired).
Eight of our live revisions show no reduction. Five songs now have a moderator's revision live
instead of ours: s35886, s620961, s35870, s35887, s749523. Nine revisions remain on moderation
across seven songs. Table: `out/NAMEDROP-LIVE-SWEEP-2026-09-07.md`

## Ship target

`RESTORED-s35881-TEXTSAFE-v2.gp`, 51,451 bytes,
sha256 `87020f8c4243a7441db8187b4d7356b300e62b4d013787343de5ea4a0cfe27fd`, in
`~/Projects/_outputs/songsterr-zappa-paren-fix/s35881-Watermelon/`.

It supersedes `RESTORED-s35881-TEXTSAFE.gp` and every ElementTree build.

## The defect this pass found

GPIF stores a chord in two places: an `<Item>` defining the diagram, and a `<Chord>` reference
on the beat that displays it. The paren sweep dropped both halves of E7Msus2 at bar 3.
`build_restore_textsafe.py` restored the Item alone, so the definition sat orphaned and no bar
printed the symbol.

Three checks passed on the broken file:

- `'E7Msus2' in text`, which an orphan satisfies
- the printed list of chord `Items`, which never says whether a beat references one
- the lane-aware set difference, which keys on `(bar, voice, position, midi)` and cannot see a
  symbol that carries no notes

`Beat id 2` is shared by seven voices covering track 0 bars 3 to 9, so the repair clones it
copy-on-write and repoints the bar 3 voice alone. Tool: `tools/restore_bar3_chord_ref.py`.

## Corrections to the handoff

**NAMEDROP was wrong about deletion.** ElementTree strips the `<![CDATA[...]]>` wrapper and
leaves the text. `RESTORED-s35881-FINAL.gp` carries all 28 track names and "Frank Zappa" as
ordinary character data. TEXTSAFE stays the right lane because a reserialized file rewrites
1,038,175 bytes and reformats whitespace throughout.

**124 rest cells are not damage.** They differ from the pre-sweep source across six tracks, all
with zero notes on both sides, and all in 5/4 bars where a Whole plus a Quarter fills the bar
correctly. Note loss across all nine tracks is zero.

**Sections 5 and 6 of the handoff are stale.** They name `RESTORED-s35881-FINAL.gp` and list six
`.gp` files; disk holds eight. Section 3 is the controlling text.

## Verification against `PRESWEEP-r7715683.gp`

| check | result |
|---|---|
| beat-level chord symbols | 4 of 4, identical locations, bar 3 alone |
| CDATA blocks | 137, equal to source |
| CDATA `<Name>` entries | 28 |
| note instances, 9 tracks | 4,856, identical per track |
| AntiAccent / Staccato | 1,317 / 0 of 2,091 drum events |
| ghost missing / spurious | 0 / 0 |
| positions added / removed | 0 / 0 |
| lanes with a wrong ghost count | 0 |

Transcript: `~/Projects/_outputs/zappa-watermelon-ride-analysis/out/VERIFY-TEXTSAFE-v2-2026-09-07.txt`

## Queue

Nine closed with individual proof, eight blocked with a named unblocking condition, one upload
decision queued as `q-2026-09-07-a74a94`. Record:
`~/Projects/_outputs/zappa-watermelon-ride-analysis/out/QUEUE-CLOSURE-s35881-2026-09-07.md`

## Owed

- **Brandon**: one upload decision. The path is the COPY lane, corrected 2026-09-07. We never
  submit a revision to an original tab, our own damage included. Open `s35881`, click "Create a
  copy to edit", rename the copy with "Brandon edit" on the end, import
  `RESTORED-s35881-TEXTSAFE-v2.gp`, and submit the revision on that copy. The original tab and
  `r8908034` stay untouched.
- **A scan**: five Drumnet pages at print DPI unblock every chart-based item at once.
- **Another session**: the onset-based DP alignment `q-2026-09-06-57b3e8` unblocks pedal hi-hat.
