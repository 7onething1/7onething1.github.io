# Plan: 144 presets into slots 01A through 36D

Written 2026-11-06 from the two ChatGPT threads, their seven recovered working
files, and a measured validation of the design workbook against the real GE150
Pro model table. Every number below came from a script in
`~/Projects/_outputs/ge150/`, not from reading any document's claims about
itself.

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

## Phase 0, a live conflict over the same slots

Another GE150 run is already writing into this plan's target range, and it is
writing different content.

`~/Projects/_outputs/ge150/overwrite_factory.py` carries this docstring:

> "Overwrite 01A..37A with our 55, in rig-page order, cycling."

Its `overwrite_order.json` is the list of the 55 audited preset names, and
`overwrite_log.txt` records how far it reached:

```
  1 01A CAP MULTI C OK
  2 01B CAP MULTI B OK
RUN END
ABORT 01C CAP MULTI A: selection moved 223.25->580.25, list scrolled or write off row
```

So **01A and 01B now hold copies of 37B and 37C**, and the run stopped at 01C
when the scroll detector caught the preset list moving. The guard worked exactly
as the how-to doc describes.

A queued item asks to resume that run from 01C through 37A. **Resuming it works
against the ask.** Cycling the same 55 presets across 144 slots produces 144
slots holding 55 distinct sounds, which is the opposite of "a full complement of
sounds" and of the variety of clean, dirt, fuzz and speakers Brandon asked for.
The 144-preset design is the content that answers the ask for that range.

The decision this plan takes: **the 144 design supersedes the cycling fill for
01A through 36D.** The cycling run stays available for any slot the design does
not cover, which at present is 37A alone.

### The backup position is better than the workbook states

The workbook's QA sheet says `Native .mo backed up? NO` for all 144 slots. That
is out of date. `backups/GE150PRO-device-backup-2026-11-02.backup` plus its
index `GE150PRO-preset-list-2026-11-02.tsv` cover **all 144 slots in 01A through
36D**, 206 slots in total, dated 2026-11-02, which predates the 01A and 01B
overwrite. The index records what those slots held before they were written:

| Slot | Held on 2026-11-02 |
|---|---|
| 01A | `V1.0.6` |
| 01B | `BUFF` |
| 01C | `GE150PRO_PRESET` |

What is missing is not the backup. It is a per-slot `.mo` extraction from that
backup file, using the offsets the index already carries.

## The thread's working files, now recovered

The `Preset library design` thread is 38 nodes, and only 6 of them are prose. The
substance sits in 19 python execution outputs and 7 code nodes. Those nodes name
seven files that lived in ChatGPT's library and were **not on this Mac**. All
seven are now staged in `~/Projects/_outputs/ge150/chatgpt-sources/`, each
matching the byte size the thread recorded:

| File | Bytes | Holds |
|---|---|---|
| `PARAMETER_VALUES_ALL.csv` | 158,107 | 499 rows of per-model parameter values for the 55, with `manual_min`, `manual_max`, `range_status`, `conversion_gate` |
| `MANUFACTURER_MODEL_NAME_AUDIT_ALL.csv` | 57,728 | 271 rows asserting a `manufacturer_exact_name` per module |
| `GE150_SPACE_55x50_ORIGINAL_PEDAL_V3.xlsx` | 37,739 | the 55 by 50 Space crosswalk |
| `BANK43_V16_MASTER_INTEGRATION.xlsx` | 26,679 | bank 43 integration |
| `GE150_Pedalboard1_55_Preset_Tone_Audit.xlsx` | 22,053 | the tone audit behind the 55 |
| `BANK43_V5_PERFORMANCE_PLAN.xlsx` | 14,206 | bank 43 performance plan |
| `README_AND_HANDOFF_V12.md` | 5,447 | the dual-pedal and Eventide Space routing contract |

Two files the thread produced are still not here. The blueprint
`GE150PRO_01A-36D_144_Tone_Blueprints.json`, which the thread logs as
`Saved blueprint 246158 bytes`, lived in the sandbox rather than the library, so
it did not come down. The workbook carries the same content, so it is a
convenience. `assess_rig.py` and `RIG_STATE_TEMPLATE.json`, named by the handoff
doc, are also absent and would need to be rebuilt or re-requested.

## What the validation measured

`validate_144_design.py` resolved all 1,296 rows of the `9 BLOCK MATRIX` sheet
against the model table extracted from the editor binary.

