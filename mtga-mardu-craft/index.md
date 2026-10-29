# MTGA Mardu Craft Ranking

Live: https://drwu-htmls.vercel.app/mtga-mardu-craft/

Standard, snapshot **2026-10-28**. Ranks every white, black or red Standard card by how
many published Mardu-color decklists actually run it, so a wildcard spent near the top of
the list does the most work.

## Fraud fix, 2026-07-30

The card data audited clean. Every defect was in the prose wrapped around it, and most of
them said the page was measuring something it had stopped measuring.

Fixed by `~/Projects/_outputs/mtga-mardu/fix_fraud_2026-07-30.py`, which asserts every
replacement matches exactly once and refuses to write on any miss.

| # | Claim on the page | What was true |
|---|---|---|
| 1 | Method said each card's count was "the number of those archetypes whose color identity bitmask is a superset of the card's color identity" | That colour-legality measure was dropped on 2026-07-30. It produced no number anywhere on the page. |
| 2 | Deck counts "pulled from Untapped decklists" | Untapped's per-deck lists were never decoded. They arrive as an opaque `ds` blob. The counts come from harvested creator-video decklists. |
| 3 | Intro: "the 17 currently-popular decks in those colors actually run it" | The table counts against 55 decklists. Two different universes carrying the same word. |
| 4 | "a real count from 1 to 55" | The observed range is **2 to 18**. No card comes near 55. |
| 5 | "Cards at 0 are ones no current Mardu-color deck plays" | No row on the page reads 0. The floor is 2. |
| 6 | Fact audit: "20 of 20 ranked cards verified" | The table holds **188** rows. The audit covered 10.6% of it and read as though it covered all. |
| 7 | "Priced 162 of 166 rows" | **184 of 188**. |
| 8 | "needs 162 rare-plus-mythic wildcards" | **187** (129 rare, 58 mythic). |
| 9 | Header: "Standard format, June 2026" | The snapshot is 2026-07-30. |
| 10 | Collection tile: "62.6%, 11,235 / 17,956 unique cards" | 17,956 traces to no file in this project and matches no Scryfall count. Removed, see below. |
| 11 | "The deck count is bounded only by the sample threshold, not by the number 25" | Orphan sentence. 25 appears nowhere else on the page. |
| 12 | `refreshData()` re-injected 62.6% from `data.json` on every click | The removed number would have come straight back on the first press of Update. |
| 13 | JS comment: deck count is "recomputed from color identity" | It is baked by `recount_observed_play.py` from real decklists and is not touched by page JS. |

### The unsourced denominator

The Collection tile read **62.6%**, from 11,235 / 17,956. The numerator comes fresh from
each Untapped pull. The denominator was a fossil: `refresh_meta.py` read it back out of
its own output file every run (`total = an.get("collection_total")`) and never re-derived
it. It matches nothing checkable:

| Candidate source | Count |
|---|---:|
| Scryfall `game:arena` unique cards | 15,947 |
| Scryfall `game:arena legal:standard` | 4,702 |
| `grpid_set.json` on disk | 26,126 |
| **The page's denominator** | **17,956** |

The tile now shows only what the live Untapped pull returns: **11,235 distinct cards,
32,542 copies**. `refresh_meta.py` and `update_mtga_mardu.py` no longer emit
`collection_total` or `collection_pct`, so the percentage cannot return on the next build.


## Colour column, all 31 combinations

Each deck row carries a colour badge. It used to spell out the combination only for
decks inside the Mardu wedge (`Orzhov W/B`, `Mono-Red`, `Mardu W/B/R`) and print the
bare word **outside** for everything else. That covered **156 of 312 rows**, and
their colours were already in the next column over, read off the decklist.

All 31 combinations are now spelled out. The badge colour and its tooltip still say
whether a deck is in the wedge:

| Badge colour | Meaning | Example |
|---|---|---|
| red | the full Mardu wedge | Mardu W/B/R |
| olive | inside the wedge | Orzhov W/B, Mono-Red |
| beige | outside the wedge | Jeskai U/R/W, Temur G/U/R, 5-color WUBRG |
| cream | no decklist reached | not stated |

