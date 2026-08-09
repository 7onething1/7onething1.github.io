# MixWave EHX Big Muff + Deluxe Memory Man: why they don't load

Diagnosed 8 August 2026, Jacks-iMac (iMac18,3, Intel i5-7500, macOS 13.7.8), Ableton Live 11.3.43 Suite.

## Verdict

**The installer worked. The licenses were bought under a different email.**

Both plugins are fully installed, code-signed by MixWave LLC, notarized by Apple, and they pass
Apple's own AudioUnit validation. Nothing about the install failed.

Two Venmo payments of **$39.00 each went to SP MIXWAVE on 4 August 2026**, $78.00 total. The
MixWave checkout used **brandonxchavez@gmail.com**, so the order confirmation and license emails
went there. The mailbox searched below is `7onething1@gmail.com`, which is why it holds only
marketing.

The plugins hang because **no MixWave license is activated on this machine**. Whether one is
waiting to be activated is answered in one place: the **Available** tab of iLok License Manager.
That app is already signed in, so opening it costs no login.

## The purchase, and where the emails went

MixWave's support documentation states that after checkout a customer receives an order
confirmation email, a separate product download and license email, and a deposit of the licenses
into their iLok account.

The checkout used **brandonxchavez@gmail.com**. That mailbox is not signed in to this Chrome
profile, so the two order emails have not been read and their contents are unknown. Everything
below about email is scoped to `7onething1@gmail.com` only.

| Item | Status | Evidence |
|---|---|---|
| Payment 1 | CHARGED $39.00 | Venmo receipt, SP MIXWAVE, 4 Aug 2026, 2:23 PM PDT |
| Payment 2 | CHARGED $39.00 | Venmo receipt, SP MIXWAVE, 4 Aug 2026, 2:55 PM PDT |
| Order emails, 7onething1 inbox | ABSENT | 0 results, Gmail `in:anywhere` |
| Order emails, brandonxchavez inbox | UNCHECKED | account not signed in, no login attempted |
| iLok license **activated** | NO | `iloktool auths`, 0 MixWave of 25 |
| iLok license **deposited** (Available) | UNCHECKED | no CLI can read it, GUI only |

**`iloktool auths` lists only ACTIVATED licenses.** A license that was deposited and never
activated does not appear there. So a zero result rules out activation, and it does not rule out a
license waiting in the Available bin for one right-click.

Searching `7onething1@gmail.com` for `mixwave`, `ilok`, and `paceap`, including Spam and Trash,
returns 14 messages across all history. Every MixWave message is marketing:

```
MixWave  | The D.W. Fearn Collection, Back at Intro Price | 8 Aug   promo
MixWave  | Your code is expiring!                         | 6 Aug   15% code RVXGZWWH
MixWave  | Thanks for subscribing! And, as promised       | 4 Aug   15% code RVXGZWWH
Venmo    | Receipt from SP MIXWAVE - $39.00               | 4 Aug   x2 in thread
iLok     | iLok.com Account Activation                    | 30 May  account signup
```

**A different email address at checkout explains all of it.** MixWave's support documentation
covers this case directly and will resend against the name on the order. The two order emails are
most likely unread in brandonxchavez@gmail.com.

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
then has to be activated to a location (this machine, iLok Cloud, or a USB iLok). Whether the
deposit happened is unknown from the command line, since `iloktool` reports activated licenses
only. The Available tab in the GUI is the one place that answers it.

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

**Do not rescan until the licenses actually arrive.** Every scan of an unlicensed MixWave plugin
re-triggers the 8-minute freeze and re-caches the same failure. That is also why Live has been slow
to start.

## The fix

Start with the thirty-second check, because it may end the whole thing.

1. **Open iLok License Manager and look at the Available tab.** The app is already signed in: the
   password is in the macOS keychain and the cloud session is open, so it does not prompt for
   anything. If the two MixWave licenses are there, right-click each one, choose
   **Activate**, pick this computer or iLok Cloud, and skip to step 4.
2. If Available is empty, check **brandonxchavez@gmail.com** for the MixWave order confirmation and
   the separate download/license email. That address was used at checkout. The license email
   carries the link that deposits the licenses into an iLok account.
3. If neither exists, open a MixWave support ticket at
   [support.mixwave.com](https://support.mixwave.com/help/contact-support) using the chat button at
   the bottom right. There is no published support email and no phone support. Ready-to-paste
   ticket: `~/Projects/_outputs/mixwave-ehx-fix/mixwave_support_ticket.txt`. Lead with the payer
   name Brandon Chavez and the two payment times. Venmo purchase protection at
   [help.venmo.com](https://help.venmo.com) or (855) 812-4430 is the backstop.
4. Quit Ableton Live completely, then run:
   `~/Projects/_outputs/mixwave-ehx-fix/repair_live_plugin_cache.sh`
   It backs the database up first, refuses to run if Live is open, and warns if the licenses still
   are not active.
5. Open Live, Preferences > Plug-Ins, hold Option and click Rescan. Both plugins appear under
   Plug-Ins > MixWave.

Check at any point whether the licenses have arrived:

```
iloktool auths | grep -i -e mixwave -e muff -e memory
```

Empty result means no MixWave license is activated on this machine yet.

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
