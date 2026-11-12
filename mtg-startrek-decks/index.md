# Star Trek Standard Decks

Live: https://7onething1.github.io/mtg-startrek-decks/

Standard deck videos from 11 tracked creators, each with its decklist link,
colors, archetype, and a spike-or-brew read. Generated 2026-11-12.

## Current state

| Measure | Value |
|---|---|
| Decks on the page | **35** |
| With real price and wildcard numbers | **35** |
| ├ from Moxfield (signed-in browser) | 16 |
| ├ from Aetherhub (signed-in browser) | 0 |
| ├ from the video description | 19 |
| └ from MTGGoldfish | 0 |
| Decklist walled | **0** |
| Creators | 11 |
| Carrying a publish date | 35 |
| Newest video | 2026-11-12 |
| Colors counted off the real list | 34 |
| Colors taken from the creator's title | 0 |
| Still unlabelled | 1 |
| Running a card new in The Hobbit (HOB) | **8** |
| Running a card new in Star Trek (TRK) | **35** |
| ├ buildable on 4 rare + 8 mythic | **3** |
| Dropped as not Standard | **34** |
| Quarantined by the 2026-08-10 bans | **0** |

## Quarantined by the 2026-08-10 bans

Wizards banned 3 cards in Standard on 2026-08-10:
**Badgermole Cub**, **Stormchaser's Talent**, **Gran-Gran**.
Source: [Banned and Restricted Announcement, August 10, 2026](https://magic.wizards.com/en/news/announcements/banned-and-restricted-august-10-2026).

**0 of 35 decks on this page run one of them.**

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

A title cannot tell you a format. 34 decks were held back because under
90% of their card copies are Standard-legal per Scryfall: LegenVD 18, CovertGoBlue 6, CROKEYZ 4, d00mwake 4, Strictly Better MtG 2.
Those are Pauper lists, 100-card Brawl decks and Alchemy rebalances published on channels
whose titles read as Arena Standard. Their prices were real numbers answering the wrong
question. The split is clean, 182 decks at 97% legal or better against 13 at 58% or
worse, so a wide gap separates the two groups and the threshold falls inside it.

## The ask ledger

Every request made against this page in other chats, and where it stands. Counts come
from this build, so the ledger cannot drift from the page.

| # | Asked | Chat | State |
|---|---|---|---|
| 1 | At least 7 decks per creator | 07-11 | 1 of 11 creators clear 7. Capped at the source: d00mwake 6, from 80 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); MTG Malone 5, from 41 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Swayze 4, from 69 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Ashlizzle 3, from 68 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Sloth 3, from 73 videos the feed reached (73 post no decklist link); LegenVD 2, from 53 videos the feed reached (18 fail the Standard-legality gate); Shahar Shenhar 2, from 59 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Arstall 1, from 101 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); CovertGoBlue 1, from 71 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); CROKEYZ 1, from 37 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach) |
| 2 | Read the description for deck links | 07-11 | 19 decks priced straight from the description |
| 3 | Popular / spike vs jank-or-brew categories | 07-11 | 2 spike, 33 standard, 0 brew |
| 4 | Color buttons that work as OFF switches | 07-19 | Done. Every color starts on, clicking one hides every deck needing it |
| 5 | Link the decklist host | 07-11 | 27 of 35 carry a Moxfield / Aetherhub / Goldfish link |
| 6 | Sort by price, and by wildcards, off the Arena export | 07-18 | Both sorts live, seeded from the collection export at 2026-11-03 |
| 7 | Also link into kc-card-finder | 07-19 | 35 of 35 pass their full list to the finder |
| 8 | Replace "Standard brew" with colors and archetype | 07-19 | Done. 1 card still reads a generic label |
| 9 | Show price and wildcards on the page | 07-19 | On every priced card, 35 of 35 |
| 10 | Creator name on each card when sorted by price | 07-24 | On all 35 cards, revealed the moment a global sort flattens the grid |
| 11 | Update for Ashlizzle's latest | 07-24 | 3 Ashlizzle decks, newest 2026-11-07 |
| 12 | Deck tech, gameplan, sideboard plan | 07-18 | 1 of 35 cards carry a measured gameplan, 1 of those also break out the cards past the first 60. 0 list their main cards as well |

