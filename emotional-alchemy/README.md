# Emotional Alchemy — website

*Turning pain into power and freedom.*

A production-ready marketing/experience site for **Emotional Alchemy**, a
five-stage emotional-healing framework built on alchemical symbolism
(**Fire → Water → Air → Earth → Rubedo**). It is a static site — semantic
HTML, one CSS file, and a small progressive-enhancement JavaScript file — with
no build step and no third-party runtime dependencies.

Built to the brief in `../emotional-alchemy-website-prompt.md`.

---

## Structure

```
emotional-alchemy/
├── index.html            # the single-page experience (hero → 5 stages → practice → about → resources → closing)
├── privacy.html          # privacy statement
├── accessibility.html    # accessibility statement (WCAG 2.2 AA)
├── styles.css            # the whole design system (tokens, components, motion, responsive)
├── app.js                # nav, scroll header, reveal + symbol draw-in, progress rail (no dependencies)
├── README.md             # this file
└── assets/
    ├── favicon.svg
    ├── social-preview.svg # source for the share card
    ├── social-preview.png # 1200×630 Open Graph image (rasterised from the SVG)
    └── fonts/             # self-hosted, latin-subset variable fonts (Fraunces, Manrope)
```

## Local preview

Any static file server works. Because assets use **relative paths**, serve from
the repository root so the page loads exactly as it will on GitHub Pages:

```bash
# from the repository root
python3 -m http.server 8000
# then open http://localhost:8000/emotional-alchemy/
```

Opening `index.html` directly with `file://` also mostly works, but a server is
recommended (fonts and the module-free JS behave identically to production).

## Deployment (GitHub Pages)

This lives inside the `7onething1.github.io` user site, so once pushed it is
served at:

```
https://7onething1.github.io/emotional-alchemy/
```

- All paths are **relative** (`styles.css`, `assets/…`), so the site works from
  this subpath without a base tag. If you later move it to a custom domain,
  nothing needs to change.
- The repo already contains a root `.nojekyll`, so files are served as-is.
- The canonical URL and Open Graph tags in the `<head>` point at the URL above —
  update them if the site is rehosted elsewhere.

## Editable content — where to look

Everything left as a placeholder is marked in the markup with a visible
`placeholder` tag and/or an HTML comment. Search the source for **`PLACEHOLDER`**
and **`CONFIG`** to find them all. The main ones:

| What | File · marker |
| --- | --- |
| **Primary call to action** (`Begin Your Work`) | `index.html` — every link with `data-cta="primary"`. Point the `href` at your booking / consultation / course URL. |
| **Contact email** | `index.html`, `privacy.html`, `accessibility.html` — replace `hello@emotional-alchemy.example` (a `mailto:` link; no web form, so nothing can silently fail). |
| **Practitioner portrait** | `index.html`, About section — replace the `.portrait` placeholder `<div>` with an `<img>` (guidance is in the comment there). |
| **Biography / credentials** | `index.html`, About section — the two placeholder paragraphs. Add only what is true; no invented claims. |
| **Resources** | `index.html`, Resources section — three placeholder cards (`Naming What Hurts`, `The Body Remembers`, `Life After the Pattern`). Replace titles, copy, and `href`. |
| **Social links** | `index.html` footer — Instagram / Newsletter placeholders. |
| **Emergency / crisis line** | `index.html`, `privacy.html`, `accessibility.html` footers — localise the wellbeing disclaimer with the correct emergency number and crisis resources before launch. |

## Design tokens

All colour, type, spacing, radius, and motion values are CSS custom properties
in `:root` at the top of `styles.css` (section 2). Change the brand there and it
propagates everywhere. The palette is the apothecary set from the brief:
forest, plum, sage, blush, bone, champagne, gold, ink, mist — plus a few
contrast-tuned working tones (e.g. `--gold-deep` for gold text on light).

## Fonts

Self-hosted so no request ever leaves for a third-party font network (a
deliberate privacy choice):

- **Fraunces** (variable, roman + italic) — display serif for headings and quotes.
- **Manrope** (variable) — humanist sans for body text.

Only the **latin** subset is included (this is an English-language site). To add
languages, drop the additional subset `.woff2` files into `assets/fonts/` and add
matching `@font-face` blocks in `styles.css` (section 1). Both faces load with
`font-display: swap` and are `preload`ed to avoid layout shift.

## Motion

Motion is breath-paced and additive — the site is complete and readable with
JavaScript disabled (the `.no-js` fallback shows all content immediately).

- Scroll reveals and the symbol **draw-in** effect run via `IntersectionObserver`.
- `prefers-reduced-motion: reduce` is fully honoured: every element resolves to
  its final, settled state, symbols appear already drawn, and ambient animation
  (the breathing Rubedo circle) is switched off.

## Accessibility

Targets **WCAG 2.2 AA**. In place: a skip link, semantic landmarks and heading
order, keyboard operability with visible focus, AA-contrast text, decorative
symbols hidden from assistive tech (their meaning is always in text), a
reduced-motion path, and a layout that reflows to 320px and tolerates 200% text
zoom without horizontal scrolling. The reflective questions are presented as
content, never as form fields. See `accessibility.html` for the public statement.

## Verification performed

Checked across **320 / 375 / 768 / 1024 / 1440 / 1920px** on `index.html`,
`privacy.html`, and `accessibility.html`:

- **0px horizontal overflow** at every width, on every page.
- **No console or page errors.**
- Reduced-motion emulation: all content visible and settled.

Re-run these locally with any headless-browser script against the URLs above.

## Browser support

Latest Chrome, Safari, Firefox, and Edge. Uses modern CSS
(`color-mix()`, `clamp()`, container-friendly grid) with graceful degradation;
older browsers simply see a flatter, still-legible version.
