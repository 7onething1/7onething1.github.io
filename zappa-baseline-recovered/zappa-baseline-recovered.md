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

## The repair pass: what the score file says about Zomby Woof

Everything below was measured on the recovered `r8766102` file, on 2026-08-31, with
the two tools now in `tools/`.

### VERIFIED: bars 1 to 8, the ones marked PRESERVE EXACTLY

The handoff records bars 1 to 8 as corroborated by Ryan Brown and Drumnet
independently, and orders them preserved. They match the file exactly.

    published : 3/4, 10/16, 2/4, 5/4, 15/16, 15/16, 15/16, 15/16
    this file : 3/4, 10/16, 2/4, 5/4, 15/16, 15/16, 15/16, 15/16

The section labels back the reading: bar 1 `Head`, bar 5 `Pre-Verse 1`, bar 9
`Verse 1`, with double barlines on 3 and 4.

### VERIFIED: the Sloots alignment, and the tempo map behind it

The file carries six tempo changes, not a flat 88.

| At displayed bar | Tempo |
|---|---|
| 1 | 88 |
| 24 | 76 |
| 26 | 88 |
| 38 | 90 |
| 92 | 82 |
| 101 | 88 |

Bar 38 is where the Sloots span opens, and it sets 90. Recomputing the thirteen bars
38 to 50 on the file's own map gives **32.00 s** against the 31.0 s excerpt, `+3.2%`.
A flat 88 would give 32.73 s, `+5.6%`. The published page reported 32.00 s and `+3.2%`,
so it used the real map and it stands.

The thirteen meters read `7/8, 5/4, 10/16, 10/16, 10/16, 10/16, 7/8, 6/4, 4/4, 4/4,
4/4, 4/4, 4/4`, the order Sloots prints.

### VERIFIED: the drum staff is playable

`drum_reality_gate.py` checks limb load, hi-hat state conflicts and empty bars across
all 114 bars.

    events 1574, voices per bar {1: 108, 2: 6}
    simultaneity histogram {1: 707, 2: 417, 3: 11}
    REALITY GATE: PASS. No unplayable simultaneity found.

Three voices at once is the ceiling, reached 11 times. No bar is empty. No bar asks
for open and closed hi-hat together.

### The expansion validated on twenty known answers

The two censuses cover all ten tracks, so the GPIF expansion can be checked against
every one rather than against the drum staff alone.

| # | Track | Notes, both sides | Ties, both sides |
|---|---|---|---|
| 0 | Frank Zappa 1 | 1,184 | 162 |
| 1 | Frank Zappa 2 | 42 | 0 |
| 2 | Tom Fowler | 1,076 | 55 |
| 3 | Voice Oohs | 7 | 0 |
| 4 | Bruce Fowler | 564 | 44 |
| 5 | George Duke, Clavi | 170 | 0 |
| 6 | George Duke, Organ | 1,993 | 133 |
| 7 | Ruth Underwood | 550 | 32 |
| 8 | Sal Marquez | 319 | 5 |
| 9 | Ralph Humphrey | 1,574 | 18 |

**Ten note counts and ten tie counts, twenty matches, no exceptions.** Totals agree at
7,479. The ties matter most, because counting them correctly requires walking the
shared Beat and Note references properly and pairing each origin with its destination.
Getting all ten right is what makes the expansion trustworthy for an edit diff.

### NEW DEFECT: the bass drum is written on two staff lines

This one is not in the handoff, and it is more consequential than the parentheses.

| Lane | Articulation | Staff line | Bars |
|---|---|---|---|
| 35 | Acoustic Kick Drum, Kick (hit) | **8** | 48 |
| 36 | Kick Drum, Kick (hit) | **7** | 60 |

Ralph Humphrey played one bass drum. This tab prints it on two positions, and a reader
watching the staff sees the notehead jump a line. The switch points give the cause.

