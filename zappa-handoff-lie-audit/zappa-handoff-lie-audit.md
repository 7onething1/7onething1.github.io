# The Zappa handoff, checked for lies

Audited 2026-08-31 on MacBookPro, against the files themselves.

Two handoffs carry the Zappa drum repair. `[ZAPPA-DRUM-REPAIR-2026-08-31] handoff.md` was
written on the iMac and saved at 13:52 CDT. `[ZAPPA-BASELINE-RECOVERED-2026-08-31] handoff.md`
was written on this MacBook and saved at 17:42 CDT. Every falsifiable number in both was
re-derived here with a GPIF parser written for this audit alone, so no verdict below leans on
the same tool that produced the claim.

## Verdict

Twenty-six claims went through the check.

- **Nineteen reproduce exactly**, including every count, every meter, every named bar.
- **One reproduces after a wording correction.**
- **One was true when it was tested and is false now.** That one changes what the next
  session should do first.
- **One drifted** in the four hours after the handoff was saved.
- **One is broader than the evidence behind it.**
- **Two need the other machine** and stay untested.

Nothing was invented. The numbers in these handoffs are real, and one of them has expired.

## The finding that changes the work: the iMac bundle already landed

The MacBook handoff says the immutable baselines are gone from this machine:

> The handoff's `s*/` tree, the `ORIGINAL-*.gp` baselines, the 139.6 MB source archive and
> five of six tools are NOT on the MacBook. Confirmed by `find`, Spotlight, an empty Trash,
> no Time Machine destination, an unmounted T7 Shield, and no Zappa bundle in `sfg/`.

It also parks the whole editing lane behind that:

> Still blocked: 1. The iMac working tree, via `sfg/`. Queued `q-2026-08-31-45a6f4`.

Here is the timeline that settles it.

| Time, CDT | Event | Evidence |
|---|---|---|
| 13:52:49 | iMac handoff saved | file mtime |
| 13:56:57 | MacBook session runs `ls sfg \| grep -i zappa`, gets nothing | session transcript, `2026-08-31T18:56:57Z` |
| 14:01:13 | `sfg/zappa-drum-repair-2026-08-31/` appears with 19 `.gp` files | directory mtime |
| 17:42:51 | MacBook handoff saved, still carrying the 13:56 finding | file mtime |

The sfg check was honest at the moment it ran. The bundle landed four minutes later, and the
finding travelled into the handoff three hours and forty-six minutes afterwards as present tense.

What actually sits on this Mac right now:

- 19 `.gp` files across 6 song folders, every one fully downloaded, no iCloud placeholders.
- 8 `ORIGINAL-*.gp` immutable baselines, the exact class the handoff calls absent.
- `ORIGINAL-Frank Zappa-Zomby Woof-05-31-2026.gp`, the pre-work community baseline, dated to
  the day revision **r7115188** was created.

The MacBook handoff says any claim needing the untouched community text "must wait for
r7115188 itself." That wait is over. The file is here, it renders the same **7,479** events as
the recovered r8766102, and its ten per-track counts match the iMac census one for one.

## The overstated one: the test suite is green in one tree of two

The handoff reports the repair as finished:

> The test suite ran zero of its assertions and now runs 47.
> `test_comparison_basis.py` exit 1 ImportError -> exit 0, 8/8 cases.
> `test_promotion_rule.py` exit 1 TypeError -> exit 0, 38/38 cases.

That is true in `~/Projects/_outputs/kilgore-guitar-tools/_tests/`. All three files exit 0
there, 8 of 8 and 38 of 38, and the new `is_guitar` test passes.

Two places still carry the original failure.

| Location | `test_comparison_basis.py` | `test_promotion_rule.py` |
|---|---|---|
| `kilgore-guitar-tools/_tests/` | exit 0, 8/8 | exit 0, 38/38 |
| `kilgore-guitar/2026-08-13-macbook/tools/_tests/` | exit 1, same ImportError | exit 1, same TypeError |
| `sfg/zappa-macbook-return-2026-08-31/impossible-gate-fix/` | exit 1, same ImportError | exit 1, same TypeError |

The bundle copy fails for a packaging reason. The two module copies were renamed to
`impossible_gate.SKILL-COPY.py` and `impossible_gate.KILGORE-TOOLS-COPY.py`, so the tests find
no `impossible_gate.py` in their own directory and fall back to the skill copy. That fallback
is the exact defect the fix was written to remove. The iMac will run those two files and see
red on both.

The count itself is soft. The two suites print 46 cases between them. The third prints one
PASS line covering 10 tracks and 6 string cases. `47` reconciles only by counting the third
file as a single assertion.

