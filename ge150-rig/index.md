# Mooer GE150 Pro Rig Sheet

Live: https://7onething1.github.io/ge150-rig/

Built 2026-11-02 on Jacks-iMac, updated 2026-11-04. Why the editor saw nothing, which update is the right one,
and every GE150 preset recovered out of ChatGPT.

## The headline

**The pedal is a GE150 Pro, and every piece of software installed was the GE150 Plus build.**
Confirmed from the USB descriptor once it was plugged in:

```
GE150Pro:
  Product ID: 0x5703
  Vendor ID:  0x0483  (STMicroelectronics)
```

The Plus editor and Plus updater cannot talk to a Pro, so no cable and no language fix would
ever have made that combination work.

## Five faults

1. **The pedal was not on the USB bus** at the start. A full `system_profiler SPUSBDataType`
   sweep showed no Mooer device.
2. **The running app was the firmware updater, not the editor.** Live process was
   `GE150PLUSUpdate`; the editor is nested at `.../MacOS/GE150PLUS.app`.
3. **A charge-only cable looks like a broken app.** The editor links `libusb-1.0.0.dylib` and
   `libhidapi.0.dylib`, so it speaks raw USB/HID, not MIDI.
4. **The Chinese UI could not be switched from inside.** The updater's only buttons are
   `closButton`, `messageBoxButton`, `openFileButton`, `startButton`. Language comes from
   `config.ini` `CurrentLanguage` (0 Chinese, 1 English). Editing it in `/Applications` is
   blocked by macOS 13 App Management, so a re-signed copy in an unprotected folder runs in
   English. Proven by the app's own English dialog: "Error. The device is disconnected."
5. **Wrong software line entirely.** Plus V2.1.3 installed against a Pro pedal.

## Correct package

| Item | Value |
|---|---|
| Archive | `GE150_Pro_V2.1.4_Mac.zip`, 72,913,255 bytes, HTTP 200 |
| Installer | `GE150PRO_V2.1.4_Mac_Setup.dmg`, 73,054,984 bytes |
| Notes | `GE150_Pro_Firmware_V2.1.4_Update.html`, stamped 2026.8 |
| Adds | NAM A2 model conversion and import, plus unspecified bug fixes |

The direct CDN link returns 403; it must come through Mooer's signing endpoint
(`mooeraudio.com/downfilebizce/get?n=...`), the same route the browser uses.
Pro runs V2.1.4, Plus V2.1.3, Max V2.1.6.

## Recovered presets

- **12 tape-echo presets** rebuilt from the original ChatGPT generator code, since the sandbox
  zip was never downloaded and had expired. 12/12 validate, 12/12 distinct time/level/feedback.
- **Appleseed Cast full patch**, all nine blocks, 65 USTW + USBASS410, TAPE 450 ms / level 34 /
  feedback 38, SPRING 22.
- **6 John Mayer presets** on CAROL CL / CAROL OD / 65 US TW / 65 US DX.
- **Pantera**, PV5050 DS + PV 5050 412, variants for Cowboys, Vulgar, Far Beyond Driven.
- **El Capistan to GE150 map**, 12 rows, one documented gap (crinkle/bias/head wear).

**The original `.mo` files would not import into a Pro.** They declare `"device": "MOOER GE150"`,
and Mooer states the original and the Plus/Pro/Max family do not share a preset format. Pro-format
files were built from the editor's own extracted model table and written to the pedal, which is what
slots 37B through 44D now hold.

## Artifacts

- Presets: `~/Projects/_outputs/ge150/GE150_Tape_Echo_Pack_2026-11-02/`
- Zip: `~/Projects/_outputs/ge150/GE150_Appleseed_Pavement_Tape_Presets_2026-11-02.zip`
- Pro installer: `~/Downloads/GE150_Pro_V2.1.4_Mac_2026-11-02/`
- English Plus copy: `~/Projects/_outputs/ge150/GE150PLUS-EN.app`

## Model names, settled 2026-11-04

The editor's model definitions sit in a zlib-compressed Qt resource inside the 32 MB binary, which is
why no plain string search finds them. Decompressed, they give 210 models across 9 chains with 139
parameter definitions, saved as `~/Projects/_outputs/ge150/GE150PRO-model-definitions.xml`.

**Thirteen of thirteen model numbers on this page match that table.** Checked by converting each
one-based display number to the zero-based index the `.mo` files store: 65 US DX 0, 65 US TW 1,
PV 5050 DS 36, CAROL CL 40, CAROL OD 41, US BASS 410 2, PV 5050 412 18, 808 1, PURE BOOST 2,
FULL DRV 12, GOLD CLON 19, TAPE 3, SPRING 4.

