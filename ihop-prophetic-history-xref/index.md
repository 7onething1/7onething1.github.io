# IHOP Prophetic History — Local Corpus vs Online Breakdowns

Built 2026-08-07. Every IHOP prophetic-history transcript and note on this Mac, cross-referenced against the published online breakdowns.

## Local totals

| Format | Count | Location |
|---|---|---|
| Transcripts (.txt) | 420 | `~/New Desktop/_Archive/IHOP/mikebickle-full-library/org-pull/transcripts/` |
| Audio (.mp3) | 181 | `.../org-pull/audio/` |
| PDFs | 120 | `.../org-pull/pdfs/` |
| 2009 IPH session PDFs | 8 | `~/Older Downloads HUGE/.../House of prayer/My Library/Transcripts/` |
| 1988 Bob Jones tapes | 4 | `.../My Library/Other Items/VisionsAndRevelations-MikeBickleWithBobJones1988/` |
| Personal / critical notes | ~30 | `~/Library/Mobile Documents/com~apple~TextEdit/Documents/`, `~/Documents/` |

Pre-built search indexes also exist: `bickle-ihop-index` (33 MB), `ihop-only-index` (41 MB), `ihopu-teachers-index` (15 MB).

## Three tellings of one history

| Telling | Year | Sessions | On this Mac |
|---|---|---|---|
| Visions and Revelations (Bickle + Bob Jones) | 1988 | 4 | Audio only, all 4 |
| IPH series | 2009, IPH02 re-recorded 2011 | 8 | All 8 as PDF |
| IHOPKC Prophetic History | 2019 | 11 | 1 transcript of 11 |

Eight of the eleven 2019 sessions retell a 2009 IPH session under a new title: 2019 S03=IPH01, S04=IPH02, S05=IPH03, S06=IPH05, S07=IPH06, S08=IPH08, S09=IPH04, S10=IPH07.

## 2019 series coverage

Out of 11 sessions: transcripts **11** (was 1), audio **9**, PDF **8**, 2009 twin **8**.

Every session of the 2019 series is now held as searchable text: seven from local audio, three from YouTube captions, and the Sam Storms interview from the original library.

## Sources missed on the first pass, since corrected

The first sweep surfaced YouTube transcript paths in its own results and did not follow them, and it cited archive.org from a search summary without fetching the item. Both are now done.

**YouTube.** The official playlist `PL1FsQJ2QhKZLJmoMNgcVIDHyMuhV3IbOK` carries nine sessions including all three the local library lacked. Pulled via the polite gate: session 3 (`lICAlChTG8M`, 73,356 chars), session 6 (`anPXJiXKWPg`, 61,577 chars), session 9 (`oqnvd51kVuQ`, 64,967 chars). Total 199,900 chars. Saved to `youtube-transcripts/`.

**Local YouTube corpora.** Seventeen transcript files across five already-downloaded channel corpora discuss the prophetic history. Densest is `yt-paul-keith-davis-FULL` with 23 files mentioning Bob Jones and 5 mentioning Paul Cain, a secondary account from a Bob Jones associate. Also `yt-david-sliker-FULL` (8 hits), `_Archive/yt-david-sliker` (3), `_Archive/yt-ihopkc-prayers` (3), `yt-corey-russell-FULL` (2), `yt-kirk-bennett-FULL` (1, a 63,519-char first-person review naming 1983 and 1984).

**archive.org.** The Gruen item holds seven formats. The plain text at 342,674 chars is saved to `online-sources/gruen-report-1990.txt`.

## Using the Gruen report

Gruen made partial concessions in a July 1, 1990 letter to John Wimber. He affirmed the document's essential accuracy and did not regret releasing it. He conceded some testimonies were disputable, retracted an undocumented account of a baby dying after a prophecy, and completely exonerated Paul Cain of any negative charges, which contradicts parts of his own document.

Practical rule: the weather-station figures and the transcribed direct quotes stand, since none of those were retracted. His characterizations and conclusions do not, and nothing negative about Paul Cain from this document should be carried forward.

A first pass using loose filename matching reported 6 of 11 present. That was wrong: the matcher scored on leading digits and common words, accepting `04 Three Prophetic Time Frames in the End Times` as session 4. Rerunning on distinctive tokens gave the corrected figure of 1, which the transcription run then raised to 8.

Bickle states in Session 7 that the run is a **ten-part series**. The online listing shows eleven because the Sam Storms interview of November 8 was appended after the Friday-night run ended. Session 7 also describes Session 6 as covering power released on proclaiming the message tied to the Spirit of Prayer, which matches the online title and confirms the canonical ordering from inside the audio.

## Transcription run, 2026-08-07

Ten local mp3 sessions transcribed with faster-whisper 1.2.1, `base` model, int8 on CPU, beam size 5, three parallel workers on four cores.

**606,326 characters from 670 minutes of audio in 163 minutes wall clock, mean 4.1x realtime, $0 API cost.**

