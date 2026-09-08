# Zappa Ghost Match Audit

Live: https://7onething1.github.io/zappa-ghost-match-audit/

Read live from the Songsterr API on 2026-09-07 23:38, every part of every song.

**23 songs measured, 20 carry every expected ghost count, 3 measurably short.**

| ID | Title | Expected | Live per part | Result | Note |
|---|---|---|---|---|---|
| s68246 | Alien Orifice | 86 | 1,6,0,0,2,0,2,0,0,86 | match |   |
| s21495 | Andy | 1 | 0,0,0,0,0,0,0,4,1 | match |   |
| s59089 | Black Napkins | 1 | 24,0,0,0,1 | match |   |
| s68248 | Carolina Hard-Core Ecstasy | 144 | 0,0,0,0,144,0,0,0,0 | match |   |
| s749523 | Catholic Girls | 16 | 0,16,0,0,0,0,0,0,0 | match |   |
| s620961 | Drowning Witch | 419 | 0,27,3,1,15,1,0,2,0,3,0,0,21,0,4,419 | match |   |
| s748459 | Fembot In A Wet T-Shirt | 57 | 2,0,0,0,0,0,0,0,57 | match |   |
| s412178 | Inca Roads | 165 | 6,0,0,0,0,0,0,0,0,3,0,0 | SHORT | restore r8907511 submitted 09-05 is not live; live is still the stripping r8769026 q-2026-09-07-790fb8 |
| s604777 | Keep It Greasey | 629 | 0,0,0,0,0,0,0,0,629 | match |   |
| s35870 | Montana | 212,105 | 24,62,16,112,0,6,0,0,0,0,23,0,0,7,7,212,0,105 | match |   |
| s35886 | Muffin Man | 578 | 27,8,0,0,578 | match |   |
| s35865 | Nanook Rubs It | 168 | 0,0,0,0,0,0,0,0,168 | match |   |
| s35878 | Nanook Suite | 168 | 0,0,0,0,0,0,0,0,0,3,168 | match |   |
| s35884 | Oh No | 141 | 0,0,0,0,0,141 | match |   |
| s35875 | Packard Goose | 3 | 0,0,0,0,0,0,3,0 | match |   |
| s35889 | Peaches En Regalia | 14 | 1,0,0,0,0,0,0,0,0,14,0 | match |   |
| s1105085 | The Black Page | 173 | 0,0,0,173 | match |   |
| s412170 | Trouble Every Day (Live) | 9 | 0,0,0,0,3,0 | SHORT | restore r8932027 submitted 09-06 is not live; live r8815000 is moderator Kirill's q-2026-09-07-4e796f |
| s20690 | Uncle Meat (YCDTOSA Vol. 2) | 24 | 0,0,0,30,0,30,0,0,0,0,24 | match |   |
| s35881 | Watermelon In Easter Hay | 1317 | 16,0,0,0,0,0,0,0,1317 | match |   |
| s35887 | What's New In Baltimore? | 59 | 0,0,0,0,0,0,59 | match |   |
| s412162 | Zomby Woof | 32 | 0,0,0,0,0,0,0,0,0,10 | SHORT | moderator Nikita's r8918601 is live, reverted all but the drum notation q-2026-09-07-abbb9a |
| s35883 | Zoot Allures | 53 | 0,0,0,0,53 | match |   |

## Limit of the measurement

The test is presence, not identity. A song passes when some part carries exactly the expected ghost count. Live track names come back empty from the API, so the drum staff is inferred rather than named.

Three earlier yardsticks were wrong. Summing all parts scored Watermelon 1,333 against 1,317. Taking the largest part scored Black Napkins 24 against 1, picking a guitar staff. Montana's 317 was 212 and 105 summed.

## The set difference

| Song | Restore rev | Live rev | In restore, absent live | Live only | Where |
|---|---|---|---|---|---|
| s412178 Inca Roads | r8907511 pending | r8769026 | **165** | 0 | part 11, 42 bars, bar 0-314 |
| s412170 Trouble Every Day | r8932027 pending | r8815000 | **6** | 0 | part 4, bar 66 only, fret 49 |
| s412162 Zomby Woof | r8905491 | r8918601 | 2 | 4 | part 9, bar 8, fret 38 |

**Zomby Woof is withdrawn from the short list.** The 32 came from the stale ghost_sweep.json. Our restore carries 8 positions, live carries 10, four of which ours lacks.

Both pending restores read isOnModeration true, so the in-place route is closed by the queue, not by rejection. A copy-tab upload is a working second route that waits on Brandon.

## The three short

- **s412178 Inca Roads**: restore r8907511 not live, published is still the stripping r8769026, 165 flags absent
- **s412170 Trouble Every Day (Live)**: restore r8932027 not live, published r8815000 is moderator Kirill's, 3 of 9
- **s412162 Zomby Woof**: moderator r8918601 live, reverted all but drum notation, 10 of 32
