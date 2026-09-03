# Fraud Chat Rebuild Audit

Compiled 2026-09-03 on MacBookPro. Audited session: Fraud Chat, `local_b5aa940c`.
Files measured: 95 WAV, 9.40 GB. No audited file was modified.

## v2 mic-lanes run, live status at 13:31

The audited session restarted at 13:21 on a new design writing to `v2-mic-lanes/`. It pulls each
instrument's own close mic straight out of the four-channel master with no separation, no EQ and no
downmix, then splits the kick mic into a six-piece kit. Thirteen songs have lanes extracted. Four
DrumSep workers run on songs 17, 19, 21 and 22.

This design answers both failures of the first attempt. Lanes are verbatim mic channels, so no
fidelity claim is needed. A lane is written only when its mic is live, so a dead mic never ships as
an empty instrument. Every lane is duration-checked and decode-checked at write time, into a new tree.

### Verified: no worker collision

Four unique PIDs on four distinct songs. Lists `A:17,13,10` `B:19,11,18` `C:21,15,16` `D:22,20,12`,
no overlap. The collision the session flagged was fixed correctly.

### Verified: the mic map is exactly accurate

| Mic | Role | Live | Sub 0-120 Hz | Presence 2-6 kHz | Crest | Check |
|---|---|---|---|---|---|---|
| mic1 | kick | 27/27 | 61.6 % claim, 61.6 % real | 0.77 % / 0.77 % | 16.4 / 16.4 | Exact |
| mic2 | guitar 2 | 9/27 | 22.8 % | 3.53 % / 3.53 % | 16.6 | Exact |
| mic3 | guitar 1 | 25/27 | 20.9 % | 11.22 % / 11.22 % | 19.0 | Exact |
| mic4 | bass cab | 13/27 | 40.7 % claim, 40.7 % real | 3.67 % | 14.0 / 14.0 | Exact |

### Two independent methods agree on which songs have bass

| Song | mic4 live | Demucs bass energy | Reading |
|---|---|---|---|
| song14 | true | 14.00 % | Bass |
| song17 | true | 11.42 % | Bass |
| song18 | true | 9.24 % | Bass |
| song15 | true | 3.45 % | Bass |
| song11 | false | 2.90 % | No bass |
| song21 | false | 2.57 % | No bass |
| song22 | false | 2.46 % | No bass |
| song20 | false | 2.27 % | No bass |
| song13 | false | 1.04 % | No bass |
| song10 | false | 0.00 % | No bass |

Live mic4 songs run 3.45 % to 14.00 %. Dead mic4 songs run 0.00 % to 2.90 %. The gap is clean, so the
split is unambiguous. Brandon's call that some songs carry no bass is confirmed by both methods, and
the one to three percent on dead-mic songs is bleed from kick and toms.

### Two risks the v2 run has not accounted for

**Risk 1, the cymbals. MEASURED AND CONFIRMED at 13:52.** The first blocks landed so this was tested
rather than left as a prediction. Method: load `_blocks/b000000000000.npy` per song, lane order
`kick, snare, toms, hh, ride, crash`, compare against the same first 60 s of the v1 kit. Cymbal SHARE
of kit energy is used because it is level-independent and immune to the 1.45 s cut offset.

| Song | v1 cymbal share | v2 cymbal share | Factor |
|---|---|---|---|
| song17 | 0.60 % | 0.13 % | 4.6x thinner |
| song19 | 8.30 % | 0.32 % | withdrawn, near-silent window |
| song21 | 3.81 % | 0.17 % | 22x thinner |
| song22 | 2.12 % | 0.20 % | 11x thinner |

Absolute levels mostly rose in v2, since raw mic1 runs far hotter than the Demucs drum stem. song17
kick gained 10.13 dB and toms gained 23.49 dB. The cymbals failed to keep pace and several fell
outright: song17 crash -3.62 dB, song21 crash -5.40 dB and hh -3.83 dB, song22 crash -9.13 dB and hh
-3.25 dB. Kick and toms gain while crash and hats lose, which is what a kick-mic source predicts.

**Correction, withdrawn on 13:57 evidence.** This audit briefly flagged the v1 `song19` drumkit as
broken on the strength of its first 60 seconds. That was wrong and the flag is withdrawn. On the full
file it is healthy: kick peak -6.49 dBFS, snare -7.53, crash -12.94, all 571.0 s, against song17 kick
at -6.39. Summing the six lanes against `band/drums.wav` over a 20 s window at 200 s gives source
-57.05 dBFS and sum -57.14 dBFS, a deficit of 0.09 dB. The opening of song19 is simply near-silent.