Four-colour decks read `4-color, no Green` instead of the nephilim labels, since
nobody says Yore-Tiller out loud. Source: `wedge_state()` in
`~/Projects/_outputs/creator-winrate-db/inject_into_mardu.py`.

## How the deck column actually works

`Decks that run it` is counted from **55 published decklists**, one point per list that
includes the card, whatever the quantity. Those 55 are the Mardu-color subset of **219**
harvested creator-video lists that pass the Standard legality gate.

Source: `~/Projects/_outputs/creator-winrate-db/deck_costs.json` and `master_decks.json`,
counted by `~/Projects/_outputs/mtga-mardu/recount_observed_play.py`.

### Opening the number, 2026-07-31

Every row now carries a **Decks** button beside its count. It opens the lists behind the
number: which harvested decks run the card, the creator who built each one, the most
copies any single list runs, that deck's rare-plus-mythic wildcard cost and paper price,
and a link to the video the list came from. The panel is a sibling row carrying its card's
own classes, so the land, owned and rotating filters hide it with its card, and a re-sort
re-anchors it under the row it belongs to.

Built by `~/Projects/_outputs/mtga-mardu/add_deck_lists.py`. The lists come from the same
pool builder that produced the printed counts, not a second count beside it, and the
script cross-checks all **575 rows** (141 Mardu-pool plus 434 all-Standard) against the
`N / TOTAL` already rendered in each row. A single disagreement aborts the write. The run
that shipped: 575 checked, 0 mismatches, 575 buttons, 97 KB of deck data.

The first attempt wrote the payload in and the buttons did nothing. The page's kid-mode
block opens with a comment containing the literal text `</body>`, so a first-match insert
buried the whole script inside that comment. The buttons rendered, the data never reached
the DOM, and no check failed. The script now anchors on the last `</body>` and refuses to
write if the anchor sits inside an unclosed comment.

The **17** in the Mardu-wedge archetypes tile is a separate Untapped meta-share figure
(analytics endpoint, meta period 722, Bronze-to-Mythic, last 30 days, at least 30
mythic-tier matches). It feeds no column in the ranking table. Both numbers now say on the
page which one they are.

## Ban and rotation pass, 2026-07-31

Brandon: strip the ban and rotation talk, keep the early-2027 rotation, make that work.

**Out.** The "Cards Wizards just banned" section with its four-row table, the
`.badge.banned` style only that table used, the ban line in the fact-audit box, and the
2026-rotation correction paragraph, which spent five sentences arguing against a rotation
that was never scheduled. Nothing on the page mentions a ban now.

**Kept, and it was wrong.** The `Hide rotating in early 2027` filter tagged rows by
matching the displayed Set column against a hardcoded `{WOE, LCI}`, with a comment still
saying "fall 2026". The early-2027 rotation retires **seven** sets:

| Code | Set | Released |
|---|---|---|
| WOE | Wilds of Eldraine | 2023-09-08 |
| LCI | The Lost Caverns of Ixalan | 2023-11-17 |
| MKM | Murders at Karlov Manor | 2024-02-09 |
| OTJ | Outlaws of Thunder Junction | 2024-04-19 |
| BIG | The Big Score | 2024-04-19 |
| BLB | Bloomburrow | 2024-08-02 |
| DSK | Duskmourn: House of Horror | 2024-09-27 |

Two years of sets leave at once because there was no rotation during 2026 at all.
Confirmed 2026-07-31 against two independent sources, and corroborated by Scryfall:
WOE and LCI cards from 2023 still return `legal`, which a 2026 rotation would have ended.

The filter knew two of the seven, so **MKM, OTJ, BIG, BLB and DSK went unmarked**. On a
page whose whole job is telling you where to spend wildcards, it was quietly recommending
cards that leave Standard within months.

**Rotation is a property of the card itself. The printing shown does not change it.** A card printed in a rotating
set and reprinted into a surviving one keeps its place in Standard, and the reverse also
happens: Fabled Passage displays as MSC and Elusive Otter as SOC, both Commander products
outside the seven, and both still rotate because their Standard legality comes from BLB
and WOE. A Commander, promo or masters printing does not grant Standard legality on its
own, so it cannot be a surviving home.

`tag_rotation_2027.py` now reads every printing of every card from Scryfall and writes
`data-rotates="1"` onto the rows with no surviving home. The page JS only reads that
attribute. Result: **173 of 575 rows** tagged, against the 42 the old two-set match would
have caught.

