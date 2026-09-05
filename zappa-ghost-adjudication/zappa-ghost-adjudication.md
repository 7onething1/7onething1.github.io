# Zappa Ghost Adjudication

Per-ghost adjudication against sources. Rebuilt 2026-09-05 under the corrected evidence
model.

## NO WRITE

Nothing on this page authorises an edit. The queued restore is held. Every song carries an
evidence status, and only `DIRECT CHART MATCH` permits a restore.

## The notation rule, corrected

A ghost note is an **anti-accent**, meaning a substantially softer percussion event. Snare is
its most common drumset application rather than its only valid one. Dorico allows ghost
notation on unpitched percussion generally and Avid allows parentheses around any notehead,
so **lane identity cannot prove a ghost marking invalid**.

Snare therefore means **strong prior evidence**, never "restore". A hi-hat, ride, kick,
tambourine or crash ghost earns greater suspicion because that notation appears less often in
ordinary drum charts, and its lane still cannot decide the case alone.

## The contradiction this fixes

The previous version stated the goal as per-ghost adjudication, then said snare-only songs
need no chart and can simply restore. Those are two different standards. The stronger one
governs, so **2,211 snare flags are "awaiting adjudication", not "2,211 restore"**.

## Headline

| Measure | Value |
|---|---|
| Flags in scope | 4,574 across 23 damaged tabs |
| Snare, awaiting adjudication | 2,211 |
| Actionable now, sources on this Mac | 4 |
| Blocked on acquisition | 3 |

## The evidence model

| status | meaning | permitted action |
|---|---|---|
| `DIRECT CHART MATCH` | Independent drum chart shows the exact ghost | Restore |
| `DIRECT CHART REJECT` | Chart shows an ordinary stroke or no stroke there | Keep removed |
| `STRUCTURAL SCORE SUPPORT` | Official score confirms rhythm, meter or ensemble attack | Preserve timing, continue dynamic check |
| `REPEATED PATTERN SUPPORT` | Strong repeated pattern indicates deliberate encoding | Hold as probable, seek written confirmation |
| `SNARE PRIOR` | Ghost is on snare with plausible placement | Hold as likely, adjudicate further |
| `NON-SNARE PRIOR` | Ghost is on another percussion lane | Hold for evidence |
| `REVISION SEMANTIC ERROR` | Later edit changed ghost into another articulation | Undo wrong articulation only |
| `MODERATION SAFE` | Destructive revision did not become current | No immediate repair required |
| `UNRESOLVED` | Evidence does not decide the individual flag | Make no musical edit |

Publication state and notation truth are separate axes. A song can be `MODERATION SAFE` and
`UNRESOLVED` at the same time.

## Every song under the new model

