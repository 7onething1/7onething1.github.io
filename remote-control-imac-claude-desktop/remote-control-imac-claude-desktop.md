# Remote Control the iMac's Claude Desktop

Five different things get called "remote control the iMac." They are not
interchangeable, they have different setup costs, and picking the wrong one is
why this usually stalls. This page separates them, gives the exact commands for
each, and lists what has to be true on the iMac before any of them survive
being left alone.

**Provenance.** Written from a Claude Code cloud session with no access to
either Mac. Every command and requirement below comes from Anthropic's Claude
Code docs or Apple's macOS documentation, cited at the bottom. Nothing here was
measured on your iMac. The last section is the list of things only the iMac can
answer, with the command that answers each.

## Pick the route first

| You want to | Route | Claude runs on | Setup |
|---|---|---|---|
| Steer a session on the iMac from your phone or any browser | **Remote Control** | iMac | one command |
| Sit at the MacBook, work the iMac's files in the Desktop app | **Desktop SSH session** | iMac | Remote Login + one dialog |
| Throw a task at the iMac from your phone and walk away | **Dispatch** | iMac (Desktop) | pair the phone once |
| See and click the iMac's actual screen | **Screen Sharing** | nothing, it is a window | one toggle |
| Let Claude click the iMac's own GUI | **Computer use** | iMac | toggle + 2 permissions |

Computer use is not a transport. It is a capability you switch on once and then
reach through any of the other four. The first four are how *you* get to the
iMac; computer use is what *Claude* can touch once it is there.

The single most common mistake: reaching for Screen Sharing when you wanted
Remote Control. Screen Sharing gives you a laggy picture of a Mac and needs the
iMac reachable on the network. Remote Control gives you the session itself, with
no inbound ports, over any network, on a phone.

## Route 1 — Remote Control

The native path. A Claude Code session runs on the iMac; claude.ai/code or the
Claude phone app becomes a window into it. Files, MCP servers, and project
config stay on the iMac. Only the conversation crosses the wire.

### Requirements

- Pro, Max, Team or Enterprise. **API keys are not supported.** On Team and
  Enterprise an Owner must first enable Remote Control in the admin settings.
- Signed in through claude.ai. `claude auth login`, not `claude setup-token` —
  a long-lived token only makes model requests and is refused.
- Talking to `api.anthropic.com` directly. Bedrock, Google Cloud's Agent
  Platform, Microsoft Foundry, or a custom `ANTHROPIC_BASE_URL` all disqualify
  it.
- **No `DISABLE_TELEMETRY`, `DO_NOT_TRACK`, `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`,
  or `DISABLE_GROWTHBOOK`** anywhere — shell, or the `env` block of a
  `settings.json`. Each one kills the feature-flag evaluation Remote Control
  depends on, and the failure message does not obviously say so.
- Run `claude` in the project directory once to accept the workspace trust
  dialog. Trust is never saved for the home directory, so start from a project
  directory, not `~`.

### Start it

Three modes. On an iMac that is meant to sit there and be available, server mode
is the right one.

```
cd ~/Projects/whatever
claude remote-control                  # server mode, waits for connections
claude remote-control --name "iMac"    # give it a findable title
```

The process stays in the terminal, prints a session URL, and shows a QR code
when you press spacebar. Useful flags, all given *after* `remote-control`:

| Flag | Does |
|---|---|
| `--name "iMac"` | title in the session list at claude.ai/code |
| `--spawn worktree` | each on-demand session gets its own git worktree |
| `--spawn session` | serve exactly one session, reject the rest |
| `--capacity <N>` | concurrent session cap, default 32 |
| `--permission-mode acceptEdits` | starting permission mode for its sessions |
| `--continue` | bring back the session the last server here started with |
| `--session-id <id>` | bring back one session by ID |
| `--verbose` | connection and session logs |

A global `claude` flag placed *before* `remote-control` is not carried into the
sessions the server creates; Claude Code refuses to start and names the flag.

The other two modes:

```
claude --remote-control "iMac"   # normal interactive session, also remote
/remote-control                  # turn it on inside a running session
```

`/rc` is the short form of the slash command, `--rc` of the flag.

### Connect to it

Open the session URL in any browser, scan the QR code with the Claude app, or
open claude.ai/code and find it by name. In the phone app the session list is
under **Code**. Remote Control sessions show a computer icon with a green dot
when online. `/mobile` inside Claude Code prints a QR to install the app.

### Make it the default

