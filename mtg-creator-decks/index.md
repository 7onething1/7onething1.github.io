# Creator Standard Decks

Live: https://drwu-htmls.vercel.app/mtg-creator-decks

Standard deck videos from 50 tracked creators, each with its decklist link,
colors, archetype, and a spike-or-brew read. Generated 2026-11-13.

## Current state

| Measure | Value |
|---|---|
| Decks on the page | **663** |
| With real price and wildcard numbers | **636** |
| ├ from Moxfield (signed-in browser) | 327 |
| ├ from Aetherhub (signed-in browser) | 34 |
| ├ from the video description | 223 |
| └ from MTGGoldfish | 36 |
| Decklist walled | **27** |
| Creators | 50 |
| Carrying a publish date | 584 |
| Newest video | 2026-11-13 |
| Colors counted off the real list | 633 |
| Colors taken from the creator's title | 13 |
| Still unlabelled | 17 |
| Running a card new in The Hobbit (HOB) | **200** |
| Running a card new in Star Trek (TRK) | **42** |
| ├ rares+mythics still needed, cheapest | **5** |
| ├ rares+mythics still needed, median | **15** |
| Dropped as not Standard | **34** |
| Quarantined by the 2026-10-12 bans | **69** |

## Quarantined by the 2026-10-12 bans

Wizards banned 0 cards in Standard on 2026-10-12:
.
Source: [Banned and Restricted Announcement, October 12, 2026](https://magic.wizards.com/en/news/announcements/banned-and-restricted-october-12-2026).

**69 of 663 decks on this page run one of them.**

| Card | Copies | Decks |
|---|---|---|


A quarantined deck is hidden from the default view and stays on the page behind the
**Show quarantined** button, carrying its price, its wildcards and its gameplan. It is
not deleted and not rewritten. Each of these was legal when its creator published it,
and the useful thing to know is which card took it out, so every quarantined card names
the banned cards it runs and how many copies.

The trigger is the announcement, not card legality. Scryfall lags on B&R day: when this
page was built it had propagated 0 of the 0 bans,
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
| 1 | At least 7 decks per creator | 07-11 | 16 of 50 creators clear 7. Capped at the source: MTG Joe 6, from 8 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Brandon (ChatGPT brew) 6, from 7 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); MythicMike 4, from 4 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); multimedia 3, from 3 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); ? 2, from 4 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); SBMTG Dev 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); WebofWyrd 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); PapaPrimal 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); the_golden_gunman 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Panterino777 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Hayabusa341 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Boideux 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Giltz 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); lasersnail 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); jayvillain 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); HarryWang 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); blammazoids 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Byletwin2 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); CaPolsky 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); cbaseball119 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); corytc 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Saleen66 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); umotivo 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Avusui 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Kellen Pastore 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Javier Dominguez 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); January Adams 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Derrick Davis 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Yuchen Liu 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Isael Feitosa 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Noah Michaud 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Jean-Emmanuel Depraz 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Arch Dota 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach); Yuuki Ichikawa 1, from 1 videos the feed reached (RSS serves only the latest 15 uploads, so older decks are out of reach) |
| 2 | Read the description for deck links | 07-11 | 223 decks priced straight from the description |
| 3 | Popular / spike vs jank-or-brew categories | 07-11 | 117 spike, 522 standard, 24 brew |
| 4 | Color buttons that work as OFF switches | 07-19 | Done. Every color starts on, clicking one hides every deck needing it |
| 5 | Link the decklist host | 07-11 | 586 of 663 carry a Moxfield / Aetherhub / Goldfish link |
| 6 | Sort by price, and by wildcards, off the Arena export | 07-18 | Both sorts live, seeded from the collection export at 2026-11-03 |
| 7 | Also link into kc-card-finder | 07-19 | 636 of 663 pass their full list to the finder |
| 8 | Replace "Standard brew" with colors and archetype | 07-19 | Done. 15 cards still read a generic label |
| 9 | Show price and wildcards on the page | 07-19 | On every priced card, 636 of 663 |
| 10 | Creator name on each card when sorted by price | 07-24 | On all 663 cards, revealed the moment a global sort flattens the grid |
| 11 | Update for Ashlizzle's latest | 07-24 | 56 Ashlizzle decks, newest 2026-11-12 |
| 12 | Deck tech, gameplan, sideboard plan | 07-18 | 321 of 663 cards carry a measured gameplan, 109 of those also break out the cards past the first 60. 102 list their main cards as well |

