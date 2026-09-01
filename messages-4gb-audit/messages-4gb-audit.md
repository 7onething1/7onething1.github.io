# Messages 4GB Audit

Band practice board tape: located, verified, split into tenths. 2026-09-01.

## Finding

No 4 GB attachment exists in Messages. All 6,594 attachment rows in `chat.db` were
scanned and the largest item in the entire history is 776 MB.

The file Brandon meant is the studio pickup named in his own message of 2026-08-17
at 23:47, "Went there today to get the full frequenxy 4GB file to mix". It never
travelled through Messages. It landed on disk 72 minutes before that text was sent.

## Source file

`~/Music/Band-Practice/band-practice-8-14-26.wav`

| Property | Value |
|---|---|
| Size | 3,584,105,324 bytes (3.58 GB) |
| Format | PCM 24-bit / 44.1 kHz stereo |
| Length | 3:45:27.76 |
| Saved | Aug 17, 22:35 |
| Integrity | Full decode, zero errors |

## Splits

Ten equal segments at 1352.7757 s each, stream-copied. Build time 4.1 seconds.
Output folder `~/Music/Band-Practice/splits-10/`.

| # | File | Start | End | Length | Size | Decode |
|---|---|---|---|---|---|---|
| 1 | part-00.wav | 0:00:00 | 0:22:32 | 22:32.79 | 341M | pass |
| 2 | part-01.wav | 0:22:32 | 0:45:05 | 22:32.79 | 341M | pass |
| 3 | part-02.wav | 0:45:05 | 1:07:38 | 22:32.79 | 341M | pass |
| 4 | part-03.wav | 1:07:38 | 1:30:11 | 22:32.79 | 341M | pass |
| 5 | part-04.wav | 1:30:11 | 1:52:43 | 22:32.70 | 341M | pass |
| 6 | part-05.wav | 1:52:43 | 2:15:16 | 22:32.79 | 341M | pass |
| 7 | part-06.wav | 2:15:16 | 2:37:49 | 22:32.79 | 341M | pass |
| 8 | part-07.wav | 2:37:49 | 3:00:22 | 22:32.79 | 341M | pass |
| 9 | part-08.wav | 3:00:22 | 3:22:55 | 22:32.79 | 341M | pass |
| 10 | part-09.wav | 3:22:55 | 3:45:27 | 22:32.70 | 341M | pass |

Sample-accuracy proof: the ten durations sum to 13527.756827 s against the source
at 13527.756825 s, a 2 microsecond gap from float rounding, under one sample at
44.1 kHz. Every part reads back as `pcm_s24le, 44100, 2`.

## Split again into hundredths

Each of the ten parts cut into ten more at 135.27757 s each, giving 100 segments of
roughly 2:15. Stream-copied again, so the PCM is untouched. Output folder
`~/Music/Band-Practice/splits-100/`.

Sample-accuracy proof: the hundred durations sum to 13527.756847 s against the source
at 13527.756825 s. That 22 microsecond spread is float rounding accumulated over 100
readings, under one sample at 44.1 kHz. Zero format mismatches (all `pcm_s24le,44100,2`)
and zero decode failures across all 100.

Naming is `p{part}-s{sub}.wav`, both zero-indexed, so `p03-s07.wav` is the eighth
sub-segment of the fourth part.

Full manifest with absolute timecodes, as a spreadsheet with a named table `Splits100`:
`~/Music/Band-Practice/splits-100-manifest.xlsx` (100 rows, columns
File / Part / Sub / AbsStart / AbsEnd / Seconds / Length / Bytes / MB / Path).

Command:

```
for i in 0..9; do
  ffmpeg -v error -i part-$i.wav -f segment -segment_time 135.27757 \
    -c copy -reset_timestamps 1 ../splits-100/p$i-s%02d.wav
done
```

## Still pending in Messages

`7.3.26 - 7:7:26, 4.57 PM_1.m4a`, 377 MB, sent 2026-07-18 22:31 by +1 (816) 810-1202,
never downloaded. Attachment ROWID 6037. This is the high-bitrate version of the
7/3/26 jam; the local copy runs at 24 kbps.

Messages in iCloud is off here (`CloudKitSyncingEnabled = 0`), so the blob lived only
on Apple's transfer servers under a roughly 30 day window and it was sent 45 days ago.
Tap the bubble first, then ask for a re-send.

Queued as `q-2026-09-01-9098c7`.

## Command

```
ffmpeg -v error -i band-practice-8-14-26.wav \
  -f segment -segment_time 1352.7757 -c copy \
  -reset_timestamps 1 part-%02d.wav
```
