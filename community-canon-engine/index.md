# Community Canon Engine

Built 13 August 2026. Companion page to `~/New Desktop/community-agentic-os`,
operator skill `/community-os`.

## What it is

A citation-gated corpus for the Community investigation. Phase 1 made the outside
corpus citable (Harmon interviews, DVD commentary, articles, other shows'
episodes). Phase 2 made findings accumulate across episodes instead of being
scoped to one. Phase 3 ingested every transcript the fandom wiki has.

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
test_source_gate.py   41/41   exit 0
test_canon.py         59/59   exit 0
validate_citations.py PASS    exit 0   27 of 27 episodes, 19,800 tokens
lint_canon.py         CLEAN   exit 0   2 records, 5 tokens
```

## Corpus state

27 real episodes, 7,212 transcript lines, 19,800 certified citation tokens,
0 outside sources, 1 claim, 1 hypothesis. That is every transcript the fandom
wiki carries, across seasons 1, 2, 3, 4 and 6.

Two are truncated at source and flagged PARTIAL by `os.py list`: S01E05 at 34
lines and S02E04 at 52, against a median of 264. Those support a claim about what
is present and never about what is absent. **Season 5 has no transcripts at
all**, so that stretch of the show is not in evidence and the quarantined
`imports/` adjudication stays blocked.

## Defects found and fixed

- **Apostrophe in generated ids.** The citation normalizer keeps apostrophes so
  quote matching works, which pushed `episode's` into a record id its own pattern
  refused. Survived 52 green unit tests, failed on the first live command.
- **Shell pipe hiding exit codes.** `python3 x.py | tail -3; echo $?` reports
  tail's status. Exit codes now measured with no pipe.
- **Five real quotes reported as fabrications.** The quote builder rewrote an
  inner double quote as an apostrophe while the normalizer stripped double quotes
  and kept apostrophes, so producer and checker disagreed.
- **A wiki category tag became a character.** The converter delinked
  `[[Category:...]]` before dropping housekeeping links, so the ingester read
  `Category:` as a speaker and wrote a fake speaker CATEGORY into evidence.
- **A 539-line transcript with zero speakers passed the gate.** Two speaker
  shapes exist on the wiki and only one was handled, so every line lost its
  attribution while still citing real line numbers.
- **A healthy transcript read as 29% broken.** A speech broken around a stage
  direction resumes with no prefix and the ingester inherits the speaker, so
  those continuation lines are attributed.
- **A stale dossier surviving a re-ingest.** `dossier.md` is a merge no tool
  produces, so re-analyzing left it describing the old evidence: 110 citations
  into lines that no longer existed.
- **The house voice ruleset fabricating quotations.** The essay tool scrubs
  contrastive `while` from its prose and ran over the citation token too, so
  "peed on my car while I was parking it" was published as "peed on my car, I was
  parking it". Three episodes failed on quotes that were genuine until the style
  filter touched them. The scrubber now cleans only between tokens.
- **An apostrophe standing in for a double quote.** In `she got "B"s` the
  substitution yields `'B's`, whose second apostrophe reads as a contraction and
  survives normalization while the evidence side became `b s`. It substitutes a
  space now, matching the normalizer.

## Ingesting

```bash
python3 import_fandom.py --list
python3 import_fandom.py --title "Remedial Chaos Theory" --ep S03E04
```

The pages are not uniform. Two speaker shapes, `<poem>` wrappers, galleries,
Cast sections, both bracket styles for stage directions, curly quotes, and
`== Act 2, Scene 3 ==` headings that become real scene boundaries. The importer
refuses at zero speakers and below 80% of content accounted for.

## Next

Harmon interviews and DVD commentary via `os.py ingest-source`, then the
outside-show comparison episodes. Season 5 needs a source that is not this wiki.
