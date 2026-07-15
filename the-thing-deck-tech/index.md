# The Thing: The Doubling Clock

A deck tech for **The Thing**, the four-color Fantastic Four Marvel Commander alt, read with The Thing in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/the-thing-deck-tech](https://drwu-htmls.vercel.app/the-thing-deck-tech)
Related: [Mister Fantastic deck tech](https://drwu-htmls.vercel.app/mister-fantastic-deck-tech) · [Invisible Woman deck tech](https://drwu-htmls.vercel.app/invisible-woman-deck-tech) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**The Thing** costs {5}{G}, a 5/5 Legendary Creature (Human Hero) with **trample**, color identity four-color (white, blue, red, green) earned through his attack ability. Two abilities that chain: **at combat, if you cast a noncreature spell this turn, put four +1/+1 counters on The Thing**; and **whenever he attacks, you may pay {R}{G}{W}{U} to double the number of each kind of counter on any number of your permanents**. He is a Fantastic Four alt, a four-color voltron that turns a noncreature spell each turn into an exponential trampling clock.

## The engine, add then double

The Thing chains two effects into a curve most creatures cannot match. The first adds four counters each turn you cast a noncreature spell, a flat climb. The second doubles every counter on the swing, turning that flat climb exponential: add four, then double, and the number after each turn is more than twice what it was, since doubling compounds the counters he kept from earlier turns. Trample makes the whole total connect, so no chump block saves the player he points at. The build is a spell-fueled voltron: cast a cheap noncreature spell each turn to trigger the four counters, hold four colors for the doubling, and attacks with one trampling threat that grows past the range where blocking or racing helps.

## The snowball

Starting from a 5/5, one noncreature spell and one doubling turn him into a 13/13. Next turn, the four new counters sit on top of the doubled pile and double again to a 29/29. A third turn puts him past sixty:

| Turn | Counters (after add + double) | Power | Cumulative trample damage |
|---|---|---|---|
| 1 | 8 | 13 | 13 |
| 2 | 24 | 29 | 42 |
| 3 | 56 | 61 | 103 |

A flat +4 each turn would take many turns to matter; the doubling folds every past counter into the next swing, so twenty-one commander damage arrives by the second attack. Protect the sequence and keep it uninterrupted, since one missed noncreature spell or one turn without four colors flattens the curve for a full rotation.

## The four-color tax

The doubling costs one red, one green, one white, and one blue on every attack you want to double, on top of casting a noncreature spell. The mana base has to make all four colors on demand, every turn, so fixing lands, four-color rocks, and mana creatures are the backbone of the deck. The upside: the four counters still land without the payment, so a turn short on colors is a slow turn rather than a wasted one. Run enough fixing that the doubling is available most turns and enough ramp that paying it leaves mana for the noncreature spell.

## Protecting the clock

The Thing is the whole plan on one body, so a single removal spell resets the snowball to zero counters and a fresh 5/5, minus the commander tax. Protection is a core package: hexproof and shroud keep him off targeted removal, indestructible answers destruction and combat, and counter-recovery or a recast keeps a wipe from erasing the turns you invested. The counters live on the creature, so anything that saves the creature saves the clock. Carry a real protection suite and a plan for the counters if he leaves the battlefield; a voltron deck that runs three protection spells folds to the first well-timed answer.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without The Thing | Verdict |
|---|---|---|---|---|
| Cheap noncreature cantrip | Triggers the four counters and replaces itself | Very high, the add engine | Good, card flow anywhere | **core** |
| Four-color fixing land or rock | Pays the {R}{G}{W}{U} doubling tax | High, every doubling turn | Fixes mana in any four-color deck | **core** |
| Hexproof or indestructible protection | Keeps the snowball from resetting | High, the whole clock | Good on any single threat | **core** |
| Proliferate or counter-mover | Adds to or saves the counter pile | Medium, the doubling scales it | Fine in any counters deck | **supported** |
| Colorless-only ramp rock | Ramp, but adds no color for the tax | Low, does not pay the doubling | Ramps in any deck | **situational** |

Protection climbs to core here, higher than on most commanders, because the whole investment sits on one creature and a reset costs several turns of growth. The colorless-only rock drops to situational for the same reason it does under Invisible Woman, since it skips the four-color payment the deck is built to reach.

## Beyond the Dead Draw Audit: the construction audit

Scores the whole ninety-nine on the snowball's two inputs and its fragility.

| Target | Count | Why |
|---|---|---|
| Noncreature spells | 30-36 | One a turn triggers the four counters |
| Four-color fixing | heavy | Lands, rocks, and dorks that pay {R}{G}{W}{U} |
| Protection for The Thing | 8-10 | Hexproof, indestructible, recast, counter recovery |
| Counter support | 4-6 | Proliferate and counter-movers the doubling scales |
| Interaction | 8-10 | Four-color removal and a reset |
| Lands | 37-38 | A four-color base slanted to fixing |

Read the noncreature count, the fixing, and the protection as three pillars that each break the deck when they fail: without a spell the counters stop, without four colors the doubling stops, without protection the whole board of counters vanishes to one answer. Report three numbers: the noncreature spell count, the four-color source count, and the protection count. The honest measure is whether you can cast a spell, pay {R}{G}{W}{U}, and keep The Thing safe on the same turn. Every revision holds the three pillars first: a new noncreature spell also draws or interacts, a new mana source adds a color the doubling needs, a new protection piece answers targeted removal or a wipe. Counter support is a multiplier the doubling loves, but it should not crowd out the pillars.

## The shell, a four-color Fantastic Four plan

The Thing shares the four-color Fantastic Four base on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), since both reward casting a noncreature spell each turn, so the fixing and spell package carry over. Where [Crystal](/crystal-inhuman-princess-deck-tech/) turns those spells into damage and [Invisible Woman](/invisible-woman-deck-tech/) turns them into Walls, The Thing turns them into counters and a doubling clock. Under him the shell adds a heavy protection suite and a few counter multipliers on top of the shared spell and fixing base. The interaction and card draw carry over from any four-color spellslinger list; the build changes the payoff and adds the protection a voltron plan needs.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (The Thing oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Four-color Fantastic Four shell on the [Mister Fantastic deck tech](/mister-fantastic-deck-tech/), [Crystal deck tech](/crystal-inhuman-princess-deck-tech/), and [Invisible Woman deck tech](/invisible-woman-deck-tech/).
- The snowball table is direct arithmetic on a 5/5: +4 counters at combat, then the attack doubles the total, so counters run 8, 24, 56 and power runs 13, 29, 61 over three turns; trample carries it, so 21 commander damage arrives by the second attack.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
