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

## VERIFIED: the paren-to-staccato conversion, confirmed from the other side

While this session ran, the iMac pushed a route called `zappa-drum-tab-forensics` to
the overflow host at 2026-08-31 13:25 CDT, roughly thirty minutes ahead of this session. It carries a twenty-song dataset read from Songsterr's own track JSON, the
payload CloudFront refused here.

Its Zomby Woof entry answers the question this file could not answer alone.

| Revision | drum notes | flags |
|---|---|---|
| r7115188, published | 1,574 | `ghost: 32`, `tie: 18` |
| r8787022, ours | 1,574 | `staccato: 32` |

with `evt_identical: true`, `lanechg: 0`, and `base_total` and `ours_total` both 7,479.

So the three states run like this:

| State | ghost | staccato | ties |
|---|---|---|---|
| r7115188, the original | 32 | 0 | 18 |
| r8766102, the file recovered here | 0 | 0 | **18** |
| r8787022, the published fix | 0 | 32 | 0 |

The recovered file sits in the middle of a two-step edit, which is exactly why its
GPIF carries neither marking. The 18 ties this session counted independently are the
same 18 the published baseline reports, and r8787022 dropped all of them.

**Correction to an earlier reading.** This page first called the two revision
descriptions contradictory, on the grounds that the same 32 noteheads cannot be
removed and then converted. The two descriptions turn out to be consistent. r8766102
removed the parentheses, r8787022 added the staccato dots and dropped the ties, and
r8787022 states its net effect against the published baseline rather than against its
immediate parent.

## Two machines, two formats, seventeen lanes

The GPIF read here and the Songsterr JSON read there are independent measurements of
the same performance, one from the score file and one from the served payload.

| MIDI | Drum voice | This session, from GPIF | iMac, from Songsterr JSON |
|---|---|---|---|
| 51 | Ride | 287 | 287 |
| 38 | Snare | 271 | 271 |
| 47 | Mid tom | 209 | 209 |
| 36 | Kick | 186 | 186 |
| 35 | Acoustic kick | 163 | 163 |
| 42 | Hi-hat closed | 141 | 141 |
| 45 | Low tom | 99 | 99 |
| 46 | Hi-hat open | 92 | 92 |
| 48 | High tom | 49 | 49 |
| 92 | Hi-hat half | 29 | 29 |
| 44 | Pedal hi-hat | 23 | 23 |
| 43 | Very low tom | 13 | 13 |
| 49 | Crash high | 4 | 4 |
| 84 | Bell tree | 4 | 4 |
| 50 | High floor tom | 2 | 2 |
| 74 | Guiro | 1 | 1 |
| 58 | Vibraslap | 1 | 1 |

Seventeen lanes, seventeen matches, no exceptions. Total events, drum events, bar
count and tie count agree as well.

## What the GPIF articulation layer does show

Track 9 offers 119 articulations. Five render a staccato dot and six render a
parenthesis notehead. None of the eleven is used.

| Rendering | Articulations that carry it | Used on this staff |
|---|---|---|
| `articStaccatoAbove` | Ride choke, Splash choke, Crash high choke, Crash medium choke, Ride 2 choke | 0 |
| `noteheadParenthesis` | Bongo High mute, Bongo Low mute, Conga low mute, Conga high mute, Surdo mute, Triangle mute | 0 |

The staff uses 17 articulation indices, all plain hits, every one reporting an empty
`TechniqueSymbol`. Worth carrying forward: Songsterr's ghost and staccato flags do not
live in the GPIF articulation layer, so an edit driven from the GPIF side cannot set
or read them there. That is a real constraint on any scripted pass built on this Mac.

## A session on the iMac is working this same job

`zappa-drum-tab-forensics` was committed at 2026-08-31 13:25 CDT and arrived here by
rebase from origin, never committed locally. Its dataset covers twenty songs, reaches
the Songsterr track JSON, and holds the baseline census this Mac lacks. Two machines
are now on the same repair. Splitting it deliberately is worth a decision, and
that decision belongs to Brandon.

## Still blocked

1. **The iMac working tree.** The immutable `ORIGINAL-*.gp` set, the published-source
   archive, and the five other tools live there. iCloud `sfg/` is the sanctioned
   channel.
2. **CloudFront track JSON, from this Mac.** `403 AccessDenied` on every
   unauthenticated route, confirmed again this session on `r7115188`. The iMac reads
   it, so the capability exists on that machine and not on this one.
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
