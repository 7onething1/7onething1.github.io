# The Appleseed Cast tab work, audited

Checked 10 August 2026 against the files and the live services.

## Answers

- **Is it fraud?** The shipped page is honest and matches the files exactly, 0 mismatches
  across 40 numeric rows, with `silent` printed on all six empty lanes. A background job
  running right now writes bass over near-silent stems and is not gated.
- **All songs with guitar, bass and drums?** No. 46 of 56 built, and 6 of those
  carry an empty lane. Two Conversations (10 songs) was never built.
- **Synced to YouTube?** No. Zero of the 46 files are on Songsterr. Nine tabs sit
  in the account, six of them drums only.

## The live problem

`batch_twoguitar.py` (PID 44900, started 1:21 PM) has no level check.
`verify_allparts.py` globs `*-ALLPARTS.gp5` only, so every `*-4TRACK.gp5` bypasses it.

| Song | bass notes written | stem peak | stem RMS |
|---|---|---|---|
| Convict | 1,247 | -50.3 dBFS | -72.8 dBFS |
| A Tree for Trials | 205 | -45.2 dBFS | -71.9 dBFS |

Control group, same run, real bass stems came back within about 10 percent of the
three-track count.

## Empty lanes in the shipped files

- The Immortal Soul of Mundo Cani: no bass
- The Waking of Pertelotte: no bass
- Bird of Paradise: no bass
- Convict: no bass
- A Tree for Trials: no bass
- Messenger: no drums

## Songsterr

Nine private tabs. YouTube confirmed attached on Mare Mortis, Santa Maria,
Cathedral Rings and 30 Degrees 3 Am. The two four-track tabs return 403 without a login.

Full detail: <https://7onething1.github.io/appleseed-fraud-audit/>