| Measure | Count |
|---|---|
| Module rows switched ON | 891 |
| Module rows OFF | 405 |
| Model names that do not exist as spelled | **75** rows, 17 distinct names |
| Parameter names that do not exist on the named model | **1,868** |
| Parameter values that are prose rather than a number | **609** |
| Expression targets naming a control that does not exist | **30** of 144 |
| Values outside the model's real range | 0, and that zero is misleading |

**The zero is close to meaningless.** The range check only runs on a parameter
name that resolved, and 1,868 names never resolved. Worse, its number parser read
`50` out of the string `50 START; LEVEL-MATCH BEFORE SAVE`, so 144 prose amp
master values were scored as valid numbers. Phase 1 hardens the validator before
anything trusts it.

### The model-name problem is spelling, and it is inherited

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

- `65 US DLX`, 12 slots. The table holds `01: 65 US DX`.
- `Rock Verb DS`, 1 slot. The table holds `23: ROCK VRB DS`.
- `Accoustic 112`, 1 slot. The table holds CAB `26: ACOUSTIC112`.

A wrong model name is not cosmetic here. The how-to doc records that a block
carrying wrong or missing parameter names is silently rejected and replaced with
the pedal's own defaults, and that a chorus specified at MIX 8 ran at MIX 50 with
exit codes, dialogs and file contents all looking fine.

### Where those names came from, and a correction to my own measurement

`MANUFACTURER_MODEL_NAME_AUDIT_ALL.csv` exists to certify model names. It labels
**all 271 rows** `EXACT_MANUFACTURER_NAME`, and in the same breath labels all 271
rows `native_model_id_verified = NO`, with `choice_provenance` reading
`INFERRED_DESIGN_OR_SECOND_HAND_NOT_A_DEVICE_EXPORT` on 270 of them. Its
authority is the owner manual, not the device.

My first pass at checking it scored **269 of 271 correct**, which was my own
measurement error. That comparison stripped spaces and punctuation, and the pedal
strips neither. Re-run verbatim, the same column scores:

| Verbatim check of `manufacturer_exact_name` | Count |
|---|---|
| Rows checked | 271 |
| Verbatim correct | 236 |
| **Verbatim wrong** | **35, which is 13%** |
| Distinct wrong names | 6 |

| Name the audit certifies as exact | Rows | Appears in the real table |
|---|---|---|
| `Ana Chorus` | 21 | 0 times |
| `PLX 100` | 6 | 0 times |
| `UK 30 CL` | 4 | 0 times |
| `65 US DLX` | 2 | 0 times |
| `Tri Chorus` | 1 | 0 times |
| `MARK III DS` | 1 | 0 times |

Counted with `grep -o -F`, `UK 30 CL` appears 8 times in the audit and 0 times in
the XML, while `UK30 CL` appears 0 times in the audit and once in the XML. The
same holds for `PLX 100` against `PLX100`, `65 US DLX` against `65 US DX`, and
`MARK III DS` against `MARKIII DS`.

**Those six names are the same names the 144 design gets wrong.** The lineage is
traceable: the design inherited its spelling convention from an audit that
certified exactness it never had. Fixing the design alone would leave the source
intact to reinfect the next pass, so Phase 1 corrects the audit CSV too.

This also carries a lesson for the tooling. A forgiving normalizer made a table
that is 13% wrong look 99% right. Any name check in this project compares
verbatim.

### The parameter problem is a vocabulary mismatch, also inherited

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

`PARAMETER_VALUES_ALL.csv` is where this vocabulary starts. Its 499 rows use
`drive`, `drive_level`, `drive_tone`, `delay_time_ms`, `low_mid`, `upper_mid`,
`presence`, `threshold` and `decay`, against real names `GAIN`, `TONE`,
`VOLUME`, `TIME`, `PRES` and `THRES`. Its EQ rows carry true dB values such as
`('Mooer G', 'bass', '-1')` and `('Mooer G', 'mid', '2')`, which confirms the
plus-16 encoding: a band at minus 1 dB stores as 15.

**The CAB finding is the one that answers requirement 2 directly.** Of 139 CAB
rows, not one sets `TUBE`, `MIC`, `CENTER` or `DISTANCE`. All 139 instead carry
`CAB = <the cabinet name again>` and `SOURCE = built-in factory cab`, which
restates the model and sets nothing. The four controls that shape the speaker are
untouched across all 144 presets. That is precisely the "not setting all of the
various parameters" mistake Brandon asked to avoid, reappearing in the document
meant to fix it, and speaker variety was named in the ask.

### 609 values are prose where the pedal needs a number

