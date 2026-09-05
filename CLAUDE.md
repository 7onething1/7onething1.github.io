# Working agreement for this repo

## What this repo is

`7onething1.github.io` is the GitHub Pages **overflow host**: pages under active edit live here
so per-edit reloads don't burn the Vercel 100/day deploy cap. Finished pages also ship to
`drwu-htmls.vercel.app`.

Shape of the repo:

- One folder per route: `<route>/index.html` plus a sidecar `<route>/<route>.md` documenting it.
- Root `index.html` lists every route. `overflow.sh` regenerates it from the folders that exist;
  when adding a route by hand, add its `<li>` in alphabetical order too.
- `.nojekyll` at the root. No build step, no framework, no package.json.

## House style for pages

- **Self-contained.** One `index.html`. No CDN scripts, no external fonts, no hosted audio or
  image files. Anything that can be synthesised or drawn in the browser, is — the pages must work
  offline.
- Cream paper, serif body (`Iowan Old Style`/Palatino/Georgia), monospace for labels and metadata,
  a sticky control bar when a page has controls. Match `melodic-intervals-player/` if unsure.
- Responsive down to 390px with no horizontal page scroll; wide content scrolls inside its own box.
- Print CSS when the page is something a person would print.

## Definition of done

A task is **not** done when the code is written, and not done when the PR is opened. It is done when
all of these are true:

1. The page renders with a clean console, verified in headless Chromium — not by reading the code.
2. Every interactive control has been exercised in that check, and any generated file (MIDI, CSV,
   download) has been parsed back and validated.
3. The sidecar `.md` is written and the route is in the root `index.html`.
4. The work is committed **and pushed** to the session's designated branch.
5. A PR exists for that branch, and its body says what was verified.
6. The backlog (below) is updated: what is left, what is blocked, what is next.

## Never stop early

The failure mode to avoid: finishing a milestone, announcing it, and going idle while work remains.

- When something looks finished, run the definition-of-done checklist above before saying so.
- **Blocked ≠ finished.** If the next step needs the user (a merge, a credential, a decision), say so
  in one line and immediately move to the next item that does not need them. Never end a turn on a
  blocker alone while unblocked work exists.
- Keep a `## Backlog` section in the project's sidecar `.md`, ordered, with the next item first.
  Never end a session with no backlog written — if the list is genuinely empty, say what a reasonable
  next iteration would be.
- Only go idle when the backlog is empty *and* the only remaining step is the user's. Keep the PR
  check-in routine armed until the PR is merged or closed, and re-arm it silently.
- A scheduled check-in that finds nothing changed is not a reason to stop: spend it on the top
  backlog item instead.

## Verifying a page (headless)

Chromium is preinstalled; `playwright-core` installs into the scratchpad. The pattern used so far:

```js
const { chromium } = require('playwright-core');
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-*/chrome-linux/chrome',
                                  args: ['--no-sandbox','--autoplay-policy=no-user-gesture-required'] });
```

Collect `pageerror` and `console` errors, exercise the controls, and screenshot with
`fullPage: true` plus a `clip` box in page coordinates (element screenshots are unreliable here).
Web Audio works headless with the autoplay flag.

## Git

- Develop on the session's designated `claude/*` branch; never push to `main` without being asked.
- `git push -u origin <branch>`, then open a **draft** PR if one is not already open.
- Commit messages: what changed and why it is safe, ending with the Co-Authored-By trailer.
