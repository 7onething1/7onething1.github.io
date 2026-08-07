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

Out of 11 sessions: transcripts **1**, audio **9**, PDF **8**, 2009 twin **8**.

Session 3 (The Early Days and the Solemn Assembly in May 1983) is the only one absent in every local format. Session 11 (Sam Storms interview) is the only one held as text, in 2 copies.

A first pass using loose filename matching reported 6 of 11 present. That was wrong: the matcher scored on leading digits and common words, accepting `04 Three Prophetic Time Frames in the End Times` as session 4. Rerunning on distinctive tokens gave the corrected figure of 1.

## The main finding

The 1983 drought sign is where the local telling and the published critiques diverge.

Local file `IHOPKC_s Prophetic History__7wk5hw5.txt` has Bickle placing the drought at **July 1 to October 1**, calling it the second worst on record, with rain promised for August 23. The same passage carries an explicit revision of the start date, noting the drought was thought to have started June 1 before the records were checked.

The published critique (Gruen material, Gospel Coalition assessment) cites meteorological records showing above-average rainfall for June 1983 and average rainfall for July 1983. The local telling's window sits past the month the records contradict. Both the original claim and the revision are preserved in Brandon's own corpus.

## Online sources mapped

Primary: mikebickle.org 2019 series page, mikebickle.org single-session version, ihopnetwork.com 1988 version (has transcripts), store.ihopkc.org.

Critical: Ernie Gruen "Do We Keep Smiling and Say Nothing" (1990) on archive.org, Personal Freedom Outreach 1991 report, Tricia Tillin "Roots of the Revival", CrossWise on the recantation question.

Assessment: Gospel Coalition Themelios, william-branham.org research page, The Pitch KC.

2023–24: Christianity Today (investigation, cutting ties), IHOPKC press release, Premier Christianity, Baptist News Global.

## Next steps

1. Transcribe the ten 2019 mp3 files with `/file-getter` (local faster-whisper, no API cost).
2. Download the four 1988 transcripts from ihopnetwork.com instead of transcribing.
3. Extract text from the eight 2009 IPH PDFs. `pdftotext` is not installed on this machine.
4. Build one timeline file keyed on March 1983, May 7 1983, May 28 1983, August 23 1983.
5. Fix the ollama embed server. It timed out this session and `/ask` returned zero results.

## Method and limits

Local inventory from `mdfind` plus directory listing, counted from the filesystem. Session presence tested by requiring distinctive tokens in filenames. Online session list read from the mikebickle.org series page.

Not verified: page counts for the Gruen documents are as reported in secondary sources, not from the archive.org scan. Audio and PDF presence tested by filename, not by opening each file.
