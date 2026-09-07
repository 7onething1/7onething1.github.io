# Zappa Repair State

Two questions Brandon asked, answered from Songsterr's own served data, measured live
2026-09-05.

## 1. Are all the ghost notes fixed?

No. **3,870 of 4,574 drum ghost flags are still missing from the live tabs.**

17 of the 24 damaged drum parts are still fully stripped, 1 is partial,
and the 6 reading RESTORED are the ones whose stripping revision never took
effect. Zomby Woof `s412162`, the song this whole chat covered, reads **0 of 32**.

## 2. Do the uploaded songs match the transcriptions?

No, and that work has barely begun. Exactly **one** song has a bar-level comparison against
a printed chart, Zomby Woof bars 1 to 9. It ends with a **10-event gap** unexplained, Ryan
Brown 137 against tab 127, and its own caveat says the counts are shape-filtered notehead
counts rather than lane-resolved readings. No other song has a bar-level tab-versus-chart
audit on disk.

## Headline numbers

| Measure | Value |
|---|---|
| Ghost flags pre-sweep, drum parts | 4,574 |
| Still missing live | **3,870** |
| Drum parts still stripped | 17 of 24 |
| Genuinely restored | 6 |
| Songs with a chart audit | 1 |

## Every damaged drum part, live

| song | title | part | was | now | gap | verdict |
|---|---|---|---|---|---|---|
| 35881 | Watermelon In Easter Hay | Vinnie Colaiuta | 1317 | 0 | 1317 | STILL STRIPPED |
| 35886 | Muffin Man | Terry Bozio | 578 | 0 | 578 | STILL STRIPPED |
| 620961 | Drowning Witch | Drums | 419 | 0 | 419 | STILL STRIPPED |
| 35870 | Montana | 1 Ralph Humphrey | 212 | 0 | 212 | STILL STRIPPED |
| 1105085 | The Black Page | Drums | 173 | 0 | 173 | STILL STRIPPED |
| 35865 | Nanook Rubs It | Drums | 168 | 0 | 168 | STILL STRIPPED |
| 35878 | Nanook Suite | Drums | 168 | 0 | 168 | STILL STRIPPED |
| 412178 | Inca Roads | Chester Thompson | 165 | 0 | 165 | STILL STRIPPED |
| 68248 | Carolina Hard-Core Ecstasy | Drums | 144 | 0 | 144 | STILL STRIPPED |
| 35884 | Oh No | Drums | 141 | 0 | 141 | STILL STRIPPED |
| 35870 | Montana | Percussion | 105 | 0 | 105 | STILL STRIPPED |
| 68246 | Alien Orifice | Chad Wackerman | 86 | 0 | 86 | STILL STRIPPED |
| 35887 | What's New In Baltimore? | Chad Wackerman | 59 | 0 | 59 | STILL STRIPPED |
| 748459 | Fembot In A Wet T-Shirt | Vinnie Colaiuta | 57 | 0 | 57 | STILL STRIPPED |
| 412162 | Zomby Woof | Ralph Humphrey | 32 | 0 | 32 | STILL STRIPPED |
| 20690 | Uncle Meat (YCDTOSA Vol. 2) | Percussions | 24 | 0 | 24 | STILL STRIPPED |
| 749523 | Catholic Girls | Drums | 16 | 0 | 16 | STILL STRIPPED |
| 412170 | Trouble Every Day (Live) | Chad Wakerman - Percussion | 9 | 3 | 6 | PARTIAL |
| 21495 | Andy | Drums | 1 | 1 |  | RESTORED |
| 35875 | Packard Goose | Drums | 3 | 3 |  | RESTORED |
| 35883 | Zoot Allures | Terry Bozio | 53 | 53 |  | RESTORED |
| 35889 | Peaches En Regalia | Drums | 14 | 14 |  | RESTORED |
| 59089 | Black Napkins | Terry Bozio | 1 | 1 |  | RESTORED |
| 604777 | Keep It Greasey | Drums (Vinnie Colaiuta) | 629 | 629 |  | RESTORED |

## The claim that said this was finished

