"""Drum onset detection and classification from an isolated drum stem.

Everything here is measured from the audio samples. Nothing is inferred from
genre, song title, or what a drum part "usually" does. If a hit cannot be
classified from its spectrum it is reported as UNKNOWN, never guessed.
"""

import numpy as np
import soundfile as sf

# Frequency bands in Hz. Chosen for a drum kit, not for general audio.
BANDS = {
    "low":    (30, 110),      # kick fundamental
    "lowmid": (110, 350),     # snare/tom body
    "mid":    (350, 2000),    # snare tone
    "hi":     (2000, 8000),   # snare crack, stick attack
    "vhi":    (8000, 14000),  # hats, cymbals (mp3 rolls off ~14 kHz)
}

N_FFT = 2048
HOP = 256

# How the "nothing is being hit" level is measured, and how far above it a band
# must sit to count as a hit. Chosen by sweeping against separated drum stems
# (see validate_stems.py), not by taste.
FLOOR_PCT = 75.0
FLOOR_MULT = 1.5


def read_audio(path):
    """Load an audio file as mono float. Raises if the file cannot be read."""
    y, sr = sf.read(path, always_2d=True, dtype="float64")
    if y.shape[0] == 0:
        raise ValueError(f"{path} contains no audio frames")
    y = y.mean(axis=1)
    peak = float(np.abs(y).max())
    if peak == 0:
        raise ValueError(f"{path} is digital silence")
    if peak < 0.001:                       # -60 dBFS
        db = 20.0 * np.log10(peak)
        raise ValueError(
            f"{path} peaks at {db:.1f} dBFS, which is a noise floor, not a "
            f"performance. Normalising it would amplify hiss by "
            f"{1.0 / peak:.0f}x and analyse that. Check the export.")
    return y / peak, sr


def stft_mag(y, n_fft=N_FFT, hop=HOP):
    win = np.hanning(n_fft)
    n_frames = 1 + (len(y) - n_fft) // hop
    if n_frames < 1:
        raise ValueError("audio is shorter than one analysis frame")
    frames = np.lib.stride_tricks.as_strided(
        y, shape=(n_frames, n_fft),
        strides=(y.strides[0] * hop, y.strides[0]),
    )
    return np.abs(np.fft.rfft(frames * win, axis=1))


def onset_envelope(mag):
    """Half-wave-rectified spectral flux on a log-compressed magnitude STFT."""
    log_mag = np.log1p(1000.0 * mag)
    flux = np.diff(log_mag, axis=0)
    env = np.maximum(flux, 0.0).sum(axis=1)
    env = np.concatenate([[0.0], env])
    return env / (env.max() or 1.0)


def pick_peaks(env, sr, hop=HOP, min_sep_ms=25.0, sensitivity=1.5, window=41):
    """Adaptive-median peak picking. Returns onset times in seconds."""
    pad = window // 2
    padded = np.pad(env, pad, mode="edge")
    local_median = np.array(
        [np.median(padded[i:i + window]) for i in range(len(env))]
    )
    threshold = local_median * sensitivity + 0.02
    min_sep = int(round(min_sep_ms / 1000.0 * sr / hop))

    peaks, last = [], -min_sep
    for i in range(1, len(env) - 1):
        if env[i] < threshold[i]:
            continue
        if env[i] < env[i - 1] or env[i] < env[i + 1]:
            continue
        if i - last < min_sep:
            # keep the stronger of two peaks inside the refractory window
            if peaks and env[i] > env[peaks[-1]]:
                peaks[-1] = i
                last = i
            continue
        peaks.append(i)
        last = i
    return np.array([p * hop / sr for p in peaks])


