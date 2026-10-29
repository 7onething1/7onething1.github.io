# Decks you can build with 10 rare or mythic wildcards

Live: https://drwu-htmls.vercel.app/mtga-buildable-decks

Read against the live Arena collection, snapshot 2026-10-29.

| Measure | Value |
|---|---|
| Decks you can build | **230** |
| Need zero rare or mythic wildcards | **13** |
| Running at least one card new in The Hobbit | **99** |
| Decks checked | 433 |
| Rejected for needing more than 10 wildcards | 90 |
| Rejected for more than 4 rotating cards | 113 |

## The rules

- **10 rare or mythic crafts**, counted as copies in the deck minus copies owned.
- **Uncommon and common unlimited**, so they never block a deck.
- **Lands excluded** from the wildcard count and the rotation count.
- **Sideboards excluded**, maindeck is the first 60 cards of each harvested list.
- **At most 4 rotating cards**, read as 4 distinct names leaving Standard in early 2027.
- **Hobbit decks only** is a separate toggle stacking on the others. A deck qualifies by
  running at least one card new in The Hobbit; reprints do not count.

## Excluded before scoring

- **168** no list
- **69** banned card
- **6** roundup parent
- **119** folded re-posting
- **14** card not in index

## Grounding

Wildcard counts depend on the Arena-id backfill of 2026-08-27. Scryfall publishes the
whole Hobbit set with no Arena id, so before that pass every Hobbit card read as unowned.

Rotation is decided by set membership against the 15 sets that outlive the early-2027
rotation. The method was validated against the 599 cards already resolved one at a time
through Scryfall and agreed on 599 of 599.

Source: `~/Projects/_outputs/creator-winrate-db/build_buildable_decks.py`
