# Timeless decks, August 2026

Live: https://drwu-htmls.vercel.app/mtga-timeless-august

37 decklists from 4 creators who are not in the Standard corpus,
scored against the live Arena collection. Built 2026-10-29.

| Measure | Without lands | With lands |
|---|---|---|
| Median rare/mythic wildcards | **14** | **22** |
| Most expensive | 25 | 34 |
| Fitting a 10-wildcard budget | **4 of 37** | **2 of 37** |

Creators: Chestheir, Griffin MTG, Priority Holder, Takobyte

## The rules

- **Sideboards are out by the creator's own board split.** 33 of
  37 lists came from Moxfield with `mainboard` and `sideboard` as separate
  boards, excluding **422 sideboard cards** on the creator's
  own filing rather than a card-60 cutoff. Companions are held out too
  (8 cards). The 4 pasted lists
  keep the first-60 reading and are badged as inferred.
- **Remove lands** is a toggle, on by default. Both counts are computed and stored.
- **Colours** from required single-letter mana pips on nonland maindeck cards, kept only
  where the deck plays a source that makes them. Measured against the 21 decks naming a
  colour pair: pip rule alone **67%**, with the castability check **81%**. Read for
  37 of 37 decks, 12 trimmed.
- **August 2026 only**, no rotation filter, since Timeless is eternal.

## Excluded

- **1** no list reachable

Source: `~/Projects/_outputs/creator-winrate-db/harvest_timeless.py` then `score_timeless.py`