The same error costs the song19 cymbal figure, withdrawn above, since its v1 denominator sat close to
noise. The verdict rests on song17, song21 and song22, where the v1 kick ran between -28.24 and
-30.19 dBFS in-window. The honest range is 4.6x to 22x on three songs.

The mechanism: mic1 carries almost no cymbal energy.

| Song | mic1 presence | mic3 presence | mic3 advantage |
|---|---|---|---|
| song17 | 0.19 % | 2.32 % | 12.2x |
| song19 | 0.14 % | 0.84 % | 6.0x |
| song21 | 0.20 % | 20.85 % | 104.2x |
| song22 | 0.14 % | 15.20 % | 108.6x |

The old pipeline lifted this band before separating, at +5 dB on 2.5 kHz and +7 dB on 6 kHz. The v2
path uses raw mic1 with no tilt. Prediction to check when song17 lands: hh, ride and crash come out
thinner than their v1 counterparts.

**Risk 2, clipping on the source.** mic1 clips on 25 of 27 songs, mean 23,324 samples, peak pinned at
0.00 dBFS. mic4 is worse at a mean of 30,021 across 9 of its 13 live songs. mic3 is clean at 135. The
v1 picker carried an `excluded_clipped` field and dropped mic4 on song15 for it.
`extract_mic_lanes.sh` gates on liveness alone with no clipping check. Worst cases are song4 at
169,971 samples and song26 at 126,368.

## Update at 13:10, with corrections

The audited session confirmed the finding against its own measurement and named its bug. It had
compared the LOSSLESS cut to the four-channel master through `ffmpeg -ac 1`, which averages all
four mics into one. Mic2 and mic3 roll off at 7.5 kHz and 9.7 kHz from placement, so the average
looked steeper than mic1 alone and read as an encoder shelf. `STATE-8-28.md` warns against exactly
that, saying any check of a dual-mono source must read the raw channel.

### Verified on disk

| Claim from the audited session | Check | Result |
|---|---|---|
| song13mic bass retained, 168 MB | `cmp` against Demucs source | Byte-identical, decodes clean |
| song21 restored to 8 lanes | file listing | 8 lanes present |
| All 12 folders intact | per-folder lane count | Intact |
| Nothing lost | `delete/lossy-phone-tape/` empty | Confirmed |
| The rebuild queue is stopped | process table at 13:00 | Queue stopped, song13mic ran to 13:03 |

### Correction to this audit

An earlier draft of the recommendations argued that the pre-separation tilt filter emptied the bass
lane. Brandon pushed back that some songs may have no bass at all, and that low-frequency content
could be tom and kick. He is right and the claim was wrong.

The same tilt runs on every song. Bass lane energy ranges from **0.00 % on song10 to 14.00 % on
song14**. A filter defect would flatten every song equally. The spread is real musical variation.

### Who owns the low end on song 13

| Stem | Peak dBFS | RMS dBFS | Energy below 250 Hz |
|---|---|---|---|
| `song13/drumkit/kick` | -7.75 | -27.36 | **81.6 %** |
| `song13/drumkit/toms` | -16.44 | -50.48 | 52.6 % |
| `song13/drumkit/snare` | -1.87 | -37.94 | 10.3 % |
| `song13mic/band/bass.wav` | -32.87 | -81.94 | 4.6 % |

The kick sits 54 dB above the rescued bass lane and carries 81.6 percent of its energy under 250 Hz.
The low end on song 13 belongs to kick and toms. The rescued bass lane is near-silent because song 13
has little or no bass guitar, matching the 1.04 percent the September pipeline measured.

### What a retained bass lane would actually contain

| Song | Bass lane energy | Bass peak | Reading |
|---|---|---|---|
| song14 | 14.00 % | -21.9 dB | Bass present |
| song17 | 11.42 % | -13.3 dB | Bass present |
| song18 | 9.24 % | -12.2 dB | Bass present |
| song15 | 3.45 % | -17.7 dB | Marginal |
| song11 | 2.90 % | -17.3 dB | Marginal |
| song21 | 2.57 % | -13.9 dB | Marginal |
| song22 | 2.46 % | -24.8 dB | Marginal |
| song20 | 2.27 % | -27.4 dB | Marginal |
| song13 | 1.04 % | -23.2 dB | Little or none |
| song10 | 0.00 % | -26.0 dB | None |
| song19 | not measured | - | Unknown |

