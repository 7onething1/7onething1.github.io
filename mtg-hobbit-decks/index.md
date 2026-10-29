# Hobbit Standard Decks

Live: https://drwu-htmls.vercel.app/mtg-hobbit-decks

Standard deck videos from 36 tracked creators, each with its decklist link,
colors, archetype, and a spike-or-brew read. Generated 2026-10-29.

## Current state

| Measure | Value |
|---|---|
| Decks on the page | **161** |
| With real price and wildcard numbers | **161** |
| ├ from Moxfield (signed-in browser) | 91 |
| ├ from Aetherhub (signed-in browser) | 3 |
| ├ from the video description | 60 |
| └ from MTGGoldfish | 7 |
| Decklist walled | **0** |
| Creators | 36 |
| Carrying a publish date | 161 |
| Newest video | 2026-10-29 |
| Colors counted off the real list | 160 |
| Colors taken from the creator's title | 0 |
| Still unlabelled | 1 |
| Dropped as not Standard | **26** |
| Quarantined by the 2026-08-10 bans | **0** |

## Quarantined by the 2026-08-10 bans

Wizards banned 3 cards in Standard on 2026-08-10:
**Badgermole Cub**, **Stormchaser's Talent**, **Gran-Gran**.
Source: [Banned and Restricted Announcement, August 10, 2026](https://magic.wizards.com/en/news/announcements/banned-and-restricted-august-10-2026).

**0 of 161 decks on this page run one of them.**

| Card | Copies | Decks |
|---|---|---|
| Badgermole Cub | 0 | 0 |
| Stormchaser's Talent | 0 | 0 |
| Gran-Gran | 0 | 0 |

A quarantined deck is hidden from the default view and stays on the page behind the
**Show quarantined** button, carrying its price, its wildcards and its gameplan. It is
not deleted and not rewritten. Each of these was legal when its creator published it,
and the useful thing to know is which card took it out, so every quarantined card names
the banned cards it runs and how many copies.

The trigger is the announcement, not card legality. Scryfall lags on B&R day: when this
page was built it had propagated 1 of the 3 bans,
so a quarantine reading legality would have missed most of it. The list lives in `standard_bans.json` with its source URL, and both
this page and the craft ranking import `bans.py`, so the two cannot disagree about what
is banned.

## What the format gate removed

A title cannot tell you a format. 26 decks were held back because under
90% of their card copies are Standard-legal per Scryfall: LegenVD 11, CovertGoBlue 6, CROKEYZ 4, d00mwake 3, Strictly Better MtG 2.
Those are Pauper lists, 100-card Brawl decks and Alchemy rebalances published on channels
whose titles read as Arena Standard. Their prices were real numbers answering the wrong
question. The split is clean, 182 decks at 97% legal or better against 13 at 58% or
worse, so a wide gap separates the two groups and the threshold falls inside it.

## The ask ledger

Every request made against this page in other chats, and where it stands. Counts come
from this build, so the ledger cannot drift from the page.

| # | Asked | Chat | State |
|---|---|---|---|
| 1 | At least 7 decks per creator | 07-11 | 12 of 36 creators clear 7. Capped at the source: Strictly Better MtG 4, from 44 videos the feed reached (36 post no decklist link); LegenVD 3, from 43 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); multimedia 3, from 3 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); MythicMike 2, from 4 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); TheHolyPally Gaming 2, from 28 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); SBMTG Dev 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); PapaPrimal 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); the_golden_gunman 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Panterino777 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Hayabusa341 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Boideux 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Giltz 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); lasersnail 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); jayvillain 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); HarryWang 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); blammazoids 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Byletwin2 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); CaPolsky 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); cbaseball119 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); corytc 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Saleen66 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); umotivo 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Avusui 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); MTG Joe 1, from 8 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach) |
| 2 | Read the description for deck links | 07-11 | 60 decks priced straight from the description |
| 3 | Popular / spike vs jank-or-brew categories | 07-11 | 14 spike, 144 standard, 3 brew |
| 4 | Color buttons that work as OFF switches | 07-19 | Done. Every color starts on, clicking one hides every deck needing it |
| 5 | Link the decklist host | 07-11 | 147 of 161 carry a Moxfield / Aetherhub / Goldfish link |
| 6 | Sort by price, and by wildcards, off the Arena export | 07-18 | Both sorts live, seeded from the collection export at 2026-10-28 |
| 7 | Also link into kc-card-finder | 07-19 | 161 of 161 pass their full list to the finder |
| 8 | Replace "Standard brew" with colors and archetype | 07-19 | Done. 1 card still reads a generic label |
| 9 | Show price and wildcards on the page | 07-19 | On every priced card, 161 of 161 |
| 10 | Creator name on each card when sorted by price | 07-24 | On all 161 cards, revealed the moment a global sort flattens the grid |
| 11 | Update for Ashlizzle's latest | 07-24 | 11 Ashlizzle decks, newest 2026-08-24 |
| 12 | Deck tech, gameplan, sideboard plan | 07-18 | 17 of 161 cards carry a measured gameplan, 10 of those also break out the cards past the first 60. 5 list their main cards as well |

