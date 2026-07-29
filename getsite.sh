#!/usr/bin/env bash
# getsite.sh <route> [<route2> ...]
#
# Put individual drwu-htmls sites on GitHub so the OTHER MAC can pull them as
# real files. One push does two jobs: the route goes live at
# https://7onething1.github.io/<route>/ and it becomes `git pull`-able.
#
# On the other Mac:  ~/pullsite.sh <route>
#   (bootstrap it once with
#    curl -fsSL https://7onething1.github.io/pullsite.sh -o ~/pullsite.sh && chmod +x ~/pullsite.sh)
#
# Guards GitHub's limits, which plain overflow.sh does not:
#   - refuses a route holding any file over 100 MB (GitHub hard-rejects it)
#   - refuses to grow the shelf past 900 MB (Pages caps a published site at 1 GB)
#   - skips delete/ folders and .DS_Store, so retired material stays local
#
# Flags:
#   --list [pattern]   show routes with sizes and whether they can cross
#   --shelf            show what is on the shelf now, with sizes
#   --clear <route>    take a route off the shelf (moves it to _off-shelf/, never deletes)
#   --dry-run          check and report, push nothing
set -euo pipefail

SRC="$HOME/Projects/drwu-htmls/public"
OV="$HOME/Projects/drwu-overflow"
BUILD_SHELF="$HOME/Projects/drwu-htmls/scripts/build_shelf.py"
PAGES="https://7onething1.github.io"
FILE_CAP_MB=100
BUDGET_MB=900

die() { printf '!! %s\n' "$1" >&2; exit 1; }

# Bytes in a route, ignoring delete/ folders and .DS_Store.
route_bytes() {
  find "$SRC/$1" -type f -not -path '*/delete/*' -not -name '.DS_Store' \
    -exec stat -f '%z' {} + 2>/dev/null | awk '{t+=$1} END{print t+0}'
}
# Biggest single file in a route, same exclusions.
route_biggest() {
  find "$SRC/$1" -type f -not -path '*/delete/*' -not -name '.DS_Store' \
    -exec stat -f '%z' {} + 2>/dev/null | sort -rn | head -1 | awk '{print $1+0}'
}
shelf_bytes() {
  find "$OV" -type f -not -path '*/.git/*' -not -path '*/_off-shelf/*' \
    -exec stat -f '%z' {} + 2>/dev/null | awk '{t+=$1} END{print t+0}'
}
mb() { awk -v b="$1" 'BEGIN{printf "%.1f", b/1048576}'; }

usage() {
  sed -n '2,26p' "$0" | sed 's/^# \{0,1\}//'
  exit "${1:-1}"
}

[ "$#" -ge 1 ] || usage 1

# ---------- read-only modes -------------------------------------------------
case "${1:-}" in
  -h|--help) usage 0 ;;
  --shelf)
    printf '%-52s %10s\n' "ON THE SHELF" "SIZE"
    n=0
    for d in "$OV"/*/ ; do
      d="${d%/}"; b="$(basename "$d")"
      [ "$b" = "_off-shelf" ] && continue
      [ -f "$d/index.html" ] || continue
      sz="$(find "$d" -type f -exec stat -f '%z' {} + 2>/dev/null | awk '{t+=$1} END{print t+0}')"
      printf '%-52s %9s MB\n' "$b" "$(mb "$sz")"
      n=$((n+1))
    done
    printf '\n%d on the shelf, %s MB of the %d MB budget used.\n' \
      "$n" "$(mb "$(shelf_bytes)")" "$BUDGET_MB"
    exit 0 ;;
  --list)
    pat="${2:-}"
    printf '%-58s %10s  %s\n' "ROUTE" "SIZE" "CAN IT CROSS"
    for d in "$SRC"/*/ ; do
      d="${d%/}"; r="$(basename "$d")"
      [ "$r" = "delete" ] && continue
      [ -f "$d/index.html" ] || continue
      [ -n "$pat" ] && case "$r" in *"$pat"*) ;; *) continue ;; esac
      b="$(route_bytes "$r")"; big="$(route_biggest "$r")"
      if [ "$big" -gt $((FILE_CAP_MB*1048576)) ]; then v="no, holds a file over ${FILE_CAP_MB}MB"
      elif [ "$b" -gt $((BUDGET_MB*1048576)) ]; then v="no, over the ${BUDGET_MB}MB budget"
      elif [ "$b" -gt $((100*1048576)) ]; then v="yes, heavy, send alone"
      else v="yes"; fi
      printf '%-58s %9s MB  %s\n' "$r" "$(mb "$b")" "$v"
    done
    exit 0 ;;
  --clear)
    [ "$#" -ge 2 ] || die "usage: getsite.sh --clear <route>"
    shift
    mkdir -p "$OV/_off-shelf"
    for r in "$@"; do
      r="${r#/}"; r="${r%/}"
      [ -d "$OV/$r" ] || { echo "not on the shelf: $r"; continue; }
      rm -rf "$OV/_off-shelf/$r"
      mv "$OV/$r" "$OV/_off-shelf/$r"
      echo "off the shelf: $r  (kept at $OV/_off-shelf/$r)"
    done
    ;;
