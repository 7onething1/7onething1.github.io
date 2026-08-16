# 04 Six Feet Under, upload blocked 2026-08-16T21:5xZ

## The candidate is ready and gated

`_intro_bends_04/04 Six Feet Under-INTRO-BENDS.gp`

| gate | result |
|---|---|
| octave_copy_gate | PASS, exit 0. Lead 0.0% copy, was 77.4% |
| articulation | Lead 9 bends, 3 releases, was 0 and 0 |
| Tier 1 preservation | PASS 1175 -> 1175, 0 lost, 0 invented |
| Tier 1b position | PASS, 0 notes moved |
| playability | PASS both staves, 0% hand skip |
| preflight_import | PASS, CLEARED for importRevisionInput |

## Why it was NOT imported

**The live revision does not match any build on disk.** r8514035, 2026-08-16T19:21:19Z,
"added 2nd guitar", 5 tracks, 140 bars. Note counts read from its own CloudFront parts:

| part | instrument | notes |
|---|---|---|
| 0 | 27 clean gtr | 296 |
| 1 | 30 distortion | 1043 |
| 2 | 33 bass | 445 |
| 3 | 1024 drums | 1796 |
| 4 | 66 tenor sax, the vocal line | 336 |

The candidate holds 177 / 998 / 398 / 1767 / 207. Every part on the tab has MORE notes
than the candidate, including bass, drums and the vocal, which this pass never touched.
Drums differ by 29 with zero ties on either side, so this is content rather than a
counting convention. Importing the candidate as-is would strip notes from all five parts.

**The rebase route is blocked.** Songsterr's own Guitar Pro export returns the WRONG SONG
from the 04 editor URL, reproducibly, three times, including once immediately after a hard
reload during which the page demonstrably fetched the correct 04 parts
(`5824781/8514035/v0-3-2-LkbKDe7u8eBiztRt/{0..4}.json`). Every export reads:

    69 bars, Distortion 207, Overdriven 2335, Bass 338, Drums 769, Tenor Sax 310

which is **02 Flake of the Year**, matching `_DELIVER_02_flake/02 Flake of the Year.gp`
exactly on Rhythm 2335, Bass 338, Drums 769, Vocals 310. The downloaded file is NAMED
"Shhh-04 Six Feet Under-08-16-2026 (N).gp" while carrying 02's content, so the filename
cannot be trusted as identity. Quarantined at
`_songsterr_archive/s5824781-r8514035/delete/MISLABELED-actually-02-Flake-do-not-use.gp`.

Likely cause: another session's editor instance in this Chrome profile is the one wired to
the export control. Six sessions were live on The Ship tabs today.

## What IS safe on disk

`_songsterr_archive/s5824781-r8514035/part{0..4}.json` are the genuine r8514035 parts,
fetched by curl straight from the correct CloudFront path, all 200, 140 bars. That is the
irreplaceable thing and it is captured. Songsterr keeps one revision, and the old parts
start answering 403 after a new one publishes, so this archive is the safety net.

## The exact blocked operation

Obtain a Guitar Pro file of revision r8514035, then apply the nine measured bends to THAT
file rather than to the local checkpoint, then import.

Unblocks by any one of: exporting from a Chrome profile with no other Songsterr session
live; Brandon exporting r8514035 by hand; or a Songsterr-JSON to GPIF converter, which does
not exist here and must not be improvised, because a converter that guesses would fabricate
content and that is the exact failure this whole pass is about.
