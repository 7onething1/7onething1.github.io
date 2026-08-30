# Prompt for the Mac session

Copy everything below the line into a Claude Code session on the Mac — the one
with Chrome, and with real network access to YouTube and Yahoo.

Context it needs that this session could not supply: the sandbox here has an
egress allowlist that denies youtube.com and yahoo.com, so nothing was ever
fetched and the harness in this folder has never run against live YouTube.

---

I want my Yahoo fantasy football auto-draft rankings to follow what Davis Mattek
and the Ship Chasing guys actually think. My league:

    https://football.fantasysports.yahoo.com/f1/732743

There is a half-built starting point for this in my overflow repo, on the branch
`claude/davis-mattek-ship-chasing-fs6ybp` (draft PR #4 of
7onething1/7onething1.github.io), under `yt-transcripts/`:

- `fetch.py` — pulls YouTube captions via yt-dlp into `_local/transcripts/`
  (gitignored) and rewrites `manifest.json`. Written but **never run against
  live YouTube**, so expect to debug the json3 caption parsing on first run.
- `index.html` — a page that renders the corpus metadata and searches the local
  caption text, each hit deep-linked to its timestamp.
- `sources.json` — **both channel URLs are now filled and verified** (2026-08-30):
  Davis Mattek is `https://www.youtube.com/@davis_mattek` (UChjRIs14reAo-on9z5iHJFA)
  and Ship Chasing is `https://www.youtube.com/@ShipChasing` (UCxYSi5ohjZRGG4EbZuMqU-w).
  Each was confirmed by resolving the handle and checking that the channel title
  and `externalId` agree in both directions, so neither is a guess. Re-check them
  anyway if this file has gone stale; a wrong handle silently harvests someone
  else's videos.

## What I actually want

An ordered draft board I can put into Yahoo, reflecting those two sources.

Start by checking whether either source has **published** rankings — a tier
sheet, a board, an article, a pinned post. If they have, use that. It is their
real opinion, stated as a ranking, and it beats anything reconstructed from
video captions.

Only fall back to the transcripts if there is no published board. If you do:

- Treat the result as **inferred**, not as their ranking. Say so plainly.
- Cite every call: video title, timestamp link, and the line it rests on.
- Keep the caption text local. Quote the specific lines you're relying on;
  don't republish whole transcripts.
- **The two sources are not independent.** Davis Mattek is a recurring co-host
  and guest on Ship Chasing, so the two feeds carry a lot of the same person.
  When they agree, that is one opinion stated twice, not corroboration; say so
  rather than counting it as two votes.
- Where the two sources disagree on a player, show both rather than averaging
  them into a number that neither of them said.
- Flag anything you're guessing at. A ranking full of confident-looking numbers
  derived from offhand podcast remarks is worse than a shorter list you can
  actually defend.

Note the recency problem: rankings move with injuries and news, so prefer their
most recent material and tell me the date of what you used.

## Then the Yahoo part

Drive Chrome. I'll be logged in — don't ask me for my password, and don't try to
authenticate as me.

1. Open the league above and find the pre-draft ranking editor.
2. Check what the site actually supports before you build anything: whether the
   rankings can be imported in bulk or only reordered by hand, and whether there
   is an autopick-strategy setting that decides between following my custom
   rankings and taking best-available. Tell me what you find; don't assume a
   format.
3. Show me the proposed order **before** you apply it. I want to look at it.
4. After I approve, apply it, then read the saved order back off the page and
   confirm it matches what I approved. Report any player the site dropped,
   renamed, or refused.

Hard limits:
- Only league 732743. Don't touch my other leagues.
- Don't change roster, league, or keeper settings.
- Don't start, submit, or complete a draft.
- Don't make trades, waiver claims, or lineup changes.
- If a step is ambiguous, or the site does something you didn't expect, stop and
  ask me instead of clicking through it.

## Deliverables

- The ranked list, with a source and timestamp/link per player.
- A short note on method: which source, published vs inferred, how conflicts
  were handled, what date the material is from.
- Confirmation of what is now saved in Yahoo.

If you fetch captions, commit only `manifest.json` (metadata) as `fetch.py`
already does; `_local/` stays gitignored so the transcripts aren't republished.
