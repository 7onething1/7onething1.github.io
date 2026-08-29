# The Appleseed audio verdicts were a measurement artifact

29 of 46 songs were marked audio refuted on 2026-08-29 and queued for re-transcription. The
measure that produced those verdicts calls 3 of 8 HUMAN Songsterr transcriptions of these same
songs refuted against their own recordings.

## Verdict

- The 29-song work order is sorted by a duration artifact. Correlation of the margin to the
  winning control's single-onset pileup is -0.861; correlation of that pileup to the control
  recording simply being shorter is +0.850.
- The 11 supports are not safe either: 7 of 11 flip to refuted when controls are
  picked by duration instead of onset count.
- 7 tabs are positively confirmed by a validated measure, 0 of 162 known
  wrong pairings pass its gate. Everything else is undetermined, which is where 5 of the 8
  known-good human tabs also land.

## Mechanism

`beat_map.py` runs `librosa.sequence.dtw(subseq=False)` with no global constraint. The audit
picks control stems by onset count and ignores duration. A control shorter than the song forces
the path to compress the tab into it, and the compression lands as flat runs, hundreds of
attacks on one onset, all counted as hits at the 30 ms window. Confession's winning control put
663 of its 1859 hits on a single onset; Confession's own map put 3. The existing collapse guard
tests the mean against 2.0 and cannot see a tail.

## Repairs tried, on the 8 known-good tabs

| measure | own beats every wrong stem |
|---|---|
| raw warped alignment percent, what produced the verdicts | 5 of 8 |
| controls matched on duration too | 2 of 8 |
| distinct-onset score, immune to piling | 0 of 8 |
| banded DTW at radius 0.20 / 0.10 / 0.05 / 0.02 / 0.01 | 3, 3, 2, 3, 3 of 8 |
| warped gain over each stem's own chance | 4 of 8 |
| **pre-warp alignment, chance-normalised** | **6 of 8** |

## The surviving measure

Alignment before any warp, +/-3 s offset search offered equally to every stem, scored as gain
over that recording's own chance level. Gate: z >= 5.0 and gain >= 5.0 points over every
duration-matched wrong stem. False positives 0 of 162. Asymmetric by construction: it
confirms, it never refutes.

Blind Man's Arrow and Mile Marker are each confirmed independently by both a human tab and a
machine tab against the same recording. Blind Man's Arrow had been listed at -22.9 refuted.

### Confirmed

- **s6389349_Mile-Marker** (human) gain +34.8, z +81.6, +34.0 over wrong stems
- **s6389274_Blind-Mans-Arrow** (human) gain +22.7, z +32.8, +20.9 over wrong stems
- **s6389335_A-Tree-For-Trials** (human) gain +16.7, z +12.9, +15.6 over wrong stems
- **Low-Level-Owl-I-10-Mile Marker** (machine) gain +9.5, z +19.8, +9.5 over wrong stems, previously supported +5.8
- **Low-Level-Owl-II-09-Decline** (machine) gain +9.4, z +5.9, +6.6 over wrong stems, previously supported +14.6
- **Low-Level-Owl-I-06-Doors Lead to Questions** (machine) gain +7.4, z +9.7, +7.0 over wrong stems, previously refuted -1.7
- **Low-Level-Owl-I-03-Blind Mans Arrow** (machine) gain +6.9, z +13.2, +5.8 over wrong stems, previously refuted -22.9

## Not established, left open

- Whether Confession's tab is accurate. Gain -0.8, best wrong stem
  +0.4. The measure cannot speak on it.
- Whether re-transcribing from stems would improve anything, since the result cannot be scored
  on audio with this project's tools. **The Confession re-transcription was not started**, on
  the ground that it would produce an artifact nobody can grade.
- Why 42 of 46 machine tabs are undetermined. Most likely a single constant BPM written into
  files whose performances move, which says nothing about the notes.

Playability is unaffected: it was measured against the files rather than the audio. Hard failures 1248
to 212, 15 of 46 hard clean, stands.

Mare Vitalis track 7 is written here as And Nothing Less. The released title begins with an
ellipsis and the filename on disk is unchanged.

Measured 29 August 2026. Tools and raw records in
`~/Projects/_outputs/appleseed-regen-2026-08-28/`.
