# Captain America, Team Leader: Every Hero Gets a Counter

A fully built-out deck tech for the **Jeskai (white, blue, red)** Avengers commander: a complete grounded 100-card list, the curve, the packages, and how to pilot the enters-and-counters engine.

*Written in Salubrious Snail's voice. Card wording and interactions are checked against Scryfall; deck counts, rank, inclusion, synergy, and the card pool for the list below are from Captain America's EDHREC commander page, captured 2026-07-13. Not authored or endorsed by Salubrious Snail or EDHREC.*

Live page: https://drwu-htmls.vercel.app/captain-america-team-leader-deck-tech

---

Captain America, Team Leader reads: whenever another Hero you control **enters**, it gains vigilance and haste until end of turn, and you put a +1/+1 counter on it and one on Captain America. Every Hero that enters is two counters and an attacker that can swing the same turn. The deck plays many Heroes, stacks the counters, and turns that board into damage through payoffs that reward a modified creature.

## At a glance

- **Colors:** Jeskai, white, blue, and red.
- **Hero target:** about 27 Heroes, most at two to four mana.
- **Power level:** mid-power casual, a precon pointed toward focus rather than a cEDH list.
- **Primary win condition:** a wide modified board that gains flying from Iron Man or double strike from War Machine.
- **Ideal Captain America turn:** commander down by turn three, then two Heroes most turns after, each worth two counters.

## One turn, start to finish

Turn four, Captain America down. Cast a two-mana Hero: it enters, gains vigilance and haste, takes a +1/+1 counter, and Cap takes one too. Director Nick Fury has Hero spells costing one less, so you cast a second Hero the same turn for two more counters. If Kindred Discovery is out and set to Hero, each entry drew a card. Attack with both new Heroes and Cap; Iron Man gives your modified attackers flying. Two cards spent, four counters made. That loop is the core of the deck.

## The full 100, by package

One complete build, drawn from Captain America's EDHREC card pool captured 2026-07-13. It is a coherent list rather than the only correct one, and any slot can flex. It starts from the Avengers Assemble precon, and it rebuilds the mana base and several other slots beyond the headline swaps below, so read it as a finished, optimized list rather than the precon plus exactly ten cards. It is a mid-budget build; the fetchlands and Cavern of Souls are the higher-cost slots and swap down to taplands with little loss. Each card is counted once, under its main role, even though several pull double duty (Nick Fury is a Hero and a cost reducer, Iron Man is a Hero and a payoff).

**Commander (1):** Captain America, Team Leader

**The enters engine, 27 Heroes plus a payoff (28):** Director Nick Fury (3) · Black Widow, Agile Avenger (3) · Ant-Man, Elusive Avenger (3) · Jarvis, Earth's Mightiest Butler (3) · Quicksilver, Speedster (5) · Silver Sable, Mercenary Leader (3) · Hawkeye, Trick Shot (4) · Spider-Woman, Stunning Savior (2) · The Wasp, Winsome Avenger (2) · Falcon and Redwing (3) · Agent Phil Coulson (2) · Shang-Chi and the Ten Rings (3) · Scarlet Witch, Chaotic Avenger (4) · Iron Man, Armored Avenger (4) · Photon, Mighty Marvel (4) · Firebird, Blazing Ranger (3) · Captain America, Living Legend (3) · Captain America, Super-Soldier (3) · Vision, Synthezoid Avenger (4) · Metallic Mimic (2) · Bastion Protector (3) · Roaming Throne (4) · Winter Soldier, Reborn Avenger (5) · War Machine, Avenging Arsenal (5) · Captain Marvel, Apex Avenger (7) · Thor, Asgard's Avenger (4) · She-Hulk, Wallbreaker (6) · Professor Hulk (6)

**Counter & go-wide payoffs (3):** Champions from Beyond (2) · Door of Destinies (4) · The Ozolith (1)

**Ramp & cost reduction (9):** Sol Ring (1) · Arcane Signet (2) · Talisman of Progress (2) · Talisman of Conviction (2) · Talisman of Creativity (2) · Fellwar Stone (2) · Mind Stone (2) · Herald's Horn (3) · Urza's Incubator (3)

**Card advantage (7):** Kindred Discovery (5) · Reconnaissance Mission (4) · Avengers Assemble! (5) · Origin of the Avengers (2) · Tome of Legends (2) · Chronicle of Victory (6) · Folk Hero (2)

