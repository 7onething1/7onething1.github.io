"""Turn an isolated drum stem into a drum tab, from measurements only.

Usage:
    python3 transcribe.py STEM.wav [--bpm 152] [--subdiv 16] [--csv out.csv]

Every number this prints was computed from the audio file. Onsets that cannot
be classified are printed as '?' rather than assigned to a drum, and the
quantisation error is reported so a wrong tempo is visible instead of hidden.
"""

import argparse
import csv
import sys

import numpy as np

import detect

LANES = [("HH", "x"), ("SD", "o"), ("BD", "o"), ("?", "?")]


def fit_grid(times, bpm, subdiv):
    """Find the grid phase that best fits the onsets. Returns (offset, errors)."""
    step = 60.0 / bpm * 4.0 / subdiv
    candidates = np.linspace(0.0, step, 64, endpoint=False)
    best, best_err = 0.0, None
    for off in candidates:
        err = np.abs(((times - off + step / 2) % step) - step / 2)
        total = err.sum()
        if best_err is None or total < best_err:
            best, best_err = off, total
    err = np.abs(((times - best + step / 2) % step) - step / 2)
    return best, err, step


def render_tab(events, bpm, subdiv, offset, step, bar_steps):
    """ASCII drum tab. One block per bar."""
    if not events:
        return "(no onsets detected)"
    slots = {}
    for ev in events:
        idx = int(round((ev["time"] - offset) / step))
        if idx < 0:
            continue
        labels = ev["hits"] or ["?"]
        slots.setdefault(idx, set()).update(labels)

    last = max(slots)
    n_bars = last // bar_steps + 1
    out = []
    for bar in range(n_bars):
        lines = []
        for name, glyph in LANES:
            cells = []
            for s in range(bar_steps):
                idx = bar * bar_steps + s
                cells.append(glyph if name in slots.get(idx, ()) else "-")
            lines.append(f"{name:<3}|{''.join(cells)}|")
        # drop the '?' lane when nothing is unclassified in this bar
        if lines[-1].count("?") == 1:
            lines = lines[:-1]
        out.append(f"bar {bar + 1}\n" + "\n".join(lines))
    return "\n\n".join(out)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("stem", help="path to an isolated drum stem (wav/flac/aiff)")
    ap.add_argument("--bpm", type=float, default=None,
                    help="override the measured tempo")
    ap.add_argument("--subdiv", type=int, default=16,
                    help="grid subdivisions per bar (default 16)")
    ap.add_argument("--bar-steps", type=int, default=16,
                    help="grid steps per bar (default 16)")
    ap.add_argument("--csv", default=None, help="write every onset to this CSV")
    args = ap.parse_args()

    try:
        result = detect.analyze(args.stem)
    except Exception as exc:                                  # noqa: BLE001
        print(f"error: could not analyse {args.stem}: {exc}", file=sys.stderr)
        return 2

    events = result["events"]
    measured_bpm = result["tempo_bpm"]
    bpm = args.bpm or measured_bpm
    if bpm is None:
        print("error: no tempo could be measured; pass --bpm", file=sys.stderr)
        return 2

    times = np.array([e["time"] for e in events])
    offset, errs, step = fit_grid(times, bpm, args.subdiv)

    unknown = sum(1 for e in events if not e["hits"])
    counts = {n: sum(1 for e in events if n in e["hits"]) for n, _ in LANES[:3]}

    print(f"file          : {result['path']}")
    print(f"duration      : {result['duration_sec']:.2f} s @ {result['sample_rate']} Hz")
    print(f"tempo measured: {measured_bpm:.2f} BPM "
          f"(confidence {result['tempo_confidence']:.2f})")
    if args.bpm:
        print(f"tempo used    : {bpm:.2f} BPM (supplied)")
    print(f"onsets        : {len(events)}")
    print(f"classified    : " + ", ".join(f"{k} {v}" for k, v in counts.items())
          + f", unclassified {unknown}")
    print(f"grid error    : {errs.mean() * 1000:.1f} ms mean, "
          f"{errs.max() * 1000:.1f} ms max")
    # A good mean hides bad individual placements, so check the worst hit too.
    if errs.mean() > 0.25 * step:
        print("WARNING: onsets do not fit this grid. The tempo or subdivision "
              "is probably wrong; the tab below is not trustworthy.")
    elif errs.max() > 0.25 * step:
        n_bad = int((errs > 0.25 * step).sum())
        print(f"WARNING: {n_bad} of {len(errs)} onsets sit more than a quarter "
              f"of a grid step ({0.25 * step * 1000:.0f} ms) off the grid, worst "
              f"{errs.max() * 1000:.0f} ms. Those placements are guesses.")
    print()
    print(render_tab(events, bpm, args.subdiv, offset, step, args.bar_steps))

    if args.csv:
        with open(args.csv, "w", newline="") as fh:
            w = csv.writer(fh)
            w.writerow(["time_sec", "hits", "grid_index", "grid_error_ms"]
                       + [f"energy_{b}" for b in detect.BANDS])
            for ev, err in zip(events, errs):
                w.writerow([f"{ev['time']:.5f}",
                            "+".join(ev["hits"]) or "?",
                            int(round((ev["time"] - offset) / step)),
                            f"{err * 1000:.2f}"]
                           + [f"{ev['bands'][b]:.3f}" for b in detect.BANDS])
        print(f"\nwrote {args.csv}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
