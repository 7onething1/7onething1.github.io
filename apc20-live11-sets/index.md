# APC20 Live 11 Sets

Build or acquire, researched and ranked. MacBookPro, 2026-09-07, Ableton Live 11 Suite 11.3.43.

## The short answer

**Build wins.** Nobody sells APC20-fitted Live Sets any more. The one company that
did has taken the category down: their APC product category returns a 404 and a
site search for APC20 returns zero product cards. What remains for sale is genre
production templates shaped for the arrangement timeline, not for an 8x5 clip grid.

The build route is open. An `.als` is gzipped XML, and reshaping one into exact
APC20 bank geometry is a subtractive edit. Two working tools ship with this page.

**Acquire keeps one narrow use.** Buy for content rather than geometry, then feed
the pack through the generator as a donor.

## What the APC20 addresses

8 tracks by 5 scenes, 40 pads, one bank. Shift pages that window around a larger set.

| Control | Count | Function |
|---|---|---|
| Clip Launch grid | 8 x 5 | Launches the clip in that Session View slot |
| Session Overview | Shift + grid | Each pad becomes one whole 8x5 block |
| Scene Launch | one per row | Fires a whole scene, including clips outside the view |
| Clip Stop | one per track | Stops that track, including clips outside the view |
| Track faders | 8 + master | VOL, PAN, SEND 1-3, USER 1-3 |
| Activator / Solo / Arm | 8 each | Mute, solo to cue, record arm |
| Bank Select | 4 pads | One track or scene, Shift moves 8 tracks or 5 scenes |
| Note Mode | 1 button | Grid halves, left C1 to G2, right G#2 to D#3 |

Live 11 Suite 11.3.43 ships the APC20 control surface natively, verified on disk at
`MIDI Remote Scripts/APC20/`. No third-party script is needed.

Note Mode's left half ascends from C1, which matches the white-keys-from-C1 drum
rack convention, so an `ableton-rack-builder` rack is playable with no remapping.

## Route A: acquire

| Channel | Verdict | Evidence |
|---|---|---|
| Isotonik Studios | Category gone | APC category 404s, APC20 search returns zero products |
| Live 8 APC Edition | Legacy, CD only | Quickstart guide instructs inserting the included CD |
| Template marketplaces | Wrong shape | Arrangement-focused, no controller grid fit advertised |
| Ableton Template Sets | Generic | Good content, geometry still yours to impose |

## Route B: build

An `.als` is gzip-compressed XML. The method is subtractive: delete whole elements
and rename what is left, so every surviving byte is markup Live itself wrote.
Growing past the donor geometry is refused, because cloning a track or scene
duplicates object Ids.

### The Id model, learned by probing

Live keeps two Id spaces that legitimately collide with each other.

| Attribute | Space | Rule |
|---|---|---|
| `Pointee Id` | pointer | Globally unique, allocated from `NextPointeeId` |
| Track `Id` | pointer | Unique object id, **not positional**. One real set uses 127, 31, 56, 32 |
| `MidiClip` / `AudioClip Id` | local | Scoped to their slot, they repeat 0, 1, 2 |
| `Scene Id`, `ClipSlot Id` | positional | 0-based, sequential, reindexed after a trim |

Renumbering a track Id is the trap. A GroupTrack's children point at it through
`TrackGroupId`, so rewriting the group's Id orphans every child silently while the
file still parses as XML.

## Tools

- `apc20_setgen.py` reshapes any Live 11 Set into exact APC20 bank geometry
- `validate_apc20_set.py` runs nine checks, seven correctness and two fit warnings

```bash
python3 apc20_setgen.py --inspect IN.als
python3 apc20_setgen.py --donor IN.als --out OUT.als --banks 1
python3 apc20_setgen.py --donor IN.als --out OUT.als --banks 2 --blank --spec example_spec.json
python3 validate_apc20_set.py OUT.als
```

## Proof log

**Serializer fidelity, byte-identical:** given no changes, the writer reproduces
Live's own bytes exactly. `DefaultLiveSet.als` 152,480 bytes and
`Nostalgia_Homage_APC40.als` 304,960 bytes both round-trip identical.

**Validator calibration:** three Live-authored sets are the control and all three
pass correctness. Reaching that required fixing V3, V4, V5 and V5b, each written
against an assumption rather than against the format.

**Generated sets:** 4 of 4 pass, exit 0.

```
APC20_1bank_8x5.als         8 trk x 5 scn   1 view    -> PASS
APC20_2bank_16x5.als       16 trk x 5 scn   2 views   -> PASS
APC20_3bank_24x5.als       24 trk x 5 scn   3 views   -> PASS
APC20_Blank_1bank_8x5.als   8 trk x 5 scn   1 view    -> PASS
```

**Live opens it.** Live 11.3.43 was launched against the generated set.

| Time | File | Origin | Result |
|---|---|---|---|
| 11:22:07 | `Nostalgia_APC20_8x5.als` | reshaped from the crashing set | CRASHED |
| 11:23:02 | `Nostalgia_Homage_APC40.als` | your original, untouched | CRASHED |
| 11:30:36 | `APC20_1bank_8x5.als` | reshaped from the clean donor | LOADED OK |

The crash tracks the donor, never the reshaping.

## Your existing sets

All 48 Live Sets under the Desktop were inspected. None is APC20-shaped.

| Set | Tracks | Scenes | APC20 views | Plugins |
|---|---|---|---|---|
| Starter Song | 29 | 8 | 8 | 0 |
| RADIOHEAD FUG JAM | 21 | 8 | 6 | 12 |
| Song 2 | 18 | 8 | 6 | 12 |
| Sean song add drums | 18 | 8 | 6 | 12 |
| Shiner (Toe Project) | 13 | 8 | 4 | 0 |
| Nostalgia_Homage_Template | 12 | 6 | 4 | 12 |
| Nostalgia_Homage_APC40 | 12 | 5 | 2 | 12 |

Your APC40 template has the right scene depth at 5 and overruns track width by
four, so tracks 9 to 12 sit in a second view. Cut to 8 for one self-contained
bank, or extend to 16 for a deliberate two-bank layout.

## The crash found along the way

`Nostalgia_Homage_APC40.als` crashes Live 11.3.43 on this Mac by itself. The
signature is an empty `VST3: Going to restore:` line immediately before
`FatalError: Uncaught exception`. That set carries 12 VST or VST3 references.
Corroborating evidence sits in `Anatomy-Jams/Nostalgia_Homage_Repair/`, which
already holds `_remove_all_vst3_devices` and `_minimal_repair` variants.

The plugin-free `Starter Song.als` was used as the donor instead, which is why the
shipped sets avoid the fault.

## Sources

- Akai APC20 Quickstart Guide, pages 3 to 5, read locally from the PDF
- [Ableton, The anatomy of the APC20](https://www.ableton.com/en/pages/2010/apc_20/anatomy_of_apc_20/)
- [Akai Professional, APC20 product page](https://www.akaipro.com/apc20.html)
- [Isotonik Studios](https://isotonikstudios.com/), checked live for APC availability
- [Ableton, Default Set and Template Sets](https://help.ableton.com/hc/en-us/articles/209067189-Default-Set-and-Template-Sets)
- [abletoolz](https://github.com/elixirbeats/abletoolz), [pylive](https://github.com/ideoforms/pylive), [buildable](https://pypi.org/project/buildable), surveyed for prior art
- Local ground truth: Live 11 Suite 11.3.43 remote scripts, 48 Live Sets, Live's own `Log.txt`

Generated sets live in `~/Projects/_outputs/apc20-live11-sets/`.