def band_energies(y, sr, t, pre_ms=12.0, post_ms=45.0):
    """Energy per band in the window after an onset, minus the window before.

    The subtraction removes ringing from the previous hit, so what is left is
    the energy the new hit actually added.
    """
    n_pre = int(pre_ms / 1000.0 * sr)
    n_post = int(post_ms / 1000.0 * sr)
    i = int(round(t * sr))
    before = y[max(0, i - n_pre):i]
    after = y[i:i + n_post]
    if len(after) < 64:
        return None

    def spectrum(seg, length):
        if len(seg) < 64:
            return None
        seg = seg[:length] if len(seg) >= length else np.pad(seg, (0, length - len(seg)))
        return np.abs(np.fft.rfft(seg * np.hanning(length))) ** 2

    n = n_post
    spec_after = spectrum(after, n)
    spec_before = spectrum(before, n)
    freqs = np.fft.rfftfreq(n, 1.0 / sr)

    out = {}
    for name, (lo, hi) in BANDS.items():
        sel = (freqs >= lo) & (freqs < hi)
        e_after = float(spec_after[sel].sum())
        e_before = float(spec_before[sel].sum()) if spec_before is not None else 0.0
        # scale the "before" window to the same length before subtracting
        scale = (n_post / max(len(before), 1)) if len(before) else 0.0
        out[name] = max(e_after - e_before * min(scale, 1.0), 0.0)
    return out


def noise_floor(y, sr, onset_times, n_probe=200, seed=0):
    """Per-band energy where nothing is being hit.

    Sampled with the same window as band_energies at times away from any onset,
    so the numbers are directly comparable. This is what a band looks like when
    the drum is silent, which is the honest thing to test a hit against -- unlike
    a percentile of onset energies, which is set by the loudest drum in the kit
    and therefore always mutes the quietest one.
    """
    rng = np.random.default_rng(seed)
    dur = len(y) / sr
    onsets = np.asarray(onset_times)
    probes, tries = [], 0
    while len(probes) < n_probe and tries < n_probe * 20:
        tries += 1
        t = float(rng.uniform(0.05, max(dur - 0.10, 0.06)))
        if len(onsets) and np.min(np.abs(onsets - t)) < 0.060:
            continue
        b = band_energies(y, sr, t)
        if b is not None:
            probes.append(b)
    if not probes:
        return {k: 0.0 for k in BANDS}
    return {k: float(np.percentile([b[k] for b in probes], FLOOR_PCT)) for k in BANDS}


def band_references(all_bands):
    """Per-file reference levels. `_total` is the 90th-percentile onset energy,
    used only as a noise gate; classification itself is scale-free so a ghost
    note is judged by the same rules as a rimshot.
    """
    refs = {}
    for name in BANDS:
        vals = np.array([b[name] for b in all_bands if b is not None])
        refs[name] = float(np.percentile(vals, 90)) if len(vals) else 0.0
    totals = np.array([sum(b.values()) for b in all_bands if b is not None])
    refs["_total"] = float(np.percentile(totals, 90)) if len(totals) else 0.0
    return refs


def classify(bands, refs):
    """Return the instruments present at one onset, from spectral shape.

    Thresholds are set from measured drum stems, not from theory. Two
    quantities do the work:

        high = hi + vhi   energy above 2 kHz (stick attack, snare crack, cymbal)
        body = low + lowmid   energy below 350 Hz (kick thump, drum shell tone)

    A cymbal or hi-hat is nearly all `high` with almost no `body`. A snare has
    `high` too, but always carries shell body with it. A kick is `body` alone.
    That contrast survives MP3 encoding, which discards content above ~14 kHz
    and so destroys any rule that relies on the very top octave.

    Gates are independent so simultaneous hits register together. An onset
    matching nothing returns an empty set and is reported as UNKNOWN, never
    assigned to a drum by guesswork.
    """
    total = sum(bands.values())
    ratios = {k: v / total for k, v in bands.items()} if total > 0 else {}
    if total <= 0:
        return set(), ratios

    r = ratios
    hits = set()
    floor = refs.get("_floor", {k: 0.0 for k in BANDS})

    high = bands["hi"] + bands["vhi"]
    high_floor = floor["hi"] + floor["vhi"]

    # Kick: low-frequency dominant in shape, or low-band energy clearly above
    # the floor while still carrying real weight down there.
    if r["low"] > 0.35 or (bands["low"] > FLOOR_MULT * floor["low"] and r["low"] > 0.20):
        hits.add("BD")

    # Anything above 2 kHz that clears the floor means a cymbal or a snare.
    if high > FLOOR_MULT * high_floor and high > 0:
        # A snare drags shell body along with its crack; a cymbal does not.
        if bands["lowmid"] > 0.08 * high and r["low"] < 0.45:
            hits.add("SD")
        else:
            hits.add("HH")
    return hits, r