| Bar | Lane | Section | On a section start |
|---|---|---|---|
| 1 | 36 | Head | yes |
| 9 | 35 | Verse 1 | yes |
| 13 | 36 | Pre-Chorus 1 | yes |
| 16 | both | Pre-Chorus 1 | no |
| 18 | 35 | Chorus 1 | yes |
| 40 | 36 | Chorus 2 | no |
| 44 | 35 | Chorus 2 | no |
| 45 | both | Chorus 2 | no |
| 46 | 35 | Bridge | yes |
| 56 | 36 | Solo | yes |
| 102 | 35 | Pre-Chorus 2 | no |
| 112 | 36 | Head | yes |

Twelve switch points, **seven of them landing exactly on a section start**, and lane 36
covering the entire solo from bar 56 to bar 101. That is the fingerprint of separate
contributors working separate sections across twelve revisions, not a notational
choice. The repair is to normalise every kick onto one lane.

### The same defect, swept across all twenty songs

The iMac census carries per-lane counts for every song, so the split can be checked
catalogue-wide without holding twenty score files.

| Song | songId | lane 35 | lane 36 | Drum events |
|---|---|---|---|---|
| What's New In Baltimore | s35887 | 317 | 48 | 1,696 |
| **Zomby Woof** | s412162 | 163 | 186 | 1,574 |
| Carolina Hard-Core Ecstasy | s68248 | 8 | 274 | 1,567 |
| Alien Orifice | s68246 | 8 | 180 | 1,384 |

**Four of twenty.** The other sixteen use exactly one lane, which is what establishes
one lane as the norm and the split as an anomaly.

The house convention is lane 36, used alone by thirteen songs including Montana, Inca
Roads, Drowning Witch and Muffin Man. Lane 35 alone covers three: Keep It Greasey,
Catholic Girls and Fembot.

Two of the four splits are small contaminations. Carolina Hard-Core Ecstasy and Alien
Orifice each carry exactly **8 stray notes** on lane 35 against a dominant lane 36, so
each is an eight-note repair. Zomby Woof at 163 against 186 and What's New In
Baltimore at 317 against 48 are section-scale, and Zomby Woof is the worst of the set
because its two lanes are nearly even.

### What bars 16 and 17 actually contain

Those are the bars whose kick ties r8787022 removed, and the pattern explains itself
once both lanes are visible.

    beat 0-1   Hi-Hat closed + kick lane 35 (line 8), tied pair
    beat 2-3   Hi-Hat closed + kick lane 36 (line 7), tied pair
    beat 8-9   Hi-Hat closed + kick lane 35 (line 8), tied pair
    beat 10-11 Hi-Hat closed + kick lane 36 (line 7), tied pair

The bass drum alternates staff line every two sixteenths, with a tie on each pair.
Removing those ties was right. The line alternation underneath them is still there.

### A bug in my own tool, caught by cross-checking

The first reality-gate run keyed lanes on `OutputMidiNumber`. On this drumset map
`Hi-Hat (half)` carries input **92** and output **46**, the same output as
`Hi-Hat (open)`, so the gate silently merged two lanes a reader sees as distinct. Two
of my own outputs disagreed, which is what surfaced it.

Fixed to key on `InputMidiNumbers`, the field the reader and Songsterr both use. The
corrected run matches the iMac census on **all 17 lanes** and on the 1,574 total. That
is the rule about reading the field the human acts on, earning its keep.

### UPDATE 2026-09-02: the repair is built, verified, and held

All 163 lane-35 kick events now sit on lane 36 in `r8766102-Zomby-Woof-KICKFIX.gp`, giving
349 events over 105 bars. The method retargets 27 `Beat` note references onto the lane-36
`Note` elements rather than editing a `Note` in place, because GPIF shares one `Note` across
many beats. Fourteen checks pass: 16 non-kick lanes identical, drum staff 1,574 and whole
score 7,479 on both sides, all 114 bars conserving the kick count, 36 ties intact, every one
of the 349 rhythm references identical. `noteloss_audit.py --diff --expect-changed 163`
returns added 0, removed 0, changed 163, reorder-only 0.

