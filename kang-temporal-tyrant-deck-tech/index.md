# Kang, Temporal Tyrant: The Second-Draw Machine

The Doom box's control villain runs on one trigger, your second card each turn, and that trigger fires on every player's turn in the game, including all three of your opponents'. Every good card either helps you hit it or pays you off for hitting it.

*This Kang, Temporal Tyrant deck tech is inspired by Salubrious Snail's published deckbuilding framework. Kang's inclusion figures come from his EDHREC commander page; card text is from Scryfall. Neither Salubrious Snail nor EDHREC authored or endorsed it.*

Live page: https://drwu-htmls.vercel.app/kang-temporal-tyrant-deck-tech

---

## The one trigger that matters

Kang connives on attack (draw a card, then discard a card), and whenever you draw your **second card each turn** each opponent loses 1 and you gain 1. Read the second ability closely: it says *each turn*, which counts every turn in the game, your opponents' turns included. Your first draw is the free one from your draw step, or on someone else's turn the first card you happen to draw; the second is the one you manufacture. A connive draws a card as it resolves, then discards one, so any connive on a turn where you already drew once flips straight into your second draw. The build question is: how many ways can you reliably draw a second card, and on how many of the four turns in a rotation.

## The turn-cycle math

Here is the ceiling most Kang primers skip. In a four-player game there are four turns in every rotation. Build one second draw into each of them and Kang drains three opponents four separate times before your next main phase. Instant-speed draw is what reaches the opponents' turns, because a sorcery-speed cantrip can only fire on your own.

| Turn | Second-draw source | Result |
|---|---|---|
| Yours | Draw step, then a connive or cantrip | drain 1 |
| Opp A | Frantic Search or Visions of Villainy (instant) | drain 1 |
| Opp B | A second instant, or Ledger Shredder on the table's 2nd spell | drain 1 |
| Opp C | A held-up instant draw | drain 1 |
| **One rotation** | before combat or tokens | **4 drains** |

Stack Gixian Puppeteer under that and every drain is worth three, Kang's one life plus Puppeteer's two, so a four-trigger rotation costs each opponent twelve life and gains you twelve. Stack Construct a Cosmic Cube under it and the same four triggers push four plan counters and four menace tokens a lap, so the seven-counter clock closes in under two rotations. Instant-speed draw carries this deck, because it turns one payoff into four.

## Reading the payoffs

- **Leader, Super-Genius (70%).** The engine: its replacement effect adds one card before each connive, so a single connive becomes a draw plus the connive, plus a free combat connive every turn. It boosts each connive, it does not double it.
- **Construct a Cosmic Cube (65%).** Every second draw makes a menacing Villain token and adds a plan counter. At the seventh, sacrifice it and control an opponent *during their next turn* (not an extra turn of your own).
- **Gixian Puppeteer (47%).** Adds 2 to the drain (not double): every second draw costs an extra 2 life, so Kang plus Puppeteer is 3 per trigger, twelve across a rotation.
- **M.O.D.O.K., Evil Intellect (by function).** Whenever you draw your second card each turn, a target opponent sacrifices a nontoken creature *of their choice*: edict removal, four sacrifices a lap, though the opponent picks which creature dies.
- **Kid Loki (45%).** Every second draw puts a counter on him, and any creature you put a counter on *this turn* has hexproof. On his own he only protects himself, and only on turns he grows.

## The other half of connive, the discard

Every connive draws a card and then discards one, so a deck full of connives is quietly a discard deck too, a second engine most Kang primers walk past. The pile you bin each turn is a resource:

- **Moonstone, Harsh Mistress (43%).** Whenever you discard a card you may exile it from your graveyard and play it until the end of your next turn, so the land or spell a connive threw away stays playable for a while. You still pay its cost and obey its timing, so this is extended card access rather than free recursion. Discarding becomes a filter.
- **Archfiend of Ifnir (32%).** Whenever you discard a card, each creature your opponents control gets a -1/-1 counter. Kang connives over and over, so Archfiend turns the discard half into a slow board wipe that also cycles for value.
- **M.O.D.O.K. (40%).** The other M.O.D.O.K.: a flying lifelinker that pays 3 life to connive on your turn and gives every opposing creature -1/-1. A discard-and-connive engine on a body that feeds Moonstone and Archfiend.

