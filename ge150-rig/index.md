# Mooer GE150 Pro Rig Sheet

Live: https://7onething1.github.io/ge150-rig/

Built 2026-11-02 on Jacks-iMac. Why the editor saw nothing, which update is the right one,
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

**These `.mo` files will not import into a Pro.** They declare `"device": "MOOER GE150"` and
Mooer states the original and the Plus/Pro/Max family do not share a preset format. Every value
still transfers by hand. Check model names against the Pro's own list, since it ships a larger
model set than the original GE150 these settings were written for.

## Artifacts

- Presets: `~/Projects/_outputs/ge150/GE150_Tape_Echo_Pack_2026-11-02/`
- Zip: `~/Projects/_outputs/ge150/GE150_Appleseed_Pavement_Tape_Presets_2026-11-02.zip`
- Pro installer: `~/Downloads/GE150_Pro_V2.1.4_Mac_2026-11-02/`
- English Plus copy: `~/Projects/_outputs/ge150/GE150PLUS-EN.app`

## Stated limits

No preset tested on hardware. Tone values carry ChatGPT's own citations and were not re-verified
against the Mooer manual. The Pro's model-name list has not yet been checked against the settings
on this page.
