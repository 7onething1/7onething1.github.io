# MixWave EHX Big Muff + Deluxe Memory Man: why they don't load

Diagnosed 8 August 2026, Jacks-iMac (iMac18,3, Intel i5-7500, macOS 13.7.8), Ableton Live 11.3.43 Suite.

## Verdict

**Everything was bought and delivered. The licenses just need activating.**

Both plugins are fully installed, code-signed by MixWave LLC, notarized by Apple, and they pass
Apple's own AudioUnit validation. Nothing about the install failed.

Both orders completed. **#MW58681 EHX Deluxe Memory Man** and **#MW58682 EHX Big Muff**, $39.00
each, 4 August 2026, Mastercard ending 2819 through Venmo. MixWave's order status page for each one
reads **"The licenses have been delivered to 7onething1"** with fulfillment status **Complete**.

So the licenses are in the iLok account under username **7onething1**, deposited and **not
activated**. A deposited license does nothing until it is activated to a location, and an
unactivated plugin hangs rather than reporting a license error, which is what froze Ableton's scan.

**The whole remaining fix is: iLok License Manager, Available tab, right-click each license,
Activate.** The app is already signed in, so it costs no login. No support ticket, no refund claim,
nothing owed.

## The purchase, and where it actually stalled

The checkout used **brandonxchavez@gmail.com**, which is Gmail account `u/2` in the same Chrome
profile. Both order emails are there, and both order status pages confirm delivery.

| Item | Status | Evidence |
|---|---|---|
| Payment 1 | CHARGED $39.00 | Venmo receipt, SP MIXWAVE, 4 Aug 2026, 2:23 PM PDT |
| Payment 2 | CHARGED $39.00 | Venmo receipt, SP MIXWAVE, 4 Aug 2026, 2:55 PM PDT |
| Order #MW58681, Deluxe Memory Man | COMPLETE | status page: delivered to 7onething1 |
| Order #MW58682, Big Muff | COMPLETE | status page: delivered to 7onething1 |
| iLok license **deposited** | YES | both status pages, iLok username 7onething1 |
| iLok license **activated** | NO | `iloktool auths`, 0 MixWave of 25 |

MixWave does not deposit a license until the buyer supplies an iLok username on the order status
page. The order email spells it out:

```
Redeem & Activate
Your license(s) will be deposited into your iLok account automatically
when you provide your iLok username on the order status page.
```

That step was done, so the licenses reached the account. **Deposit is not activation.** They have
been waiting in the Available bin ever since.

The two mailboxes hold different halves of the story, which is what made this look like a delivery
failure. `7onething1@gmail.com` holds only marketing. `brandonxchavez@gmail.com` holds the orders:

```
MixWave  | #MW58682 | Your order is complete    | 4 Aug 4:56 PM   Big Muff
MixWave  | #MW58681 | Your order is complete    | 4 Aug 4:23 PM   Deluxe Memory Man
MixWave  | Another order?! Thanks so much!      | 5 Aug
MixWave  | 194608 is your code                  | 6 Aug
```

**Payment, order, download, and license deposit all succeeded.** The only step never taken is the
last one, activating the deposited licenses in iLok License Manager.

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
then has to be activated to a location (this machine, iLok Cloud, or a USB iLok). `iloktool auths`
reports **activated** licenses only, so it cannot see a deposited one, and its zero result carries
no information about ownership. The Available tab in the GUI is the one place that shows a deposit.

The iLok cloud session is open and the password is stored in the keychain, which `iloktool`
confirms. **iLok License Manager will not ask for a sign-in.** The obstacle was never a login.

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

**Activate first, then rescan.** Every scan of an unlicensed MixWave plugin
re-triggers the 8-minute freeze and re-caches the same failure. That is also why Live has been slow
to start.

## The fix

Three steps, and the first one is the only part that needs a human.

1. **iLok License Manager, Available tab, activate both.** The app is already signed in, so it
   prompts for nothing. Right-click **MixWave EHX Big Muff**, choose **Activate**, pick this
   computer or iLok Cloud. Repeat for **MixWave EHX Deluxe Memory Man**. Each license carries two
   activations, so a second machine stays possible.
2. **Quit Ableton Live completely**, then run the repair script. Live cached a failed scan on
   6 August and skips both plugins until that cache is cleared. It backs the database up first,
   refuses to run if Live is open, and refuses to run if the licenses still are not active.
   `~/Projects/_outputs/mixwave-ehx-fix/repair_live_plugin_cache.sh`
3. **Open Live, Preferences > Plug-Ins, hold Option and click Rescan.** Both plugins appear under
   Plug-Ins > MixWave.

Confirm the activation took:

```
iloktool auths | grep -i -e mixwave -e muff -e memory
```

Two lines means it worked. An empty result means the Activate step has not gone through, since
`iloktool` reports activated licenses only.

**No support ticket is needed.** Both orders read Complete and both licenses are deposited. Nothing
is owed and nothing needs disputing.

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
