# @Khanoisseur forensic tweet recovery — RECOVERY REPORT (2016–2017)

Generated: 2026-08-18T05:03:12Z  
Target: Adam Khan, `@Khanoisseur` (suspended)  
Database: `data/khanoisseur.db`

## Headline numbers

| Metric | Value |
|---|---:|
| Unique tweet IDs recovered (all accounts) | **4,176** |
| — primary account `@Khanoisseur` | 4,176 |
| — related account `@Khanoisseur_` | 0 |
| Tweets with recovered body text | **29** |
| — primary account | 29 |
| — related account | 0 |
| Partial-text records | 5 |
| ID-only records (documented gaps) | 4,142 |
| Independent evidence sources stored | 48 |
| Wayback captures indexed | 80,250 |
| — fetched and parsed | 92 |
| — queued, not yet fetched | 80,158 |
| Media references recovered | 10 |
| Open unresolved leads | 2 |
| Date span of recovered IDs | 2016-01-02T12:54:43Z → 2017-12-31T18:17:36Z |

### Coverage measured, not asserted

Body text is recovered for **0.7%** of known IDs (29 of 4,176). Every remaining ID is preserved as an explicit ID-only record with a canonical URL and a Snowflake-derived UTC timestamp, so each gap is individually addressable rather than silently dropped.

## Recovery by year (primary account)

| Year | Unique IDs | With body text | % text |
|---|---:|---:|---:|
| 2016 | 1,612 | 2 | 0.1% |
| 2017 | 2,564 | 27 | 1.1% |

## Evidence classification

| Evidence class | Records |
|---|---:|
| `ID_ONLY` | 4,142 |
| `EXACT_PRIMARY` | 18 |
| `EXACT_COPY` | 11 |
| `PARTIAL` | 5 |

## Tweet type

| Type | Records |
|---|---:|
| unknown | 4,176 |

## Source families that produced results

| Source type | Source rows | Distinct tweets |
|---|---:|---:|
| `wayback_twitter_timeline` | 323 | 155 |
| `search_result_title` | 18 | 18 |
| `search_result` | 16 | 15 |
| `wayback_twitter_status` | 14 | 14 |
| `thread_mirror` | 6 | 6 |

## Methodology

1. **Wayback CDX enumeration.** Wildcard CDX queries over `twitter.com/Khanoisseur/status/*`, `mobile.twitter.com/...`, `www.twitter.com/...`, `x.com/...`, plus year-sliced profile sweeps to defeat the 50,000-row cap. Raw CDX JSON is cached under `cache/cdx/`.
2. **Attribution gate.** Every capture URL was re-parsed for its handle. 62,466 ID-bearing captures were checked and **zero** carried a handle other than the target, so the ID set is not contaminated by other accounts.
3. **Snowflake decoding.** Every ID is decoded to a UTC timestamp with the Twitter epoch `1288834974657`, giving each record a date even when no body text survives.
4. **Archived page parsing.** Two parsers: a status-page parser (title / OpenGraph / canonical-URL attribution check) and a timeline parser for server-rendered profile pages, which yields ~13-20 tweets per capture along with engagement counts, media URLs, quote IDs and conversation IDs.
5. **Recursive discovery.** Every parsed page is re-scanned for further `Khanoisseur/status/` IDs, which are pushed back into `tweet_id_queue`.
6. **Search-engine and embed harvesting.** Search result titles of archived Twitter pages preserve full tweet text in the form `DISPLAY on Twitter: "TEXT"`; these are parsed and classified `EXACT_COPY`, or `PARTIAL` when the title is elided. Article pages are scanned for `blockquote class="twitter-tweet"` embeds.

## What blocked further recovery

- **Internet Archive playback rate limiting.** The CDX index API stayed available throughout, but `web.archive.org/web/<ts>id_/<url>` playback began returning HTTP 503 for every request after roughly 800 fetches, including single sequential requests spaced 5-10 seconds apart. Body-text recovery depends on that endpoint. An adaptive fetcher (`src/run_recover.py`) is checkpointed against SQLite and resumes automatically; re-running it after the cooldown continues the corpus from exactly where it stopped, with no repeated work.
- **Thread Reader.** `threadreaderapp.com/thread/<id>.html` now 302-redirects to `/authenticate`, and `/user/Khanoisseur` returns 404. Access controls were not bypassed; the thread roots are recorded as leads.
- **Threader.app.** Serves a JavaScript shell with no server-side tweet text; the user index returns HTTP 500.
- **Dead mirrors.** `robzand.com` (404) and `randomfoo.net` retain only single-tweet fragments.

## How to resume

```bash
cd ~/khanoisseur_recovery
~/.venvs/khanrec/bin/python src/run_recover.py --mode both --base-delay 8 --max-minutes 600
~/.venvs/khanrec/bin/python src/export.py && ~/.venvs/khanrec/bin/python src/report.py
```

The runner is idempotent: captures already fetched are skipped, IDs that already carry `EXACT_PRIMARY` text are not refetched, and evidence is only overwritten by a strictly higher class.

## Deliverables

- `exports/coverage.json` (7,176 bytes)
- `exports/khanoisseur_all_recovered_tweets.csv` (5,707,951 bytes)
- `exports/khanoisseur_all_recovered_tweets.jsonl` (28,868,147 bytes)
- `exports/khanoisseur_recovered_tweets.md` (72,150 bytes)
- `exports/khanoisseur_recovery.xlsx` (1,154,221 bytes)
- `exports/khanoisseur_sources.csv` (243,981 bytes)
- `exports/khanoisseur_threads.csv` (12,995 bytes)
- `exports/stats.json` (176 bytes)
