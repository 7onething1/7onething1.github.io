#!/usr/bin/env python3
"""
build_ai_readings.py  —  Constructed-reading corpus for chiron-combinations-v4.

Brandon's spec (2026-07-20):
  - Pre-baked, one-click. Generate readings ONLY for pairs that lack a clear
    Chiron combination (unattested) or remain substantially undercovered.
  - Every existing Chiron entry is left untouched. These constructed readings
    live in a SEPARATE declared-AI corpus (ai_readings.json), never mixed into
    corpus.json / cheatsheet.json.
  - Each entry derives from both cards' verbatim Chiron cheatsheet meanings and
    her mined sentence patterns. The combined read is labelled a CONSTRUCTED
    reading, never asserted as transcript-sourced (voice_validation_rubric.md:
    "a pair with no transcript window is UNSOURCED ... may not assert a combined
    meaning for it" -> so we assert it only under an explicit constructed label).
  - Stored with: card order note, source passages, generation date, model,
    and a "constructed reading" label.

This script is DETERMINISTIC (no LLM call). The reading PROSE is authored by
Claude Opus 4.8 and lives in readings_authored.json (pair_key -> text). This
harness computes the gap set, merges authored prose, runs a voice-tell gate,
and writes ai_readings.json. Re-run after adding a batch of authored readings.
"""
import json, os, re, itertools, datetime, sys

HERE = os.path.dirname(os.path.abspath(__file__))
def P(name): return os.path.join(HERE, name)

MODEL = "claude-opus-4-8"
TODAY = datetime.date.today().isoformat()
LABEL = "constructed reading"
STRONG = {"direct", "clarifier", "sequence"}  # a clean one of these = a clear combo

corpus = json.load(open(P("corpus.json")))
cheat  = json.load(open(P("cheatsheet.json")))
cards  = list(corpus.keys())

def pd(a, b):
    return (corpus.get(a, {}).get(b)) or (corpus.get(b, {}).get(a)) or None

def has_clear_combo(a, b):
    """True iff at least one UNFLAGGED direct/clarifier/sequence passage exists.
    Mirrors the page's hasClearCombo() exactly."""
    p = pd(a, b)
    reads = (p or {}).get("reads") or []
    return any((r.get("r") in STRONG and not r.get("f")) for r in reads)

def weak_passages(a, b, limit=4):
    """The nearby/flagged passages that DO exist (undercovered pairs), for provenance."""
    p = pd(a, b)
    reads = (p or {}).get("reads") or []
    out = []
    for r in reads:
        out.append({"t": r.get("t", ""), "v": r.get("v", ""), "r": r.get("r", "")})
    return out[:limit]

def pkey(a, b):
    return " || ".join(sorted([a, b]))

# ---- voice-tell gate (fail authored prose that leaks AI tells) ----
BANNED = [
    ("em-dash", re.compile(r"—")),
    ("ellipsis", re.compile(r"\.\.\.|…")),
    ("So-opener", re.compile(r"(^|[\"“]\s*)So[,\s]", re.M)),
    ("could-suggest", re.compile(r"\b(could suggest|may indicate|it'?s worth noting|there'?s a possibility|might want to consider)\b", re.I)),
    ("antithesis-not-but", re.compile(r"\bnot\s+\w[\w ]{0,30},?\s+but\b", re.I)),
    ("its-not-about", re.compile(r"it'?s not about .*,? it'?s about", re.I)),
    ("slogan-remember", re.compile(r"\bRemember:|What .+ remembers", re.I)),
    ("contrastive-however", re.compile(r"\b(however|whereas)\b", re.I)),
]
def voice_gate(text):
    return [name for name, rx in BANNED if rx.search(text)]

# ---- assemble ----
authored = {}
apath = P("readings_authored.json")
if os.path.exists(apath):
    authored = json.load(open(apath))

pairs = {}
counts = {"hard_gap": 0, "weak_only": 0, "constructed": 0, "pending": 0, "gate_fail": 0}
gate_failures = []
pending_hard, pending_weak = [], []

for a, b in itertools.combinations(cards, 2):
    if has_clear_combo(a, b):
        continue  # attested clear combo -> leave to the real corpus, untouched
    key = pkey(a, b)
    wp = weak_passages(a, b)
    gap_type = "hard_gap" if not wp else "weak_only"
    counts[gap_type] += 1

    reading = (authored.get(key) or "").strip()
    status = "pending"
    if reading:
        hits = voice_gate(reading)
        if hits:
            counts["gate_fail"] += 1
            gate_failures.append((key, hits))
            status = "gate_fail"
        else:
            status = "constructed"
            counts["constructed"] += 1
    else:
        counts["pending"] += 1
        (pending_hard if gap_type == "hard_gap" else pending_weak).append(key)

    sa, sb = sorted([a, b])
    pairs[key] = {
        "a": sa, "b": sb,
        "order_note": "No corpus passage names these two together, so draw order is not corpus-attested. Read as the two together.",
        "a_meaning": (cheat.get(sa, {}).get("meanings") or [""])[0],
        "b_meaning": (cheat.get(sb, {}).get("meanings") or [""])[0],
        "a_kw": cheat.get(sa, {}).get("kw", []),
        "b_kw": cheat.get(sb, {}).get("kw", []),
        "gap_type": gap_type,
        "source_passages": wp,     # [] for hard gaps; nearby/flagged for undercovered
        "reading": reading if status == "constructed" else "",
        "status": status,
        "model": MODEL if status == "constructed" else None,
        "generated": TODAY if status == "constructed" else None,
        "label": LABEL,
    }

out = {
    "_meta": {
        "generated": TODAY,
        "model": MODEL,
        "kind": "constructed reading — AI-generated in Chiron's voice from her own card meanings; NOT a recorded Chiron pairing",
        "voice_source": "project-audit-dashboard/voice-models/chiron_voice_prompt.md + this page's cheatsheet.json meanings",
        "rule": "individual card meanings are attested (cheatsheet); the COMBINED read is constructed and labelled as such, never claimed transcript-sourced",
        "scope": "pairs with no clean direct/clarifier/sequence passage",
        "counts": counts,
    },
    "readings": pairs,
}
json.dump(out, open(P("ai_readings.json"), "w"), ensure_ascii=False, indent=1)

print(f"no-clear-combo pairs : {counts['hard_gap'] + counts['weak_only']}  "
      f"(hard_gap {counts['hard_gap']}, weak_only {counts['weak_only']})")
print(f"constructed          : {counts['constructed']}")
print(f"pending              : {counts['pending']}")
print(f"gate_fail            : {counts['gate_fail']}")
if gate_failures:
    print("\nGATE FAILURES (fix authored prose):")
    for k, h in gate_failures[:40]:
        print(f"  {k}: {', '.join(h)}")

# emit pending lists for authoring, hard gaps first
if "--pending" in sys.argv:
    which = "hard" if "--weak" not in sys.argv else "weak"
    lst = pending_hard if which == "hard" else pending_weak
    print(f"\n--- PENDING {which.upper()} ({len(lst)}) ---")
    for k in lst:
        a, b = k.split(" || ")
        ma = (cheat.get(a, {}).get("meanings") or [""])[0]
        mb = (cheat.get(b, {}).get("meanings") or [""])[0]
        ka = " · ".join(cheat.get(a, {}).get("kw", [])[:4])
        kb = " · ".join(cheat.get(b, {}).get("kw", [])[:4])
        print(f"\n### {a}  ||  {b}   [{which}]")
        print(f"  A={a}  kw: {ka}")
        print(f"     mean: {ma}")
        print(f"  B={b}  kw: {kb}")
        print(f"     mean: {mb}")
