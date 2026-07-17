# Etsy CEO Evaluation — v4 · OnethingNeededShop (50156638)

**Built 2026-07-17 from a live Etsy Open API v3 pull** (getShop + listings all-states + receipts + sections), cross-read against 14 prior Etsy chat sessions. Supersedes `/etsy-ceo-eval` and `/etsy-ceo-eval-v3`.

## The one-line story
A real, accelerating funnel (63 orders in ~9 weeks, 7 → 25 → 31/mo, 1,123 views) that has been run as a **$1 free-sample machine** — 69 of 71 items ever sold went for $1, so lifetime gross is **$95**. Prices were just raised to $13–$38, so the shop is at its pivot: zero full-price validation, a fulfillment backlog, and 121 dark listings behind a storefront that advertises products it no longer sells.

## Live KPIs (Etsy API, 2026-07-17)
- **71** lifetime sales · volume rising 7→25→31/mo
- **$95.02** gross in the ~9-week receipt window · **AOV $1.51** · 97% of items sold at $1
- **7** orders paid-but-not-fulfilled in API (local report flagged 13) · oldest ~28 days
- **3** reviews (avg 5.0) — only ~4% of buyers reviewed
- **23** active listings (all tarot/voice, one section) · **121** dark (85 inactive, 34 draft, 2 other)
- **1,123** views on active listings · ~6.3% crude view→sale
- Current price band **$13–$38**, raised from $1 — untested

## The revenue reality
- Order counts are healthy and climbing; dollars are near-zero because the list price was **$1** (not a coupon — total discounts given were $1.50).
- Only 2 non-$1 orders exist ($10 + $13). The shop has never actually been monetized.

## Fulfillment liability — fix first
7 paid orders not marked fulfilled (Karen M. 6/17 ~28d, Lamyaa B. 6/26, TT Chan 7/1, JoAnne N. 7/2 $10, Leah O. 7/7, Gabbryanna S. 7/13, PM 7/13). Deliver every open order this week, cancelling only any you genuinely cannot fulfill, before any price test; open cases suppress search. Reconcile 7-vs-13 against the sent-files log (is_shipped can lag message-delivered readings).

## Demand signal — what sells
Winners are the psychic/relationship hooks: **Are They Watching You** (11), **Psychic Reading No Cards** (9), **Quick Tarot / Voice Reply** (7, most viewed at 203), **Your Timeline** (7), **What Happens Next** (5). The $28–$38 items and generic "tarot reading" framing have little/no traction.

## Storefront contradiction
Announcement advertises MIDI packs, music-theory guides, faith devotionals, Notion templates — **all 0 active**. 3 of 4 shop sections are empty. Decide: relight the second leg (121 built listings) or rewrite the copy.

## The five CEO moves
1. **Clear the fulfillment debt this week** (protect account health) — effort: hours.
2. **Validate the $13–$38 prices** on the next ~20 orders; add a $3–$5 entry tier if velocity craters.
3. **Farm reviews** — automated post-delivery ask; target 20+ in 60 days (3-from-71 is the #1 leak).
4. **Resolve the storefront contradiction** — relight the second leg or rewrite the announcement.
5. **Concentrate on the psychic-relationship hook** that already wins; retire/reprice dead high-ticket items.

## Risks
Account health from undelivered orders · untested price cliff · single-human fulfillment bottleneck as volume climbs · trust erosion from dead-line advertising.

## The agent stack (blueprints, not running)
Six operational agents off the existing API pipeline; nothing runs autonomously until authorized per agent.
1. **Fulfillment Watchdog** (buildable now) — every 30 min, reads receipts, flags paid orders past ~18h unfulfilled. Guards the same-day promise; addresses Fire #1.
2. **Price Sentinel** (buildable now) — daily, tracks AOV + view-to-sale on the next 20 full-price orders; proposes a $3–$5 entry tier. Addresses Move #2.
3. **Review Harvester** (spec, human-approved send) — drafts the post-delivery review ask on delivery + day 3. Addresses Move #3.
4. **SEO Mirror** (buildable now) — proposes tag/title edits (≤13 tags, ≤20 chars) mirroring the psychic/love winners; PATCH on approval. Addresses Move #5.
5. **Catalog Reconciler** (buildable now) — weekly, diffs announcement vs active listings; lists the 121 dark listings for relight or purge. Addresses Move #4.
6. **Token & API Sentinel** (buildable now) — hourly, refreshes the OAuth token before expiry (`refresh_token.py`). Infrastructure for the stack.

**Provenance:** figures reflect the receipt window pulled (≈2026-05-14 → 2026-07-13); "lifetime sales 71" is the shop's transaction counter. API is_shipped=false is the fulfillment flag; reconcile against sent-files before cancelling.
