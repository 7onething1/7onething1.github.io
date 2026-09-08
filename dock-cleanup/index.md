# Dock Cleanup

Brandons-MacBook-Pro, 2026-09-08. The macOS Dock at the bottom of the screen went from **37 app
icons to 20**. No application was deleted.

Live page: https://7onething1.github.io/dock-cleanup/

## How "don't use much" was measured

Spotlight's `kMDItemLastUsedDate` returned empty for every app in `/Applications`, so it could not
carry the ranking. Each "days idle" figure is the newest modification time across that app's
`~/Library/Preferences/<bundle-id>.plist`, `Saved Application State`, `Containers`, `Caches`, and
`HTTPStorages`. That is a proxy for a launch log. An app writing preferences on a background timer
reads fresher than real usage, and an app that never writes reads staler.

## Removed, 17 of 37

| App | Days idle | Last signal | Reason |
|---|---:|---|---|
| SoulseekQt | — | never | Broken path, `/Volumes/SoulseekQt/SoulseekQt.app` is not mounted |
| Google Chrome | 5 | 2026-09-02 | Duplicate, second of three identical icons |
| Google Chrome | 5 | 2026-09-02 | Duplicate, third of three identical icons |
| SoulseekQt | 315 | 2025-10-27 | Idle |
| Waves Central | 211 | 2026-02-09 | Idle |
| Kindle | 153 | 2026-04-08 | Idle |
| Bear | 136 | 2026-04-24 | Idle |
| Automator | 123 | 2026-05-07 | Idle |
| inMusic Software Center | 111 | 2026-05-20 | Idle |
| Preview | 82 | 2026-06-18 | Idle |
| QuickTime Player | 82 | 2026-06-18 | Idle |
| Safari | 82 | 2026-06-18 | Idle, browsing happens in Firefox and Chrome |
| Phone | 80 | 2026-06-19 | Idle |
| Notes | 74 | 2026-06-25 | Idle |
| Screen Sharing | 73 | 2026-06-26 | Idle |
| Canva | 59 | 2026-07-10 | Idle |
| TextEdit | 54 | 2026-07-15 | Idle |

## Kept, 20 of 37

System Settings (0), Spotify (0), VLC (0), Messages (0), MTGA (0), Claude (0), Calendar (0),
Epic Games Launcher (1), Firefox (1), FaceTime (2), Cloudflare WARP (3), Numbers (4),
Google Chrome (5), Pages (6), Roblox (7), Dictionary (7), Photos (8), Ableton Live 11 Suite (11),
Auto-Tune Central (19), Terminal (26). Days idle in parentheses. The Downloads stack on the right
side of the Dock was left alone.

## Nothing was deleted

All 17 application bundles were checked on disk after the edit and every one is still present.
Removing a Dock icon changes a preferences key. Launchpad and Spotlight still open every app in the
removed table.

## Restore

Restoring the backup puts back exactly these 17 icons in their original order and positions:
SoulseekQt (disk image), Google Chrome, Google Chrome, SoulseekQt, Waves Central, Kindle, Bear,
Automator, inMusic Software Center, Preview, QuickTime Player, Safari, Phone, Notes, Screen Sharing,
Canva, TextEdit. The 20 kept icons are unaffected.

```bash
cp ~/.claude/backups/dock/com.apple.dock.plist.20260908-111610.bak ~/Library/Preferences/com.apple.dock.plist && killall cfprefsd Dock
```

## Method

The edit was written through `CFPreferences` so the preferences daemon could not overwrite it, then
the Dock was restarted. Editing the plist file directly is the way this silently reverts.

```bash
/usr/bin/python3 ~/.claude/backups/dock/dock_prune.py --dedupe --broken --dry-run
/usr/bin/python3 ~/.claude/backups/dock/dock_prune.py --dedupe --broken
/usr/bin/python3 ~/.claude/backups/dock/dock_prune.py --label "Safari" --label "Preview"
```

## Verification

```
persistent-apps read back:           20 items
apps still on disk:                  17 of 17 present
session_fraud_check.py --hard-only:  PASS, exit 0
```

## Files

- Backup plist: `~/.claude/backups/dock/com.apple.dock.plist.20260908-111610.bak`
- Prune script: `~/.claude/backups/dock/dock_prune.py`
