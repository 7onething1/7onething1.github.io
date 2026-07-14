# Salubrious Snail Commander Index — 2026 Modernization Audit

_Every fact re-verified 2026-07-14 against Scryfall card records and magic.wizards.com. The transcript archive is untouched; only machine-readable metadata and an editorial status layer were added._

**Verdict:** Yes, the index carried genuinely stale rules and card facts, and it has been modernized. The central deckbuilding theory ages well. The datable material was card legality, the Game Changers list, bracket definitions, the hybrid-mana proposal, and two metadata errors. All of it is now corrected in the generator, so the fix survives the next rebuild.

## 1. Verified corrections

| Item | What the page reflected | Ground truth (verified 2026-07-14) | Action |
|---|---|---|---|
| Athreos, Shroud-Veiled color identity | Tagged White / Black / **Green** | White / Black only; stray Green traced to the mono-black Sibsig Ceremony misheard as green-black (Scryfall) | FIXED — Green removed from tags + filter |
| Commander name garble | Commander tagged `Hearthhole, the World Seed` | Real card is `Hearthhull, the Worldseed`, B/G/R Spacecraft (Scryfall) | FIXED — chip + search tag corrected |
| Sway of the Stars legality | Transcript states it is banned | Legal in Commander again after being unbanned (Scryfall) | STATUS NOTE |
| Farewell status | Discussed as a plain board wipe | Now on the Commander Game Changers list (Scryfall) | STATUS NOTE |
| Hybrid mana proposal | Framed as a live proposed rules change | Never became a rule; hybrid counts every color toward identity; alternates are house rules (magic.wizards.com) | STATUS NOTE |
| Bracket 2 definition | Equated with precon strength + three-tutor ceiling | Bracket 2 is "Core"; B1/B2 exclude Game Changers, B3 allows up to three; no fixed tutor count (magic.wizards.com) | STATUS NOTE |
| The Sibsig Ceremony colors | Transcript says "green-black" | Mono-black, {B}{B}{B} (Scryfall) | STATUS NOTE (transcript kept) |
| Iona, Shield of Emeria | Cited as banned | Still banned; page is correct (Scryfall) | NO CHANGE |

## 2. What changed in the generator

The page is generator-driven (`corpus_points.py`); hand-edits to the HTML get clobbered on rebuild, so every fix went into the builder.

- **`CARD_ERRATA`** — corrects wrong commander names and color identities against Scryfall as the tags load. Transcript never edited.
- **`STATUS_NOTES`** — renders a "Current status — verified Jul 2026" panel above a video's transcript when its rules or legality moved. Each line names its source.
- **"Rules changed since publish" filter** — a new toggle surfaces only the entries carrying a status note.
- **Grounding preserved** — on the rebuilt page the anti-AI voice gate flags 0 patterns on the authored status prose, and `points_validate` reports 0 hard and 0 soft findings.

## 3. On the external review

- **Confirmed right:** the transcription garbles are real (`Meria of Ultron`, `Glissel`, `Hearthhole`). Only `Hearthhole` reached the metadata and was fixed; the other two live only in the spoken transcript (the decks are already tagged correctly as Meria, Scholar of Antiquity and Glissa), so they stay per the preserve-the-transcript rule.
- **Held to current state, not dates:** the review's specific change dates (Feb 2026 hybrid shelving, Oct 2025 bracket revision) were not independently verified, so the status notes anchor to the current published rule and its source rather than repeating an unconfirmed date.

## 4. Optional next step

A "2026 alternatives" box pairing an older card with a newer role-equivalent (e.g. Hexing Squelcher next to Spider-Punk). It adds an opinion layer on top of the archive, so it is offered rather than assumed.

---

Live index: https://7onething1.github.io/salubrioussnail-points/ · generator `~/.claude/skills/yt_trans/scripts/corpus_points.py`