Retaining bass is still worth doing. Expect three songs with a usable bass lane, six marginal, and at
least one with nothing to find.

## The verdict

The rebuild was ordered to escape a lossy source that does not exist.

`songs-8-28-LOSSLESS/` is a bit-exact copy of `mic1` from the four-mic master. It nulls to
**-400 dB** at **r = +1.000000**. The September 1 stems were built from genuinely lossless
24-bit audio. No 24 kbps material appears anywhere in that path.

A separate finding is that almost none of the requested work has been delivered regardless.

| Headline finding | Measured value | Status |
|---|---|---|
| September 1 source is lossy | refuted at -400 dB | False premise |
| Songs with a retained bass lane | 0 of 12 | Not delivered |
| Songs with a two-guitar split | 1 of 12 | Not delivered |
| Songs rebuilt from the mic master | 1 of 12, incomplete | Not delivered |
| Six-piece drumkit present | 10 of 12 | Preserved |
| All lanes decode completely | 95 of 95 pass | Verified |
| Originals deleted or overwritten | none | Honoured |

## The premise that failed

The header comment of `rebuild_from_mics.sh` states that `songs-8-28-LOSSLESS/` holds cuts of a
24 kbps AAC phone recording. The audited session repeated that claim and acted on it.

The origin is traceable to one sentence in `cut_8-28-26.sh`: "Timecodes were derived from the
24 kbps Messages transcode, which has the identical 18745.516 s duration, so they land on the
lossless WAV unchanged." The timecodes came from the lossy transcode. The audio came from a
full-quality master.

## Null-test evidence

| Comparison | r | Gain | Null residual |
|---|---|---|---|
| LOSSLESS song13 ch0 to four-mic mic1 | +1.000000 | 1.0000 | -400.00 dB |
| LOSSLESS song11 ch0 to four-mic mic1 | +1.000000 | 1.0000 | -400.00 dB |
| LOSSLESS song17 ch0 to four-mic mic1 | +1.000000 | 1.0000 | -400.00 dB |
| LOSSLESS song21 ch0 to four-mic mic1 | +1.000000 | 1.0000 | -400.00 dB |
| LOSSLESS song13 ch0 to masters-8-28/mic1_4-40PM.wav | +1.000000 | 1.0000 | -400.00 dB |
| LOSSLESS song13 ch0 to four-mic mic2 | -0.347520 | -0.4661 | -0.56 dB |
| LOSSLESS song13 ch0 to four-mic mic3 | -0.226244 | -0.1397 | -0.23 dB |
| LOSSLESS song13 ch0 to four-mic mic4 | -0.292600 | -0.0168 | -0.39 dB |

Channel 0 and channel 1 of the LOSSLESS cuts are byte-identical, so those files are dual-mono mic1.

## Spectral evidence

Same thirty seconds of song 13 measured in every source.

| Source | Rolloff at -70 dB | Energy above 16 kHz |
|---|---|---|
| `8.28.26.m4a` phone tape, 24,385 bps | 13,447 Hz | 0.0235 % |
| `songs-8-28-LOSSLESS/13` ch0 | 22,050 Hz | 2.3057 % |
| `songs-8-28-4ch/13` mic1 | 22,050 Hz | 2.3094 % |
| `songs-8-28-4ch/13` mic2 | 7,488 Hz | 0.0172 % |
| `songs-8-28-4ch/13` mic3 | 9,722 Hz | 0.0451 % |
| `songs-8-28-4ch/13` mic4 | 15,046 Hz | 0.2482 % |

Mic2 and mic3 read duller than the phone tape. That is microphone placement in a practice room.
Rolloff alone would mislead here, so the null test carries the verdict.

## The real provenance chain

```
masters-8-28/mic1_4-40PM.wav   pcm_s24le 24-bit   written Sep 1 17:27
  -> cut_8-28-26.sh, ffmpeg stream copy
songs-8-28-LOSSLESS/*.wav      pcm_s24le 24-bit dual-mono   written Sep 1 21:17
  -> run_song_8-28.sh, tilt EQ, Demucs htdemucs_6s
songNN/band/{drums,guitar}.wav
  -> separator_resumable.py, assemble_declick.py
songNN/drumkit/{kick,snare,toms,hh,ride,crash}.wav
```

`STATE-8-28.md` documented this before the rebuild began, including a warning that the
unchanged-transfer note applied to the phone tape's lossless copy rather than to the mic feeds.

## Clause-by-clause scorecard

