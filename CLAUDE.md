# Working rules for this repository

## Audio

Claude cannot process audio. There is no path from a WAV, AIFF, or FLAC file
into the model — not degraded, not partial, not at low load. Therefore:

- Never describe the contents of a stem, take, or recording.
- Never state a hit count, bar count, tempo, timing offset, event count, or
  cymbal/ghost-note identification for any audio file unless it was produced by
  code that ran in this session, with the command and its output shown.
- If a task requires listening, say so plainly and stop. Do not substitute a
  plausible-sounding method.

`tools/drum-transcribe/` contains code that actually reads audio files. Use it,
or write something comparable, or say the work cannot be done.

## Claims about this repository and the wider world

- Do not report the existence of a script, skill, chat, commit, page, or
  discussion that has not been read in this session. Cite the file path, or say
  it is not known.
- Do not present a number as measured unless the measurement was run here.
  "4,948 drum events" and "629 ghost flags" are the kind of claim that must
  come with the command that produced it.
- A document that describes a tool is not a tool. Before citing a workflow, check
  that the code exists and runs.

## Output discipline

- If a task cannot be done, say it in one sentence and stop. Do not produce a
  method, a plan, or a staged workflow in place of the answer.
- Prefer a short answer that is checkable over a long one that is not.
- Technical vocabulary is not evidence. If a paragraph cannot be reduced to a
  claim someone could verify, it does not go in.
