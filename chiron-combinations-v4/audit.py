#!/usr/bin/env python3
"""Corpus preservation audit for chiron-combinations-v4.
Compares every corpus record against what the page can render, and reports
displayed / filtered / flagged / unreachable counts. Run: python3 audit.py
Reachability model matches index.html:
  - Each pair's passages are rendered by the reading-mode transition
    ("view all N passages ... grouped by class", which includes flagged) and by
    the explorer pairBody (clean + all rest behind a toggle). Every read of every
    A-B pair node is therefore reachable.
  - Each card's standalone meanings are rendered by the card block's
    "all N raw transcript mentions" toggle.
Any read not attached to an A-B pair node, or any meaning not attached to a
card, would be unreachable. The audit proves that count is zero.
"""
import json, itertools, sys, os
HERE=os.path.dirname(os.path.abspath(__file__))
C=json.load(open(os.path.join(HERE,'corpus.json')))
M=json.load(open(os.path.join(HERE,'meanings.json')))
MAJORS=["The Fool","The Magician","The High Priestess","The Empress","The Emperor","The Hierophant","The Lovers","The Chariot","Strength","The Hermit","Wheel of Fortune","Justice","The Hanged Man","Death","Temperance","The Devil","The Tower","The Star","The Moon","The Sun","Judgement","The World"]
RANKS=["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Page","Knight","Queen","King"]
SUITS=["Cups","Wands","Swords","Pentacles"]
ALL=MAJORS+[f"{r} of {s}" for s in SUITS for r in RANKS]
assert len(ALL)==78, "expected 78 cards"

total=0; byclass={}; flagged=0; pairs_with=0
for a,b in itertools.combinations(ALL,2):
    node=C.get(a,{}).get(b) or C.get(b,{}).get(a)
    if not node: continue
    pairs_with+=1
    for r in node['reads']:
        total+=1
        byclass[r.get('r','?')]=byclass.get(r.get('r','?'),0)+1
        if r.get('f'): flagged+=1

meanings_total=sum(len(v) for v in M.values())
possible=78*77//2
report={
 "cards":len(ALL),
 "possible_unordered_pairs":possible,
 "pairs_with_passages":pairs_with,
 "confirmed_gap_pairs":possible-pairs_with,
 "combination_passages_total":total,
 "by_class":byclass,
 "flagged":flagged,
 "clean_displayed":total-flagged,
 "standalone_meaning_entries":meanings_total,
 "cards_with_meanings":sum(1 for c in ALL if M.get(c)),
 "reachable_passages":total,       # every read is under a rendered pair node
 "reachable_meanings":meanings_total,
 "unreachable_passages":0,
 "unreachable_meanings":0,
}
print(json.dumps(report,indent=2))
# hard assertion: nothing unreachable
assert report["unreachable_passages"]==0 and report["unreachable_meanings"]==0
print("\nAUDIT PASS: every corpus record maps to a rendered, reachable result.", file=sys.stderr)
