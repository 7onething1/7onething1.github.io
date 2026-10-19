# What This iMac Has Switched Off

Route: `/imac-vs-macbook-capability`
Built: 2026-10-19 on Jacks-iMac
Host: GitHub Pages (`7onething1.github.io`). This Mac does not deploy drwu-htmls to Vercel.

## The ask

Brandon: "but like the other mac did things, it automatically creates sub chats, runs parallel
things automatically, has gates that are better etc, it took off skills / find out"

He was correcting my earlier claim that the MacBook "found no faster setting". He was right on all
four counts.

## Where my earlier answer was wrong

I read one README, about the narrow job of switching off thirteen claude.ai add-ons, and concluded
from its silence on orchestration that the capability did not exist. That is treating the absence of
a topic in one document as the absence of a thing. The filesystem says otherwise.

## His four claims, checked

| Claim | Verdict | Evidence |
|---|---|---|
| It took off skills | Confirmed, by two mechanisms | 26 in `~/.claude/skills_disabled` (24 auto-disabled 2026-07-17, reason `unused+unreferenced`) against 179 active; 13 add-ons in `~/.claude/skills/.trash`, 9 left in `~/.claude/skills/synced` |
| Runs parallel things automatically | Confirmed, running now | 41 `com.drwu.*` plists on disk, 40 loaded; n8n holding PID 914 at measurement, reveal-server 897, claude-gpu-watch 905, arena-throttle-proxy 885, clip-sync 891; one 07:00 crontab entry |
| Has gates that are better | Confirmed as a direction | `completion_stop_gate.py`, `no_idle_stop_gate.py`, `stop_gate.py`, `quit_gate.py`, `notation_evidence_gate.py`, `verdict_gate.py`, `gpif_share_gate.py`, `drum_reality_gate.py`, `impossible_gate.py` all arrived from MacBook bundles in iCloud `sfg/` |
| Automatically creates sub chats | Capability present, blocked by policy | `~/CLAUDE.md` line 13 forbids subagents and parallel chats; `opus_spawn_gate.py` hard-denies `Agent|Task` until `~/.claude/.opus_ok` is touched (15-minute one-shot) |

## The two findings that matter most

**1. The clean-up removed the parallel-research skill, and I reported the clean-up without noticing.**
`deep-research` is one of the thirteen now in the trash. Its own description says it coordinates
research subagents and should be used only where a subagent-spawning tool exists; its procedure
spawns research subagents in parallel, then a report writer. I verified that clean-up as finished
and never looked at what came off with it.

**2. A usage-based sweep always removes the monitoring layer.**
`fleet-dashboard` and `system-pulse` are both switched off, both recorded as `unused+unreferenced`
on 2026-07-17. Those two are exactly the instruments that answer Brandon's question: one reports
what the fleet is doing right now, the other ranks skills by real usage and judges whether the
connectors and newer systems are being adopted. A status dashboard is invoked rarely by design, so
a sweep that scores by invocation count will delete the system's self-awareness and leave nothing
able to report that it did.

## Why the two Macs differ at all

The config-sync installer states that `CLAUDE.md` is per-machine and never written over, because it
hardcodes the source Mac's home, drives and anchors. So the MacBook runs its own `CLAUDE.md`, which
need not carry the one-session clause. The capability gap is most likely one paragraph in the single
file that sync refuses to copy.

## Levers, all reversible

```
python3 ~/.claude/skills_disabled/toggle.py enable fleet-dashboard
python3 ~/Projects/fleet-dashboard/build_dashboard.py     # script intact, 4,940 bytes

python3 ~/.claude/skills_disabled/toggle.py enable system-pulse
python3 ~/.claude/skills/system-pulse/build_system_pulse.py
# do NOT run its deploy.sh here; it pushes to Vercel through the CLI

cp -R ~/.claude/skills/.trash/1792272791312-27828-YYTbyK/deep-research ~/.claude/skills/deep-research

touch ~/.claude/.opus_ok     # permits one sub-agent spawn, 15 minutes
```

`toggle.py` moves directories between `skills` and `skills_disabled` and never deletes.

## Not done, and not claimed

Nothing was switched on, restored or changed to produce this. The one-session clause in `~/CLAUDE.md`
is Brandon's standing instruction, so sub chats stay off here until he changes that line. I could not
read the MacBook's own `CLAUDE.md`, hooks or settings directly from this machine; the MacBook side of
the comparison is inferred from the bundles it shipped into iCloud `sfg/` and from what the
config-sync installer documents, and it is labelled that way above.
