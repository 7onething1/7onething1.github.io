# Zomby Woof: the last tab the sweep still holds

Songsterr `s412162`, community tab, 21 revisions, live revision `r8918601` by Nikita.
Built 2026-09-09. Every number below came from a live read of Songsterr's own API and CDN
on the day, or from a file on this disk.

Live page: https://7onething1.github.io/zappa-zomby-woof-ghost-restore/

## The finding that changed the target

The session opened on Inca Roads, because the 2026-09-05 audit left one item unresolved
there. Both parts of that plan turned out to be wrong, and a live sweep is what corrected
them.

**Inca Roads measures whole.** `s412178` now serves `r8907511` as its live revision, and the
Chester Thompson staff carries all 165 ghost flags. The restore has published and no longer sits on moderation.

**The Inca Roads defect was mismeasured.** The audit recorded 26 rest beats added to staff
10 and read it as fabricated content on one staff. The real figure is **212 rest beats
across eleven of the twelve staves**, and it is not fabrication. Every affected bar is an
odd meter, 11/16 or 5/16, where a single whole-measure rest cannot be written. Guitar Pro
spells 11/16 as three rests and 5/16 as two. Note counts are identical on every staff, so
no playing changed. The one staff untouched by it is Chester Thompson, the staff the repair
actually edited.

| bar | meter | author `r7750859` | live `r8907511` |
|---|---|---|---|
| 168, 173, 175, 186, 187, 296, 298, 308, 309 | 11/16 | one rest | three rests |
| 177, 178, 179, 180, 188, 300, 301, 302 | 5/16 | one rest | two rests |

Rolling that back would be cosmetic churn on a public tab, and two of this account's
revisions carry a block under the report "It probably did not make the tab more
accurate to the original performance."

## The live sweep: 19 of 20 songs are repaired

Twenty tabs this account's 2026-08-29 and 2026-08-30 sweep touched, censused live on
2026-09-09 by walking every part JSON from CloudFront and counting `ghost` on notes.

| songId | title | ghosts wanted | live total | verdict |
|---|---|---:|---:|---|
| 35881 | Watermelon In Easter Hay | 1,317 | 1,333 | whole |
| 604777 | Keep It Greasey | 629 | 629 | whole, the strip was blocked |
| 35886 | Muffin Man | 578 | 613 | whole |
| 620961 | Drowning Witch | 419 | 496 | whole |
| 35870 | Montana | 317 | 574 | whole |
| 1105085 | The Black Page | 173 | 173 | whole |
| 35878 | Nanook Suite | 168 | 171 | whole |
| 35865 | Nanook Rubs It | 168 | 168 | whole |
| 412178 | Inca Roads | 165 | 174 | whole |
| 68248 | Carolina Hard-Core Ecstasy | 144 | 144 | whole |
| 35884 | Oh No | 141 | 141 | whole |
| 68246 | Alien Orifice | 86 | 97 | whole |
| 35887 | What's New In Baltimore? | 59 | 59 | whole |
| 748459 | Fembot In A Wet T-Shirt | 57 | 59 | whole |
| 35883 | Zoot Allures | 53 | 53 | whole, the strip was blocked |
| 20690 | Uncle Meat (YCDTOSA Vol. 2) | 24 | 84 | whole |
| 749523 | Catholic Girls | 16 | 16 | whole |
| 5820647 | Zomby Woof (Mothers) | 10 | 10 | whole |
| 412170 | Trouble Every Day (Live) | 9 | 9 | whole |
| **412162** | **Zomby Woof (community)** | **32** | **10** | **22 still missing** |

Eight of these carry a later revision by Evgeny, Kirill or Nikita rather than by this
account. Each of those contributors kept the restored ghosts, so the repairs held through
another editor's pass.

## What is missing from `s412162`

Part 9, the Ralph Humphrey staff. The author `meh` wrote 32 ghost flags in `r7115188` on
2026-05-31. The live tab carries 10, and none of those 10 falls on a slot the author
marked. All 32 of the author's are gone, and Nikita's 10 are a separate set on the snare.

| lane | GM | flags lost |
|---|---:|---:|
| Closed hi-hat | 42 | 18 |
| Pedal hi-hat | 44 | 4 |
| Acoustic snare | 38 | 2 |
| Hi-mid tom | 48 | 2 |
| Lo-mid tom | 47 | 2 |
| Low tom | 45 | 2 |
| High floor tom | 43 | 2 |
| **total** | | **32** |

Seven bars hold all of it: 4, 13, 15, 40, 41, 42, 43. Bars 4 and 15 carry the identical
five-note descent through snare and four toms. Bars 40 to 43 carry the identical four-note
figure, closed hat on three slots with a pedal hat between. That repetition is what an
authored figure looks like.

## The build

**Vehicle.** Rebuilt from Songsterr's own part JSON through `s2gp`, never from
Songsterr's `.gp` export. The export was measured on 2026-08-29 and writes zero Staccato
elements and turns every AntiAccent to Normal, so an export-based edit destroys 138
staccato marks on nine other people's staves before part 9 is touched. The JSON carries
ghost and staccato natively.

