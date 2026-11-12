# Nostalgia Live Sets

Live URL: https://7onething1.github.io/nostalgia-live-sets/

99 ready-to-play Ableton Live 11 Sets built 2026-11-12 on Jacks-iMac,
five instruments to a set, covering every Zero-G Nostalgia preset in the build.
Sets live in `~/Music/Ableton/Nostalgia Live Sets/`.

## Counts

| | |
|---|---|
| Live Sets | 99 |
| Pitched instruments loaded | 435 |
| Drum Racks loaded | 51 |
| Drum pads | 1,142 |
| Sample references | 5,842 |
| Distinct samples within a set | 4,151 |
| Sets clean in the independent sweep | 99 of 99 |
| Sets Live opened with no load error | 99 of 99 |
| On disk | 9.7 MB |

## Two routes

Pitched presets are written into the set's XML directly. The transformation was taken from a set
Live itself wrote, and the generated file matches it line for line: 1,612 of a Sampler device's
1,635 lines copy through untouched.

Drum racks store pads as `BranchPresets`, a different shape from the `Branches` a loaded rack
has in a set, so Live performs that conversion. Each drum set was written empty at its final
path first, so Live opens it with a path and a plain Cmd+S saves in place, which avoids the
Save As dialog that wrecked the first attempt.

## The two routes compared

Nostalgia Sampler 010 was rebuilt by hand through Live, five presets loaded from the browser
onto tracks and saved with Cmd+S, then diffed against the generated file for the same five.
Same element tree on all five devices. Of 2,385 value paths, 25 differ, every one of them Live
rewriting a float through its engine (`50` as `50.0000153`, `1200` as `1200.00037`).

That diff also found the one field left blank, `BrowserContentPath`. Live writes
`query:Find#FileId_NNNNNN` there, where the number is the preset's row id in Live's browser
index, a WAL-mode SQLite database that has to be read with its `-wal` companion. All 486
presets resolve to exactly one id, the derived values match 10 of 10 Live had written, and the
sets now carry 591 of them with none blank.

## What Live rejected, and the fix

Live refused the first generated set: "non-unique Pointee IDs". Its log printed
`PointeeId 23286` through `23290`, each used twice. The renumbering had taken its ceiling from
the three tags it was rewriting and missed the `VolumeModulationTarget` family in the track
mixers. The id space was then derived from a set Live wrote, where 18 ids are shared across
tags and every one pairs a structural tag against a target tag. The corrected check passes
Live's own file and fails the file Live rejected.

## A claim on this page that was wrong

An earlier build wrote `OriginalCrc` as 0 and said Live's checksum could not be computed, after
24 CRC and zlib variants failed to reproduce a value Live had written. The algorithm was in this
build's own preset writer the whole time: CRC-16, polynomial 0x8005, init 0, not reflected, over
the first 16384 bytes. It reproduces all 46 checksums in the template set. Every set was rebuilt
with real checksums, 6,984 of them, none left at zero.

## Honest limits

Sample paths are absolute, so the Black drive must be mounted. Each set carries Live's default
empty audio and return tracks beside its five instruments. Nothing was auditioned.

## Local paths

- Sets: `/Users/drwu/Music/Ableton/Nostalgia Live Sets/`
- Builders: `/Users/drwu/Projects/_outputs/ableton-rack-builder/Nostalgia Ableton Build/tools/`
- Page source: `/Users/drwu/Projects/drwu-htmls/public/nostalgia-live-sets/index.html`
