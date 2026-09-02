# Demon Slayer, Solo Cello

Live: https://7onething1.github.io/demonslayer-cello/

Two halves, answering "find or make Demon Slayer songs for single cello."

**Find** — where the actual *Kimetsu no Yaiba* themes exist as legal cello sheet music, and what
each one costs you as a player when there is no accompaniment underneath.

**Make** — ten original cello pieces written for this page (three with a second cello part),
engraved in bass clef with cello fingerings, playable in the browser, and downloadable as MIDI.

## Why originals

Every theme and every score cue in the show is under copyright. Writing out a transcription of
"Gurenge" or "Homura" and publishing it here would need the publisher's permission, so the page
does the honest version instead: it points at the licensed shops for the real songs, and the
music it actually ships is original — written in the show's sound world (Japanese *yo* and
*insen* scales, open-string drones, a Taishō-era waltz lilt, one piece per breathing style)
rather than lifted from it. The ten compositions are released for any use with no attribution
required.

## The ten pieces

| # | Piece | Idea | Key / metre | Level | Technique |
|---|---|---|---|---|---|
| 1 | Water Surface Slice ⁺ | Water breathing, one unbroken wave | D minor, 6/8, ♪=112 | Early intermediate | Legato crossings, three to a bow |
| 2 | Box Lullaby | Nezuko | G pentatonic, 3/4, ♩=66 | Beginner | Sustained tone, first position |
| 3 | Thunderclap and Flash | Zenitsu's one form | A minor, 4/4, ♩=132 | Intermediate | Martelé, accents, fast crossings |
| 4 | Flame Vow ⁺ | Rengoku | C mixolydian, 4/4, ♩=76 | Early intermediate | C-string weight, dotted rhythms |
| 5 | Dance of the Dragonfly | Insect breathing | B minor, 6/8, ♪=126 | Intermediate | Spiccato, light left hand |
| 6 | Fading Edges | Mist breathing | D insen, 4/4, ♩=52 | Early intermediate | Sul tasto colour, slow bow |
| 7 | Taishō Whisper Waltz | The street outside | D yo scale, 3/4, ♩=120 | Beginner | Pizzicato, waltz lilt |
| 8 | Wisteria at Dusk ⁺ | Finale, minor turning major | D minor → major, 4/4, ♩=60 | Early intermediate | Cantabile, one shift |
| 9 | Upper Moon, Counting Backwards | The thing that hunts you | C phrygian, 7/8 (3+2+2), ♪=168 | Intermediate | Irregular metre, C and G strings only |
| 10 | Still Water | Tomioka, the calm one | D dorian, 4/4, ♩=58 | Beginner | Whole-bow control, the dorian sixth |

⁺ carries a second cello part, engraved below the first: "Both parts" plays them together and the
MIDI export becomes a two-track file, one named track per player.

Nothing goes above F♯4 and nothing needs thumb position; the whole set lives between first and
fourth position.

## How the page works

Everything is generated in the browser from one line of shorthand per piece — no images, no audio
files, no libraries.

| Part | What it does |
|---|---|
| Notation | Hand-rolled SVG engraver: bass clef, key signatures, ledger lines, flags and beams (grouped by metre, overridable for irregular ones like 7/8 as 3+2+2), dots, slurs, accents and staccato dots, pizz./arco marks, bar numbers. Re-lays out on resize — four bars per system on a desktop, two on a phone. |
| Fingerings | Computed, not typed. A Viterbi search over string × hand-position × hand-shape candidates picks the cheapest playable path through each piece: shifts cost, extensions cost less, open strings are free and sit outside the search. Printed as finger number + string letter, italic for an extension, with Roman numerals marking each change of position. |
| Playback | Web Audio bowed synth — two detuned saws and a triangle through a low-pass, with vibrato faded in after the attack. Separate pizzicato and accent envelopes. Optional open-string drone under each piece. |
| MIDI | Written byte by byte in JS: tempo and time-signature metas, GM cello program, note on/off with staccato shortening. Solo pieces export as format 0; duets as format 1, one named track per part on its own channel. Opens in MuseScore, Dorico or Logic for a printable part. |
| Practice tools | Per-piece bar range (drill bars 9–12 alone), count-in, metronome click on the beat grid of the metre, and a speed trainer that adds 5% per loop pass up to 160%. |
| Controls | Global tempo (55–130%), volume, drone, fingerings on/off, loop, count-in, click, speed trainer, print all or one piece, and a tuner (four open strings plus A440, sine with a quiet octave and fifth). Escape stops everything. |

## Source notes

The vendor list was checked against Musicnotes' Demon Slayer strings catalogue and Tomplay's
cello editions of "Gurenge"; theme titles and their writers were checked against current search
results rather than memory. Anything I could not confirm — which arcs' cello editions exist at
the Japanese shops, in particular — is written as "check", not as fact.

## Backlog

Ordered, next item first. Item 1 is in progress.

1. ~~**Practice tools** — count-in, metronome click, bar-range looping, speed trainer.~~ Done.
2. ~~**Second voice** — second cello parts for Water, Flame and Wisteria with a "both parts" mode.~~ Done.
3. ~~**Print one piece** — a per-piece Print that isolates one score.~~ Done.
4. ~~**Two more pieces** — the 7/8 upper-moon piece and the Tomioka calm piece.~~ Done.
5. **Ship to Vercel** — once PR #5 is merged and the page is live on Pages, copy the route into
   `drwu-htmls` for the permanent home. Needs the user; nothing here blocks on it.

6. ~~**Bowings for the second parts** — Cello II bow changes aligned with Cello I.~~ Done for Wisteria,
   the only duet where both parts are slurred; Water's second part is one note a bar and Flame's is
   deliberately unslurred in both parts.
7. ~~**A tuner** — open-string and A440 reference tones in the control bar.~~ Done.
8. **Ear-training drill** — name the interval or the note the page plays, using the pieces' own
   material rather than abstract tones; the melodic-intervals-player page is the model.
9. **Record and compare** — capture the microphone while a piece plays and lay the waveform against
   the beat grid, so a player can see where they rushed. Needs a permission prompt, so it should be
   opt-in per session.
