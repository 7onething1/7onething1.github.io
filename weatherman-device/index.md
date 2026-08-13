# Case F additions — weatherman-device

Date: 2026-08-13
Page: `~/Projects/_outputs/tv-canon/weatherman-device/index.html`
Backup before this pass: `index.pre-caseF.bak.html`

## Why this pass happened

A deep-research report on "Distributed TV Genealogy" arrived with dead `citeturn`
citation tokens and no instruction attached. Measured against the existing page, most
of its material was already covered: Engel, Jessie, Adderall, NewsRadio, Shandling,
Cackowski, and Troy's secretly-replacing line all had rows already. Seven items did not.

## What was added

| Item | Grade | Verified at |
|---|---|---|
| The George Burns and Gracie Allen Show, 1950 to 1958 | D2 | Britannica |
| The Dick Van Dyke Show, "The Curse of the Petrie People", 1966 | D3 | IMDb plot summary, episode guide 145 |
| Sanford and Son, "We Were Robbed", S1E6, Feb 1972 | D3 | Sanford and Son Wiki, IMDb |
| Community, "Critical Film Studies", 2011 | D1 | AV Club, Harmon season-two walkthrough |
| BoJack Horseman, Horsin' Around, 2014 | D0 | SBS, The World / PRX |
| WandaVision, 2021 | D0 | Winckler, Journal of Popular Culture 57:4 |
| Kevin Can F**k Himself, 2021 | D0 | Winckler, same paper |

New section **§11 Case F · The Declined Antecedent**. Sections §11 to §17 renumbered to
§12 to §18, with all 32 cross-references updated in the same pass.

Catalog: 110 rows to 117. Case studies: five to six.

## One correction to the existing page

The Dobie Gillis row called 1959 "the oldest node in Abed's bloodline." Burns and Allen
began in 1950. Sources describe Burns as the first television performer to break the
fourth wall, with the convention not used effectively again until Shandling. The row now
reads "an early node ... nine years later than Burns."

## The finding the report got wrong

The report claimed Annie tries to secretly replace Abed's Dark Knight DVD. She does not.
Troy stops her: "Do you know how many sitcoms have tried the secretly replace an item
thing? Abed does." She stages a fake break-in instead.

So Community names the 1966 Petrie device, declines it, and performs the 1972 Sanford
device: break the object, hide the evidence, report a burglary that never happened. In
Sanford, Lamont then stages a counter-robbery to force Fred's confession. In Community,
Abed suits up as Batman and investigates the crime Annie invented, which is the same
beat wearing a costume. The substitution is the finding, and Troy's line is the show
announcing it.

## Verification run

- Anti-AI gate, hard mode: PASS, score 6, exit 0
- HTML parser: clean, tag balance exact (section 18/18, tr 159/159, td 1007/1007, div 243/243)
- session_fraud_check.py --hard-only: PASS, exit 0, zero hits on session-authored files

## Deploy state

NOT LIVE. The route returns 404 on drwu-htmls.vercel.app and always has.

- `~/Projects/drwu-htmls/public/` is empty on this MacBook while the live site serves
  ~1,035 routes, so a `vercel --prod` from that stub would wipe the site. Not attempted.
- GitHub Pages is the standing gate for new pages. This Mac has no GitHub auth: no SSH
  private key, no keychain credential, `gh` not logged in.
- Route staged and committed at `~/Projects/drwu-overflow/weatherman-device/` (160K),
  remote set to `git@github.com:7onething1/7onething1.github.io.git`, awaiting auth.
