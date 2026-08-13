#!/usr/bin/env python3
"""ledger_verify.py — prove a published aggregate is reproducible from its ledger.

Added 2026-08-13 after Brandon read the X-mine artifact and found the real gap:
the page printed 100 / 56 / 41 while preserving nothing that could reproduce
those figures, and one of them was wrong (56 was a loose filter over the first
73 posts, not over all 100). A number nobody can recompute is a session
description, not evidence.

CONTRACT. Any capture that publishes a count must first freeze a JSONL ledger:

  line 1   {"_meta": "...", "_classifiers": {...}, "_counts": {"posts": N, ...}}
  line 2+  one row per captured item, carrying at minimum
             id       stable source identifier (post id, file path, record key)
             author   who produced it
             ts       ISO timestamp from the source, never capture time
             sha256   hash of the normalized item text
             finding  which published claim this row backs, or null
           plus one integer 0/1 field per published classifier.

`_counts` states what the page claims. This script sums the rows and fails when
the two disagree, when ids repeat, when a hash is malformed, or when a timestamp
is missing. "posts" (or "rows"/"items") is checked against the row count; every
other key is checked against the sum of the field of that name.

Usage:
    python3 ledger_verify.py <ledger.jsonl> [--expect key=value ...] [--quiet]

Exit 0 = every published aggregate reproduces. Exit 1 = it does not.
"""
import argparse
import json
import sys
from pathlib import Path

ROW_COUNT_KEYS = {"posts", "rows", "items", "records", "captured"}
REQUIRED_FIELDS = ("id", "author", "ts", "sha256")
# A key ending in _linked counts rows whose base field is truthy, since finding
# linkage is a presence question and not a sum. `finding_linked` counts rows
# carrying a non-null `finding`.
LINK_SUFFIX = "_linked"


def load(path: Path):
    meta, rows, bad_lines = None, [], []
    for n, line in enumerate(path.read_text().splitlines(), 1):
        line = line.strip()
        if not line:
            continue
        try:
            rec = json.loads(line)
        except json.JSONDecodeError as e:
            bad_lines.append((n, str(e)[:60]))
            continue
        if "_meta" in rec or "_counts" in rec:
            meta = rec
            continue
        rows.append(rec)
    return meta, rows, bad_lines


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("ledger", type=Path)
    ap.add_argument("--expect", action="append", default=[],
                    help="extra published figure to check, as key=value")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    meta, rows, bad_lines = load(args.ledger)
    expected = dict((meta or {}).get("_counts", {}))
    for pair in args.expect:
        k, _, v = pair.partition("=")
        expected[k.strip()] = int(v)

    fails = []
    if not rows:
        fails.append("ledger has no rows")
    if bad_lines:
        fails.append(f"{len(bad_lines)} unparseable line(s)")
    if not expected:
        fails.append("no _counts block and no --expect, nothing to verify against")

    ids = [r.get("id") for r in rows]
    dupes = sorted({i for i in ids if ids.count(i) > 1 and i is not None})
    missing = {f: [r.get("id") for r in rows if not r.get(f)] for f in REQUIRED_FIELDS}
    bad_hash = [r.get("id") for r in rows
                if not isinstance(r.get("sha256"), str) or len(r.get("sha256", "")) != 64]

    if not args.quiet:
        print(f"ledger: {args.ledger}")
        print(f"rows:   {len(rows)}")
        if meta and meta.get("_classifiers"):
            for k in meta["_classifiers"]:
                print(f"  classifier '{k}' declared")
        print()

    for key, want in sorted(expected.items()):
        if key in ROW_COUNT_KEYS:
            got = len(rows)
        elif key.endswith(LINK_SUFFIX):
            base = key[: -len(LINK_SUFFIX)]
            got = sum(1 for r in rows if r.get(base))
        else:
            got = sum(int(r.get(key) or 0) for r in rows)
        ok = got == want
        if not args.quiet:
            print(f"  {key:<16} published={want:<6} ledger={got:<6} {'ok' if ok else 'MISMATCH'}")
        if not ok:
            fails.append(f"{key}: published {want}, ledger {got}")

    if not args.quiet:
        print()
        print(f"  duplicate ids     {len(dupes)}")
        print(f"  malformed sha256  {len(bad_hash)}")
        for f in REQUIRED_FIELDS:
            print(f"  missing {f:<9} {len(missing[f])}")
        linked = sum(1 for r in rows if r.get("finding"))
        print(f"  finding-linked    {linked}")
        print()

    if dupes:
        fails.append(f"duplicate ids: {dupes[:5]}")
    if bad_hash:
        fails.append(f"malformed sha256 on {len(bad_hash)} row(s)")
    for f in REQUIRED_FIELDS:
        if missing[f]:
            fails.append(f"missing {f} on {len(missing[f])} row(s)")

    if fails:
        print("LEDGER: FAIL")
        for f in fails:
            print(f"  {f}")
        return 1
    print("LEDGER: PASS, every published aggregate is reproducible from the rows")
    return 0


if __name__ == "__main__":
    sys.exit(main())