So the iMac does not need a special invocation:

- CLI: `/config` → **Enable Remote Control for all sessions**
- Desktop app: **Settings → Claude Code → Enable remote control by default**
- Settings file: `"remoteControlAtStartup": true` in `~/.claude/settings.json`

Each interactive process then registers its own remote session. To serve several
sessions from one process, use server mode instead.

### Push notifications

With Remote Control active, Claude pushes to your phone when a long task ends or
it needs a decision. `/config` → **Push when Claude decides** and **Push when
actions required**. If `/config` says *No mobile registered*, open the app on
the phone once to refresh its token.

Notifications are skipped while you are typing at the connected terminal. To
extend that to "any time I am physically at the iMac," point
`CLAUDE_CLIENT_PRESENCE_FILE` at a marker file and have a screen-lock listener
create it on unlock and delete it on lock.

### When it drops

| Symptom | What it means | Fix |
|---|---|---|
| Session offline seconds after you quit the terminal | The local process is the session | `claude remote-control` again, or `--continue` within ~4 h |
| `Remote Control requires a claude.ai subscription` | Not signed in, or `ANTHROPIC_API_KEY` is set | unset the key, `claude auth login` |
| `requires a full-scope login token` | Authenticated with `setup-token` / `CLAUDE_CODE_OAUTH_TOKEN` | `claude auth login` |
| `isn't enabled for this account` | Stale cached entitlements after a plan change | `claude auth logout`, `claude auth login`, then `claude doctor` |
| `requires feature-flag evaluation` | One of the four telemetry variables is set | unset it, shell *and* `settings.json` |
| `only available when using Claude via api.anthropic.com` | Bedrock/Foundry/Vertex or a custom base URL | unset the named variable, restart |
| Server mode exits after ~10 min | Network outage while awake, server mode gives up | start it again |
| `could not reach the Remote Control server for about 30 minutes` | Presence heartbeats failing | `/remote-control` to reconnect |

`claude doctor` names which eligibility check failed. Read a disconnect reason
before reconnecting: if it says another device took the session over, or that
you ended it elsewhere, running `/remote-control` takes it *back* from there.

### Resuming after you stop the server

Ctrl+C leaves the sessions un-archived. In the same directory, within about four
hours:

```
claude remote-control                    # bring back all of them
claude remote-control --continue         # just the one it started with
claude remote-control --session-id <id>  # one by ID (the part of the URL after /code/)
```

`--continue` and `--session-id` need Claude Code v2.1.200 or later. Past four
hours, start fresh.

### What it costs you

While connected, the transcript — your messages, Claude's replies, tool activity
— is stored on Anthropic servers so the conversation stays in sync and can
survive a reconnect. Execution and files never leave the iMac. Organizations
under Zero Data Retention cannot use Remote Control at all. To disable it
outright, set `disableRemoteControl`.

## Route 2 — Desktop SSH session from the MacBook

The best answer to "I am at the MacBook and I want to work on the iMac." The
Desktop app on the MacBook becomes the interface; Claude Code actually runs on
the iMac against the iMac's files.

1. On the iMac: **System Settings → General → Sharing → Remote Login** on.
2. On the MacBook, in Claude Desktop, click the environment dropdown before
   starting a session → **+ Add SSH connection**.
3. Fill in **Name**, **SSH Host** (`user@imac.local`, or a `~/.ssh/config`
   alias), **SSH Port** (blank = 22), **Identity File** (blank = default key).

Desktop installs Claude Code on the iMac automatically the first time. Once
connected, SSH sessions support permission modes, connectors, plugins and MCP
servers. Connections you add through the dialog are stored in
`~/.claude/settings.json` under `sshConfigs`.

This is a different animal from Remote Control. Remote Control shares *one
running session* across devices. An SSH session is a fresh session that happens
to execute on the other machine. Use SSH when you are starting work; use Remote
Control when work is already underway and you are walking away from the desk.

## Route 3 — Dispatch

Dispatch is a persistent conversation in the Desktop app's **Cowork** tab. You
message it a task from the phone; it decides how to handle it, and development
work spawns a Code session on the iMac with a **Dispatch** badge in the sidebar.
You get a push when it finishes or needs approval.

Requires Pro or Max. Not available on Team or Enterprise. Pairing is done from
the Dispatch help article, once.

Dispatch-spawned sessions can use computer use if it is enabled, with one
difference: app approvals in them expire after 30 minutes instead of lasting the
session.

