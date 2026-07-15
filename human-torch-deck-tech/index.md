# Human Torch: The Table-Wide Burn

A deck tech for **Human Torch**, the four-color Fantastic Four Marvel Commander alt, read with Human Torch in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/human-torch-deck-tech](https://drwu-htmls.vercel.app/human-torch-deck-tech)
Related: [Mister Fantastic deck tech](https://drwu-htmls.vercel.app/mister-fantastic-deck-tech) · [The Thing deck tech](https://drwu-htmls.vercel.app/the-thing-deck-tech) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**Human Torch** costs {3}{R}, a 3/2 Legendary Creature (Human Hero), color identity four-color (white, blue, red, green) earned through his attack ability. Two abilities: **at combat, if you cast a noncreature spell this turn, he gains flying, double strike, and haste**; and **whenever he attacks, you may pay {R}{G}{W}{U}, and for the rest of the turn each time he deals combat damage to an opponent he deals that much to each other opponent**. He is a Fantastic Four alt, a four-color spellslinger that ends a multiplayer game from a small evasive body by copying its damage across the whole table.

## The engine, one attacker hits everyone

Human Torch stacks two effects most decks pay a premium for. The first hands him flying, double strike, and haste on any turn you cast a noncreature spell, so he comes down and connects the same turn, hits twice, and dodges most blockers. The second copies his combat damage to each other opponent, turning a single evasive swing into damage on the entire table. Double strike matters twice over, since each of its two combat-damage steps triggers the copy, so a small body sprays the pod. This is a symmetric burn plan, not a single-target beatdown: the Torch does not need to be large, since the copy and the double strike multiply whatever power he has across every opponent at once.

## The burn math, each point hits everyone

With double strike, a power of X deals X twice to the opponent he attacks, and the copy sends each hit to every other opponent, so each opponent takes 2X per attack:

| Power | Per opponent | 3-opponent table | Swings to drop a 40 |
|---|---|---|---|
| 3 (printed) | 6 | 18 | 7 |
| 6 | 12 | 36 | 4 |
| 10 | 20 | 60 | 2 |
| 20 | 40 | 120 | 1 |

Every point of power is six damage across a three-opponent table, since double strike doubles it and the copy spreads it. A single +3 aura on the Torch adds eighteen table damage per swing, the most efficient pump in the box. Grow the Torch a little and swing often, since power is worth triple here and the copy makes chip damage lethal to everyone at once.

## The four-color tax

The copy costs one red, one green, one white, and one blue on every attack you want it, on top of casting a noncreature spell. The mana base has to make all four colors on demand every turn, so fixing lands, four-color rocks, and mana creatures are the spine of the deck. The upside: the keywords still land without the payment, so a short turn still gives you an evasive double striker pressuring one opponent. Run enough fixing that the copy is available on set turns and enough ramp that paying it leaves mana for the noncreature spell.

## Power and protection

Because each point of power is worth so much, cheap pumps do more here than on a normal beater: auras and Equipment that add a few power turn the Torch into a table-wide clock, and extra combat steps or extra damage compound with the copy. The other side: he is a 3/2 who only gains his keywords on your combat, so he is fragile on other turns. A little protection keeps the plan alive, so a removal spell does not cost the whole engine.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without Human Torch | Verdict |
|---|---|---|---|---|
| Cheap noncreature cantrip | Turns on the keywords and replaces itself | Very high, the keyword engine | Good, card flow anywhere | **core** |
| Four-color fixing land or rock | Pays the {R}{G}{W}{U} copy tax | High, every table-wide turn | Fixes mana in any four-color deck | **core** |
| Cheap power aura or Equipment | Each point is six table damage a swing | High, the copy multiplies it | Good on any attacker | **core** |
| Extra combat or extra damage effect | More swings or more copied damage | Medium, compounds the copy | Situational alone | **supported** |
| Colorless-only ramp rock | Ramp, but adds no color for the tax | Low, does not pay the copy | Ramps in any deck | **situational** |

The power aura climbs to core, higher than on most decks, because the copy turns every point of power into damage on the whole pod. The colorless-only rock drops to situational for the same reason it does under the other four-color faces, since it skips the payment the deck is built to reach.

## Beyond the Dead Draw Audit: the construction audit

Scores the whole ninety-nine on the burn's inputs.

| Target | Count | Why |
|---|---|---|
| Noncreature spells | 30-36 | One a turn turns on flying, double strike, and haste |
| Four-color fixing | heavy | Lands, rocks, and dorks that pay {R}{G}{W}{U} |
| Cheap power boosts | 8-10 | Each point is six table damage with the copy |
| Protection for the Torch | 5-7 | Hexproof, recast, a saved swing |
| Interaction | 8-10 | Four-color removal and a reset |
| Lands | 37-38 | A four-color base slanted to fixing |

Read the noncreature count and the fixing as the two things that gate the plan, and the power and protection as the two that scale and shield it: without a spell the keywords stop, without four colors the copy stops, without power the burn is slow, without protection the Torch dies before it swings. Report three numbers: the noncreature spell count, the four-color source count, and the count of cheap power boosts. The honest measure is whether you can cast a spell, pay {R}{G}{W}{U}, and connect a boosted swing on the same turn. Every revision holds the noncreature floor and the fixing first, then the power package: a new noncreature spell also draws or interacts, a new mana source adds a color the copy needs, a new pump is cheap enough to leave mana for the copy. Protection stays light but real, since a fragile finisher that never connects wins nothing.

## The shell, a four-color Fantastic Four plan

Human Torch shares the four-color Fantastic Four base on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), since both reward casting a noncreature spell each turn, so the fixing and spell package carry over. Where [Crystal](/crystal-inhuman-princess-deck-tech/) pings for color count, [Invisible Woman](/invisible-woman-deck-tech/) builds Walls, and [The Thing](/the-thing-deck-tech/) doubles counters, Human Torch copies his combat damage to the whole table. Under him the shell adds cheap power auras and Equipment and a little protection on top of the shared spell and fixing base. The interaction and card draw carry over from any four-color spellslinger list; the build changes the payoff toward evasion and power.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (Human Torch oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Four-color Fantastic Four shell on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), [Crystal deck tech](/crystal-inhuman-princess-deck-tech/), [Invisible Woman deck tech](/invisible-woman-deck-tech/), and [The Thing deck tech](/the-thing-deck-tech/).
- The burn table is direct arithmetic: double strike deals power X twice, each instance copies to every other opponent, so each opponent takes 2X per attack (18 across three opponents at printed power 3); each added power point is 6 more across the table.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
