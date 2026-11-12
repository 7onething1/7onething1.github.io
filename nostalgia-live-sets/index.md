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
| On disk | 9.7 MB |

## Two routes

Pitched presets are written into the set's XML directly. The transformation was taken from a set
Live itself wrote, and the generated file matches it line for line: 1,612 of a Sampler device's
1,635 lines copy through untouched.

Drum racks store pads as `BranchPresets`, a different shape from the `Branches` a loaded rack
has in a set, so Live performs that conversion. Each drum set was written empty at its final
path first, so Live opens it with a path and a plain Cmd+S saves in place, which avoids the
Save As dialog that wrecked the first attempt.

## What Live rejected, and the fix

Live refused the first generated set: "non-unique Pointee IDs". Its log printed
`PointeeId 23286` through `23290`, each used twice. The renumbering had taken its ceiling from
the three tags it was rewriting and missed the `VolumeModulationTarget` family in the track
mixers. The id space was then derived from a set Live wrote, where 18 ids are shared across
tags and every one pairs a structural tag against a target tag. The corrected check passes
Live's own file and fails the file Live rejected.

## Honest limits

`OriginalCrc` is written as 0. Live's checksum matched none of 24 CRC-16 and zlib variants over
six byte spans of a sample whose true value Live had written, so there is no way to
compute it here. Zero is Live's value for unknown and what the source presets carry;
Live fills it on first save.

Sample paths are absolute, so the Black drive must be mounted. Each set carries Live's default
empty audio and return tracks beside its five instruments. Nothing was auditioned.

## Local paths

- Sets: `/Users/drwu/Music/Ableton/Nostalgia Live Sets/`
- Builders: `/Users/drwu/Projects/_outputs/ableton-rack-builder/Nostalgia Ableton Build/tools/`
- Page source: `/Users/drwu/Projects/drwu-htmls/public/nostalgia-live-sets/index.html`