## What a gameplan says, and what it cannot

Each **Gameplan** block is counted off that deck's own list against Scryfall mana
value, type line and oracle text (17 of 161 decks; the rest have no
reachable list). It reports the creature and spell split, the land count, the
average mana value, how many cards cost one or two, where the curve tops out, and
how many answers the list holds by category.

Two limits:

- **Answer counts read oracle text**, so they catch the ordinary wordings and will
  undercount a card that phrases the same effect unusually.
- **The harvested lists are flat.** The board split was discarded when the lists
  were fetched, so no mainboard/sideboard boundary exists in the data. Where a list
  runs past 60, the extra cards are reported as *past the first 60* and labelled
  inferred. 10 of the 10 such decks have exactly 15 there, which is
  the legal sideboard size, and across them the tail holds 39 lands against 2,988
  in the first 60. That pattern is what mainboard-then-sideboard order looks like
  across the corpus. For any one deck it stays an inference, so the page labels it
  as one.

## Sorts

- **Price to build.** Paper USD for the full list, cheapest Scryfall printing, basics excluded.
- **Wildcards to build.** What Arena charges after subtracting owned cards, bucketed by
  rarity, sorted on rare-plus-mythic since that is the number that gates a build.
- **Newest first.** Publish date descending. Undated decks sink, and anything from the
  last 7 days highlights.
- **Editable wildcard budget** seeded from the collection export at 2026-10-28,
  so a stale snapshot never blocks the ranking.

## Where a price comes from

Four sources, in the order the build tries them: a Moxfield list held from a signed-in
browser pass, then an Aetherhub list from the same pass, then MTGGoldfish, then the video
description itself. A description list is only accepted when it validates against Scryfall,
at least 40 cards with at least 85% of the distinct names resolving to real printings, so a
stray numbered line in free text can never fabricate a price. Hover any price badge on the
page to see its source.

## How the walled decks were opened

Anonymous HTTP is the closed layer. The data behind it stays reachable. Verified 2026-10-29:
Moxfield answers 403 behind Cloudflare on both its API host and its public page after the
301, and Aetherhub answers 403 to curl host-wide, including its own /Docs pages. The
signed-in browser reaches both. Moxfield's own `api2` endpoint returns 200 when called from
inside the page origin with the user's session, and an Aetherhub deck page renders fully,
carrying each copy of a card as a repeated `.cardLink` node, so quantities come from counting
those nodes. That pass closed the last 74 decks on 2026-07-19.

| Host | Links | Reached by |
|---|---|---|
| moxfield | 104 | signed-in browser |
| aetherhub | 33 | signed-in browser |
| untapped | 18 | video description |
| mtggoldfish | 7 | anonymous HTTP |

## Build chain

```
harvest_incremental.py   # RSS -> descriptions via the polite gate, newest first,
                         # checkpoints master_decks.json after EVERY fetch
build_costs.py           # -> deck_costs.json (price + wildcards per deck)
build_page.py            # -> this page AND this .md
```

Source dir: `~/Projects/_outputs/creator-winrate-db/`