## What a gameplan says, and what it cannot

Each **Gameplan** block is counted off that deck's own list against Scryfall mana
value, type line and oracle text (1 of 35 decks; the rest have no
reachable list). It reports the creature and spell split, the land count, the
average mana value, how many cards cost one or two, where the curve tops out, and
how many answers the list holds by category.

Two limits:

- **Answer counts read oracle text**, so they catch the ordinary wordings and will
  undercount a card that phrases the same effect unusually.
- **The harvested lists are flat.** The board split was discarded when the lists
  were fetched, so no mainboard/sideboard boundary exists in the data. Where a list
  runs past 60, the extra cards are reported as *past the first 60* and labelled
  inferred. 1 of the 1 such decks have exactly 15 there, which is
  the legal sideboard size, and across them the tail holds 39 lands against 2,988
  in the first 60. That pattern is what mainboard-then-sideboard order looks like
  across the corpus. For any one deck it stays an inference, so the page labels it
  as one.

## Sorts

- **Price to build.** Paper USD for the full list, cheapest Scryfall printing, basics excluded.
- **Lands off.** Switches the price and wildcard badges to the non-land cards only, and
  the sorting and the wildcard-budget highlight follow it, so the ranking is always on
  the same basis as the number shown. Lands are identified from the Scryfall type line
  rather than the card name, because a name test calls **Boomerang Basics** a land and
  it is a Sorcery; a double-faced spell is judged by its front face. Across the priced
  corpus the manabase is 46% of the median deck price, and 441 of
  785 decks need fewer rare-plus-mythic wildcards without it. The buy link is
  deliberately left alone: it still carts the complete deck, lands included, because
  that is what you have to own to play it.
- **Wildcards to build.** What Arena charges after subtracting owned cards, bucketed by
  rarity, sorted on rare-plus-mythic since that is the number that gates a build.
- **Newest first.** Publish date descending. Undated decks sink, and anything from the
  last 7 days highlights.
- **Editable wildcard budget, counted per rarity**, seeded from the collection export at
  2026-11-03 at **4 rare** and **8 mythic**, so a stale snapshot
  never blocks the ranking. A deck highlights only when it needs no more rares than you
  hold AND no more mythics, because Arena will not spend a rare wildcard on a mythic.
  Tested on the rare-plus-mythic total instead, as this page did until 2026-11-09,
  **11** decks read as affordable where only **3** could be built,
  so **8** were highlighted green while needing more rares than exist.

## Where a price comes from

Four sources, in the order the build tries them: a Moxfield list held from a signed-in
browser pass, then an Aetherhub list from the same pass, then MTGGoldfish, then the video
description itself. A description list is only accepted when it validates against Scryfall,
at least 40 cards with at least 85% of the distinct names resolving to real printings, so a
stray numbered line in free text can never fabricate a price. Hover any price badge on the
page to see its source.

## How the walled decks were opened

Anonymous HTTP is the closed layer. The data behind it stays reachable. Verified 2026-11-12:
Moxfield answers 403 behind Cloudflare on both its API host and its public page after the
301, and Aetherhub answers 403 to curl host-wide, including its own /Docs pages. The
signed-in browser reaches both. Moxfield's own `api2` endpoint returns 200 when called from
inside the page origin with the user's session, and an Aetherhub deck page renders fully,
carrying each copy of a card as a repeated `.cardLink` node, so quantities come from counting
those nodes. That pass closed the last 74 decks on 2026-07-19.

| Host | Links | Reached by |
|---|---|---|
| moxfield | 22 | signed-in browser |
| untapped | 3 | video description |
| aetherhub | 2 | signed-in browser |

## Build chain

```
harvest_incremental.py   # RSS -> descriptions via the polite gate, newest first,
                         # checkpoints master_decks.json after EVERY fetch
build_costs.py           # -> deck_costs.json (price + wildcards per deck)
build_page.py            # -> this page AND this .md
```

Source dir: `~/Projects/_outputs/creator-winrate-db/`
