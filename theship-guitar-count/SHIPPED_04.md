# 04 Six Feet Under, shipped 2026-08-16T22:03:59Z

**Songsterr revision `r8516865`** on tab `s5824781`, 5 tracks, via GP.
Summary line: "Intro bends: 9 measured off the guitar stem, 3 of them bend-and-release,
bars 2-9. No notes added or removed."

## Verified from the published revision's own CloudFront parts

| part | instrument | notes | bend-bearing |
|---|---|---|---|
| 0 | 27 clean gtr, the Lead staff | 296 | **9** |
| 1 | 30 distortion | 1043 | 2 (pre-existing, bar 1) |
| 2 | 33 bass | 445 | 0 |
| 3 | 1024 drums | 1796 | 0 |
| 4 | 66 tenor sax, the vocal line | 336 | 2 (pre-existing) |

Identical to the counts on r8514035, so **nothing was lost from any part**.

## Gates, all green before the import

octave copy PASS exit 0, Lead 0.0% (was 77.4%). Articulation Lead 9 bends and 3
releases (was 0 and 0). Tier 1 preservation PASS 1175 to 1175, 0 lost and 0 invented.
Tier 1b position PASS, 0 notes moved. Playability PASS both staves at 0% hand skip.
preflight_import CLEARED, 5 tracks, no part loss, grid 1.56% off a 227.55 s record.

## The correction this supersedes

`delete/UPLOAD_BLOCKED-superseded-it-shipped.md` claimed the import would strip notes
from all five parts. **That was wrong.** It compared Songsterr's JSON counts against a
GPIF walk across a format boundary. Calibrating on 04's own AI revision r7610295 settled
it: that revision's JSON reads 445 / 1796 / 336 for bass, drums and vocals while its own
Guitar Pro export reads 398 / 1767 / 207. Songsterr counts a tied continuation where the
GPIF walk counts one attack. Per-bar, every delta of live minus candidate across all five
parts and 140 bars was 0, +1 or +2 and never negative, so the live revision was the local
checkpoint all along and the rebase was already done.

## The export bug, still open and still real

Songsterr's Guitar Pro export returned **02 Flake of the Year six times** from the 04
editor URL, every download named for 04 and holding 02's 69-bar contents. It survived a
hard reload, a new tab, a verified og:url, unregistering the shared service worker,
deleting all four caches, and fronting the tab. Not needed in the end, and it will bite
the next rebase. **Check bar count and per-part notes on anything exported from
Songsterr.** Peer session warned.

## Archives, nothing deleted

- `_songsterr_archive/s5824781-r8516865/` the published parts
- `_songsterr_archive/s5824781-r8514035/` the revision it replaced
- `_songsterr_archive/s5824781-r7610295/` the original AI revision, the calibration
