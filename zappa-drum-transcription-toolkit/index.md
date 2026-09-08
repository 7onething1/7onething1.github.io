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

Weinberg's 1994 *Guidelines for Drumset Notation*, page 20, plate Ex. 11, prescribes the
parenthesised notehead the sweep read as an error, and its wording covers cymbals too.

## Keep It Greasey

Three Songsterr tabs. `s604777` is the one that matters: human, by Ben Dibden1, nine parts
named by player, revision `r8852151`, **248 bars, 4,948 drum events, 629 ghost flags**,
8:18 against the album's 8:22.

**Audio.** Fifteen stems at `/Users/Shared/202 Keep It Greasey-D minor-142bpm-442hz/`, kit
already split six ways. The metronome stem is synthetic, a beat tracker rendered to a wav.

**Printed sources.** DRUM! Groove Analysis reads **Verse 1 at 0:35, quarter = 134, 19/16**
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

## The bundle, collected 2026-09-08

`~/Projects/_outputs/zappa-keep-it-greasey-transcriptions/` holds all three Guitar Pro
exports plus the pre-sweep baseline, every printed chart rendered and labelled by
transcriber, and the nine live part JSON files.

Two GPIF traps hit and fixed: `Notes` are shared definitions, and a ghost is a direct
`<AntiAccent>` child rather than a Property. Walking the export correctly reproduces
4,948 events and 629 ghosts, matching the CloudFront read.

The Pete Sweeney PDF holds **three** charts, not the two its manifest records.

Palette: The Royal Tenenbaums (Wes Anderson).
