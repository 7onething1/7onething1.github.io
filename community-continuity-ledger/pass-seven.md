# Community continuity ledger, pass seven

Five episodes carried Blu-ray bitmap subtitles rather than text, so they had been sitting outside evidence. They are in now. The corpus stands at 28 episodes and 12,445 cues, of which 11,817 are dialogue.

## Reading pictures: how the five episodes got in

Blu-ray stores subtitles as compressed images, so there is no text to extract. Getting them into the corpus took a decoder written against the PGS specification, which parses the segment container, decodes the run length encoding, converts the YCrCb palette, and writes one image per displayed subtitle. Optical recognition then runs through the Vision framework that ships with macOS, which needed nothing installed.

The first run produced 499 images that were all identical. The cause was mine: rendering happened after parsing finished, and the format reuses object identifier zero for every subtitle, so each event drew the final bitmap. Moving the render to the end-of-display-set segment fixed it, and the bad output went to a quarantine folder rather than into the corpus.

Quality holds up. "Asian Population Studies" yields 492 cues with speaker tags intact at three and a half percent, which is better attribution coverage than the disc's own text tracks average.

## Six hundred cues were never dialogue at all

Re-mining the enlarged corpus surfaced a phrase appearing across five consecutive episodes with a high rarity score, which is the exact signature of a planted callback. The culprit was a release group watermark, a bare URL sitting in the credits of every episode from one rip.

A second false pattern sat beside it, a bracketed sound description naming the song under the opening titles. That one appears in eight episodes and would have read as a repeated line of dialogue.

Cues now carry a classification: dialogue, music, sound, or watermark. Only dialogue counts as spoken evidence. That removes 628 cues from consideration, and it removes two callbacks that nobody ever said. Status: corpus hygiene, applied retroactively to every claim.

## The Magnitude catchphrase, and a third probe of the same broken shape

Pass six recorded the catchphrase as absent under two patterns. The phrase turns up in "Early 21st Century Romanticism" six times over, first at 00:11:14.

Two separate faults hid it. The episode was outside the corpus until this pass, and the pattern itself was broken in the same way the triple-cool pattern was broken. Both allowed a single character between the repeated word, and the subtitle puts a comma and a space there.

That makes three probes failing on the same punctuation assumption. The pattern class, not the individual probe, was the defect. Status: confirmed, six or more instances, S02E15.

## Streets ahead, with a speaker tag attached

Also recorded as absent in pass six, also present now that the episode is readable. The line lands at 00:04:54 in the same episode and carries a subtitle speaker tag, so the attribution needs no inference.

The tag names a minor character rather than Pierce, which shapes how the joke works. The phrase is in circulation among background students at the point the episode uses it. Status: confirmed, speaker tagged, S02E15 cue 104.

## Magnitude arrives as a person nobody can place

The same episode introduces the character through a run of denials. Somebody warns against saying a thing to him at 00:11:11, the immediate reply asks who he is, and a third character says at 00:14:37 that the name is new to them that night.

Later, at 00:17:32, a roll call of student names lists him among the regulars and follows his name with the catchphrase. The character is being installed and treated as long established inside a single episode, and the catchphrase substitutes for the person in a list.

Status: confirmed, S02E15, four cues tracked.

## The title echo has a source, and it predates the finale by a season

The ledger flagged the Season Two finale title as a possible echo of earlier threat language and asked for both quotations side by side. The earlier one is in "Comparative Religion" at 00:02:08, inside a menacing exchange over a cookie, and it pairs a fist with the anatomical noun in a single short line.

The bully in that exchange is named later in the same episode, at 00:16:30 and 00:16:33, so the speaker is identifiable from the episode rather than from a tag.

Placing them side by side supports the ledger's instinct. The wording is specific enough that coincidence is a weaker explanation than reuse, and the gap is one season. Status: probable title echo, upgraded from speculation, S01E12 cue 49.

## Counts that moved again

The triple-cool tic now stands at five instances with "Intro to Political Science" added. The Spanish honorific for Chang reaches seven episodes. The late-arrival line holds at six.

Each of these moved because the corpus grew rather than because a probe was wrong. Recording which cause applies keeps the ledger's error rate legible, since a count that changes from new evidence is a separate event from a count that changes from a broken pattern.

## The ventilation negative holds a third time

Tested again across all 28 episodes under both patterns. The only matches remain substrings inside unrelated words, an event, a product, something that prevents. No hit refers to a ventilation system.

Three passes have now failed to find it in this range. Status: absent from range, upheld.