| Displayed set | Rows tagged |
|---|---:|
| DSK | 36 |
| BLB | 32 |
| MKM | 29 |
| LCI | 27 |
| OTJ | 24 |
| WOE | 15 |
| BIG | 8 |
| MSC, SOC | 1 each, rotating via their Standard printing |

## Collection refresh, 2026-07-31

Brandon: "I have a mind stone now, 1 of them, update accordingly." The live Untapped pull
confirms it and shows what it cost: **mythic wildcards 8 → 7**, the one he spent. The
collection also moved 11,235 → 11,287 cards, so 19 cards besides the Mind Stone changed.

| Card | Owned | WC to playset |
|---|---|---|
| **The Mind Stone** | 0 → **1** | 4 mythics → **3 mythics** |
| Loki, God of Mischief | 0 → 2 | 4 rares → 2 rares |
| Captain America, Wings of Freedom | 0 → 2 | 3 rares → 1 rare |
| Elektra, Daughter of the Hand | 0 → 1 | 1 rare → **0** |
| Ironheart, Clever Champion | 1 → 2 | 1 rare → **0** |

Done by `refresh_owned_from_collection.py`, which rewrites the Owned and WC cells from
the collection rather than rebuilding the table, so the deck panels and the rotation tags
survive. Its `--check` mode recomputes both cells from a given collection file and diffs
them against the page: it reproduced all **575 rows exactly** against the old collection
before any write, which is what proves its formula matches the one that built the table.

That check earned its keep twice. Counting max copies across all 219 harvested decks put
15 rows a wildcard or two too high; the pool has to be the 55 Mardu decks. Then applying
the wedge filter to *both* tbodies broke the 434 all-Standard rows, which use the full
219. The two tbodies need different pools, and only the row-by-row diff surfaced that.

`refresh_static_numbers.py` then re-derives every baked number: the KPI tiles, the audit
totals, and the `tb-fits` mark on all four build boards against the live wildcard budget.
That last one matters, because the budget itself keeps shrinking as cards get crafted.

### Second craft the same day: Avengers Disassembled

Brandon, later on 2026-07-31: `4 Avengers Disassembled (MSH) 124`, an Arena export line.
The pull had already caught it, and the cost is legible in the wildcard count: **rare
wildcards 12 → 8**, exactly the four he spent, with the collection at 11,288 cards.

The ranking rows needed nothing. `refresh_owned_from_collection.py --check` reported
**575 rows, 0 disagreements** against the new collection, with Avengers Disassembled
already reading owned 4 and a wildcard cost of 0 in both table bodies.

The baked numbers did need it, and the budget move is the interesting part:

| | Before | After |
|---|---:|---:|
| Wildcard budget (R+M) | 19 | **15** |
| Rare WC | 12 | **8** |
| Wildcards to finish all 141 rows | 180 | **176** (120 rare, 56 mythic) |
| Rows still costing a wildcard | 75 | **74** |
| Cheapest-25 board, decks you can afford | 20 | **18** |
| Spells-only cheapest-25 | 25 of 25 | **24 of 25** |

Crafting a playset makes the page recommend *fewer* whole decks, since the budget that
funds them drops faster than the shopping list does. A board that still read "20 of 25
fit your budget" after this craft would have been quietly wrong by two decks.

## The Update button was dead, 2026-07-31

Brandon: "refresh collction button broke." It was broken two ways, and the second one
would have survived fixing the first.

### 1. The fetch resolved to a 404

`refreshData()` called `fetch('./data.json')`. Vercel serves this page at
`/mtga-mardu-craft` with **no trailing slash**, so the relative URL resolved to
`/data.json`, which does not exist. The 404 handler returns the HTML error page, so
`r.json()` threw `Unexpected token '<'` on every press. Measured from the live page:

| Fetched | Resolves to | Status | Content-Type |
|---|---|---:|---|
| `./data.json` | `/data.json` | **404** | text/html |
| `data.json` | `/data.json` | **404** | text/html |
| `/mtga-mardu-craft/data.json` | `/mtga-mardu-craft/data.json` | **200** | application/json |

