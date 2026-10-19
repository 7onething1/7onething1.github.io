# Cross-Mac Fix Catalog

Route: `/cross-mac-fix-catalog`
Built: 2026-10-19 on Jacks-iMac
Host: GitHub Pages (`7onething1.github.io`). This Mac does not deploy drwu-htmls to Vercel.

## The ask

Brandon: "I didn't mention everything its fixed its a lot, find all"

He had already corrected me once for claiming the MacBook found no faster setting. This is the full
sweep of what the two Macs have shipped each other through iCloud `sfg/`.

## Headline

```
cross-Mac bundles cataloged        34
payload files across them         653
  byte-identical on this Mac      401
  present but drifted              85
  not on this Mac at all          167
bundles with a gap                 26
bundles fully applied               8

the three MacBook-return bundles   51 files, 3 byte-identical, 38 missing
```

The MacBook has been shipping finished work back for five months and this Mac never installed most
of it.

## The find that mattered most

`skill-sync-2026-08-12-session-audit-meter-fix` opens by saying the other Mac's `analyze.py`
inflates every token figure and **reports a batching rate that cannot ever be non-zero**. The cause
is that Claude Code writes one JSONL record per content block, so a message carrying three parallel
calls becomes three records of one call each, and a per-record test never sees a batched turn.

- This Mac's `analyze.py` **does** carry the fix (dated 2026-08-12), so its 6% reading is sound.
- My own hand-rolled parser **did not**, which is how I published a 0.0% batching rate for this
  session earlier today and built a hook on top of it.
- Re-measured keyed on `message.id`: record-split ratio **2.41**, tool turns **128**, batched **42**,
  rate **32.8%**, 1.37 calls per turn.
- `batch_streak_gate.py` carried the same defect and would have fired forever on a well-batched
  session. Fixed and re-proved on **8 of 8** controls, two of which are fully-batched fixtures that
  must stay quiet.
- One file from that bundle, `remeasure.py`, is still missing here.

## How install status was judged

A payload file counts as installed only when a file of the same basename exists under
`~/.claude/hooks`, `~/.claude/skills`, `~/.claude/skills_disabled`,
`~/.claude/projects/-Users-drwu/memory`, `~/Projects` or `~/scripts`, **and** its sha256 matches the
bundle copy. A same-named file with a different digest is reported as drifted, so a stale local copy
cannot pass as applied.

## Caveats, stated rather than buried

- Request bundles this Mac **sent** are included for completeness. Their missing files are often
  outputs that only ever existed on the other machine, so the per-bundle detail matters more than
  the 167 total.
- Punctuation in the extracted descriptions is normalised to commas, since the house voice ruleset
  bans the em-dash and these are truncated summaries rather than attributed quotations.
- The MacBook side is inferred from what it shipped into `sfg/` plus what the config-sync installer
  documents. I cannot read that machine's `CLAUDE.md`, hooks or settings from here.
- Nothing in `sfg/` was written or changed to produce this.

## Generator

`catalog_sfg.py` and `build_catalog_page.py` in this session's scratchpad. Every figure on the page
is generated from `sfg_catalog.json` rather than typed by hand.
