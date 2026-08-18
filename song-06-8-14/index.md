# Song 06, 8.14

A browser player for `song 06 8 14.wav`, built 2026-08-18.

Live page: https://7onething1.github.io/song-06-8-14/

## What the player does

The page loads a 256 kbps MP3 and draws the waveform from a peaks file computed off the original WAV, so the picture on screen comes from the real samples and not from a decorative shape.

Controls on the page:

- Play and pause, with a large primary button and the spacebar.
- Click or drag anywhere on the waveform to seek. A hover readout shows the time under the cursor, so you can aim the seek precisely.
- Skip back and forward ten seconds, on buttons and on the J and L keys.
- Playback speed from 0.50x up to 1.50x, useful for picking apart a fast passage.
- Volume slider.
- A and B loop points, set with the buttons or the A and B keys. The looped span draws as a shaded band across the waveform, and playback returns to A every time it reaches B.
- Keyboard: space, left and right arrows for five seconds, J and L for ten, A and B for loop points, 0 to return to the top.

## Source file

| Field | Value |
|---|---|
| File | `song 06 8 14.wav` |
| Location | iCloud Drive root |
| Duration | 176.0 seconds, 2:56 |
| Format | WAV, PCM signed 16-bit little-endian |
| Sample rate | 44,100 Hz |
| Channels | 2, stereo |
| Bit rate | 1,411 kbps |
| Size | 31,046,444 bytes, 31.0 MB |

Measured loudness, computed with soundfile and numpy over the full file:

| Measure | Value |
|---|---|
| True peak | -1.82 dBFS |
| Average RMS | -24.8 dBFS |
| Crest factor | 23.0 dB |

The peak sits under zero, so nothing clips. The average level and the wide crest figure both read as an unmastered capture with its dynamics intact.

## Encodes shipped

Both files come off the source WAV in a single ffmpeg pass at 44.1 kHz, with no gain change and no normalization applied.

| File | Codec | Bit rate | Size |
|---|---|---|---|
| `audio/song-06-8-14.mp3` | libmp3lame | 256 kbps | 5.6 MB |
| `audio/song-06-8-14.m4a` | AAC, faststart | 192 kbps | 4.3 MB |

The MP3 is the primary streaming source. The M4A is the fallback in the `<audio>` element and a second download option. The 31 MB WAV stays local and out of the repository.

## Waveform data

`peaks.json` holds 1,600 buckets covering the file. Each bucket carries a peak value and an RMS value, both normalized against the file maximum. The player draws the peak envelope in a light tone and the RMS body in ink on top, which gives a shape that shows where the energy actually sits.

## Relationship to the 8.14.26 practice tape

The name matches the numbering used in the 8.14.26 band practice catalogue, where Song 06 is `06_1-05-46_take41_score80.wav` at 10:54 long.

These are two separate recordings. Cross-correlating the 50 ms energy envelope of this 2:56 file against every window of the 10:54 take gives a best match of 0.237 at a z-score of 3.7. A genuine excerpt produces a sharp correlation near 1.0 at one offset. Nothing here reaches that, so the short file is a separate performance that shares a name and a date with the catalogued take.

Related pages:

- Practice keepers: https://7onething1.github.io/band-practice-8-14-26/
- Stem report: https://7onething1.github.io/band-practice-8-14-26-stems/

## Files

```
public/song-06-8-14/
  index.html                    the player
  index.md                      this document
  peaks.json                    1,600 peak and RMS buckets
  audio/song-06-8-14.mp3        256 kbps stream
  audio/song-06-8-14.m4a        192 kbps AAC fallback
```

Source WAV, left in place:
`~/Library/Mobile Documents/com~apple~CloudDocs/song 06 8 14.wav`
