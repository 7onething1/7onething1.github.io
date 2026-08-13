# Community Canon Engine

Built 13 August 2026. Companion page to `~/New Desktop/community-agentic-os`,
operator skill `/community-os`.

## What it is

A citation-gated corpus for the Community investigation. Phase 1 made the outside
corpus citable (Harmon interviews, DVD commentary, articles, other shows'
episodes). Phase 2 made findings accumulate across episodes instead of being
scoped to one.

## Layers

```
evidence/            immutable, line-indexed, never overwritten
  <EP>/                Community episode transcripts
  _sources/<ID>/       interviews, commentary, articles, other shows
interpretation/<EP>/ per-episode artifacts, every line cited
claims/              accumulated cross-episode findings, every line cited
hypotheses/          proposed but unconfirmed, must name its own test
rejected/            failed connections, with the reason, never re-proposed
log.md               append-only ledger
```

## The two rules

1. **A claim cites evidence, never another claim.** Enforced by grammar. A canon
   id is lowercase-hyphenated, a citation token needs an episode code or an
   UPPERCASE source id, so a canon id cannot parse as a citation at all.
2. **Dedup runs against everything seen, not against what was kept.** Claims,
   hypotheses and rejections all score, with rejections winning ties, so a
   refuted reach never returns as a discovery.

## Gate state at time of writing

```
test_source_gate.py   26/26   exit 0
test_canon.py         59/59   exit 0
validate_citations.py PASS    exit 0   731 citation tokens
lint_canon.py         CLEAN   exit 0   0 records
```

## Corpus state

1 episode, 0 outside sources, 0 canon records. The one episode is the shipped
32-line worked sample "The Study Room Variable". Real S01E04 is "Social
Psychology". A green gate is evidence about plumbing, not about content.

## Defects found and fixed

- **Apostrophe in generated ids.** The citation normalizer keeps apostrophes so
  quote matching works, which pushed `episode's` into a record id its own pattern
  refused. Survived 52 green unit tests, failed on the first live command. Fixed
  in the slug builder alone; the id builder now validates its own output.
- **Shell pipe hiding exit codes.** `python3 x.py | tail -3; echo $?` reports
  tail's status. Exit codes now measured with no pipe.

## Next

Phase 3, the ingest backlog. Real transcripts, then Harmon interviews and
commentary, then outside-show comparison episodes. One source per pass, four
gates green each time.