## What a gameplan says, and what it cannot

Each **Gameplan** block is counted off that deck's own list against Scryfall mana
value, type line and oracle text (321 of 663 decks; the rest have no
reachable list). It reports the creature and spell split, the land count, the
average mana value, how many cards cost one or two, where the curve tops out, and
how many answers the list holds by category.

Two limits:

- **Answer counts read oracle text**, so they catch the ordinary wordings and will
  undercount a card that phrases the same effect unusually.
- **The harvested lists are flat.** The board split was discarded when the lists
  were fetched, so no mainboard/sideboard boundary exists in the data. Where a list
  runs past 60, the extra cards are reported as *past the first 60* and labelled
  inferred. 86 of the 109 such decks have exactly 15 there, which is
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
  corpus the manabase is 45% of the median deck price, and 453 of
  808 decks need fewer rare-plus-mythic wildcards without it. The buy link is
  deliberately left alone: it still carts the complete deck, lands included, because
  that is what you have to own to play it.
- **Wildcards to build.** What Arena charges after subtracting owned cards, bucketed by
  rarity, sorted on rare-plus-mythic since that is the number that gates a build.
- **Newest first.** Publish date descending. Undated decks sink, and anything from the
  last 7 days highlights.
- **Wildcards are what is still needed from the collection**, counted per rarity against
  the export stamped 2026-11-03, because Arena will not spend a rare wildcard
  on a mythic. The figure is per deck and after subtracting the cards already owned. It is
  NOT compared against the wildcard balance and no deck is hidden for costing too much:
  more wildcards can be bought, so the cost is the answer rather than a pass or a fail.
  The two boxes in the bar are an optional highlight and start blank.

## Where a price comes from

Four sources, in the order the build tries them: a Moxfield list held from a signed-in
browser pass, then an Aetherhub list from the same pass, then MTGGoldfish, then the video
description itself. A description list is only accepted when it validates against Scryfall,
at least 40 cards with at least 85% of the distinct names resolving to real printings, so a
stray numbered line in free text can never fabricate a price. Hover any price badge on the
page to see its source.

## How the walled decks were opened

Anonymous HTTP is the closed layer. The data behind it stays reachable. Verified 2026-11-13:
Moxfield answers 403 behind Cloudflare on both its API host and its public page after the
301, and Aetherhub answers 403 to curl host-wide, including its own /Docs pages. The
signed-in browser reaches both. Moxfield's own `api2` endpoint returns 200 when called from
inside the page origin with the user's session, and an Aetherhub deck page renders fully,
carrying each copy of a card as a repeated `.cardLink` node, so quantities come from counting
those nodes. That pass closed the last 74 decks on 2026-07-19.

| Host | Links | Reached by |
|---|---|---|
| moxfield | 450 | signed-in browser |
| aetherhub | 167 | signed-in browser |
| untapped | 51 | video description |
| mtggoldfish | 40 | anonymous HTTP |
| magic.gg | 10 | video description |
| chatgpt | 6 | video description |

## Build chain

```
harvest_incremental.py   # RSS -> descriptions via the polite gate, newest first,
                         # checkpoints master_decks.json after EVERY fetch
build_costs.py           # -> deck_costs.json (price + wildcards per deck)
build_page.py            # -> this page AND this .md
```

Source dir: `~/Projects/_outputs/creator-winrate-db/`
