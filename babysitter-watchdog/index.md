# Babysitter Watchdog

Live: https://7onething1.github.io/babysitter-watchdog/

What runs when the babysitter itself goes quiet. Built 2026-09-07 21:18 from the daemon's own 918-run log.

## The problem, measured

| Finding | Number | Meaning |
|---|---|---|
| Cycles that found chats and raised nothing | 107 of 156 (68 percent) | the alarm carried a subset of what the detector found |
| Sweeps that crashed outright | 1 | a NameError on 09-06 produced one log line and no notification |
| Largest silent gap | 454 min | overnight machine sleep, indistinguishable from a dead daemon |
| A chat parked 8.9 days | 1 alert ever | idle time was absent from the dedup key |

A chat going quiet and the babysitter going quiet produce the same signature.

## Fix 1: idle ladder

The dedup key was `uuid:rules:turns/500`. A dead chat's turn count never grows, so the key froze when the chat stopped. The key now carries an idle step crossing at 1h, 4h, 12h, 1d, 3d, 7d. First sweep after the change re-armed 28 chats, one of them 20.3 days idle.

## Fix 2: seven detectors on silence

- `D1_STALLED` fires when no stamped log line for 13 min on a 5 min job. Catches: the daemon stopped and nothing said so
- `D2_EXITFAIL` fires when launchd reports a non-zero last exit code. Catches: the script died on its own terms
- `D3_SWEEPFAIL` fires when SWEEP-FAILED appears in lines newer than the last check. Catches: the 09-06 NameError, which told nobody
- `D4_CRASH` fires when Traceback, NameError or SyntaxError in fresh lines. Catches: a python fault inside a run that still exits 0
- `D5_PAGESTALE` fires when live board stamp older than 35 min. Catches: local build fresh, GitHub Pages build silently failed
- `D6_PUSHLOST` fires when a push logged inside the poll window with no matching ntfy message. Catches: curl swallowed by || true while the log says pushed
- `D7_MUTED` fires when 24 straight cycles that found chats and raised nothing. Catches: the exact bug that started this, caught generically

Machine sleep is suppressed by comparing the watchdog's own gap against the babysitter's. Matching gaps within 3 minutes mean the Mac paused. A gap on the babysitter alone still alarms.

Mutual liveness: the babysitter pushes WATCHDOG DOWN past a 45 minute watchdog heartbeat, and the watchdog pushes on any detector. Two launchd jobs, different intervals.

## Proof

- Detector selftest: 11 of 11, including two negative cases
- Idle ladder live: `new_alerts=28`, `pushed 28` at 21:18:21
- `com.drwu.babysit-watchdog` loaded at 900s, pushed 2 real alarms on its first pass
- Both ntfy topics confirmed by poll
- Second watchdog pass: zero alarms, muted streak back to 0

## Sources

`~/.claude/skills/babysit-chats/babysit_watchdog.py`, `alert_emit.py`, `babysit_daemon.sh`
