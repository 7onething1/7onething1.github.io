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

## Speakers on the sheet

Abed, Annie, Annie / Crowd / Judges, Annie / Pierce / Shirley, Britta, Campus cop, Chang, Dean Pelton, Everyone, Jean, Jeff, Other Pierce, Other Troy, Pierce, Richard, Shirley, Shirley & Abed, Simmons, Troy, Whitman

## Build

`parse_s1e9.py` then `build_s1e9.py` (session scratchpad). No kid mode: retired
2026-07-13.
