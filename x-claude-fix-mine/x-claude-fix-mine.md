# X feed mine: Claude fixes, scored against yours

Mined 13 August 2026 from the **@thejoeywatts** home timeline.

## Method

- Source: `x.com/home`, signed in as @thejoeywatts, scraped through the Chrome bridge with a MutationObserver so recycled posts were not skipped.
- Volume: **100 posts captured**, 56 AI or Claude related, 41 carrying an actual technique.
- Baseline: the 8 harness fixes issued 12 and 13 August, read from the memory files and today's session transcripts.
- Verification: repo names and star counts came from `api.github.com` directly. Unverifiable claims are labelled and stay attributed to the poster.
- First pass read @sparklingsumma, whose feed carries no AI content. Zero of its 34 posts matched.

## Top three

1. **Invisible Unicode walks through the voice gate. Score 92.** `guillaumemeyer/watermarks-remover`, 5,177 stars. Checked against the real file: `~/.claude/skills/_shared/anti_ai_voice_gate.py` runs 362 lines and 23 pattern groups with no zero-width or invisible-character check. Add a function flagging `U+200B`, `U+200C`, `U+200D`, `U+2060`, `U+FEFF`, `U+00A0`, `U+202F`, `U+00AD`.
2. **A 202k-star CLAUDE.md. Score 78.** `multica-ai/andrej-karpathy-skills`, described as a single CLAUDE.md file to improve Claude Code behaviour. Diff its section list against the existing one.
3. **Map the repo before the agent reads. Score 66.** `repowise-dev/repowise`, 5,728 stars, dependency graph with PageRank.

## Already covered

Transcript re-read tax (@Roxx_0x), four reads of one file (@hanakoxbt), configuration drift (@alex_prompter), the six-slot CLAUDE.md (@Sprytixl), the writing harness (@shannholmberg), loop engineering (@ajay4ai, @arle0x), Obsidian as agent memory (@kocer_eth, @Nazik2053, @cyrilXBT).

## Conflicts with standing policy

`paperclipai/paperclip` at 78,034 stars and the subagent-graph course both require fan-out, which the one-session rule forbids.

## Unverified

The "Anthropic leaked" framings, the Loop Engineering PDF, the million-case eval system, the DeepSeek harness star count, and the CrystalMem paper. The techniques underneath are often real. The attributions rarely survive a check.

Live page: https://7onething1.github.io/x-claude-fix-mine/
