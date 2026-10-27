# Glostik Songs, experimental design: work log

## Rebuild, 2026-09-19

The first experimental page was rejected. Brandon: it read as a variation of `/glostik-songs/new`,
carrying the same cream paper, the same Tenenbaums accents, the same masthead-over-table
composition and the same column grid. That direction is discarded, not refined. What follows starts
from function alone.

---

## 1. Functionality inventory, stripped of the stable page's visual answers

What a visitor must still be able to do. Each line is a capability. None of them names a control
shape, a colour, a column or a panel, because the shape is what is being replaced.

**Find**
- Match text against song title, artist and genre, live, with no submit step.
- Clear the query in one action, and reach the query field from the keyboard.

**Narrow**
- Nine named subsets: everything, in the catalog, rare, Glostik originals, Lizz Vega, overdue,
  bustouts, debuts, never played on stream. Each shows how many songs it holds, counted after the
  text match and the genre choice.
- Sixteen genres, any number chosen at once, each with a count.
- Whatever is currently narrowing the list must be visible and removable without hunting.
- The "never played" subset hides itself when nothing qualifies.

**Order**
- Six orderings: last played, last gap, most played, song, band, genre. Each reversible.
- The current ordering has to be legible, including which way it runs.
- Most played, descending, is capped at the top 50 and says so.

**Read a song**
- Title, artist, guest credit on the most recent play, genre, play count, date last played, days
  since, days between the last two plays on record, state, whether it is in the catalog, and a link
  that opens the video at the second the song starts.
- Six states, ranked: retired, bustout, debut, overdue, rare, none.
- A song no video caught links the band's own upload instead, and says so.

**Open a song**
- Every play on video, each a link to its own second, with partial and snippet plays labelled.
- Dates from the request history that no video covers.
- Play count, first play on video, last played, the play before that with the gap, first on record,
  genre, catalog membership, album, tempo, key, source link, state.
- Jump from here to every song by the same artist, to that genre, to this song in the play log, and
  to the correction form.

**Move around**
- Reach setlists, live, to learn, corrections, stats and the play log.
- Carry a view in the address bar so it can be shared.
- Get back to the stable page, unmistakably.

**Hold true**
- One live data source shared with the stable page. No snapshot.
- Reduced motion honoured. Keyboard throughout. Names on every control.

---

## 2. Where the palette came from

Twenty-nine real images were pulled and quantised: the seven band photographs and four merch shots
in `gallery.json`, eight frames from the newest stream videos, and ten album covers from songs the
band plays. Dominant colours, near-black and near-white discarded:

| Source | What it gave |
|---|---|
| Stream frames | acid yellow-green `#9FBF3F` 12.8%, lilac `#8E84AD` 12.5%, slate `#5B6570` 11.6%, teal-green `#59A57F` 10.8%, hot red `#D65B5B` 10.7%, warm sand `#E5CCB2` 7.7% |
| Merch | near-black `#191919` 39%, bone `#E5E5E5` 34%, green-black `#161E14`, moss `#668447` |
| Photographs | greys, indigo `#16161C`, violet `#938EA3`, spring green `#478456` |

Two things fall out. The band's stage lighting is an **acid-green and lilac wash with a hot red
key**. The band's own merch is **black and bone with a moss green**. The acid green is the through
line between how they light themselves and how they dress their store, so it becomes the identity
colour. The ground becomes the green-black the merch already uses.

The stable page is cream `#F4EFE6`, relative luminance 0.867. The new ground is `#0B0D0A`,
luminance 0.004. Those two are **17:1 apart**, which settles the blurred-screenshot test before a
single element is drawn.

---

## 3. Three concepts

### Concept one, "Contact Sheet"
Photography and editorial composition first. The archive as a gig-poster wall crossed with a
photographer's contact sheet. Full-bleed stream frames run behind the catalog as fields and
interruptions, songs sit on them as index lines in heavy condensed type, and sections break the
scroll with oversized year and letter markers cut into photographs. Ranking is typographic: the
play count is set large, the title larger, everything else small and quiet. Nearest reference,
Apple Music 100 Best Albums, for keeping a long ranked list browseable while the imagery and the
numerals carry the interest.

### Concept two, "Signal"
Music data and kinetic browsing first. The archive as an instrument. Every song carries its own
five-year play history drawn as a measured line, so the catalog becomes a field of rhythms rather
than a field of cells. Counts are set as display numerals, gaps are drawn as distance, and the
scroll drives a running readout of what era is on screen. Nearest reference, the Wrapped product
experience, for giving a pile of listening data a voice and a hierarchy.

### Concept three, "The Green Room"
An immersive band world first. The archive as a venue. Deep stage-lit space, songs hung along a
vertical spine, lighting gradients that answer the scroll, layered depth built from stream frames,
and navigation shaped like a lighting console rather than a menu. Nearest references, the Rauw
Alejandro site for scale, atmosphere and spatial composition, and the Teyana Taylor Escape Room for
a site that is one concept rather than a stack of standard sections.

### Chosen: one as the spine, two fused in, three as the light

**Concept one is the architecture.** It flips the silhouette hardest. The stable page is a centred
light card holding a ruled table under a horizontal masthead. Concept one is a dark full-bleed
field with no centred container, no ruled grid and no masthead, so the two cannot be confused at any
distance.

**Concept two supplies the signature behaviour.** `dates.json` already holds every date every song
was played, 386 days of them across five and a half years. Drawing each song's dates as a filament
beside its title turns 653 rows into a visible history and does the work four columns used to do:
recency, gap, rarity and bustout are all legible as pattern. This is the thing the stable page
cannot do and a generic template has no reason to have.

