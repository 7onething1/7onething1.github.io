# Ben vs Brandon · Marvel Commander Tracker

**BEN vs BRANDON · MARVEL COMMANDER**

A Marvel comic-book Magic: The Gathering Commander (EDH) life and damage tracker, built for **Ben**, **Brandon**, and **Lisa** for personal use. It replaces the old zombie-themed tracker and takes its cues from [commander-toolbox](https://drwu-htmls.vercel.app/commander-toolbox).

### Two or three players

A **2P / 3P** toggle sits at the top. Two players is Ben vs Brandon. Three players adds **Lisa**. The seats default to each player's real deck: **Ben = Bruce Banner, the Hulk**, **Brandon = Venom, Lethal Protector**, **Lisa = Atraxa, Praetors' Voice** (violet panel, four-winged Phyrexian badge). In three-player mode each player's panel shows a **separate commander-damage block for every opponent**, so you always track exactly who dealt what, and 21 from any single commander is still a knockout. Switching player count starts a fresh game but keeps everyone's names and commanders.

Live page: https://drwu-htmls.vercel.app/commander-marvel

### What it does

- **Two players, big comic panels.** Ben (red/gold) up top, Brandon (blue) below. Newsprint-cream page, black comic ink, Ben-Day halftone background, floating +/− hits, panel shake on damage, and a full-screen **K.O. / POW!** burst when someone drops.
- **Custom commanders with hero graphics.** Tap the commander field in each panel to name your commander. A Marvel autocomplete list (~60 real characters, heroes and villains) is built in, or type anything. Each commander gets a **hand-drawn comic emblem badge** that swaps live as you pick the character: Iron Man's mask, Doctor Doom's mask, Captain America's shield, Thor's Mjolnir, Hulk's fist, Spider-Man, Venom, Deadpool, Black Panther, Magneto's helmet, the Infinity Gauntlet, Wolverine's claws, Captain Marvel's star, Ghost Rider's skull, Loki's horns, with a comic-star or villain-mask fallback (carrying the character's initial) for everyone else. The same mini emblem shows next to the attacker in each commander-damage row. All emblems are inline SVG, so they load instantly with no external images to break.
- **±1 and ±5 counters on everything.** Life has **−5 / −1 / +1 / +5**. Commander damage has the same four buttons plus a **clr** (clear). Poison has −/＋.
- **One-tap partner commander.** Each panel has a **＋ Partner** button right next to the commander name, no menus. Turning it on gives that player a second commander field and adds a second commander-damage row on the opponent's panel, tracked separately (21 from *either* is a K.O.). Removing the partner restores any life lost to it.
- **Commander damage that can't desync.** Each point of commander damage subtracts exactly one life; removing damage restores exactly what it took (clamped at zero so it never goes wrong). This is the bug from the previous version, fixed and re-verified: add damage, then take it back off, and life returns to where it started.
- **No phase / stage buttons.** Those were tedious and are gone. Extras kept are just a coin flip, a d20, flip-top-panel (for sitting across a table), sound toggle, and a game log.
- **Saves your game.** State persists in the browser (localStorage) so a refresh mid-game keeps life, damage, and names. Installable to a phone home screen (PWA).

### Rules baked in

- 21 combat damage from a single commander knocks that player out.
- 10 poison counters knocks a player out.
- Life at 0 or below is a knockout.

Tap **🧒 Kid Mode** (bottom-right) for a plain-language explainer of the scoreboard.

This is the text companion (sibling .md) for [commander-marvel](https://drwu-htmls.vercel.app/commander-marvel).
Part of drwu-htmls.vercel.app.
