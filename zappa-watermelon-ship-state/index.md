# Watermelon In Easter Hay: what actually ships

Songsterr `s35881`. Built 2026-09-07 from the exhaustive handoff, which named a ship file and
carried three internal contradictions about which one it was.

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

- **Brandon**: one upload decision. `r8908034` is on moderation, so a second upload stacks.
- **A scan**: five Drumnet pages at print DPI unblock every chart-based item at once.
- **Another session**: the onset-based DP alignment `q-2026-09-06-57b3e8` unblocks pedal hi-hat.