Fixed by making the path absolute, plus a content-type guard so a future 404 page reports
`got text/html, not JSON` instead of a parser error. This is the trap in
[[feedback_verify_the_live_url_not_the_local_one]]: it only appears on the deployed URL,
never against a local file where the relative path resolves fine.

### 2. data.json was stale, so fixing the path alone would have made it worse

`update_mtga_mardu.py` built `data.json` from `analysis_data.json`, which only
`refresh_meta.py` rewrites, and that needs a live archetype pull. After a plain
`update_collection.py` run it stayed frozen:

| | analysis_data.json | Real collection |
|---|---|---|
| Stamp | 18:28:19Z | **18:52:20Z** |
| Rare WC | 12 | **8** |
| Mythic WC | 7 | **4** |
| Cards | 11,287 | **11,289** |

The button serves `data.json`. Had the fetch worked, pressing it would have overwritten
the correct tiles with a **older, higher wildcard count**, telling you that you could
afford builds you cannot. A dead button was the safer of the two failures.

`update_mtga_mardu.py` now reads the wildcard, card, gem, gold and vault figures straight
out of `collection.json`, so `data.json` cannot lag the collection again.

## Third craft: Improvisation Capstone

`I have Improvisation Capstone 3x`. The pull shows the cost: **mythic wildcards 7 → 4**,
exactly the three copies, and the collection at 11,289 cards.

| | Before | After |
|---|---:|---:|
| Improvisation Capstone | 0 owned, 4 mythics | **3 owned, 1 mythic** |
| Wildcard budget (R+M) | 15 | **12** |
| Mythic WC | 7 | **4** |
| Wildcards to finish all 141 rows | 176 | **173** (120 rare, 53 mythic) |
| Cheapest-25 board you can afford | 18 | **16** |
| Spells-only cheapest-25 | 24 of 25 | **23 of 25** |

## Paper $ does not know about your Arena collection, 2026-07-31

Brandon: "I don't have these cards in paper. are you counting my arena list in paper
cost". No. The two cost columns treat ownership differently on purpose, and the page was
not saying so.

| Column | Arena collection |
|---|---|
| **Wildcards (R+M)** and **WC to 4-of** | **Subtracted.** `build_costs.py:157`, `missing = max(0, qty - owned.get(name, 0))`, and only `missing` feeds the counter |
| **Paper $** | **Ignored.** `build_costs.py:154`, `price += rec["usd"] * qty`, full quantity, no subtraction |

Checked against the data as well as the code. `HUGE HOMIES STOMP TO VICTORY` needs **0**
rare-plus-mythic wildcards, so the Arena collection already covers it, and the page prices
it at **$37.77**:

| Computation | Result | Matches page |
|---|---:|---|
| Full list, ownership ignored | **$37.77** | **yes** |
| If it subtracted Arena-owned copies | $29.93 | no |

The behaviour is right, since an Arena copy is not a paper copy. The defect was
presentational: a paper column sitting beside a wildcard column that *does* discount
ownership reads as though it might discount too. Four labels now state it outright, fixed
by `clarify_paper_vs_arena.py`. Paper $ is what the list costs you to buy from scratch.

## The ownership map hid a fifth of the collection, 2026-07-31

Brandon: "I have lands like godless shrine but you don't show that." He was right, and it
was the worst bug on the page.

`scryfall_index.json` stored **one** Arena id per card name. Arena issues a separate
grpId for every printing, so a reprinted card has several. Godless Shrine:

| Printing | Arena id | In Brandon's collection |
|---|---:|---|
| EOE | 96828 | no |
| RNA | **69396** | **4 copies** |

The index led with 96828, the owned-map keyed on that single id, and his playset under
69396 was invisible. Every consumer inherited it:

| Map | Effect |
|---|---|
| Distinct cards mapped | 9,072 of 11,289 |
| **Invisible to the page** | **2,217 grpIds, 5,032 copies, 19.6%** |

**What it cost.** The craft ranking listed **Godless Shrine at #1 and Sacred Foundry at
#2**, telling him to spend 4 rare wildcards each on playsets he already owned. Both are
land, both were the headline recommendation, and both were wrong. **40 cards** were
misreported in total, including every shockland he holds (Steam Vents, Hallowed Fountain,
Overgrown Tomb, Watery Grave, Breeding Pool, Stomping Ground, Temple Garden), plus Rest
in Peace, Shattered Sanctum and Sundown Pass.

