# Mac + Claude Tune-Up

MacBookPro16,1, 8-core i9, 16 GB, macOS 26.5.1. Measured 2026-08-17. Nothing was changed to produce this.

## Scoreboard

| Metric | Measured here | Healthy range | Verdict |
|---|---|---|---|
| Free disk space | 7.7 GB of 932 GB (0.8%) | 93 to 140 GB | CRITICAL |
| Contradictory standing rules | 7 | 0 | CRITICAL |
| Fixed context tax per turn | 33,206 tokens (16.6%) | under 8,000 | HIGH |
| Skill frontmatter alone | 20,507 tokens across 140 skills | under 6,000 | HIGH |
| MCP servers / tools | 18 servers, about 158 tools | 6 to 8 servers | HIGH |
| Stop hook chain | 1.61 s per turn end | under 0.2 s | MEDIUM |
| PreToolUse chain per Bash call | 0.383 s, 7 python starts | under 0.1 s | MEDIUM |
| Dead weight in `~/.claude` | 2.42 GB | 0 | MEDIUM |
| Claude Desktop footprint | 27 processes, 3.09 GB RAM, 8.2 GB disk | normal for Electron | INFO |
| Memory pressure | 74% free, 131 MB swap | under 50% swap | HEALTHY |
| Shell startup per Bash call | 0.01 s | under 0.3 s | HEALTHY |

## 1. The disk is the emergency

932 GB volume, 7.7 GB left, 0.8% free. macOS degrades hard below roughly 10% free. Swap cannot grow past its 1 GB file, APFS copy-on-write has nowhere to land, Spotlight stalls, caches thrash.

Home directory totals 813 GB:

| Folder | Size | Largest child |
|---|---|---|
| `~/Desktop` | 233 GB | Anatomy-Jams 49 GB, jam-7-3-26-rebuild 39 GB |
| `~/Documents` | 178 GB | `Documents/complete` 151 GB |
| `~/Pictures` | 159 GB | Photos Library 159 GB |
| `~/Downloads` | 133 GB | `Downloads/complete` 106 GB |
| `~/Library` | 66 GB | Application Support 31 GB, Caches 14 GB |

The two `complete` folders total 257 GB. Moving those to an external drive takes the volume from 0.8% free to roughly 28% free in one operation, with no deletion.

## 2. Seven rules that fight each other

| # | One rule says | The other says | Status |
|---|---|---|---|
| 1 | `ultracode_default.py` forces ultracode on every turn: run a workflow for every substantive task, spawn dozens of agents | `~/CLAUDE.md:13`: do not launch subagents, parallel chats, or `/loop` without permission | OPPOSITE |
| 2 | `model_fit_gate.py` recommends Sonnet 5 as the floor | `~/CLAUDE.md:13`: use Opus for all work, never self-route to Sonnet or Haiku | OPPOSITE |
| 3 | PATHS hook: never write to `~/Desktop`, old content lives in `~/New Desktop` | `~/New Desktop` does not exist. `~/Desktop` is the live 233 GB working set | FALSE MAP |
| 4 | `~/CLAUDE.md`: every HTML ships to Vercel at `~/Projects/drwu-htmls/public/` | Memory dated 2026-07-29 says new pages go to GitHub Pages. The Vercel public folder here is empty with no git repo | STALE |
| 5 | Ship gate demands one real kid button per page | Memory `feedback_kid_mode_retired_never_inject`, dated 2026-07-13 | RETIRED |
| 6 | `~/CLAUDE.md:15`: conserve allowance through Sunday, July 19, 2026 | Today is 2026-08-17 | EXPIRED |
| 7 | `~/.claude/CLAUDE.md`: deploy via `mcp__1da7f971-…__deploy_to_vercel` | That MCP server is not in this session's tool list | MISSING |

Rules 1 and 2 arrive in every turn, so every session opens with a coin flip on model policy and on whether to fan out. Rule 3 asserts a folder layout that is false here, so any path reasoning built on it starts wrong.

Verification:

```
$ ls -d "$HOME/New Desktop"
ls: /Users/brandonchavez/New Desktop: No such file or directory
$ du -x -d 1 -g ~/Desktop
233  /Users/brandonchavez/Desktop
```

## 3. The skill-description tax

167 skill folders, 160 with a SKILL.md, 140 carrying frontmatter. Only the skill body is free. The description is injected every turn whether the skill is used or not.

```
SKILLS=160  FRONTMATTER_BYTES=82031  APPROX_TOKENS=20507
description bytes: total=75692  median=495  max=1422
descriptions over 300 bytes: 115  (~17,449 tokens)
trimming those 115 to 200 bytes saves ~11,699 tokens EVERY turn
```

Heaviest: `rock-analysis-canon` 1461, `chavez-radiohead-failure-craft` 1449, `jazz-harmony-craft` 1202, `chiron-intuition` 1174, `engineering-the-guitar` 1141, `mixing-engineering-craft` 1036, `rock-form-canon` 1018, `counterpoint-craft` 1001, `orchestration-craft` 949, `mtg-price-verify` 934.

