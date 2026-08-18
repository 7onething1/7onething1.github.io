# David Sliker Twitter Recovery: Recovery Report

Generated 2026-08-18T04:51:20+00:00

## Contents

1. [Identity resolution](#identity-resolution)
2. [What the corpus holds](#what-the-corpus-holds)
3. [Preservation classes](#preservation-classes)
4. [Coverage by year](#coverage-by-year)
5. [Profile snapshots and the coverage benchmark](#profile-snapshots-and-the-coverage-benchmark)
6. [Source families](#source-families)
7. [Method](#method)
8. [Gaps and remaining leads](#gaps-and-remaining-leads)

## Identity resolution

The recovery seeded on **David Sliker at @davidsliker** and treated the
aggregator spelling `davidslikre` as indexing noise. Both decisions now
carry archive evidence rather than assumption.

| Handle | Confidence | Verdict | First | Last |
|---|---|---|---|---|
| `davidsliker` | CONFIRMED | SOLE CONFIRMED HISTORICAL HANDLE | 2010-02-01 | 2021-08-29 |
| `davidslikre` | REFUTED | INDEXING NOISE, EXCLUDED | n/a | n/a |
| `davidsliker (2025 account)` | EXCLUDED | DIFFERENT ACCOUNT, SAME USERNAME | 2025-01-21 | n/a |

**`davidsliker`: SOLE CONFIRMED HISTORICAL HANDLE**

Evidence: Wayback profile snapshots 2015-02-18 and 2015-08-18 both state 'Joined February 2010'. Local saved-page headers from c.2012 and c.2014 carry the same handle, display name and IHOPKC bio. Internet Archive holds 764 captures of twitter.com/davidsliker/status/* whose snowflake IDs run 2011-02-27 to 2022-06-25. His own site davidsliker.com linked to twitter.com/davidsliker in every sampled yearly snapshot from 2014-05-17 through 2024-01-12, and carries no Twitter link by 2025-03-04.

Created February 2010. Tweet counts observed across snapshots: 4,801 (c.2012 saved page), 7,326 (c.2014 saved page), 8,131 (2015-02-18), 8,373 (2015-08-18). The bio had changed by 2022 to promote 'The Nations Rage'. Latest archived post recovered is 2021-08-29. No earlier or alternate handle surfaced in any source family.

**`davidslikre`: INDEXING NOISE, EXCLUDED**

Evidence: Internet Archive CDX returns zero captures for twitter.com/davidslikre* and twitter.com/davidslikre/status/*. The davidsliker spelling returns 769 on the same query. Twelve yearly snapshots of his own website never link it, and no contemporaneous source uses it.

Originated in a people-search aggregator listing and reads as a transposition of 'sliker'. Quarantined, so no record carrying this spelling enters the corpus. The 'joined March 28, 2014' date attached to it is contradicted by the February 2010 join date on the real account.

**`davidsliker (2025 account)`: DIFFERENT ACCOUNT, SAME USERNAME**

Evidence: The current X profile reports a January 2025 creation date with a single post, which cannot be the account that held 8,373 tweets in August 2015.

The historical account left the platform and the username was registered again later. The identity gate excludes anything dated on or after 2025-01-21, and zero records in the corpus fall on or after that date.

## What the corpus holds

| Measure | Count |
|---|---|
| tweets total | 6,522 |
| with exact text | 6,522 |
| with tweet id | 414 |
| confirmed historical | 6,469 |
| identity unresolved | 53 |
| excluded new account | 0 |
| noise suspect | 0 |
| originals | 4,848 |
| replies | 971 |
| retweets | 654 |
| sources | 20,783 |
| profiles | 11 |
| captures | 4,813 |
| media | 4,082 |
| id queue | 1,084 |
| id queue unrecovered | 390 |
| leads open | 9 |
| searches | 18 |

## Preservation classes

| Class | Count | Meaning |
|---|---|---|
| `EXACT_COPY` | 6,060 | a contemporaneous capture reproduces the complete post with clear attribution |
| `EXACT_PRIMARY` | 413 | archived Twitter itself preserves the complete post |
| `IDENTITY_UNRESOLVED` | 49 | attribution is not established |

## Coverage by year

| Year | Recovered | With text | With tweet ID |
|---|---|---|---|
| 2010 | 1,363 | 1,363 | 0 |
| 2011 | 1,324 | 1,324 | 11 |
| 2012 | 1,853 | 1,853 | 6 |
| 2013 | 1,512 | 1,512 | 4 |
| 2014 | 18 | 18 | 2 |
| 2015 | 5 | 5 | 5 |
| 2017 | 1 | 1 | 1 |
| 2018 | 3 | 3 | 3 |
| 2019 | 34 | 34 | 34 |
| 2020 | 205 | 205 | 205 |
| 2021 | 96 | 96 | 96 |
| 2022 | 44 | 44 | 44 |

## Profile snapshots and the coverage benchmark

Tweet counts on a profile include replies and retweets and fall when
posts are removed, so they are read as approximate benchmarks and never
as denominators.

| Snapshot | Tweets | Followers | Following | Source | Website |
|---|---|---|---|---|---|
| None | 7,326 | 8804 | 126 | local_capture | davidsliker.com |
| 2012 | 4,801 | 5240 | 90 | local_capture | http://www.ihop.org/resources/author/davidsl |
| 2015-02-18 | 8,131 | 9985 | 164 | wayback | n/a |
| 2015-08-18 | 8,373 | 10414 | 170 | wayback | n/a |
| 2022-01-13 | 472 | n/a | n/a | wayback | n/a |
| 2022-04-21 | 10 | n/a | n/a | wayback | n/a |

## Source families

| Family | Provenance records | Distinct tweets |
|---|---|---|
| local_capture | 20,010 | 6,108 |
| wayback | 748 | 413 |
| article | 12 | 12 |
| site_link_evidence | 12 | 0 |
| search | 1 | 1 |

| Search family | Queries | Rows returned | New tweet IDs |
|---|---|---|---|
| article | 4 | 12 | 0 |
| personal_site | 1 | 12 | 0 |
| reddit | 1 | 2 | 0 |
| wayback | 12 | 10,471 | 707 |

## Method

- Every tweet carries its own provenance rows, so one post can rest on a saved page, an archived status and an article at once.
- Timestamps from snowflake IDs are stored apart from dates reported by a source. No timestamp is ever invented.
- Saved pages that printed a bare day and month carry a year taken from the timeline's own descending order, and every such record is marked as inferred.
- A record whose author is not established stays `IDENTITY_UNRESOLVED` rather than joining the corpus.
- The identity gate excludes anything dated on or after 2025-01-21, the creation date of the account now holding the username.

## Gaps and remaining leads

| Type | Target | Reason |
|---|---|---|
| other_author_tweet | `1740884631682011446` | oEmbed attributes this to @EricVolz. The post is not his; kept as context about him and ex |
| other_author_tweet | `1740579858223354074` | oEmbed attributes this to @gabriel_hancock. The post is not his; kept as context about him |
| other_author_tweet | `1742742415574753747` | oEmbed attributes this to @malachiobrien. The post is not his; kept as context about him a |
| other_author_tweet | `1742747370394091643` | oEmbed attributes this to @DunningAwen. The post is not his; kept as context about him and |
| blocked_route | `archive.today` | secondary archives gate automated access; query by hand or through a browser session |
| open_family | `threadreaderapp.com` | thread roots are only discoverable once conversation IDs are recovered from archived pages |
| gap | `2015-2022 body recovery` | the local captures stop in 2014, so the middle years rest entirely on Internet Archive cov |
| gap | `saved-page tweet IDs` | 6,000+ posts have verbatim text and no status ID; matching them to IDs is the next pass |
| rate_limited | `arctic-shift comment sweeps` | r/Christianity, r/Exvangelical and r/exchristian comment searches hit the mirror's 422 slo |