**Concept three contributes atmosphere only.** The stage-light wash and a shallow layered depth,
with none of its navigation. A venue you walk through is a poor way to reach song 480 of 653, and
the catalog has to stay fast. No WebGL, no 3D, no scroll hijacking.

Rejected combination: two plus three without one would have produced a dark dashboard, which the
brief rules out by name.

---

## 4. What the architecture becomes

| | Stable `/new` | Experimental |
|---|---|---|
| Ground | cream paper, light | green-black, stage-lit |
| Container | centred 1380 px card | full bleed, split rail and field |
| Entrance | horizontal masthead, then a sticky bar, then the table | a fixed vertical console on the left; the catalog starts at the top of the page |
| Catalog | 12-column ruled grid with an uppercase header row | editorial index lines, no column rules, no header row |
| Ordering | clickable column headers | a written sentence that states the order |
| Narrowing | a horizontal row of pill chips | a vertical stack in the console, each with its own count bar |
| Section breaks | a small italic word and a rule | a full-bleed photographic band with oversized type |
| History | two numeric columns | a drawn filament per song, plus a shared timeline in the console |
| Type | Instrument Sans, Instrument Serif, IBM Plex Mono | Big Shoulders Display, Space Grotesk, Space Mono |

## 5. The signature behaviour

**The filament, and the console timeline it feeds.** Every row draws its own play dates as ticks
across a shared five-and-a-half-year scale, so the whole catalog reads as a constellation while you
scroll. Pointing at any row lights that song's dates on the big timeline in the console, which is
otherwise showing the whole band's history. Moving down the list plays the band's history back
against itself. It is built only from dates that exist, and it means nothing on any other site.

---

## 6. What the rebuild measured

Captured with the repo's own CDP harness at matching viewports. Chrome's `--window-size` lays out
wider than it captures, which cropped the first phone shots and made the page look like it
overflowed; `Emulation.setDeviceMetricsOverride` sets a real viewport, so what is measured is what
is captured.

| Viewport | blurred 24x15 difference | mean luminance | dominant colours shared |
|---|---|---|---|
| 1440 x 900 | 191.4 / 255 | 0.849 vs 0.097 | 0 of 8 |
| 390 x 844 | 180.8 / 255 | 0.833 vs 0.128 | 0 of 8 |
| 1024 x 820 | 185.9 / 255 | 0.827 vs 0.097 | 0 of 8 |

| Viewport | catalog starts, stable | catalog starts, experimental | elements past the edge |
|---|---|---|---|
| 1440 x 900 | 666 px | 247 px | 18 vs 0 |
| 390 x 844 | 676 px | 581 px | 65 vs 0 |
| 1024 x 820 | 772 px | 229 px | 31 vs 0 |

Feature parity: 32 scenarios driven through both pages, comparing row counts, the count line's
number, the first 25 titles in order, the last title, section labels with their counts, watch links,
play counts, catalog flags, state assignments, every filter count and every genre count. Five
differences, all of them the experimental page adding one section header where the standard page
shows none. Days since and last gap moved off the row into the opened record and the hover text;
both values were checked against the data and match.

## 7. The collision

Three other Claude sessions were writing `experimental/index.html` during this rebuild:
`Glostik Songs redesign skills`, `Glostik songs site updates` and
`Glostik Songs redesign and Lizz Vega emotes`. This session's file was overwritten twice, at 22:01
and again at 22:08, and recovered both times. Their revisions are preserved beside the page as
`index.html.PEER_2026-09-19_2201.bak` and `index.html.PEER_2026-09-19_2208.bak`; nothing was
deleted. Verification was run against a scratchpad snapshot on a separate local route so the page
under test could not change underneath it.

## 8. The collapsing title column, found by a peer session, 2026-09-19 22:2x

The session "Glostik songs site updates" reported that every song title clipped to one character at
an 800 px viewport. Reproduced across sixteen widths, and the report was right about the fault and
wrong about the width. Below 900 px the phone layout takes over and titles are fine. The damage sat
in the band just above that breakpoint:

| width | title column | rows clipping |
|---|---|---|
| 1150 | 150 px | 19 of 30 |
| 1100 | 112 px | 28 of 30 |
| 1040 | 66 px | 30 of 30 |
| 980 | 20 px | 30 of 30 |
| 940 | 0 px | 30 of 30 |
| 901 | 0 px | 30 of 30 |

Cause: the console rail holds 292 px minimum and the line's fixed columns come to about 560 px, so
`minmax(0,1fr)` on the title had nothing left to take. The first version shed columns at 1240 and
1040; those breakpoints were not carried into the rebuild.

Fix: three breakpoints that shed in priority order, and a floor on the title column.

- 1340 px, genre out
- 1120 px, rail floor drops to 256, state mark narrows, filament shortens
- 1000 px, date out

Nothing shed becomes unreachable: genre and date are both in the row's hover text and in the opened
record, and the state keeps its colour on the filament. After the fix the title column never falls
below 261 px and clipping runs 1 to 2 of 30 across the whole desktop range, which is long titles
ellipsizing normally.

## 9. Four layouts now

| Route | Owner | State |
|---|---|---|
| `/glostik-songs` | classic | unchanged |
| `/glostik-songs/new` | stable | +5 lines, the button only |
| `/glostik-songs/experimental` | this session | the rebuild |
| `/glostik-songs/archive` | peer, "Glostik songs site updates" | live, 200 |
| `/glostik-songs/metal` | peer, "Glostik Songs redesign skills" | 404, being built |

A Metal view link is queued for the console here and held until that route answers 200, so the page
never ships a dead link. Queue item `q-2026-09-19-8bc563`.

`data.json` now carries art and album on 148 of 653 songs, up from 90, filled by a peer session.
Column shape unchanged, and the 31-scenario parity probe was re-run against the new file with the
same result: five differences, all of them this page adding a section header.
