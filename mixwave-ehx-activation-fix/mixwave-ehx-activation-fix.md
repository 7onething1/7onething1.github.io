# MixWave EHX Big Muff + Deluxe Memory Man: why they don't load

Diagnosed 8 August 2026, Jacks-iMac (iMac18,3, Intel i5-7500, macOS 13.7.8), Ableton Live 11.3.43 Suite.

## Verdict

**The installer worked. The plugins are not activated.**

Both plugins are fully installed, code-signed by MixWave LLC, notarized by Apple, and they pass
Apple's own AudioUnit validation. Nothing about the install failed.

There is **no MixWave license activated on this machine**. When an unlicensed MixWave plugin is
loaded, PACE's copy-protection wrapper blocks on a socket read that never returns, so the plugin
hangs indefinitely instead of reporting a licensing error. That hang is what killed Ableton's
plugin scan.

## Install state (all verified good)

| Check | Big Muff | Deluxe Memory Man |
|---|---|---|
| AudioUnit component | present | present |
| VST3 | present | present |
| AAX | present | present |
| Presets | present | present |
| Installer receipt | written | written |
| Architecture | x86_64 + arm64 | x86_64 + arm64 |
| Code signature | valid | valid |
| Notarization | accepted | accepted |
| Quarantine flag | none | none |
| AU registers with macOS | yes | yes |
| auval static tests | PASS | PASS |
| **Plugin instantiates** | **HANGS** | **HANGS** |
| **iLok license active** | **NO** | **NO** |

Gatekeeper:

```
/Library/Audio/Plug-Ins/VST3/MixWave EHX Big Muff.vst3: accepted
source=Notarized Developer ID
origin=Developer ID Application: MixWave LLC (V2J4XC4KHG)
```

## The failure

`auval` clears every static test on both plugins, then freezes when the plugin is opened:

```
VALIDATING AUDIO UNIT: 'aufx' - 'MEBM' - 'MxWv'
AudioUnit Name: MixWave EHX Big Muff
Component Version: 1.0.1 (0x10001)

* * PASS
--------------------------------------------------
TESTING OPEN TIMES:
COLD:            <- never returns
```

Sampling the frozen process:

```
2589 Thread_1628277   DispatchQueue_1: com.apple.main-thread
  2589 handleWrapEvent  (in PaceProtectionWrapper) + 715
    2589 handleWrapEvent  (in PaceProtectionWrapper) + 118899
      2589 handleWrapEvent  (in PaceProtectionWrapper) + 5176343
        2589 __recvfrom  (in libsystem_kernel.dylib) + 10    <- blocked here
```

2589 of 2589 samples on Big Muff. 2607 of 2607 on Memory Man.

Each frozen instantiation also spawned a PACE "Software Activation" helper, the prompt that asks
you to authorize the product. It runs as a background UI element, so a plugin-scanner process can
never answer it.

```
executable path="/Library/Frameworks/PACEEdenExperience.framework/Versions/Current/Software Activation"
pid = 25696 type="UIElement" Version="6.0.0.6838"
checkin time = 195 seconds ago
```

## License state

iLok cloud session open under `7onething1@gmail.com`. 25 authorizations active, zero MixWave.

Active: Universal Audio (175B & 176, Warm 4, Dream 65, PolyMAX, SSL G Bus, SSL E Channel,
Teletronix LA-2A, Teletronix LA-3A, Waterfall B3, Lexicon 224, Pultec Passive EQ, Fairchild Tube
Limiter) and Antares (AutoTune, Vocal series).

MixWave / EHX / Big Muff / Memory Man: **0 matches**.

MixWave licenses go through PACE iLok. The license is deposited into the iLok account at purchase,
then has to be activated to a location (this machine, iLok Cloud, or a USB iLok). A deposited
license that was never activated does not appear in the active list.

## Timeline, 6 August 2026

