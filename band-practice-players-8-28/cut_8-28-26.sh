#!/usr/bin/env bash
# Re-cut the 12 complete takes of the 8.28.26 session from a full-quality master.
# Timecodes were derived from the 24 kbps Messages transcode, which has the
# identical 18745.516 s duration, so they land on the lossless WAV unchanged.
# usage: ./cut_8-28-26.sh /path/to/8-28-26-master.wav [outdir]
set -euo pipefail
SRC="${1:?need the master audio file}"
OUT="${2:-./8-28-26-songs}"
mkdir -p "$OUT"

SRC_DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SRC")
echo "master duration: $SRC_DUR s (expected ~18745.516)"

echo "[01/12] 0:00:00 -> 0:07:41  (461.0s)"
ffmpeg -v error -y -ss 0.000 -t 461.000 -i "$SRC" -c copy "$OUT/01_tape0-00-00.wav"

echo "[02/12] 0:53:01 -> 0:58:46  (345.0s)"
ffmpeg -v error -y -ss 3181.000 -t 345.000 -i "$SRC" -c copy "$OUT/02_tape0-53-01.wav"

echo "[03/12] 1:00:54 -> 1:07:19  (385.0s)"
ffmpeg -v error -y -ss 3654.000 -t 385.000 -i "$SRC" -c copy "$OUT/03_tape1-00-54.wav"

echo "[04/12] 1:08:14 -> 1:11:39  (205.0s)"
ffmpeg -v error -y -ss 4094.000 -t 205.000 -i "$SRC" -c copy "$OUT/04_tape1-08-14.wav"

echo "[05/12] 1:19:21 -> 1:25:49  (388.0s)"
ffmpeg -v error -y -ss 4761.000 -t 388.000 -i "$SRC" -c copy "$OUT/05_tape1-19-21.wav"

echo "[06/12] 1:36:40 -> 1:39:13  (153.0s)"
ffmpeg -v error -y -ss 5800.000 -t 153.000 -i "$SRC" -c copy "$OUT/06_tape1-36-40.wav"

echo "[07/12] 1:39:26 -> 1:44:05  (279.0s)"
ffmpeg -v error -y -ss 5966.000 -t 279.000 -i "$SRC" -c copy "$OUT/07_tape1-39-26.wav"

echo "[08/12] 1:44:28 -> 1:46:00  (92.0s)"
ffmpeg -v error -y -ss 6268.000 -t 92.000 -i "$SRC" -c copy "$OUT/08_tape1-44-28.wav"

echo "[09/12] 1:51:29 -> 1:53:49  (140.0s)"
ffmpeg -v error -y -ss 6689.000 -t 140.000 -i "$SRC" -c copy "$OUT/09_tape1-51-29.wav"

echo "[10/12] 1:59:59 -> 2:02:02  (123.0s)"
ffmpeg -v error -y -ss 7199.000 -t 123.000 -i "$SRC" -c copy "$OUT/10_tape1-59-59.wav"

echo "[11/12] 2:02:20 -> 2:11:13  (533.0s)"
ffmpeg -v error -y -ss 7340.000 -t 533.000 -i "$SRC" -c copy "$OUT/11_tape2-02-20.wav"

echo "[12/12] 2:12:33 -> 2:14:32  (119.0s)"
ffmpeg -v error -y -ss 7953.000 -t 119.000 -i "$SRC" -c copy "$OUT/12_tape2-12-33.wav"

echo "[13/12] 2:21:16 -> 2:31:50  (634.0s)"
ffmpeg -v error -y -ss 8476.000 -t 634.000 -i "$SRC" -c copy "$OUT/13_tape2-21-16.wav"

echo "[14/12] 2:46:42 -> 2:49:25  (163.0s)"
ffmpeg -v error -y -ss 10002.000 -t 163.000 -i "$SRC" -c copy "$OUT/14_tape2-46-42.wav"

echo "[15/12] 2:52:01 -> 3:00:03  (482.0s)"
ffmpeg -v error -y -ss 10321.000 -t 482.000 -i "$SRC" -c copy "$OUT/15_tape2-52-01.wav"

echo "[16/12] 3:01:21 -> 3:08:07  (406.0s)"
ffmpeg -v error -y -ss 10881.000 -t 406.000 -i "$SRC" -c copy "$OUT/16_tape3-01-21.wav"

echo "[17/12] 3:10:51 -> 3:23:23  (752.0s)"
ffmpeg -v error -y -ss 11451.000 -t 752.000 -i "$SRC" -c copy "$OUT/17_tape3-10-51.wav"

echo "[18/12] 3:23:56 -> 3:30:06  (370.0s)"
ffmpeg -v error -y -ss 12236.000 -t 370.000 -i "$SRC" -c copy "$OUT/18_tape3-23-56.wav"

echo "[19/12] 3:35:51 -> 3:45:22  (571.0s)"
ffmpeg -v error -y -ss 12951.000 -t 571.000 -i "$SRC" -c copy "$OUT/19_tape3-35-51.wav"

echo "[20/12] 3:47:38 -> 3:50:53  (195.0s)"
ffmpeg -v error -y -ss 13658.000 -t 195.000 -i "$SRC" -c copy "$OUT/20_tape3-47-38.wav"

echo "[21/12] 3:55:09 -> 3:59:44  (275.0s)"
ffmpeg -v error -y -ss 14109.000 -t 275.000 -i "$SRC" -c copy "$OUT/21_tape3-55-09.wav"

echo "[22/12] 4:00:08 -> 4:04:42  (274.0s)"
ffmpeg -v error -y -ss 14408.000 -t 274.000 -i "$SRC" -c copy "$OUT/22_tape4-00-08.wav"

echo "[23/12] 4:04:58 -> 4:07:17  (139.0s)"
ffmpeg -v error -y -ss 14698.000 -t 139.000 -i "$SRC" -c copy "$OUT/23_tape4-04-58.wav"

echo "[24/12] 4:10:07 -> 4:20:27  (620.0s)"
ffmpeg -v error -y -ss 15007.000 -t 620.000 -i "$SRC" -c copy "$OUT/24_tape4-10-07.wav"

echo "[25/12] 4:22:11 -> 4:32:09  (598.0s)"
ffmpeg -v error -y -ss 15731.000 -t 598.000 -i "$SRC" -c copy "$OUT/25_tape4-22-11.wav"

echo "[26/12] 4:32:15 -> 4:54:04  (1309.0s)"
ffmpeg -v error -y -ss 16335.000 -t 1309.000 -i "$SRC" -c copy "$OUT/26_tape4-32-15.wav"

echo "[27/12] 5:01:47 -> 5:08:19  (392.0s)"
ffmpeg -v error -y -ss 18107.000 -t 392.000 -i "$SRC" -c copy "$OUT/27_tape5-01-47.wav"

echo "done: $(ls "$OUT"/*.wav | wc -l) files in $OUT"
