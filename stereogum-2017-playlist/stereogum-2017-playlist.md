# Stereogum's Best New Music, 2017 Edition

A week-by-week reconstruction of Stereogum's 2017 new-music feed, rebuilt from the
original articles and verified against the live site.

## What the record actually shows

Stereogum published no ranked "best songs of 2017" year-end list. Their 2017 year-in-review
run covered albums, music videos, EPs, new bands, pop singles and the worst songs of the year.
Songs coverage ran through one weekly franchise called The 5 Best Songs Of The Week, and that
franchise fed the rolling Spotify playlist.

So the 2017 edition of the playlist is the weekly franchise, gathered up and put in order.

## The June 16, 2017 hundred

The rolling playlist carried roughly one hundred tracks and refreshed every Friday with that
week's five picks. Twenty weeks of five picks reaches one hundred tracks. Counting back from
June 16, 2017 gives weeks #177 through #196, which is February 3 through June 16, 2017.

That set comes to exactly 100 tracks.

## How each entry was verified

Each weekly post was fetched from stereogum.com by its own post ID. The publish date came from
the page metadata. The five ranked entries came from the article body. Every date landed on a
Friday and the sequence runs unbroken across all 21 weeks recovered.

The 50 tracks covering weeks #187 through #196 were checked against a previously supplied list.
All 50 matched exactly, including ranks and featured-artist credits.

## The open question

No source I could reach documents the playlist's track count in June 2017. One hundred is the
working assumption, taken from the count the playlist carries today. The reconstruction is built
week by week, so a different count moves only the boundary week and leaves everything else intact.

## Getting it into Spotify

Spotify offers no public route to create a playlist from a text list without account access.
The import runs through a converter instead. Soundiiz and TuneMyMusic both accept a pasted
"Artist - Title" list and build the playlist on a connected account. Each track on the page also
carries its own Spotify search link for anything a converter fails to match.

## Files

- `index.html` is the browsable page with per-track Spotify and YouTube search links
- `stereogum-2017-06-16-100.txt` is the 100-track import list, newest week first
- `stereogum-2017-all.txt` is every track recovered
- `stereogum-2017.csv` carries week number, publish date, rank, artist, title and source URL

## Source

stereogum.com, The 5 Best Songs Of The Week. Every artist, title and rank was parsed from the
live article at the linked URL. Nothing was supplied from memory.
