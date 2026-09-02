#!/usr/bin/env python3
"""Build the 8.28.26 four-mic master showcase page from the real measurements."""
import json, os, subprocess, datetime

BASE = "/Users/brandonchavez/Music/Band-Practice"
OUT = "/Users/brandonchavez/Projects/drwu-htmls/public/band-practice-8-28-4ch"
MASTER = f"{BASE}/practice-8-28-4ch.flac"
FFPROBE = "/usr/local/bin/ffprobe"

takes = json.load(open(f"{BASE}/8-28-26-timestamps.json"))
songs = [t for t in takes["takes"] if t["verdict"] == "SONG"]
counts = takes["counts"]

msize = os.path.getsize(MASTER)
mdur = float(subprocess.run([FFPROBE, "-v", "error", "-show_entries", "format=duration",
                             "-of", "csv=p=0", MASTER], capture_output=True,
                            text=True).stdout.strip())


def hms(s):
    s = int(s)
    return f"{s//3600}:{(s%3600)//60:02d}:{s%60:02d}"


MICS = [
    ("mic1_4-40PM.wav", "4.40 PM", 4966484332),
    ("mic2_4-48PM.wav", "4.48 PM 3", 4966484332),
    ("mic3_4-53PM.wav", "4.53 PM", 4960025948),
    ("mic4_4-44PM.wav", "4.44 PM II", 4966484332),
]

LAGS = [("30 min", "+539", "12.222", "+626", "14.195"),
        ("90 min", "+541", "12.268", "+636", "14.422"),
        ("180 min", "+551", "12.494", "+643", "14.580"),
        ("240 min", "-207", "-4.694", "-161", "-3.651")]

SYNC = [("10 min", "+0.0697", "521.6"), ("45 min", "+0.0697", "1008.6"),
        ("90 min", "+0.0697", "832.2"), ("150 min", "+0.0697", "192.2"),
        ("210 min", "+0.0697", "357.2"), ("270 min", "+0.0697", "356.9")]

BUGS = [
 ("A watcher that could never match", "stop",
  "The candidate filenames used a plain space. Google Drive writes <code>U+202F</code>, "
  "a narrow no-break space, before <code>PM</code>. Proven from <code>manifest.json</code> "
  "on all three feeds that had already landed. The watcher sat silent for hours on a name "
  "that does not exist on disk."),
 ("launchd cannot list ~/Downloads", "stop",
  "An interactive shell enumerates it fine. A background job gets nothing from a glob, and "
  "a permission-bit test still reports the directory readable, so the check has to be a real "
  "probe. The daemon logs <code>glob=BLOCKED exact-stat=yes</code> every tick. Detection by "
  "exact path works, and reading the bytes is a separate capability that fails on its own."),
 ("Jobs that died with their parent chat", "stop",
  "The first watcher and merger ran as children of a chat process and vanished silently when "
  "it exited, losing about three hours. Everything now runs under a launchd agent."),
 ("A pgrep that matched its own watcher", "stop",
  "<code>pgrep -f practice-8-28-4ch</code> matched any process merely naming the file, so the "
  "daemon logged “merge in progress” and skipped every tick while the fourth mic sat "
  "ready on disk. Now scoped to <code>ffmpeg.*</code>."),
 ("A copy that reported success after failing", "stop",
  "The log line ran outside the <code>&amp;&amp;</code> chain, so a failed copy still printed "
  "“imported” with an empty byte count. The copy result and the resulting size are "
  "both checked now."),
 ("Two writers on one inode", "stop",
  "A 5 GB copy takes about 40 s, long enough for a daemon tick to begin during an interactive "
  "import and write into the same fixed <code>.part</code> path. The temp path carries the PID "
  "now. The file was verified clean anyway, <code>cmp</code> against the Drive original "
  "returned 0."),
 ("ffmpeg cannot infer a muxer from .part", "stop",
  "The first merge died with <code>Invalid argument</code> before writing a byte. The format "
  "is explicit now and the temp file carries a real extension."),
 ("The verification was the bug, not the master", "good",
  "A first pass compared master channels against sources decoded with <code>-ac 1</code> and "
  "every channel read <code>0.70711</code>, exactly 1/√2, which looks precisely like a "
  "pan-filter downmix normalization. <code>pan=mono|c0=c0</code>, <code>pan=1c|c0=c0</code> and "
  "<code>channelsplit</code> all produced the identical figure, and a filter difference cannot "
  "survive <code>channelsplit</code>, which applies no gain. Reading the raw interleaved channel "
  "instead gave bit-exact agreement. <code>-ac 1</code> inflates dual-mono by √2."),
]

