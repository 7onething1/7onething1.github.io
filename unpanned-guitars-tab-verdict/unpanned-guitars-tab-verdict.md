# Unpanned guitars, stem to tab: us against Songsterr and the Moises app

Live: https://7onething1.github.io/unpanned-guitars-tab-verdict/
Built 2026-08-17, revised same day after Brandon corrected two things: the Moises product, and the panning claim.

## The case

A guitar track with two or three guitars and only slight panning. Can we stem it and tab it, and how does that compare with Songsterr and Moises.

## Verdict

No single tool does it. The separation stage is a **cascade**: Demucs strips the band, the Moises Premium app splits the guitars by role, Songsterr transcribes the rhythm, ours fixes ownership and playability, and a hand-built tracker handles the fast lead.

| Stage | Winner | Margin |
|---|---|---|
| Isolate guitar from the band | Demucs, ours | free, local, feeds the next row |
| Split 2-3 guitars, slight panning | Moises Premium app | only tool that does it at all |
| Low register below 130 Hz | full mix, no stem | guitar stem keeps 1.32% at 60-90 Hz |
| Count the guitarists | ours | pan bimodality 0.79 vs 0.22-0.51 |
| Read slight panning safely | open problem | 72.1% on one staff, 53.5% on the other |
| Transcribe a rhythm part | Songsterr | 41.1% pitch support vs our 24.7% |
| Transcribe a fast high solo | nobody unaided | Songsterr octave-low; pyin/crepe agree 58% |
| Ownership and playability | ours | staff agreement 74% to 98.5%; 1,111 unreachable chords to 0 |

## Correction 1: the app and the developer API are different products

| Product | Guitar role split | Cost |
|---|---|---|
| Moises Free | No, vocals/drums/bass only | $0, 5 separations a month |
| Moises **Premium** | **Yes**, Lead and Rhythm, Acoustic and Electric | $3.99/mo, unlimited |
| Moises Pro | Yes, plus Hi-Fi models and drum parts | $9.99/mo, 180 min per upload |
| Moises developer API | Yes, via a wired workflow | metered, ~$3/song, `400 Insufficient credits` since 2026-05-24 |

The "Moises credits are out" blocker recorded earlier is an **API** blocker and does not touch the app. The 2026-05-25 do-not-pay ruling is likewise about the API and is argued entirely from **drum** quality.

**Disk evidence a Premium-capable account was used:** three songs on T7 carry app-style `lead` and `rhythm` exports (The Alligator, Endless Summer, Lazarus) in the `<song>-<stem>-<key>-<bpm>-<hz>.wav` app naming, dated 2026-05-10. Lead/rhythm split is Premium-only, so a Free account could not have produced them. Current billing state is unverified: Chrome on this Mac is signed out of Moises as of 2026-08-17.

## Correction 2: slight panning is real evidence, and it is not a splitter

- Kilgore Trout, real audio: 2.30 dB Lead margin at 53.5% ownership (chance); 2.96 dB Rhythm at **72.1%**, well above chance. Same recording, two very different signal qualities.
- Synthetic control on the same axis: 21.8 dB, 88.0%.
- Earlier page text said "the panning was not there to be read." That overstates it. Correct reading: the panning present is roughly a tenth of what a hard L/R method assumes, and it earns a vote rather than an assignment.

## Correction 3: reverb and delay returns are panned separately from the dry signal

The current pan reading uses **80 ms** after each transient; the ownership harmonic reading uses **80 to 150 ms**. A dry electric guitar attack is 5 to 20 ms. Everything past that is early reflections, delay repeats, and reverb, routed and panned independently of the source.

The corpus already carried the proof and it was interpreted differently: a single guitar through a Haas delay produced an L/R correlation of **0.049**, the lowest of anything measured, and a ping-pong delay produced **59.1%** onset independence. Both are one player.

Three proposed fixes, all untested:
- **A.** Measure pan on the dry attack, roughly the first 10 to 20 ms.
- **B.** Compute pan at 15 ms and again at 80 ms; disagreement means wet contamination, so discard that note rather than let it vote wrong.
- **C.** Autocorrelate the onset train per channel to find panned delay repeats before counting attacks, since a ping-pong repeat manufactures a second pan cluster out of one player.

## The cascade's one measured cost

Demucs discards the guitar's low register before Moises sees it: 1.32% of mix energy retained at 60-90 Hz, 9.82% at 90-130 Hz. In a cascade that loss is permanent and inherited by both output parts. Three ways to pay less, all untested: feed guitar **plus bass summed**; feed **mix minus drums and vocals**; or take the low register from the full mix in parallel.

## The four experiments nobody has run

1. Moises `Solo Guitars` stem into Songsterr. Settles whether the octave-low solo failure is caused by the lead being buried under a rhythm part in the same stem.
2. Three Moises inputs on one song (guitar alone, guitar+bass, mix-minus-drums-and-vocals). Settles how much 60-130 Hz loss the cascade must accept.
3. Pan estimate at 15 ms against 80 ms, per note. Settles the size of the reverb-trail problem. **Run this first**: costs nothing, needs no subscription, and it can invalidate work already shipped.
4. Seeded ownership above the 3 dB margin, propagated by register and phrase. Settles whether 53.5% is a bad signal or a badly used one.

## Sources

`~/.claude/skills/impossible-guitar-parts/SKILL.md`; memory `feedback_guitar_ownership_by_frequency_not_panning`, `reference_guitar_count_pan_bimodality_not_width`, `feedback_demucs_guitar_stem_is_blind_below_130hz`, `reference_pitch_verification_hpss_not_demucs_stems`, `project_theship_midi_gp_redo`, `reference_uvr5_stem_standard`, `project_moises_credit_burn_rootcause`; stem inventory read live from `/Volumes/T7 Shield/Moises_Stems/`; Moises plan tiers from moises.ai's own guitar-separation announcement and StemSplit's 2026 review.