esac

DRY=0
ROUTES=()
for a in "$@"; do
  case "$a" in
    --dry-run) DRY=1 ;;
    --clear) ;;
    -*) die "unknown flag: $a" ;;
    *) ROUTES+=("${a#/}") ;;
  esac
done

# ---------- check every route before copying anything -----------------------
if [ "${#ROUTES[@]}" -gt 0 ]; then
  have=$(shelf_bytes)
  add=0
  OK=()
  for r in "${ROUTES[@]}"; do
    r="${r%/}"
    if [ ! -d "$SRC/$r" ]; then
      echo "SKIP  $r  (no such route in public/)"; continue
    fi
    if [ ! -f "$SRC/$r/index.html" ] && [ ! -f "$SRC/$r.html" ]; then
      echo "SKIP  $r  (no index.html)"; continue
    fi
    b="$(route_bytes "$r")"; big="$(route_biggest "$r")"
    if [ "$big" -gt $((FILE_CAP_MB*1048576)) ]; then
      echo "SKIP  $r  ($(mb "$b") MB, holds a $(mb "$big") MB file, GitHub rejects over ${FILE_CAP_MB} MB)"
      continue
    fi
    # If this route is already on the shelf its old bytes get replaced.
    cur=0
    [ -d "$OV/$r" ] && cur="$(find "$OV/$r" -type f -exec stat -f '%z' {} + 2>/dev/null | awk '{t+=$1} END{print t+0}')"
    proj=$(( have + add - cur + b ))
    if [ "$proj" -gt $((BUDGET_MB*1048576)) ]; then
      echo "SKIP  $r  ($(mb "$b") MB would put the shelf at $(mb "$proj") MB, over the ${BUDGET_MB} MB budget)"
      echo "      clear something first:  getsite.sh --clear <route>"
      continue
    fi
    add=$(( add - cur + b ))
    OK+=("$r")
    echo "OK    $r  ($(mb "$b") MB)"
  done

  [ "${#OK[@]}" -gt 0 ] || die "nothing to send."
  if [ "$DRY" = "1" ]; then
    echo ""
    echo "dry run, nothing copied. shelf would be $(mb $((have + add))) MB."
    exit 0
  fi

  for r in "${OK[@]}"; do
    rm -rf "$OV/$r"
    mkdir -p "$OV/$r"
    # -a keeps timestamps; delete/ and .DS_Store stay behind on this Mac.
    rsync -a --exclude 'delete/' --exclude '.DS_Store' "$SRC/$r/" "$OV/$r/"
  done
fi

# ---------- rebuild the shelf page, commit, push ----------------------------
cd "$OV"
touch "$OV/.nojekyll"
if [ -f "$BUILD_SHELF" ]; then
  python3 "$BUILD_SHELF" >/dev/null || echo "note: shelf page rebuild failed, pushing anyway"
fi

git add -A
if git diff --cached --quiet; then
  echo "no changes to push."
else
  git -c user.email="7onething1@gmail.com" -c user.name="7onething1" \
    commit -q -m "shelf: ${ROUTES[*]:-refresh}"
  pushed=0
  for attempt in 1 2 3 4 5; do
    if git push -q origin main 2>/dev/null; then pushed=1; break; fi
    echo "push race (attempt $attempt), rebasing on remote..."
    git fetch -q origin main
    git rebase -q origin/main || { git rebase --abort 2>/dev/null || true; sleep 2; }
  done
  [ "$pushed" = "1" ] || die "push failed after retries; run again in a moment."
fi

echo ""
echo "shelf now $(mb "$(shelf_bytes)") MB of ${BUDGET_MB} MB.  Live in ~30-90s:"
echo "  $PAGES/"
for r in "${ROUTES[@]:-}"; do
  [ -n "$r" ] || continue
  [ -d "$OV/${r%/}" ] || continue
  echo "  $PAGES/${r%/}/"
done
echo ""
echo "On the other Mac, get the files:"
for r in "${ROUTES[@]:-}"; do
  [ -n "$r" ] || continue
  [ -d "$OV/${r%/}" ] || continue
  echo "  ~/pullsite.sh ${r%/}"
done
