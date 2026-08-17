# Unpanned guitars, stem to tab: us against Songsterr and Moises

Live: https://7onething1.github.io/unpanned-guitars-tab-verdict/
Built 2026-08-17. Every number is measured, with its source named.

## The case

A guitar track with two or three guitars and no useful panning. Can we stem it and tab it, and how does that compare with Songsterr and Moises.

## Verdict

No single tool does this job. The working chain is Moises for separation, Songsterr for the rhythm transcription, ours for ownership and playability, and a hand-built tracker for the fast lead.

| Stage | Winner | Margin |
|---|---|---|
| Split 2-3 guitars, no panning | Moises | only tool that does it at all |
| Low register below 130 Hz | full mix, no stem | guitar stem keeps 1.32% at 60-90 Hz |
| Count the guitarists | ours | pan bimodality 0.79 vs 0.22-0.51 |
| Transcribe a rhythm part | Songsterr | 41.1% pitch support vs our 24.7% |
| Transcribe a fast high solo | nobody unaided | Songsterr octave-low; pyin/crepe agree 58% |
| Guitar ownership | ours | staff agreement 74% to 98.5% |
| Playability | ours | 1,111 unreachable chords to 0, 94.4% kept |
| Verification | ours, with controls | 5 of 6 detectors wrong without them |

## Key facts

- Demucs htdemucs_6s emits ONE mono `guitar.wav`. Both guitars collapse at that step.
- Demucs guitar stem keeps 1.32% of mix energy at 60-90 Hz, 9.82% at 90-130 Hz.
- Moises Guitar parts module emits Rhythm Guitars / Solo Guitars / Other Guitar, split by role rather than by position. Six songs on disk at `/Volumes/T7 Shield/Moises_Stems/`.
- Kilgore Trout panning: 2.30 dB Lead margin, 53.5% ownership (chance). Synthetic control on the same axis: 21.8 dB, 88.0%.
- Cross-channel duplication written into both staves: A Tree For Trials 56%, Blind Man's Arrow 46%, rest 19-36%.
- Songsterr on The Ship 03 Gene Lead: 563 notes, A2 to E5, frets 4-12. Real solo reaches B5 near the 12th position. Octave low.
- Songsterr on 04 Six Feet Under Lead: 247 notes, frets 0-5, against 1,315 from the isolated stem.
- 08 JGBFTL and 10 Trapped: Songsterr is BETTER than our build. More notes is not automatically better.

## The one untested experiment

A Moises Solo Guitars stem has never been fed to Songsterr. It can run today at zero cost on BELIEVEYOUME or Goldfrapp Clowns, using stems already on the T7 drive. Moises credits have read `400 Insufficient credits` since 2026-05-24.

## Sources

`~/.claude/skills/impossible-guitar-parts/SKILL.md`; memory `feedback_guitar_ownership_by_frequency_not_panning`, `reference_guitar_count_pan_bimodality_not_width`, `feedback_demucs_guitar_stem_is_blind_below_130hz`, `reference_pitch_verification_hpss_not_demucs_stems`, `project_theship_midi_gp_redo`, `reference_uvr5_stem_standard`, `project_moises_credit_burn_rootcause`; stem inventory read live from `/Volumes/T7 Shield/Moises_Stems/`.
