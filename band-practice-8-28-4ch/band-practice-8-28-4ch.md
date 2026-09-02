# 8.28.26 four-mic master

Eight mics down to four channels. Four separate 4.97 GB files off Google Drive,
stacked into one time-synced master and verified bit-exact against every source.

## Result

`~/Music/Band-Practice/practice-8-28-4ch.flac`
5,315,839,921 bytes, FLAC, 4 channels, 24-bit, 44.1 kHz, 18745.373515 s (5:12:25).

Channel order is mic1, mic2, mic3, mic4, matching the Drive titles 4.40 PM,
4.48 PM 3, 4.53 PM and 4.44 PM II.

## The measurements behind it

**Every source is true dual-mono.** `max |L - R| = 0.00e+00` at nine windows across
the three original feeds, correlation `+1.000000` in every one. Half of each file
duplicates the other half, so four files carry four real channels.

**The mic-to-mic lags are acoustic.** GCC-PHAT against mic1 gives mic2 at +12.222
to +12.494 ms and mic3 at +14.195 to +14.580 ms across 30, 90 and 180 minutes,
then both flip negative at 240 minutes. Lags that move with the window track path
length, not a clock. 12 ms of air is about 4.1 m. The master therefore stacks at
zero offset, and correcting these would smear the room image.

**The phone tape shares the recorder's clock.** Cross-correlated against mic1 at
10, 45, 90, 150, 210 and 270 minutes, the offset is `+0.0697 s` at every window,
identical to four decimals, with peak/median from 192 to 1008. No drift. The
conversion for the song timecodes is `mic_time = phone_time - 0.0697`.

**The master is bit-exact.** Each master channel read against its own source, raw
channel to raw channel: `0.000e+00` difference on all four channels at 20, 120 and
260 minutes. Twelve of twelve, RMS ratio `1.000000` in every cell.

## Why FLAC

A 4-channel 24-bit WAV of this runtime is 9.9 GB and the drive had 13.4 GB free,
which would have left 3.4 GB on a volume already at 97 percent. Measured FLAC
ratio on real content was 0.468. Expanding is one command:

```bash
ffmpeg -i practice-8-28-4ch.flac -c:a pcm_s24le -rf64 auto practice-8-28-4ch.wav
```

## Still pending

Per-song 4-channel cuts. The 27 songs total 2.89 h, about 2.58 GB as 4-channel
FLAC, and the drive is at 100 percent with three unrelated Chrome downloads
writing into it. The cutter is written and validated:

```bash
python3 ~/Music/Band-Practice/cut_songs_4ch.py
```

It was adapted from the existing `cut_8-28-26.sh`, keeping its timecodes and take
selection, and adding the 69.7 ms correction, a sample-accurate seek in place of
`-c copy`, per-cut length and channel verification, and a manifest.

## Files

- Master: `~/Music/Band-Practice/practice-8-28-4ch.flac`
- Sources: `~/Music/Band-Practice/masters-8-28/`
- Working notes: `~/Music/Band-Practice/STATE-8-28.md`
- Cutter: `~/Music/Band-Practice/cut_songs_4ch.py`
- Daemon: `~/Music/Band-Practice/mic4_merge_daemon.sh`, launchd `com.drwu.mic4-merge`
