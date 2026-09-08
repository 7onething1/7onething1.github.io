# Watermelon In Easter Hay — Claude refund evidence

Compiled 2026-09-08 from 124 Claude Code session transcripts in `~/.claude/projects/`.

## Headline

| measure | value |
|---|---|
| Tokens, top 3 watermelon chats | 3,368,924,136 |
| Tokens, 21 watermelon-focused sessions | 5,567,021,884 |
| Tokens, 59-session Zappa cluster | 10,005,060,635 |
| Tokens, all 124 sessions on this Mac | 12,850,364,179 |
| Watermelon share of all token use | 77.9% |
| Assistant turns (watermelon set) | 13,678 |
| Wall-clock hours (watermelon set) | 277 |
| API-equivalent value, watermelon set | $10,660 |
| API-equivalent value, Zappa cluster | $20,050 |

Task: one Guitar Pro drum chart for Songsterr tab `s35881`, corrected against stems and uploaded.
Started 2026-08-29. Unfinished as of 2026-09-08.

## The three largest chats

| session | opened | hours | turns | tokens |
|---|---|---|---|---|
| `c1e4ffee-9289-4640-8291-44d886f30a2f` | 2026-09-01 | 131.3 | 3,521 | 1,871,721,372 |
| `5d61ff43-67bb-4d81-9034-c2277be8db30` | 2026-09-07 | 26.0 | 2,253 | 1,163,659,117 |
| `6489be1d-a069-49f8-8764-f14304e9103a` | 2026-09-06 | 4.4 | 786 | 333,543,647 |

## Evidence of waste

1. **Thirteen rebuilds.** `watermelon-v9.gp` and `watermelon-v13.gp` in
   `~/Projects/_outputs/zappa-watermelon-hat-snare-repair/upload_ready/`. Source chart re-downloaded
   six times between 08-29 and 09-08.
2. **Five broken finished files.** `~/Projects/_outputs/songsterr-zappa-paren-fix/s35881-Watermelon/_UNSHIPPABLE-CDATA-STRIPPED/`
3. **Self-authored lie audit.** `~/Projects/_outputs/zappa-handoff-lie-audit/` catalogues false
   completion claims written by earlier sessions into their own handoff docs.
4. **Third-party damage.** Songsterr revision `r8768414`, live 2026-08-29, stripped 1,317 ghost-note
   markings across 103 of 105 bars from Ben Dibden1's transcription. Note count unchanged at 2,091,
   so a count check could not see it. Recorded in `WATERMELON-GHOST-LOSS-2026-09-06.md` as the
   largest ghost loss in the twenty-tab set.
5. **Guardrail ignored.** Turn-ceiling check reported 1,842 assistant turns with no handoff in
   session `5d61ff43`, and the session continued.

## Method

Token counts summed from the `usage` object each assistant turn writes to its own JSONL transcript:
`input_tokens + output_tokens + cache_creation_input_tokens + cache_read_input_tokens`.
Watermelon-focused set defined as sessions with 100 or more mentions of the song, after stripping
`<system-reminder>` blocks so the skill-index injection does not inflate counts.

Valuation uses published Opus list rates (input $15/Mtok, output $75/Mtok, cache write $18.75/Mtok,
cache read $1.50/Mtok) as a scale reference. Actual billing was a $200/month Claude Max subscription.

## Next step

Submit at `support.claude.com` under billing, signed in as `7onething1@gmail.com`. Paste the message
block from the live page. Ask explicitly for a human reviewer. Do not delete the `.jsonl` transcripts
while the request is open.

Live page: https://7onething1.github.io/claude-refund-evidence/

## The mechanical cause (added 2026-09-08)

- **Zero batching.** 1 of 18,448 tool-using messages carried more than one tool call. 0.005% against a
  documented target above 40%. Every serialized call re-reads the full context, so a 3,521-turn session
  pays for its whole context on every step.
- **Eight-way fan-out.** Peak concurrency was 8 live sessions on Watermelon at 14:00 on 2026-09-08,
  against a standing one-session-at-a-time configuration.
- **Attribution.** Every turn ran `claude-opus-5`. Across all 122 transcripts: 39,764 Opus 5, 172
  Sonnet 5, zero Fable. Source: `reference_watermelon_arc_was_all_opus5_not_fable`.