**A first build of this repair was wrong.** The percussion staff is a six-line tab, so two
notes in one beat cannot share a `String`. Version 1 moved 9 events onto `String 0` where
MIDI 92 already sat, putting 9 beats into a state the original never had. Note 795 was
carrying `String 5` to avoid exactly that collision. Version 2 creates a lane-36 kick that
keeps `String 5`, and a new string audit now runs on each side of any lane merge. The broken
build is kept as a known-answer control: original 0 shared-string beats, v1 9, v2 0.

**Nothing was submitted.** Which machine owns this repair is still open, so the file waits.

## FIXED: the gate that examined zero tracks

The 2026-08-30 audit left this open, and the Zomby Woof file turned out to be the
fixture that proves it.

`impossible_gate.py` decided what counts as a guitar staff with a name test:

    def is_guitar(name):
        n = name.lower()
        return "guitar" in n and "bass" not in n

Songsterr community tabs name tracks after the musicians. Zomby Woof carries
`Frank Zappa 1`, `Frank Zappa 2`, `Tom Fowler`, `Ruth Underwood`, `Ralph Humphrey`.
Not one contains the word. The gate reported on **zero tracks**, so the file passed
unexamined, and a gate that examines nothing passes everything.

GPIF states the instrument outright, so the fix reads that instead.

| # | Track name | `InstrumentSet/Type` | Old test | New test |
|---|---|---|---|---|
| 0 | Frank Zappa 1 | electricGuitar | False | **True** |
| 1 | Frank Zappa 2 | electricGuitar | False | **True** |
| 2 | Tom Fowler | electricBass | False | False |
| 3 | Voice Oohs | voice | False | False |
| 4 | Bruce Fowler | trombone | False | False |
| 5 | George Duke | harpsichord | False | False |
| 6 | George Duke | electricOrgan | False | False |
| 7 | Ruth Underwood | vibraphone | False | False |
| 8 | Sal Marquez | trumpet | False | False |
| 9 | Ralph Humphrey | drumKit | False | False |

Resolution order is instrument type, then instrument name, then the display name for
callers that only ever held a string. `bassGuitar` is excluded correctly at step one
because it carries the word bass.

**Fixed in all three copies on this Mac**, each backed up as
`.bak-pre-isguitar-2026-08-31`:

    ~/.claude/skills/impossible-guitar-parts/impossible_gate.py
    ~/Projects/_outputs/kilgore-guitar-tools/impossible_gate.py
    ~/Projects/_outputs/kilgore-guitar/2026-08-13-macbook/tools/impossible_gate.py

**And a regression test now exists**, at
`kilgore-guitar-tools/_tests/test_is_guitar_instrument_resolution.py`. It passes
against the fix and fails against the backup, which is the check that was missing when
the defect shipped.

    against the fixed gate  : PASS  10 tracks resolved by instrument, 2 guitars found
    against the backup      : FAIL  impossible_gate has no instrument_of

### The suite was broken before this, and now runs

Running both other tests against the pre-patch backup gave byte-identical errors, so
`test_comparison_basis.py` and `test_promotion_rule.py` were already broken and not by
this change. Both had **one root cause**: they hardcoded

    sys.path.insert(0, os.path.expanduser("~/.claude/skills/impossible-guitar-parts"))

and that directory holds the smaller copy. It lacks `basis_refusals` and `build_basis`,
and its `compare_checkpoint` takes two arguments against the eight the test passes. The
assertions were written against the 99 KB copy sitting beside them.

Resolving the import to the test's own tree first, with the skill directory as a
fallback, fixes both. **No analysis code changed.**

