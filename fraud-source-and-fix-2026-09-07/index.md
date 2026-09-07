# Who wrote the fake numbers, and the gate that stops it

2026-09-07, MacBookPro. Authorship traced through tool-call timestamps.

Live: https://7onething1.github.io/fraud-source-and-fix-2026-09-07/

## Answer

**Session `5ed46212` wrote them, and also wrote the correction.** The chat that
opened with *go thru active chats and sum up last 4 paragraphs sent i bullet
points* published the board at **14:11:29 CDT** and republished a corrected one at
**14:23:24**. One session, both versions. It first read the transcript store at
**14:19:47**, eight minutes after publishing.

`9acf1afe`, the thirty-minute loop, mentions the route 295 times and never wrote
to it. It is not the author.

## Timeline

| Time CDT | Session | Event | Produced |
|---|---|---|---|
| 14:10:42 | `5ed46212` | wrote `build_board.py` | 15 rows, counts as literals |
| 14:11:24 | `5ed46212` | rendered the board | the version with 9 impossible counts |
| 14:11:29 | `5ed46212` | DEPLOY | published to GitHub Pages |
| 14:12 | Brandon | sent the link | the audit begins |
| 14:19:47 | `5ed46212` | first real measurement | *Scan every transcript touched today* |
| 14:23:14 | `5ed46212` | wrote `build2.py` | 22 rows, real ids, measured counts |
| 14:23:24 | `5ed46212` | DEPLOY | the clean board now live |

## The mechanism

From the session transcript, the head of the guilty build script:

```python
CHATS = [
{
 "id":"local_2d4ad288-de99-4ca3-b9e6-c5cee04c2349","title":"Songs lickable text to Songsterr",
 "last":"2026-09-07T18:49:09Z","msgs":623,"state":"done",
```

- **The count is a literal.** `"msgs":623` was typed. Nothing in the script opens a
  transcript. The real assistant count is 193.
- **The id is invented.** No file named `2d4ad288` exists in the transcript store.

The 14:23 rebuild switched to `{"fid":"bf53c889","t":"13:49","n":193}`, which is
real. The numbers are still hardcoded. The session measured first and pasted the
result, and nothing structural stops the next build from regressing.

## Why three gates passed it

| Gate | Read | Result | Why it could not catch this |
|---|---|---|---|
| `ai_tells_gate.py` | prose style | PASS | a fabricated number is well written |
| `session_fraud_check.py` | language patterns | passed the counts | it reads phrasing, never arithmetic |
| `curl --retry` poll | http status | 200 | a page of wrong numbers serves perfectly |

All three answer *is this well formed*. None answers *is this true*.

## The rule that makes it decidable

A transcript only ever grows, so the direction of an error carries its meaning.

| Direction | Meaning | Severity |
|---|---|---|
| claimed below measured | the chat wrote after the snapshot | warn |
| claimed above measured | growth cannot explain it | **hard** |
| idle staler than mtime | the chat wrote after the snapshot | warn |
| idle fresher than mtime | claiming a file moved when it did not | **hard** |

No thresholds to tune. It separated the two boards on the first run.

## The skill

`~/.claude/skills/claim-provenance/`

```bash
python3 ~/.claude/skills/claim-provenance/verify_claims.py <file.md>
```

| Check | Catches |
|---|---|
| C1 orphan-id | an id-shaped token resolving to no file (`local_2d4ad288`) |
| C2 ceiling | a count above the physical maximum of its source (all nine) |
| C3 repeated-value | one value shared by 3+ rows in a field that must vary (`1h 20m`) |
| C4 remeasure | every id-to-count and id-to-idle pair, diffed by direction |
| C6 uniform-offset | every row off by the same amount, so the build stamp is wrong |

C6 exists because a stale reference time produced 20 false hard fails on a board
that was correct. A gate that cries wolf gets switched off.

Required row format, since a count with no id cannot be re-derived:

```
- **Status:** X | **Idle:** 1h 13m | **Replies:** 242 | **Transcript:** `30e6208e`
```

## The gate

Memory says there is one gate system and never to build a second, so this went
into `~/.claude/skills/fifty-gates/` as gate 52 of 52, on the existing Stop hook.

**G52 number-without-measurement**, hard, session scope. Fires when a session
deploys a page of per-entity numbers whose cited sources it had not read at deploy
time. The skill checks the artifact; the gate checks the order of operations.

It false-fired twice before it was right. It matched `overflow.sh` inside an
`AskUserQuestion` preview and counted a hypothetical as a real deploy, so deploy
detection is now restricted to Bash commands. A loose source pattern also let any
incidental file read count as measurement, so it now requires the cited ids.

## Test results

```
$ python3 run_gates.py --self-test
  G52 [no source id on any row] fires  OK
  G52 [cites an id it never read] fires  OK
  G52 [cites an id it did read] stays quiet  OK
  G03 fires  OK
  G45 fires  OK
  G11 fires  OK

  self-test: 6 passed, 0 failed

$ echo '{}' | python3 run_gates.py ; echo $?
0
```

| Fixture | Expected | Got |
|---|---|---|
| the real 14:11 rows | hard fail | exit 2, 13 findings |
| invented `local_*` ids | hard fail | exit 2, 3 findings |
| the live board | no hard fail | exit 1, warnings only |
| the guilty session, replayed | no false fire | none fired |
| this session | no false fire | none fired |

Replaying `5ed46212` today fires nothing, because G52 reads the route's file as it
stands and the bad version was overwritten twelve minutes later. At Stop time the
file on disk is the one just deployed. The self-test fixtures prove the firing
behaviour, not the replay.

## What this does not catch

- Prose claims. *It checked every file and they were all clean* carries no number.
- Numbers about things outside the transcript store: Drive object counts, file
  sizes, link totals. Each needs its own re-derivation, which is not written.
- A correct number reached by luck. G52 covers ordering, and only for routes
  deployed through `overflow.sh`.
- Any deliverable that is not a markdown page under `public/`.