**Spot removal (6):** Swords to Plowshares (1) · Path to Exile (1) · Generous Gift (3) · Rip Apart (2) · Destroy Evil (2) · Make Your Move (3)

**Board resets & mass removal (5):** Raise the Palisade (5) · Damning Verdict (5) · Wave Goodbye (4) · Austere Command (6) · Dismantling Wave (3)

**Protection & countermagic (5):** Flawless Maneuver (3) · Akroma's Will (4) · Arcane Denial (2) · An Offer You Can't Refuse (1) · Heroic Sacrifice (2)

**Manabase (36):** Avengers Tower · Command Tower · Plaza of Heroes · Path of Ancestry · Cavern of Souls · Secluded Courtyard · Unclaimed Territory · Hallowed Fountain · Sacred Foundry · Steam Vents · Prairie Stream · Irrigated Farmland · Mystic Monastery · Glacial Fortress · Clifftop Retreat · Sulfur Falls · Port Town · Furycalm Snarl · Frostboil Snarl · Raugrin Triome · Flooded Strand · Arid Mesa · Scalding Tarn · Battlefield Forge · Adarkar Wastes · Shivan Reef · Spectator Seating · Reliquary Tower · Rogue's Passage · 3× Plains · 2× Island · 2× Mountain

**1 + 28 + 3 + 9 + 7 + 6 + 5 + 5 + 36 = 100.** The number after a card is its mana value; lands are not numbered.

## Dead-draw audit

Snail's harder question comes after the jobs: a card is only as good as how often it can do its job. A payoff whose support pieces show up too rarely turns into a dead draw. Each questioned card gets five fields and a verdict of core, supported, situational, or cut.

| Card | Primary job | Secondary synergy | Support count | Use without Cap | Verdict |
|---|---|---|---|---|---|
| Kindred Discovery | Draw on each Hero that enters or attacks | Pays off tokens and recursion | 27 Heroes plus every token and reanimated Hero | Independent of Cap | **Core** |
| Iron Man, Armored Avenger | Modified attackers fly; each draw adds a counter | Turns card draw into counters | 27 Heroes, and every draw for the counter half | Draw-to-counter works; flying wants a modified board | **Supported** |
| War Machine, Avenging Arsenal | Modified attackers gain double strike | Closes a wide counter board | Needs modified attackers, fed by Cap and entries | Weak without another counter source | **Supported** |
| Champions from Beyond | Makes X Hero tokens, scry-and-draw at four attackers | Each token triggers Cap | A wide board, plus Cap for the per-token counter | Still makes tokens and draws; loses the per-token counter | **Supported** |
| Door of Destinies | Anthem that grows only when you cast a Hero | Snowballs a wide Hero board | Direct Hero casts; tokens and reanimation do not grow it but still get its bonus | Independent of Cap | **Situational** (casting-only payoff) |
| The Ozolith | Banks counters when a creature leaves the battlefield | Insurance against a wipe | Any counters on board | Works with any counter source | **Supported** |
| Shared Animosity (power branch) | On-attack pump per attacking Hero | Go-wide finisher | About 27 attacking Hero bodies | Independent of Cap | **Core** in the aggressive branch |
| Cathars' Crusade (power branch) | A counter on all creatures per creature entry | Counts tokens and reanimation | Every creature entry, tokens and recursion included | Independent of Cap | **Core** in the aggressive branch |
| Teferi's Protection (power branch) | Protects you and phases out your board | Saves a developed board from a wipe | Any board worth protecting | Independent of Cap | **Situational**, essential in the moment |

Door of Destinies is the close call: it looks like a counters payoff, so it reads as core at a glance. It gains a charge counter only on a Hero you cast, so the tokens and reanimated Heroes this build makes do not grow it, and they still get its +1/+1 bonus. Its real charge-counter support is smaller than the raw Hero count suggests, which is the difference between a card that backs the whole engine and one that backs only the casting half.

Reading the audit uses four more of Snail's tests. **Strength over count:** Kindred Discovery reaches its payoff through many dependable routes (every Hero, token, and reanimation). Door of Destinies has one route, direct casting, which is why it drops to situational. **By stage:** Kindred Discovery and Champions from Beyond pull weight from development onward, War Machine and She-Hulk are late finishers, and The Ozolith is recovery insurance, so a card that is quiet early keeps its slot when the deck reliably reaches its stage. **From the finished list:** every support count above is read off this 100 after the swaps rather than off EDHREC averages. **Flexibility floor:** tuning toward Heroes did not strip the answers, since the build still runs six spot removals, five mass-removal spells (four creature resets plus Dismantling Wave for artifacts and enchantments), five protection and counter cards, and seven card-draw effects, so it can respond to a changing board rather than only chain one big turn.

