# Doctor Doom, King of Latveria: The Discard-Drain Throne

A deck tech for **Doctor Doom, King of Latveria**, the Grixis face of Doom Prevails, read with Doom in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/doctor-doom-king-deck-tech](https://drwu-htmls.vercel.app/doctor-doom-king-deck-tech)
Related: [Doom Prevails precon audit](https://drwu-htmls.vercel.app/doom-prevails-deck-tech) · [Loki deck tech](https://drwu-htmls.vercel.app/loki-deceiver-deck-tech) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**Doctor Doom, King of Latveria** costs {1}{U}{B}{R}, a 3/3 Legendary Creature (Human Noble Villain), color identity Grixis. Two abilities: **whenever you discard one or more land cards, each opponent loses 2 life**; and **at the beginning of combat on your turn, a target Villain you control gains menace and connives** (draw, discard; a +1/+1 counter if the discard was a nonland). He is the face of Doom Prevails. This page reads Doom as a dedicated commander and builds around the drain; the precon and the Loki split live on their own pages.

## Two engines, one resource

Both abilities run on discards. The land-discard drain wants you to pitch lands (two life off each opponent per event). The combat connive wants a Villain and offers a choice on its discard: a land for the drain, or a nonland for a +1/+1 counter. The connive is your most reliable discard outlet, so Doom is partly self-contained: each combat he can discard a card, and steering it to a land turns the connive into a drain as well as a filter. Two build questions follow: how many separate land-discard events can you create per turn, and how many Villains can you field so the connive always has a target.

## The drain math, per event not per card

The drain triggers whenever you discard **one or more** land cards, and each trigger is two life. That counts **once per discard event that includes at least one land**. A single event that pitches several lands still drains only two. A Windfall dumping three lands is one event and one two-life drain. Three separate small discards each pitching a land are three events and six life. So build many small, repeatable discard outlets rather than one big mass discard, and every one should be able to reach a land.

| Drain | Value |
|---|---|
| One land-discard event, each opponent | 2 |
| One land-discard event, 3-opp table | 6 |
| Doom's combat connive steered to a land, per turn | 6 table |
| Separate land-discard events to drain a 40-life opponent | 20 |

Doom's own combat connive is one guaranteed land-discard event a turn (six table damage) once you have a land to pitch. Each extra rummage or cycling land is another six. The finished list raises the number of separate land-discard events per turn, since that count is the drain clock.

## Land or nonland, the connive choice

Each combat: discard a land to drain the table for two off each opponent, or discard a nonland for a +1/+1 counter and a bigger menacing body. Grow the creature when the board is contested; drain when you are racing. Construction supports the choice by keeping spare lands to pitch (a slightly higher land count and a few land-draw effects turn a flood into ammunition), and cheap card draw refills the nonland side for the counter turns.

## Villain count, the combat trigger's fuel

The combat connive targets a Villain you control, so a turn with no Villain wastes the ability. Villain density is a real construction number. Run enough Villains that Doom almost always has a target, and a couple that make more Villains or survive removal so a sweep does not switch the engine off. Doom himself is a Villain (the floor); build above it. Villains also carry the discard-matters payoffs and the box's Villain-cost reducers, so the type does double duty.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without Doom | Verdict |
|---|---|---|---|---|
| Repeatable single-card rummage/loot | A land-discard event most turns | High, feeds drain and filters | Good, selection anywhere | **core** |
| Cycling / channel lands | A land pitched for a drain event | High, they are lands and outlets | Good, still lands | **core** |
| Villains that make Villains | Keep a connive target through removal | Scales the combat trigger | Bodies in any Grixis deck | **supported** |
| Windfall / mass discard | Refill, and a single drain event | One event even pitching many lands | Card advantage on its own | **situational** |
| Big colorless payoff ignoring discards | Standalone value | None for either engine | Depends on its text | **situational** |

Windfall drops to situational for the per-event reason: it fires the drain only once no matter how many lands it pitches, so it earns its slot as a refill rather than a drain engine. The repeatable single-card outlets are the opposite, a fresh event every turn.

## Beyond the Dead Draw Audit: the construction audit

Scores the whole ninety-nine on Doom's two engines: separate land-discard events per turn, and the Villain count that keeps the connive live.

| Target | Count | Why |
|---|---|---|
| Repeatable land-discard outlets | 10-12 | Each is a fresh drain event, the core clock |
| Villains | 18-22 | Keeps a combat connive target through removal |
| Land supply and card draw | 7-9 | Spare lands to pitch, spare nonlands for counters |
| Interaction | 10-12 | Grixis removal and a wipe to reach the grind |
| Mass-discard refills | keep low | One drain event each, so count them as card draw |
| Lands | 37-38 | Slightly high, since lands are drain ammunition |

Report two numbers when you tune the list: the repeatable land-discard outlet count and the Villain count. A build that reports a big discard total while most of it is one-shot mass discard is overstating its clock, because the per-event rule caps those at one drain apiece. The honest measure is separate land-discard events per turn times six table damage. Every revision holds both floors first: a new discard outlet is repeatable and can reach a land, a new Villain replaces a nonVillain when the count runs thin. The slightly high land count is deliberate, since a spare land is drain fuel waiting for an outlet.

## The shell, Doom or the full precon

Doctor Doom is the printed face of Doom Prevails, so the stock ninety-nine already points at his engines, and the card-by-card precon audit lives on the [Doom Prevails page](/doom-prevails-deck-tech/). This page reads Doom as a dedicated commander. The shift from stock: more repeatable single-card discard outlets, a higher Villain count, cycling and channel lands that double as drain fuel, and a land count a card or two above normal. The Loki copy plan pulls the other way and has its own [Loki deck tech](/loki-deceiver-deck-tech/). Doom and Loki share the same discard-and-Villain core and split on the payoff: Doom into a table-wide drain, Loki into a copied swarm.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (Doom oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Doom Prevails shell and the Doom/Loki split on the [Doom Prevails page](/doom-prevails-deck-tech/) and [Loki deck tech](/loki-deceiver-deck-tech/).
- The drain triggers once per discard event containing at least one land; per-event figures are 2 to each opponent, 6 to a 3-opp table, 20 events to drain a 40-life opponent.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
