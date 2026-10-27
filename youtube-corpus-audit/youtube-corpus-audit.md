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
- **`ensure_ollama.py` probe fixed, fired for real, and now measured.** It asked `/api/tags` and called that healthy. It now requests a real embedding with an 8 s budget and prints DEGRADED with the cause and fix. The app was quit and this session resumed, and the hook printed the full warning unprompted at SessionStart, so this is an unplanned production firing and the earlier "not proven in production" caveat is retired. Healthy-case cost is 0.36 s cold and 0.19 s warm. Testing note: line 57 drains stdin, so run it as `python3 ensure_ollama.py < /dev/null` or it blocks and looks like an ollama hang.
- **Board card staged.** A card for this page was added to `/indexes-board` (File & Asset Maps, count 6 to 7). It is local only, since the board is a Vercel route and this Mac is gated off Vercel deploys.

## The reason /ask could not answer any of this

The live ollama server (pid 1991, up 3 days 22 hours) executes from `/Users/drwu/.Trash/Ollama.app/Contents/Resources/ollama`. The app was trashed and the running server was never restarted. It answers `/api/tags` and lists all six models, and it can no longer spawn a model runner, so `/api/embeddings` and `/api/embed` both returned http 000 after 25 s and 30 s. 91% of memory was free, ruling out memory pressure, and the `ollama` CLI is gone from PATH.

So `/ask` had been running with its corpus, vault and memory layers dead. **Its "0 relevant cited results" meant not searched, never nothing there.** This audit was done by reading the filesystem and handoff docs directly.

## RESOLVED 2026-10-26, on Brandon's go-ahead

Neither the Trash copy nor `/Applications/Ollama.app` existed by the time the repair ran, so there was nothing to put back. Homebrew carried the formula and began building `openssl@4` from source, since Ventura on x86_64 no longer receives bottles. The route that worked was the vendor's prebuilt server tarball.

| step | evidence |
|---|---|
| installed | `ollama-darwin.tgz` v0.40.11, 181,324,349 bytes, sha256 `aea7d3f2e32371b7644a6e2ec8d4f26820a0e3965918cce8a46cef3e947f6291` |
| location | `~/.local/opt/ollama-0.40.11`, symlinked to `/usr/local/bin/ollama`, which also returns the CLI to PATH |
| old symlink | kept as `/usr/local/bin/ollama.dangling-symlink-kept-2026-10-26` |
| server | pid 1991 (0.24.0, unlinked inode) stopped, pid 18600 reports 0.40.11, all six models intact |
| embeds | `/api/embeddings` 768 dims, `/api/embed` 768 dims, `ask.embed()` 768 dims |
| corpus_test.py | **10 of 10 domains COVER, 100 / 100**, music 0.655 |
| /ask end to end | **20 cited results in 35.7 s**, vault + memory + corpus registry all scoring above the 0.60 gate, against 0 before |
| layer indexes | intact throughout: vault 24,604 rows, domain 2,781, memory 331, corpus 20 |
| hook healthy case | prints "/ask embed server up and embedding." in 0.36 s cold, 0.19 s warm, exit 0 |
| survives reboot | the hook's `ollama serve` branch resolves off PATH, dead while the CLI was missing. Killed the server, ran the hook as SessionStart does: pid 22825 came up on 0.40.11 and embedded 768 dims |

**93 stale music paths resolved in the same pass.** The restored embed showed the music domain citing `~/Desktop/yt-iximusic/shiner_book_inserts.md`, a path the offload had killed. 93 of 240 music rows carried that prefix. Each was resolved to `~/New Desktop/yt-iximusic` under a test stronger than basename and byte size: the row's own chunk text had to be present in the replacement file. 93 of 93 passed, 0 flagged, row count held at 2,781, backup at `domain_embeddings/index.jsonl.bak-2026-10-26`. Dead music paths are now 0.

**The endpoint question is settled and the answer is to change nothing.** `ask.py` calls the deprecated `/api/embeddings` and `ensure_ollama.py` calls `/api/embed`. On 0.40.11 both work. `ask.py` stays on `/api/embeddings` because that is what built the stored index, so producer and consumer keep one normalization, and `ask.cosine` normalizes both anyway.

## Provenance

Counts come from a directory walk of `~/New Desktop/yt-*`, `~/Projects/yt-*` and the vault nest, reading key counts out of each index JSON; staged `delete/` folders excluded from byte totals. The Trey spec column is the handoff doc `SVG/[YT] transcripts skill + Trey corpus.md`, not a reconstruction. The T7 Shield figure for `Anatomy-Jams` audio (3.17 GB) is read from `~/Projects/stem-map/` and is **unverified**, because the drive is unmounted. No file was moved, renamed or deleted to produce the page.

## Related memory

- `reference_yt_corpora_buried_in_vault_nest`
- `reference_phish_trey_lesson_corpus_location`
- `reference_ask_semantic_layers_dead_ollama_in_trash`
- `feedback_normalize_indexes_has_no_row_count_floor`
