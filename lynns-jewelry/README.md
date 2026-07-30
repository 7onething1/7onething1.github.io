# Lynn's Jewelry — sample handmade-jewelry storefront

A four-page demonstration storefront for a hand-made jewelry brand, built 2026-07-29.
The brand, the maker, the twelve products, the prices, and the reviews are invented.
Every page carries a visible sample-site notice, and checkout is disabled.

**Live:** https://7onething1.github.io/lynns-jewelry/

## Routes

| Route | What it is |
|---|---|
| `index.html` | Home. Editorial hero, five collection tiles, featured grid, maker story, four-stage process, anime row, buyer quotes, newsletter. |
| `shop.html` | Full catalog. Filter rail (collection, theme, metal, price), four sort modes, live result count, empty state. |
| `product.html?id=<id>` | Product detail. Four-view gallery, variant pills, quantity stepper, add to bag, four accordions, spec table, pairs-with row. |
| `about.html` | The studio. Maker story, stats, five-stage process, standing rules, care guide, sizing, six-item FAQ. |

Deep links that work: `shop.html?tag=anime` (theme filter pre-applied),
`shop.html?c=<collection-id>` (collection pre-applied).

## Collections

Five, each carrying its own palette colour.

| id | Name | Pieces |
|---|---|---|
| `forge` | The Forge | 3 |
| `stone` | Set in Stone | 2 |
| `everyday` | Everyday Weight | 2 |
| `anime` | Ink & Enamel | 4 |
| `limited` | One of One | 1 |

Six of the twelve pieces carry `anime: true` and are reachable through the Theme
filter, which cuts across collections: Kitsune Mask Studs, Star Sigil Locket,
Mecha Joint Ring, Chibi Cat Bracelet, Sakura Petal Drops, Onmyoji Talisman Pendant.

Anime motifs are drawn for this project from folklore and from anime visual
language, fox masks, star sigils, mecha panel lines, so no listing copies a
licensed character. The FAQ states that policy on the site itself.

## Build

- `assets/site.css` — design system. Cream ground, ink type, five collection accents, paper grain, responsive down to 375px.
- `assets/site.js` — catalog data, twelve hand-written SVG product illustrations as a symbol sprite, shared header and footer, cart, four page controllers.
- Type: Cormorant Garamond display, Inter UI, JetBrains Mono for specs and prices.
- No build step, no framework, no external images. Fonts are the only third-party request.

The cart is real: `localStorage` under `lynns-cart-v1`, add and quick-add,
quantity stepper, decrement-to-remove, free-shipping threshold at $150 with a
progress bar, subtotal and shipping and total. Checkout shows a sample notice
rather than taking payment.

## Verification run 2026-07-29

- Console clean on all four routes, no errors.
- Home: 5 tiles, 4 featured cards, 4 anime cards, 4 process steps, 3 quotes, 14 sprite symbols.
- Shop filters exercised: 12 → 4 on collection `anime`, → 1 adding price band under $100, → 0 adding copper with the empty state rendering, back to 12 on clear. Sort low-to-high and high-to-low both verified against the rendered prices.
- Product: title, breadcrumb, 4 gallery views, 3 size pills, 2 metal pills, 4 accordions, 3 pairs-with cards. Variant selection, stepper, and add-to-bag all confirmed to land in the drawer at the right subtotal.
- Cart: add, quick-add, bump, decrement-to-remove, explicit remove, and empty state all confirmed.
- Mobile at 375px: no horizontal overflow, burger toggles the nav, hero and grids collapse to one column.
- Voice gate (`_shared/anti_ai_voice_gate.py`) PASS on all five source files, zero severity-3 hits.

Palette: Fantastic Mr. Fox (Wes Anderson).

`delete/_spritecheck.html` is the throwaway contact sheet used to review the
twelve illustrations side by side. It is retired rather than removed.
