# Melodic Intervals, Players

Live: https://7onething1.github.io/melodic-intervals-player/

An ear-training page built from your own reference sheet, "Melodic Intervals (Ascending)".
Every interval on the sheet gets its own player, and every sound is synthesized in the
browser with the Web Audio API, so there are no audio files to host and the page works
offline.

## What is on the page

| Part | What it does |
|---|---|
| 13 interval cards | Unison through Octave, one card each. Three buttons per card: ascending, harmonic (both notes at once), descending. |
| Root selector | Transposes every card, A3 through A4. The note pair on each card rewrites to match. |
| Tone selector | Electric piano, organ, nylon pluck, pure sine. |
| Pace | Slow, normal, quick. |
| Sound the tonic first | Burge's sing-against-tonic drill. Plays the tonic, then the interval, so the interval is heard in a key rather than in the abstract. |
| Quiz | A random interval plays, you name it. Wrong answers replay immediately. Space replays, N draws a new one. |

## Source fidelity

The mnemonics are transcribed from your sheet. Nothing was substituted.

| Interval | From your sheet |
|---|---|
| Unison | (no song given) |
| Minor 2nd | Instant recognition, Jaws Theme |
| Major 2nd | "Vasoline," "Happy Birthday" |
| Minor 3rd | "Georgia On My Mind" + your note, "Forgot the song you played with that minor 3rd riff" |
| Major 3rd | "Ob-la-di, Ob-la-da," "Kum-ba-yah" |
| Perfect 4th | "Here Comes the Bride" |
| Tritone | Instant recognition, "Simpsons Theme" |
| **Perfect 5th** | **Absent from your sheet** |
| Minor 6th | "Dream Brother" intro |
| Major 6th | "My Bonnie," "NBC" |
| Minor 7th | "Applebite," "Star Trek Original Theme," "Shine On You Crazy Diamond" |
| Major 7th | First chord of "Everlong" (also has major 3rd) |
| Octave | Instant recognition, "Somewhere Over the Rainbow" |

Two things to note about the transcription:

1. **The Perfect 5th has no line on your sheet.** It jumps Perfect 4th, Tritone, Minor 6th.
   The card is on the page because the set is incomplete without it, and it carries no
   mnemonic, since writing one and presenting it as yours would be inventing your notes for
   you. The quiz defaults to "sheet intervals only," which excludes it. Untick that box to
   drill all 13.
2. Your sheet reads "Sine On You Crazy Diamond." The page renders the Pink Floyd spelling,
   "Shine On You Crazy Diamond." That is the only spelling change made anywhere.

The interval families (anchor, pulled, tense, sweet, stable, characteristic) come from
Burge's grouping in the `ear-training-reference` skill, not from your sheet.

## How the audio works

Equal temperament, A4 = 440 Hz. Each note is an additive stack of a sine fundamental plus
three partials, run through an ADSR gain envelope and a lowpass filter. Upper partials are
detuned a few cents so the tone is not sterile. Nothing is fetched, nothing is sampled.

## Verification run before shipping

| Check | Result |
|---|---|
| Cards rendered | 13 |
| Play buttons | 39 (3 per card) |
| Console errors | none |
| Oscillators scheduled, 2-note interval | 8 (4 partials x 2 notes) |
| Oscillators scheduled, unison | 4 (1 note, correct) |
| Pitch, offline render, Goertzel at C4 261.63 Hz | 0.0639 magnitude |
| Pitch, same render at sub-octave 130.81 Hz | 0.0008, below the 0.002 control noise floor |
| Audio is not silent | RMS 0.102 during note 1, 0.106 during note 2, 0.0 in the tail |
| Clipping | peak sample 0.462, no clipping |
| Root transposition | C4 to G4 rewrites Octave card to G4 to G5, Tritone to G4 to C#5 |
| Quiz pool toggle | 12 sheet-only, 13 all |
| Quiz scoring after 4 misses then correct | 0 / 1, streak 0, labeled "Right on a retry" |
| Give-up path | counts as asked, never as correct, reveals the answer |
| Em-dash and ellipsis in prose | 0 |

A scoring bug was caught by that run and fixed: a question missed four times was scoring
as 1 / 1 with a streak of 1. Missing a question now costs the point and breaks the streak.

## Files

- Page: `~/Projects/drwu-overflow/melodic-intervals-player/index.html`
- This doc: `~/Projects/drwu-overflow/melodic-intervals-player/melodic-intervals-player.md`