**Three ways a card goes dead.** A Hero with no board behind it (She-Hulk drawn into an empty board is a slow body; she wants a wide team down first). Protection you cannot rebuild behind (Flawless Maneuver held with one creature and nothing to follow saves almost nothing). A strong card that ignores the plan (a five-mana bomb that neither adds a Hero, protects the board, nor turns counters into damage fails the five-job test even with a high ceiling).

## The mana curve

Counts cover the sixty-four nonland cards, the commander included.

| Mana value | Count |
|---|---:|
| 1 | 5 |
| 2 | 18 |
| 3 | 18 |
| 4 | 11 |
| 5 | 7 |
| 6+ | 5 |

Two and three carry the deck. That is where Nick Fury, Black Widow, Shang-Chi, and the cheap rocks live, and it is why a good keep can start playing Heroes by turn two.

## The signature engine: inclusion is not synergy

**Inclusion** is the share of Captain America decklists that include a card. **Synergy** is how much more this commander runs it than the average deck that legally could, shown as a percentage-point gap with a plus sign. High inclusion + high synergy is a signature card. High inclusion + low synergy is a format staple. EDHREC captured 2026-07-13:

| Card | Inclusion | Synergy | Job |
|---|---:|---:|---|
| Director Nick Fury | 93.2% | +88.8% | Hero spells cost 1 less; attack digs 4 cards for a Hero |
| Avengers Tower | 92.3% | +86.4% | Hero-fixing land; for four mana and a tap, looks at three and keeps a Hero |
| Iron Man, Armored Avenger | 90.3% | +85.1% | Draw puts a counter; modified attackers fly |
| War Machine, Avenging Arsenal | 88.5% | +83.6% | Modified attackers gain double strike |
| Black Widow, Agile Avenger | 87.8% | +82.1% | Cheap menace Hero; punishes an opponent's extra draw |
| She-Hulk, Wallbreaker | 86.0% | +81.4% | Team trample; blocked Heroes gain counters |
| Winter Soldier, Reborn Avenger | 85.9% | +81.2% | Attack returns a creature within his power; a Hero re-enters with an extra counter |
| Kindred Discovery | 85.8% | +80.7% | Choose Hero: draw on every Hero that enters or attacks |
| Raise the Palisade | 85.7% | +82.1% | Bounce non-Hero creatures; strongly favors your Hero-heavy board |
| Swords to Plowshares | 90.5% | +22.8% | *Staple*: high inclusion, low synergy |
| Arcane Denial | 68.7% | +52.1% | *Staple*: clean counter that replaces itself |

Swords at 90.5% inclusion with +22.8% synergy is a clear example of the difference.

## What EDHREC can and cannot tell you

These percentages are a snapshot of what other builders put in their lists. A high number means many decklists include the card, and it carries no claim about card quality, correct play, or copying a card during a game. Use inclusion to find cards worth trying and to spot the staples, then judge fit at your own table, because the number alone will not rank two cards or promise that one belongs in your build. Read the numbers as a starting map, then trust the five-job test over any single percentage.

## More than casting: tokens, blink, and reanimation

The trigger is written on **enters**. Players expect cast, and that swap is the point. Any Hero that arrives fires the counters, so casting is one route of several. A Hero token entering counts. A Hero returning from a blink counts. A Hero coming back from the graveyard counts. Winter Soldier, Reborn Avenger returns a creature within its power on attack; when that creature is a Hero it enters, triggers Cap, and Winter Soldier adds an extra counter. Kindred Discovery draws on the same entry. Direct casting is the backbone; token production and recursion are the secondary engines that make a smaller Hero pool fire the trigger again.

## Cashing the counters: the modified payoffs

A creature with a counter is **modified**, so your countered Heroes meet these rewards at once.

- **Iron Man, Armored Avenger** (90.3% / +85.1%). Every draw drops a counter; on attack, your other attacking modified creatures gain flying.
- **War Machine, Avenging Arsenal** (88.5% / +83.6%). On attack, your attacking modified creatures gain double strike.
- **She-Hulk, Wallbreaker** (86.0% / +81.4%). Heroes gain trample; a blocked Hero gains a counter per blocker.

