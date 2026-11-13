# Nostalgia Drum Racks

Live URL: https://7onething1.github.io/nostalgia-drum-racks/

Live 11 Drum Racks built 2026-11-12 on Jacks-iMac from the Zero-G Nostalgia drum-machine
one-shots in folders `11 Drum Synths`, `12 Classic Beatboxes` and `13 Obscure Beatboxes`,
volume 03 of the library on the Black drive.

## What the page shows

51 racks, 1,142 pads, with the full pad map for every rack: note name, MIDI number, the
receiving note as Live stores it, the pad label and the source filename. Samples are
referenced in place by absolute path, so the folder is 9.5 MB and nothing was copied.

## Source of every number

- Rack and pad figures come from the build report at
  `scratchpad/rack_report.json`, which records each pad's note, role, choke group and sample.
- The verification column comes from a separate checker that re-reads each `.adg` with
  ElementTree and `soundfile`, independent of the build's own arithmetic. That checker was
  first run against the Live template, which is known to carry an inherited `SampleStart`,
  a stale `OriginalFileSize`, a stale `DefaultDuration` and empty name fields, and it
  rejects the template on all four.
- The onset counts for the 29 excluded files come from the `ableton-rack-builder` skill's
  own `_count_onsets_in_file`, run over all 1,171 WAVs with 0 errors.

## Live load test, 2026-11-12

Every rack has since been loaded by Live 11.3.43 itself, five to a Live Set, and each saved
set was read back to count the Drum Racks Live wrote. Live's own log recorded no
load error on any of them. The sets are listed at https://7onething1.github.io/nostalgia-live-sets/

Pads still resolve by absolute path, so the Black drive has to be mounted when loading.

## Honest limits

Pad order inside a role comes from a naming rule. No sample was auditioned. Nothing was
sliced, levelled, modified or deleted.

## Local paths

- Racks and README: `/Users/drwu/Music/Ableton/User Library/Presets/Instruments/Nostalgia Drum Racks/`
- Page source: `/Users/drwu/Projects/drwu-htmls/public/nostalgia-drum-racks/index.html`
