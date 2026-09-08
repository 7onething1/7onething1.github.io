# drwu-overflow — GitHub Pages host

`overflow.sh <route>` publishes `~/Projects/drwu-htmls/public/<route>/` to
`https://7onething1.github.io/<route>/`.

## The one rule that costs people work

**Write route files to the SOURCE folder, never into this repo's route folder.**

    ~/Projects/drwu-htmls/public/<route>/     <- SOURCE. Edit here.
    ~/Projects/drwu-overflow/<route>/         <- a rebuilt copy. Anything written
                                                 only here is destroyed on the
                                                 next sync of that route.

`overflow.sh` line 25 clears the route folder and recreates it from source on
every run:

```bash
rm -rf "$OV/$route"
mkdir -p "$OV/$route"
cp -R "$SRC/$route/." "$OV/$route/"
```

That runs for whoever invokes the route next, so a file placed only in the copy
does not survive, and the session that wrote it will read the loss as another
session overwriting its work. It is the sync, not a rival.

**Recorded case, 2026-09-07.** A session committed
`zappa-repair-state/STALENESS-2026-09-07.md` straight into this repo. It was
absent from HEAD 45 seconds later, after an unrelated `overflow: zappa-repair-state`
run. The file had never existed in the source folder. It was recovered with
`git show <commit>:<path>`, written to the source folder, and it now survives.

## Recovering a file that vanished this way

Nothing is lost in git:

```bash
git log --diff-filter=D --format='%h %ad %s' --date=iso -- <route>/<file>
git show <commit>:<route>/<file> > ~/Projects/drwu-htmls/public/<route>/<file>
./overflow.sh <route>
```

## Two other things worth knowing

- **Pages lags behind rapid pushes.** With several route pushes inside a few
  minutes, a new file can answer 404 for two to three minutes while the route
  root already answers 200. Poll the specific file, never the route, and
  cache-bust with a query string.
- **Two sessions can push the same route seconds apart.** Both read the same
  source folder, so a file present in source survives either one. A session that
  rebuilds a route folder from scratch without reading source is the case that
  still loses data.
