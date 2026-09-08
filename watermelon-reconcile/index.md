# Watermelon In Easter Hay, reconciled and shipped

Four parallel sessions had four answers for one drum staff. This is the decision list and the single revision that went live.

**Live:** Songsterr `s6857183` revision `r8970744`, published, hash `v0-3-2-kXpvKWZs5NRnBy84`.

## What shipped

Sixty-three notes asked one drum to sound twice at the same instant. Every one sat in voice 1 on top of a voice-0 note that the original transcriber wrote as a single plain stroke. They came out. Nothing else on the staff moved.

- Drum staff 2,833 to 2,770
- Same-instant same-drum stacks 63 to 0
- Voice 0 identical at 1,889 notes
- 42 bars touched, 9 of 9 track names kept

## The eight decisions

| Question | Decision | What settled it |
|---|---|---|
| Which build ships | Live head, repaired in place | v10 to v13 and the chart build both read from RESTORED, so either would wipe the kit rewrite and the bar 25 fill |
| The 63 double-strikes | Removed | r7715683 writes exactly one plain stroke at all 63 positions |
| Ride ghost notation | Left as set | Brandon's own edit, accent on beat 1 with 2, 3 and 4 plain |
| 202 absent ride notes | Left absent | Cymbal stem reads 0.30x to 0.50x of the 88 bars that kept their ride |
| Coda toms, bars 95 to 104 | Withheld | Chart-tom bars beat chart-empty controls by 1.15x, under the 1.5x floor |
| Bar 25 fill | Left at 8 | Tom stem supports 8 to 9 at every threshold |
| Bar 93, 2 toms | Kept | Supported at 5% and at 0.2% of stem peak |
| Cymbal lane | No per-event action | Lane confirms at 1.46x, so no single event can be promoted |

## The defect

The earlier pass found 49 and stopped at the snare. Sweeping every drum found 12 more on the kick and 2 on the high mid tom.

| Drum | Known before | Full sweep | Removed |
|---|---|---|---|
| Snare | 49 | 49 | 49 |
| Kick | 0 | 12 | 12 |
| High mid tom | 0 | 2 | 2 |
| **Total** | **49** | **63** | **63** |

## The lineage that would have caused damage

| Build | Parent | Kick | Snare | Pedal hat | Toms | Distinct tom drums | Verdict |
|---|---|---|---|---|---|---|---|
| LIVE r8968524 | the tab | 504 | 342 | 245 | 168 | 6 | ship this |
| EXPERIMENT-v13 | RESTORED | 504 | 342 | 245 | 191 | 2 | rejected |
| CHART-TOMS | RESTORED | 107 | 193 | 6 | 185 | 4 | rejected |
| RESTORED-TEXTSAFE-v2 | ghost restore | 107 | 193 | 6 | 6 | 2 | parent only |

v13 flattens the kit, with 187 of its 191 toms on one drum. The chart build never carried the kit rewrite, so it would have taken the kick from 504 back to 107.

## The ride, settled on the stem

Null is the 88 bars that kept their ride, median band energy 49.2.

| Bar | Author wrote | Live holds | Cymbal energy | Against null | Verdict |
|---|---|---|---|---|---|
| 87 | 20 | 0 | 14.6 | 0.30x | pause confirmed |
| 53 | 20 | 3 | 20.2 | 0.41x | pause confirmed |
| 51 | 20 | 0 | 23.0 | 0.47x | pause confirmed |
| 17 | 20 | 0 | 24.6 | 0.50x | pause confirmed |

Bars 2, 4 and 98 to 105 fall outside the anchor span, so they carry no verdict and were left alone.

## Gates

Drum staff -63, voice 0 untouched, other eight tracks identical across 2,765 positions, only kick and snare and high mid tom changed, all 1,038 voice bars keep their duration, zero stacks remain, 137 of 137 CDATA wrappers preserved, NAMEDROP-CLEAR.

The first build went through ElementTree and lost every CDATA wrapper, which is the exact state that blanked 9 of 9 names on the original tab. It was redone as text surgery on the raw GPIF.

Source: `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/out/RECONCILED-s6857183-Brandon-edit.gp`
