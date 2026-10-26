# YouTube Corpus Audit

**Route:** `/youtube-corpus-audit`
**Live:** https://7onething1.github.io/youtube-corpus-audit/ (http 200, 44,418 bytes)
**Built:** 2026-10-26 on Jacks-iMac
**Vercel:** not shipped. Jacks-iMac is gated off `drwu-htmls` Vercel deploys, so the Vercel copy is queued for the MacBook.

## What this page answers

Three questions, asked together: find and index every YouTube-derived corpus and index on the machine, work out what has been deleting them, and show the Phish guitar-lesson one.

## Headline numbers

| metric | value |
|---|---|
| corpora found | 59 |
| transcripts | 2,914 |
| DeepSeek summaries | 1,754 |
| on disk | 186 MB |
| buried in the vault nest | 18 corpora, 662 transcripts, 439 summaries, 22.3 MB |
| carry at least one index file | 44 |
| hold transcripts with no summaries | 21 |

## The Phish guitar-lesson corpus

`yt-trey-summaries`, 35 Trey Anastasio / StichMethod / Phish lesson videos built 2026-05-14, consumed by `phish-anatomy-of-a-jam`.

Alive at:
`~/Desktop/Brandon-Vault/New Folder With Items 2/New Folder With Items 7/IF YOU CAN'T FIND SOMETHING ITS HERE/yt-trey-summaries`

Both documented paths are dead: `~/Desktop/yt-trey-summaries/` (primary) and `~/Desktop/Anatomy-Jams/_lesson_corpus/` (the mirror the skill reads first).

35/35 transcripts and 35/35 summaries present. Raw indexes match the handoff spec exactly. Normalized indexes do not:

| file | spec | on disk | delta |
|---|---|---|---|
| by_song.json | 89 | 89 | same |
| by_technique.json | 254 | 254 | same |
| by_jam_type.json | 93 | 93 | same |
| by_song_normalized.json | 88 | 84 | -4 |
| by_technique_normalized.json | 52 | 20 | **-32** |
| by_jam_type_normalized.json | 25 | 11 | **-14** |

Rebuildable in full from the intact raw indexes. No video needs re-fetching.

## Causes

**Confirmed**
1. `normalize_indexes.py` overwrites `by_*_normalized.json` in place, no backup, no minimum key count, exit 0 either way. A thinner DeepSeek canonicalisation pass on 2026-05-23 replaced the good files.
2. A Finder multi-item drag buried 18 corpora in the Brandon-Vault nest. Nothing deleted, nothing indexed.
3. `corpus_registry.json` still points the `music` domain at the offloaded `~/Desktop`, so it reports 0 documents while 121 transcripts sit at `~/New Desktop/yt-iximusic`.

**Unattributed**
4. `yt-truthseekerstea` lost 187 fetched transcripts. `fetch_run.log` proves 187/189 fetched 2026-05-29 08:37; the `transcripts/` directory is empty with mtime 2026-05-29 11:41. No log names the process.

**Cleared, with evidence**
- `disk_space_guardian.sh`: report-and-alert only, no delete/trash/move call anywhere in it.
- Syncthing: no config and no `.stversions` on this Mac.
- The 2026-06-06 Desktop offload: confirmed path-breaker, not confirmed as a deleter.

**Not deletions**: `yt-manifestation-research` (index is `[]`), `yt-davidbennett-piano` and `yt-vaknin-grannon-research` (never fetched), `yt-walk-in-strict-research` (stopped at the fetch gate), `yt-cross-corpus` (report-only by design), `yt-timeline-jumping-research` (scratch consumed into a 188 KB dossier).

## Fixed in this pass

- **Row floor on both index builders.** `normalize_indexes.py` and `build_lesson_index.py` now share `write_with_row_floor()`: it refuses to replace an index when the new pass yields fewer keys, saves the rejected output as `<name>.json.rejected`, keeps a `.bak-<date>`, and exits 2. `--allow-shrink` is the only override. Proven by running the real builder on 5 of 35 Trey summaries: raw indexes held at 89/254/93, three `.rejected` files written, exit 2, corpus byte-identical. Caveat: self-authored tests, not yet fired on an unplanned run.
- **Registry repointed.** The dead `~/Desktop/yt-iximusic` now points at `~/New Desktop/yt-iximusic`. Music domain went 0 to **189 files** (64 Music Books + 125 yt-iximusic). The second music path was never missing, so it was left alone. Backups beside both files.
- **`ensure_ollama.py` probe fixed.** It asked `/api/tags` and called that healthy. It now requests a real embedding with an 8 s budget and prints DEGRADED with the cause and fix.
- **Board card staged.** A card for this page was added to `/indexes-board` (File & Asset Maps, count 6 to 7). It is local only, since the board is a Vercel route and this Mac is gated off Vercel deploys.

## The reason /ask could not answer any of this

The live ollama server (pid 1991, up 3 days 22 hours) executes from `/Users/drwu/.Trash/Ollama.app/Contents/Resources/ollama`. The app was trashed and the running server was never restarted. It answers `/api/tags` and lists all six models, and it can no longer spawn a model runner, so `/api/embeddings` and `/api/embed` both returned http 000 after 25 s and 30 s. 91% of memory was free, ruling out memory pressure, and the `ollama` CLI is gone from PATH.

So `/ask` has been running with its corpus, vault and memory layers dead. **Its "0 relevant cited results" means not searched, never nothing there.** This audit was done by reading the filesystem and handoff docs directly. The repair needs Ollama.app restored and the server restarted, which restarts a running process, so it is left for Brandon.

## Provenance

Counts come from a directory walk of `~/New Desktop/yt-*`, `~/Projects/yt-*` and the vault nest, reading key counts out of each index JSON; staged `delete/` folders excluded from byte totals. The Trey spec column is the handoff doc `SVG/[YT] transcripts skill + Trey corpus.md`, not a reconstruction. The T7 Shield figure for `Anatomy-Jams` audio (3.17 GB) is read from `~/Projects/stem-map/` and is **unverified**, because the drive is unmounted. No file was moved, renamed or deleted to produce the page.

## Related memory

- `reference_yt_corpora_buried_in_vault_nest`
- `reference_phish_trey_lesson_corpus_location`
- `reference_ask_semantic_layers_dead_ollama_in_trash`
- `feedback_normalize_indexes_has_no_row_count_floor`