Dispatch is for delegation, Remote Control is for steering. If you want to watch
the work and interrupt it, Dispatch is the wrong tool.

## Route 4 — Screen Sharing

The literal reading: see the iMac's screen, click its actual Claude Desktop
window. macOS ships this.

1. On the iMac: **System Settings → General → Sharing → Screen Sharing** on.
2. On the MacBook: open the **Screen Sharing** app, enter the iMac's hostname or
   the Apple ID it is signed into, Connect.

Signing in by Apple ID is what makes this work off the local network without a
VPN or a forwarded port. Do not port-forward VNC to the internet as the
alternative.

On Apple silicon running macOS 14 or later, the connection dialog offers
**Standard** or **High Performance**. High Performance uses the media engine —
fluid enough to scrub video — and is the only mode that offers virtual displays,
one or two, chosen from the Display Type menu. A headless iMac driven this way
gets a real resolution instead of whatever the panel is.

Screen Sharing needs the iMac awake, on the network, and past the login window.
That is three more failure modes than Remote Control has, which is why it is
route 4 and not route 1.

## Route 5 — Computer use

What lets Claude open apps and drive the iMac's GUI itself.

Research preview, macOS and Windows, **Pro or Max only** — not Team, not
Enterprise. The Claude Desktop app must be running. Off by default.

1. Update Claude Desktop and restart it.
2. **Settings → General** (under **Desktop app**) → **Computer use** on.
3. Grant two macOS permissions, which the Settings page shows the status of:
   **Accessibility** (click, type, scroll) and **Screen Recording** (see the
   screen).

Claude tries the precise tool before the broad one: a connector if one exists,
then Bash, then Claude in Chrome for browser work, then the iOS Simulator pane,
and only then computer use. The per-app tiers enforce that:

| Tier | Claude can | Applies to |
|---|---|---|
| View only | see the app in screenshots | browsers, trading platforms |
| Click only | click and scroll, no typing or shortcuts | terminals, IDEs |
| Full control | click, type, drag, keyboard shortcuts | everything else |

The tiers are fixed by app category and cannot be changed. First use of an app
prompts **Allow for this session** or **Deny**; approvals last the session, or 30
minutes in Dispatch-spawned sessions. Terminals, Finder and System Settings show
an extra warning because of their reach.

Two settings worth knowing, both in **Settings → General**: **Denied apps**
rejects apps without prompting, and **Unhide apps when Claude finishes** controls
whether your other windows come back after Claude hides them to work.

This runs on the real desktop, not in the Bash sandbox. Claude flags on-screen
prompt-injection attempts, but the trust boundary genuinely moved: anything
visible on that iMac screen is inside it.

## Keeping the iMac actually reachable

Every route above assumes the iMac is awake, unlocked and on the network. This
is the part that fails at 2am, not the Claude configuration.

### Sleep

An iMac has two advantages over the MacBook here: no lid to close, and always on
AC. `caffeinate` only defeats *idle* sleep, so on a laptop it loses to the lid;
on a desktop it is sufficient. The durable fix is `pmset` rather than a process
that has to keep running:

```
pmset -g custom              # read the current policy first
sudo pmset -c sleep 0        # never system-sleep on AC
sudo pmset -c womp 1         # wake for network access
sudo pmset -c autorestart 1  # restart automatically after a power failure
```

Per-session, without changing policy:

```
caffeinate -dims             # display, idle, disk, system — until Ctrl+C
caffeinate -dims claude      # scoped to one command, cleans itself up
```

Flags: `-d` display, `-i` idle, `-m` disk, `-s` system sleep on AC, `-u` user
activity, `-t` seconds, `-w` wait on a PID.

### Login state

Screen Sharing and computer use both need a logged-in GUI session — the console,
not just a running machine. A locked screen or a sleeping display is a wall
between Claude and everything on screen. Remote Control and SSH do not care.

### FileVault after a reboot

The historical trap for an unattended Mac: with FileVault on, the data volume
stays locked after a restart, and SSH's configuration lives on that volume, so
SSH is unavailable until somebody types the password at the keyboard.

Two ways out:

- **macOS 26 (Tahoe)** boots a minimal SSH daemon from the sealed system volume
  before login, so you can SSH in at the preboot stage and supply an
  administrator's password to finish the boot. SSH *keys* do not work at that
  stage — password only. Remote Login must already be on. Early reports had it
  working over Ethernet but not Wi-Fi, with Wi-Fi reported working as of 26.5;
  treat the iMac's behaviour as untested until you reboot it once on purpose.
