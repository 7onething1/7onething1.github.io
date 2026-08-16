# Six sessions, one Songsterr tab

16 August 2026. What today's chats were doing to each other, and the lock that stops it.

**The ask:** "monitor the active chats of today, make sure each isn't waiting on me to
submit the latest gp to songsterr bc when that happens I don't know which is that new.
have it upload the latest. make sure each doesn't try to do it at the same time and make
sure each is doing it with a file with vocal drum etc"

## What was happening

Six Claude sessions worked The Ship guitar tabs today. Three were parked holding a
finished file, waiting for Brandon to upload it. Two were driving the same browser tab,
flipping it between songs under each other. One had halted on a belief that turned out to
be wrong.

| Session | State | Where it stopped |
|---|---|---|
| Theship tabs delivery handoff | PARKED | Preflight-cleared build, 5 tracks, grid 0.03% off. Halted believing a peer session submitted `r8516072`. Brandon uploaded it by hand. |
| Goal completion shipping (sleep) | PARKED | 5 tracks verified, marked NOT PUBLISHED, handed Brandon two questions it could answer itself |
| Guitar tab cadence correction | PARKED | "One more attempt to settle revision 8515317 myself before I ask you anything" |
| Resume goal completion shipping | WORKING | Asked whether Brandon's revision contained anything its build lacked, with no way to answer |
| Goal completion shipping | WORKING | Tracing 805 Lead notes missing across 66 bars |
| Ship goal completion | STALLED 5h | Mid-enumeration of nine corrections, six still marked "in the record? no" |

## Which revision is new

Songsterr shows a revision id and a timestamp and nothing else. Two sessions held opposite
beliefs about who made `r8516072`. Settled from timestamps: the revision was submitted at
21:11:57Z, and Brandon's message "uploaded latest and hit submit" arrived at 21:14:03Z. It
is his, by hand.

Note counts per part, from the live backup:

| Part | r8514056 | r8516072 | change | role |
|---|---:|---:|---:|---|
| Distortion Guitar | 225 | 123 | -102 | guitar |
| Overdriven Guitar | 2616 | 2415 | -201 | guitar |
| Electric Bass (finger) | 338 | 338 | unchanged | bass |
| Drums | 769 | 769 | unchanged | drums |
| Tenor Sax (the vocal line) | 310 | 310 | unchanged | vocal |

His edit is a dedup of the two guitar staves and nothing else, 303 notes removed. That is
his own correction "02 Flake, duplicated lead notes", applied by hand because the pipeline
did not do it. Both parked sessions hold builds predating it, so importing either one
as-is restores all 303 duplicates. Both were told to rebase onto `r8516072`.

## The vocal track a name check misses

On tab `s5823892` the fifth part carries the vocal line. The track has no name at all, the
instrument is Tenor Sax at General MIDI program 66, the lyrics array is empty, and it holds
310 notes across 69 bars. `role_of('Tenor Sax')` returns `other:tenor sax`, so a name-based
full-band check reports NO VOCAL on a tab that has one. Full band gets verified by per-part
note content, and not from what the track is called.

## The lock

`importRevisionInput` replaces the entire tab. Two overlapping imports do not merge: the
second wins outright and the first session's work is gone with no error raised. Adapted
from `deploy_gate.py`, which serializes concurrent `/ship` calls the same way. A flock is
no use here because an upload spans many tool calls across many turns and a flock dies
with its process, so this is a lease with an expiry.

```bash
upload_lease.py acquire --session "<title>" --song "02 Flake" --tab s5823892
upload_lease.py record  --session "<title>" --song "02 Flake" --tab s5823892 \
    --rev r8516072 --tracks 5 --roles vocal,drums,bass,guitar,guitar
upload_lease.py release --session "<title>"
upload_lease.py status
upload_lease.py latest --tab s5823892
```

The lease self-expires after twenty minutes so a session that dies mid-upload cannot
deadlock the others.

**Tested before any session was told to rely on it:** 12 sessions raced for the lease at
once, exactly one winner, 11 refused. A peer acquire while another holds it exits 1. A peer
release of someone else's lease exits 1. An acquire after expiry succeeds. A recorded
upload missing vocal or drums is flagged in the ledger.

## It closed the loop within eight minutes

Sessions were messaged at 21:22Z. Confirmed from Songsterr's own revision API for song
5823892, and not from the ledger:

| Revision | tracks | created | who |
|---|---:|---|---|
| 8516250 | 5 | 2026-08-16T21:22:22Z | Resume goal completion shipping, under the lease |
| 8516072 | 5 | 2026-08-16T21:11:57Z | Brandon, by hand |
| 8514056 | 5 | 2026-08-16T19:22:44Z | earlier session |
| 7609146 | 5 | 2026-06-28T15:09:55Z | original AI transcription |

A session took the lease, uploaded, recorded the revision and released, with no human asked
to submit anything. Every revision on this tab carries all five tracks, so no import has
dropped a part.

## What changed

- Every session was messaged with the rule, the lease commands, and its specific finding.
- The rule now lives in `~/.claude/skills/songsterr-upload/SKILL.md`, so a session that
  never sees this page still gets it.
- The ledger at `~/.claude/logs/songsterr_uploads.jsonl` records song, tab, revision, track
  roles and who did it, including Brandon's hand-uploads via `--source brandon`. Both Flake
  revisions are seeded from the live backup.

Counts measured from `_songsterr_live_backup_2026-08-16/02_flake/` and six session
transcripts under `~/.claude/projects/-Users-drwu/`.
