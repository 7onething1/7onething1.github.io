# Zomby Woof: the baseline was on this Mac after all

Written 2026-08-31 on MacBookPro, `/Users/brandonchavez`, resuming the
`[ZAPPA-DRUM-REPAIR-2026-08-31]` handoff.

Every figure below carries the command that produced it. Claims are marked
VERIFIED (reproduced here this session), CORROBORATED (real evidence exists and it
is not independent), or OPEN (checkable, not yet checked).

## The handoff pointed at a tree that is not on this machine

`hostname -s` returns `MacBookPro`. The handoff describes a working tree under
`~/Projects/_outputs/songsterr-zappa-paren-fix/s*/` holding immutable
`ORIGINAL-*.gp` baselines, six analysis tools, and a 1,116 file published-source
archive. None of it is here.

| Handoff item | State on this Mac |
|---|---|
| `songsterr-zappa-paren-fix/s*/` baselines | folder held one file, `AUDIT-RECORD-2026-08-30.md` |
| `ORIGINAL-*.gp` | 0 found, by `find` and by Spotlight |
| `zappa-drum-sources/` (139.6 MB) | absent |
| the six tools | 0 of 6 |
| queue items `q-2026-08-31-*` | 0 of 6 in the local queue |
| a 2026-08-31 Zappa transcript | absent; the only local match for `noteloss_audit` is this session |

Every other route came back empty too. iCloud `sfg/` carries no Zappa bundle, `/Volumes`
shows only `Macintosh HD` so the T7 Shield is unmounted, `~/.Trash` is empty, no Time
Machine destination is configured, `/Users/7onething1` is a root-owned stub holding
only `Library`, and `drwu-overflow` carries the six published Zappa pages with no
score data.

## A real baseline was sitting in Downloads

    ~/Downloads/Frank Zappa-Zomby Woof-08-29-2026.gp
    76,963 bytes   md5 4343175d94bff82235497f5bb5360bab

A Songsterr export, newest file in the folder, internal `score.gpif` stamped
2026-08-30 00:25 CDT. The file holds the Zomby Woof community tab `s412162`, ten tracks,
114 bars.

Preserved to `~/Projects/_outputs/songsterr-zappa-paren-fix/s412162/r8766102-Zomby-Woof.gp`.

## The revision timeline places it exactly

    curl https://www.songsterr.com/api/meta/412162/revisions

Twelve revisions, four of them from 2016 to 2021, six community editor passes
through 2026-05-31, then two from Brandon.

| Revision | Created | Author | What the description says |
|---|---|---|---|
| r7115188 | 2026-05-31 14:39Z | meh | last community revision, and the one Songsterr still serves |
| r8766102 | 2026-08-29 21:03Z | Brandon chavez | removed the 32 parenthesised ghost noteheads, marked 8 all-ghost beats pp |
| r8787022 | 2026-08-30 21:45Z | Brandon chavez | converted the 32 parenthesised ghost noteheads to staccato dots, removed 18 ties |

The file's internal stamp sits between r8766102 and r8787022, so it holds the
**r8766102 state**, which is the file r8787022 was built from.

**VERIFIED, live on 2026-08-31:** `api/meta/412162` returns `revisionId 7115188` and
`api/meta/35870` returns `7294223`. Both Brandon revisions read
`isOnModeration: true`, `isBlocked: false`. One day past the earlier audit, nothing
has been promoted.

## The rebuilt auditor reproduces two published figures

`noteloss_audit.py` was rewritten from the handoff's specification and now lives at
`~/Projects/_outputs/songsterr-zappa-paren-fix/tools/noteloss_audit.py`. It expands
the GPIF reference graph, MasterBars to Bars to Voices to Beats to Notes, into a flat
event list.

    python3 tools/noteloss_audit.py s412162/r8766102-Zomby-Woof.gp --track 9

| Measure | This file | Published figure | Source |
|---|---|---|---|
| rendered events, all tracks | **7,479** | 7,479 | r8787022 description |
| drum staff events | **1,574** | 1,574 | `zappa-onsroxy-vs-songsterr`, built 08-29 |
| masterbars | 114 | 114 | same page |
| meters written | 4/4, 10/16, 5/4, 15/16, 7/8, 3/4, 2/4, 6/4 | same eight | same page |

Two figures reproduced from a file, having previously rested only on revision
descriptions Brandon wrote himself. That is the known-answer control the handoff
demanded, and it passes.

