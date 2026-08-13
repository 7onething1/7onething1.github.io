# X feed mine: Claude fixes, scored against yours

Mined 13 August 2026 from the **@thejoeywatts** home timeline. Revised the same day after review.

## Method

- Source: `x.com/home`, signed in as @thejoeywatts, scraped through the Chrome bridge with a MutationObserver so recycled posts were not skipped.
- Volume: **100 posts captured, 68 AI or Claude related, 41 carrying a technique.** All three share one denominator of 100.
- Frozen ledger: `x-mine-ledger.jsonl`, one row per post with id, author, source timestamp, SHA-256 of the normalized text, both classifier flags, a 160-character excerpt, and the finding each row backs. 24 rows link to a published finding.
- Reproduce every figure: `python3 ledger_verify.py x-mine-ledger.jsonl`. It exits non-zero on any disagreement, duplicate id, malformed hash, or missing field.
- Verification: repo names and star counts came from `api.github.com` directly. Unverifiable claims are labelled and stay attributed to the poster.
- First pass read @sparklingsumma, whose feed carries no AI content. Zero of its 34 posts matched.

## Correction

The first version published **56** as the AI-related count. That came from the looser filter over the first 73 posts, printed beside 41 from the stricter filter over all 100. Two filters, two denominators, one line. Running both classifiers across all 100 ledger rows gives **68**. The verifier now rejects the old figure: `--expect strict=56` returns `LEDGER: FAIL, published 56, ledger 41`.

## Top findings

1. **Invisible Unicode in text. Score 92.** `guillaumemeyer/watermarks-remover`, 5,177 stars, named by @josesilesdata and independently by @JespernissenSEO. Checked against the real file: `anti_ai_voice_gate.py` ran 362 lines and 23 pattern groups with no invisible-character check. **Fixed the same day.** `scan_invisible()` and `strip_invisible()` are in the gate, measured at 1 real hit and 0 false positives across 1,041 pages. The hit is a live `U+200B` in `tame-impala-charts` line 257.
2. **C2PA metadata in generated files. Score 58.** Filed separately from finding 1, because a text gate reads a decoded string and never sees a file container. Catching it needs byte-level inspection closer to `exiftool`. No scan has been run, so this is a described risk with no measurement.
3. **A highly starred Claude Code guidance repository. Score 78.** `multica-ai/andrej-karpathy-skills`, 202,161 stars on re-read. Its top level carries 8 entries, with `CLAUDE.md` at 2,357 bytes beside `EXAMPLES.md` at 14,838, a `skills/` directory, and a `.claude-plugin/` directory. A star count establishes how many accounts starred the repository, and says nothing about who read the file. The file-by-file diff against your CLAUDE.md has not been run.
4. **Map the repo before the agent reads. Score 66.** `repowise-dev/repowise`, 5,728 stars, dependency graph with PageRank.

## Already covered

Transcript re-read tax (@Roxx_0x), four reads of one file (@hanakoxbt), configuration drift (@alex_prompter), the six-slot CLAUDE.md (@Sprytixl), the writing harness (@shannholmberg), loop engineering (@ajay4ai, @arle0x), Obsidian as agent memory (@kocer_eth, @Nazik2053, @cyrilXBT).

## Conflicts with standing policy

`paperclipai/paperclip` at 78,034 stars and the subagent-graph course both require fan-out, which the one-session rule forbids.

## Unverified

The "Anthropic leaked" framings, the Loop Engineering PDF, the million-case eval system, the DeepSeek harness star count, and the CrystalMem paper. Each has a ledger row tagged with an `F-unver-*` finding id. The techniques underneath are often real. The attributions rarely survive a check.

## Standing rule added

No aggregate ships without a ledger. Any capture that publishes a count freezes the JSONL first, then proves the figures with `~/.claude/skills/_shared/ledger_verify.py`.

Live page: https://7onething1.github.io/x-claude-fix-mine/
