# Zappa Drum Transcription Toolkit

The skills on this Mac that read a drum part, plus everything already on disk about
Frank Zappa's drum transcriptions, with **Keep It Greasey** pulled out in full.

Built 2026-09-08. Song locked for this chat: Keep It Greasey, `s604777`.

## The skill stack, seven stages

| Stage | Skill | What it does |
|---|---|---|
| separate | `/composite-stem-alignment` | One clean multitrack from several mic captures, one transform per mic. |
| separate | `/multimic-stem-fix` | Repairs phase cancellation and bleed between kit lanes. |
| read | `/perfect-stem-read` | The governing document. Stem event, instrument identity, score timing, lane last. |
| read | `/drum-dynamics-from-audio` | Fixes velocity and articulation by measuring the recording. |
| notate | `/stems-to-guitar-pro-drums` | Drum stems to a Guitar Pro file with flams and ghosts recovered. |
| notate | `/audio-stems-to-midi` | Cheaper first pass, demucs plus crepe plus basic-pitch. |
| repair | `/transcription-repair` | Human transcription as the model, stems as evidence testing single claims. |
| repair | `/songsterr-drum-repair` | Restores a drum staff without damaging the rest of the tab. |
| standard | `/notation-evidence-gate` | Settles a symbol against Weinberg, refuses a claim with no null model. |
| grade | `/reference-class` | Decides whether a number earned the right to ship. |
| publish | `/songsterr-upload` | Corrected Guitar Pro onto Songsterr, synced to the recording. |
| publish | `/songsterr-tab-guide` | Data-driven tab-guide page for a band's albums. |

Beside them: `/midi-drum-analysis`, `/five-stem-song-analyst`, `/stem-analyzer`,
`/midi-to-tab`, `/album-tab-citation`, `/impossible-guitar-parts`, `/fraud-firewall`.

## The Zappa program, current state

| Fact | Value |
|---|---|
| Zappa song ids in play | 34 |
| Ghost flags stripped by the 2026-08-29/30 sweep | 3,842 across 16 live tabs |
| Restore revisions held on moderation | 17 |
| Printed charts on disk | 12 |
| Published audit pages | 32 |

Weinberg's 1994 *Guidelines for Drumset Notation*, **page 20, plate Ex. 11**, prescribes the
parenthesised notehead the sweep read as an error, and its wording covers cymbals too.
Read 2026-09-06 by rendering the image-only scan at 400 dpi, since `pdftotext` returns 12 bytes:
`normanweinberg.com/uploads/8/1/6/4/81640608/940506pn_guildines_for_drumset.pdf`.

## Keep It Greasey

Three Songsterr tabs. `s604777` is the one that matters: human, by Ben Dibden1, nine parts
named by player, revision `r8852151`, **248 bars, 4,948 drum events, 629 ghost flags**,
8:18 against the album's 8:22.

**Revision history.** Kevin Sheppard approved 2025-07-15, then a strip revision from Brandon's
account on 2026-08-29 removed all 629 parenthesised noteheads and was marked **alternative**, so it
never published. Ben Dibden1's revision `r8852151` is live, stamped 2026-09-02 local and 2026-09-03T01:08:51 UTC: section headers, rests
cleared from empty bars, tracks renamed to the template format, bass tone set to finger.
**The sweep hit this song and failed to land, so all 629 ghosts are intact.**

**That strip's revision note is stale.** It describes what `r8768457` would have done, never the
current state. A signed-in read on 2026-09-08 gives `s604777` 38 revisions, latest `r8852151`,
`isOnModeration: false`, and the copy `s6862054` exactly one revision. Nothing newer exists.

**Ghost layer, verified twice.** The live export carries 629 flags, **every one on MIDI 38,
acoustic snare**, across 152 of 248 bars from bar 2 to bar 238, with beat dynamics ppp 12, pp 94,
p 376, mp 33, mf 114. That reproduces the validation page's table by a different route.

**Audio.** Fifteen stems at `/Users/Shared/202 Keep It Greasey-D minor-142bpm-442hz/`, kit
already split six ways. The metronome stem is synthetic, a beat tracker rendered to a wav.

**Printed sources, digits read from native-resolution crops at 4x and 6x, never a page
overview.** DRUM! Groove Analysis reads **Verse 1 at 0:35, quarter = 134, 19/16**
and **Verse 2 at 1:16, 21/16 into 9/16 into 4/4**. The Odd Meter Lesson page draws the
ghosts in brackets. Marc Atkinson's Modern Drummer *Rock Charts* is the only complete-song
chart, now re-rendered at 400 dpi.

**Tempo.** Measured 136.7 BPM at the 3:18 passage against a printed 134. Speed shift is
about 1 percent, so it does not explain a 6 percent gap.

