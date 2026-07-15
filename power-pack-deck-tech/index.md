# Power Pack: The Random Recast

A deck tech for **Power Pack**, the four-color Fantastic Four Marvel Commander alt, read with Power Pack in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/power-pack-deck-tech](https://drwu-htmls.vercel.app/power-pack-deck-tech)
Related: [Mister Fantastic deck tech](https://drwu-htmls.vercel.app/mister-fantastic-deck-tech) · [Human Torch deck tech](https://drwu-htmls.vercel.app/human-torch-deck-tech) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**Power Pack** costs {1}{R}{G}{W}{U}, a 4/4 Legendary Creature (Human Hero) with **flying, vigilance, trample, haste**, color identity four-color (white, blue, red, green). Ability: **whenever it deals combat damage to a player, exile a random instant or sorcery from your graveyard, and at your next upkeep you may cast that card for free, exiling it afterward**. He is a Fantastic Four alt, a four-color graveyard-value deck: the four keywords guarantee the trigger connects, and the graveyard supplies the fuel, so the deck plays instants and sorceries, fills the yard, and turns every combat step into a free spell.

## The engine, connect and recast

Power Pack solves the hardest part of a combat engine on its own. Flying, vigilance, trample, and haste mean it comes down and hits the same turn, gets through most boards, and stays back to block, so the combat-damage trigger fires almost every turn without help. The payoff is a free instant or sorcery from the graveyard at your next upkeep. The catch: the card is chosen at random, so the deck cannot aim the recast, only stack the deck in its own favor by keeping the graveyard full of spells that are all worth casting. The commander does the connecting; the ninety-nine does the stocking, casting instants and sorceries that go to the yard and filling it further with self-mill and looting.

## The quality lever, random rewards the average

Because the recast is random, the number that matters is the quality of the average spell, more than the raw count in the graveyard. A yard stuffed with weak filler cantrips gives a coin-flip on a meaningful cast; a leaner yard of uniformly strong spells makes almost every random hit count:

| Graveyard instants and sorceries | Chance the free cast matters |
|---|---|
| 5 strong of 12 | 42% |
| 8 strong of 12 | 67% |
| 6 strong of 8 | 75% |
| 10 strong of 12 | 83% |

Cut weak filler even when it would add to the raw spell count, since each low-impact instant or sorcery is a slot on the random wheel that returns nothing. Prefer a smaller set of spells that are all removal, card draw, ramp, or a finisher, so a random pick is never a dead cast. The strength of the average spell is the whole engine.

## Filling the yard

The engine needs instants and sorceries in the graveyard before Power Pack connects, so the build carries a fill package on top of the spells themselves: self-mill, looting and rummaging, and cheap cantrips that go to the yard after they resolve, plus your own removal and draw filling it as a matter of course. Reach a healthy yard by the midgame so the first few hits already return strong spells. One nuance: the recast exiles the card afterward, so the pool shrinks by one each turn and needs replenishing. A spell that refills the graveyard is worth more than one that empties it, and recursion that returns instants and sorceries keeps the wheel spinning across a long game.

## The four-color cost

Power Pack costs one generic and one of every color except black, so the commander itself demands a four-color base before it enters. Unlike the other Fantastic Four faces, the four-color payment is in the cast cost rather than an attack tax, so you pay it once to deploy and the free recast asks nothing more. The mana base still has to make all four colors to cast the commander on curve and to cast the spells that fill the yard. The upside: the recast is genuinely free, so once Power Pack is down the engine runs on combat alone.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without Power Pack | Verdict |
|---|---|---|---|---|
| High-impact instant or sorcery | A strong random recast target | Very high, the recast pool | Good, a strong spell anywhere | **core** |
| Self-mill or looting effect | Fills the graveyard with spells | High, feeds the pool | Fine, selection and fuel | **core** |
| Four-color fixing source | Casts the commander and the spells | High, deploys the engine | Fixes mana in any four-color deck | **core** |
| Graveyard recursion for spells | Refills the shrinking recast pool | Medium, extends the engine | Fine value in a spells deck | **supported** |
| Weak filler cantrip | A spell, but a dead random hit | Low, dilutes the pool | Marginal on its own | **situational** |

The weak cantrip drops to situational, the read most spell decks get backwards: it adds to the graveyard count and lowers the average quality of the random recast, so a deck of thirty mediocre spells returns worse hits than a deck of twenty strong ones. Self-mill and fixing climb to core, since the engine needs a stocked yard and a deployed commander before it does anything.

## Beyond the Dead Draw Audit: the construction audit

Scores the whole ninety-nine on the recast engine.

| Target | Count | Why |
|---|---|---|
| High-impact instants and sorceries | 26-32 | The random recast pool, all worth casting |
| Graveyard fill | 8-10 | Self-mill, looting, recursion to feed the pool |
| Four-color fixing | heavy | Deploys the commander and casts the spells |
| Weak filler spells | near zero | Each dilutes the random cast |
| Protection and interaction | 8-10 | Guard the engine, mostly through the spell base |
| Lands | 37-38 | A four-color base slanted to fixing |

Read the instant and sorcery quality and the fill as one system: the quality decides how good each random recast is, the fill decides whether there is a target at all. A deck of strong spells with no way to bin them stalls; a deck that mills hard into weak spells returns junk. Report two numbers: the count of instants and sorceries you would cast for free at any time, and the count of fill effects. The honest measure is the average quality of the graveyard pool on the turn Power Pack connects. Every revision holds the quality bar and the fill first: a new instant or sorcery is one you are glad to hit at random, a new fill effect also draws or removes, and a weak spell added only for graveyard count is the first cut. Because the recast exiles the card, keep enough recursion that the pool does not empty in a long game.

## The shell, a four-color spells-matter plan

Power Pack shares the four-color Fantastic Four base on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), so the fixing and much of the instant and sorcery package carry over. Where the other faces reward casting spells in the moment, Power Pack rewards casting them a second time from the graveyard, so the build leans into higher instant and sorcery quality and a real fill package. Under him the shell trades a few of the cheapest filler spells for stronger ones and adds self-mill and recursion. The interaction and card draw carry over from any four-color spellslinger list and double as recast fuel; the build changes the payoff toward the graveyard.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (Power Pack oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Four-color Fantastic Four shell on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), [Crystal deck tech](/crystal-inhuman-princess-deck-tech/), [Invisible Woman deck tech](/invisible-woman-deck-tech/), [The Thing deck tech](/the-thing-deck-tech/), and [Human Torch deck tech](/human-torch-deck-tech/).
- The quality figures are the direct fraction of high-impact spells in the graveyard, since the recast is random: ten strong of twelve returns a strong cast about 83 percent of the time.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