**The fix.** `fetch_scryfall.py` now records `arena_ids`, every Arena printing of a name,
and all five owned-maps read the list rather than the single id:
`build_costs.py`, `inject_top_builds.py`, `build_card_page.py`, `build_craft_ranking.py`
and `refresh_owned_from_collection.py`.

| | Before | After |
|---|---:|---:|
| Collection visible to the page | 80.4% | **97.8%** |
| Rows still costing a wildcard | 74 | **67** |
| Wildcards to finish everything | 173 | **152** (102 rare, 50 mythic) |

What the page recommends now, once the cards he owns drop out:

| Decks | Card | Own | Need |
|---:|---|---:|---|
| 12 / 55 | The Mind Stone | 1 | 3 mythics |
| 12 / 55 | Abandoned Air Temple | 1 | 3 rares |
| 10 / 55 | Erode | 0 | 3 rares |
| 8 / 55 | Improvisation Capstone | 3 | 1 mythic |
| 8 / 55 | The Sentry, Golden Guardian | 1 | 3 rares |

## Where the paper prices come from, 2026-07-31

Brandon: "when i click to price it its higher. where you pricing". Scryfall bulk
`default_cards`, taking the **cheapest USD across every printing** of a name, basics
excluded, ownership ignored. Two measurable gaps against what a store or Moxfield quotes:

| Cause | Measured effect |
|---|---:|
| Index staleness (was a day old, now refreshed) | **+0.7%** on the cheapest-25 total |
| Cheapest-printing vs the Standard printing you would actually buy | **+1.6%** |

Neither is large, so the method is close to right. A correction to my own first reading:
I claimed a deck at $5.56 was topping the cheapest board with 60% of its cards unpriced.
It was not on the board at all. The Standard-format gate already excluded it, and I had
been reading `deck_costs.json` directly, which bypasses that gate.

Real improvement kept anyway: `build_costs.py` now records a `cover` block per deck
(priced copies, unpriced copies, Alchemy-only copies) and the boards mark any partial
price rather than printing a confident total over a list they could not fully price. A
deck holding Alchemy-only rebalances now sorts to the back of "cheapest to build", since
those cards have no paper printing and the list cannot be bought at any price. Today the
markers correctly show nothing, because no deck on the boards has a gap.

## Two pipeline bugs that would have re-broken it

Found during the audit, fixed in `recount_observed_play.py`:

