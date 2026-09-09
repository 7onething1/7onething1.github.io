"""Ground-truth test for detect.py.

Synthesises a drum pattern whose every hit position and instrument is known,
runs the detector over it, and scores the result. This exists so the pipeline
can be checked without trusting anyone's description of it: if the numbers
below are bad, the detector is bad.

Run:  python3 selftest.py
"""

import os
import sys
import tempfile

import numpy as np
import soundfile as sf

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import detect  # noqa: E402

SR = 44100
BPM = 120.0
BARS = 8

# One bar of sixteenths. Positions are 0-15.
KICK = [0, 6, 10]
SNARE = [4, 12]
HAT = [0, 2, 4, 6, 8, 10, 12, 14]


def kick_sample(sr=SR):
    n = int(0.18 * sr)
    t = np.arange(n) / sr
    freq = 110.0 * np.exp(-t * 28.0) + 42.0
    body = np.sin(2 * np.pi * np.cumsum(freq) / sr) * np.exp(-t * 16.0)
    click = np.random.default_rng(0).normal(0, 1, n) * np.exp(-t * 400.0) * 0.12
    return (body + click) * 0.95


def snare_sample(sr=SR):
    n = int(0.14 * sr)
    t = np.arange(n) / sr
    rng = np.random.default_rng(1)
    noise = rng.normal(0, 1, n)
    # crude band emphasis: subtract a smoothed copy to tilt energy upward
    smooth = np.convolve(noise, np.ones(24) / 24, mode="same")
    crack = (noise - smooth) * np.exp(-t * 45.0)
    body = np.sin(2 * np.pi * 190 * t) * np.exp(-t * 40.0) * 0.5
    return (crack * 0.9 + body) * 0.7


def hat_sample(sr=SR):
    n = int(0.06 * sr)
    t = np.arange(n) / sr
    rng = np.random.default_rng(2)
    noise = rng.normal(0, 1, n)
    smooth = np.convolve(noise, np.ones(4) / 4, mode="same")
    return (noise - smooth) * np.exp(-t * 90.0) * 0.55


def build(hard=False):
    """Render the pattern and return (audio, ground_truth_events).

    hard=True humanises the take: timing jitter, velocity variation between
    hits, and a noise floor about 20 dB worse. Real stems look more like this
    than like the clean grid.
    """
    rng_h = np.random.default_rng(7)
    sixteenth = 60.0 / BPM / 4.0
    total = int((BARS * 16 * sixteenth + 1.0) * SR)
    y = np.zeros(total)
    samples = {"BD": kick_sample(), "SD": snare_sample(), "HH": hat_sample()}
    truth = []

    for bar in range(BARS):
        for step in range(16):
            t = (bar * 16 + step) * sixteenth
            i = int(round(t * SR))
            hits = []
            if step in KICK:
                hits.append("BD")
            if step in SNARE:
                hits.append("SD")
            if step in HAT:
                hits.append("HH")
            if hits and hard:
                t = t + float(rng_h.normal(0, 0.006))
                t = max(t, 0.0)
                i = int(round(t * SR))
            for h in hits:
                s = samples[h]
                vel = float(rng_h.uniform(0.55, 1.0)) if hard else 1.0
                y[i:i + len(s)] += s * vel
            if hits:
                truth.append({"time": t, "hits": sorted(hits)})

    noise = 0.015 if hard else 0.0015
    y += np.random.default_rng(3).normal(0, noise, total)  # room noise floor
    return y / np.abs(y).max() * 0.9, truth


def score(truth, events, tol=0.030):
    """Match detected onsets to ground truth within tol seconds."""
    used = set()
    onset_tp = 0
    per_class = {c: {"tp": 0, "fp": 0, "fn": 0} for c in ("BD", "SD", "HH")}
    errors = []

    for gt in truth:
        best, best_d = None, tol
        for i, ev in enumerate(events):
            if i in used:
                continue
            d = abs(ev["time"] - gt["time"])
            if d < best_d:
                best, best_d = i, d
        if best is None:
            for c in gt["hits"]:
                per_class[c]["fn"] += 1
            continue
        used.add(best)
        onset_tp += 1
        errors.append(best_d)
        got, want = set(events[best]["hits"]), set(gt["hits"])
        for c in per_class:
            if c in want and c in got:
                per_class[c]["tp"] += 1
            elif c in want:
                per_class[c]["fn"] += 1
            elif c in got:
                per_class[c]["fp"] += 1

    return {
        "expected_onsets": len(truth),
        "detected_onsets": len(events),
        "matched": onset_tp,
        "spurious": len(events) - onset_tp,
        "mean_timing_error_ms": float(np.mean(errors) * 1000) if errors else None,
        "max_timing_error_ms": float(np.max(errors) * 1000) if errors else None,
        "per_class": per_class,
    }


def main():
    hard = "--hard" in sys.argv
    y, truth = build(hard=hard)
    with tempfile.TemporaryDirectory() as d:
        path = os.path.join(d, "selftest.wav")
        sf.write(path, y, SR)
        result = detect.analyze(path)

    s = score(truth, result["events"])

    print(f"pattern      : {BARS} bars, {BPM:.0f} BPM, 16th grid"
          f"{'  [HARD: jitter, velocity, noise]' if hard else '  [clean]'}")
    print(f"tempo found  : {result['tempo_bpm']:.2f} BPM "
          f"(confidence {result['tempo_confidence']:.2f})")
    print(f"onsets       : {s['matched']}/{s['expected_onsets']} matched, "
          f"{s['spurious']} spurious")
    if s["mean_timing_error_ms"] is not None:
        print(f"timing error : {s['mean_timing_error_ms']:.1f} ms mean, "
              f"{s['max_timing_error_ms']:.1f} ms max")
    print()
    print(f"{'class':<6}{'tp':>6}{'fp':>6}{'fn':>6}{'precision':>11}{'recall':>9}")
    ok = True
    for c, v in s["per_class"].items():
        p = v["tp"] / (v["tp"] + v["fp"]) if (v["tp"] + v["fp"]) else 0.0
        r = v["tp"] / (v["tp"] + v["fn"]) if (v["tp"] + v["fn"]) else 0.0
        print(f"{c:<6}{v['tp']:>6}{v['fp']:>6}{v['fn']:>6}{p:>11.2f}{r:>9.2f}")
        bar = 0.75 if hard else 0.85
        if p < bar or r < bar:
            ok = False

    tempo_ok = result["tempo_bpm"] is not None and abs(result["tempo_bpm"] - BPM) < 3.0
    print()
    print(f"tempo within 3 BPM : {'yes' if tempo_ok else 'NO'}")
    print(f"RESULT: {'PASS' if (ok and tempo_ok) else 'FAIL'}")
    return 0 if (ok and tempo_ok) else 1


if __name__ == "__main__":
    sys.exit(main())
