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
| Ear drill | Sounds the tonic, holds it, then one degree of the mode; seven modes, taken from the pieces themselves. Scores attempts, locks a correct answer so it cannot be double-counted. |
| Record | Microphone take over the selected bars after a count-in. A ScriptProcessor keeps a 5 ms loudness envelope; attacks are detected off that and aligned to the written notes by a monotonic DP scored on *intervals* — what it costs to pair two notes is how far the gap you played is from the gap written — so a take that drifts reads as tempo rather than as notes going missing. Reports spread (the player) separately from mean offset (mostly input latency), graphs tempo across the take against the written tempo, and keeps the last eight takes per piece in localStorage (derived numbers only, never audio) to compare against. |
| Controls | Global tempo (55–130%), volume, drone, fingerings on/off, hand preset (balanced or stay-down, which re-solves every piece), loop, count-in, click, speed trainer, print all or one piece, and a tuner (four open strings plus A440, sine with a quiet octave and fifth). Escape stops everything. |

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
8. ~~**Ear-training drill** — name the degree, in the seven modes the pieces use.~~ Done.
9. ~~**Record and compare** — microphone take laid against the note grid, with spread and offset
   reported separately.~~ Done.
10. ~~**Tempo-curve view** — tempo graphed across a take against the written tempo.~~ Done.
11. ~~**Save a take** — last eight takes per piece in localStorage, numbers only, with a
    tighter/looser comparison against the previous one.~~ Done.
12. ~~**A second look at Thunderclap**~~ Done — and the premise was wrong. The solver opens bar 1 in
    second position on purpose: E4 is out of reach from first position even extended, so sitting up
    for the first half of the bar makes it one hand move instead of two. What was wrong was the
    practice note, which claimed the hand lives in first position; it now describes what is printed.
    The pass did produce one real change to the model — a shift is now charged by how much *time*
    there is to make it, so the same shift costs more between two fast notes than two slow ones.
    At the written tempos this changes nothing (all ten fingerings byte-identical), but at 2× and 4×
    it drops Thunderclap from 5 shifts to 4 and Dragonfly from 6 to 4.
13. ~~**Fingering variants**~~ Done. Two weight presets over the same solver. The first attempt bundled
    "keep the hand low" with "do not shift" and got *more* shifts (Thunderclap 5 → 7), because
    insisting on first position is exactly what forces a hand to climb and drop again; the shipped
    preset keeps home low and prices shifts dear instead — Dragonfly 6 → 1, Lullaby 6 → 1,
    Thunderclap 5 → 3, and pieces that never shift stay untouched.
14. **Difficulty markers** — the DP already knows where the hard moves are; mark the bars with the
    biggest jumps so a player can see what to isolate before playing the piece through.