This is why the deckbuilding test below is wider than a pure draw count. Moonstone can do more than a fourth generic second-draw payoff, because she recovers what the engine throws away, and Archfiend converts the same discards into removal.

## Off-turn enablers, the cards that make the math work

- **Frantic Search (47%, instant).** Draws two and untaps up to three lands; it pays three mana first and refunds it, so it is a mana-neutral second draw on an opponent's turn rather than a free one. The single best off-turn enabler.
- **Visions of Villainy (49%, instant).** Draws two, one less with a Villain out, legal on anyone's turn.
- **Ledger Shredder (42%).** Connives whenever any player casts their second spell in a turn, their turns included.
- **Baron Strucker, HYDRA Overlord (61%).** The most-run card the old primer never mentioned. Villain spells cost {1} less, and once each turn a Villain entering may connive.
- **Madame Masque (46%).** Connives on enter, then makes a Villain token every second draw. Enabler and payoff in one.

## Priority adds

Kang is a box alt with no upgrade list of his own, so the add list reads EDHREC as a signal and runs it through the second-draw test, rather than copying the popular pile wholesale (percentages read 2026-07-13). One caution up front: this is a 77-deck sample on a June 2026 box, so a few copied lists swing the numbers. Read these as an early signal rather than proof:

**Engine and payoffs:** Leader, Super-Genius (70%), Construct a Cosmic Cube (65%), Baron Strucker (61%), Gixian Puppeteer (47%), Madame Masque (46%), Psychosis Crawler (45%), Teferi's Ageless Insight (45%), M.O.D.O.K., Evil Intellect (by function).

