# iMac Add-on Skills Check

Route: `/imac-addon-skills-check`
Built: 2026-10-19 on Jacks-iMac
Host: GitHub Pages (`7onething1.github.io`). This Mac does not deploy drwu-htmls to Vercel.

## What this page is

A verification record. The MacBook chat wrote a how-to on 2026-10-19 for switching off 13 unused
Anthropic add-on skills, and dropped it in iCloud `sfg/skill-sync-2026-10-19-addon-skills/README.md`.
This page is the result of running that how-to's read-only steps against Jacks-iMac.

## Verdict

The clean-up was already finished on this Mac. The claude.ai skill switch is account-wide, both Macs
sign in to the same account, and this machine's own app log records the removal at 2026-10-17 16:42:22.
Step 4 of the how-to, the only step that changes anything, never ran.

## Provenance of every figure

| Claim | Read from |
|---|---|
| 0 of the 13 used on this Mac | `~/.claude.json` → `skillUsage` |
| four add-on copies, skill counts, manifest stamps | the four `manifest.json` files under `local-agent-mode-sessions/skills-plugin/` |
| live copy identified | file mtime walk, newest = 2026-10-19 14:05 |
| removal line, today's three syncs | `~/Library/Logs/Claude/main.log`, `[SkillsPlugin]` lines |
| the 13 / keep 6 / no-switch 7 lists | the MacBook's README, verbatim |

## The finding the how-to does not carry

Three of the four `skills-plugin` folders are abandoned state from May, June and August, and their
manifests still list the switched-off skills. Reading manifests by wildcard picks up a stale one and
reports the job unfinished. Sort by mtime first.

## Not done here

No Vercel deploy, per the standing rule that this Mac ships to GitHub Pages. Nothing written back
into iCloud `sfg/`. Nothing inside `skills-plugin/` or `~/.claude/skills` moved, renamed or edited.

## Correction, 2026-10-19 14:50

The first version of this page repeated the how-to's keep list verbatim, including
`kate-truth-seekers-tea`. Counted directly afterwards: **14 tarot and chiron skills exist under
`~/.claude/skills`**, and no directory matching kate, truth or seeker exists at all. The Kate combo
material the how-to references lives on the MacBook. Nothing was removed on this Mac; one keep-list
name was never here. The page now states the counted list rather than the inherited one.
