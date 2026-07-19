# Image prompts for OnethingNeededShop

ChatGPT image-generation prompts for every gallery gap across the 23 active listings in
Etsy shop OnethingNeededShop (shop id 50156638).

Live page: https://drwu-htmls.vercel.app/etsy-image-prompts

## How this was built

1. Refreshed the Etsy OAuth token with `etsy-uploader/refresh_token.py`.
2. Pulled every active listing plus its image set from Etsy Open API v3
   (`GET /shops/50156638/listings?state=active&includes=Images`), 23 listings, 126 images.
3. Downloaded all 126 images and built per-listing contact sheets, then inspected every one
   visually. Defect notes below record what those images actually show.
4. Wrote a prompt for each empty gallery slot (Etsy allows 10 images per listing) and for each
   image that is selling the wrong product or a stale promotion.

Source scripts are in the session scratchpad: `pull_listings_images.py`, `fetch_and_sheet.py`,
`build_prompts.py`, `build_html.py`.

## What the data showed

Sorting the shop by views against thumbnail style gives a clean signal.

| Rank-1 thumbnail style | Listings | View range |
|---|---|---|
| Bold hook text over the reader persona | 9 | 27 to 160 |
| Botanical flat-lay with phone | 2 | 28 to 203 |
| Plain cream text card | 4 | 0 to 29 |
| Muted photo with a soft caption | 2 | 1 to 13 |
| Wrong product entirely | 2 | 3 to 20 |

Every listing carrying a bold hook thumbnail clears 27 views. Every listing whose first image is a
plain text card or the wrong product stays at or near zero. On that basis all new prompts are written
in the reader-persona hook style.

## Defects found in the live gallery

| Listing | Price | Views | Problem |
|---|---|---|---|
| 4502334621 Deep Voice Tarot Reading | $33 | 3 | Ranks 1 to 3 sell a rock MIDI pack. Rank 4 sells the Tarot Training Guide. No image on the listing shows the product. |
| 4502343948 Same-Day 3-Card | $9 | 20 | Rank 1 is the Tarot Training Guide workbook. Ranks 2 to 4 carry the $33 tier's branding and deliverables. |
| 4502331499 Voice Tarot by Email | $20 | 28 | Ranks 2 to 4 sell Quick Tarot Reading, a different $20 listing. Rank 3 promises three cards, this listing delivers nine. |
| 4502279071 Same-Day by Email | $9 | 5 | Rank 1 is a Mother's Day promo, out of season. |
| 4503167239 Quick Tarot Reading | $20 | 203 | Ranks 6 and 7 are Mother's Day promos, rank 7 shows a $4 price against the live $20. Rank 8 duplicates rank 2. |
| 4502649124 Monthly Check-In | $16 | 69 | Rank 1 still advertises a $1 SALE and 10 MINS against a live $16 and 12 minutes. Rank 4 has clipped text. Rank 7 duplicates rank 2. |
| 4503167209 15 Minute Reading | $20 | 110 | Ranks 7 and 8 duplicate ranks 2 and 3. |
| 4503175320 In-Depth 30 Minute | $38 | 25 | Rank 5 infographic is unreadable at thumbnail size. Rank 8 is a near-empty filler card. |
| 4505488585 Apology You Deserved | $28 | 0 | Rank 1 is a plain text card. Rank 2 is an off-brand stock-style portrait. |
| 4505496538, 4505488613, 4505488633 | $16 to $20 | 1 to 29 | Plain cream text cards doing thumbnail or mid-gallery duty. |

Shop-wide: **all 126 images have empty alt text.**

## Output

133 prompts total: 104 for empty slots, 29 replacements. Each carries the scene, the composition,
the exact overlay copy, and a clear text zone.

Five-star proof prompts intentionally contain the literal placeholder
`REPLACE THIS LINE WITH A REAL BUYER REVIEW`. Paste a genuine review before publishing. No
testimonial is invented anywhere in this set.

## Next

Fix listing 4502334621 first. It is a $33 product with zero images of the product.
