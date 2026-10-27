# Electric or acoustic, read off the Kinda Due tab

Source: the live Glostik archive, `drwu-htmls.vercel.app/glostik-songs/data.json`, built 2026-10-26.
809 songs, 3,874 plays, 98 streams. Record begins 2026-06-02.

## What the question was

For the Kinda Due tab, which songs are better electric than acoustic, and which songs are not on
that list but belong in the same pile.

## Reproducing Kinda Due

The page computes the tab itself. The rule, lifted from `poster/index.html`:

    not retired, last play inside the record, plays >= 2, 15 <= days < 365

That returns **347**, which matches the tab's own badge count exactly (verified in the live DOM:
`Rare 279, Overdue 62, Kinda due 347, Bustouts 87, Debuts 12`). The local copy of the data under
`~/Projects/drwu-htmls/public/glostik-songs/` is stale (689 songs, built 2026-09-22), so everything
here was pulled live.

## Measured, not guessed

The stream log labels its own nights. Four of 98 streams are the garage run, three titled Electric:

| date | title |
|---|---|
| 2026-09-28 | Electric, Live From Our Garage, Live With Jon |
| 2026-09-30 | Electric, Live From Our Garage |
| 2026-10-04 | Electric, Live From Our Garage, With Jon |
| 2026-10-05 | Live From Our Garage |

Ten more streams are titled Acoustic. 106 of 3,874 plays happened on the garage nights, a 2.7%
baseline, so garage-exclusivity at one play proves little on its own. Eight songs are garage-only
and all eight have a single garage play, which is what that baseline predicts. The log does prove
which songs were played with the rig up, and that is the only measured claim on the page.

## The finding

**31 of the 347 are in Kinda Due because the rig came down, not because they went cold.** Every one
sits at 15 to 28 days, which is the gap since the garage run ended 5 October. Mr. Crowley at 28 days,
Suicide Solution at 22, Comfortably Numb at 21, Weekapaug Groove at 26. Playing them acoustic is the
wrong repair for that.

**142 more are electric-first and have no garage play on record.** Ratt's Round and Round leads at
143 days, the longest-sitting song in the whole tab. Then the Dead's Hurts Me Too at 138, KISS Love
Gun at 137, Thin Lizzy's Chinatown at 124, Ozzy's Perry Mason at 99.

**87 electric songs never reach the tab at all.** Kinda Due needs a last play inside the record, so
any song last played before 2026-06-02 is permanently invisible there. The entire Black Sabbath block
(War Pigs, Children of the Grave, Sweet Leaf, N.I.B., Fairies Wear Boots, A National Acrobat), the
AC/DC block (T.N.T., It's A Long Way To The Top, Hell Ain't a Bad Place to Be), Rush YYZ at 37 plays,
Ozzy's I Don't Know at 40, Alice In Chains Man in the Box, Hendrix Voodoo Chile. That hole is the real
answer to what is missing from the list.

**50 in the tab should stay acoustic.** Pixies at 142 days and Cyndi Lauper at 138 are the two oldest
songs in Kinda Due and both are fine unplugged.

## Provenance

Sections 1 is measured from the play and stream log. Sections 2, 3 and 4 are my judgment on the songs
and are labeled that way on the page. All 279 judgment keys were validated against the live data
before the build; zero missed.

Builder: `build/build.py` + `build/judge.py` in the session scratchpad.
