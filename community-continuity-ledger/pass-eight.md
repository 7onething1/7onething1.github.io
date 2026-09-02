# Community continuity ledger, pass eight

The ledger asked for granular character tracks: Annie's binders, Shirley's baking, Britta's activist recurrences, Troy's inherited objects, Jeff's phone and car, Chang's changing titles, Dean entrances, study room objects, paintball repetitions, and background character persistence. This pass ran that sweep across all 28 episodes and then tested whether the results mean what the category names claim.

Nine of the ten categories produced hits. Most of them cannot support the claim their name makes, and the measurement says so precisely.

## The measurement that decides it

A keyword sweep finds a topic. Whether the named character is the one speaking is a separate question, and subtitles carry a speaker on almost no lines. The audit in `track_audit.py` counts, for every track hit that does carry a speaker tag, whether the tag matches the character the track is named for.

Across nine character tracks the sweep returned 169 hits. Two of those carry any speaker at all, which is one and two tenths of a percent. Both of the two name a speaker other than the track's character. One is a narrator, the other a guest character.

The attribution rate is zero. Not low, zero. The remaining 167 hits are unattributed and cannot support a claim about who said anything.

## The split that survives

A line naming a character is evidence about that character whoever happens to speak it. A line about an object is not. That distinction separates the categories cleanly.

The Spanish honorific carries Chang's own name, so every hit is about Chang whoever utters it. A binder does not carry Annie's name, so a binder hit is about a binder.

Testing the same sweep against name-bearing patterns produced eight usable tracks. Those are reported below as confirmed. The object-keyed categories are reported as topic frequency and nothing more.

## Categories the corpus supports

| Track | Hits | Episodes | Basis |
|---|---|---|---|
| Jeff by surname | 58 | 24 of 28 | Name-bearing |
| Hawthorne by surname | 20 | 9 | Name-bearing |
| Leonard | 17 | 5 | Name-bearing |
| Dean Pelton by name | 16 | 7 | Name-bearing |
| Chang honorific and nicknames | 13 | 7 | Name-bearing |
| Star-Burns | 12 | 7 | Name-bearing |
| Magnitude | 10 | 2 | Name-bearing |
| The Winger construction | 3 | 3 | Name-bearing |

Background character persistence, which the ledger listed as a category, is the strongest result here. Star-Burns appears by name in seven episodes and Leonard in five, spread across both seasons in evidence. Those two are load-bearing recurring figures rather than one-off jokes, and the counts support the category without needing a single attribution.

The surname result is worth its own line. Jeff is referred to by his last name in 24 of the 28 episodes. No other character comes close, and the pattern is a naming convention the group applies to him specifically.

## Categories the corpus cannot support

| Category asked for | Hits | Speaker-tagged | Verdict |
|---|---|---|---|
| Shirley's maternal tone | 21 | 0 | Topic only |
| Jeff's phone and car | 18 | 0 | Topic only |
| Shirley's baking | 16 | 0 | Topic only |
| Abed as camera | 15 | 0 | Topic only |
| Britta's activism | 10 | 0 | Topic only |
| Troy's inherited objects | 4 | 0 | Topic only |
| Annie's binders and bags | 2 | 0 | Topic only |

Three spot-checks show what the raw counts hide. A greeting the sweep filed under Shirley's maternal tone sits inside Jeff's entrance sequence at S01E02 00:02:07. A line filed under Pierce's father, at S01E08 00:04:36, belongs to whoever offers Jeff a place to stay, and the reply two cues later comes from someone in the dorms. A binder line filed under Annie, at S01E02 00:02:48, is Jeff describing his own life while asking Annie for her notes.

That last one is the clearest. The sweep credited Annie with a line whose entire function is Jeff performing emptiness at her to obtain her Spanish notes, which pass four had already documented as his twenty-minute maneuver.

## One real find came out of the sweep

The Jeff money file gains two more citations, and the earliest is the most useful.

At S01E08 00:04:32, Jeff has been locked out over unpaid fees. Somebody asks him directly how he intends to get the money. The answer is a third-person claim about what Winger has, phrased as capability rather than as funds.

The same construction returns at S02E17 00:11:25, where a speaker tag confirms Troy, and again at S02E19 00:12:30 in the man-of-means line pass five recorded.

Three instances across two seasons, all spoken by other people about Jeff, all substituting reputation for a specific resource. The first arrives as an answer to a direct question about money and answers it without naming a source. Status: confirmed pattern, three instances, feeds the unresolved Jeff finances file.

## What this pass changes about the method

Two rules were already in force: a claim needs a citation, and a negative needs two probes. This pass adds a third.

A track needs to be self-attributing or it is topic frequency. A keyword that names a character carries its own attribution. A keyword that names an object carries none, and counting object hits under a character's name produces a number that looks like evidence and is not.

The ledger's granular category list stays open. Seven of its entries need speaker-attributed transcripts, which the discs do not provide.
