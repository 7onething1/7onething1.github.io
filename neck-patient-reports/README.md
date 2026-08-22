# The neck you have to keep rolling — patient reports

**Live:** https://7onething1.github.io/neck-patient-reports/
**Built:** 2026-08-22
**Ask:** patient-reported accounts of a neck condition that has to be rolled and stretched constantly to head off pain, rather than doctor-side clinical descriptions.

## What is in it

- 12 first-person forum threads (r/ChronicPain, r/ehlersdanlos, Health Rising), scraped verbatim through the signed-in Chrome bridge because the web-search agent cannot reach reddit.com.
- 4 peer-reviewed qualitative studies that print patient quotes verbatim (Scherer 2010, Holmberg 2016, Pérez-Martín 2025).
- Six clusters of self-description, a relief-duration table, the "what happened when I stopped" accounts, what patients say lowered the urge, and where the reporters eventually landed diagnostically.
- Every quote carries a linked source. No unattributed quotes.

## Gate notes

- `anti_ai_voice_gate.py check` → 1 remaining severity-3 hit: "It lands around the C7 area" inside a **verbatim patient quote**. Kept deliberately. Quote fidelity outranks the style gate for another person's words. All prose-side sev-3 hits were fixed.
- Deployed to GitHub Pages, not Vercel, per `feedback_github_not_vercel_for_new_pages` (Brandon, 2026-07-29).
- Not medical advice. Patient report only.

## Sources gathered via

`Control_Chrome` on `old.reddit.com` (server-rendered, full comment trees), plus `WebFetch` on open-access PMC articles.