def refine_onsets(y, sr, times, back_ms=15.0, fwd_ms=70.0, win_ms=3.0):
    """Snap coarse STFT onsets to the attack in the waveform.

    The STFT reports an onset early, never late, so the search window looks
    mostly forward. Each coarse time is replaced by the start of the steepest
    energy rise near it, measured on the samples themselves.
    """
    w = max(int(win_ms / 1000.0 * sr), 8)
    step = max(int(0.001 * sr), 1)
    energy = np.convolve(y ** 2, np.ones(w) / w, mode="same")

    refined = []
    for t in times:
        i = int(round(t * sr))
        lo = max(0, i - int(back_ms / 1000.0 * sr))
        hi = min(len(energy) - 1, i + int(fwd_ms / 1000.0 * sr))
        seg = energy[lo:hi:step]
        if len(seg) < 3:
            refined.append(t)
            continue
        d = np.diff(seg)
        k = int(np.argmax(d))
        # A drum attack is a few milliseconds. Backtracking further than this
        # walks into the previous hit's decay and reports the onset too early.
        limit = max(k - int(12.0 * sr / 1000.0 / step), 0)
        floor = 0.20 * d[k]
        while k > limit and d[k - 1] > floor:
            k -= 1
        refined.append((lo + k * step) / sr)

    refined.sort()
    out = []
    for t in refined:
        if out and t - out[-1] < 0.020:
            continue
        out.append(t)
    return np.array(out)


def estimate_tempo(env, sr, hop=HOP, bpm_min=60.0, bpm_max=200.0):
    """Tempo from the autocorrelation peak of the onset envelope."""
    e = env - env.mean()
    ac = np.correlate(e, e, mode="full")[len(e) - 1:]
    lag_min = int(round(60.0 / bpm_max * sr / hop))
    lag_max = min(int(round(60.0 / bpm_min * sr / hop)), len(ac) - 1)
    if lag_max <= lag_min:
        return None, 0.0
    seg = ac[lag_min:lag_max]
    lag = lag_min + int(np.argmax(seg))
    bpm = 60.0 / (lag * hop / sr)
    confidence = float(seg.max() / (ac[0] or 1.0))
    return bpm, confidence


def analyze(path):
    """Full pass over one file. Returns measured facts only."""
    y, sr = read_audio(path)

    # Zero-pad the front so a hit at t=0 still produces a flux rise.
    padded = np.concatenate([np.zeros(N_FFT), y])
    mag = stft_mag(padded)
    env = onset_envelope(mag)
    coarse = pick_peaks(env, sr) - N_FFT / sr
    coarse = coarse[coarse >= -0.050].clip(min=0.0)
    times = refine_onsets(y, sr, coarse)

    bpm, conf = estimate_tempo(env, sr)

    measured = [(t, band_energies(y, sr, t)) for t in times]
    measured = [(t, b) for t, b in measured if b is not None]
    refs = band_references([b for _, b in measured])
    refs["_floor"] = noise_floor(y, sr, [t for t, _ in measured])

    events = []
    for t, bands in measured:
        hits, ratios = classify(bands, refs)
        events.append({
            "time": float(t),
            "hits": sorted(hits),
            "ratios": ratios,
            "bands": bands,
        })

    return {
        "path": path,
        "sample_rate": sr,
        "duration_sec": len(y) / sr,
        "onset_count": len(events),
        "tempo_bpm": bpm,
        "tempo_confidence": conf,
        "band_references": refs,
        "events": events,
    }
