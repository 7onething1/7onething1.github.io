# Community S01E09 · Debate 109 · annotation sheet

Full script with speaker names, every line a note box.

- 248 speaker lines, 14 scenes, 6 act markers
- Live: https://7onething1.github.io/community-annotate-s1e9/
- Companion: https://7onething1.github.io/community-s1e9-future-seeds/
- Sibling pages: /community-annotate-s1e3, /community-annotate-s1e4, /community-annotate-s1e5 (on drwu-htmls.vercel.app)

## Line numbering does not match the future-seeds page

The L-numbers on this sheet count speaker lines in the **production draft**. The
S1E9 future-seeds page cites the **aired 373-line springfield script**
(`tv-scripts/text/Community-S01E09.txt`). The two numbering schemes are
independent, so `L8` here is not `L8` there. Both pages say so on their face.
Reconciling them would mean aligning draft dialogue to aired dialogue line by
line, and the rewrites between the two make some of that mapping a guess, so it
is deliberately not attempted here.

## Source and provenance

Speaker attribution comes from the **production script** (Pink Revised Draft
10/9/09, written by Tim Hobert, directed by Joe Russo, Sony Pictures Television):
https://www.tv-calling.com/scripts/TV_Comedies/Community_1x09.pdf

Every speaker name is quoted from the script's own character cues. Nothing is
inferred. The parse is positional, keyed on the screenplay's fixed indent
columns (cue 34, dialogue 21, parenthetical 26, action 9, scene heading 0), so
attribution is mechanical rather than judged.

**Why this source and not the wiki.** The Community Sitcom Fandom wiki carries
speaker-tagged transcripts for only 7 season-1 episodes (E01-E06, E08), verified
live against its API on 2026-07-29. Debate 109 is not one of them. The two
transcripts that do exist for this episode, the springfield dump on disk at
`tv-scripts/text/Community-S01E09.txt` and the Forever Dreaming / TvT transcript,
are aired dialogue with **no speaker attribution at all**, so neither could
support this page without guessing who talks. The production script could.

**Caveat, stated on the page too:** this is a pre-broadcast draft. Some lines
were rewritten or cut before air, so wording can differ from the aired episode.

Parse verified: all 594 dialogue-column lines in the source PDF appear in the
output, zero dropped.

Local source copy: `~/Projects/tv-scripts/text_speakers/Community-S01E09_prodscript.txt`
(named `_prodscript`, not `_speakers`, to keep it distinct from the fandom-sourced
files and from the `_inferred` guesses).

## Brandon's annotation pass, checked

Half done, stopped at L62 of 248. All 9 notes are baked into
the page, each with a verdict from grepping 110 Community episode scripts, ~/Projects/tv-scripts/text/.

| line | note | verdict |
|---|---|---|
| L3 | This is the arsistocrats joke | **reading**, outside reference |
| L13 | this is called back to in the britta hangover bit later episodes | **confirmed**, confirmed, pays off at L28 |
| L14 | first of many interventions / reverse interventions | **confirmed**, confirmed runner |
| L17 | later in the digit episode where pierce uses britta to take down subway with dirty sex acts, he will say he programmed her mind. also he will tell jeff and his lawyer friend he used to lead seminars in mind manipulator. | **confirmed**, confirmed, both halves, corrected 2026-07-29 |
| L21 | reoccuring joke 'he's right here' | **partly confirmed**, weak as a marked runner |
| L28 | first of many pointy face jokes | **partly confirmed**, the payoff of L13, and the last one |
| L29 | Established abed's connection to the a/v club | **partly confirmed**, right material, earlier seed |
| L44 | first talk of reserving rooms comes back with 2nd german invation | **confirmed**, confirmed, and your ordinal is right |
| L62 | huge underdetected later in a few places including puppet episode confession he's so narcissitic he is more into lusting for himself than the women he sleeps with. | **partly confirmed**, arc confirmed, puppet line unfindable |

Confirmed outright: L14 (intervention runner, S02E15 + S03E12), L44 (room
possession pays off in S04E04, and it is the second German appearance as he said,
per S04E04 L25 pointing back at the S03E09 foosball scholarship), and L17.

**L17 was corrected on 2026-07-29 after Brandon supplied the quote.** The first
pass searched S03E13 for program, mind, hypno and conditioned, and reported the
Pierce brainwashing claim as absent. The line uses the verb *implanted*, so the
query missed it. The scene is S03E13 L222-L224: "You never lived anywhere." /
"You're a weapon designed for sex." / "You only think you lived in New York
'cause I implanted your memories." Britta's "Oh, Pierce, stop it!" at L225 fixes
the speaker. Lesson recorded on the card itself: a narrow grep produced a false
absence, so the two remaining not-found verdicts (L13, L62) now list the exact
terms searched.

L13 and L28 resolved 2026-07-30. Brandon: the L13 callback is "the other pointy
face", so the pair is a setup at L13 and a payoff at L28, both Britta at Jeff,
the second delivered in baby talk per the draft's parenthetical. A wide search
for `pointy` across all 110 scripts returns four hits: these two, plus S06E12
L94 "pointy ninja rocks" and S05E02 L329 "my bills are a little pointy", both
unrelated. The only correction left is the count on L28, which is the second and
last rather than the first of many.

**Standing caveat on every "not findable" verdict.** The corpus is
caption-derived: no speaker names, paraphrased lines, dropped lines. A miss means
not findable in that transcript, never that it does not happen in the show.
Confirmations are strong, absences are weak.

Raw export preserved at `notes-brandon.json` in this folder.

## Speakers on the sheet

Abed, Annie, Annie / Crowd / Judges, Annie / Pierce / Shirley, Britta, Campus cop, Chang, Dean Pelton, Everyone, Jean, Jeff, Other Pierce, Other Troy, Pierce, Richard, Shirley, Shirley & Abed, Simmons, Troy, Whitman

## Build

`parse_s1e9.py` then `build_s1e9.py` (session scratchpad). No kid mode: retired
2026-07-13.
