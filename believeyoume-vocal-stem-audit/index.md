# BELIEVEYOUME vocal stem audit

Shiner, BELIEVEYOUME (2025). Audited 2026-09-05 on MacBookPro.

## The short answer

No BELIEVEYOUME stem folder holds a second vocal file. All six separated songs are Demucs 6-stem output, so each one ships exactly one `vocals.wav` beside bass, drums, guitar, other and piano.

Measuring inside those single files, three songs carry audible layering that survives a guitar-bleed control: My Mirror Hates Me, Asleep In The Trunk, and So Far So.

## Track list against what is on disk

| # | Song | Stems | Vocal files | Where |
|---|---|---|---|---|
| 01 | Asleep In The Trunk | 6-stem | 1 | Stems/shiner-believeyoume/stems/ |
| 02 | The Alligator | 6-stem | 1 | Stems/shiner-believeyoume/stems/ |
| 03 | The Mutiny | 6-stem | 1 | Stems/shiner-believeyoume/stems/ |
| 04 | So Far So | 6-stem | 1 | Stems/shiner-believeyoume/stems/ |
| 05 | My Mirror Hates Me | 6-stem | 1 | Stems/shiner-believeyoume/stems/ |
| 06 | Endless Summer | none | 0 | source flac + mp3 only |
| 07 | Lazarus | failed | 0 | Stems/shiner-lazarus/job.log |
| 08 | Not Too Much | none | 0 | source flac + mp3 only |
| 09 | Broken Satellites | none | 0 | source flac + mp3 only |
| 10 | Jackie | 6-stem | 1 | Moises_Input/stems/htdemucs_6s/ |

Lazarus is the one to fix first. Its folder exists and holds only a job log, so a separation run was started and never produced audio.

## Layering inside the single vocal file

A double-tracked or harmonised vocal spreads across the stereo field. A single centred lead stays near mono. Side energy and left-right correlation measure that directly.

| Song | Stereo width | L/R corr | Mean voices | Guitar bleed | Verdict |
|---|---|---|---|---|---|
| 05 My Mirror Hates Me | -6.11 dB | 0.649 | 2.23 | -0.06 clean | layered |
| 01 Asleep In The Trunk | -6.44 dB | 0.688 | 2.51 | 0.15 clean | layered |
| 04 So Far So | -8.54 dB | 0.793 | 2.59 | 0.32 partial | some layering |
| 02 The Alligator | -11.16 dB | 0.882 | 1.82 | 0.05 clean | one voice |
| 03 The Mutiny | -13.96 dB | 0.932 | 2.13 | 0.61 bleed | one voice |
| 10 Jackie | -14.06 dB | 0.933 | 2.24 | -0.23 clean | one voice |

### Why the bleed column decides it

Counting simultaneous pitches inside a vocal stem returned two or more voices on every song, including the narrow ones. Demucs leaks guitar into the vocal stem, and that leakage produces the same pitch count a harmony would. The Mutiny reads 0.61 correlation between its vocal side channel and its guitar stem, so its width belongs to the guitar. A pitch found in one stem never proves which instrument played it.

## Exact paths

Five songs, one folder:

    ~/Desktop/Stems/shiner-believeyoume/stems/
      1-01 Asleep In The Trunk/
      1-02 The Alligator/
      1-03 The Mutiny/
      1-04 So Far So/
      1-05 My Mirror Hates Me/

Jackie, separate folder:

    ~/Desktop/Moises_Input/stems/htdemucs_6s/Shiner - BELIEVEYOUME - 10 - Jackie/

Vocal loops already cut, four bar:

    ~/Desktop/Stems/shiner-believeyoume/loops/

Sources for the four missing songs:

    ~/Downloads/complete/complete/complete/BELIEVEYOUME (2025)/   flac
    ~/Desktop/BELIEVEYOUME/                                       mp3

## The T7 Shield copy, from stored indexes

The full album does exist on the T7, with richer per-role stems than the local copies. Two stored indexes describe that folder. Neither was read live today.