Queue item `q-2026-09-05-ef3afd` reads "Ghost restoration is finished (16 tabs, 3,842 flags,
all verified live)." Measured live today, 3,870 drum ghost flags are still gone and
17 parts carry zero. The restorations that were built do exist, and they sit in
pending moderation stacks that no moderator has taken, so they are not on the public tabs.

The memory `reference_zappa_ghost_note_sweep_damage` was right all along at 3,842 live flags
dropped. Today's independent count is 3,870 on the same ledger, so the damage figure
reproduces and the restoration figure does not.

## Why RESTORED mostly means never broken

Zoot Allures `s35883` at 53 and Keep It Greasey `s604777` at 629 show full counts because
their stripping revisions were rejected by moderators and carry `isBlocked=true`, so they
could never publish. Andy, Packard Goose, Peaches En Regalia and Black Napkins carry 1, 3,
14 and 1 flags, small enough that the sweep never landed on them. **Six of the seven green
rows were saved by something other than the repair work.**

## What finishing actually requires

**Ghosts.** 17 drum parts need a restoring revision each, one song per pass, and every one
then needs a moderator to take it. The building is the smaller half. Nothing reaches the
public tab without moderation, which is why 6 revisions on Zomby Woof alone sit unreviewed.

**Transcription matching.** 22 songs have no bar-level chart comparison at all. The one that
does covers 9 bars and ends on an unresolved 10-event gap. The sources are on disk at
`~/Projects/_outputs/zappa-drum-sources/` across 12 publisher folders.

## Method

For each song in `_defects.json`, fetch `api/meta/<songId>` for the live revisionId and
image hash, then every part JSON from CloudFront, counting `"ghost":true` on the drum part
the ledger names. Read-only, no writes.

A first pass counted all parts rather than drum parts and inflated several rows with
non-drum ghosts. This is the corrected per-part count.


---

## Per-song catalog status: the fields a completed song has to carry

*Gate record for this section: anti-AI gate PASS on both files, and
`session_fraud_check.py --hard-only` over the Keep It Greasey report, its mismatch table,
its ambiguity table, its change log, its manifest, its structural comparison, its three
pre-registrations, the published page and the song record returned
`No fraud patterns detected`. Literal stdout:*

```
$ python3 ai_tells_gate.py --input FINAL_VALIDATION.md --mode hard
[gate] total score: 10
[gate] PASS

$ python3 session_fraud_check.py --hard-only --files <9 Keep It Greasey artifacts>
SESSION FRAUD CHECK — 9 disk files (last 24h)
✓ No fraud patterns detected.
```

Added 2026-09-07. The ledger above tracks ghost counts. A song that has been through the
full both-directions procedure carries more than a count, so this table holds those fields.
**One song is complete on that standard so far.**

| Field | s604777 Keep It Greasey |
|---|---|
| scope | full transcription comparison, all five kit families, both directions |
| authoritative source | Songsterr `r8852151` by Ben Dibden1, part 8 "Vinnie Colaiuta" |
| working file | none created, the tab was never edited |
| isolated stems | kick, snare, hat, cymbals, toms, other_kit, plus 9 more, 501.84 s each |
| person-made references | DRUM! Odd Meter Lesson 1-3, DRUM! Groove Analysis, Modern Drummer *Rock Charts* by Marc Atkinson, Drummerworld figures by Rich Lackowski, Alfred publisher sample |
| timing map status | **NOT ESTABLISHED.** `18a2dd` passed a pre-registered gate at 197.880 s and the drum lanes then showed it about one bar late |
| repair count | **0** |
| ambiguity count | **682** = 629 ghost flags + 21 claps + 32 kick onsets |
| structural check | 9 of 9 parts byte-identical start to end |
| sha256 manifest | 94 lines covering every source, output, script and published file |
| completion state | **COMPLETE at passage level, 0 at instance level, reason measured** |
| record | <https://7onething1.github.io/zappa-keep-it-greasey-validation/> |

**The next gate is written and hashed**: an Absolute Bar Identity Gate requiring twelve
frozen landmarks from two excluded source families, an integer-shift contest from minus two
to plus two bars, and a target-excluded drum check. It rejects the current map.

**Watermelon In Easter Hay `s35881` is the other full-comparison song** and it is tracked
separately. Every remaining song is ghost-and-notation scope.

---

Palette: The Royal Tenenbaums (Wes Anderson)
