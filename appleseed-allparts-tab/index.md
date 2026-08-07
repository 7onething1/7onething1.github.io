# Appleseed Cast, Mare Mortis, all four parts in one tab

Built 2026-08-07. Route: `/appleseed-allparts-tab/`

## The problem

Every Appleseed Cast `.gp5` built so far contains **one track, Drums**. Confirmed by reading
the files with PyGuitarPro, not from a build log:

| File | Tracks | Names |
|---|---|---|
| 04-Mare-Mortis-NOPHANTOM.gp5 | 1 | Drums |
| 02-Fishing-the-Sky.gp5 | 1 | Drums |
| 03-Forever-Longing-the-Golden-Sunsets.gp5 | 1 | Drums |
| 05-Santa-Maria.gp5 | 1 | Drums |
| 04.-Cathedral-Rings-NOPHANTOM.gp5 | 1 | Drums |
| 05.-30-Degrees-3-Am.gp5 | 1 | Drums |

Uploading a one-track file as a Songsterr revision is what displaced the guitars and bass.
Those displaced parts are saved at `~/Projects/_outputs/songsterr-lost-tracks/`
(Lead Guitar, Rhythm Guitar, Bass, Drums) for revision 8324836.

## The tempo correction

Drum stem `04 Mare Mortis-drums.wav` measures 208.6 s.

| Source | Tempo | Bars | Implied length | Error |
|---|---:|---:|---:|---:|
| Songsterr human tab | 125 | 111 | 213.1 s | +2.2% |
| Our stem build | 136 | 114 | 201.2 s | -3.5% |

`04-Mare-Mortis.tempo.json` recorded `subsets_agreeing: 0` of 2, `phase_error: 0.237`,
`backbeat: 0.229` against `random_baseline: 0.25`. The backbeat score was below chance,
so 136 BPM was never confident. Drums were re-detected at 125 BPM from the same DrumSep split.

## Verified contents

| Track | Instrument | Strings | Bars | Source notes | Written | Result |
|---|---|---:|---:|---:|---:|---|
| 1 Lead Guitar | Electric Guitar (clean) | 6 | 111 | 500 | 500 | match |
| 2 Rhythm Guitar | Electric Guitar (clean) | 6 | 111 | 1737 | 1737 | match |
| 3 Bass | Electric Bass (pick) | 4 | 111 | 768 | 768 | match |
| 4 Drums (stem-built) | Percussion | 7 | 111 | 1963 raw | 1777 | gated, 186 accounted removals |

Guitar tuning Drop D `[64,59,55,50,45,38]`, bass `[43,38,33,26]`, both carried from the
Songsterr parts. `sd_verify.py` passed 20 of 20 on the drum track.

## Not proven here

Note counts and the render gate are file reads. Whether the drums line up by ear against the
recording is a listening check. Both halves share the 125 BPM grid and bar 1 is audio start
for both. Confirm in the Songsterr editor with audio attached.

## Next

1. **Simple Forms** — four Songsterr parts already saved at `~/Projects/_outputs/songsterr-merge/simple-forms/`. No new fetch needed.
2. Eighteen other songs have drums built but no pitched parts saved locally. Each needs its Songsterr notation JSON pulled first.
3. Any song whose Songsterr tempo differs from its drum build needs drums re-detected on the tab's grid before merging.

## Files

- Deliverable: `~/Projects/_outputs/appleseed-allparts/Appleseed-Cast-Mare-Mortis-ALLPARTS.gp5`
- Merge tool: `~/Projects/_outputs/appleseed-allparts/merge_allparts.py`
- Re-detected drums: `~/Projects/_outputs/appleseed-allparts/mare-mortis-drums-125.gp5`
- Detect ledger: `~/Projects/_outputs/appleseed-allparts/mare-mortis-125.json`
