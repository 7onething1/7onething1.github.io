# Glostik Songs, the Ballroom layout

Route `/glostik-songs/poster`. Built 2026-09-20. This is the fourth layout of the song archive and
the fifth route. It is not a revision of any page already on the site.

---

## 1. What it is drawn from

Fillmore and Avalon Ballroom bills, 1966 to 1971. Three sources carry most of the weight.

**Wes Wilson's lettering.** His word does one thing above everything else, which is fill the panel
it sits in. A letter near the middle of a word is taller and fatter than a letter at the end, every
letter leans away from the centre, and the counters close up until the word reads as one shape. No
typeface does that, so the page draws it. GLOSTIK is seven separate SVG `<text>` elements placed on
a shallow arc, each scaled by how near the middle it sits and rotated by how far from it, laid down
three times in flame, hot pink and gold with each pass landing a few units off the last.

**Victor Moscoso's colour.** Two inks of the same value laid edge to edge so the boundary vibrates.
That pairing appears here only where both colours are display sized or both are decoration. No body
text is set in a vibrating pair anywhere on the page.

**Underground newspaper typesetting.** A news gothic for the reading, a typewriter for the dates and
the small print. Archivo carries the titles and the interface, Courier Prime carries every date,
count, stamp and caption, Anton carries the section names and the large numerals, and Modak draws
the word.

Nothing is traced and no poster image is loaded. The lettering, the inks, the paper grain, the
halftone and the ray field are all drawn in the browser.

---

## 2. The inks

Six screen inks and three paper stocks. Contrast is measured against the stock each ink prints on.

| token | hex | on paper `#EDE1C4` | allowed to carry |
|---|---|---|---|
| `--k-ink` | `#1A0E28` | 15.0 : 1 | everything |
| `--k-grape` | `#4A1D7A` | 9.2 : 1 | everything |
| `--k-rose` | `#A81159` | 5.5 : 1 | everything |
| `--k-rust` | `#9E3410` | 5.4 : 1 | everything |
| `--k-olive` | `#4E5C10` | 5.6 : 1 | everything |
| `--k-teal` | `#06617A` | 5.3 : 1 | everything |
| `--k-faded` | `#6B5F49` | 4.8 : 1 | secondary text and rules |
| `--k-hot` | `#E0197C` | 3.5 : 1 | display only, 24px and up |
| `--k-flame` | `#C4441A` | 3.8 : 1 | display only, 24px and up |
| `--k-gold` | `#E3A100` | 1.9 : 1 | never on paper, 7.6 : 1 on ink |

On the ink ground `#1A0E28`: paper 12.9, gold 7.6, sky 8.0, lilac 8.2.

Every section floods with its own ink through `--k-flood`, so one declaration changes the nav layer,
the stamps, the rules and the section lettering for a whole tab.

---

## 3. How it differs from the other four

Measured with headless Chrome against the live URLs, blurred to 24 by 15 and compared cell by cell.

| pair | 1440 x 900 | 390 x 844 |
|---|---|---|
| root vs new vs experimental | 0.0 | 0.0 to 0.4 |
| experimental-1 vs archive | 0.1 | 4.3 |
| experimental vs metal | 21.9 | 24.5 |
| **metal vs poster**, the nearest | **37.8** | **46.2** |
| poster vs everything else | 49.5 to 50.4 | 57.7 to 63.5 |

Mean rendered luminance: poster 0.214 at desktop and 0.274 on a phone, against 0.088 to 0.124 for
every other layout. It is the only route on the site that is neither a light page nor a dark one.

`divergence_check.py` reads the body background for its ground axis, and that measurement is wrong
for a page whose shell is ink and whose reading surface is paper. It reports `TOO CLOSE` at 1.1 : 1
against four of the existing layouts while the rendered pages are 37 to 63 apart. Both numbers are
recorded here so the source check is never read on its own again.

