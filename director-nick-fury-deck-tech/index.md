# Director Nick Fury: The Hero-Value Engine

A deck tech for **Director Nick Fury**, the Avengers Assemble Marvel Commander alt, read with Nick Fury in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/director-nick-fury-deck-tech](https://drwu-htmls.vercel.app/director-nick-fury-deck-tech)
Related: [Captain America deck tech](https://drwu-htmls.vercel.app/captain-america-team-leader-deck-tech) · [EDHREC read](https://drwu-htmls.vercel.app/salubrioussnail-marvel-edhrec) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**Director Nick Fury** costs {U}{R}{W}, a 2/4 Legendary Creature (Human Spy Hero), Jeskai. Two abilities: **Hero spells you cast cost {1} less**, and **whenever you attack, look at the top four cards, reveal a Hero from among them and put it into your hand** (rest to the bottom in random order). He leads the same Avengers Assemble shell as Captain America. The difference is the plan: Cap builds a wide counter board for one explosive turn; Nick Fury grinds with cheaper Heroes and a fresh Hero in hand on every swing.

## The engine, two abilities on one axis

The whole deck turns on **Hero density**. The cost cut is ramp measured in Heroes: each Hero refunds a generic mana. The attack dig is card advantage measured in Heroes: four deep, take the Hero. A thin Hero count means a discount that rarely fires and a dig that whiffs; a high count means a discount most turns and a near-automatic card each attack.

**Reveal is not draw.** The dig reveals a Hero into hand, and revealing does not draw. Cards and payoffs that reward a draw trigger do not fire off Nick Fury's dig, off Avengers Tower, or off Herald's Horn. That line separates a Nick Fury build from a generic Jeskai draw deck and steers the payoff choices.

## Hero-density math: the dig hit-rate

Whether an attack draws a card depends entirely on the Hero count in the ninety-nine (hypergeometric, top four of a 99-card library):

| Heroes in the 99 | One attack finds a Hero |
|---|---|
| 22 | 64.1% |
| 27 (Avengers shell) | 72.7% |
| 32 | 79.6% |
| 37 | 85.2% |

Two attackers double the draws, so a developed board at 32 Heroes expects better than one and a half Hero cards a turn from Nick Fury alone. The deck therefore wants evasion or unblockable access, since a Hero that cannot connect gives a body but no dig. Nick Fury is a 2/4, fine into an open board and poor once blockers arrive, so his own trigger wants a way through.

## Cost reduction as Hero-shaped ramp

On a two-to-four Hero curve, one generic off each is a large discount, and it compounds as the dig keeps handing you Heroes. Two Heroes a turn is two mana back. The cut does not touch removal, rocks, or draw, so keep the Hero count high enough that the reduction works most turns. Because the commander behaves like repeatable ramp, a Nick Fury list can run a slightly leaner rock package than a Cap list and spend the freed slots on more Heroes and more combat access.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without Fury | Verdict |
|---|---|---|---|---|
| Kindred Discovery | Draw on each Hero that enters or attacks | Very high, all 27+ Heroes plus tokens | Full, draws in any Hero deck | **core** |
| Herald's Horn | Hero cost cut plus a top-of-deck Hero reveal | High, the whole Hero count | Good, stands alone | **core** |
| Iron Man, Armored Avenger | Modified attackers fly; counter on each card drawn | High for flying, lower for the draw half | Flying helps; draw-to-counter misses the reveal | **supported** |
| Rogue's Passage | Pushes a Hero through for the dig and damage | Medium, any single attacker | Good, unblockable is generic value | **supported** |
| Door of Destinies | Anthem that grows on a Hero you cast | Casting only, not tokens or reveals | Independent, but the charge half is narrow | **situational** |

Iron Man drops to supported for a Fury-specific reason: his counter half rewards drawing, and the dig reveals rather than draws, so the flying is the reliable half. Rogue's Passage earns its slot more here than in a go-wide Cap list, because one unblockable attacker guarantees the dig through a clogged board.

## Beyond the Dead Draw Audit: the construction audit

The governing number is **Hero density**, since both abilities pay out in proportion to the Hero count. A Cap list is happy at 27 Heroes; a Nick Fury list should climb toward the low thirties.

| Target | Count | Why |
|---|---|---|
| Heroes | 30-34 | Dig above 79 percent, discount live most turns |
| Real draw sources | 7-9 | The reveal is not a draw, so draw-payoffs need a genuine engine |
| Combat access | 4-6 | Evasion and unblockable so the dig fires each turn |
| Interaction | 10-12 | Spot removal plus a few resets |
| Ramp and rocks | 6-8 | Leaner than a Cap list, the commander is a repeatable discount |
| Lands | 36 | A Jeskai base tuned to a two-to-four curve |

**Selection is not draw.** Nick Fury hands you one Hero and buries three, so his dig is selection rather than raw cards. List selection and true draw as two separate numbers; a build that reports its digs as draws overstates its card advantage. Every revision should hold the Hero floor first: a new noncreature replaces a noncreature, a new Hero replaces a weaker one. Combat access and real draw are the two packages that keep the engine honest.

## Cap or Fury: the two faces of the shell

| Commander | Plan | Strength | Weakness |
|---|---|---|---|
| Captain America, Team Leader | Go-wide Heroes and counters | Explosive counter turns | Exposed to a well-timed wipe |
| Director Nick Fury | Grindy Hero value and selection | Cheaper Heroes, steady card flow | Slower to close |

Both are Jeskai and lead the same ninety-nine. Move Nick Fury to the command zone when you would rather out-grind the table than race it.

## The shell, and how it shifts under Fury

Nick Fury leads the same grounded Jeskai shell laid out card by card on the [Captain America deck tech](/captain-america-team-leader-deck-tech/), so the full hundred lives there. The Hero package is the spine (Black Widow, Ant-Man, Silver Sable, Hawkeye, Spider-Woman, The Wasp, Falcon and Redwing, Shang-Chi, Scarlet Witch, Iron Man, Photon, Vision, Winter Soldier, War Machine, and the rest, mostly two to four mana). Three shifts under Nick Fury: Captain America moves into the ninety-nine as one more Hero, Nick Fury takes the command zone, and the counters-only payoffs give way to more Heroes, more real draw, and a couple of unblockable enablers. The manabase, rocks, and interaction carry over intact.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (Nick Fury oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Avengers shell, Hero count, and inclusion from the [Captain America deck tech](/captain-america-team-leader-deck-tech/) and EDHREC Avengers pages.
- Dig hit-rates are hypergeometric over a 99-card library, top four cards.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