| Entry | Rows |
|---|---|
| `AMP / MST = 50 START; LEVEL-MATCH BEFORE SAVE` | 144, every preset |
| `CAB / SOURCE = built-in factory cab` | 144, every preset |
| `CAB / CAB = <cabinet name>` | 139 |
| `NS GATE / RELEASE = verify model-specific editor` | 70 |
| `DS/OD / LEVEL = MATCH TO DS BYPASS; start ~50` | 63 |
| `MOD / TONE GOAL`, `MOD / TRACKING`, `DELAY / NOTE`, `FX/COMP / OTHER CONTROLS` | the remainder |

Every one of these has to become a number before a `.mo` file can be written.

### 30 of 144 expression assignments name a control that does not exist

All 144 slots carry exactly one expression assignment across 14 distinct targets,
and the design's own check reported `Invalid mapping []`. Checked against the
model table, four of those targets are not real parameters:

| Target | Slots | The real control |
|---|---|---|
| `DS DRIVE` | 21 | DS/OD has no `DRIVE`. It is `GAIN` |
| `DELAY FEEDBACK` | 5 | `F.BACK` |
| `FX WAH` | 3 | `POSITION` on the wah models |
| `MOD CUTOFF` | 1 | no `CUTOFF` in MOD. Closest are `Q` on Q-FILTER and `RANGE` on HIGH or LOW PASS |

The other 114 resolve cleanly, including `AMP MST`, `FX SENS`, `MOD DEPTH`,
`DELAY LEVEL`, `AMP GAIN`, `REVERB LEVEL`, `MOD RATE`, `MOD MIX`, `FX LEVEL` and
`DS TONE`.

## Corrections to this plan's earlier draft

Reading the thread's execution outputs settled four things that the first draft
got wrong or left open.

1. **Name truncation cannot bite.** The longest of the 144 names is 13
   characters, `GAZE FEEDBACK` at 25D. Zero names exceed the pedal's 16-character
   limit, so the shortening step the first draft called for is unnecessary. The
   rule still guards the emitter, and no name trips it.
2. **The delay-time defect was repaired before export.** The thread hit
   `AssertionError: ('03C', 'Analog', 0)` and found two slots, 03C and 07B, with
   an enabled Analog delay and a time of 0. Checked on disk, there are **0** such
   rows. The fix landed.
3. **The duplicate signal configuration was resolved.** The thread measured 143
   distinct configurations across 144 slots, traced the collision to `04B DRY
   DIAG` against `36D SILENT CHECK`, and renamed 36D. On disk, 36D reads
   `RIG CHECK`, so the workbook here is the final post-dedup export.
4. **The gain-family spread is real variety.** New 144: 55 clean, 33 edge, 24
   crunch, 14 lead, 9 high gain, 9 fuzz. Existing 55: 20 clean, 13 edge, 10
   crunch, 7 high gain, 3 fuzz, 2 section-specific. Across 37 amp models, 22
   cabinets and 18 drives. The variety requirement is satisfied at the level of
   model selection, and it fails at the level of parameter completeness.

## The dual-pedal rig, from the handoff contract

`README_AND_HANDOFF_V12.md` holds the architecture, so the first draft's open
question about banks 35 and 36 closes here rather than in the 128-turn thread.

Eventide Space has three **global** routing modes, NORMAL, PRE.PST and WET.DRY.
Global means a system setting, not a per-preset one. **KILLDRY must be NO** for
two independent branches.

| Profile | Routing | Behaviour |
|---|---|---|
| 1, NORMAL | Guitar → isolated A/B/Y → GE150 A → Space IN1 → OUT1 left, GE150 B → Space IN2 → OUT2 right | shared stereo Space atmosphere, with A-derived reverb able to spread right |
| 2, PREPOST_PRE | identical cables, Space global PRE.PST, each scene saved PRE | A receives Space, B passes unchanged by the Eventide. Better separation for the 16 dry-right designs |
| 3, NORMAL + DualVerb | DualVerb algorithm only, firmware v4 or later | independent reverb per side. Does not extend to the other 11 algorithms |

`WET.DRY` is not two independent branches, since its dry output can carry a mix
of both inputs. The crosswalk covers 30 sources, 16 intended as
prepost-pre and 14 as NORMAL.

Two cautions carry into any hardware step. Changing Space routing while amps are
up risks loud feedback, so routing changes happen at low level. Matching file
labels never imply working MIDI recall or routing, and the two GE150s plus the
Space may each need separate footswitch operations.

The handoff doc states plainly what it does not establish: the ABY model, device
firmware, native B exports, live preset positions, actual Space scene installs,
latency, phase and clip levels. It records that **no hardware operations were
performed.**

## The reverb block is finished, and it proved the method

Done 2026-11-06, recorded in `REVERB-PLACEMENT-PROPOSAL.md`. It matters here
because it settles how the remaining 1,868 parameter mismatches get resolved.