## The drift: POINTERS.md says 727 and holds 728

The handoff reports the memory index repaired:

> Now 727 of 727 linked, zero dead links, header corrected to `727 entries, last verified 2026-08-31`.

The checker agrees on the substance and disagrees on the number:

```
memory files       : 728
linked by POINTERS : 728
MISSING from POINTERS : 0
DEAD links in POINTERS: 0
FINAL: 728 files, 728 linked, 0 missing, 0 dead
POINTERS.md is COMPLETE: every file linked, every link resolves
exit 0
```

One memory file was added after the handoff was saved, it was linked, and the header text was
left behind. The repair holds. The header is one integer stale, and
`pointers_check.py --fix --header` closes it. Reading the script confirms the append-only
claim: it writes new entries under one appended heading and never rewrites an existing line.

## The wording: twelve switch points

The handoff says twelve switch points and seven section starts. My parse of the kick lanes
finds **eleven transitions** across **twelve spans**, and seven of the twelve span starts land
on a section start once bar 1 is counted.

```
36 : bars 1-8       -> 35 : 9  Verse 1
35 : bars 9-12      -> 36 : 13 Pre-Chorus 1
36 : bars 13-15     -> both : 16
both: bars 16-17    -> 35 : 18 Chorus 1
35 : bars 18-39     -> 36 : 40
36 : bars 40-43     -> 35 : 44
35 : bar 44         -> both : 45
both: bar 45        -> 35 : 46 Bridge
35 : bars 46-55     -> 36 : 56 Solo
36 : bars 56-101    -> 35 : 102
35 : bars 102-111   -> 36 : 112 Head
```

Twelve spans, eleven boundaries, seven of the twelve starts on a labelled section. Bar 1 Head,
bar 9 Verse 1, bar 13 Pre-Chorus 1, bar 18 Chorus 1, bar 46 Bridge, bar 56 Solo, bar 112 Head.
The musical finding is intact. The word "switch" is counting spans.

## What reproduced exactly

Each row was re-derived from the score file by an independent parser, then compared with the
handoff text and with the iMac census at
`~/Projects/drwu-overflow/zappa-drum-tab-forensics/baseline_diff.json`.

| # | Claim | Source | Independent result |
|---|---|---|---|
| 1 | 20 counts match the iMac census, 7,479 both sides | MacBook | 10 of 10 per-track note counts match; 10 of 10 tie counts match at 2 tied events per tie |
| 2 | 17 drum lanes, 1,574 total | MacBook | 17 lanes, 1,574, lane for lane identical to the census |
| 3 | Bars 1-8 read 3/4, 10/16, 2/4, 5/4, 15/16 x4 | MacBook | exact, and sections read Head, Pre-Verse 1, Verse 1 at bars 1, 5, 9 |
| 4 | 18 ties, twelve bars named | MacBook | 36 tied events in bars 16, 17, 18, 22, 32, 34, 35, 36, 38, 44, 104, 108 |
| 5 | Sloots span 32.00 s, +3.2%, flat 88 gives 32.73 s | MacBook | bars 38-50 total 48 quarters; 32.00 s at 90 bpm, 32.73 s at 88, +3.2% and +5.6% against 31.0 s |
| 6 | Drum staff playable, max 3 voices, no empty bars | MacBook | max 3 notes in one beat, 0 empty drum bars in 114 |
| 7 | r7115188 ghost 32, r8787022 staccato 32, r8766102 neither | MacBook | census reads ghost [32, 0] and staccato [0, 32], events identical |
| 8 | Kick on two lanes, 35 over 48 bars, 36 over 60 bars | MacBook | 163 notes on lane 35 across 48 bars, 186 on lane 36 across 60, both lanes in bars 16, 17, 45 |
| 9 | 4 of 20 songs split, 13 use lane 36 alone | MacBook | census gives exactly 4 split, 13 lane-36-only, 3 lane-35-only |
| 10 | Recovered baseline md5 `4343175d94bff82235497f5bb5360bab` | MacBook | matches, and the bundled copy matches byte for byte |
| 11 | Published page returns http 200 | MacBook | 200 |
| 12 | Both new revisions still on moderation | MacBook | re-fetched live: 8787022 and 8766102 both `isOnModeration: true`, 7115188 public |
| 13 | `pointers_check.py` only appends | MacBook | source confirms, appends under one heading, never rewrites a line |
| 14 | `is_guitar` fixed in three copies, each backed up | MacBook | three files and three `.bak-pre-isguitar-2026-08-31`, all written 17:32 |
| 15 | Zomby Woof goes 0 guitar staves to 2 | MacBook | test reports 10 tracks resolved, 2 guitars, 0 track names containing the word |
| 16 | No notes lost by the parentheses sweep | iMac | 6 archived pairs, 21,385 events, zero pitch, rhythm or position differences |
| 17 | Oh No is sparse: 611 notes, 0 crashes, 0 open hi-hat, 66 bars | iMac | 611 drum events, 66 bars, 0 on lanes 49 and 57, 0 on lane 46 |
| 18 | The AI tab opens 13/16, 4/4, 9/8, 4/4, 7/8 with two empty staves | iMac | exact meters, and Lead Guitar and Vocals hold 0 events |
| 19 | The stacked tom pair is Mid Tom line 4 and Low Tom line 5 | iMac | Mid Tom (hit) staff line 4, Low Tom (hit) staff line 5, adjacent |
| 20 | GPIF Beats and Notes are shared by reference | iMac | 802 Note definitions render 7,479 events; 36 tied drum events come from 6 Notes |