1. **Entity bug.** `norm()` did not decode HTML entities, so `Caretaker&#x27;s Talent`
   never matched the decklist's `Caretaker's Talent`. The next run would have written
   **0 / 55** for nine real cards, among them Caretaker's Talent (truly 5) and
   Shardmage's Rescue (truly 4). Now decodes first: `never run: 0`.
2. **Silent drift.** The prose-update step matched on literal old sentences. When the
   prose changed, it printed `label swaps: 0 of 7` and wrote anyway, which is how the
   numbers came to be current and the words describing them stale. The swaps are now
   regexes keyed on the numbers, and a miss aborts the write: `label swaps: 9 of 9`.

## Verification, 2026-07-30

| Check | Result |
|---|---|
| 188 rows vs live Scryfall: name, set printing, rarity, colour identity, type line, mana value | **188 of 188 clean**, all Standard-legal |
| Deck counts, independent recount against the same 55 lists | **188 of 188 reproduced** |
| Rows carrying a price | 184 of 188. The four blanks are Godless Shrine, Sacred Foundry, Blood Crypt, Boros Charm |

Reproduce:

```bash
python3 ~/Projects/_outputs/mtga-mardu/recount_observed_play.py --dry-run
```

## Headline numbers, from the collection pull of 2026-10-28

- Rare WC **5**, Mythic WC **9**, so a **14**-wildcard budget for the rows that gate a build
- Collection **11,836** distinct cards
- Common WC **1,060**, Uncommon WC **868**, which is why neither rarity is ranked
- Gems **45**, Gold **14,610**, Vault progress **92.3%**
- Mardu rows on the ranking: **265**


## Standard bans

Wizards banned 3 cards in Standard on **2026-08-10**: **Badgermole Cub**, **Stormchaser's Talent**, **Gran-Gran**.
Source: [Banned and Restricted Announcement, August 10, 2026](https://magic.wizards.com/en/news/announcements/banned-and-restricted-august-10-2026).

A banned card can never be the right wildcard, so those rows are dropped from both pools rather than greyed, and the ones that were candidates are named in a strip above the table. The decks that ran them are quarantined on [the creator page](https://drwu-htmls.vercel.app/mtg-creator-decks), kept and badged rather than deleted.

The trigger is the announcement, never Scryfall legality, which lags by hours on B&R day. The list lives in `creator-winrate-db/standard_bans.json` and both pages import `bans.py`, so they cannot disagree about what is banned.


## Top of the ranking

| Rank | Card | CI | Rarity | Set | Owned | WC to 4-of | Decks | Paper $ |
|---:|---|---|---|---|---:|---|---:|---:|
| 1 | Sacred FoundryStar Trek2028 or later | WR | Rare | TRK | 4 | 0 | Land — Mountain Plains | 0 |
| 2 | Starting TownFinal Fantasy2028 or later | C | Rare | FIN | 4 | 0 | Land — Town | 0 |
| 3 | Blood CryptStar Trek2028 or later | BR | Rare | TRK | 4 | 0 | Land — Swamp Mountain | 0 |
| 4 | Godless ShrineStar Trek2028 or later | WB | Rare | TRK | 4 | 0 | Land — Plains Swamp | 0 |
| 5 | Sunbillow VergeAetherdrift2028 or later | WR | Rare | DFT | 4 | 0 | Land | 0 |
| 6 | Blazemire VergeDuskmourn: House of Horrorrotates early 2027 | BR | Rare | DSK | 4 | 0 | Land | 0 |
| 7 | Bleachbone VergeAetherdrift2028 or later | WB | Rare | DFT | 4 | 0 | Land | 0 |
| 8 | Inspiring VantageOutlaws of Thunder Junctionrotates early 2027 | WR | Rare | OTJ | 8 | 0 | Land | 0 |
| 9 | Voice of VictoryTarkir: Dragonstorm2028 or later | W | Rare | TDM | 4 | 0 | Creature — Human Bard | 2 |
| 10 | Multiversal PassageMarvel&#x27;s Spider-Man2028 or later | C | Rare | SPM | 4 | 0 | Land | 0 |
| 11 | ErodeSecrets of Strixhaven2028 or later | W | Rare | SOS | 4 | 0 | Instant | 1 |
| 12 | Cavern of SoulsThe Lost Caverns of Ixalanrotates early 2027Arstall: rotating | C | Mythic | LCI | 4 | 0 | Land | 0 |

Bold means you do not own a playset yet. Read straight off the tbody this build wrote, so the table here and the table on the page are the same rows.


## Files

- Page: `~/Projects/drwu-htmls/public/mtga-mardu-craft/index.html`
- Rotation truth: `~/Projects/_outputs/mtga-mardu/rotation_2027.json` (every printing of
  every card, per-card rotate/survive) via `tag_rotation_2027.py`
- Ownership refresh: `~/Projects/_outputs/mtga-mardu/refresh_owned_from_collection.py`
  and `refresh_static_numbers.py`
- Ban and rotation strip: `~/Projects/_outputs/mtga-mardu/strip_bans_fix_rotation.py`
- Page data: `~/Projects/drwu-htmls/public/mtga-mardu-craft/data.json`
- Collection pull: `~/Projects/_outputs/mtga-mardu/update_collection.py` → `collection.json`
- Meta pull: `~/Projects/_outputs/mtga-mardu/refresh_meta.py` → `ranked_v2.json`, `analysis_data.json`
- Deck column: `~/Projects/_outputs/mtga-mardu/recount_observed_play.py`
- Deck buttons: `~/Projects/_outputs/mtga-mardu/add_deck_lists.py`
- This audit: `~/Projects/_outputs/mtga-mardu/fix_fraud_2026-07-30.py`

## History

Correction passes before 2026-07-30 described a 76-row page built on a 25-archetype
colour-legality measure, with a different card list entirely. That document is kept at
`index.md.bak-fraudfix-2026-07-30-171537` rather than carried forward, because every
number in it was superseded by the observed-play rebuild.
