#!/usr/bin/env python3
"""Generate the prompt page from GOAL_ALL_DONE.md so the page text is never retyped."""
import html,os,re
SRC="/Users/drwu/.claude/skills/_shared/GOAL_ALL_DONE.md"
OUT=os.path.dirname(os.path.abspath(__file__))
s=open(SRC).read()
def block(n): return re.search(r"^BEGIN %s$\n(.*?)^END %s$"%(n,n),s,re.M|re.S).group(1).strip()
COND=block("CONDITION"); LOOP=block("LOOP")
rows=[(a.strip(),b.strip()) for a,b in re.findall(r"^\| ([^|]+?) \| ([^|]+?) \|$",s,re.M)
      if a.strip() not in ("Clause","---")]
E=html.escape
page=f"""<title>Stop-Resistant Goal and Loop Prompts</title>
<style>
:root{{--cream:#f4ead5;--ink:#14100c;--rust:#a8452a;--olive:#6b7a3a;--teal:#3d6b6b;
--dust:#c9b79c;--paper:#fbf6ea;}}
*{{box-sizing:border-box;}}
body{{margin:0;background:var(--cream);color:var(--ink);
font:16px/1.6 "Futura","Avenir Next",Helvetica,sans-serif;}}
.wrap{{max-width:900px;margin:0 auto;padding:2.4rem 1.2rem 5rem;}}
h1{{font-size:2rem;margin:0 0 .3rem;letter-spacing:-.02em;}}
h2{{font-size:1.25rem;margin:2.4rem 0 .5rem;padding-bottom:.3rem;border-bottom:3px solid var(--dust);}}
.sub{{color:#6a5f4e;margin:0 0 1.6rem;}}
.box{{background:var(--paper);border:2px solid var(--dust);border-radius:4px;padding:1rem 1.2rem;margin:1rem 0;}}
.box.good{{border-color:var(--olive);background:#f1f4e6;}}
pre{{background:#efe7d3;border:1px solid var(--dust);border-radius:4px;padding:.9rem 1rem;
overflow-x:auto;font-family:"SF Mono",Menlo,monospace;font-size:.82rem;line-height:1.55;
white-space:pre-wrap;word-break:break-word;margin:.5rem 0;}}
code{{background:#ece2cc;padding:.1rem .3rem;border-radius:3px;
font-family:"SF Mono",Menlo,monospace;font-size:.85rem;}}
button.copy{{background:var(--teal);color:var(--paper);border:0;border-radius:4px;
padding:.45rem .9rem;font:600 .8rem/1 "Futura","Avenir Next",Helvetica,sans-serif;
cursor:pointer;letter-spacing:.04em;text-transform:uppercase;}}
button.copy:hover{{background:#2f5555;}}
.meta{{font-size:.78rem;color:#6a5f4e;margin-left:.7rem;}}
table{{border-collapse:collapse;width:100%;font-size:.88rem;background:var(--paper);margin:.8rem 0;}}
th{{text-align:left;background:var(--teal);color:var(--paper);padding:.5rem .6rem;
font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;}}
td{{padding:.45rem .6rem;border-bottom:1px solid #e6dcc6;vertical-align:top;}}
td:first-child{{white-space:nowrap;font-weight:700;}}
.foot{{margin-top:2.6rem;padding-top:1rem;border-top:3px solid var(--dust);font-size:.84rem;color:#6a5f4e;}}
@media (max-width:640px){{h1{{font-size:1.5rem;}} td:first-child{{white-space:normal;}}}}
</style>
<div class="wrap">
<h1>Stop-resistant goal and loop prompts</h1>
<p class="sub">Two blocks that keep a session working until every enumerated sub-ask carries
its own evidence. Source of truth is
<code>~/.claude/skills/_shared/GOAL_ALL_DONE.md</code>; this page is generated from it.</p>

<div class="box good"><b>The one constraint that decides every clause.</b> The
<code>/goal</code> evaluator judges what was surfaced in the conversation, having no way to
run a command or open a file. So "require the tests to pass" is worthless, because Claude
can write "tests pass" and the evaluator has nothing to check it against. Both blocks below
demand only artefacts that appear IN the transcript: real command output, a path with a hash
or size, a URL with its HTTP code, a number with units, or a validator verdict quoted from
the validator.</div>

<div class="box"><b>The third verdict is an escape hatch, so it gets its own clause.</b> The
evaluator can return <b>Impossible</b>, which clears the goal and records a failure rather
than continuing. The condition therefore reserves that verdict for something no one could
satisfy, and sends hard, slow, repeatedly failing and currently blocked to INCOMPLETE.</div>

<h2>The /goal condition</h2>
<p><button class="copy" data-t="cond">Copy the condition</button>
<span class="meta">{len(COND)} characters, against a 4,000 cap</span></p>
<pre id="cond">{E(COND)}</pre>

<h2>The /loop prompt</h2>
<p><button class="copy" data-t="loop">Copy the loop prompt</button>
<span class="meta">{len(LOOP)} characters</span></p>
<pre id="loop">{E(LOOP)}</pre>

<h2>From a terminal instead</h2>
<pre>sed -n '/^BEGIN CONDITION$/,/^END CONDITION$/p' ~/.claude/skills/_shared/GOAL_ALL_DONE.md | sed '1d;$d' | pbcopy
sed -n '/^BEGIN LOOP$/,/^END LOOP$/p'           ~/.claude/skills/_shared/GOAL_ALL_DONE.md | sed '1d;$d' | pbcopy</pre>
<p>Then type <code>/goal</code> or <code>/loop</code> and paste. A bare <code>/goal</code>
shows the current condition and <code>/goal clear</code> removes it. A goal grants no
permissions, so pair it with auto mode or it stalls at the first tool prompt, and every goal
turn is a full main-model turn.</p>

<h2>Why each clause is there</h2>
<table><tr><th>clause</th><th>the failure it was written against</th></tr>
{"".join("<tr><td>%s</td><td>%s</td></tr>"%(E(a),E(b)) for a,b in rows)}
</table>

<p class="foot">The guitar-specific condition stays separate at
<code>~/.claude/skills/impossible-guitar-parts/GOAL.md</code>, since it demands validator
hashes and a preservation census. This one carries no domain vocabulary, so it applies to
any task. Written 29 August 2026.</p>
<script>
document.querySelectorAll("button.copy").forEach(function(b){{
  b.addEventListener("click",function(){{
    var el=document.getElementById(b.dataset.t);
    var t=el.innerText;
    var done=function(){{var o=b.textContent;b.textContent="Copied";
      setTimeout(function(){{b.textContent=o;}},1400);}};
    if(navigator.clipboard&&navigator.clipboard.writeText){{
      navigator.clipboard.writeText(t).then(done,function(){{fallback(t,done);}});
    }} else {{ fallback(t,done); }}
  }});
}});
function fallback(t,done){{
  var a=document.createElement("textarea");a.value=t;a.style.position="fixed";
  a.style.opacity="0";document.body.appendChild(a);a.select();
  try{{document.execCommand("copy");done();}}catch(e){{}}
  document.body.removeChild(a);
}}
</script>
</div>"""
open(os.path.join(OUT,"index.html"),"w").write(page)
md=("# Stop-resistant goal and loop prompts\n\nSource: `~/.claude/skills/_shared/GOAL_ALL_DONE.md`\n\n"
    "The `/goal` evaluator judges what was surfaced in the conversation, having no way to run a\n"
    "command or open a file. Both blocks demand only artefacts that appear in the transcript.\n"
    "Its third verdict, Impossible, clears the goal and records a failure, so the condition\n"
    "reserves that for something no one could satisfy.\n\n"
    "## The /goal condition (%d chars, cap 4000)\n\n```\n%s\n```\n\n"
    "## The /loop prompt (%d chars)\n\n```\n%s\n```\n\n"
    "## Why each clause is there\n\n| clause | the failure it was written against |\n|---|---|\n"
    %(len(COND),COND,len(LOOP),LOOP))
md+="".join("| %s | %s |\n"%(a,b) for a,b in rows)+"\nWritten 29 August 2026.\n"
open(os.path.join(OUT,"index.md"),"w").write(md)
print("regenerated: CONDITION %d chars, LOOP %d chars, %d clause rows"%(len(COND),len(LOOP),len(rows)))
