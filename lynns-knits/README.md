# Lynn's Knits — sample knitted-bag storefront

A four-page demonstration storefront for a hand-knitting studio that makes
purses, bags, and totes. Built 2026-07-29. The brand, the maker, the twelve
bags, the prices, and the reviews are invented. Every page carries a visible
sample-site notice, and checkout is disabled.

**Live:** https://7onething1.github.io/lynns-knits/

Superseded an earlier jewelry version of this storefront on the same day. The
route was renamed with `git mv`, so that history is intact in this folder.

## Routes

| Route | What it is |
|---|---|
| `index.html` | Home. Editorial hero, five collection tiles, featured grid, maker story, four-stage process, anime row, buyer quotes, newsletter. |
| `shop.html` | Full catalog. Filter rail (collection, theme, fibre, price), four sort modes, live result count, empty state. |
| `product.html?id=<id>` | Product detail. Four-view gallery, colourway and size pills, quantity stepper, add to bag, four accordions, spec table, carries-well-with row. |
| `about.html` | The studio. Maker story, stats, five-stage process, standing rules, washing guide, sizing and straps, six-item FAQ. |

Deep links that work: `shop.html?tag=anime` (theme filter pre-applied),
`shop.html?c=<collection-id>` (collection pre-applied).

## Collections

Five, each carrying its own palette colour.

| id | Name | Bags |
|---|---|---|
| `market` | Market & Tote | 3 |
| `small` | Small Goods | 2 |
| `cable` | Cable Work | 2 |
| `story` | Stitch & Story | 4 |
| `oneoff` | One of One | 1 |

Five of the twelve bags carry `anime: true` and are reachable through the Theme
filter, which cuts across collections: Kitsune Colourwork Purse, Star Sigil
Drawstring Pouch, Mecha Panel Crossbody, Chibi Cat Bobble Bag, and the Sakura
Colourwork Tote, which sits in Market & Tote rather than in Stitch & Story.

Anime motifs are charted for this project from folklore and from anime visual
language, fox masks, star sigils, mecha panel blocks, so no listing copies a
licensed character. The FAQ states that policy on the site itself.

## Build

- `assets/site.css` — design system. Cream ground, ink type, five collection accents, paper grain, responsive down to 375px.
- `assets/site.js` — catalog data, twelve hand-written SVG bag illustrations as a symbol sprite, shared header and footer, cart, four page controllers.
- Type: Cormorant Garamond display, Inter UI, JetBrains Mono for specs and prices.
- No build step, no framework, no external images. Fonts are the only third-party request.

Knit texture is drawn rather than implied. Five SVG `<pattern>` definitions carry
the fabric: stockinette V stitches, 2x2 rib, seed stitch, honeycomb, and an open
mesh for the market tote. Each bag body fills with its colour and then overlays
the pattern matching its stated gauge, so the illustration and the spec table
agree. The Aran cable braid is drawn strand by strand with a cream casing under
the over-strand, which is what makes a cable read as crossing rather than as a
wavy line.

Every product field is knit-specific: fibre and yarn weight, lining, gauge in
stitches to 10 cm, blocked dimensions, finished weight, colourway options, and
lead time at the chair.

The cart is real: `localStorage` under `lynns-knits-cart-v1`, add and quick-add,
quantity stepper, decrement-to-remove, free-shipping threshold at $120 with a
progress bar, subtotal and shipping and total. Checkout shows a sample notice
rather than taking payment.

## Verification run 2026-07-29

- Console clean on all four routes, no errors.
- Home: 5 tiles, 4 featured cards, 4 anime cards, 4 process steps, 3 quotes, 14 sprite symbols, 5 knit patterns.
- Home counts computed from the catalog rather than typed: "Twelve bags in the shop today, five of them anime-inspired" and "1,803 reviews · 4.85 average".
- Shop filters exercised: 12 bags, 5 on theme `anime`, 2 on collection `cable`, 1 on fibre `linen`, 2 on price under $60, 0 adding hand-dyed with the empty state rendering, back to 12 on clear. Sort ascending returned $34 through $265 in order, descending returned the exact reverse.
- Product (`harvest-tote`): title, breadcrumb, 4 gallery views, 2 size pills, 4 colourway pills, 4 accordions, 3 carries-well-with cards. Chose Large and Moss at quantity 2, which landed in the drawer as "Moss · Large" at a $156 subtotal with free shipping unlocked.
- Cart: add, quick-add, bump, decrement-to-remove, explicit remove, and empty state all confirmed.
- About: no duplicated sections, process reads as the five knitting stages, washing and sizing accordions carry knit content only.
- Zero jewelry-era terms remain in any shipped file.
- Mobile at 375px: no horizontal overflow, burger toggles the nav, hero and grids collapse to one column.
- Voice gate (`_shared/anti_ai_voice_gate.py`) PASS on all five source files, zero severity-3 hits.
- Deslop shape gate (`/deslop`) PASS on all five source files after a copy pass. Brandon flagged the original hero, "Every stitch put there by a hand", as reading AI. It was a craft-virtue slogan with no checkable fact in it, so the hero now states the claim the rest of the site substantiates: "Knitted bags that hold their shape." The same pass removed 11 severity-3 hits (the house-banned word "before", a contrastive "while", "reads as", "sits at", a personified blurb, and a rhythmic triple) and replaced the ticker boast with the studio's real output ceiling.
- The flagged shape is now encoded as `artisan_virtue_slogan` in `_shared/anti_ai_tells.json`, so every skill that calls the shared gate inherits it. Regression-tested against 1,049 shipped routes: `labour of love` was dropped because it is verbatim Hebrews 6:10 NKJV, and bare `lovingly` was narrowed to the making context because it hit a literal episode recap. Catalogued in `~/.claude/skills/deslop/slop_catalog.md`.

Palette: Fantastic Mr. Fox (Wes Anderson).

`delete/_spritecheck.html` is the throwaway contact sheet used to review the
twelve illustrations side by side. It is retired rather than removed.