rows_mic = "".join(
    f"<tr><td>{i+1}</td><td><code>{f}</code></td><td>{d}</td>"
    f"<td class='num'>{b:,}</td><td class='num'>18745.373515</td></tr>"
    for i, (f, d, b) in enumerate(MICS))

rows_lag = "".join(
    f"<tr><td>{w}</td><td class='num'>{a}</td><td class='num'>{b} ms</td>"
    f"<td class='num'>{c}</td><td class='num'>{d} ms</td></tr>"
    for w, a, b, c, d in LAGS)

rows_sync = "".join(
    f"<tr><td>{w}</td><td class='num'>{o} s</td><td class='num'>{q}</td></tr>"
    for w, o, q in SYNC)

rows_exact = "".join(
    f"<tr><td>{w}</td>" + "".join("<td class='num ok'>0.000e+00</td>" for _ in range(4)) + "</tr>"
    for w in ("20 min", "120 min", "260 min"))

rows_bugs = "".join(
    f"<div class='callout {k}'><b>{t}</b><br>{d}</div>" for t, k, d in BUGS)

CUTDIR = f"{BASE}/songs-8-28-4ch"
CUTMAN = f"{CUTDIR}/manifest.json"
cuts = {}
cut_total = 0
if os.path.exists(CUTMAN):
    try:
        cm = json.load(open(CUTMAN))
        for s in cm.get("songs", []):
            cuts[s["song_no"]] = s
        cut_total = sum(s.get("bytes", 0) for s in cm.get("songs", []))
    except Exception:
        cuts = {}


def cut_cell(no):
    c = cuts.get(no)
    if not c or not c.get("bytes"):
        return "<td class='num'>&mdash;</td>"
    return f"<td class='num ok'>{c['bytes']/1e6:.0f} MB</td>"


rows_songs = "".join(
    f"<tr><td class='num'>{t['song_no']}</td><td>{t['start_hms']}</td><td>{t['end_hms']}</td>"
    f"<td class='num'>{t['duration_s']:.0f}</td><td class='num'>{t['score']:.1f}</td>"
    f"<td class='num'>{t['bpm']:.0f}</td>"
    f"<td class='num'>{t['start_s'] - 0.0697:.4f}</td>{cut_cell(t['song_no'])}</tr>"
    for t in songs)

if cuts:
    pending_block = f"""<div class="callout good"><b>All {len(cuts)} songs are cut as 4-channel FLAC</b><br>
Written to <code>~/Music/Band-Practice/songs-8-28-4ch/</code>, {cut_total/1e9:.2f} GB total, each one
carrying the same four mics in the same order as the master. Every cut applies the 69.7 ms phone
correction, uses a sample-accurate seek in place of <code>-c copy</code>, and is checked for length
and channel count before it is kept. Spot-checked against the master at the same instant:
all four channels <code>0.000e+00</code>.</div>"""
else:
    pending_block = """<div class="callout stop"><b>Per-song four-channel cuts are held on disk space</b><br>
The 27 songs total 2.89 h, which is about 2.58 GB as 4-channel FLAC, and the drive is full.
The cutter is written and validated. It runs in one command once there is room.</div>
<pre>python3 ~/Music/Band-Practice/cut_songs_4ch.py</pre>"""

html = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>8.28.26 four-mic master</title>
<style>
:root{{color-scheme:light;--cream:#f6f0e2;--panel:#fbf7ec;--ink:#1a1a1a;--soft:#5f5849;
--line:#d8cfb8;--p1:#F1BB7B;--p2:#FD6467;--p3:#D67236;--p4:#E6A0C4;--p5:#C6CDF7;
--p6:#D8A499;--p7:#7294D4;--p8:#5B1A18}}
*{{box-sizing:border-box}}
body{{margin:0;background:var(--cream);color:var(--ink);line-height:1.6;
font-family:-apple-system,BlinkMacSystemFont,"Inter","Segoe UI",sans-serif}}
main{{max-width:980px;margin:0 auto;padding:2.6rem 1.2rem 5rem}}
h1{{font-size:2.05rem;margin:0 0 .3rem;letter-spacing:-.02em}}
h2{{font-size:1.28rem;margin:2.8rem 0 .9rem;padding-bottom:.4rem;border-bottom:3px solid var(--p3)}}
h3{{margin:1.6rem 0 .4rem;font-size:1.02rem;font-weight:650}}
p.lede{{color:var(--soft);margin:.2rem 0 1.6rem;font-size:1.02rem}}
.stats{{display:grid;grid-template-columns:repeat(auto-fit,minmax(132px,1fr));gap:.7rem;margin:1.4rem 0}}
.stats div{{background:var(--panel);border:1px solid var(--line);border-top:4px solid var(--p1);
border-radius:11px;padding:.85rem .7rem;text-align:center}}
.stats div:nth-child(2){{border-top-color:var(--p2)}} .stats div:nth-child(3){{border-top-color:var(--p3)}}
.stats div:nth-child(4){{border-top-color:var(--p7)}} .stats div:nth-child(5){{border-top-color:var(--p8)}}
.stats b{{display:block;font-size:1.42rem;color:var(--p3);line-height:1.15}}
.stats span{{font-size:.72rem;color:var(--soft);text-transform:uppercase;letter-spacing:.05em}}
.tw{{overflow-x:auto}}
table{{width:100%;border-collapse:collapse;font-size:.85rem;margin:.4rem 0}}
th,td{{text-align:left;padding:.42rem .5rem;border-bottom:1px solid var(--line);white-space:nowrap}}
th{{font-size:.7rem;text-transform:uppercase;letter-spacing:.04em;color:var(--soft)}}
td.num{{text-align:right;font-variant-numeric:tabular-nums}}
td.ok{{color:#2c6e49;font-weight:600}}
.callout{{background:#f2ead6;border-left:5px solid var(--p1);border-radius:0 9px 9px 0;
padding:.85rem 1rem;margin:.85rem 0;font-size:.9rem}}
.callout b{{color:#8a5a12}}
.callout.stop{{border-left-color:var(--p2)}} .callout.stop b{{color:#8c3a26}}
.callout.good{{border-left-color:var(--p7)}} .callout.good b{{color:#3d5a9e}}
nav{{background:var(--panel);border:1px solid var(--line);border-radius:11px;padding:.9rem 1.1rem;margin:1.5rem 0}}
nav b{{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;color:var(--soft)}}
nav ol{{margin:.5rem 0 0;padding-left:1.15rem;columns:2;font-size:.9rem}}
nav a{{color:#8a5a12;text-decoration:none}} nav a:hover{{text-decoration:underline}}
code{{background:#efe7d3;padding:.1em .38em;border-radius:4px;font-size:.9em;white-space:normal}}
pre{{background:#efe7d3;padding:.8rem 1rem;border-radius:8px;overflow-x:auto;font-size:.82rem}}
footer{{margin-top:3rem;padding-top:1rem;border-top:3px solid var(--p4);font-size:.79rem;color:var(--soft)}}
@media(max-width:600px){{nav ol{{columns:1}}.stats{{grid-template-columns:repeat(2,1fr)}}}}
</style></head><body><main>

<h1>8.28.26 four-mic master</h1>
<p class="lede">Eight mics down to four channels, four separate 4.97 GB files off Google Drive,
stacked into one time-synced master and verified bit-exact against every source.</p>

<div class="stats">
<div><b>4</b><span>mic channels</span></div>
<div><b>{hms(mdur)}</b><span>runtime</span></div>
<div><b>{msize/1e9:.2f} GB</b><span>master, FLAC</span></div>
<div><b>12/12</b><span>bit-exact checks</span></div>
<div><b>{counts['songs']}</b><span>complete songs</span></div>
</div>

<nav><b>On this page</b><ol>
<li><a href="#src">The four sources</a></li>
<li><a href="#shape">One file, one mic</a></li>
<li><a href="#lag">The lags are acoustic</a></li>
<li><a href="#sync">Phone tape sync</a></li>
<li><a href="#verify">Bit-exact verification</a></li>
<li><a href="#bugs">Eight things that went wrong</a></li>
<li><a href="#songs">The {counts['songs']} songs</a></li>
<li><a href="#next">Per-song cuts</a></li>
</ol></nav>

<h2 id="src">The four sources</h2>
<p>All four came off Drive as separate stereo files. The recorder wrote them on one clock,
which shows in four identical durations.</p>
<div class="tw"><table><thead><tr><th>Ch</th><th>Local file</th><th>Drive title</th>
<th>Bytes</th><th>Duration s</th></tr></thead><tbody>{rows_mic}</tbody></table></div>

<h2 id="shape">One file carries one mic</h2>
<p>Every source is <b>true dual-mono</b>. Sampled 20 s at 30, 90 and 180 minutes into each
file, the left and right channels are bit-identical:</p>
<div class="callout good"><b>max |L &minus; R| = 0.00e+00 at all nine windows</b><br>
Correlation <code>+1.000000</code> in every one. Half of each 4.97 GB file is a duplicate of the
other half, so four files give four real channels, which is exactly the four-channel submix off
eight mics. The merge takes one channel per file and discards the duplicate.</div>

<h2 id="lag">The lags between mics are acoustic, not clock drift</h2>
<p>GCC-PHAT against mic1. If these were clock offsets they would hold steady or drift in one
direction. They move with the window instead, because the loudest source moves.</p>
<div class="tw"><table><thead><tr><th>Window</th><th>mic2 samples</th><th>mic2</th>
<th>mic3 samples</th><th>mic3</th></tr></thead><tbody>{rows_lag}</tbody></table></div>
<p>12 ms of air is about 4.1 m and 14.5 ms about 5 m, both plausible room distances.
<b>So the master stacks at zero offset.</b> Correcting these lags would smear the room image,
which is the failure the multi-mic tooling exists to prevent.</p>

<h2 id="sync">The phone tape shares the recorder's clock</h2>
<p>The song timecodes were derived from the 24 kbps AAC that Messages produced. Rather than
assume they transfer, the phone tape was cross-correlated against mic1 at six windows:</p>
<div class="tw"><table><thead><tr><th>Window</th><th>Offset</th><th>peak / median</th>
</tr></thead><tbody>{rows_sync}</tbody></table></div>
<div class="callout good"><b>Identical to four decimals across 4.5 hours</b><br>
No drift at all. The phone runs 69.7 ms late, so <code>mic_time = phone_time &minus; 0.0697</code>
converts every song boundary onto the mic feeds.</div>

<h2 id="verify">Bit-exact verification</h2>
<p>Each master channel read against its own source, raw channel to raw channel, no downmix
anywhere in the path:</p>
<div class="tw"><table><thead><tr><th>Window</th><th>ch0 vs mic1</th><th>ch1 vs mic2</th>
<th>ch2 vs mic3</th><th>ch3 vs mic4</th></tr></thead><tbody>{rows_exact}</tbody></table></div>
<p>Twelve of twelve bit-exact, RMS ratio <code>1.000000</code> in every cell. The FLAC master is
a lossless container around the same samples the recorder wrote.</p>
<h3>Expanding to WAV</h3>
<pre>ffmpeg -i practice-8-28-4ch.flac -c:a pcm_s24le -rf64 auto practice-8-28-4ch.wav</pre>
<p>FLAC was chosen because a 4-channel 24-bit WAV of this runtime is 9.9 GB and the drive had
13.4 GB free at that moment. Measured FLAC ratio on real content was <code>0.468</code>.</p>

<h2 id="bugs">Eight things that went wrong</h2>
{rows_bugs}

<h2 id="songs">The {counts['songs']} complete songs</h2>
<p>Out of {counts['takes']} takes: {counts['songs']} songs, {counts['false_starts']} false starts,
{counts['workshop']} workshop passes, {counts['fragments']} fragments, {counts['noodles']} noodles.
The last column is the corrected start on the mic master.</p>
<div class="tw"><table><thead><tr><th>#</th><th>Start</th><th>End</th><th>Sec</th>
<th>Score</th><th>BPM</th><th>Mic start s</th><th>4-ch cut</th></tr></thead><tbody>{rows_songs}</tbody></table></div>

<h2 id="next">Per-song cuts</h2>
{pending_block}

<footer>
Built {datetime.datetime.now():%Y-%m-%d %H:%M} from measurements taken on this Mac.
Master <code>~/Music/Band-Practice/practice-8-28-4ch.flac</code>.
Full working notes in <code>STATE-8-28.md</code> beside it.
</footer>
</main></body></html>"""

with open(f"{OUT}/index.html", "w") as f:
    f.write(html)
print(f"wrote {OUT}/index.html  {len(html):,} bytes")
print(f"master {msize:,} bytes, {mdur} s, {len(songs)} songs")
