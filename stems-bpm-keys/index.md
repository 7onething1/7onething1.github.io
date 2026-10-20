# Stem Map, BPM and Keys

**Every song in the stem map with the BPM and key an existing source states.** 357 songs, 113 with both values.

Live page: https://7onething1.github.io/stems-bpm-keys/

Built 2026-10-19T13:20:44 on Jacks-iMac.lan.

## Where each key comes from

| Source | Songs | What it is |
|---|---|---|
| 84-template mode pass | 8 | mode-aware verdict, 12 roots by 7 modes, from believeyoume-keys-modes |
| published key | 29 | web ground truth collected in _evidence/_key_validation.json |
| name tag | 46 | the key Moises or the loop vendor printed into the filename |
| audio_index vote | 20 | majority across that song’s stems in audio_index.json, 50 percent floor |
| Krumhansl on stems, gated | 20 | the per-song theory.json, routed through key_confidence.gate_key() |
| no source | 234 | nothing on disk states it, so it is blank rather than guessed |

A blank cell means no source on disk states the value. It is left blank rather than filled with a guess.

Krumhansl on stems is the weakest source, measured at 28 percent exact against web ground truth, and its BPM carries known octave errors. Those rows show a caveat and alternates in the provenance column.

Palette: The Royal Tenenbaums (Wes Anderson).

This is the text companion (sibling .md) for [stems-bpm-keys](https://7onething1.github.io/stems-bpm-keys/).
