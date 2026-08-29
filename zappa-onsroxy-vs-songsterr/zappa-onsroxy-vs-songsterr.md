# Published notation vs the Songsterr GPs

Over-Nite Sensation and Roxy & Elsewhere. Pass 1 of a per-song series: **Zomby Woof**.
Built 2026-08-29.

## The question

Songsterr's Zappa tabs are community and AI made. The archive built on 2026-08-28 holds published
notation for these same two records, so each tab can be checked against a source with real editorial
standing rather than taken on trust.

## The published side, two independent sources

**Kasper Sloots / Paul Pappas, zappa-analysis.com.** Full score of Zomby Woof from 1:39 to 2:10,
updated fall 2024, deposited at the I-depot in The Hague. Its interlude page cites the official
Over-Nite Sensation Guitar Book, page 64. Notated meter sequence: `7/8, 5/4, 10/16, 10/16, then 7/8, 6/4, 4/4`.

**Ryan Brown, DRUM Magazine.** "I always hear the 15/16 section as two groups of notes: one group of
four eighth-notes, plus one group of seven sixteenth-notes." Four eighths is 8/16, plus seven
sixteenths is 15/16.

**Combined published meter set:** `4/4, 5/4, 6/4, 7/8, 10/16, 15/16`. Six meters, two sources agreeing.

## The three tabs against that set

| Tab | Bars | BPM | Duration | Drum notes | Paren. | Published meters present | Meters written |
|---|---|---|---|---|---|---|---|
| Community, hand `s412162` | 114 | 88 | 5:03.86 | 1,612 | 32 | **6 of 6** | 3/4, 10/16, 2/4, 5/4, 15/16, 4/4, 6/4, 7/8 |
| Songsterr AI `s5820647` | 123 | 89 | 5:30.84 | 297 | 10 | **2 of 6** | 13/16, 4/4, 9/8, 7/8 |
| Yours `s6685613` | 232 | 175 | 5:08.23 | 2,076 | 0 | **3 of 6** | 4/4, 5/4, 2/4, 6/4, 5/8, 3/4 |

Album track length is 5:11.

- **The community hand tab is the only one carrying the published meter map.** Its bars 38 to 46 run
  `7/8, 5/4, 10/16 x4, 7/8, 6/4, 4/4`, the Sloots sequence in order.
- **The AI tab flattens the song.** 119 of 123 bars are 4/4. None of 5/4, 10/16 or 15/16. It invents a
  13/16 and a 9/8 that neither published source shows. 297 drum notes with 115 carrying a null pitch.
- **Yours is the most detailed and closest in length**, 2,076 notes and 5:08.23 against 5:11, with zero
  parenthesised notes, so it already meets the house standard the other two break. It writes at 175 bpm
  in 232 bars, double-time against 88 bpm in 114, which is a legitimate choice. It loses the meter
  writing: no 7/8, no 10/16, no 15/16, with twelve bars of 5/8 in their place.

## The alignment test

A matching list of meters proves less than it looks like, since the same meters could sit in the wrong
bars. The Sloots excerpt states its own timestamps, so the tab's tempo map gives an independent check.

| Event | Published | Community tab | Offset |
|---|---|---|---|
| Start of the odd-meter block | 1:39 | bar 38 at 1:41.07 | +2.1 s |
| End of the excerpt | 2:10 | bar 48 at 2:05.07 | -4.9 s |
| Whole track | 5:11 | 5:03.86 | -7.1 s |

Computed from the tab's own signatures and its six tempo marks (88, 76, 88, 90, 82, 88 bpm). The offset
stays near 2 percent across 100 seconds. That corroborates the sequence. It is not a per-bar proof, and
confirming that would need the audio.

## Verdict for Zomby Woof

| Use it for | Take | Because |
|---|---|---|
| Correct meters and bar structure | **Community s412162** | Only tab with all six published meters, in order, timed within 2 percent |
| Drum detail and playable density | **Yours s6685613** | 2,076 notes, closest duration, zero parenthesised notes |
| Anything | Not the AI s5820647 | Flattened to 4/4, invented meters, 115 null-pitched notes |

**Next move on this song:** keep your drum writing and re-bar it onto the community tab's meter map.

## Ready for the next passes

17 songs across both records have published notation plus at least one Songsterr tab. Penguin In
Bondage has the deepest published coverage at 11 images. Echidna's Arf and I'm The Slime have the most
tabs to separate, five each.

## Archive repairs made during this pass

- The archive's Zomby Woof page had been saved as a Cloudflare interstitial rather than content. 21
  other pages had the same defect at the tail of the crawl. 13 real pages refetched, 8 were legitimate
  frameset stubs, 1 is a genuine 404 on the site.
- The first crawl kept images only from pages mentioning drums, which left most per-song notation for
  these two records missing. 113 further images fetched and validated.

## Method

Songsterr notation comes from the public meta API and its CloudFront path, no browser and no login,
the route recorded in the songsterr-tab-guide skill. Meters, tempo maps and note counts are read from
the tab JSON directly. Nothing is read off a rendered screenshot.
