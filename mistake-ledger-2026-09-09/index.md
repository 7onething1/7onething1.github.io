# Mistake Ledger, 2026-09-07 to 2026-09-09

Scope: every Claude Code session transcript under `~/.claude/projects/` with traffic in the window, being 21 `.jsonl` files. It does not claim to cover conversations held anywhere else.

Built from Brandon's ask on 2026-09-09 14:51: "make all the chats from past two days archived or not into obsidian as a second brain and skills so you stop making the same mistakes over and over and over and over."

## The finding

The rules were not missing. The stop gates fired **242 times** across these two days and the same mistakes still happened, because every one of them runs when a session tries to stop and grades whether stopping is allowed. None run before an action to ask whether this method carries your approval or whether this artifact exists.

A search of all 766 memory files returned zero hits for `approved method`, `already uploaded`, `amnesia`, `breakthrough`, `still writing` and `prompted again`.

## The measurement

| Quantity | Count |
|---|---|
| Sessions with traffic | 21 |
| Assistant text turns | 1236 |
| Brandon's own turns | 27 |
| Ratio | 46 to 1 |
| Stop-hook injections | 242 |
| Peak concurrent sessions | 5, twice on 09-07 |

## The ten failures

01. **I abandoned the method you approved** (2026-09-09 14:39 &middot; 64335c03), gate at the time: NONE existed
02. **I rebuilt what was already shipped** (2026-09-09 14:39 &middot; 64335c03), gate at the time: upload_lease.py, races only
03. **I stopped before the ask was done** (3 of those inside one minute, 09-07 22:37, across three sessions), gate at the time: fired 242x, still happened
04. **I handed the decision back to you** (2026-09-08 02:17 &middot; d0d3163a and 2026-09-07 23:04 &middot; aa0d1591), gate at the time: verification rule only
05. **I got the Mac wrong** (2026-09-07 00:01 &middot; 79283a5f), gate at the time: accounts rule only
06. **I promised no more prompts, then prompted** (2026-09-08 21:22 &middot; d7028e92, after 3 interrupts), gate at the time: NONE existed
07. **I measured a file that was still being written** (my own correction, 2026-09-09 14:06 &middot; ffaa16a9), gate at the time: stalled-job rule only
08. **I shipped a guitar split you called trash** (2026-09-08 21:03 &middot; d7028e92), gate at the time: skill built afterwards
09. **I called it blocked without asking whether it could be made** (my own correction, caught by a peer session, 2026-09-07 00:01 &middot; 79283a5f), gate at the time: blocker-adjudicator added after
10. **Five sessions ran at once** (5 concurrent at 22:00 AND 23:00 on 09-07), gate at the time: warns only, enforces nothing

## What was built

- **Obsidian**, 13 notes at `Brandon-Vault/40 Systems/Mistake Ledger/`, indexed by `Mistake Ledger.md`
- **Skill** `/mistake-ledger` at `~/.claude/skills/mistake-ledger/`, with `check-method` and `check-artifact` verified against the real failure
- **Memory**, three files indexed into `MEMORY.md` and `POINTERS.md`

## Enforcement coverage

Ten failure classes documented, two with before-action enforcement (`check-method`, `check-artifact`), one partial (`two-guitar-split`). The other seven have reference material only.

## The dropped question, answered 2026-09-09

What to buy for better guitar stemming. The problem is separating guitarist 1 from guitarist 2, both electric, in the same register, 3.9 cents apart, with no hard panning.

| Option | Cost | Splits two guitars? | Scriptable |
|---|---|---|---|
| **Moises Premium, Lead & Rhythm** | $3.99/mo | Yes, by role | app/web only |
| Music.AI API `Guitar Parts` | pay as you go, Pro $25/mo | listed as rhythm vs solo | yes, REST |
| RipX DAW PRO | $149 promo / £198 | guitar as one stem | desktop |
| AudioShake Indie | from $20/mo | electric vs acoustic only | yes |

Recommendation: buy one month of Moises Premium and run three known Appleseed songs through the Lead & Rhythm model, scored with `channel_asymmetry_check.py`. Four dollars settles whether a role-based model tracks these two players before anything larger gets bought.

Verified: the Music.AI key authenticates and the account holds one workflow, `untitled-workflow-39e99a9`, so no guitar workflow exists yet. Not verified: whether `Guitar Parts` appears in that dashboard, since music.ai/dash showed a login wall.