**A donor corpus exists on this Mac.** `mine_reverb_donors.py` read **393 real
`.mo` files** with 0 unreadable: the presets written to the pedal, the reference
pack, the backups, the `factory-baseline` set, and the GE150PRO editor's own
library folder. For REVERB it produced observed min, median and max per model,
with the source file for each. **The same corpus can supply real values for
DS/OD, MOD, DELAY, FX/COMP, NS GATE and CAB.** That turns Phase 1 steps 3 to 5
from authoring into mining, which is the difference between derived and invented.

Reverb result: `P.DELAY` and `TONE` went from 0 presets to all 125, distinct
settings from 17 to 53, the biggest identical cluster from 46 to 14, and `CAVE`
gained 12 real observations so none of its 10 presets needed a guess. Zero
authored values violate a binding envelope.

**Two encodings are now documented.** EQ stores dB plus 16, already known. MOD
pitch stores **(semitones plus the absolute minimum) times 10**, derived from the
reference pack and confirmed three independent ways. That unblocks the ZEP
KASHMIR detune the how-to doc left switched off for want of a number.

**An envelope needs enough observations to bind.** `SHIMMER` has 2 observations
and its `LEVEL` envelope is the single value 55 seen twice. Treating that as a
constraint would pin every shimmer preset to a showcase level. The rule used was
a binding threshold of 10 observations, with deviations below that named rather
than hidden.

**A new finding, unresolved.** 33 of the design's own `DECAY` and `LEVEL` figures
sit outside a binding observed envelope. They are legal, since all sit inside the
pedal's declared range. The notable ones: `SPRING DECAY=20` on **14 presets**
where 107 real springs span 21 to 62, and `CAVE DECAY=73` on 4 presets where 12
real caves span 35 to 64. No real preset on this Mac is set that way. These want
an ear, not a silent correction.

## The phases

### Phase 1, make the design installable. Desk work, no pedal, no risk.

1. Apply the 14 resolved aliases. Record the 3 judgment calls with their XML
   evidence, then apply them.
2. **Correct `MANUFACTURER_MODEL_NAME_AUDIT_ALL.csv` at the source**, all 35
   wrong rows across the 6 names, so the next pass cannot inherit them again.
   Keep the original beside the correction.
3. Build the parameter translation table chain by chain, from the XML rather than
   from the prose labels in `PARAMETER_VALUES_ALL.csv`. EQ carries the dB plus 16
   encoding, so a flat band is 16 and minus 1 dB is 15, and MOD pitch carries the
   times-10 offset encoding above.
4. Resolve the **609 prose values** into numbers, by **mining the 393-file donor
   corpus per chain** the way REVERB was done. The two that touch every preset
   are `AMP / MST` and `CAB / SOURCE`. Carry the binding threshold: a model with
   fewer than 10 observations gets a named deviation rather than a forced fit.
5. **Fill the four CAB parameters for all 139 CAB rows**, replacing
   `CAB`/`SOURCE` with `TUBE`, `MIC`, `CENTER`, `DISTANCE`. The reference pack
   supplies 10 real CAB blocks already, for example `TUBE=3 MIC=0 CENTER=40
   DISTANCE=30`, and the library folder supplies many more. Mine first, then
   choose per preset, since speaker, mic and distance are part of matching sound
   to name.
5a. Reconcile the **33 design `DECAY` and `LEVEL` values** that sit outside a
   binding observed envelope, starting with `SPRING DECAY=20` on 14 presets.
6. Remap the **30 expression assignments** that name a control the pedal does not
   have. `MOD CUTOFF` at 32D needs a musical decision, not a rename.
7. Resolve the NS GATE mismatch, which is a model choice. A preset that wants
   `RELEASE` needs `03: NOISE GATE`.
8. Re-run `validate_144_design.py` until bad-model is 0, bad-param is 0 and
   prose-valued entries are 0.
9. **Harden the validator.** It must compare names verbatim, reject a value that
   is not wholly numeric rather than reading a leading integer out of prose, and
   assert that the count of range comparisons performed equals the count of
   parameters present, hard-failing when a row contributes nothing.

**Phase 1 is done when** the validator reports 0 bad models, 0 bad parameters, 0
prose values, a count of range comparisons equal to the parameter count, and
every comparison in range.

### Phase 2, emit `.mo` files and gate them per bank.

10. Write the emitter from the design rows to `.mo` JSON, nine `effectModule`
    keys `"0"` through `"8"`, canonical bytes
    `json.dumps(d, indent=4, sort_keys=True, ensure_ascii=False) + "\n"`.
