# Nostalgia Live Sets

Live URL: https://7onething1.github.io/nostalgia-live-sets/

55 ready-to-play Ableton Live 11 Sets built 2026-11-12 on Jacks-iMac, ten instruments to a
pitched set and five racks to a drum set, covering every Zero-G Nostalgia preset in the build.
Live 11.3.43 loaded every preset itself. Sets live in `~/Music/Ableton/Nostalgia Live Sets/`.

## Counts

| | |
|---|---|
| Live Sets | 55 |
| Pitched sets, ten instruments each | 44 |
| Drum sets, five racks each | 11 |
| Pitched instruments loaded | 435 |
| Drum Racks loaded | 51 |
| Drum pads | 1,142 |
| Sample references, distinct within a set | 4,107 |
| Sets clean in the independent sweep | 55 of 55 |
| Sets Live opened with no load error | 55 of 55 |
| Presets on disk, on a track, never placed, placed twice | 486, 486, 0, 0 |
| On disk | 9.3 MB |

## How a set is built

Each set is written out empty at its final path first, so the save needs no dialog. Live opens
it, a MIDI track goes in per preset, the preset file is handed to Live by absolute path, and one
Cmd+S saves the set at that same path.

The path is what makes it work. All 209 pitched families ship twice under the same file name,
once as a Simpler and once as a Sampler twin, and a browser-search probe for five Simpler names
returned five Sampler twins, two of them the same wrong preset, because a search for
`Nostalgia 303Growler` also matches `Nostalgia 303Growler Stab`. Drum racks need Live for a
second reason: a `.adg` stores pads as `BranchPresets`, a different shape from the `Branches` a
loaded rack has in a set, and only Live converts between them.

## What the retired XML route taught

The first build wrote pitched sets straight into the set XML, where 1,612 of a Sampler device's
1,635 lines copy through untouched. Live refused the first one: "non-unique Pointee IDs", with
`PointeeId 23286` through `23290` each used twice. The renumbering had taken its ceiling from
the three tags it rewrote and missed the `VolumeModulationTarget` family in the track mixers.
The shared id space is the automation and modulation target family alone.

A hand-built Live set was then diffed against the generated file for the same five presets: same
element tree on all five devices, and of 2,385 value paths, 25 differ, every one of them Live
rewriting a float through its engine (`50` as `50.0000153`). That diff found the one field left
blank, `BrowserContentPath`, which Live fills with `query:Find#FileId_NNNNNN` from its own
browser index, a WAL-mode SQLite database that has to be copied with its `-wal` companion.

## A checksum claim this page used to make

An earlier version called a zero `OriginalCrc` a defective file. The algorithm turned out to be
CRC-16, polynomial 0x8005, init 0, not reflected, over the first 16384 bytes, which reproduces
all 46 checksums in the template set. Live then wrote every set on this page, and Live's own
output carries 3,092 zeros among 10,076 `OriginalCrc` values, so a zero there is
Live's own behaviour. The sweep runs the check that decides whether a sample will play: every
sample path exists on disk and is larger than zero bytes.

## Honest limits

Sample paths are absolute, so the Black drive must be mounted. Each set carries Live's default
empty audio and return tracks beside its instruments. Nothing was auditioned, and no set has
been played.

## Local paths

- Sets: `/Users/drwu/Music/Ableton/Nostalgia Live Sets/`
- Builders: `/Users/drwu/Projects/_outputs/ableton-rack-builder/Nostalgia Ableton Build/tools/`
- Page source: `/Users/drwu/Projects/drwu-htmls/public/nostalgia-live-sets/index.html`