| Session file | Chars | Segments | Audio min | Wall min |
|---|---|---|---|---|
| 01 Intro to Bob Jones Paul Cain and End Time Revival | 44,506 | 477 | 53.9 | 14.3 |
| 02 Great Change and Revival Are Coming to the Church | 56,438 | 1,430 | 65.5 | 20.1 |
| 03 Healing Anointing, Jehovah Rapha, Dominus and Other Visions | 65,660 | 711 | 77.0 | 19.7 |
| 04 A Procession to the Stadium, Chariots and the Sands of Time | 60,840 | 972 | 69.3 | 16.5 |
| 04 Joseph's Dungeon, The Power of the Spirit and Humility | 36,310 | 377 | 42.6 | 8.9 |
| 05 Healing Anointing, Jehovah Rapha and Other Visions | 76,858 | 1,316 | 78.8 | 18.6 |
| 06 Called to Proclaim Song 8:6, Hephzibah and Jesus in Red | 75,021 | 772 | 87.0 | 19.6 |
| 07 Hephzibah, God's Beauty and Jesus in Red | 68,820 | 701 | 71.1 | 19.1 |
| 08 The Blueprint Prophecy and the Black Horse | 58,400 | 1,402 | 60.2 | 18.3 |
| 10 Financial Miracles and Promises of Economic Blessing | 63,473 | 682 | 64.5 | 8.1 |

Output: `~/Projects/_outputs/ihop-prophetic-history-2019/`, one `.txt` plus one `.meta.json` per session. Reruns skip anything already written above 2 KB.

**Content gate.** Each transcript was tested for its own subject rather than accepted on file size. Three initially read as empty. The cause was the model spelling Hebrew proper nouns phonetically: Hephzibah renders as `hefsabah`, Jehovah Rapha renders as `Rophe`. Rerun on those variants, all ten carry their own subject. Session numbers declared inside the audio match the filenames at sessions 4, 5, 7, 8 and 10.

**Caveat.** Three of the ten belong to adjacent tellings rather than the 2019 run. The files numbered 03, 04 Joseph's Dungeon, and 06 Called to Proclaim retell IPH03, IPH04 and IPH06. They cover the subject matter of canonical sessions 5, 9 and 7 in an earlier voice.

## The main finding

The 1983 drought sign is where the tellings and the documentation meet. Both sides are now held as primary text, so the whole exchange is checkable.

**The 1990 documentation.** Gruen's Section I cites National Weather Bureau readings from Richards-Gebaur Air Force Base, minutes from the church, showing over seven inches of rain in June 1983, well above normal. It records the August 23 rainfall as under one third of an inch, and notes six of the twelve rainy days in June exceeded it, one reaching 2.35 inches. It transcribes Bickle's telling at the time, in which the drought runs from June and August 23 brings three to four inches.

**The 2019 telling, session 3.** The word is given May 28 promising rain August 23, and the account adds that the drought did not begin until July 1, with the remark that this was not understood at the time.

**Bickle records his own correction.** The 2019 account explains the larger figure. Right after the August 23 meeting he asked people how much it had rained, nobody had measured, a rough estimate of a couple of inches circulated, and he told the story afterward as three or four inches. The group had assumed rain continued through the whole meeting when it had stopped. Fact-checking some years later showed it did not rain that much, and he says he corrected it publicly, adding that a wrong statement needs correcting.

**What this establishes.** The 1990 documentation caught a real discrepancy and its figures were never retracted. The later telling concedes the point in Bickle's own mouth. The drought start moved from June to July 1 across the two tellings. The August 23 rain is described modestly in 2019, as a torrential burst either side of a seven o'clock meeting.

Anyone writing from this should carry all four points together. The figures without the recorded correction misstates the record, and the correction without the figures hides what prompted it.

## Online sources mapped

Primary: mikebickle.org 2019 series page, mikebickle.org single-session version, ihopnetwork.com 1988 version (has transcripts), store.ihopkc.org.

Critical: Ernie Gruen "Do We Keep Smiling and Say Nothing" (1990) on archive.org, Personal Freedom Outreach 1991 report, Tricia Tillin "Roots of the Revival", CrossWise on the recantation question.

Assessment: Gospel Coalition Themelios, william-branham.org research page, The Pitch KC.

2023–24: Christianity Today (investigation, cutting ties), IHOPKC press release, Premier Christianity, Baptist News Global.

## Next steps

1. Done. The ten 2019 mp3 files are transcribed. Counts above.
2. Download the four 1988 transcripts from ihopnetwork.com instead of transcribing.
3. Extract text from the eight 2009 IPH PDFs. `pdftotext` is not installed on this machine.
4. Build one timeline file keyed on March 1983, May 7 1983, May 28 1983, August 23 1983.
5. Fix the ollama embed server. It timed out this session and `/ask` returned zero results.

## Method and limits

Local inventory from `mdfind` plus directory listing, counted from the filesystem. Session presence tested by requiring distinctive tokens in filenames. Online session list read from the mikebickle.org series page.

Not verified: page counts for the Gruen documents are as reported in secondary sources, not from the archive.org scan. Audio and PDF presence tested by filename, not by opening each file.
