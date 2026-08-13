# Community Canon Engine

Built 13 August 2026. Companion page to `~/New Desktop/community-agentic-os`,
operator skill `/community-os`.

## What it is

A citation-gated corpus for the Community investigation. Phase 1 made the outside
corpus citable (Harmon interviews, DVD commentary, articles, other shows'
episodes). Phase 2 made findings accumulate across episodes instead of being
scoped to one. Phase 3 is the ingest, now four real episodes deep.

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
validate_citations.py PASS    exit 0   4 episodes, 3,088 tokens
lint_canon.py         CLEAN   exit 0   2 records, 5 tokens
```

## Corpus state

4 real episodes, 1,313 transcript lines, 0 outside sources, 1 claim, 1
hypothesis.

| Code | Episode | Lines | Scenes |
|---|---|---|---|
| S01E04 | Social Psychology | 367 | 8 |
| S02E09 | Conspiracy Theories and Interior Design | 255 | 1 |
| S02E19 | Critical Film Studies | 169 | 1 |
| S03E04 | Remedial Chaos Theory | 522 | 11 |

The shipped worked sample used to occupy S01E04, so `[S01E04:L10]` named a real
episode while pointing at fiction. Real S01E04 is Social Psychology and now holds
that code. The fixture evidence is parked, not deleted.

## Defects found and fixed

- **Apostrophe in generated ids.** The citation normalizer keeps apostrophes so
  quote matching works, which pushed `episode's` into a record id its own pattern
  refused. Survived 52 green unit tests, failed on the first live command.
- **Shell pipe hiding exit codes.** `python3 x.py | tail -3; echo $?` reports
  tail's status. Exit codes now measured with no pipe.
- **Five real quotes reported as fabrications.** `cite_quote` rewrites an inner
  double quote as an apostrophe, and `normalize` stripped double quotes while
  keeping apostrophes, so producer and checker disagreed. Shipped with four
  rejection tests, because the change loosens matching.
- **A wiki category tag became a character.** The converter delinked
  `[[Category:...]]` before dropping housekeeping links, so the ingester read
  `Category:` as a speaker and wrote a fake speaker CATEGORY into evidence.
- **A 539-line transcript with zero speakers passed the gate.** Two speaker
  shapes exist on the wiki and only one was handled, so every line lost its
  attribution while still citing real line numbers. The importer now refuses at
  zero speakers and below 80% accounted.
- **A healthy transcript read as 29% broken.** A speech broken around a stage
  direction resumes with no prefix and the ingester inherits the speaker, so
  those continuation lines are attributed. The metric now counts dialogue plus
  stage direction plus continuation.
- **A stale dossier surviving a re-ingest.** `dossier.md` is a merge no tool
  produces, so re-analyzing left it describing the old evidence: 110 citations
  into lines that no longer existed. Analyze now parks it.

## Ingesting

```bash
python3 import_fandom.py --list
python3 import_fandom.py --title "Remedial Chaos Theory" --ep S03E04
```

Coverage is partial. 27 transcripts exist across seasons 1, 2, 3, 4 and 6.
**Season 5 has none**, which is what keeps the quarantined `imports/`
adjudication blocked, since it needs S05E01 to S05E03.

## Next

Remaining wiki transcripts, then Harmon interviews and commentary via
`ingest-source`, then outside-show comparison episodes. Season 5 needs a
different source.