One finding fell out of the same test and turned out to be deliberate. Line 17 of
`/glostik-songs/new` runs `location.replace('/glostik-songs/experimental')`, so in a fresh browser
the root, `/new` and `/experimental` render one picture. That is Brandon's own instruction to the
deploy session, quoted back to this one: the landing page forwards to experimental two on purpose,
and `?stay` and `?classic` are the ways past it. The measurement stays here because the same check
catches the case where three routes collapsing into one picture is not intended.

---

## 4. What the page does that the others do not

**The box office travels.** The search sits inside the poster composition as a ticket window. Scroll
the sheet away and the same element detaches and docks into the running bill, so the control a
person needs at row 480 is the object they used at the top. It is a real DOM move rather than two
fields kept in step, and the value, the selection and the focus all survive the journey.

**One scroll number drives the opening.** `--k-prog` runs 0 to 1 as the bill leaves, set from one
passive listener inside one animation frame. The word rises and compresses, the ink fields slide
apart, the photograph drifts and the supporting bill fades, all reading that single property.
Nothing animates on a timer, so a still page costs nothing.

**The history is a ticket strip.** Every song draws its own play dates across a shared scale, as one
CSS gradient per row masked into a perforation. Pointing at any row replaces the whole band's run on
the chart recorder in the strip with that song's own dates.

**The bill folds on a phone.** Twelve sections will not sit across 390 pixels and a row that scrolls
sideways hides half of itself. The bar names the section you are in, and opening it unfolds the gig
bill down the screen with the headline set largest. Every entry stays the same tab button, so the
keyboard and the reader see no change.

**The set is a cabinet.** The player has a bezel, a grille and two knobs, and two slow liquid-light
blobs are thrown on the wall behind it while something plays. The video itself is never filtered,
masked or scaled.

---

## 4b. The pass after Brandon read it

Five notes came back on 2026-09-20 and all five are in the file.

**"Its still a little fuzzy like a fuzzy filter."** It was, and the cause was structural. The grain
and the halftone were a fixed overlay at `z-index:90`, so every glyph on the page was rendered and
then soft-lit through a dot pattern. That is a filter over the type, and at any browser zoom other
than 100 the 3.4px dots beat against the pixel grid and the whole sheet reads soft. Texture on a
printed sheet sits under the ink, so it does here now: the grain and the screen are backgrounds on
the two grounds, painted beneath their own content, and the dot is 7px rather than 3.4px. The
overlay is deleted rather than turned down, and every character composites straight to the screen.

**"Icons got smaller."** Covers 44 to 52px, the play button 30 to 38px, the band's link marks 14 to
19px, and the play button re-inked gold on a heavier impression.

**Hierarchy in the row.** Ten pieces of metadata were arriving at one level. The title is now 17 to
22px against the artist's 10px typewriter, and the play button is the second anchor. Genre, the
state stamp, both dates, the stars, the history strip and the play count all step back to between
62 and 86 percent and come up to full on hover or focus, so the row is scannable at rest and
complete when a person is actually reading it.

**The history strip says what it is.** A plain sentence under the count, keyed to the column name.

**The opened record.** The picture column goes 172 to 138px and the history column takes the space,
the facts go 11 to 12.5px with row gaps from 2 to 7px, and the drawer loses about fifteen percent of
its height. No dead cream under the first lines.

**The box office and the subsets.** The window has a three-pixel frame, a perforated stub down its
left edge and a punch through it, and the field is nineteen pixels tall. Each subset is a punch card
with its own hole and torn edge rather than a pill.

**Glostik's own mark.** A roundel carries the band's name around a circle with a registration cross
through it, turning once every ninety seconds. It prints into the bill, it is the waiting state
while the record loads, and a flattened version of it stamps beside every section name.

---

## 4c. The borrowed blocks

Another session added the forum, the feature requests and the visit counter, which this fork
genuinely lacked. Their stylesheets read `--m-*`, `--rule`, `--ink`, `--cream` and `--x-h` with
hardcoded fallbacks, and none of those names existed here, so every one fell through to a dark-page
default. Their counter labels measured 1.08 : 1 against their own plate.

Nothing of theirs is edited. The names they ask for are declared on `:root` pointing at this page's
inks, and the pill radii and faces are re-cut to the sheet. Their labels now measure 8.24 : 1. A
re-run of their script stays a no-op.

