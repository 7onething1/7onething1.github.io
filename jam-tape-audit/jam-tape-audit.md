# Jam Tape Audit

Every long band tape on this Mac, ranked by how much frequency survived the recorder, then run
through the missed-songs audit. Six tapes, 19.8 hours, 154 songs now held.

## Which tape has no frequency loss

One tape qualifies. `band-practice-8-14-26.wav` reads -38.7 dB at 16 kHz. The next best reads
-76.8 dB. Every other file in the set is a 23.6 kbps AAC voice recording, or a decode of one.

| file | codec | dB @16k | reading |
|---|---|---|---|
| 8-14-26 | PCM 24-bit 44.1k | -38.7 | real content at 16 kHz |
| 5-22-26 | AAC 23.6 kbps | -76.8 | dead above roughly 12 kHz |
| 8.28.26 | AAC 23.7 kbps | -81.7 | dead above roughly 12 kHz |
| 7.3.26 | AAC 23.7 kbps | -83.2 | dead above roughly 12 kHz |
| 5.8.26 | AAC 23.6 kbps | -85.5 | dead above roughly 12 kHz |
| 7.31.26 | AAC 23.7 kbps | -85.7 | dead above roughly 12 kHz |

Two files are copies rather than separate sessions. `7:14:26.m4a` matches the 8-14 WAV at an
envelope correlation of 0.998 once a constant 70 ms AAC priming delay is removed. The 5.8.26 WAV
matches its m4a at 1.0000 with no lag at all.

## The audit, tape by tape

| tape | hours | before | songs now | coverage | uncovered | verdict |
|---|---|---|---|---|---|---|
| 8.28.26 | 5.21 | 12 @ 10.7% | 27 | 55.5% | 0 | repaired earlier |
| 8-14-26 | 3.76 | 20 @ 65.6% | 31 | 71.6% | 0 | clean run, short cut |
| 5.8.26 | 2.96 | no prior run | 20 | 36.0% | 6 regions, 10 min | gap remains |
| 7.31.26 | 2.82 | 10 @ 10.6% | 35 | 63.6% | 0 | was broken, fixed today |
| 5-22-26 | 2.58 | no prior run | 24 | 81.7% | 1 region, 2 min | clean |
| 7.3.26 | 2.46 | no prior run | 17 | 38.2% | 7 regions, 12 min | gap remains |

## 7.31.26 carried the 8.28 failure

The old run kept 10 songs across a 169 minute tape. Song coverage measured 10.6 percent, almost
exactly the 10.7 percent the broken 8.28 run produced. The audit found 21 stretches with no take,
totalling 44 minutes. Ten were sampled and transcribed, all returning zero words against a talk
control from the same tape that returned 37 words at 0.93 words per second.

Re-running with `--calib loudness` took the tape from 10 songs to 35 and coverage from 10.6 percent
to 63.6 percent, with zero uncovered regions after. Thirty of the 35 songs are ones the old run
never held in any form.

Two old songs do not appear whole in the new run, and both are accounted for. The take at 1:36:57
is now split across two songs covering the same audio. The take at 0:30:08 is a 53 second stretch
the new run calls two fragments, which is the one genuine downgrade.

## The 8-14 cut that shipped is short

The 8-14 detector run is healthy. Coverage reads 71.6 percent, and the audit reports zero uncovered
regions. The cut on disk came from the strict run, which holds 20 songs. The default run on the same
tape holds 31. All 20 strict songs sit inside longer default takes, so the strict pass was clipping
songs as well as dropping them.

Eleven songs in the default run have no counterpart in the shipped cut, at 0:10:24, 0:15:58,
0:20:21, 0:33:40, 0:38:39, 1:17:26, 1:25:46, 1:42:20, 2:05:36, 2:28:41 and 3:31:31. Those eleven were exported by the detector on 2026-08-18 and sit as WAVs in
`~/Projects/_outputs/real-song-finder/band-practice-8-14-26/songs/`. The gap is in the curation
step rather than the export.

## Two tapes still hold uncovered playing

Three tapes had never been through the song detector at all. Two come back with playing the new run
still does not hold.

- **5.8.26** reads 36.0 percent coverage across 20 songs. Six regions totalling 10 minutes measure
  as playing and carry no take. All six transcribed to zero words against a talk control that
  returned six words.
- **7.3.26** reads 38.2 percent coverage across 17 songs. Seven regions totalling 12 minutes carry
  no take. All seven transcribed to zero words against a talk control that returned 20 words.
- **5-22-26** reads 81.7 percent coverage across 24 songs, the highest here. One region of two
  minutes carries no take.

## The calibration flag decides every lossy tape

Running both calibrations across the whole set shows `--calib loudness` is the correct setting for
every phone recording here.

| tape | fidelity | default calib | loudness calib | gain |
|---|---|---|---|---|
| 5-22-26 | lossy | 8 @ 7.1% | 24 @ 81.7% | +74.6 pts |
| 7.31.26 | lossy | 10 @ 10.6% | 35 @ 63.6% | +53.0 pts |
| 8.28.26 | lossy | 12 @ 10.7% | 27 @ 55.5% | +44.8 pts |
| 5.8.26 | lossy | 15 @ 16.9% | 20 @ 36.0% | +19.1 pts |
| 7.3.26 | lossy | 13 @ 19.5% | 17 @ 38.2% | +18.7 pts |
| 8-14-26 | full band | 31 @ 71.6% | not needed | default is already correct |

5-22-26 is the sharpest case. Under the default calibration it returns 8 songs at 7.1 percent
coverage, the worst reading anywhere in this set. Under loudness it returns 24 songs at 81.7
percent, the best. The tape did not change between those two runs.

The split follows fidelity rather than session. Pulse salience carries information when the
recording has real high frequency content, and carries noise when a 23.6 kbps encoder has stripped
the transient detail the autocorrelation depends on.

**Standing rule:** run `--calib loudness` on any phone or voice memo band tape. Keep the default for
full band masters, and check the tape's level at 16 kHz, then choose.

## Method, controls, and limits

```bash
python3 scripts/profile_tape.py --audio TAPE --out profile.npz
python3 scripts/audit_coverage.py --profile profile.npz --manifest MANIFEST.json --talk START END
~/.venvs/rsf311/bin/python scripts/speech_probe.py --audio TAPE --windows windows.json
python3 scripts/compare_runs.py --old OLD.json --new NEW.json
```

The talk control is the load-bearing part. The first probe on 7.31.26 returned zero words in all
eleven windows, including the ones meant to be conversation. The script refused to let that stand,
because a batch with no talk control cannot prove that a zero-word reading means music. A 24 window
sweep across the whole tape then found speech at 1:48, and the audit was re-run against it.

Three limits belong with these numbers. Recall of the audit test against each detector's own songs
runs 80 to 83 percent, so it under-reports. The talk control fires the test between 0 and 33 percent
depending on tape, which is why every region here was transcribed rather than believed on spectrum
alone. Each probe samples 75 seconds from the middle of a region, so a long region is confirmed at
its centre.

Audit scripts: `~/.claude/skills/missed-songs-audit/scripts/`.
Detector: `~/.claude/skills/real-song-finder/find_songs.py`.
Run manifests: `~/Projects/_outputs/real-song-finder/`.