| # | Requirement | Verdict |
|---|---|---|
| 1 | Rebuild every song built September 1 | Not done |
| 2 | Skip Sept 2 and 3 rebuilds unless drumkit traces to Sept 1 | Wrong gate |
| 3 | Decide using build dates and actual source provenance | Failed |
| 4 | Both guitar lanes from mic master, split preserved, two-voice run | Not done |
| 5 | Bass rebuilt as its own retained lane | Regressing |
| 6 | Drums from mic master, no lossy inheritance | Not done |
| 7 | Six-piece drumkit preserved | Preserved |
| 8 | Lossless WAV matching duration and sample count | Passes with a catch |
| 9 | Complete decode before marking finished | Verified here |
| 10 | Delete nothing, write to new versioned locations | Honoured |

### The sample-count catch

| Song | September 1 cut | Four-channel cut | Difference |
|---|---|---|---|
| song13 | 27,963,392 frames, 634.091 s | 28,025,550 frames, 635.500 s | +62,158 frames, +1.409 s |
| song11 | 23,506,944 frames, 533.037 s | 23,571,450 frames, 534.500 s | +64,506 frames, +1.463 s |
| song21 | 12,128,256 frames, 275.017 s | 12,193,650 frames, 276.500 s | +65,394 frames, +1.483 s |
| song17 | 33,165,312 frames, 752.048 s | 33,229,350 frames, 753.500 s | +64,038 frames, +1.452 s |

Rebuilt lanes match the four-channel source. They will not line up against the September 1
outputs kept for comparison, so A and B listening needs an explicit offset.

## What is actually on disk

Twelve song folders under `8-28/`. Zero have `band/bass.wav`. One has a `guitars/` split, built
from the September 1 guitar. Ten carry a six-piece drumkit. One reads the four-mic master,
`song13mic`, still separating drums at block 7 of 11.

Declick joints measure a step of exactly zero on every drumkit tested. Four songs had their
`_blocks` folders cleared, so the joint test examines nothing there and reports a pass without
checking. Seven songs are genuinely verified.

## Where the reasoning broke

The audited session built the right test and discarded the result. From its transcript:

> My slope test failed to discriminate, it called song 13 clean when I had already proven it
> came from the 24 kbps file. Discard that table. The decisive evidence is the source path,
> and it's unambiguous.

Song 13 is clean. The measurement was correct and the path inference was wrong. Two methods
disagreed, and the session ruled the measurement broken rather than checking the inference.

The transcript also shows a `Monitor` watch and a `ScheduleWakeup` re-arm to keep working
through all eleven songs. Standing policy in `CLAUDE.md` requires explicit authorisation for
loops and keepalive work.

## The retire gate

```bash
for n in "$@"; do
  song="song${n}"
  if [ -d "$song" ] && [ ! -f "$song/band/bass.wav" ]; then
    mv "$song" "delete/lossy-phone-tape/$song"
```

Bass does not exist for any song, which is the condition the instruction set asked to fix. Using
its absence as the retire trigger makes the test match all twelve folders. Songs built on
September 2 are pulled in even though the instruction set exempts them.

song21 was retired, its rebuild aborted at 12:34:39 with a terminated Demucs process, and the
folder existed only under `delete/` until it was restored. Recovery worked and nothing was lost.

## Recommended next step

1. Settle the premise before any further rebuild. A rebuild is worth doing for mic selection
   across four channels rather than one.
2. The bass rescue is done and verified. `song13mic/band/bass.wav` is byte-identical to its Demucs
   source and decodes clean. Grade retained bass lanes against the per-song table above, since
   silence on song10 or song13 is the correct result rather than a fault to chase.
3. Replace the retire gate with the build date and the drumkit source.
4. Record the frame offset between the two cut generations.
5. Leave the ten September 2 songs alone until the rationale is restated on measured grounds.

## Sources and methods

- Null tests: FFT cross-correlation for lag, least-squares gain fit, RMS residual in dB, numpy and soundfile.
- Spectra: 8192-point Hann STFT, magnitude averaged across a 30 s window, rolloff at -70 dB below peak.
- Format and frame counts: `ffprobe` per file, `duration_ts` read as frames.
- Decode sweep: `ffmpeg -v error -i FILE -f null -` over all 95 delivered WAVs.
- Session transcript: CCD session `local_b5aa940c`, quoted verbatim and treated as data.
- Provenance documents: `STATE-8-28.md`, `cut_8-28-26.sh`, `rebuild_from_mics.sh`, `rebuild_queue.sh`, `.run_song13mic_snapshot.sh`.