**Enablers and draw:** Visions of Villainy (49%, instant), Frantic Search (47%, instant), Ledger Shredder (42%, any turn), Black Market Connections (Dimir staple), Alandra Sky Dreamer (shares Kang's trigger, makes Drakes).

**Two lanes, kept apart.** The adds serve two goals. One makes Kang *feel like Kang* (Villain flavor: Baron Strucker, Madame Masque, the two M.O.D.O.K.s, Villain-token makers). The other simply *raises win percentage* (efficient Dimir: Frantic Search, Visions, Psychosis Crawler, Teferi, Black Market Connections, Counterspell, Arcane Denial, spot removal, protection). Alandra, the Cube, and Gixian Puppeteer sit in both. When you cut, keep the win-percentage lane full and treat pure-flavor cards as the flexible slots.

## Inclusion is not synergy

EDHREC prints two numbers per card. Inclusion is the share of Kang decks running it. Synergy is how much more Kang runs it than the average blue-black deck that legally could. High inclusion plus high synergy is a signature card; high inclusion plus low synergy is a staple that is good in any deck of these colors. Reading only inclusion is how a primer ends up telling you to copy the popular pile. Synergy shows the deck's real identity.

| Card | Inclusion | Synergy | Read |
|---|---|---|---|
| Leader, Super-Genius | 70% | +67% | signature |
| Construct a Cosmic Cube | 65% | +64% | signature |
| Baron Strucker, HYDRA Overlord | 61% | +58% | signature |
| Visions of Villainy | 49% | +48% | signature |
| Gixian Puppeteer | 47% | +46% | signature |
| Moonstone, Harsh Mistress | 43% | +42% | signature |
| Archfiend of Ifnir | 32% | +31% | signature |
| Frantic Search | 47% | +27% | staple that fits |
| Arcane Denial | 43% | +17% | staple |
| Counterspell | 52% | -4% | pure staple |

Leader and the Cube earn high synergy because they exist to cash Kang's trigger. Counterspell has the highest inclusion of the interaction and a negative synergy, which just means every blue deck plays it. Follow the synergy column for the cards that make this deck itself, and treat the staples as the rent for being blue-black.

## Interaction

A slow win needs cheap answers: Counterspell (52%), Arcane Denial (43%), the blue-black removal the deck can run (Go for the Throat, Reality Shift, Withering Torment, Lethal Scheme at 42%), a board wipe or two like Toxic Deluge, and enough counters to protect the Cosmic Cube as it counts up. Most of your interaction wants to be instant, the same shape as your enablers: hold mana on other turns, and spend it to answer a threat or to fire a draw for a Kang drain when nothing needs answering.

## Ten named swaps from the stock Doom Prevails list

The exact first pass from the official Doom Prevails ninety-nine. The cuts are the red-identity cards (verified on Scryfall), illegal the moment Kang takes over; the adds are blue-black pieces not in the stock list.

| Cut (red-identity) | Add (blue-black) |
|---|---|
| Chaos Warp (R) | Reality Shift |
| Blasphemous Act (R) | Construct a Cosmic Cube |
| Vandalblast (R) | Ledger Shredder |
| Loki's Scepter (R) | Leader, Super-Genius |
| Red Ghost, Intangible Genius (U/R) | Gixian Puppeteer |
| Terminate (B/R) | Go for the Throat |
| Bedevil (B/R) | M.O.D.O.K., Evil Intellect |
| Living Laser (R) | Psychosis Crawler |
| Killmonger, Ruthless Usurper (R) | Teferi's Ageless Insight |
| Batroc the Leaper (R) | Alandra, Sky Dreamer |

This table is only ten of the forced cuts. A card-fact gate that resolves every card in the official list against Scryfall counts **21 red-identity nonland cards** in the 99, so eleven more leave beyond the ten above: **Abomination, World Ravager**; **Lady Loki, Agent of Chaos**; **Puppet Master, String Puller**; **Stilt-Man, Towering Terror**; **Titania, Proud Pummeler**; **Loki, the Deceiver** (Grixis); **The Squadron Sinister**; **Madame Hydra**; **Typhoid Mary, Fractured**; **Superior Foes of Spider-Man**; **Talisman of Indulgence** (swap the rock for the black Talisman of Dominance). **Doctor Doom, King of Latveria** also leaves, vacating the command zone for Kang. Fill from the add pool (Visions of Villainy, Frantic Search, Ledger Shredder, Madame Masque, Psychosis Crawler, Teferi), then the flavor calls like Molecule Man and Damocles Base last.

**The mana base loses 15 red sources.** Ten stock lands leave by two different rules. Eight duals carry a red mana symbol in their text: Sulfur Falls, Dragonskull Summit, Canyon Slough, Smoldering Marsh, Foreboding Ruins, Frostboil Snarl, Luxury Suite, Crumbling Necropolis. Two more, Coastal Peak and Scorched Geyser, print no red pip but have the Mountain land type, which adds red to their color identity under Commander rule 903.5d. Add the 5 Mountains for 15 open slots. Keep the blue-black and colorless lands already in the deck (Command Tower, Drowned Catacomb, Fetid Pools, Sunken Hollow, Choked Estuary, Exotic Orchard, Scavenger Grounds) and refill with Swamps and Islands weighted black, plus any UB duals you own (Watery Grave, Underground River). That leaves ~37 lands, black-heavy. All told the rebuilt 99 needs about 37 new cards: 21 red nonland cards, 15 red mana sources, and the one slot Kang vacates when he moves from the 99 into the command zone. That is roughly a third of the deck, so this is a genuine rebuild rather than a light retheme.

## How Kang actually wins, and where he does not

Be honest about the power level first. Kang's own trigger is small, one life per opponent, three with Gixian Puppeteer, so the commander cannot close a game by himself and works as a value engine with pressure. The win comes from finishers stacked on the draws. A fast combo, a resilient storm turn, or repeated removal on your payoffs can beat you before the drip adds up, and losing Psychosis Crawler or the Cube to a wrath resets the clock. Out of the box he sits **below the strongest precon commanders** and rewards tuning more than most. The ceiling is real, the average first build is not. Three lines end the game:

- **The drain kill.** Psychosis Crawler pings each opponent on every card you draw, and Teferi's Ageless Insight replaces every draw except the first one in each of your draw steps with two cards. On your own turn that doubles your cantrips. On an opponent's turn you have no draw step, so even your first draw becomes two, which means a single cheap cantrip is your first and second card at once and triggers Kang with no other draw effect. Teferi raises your draw count, which fuels the Crawler and reaches the second draw faster. The trigger count stays capped at one a turn, since Kang, Gixian Puppeteer, and the Cube each fire once on the second card of the turn, no matter how many follow. Add Gixian Puppeteer and the table's life falls in chunks you can count several turns out.
- **The Cube clock.** Every second draw drops a plan counter, and the seven come from table turns rather than your own upkeeps: Kang attacks for one, then Visions of Villainy, Frantic Search, and a held-up instant each add a counter across the three opponents' turns, so the Cube reaches seven in about two laps. Sacrifice it and control an opponent during their next turn. You control the player, not their permanents, so you make their decisions: attack a rival, tap out their mana, point their removal at their own board, decline to block. Handing you a permanent needs a separate control-transfer effect, the Cube alone does not do that. The menace tokens keep Kang swinging as the counters climb.
- **The flyer beatdown.** Alandra, Sky Dreamer shares Kang's exact trigger and makes a 2/2 flying Drake on every second card each turn. In a deck built to hit that trigger four turns a lap, she assembles an evasive board that closes in the air, a creature finish the two spell lines cannot give you. Her second ability is the burst: whenever you draw your fifth card in a turn, Alandra and every Drake get +X/+X until end of turn, where X is your hand size, which turns a wide board of small flyers into lethal in one attack. She is the clearest single card the old build was missing.

Build all three thinly rather than one thickly, because removal will take one and you want a second still standing.

## A sample opening

- **Turn 1.** Land, then a one-drop or a mana rock. Develop.
- **Turn 2.** A two-mana rock or cheap connive source, so turn three has three or four mana. Hold up a counter if you drew one.
- **Turn 3.** Construct a Cosmic Cube (three mana) so it starts counting, or Baron Strucker. These plays assume a normal land drop plus one rock, no fast mana.
- **Turn 4.** Kang (four mana), or Leader, Super-Genius. Keep two mana up on opponents' turns from here.
- **Turn 5.** Start the off-turn loop. Count triggers honestly: one Frantic Search plus one more off-turn draw is two Cube counters this rotation, so seven is several laps away instead of turn five.

**Mulligan priorities.** Keep two or three lands, at least one cheap enabler or rock, and ideally one instant-speed draw so the trigger stays available on other turns. Mulligan all-land hands, all-payoff hands with nothing to draw the second card, and one-landers even under a perfect curve, since the deck wants mana up every turn. A good keep does not need Kang in it; the enablers and payoffs win, and the commander is support.

Three mistakes to avoid: emptying your hand on your own turns and leaving nothing for the opponents' turns; attacking Kang into a board that can kill or chump him just to connive; spending an instant-speed draw on your own turn out of habit when holding it for an opponent's turn would drain the table.

## What the 99 cards are doing

A deck tech should describe the shape of the whole list. The commander is the easy part, and the ninety-nine behind it are the real work. The ratios matter more than the exact cards, and the curve runs low, mostly one to three, which is what lets you develop and still hold up an instant on someone else's turn.

| Slot | Count | What it buys |
|---|---|---|
| Mana base | 37 | A curve of blue-black lands, a few that also filter or draw |
| Trigger enablers | 15 | Connive sources plus instant-speed draw, several firing on opponents' turns |
| Second-draw payoffs | 10 | Puppeteer, Cube, Kid Loki, M.O.D.O.K. Evil Intellect, Madame Masque (Kang is the commander, not one of the 99) |
| Discard and recovery | 4 | Moonstone, Archfiend of Ifnir, the connive-activator M.O.D.O.K. |
| Interaction | 10 | Mostly instant, counters and spot removal plus a wipe or two |
| Protection | 3 | Keep Kang and the Cube alive through the seven-count |
| Ramp and rocks | 6 | Two-drop rocks so you hold up mana every turn |
| Draw and refill | 12 | Overlaps the enablers, keeps the grind from stalling |

The counts overlap on purpose, since Madame Masque is enabler and payoff, and Frantic Search is mana-neutral after resolution (pay three, untap up to three lands), so it reads as draw first and only nets mana when three useful permanents untap. The point is the curve and the balance: enough cheap enablers that a second draw is available every turn, enough interaction to reach the late game, and a land count on the low side because the spells are cheap.

## Dead Draw Audit

Snail's method asks more than a card's headline job. It asks how often the card becomes useful (how many cards in the 99 feed its job) and whether it still earns its slot on a turn Kang is dead. Five fields, four verdicts: **core** (build around it), **supported** (earns its slot through the enabler package), **situational** (keep it lean), **cut** (fights the plan).

| Card | Primary job | Secondary | Support in the 99 | Value without Kang | Verdict |
|---|---|---|---|---|---|
| Construct a Cosmic Cube | Second-draw payoff, tokens + seven-counter clock | Menace bodies for defense | High, the ~15 enablers feed it | Good, triggers off any second draw | **core** |
| Leader, Super-Genius | Enabler, connive into draw-then-connive | Free combat connive each turn | High, every connive source | Good, the free connive fires without Kang | **core** |
| Psychosis Crawler | Payoff, drains on every draw | Body that scales with hand | Very high, the ~27-card draw suite | Full, drains in any draw deck | **core** |
| Baron Strucker | Enabler, Villain-entry connive + cost cut | Greases the Villain subtheme | Medium-high, the ~12 Villains | Good, cost cut and connive stand alone | **core** |
| Gixian Puppeteer | Payoff, adds 2 to the drain (3 with Kang, not double) | Recurs a small creature on death | High, the same ~15 enablers | Medium, needs a second draw | **supported** |
| Teferi's Ageless Insight | Multiplier, non-first draws become two | Fuels Crawler and off-turn triggers | High, the draw suite | Good, but adds no extra Kang triggers | **supported** |
| Kid Loki | Payoff, grows himself on the second draw | Hexproof, only for creatures countered that turn | Low for protection, few counter sources | Low, shields only himself | **situational** |
| Damocles Base, Sword of Kang | Conditional enabler, villainous choice can hand you two cards | Flying deathtouch body, crewed by Villain tokens | Low but real, when it connects and the foe picks the draw | Medium, an evasive blocker | **situational** |

A strong card still gets an honest verdict. Kid Loki looks like a payoff and protector, but his protection has almost no support and his solo floor is low, so situational. Damocles Base reads situational once you read its text: its villainous choice can hand you two cards and reach the trigger, more than a flavor pick even though the opponent controls the timing.

Five columns are the floor; four deeper reads settle close calls. **Support strength** beats count: the same 15 enablers feed Kid Loki's counter strongly and his hexproof barely, so he stays situational. **Independent routes** raise a floor: Psychosis Crawler earns value through two unrelated systems (drain on every draw + a body that scales with your hand), so it survives a bad draw; Kid Loki has only one and does not. A **game-state** read keeps verdicts honest (the Crawler still taxes the table when you are behind; the Cube is a pressure/finish card), and the ~10 interaction slots are the **flexibility floor** you never cut for a sixteenth enabler. Recount every field from the final 99 after your swaps, since adding a payoff can lift an enabler and cutting draw can sink a retained card. One **declared flavor exception** is allowed: keep Damocles Base for its "Sword of Kang" identity if you say so out loud, a middling attacker kept at a small consistency cost, never dressed up as an engine piece.

## Turning the Doom precon into a Kang deck

The concrete part, and it starts with color. The Doom Prevails precon is **Grixis**, because its face commander, Doctor Doom, King of Latveria, is blue-black-red. Kang is **blue-black**. The moment you move Kang to the command zone, every red card and every red pip becomes illegal by color identity, so those are your first and easiest cuts, no judgment call required. Pull the red removal, the red beaters, and anything with a red hybrid or activated cost, and you have opened ten or more slots. Fill them from the skeleton above, weighted toward instant-speed draw. What stays is the blue-black spine: the connive sources, the Villain support the stock deck already runs (Baron Strucker, Moonstone), the discard payoffs, and the draw. Madame Masque is not in the stock list, so she comes in as an addition rather than a retained card.

## The real rule: five jobs

Before a nonland card makes the deck, ask which of five jobs it performs: draw the second card, cash the second-draw trigger, turn a discard into value, protect Kang and the Cube or answer a threat, or close the game. The best cards do two. The old shorthand, count your second draw and cut anything that does not touch it, sounds decisive and misses half the deck on contact. It treats interaction and recovery as suspects, and a Kang deck that cannot answer a threat or replay what it discards pays for that false purity. Frantic Search draws the second card, so it belongs. Moonstone turns a discard into value, so it belongs. Counterspell answers a threat, so it belongs. A card that does none of the five is the one fighting the plan.

## Snail Tip

- His [dead-draw audit](https://drwu-htmls.vercel.app/salubrioussnail-points/#v-reducing-dead-draws-through-synergy-in-deckbuilding) asks two questions of every card, what does it accomplish and what does it synergize with. The instant-speed enablers pass because they work on all four turns.
- His [EDHREC Effect](https://drwu-htmls.vercel.app/salubrioussnail-points/#v-how-edhrec-data-aggregation-warps-commander-deckbuilding) read is why the inclusion column is a signal rather than a shopping list. Favor the synergy column and the cards that still contribute on a turn Kang is dead.
- His [Rhystic Study](https://drwu-htmls.vercel.app/salubrioussnail-points/#v-why-rhystic-study-should-be-banned-in-commander) video argues that card is actively bad for the table. It is not in the stock Doom Prevails list, so treat it as a popular pickup to skip rather than a card to cut.

We worked his dead-draw audit onto this whole box in full: [the Doom dead-draws page](https://drwu-htmls.vercel.app/salubrioussnail-doom-deaddraws), or see his [EDHREC method](https://drwu-htmls.vercel.app/salubrioussnail-points/#v-how-to-use-edhrec-to-improve-commander-decks) breakdown.

## Snail's Kang changes

The audit run on the actual stock deck, since a method is only worth as much as the swaps it produces. All three appear in the published Doom Prevails ninety-nine, and the audit gives them three different verdicts rather than one reflex cut:

- **Superior Foes of Spider-Man, cut.** A red card, illegal the moment Kang takes the command zone, and it never touches the second draw. The easiest cut in the deck.
- **Molecule Man, situational.** It gives every nonland card in hand miracle zero, so your first draw each turn can be cast free, which saves the mana that arms your second draw of the turn. That is real support, so a judgment call, held back by the six-mana body and empty post-wipe turns.
- **Damocles Base, Sword of Kang, situational.** I called this a flat cut earlier and that was wrong. Its combat-damage villainous choice lets the defender hand you two cards, reaching the trigger on the turns they take that option. Flying, deathtouch, crewable by Villain tokens; the catch is the opponent's choice and the need to connect.

The replacements come straight off the same audit: **Leader, Super-Genius** (a card draw before each connive), **Construct a Cosmic Cube** (token engine and clock), and **Visions of Villainy** (instant draw-two on any turn). All three score among Kang's highest EDHREC synergy and none appear in the stock list, which is the gap the audit is built to find.

## The full ninety-nine, one legal build

A complete legal Kang list, commander plus 99, every card verified blue-black or colorless on Scryfall by the card-fact gate (99 cards, machine-checked for legality and singleton). One tuned build among many.

**Commander:** Kang, Temporal Tyrant

- **Second-draw enablers: connive + instant-speed draw (14):** Leader, Super-Genius, Baron Strucker, HYDRA Overlord, Madame Masque, Ledger Shredder, Frantic Search, Visions of Villainy, Chart a Course, Chemister's Insight, Thirst for Discovery, Fact or Fiction, Forbidden Alchemy, Careful Study, Thirst for Knowledge, Merfolk Looter
- **Second-draw payoffs (8):** Construct a Cosmic Cube, Gixian Puppeteer, Kid Loki, Alandra, Sky Dreamer, M.O.D.O.K., Evil Intellect, Psychosis Crawler, Teferi's Ageless Insight, Moonstone, Harsh Mistress
- **Discard / graveyard value (3):** Archfiend of Ifnir, Bone Miser, Containment Construct
- **Draw engines (10):** Skullclamp, Black Market Connections, Night's Whisper, Syphon Mind, Sign in Blood, Read the Bones, Phyrexian Arena, Mystic Remora, Windfall, Brainstorm
- **Interaction (14):** Crux of Fate, Counterspell, Arcane Denial, Swan Song, Reality Shift, Go for the Throat, Withering Torment, Lethal Scheme, Bloodchief's Thirst, Feed the Swarm, Toxic Deluge, Damnation, Cyclonic Rift, Kindred Dominance
- **Protection (3):** Swiftfoot Boots, Lightning Greaves, Propaganda
- **Card-advantage creatures / value (4):** Baleful Strix, Sea Gate Oracle, Spark Double, Chameleon, Master of Disguise
- **Ramp / rocks (6):** Sol Ring, Arcane Signet, Dimir Signet, Talisman of Dominance, Mind Stone, Fellwar Stone
- **Lands (37):** Command Tower, Path of Ancestry, Exotic Orchard, Drowned Catacomb, Choked Estuary, Fetid Pools, Sunken Hollow, Watery Grave, Underground River, Darkslick Shores, Dismal Backwater, Temple of Deceit, Morphic Pool, Dimir Aqueduct, Tainted Isle, River of Tears, Sunken Ruins, Reliquary Tower, Bojuka Bog, Scavenger Grounds, Terramorphic Expanse, Island x8, Swamp x8

## Dedicated Kang, or Kang in the Doom box

EDHREC records about 77 Kang decks (read 2026-07-13), the niche pick of a box that only released in June 2026. A number that small this early cannot prove the community thinks Kang belongs outside Doom. Wizards put Kang in the official Doom Prevails list on purpose, and Doom's own discard-and-connive package feeds Kang's trigger, so he has a real home there. The honest read comes down to ratios between the two builds. Lean the list toward instant-speed draw and blue interaction and you get the dedicated second-draw control deck above. Keep Doom at the helm and Kang is still one of the better draw payoffs in the 99. Pick by the game you want.

---

*Card text and color identity via Scryfall (Marvel Super Heroes Commander, pulled 2026-07-13): Kang (color identity blue-black, trigger "your second card each turn"), Construct a Cosmic Cube (control an opponent during their next turn), Kid Loki (hexproof only for creatures you counter that turn), Baron Strucker, M.O.D.O.K. Evil Intellect, the connive-activator M.O.D.O.K. (gives opposing creatures -1/-1), Gixian Puppeteer, Leader Super-Genius, Madame Masque, Visions of Villainy (instant), Frantic Search (instant), Ledger Shredder, Psychosis Crawler, Teferi's Ageless Insight (doubles draws except the first in each draw step, raising draw count without adding second-draw triggers), Moonstone Harsh Mistress, Archfiend of Ifnir, Superior Foes of Spider-Man (red), Molecule Man (colorless miracle), Damocles Base Sword of Kang (black Vehicle, villainous choice can give you two cards), Alandra Sky Dreamer (blue, Drake on your second card each turn), Black Market Connections (black, repeatable draw). Doom Prevails stock-deck membership (Superior Foes, Molecule Man, Damocles Base, Kang all present; Leader, Cosmic Cube, Visions of Villainy absent) per the official Wizards Marvel Super Heroes Commander decklists. Inclusion and synergy figures from the EDHREC Kang commander page (77 decks, rank #3,354, read 2026-07-13). Color-identity note: the Doom Prevails precon is Grixis via Doctor Doom, King of Latveria (blue-black-red), and Kang is blue-black, so red cards fall out of a Kang build. The two-question audit is from Salubrious Snail's dead-draw video (YouTube `zAtfawtYEw4`). Related: [EDHREC Marvel read](https://drwu-htmls.vercel.app/salubrioussnail-marvel-edhrec), [Doom dead-draws audit](https://drwu-htmls.vercel.app/salubrioussnail-doom-deaddraws), [Loki deck tech](https://drwu-htmls.vercel.app/loki-deceiver-deck-tech), [Doom deck tech](https://drwu-htmls.vercel.app/doom-prevails-deck-tech).*
