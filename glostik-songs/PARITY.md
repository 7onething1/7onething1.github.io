# Glostik Songs: feature parity checklist

Audited from `/glostik-songs/new/index.html` (119,029 bytes, sha256 8c499d39…) on 2026-09-19.
Every row is a Songs-tab behaviour the experimental page at `/glostik-songs/experimental` has to
reproduce. Rows marked **link-out** stay on `/new` on purpose: this phase redesigns Songs only.

## Data pipeline (shared, never forked)

| Source | Path | Carries |
|---|---|---|
| Song table | `/glostik-songs/data.json` | 653 songs, 1,780 plays, 40 streams, 13 learn rows, 4 retired |
| Play dates | `/glostik-songs/dates.json` | every date per song, StreamerSonglist history plus videos |
| Pictures | `/glostik-songs/gallery.json` | 7 band photos, merch strip, all from the band's own pages |
| Requests | `/api/learn` | live request list |
| Corrections | `/api/fix` | write only |
| Visits, comments, live set | `/api/visits`, `/api/comments`, `/api/live` | shared counters |

`song_cols` = artist, song, genre, with, catalog, plays, last, days, watch, bpm, half, double, key,
bpmsrc, art, album, gap, lastat, withlast, ext.

## Derived fields, recomputed identically

| Field | Rule |
|---|---|
| `orig` | artist starts with "glostik" |
| `rows` | plays joined by `song_id`, newest first, tie broken by clock time |
| `dates` | `dates.json` entry when its last date equals `s.last`, else the video dates alone |
| `fullHistory` | true when the request history was used |
| `back` | bustout: last play within 14 days AND gap before it 28 days or more |
| `debut` | first play on record within 14 days, only with full history |
| `overdue` | not retired, 10+ plays, 365+ days since the last |
| `rare` | 3 plays or fewer |
| `retired` | matches a row of `retired` on normalized song+artist |
| `status` | retired > back > debut > overdue > rare |
| `logPlays` | plays minus rows, the count that never reached a video |
| `maxPlays` | for the play bar width |

## Songs-tab features to reproduce

1. Search box over song + artist + genre, case-folded, live.
2. Clear-search button, Escape to clear, `/` keyboard shortcut to focus.
3. Nine filter chips: All, In the catalog, Rare, Glostik originals, Lizz Vega, Overdue, Bustouts,
   Debuts, Never played on stream. Live counts on each, computed after genre+search.
4. "Never played on stream" chip hides itself when nothing has zero plays.
5. Genre chips, multi-select, with per-genre counts, sorted by count then name.
6. Six sorts: Last played, Last gap, Most played, Song, Band, Genre. Each reversible.
7. Direction button whose words change per sort (Newest/Oldest, Longest/Shortest, Most/Fewest, A-Z/Z-A).
8. Clickable column headers that set the sort and show an up/down indicator.
9. `Days` header is an alias of `recent` and shows no indicator.
10. Most-played capped at top 50 when ascending, with the "Most played, top 50" label.
11. Group headings with counts: alphabet for Song/Band, genre name for Genre, age buckets for Last played.
12. No grouping for Most played and Last gap.
13. Row count line with the active filter, the genres and the search echoed.
14. Row columns: number, song, guest credit, artist, genre, plays + bar, last played, days, last gap,
    status mark, catalog tick, watch link.
15. Recency glow dot: 3 days, 7 days, none.
16. Staple styling at 25+ plays (full-ink play bar).
17. `old` styling past 365 days.
18. Status marks with tooltips: Bustout after N, Debut DATE, Overdue, Rare, Retired.
19. Catalog tick.
20. Watch link to the exact second, title naming the timestamp, `ext` live videos labelled.
21. Guest credit reads `withlast` and falls back to `with`.
22. Row expands in place. Expanded detail carries: plays on video with per-play YouTube links and
    event notes, "Show all N plays", request-history dates, the About-the-song facts list
    (Played, On video, Last played, Before that, First on record, Genre, Catalog, Tempo, Key, From),
    Status, the stream still, and the three actions (Every song by ARTIST, Every date in the play log,
    Report a wrong name or time).
23. Genre action sets the genre filter and scrolls up.
24. Artist action searches the artist.
25. Play-log action jumps to the play log filtered to that song. **link-out**
26. Correction action prefills the correction form. **link-out**
27. State in the address bar: `q`, `show`, `sort`, `genre`, restored on load and on hashchange.
28. Key legend, collapsible, choice stored in `localStorage`.
29. Sticky search bar and sticky column head, measured with a `ResizeObserver`.
30. Back-to-top button past 1,400 px.
31. Masthead stat list: Songs, Streams, Songs played, Latest stream.
32. Recent-streams reel. **link-out** on the experimental page.
33. Tabs to Setlists, Live, To Learn, Corrections, Stats, Play log. **link-out**
34. Classic-layout link that writes `glostik-layout=classic`.
35. Reduced-motion media query, visible focus rings, skip link.

## Mobile rules in the stable page

- `<=1180px`: genre column goes invisible.
- `<=980px`: number, genre, days, gap, catalog columns drop. Six columns remain.
- `<=760px`: rows become two-line (song + plays + watch, then a meta line), filters collapse behind
  a Filters button, the column head is replaced by a caption strip, search grows to full width.
- `<=389px`: the gap number is dropped from a crowded row.

## Out of scope this phase

Setlists, Live, To Learn, Corrections, Stats and Play log keep their stable implementation at
`/glostik-songs/new`. The experimental page links to them by hash and does not re-render them.
