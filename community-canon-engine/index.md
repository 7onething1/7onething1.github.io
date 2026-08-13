# Community Canon Engine

Built 13 August 2026. Companion page to `~/New Desktop/community-agentic-os`,
operator skill `/community-os`.

## What it is

A citation-gated corpus for the Community investigation. Phase 1 made the outside
corpus citable (Harmon interviews, DVD commentary, articles, other shows'
episodes). Phase 2 made findings accumulate across episodes instead of being
scoped to one. Phase 3 is the ingest backlog, now underway.

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

## Gate state

```
test_source_gate.py   37/37   exit 0
test_canon.py         59/59   exit 0
validate_citations.py PASS    exit 0   S01E04 731 + S02E09 358 tokens
lint_canon.py         CLEAN   exit 0   2 records, 5 tokens
```

## Corpus state

2 episodes, 0 outside sources, 1 claim, 1 hypothesis. One episode is real:
S02E09 "Conspiracy Theories and Interior Design", 255 lines, ingested from the
fandom wiki API. The other is the shipped 32-line worked sample "The Study Room
Variable", and everything derived from it is tagged as fixture-derived. A green
gate is evidence about plumbing, not about content.

## Defects found and fixed

- **Apostrophe in generated ids.** The citation normalizer keeps apostrophes so
  quote matching works, which pushed `episode's` into a record id its own pattern
  refused. Survived 52 green unit tests, failed on the first live command. Fixed
  in the slug builder alone; the id builder now validates its own output.
- **Shell pipe hiding exit codes.** `python3 x.py | tail -3; echo $?` reports
  tail's status. Exit codes now measured with no pipe.
- **Five real quotes reported as fabrications.** `cite_quote` rewrites an inner
  double quote as an apostrophe, and `normalize` stripped double quotes while
  keeping apostrophes, so producer and checker disagreed. A word-boundary
  apostrophe is now treated as a quotation mark and dropped; an intra-word one is
  a contraction and stays. Shipped with four rejection tests, because the change
  loosens matching.
- **A wiki category tag became a character.** The converter delinked
  `[[Category:...]]` before dropping housekeeping links, so the ingester read
  `Category:` as a speaker and wrote a fake speaker CATEGORY into evidence.
  Housekeeping links are dropped first now; episode re-ingested, old copy parked.

## Transcript ingest recipe

The fandom wiki API returns raw wikitext with no scraping:

```
https://community-sitcom.fandom.com/api.php?action=parse&page=<Title>/Transcript&prop=wikitext&format=json&formatversion=2
```

Order matters. Drop template blocks, then drop `[[Category:]]`, `[[File:]]` and
`[[Image:]]` **before** delinking, then delink and strip the line-break and bold
markup. Delinking first turns a category tag into a fake speaker line.

Two limits of the source: fandom transcripts carry no scene markers, so an
episode ingests as a single scene; and one character can be named several ways,
so S02E09 holds both `PELTON` (34 lines) and `DEAN PELTON` (1). Do not merge
those by guessing.

## Next

More real episodes, then Harmon interviews and commentary via `ingest-source`,
then the outside-show comparison episodes. One source per pass, four gates green
each time.