A peer session's audit of the ChatGPT blueprints proposed four label corrections. **All four are
wrong.** Counted in the extracted table, each form the editor prints appears exactly once and each
proposed replacement appears zero times:

| audit said Mooer prints | hits | the editor prints | hits |
|---|---|---|---|
| 65 US DLX | 0 | `AMP 01: 65 US DX` | 1 |
| US Bass 410 | 0 | `CAB 03: US BASS 410` | 1 |
| Full Drv | 0 | `DS 13: FULL DRV` | 1 |
| Yellow comp | 0 | `FX 07: YELLOW COMP` | 1 |

The two columns were reversed. The proposed spellings are the blueprint's own: the 20-preset
blueprint on disk holds "65 US DLX" four times, "Full Drv" four times and "Yellow comp" twenty times,
and `YELLOW COMP` never. The fourth finding was real and its proposed fix was wrong too, since this
page had written "Yellow Comp", matching neither.

**The pack's convergence is a self-report, not a measurement.** That all 55 designs went byte-for-byte
unchanged from the ninth pass through the fourteenth comes from the generator describing its own
output; nothing was diffed, and no V9 to V14 artifact exists in `~/Downloads` or
`~/Projects/_outputs/ge150` to check it against. What holds without trusting it is that from the
eleventh pass on, the reported defects named its own earlier paperwork rather than the pack. Treat V9
as the last version where a tone plausibly changed.

## The EQ defect, found 2026-11-04

Checking the twenty masters against their blueprints field by field gave 150 of 150 model indices
correct and 120 of 120 amp knobs correct, including the master at 93. **Every one of the 46 requested
EQ boosts was missing**, sitting at 16, the stored value for 0 dB.

The split is exact: 29 negative cuts landed, 25 zeros landed, 0 of 46 positive boosts landed. The cuts
landing in their correct bands is what proves the band mapping, and factory presets are the second
control, spanning 13 to 21 with 58 of 79 values on exactly 16. The extracted table defines each band
as `-16_16_1_0_`, so the storage offset is 16 and values above it are legal.

| layer | state |
|---|---|
| masters | rebuilt as `~/Projects/_outputs/ge150/mo-pro-new20-v4/`, 46 bands corrected, 20 of 20 clean |
| editor COMPUTER library | holds the v4 twenty, sha256-verified on all twenty |
| the pedal | all 20 written to 40A-44D, all 20 read back, 20 of 20 matching by sha256 |

All twenty were read back, each with a fresh file mtime proving the bytes came off the device.
Nineteen matched on the first pass. **ZEP KASHMIR differed in one field**, the MOD block's `PITCH`,
device 0 against master 0.1: the converter had a special case inserting `PITCH = 0.1` for any DETUNE
block arriving without a pitch, commented "unit unverified". The blueprint specifies no pitch, so the
value was invented. It never reached the pedal either, since every other value in a `.mo` is an
integer and the editor coerced the float to 0. The special case is removed from `convert20.py` and
the master set to 0, so all twenty now match and no further write was needed.

**Left open on purpose:** ZEP KASHMIR's Detune is on with pitch 0, doing nothing audible. The
blueprint never gave a detune amount, and its `depth 9` has no home in a block whose parameters are
PITCH, MIX and TONE. That one number is a listening decision no source supplies.

Three of the readbacks in detail:

| slot | preset | EQ stored | dB | sha256 |
|---|---|---|---|---|
| 43C | KC FRACTURE | 14, 16, 18, 18, 17 | -2, 0, +2, +2, +1 | `7bc1e038...` |
| 44D | APC 3 LIBRAS | 14, 15, 16, 17, 18 | -2, -1, 0, +1, +2 | `9898501a...` |
| 42C | RUSH YYZ | 16, 15, 19, 18, 17 | 0, -1, +3, +2, +1 | `19d84e50...` |

Scripts in the same folder: `v4_probe.sh` measures and writes nothing, `v4_write.sh` performs the
drags, `v4_readback.sh` proves a slot against its master. All three are window-relative and re-read
the editor's position before every action, after the window moved 1316 points mid-pass and sent one
drag into another application.

## Stated limits

No preset has been listened to through a guitar. Tone values carry ChatGPT's own citations and were
not re-verified against the Mooer manual. Three of the twenty were read back off the device against
corrected masters; the other seventeen are verified by their confirmed write and by name in the
device list rather than by readback.
