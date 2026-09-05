# Inca Roads: what the drum tab is missing

Songsterr s412178, live revision r8769026. Frank Zappa, One Size Fits All, 1975.
Built 2026-09-05 on MacBookPro.

## The ask

Compare the live Inca Roads drum tab against every transcription held on this Mac and
report what is missing or wrong. Every number below came from the part JSON that a reader
receives from CloudFront.

## Headline

The largest problem is my own doing. Revision r8769026, published on 2026-08-30, stripped
165 ghost notes from the Chester Thompson staff and added 166 dynamic marks that the
previous author never wrote. The repair revision r8907511 sits in the moderation queue and
has not gone public. A reader opening the tab today still gets the damaged version.

## Findings

### 1. Missing: 165 ghost notes

Beat count and note count are identical between r7750859 and r8769026, at 1,491 beats and
1,529 notes. Only the ghost flags vanished.

| Lane | MIDI | Ghosts lost |
|---|---|---|
| Acoustic snare | 38 | 134 |
| Crash cymbal 1 | 49 | 14 |
| Bass drum | 36 | 7 |
| Crash cymbal 2 | 57 | 6 |
| Closed hi-hat | 42 | 3 |
| Outside the kit | 92 | 1 |
| **Total** | | **165** |

### 2. Wrong: 166 dynamic marks that no author wrote

Those same 165 beats carry `velocity: null` in r7750859. The live revision gives them 83
`pp` marks and 83 `mf` marks. The drum staff previously had no written dynamics at all.

### 3. The two drum staves split the song

Staff 10, the AI staff, carries bars 1 to 155 and is empty from bar 156 onward. Staff 11,
Chester Thompson, is the mirror image. Exactly one bar, bar 3, has notes on both.

| Staff | Bars with notes | Empty bars | Notes |
|---|---|---|---|
| 10, AI | 1-28, 37-51, 63-137, 141-155 | 191 | 1,844 |
| 11, Chester Thompson | 1-3, 29-36, 52-62, 138-140, 156-289, 296-322 | 138 | 1,529 |

Neither staff is a complete drum part. Measuring staff 11 alone would report 138 empty bars
and call the tab half finished. The pair is the correct unit of judgement.

### 4. Missing: six bars with no drums anywhere

Bars 290 to 295, the Interlude 3 section, are empty on both staves. Bars 31 and 33 inside
Break 1 are also empty on both, which is plausible for a break.

### 5. Wrong: the AI staff was touched after all

The live description states the second drum staff was not touched. Staff 10 went from 1,475
beats to 1,501, a gain of 26 rest beats across 17 bars: 168, 173, 175, 177, 178, 179, 180,
186, 187, 188, 296, 298, 300, 301, 302, 308, 309. Note count holds at 1,844, so no playing
changed. The description is still wrong.

### 6. The note outside the kit belongs to the author

Bar 1 of staff 11 carries MIDI 92 at string position -0.5, above the top line. General MIDI
percussion runs 35 to 81, so it sounds as no kit piece. The same note is in Darr's r7750859
carrying `ghost: true`. That marking belongs to the author and it stays.

## What we hold on the drive

No professional drum transcription of Inca Roads exists in the archive.

| Folder | Transcriber | Covers Inca Roads |
|---|---|---|
| 02-drummagazine | Ryan Brown | No |
| 01-cruiseshipdrummer | Todd Bishop, Daniel Bedard | No |
| 03-petesweeney | Pete Sweeney | No, Dong Work For Yuda and Keep It Greasy only |
| 06-drumnet | Drumnet.ru | Not recovered on this Mac |
| 08-analysis/zappa-analysis | Kasper Sloots | Melodic only |
| 10-academic | Clement, Wall | No drum notation |

Both Sloots images were opened and read. They are handwritten full scores carrying flute,
trombone, keyboards, whistling and bass guitar staves, with no drum staff on either page.
They transcribe the 1973 Roxy-era performance in 12/16, and this tab transcribes the 1975
album version opening in 4/4. A source votes only on the passage it transcribes, so they
vote on nothing here.

The Songsterr revision chain is the only valid comparator, which is why every finding is a
revision-to-revision measurement.

## The baseline on disk cannot be trusted

`ORIGINAL-Frank Zappa-Inca Roads-07-06-2026.gp` and `RESTORE-r7750859.gp` are byte-identical,
sha256 `ddb5235078c6cae4`, both 111,487 bytes. Their 14 ghost markings all sit on pitched
notes, MIDI 69 and 62 at octave 5, placing them on guitar and marimba. The drum staves carry
zero. A real r7750859 would carry 165 on the Chester Thompson staff. Both files are
post-sweep exports wearing a pre-sweep name, dated 2026-08-29 19:27, the day the sweep ran.

Rebuilding the restore from those files would publish a stripped tab a second time. Rename
them to say what they are.

## What is not proven

- Whether the six silent bars at Interlude 3 are correct was not tested against the recording.
- Whether the surviving hi-hat writing on staff 11 is complete is untested.
- The cause of the 26 added rest beats is inferred from where they fall.
- No claim is made about the accuracy of the notated rhythms themselves.

## Sources

- Live tab https://www.songsterr.com/a/wsa/frank-zappa-inca-roads-drum-tab-s412178t10 revision r8769026
- Pre-sweep revision r7750859 by Darr, image hash v0-3-2--J1WPCKhadNeBx-S
- Revision list, api/meta/412178/revisions, 11 revisions
- Archived transcriptions, ~/Projects/_outputs/zappa-drum-sources/, manifest ARCHIVE-STATE.md
- Kasper Sloots, zappa-analysis.com, Inca Roads 1973 sections 1 and 2
- Damage log, ~/.claude/skills/songsterr-drum-repair/reference/damage-log.md
