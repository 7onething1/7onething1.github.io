"""Score detect.py against real audio, using separated stems as ground truth.

The classifier's whole claim is that it can name the instrument at an onset from
the spectrum of a MIXED drum signal. Here the mix is built by summing the
separated stems, so for every onset we independently know which stems actually
carry energy there. That is the ground truth the spectral guess is scored on.
"""
import sys, os, numpy as np, soundfile as sf
sys.path.insert(0, "/home/user/7onething1.github.io/tools/drum-transcribe")
import detect

STEM_DIR = sys.argv[1]
LIMIT = float(sys.argv[2]) if len(sys.argv) > 2 else 0.0
# stems that map onto the three classes detect.py can name
GT_MAP = {"kick": "BD", "snare": "SD", "hihat": "HH"}
EXTRA = ["toms", "cymbals"]

stems, sr = {}, None
for name in list(GT_MAP) + EXTRA:
    p = os.path.join(STEM_DIR, name + ".mp3")
    if not os.path.exists(p):
        continue
    y, s = sf.read(p, always_2d=True, dtype="float64")
    stems[name] = y.mean(axis=1)
    sr = s
n = min(len(v) for v in stems.values())
if LIMIT:
    n = min(n, int(LIMIT * sr))
stems = {k: v[:n] for k, v in stems.items()}
print(f"stems: {', '.join(stems)}  ({n/sr:.1f}s @ {sr} Hz)")

mix = sum(stems.values())
mix = mix / np.abs(mix).max()
tmp = "/tmp/claude-0/_mix.wav"
sf.write(tmp, mix, sr)

res = detect.analyze(tmp)
events = res["events"]
print(f"tempo {res['tempo_bpm']:.2f} BPM (conf {res['tempo_confidence']:.2f}), "
      f"{len(events)} onsets in {n/sr:.1f}s")

# ground truth: added energy per stem at each detected onset
times = [e["time"] for e in events]
per_stem = {}
for name, y in stems.items():
    ys = y / (np.abs(y).max() or 1.0)
    vals = []
    for t in times:
        b = detect.band_energies(ys, sr, t)
        vals.append(sum(b.values()) if b else 0.0)
    per_stem[name] = np.array(vals)

refs = {k: float(np.percentile(v, 90)) for k, v in per_stem.items()}
truth = []
for i in range(len(times)):
    hits = {GT_MAP[k] for k in GT_MAP
            if k in per_stem and refs[k] > 0 and per_stem[k][i] > 0.20 * refs[k]}
    other = {k for k in EXTRA
             if k in per_stem and refs[k] > 0 and per_stem[k][i] > 0.20 * refs[k]}
    truth.append((hits, other))

score = {c: {"tp": 0, "fp": 0, "fn": 0} for c in ("BD", "SD", "HH")}
for ev, (want, _) in zip(events, truth):
    got = set(ev["hits"])
    for c in score:
        if c in want and c in got: score[c]["tp"] += 1
        elif c in want:            score[c]["fn"] += 1
        elif c in got:             score[c]["fp"] += 1

print(f"\n{'class':<6}{'tp':>6}{'fp':>6}{'fn':>6}{'precision':>11}{'recall':>9}{'F1':>8}")
for c, v in score.items():
    p = v["tp"]/(v["tp"]+v["fp"]) if v["tp"]+v["fp"] else 0.0
    r = v["tp"]/(v["tp"]+v["fn"]) if v["tp"]+v["fn"] else 0.0
    f = 2*p*r/(p+r) if p+r else 0.0
    print(f"{c:<6}{v['tp']:>6}{v['fp']:>6}{v['fn']:>6}{p:>11.2f}{r:>9.2f}{f:>8.2f}")

unk = sum(1 for e in events if not e["hits"])
tom_cym_only = sum(1 for ev, (w, o) in zip(events, truth) if not w and o)
print(f"\nunclassified by detect.py : {unk} ({unk/max(len(events),1):.0%})")
print(f"onsets that are toms/cymbals only (no BD/SD/HH in truth): {tom_cym_only}")
