# Free and Under-$12 Upgrades — X Feed Sweep, 23 October 2026

Sweep of the signed-in X.com account for Claude, Obsidian, and adjacent program
upgrades costing nothing or under $12. Every price and repository confirmed on
the vendor's or project's own page, never from a third-party aggregator.

## Capture counts

| Source and pass | Scroll steps | Posts captured | Read | Usable leads |
|---|---|---|---|---|
| Home, For You, pass 1, keyword filtered | 30 | 38 | 14 | 0 |
| **Home, For You, pass 2, every post kept** | 90 | 53 | 53 | **4** |
| Home, Following | 30 | 47 | 9 | 2 |
| @claudeai | 12 | 24 | 24 | 5 |
| @obsdmd | 12 | 21 | 21 | 3 |

**The first pass was wrong.** Filtering to keyword matches before reading threw
away most of the Claude material, because the posts carrying real artifacts were
wrapped in language a filter scores as noise. Pass two kept all 53 posts and read
every one. Four pointed at something verifiable, and all four survived checking.

Of the 53 in the deep pass: 6 promoted, 7 Grok/xAI and crypto-bot threads, 4
music and sports, and 12 that wrapped a genuine repository or document in
manufactured excitement. Two accounts posted identical trading numbers ($68
capital, $6,732 first night), the tell of a shared template.

## Provenance of every check

| Claim | How it was verified | Result |
|---|---|---|
| Local Obsidian version | `defaults read /Applications/Obsidian.app/Contents/Info.plist CFBundleShortVersionString` | `1.12.7` |
| Latest Obsidian stable | obsidian.md/changelog | 1.14.5, public, 22 Oct 2026 |
| Installed plugins | `Brandon-Vault/.obsidian/community-plugins.json` | 13 enabled, includes `obsidian-local-rest-api` |
| MCP server state | `~/.claude.json` | No Obsidian MCP server configured |
| Obsidian prices | obsidian.md/pricing, obsidian.md/sync | Sync $4/mo yearly, Publish $8/mo yearly, Catalyst $25 once |
| Claude Duet terms | claude.com/blog/claude-duet | Waitlist, US Pro and Max, no separate fee |
| Claude Code sandbox | code.claude.com/docs/en/sandboxing | OS-enforced, macOS/Linux/WSL2, built in |
| `anthropics/financial-services` | GitHub | Public, Apache 2.0, ~40.7k stars |
| `anthropics/skills` | GitHub | Public, ~183.2k stars, split licence |
| `MarkusPfundstein/mcp-obsidian` | GitHub | Public, MIT, ~4.5k stars |
| `Donchitos/Claude-Code-Game-Studios` | GitHub | Public, MIT |
| Pele | pele.run | MIT, npm `pele` |

## Findings

### The four real leads from the For You feed

1. **Claude Code Bash sandbox, `/sandbox`.** Score 9/10, $0, built in. An
   OS-enforced boundary around shell commands, so Claude runs them without
   per-command approval. macOS, Linux, WSL2. Better trade than bypass
   permissions mode, which removes the prompts by removing the boundary.
   One-session form:
   `claude --settings '{"sandbox": {"enabled": true, "allowUnsandboxedCommands": false}}'`
   Caveats: non-working-directory paths such as `/Volumes/T7 Shield/` need
   `sandbox.filesystem.allowWrite`; file tools, MCP servers, and hooks run
   outside the sandbox, so the hook chain is unaffected.
2. **`anthropics/financial-services`.** Score 7/10, $0, Apache 2.0, ~40.7k stars.
   The finance agents are irrelevant. The core `financial-analysis` plugin
   carries `xlsx-author`, `audit-xls`, `pptx-author`, `deck-refresh`, which serve
   the xlsx-with-named-Table rule. Install the core plugin only; its FactSet,
   S&P Global, and PitchBook connectors each need a paid subscription.
3. **`anthropics/skills`.** Score 3/10, already installed. Upstream source of the
   `docx`, `pdf`, `pptx`, `xlsx`, `skill-creator`, and `dataviz` skills already in
   the session. Licence split: most Apache 2.0, the four document skills
   source-available rather than open source.