| Test | Before | After |
|---|---|---|
| `test_comparison_basis.py` | exit 1, ImportError | **exit 0, 8/8 cases correct** |
| `test_promotion_rule.py` | exit 1, TypeError | **exit 0, 38/38 cases correct** |
| `test_is_guitar_instrument_resolution.py` | did not exist | **exit 0** |

**47 assertions now run** where two of the three files previously died on import.
`regressions.py` still reports 4 MISSING, because those artifacts live in the appleseed
tree that is not on this Mac.

### One decision left on this

Two copies of `impossible_gate.py` have diverged and neither is marked canonical. The
skill copy is 52 KB and is what `/impossible-guitar-parts` actually invokes, so the
older, thinner copy is the one that runs in production. The 99 KB copy is what the
tests exercise. Both now carry the instrument fix. Queued as `q-2026-08-31-c452ea`.

## REFUTED: the 10/16 barring, from the professional transcription

Brandon, 2026-08-31: pull from the downloaded transcriptions by professional
transcribers, not from old Guitar Pro files. The archive holding them is on the iMac,
so the DRUM Magazine set was re-downloaded here from the URL the archive page records.

`~/Projects/_outputs/zappa-drum-sources/02-drummagazine/zomby-woof.png`, 1178x733,
PNG signature and IEND verified, from
`https://drummagazine.com/groove-analysis-frank-zappas-drummers/`.

Ryan Brown's page states **'ZOMBY WOOF', @ 0:00, eighth note = 178**, and reads:

| Bar | Brown | Songsterr `s412162` |
|---|---|---|
| 1 | `3/4` | `3/4` |
| 2 | **`5/16`** | **`10/16`** |
| 3 | **`5/16`** | absorbed into bar 2 |
| 4 | `2/4` | `2/4` |
| 5 | `5/4` | `5/4` |
| 6 to 9 | `15/16` x4 | `15/16` x4 |

**Nine bars in Brown, eight in the tab.**

The handoff records under "Proven, do not re-litigate":

> barring (both use a single 10/16, not two 5/16)

The image refutes that for Brown. The `5/16` signature is legible at 3x in
`crop_sys1_left.png`, and `crop_sys1_mid.png` shows the bar, a barline, then a second
bar of the same meter before the `2/4`. Ten sixteenths either way, so the two agree on
duration and disagree on how it is barred.

**The Drumnet half was later recovered and it holds.** See the section below.

Everything else corroborates. Bar 1, bar 4, bar 5 and the four bars of `15/16` match,
and Brown's eighth = 178 puts the quarter at 89 against the tab's 88, the 1.1% gap the
handoff already recorded.

**Under the handoff's own method this matters.** Published drum notation has priority
where it covers the performance. Brown covers these nine bars, so the barring question
is now a decision rather than a settled fact.

### A second professional transcriber says the same thing

Daniel Bédard transcribed 52 Zappa charts. Todd Bishop's Cruise Ship Drummer post is
the only public artifact of that project, and it carries page 1 of his handwritten
Zomby Woof chart at full resolution.

`~/Projects/_outputs/zappa-drum-sources/01-cruiseshipdrummer/Zomby1_daniel-bedard.jpg`,
750x1058, JPEG SOI and EOI verified.

| Bar | Ryan Brown, DRUM Magazine | Daniel Bédard | Songsterr `s412162` |
|---|---|---|---|
| 1 | `3/4` | `3/4` | `3/4` |
| 2 | **`5/16`** | **`5/16`** | **`10/16`** |
| 3 | **`5/16`** | **`5/16`** | absorbed |
| 4 | `2/4` | `2/4` | `2/4` |
| 5 | `5/4` quintuplets | `5/4` quintuplets | `5/4` |

**Two independent professional transcriptions, the same barring.** Bédard's `5/16`
read as `15/16` until 5x magnification, where the leading stroke resolves as the
barline. `bedard_sys1_right.png` shows the signature, a bar, a barline, and a second
bar of the same meter.