Card draw feeds the loop: Iron Man counters on every draw, Shang-Chi and the Ten Rings grows on every draw and draws five plus gains five life at ten counters, and Professor Hulk draws for each point of combat damage it deals. Kindred Discovery draws and turns those on. One rules trap: Director Nick Fury, Avengers Tower, and Herald's Horn reveal a Hero into your hand, which does not count as drawing, so they do not add a counter through Iron Man or Shang-Chi.

## How the deck closes

A wide board is not the win on its own; one payoff turns it lethal. Attack with a countered team and War Machine gives double strike, Iron Man gives flying, or She-Hulk gives trample through the chump blocks. Any one turns a stalled board into a game-ending swing. Champions from Beyond adds a second gear: at eight or more attackers its Full Party mode pumps the team by four each. Hold up Flawless Maneuver or Akroma's Will so a blocker or an instant-speed removal spell does not stop the swing; both wear off at end of turn, so a next-turn sweeper needs countermagic or a card kept in hand. The power branch closes harder, with Shared Animosity paying per attacker and Cathars' Crusade snowballing the counters.

## Interaction, protection, and the board-wipe question

Three layers. Spot removal keeps the path clear (Swords to Plowshares, 90.5%). Cheap countermagic protects the engine and replaces itself (Arcane Denial). And Raise the Palisade is a sweeper you run yourself: it returns every creature that is not your chosen type to hand, so you pick Hero and every non-Hero returns to its owner. It is strongly asymmetric rather than total: an opponent's own Heroes stay, and your handful of non-Hero creatures bounce too. When an opponent resolves a wipe instead, be honest that it kills Captain America, Nick Fury, Winter Soldier, and the countered board. The recovery is not on the battlefield. It waits in your hand and the command zone: recast Captain America and rebuild with the cheap Heroes you held back, and Nick Fury or Winter Soldier help again once you recast or redraw them.

## The real rule: five jobs

Before a nonland card makes the deck, ask which of five jobs it covers: **add Heroes, speed them out, refill your hand, protect the board, or clear a path.** The best cards cover two of the five.

The old shorthand, "if it is not a Hero and does not pump, protect, or find Heroes, it is fighting the plan," fails on contact with a real hundred-card deck: it reads removal and ramp as suspects. Swords clears a path, Sol Ring and Nick Fury speed Heroes out, Kindred Discovery refills. A card that does none of the five is the one fighting the plan, and a card that does two of them is the one you cut last.

## Ten to cut, ten to add

The 100 above is an optimized build. It goes past the precon with more than ten changes, including a rebuilt mana base and a few other slots. Below are the headline swaps from the **Avengers Assemble** precon, a strong first upgrade package. The first three follow the Snail project: the deckbuilding principle is Salubrious Snail's, and the exact card exchanges come from the Gathering Games Avengers Assemble upgrade guide. The other seven are recommendations built for this list. Every cut is a real precon card; every add is legal in Captain America's Jeskai identity (Scryfall, 2026-07-13).

Three goals sort these upgrades. **Keep the theme:** Champions from Beyond, Roaming Throne, and The Ozolith deepen the Hero-and-counters plan. **Add consistency:** Urza's Incubator, the mana rocks, and the fetch-and-shock mana base find and cast Heroes on time, and Path to Exile plus Generous Gift keep interaction reliable. **Add power:** Damning Verdict and Wave Goodbye are one-sided resets, Flawless Maneuver and Akroma's Will add protection, and the power branch below raises the ceiling against stronger tables.

### Three applied Snail changes

Snail principle applied through the Gathering Games upgrades. All three use the deck's counters: two are one-sided sweepers, and one turns a wide board into Hero tokens and card draw.

| Cut (in the precon) | Add | Why the swap |
|---|---|---|
| Love on the Battlefield | Champions from Beyond | Love pays off only on exactly two attackers; Champions makes X 1/1 Hero tokens, each triggering Captain America as it enters, and pays you for attacking with four or more. |
| Avenge | Damning Verdict | Avenge destroys every creature, your own board included; Damning Verdict destroys only creatures with no counters, so your countered Heroes survive. |
| Gift of Immortality | Wave Goodbye | A slow one-creature aura becomes a bounce that returns every creature without a +1/+1 counter, sparing your Heroes and resetting the rest. |

*Cut-and-add list from the Gathering Games Avengers Assemble upgrade guide, in Salubrious Snail's voice; identities verified on Scryfall, 2026-07-13.*

### Seven more upgrades for this build

These seven are recommendations built for this list, outside the Snail guide.