4. **`Claude-Code-Game-Studios`.** Score 4/10, $0, MIT. Not for the games. The
   transferable piece is `modes.rigor` with minimal/standard/full, plus 15 hooks
   and `/gate-check`. A rigor dial is what the honesty gate lacks, firing at full
   strength on every turn.

### Free, already covered by the Max plan or an existing licence

5. **Obsidian 1.14.5, up from 1.12.7.** Score 10/10. Two minor versions behind.
   Adds editing Markdown from outside the vault (1.14.2), macOS Quick Look for
   Markdown with the app closed (1.14.3), Bases kanban and grouping (1.14.0,
   1.14.4), colour highlight syntax, and an Electron security update (1.14.5).
   Plugins carry over, since plugin state lives in the vault.
6. **Claude Duet.** Score 8/10. Waitlist, US Pro and Max, no separate fee. Draws
   on the same usage limits, which matters on a weekly allowance.
7. **Claude Dashboards and Claude Motion.** Score 8/10. Beta on paid plans.
   Dashboards shows the query behind every chart, satisfying the provenance rule
   with no extra work.
8. **Auto mode becoming default.** Score 7/10. Web and mobile. Same idea as the
   Bash sandbox, applied to the apps.
9. **Claude in Google Docs, Sheets, and Slides.** Score 6/10. Beta on paid plans.
   Edits in place rather than read-and-rewrite.

### Free, open source, small setup

10. **Obsidian MCP server.** Score 9/10. `obsidian-local-rest-api` is already
    installed and enabled with nothing wired to it. `mcp-obsidian` adds
    `patch_content` and `append_content`, giving Claude Code write access to
    Brandon-Vault. Needs Python 3.11+ and the `mcp` SDK pinned below 2.0.
    Caution: it exposes `delete_file`, against the never-delete policy, so gate
    or omit that tool.
11. **Pele.** Score 7/10. MIT Mermaid renderer by kepano, themeable SVG, claims
    up to 500x faster. npm `pele`, no CDN documented.

### Under $12 a month

12. **Obsidian Sync Standard, $4/mo billed yearly.** Score 6/10. One vault with
    version history, from the vendor rather than a third-party watcher. 1 GB
    only, so it narrows the manual iCloud channel rather than replacing it.
    `~/.claude`, `~/Projects`, and the Desktop folders are untouched.
13. **Obsidian Publish, $8/mo billed yearly.** Score 2/10, skip. GitHub Pages is
    already free and doubles as the cross-Mac transfer channel.

### Over budget

14. **Obsidian Catalyst, $25 one time.** Over the $12 line. Gates 1.15.0, which
    carries Pele, reorderable Bases filters, and URI/CLI append-under-heading.
    Unnecessary, since 1.12.7 to 1.14.5 is free and delivers more.

### Recorded and not recommended

**Claude Haiku 5.5**, released 7 October, roughly 75% cheaper to run than Haiku
4.5. The standing model policy is Opus for all work, written because cheaper
passes produced work that had to be redone. Listed for the record only.

## Order of operations

| # | Action | Cost | Effort |
|---|---|---|---|
| 1 | Update Obsidian 1.12.7 to 1.14.5 | $0 | 5 min |
| 2 | Join the Claude Duet waitlist | $0 | 1 min |
| 3 | Open `/sandbox` and read the panel | $0 | 10 min |
| 4 | Wire `mcp-obsidian` to the Local REST API | $0 | 15 min |
| 5 | Install `financial-analysis` for its xlsx authors | $0 | 10 min |
| 6 | Try Claude Dashboards on one existing route | $0 | 20 min |
| 7 | Read the 15 hooks in Claude-Code-Game-Studios | $0 | 20 min |
| 8 | Decide on Obsidian Sync | $48/yr | 10 min |

## Related

Already in the estate: `drwu-htmls.vercel.app/obsidian-claude-os`.