- **`sudo fdesetup authrestart`** — supply the FileVault password as part of the
  reboot, so the machine comes back up unlocked. Works on older macOS too.
  `-delayminutes 0` restarts immediately.

Reboot the iMac deliberately once, from somewhere else, and find out which of
these it does. Discovering it after a power cut is the expensive version.

### Off the local network

Remote Control needs nothing here: the iMac makes outbound HTTPS requests only
and never opens an inbound port. That is its structural advantage over every
other route on this page.

SSH and Screen Sharing need reachability. Screen Sharing over Apple ID handles
it without configuration. For SSH, a mesh VPN like Tailscale is the answer, not
a forwarded port on the router.

## Capability matrix

| | Remote Control | Desktop SSH | Dispatch | Screen Sharing |
|---|---|---|---|---|
| Drive from a phone | yes | no | yes | poorly |
| Drive from any browser | yes | no | no | no |
| Needs the iMac reachable inbound | no | yes | no | yes |
| Needs the iMac unlocked at the console | no | no | no | yes |
| Survives you closing the client | yes | yes | yes | n/a |
| Survives the `claude` process exiting | no | no | no | n/a |
| Uses the iMac's MCP servers and config | yes | yes | yes | yes |
| Shares one live session across devices | yes | no | no | yes |
| Transcript stored on Anthropic servers | yes | no | yes | no |
| Plan floor | Pro | any | Pro/Max | none |

## Making the two Macs talk

Once both Macs run sessions connected to Remote Control, they can message each
other. `/list-agents` (alias `/peers`) lists what the current session can reach:
subagents, teammates, other local sessions, your cloud sessions, and your Remote
Control sessions on other machines, the last labelled `Remote Control` with an
`offline` status when the connection has dropped.

Requirements: Claude Code v2.1.224 or later for messaging at all, v2.1.225 or
later to *start* a conversation with a session on another machine rather than
only reply to one. Cross-machine messages travel through Anthropic servers and
arrive over that machine's Remote Control connection; same-machine messages go
over a local socket and never leave the Mac.

Two controls worth setting deliberately on an unattended iMac:

- `crossSessionInbound` — `accept`, `hold`, or `refuse` for arriving messages.
  Also in `/config` as **Messages from your other sessions**.
- `isolatePeerMachines: true` — require your explicit approval before any
  message leaves the machine, even in bypass-permissions mode.

A message from another session can never approve a permission prompt, change
configuration, or run a slash command. It arrives as plain text.

## What only the iMac can answer

Nothing above was checked against your hardware. Run these on the iMac:

| Question | Command |
|---|---|
| macOS version, for the FileVault-over-SSH question | `sw_vers` |
| Apple silicon, for Screen Sharing High Performance | `uname -m` |
| Claude Code version, against the v2.1.2xx floors | `claude --version` |
| Remote Control eligibility, and which check fails | `claude doctor` |
| A telemetry variable blocking it | `env \| grep -E 'DISABLE_TELEMETRY\|DO_NOT_TRACK\|DISABLE_GROWTHBOOK\|CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC\|ANTHROPIC_BASE_URL\|ANTHROPIC_API_KEY'` |
| Same, hidden in settings | `grep -RE 'DISABLE_TELEMETRY\|DO_NOT_TRACK\|ANTHROPIC_BASE_URL' ~/.claude/settings.json` |
| Is SSH on | `sudo systemsetup -getremotelogin` |
| Current sleep policy | `pmset -g custom` |
| Is FileVault on | `fdesetup status` |
| Does the display sleep mid-task | untestable from here — watch one long computer-use run |

The last row is the honest gap. Whether a sleeping display breaks a computer-use
run on this machine is a thing to observe once, not to assume from a doc.

## Sources

- Claude Code — Remote Control: https://code.claude.com/docs/en/remote-control
- Claude Code — Desktop application: https://code.claude.com/docs/en/desktop
- Claude Code — Platforms and integrations: https://code.claude.com/docs/en/platforms
- Claude Code — Cross-session messaging: https://code.claude.com/docs/en/cross-session-messaging
- Apple — Share the screen of another Mac: https://support.apple.com/guide/mac-help/share-the-screen-of-another-mac-mh14066/mac
- macOS 26 FileVault unlock over SSH, corroborated across Der Flounder, Jeff Geerling and Apple's macOS Tahoe 26 enterprise release notes