## 4. Four duplicated tool families

| Family | Servers holding it | Tools |
|---|---|---|
| Browser control | `Claude_Browser`, `Control_Chrome`, `claude-in-chrome` | 18 + 10 + 22 = 50 |
| Mac control | `computer-use`, `Control_your_Mac`, `terminal` | 27 + 1 + 1 = 29 |
| PDF | `pdf-viewer`, `plugin_pdf-viewer_pdf` | 3 + 9 = 12 |
| Charts and widgets | `visualize`, a second identical server under a UUID name | 2 + 2 = 4 |

Four copies of `@modelcontextprotocol/server-pdf` were running at measurement time. Fifty tools for one job is how a session picks the dead bridge and reports blocked.

## 5. Hook latency, measured

| Event | Hooks | Measured | Fires |
|---|---|---|---|
| Stop | 10 python gates + 1 curl + 1 log write | 0.616 s python, 0.99 s for the ntfy.sh calls | every turn end |
| PreToolUse : Bash | 7 gates | 0.383 s | every Bash call |
| UserPromptSubmit | 8 injectors | 0.363 s for 6 of 8 | every prompt |
| PostToolUse : Write, Edit | 3 | not timed | every file write |
| statusline | 1 | 0.091 s | every render |

A session with 20 prompts and 40 Bash calls pays about 55 seconds in hook overhead. Python cold start is 0.04 s, so seven gates on one Bash call spend 0.28 s starting interpreters. One dispatcher importing seven modules cuts that to roughly 0.06 s.

## 6. Dead weight and background load

```
2.3G  ~/.claude/claude-sync        <- banned in CLAUDE.md, sync.sh.disabled-2026-05-18
 75M  ~/.claude/backups
 42M  ~/.claude/_config_sync_backups
2.5M  ~/.claude/_cleanup_backups
```

Claude Desktop on disk is 8.2 GB: vm_bundles 6.0G, local-agent-mode-sessions 628M, Cache 618M, claude-code 289M, claude-code-vm 224M, Code Cache 206M.

Login items are Cloudflare WARP and Untapped.gg Companion. Also resident: five Epic Games Launcher processes, UnrealEditorServices, GeoComply PlayerLocationCheck, two Google updater agents. WindowServer was at 30.8% CPU with load average 3.18.

## 7. What is already healthy

RAM is fine: 74% free, 131 MB swap used of 1 GB. A RAM upgrade would buy nothing. Shell startup is 0.01 s, so the zsh profile adds nothing to Bash calls. Spotlight is enabled and idle, Time Machine is not running, Trash is empty.

## Ranked fix list

| # | Fix | Payoff | Effort | Risk |
|---|---|---|---|---|
| 1 | Move `Documents/complete` (151 GB) and `Downloads/complete` (106 GB) to an external drive. 0.8% free becomes about 28% | 10 | low | low |
| 2 | Resolve the seven contradictions. One model policy, one fan-out policy, one HTML host. Correct the PATHS hook. Delete the expired July 19 paragraph | 10 | low | low |
| 3 | Trim the 115 skill descriptions over 300 bytes to 200. Saves 11,699 tokens every turn | 9 | medium | low |
| 4 | Retire the duplicate MCP servers. One browser, one Mac, one PDF, one chart | 8 | low | low |
| 5 | Make the two `ntfy.sh` curls asynchronous with a trailing `&`, or drop them. Returns a full second per turn end | 6 | trivial | none |
| 6 | Merge the seven PreToolUse Bash gates into one dispatcher | 6 | medium | low |
| 7 | Stage `~/.claude/claude-sync` (2.3 GB) out of the tree. Move it, do not delete it | 5 | trivial | low |
| 8 | Clear Claude Desktop caches and review `vm_bundles` (6.0 GB) | 5 | low | low |
| 9 | Remove Epic Games Launcher and Untapped.gg from login items | 4 | trivial | none |

Items 1, 2 and 3 carry most of the gain. One recovers the machine, one recovers instruction clarity, one recovers a sixth of the context window.

## How each number was measured

| Claim | Command |
|---|---|
| Free disk, volume size | `df -h /System/Volumes/Data`, `diskutil info` |
| Folder sizes | `du -x -d 1 -g ~` and per-folder repeats |
| Memory and swap | `memory_pressure`, `sysctl vm.swapusage` |
| CPU and processes | `ps -Ao %cpu,%mem,rss,comm -r`, `uptime` |
| Context tax | byte count of both CLAUDE.md files, MEMORY.md, and every SKILL.md frontmatter block, divided by 4 |
| Hook latency | each hook script run directly with a real JSON payload on stdin |
| MCP inventory | the session tool manifest plus `ps` for running server processes |
| Contradictions | `grep` against CLAUDE.md line numbers, `ls` against every asserted path |
| Login items | `osascript` against System Events |