| Cut (in the precon) | Add | Why the swap |
|---|---|---|
| Hulkbuster Armor | Roaming Throne | Hulkbuster pours equip mana into one attacker (Equip Hero costs three); the Throne makes Captain America's trigger happen an additional time for every future Hero. |
| Hero's Blade | The Ozolith | Auto-attaches to a legendary Hero as it enters, but still buffs one body; The Ozolith banks counters through a wipe. |
| Patriot, Shield Wielder | Flawless Maneuver | A tap-to-buff-one Hero trades for free protection across the team. |
| Speed, Young Avenger | Akroma's Will | Speed only makes one haste creature unblockable, narrow next to the board-wide payoffs; Akroma's Will is four-mana protection or a finisher. |
| Captain Mar-Vell, Space-Born | Urza's Incubator | Grants Heroes flash on other turns; Urza's Incubator trades that for cost reduction, often less than two off a cheap Hero. |
| Avengers Quinjet | Path to Exile | Cheats a Hero in or returns one from the graveyard, real engine value, but slow at five mana and crew three; Path is one-mana exile removal. |
| Rescue, Pepper Potts | Generous Gift | A flash flyer whose bounce can re-use a Hero's enter trigger, spared here for removal that answers any permanent. |

**Optional power branch.** For a more aggressive, less legible build, run three stronger cards in place of the Snail versions: Shared Animosity for Champions from Beyond, Cathars' Crusade for Damning Verdict, and Teferi's Protection for Wave Goodbye. That trades two one-sided sweepers and a token engine for a bigger snowball and a blowout protection spell, and it gives up the source-guide simplicity.

## Opening hand and three mistakes

A keepable hand: three or four mana sources with colors covered and at least one Hero castable by turn two or three. A strong keep is four mana sources including a blue or red one, an early rock or Nick Fury, and two cheap Heroes, plus a card-draw piece and a protection or removal spell for the one threat that stops the attack. A three-color deck wants all colors reachable by turn three, so a two-source hand needs a cheap rock and dependable fixing to keep. Ship hands with fewer than two sources, hands that cannot reach all colors, or hands with no Hero castable by turn three.

Three common mistakes:

1. **Playing it as cast-only.** Forgetting tokens, blink, and reanimation also enter, so you leave the cheapest repeat triggers out of the deck.
2. **Dumping into an open wipe.** Emptying your hand when a sweeper is likely, instead of holding a Hero or two and leaning on Raise the Palisade and the rebuild.
3. **Chasing off-plan power.** Running a strong non-Hero that does none of the five jobs, thinning the Hero density that makes Cap snowball.

## Cap or Nick Fury: the two faces

The Avengers Assemble box ships with two legal commanders, and Captain America is the default for good reason. Both are Jeskai, so the color identity and most of the 99 stay the same. Captain America, Team Leader turns every Hero entry into counters and haste, a go-wide board that closes through the modified payoffs. Director Nick Fury leads a grindier build: his cost reduction and attack-triggered Hero digs make a deck built around card advantage and a steady stream of Heroes rather than one explosive counter turn. Run Captain America for the aggressive plan this page describes; move Nick Fury to the command zone when you would rather grind through card advantage, and the deck shifts from a counters theme toward a Legends and value theme. The other Captain America cards in the set lead different decks; they cannot be the commander here.

## What the numbers say

*EDHREC data captured 2026-07-13.*

On the day this was written, EDHREC listed **2,456** Captain America decks at **rank 937**, and its top theme tags were +1/+1 counters (172) and Heroes (134). That build count shows broad adoption. It does not say the deck is strong, that the crowd is right, or that the commander is easy to learn. The counts and percentages move as the sample grows, so the figures here are stamped with their capture date, and a later read may differ. The deck reads as beginner-friendly because the decision tree is short: play a Hero, take the counters, attack, repeat. Whether it is the simplest deck in the box to play against is a claim this page does not make.

---

*Card text quoted from Scryfall (Marvel Super Heroes Commander). Deck counts, rank, inclusion, synergy, and the full card pool for the 100-card build from the EDHREC Captain America commander page, captured 2026-07-13. Related: [T'Challa deck tech](https://drwu-htmls.vercel.app/tchalla-black-panther-deck-tech), [Avengers short read](https://drwu-htmls.vercel.app/salubrioussnail-avengers-simpler), [EDHREC Marvel read](https://drwu-htmls.vercel.app/salubrioussnail-marvel-edhrec). Written in Salubrious Snail's voice; neither Salubrious Snail nor EDHREC authored or endorsed it.*