Underneath: 802 unique Note elements and 2,278 unique Beat elements carry all 7,479
events. 576 Notes are shared, one of them across 312 positions. 1,136 Beats are
shared, one across 238.

## VERIFIED: the 18 ties, bar for bar

r8787022 names its edit precisely, so it can be checked against the file it edited.

| Claim in r8787022 | Found in the r8766102 file |
|---|---|
| kick ties, bars 16 to 17 | bars 16 and 17, 8 tied events each |
| open hi-hat ties, bars 18, 22, 32, 34, 35, 36, 38, 44, 104, 108 | all ten bars, 2 tied events each |
| 18 ties | 36 tied events, 18 with `origin=true` and 18 with `destination=true`, 0 mid-chain, so **18 connections** |
| no other tied drum voices | none |

Twelve bars named, twelve bars found, no misses and no extras.

**The shared-reference trap, in the open.** Those 36 tied events come from **6
distinct Note elements**. Notes 788 to 791 render twice each in bar 16, and notes 793
and 794 carry every open hi-hat tie across all ten bars. Dropping the tie from note
793 changes ten bars at once. Here that is the intended result, and the auditor is
what turns it from an assumption into a count.

## OPEN: the paren-to-staccato claim does not reproduce from the GPIF

Track 9 offers 119 articulations. Five render a staccato dot and six render a
parenthesis notehead.

| Rendering | Articulations that carry it | Used on this staff |
|---|---|---|
| `articStaccatoAbove` | Ride choke, Splash choke, Crash high choke, Crash medium choke, Ride 2 choke | **0** |
| `noteheadParenthesis` | Bongo High mute, Bongo Low mute, Conga low mute, Conga high mute, Surdo mute, Triangle mute | **0** |

The staff uses 17 articulation indices, all of them plain hits: ride, snare, three
toms, kick, four hi-hat states, crash, bell tree, guiro, vibraslap. Every one reports
an empty `TechniqueSymbol`.

So in this file no drum note renders with a parenthesis, none renders with a staccato
dot, and the drumset map has no staccato articulation for snare, kick or hi-hat at
all. The five that exist are cymbal chokes.

**What that does and does not establish.** It establishes that the parenthesis
rendering is not carried in the GPIF articulation layer of the file r8787022 was
built from. It does not establish that Songsterr's own renderer showed no
parentheses, because Songsterr draws from its own track JSON, and that payload sits
behind CloudFront and returns `AccessDenied` to an unauthenticated fetch, with and
without browser headers.

**A second thing worth Brandon's eye.** r8766102 says it *removed* the 32
parenthesised noteheads. r8787022, one day later, says it *converted* the same 32 to
staccato dots. The same 32 noteheads cannot be removed and then converted, and total
events held at 7,479 across both, so nothing was deleted either time. One of the two
descriptions does not match what its revision did.

## Still blocked

1. **The iMac working tree.** The immutable `ORIGINAL-*.gp` set, the published-source
   archive, and the five other tools live there. iCloud `sfg/` is the sanctioned
   channel.
2. **CloudFront track JSON.** `403 AccessDenied` on every unauthenticated route,
   confirmed again this session on the original revision `r7115188`. Reading it needs
   a signed-in browser, and Songsterr sign-in is Brandon's to do.
3. **No notation editor on this Mac.** No Guitar Pro, no TuxGuitar, no MuseScore in
   `/Applications`. The native GPIF pipeline in `songsterr-upload` is the only editor
   here, which is enough for scripted edits and not for eyes-on review.
4. **Moderation.** Both revisions have sat pending for one and two days. Promotion is
   a Songsterr moderator decision, not a pipeline step.

## Reproduce any of it

    cd ~/Projects/_outputs/songsterr-zappa-paren-fix
    python3 tools/noteloss_audit.py s412162/r8766102-Zomby-Woof.gp --track 9
    python3 tools/noteloss_audit.py s412162/r8766102-Zomby-Woof.gp --diff EDITED.gp --expect-changed N
    curl -s https://www.songsterr.com/api/meta/412162/revisions | python3 -m json.tool
    curl -s https://www.songsterr.com/api/meta/412162 | python3 -c "import json,sys;print(json.load(sys.stdin)['revisionId'])"

`--expect-changed` exits non-zero unless the event delta equals the intended count
exactly. That is the mechanism the handoff called for after one edit moved 63 events.