Root: `/Volumes/T7 Shield/Moises_Stems/BelieveYouMeStems/` holds 10 songs and 101 files under Moises role labels.

| # | Song | Files | Guitar stems | Vocal stems |
|---|---|---|---|---|
| 01 | Asleep in the Trunk | 9 | 0, inside `other` | 1 |
| 02 | The Alligator | 7 | 2 lead, rhythm | 1 |
| 03 | The Mutiny | 14 | 4 Rhythm, L, R, Solo | 1 |
| 04 | So Far So | 12 | 3 Rhythm, Solo, Other | 1 |
| 05 | My Mirror Hates Me | 14 | 3 Rhythm, Solo, Other | 1 |
| 06 | Endless Summer | 7 | 2 lead, rhythm | 1 |
| 07 | Lazarus | 7 | 2 lead, rhythm | 1 |
| 08 | Not Too Much | 14 | 3 Rhythm, Solo, Other | 1 |
| 09 | Broken Satellites | 13 | 3 Rhythm, Solo, Other | 1 |
| 10 | Jackie | 4 | 0, inside `other` | 1 |

Source: the 2026-08-17 sweep at `/shiner-bym-stem-contrast`. It matched any filename containing vocal, vox, backing, harmon, lead voc, choir, double, whisper or scream across five roots.

| Root swept 2026-08-17 | Vocal-name hits | What they were |
|---|---|---|
| `T7 Shield/Moises_Stems/BelieveYouMeStems/` | 10 | all named exactly `vocals`, one per song |
| `T7 Shield/Stems/BELIEVEYOUME/` | 0 | nothing |
| `T7 Shield/BandBooks/BELIEVEYOUME/` | 2 | both `vocals.wav`, demucs re-separation |
| `T7 Shield/Music to Stem/Beleiveyoume/` | 0 | source FLACs, never stemmed |
| `Moises_Input/stems/htdemucs_6s/` | 0 | nothing |

## Live probe of the mirror, 2026-09-05

The T7 stems are mirrored to a web host that this session can reach. That host was probed today, so this evidence is live rather than stored.

    audio host  https://drwu-stems.vercel.app/believeyoume-charts/stems/<stub>/<lane>.mp3
    player      https://drwu-htmls.vercel.app/believeyoume-stems
    lane keys   drums, bass, guitar, piano, vocals, midi

The control discriminates. A ranged GET on `the_mutiny/vocals.mp3` returns `206`, and a bogus path in the same folder returns `404`, so a miss means a real absence.

Twelve stubs by eleven vocal names returned nothing. Probed `vocals2, vocals_2, lead_vocals, backing_vocals, vocals_lead, vocals_backing, harmony, harmonies, vox2, doubles, choir` against all twelve player stubs. Zero hits.

The mirror serves one vocal lane per song. That matches the stored disk sweep and was measured today.

## Open conflict, 2026-09-05

Brandon reports seeing multiple vocal tracks on the T7 Shield right now. The drive is not attached to this MacBook, so this audit could not read it live. His live look outranks a stored index.

## What is not covered

The T7 was not readable from this session. Hard evidence on this MacBook: `/Volumes/` holds only Macintosh HD, `diskutil list` shows one internal disk, every Thunderbolt port reports no device connected, and the USB tree is empty. Jacks-iMac answers on the LAN at 192.168.12.113 and refuses an SMB connection, so the network route is closed too.

The disk sweep is stored, never live. It ran on 2026-08-17 and is nineteen days stale. Anything separated on the T7 since then is invisible to it.

Two T7 roots stayed outside every sweep. `Big music/` and `33 1/3/` hold audio and were never checked for this album. A second vocal stem sitting in one of those would appear in no index here.

Layering is measured, never separated. Nothing here splits a lead from a harmony into two files. Producing genuine lead and backing stems calls for a second pass with a model that outputs both.

## Method

soundfile plus scipy STFT. Harmonic salience summed over six partials on an 80 to 800 Hz quarter-tone candidate grid. Mid and side energy from the stereo pair. Envelope correlation between the vocal side channel and the guitar stem, restricted to frames where the vocal is present.
