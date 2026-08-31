# Stereogum's Rolling Playlist, Summer 2017

A reconstruction of Stereogum's rolling new-music Spotify playlist, rebuilt from the original
weekly articles and verified against the live site.

## What the record shows

Stereogum published no ranked "best songs of 2017" year-end list. Their 2017 year-in-review run
covered albums, music videos, EPs, new bands, pop singles and the worst songs of the year. Songs
coverage ran through one weekly franchise called The 5 Best Songs Of The Week, and that franchise
refreshed the rolling Spotify playlist every Friday.

So the 2017 edition of the playlist is that franchise, gathered up and put in order.

## How the hundred-track window was pinned

Nine songs were remembered from the playlist. Each carries one fixed publication date in the
Stereogum record. A rolling hundred-track playlist holds twenty weekly editions of five, so every
candidate is a run of twenty consecutive Fridays. The correct window contains all nine.

Three candidates were tested:

| Window | Weeks | Dates | Anchors held |
|---|---|---|---|
| July 14 refresh | #181 to #200 | March 3 to July 14, 2017 | 9 of 9 |
| July 7 refresh | #180 to #199 | February 24 to July 7, 2017 | 9 of 9 |
| June 16 refresh | #177 to #196 | February 3 to June 16, 2017 | 7 of 9 |

The June 16 window is ruled out. It ends before July 7, so it cannot carry St. Vincent's "New York"
or Japanese Breakfast's "Road Head". Those two picks move the reconstruction three weeks later.

## The check that settles the last question

Both July windows hold all nine anchors, so one detail separates them. The July 14 refresh puts
Lorde's "Green Light" in the oldest week, sitting at the very tail of the playlist. The July 7
refresh puts Arca's "Piel", Lana Del Rey's "Love" and Future's "Mask Off" below it.

Look at the bottom of the playlist in the screenshots. "Green Light" sitting last means July 14.
Anything from February 24 below it means July 7. Both lists ship as separate files.

## Where 2017 begins and ends

The franchise opened the year with week #173 on January 6, 2017 and closed it with week #221 on
December 15, 2017. That is 49 posts and 245 tracks, every week complete at five. Stereogum paused
for the holidays and resumed with week #222 on January 5, 2018.

One Friday inside the run carries no post: November 24, 2017, which was Thanksgiving week. That is
an editorial skip in the original record rather than a gap in this reconstruction.

## How each entry was verified

Each weekly post was fetched from stereogum.com by its own post ID. The publish date came from the
page metadata. The five ranked entries came from the article body. All 49 posts returned a full set
of five.

## Getting it into Spotify

Spotify offers no public route to create a playlist from a text list without account access, so the
import runs through a converter. Soundiiz and TuneMyMusic both accept a pasted "Artist - Title" list
and build the playlist on a connected account. Each track on the page also carries its own Spotify
search link for anything a converter fails to match.

## Files

- `index.html` is the browsable page with the anchor test and per-track search links
- `stereogum-2017-07-14-100.txt` is the primary hundred, March 3 to July 14
- `stereogum-2017-07-07-100.txt` is the alternate hundred, February 24 to July 7
- `stereogum-2017-06-16-100.txt` is the ruled-out hundred, kept for the record
- `stereogum-2017-all.txt` is all 245 tracks of 2017
- `stereogum-2017.csv` carries week number, date, rank, artist, title, both window flags and source URL

## Source

stereogum.com, The 5 Best Songs Of The Week. Every artist, title and rank was parsed from the live
article at the linked URL. Nothing came from memory.