**Base.** The live revision `r8918601`, so Nikita's work stays and their 10 snare ghosts
are kept alongside the author's 32. Result on part 9: 42 flags.

**Result.** `RESTORE-s412162-ghosts32-2026-09-09.gp5`, 86,215 bytes,
sha256 `afef16d1110e4deea2675f583a0d36db3731fc4c97379b5623c354ec1cf510a0`.

## Two gates, both stated before they ran

**Gate 1, nothing lost.** The accounting identity was written down first:

```
source_notes == file_notes + file_graces - synthetic_ties
```

A grace-beat note becomes a Guitar Pro grace effect rather than a Note object, and a beat
needing two GP durations emits a tie continuation with no counterpart in the source. All
ten tracks reconcile exactly, 7,600 source notes accounted for with zero residual.

**Gate 2, only articulation changed.** The shipped file was fingerprinted against an
unpatched build of the same base, comparing per beat the duration, dots, tuplet and the
sorted set of string, fret and note type. Nine tracks are identical with zero flag changes.
Track 9 is identical in content with exactly 32 flag changes, every one `ghost False to
True`.

## A measurement I got wrong, and the control that caught it

The first pass reported 27 notes lost across five tracks and I started building a repair
for it. The number was an artifact of my own counter. Songsterr stores an acciaccatura as a
beat carrying its own note, and Guitar Pro stores the same thing as an effect hanging off
the following note, so counting Note objects on both sides loses one per grace note. There
were 27 grace notes.

The control that settled it was building the same base with no edits at all and diffing the
two. Recovery came back `+0` on every track, which says the pre-pass fixed nothing, because
there was nothing to fix.

## The gate that refused the repair

`preflight_import.py` failed the file with `PARENTHESES 42 ghostNote flags (ghosts must be
the staccato dot)`. That rule comes from `stems-to-guitar-pro-drums`, where a parenthesised
notehead in our own generated drum notation is a defect. Applied without scope to a
community tab it fires on the original transcriber's ghost notation, and that is the exact
rule whose unscoped application stripped 3,842 flags off 20 Zappa tabs on 2026-08-29.

The rule is now scoped by evidence rather than switched off. `--attest-ghosts` takes a JSON
document listing the prior revisions that carry each flag, keyed on bar, voice, beat
and GM number. A ghost inside that set is another author's mark and is reported. A ghost
outside it is ours and stays a hard fault.

Three controls ran before the real pass:

| control | expected | measured |
|---|---|---|
| no attestation supplied | the rule still fires on all 42 | REFUSED, 42 unattested |
| attestation with one slot held out | catches exactly that one | REFUSED, 1 unattested |
| attestation with no source and no slots | refuse rather than exempt | REFUSED, "a gate that asks for nothing passes on everything" |

Real run, with the attestation built live from `r7115188` and `r8918601`:

```
  attest: 42 ghost slots from r7115188 by meh, r8918601 by Nikita
  note   : DRUMS Ralph Humphrey: ATTESTED 42 ghostNote flags matched a named prior revision, kept
  PASS  10 tracks, no part loss, grid inside 2%, drum notation clean, stamped.
CLEARED for importRevisionInput. Publishing stays Brandon's act.
```

Backup of the gate before the patch:
`~/.claude/skills/songsterr-upload/preflight_import.py.bak-before-ghost-attestation-2026-09-09`.

## What is held, and why

The file is built, reconciled and cleared. It is not uploaded.

`s412162` is a community tab whose live revision belongs to Nikita, and publishing over
another contributor's tab is Brandon's act rather than mine. The queue carries this
as `q-2026-09-07-8d19fd`.

## Gate record

Literal stdout, run over the two published files, the five build and measurement
scripts, the attestation, the preflight verdict, the build record, the hash manifest
and the patched gate.

```
$ python3 anti_ai_voice_gate.py check index.md
Severity-3 hits: 0  (any sev-3 = fail)
GATE: PASS

$ python3 session_fraud_check.py --hard-only --files <12 artifacts>
No fraud patterns detected.
```

One correction went into the fraud detector itself while running it. Pattern
`done-without-fraud-check-run` writes `it'?s` with the apostrophe optional, so the
possessive "its live revision" read as a completion assertion. The apostrophe is now
required. Two controls confirm the rule still bites. A bare live-claim and a
contraction-form completion claim each still return HARD FAIL, and the possessive form
returns clean. Backup at
`fraud_patterns.jsonl.bak-before-possessive-its-2026-09-09`.

## Reproduce

```bash
cd ~/Projects/_outputs/songsterr-zappa-paren-fix/s412162-Zomby-Woof-community/build_2026-09-09
python3 build_restore.py
python3 reconcile.py RESTORE-s412162-ghosts32-2026-09-09.gp5
python3 make_attestation.py
python3 ~/.claude/skills/songsterr-upload/preflight_import.py \
  --import-file RESTORE-s412162-ghosts32-2026-09-09.gp5 \
  --live-tracks 10 --song-id 412162 --record-seconds 303 \
  --attest-ghosts ghost_attestation.json
```

Palette: The Grand Budapest Hotel (Wes Anderson).
