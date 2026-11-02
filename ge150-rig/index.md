# Mooer GE150 Rig Sheet

Live: https://7onething1.github.io/ge150-rig/

Built 2026-11-02 on Jacks-iMac. Covers three things: why the editor saw nothing, what the
current update is, and every GE150 preset recovered out of ChatGPT.

## Three faults found

1. **The pedal was never on the USB bus.** A full `system_profiler SPUSBDataType` sweep showed
   a Samsung T7 Shield, Bluetooth, the FaceTime camera, a 2.4G receiver and a PNY flash drive.
   No Mooer device. Brandon confirmed the device had not been added yet.
2. **The running app was the firmware updater, not the editor.** The live process was
   `/Applications/GE150PLUS.app/Contents/MacOS/GE150PLUSUpdate`. The editor is a nested bundle at
   `/Applications/GE150PLUS.app/Contents/MacOS/GE150PLUS.app`.
3. **A charge-only cable looks the same as a broken app.** The editor links `libusb-1.0.0.dylib`
   and `libhidapi.0.dylib`, so it talks raw USB/HID, not MIDI, and needs a true data cable.

## Update status

| Item | On this Mac | Newest published |
|---|---|---|
| GE150 Plus editor | V2.1.3 (`config.ini`) | V2.1.3, 2026-08-13 |
| GE150 Plus firmware | `GE150PLUS_V2.1.3.mr`, 1,158,272 bytes | V2.1.3, notes stamped 2026.8 |
| GE150 Pro / Max | n/a | V2.1.4 / V2.1.6 |

Already current. Downloaded 2026-10-31 16:48 per Firefox history. V2.1.3 added NAM A2 model
conversion and import, plus unspecified bug fixes.

## Open question

Every recovered preset targets the **original GE150** (`.mo`, `fileInfo.device = "MOOER GE150"`).
The software installed is for the **GE150 Plus**. Mooer states presets do not move between the
original GE150 and the Plus/Pro/Max family. One look at the faceplate settles which editor is
needed. The tone values transfer by hand either way.

## Recovered presets

- **12 tape-echo presets** rebuilt from the original ChatGPT generator code, since the sandbox zip
  was never downloaded and has expired. 12/12 validate, 12/12 distinct time/level/feedback.
  4 Appleseed Cast, 3 Pavement, Built to Spill, Modest Mouse, slapback, dub, huge ambient.
- **Appleseed Cast full patch**, all nine blocks, 65 USTW + USBASS410, TAPE 450 ms / level 34 /
  feedback 38, SPRING 22.
- **6 John Mayer presets** on CAROL CL / CAROL OD / 65 US TW / 65 US DX.
- **Pantera**, PV5050 DS + PV 5050 412, with per-record variants for Cowboys, Vulgar and
  Far Beyond Driven.
- **El Capistan to GE150 map**, 12 rows, one documented gap (crinkle/bias/head wear).

## Artifacts

- Presets: `~/Projects/_outputs/ge150/GE150_Tape_Echo_Pack_2026-11-02/` (12 `.mo`, SETTINGS.tsv,
  SETTINGS.json, README.txt)
- Zip: `~/Projects/_outputs/ge150/GE150_Appleseed_Pavement_Tape_Presets_2026-11-02.zip`
- Page: `~/Projects/drwu-overflow/ge150-rig/index.html`

## Stated limits

No preset tested on hardware, because the pedal is not connected. Tone values carry ChatGPT's own
citations and were not re-verified against the Mooer manual here. Whether the `.mo` files import
depends on the model question above.
