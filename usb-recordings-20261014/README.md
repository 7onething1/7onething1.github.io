# USB Recording Transcripts, 2026-10-14

**Source:** `/Volumes/USB20FD`, the six `Recording (304)` to `(309)` m4a files. The MP4s were skipped as asked; they were transcribed on 2026-09-30 in `../usb-meetings-20260930/`.
**Method:** faster-whisper base, int8, CPU, local. Each stretch of sound is transcribed on its own, so a long silence cannot end the run.

## Result

**All six transcribed start to finish, 15.7 hours, 96,283 words.** Every file reports `truncated: false` and 0 seconds untranscribed, and no stretch that held sound came back without words.

| Recording | Saved | Length | Words | Breaks of 15 min or more | Last words |
|---|---|---|---|---|---|
| (304) | 2026-09-21 | 2:13:19 | 15,594 | none | 2:13:18 |
| (305) | 2026-09-22 | 1:27:14 | 8,341 | **0:57:56 to 1:13:23**, silence, 1,452 words follow it | 1:27:10 |
| (306) | 2026-09-24 | 3:00:00 | 16,450 | **1:24:42 to 1:40:32**, no speech; 2:43:59 to end, silence | 2:43:59 |
| (307) | 2026-09-25 | 3:00:00 | 19,566 | **2:04:34 to 2:22:16**, silence, 3,849 words follow it | 2:59:58 |
| (308) | 2026-09-30 | 3:00:00 | 17,574 | 2:38:50 to end, no speech after the sign-off | 2:38:50 |
| (309) | 2026-10-01 | 3:00:00 | 18,758 | none, sign-off at 2:51:03 | 2:51:03 |

## Checks that were run

1. **Known-answer test, run ahead of the real files.** 60 s of real meeting speech, 16 min of silence, a different 60 s of speech. Both sides came back, the break was marked, nothing was cut.
2. **Every wordless gap was transcribed directly.** The 306 gap, the 308 tail and the 309 tail each went through Whisper on their own. All three gave only "You" repeated, Whisper's known output over silence, at -54 to -61 dB mean. No speech is hiding in them.
3. **Repeat-loop scan.** Longest run of identical consecutive lines in any file is 5 ("okay."). The in-line repeats are speech ("No, no, no, no").

## To note

- **(306) through (309) are each exactly 3:00:00.** In (307) speech runs to 2:59:58, so that session continued past what was recorded. The recorder appears to stop at three hours.
- Lone filler lines ("Okay.", "You") are counted per file in `raw/audit.json` and left in the raw data.
- No speaker labels. No diarization model was used.

## Files

- Readable transcripts: `2026-09-2x Recording 30x (N min).txt` in this folder
- Reader page: `index.html` (local only)
- Raw JSON, timestamped text, meta, audit, scripts: `raw/`
