#!/usr/bin/env bash
# overflow.sh <route> [<route2> ...]
# Copy one or more public/<route> folders from drwu-htmls into the GitHub Pages
# overflow host and push. GitHub Pages rebuilds on push (soft ~10/hr), so this
# does NOT count against Vercel's 100/day deploy cap. Use for ITERATION only;
# ship the finished page to drwu-htmls.vercel.app once, at the end.
set -euo pipefail

SRC="$HOME/Projects/drwu-htmls/public"
OV="$HOME/Projects/drwu-overflow"
BASE="https://7onething1.github.io"

if [ "$#" -lt 1 ]; then
  echo "usage: overflow.sh <route> [<route2> ...]"
  echo "  e.g. overflow.sh tchalla-black-panther-deck-tech"
  exit 1
fi

cd "$OV"
for route in "$@"; do
  route="${route#/}"; route="${route%/}"
  if [ ! -d "$SRC/$route" ]; then
    echo "!! not found: $SRC/$route  (skipping)"; continue
  fi
  rm -rf "$OV/$route"
  mkdir -p "$OV/$route"
  cp -R "$SRC/$route/." "$OV/$route/"
  echo "copied  $route  ($(du -sh "$OV/$route" | cut -f1))"
done

# Rebuild the root landing from whatever route dirs now exist.
{
  cat <<'HTML'
<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Overflow host — iteration preview</title>
<style>
 :root{color-scheme:light}
 body{background:#f6f0e2;color:#1a1a1a;font-family:-apple-system,BlinkMacSystemFont,Inter,Segoe UI,sans-serif;margin:0;padding:2.4rem 1.4rem;line-height:1.5}
 main{max-width:640px;margin:0 auto}
 h1{font-size:1.5rem;margin:0 0 .3rem}
 p.sub{color:#5a5347;margin:.2rem 0 1.6rem;font-size:.95rem}
 ul{list-style:none;padding:0;margin:0}
 li{border:1px solid #d8cfb8;background:#fbf7ec;border-radius:10px;padding:.7rem .95rem;margin:.5rem 0}
 a{color:#8a5a12;text-decoration:none;font-weight:600}a:hover{text-decoration:underline}
 .note{margin-top:1.8rem;font-size:.8rem;color:#7a7263;border-top:1px solid #e2d9c2;padding-top:.9rem}
 code{background:#efe7d3;padding:.08em .35em;border-radius:4px;font-size:.85em}
</style></head><body><main>
<h1>Overflow / iteration host</h1>
<p class="sub">Pages under active edit live here so per-edit reloads don't burn the Vercel 100/day deploy cap. Finished pages still ship to <code>drwu-htmls.vercel.app</code>.</p>
<ul>
HTML
  for d in */ ; do
    d="${d%/}"
    [ -f "$OV/$d/index.html" ] || continue
    echo "<li><a href=\"/$d/\">$d</a></li>"
  done
  cat <<'HTML'
</ul>
<p class="note">GitHub Pages rebuilds on every push (soft ~10/hr), independent of Vercel. Add a page with <code>overflow.sh &lt;route&gt;</code>.</p>
</main></body></html>
HTML
} > "$OV/index.html"

touch "$OV/.nojekyll"
git add -A
if git diff --cached --quiet; then
  echo "no changes to push."; exit 0
fi
git -c user.email="7onething1@gmail.com" -c user.name="7onething1" \
  commit -q -m "overflow: $*"
# Concurrency-safe push: rebase on remote and retry so simultaneous pushes
# from multiple chats don't fail on non-fast-forward.
pushed=0
for attempt in 1 2 3 4 5; do
  if git push -q origin main 2>/dev/null; then pushed=1; break; fi
  echo "push race (attempt $attempt), rebasing on remote..."
  git fetch -q origin main
  git rebase -q origin/main || { git rebase --abort 2>/dev/null || true; sleep 2; }
done
if [ "$pushed" != "1" ]; then
  echo "!! push failed after retries; run again in a moment."; exit 1
fi
echo ""
echo "pushed. live in ~30-90s (first build slower):"
for route in "$@"; do
  route="${route#/}"; route="${route%/}"
  echo "  $BASE/$route/"
done
