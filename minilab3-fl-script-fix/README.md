# Arturia MiniLab 3 FL Studio script repair

Repair pass on the community FL Studio device script for the Arturia MiniLab 3,
version 1.0.8 by Farès MEZDOUR.

- Live page: https://7onething1.github.io/minilab3-fl-script-fix/
- Repaired scripts: `~/Downloads/complete/complete/complete/Arturia MiniLab 3/`
- Untouched original: `~/Downloads/complete/complete/complete/Arturia MiniLab 3 ORIGINAL-BACKUP-20260817/`
- Stub harness: `fl_stub_harness.py` in the session scratchpad

## Result

21 changes across 6 of the 10 files. 7 were live crashes.

| Build | Scenarios passing | Exit | Malformed SysEx frames |
|---|---|---|---|
| Original backup | 7 of 17 | 1 | 16 |
| Repaired | 17 of 17 | 0 | 0 |

Analog Lab CC forwarding is unchanged at 2 forwards in both builds, so the
handled-flag repair did not cost the V Collection integration.

## The seven crashes

1. `MiniLab3Process.py:516` — `self.Plugin(event, 0, 1)` on a function taking
   one argument. Fired on every Analog Lab knob turn while a stock plugin was
   selected.
2. `MiniLab3Plugin.py:831` — `PARAM_MAP.get(cle)` returned `None` for any CC
   outside the 13-key map, and `None != -1` sent it into `setParamValue`.
3. `MiniLab3Plugin.py:853` — `parameter` / `value` / `mapped` bound only inside
   a conditional, so any plugin map whose knob slots are all `-1` raised
   `UnboundLocalError`. Six stock plugins hit this.
4. `MiniLab3Process.py:255` — `FPC_MAP.get()` wrote `None` into `event.data1`,
   and `PAD_MATRIX_STATE[note - 36]` indexed past a 16-slot list, for any pad
   note outside 36 to 51.
5. `MiniLab3Process.py:571` — `DAWMemory` / `ArturiaMemory` registered as
   dispatcher callbacks with no event parameter.
6. `MiniLab3Plugin.py:98` — `getPluginName` with no validity guard;
   `selectedChannel()` returns 0 rather than -1 on an empty rack.
7. `MiniLab3Display.py:132` — unclamped `int(int(value)*127/100)` into `bytes()`,
   where value arrives as a string, as `None`, or above 100.

## The headline behaviour bug

`device_MiniLab3.py:115` set `event.handled = False`, which is already the
default. Every control the script consumed was then processed a second time by
FL Studio's own MIDI handling.

Flipping the flag alone would swallow every CC on the port. Three call sites
were corrected so the answer is accurate: `Dispatch()` reports `False` for a key
it does not own, `OnCommandEvent` propagates the inner result, and
`OnWheelEvent` claims the event only when it forwarded to Analog Lab.

## Installing

Copy all ten files into the FL Studio hardware scripts folder.

- macOS: `~/Documents/Image-Line/FL Studio/Settings/Hardware/`
- Windows: `%USERPROFILE%\Documents\Image-Line\FL Studio\Settings\Hardware\`

FL Studio is not installed on this Mac, so the repairs were verified against a
stub of the FL Studio API rather than inside the DAW. A hardware test on a
machine running FL Studio is the remaining step.