**Validation of 2026-09-07.** Snare and tom stems show two dynamic populations. The score
agrees with itself: 629 flagged events sit 1.804 dynamic ladder steps below 794 unflagged,
z = -30.58. The alignment never closed, so 0 of 248 bars carry a surviving two-direction
result and **zero repairs were applied**.

**Four open findings.** `KIG-M001` a GM 65 on the kick line at bar 231, `KIG-M002` 21 hand
claps at the snare position, `KIG-M003` 114 ghost flags resolving to mf, `KIG-M004` 32
unnotated kick onsets.

## The copy tab is already staged

`s6862054` "Keep It Greasey by Frank Zappa Brandon edit", artist string **Misc Covers**, carries
one revision `r8958071` created via `Copy`, with no edit submitted. Its export matches `s604777`
exactly: 248 bars, 9 tracks, 14,444 events, 629 ghosts, drum track 4,948 and 629. The public API
returns nulls for it, so read it from the signed-in browser.

## KIG-M001 applied and published, 2026-09-08

Copy tab `s6862054` now sits at **`r8972975`**, createdVia GP, tracksCount 9, isOnModeration false.
The original `s604777` was never touched.

Bar 231 beat 7 went from `{"fret": 65, "string": 4}` to `{"fret": 35, "string": 4}`. String 4 on
that staff carries 1,311 kicks and nothing else, so fret 65 there was an encoding slip.

Gates: `diff_gpif_tracks.py` exit 0 with only Vinnie Colaiuta changed, `preflight_import.py` PASS,
grid 1.30% inside tolerance, NAMEDROP-CLEAR on 9 of 9 CDATA names. The edit was a surgical text
replacement on the raw GPIF, so all 149 CDATA blocks survived.

Verified uncredentialed from CloudFront, http 200: fret 65 count 0 (was 1), kick 1,312 (was 1,311),
ghosts 629 unchanged, 248 measures, 4,974 events, **all 9 track names intact**.

## The shared-element trap, measured 2026-09-08

The chain from bar to note on the KIG-M001 target was **1 bar to 1 voice to 1 beat to 1 note**, so
rewriting the note in place could reach nothing else. The same file's worst sharing is one beat
referenced by **739 voices** and one note by **144 beats**, so the trap is real here and simply did
not touch this edit. Element ids do not survive a Songsterr round trip: the re-export moved Beats
1,527 to 1,556 and Notes 680 to 679 with no content change. Compare content tuples, never ids.

**No count in this pass came from a fitted threshold.** Every figure is a direct field read, and the
detector figures from 2026-09-06 and 09-07 are cited as those sessions' work.

## The eye check on KIG-M001

Bar 231 rendered from both files with alphaTab headless at scale 4.0 and diffed pixel by pixel.
**BEFORE the notehead sits in the space below the bottom staff line; AFTER it sits on the bottom
line**, with every other kick in the bar. The diff isolates a 42 px notehead-sized change at
x 1122-1163 spanning y 513-565, straddling the bottom line at y 532. Everything else that differs
is beam re-layout below the staff. The eye agrees with the fields, so nothing was overruled.

Ghost and dynamic are **different elements**: ghost is `<AntiAccent>` on the Note, dynamic is
`<Dynamic>` on the Beat, and this file carries **zero** `<Staccato/>`, so the Montana substitution
failure has no counterpart here. The 09-07 page's 794 unflagged is snare-lane only (629 + 794 =
1,423 = the MIDI 38 count); all lanes gives 4,319.

## Id-histogram pre-flight on the two remaining edits

| Plan | Note id | In plan | Total file-wide | Verdict |
|---|---|---|---|---|
| KIG-M002, 21 hand claps | 667 | 21 | **21** | **Exclusive**, in-place edit safe |
| KIG-M003, 114 ghost flags at mf | 659 | 114 | **629** | **Shared**, 515 outside the plan, copy-on-write mandatory |

Note 659 is the shared snare-ghost definition carrying all 629 ghosts. The first pass of this check
compared instances against *beat-references*, 21 vs 5 and 114 vs 37, and wrongly called both
exclusive. Counting instances on both sides flips M003 to shared.

The worst-shared beat in the file, id 1020 at 739 voices, belongs to **Warren Cuccurullo**, a guitar
track, so no drum edit can reach it.

## The bundle, collected 2026-09-08

`~/Projects/_outputs/zappa-keep-it-greasey-transcriptions/` holds all three Guitar Pro
exports plus the pre-sweep baseline, every printed chart rendered and labelled by
transcriber, and the nine live part JSON files.

Two GPIF traps hit and fixed: `Notes` are shared definitions, and a ghost is a direct
`<AntiAccent>` child rather than a Property. Walking the export correctly reproduces
4,948 events and 629 ghosts, matching the CloudFront read.

The Pete Sweeney PDF holds **three** charts, not the two its manifest records.

Palette: The Royal Tenenbaums (Wes Anderson).
