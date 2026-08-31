# Stereogum's Rolling Playlist, 2017

A reconstruction of Stereogum's rolling new-music Spotify playlist, rebuilt from the original
weekly articles and verified against the live site.

## What the record shows

Stereogum published no ranked "best songs of 2017" year-end list. Their songs coverage ran through
one weekly franchise called The 5 Best Songs Of The Week, and that franchise refreshed the rolling
Spotify playlist every Friday.

## The main list

February 3 through June 16, 2017. Weeks #177 through #196, twenty weekly editions of five, 100 tracks.
It runs from Lorde's "Sober" at the top down to Pallbearer's "Thorns" at the tail.

This is the list that matches Brandon's ear, so the page leads with it.

## The 120-track extension

February 3 through July 14, 2017. Weeks #177 through #200, 120 tracks.

It keeps every track in the hundred and adds the four later weeks, which carry St. Vincent's
"New York", Japanese Breakfast's "Road Head", JAY-Z's "The Story Of O.J.", Kesha's "Praying",
Lorde's "Supercut" and Nine Inch Nails' "LESS THAN".

A strict hundred-track window reaching July 14 has to drop February to make room, and February
holds Mount Eerie, Jay Som, Vince Staples, Lana Del Rey and The Jesus & Mary Chain. The 120 keeps
both ends rather than trading one for the other.

## Two other windows, kept for reference

March 3 to July 14 and February 24 to July 7 are both 100 tracks and both reach the July songs.
Each one costs a chunk of February. They ship as separate files.

## Where 2017 begins and ends

The franchise opened the year with week #173 on January 6, 2017 and closed with week #221 on
December 15, 2017. That is 49 posts and 245 tracks, every week complete at five. Stereogum paused
for the holidays and resumed with week #222 on January 5, 2018.

One Friday inside the run carries no post: November 24, 2017, Thanksgiving week. That is an
editorial skip in the original record.

## How each entry was verified

Each weekly post was fetched from stereogum.com by its own post ID. The publish date came from the
page metadata. The five ranked entries came from the article body. All 49 posts returned five.

## Getting it into Spotify

Spotify offers no public route to create a playlist from a text list without account access, so the
import runs through a converter. Soundiiz and TuneMyMusic both accept a pasted "Artist - Title" list
and build the playlist on a connected account.

## Files

- `index.html` is the browsable page with per-track search links
- `stereogum-2017-06-16-100.txt` is the main hundred, February 3 to June 16
- `stereogum-2017-feb03-jul14-120.txt` is the 120 extension
- `stereogum-2017-07-14-100.txt` and `stereogum-2017-07-07-100.txt` are the two alternates
- `stereogum-2017-all.txt` is all 245 tracks of 2017
- `stereogum-2017.csv` carries week, date, rank, artist, title, list flags and source URL

## Source

stereogum.com, The 5 Best Songs Of The Week. Every artist, title and rank was parsed from the live
article at the linked URL.
