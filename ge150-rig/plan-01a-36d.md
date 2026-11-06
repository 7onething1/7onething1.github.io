# Plan: 144 presets into slots 01A through 36D

Written 2026-11-06 from the two ChatGPT threads plus a measured validation of the
design workbook against the real GE150 Pro model table. Every number below came
from a script that is checked into `~/Projects/_outputs/ge150/`, not from
reading the workbook's own claims about itself.

## The ask, in Brandon's words

From `gpt-preset-library-design`, turn 1, verbatim:

> "H made 1 through 55 presets, which turns out being 37 A through 50 D. Look at
> what that has and what would be best for me, and let's make presets for 1A
> through 36D, so we have a full complement of sounds. Learn from the mistakes of
> the other chat, which is, like, not setting all of the various parameters and
> using a variety of clean and dirt and fuzz and speakers, and, like, really
> utilizing all the possible settings to find the sound that matches the name."

Three separate requirements live in that sentence:

1. Fill slots 01A through 36D, 144 presets, preserving the audited 37B through 50D.
2. Set **all** of the various parameters, which is the named failure of the prior pass.
3. Use real variety across clean, dirt, fuzz and **speakers**, so the sound matches the preset name.

## What already exists

| Artifact | State |
|---|---|
| `GE150PRO_Complete_01A-36D_144Preset_Design.xlsx` | 7 sheets, 144 slots, 1,296 module rows, on disk |
| `GE150PRO_Complete_01A-36D_144Preset_Design 2.xlsx` | byte-identical duplicate, md5 `c49eed2ca1ba4a9c7ed8574d520d0b12`, ignore it |
| `GE150PRO_01A-36D_144_Tone_Blueprints.json` | promised in the thread, **never downloaded**, not on this Mac |
| `PEDALBOARD1_V25_SOUND_REVIEW.xlsx` | the 55 audited presets, 37B through 50D, separate scope |
| `GE150PRO-model-definitions.xml` | the authoritative table, 210 elements, 170 real models plus 40 EMPTY |

The workbook's own `START HERE` sheet states its status: "DESIGN DOCUMENT ONLY, not
installed, not .mo native exports, not audio-verified." Its `IMPLEMENTATION QA`
sheet carries 144 rows where every gate column reads `NO` and every
implementation column reads `NOT STARTED`.

## What the validation measured

`validate_144_design.py` resolved all 1,296 rows against the model table.

| Measure | Count |
|---|---|
| Module rows switched ON | 891 |
| Module rows OFF | 405 |
| Model names that do not exist as spelled | **75** rows, 17 distinct names |
| Parameter names that do not exist on the named model | **1,868** |
| Values outside the model's real range | 0, and that zero is close to meaningless |

**The zero is a vacuous result.** The range check only runs on a parameter name
that resolved, and 1,868 names never resolved, so almost nothing reached the
range comparison. Treating that zero as a clean bill of health is the exact gate
failure where a check written against nothing passes on everything.

### The model-name problem is spelling, not invention

Every failing name is a near miss on a model that genuinely exists.
`build_alias_map.py` matched 14 of the 17 uniquely by stripping punctuation and
spaces, covering 61 of the 75 rows:

| As designed | Real model | Slots |
|---|---|---|
| `UK 30 CL` | `33: UK30 CL` | 13 |
| `PLX 100` | `09: PLX100` | 10 |
| `Ana Chorus` | `12: ANA-CHORUS` | 9 |
| `Tri Chorus` | `13: TRI-CHORUS` | 7 |
| `UK 30 OD` | `34: UK30 OD` | 4 |
| `Dr Zee 112` | `14: DR.ZEE 112` | 4 |
| `DR ZEE Reck` | `29: DR.ZEE RECK` | 3 |
| `MARK III CL` / `MARK III DS` | `16: MARKIII CL` / `17: MARKIII DS` | 2 each |
| `MARK V CL` / `MARK V DS` | `18: MARKV CL` / `19: MARKV DS` | 2 each |
| `DR ZEE 18 JR` | `28: DR.ZEE 18 JR` | 1 |
| `Powerbell DS` | `13: POWER BELL DS` | 1 |
| `D-Drive` | `05: DDRIVE` | 1 |

