# Deep Voice Tarot Reading, cover replacement

Listing `4502334621`, the $33 premium tier in Etsy shop OnethingNeededShop (shop id 50156638).

Source of the live data on this page:
`GET https://api.etsy.com/v3/application/shops/50156638/listings?state=active&includes=Images`,
saved to `scratchpad/listings.json`. Current images are the `url_570xN` files from that response.

Live page: https://7onething1.github.io/etsy-4502334621-covers/

## The problem

All four live images on this listing advertise a different product.

| Rank | What it actually shows |
|---|---|
| 1 | "WHY THIS PACK", hard rock MIDI pack, DAW screenshot, guitar picks |
| 2 | "WHAT'S INSIDE", 16 songs, drums bass guitar, HARD ROCK MIDI PACK |
| 3 | "WRITE HEAVIER SONGS FASTER", PREMIUM MIDI PACK |
| 4 | "INSIDE THE GUIDE", a printable tarot training workbook |

Rank 1 is what Etsy shows in search. The listing has 3 views all time, against 203 for the shop's
best performer. There is no correct image anywhere on it.

## What was produced

Four replacement images, generated in ChatGPT through the critique pass the
`etsy-cover-image-generator` skill specifies (draft, critique, revise, then generate).

| File | Slot | Overlay headline |
|---|---|---|
| `4502334621_img1_hook.png` | Search thumbnail | THE PATTERN THAT KEEPS REPLAYING |
| `4502334621_img2_reader.png` | Human proof | A REAL PERSON RECORDS THIS |
| `4502334621_img3_inbox.png` | Deliverables | WHAT ARRIVES IN YOUR INBOX |
| `4502334621_img4_privacy.png` | Discretion | YOUR READING STAYS YOURS |

All four are 1254 by 1254, square, one consistent reader character across the set.

Source: `~/Projects/_outputs/etsy-cover-image-generator/4502334621/`
ChatGPT critique and revised prompts saved alongside as
`chatgpt_revised_prompts_4502334621.txt`.

## Known flaws, recorded before anything ships

- Rank 3 misspells two card names, "TEN of SWANDS" for SWORDS and "ACE of PENTALES" for PENTACLES.
- 1254px against a 2000px request. Above Etsy's 1000px minimum, below ideal.
- The "5 STAR RATED SERVICE" badge in rank 1 carries over from the shop's existing images. It
  should be true before it ships.
- Card faces are model approximations, correct at thumbnail scale and loose at full scale.

## State of the live shop

Nothing uploaded, nothing deleted. The listing keeps its four wrong images so the gallery is never
empty. Order of operations when approved: upload the four replacements via
`scripts/etsy_upload_images.py`, set the hook to rank 1, verify with
`GET /listings/4502334621/images`, then delete the four wrong images.

## Next

Approve the set, or say which of the four to regenerate.
