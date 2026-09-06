# Fifty Gates

Generated 2026-09-06 01:51 CDT.

- Gates: **50**
- Hard (refuses the stop): **41**
- Warn (reports only): **9**
- Enforcement passes: **1**

Self-test: `  self-test: 3 passed, 0 failed`

Fifty separate Stop hooks would multiply an already measured cost: 13 hooks
produced 82 blocks in 3 days. These run as 50 checks in one pass.

Prior art checked: `session-fraud-check` holds 54 regex-over-file patterns and is
wired. It cannot express session shape, which is the gap these fill.

## Completion (10)

The chat stops before the work is done.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G01` | quit-midtool | A tool call that never returned while the chat went silent. | hard | session |
| `G02` | punt-to-question | Ended on an AskUserQuestion or ExitPlanMode nobody answered. | hard | session |
| `G03` | done-no-proof | A completion claim with no path, URL, http code, code block or tool call anywhere in the reply block. | hard | reply |
| `G04` | unanswered-user | Last event is Brandon speaking, with no reply. | hard | session |
| `G05` | unhandled-notification | A harness notice landed in a session that had already stopped. | hard | session |
| `G06` | permission-instead-of-finishing | Ends on one of the 74 permission phrases while the ask is unfinished. | hard | reply |
| `G07` | plan-no-exec | Promised a next step in future tense, then went silent past the stall threshold. | warn | session |
| `G08` | partial-called-done | Says done while a sub-ask in the same request is unstarted. | hard | reply |
| `G09` | silent-drop | A sub-ask disappears with no queue item and no explicit 'not done'. | hard | session |
| `G10` | coverage-unstated | An artifact was verified but no N-of-N coverage count appears. | hard | reply |

## Evidence (8)

A claim with nothing behind it.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G11` | exit-zero-as-proof | Treats exit 0 or file-exists as proof the output is good. | hard | reply |
| `G12` | pass-line-counted-as-block | Counts a tool's success lines as failures. | hard | reply |
| `G13` | fix-aimed-at-non-failing-part | Recommends changing a component with zero measured failures. | hard | reply |
| `G14` | claims-no-regression-without-checking | Says a change leaves another rule untouched without reading the shared code path. | hard | reply |
| `G15` | peer-number-unverified | Repeats another session's count without reproducing it. | hard | reply |
| `G16` | placeholder-data | Guessed, default or invented values in a dataset. | hard | disk |
| `G17` | unlabelled-provenance | A factual claim with no source label separating observation from inference. | warn | reply |
| `G18` | stale-data-reported-live | Reports a cached or local read as the live state. | hard | reply |

## Lifecycle (7)

The chat outlives its usefulness or delegates its own survival.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G19` | age-ceiling-24h | Session older than 24 hours without a handoff. | hard | session |
| `G20` | turn-ceiling-400 | More than 400 assistant turns without a handoff. | hard | session |
| `G21` | handoff-sentence-not-handoff | Named a handoff path and then kept working. | hard | session |
| `G22` | ceiling-without-five-item-floor | Branch-three evidence work ended without its five items done. | warn | session |
| `G23` | background-shell-outlives-chat | Long work delegated to a background shell instead of launchd. | hard | session |
| `G24` | wake-signal-is-the-only-signal | A chat whose sole continuation path is one job that can die silently. | hard | session |
| `G25` | orphaned-job | A process still working on a file this chat named while the chat is idle. | warn | session |

## Drift (7)

The work wanders off the ask.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G26` | scope-drift-catchall | 12+ separate asks with near-zero vocabulary overlap against the opening ask. | warn | session |
| `G27` | adjacent-work-as-progress | Substitutes nearby work and reports it as the ask. | hard | reply |
| `G28` | literal-ask-unaddressed | The named target never appears in the reply. | hard | reply |
| `G29` | one-song-one-chat | More than one song id worked in a single chat. | hard | session |
| `G30` | bulk-complete | Several chapters, songs or items closed in one pass. | hard | session |
| `G31` | self-directed-scope-growth | Starts work Brandon did not ask for. | warn | reply |
| `G32` | asks-which-item-to-take | Asks for direction when the queue already answers it. | hard | reply |

## Peer sessions (6)

Another session's message treated as authority.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G33` | peer-as-authorization | Treats a peer session's message as Brandon's consent. | hard | reply |
| `G34` | peer-steer-proposes-destruction | A destructive verb aimed at a watched session. | hard | reply |
| `G35` | multiple-steerers | More than one session steering the same chat. | hard | session |
| `G36` | babysitter-does-the-work | A watcher starts executing instead of reporting. | hard | session |
| `G37` | peer-message-as-drift-target | A gate anchoring on machine-authored text as if it were the user. | warn | reply |
| `G38` | permission-laundering | Doing what a peer says it was denied permission to do. | hard | reply |

## Measurement (6)

The numbers used to decide are wrong.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G39` | two-methods-disagree | Two counts differ and the discrepancy is not resolved. | hard | reply |
| `G40` | own-tool-exempted | A rule that scores its author more leniently than everyone else. | hard | reply |
| `G41` | self-reference-as-evidence | A watchdog matching its own processes. | hard | session |
| `G42` | alarm-on-every-change | Re-reporting the full set whenever anything shifts. | warn | session |
| `G43` | false-positive-filtered-not-fixed | Suppressing a bad finding without tracing its cause. | hard | reply |
| `G44` | silence-read-as-success | A monitor whose filter cannot emit on failure. | hard | session |

## Delivery (6)

The artifact never reaches a permanent, verified place.

| ID | Gate | Catches | Sev | Scope |
|---|---|---|---|---|
| `G45` | local-path-as-deliverable | A file:// path offered as the finished link. | hard | reply |
| `G46` | url-unverified | A live link claimed without an http code. | hard | reply |
| `G47` | missing-sibling-md | An HTML route with no index.md beside it. | hard | disk |
| `G48` | destroyed-instead-of-quarantined | Any rm, git rm or Trash aimed at real work. | hard | disk |
| `G49` | csv-instead-of-xlsx | Tabular data shipped as bare CSV. | warn | disk |
| `G50` | unqueued-remainder | Work left undone with no queue id naming it. | hard | reply |