Three were left UNRESOLVED by the script rather than guessed, and each needs a
recorded decision before it is applied:

- `65 US DLX`, 12 slots. The table holds `01: 65 US DX`. The how-to doc already
  settled this spelling once, where a ChatGPT audit proposed `65 US DLX` and the
  XML was counted as holding `65 US DX` zero times for the proposed form.
- `Rock Verb DS`, 1 slot. The table holds `23: ROCK VRB DS`.
- `Accoustic 112`, 1 slot. The table holds CAB `26: ACOUSTIC112`.

A wrong model name is not cosmetic here. The how-to doc records that a block
carrying wrong or missing parameter names is silently rejected and replaced with
the pedal's own defaults, and that a chorus specified at MIX 8 ran at MIX 50 with
exit codes, dialogs and file contents all looking fine.

### The parameter problem is a vocabulary mismatch

The design describes parameters in prose labels. The pedal has fixed names.

| Chain | Failures | Designed label | Real parameter names |
|---|---|---|---|
| EQ | 680 | `BAND LOW TARGET DB`, 5 bands | `100Hz 250Hz 630Hz 1.6KHz 4KHz` on MOOER G, stored as dB plus 16 |
| DELAY | 289 | `TIME MS`, `FEEDBACK TARGET %` | `TIME`, `F.BACK`, `LEVEL`, `SUB-D` |
| CAB | 278 | `CAB`, `SOURCE` | `TUBE`, `MIC`, `CENTER`, `DISTANCE` |
| REVERB | 244 | `DECAY TARGET %`, `WET TARGET %` | `P.DELAY`, `LEVEL`, `DECAY`, `TONE` |
| MOD | 177 | `RATE TARGET %`, `DEPTH TARGET %` | `RATE`, `MIX`, `DEPTH`, `TONE`, per paraPos |
| DS/OD | 124 | `DRIVE`, `LEVEL` | `VOLUME`, `TONE`, `GAIN` |
| NS GATE | 70 | `RELEASE` | only on `03: NOISE GATE`, absent from the other two |
| FX/COMP | 6 | assorted | per paraPos, mostly already correct |
| AMP | **0** | `GAIN BASS MID TREBLE PRES MST` | identical, the AMP vocabulary is right |

**The CAB finding is the one that answers requirement 2 directly.** Of 139 CAB
rows, not one sets `TUBE`, `MIC`, `CENTER` or `DISTANCE`. The four controls that
shape the speaker are untouched across all 144 presets, which is precisely the
"not setting all of the various parameters" mistake Brandon asked to avoid
repeating, reappearing in the document meant to fix it.

## The three phases

### Phase 1, make the design installable. Desk work, no pedal, no risk.

1. Apply the 14 resolved aliases. Record the 3 judgment calls with the XML
   evidence beside each, then apply them.
2. Build the parameter translation table, chain by chain, from the XML rather
   than from the prose labels. EQ carries the dB plus 16 encoding, so a flat
   band is 16.
3. Fill the four CAB parameters for all 139 CAB rows. This is design work with a
   stated rationale per preset, since a speaker, mic and distance choice is part
   of matching the sound to the name.
4. Resolve the NS GATE mismatch, which is a model choice. A preset that wants
   `RELEASE` needs `03: NOISE GATE`.
5. Re-run `validate_144_design.py` until bad-model is 0 and bad-param is 0.
6. Harden the validator so its range check cannot pass vacuously. It must assert
   that the count of resolved parameter names equals the count of parameters
   present, and hard-fail when any row contributes nothing to the comparison.

**Phase 1 is done when** the validator reports 0 bad models, 0 bad parameters,
a non-zero count of range comparisons actually performed, and every one in range.

