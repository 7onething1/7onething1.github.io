# Appleseed Cast, four tabs arranged for three guitars

Built 2026-09-07 on MacBookPro from the live Songsterr exports pulled the same
day by the chat titled "Zappa paren fix audit".

## What was asked

Take the single guitar part in each tab, arrange it across two or three
guitars, keep every hand inside five frets, and allow a string skip only when
the shape is an octave. Compare the result against other transcriptions online
where any exist.

## What the source files actually looked like

Every one of the four tabs already carried two guitar staves. Not one beat on
any staff exceeded five frets, so the five-fret rule was already satisfied
before a single edit. The defect was the other one: 700 beats across the eight
staves attacked two or more strings with an unused string between them, and
none of those were octave shapes.

| song | staves | beats | beats with a string skip |
|---|---|---|---|
| Secret s6388915 | 2 | 1502 | 264 |
| Kilgore Trout s6389251 | 2 | 1141 | 90 |
| Blind Man's Arrow s6389274 | 2 | 1402 | 294 |
| A Tree For Trials s6389335 | 2 | 342 | 52 |

## How the arrangement works

A skip means the pick crossed a string it never struck. Two guitarists collapsed
onto one staff produce exactly that shape, so the repair is to give the notes
back to a second pair of hands rather than to re-finger the beat.

Each failing beat is tested for the smallest set of notes whose removal leaves
the rest playable exactly where the source wrote them. Those notes move to a
third guitar staff. Nothing else is touched, so a healthy beat keeps the string
and the fret the transcription gave it.

Three guitars was the ceiling, and three was never needed for a single beat: the
solver reported zero beats requiring a third hand, and zero beats with no legal
shape at all. Guitar 3 exists to receive what will not fit on two hands at one
instant, and it carries between 42 and 202 beats per song.

## Result

| song | guitars after | rule-breaking beats before | after | share fixed |
|---|---|---|---|---|
| Secret | 3 | 264 | 25 | 239 of 264 |
| Kilgore Trout | 3 | 90 | 1 | 89 of 90 |
| Blind Man's Arrow | 3 | 294 | 31 | 263 of 294 |
| A Tree For Trials | 3 | 52 | 2 | 50 of 52 |
| **total** | | **700** | **59** | **641 of 700** |

Guitar 3 finished clean on all four songs: zero skips, zero spans past five
frets, zero unplayable beats.

### Both tier-1 gates pass on all four

`impossible_gate.py --source BEFORE AFTER` reports PITCH GATE PASS and POSITION
GATE PASS for every file. No pitch left the music, no pitch appeared that the
source never had, and every note in a beat that was already healthy kept its
original string and fret.

## Subdividing Guitar 3, the second route

An earlier build stopped at 109 remaining beats, and 87 of those failed for one
reason: Guitar 3 borrows its bar skeleton from an original staff, so it had no
beat at that onset to receive anything. The restaffing chain that would normally
solve this (`table_to_midi.py` and the retime tool) is not on this Mac, verified
by direct search.

The other route needs no such tool. Every Guitar 3 beat that carries no shed
notes is a rest, and cutting a rest into shorter rests changes nothing that
sounds. So the missing onset is created by splitting the rest that contains it,
and the shed notes land there. A beat that is sounding is never cut.

That took the remaining count from 109 to 59.

## What is still open

59 beats still attack across an unused string, out of 4961 beats across the
twelve staves.

| reason | count |
|---|---|
| the rest containing the onset would not divide into plain note values | 33 |
| no removal leaves both halves playable | 19 |
| Guitar 3 already holds a full hand at that instant | 7 |

The first group wants tuplet-aware subdivision, which is the rhythm red zone
where a wrong rational beat position corrupts the bar. That one stays parked
until it can be done against the retime chain.

## Comparison against independent transcriptions

Songsterr holds exactly one transcription of each of these four songs, and all
four are ours, so Songsterr offers nothing to compare against. Ultimate Guitar
carries three independent guitar transcriptions.

| source | song | declared tuning | capo | widest span measured | columns past five frets |
|---|---|---|---|---|---|
| UG 578874 | A Tree For Trials | D A D G B E | none | 0 | 0 |
| UG 208140 | Blind Man's Arrow | none declared | none | 3 | 0 |
| UG 977078 | Blind Man's Arrow | none declared | 6 | 22 | 4 |

Two findings come out of that.

**Our A Tree For Trials tuning is independently confirmed.** Our file declares
pitches 38 45 50 55 59 64, which is D A D G B E. The UG transcription declares
the same tuning in words.

**No independent transcription supports capo 7 on Blind Man's Arrow.** One
declares no capo, one declares capo 6. Our file declares capo 0. The rejected
capo 7 that the skill keeps as its standing proof of an ergonomically attractive
and musically wrong answer stays rejected.

The human transcribers also stayed inside five frets in the material that parsed
cleanly, and they wrote string skips of their own, which is the same reading the
arrangement takes: a skip is ordinary in a tab and often means a second player.

No tab content is reproduced anywhere here. The comparison reads tuning, capo,
fret spans and skip counts, and discards the notation.

## Files

The four arranged Guitar Pro files sit under `files/` on this page and open in
Guitar Pro, TuxGuitar or any GP7 reader.

## Provenance

- Source exports: `~/Projects/_outputs/appleseed-allparts/_live_export_2026-09-07/`
- Arranger and scorer: `~/Projects/_outputs/appleseed-allparts/arrange-2026-09-07/tools/`
- Gate: `~/.claude/skills/impossible-guitar-parts/impossible_gate.py`
