# Camarillo Brillo, read against the stems

Frank Zappa, *Over-Nite Sensation*, 1973. Drum staff audit, 2026-09-09.

```
LOCKED    s187082  "Camarillo Brillo"  head r5563501, aiGenerated=true, 151 bars
OUTCOME   s187082 does not describe this recording; the matching tab is s412176
RE-AIMED  s412176  "Camarillo Brillo"  r6172310, aiGenerated=false, 122 bars
          drum staff credited "Ralph Humphrey (Drums)", the Over-Nite Sensation drummer
AUDIO     14 stems, 238.144 s, 44.1 kHz stereo, supplied by Brandon
```

## The short version

The queued job asked for a two-hands repair at five instants in s187082, bars 37 through 41, where
a ride, a snare and a low tom are written on one eighth. Those five instants are real inside that
file. The file itself has no correspondence to this performance, so removing a surface there would
have polished a tab that describes something else.

## 1. The five instants

Parsed from `s187082 r5563501` part index 3. All five sit on beat four with frets 38, 45 and 51,
meaning snare plus low tom plus ride. The count and the surfaces both match the earlier sweep.

## 2. Assets

Fourteen stems, 238.1439 s each, 44100 Hz stereo, 14 distinct SHA256 values. Kit lanes are Kick,
Snare, Toms, Hi-Hat, Cymbals and other_kit. Provenance is generated separation, so every event
carries a leakage caveat rather than the authority of a genuine isolated multitrack.

## 3. Recording identity

| Source | Claim | Implied length |
|---|---|---|
| s187082 own tempo map | 151 bars, 600.5 quarters, 132 bpm | 272.95 s |
| Songsterr sync clock for s187082 | 151 measure points, 1.84 s per bar | ~277 s |
| Brandon's stems | measured tempogram peak 120.19 bpm | 238.14 s |

At the measured tempo this recording holds about 119 bars of 4/4. The tab claims 150.

A positive control ran first, so a failure verdict would mean something. Onsets detected from the
stems themselves scored z of +23.79 on kick and +12.03 on snare against a shift null. Every
attempt to align s187082 failed: Songsterr's own clock as is, that clock rescaled, and a free
affine search. Dynamic time warping agreed, and the stems played backwards fit the tab better
than the stems played forwards.

## 4. The tab that does match

s412176 carries real personnel, Ralph Humphrey on drums and Tom Fowler on bass, both correct for
Over-Nite Sensation. The tab carries no AI flag and runs 122 bars at 120 bpm stepping to 122 bpm at
bar 10, predicting 240.33 s against 238.14 s of audio.

| Tab | Bars | AI | Real | Reversed | Gap | Shifted 97 s | Gap |
|---|---|---|---|---|---|---|---|
| s412176 | 122 | no | 0.5888 | 0.4969 | **+0.0918** | 0.4557 | **+0.1330** |
| s187082 | 151 | yes | 0.3011 | 0.3003 | +0.0008 | 0.2958 | +0.0053 |

The separation is 115x on the reversed-audio gap.

## 5. Verdict on the five instants

UNRESOLVED. No surface gets removed from s187082 on this evidence. Bars 37 through 41 cannot be
placed anywhere in this audio, so there is no timestamp at which to ask the cymbal stem whether a
fresh ride attack occurred.

The same census on s412176 returned zero three-surface instants across 1,769 note events. The
impossible stacks belong to the AI tab, not to the performance.

| Measure | s187082 | s412176 |
|---|---|---|
| Bars | 151 | 122 |
| Drum note events | 2296 | 1769 |
| Distinct drum voices | 8 | 9 |
| Pedal hi-hat lane | absent | 13 events |
| Ride | 75 | 147 |
| Toms | 68 | 391 |
| Three-surface instants | 5 | **0** |

## 6. Quality of the matching tab

| Lane | Notes | Mean support | Null | z | Supported | Enrichment |
|---|---|---|---|---|---|---|
| Snare | 335 | 0.1653 | 0.0623 | +6.77 | 20.3% | 4.1x |
| Kick | 439 | 0.2777 | 0.1572 | +6.59 | 13.9% | 2.8x |
| Hi-hat | 398 | 0.2421 | 0.1223 | +4.02 | 13.1% | 2.6x |
| Toms | 388 | 0.1694 | 0.1041 | +3.51 | 10.6% | 2.1x |
| Cymbals | 182 | 0.1844 | 0.0896 | +1.95 | 6.6% | 1.3x |

Four lanes clear the reference-class threshold. The cymbal lane sits under the 1.5x floor, so its
182 events stay unsettled by this stem pack.

## 7. Settled, open, next

**Settled.** The five instants are an artifact of a non-matching AI tab. s412176 tracks this
recording, carries zero playability violations, and its kick, snare, hat and tom lanes are
confirmed.

**Open.** The 182 cymbal events in s412176 need a per-event fresh-attack test with a leakage gate.
Whether s187082 describes some other Camarillo Brillo performance is untested, because only this
recording was available.

**Next.** Run the per-event cymbal pass on s412176 across all 182 events, one-to-one against the
Cymbals stem with the Hi-Hat stem as the competing explanation. Any edit goes onto a copy.

Evidence under `~/Projects/_outputs/zappa-camarillo-brillo/`.