---

## 5. Accessibility

- The focus ring is gold over the ink shell at 7.6 : 1 and ink over the paper at 15 : 1. One ring
  alone fails, because gold vanishes on gold and ink vanishes on the ground.
- Ten `prefers-reduced-motion` blocks cover the cursor trail, the word warp, the scroll cue, the
  tabs, the titles, the section lettering, the player lights, the drawer and the whole opening.
- Every state carries its own word inside the stamp, so nothing rests on colour alone.
- 593 images on the Songs tab, every one with an `alt` attribute.
- One `h1`, twelve `h2`, a skip link, seven live regions, semantic `header`, `nav` and `main`.
- The section names take an SVG displacement filter. No body text is ever distorted.

---

## 6. Feature parity

Forked from `/glostik-songs/experimental`, keeping its business logic field for field and replacing
the presentation. Same `data.json`, `dates.json`, `gallery.json`, `images.json`,
`originals_art.json`, `playlists.json`, and the same `/api/learn`, `/api/fix`, `/api/live`,
`/api/song`, `/api/comments` and `/api/visits` endpoints. No snapshot and no second copy.

All twelve sections are present: Songs, Setlists, Live, To Learn, Corrections, Gallery, Playlists,
Lyrics, Links, Merch, Stats and Play log.

Driven and confirmed in a browser: the nine subsets with live counts, the sixteen genres, the six
orderings and their reversals, the top fifty cap, the search, the ticket stubs and clear-all, the
opened record, the docked player, playing a list straight through with skip and stop, add to my
list, the five stars with the note box, the folded bill, the phone drawer, and `q`, `show`, `sort`,
`genre` and `list` in the address bar.

---

## 7. Deploy

Current build: sha256 `dc2427f02456b5b5`, 290653 bytes. Deploys go through the session that owns them.

The page was carried live by another session's carry-forward deploy at 15:06 on 2026-09-20. Verified
here rather than taken on report: live sha256 `19691305ce51bef0` equals the local file, 247,684
bytes on both sides, 200 at `/glostik-songs/poster`, `/glostik-songs/poster/` and
`/glostik-songs/poster/index.html`.

The two added lines in `experimental/index.html` shipped as `dpl_7ENDya7tAfjJFPg2EBuJEM8Sc91H`,
deployed by the session that owns deploys for this site. Confirmed on production from here: two
occurrences of `/glostik-songs/poster`, both carrying `data-layout="poster"`, with the rail reading
Back to the standard page, Metal view, Ballroom view. Backup beside the file as
`index.html.PRE_POSTER_LINK_2026-09-20.bak`.

---

## Correction, 2026-09-20: the ink-ground contrast line names the wrong colour

Section 2 ends with "On the ink ground `#1A0E28`: paper 12.9, gold 7.6, sky 8.0, lilac 8.2".
Those four figures are contrast against `#251239`, which is `--k-ground2`. Computed with a WCAG
relative-luminance ratio:

| ink | against `#251239` (`--k-ground2`) | against `#1A0E28` (`--k-ground`) | line above claims |
|---|---|---|---|
| paper `#EDE1C4` | 13.21 | 14.22 | 12.9 |
| gold `#E3A100` | 7.65 | 8.23 | 7.6 |
| sky `#35C2D6` | 8.04 | 8.65 | 8.0 |
| lilac `#C3A8E8` | 8.24 | 8.87 | 8.2 |

All four claimed values track `--k-ground2` and none track `--k-ground`. Nothing on the page is
unsafe, since the true ratios against the darker ground run higher than the ones recorded. The
label is what was wrong.

Found by `~/.claude/skills/live-archive-site/tools/client_gate.py`, which computes the ratio for
every ink against both grounds rather than carrying a table someone typed. Reproduce with:

    python3 ~/.claude/skills/live-archive-site/tools/client_gate.py \
      --client ~/.claude/skills/live-archive-site/clients/glostik.json

This is the same defect section 9 of `artist-site-redesign/SKILL.md` catalogues seven times over:
the measurement sat beside the question, and the reading of it was correct.
