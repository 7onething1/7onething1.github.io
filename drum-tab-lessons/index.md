# Drum tabs: what we learned, and where it lives now

Knowledge sweep, 30 July 2026. Every lesson from the Sean song drum-tab work, gathered
from four knowledge layers and folded back into the skill that builds the file.

## The finding

The knowledge was split across two skills, and the wrong half was in the builder.
`/drum-dynamics-from-audio` was built 2026-07-27 and holds most of it.
`/stems-to-guitar-pro-drums` was built **one day earlier** and never received the
07-27 discoveries, so it still contained the exact bugs the later session paid to find.
Running it today would have produced a Guitar Pro file that opens as rests, with rides
drawn as high-F notes and rim clicks on the kick line.

- 8 historical bugs the builder still carried
- 19 properties the new render gate asserts
- 17 memory files swept
- 5 sessions read end to end

## Where the knowledge lives now

| Location | Holds |
|---|---|
| `_shared/drum_gp_spec.py` | **New.** The encoding spec both drum skills read: ladder, staff slots, feet, grace, ghost. Run it directly and it asserts the two copies still agree. |
| `stems-to-guitar-pro-drums/` | Builds a new gp5 from stems. `sd_detect.py`, `sd_writegp.py`, `sd_verify.py`. |
| `drum-dynamics-from-audio/` | Corrects the touch of a score whose notes are already right. Never moves a note. |
| `songsterr-tab-guide/` | Builds the per-band guide page. `st_drumtab.py` renders a drum-tab analysis page. |
| memory dir | `reference_songsterr_gp5_drum_map` plus 16 related feedback files. |

## Coverage: every lesson against the builder

| Lesson | In the skill? | Now enforced by |
|---|---|---|
| Velocity snaps to the 16-step ladder | No, it said 20-127 | writer snaps, gate fails off-ladder |
| Ride is GM 51, GM 59 draws as a high-F note | No | writer remaps 59, gate fails on any 59 |
| Ghosts get the staccato dot, never parentheses | No, it wrote parentheses | writer + gate |
| Flams are `GraceEffect(duration=64)` | No, it passed 1 | writer + gate on legal durations |
| One fixed staff slot per drum family, 7 strings | No, slots wandered | `SLOT` map + gate |
| Kick and side stick never share a slot | No | gate |
| Two arms, feet are kick and hat pedal only | No | `limb_conflicts()` |
| Quantize last, or the grid deletes the ornament | No | SKILL.md build order |
| Run the controls before claiming a flam or a hat | No | SKILL.md, with measured false-positive rates |
| Detect replacement events, not only added transients | No | SKILL.md |
| One writer, regression bars, counts carry definitions | No | SKILL.md |
| Songsterr strips articulation and re-quantizes on import | No | SKILL.md |
| A round-trip is not render validation | No, it cited one as proof | `sd_verify.py` |
| DrumSep 5-piece beats a single full-kit stem | Yes | already present |
| Never resample long stems, librosa is broken here | Yes | already present |

## What each rule cost when it was broken

- **Ladder velocity.** A velocity of 431 passed a full PyGuitarPro round-trip and opened in Songsterr as nothing but rests. A whole delivery cycle and a done-claim went out on it.
- **Ride GM 51.** Ninety minutes guessing, while Songsterr's own Drum Key tab held the answer. The fix was then graded as a regression.
- **Ghost dot.** One file carried both notations at once, 72 parentheses and 22 dots, so an audit scored it as holding zero ghost notes when it held 94.
- **Grace duration 64.** The bar-5 flam was added and lost across four versions. It is 59.1 ms, exactly a 32nd at 127 BPM, and the container held only 16ths.
- **Kick and rim apart.** Rim clicks drew on the kick line, and Brandon had to say it three separate times.
- **Two arms.** Three-hand bars shipped, graded green by an inherited rule that counted hi-hats as feet.

## Brandon's own words, and the rule each one set

He corrected a handful of bars by hand and said plainly they were examples, so each is a
rule to apply across the file. Quotes are verbatim, typos included.

> i didn't fix everything, just a few examples to teach you to listen better building the
> skill and applying it the rest of the way