11. Enforce filename equals `fileInfo.preset_name` exactly. The 16-character rule
    stays in the emitter as a guard, and no name among the 144 trips it.
12. Diff every emitted block against a factory preset using the same model, to
    catch a parameter set the pedal would silently reject.
13. Work **one bank of four at a time**, 36 banks. Never a bulk pass.

**Phase 2 is done when** 144 `.mo` files exist, each filename matches its
internal name, and each block's parameter set matches the model table exactly.

### Phase 3, write to hardware and prove it.

14. **Extract the backup per slot.** The 2026-11-02 device backup already covers
    all 144 target slots. Split it into per-slot `.mo` files using the offsets in
    `GE150PRO-preset-list-2026-11-02.tsv`, so one slot can be restored without
    replaying the whole image. Restore 01A and 01B, which the cycling run
    overwrote.
15. Confirm 37A. The old audit starts at 37B, so 37A's occupant is unknown and is
    not assumed free. 37A is also the one slot the cycling run may still own.
16. Per bank: `v4_probe.sh`, then `v4_write.sh` with a mapping built from the
    probe screenshot, then `v4_readback.sh`, then sha256 against the master.
17. Carry the known traps: window-relative coordinates re-read before every drag,
    float math through python, `caffeinate` inside the batch, the
    `list_fingerprint.py` scroll detector at threshold 97, a fresh mtime as the
    only witness that bytes came off the device, and the frontmost-process check.
18. Expect Dual Delay `TIME B` to read back 40 ms above what was written, and do
    not write readback files back.
19. Write all 144, read back all 144, compare all 144. A sample is not proof. The
    prior pass recorded 9 of 12 tape presets still on the wrong reverb type while
    a single readback was cited as evidence.

**Phase 3 is done when** 144 written, 144 read back, and every mismatch is either
sha256-identical or explained by the documented TIME B read-path offset.

### Phase 4, the rig, read-only first.

20. Follow the handoff contract's read-only inventory before any rig change: both
    GE150s, the ABY device, Space firmware, global ROUTING, KILLDRY, GLOBAL MIX,
    input and output levels, and both L/R CAB SIM THRU settings on each GE150.
21. Choose `NORMAL` or `PREPOST_PRE` and record it. Rebuild
    `RIG_STATE_TEMPLATE.json` and `assess_rig.py`, which the handoff names and
    this Mac does not have.
22. First build is `42A Weird Fishes` plus B `FISH CUT`, with the other seven B
    blocks bypassed.
23. At low level, record A-only, B-only and A+B with Space bypassed, then run
    polarity and mono tests before introducing the optional B EQ.

## What this plan does not claim

- **No preset in this design has been heard through a guitar.** Every statement
  here is about bytes, names and ranges.
- The numeric targets are design proposals. The `9 BLOCK MATRIX` sheet labels all
  891 ON rows `UNVERIFIED EDITOR VALUES`, and that label is accurate.
- `PARAMETER_VALUES_ALL.csv` carries `manual_min` and `manual_max` from the owner
  manual. Those are not the binary's ranges and have not been reconciled with the
  XML. Phase 1 step 3 is where that happens.
- The 128-turn `Dual Pedal Optimization Plan` thread is staged at
  `chatgpt-threads/gpt-dual-pedal-optimization-plan.md` and has not been read in
  full. The architecture above comes from `README_AND_HANDOFF_V12.md`, which is
  that thread's own handoff artifact, so the rig design rests on a primary source
  rather than on the transcript.
- No hardware was touched in producing this plan.

## Scripts and sources

| File | Does |
|---|---|
| `validate_144_design.py` | resolves all 1,296 rows against the model table |
| `validate_144_pass2.py` | delay-time, name length, prose values, expression targets, the 36D rename |
| `audit_the_name_audit.py` | tests the name audit's own claims against the binary table |
| `build_alias_map.py` | proposes model renames, refuses to guess an ambiguous one |
| `validate_144_design_report.json` | the full failure list, per slot |
| `model_alias_map_PROPOSED.json` | 14 resolved, 3 unresolved, nothing applied |
| `chatgpt-sources/` | the seven recovered working files |
| `chatgpt-threads/preset-library-design-FULL.md` | the thread with all node types, code and tool output included |

## Related

- `~/Projects/_outputs/ge150/HOW-TO-UPDATE-GE150PRO.md`, the hardware procedure
- `/Users/drwu/Documents/V25_FULL_55_REVIEW_AND_RECONCILIATION.md`, the 55 audited
- Live site: https://7onething1.github.io/ge150-rig/