| song | title | flags | snare | other | status | action |
|---|---|---|---|---|---|---|
| 35881 | **Watermelon In Easter Hay** | 1317 | 0 | 1317 | `REPEATED PATTERN SUPPORT`, `NON-SNARE PRIOR` | BLOCKED on the Vai book |
| 604777 | **Keep It Greasey** | 629 | 629 | 0 | `MODERATION SAFE`, `SNARE PRIOR`, `UNRESOLVED` | Live state safe, musically unadjudicated |
| 35886 | **Muffin Man** | 578 | 504 | 74 | `SNARE PRIOR`, `NON-SNARE PRIOR` | Actionable after calibration |
| 620961 | **Drowning Witch** | 419 | 101 | 318 | `STRUCTURAL SCORE SUPPORT`, `NON-SNARE PRIOR`, `SNARE PRIOR` | ACTIONABLE NOW |
| 35870 | **Montana** | 317 | 174 | 143 | `REVISION SEMANTIC ERROR`, `UNRESOLVED` | BLOCKED on $7.99 purchase |
| 1105085 | **The Black Page** | 173 | 170 | 3 | `STRUCTURAL SCORE SUPPORT`, `SNARE PRIOR` | ACTIONABLE NOW |
| 35865 | **Nanook Rubs It** | 168 | 168 | 0 | `SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 35878 | **Nanook Suite** | 168 | 168 | 0 | `SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 412178 | **Inca Roads** | 165 | 134 | 31 | `STRUCTURAL SCORE SUPPORT`, `SNARE PRIOR`, `NON-SNARE PRIOR` | ACTIONABLE NOW, best calibration target |
| 68248 | **Carolina Hard-Core Ecstasy** | 144 | 0 | 144 | `NON-SNARE PRIOR`, `UNRESOLVED` | Hardest case, audio route only |
| 35884 | **Oh No** | 141 | 0 | 141 | `NON-SNARE PRIOR`, `UNRESOLVED` | Actionable after calibration |
| 68246 | **Alien Orifice** | 86 | 33 | 53 | `SNARE PRIOR`, `NON-SNARE PRIOR` | Awaiting adjudication |
| 35887 | **What's New In Baltimore?** | 59 | 4 | 55 | `NON-SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 748459 | **Fembot In A Wet T-Shirt** | 57 | 53 | 4 | `SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 35883 | **Zoot Allures** | 53 | 53 | 0 | `MODERATION SAFE`, `SNARE PRIOR`, `UNRESOLVED` | Live state safe, musically unadjudicated |
| 412162 | **Zomby Woof** | 32 | 0 | 32 | `DIRECT CHART REJECT`, `DIRECT CHART MATCH` | ACTIONABLE NOW |
| 20690 | **Uncle Meat (YCDTOSA Vol. 2)** | 24 | 4 | 20 | `NON-SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 749523 | **Catholic Girls** | 16 | 16 | 0 | `SNARE PRIOR`, `UNRESOLVED` | Awaiting adjudication |
| 35889 | **Peaches En Regalia** | 14 | ? | ? | `UNRESOLVED` | Measure lanes first |
| 412170 | **Trouble Every Day (Live)** | 9 | ? | ? | `UNRESOLVED` | Measure lanes first |
| 35875 | **Packard Goose** | 3 | ? | ? | `UNRESOLVED` | BLOCKED, neither source on disk |
| 59089 | **Black Napkins** | 1 | ? | ? | `UNRESOLVED` | Inspect before trusting |
| 21495 | **Andy** | 1 | ? | ? | `UNRESOLVED` | Measure lanes first |

## Provenance, two measurements at different scopes

1,549 + 2,293 = 3,842 against 2,211 + 2,335 + 28 = 4,574. Both are valid and they describe
different scopes.

**3,842** is the earlier count of flags removed by revisions that **became the current
published one**, across 16 tabs. **4,574** is the full damage ledger across **23 tabs**,
including revisions submitted without publishing and four that were flagged and never
submitted. The pair is recorded with its scope attached so nobody later reads two correct
measurements as a contradiction.

## What changed on specific songs

**Zomby Woof, rationale corrected.** The 22 hi-hat flags are rejected because Drumnet
disagrees with their locations, never because hi-hat ghost notation is invalid in itself. That
distinction matters, since the invalid-notation claim would have wrongly generalised to every
hat, ride and tambourine ghost in the set.

**Montana loses SETTLED.** Proven: converting ghosts into staccato dots was semantically
wrong, because duration and dynamic are separate properties. Not proven: that all 317 original
flags were musically correct. Undo the articulation error, then adjudicate 174 snare and 143
non-snare separately against the Percunerds chart.

**The Black Page becomes its own evidence class.** Zappa wrote it as a drum solo, so the
published material preserves the composed rhythm including nested tuplets. Analysis notes
Bozzio added hi-hat ticks that were not prescribed, which separates composed attacks from
performance additions.

**Zoot Allures and Keep It Greasey, wording fixed.** A rejected stripping revision means
`MODERATION SAFE`. It does not establish that every original flag is authentic, so both stay
`UNRESOLVED` musically.

**Watermelon.** The ride pattern stays strong evidence of deliberate encoding, and it is not a
written confirmation. The Frank Zappa Guitar Book carries the track and an independent
analysis states Vai's transcription includes the drum part in detail. The verdict comes from
matching the ostinato bar-for-bar against Vai.

## Work order, disk layer against network layer

A first pass called three of these blocked on a disk check alone. Not-on-disk closes one
layer. A search reopened two of them and narrowed the third.

1. **Packard Goose. NOT BLOCKED, disk layer only.** Todd Bishop's Vinnie Colaiuta
   transcription of the Packard Goose guitar solo is a free blog post, and its PDF answers
   HTTP 200, application/pdf, 85,768 bytes at pdxdrummer.com. Same channel as four PDFs
   already in the corpus. Only the Vai half still needs the book.
2. **Watermelon. PARTIALLY OPEN.** The Vai Guitar Book is not on this Mac and is not the only
   route: an Alfred Music drum transcription of the track exists, credited to Vinnie Colaiuta
   at 4/4 and 112 BPM. Drumnet pages 1 to 5 are already on disk and can carry a first pass.
3. **Montana. NARROWED, not shut.** Percunerds at $7.99 is one route. OpenSheets lists a free
   Montana carrying a drum-kit part, and whether that is a real transcription or an
   auto-generated arrangement is unverified. Check before spending.
4. **Black Page against the written drum score. ACTIONABLE.** `the-black-page-drum-solo.htm`
   and `the-black-page-drum-solo3.jpg` are on disk.
5. **Drowning Witch against Brown's section coverage. ACTIONABLE.** `Drowning-Witch.png` and
   `GrooveAnalysis_Drowning-Witch.png` are on disk.
6. **Zomby Woof against its existing sources. ACTIONABLE.** 27 assets across 5 publishers.

**The only thing genuinely absent** is the 1982 Vai Frank Zappa Guitar Book. No free copy was
found. It is the single acquisition that unlocks the Watermelon and Packard Goose Vai
comparisons, and Black Napkins cannot be judged for drum authority until its pages are
inspected. Every other item has a route that does not need it.

Nothing was downloaded. The Packard Goose PDF was checked with a HEAD request only.

## Inca Roads, verified on disk this pass

The file named `BarryWall_The-Musical-Worlds-of-Frank-Zappa_thesis.pdf` is mislabelled. It is
**Wall, Ben (2011), 'Inca Roads' - The Musical Worlds of Frank Zappa, Masters thesis,
University of Huddersfield**, 132 pages.

**Appendix C, pages 98 to 132**, is the full study score. Page 98 lists Lead Vocals, Backing
Vocals, Flute, Marimba, Vibraphone, Rhodes Piano, Synthesizer 1, Synthesizer 2, Electric
Guitar, Bass Guitar, Timpani, Percussion and **Drum Kit**, marked "Transcribed by Benjamin
Wall", quarter note = 120 approx.

**The only omission is the improvised guitar and keyboard solos**, because they differed in
every recording. The drums are present throughout.

**The red zone is BAR 29**, at the head of section [C], the first occurrence of polyrhythm in
the piece. Zappa conducts a steady 4/4 across the whole section, as marked on the score. First
half of the bar the drums play septuplets against the bass playing normal sextuplets. Beat 3
drops into unison semiquavers. Beat 4 puts the drums on a quintuplet against the marimba's
sextuplets. Wall sets it out as a 7-against-6 Time Unit Box System in figure 5.

**The Songsterr tab has TWO drum staves:** track 10 named "AI" and track 11 named "Chester
Thompson", both instrument 1024. Live revision 8769026. Any comparison has to say which staff
it is judging.

## Provenance and safety

Ghost counts from the damage ledger `_defects.json`. Lane splits measured off each tab's
pre-sweep revision. Notation rule, evidence model and work order from Brandon's source hunt,
2026-09-05. Disk availability measured on this Mac the same day.

**No restore has been executed. No hook, tab or revision was written.**