| What he said | The rule it sets |
|---|---|
| you put it as 3 + hits but I only have two arms | Two hands, two feet. Feet are kick and hat pedal only, so a closed hat is a hand. |
| drums at 76 and other places those are rim clicks / do you have them as kicks or what / youre still doing it on the kick instead of the rim | Side stick is GM 37 on its own slot. Rim clicks run through to bar 84. |
| some of those are the note f, the higher f, but it should be the 'x' for a ride edge or thin crash | GM 59 draws at the hi-mid-tom slot as a round note. Ride is GM 51. |
| when you do the note with parentheses is hard to not hit it, just add the correct dot to it / parenntheses used to be let ring not ghost | Ghosts get the staccato dot plus velocity 31. |
| lots of bells like bar 8 missed | A bell often replaces a cymbal at the same position. Search for class changes. |
| make the most correct version lose nothing | Diff each version against the last, not only against the audio. |
| me doing it for you defeats the purpose / go to the audio figure it out | Do not hand the work back. The data was on disk both times. |

## The five measurement traps

1. **The offset is not what an STFT tells you.** A 2048-sample window is 46 ms wide, so band energy rises when the transient enters it. That reads about half a window early: 60 ms reported where the truth was 76.
2. **Attack strength is a rise, never peak-minus-floor.** In dense playing the window before a hit sits inside the previous hit's decay. Peak-minus-floor put 22% of ride hits at zero. The rise metric put 0% there.
3. **Fix bleed by choosing the band.** A correction factor removes real accents along with the bleed.
4. **Ghost decisions are local, velocity is global.** Velocity ranks across the whole lane. Ghost and accent rank within four bars, because the ear hears an inner tap against its neighbours.
5. **A bell stands out when the surrounding rides come down.** Raising instead pinned 7 of 12 bells to the 127 ceiling.

## Proof

The negative control is the part that matters. The pre-fix writer was run through the new
gate, and all eight historical bugs reproduced and were caught.

```
$ python3 _shared/drum_gp_spec.py
PASS  drum-dynamics-from-audio/dyn_core.py matches the shared spec

$ sd_writegp.py ev.json final.gp5 && sd_verify.py --events ev.json --gp5 final.gp5
  ride59_remapped_to_51: 1     ghosts_as_staccato_dot: 16     flams_as_32nd_grace: 1
  19 passed, 0 failed            EXIT=0

$ sd_verify.py --events ev.json --gp5 old.gp5        # the pre-fix writer
  FAIL  every velocity on the 16-step ladder   offenders=[431]
  FAIL  ride is GM 51, never GM 59             ride59=1
  FAIL  zero ghostNote parentheses             parentheses=16
  FAIL  grace durations are legal              offenders=[1]
  FAIL  one fixed string slot per drum family  offenders={36:[1], 42:[1,2,3], 37:[3]}
  FAIL  staff has a slot per drum family       strings=6
  FAIL  every requested ghost carries the dot  asked=16 dots=0
  FAIL  per-drum counts match the ledger       ride (1, 0)
  11 passed, 8 failed            EXIT=1

anti_ai_voice_gate   PASS on all three new files
session_fraud_check  RESULT: PASS
```

## The one check nobody here can run

Whether Guitar Pro and Songsterr actually **draw** the file is not checkable from this
side. Re-parsing your own output with the same library proves the bytes parse and nothing
more, because the library reads sequentially and skips exactly the validation the real app
performs. Load the gp5 in the Songsterr editor and look before Submit.

## One flag left unfixed on purpose

The anti-AI voice gate flags Brandon's own quote `at bar 9 we ride the crash` as a
soft-metaphor verb. It stays. The gate governs my prose, and rewriting what he said would
destroy the evidence the lessons file exists to hold. Every other line passes.

---

Sources: sessions `b3fb51a9` (43 hours), `add5d5c7`, `ef064d87`, `0bb800b0`, and the
7.3.26 jam rebuild. Song under test: Children of Adams Basement, "Sean song", Songsterr
s6219701, 85 bars, 127 BPM, 3/4 at bar 53.

Full corpus with citations:
`~/.claude/skills/stems-to-guitar-pro-drums/reference/drum-tab-lessons.md`
