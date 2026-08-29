# Published notation vs the Songsterr GPs

Over-Nite Sensation and Roxy & Elsewhere. Pass 1 of a per-song series: **Zomby Woof**.
Built 2026-08-29.

## The question

Songsterr's Zappa tabs are community and AI made. The archive built on 2026-08-28 holds published
notation for these same two records, so each tab can be checked against a source with real editorial
standing rather than taken on trust.

## The published side, two independent sources

**Kasper Sloots / Paul Pappas, zappa-analysis.com.** Full score of Zomby Woof from 1:39 to 2:10,
updated fall 2024, deposited at the I-depot in The Hague. He identifies it as a transcription from the recording. A separate interlude image on the same page is
reproduced from the Over-Nite Sensation Guitar Book, page 64, as a comparison rather than as the source. Notated meter sequence: `7/8, 5/4, 10/16, 10/16, then 7/8, 6/4, 4/4`.

**Ryan Brown, DRUM Magazine.** "I always hear the 15/16 section as two groups of notes: one group of
four eighth-notes, plus one group of seven sixteenth-notes." Four eighths is 8/16, plus seven
sixteenths is 15/16.

**Combined published signature labels:** `4/4, 5/4, 6/4, 7/8, 10/16, 15/16`. Six labels drawn from two
sources covering different passages. Their overlap is limited, so this is combined coverage without
contradiction rather than mutual corroboration. Neither confirms the other's bars.

## The three tabs against that set

| Tab | Bars | BPM | Duration | Drum notes | Paren. | Published meters present | Meters written |
|---|---|---|---|---|---|---|---|
| Community, editor-made `s412162` | 114 | 88 | 5:03.86 | 1,574 | 32 | **6 of 6** | 3/4, 10/16, 2/4, 5/4, 15/16, 4/4, 6/4, 7/8 |
| Incomplete upload `s5820647` | 123 | 89 | 5:30.84 | 182 | 10 | **2 of 6** | 13/16, 4/4, 9/8, 7/8 |
| Yours `s6685613` | 232 | 175 | 5:08.23 | 2,063 | 0 | **3 of 6** | 4/4, 5/4, 2/4, 6/4, 5/8, 3/4 |

Album track length is 5:11.

- **One of the three tabs uses all six published signature labels.** The community hand tab carries every
  one, and its bars 38 to 50 run `7/8, 5/4, 10/16 x4, 7/8, 6/4, 4/4 x5`, matching the thirteen bars Sloots
  prints, in order. That makes it the strongest provisional bar map. A label matching a label is not yet a
  verified transcription.
- **The AI tab flattens the song.** 119 of 123 bars are 4/4. None of 5/4, 10/16 or 15/16. It invents a
  13/16 and a 9/8 that neither published source shows. 182 real drum notes, and two of its five staves hold nothing but rests.
- **Yours is the densest drum candidate with the closest calculated duration.** 2,063 notes shows density.
  5:08.23 against 5:11 shows approximate structural coverage. Zero parenthesised notes shows compliance
  with the house file rule. None of those establishes accurate drums, appropriate cymbals, playable
  orchestration or correct attack placement, so it stays a detailed repair candidate pending comparison
  against the audio. It writes at 175 bpm in 232 bars, double-time against 88 bpm in 114, a legitimate
  choice. It does not carry the 7/8, 10/16 or 15/16 labelling, with twelve bars of 5/8 in their place.

## The alignment test

A matching list of labels proves less than it looks like, since the same labels could sit in the wrong
bars. Sloots states his timestamps and prints thirteen bars, so the tempo map checks span and contents.

| Span mapped | Bars | Tab duration | vs the 31.0 s excerpt |
|---|---|---|---|
| b38 to b46 | 9 | 21.33 s | -31.2% |
| b38 to b48 | 11 | 26.67 s | -14.0% |
| **b38 to b50** | **13** | **32.00 s** | **+3.2%** |
| b38 to b52 | 15 | 37.33 s | +20.4% |

**Correction, 2026-08-29.** The first version of this page mapped nine bars and reported the alignment
as 2 percent. That came from dividing each endpoint offset by its absolute position in the song, which
measures nothing about alignment. Across the excerpt itself the nine-bar span is 31.2 percent short.
The fault was mapping nine bars against the thirteen Sloots prints.

Thirteen bars is both the count Sloots prints and the closest duration match, 32.00 s against 31.0 s.
Endpoints sit at +2.07 s and +3.07 s, so the tab runs about a second long across the passage. The
thirteen-bar run is `7/8, 5/4, 10/16, 10/16, 10/16, 10/16, 7/8, 6/4, 4/4, 4/4, 4/4, 4/4, 4/4`, the
order and page breaks Sloots prints.

Computed from the tab's own signatures and six tempo marks (88, 76, 88, 90, 82, 88 bpm). This
corroborates the bar map at the level of labels and span. It is not a per-bar proof of the notes, and
confirming that needs the album master.

**On the parenthesised notes.** A parenthesis is a normal ghost-note convention in published drum
notation. Counting them records a house file rule, and does not by itself mark a transcriber's error.

## Verdict for Zomby Woof

| Use it for | Take | What the measurement supports |
|---|---|---|
| Bar map and signature labels | **Community s412162** | The strongest provisional bar map. All six labels, printed order, thirteen-bar span within 3.2% |
| Drum material to repair from | **Yours s6685613** | The densest drum candidate with the closest calculated duration. No evidence yet on accuracy, cymbals, orchestration or attack placement |
| Nothing yet | s5820647 | Flattened to 4/4, labels no source shows, two staves are rests only |

**Next move on this song:** align the community bar map against the exact album master first, then move
your drum material into that structure bar by bar. Re-barring before that alignment is confirmed would
carry any error in the map into the result.

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

## Corrections, 2026-08-29

**Rests were counted as notes.** Songsterr's JSON emits a `{"rest": true}` object inside each beat's
note list. An earlier version of this page reported `s5820647` as "297 notes, 115 null-pitched, so the
part is malformed". Those 115 are rests, which is ordinary notation. Every count here is now
rest-excluded.

**Provenance was mislabelled.** Songsterr's API records `s412162` as editor-made (meh32 over Ben
Dibden1) and BOTH `s5820647` and `s6685613` as AI runs, the first uploaded by CoolDude and the second
Brandon's own. The three do not divide into hand versus AI versus mine. What separates them is how
completely each was uploaded, measured per staff, rests excluded:

| Staff | s5820647 | s6685613 |
|---|---|---|
| Lead Guitar | 0 | 651 |
| Rhythm Guitar | 108 | 532 |
| Bass | 121 | 1,176 |
| Drums | 182 | 2,063 |
| Vocals | 0 | 380 |
| **Total** | **411** | **4,802** |

A survey of 34 Zappa tabs across both records found staves containing only rests on three of them, and
never on a tab built in the editor.

**Ghost against grace.** Against the flam test (a short preparatory stroke on snare or tom with a main
strike following), 357 of the 359 parenthesised drum notes across these tabs are true ghosts on their
own subdivision. Only 2, both in Montana, are genuine flam candidates. Converting the rest to grace
notes would misread quiet sixteenths as flams.