| Time | Event |
|---|---|
| 18:09:55 | Deluxe Memory Man installer opened |
| 18:12:15 | Memory Man receipts written, install succeeded |
| 18:12:56 | Big Muff receipts written, install succeeded |
| 18:52:11 | Ableton's scanner starts checking Big Muff |
| 18:59:51 | iLok License Support 6.0.0 begins installing |
| 19:00:14 | iLok License Support finishes |
| 19:00:17 | Scanner gives up after 8 minutes 6 seconds |
| 19:00:17 | Scanner starts Memory Man, then the log ends |
| Aug 8 18:27 | Live rescans, reads the cached failure, skips both |

From `PluginScanner.txt`:

```
18:52:11 info:  VST3: check plugin at path: "/Library/Audio/Plug-Ins/VST3/MixWave EHX Big Muff.vst3"
19:00:17 error: Failed to load plugin: calling 'bundleEntry' failed
19:00:17 info:  VST3: not a plugin
19:00:17 info:  VST3: check plugin at path: "/Library/Audio/Plug-Ins/VST3/MixWave EHX Deluxe Memory Man.vst3"
         (scanner log ends here, the process died mid-check)
```

## Why Ableton still hides them

Live cached the 6 August failure and skips both plugins on every later scan.

| Module | scanstate | Rows in plugins table | Meaning |
|---|---|---|---|
| 107 healthy modules | 1 | 1,740 | scanned, usable |
| MixWave EHX Big Muff | 3 | 0 | failed, cached |
| MixWave EHX Deluxe Memory Man | 2 | 0 | failed, cached |

**Do not rescan before the licenses are activated.** Every scan of an unlicensed MixWave plugin
re-triggers the 8-minute freeze and re-caches the same failure.

## The fix

1. Open **iLok License Manager**, sign in, click **Available** at the top right. Right-click each
   MixWave license, choose **Activate**, pick this computer or iLok Cloud. Each MixWave license
   includes two activations.
2. If the Available tab is empty, the license was never deposited. Contact MixWave support with the
   order number and the iLok User ID. This happens when an iLok User ID was not supplied at
   checkout, or when a reseller code has not been redeemed.
3. Quit Ableton Live completely, then run:
   `~/Projects/_outputs/mixwave-ehx-fix/repair_live_plugin_cache.sh`
   It backs the database up first, refuses to run if Live is open, and warns if the licenses still
   are not active.
4. Open Live, Preferences > Plug-Ins, hold Option and click Rescan. Both plugins appear under
   Plug-Ins > MixWave.

Verify activation at any point:

```
iloktool auths | grep -i -e mixwave -e muff -e memory
```

Empty result means the licenses still are not active on this machine.

## Commands used

```
pkgutil --pkgs | grep -i mixwave              # install receipts
grep -i mixwave /var/log/install.log          # installer history
lipo -archs <binary>                          # architectures
codesign -dv / spctl -a -vvv -t install       # signature, notarization
xattr -l <bundle>                             # quarantine flag
auval -v aufx MEBM MxWv                       # Big Muff validation
auval -v aufx MEMM MxWv                       # Memory Man validation
sample <pid> 3 -mayDie                        # the frozen stack
iloktool auths / cloud --status -v            # license state
lsappinfo list                                # the activation helper
sqlite3 Live-files-53.db                      # Live's plugin cache
~/Library/Preferences/Ableton/Live 11.3.43/PluginScanner.txt
```

## Sources

- [MixWave: iLok & iLok License Manager](https://support.mixwave.com/help/ilok-and-ilok-license-manager)
- [MixWave: FAQ Plugin Installation & Activation](https://support.mixwave.com/help/faq-plugin-installation-and-activation)
- [MixWave: Ableton Live Troubleshooting](https://support.mixwave.com/help/ableton-live-troubleshooting)
- [Sweetwater: MixWave Software Activation Instructions](https://www.sweetwater.com/sweetcare/articles/mixwave-software-activation-instructions/)