## What the arriving bundle made testable for the first time

Rows 16 through 19 were untestable on this Mac at the hour the MacBook handoff was written.
The iMac bundle carries the archived originals and their `PARENFIX` counterparts for six
folders, so the iMac's central safety claim could finally be checked from outside.

```
s412162-Zomby-Woof-community       10 tracks   7,479 events   0 differing tracks
s35884-Oh-No                        6 tracks   1,669 events   0 differing tracks
s35870-Montana                     18 tracks   7,966 events   0 differing tracks
s412170-Trouble-Every-Day-Live      6 tracks   2,539 events   0 differing tracks
s1105085-The-Black-Page             4 tracks   1,321 events   0 differing tracks
s5820647-Zomby-Woof-AI              5 tracks     411 events   0 differing tracks
TOTAL                                         21,385 events   0 differences
```

The iMac claimed 20 folders and 120,579 beat events. Six folders travelled, and those six are
clean. The other fourteen stay unverified from here.

## Two claims this machine cannot test

- **Bars 1-8 corroborated by Ryan Brown in DRUM Magazine and by Drumnet.** The published
  sources live in `~/Projects/_outputs/zappa-drum-sources/` on the iMac, and that archive did
  not travel.
- **Audio alignment fails its controls at 45.9% against 48.5% shifted and 47.8% random.** No
  audio came across, so the control cannot be re-run.

Both are recorded as untested rather than accepted.

## Reproduce this audit

```bash
# the timeline that expires the sfg claim
ls -laT ~/Library/Mobile\ Documents/com~apple~CloudDocs/sfg/zappa-drum-repair-2026-08-31
ls -laT ~/Library/Mobile\ Documents/com~apple~CloudDocs/SVG/\[ZAPPA-BASELINE-RECOVERED-2026-08-31\]\ handoff.md

# the two test trees
cd ~/Projects/_outputs/kilgore-guitar-tools/_tests && python3 test_comparison_basis.py; echo $?
cd ~/Projects/_outputs/kilgore-guitar/2026-08-13-macbook/tools/_tests && python3 test_comparison_basis.py; echo $?

# the memory index
python3 ~/.claude/skills/_shared/pointers_check.py

# live moderation state
curl -s https://www.songsterr.com/api/meta/412162/revisions | head -c 400
```

The parser used for every musical row is at
`/private/tmp/claude-501/-Users-brandonchavez/13f11d43-2464-4a54-89cb-797d39ec7c4a/scratchpad/gplib.py`,
with `census.py`, `pairs.py` and `checks.py` beside it.

## Sources

- `~/Library/Mobile Documents/com~apple~CloudDocs/SVG/[ZAPPA-BASELINE-RECOVERED-2026-08-31] handoff.md`
- `~/Library/Mobile Documents/com~apple~CloudDocs/SVG/[ZAPPA-DRUM-REPAIR-2026-08-31] handoff.md`
- `~/Library/Mobile Documents/com~apple~CloudDocs/sfg/zappa-drum-repair-2026-08-31/` and `MANIFEST.md`
- `~/Library/Mobile Documents/com~apple~CloudDocs/sfg/zappa-macbook-return-2026-08-31/`
- `~/Projects/drwu-overflow/zappa-drum-tab-forensics/baseline_diff.json`, `live_diff_report.json`
- `~/Projects/_outputs/songsterr-zappa-paren-fix/`
- session transcript `~/.claude/projects/-Users-brandonchavez/aecf628c-427d-4908-a169-2b1786a0d199.jsonl`
- Songsterr revisions API, song 412162, re-fetched during this audit