So the tab stands alone on `10/16`, and the handoff's claim that the published sources
back it is refuted by both sources this session could reach. Drumnet is still
unverified.

### Drumnet recovered, and the sources turn out to be split

Drumnet was called unreachable twice in this session and it was never blocked. Sheet id
**2637**. A HEAD request declares `Content-Length: 68574` and `Accept-Ranges: bytes`.
The failing fetches had returned 16,124 bytes of 68,574, a truncated transfer read as a
dead host. Re-fetching with `Accept-Encoding: identity` and a 90 second timeout returned
the whole file, and it decodes.

Two other reads had failed for reasons that were also mine. `curl` on the group page
returned 15,665 bytes with no song titles, while `WebFetch` on the identical URL listed
all six Zappa charts with their ids. And the notation images are referenced in a form
the `src="..."` grep never matched.

**The chart says `10/16`.** Legible at 6x in `dn_sys1_left.png`, with a tempo mark of
quarter `= 89`.

| Source | Bar 2 | Bars of `15/16` |
|---|---|---|
| Ryan Brown, DRUM Magazine | `5/16` + `5/16` | 4 |
| Daniel Bédard | `5/16` + `5/16` | not read past bar 5 |
| **Drumnet** | **`10/16`** | **1** |
| Songsterr `s412162` | `10/16` | 4 |

**So this is a split, not a refutation.** The handoff says Brown and Drumnet "both use a
single 10/16". Drumnet does. Brown does not. Half the claim holds. The tab sides with
Drumnet on the barring and with Brown on the four bars of `15/16`, and no single
published source matches it on both.

Drumnet's quarter `= 89` and Brown's eighth `= 178` are the same tempo.

## What a rebar would actually cost

Measured 2026-09-02 from `r8766102-Zomby-Woof.gp`. The barring question was open as a
decision; these are the numbers it needs.

**The tab's `10/16` bar is already two identical `5/16` figures.** Reading the rhythm off
the drum staff, bar 2 runs 16th, 16th, 32nd, 32nd, 16th, 16th, and then repeats that exact
group. Each group totals five sixteenths. Ryan Brown's page prints the same repeated figure
across a barline, read directly off `crop_sys1_left.png` and `crop_sys1_mid.png`: a `3/4`
signature, one bar, a barline, a `5/16` signature, a bar, a barline, a second bar carrying no
new signature and therefore inheriting `5/16`, then `2/4`.

**The split lands clean.** The proposed barline sits at 1.25 quarters into bar 2. On all six
sounding tracks a beat ends exactly there and the next beat starts exactly there, so no note
and no tie crosses it. The four tracks resting through the bar hold one 2-quarter rest that
would need re-spelling as two rests, which is the same subdivision Songsterr's own exporter
already performs elsewhere in this file.

### The cost is renumbering, and it reaches everything already published

Splitting bar 2 takes the score from **114 bars to 115**. Every bar from 3 onward shifts by
one, so every bar number in the audit pages, the census JSON, the queue items and the
kick-repair record moves with it.

| Claim as published | After the rebar |
|---|---|
| section starts 1, 9, 13, 18, 46, 56, 112 | 1, 10, 14, 19, 47, 57, 113 |
| kick lane 36 covers the solo, bars 56-101 | bars 57-102 |
| kick spans, all twelve rows | row 1 becomes 1-9, every later row shifts +1 |
| 36 tied events in bars 16, 17, 18, 22, 32, 34, 35, 36, 38, 44, 104, 108 | 17, 18, 19, 23, 33, 35, 36, 37, 39, 45, 105, 109 |
| bars 38-50 total 48 quarters | bars 39-51 |
| both kick lanes sound in bars 16, 17, 45 | bars 17, 18, 46 |

**Nothing was rebarred.** Two professional transcriptions agree against the tab and the tab's
own content divides exactly where they put the barline, so the musical case is strong. The
renumbering ripple is the part that is a judgement call rather than a measurement, and it
belongs to Brandon.

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
