# Okoye, Mighty and Adored: The Crown Dance

A deck tech for **Okoye, Mighty and Adored**, the Selesnya Wakanda Forever alt, read with Okoye in the command zone. Inspired by Salubrious Snail's deckbuilding framework; oracle text from Scryfall (Marvel Super Heroes Commander, read 2026-07-14). Not authored or endorsed by Salubrious Snail or EDHREC.

Live page: [/okoye-mighty-adored-deck-tech](https://drwu-htmls.vercel.app/okoye-mighty-adored-deck-tech)
Related: [Bast deck tech](https://drwu-htmls.vercel.app/bast-panther-goddess-deck-tech) · [Storm deck tech](https://drwu-htmls.vercel.app/storm-queen-wakanda-deck-tech) · [Marvel rankings](https://drwu-htmls.vercel.app/marvel-commander-rankings)

**Okoye, Mighty and Adored** costs {2}{G}{W}, a 3/3 Legendary Creature (Human Warrior Hero), Selesnya. Two abilities: **when she enters, you become the monarch** (draw an extra card at your end step until someone takes the crown); and **at the beginning of combat, put a +1/+1 counter on a target creature, and that creature gains double strike and trample whenever it attacks the monarch this turn**. She is a Wakanda Forever alt, a green-white monarch and counters deck that grinds cards while it holds the crown and closes with a doubled trampler when it reclaims it.

## The engine, cards and a doubled swing

Okoye pays out on two clocks. The monarch draws a card every end step, a steady stream the table must answer by dealing you combat damage. The combat trigger adds a counter each turn and hands double strike and trample to a creature that attacks the crown. The two rewards sit in tension: holding the crown gives you cards and prevents your own creatures from triggering the bonus, since you cannot attack yourself. Okoye is a tempo commander. She wants the crown for card draw, and she wants an opponent to hold it so her counter-pumped creature can attack the monarch with double strike and trample.

## The crown dance, the read that runs the deck

The double strike and trample key off attacking the monarch, so the bonus is live exactly when someone else wears the crown. The strongest sequence is a loop: you become the monarch and draw, an opponent attacks you and takes the crown, then on your turn Okoye counters a creature and you attack the new monarch with double strike and trample, reclaiming the crown and drawing again next end step. Each pass banks cards and connects a doubled hit. Trample plus double strike blows through a chump block and takes the crown back cleanly. Support the dance with evasion so your pumped creature connects with whoever holds the crown, and a few ways to defend the monarch when cards matter more than the swing. Treat the crown as a resource to move on purpose.

## The doubled-damage math

When the counter-pumped creature attacks the monarch, double strike turns its power into twice the combat damage and trample carries it past a blocker:

| Attacker power | Normal | Vs monarch, doubled | Swings to 21 |
|---|---|---|---|
| 3 | 3 | 6 | 4 |
| 5 | 5 | 10 | 3 |
| 7 | 7 | 14 | 2 |
| 11 | 11 | 22 | 1 |

Okoye already adds a counter each turn, so counter payoffs and a couple of larger bodies push the attacker into the range where a single doubled swing takes back the crown and threatens lethal commander damage. Double strike squares the value of every point above the base, so pair her counter with real power.

## Holding the crown, the card engine

The monarch is a draw engine to keep when the doubled swing is not needed, so a package that defends the crown pays for itself in cards. Deathtouch blockers, reach, and cheap flyers keep opponents from connecting to take it, and pillow effects buy the extra end step. Keep the retention package light, since Okoye can reclaim the crown, so a fortress that never yields it turns off the combat bonus.

## Dead Draw Audit

| Card | Primary job | Support in the 99 | Value without Okoye | Verdict |
|---|---|---|---|---|
| Evasive attacker (flying or menace) | Connects to the crown for the doubled swing | High, every crown-dance turn | Good, a threat alone | **core** |
| +1/+1 counter payoff | Turns the per-turn counter into value | High, a counter every combat | Good in any counters deck | **core** |
| Monarch-retention blocker (deathtouch/reach) | Keeps the crown for card draw | Medium, the card engine half | Good, a defensive body | **supported** |
| Extra monarch synergy card | Rewards being the monarch | Medium, one theme | Depends on the crown | **supported** |
| Vanilla ground body, no evasion | A counter target a blocker stops | Low, cannot reach the crown | Depends on its stats | **situational** |

The vanilla body drops to situational because the doubled swing must connect, and a ground creature with no evasion gives the doubled damage back to a blocker outside of trample. Evasive attackers climb, since they carry the pump to the crown reliably.

## Beyond the Dead Draw Audit: the construction audit

Scores the whole ninety-nine on Okoye's two clocks: the monarch card engine and the counter-plus-double-strike swing.

| Target | Count | Why |
|---|---|---|
| Evasive attackers | 10-14 | Flying or menace to reach the crown for the doubled swing |
| Counter payoffs | 8-10 | Turns Okoye's per-turn counter into value |
| Monarch retention | 4-6 | Deathtouch, reach, cheap flyers to bank cards |
| Interaction | 9-11 | Green-white removal and a reset to reach the grind |
| Ramp | 8-10 | Reach four mana and the payoff suite early |
| Lands | 36-37 | A clean Selesnya base |

Read the evasion count and the counter-payoff count as one system: evasion decides whether the doubled swing connects, the counter payoffs decide how much each swing is worth. Report two numbers: reliably evasive attackers, and counter payoffs. A build with a stack of counters and no evasion cannot reach the crown; a pile of flyers with no counter support leaves the swings small. Every revision holds the evasion floor and the counter-payoff count first: a new attacker earns its slot through flying, menace, or trample, and a new counter payoff ideally also draws a card or protects the board. Keep the monarch-retention package light, since a fortress that never yields the crown turns off the double strike the deck is built to land.

## The shell, a Selesnya monarch plan

Okoye is a legal Wakanda Forever commander in green and white, and the box already runs a monarch sub-theme, so the stock ninety-nine points partway at her. She wants a different build from the other Wakanda faces: the [T'Challa](/tchalla-black-panther-deck-tech/) and [Shuri](/shuri-black-panther-deck-tech/) plans count artifacts, [Storm](/storm-queen-wakanda-deck-tech/) stacks power on one commander, and [Bast](/bast-panther-goddess-deck-tech/) goes wide. Okoye wants evasive threats, counter payoffs, and a light monarch package, a green-white midrange deck that grinds cards and lands one doubled swing a turn. The interaction and ramp carry over from any Selesnya midrange list; only the payoff changes.

## Sources

- Card data: [Scryfall, Marvel Super Heroes Commander](https://scryfall.com/sets/msc) (Okoye oracle read 2026-07-14)
- Decklists & commanders: [WotC Marvel Super Heroes Commander Decklists](https://magic.wizards.com/en/news/announcements/marvel-super-heroes-commander-decklists)
- Wakanda shell and other Wakanda plans on the [T'Challa](/tchalla-black-panther-deck-tech/), [Shuri](/shuri-black-panther-deck-tech/), [Storm](/storm-queen-wakanda-deck-tech/), and [Bast](/bast-panther-goddess-deck-tech/) deck techs.
- Double strike and trample fire only against the current monarch; monarch draws a card at your end step. The doubled-damage table is direct arithmetic, twice the attacker's power, swings-to-21 divided and rounded up.
- Method inspired by Salubrious Snail's published framework; not endorsed by Salubrious Snail or EDHREC.