### Phase 2, emit .mo files and gate them per bank.

7. Write the emitter from the design rows to `.mo` JSON, nine `effectModule`
   keys `"0"` through `"8"`, canonical bytes
   `json.dumps(d, indent=4, sort_keys=True, ensure_ascii=False) + "\n"`.
8. Enforce the two filename rules the how-to records: filename equals
   `fileInfo.preset_name` exactly, and names truncate to 16 characters on the
   pedal. Any design name longer than 16 gets shortened at the source, so a
   readback comparison cannot report a false MATCH against an untruncated name.
9. Diff every emitted block against a factory preset that uses the same model,
   to catch a parameter set the pedal would silently reject.
10. Work **one bank of four at a time**, 36 banks. Never a bulk pass.

**Phase 2 is done when** 144 `.mo` files exist, each one's filename matches its
internal name, and each block's parameter set matches the model table exactly.

### Phase 3, write to hardware and prove it.

11. **Back up first.** Every one of the 144 target slots currently holds
    something. The workbook's own rule reads "Create only in approved backed-up
    destination" and its QA sheet says `Native .mo backed up? NO` for all 144.
    Read all 144 existing slots off the device and archive them before any write.
12. Confirm 37A. The old audit starts at 37B, so 37A's occupant is unknown and is
    not assumed free.
13. Per bank: `v4_probe.sh`, then `v4_write.sh` with a mapping built from the
    probe screenshot, then `v4_readback.sh`, then sha256 against the master.
14. Carry the known traps: window-relative coordinates re-read before every drag,
    float math through python, `caffeinate` inside the batch, the
    `list_fingerprint.py` scroll detector at threshold 97, a fresh mtime as the
    only witness that bytes came off the device, and the frontmost-process check.
15. Expect Dual Delay `TIME B` to read back 40 ms above what was written, and do
    not write readback files back.
16. Write all 144, read back all 144, compare all 144. A sample is not proof. The
    prior pass recorded 9 of 12 tape presets still on the wrong reverb type while
    a single readback was cited as proof.

**Phase 3 is done when** 144 written, 144 read back, and every mismatch is either
sha256-identical or explained by the documented TIME B read-path offset.

## What this plan does not claim

- No preset in this design has been heard through a guitar. Every statement above
  is about bytes, names and ranges.
- The numeric targets in the workbook are design proposals. The `9 BLOCK MATRIX`
  sheet labels all 891 ON rows `UNVERIFIED EDITOR VALUES`, and that label is
  accurate.
- The dual-pedal architecture, the second GE150 Pro and the Eventide Space
  routing live in the 128-turn `gpt-dual-pedal-optimization-plan` thread. That
  thread is staged at
  `~/Projects/_outputs/ge150/chatgpt-threads/gpt-dual-pedal-optimization-plan.md`
  and has not been read in full for this plan, so nothing here depends on it.
  Banks 35 and 36 are the ones the design assigns to dual-rig voices, so they
  need that thread read before they are built.
- The `GE150PRO_01A-36D_144_Tone_Blueprints.json` blueprint is still in the
  ChatGPT sandbox. The workbook carries the same content, so it is a convenience,
  not a blocker.

## Scripts this plan added

| File | Does |
|---|---|
| `validate_144_design.py` | resolves all 1,296 rows against the model table |
| `build_alias_map.py` | proposes model renames, refuses to guess an ambiguous one |
| `validate_144_design_report.json` | the full failure list, per slot |
| `model_alias_map_PROPOSED.json` | 14 resolved, 3 unresolved, nothing applied |
| `chatgpt-threads/*.md` | both source threads, linearized |

## Related

- `~/Projects/_outputs/ge150/HOW-TO-UPDATE-GE150PRO.md`, the hardware procedure
- `/Users/drwu/Documents/V25_FULL_55_REVIEW_AND_RECONCILIATION.md`, the 55 audited
- Live site: https://7onething1.github.io/ge150-rig/
