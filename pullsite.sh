#!/usr/bin/env bash
# pullsite.sh <route> [<route2> ...]
#
# Run this on the SECOND MAC. It pulls individual drwu-htmls sites down as real
# files, one folder per site, without dragging the whole 17 GB estate across.
#
# One-time bootstrap on that Mac:
#   curl -fsSL https://7onething1.github.io/pullsite.sh -o ~/pullsite.sh
#   chmod +x ~/pullsite.sh
#
# Then:
#   ~/pullsite.sh --list                 what is on the shelf right now
#   ~/pullsite.sh believeyoume-charts    pull that one site
#   ~/pullsite.sh --all                  pull everything on the shelf
#   ~/pullsite.sh --update               refresh whatever you already have
#   ~/pullsite.sh --where                print the local folder
#
# Files land in ~/drwu-sites/<route>/ . Override with DEST=/some/path.
# The repo is public, so this needs no login, no token and no SSH key. It uses a
# git partial clone plus sparse checkout, so only the folders you name are
# downloaded.
#
# If a site you want is NOT on the shelf, put it there from the first Mac:
#   ~/Projects/drwu-overflow/getsite.sh <route>
set -euo pipefail

REPO="https://github.com/7onething1/7onething1.github.io.git"
PAGES="https://7onething1.github.io"
DEST="${DEST:-$HOME/drwu-sites}"

die() { printf '!! %s\n' "$1" >&2; exit 1; }

command -v git >/dev/null 2>&1 || die "git is not installed. Run: xcode-select --install"

git_ver=$(git --version | awk '{print $3}' | cut -d. -f1,2)
sparse_ok=$(awk -v v="$git_ver" 'BEGIN{split(v,a,".");print (a[1]>2||(a[1]==2&&a[2]>=25))?1:0}')

usage() { sed -n '2,29p' "$0" | sed 's/^# \{0,1\}//'; exit "${1:-1}"; }

bootstrap() {
  [ -d "$DEST/.git" ] && return 0
  echo "First run, setting up $DEST"
  mkdir -p "$(dirname "$DEST")"
  if [ "$sparse_ok" = "1" ]; then
    git clone --filter=blob:none --sparse "$REPO" "$DEST" \
      || die "clone failed. Check the network, then run this again."
    git -C "$DEST" sparse-checkout init --cone 2>/dev/null || true
  else
    echo "note: git $git_ver is too old for sparse checkout, taking the whole shelf instead."
    git clone --depth 1 "$REPO" "$DEST" \
      || die "clone failed. Check the network, then run this again."
  fi
}

available() {
  git -C "$DEST" fetch -q origin main
  git -C "$DEST" ls-tree -d --name-only origin/main | grep -v '^_off-shelf$' || true
}

[ "$#" -ge 1 ] || usage 1

case "${1:-}" in
  -h|--help) usage 0 ;;
  --where)
    echo "$DEST"
    [ -d "$DEST" ] && echo "(exists)" || echo "(not created yet, run a pull first)"
    exit 0 ;;
  --list)
    bootstrap
    echo "On the shelf at $PAGES :"
    available | sed 's/^/  /'
    echo ""
    echo "Pull one with:  $0 <route>"
    exit 0 ;;
  --update)
    [ -d "$DEST/.git" ] || die "nothing pulled yet. Try: $0 --list"
    git -C "$DEST" pull -q --ff-only origin main || die "pull failed, try again."
    echo "updated everything already in $DEST"
    ls -1 "$DEST" | grep -v '^_off-shelf$' | sed 's/^/  /' || true
    exit 0 ;;
  --all)
    bootstrap
    if [ "$sparse_ok" = "1" ]; then
      # shellcheck disable=SC2046
      git -C "$DEST" sparse-checkout set $(available | tr '\n' ' ')
    fi
    git -C "$DEST" pull -q --ff-only origin main || true
    echo "pulled the whole shelf into $DEST"
    exit 0 ;;
esac

bootstrap

WANT=()
for a in "$@"; do
  case "$a" in
    -*) die "unknown flag: $a  (try $0 --help)" ;;
    *) WANT+=("${a#/}") ;;
  esac
done

HAVE="$(available)"
GOT=()
for r in "${WANT[@]}"; do
  r="${r%/}"
  if ! printf '%s\n' "$HAVE" | grep -qx "$r"; then
    echo "NOT ON THE SHELF: $r"
    echo "  Read it in a browser:  https://drwu-htmls.vercel.app/$r"
    echo "  Or, on the first Mac:  ~/Projects/drwu-overflow/getsite.sh $r"
    continue
  fi
  if [ "$sparse_ok" = "1" ]; then
    git -C "$DEST" sparse-checkout add "$r" 2>/dev/null \
      || git -C "$DEST" sparse-checkout set "$r"
  fi
  GOT+=("$r")
done

[ "${#GOT[@]}" -gt 0 ] || die "nothing pulled."

git -C "$DEST" pull -q --ff-only origin main || true

echo ""
for r in "${GOT[@]}"; do
  if [ -f "$DEST/$r/index.html" ]; then
    n=$(find "$DEST/$r" -type f | wc -l | tr -d ' ')
    sz=$(du -sh "$DEST/$r" | cut -f1 | tr -d ' ')
    echo "got $r  ($n files, $sz)"
    echo "    $DEST/$r/index.html"
  else
    echo "?? $r pulled but has no index.html, check $DEST/$r"
  fi
done
echo ""
echo "Open the first one:"
echo "  open -R \"$DEST/${GOT[0]}\""
echo "  /Applications/Firefox.app/Contents/MacOS/firefox \"file://$DEST/${GOT[0]}/index.html\""
