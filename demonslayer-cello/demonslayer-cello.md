# Demon Slayer, Solo Cello

Live: https://7onething1.github.io/demonslayer-cello/

Two halves, answering "find or make Demon Slayer songs for single cello."

**Find** — where the actual *Kimetsu no Yaiba* themes exist as legal cello sheet music, and what
each one costs you as a player when there is no accompaniment underneath.

**Make** — eight original solo cello pieces written for this page, engraved in bass clef with
cello fingerings, playable in the browser, and downloadable as MIDI.

## Why originals

Every theme and every score cue in the show is under copyright. Writing out a transcription of
"Gurenge" or "Homura" and publishing it here would need the publisher's permission, so the page
does the honest version instead: it points at the licensed shops for the real songs, and the
music it actually ships is original — written in the show's sound world (Japanese *yo* and
*insen* scales, open-string drones, a Taishō-era waltz lilt, one piece per breathing style)
rather than lifted from it. The eight compositions are released for any use with no attribution
required.

## The eight pieces

| # | Piece | Idea | Key / metre | Level | Technique |
|---|---|---|---|---|---|
| 1 | Water Surface Slice | Water breathing, one unbroken wave | D minor, 6/8, ♪=112 | Early intermediate | Legato crossings, three to a bow |
| 2 | Box Lullaby | Nezuko | G pentatonic, 3/4, ♩=66 | Beginner | Sustained tone, first position |
| 3 | Thunderclap and Flash | Zenitsu's one form | A minor, 4/4, ♩=132 | Intermediate | Martelé, accents, fast crossings |
| 4 | Flame Vow | Rengoku | C mixolydian, 4/4, ♩=76 | Early intermediate | C-string weight, dotted rhythms |
| 5 | Dance of the Dragonfly | Insect breathing | B minor, 6/8, ♪=126 | Intermediate | Spiccato, light left hand |
| 6 | Fading Edges | Mist breathing | D insen, 4/4, ♩=52 | Early intermediate | Sul tasto colour, slow bow |
| 7 | Taishō Whisper Waltz | The street outside | D yo scale, 3/4, ♩=120 | Beginner | Pizzicato, waltz lilt |
| 8 | Wisteria at Dusk | Finale, minor turning major | D minor → major, 4/4, ♩=60 | Early intermediate | Cantabile, one shift |

Nothing goes above F♯4 and nothing needs thumb position; the whole set lives between first and
fourth position.

## How the page works

Everything is generated in the browser from one line of shorthand per piece — no images, no audio
files, no libraries.

| Part | What it does |
|---|---|
| Notation | Hand-rolled SVG engraver: bass clef, key signatures, ledger lines, flags and beams, dots, slurs, accents and staccato dots, bar numbers. Re-lays out on resize — four bars per system on a desktop, two on a phone. |
| Fingerings | Computed, not typed. A Viterbi search over string × hand-position × hand-shape candidates picks the cheapest playable path through each piece: shifts cost, extensions cost less, open strings are free and sit outside the search. Printed as finger number + string letter, italic for an extension, with Roman numerals marking each change of position. |
| Playback | Web Audio bowed synth — two detuned saws and a triangle through a low-pass, with vibrato faded in after the attack. Separate pizzicato and accent envelopes. Optional open-string drone under each piece. |
| MIDI | Format-0 file written byte by byte in JS: tempo and time-signature metas, GM cello program, note on/off with staccato shortening. Opens in MuseScore, Dorico or Logic for a printable part. |
| Controls | Global tempo (55–130%), volume, drone, fingerings on/off, loop, print. Escape stops playback. |

## Source notes

The vendor list was checked against Musicnotes' Demon Slayer strings catalogue and Tomplay's
cello editions of "Gurenge"; theme titles and their writers were checked against current search
results rather than memory. Anything I could not confirm — which arcs' cello editions exist at
the Japanese shops, in particular — is written as "check", not as fact.
