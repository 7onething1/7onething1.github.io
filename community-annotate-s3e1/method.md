# Brandon's annotation method, reverse-engineered from his S01E09 pass

Nine notes, stopped at L62 of 248. All nine are the same move made nine ways: **find the earliest instance of something the show will use again, and say
where it goes.** He is not summarizing the scene. He is marking direction.

## The taxonomy

| # | Type | His example (S01E09) |
|---|---|---|
| 1 | Outside reference, spotted by STRUCTURE rather than quote | L3 "This is the arsistocrats joke" on a filthy shaggy-dog joke that never finishes |
| 2 | Mechanic repeat, the same situation runs again later | L13, Jeff airs Britta's private business, which is the drunk dial in S01E16 |
| 3 | Runner, with the inversion called out | L14 "first of many interventions / **reverse** interventions" |
| 4 | Forward payoff to a specific later episode, often two at once | L17 the digit episode AND the lawyer-friend seminars line |
| 5 | Recurring joke SHAPE | L21 "reoccuring joke 'he's right here'" |
| 6 | Phrase runner | L28 "first of many pointy face jokes" |
| 7 | Character establishment, first evidence of a trait or affiliation | L29 "Established abed's connection to the a/v club" |
| 8 | Object or ritual the show later builds a plot on | L44 room reservation, which becomes the German invasion |
| 9 | Under-noticed trait, seeded then paid off | L62 "huge underdetected later in a few places" |

## The four rules underneath it

**Rule 1. Cardinality and direction, always.** Every note says which instance this
is and which way it points. "first of many", "later in", "comes back with",
"Established". A note without direction is a summary, and he never writes those.

**Rule 2. Call the later bit whatever the SHOW calls it, or whatever fans call it.**
"the digit episode", "puppet episode", "2nd german invation", "the britta
hangover bit". He never cites an episode code. He cites the bit by its handle.

**Rule 3. A seed is a mechanic. The wording is incidental.** L13 is not "pointy face recurs". It
is "Jeff broadcasts Britta's private business and she has to get her standing
back", which is why it pays off in a scene containing none of the same words.

**Rule 4. Flag the under-noticed one.** L62 is marked "huge underdetected". Part
of the value is ranking, saying which seed nobody writes about.

## What this cost me, twice

Rule 3 is the one I broke. Two false absences on the same sheet:

| his word | the show's word | what I reported |
|---|---|---|
| "programmed her mind" | `implanted` (S03E13 L224) | "no line survives in that transcript" |
| "britta hangover bit" | `drunk dial` (S01E16) | "one hangover beat exists in the whole corpus" |

Both times I searched **his** vocabulary, found nothing, and reported the empty
result as a finding. The fix is mechanical and it is below: stop starting from a
guessed word. Start from what actually recurs in the scripts, then read.

## The executable version

`seed_detector.py` inverts the search. For a target episode it finds every phrase
whose FIRST appearance in air order is in that episode and which returns in two
or more later episodes. That produces candidates in the show's own vocabulary,
which is exactly what my hand-written greps kept missing. Judgment still picks
which candidates are real seeds, and mechanic-level seeds (type 2) still need a
human read, but nothing is invented and nothing depends on me guessing the word.
