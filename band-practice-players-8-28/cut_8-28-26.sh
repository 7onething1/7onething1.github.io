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

echo "[01/12] 1:20:05 -> 1:22:35  (150.0s)"
ffmpeg -v error -y -ss 4805.000 -t 150.000 -i "$SRC" -c copy "$OUT/01_tape1-20-05.wav"

echo "[02/12] 1:39:32 -> 1:42:45  (193.0s)"
ffmpeg -v error -y -ss 5972.000 -t 193.000 -i "$SRC" -c copy "$OUT/02_tape1-39-32.wav"

echo "[03/12] 2:02:20 -> 2:04:03  (103.0s)"
ffmpeg -v error -y -ss 7340.000 -t 103.000 -i "$SRC" -c copy "$OUT/03_tape2-02-20.wav"

echo "[04/12] 2:54:04 -> 2:56:02  (118.0s)"
ffmpeg -v error -y -ss 10444.000 -t 118.000 -i "$SRC" -c copy "$OUT/04_tape2-54-04.wav"

echo "[05/12] 3:15:42 -> 3:18:05  (143.0s)"
ffmpeg -v error -y -ss 11742.000 -t 143.000 -i "$SRC" -c copy "$OUT/05_tape3-15-42.wav"

echo "[06/12] 3:24:56 -> 3:26:03  (67.0s)"
ffmpeg -v error -y -ss 12296.000 -t 67.000 -i "$SRC" -c copy "$OUT/06_tape3-24-56.wav"

echo "[07/12] 3:28:09 -> 3:29:48  (99.0s)"
ffmpeg -v error -y -ss 12489.000 -t 99.000 -i "$SRC" -c copy "$OUT/07_tape3-28-09.wav"

echo "[08/12] 4:11:38 -> 4:12:42  (64.0s)"
ffmpeg -v error -y -ss 15098.000 -t 64.000 -i "$SRC" -c copy "$OUT/08_tape4-11-38.wav"

echo "[09/12] 4:25:44 -> 4:27:03  (79.0s)"
ffmpeg -v error -y -ss 15944.000 -t 79.000 -i "$SRC" -c copy "$OUT/09_tape4-25-44.wav"

echo "[10/12] 4:34:46 -> 4:36:43  (117.0s)"
ffmpeg -v error -y -ss 16486.000 -t 117.000 -i "$SRC" -c copy "$OUT/10_tape4-34-46.wav"

echo "[11/12] 4:38:25 -> 4:47:42  (557.0s)"
ffmpeg -v error -y -ss 16705.000 -t 557.000 -i "$SRC" -c copy "$OUT/11_tape4-38-25.wav"

echo "[12/12] 4:48:31 -> 4:53:49  (318.0s)"
ffmpeg -v error -y -ss 17311.000 -t 318.000 -i "$SRC" -c copy "$OUT/12_tape4-48-31.wav"

echo "done: $(ls "$OUT"/*.wav | wc -l) files in $OUT"
