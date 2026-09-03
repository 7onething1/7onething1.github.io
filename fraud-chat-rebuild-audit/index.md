# Fraud Chat Rebuild Audit

Compiled 2026-09-03 on MacBookPro. Audited session: Fraud Chat, `local_b5aa940c`.
Files measured: 95 WAV, 9.40 GB. No audited file was modified.

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
