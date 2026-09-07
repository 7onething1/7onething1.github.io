# s35881 Watermelon In Easter Hay, the claims, gated

Every claim is one line and carries its chance baseline, alignment parameters, staff lane and verdict inline. The long working record is `STATUS-s35881-2026-09-06.md`; this file is what is asserted.

## Notation, symbol semantics and lane convention only

C1. On the Ride (middle) lane, MIDI 51, StaffLine 0, a parenthesised notehead is a ghost stroke under Weinberg, Guidelines for Drumset Notation, Percussive Notes June 1994 page 20 Ex. 11, which extends the mark to any instrument including cymbals, so the 1,316 marks on that lane are well-formed notation and the burden of proof sits on any revision deleting them.

C2. Weinberg settles the symbol semantics and lane convention only, he does not establish what was played on this take, so C1 carries no performance claim and none is drawn from it.

C3. On the Ride (middle) lane the pre-sweep file holds 1,317 AntiAccent instances and 0 Staccato instances and the live export holds 0 of each, so no ghost-to-dot substitution occurred on this lane, unlike the snare lane of Montana s35870.

## Alignment, fully named on every line

C4. The scoring map is piecewise-linear through snare anchors with offset 37.590 s, scale 1.0122, tolerance 80 ms, match rate 93 of 193 notated snare, giving 97 anchors, withheld median 27.3 ms and withheld max 55.6 ms.

C5. A denser map with offset 37.590 s, scale 1.0122, tolerance 150 ms, match rate 123 of 193 notated snare reaches 123 anchors, and it is not independently validated because its search windows were centred on C4.

C6. A historical map with offset 37.60 s, scale 1.012, tolerance 80 ms, match rate 90 of 193 notated snare was reported to reach 137 anchors, against 123 reached here at offset 37.590 s, scale 1.0122, tolerance 150 ms, leaving 14 anchors unaccounted for.

## Audio, every rate with its chance figure and verdict on the same line

C7. Ghost ride positions matched at 61.9% against a chance baseline of 63.3%, ratio 0.98x, verdict UNUSABLE because the baseline exceeds the 35% density ceiling.

C8. Plain ride positions matched at 67.2% against a chance baseline of 68.6%, ratio 0.98x, verdict UNUSABLE because the baseline exceeds the 35% density ceiling.

C9. Under the historical time-shift construction ghost ride positions matched at 61.9% against a chance baseline of 49.0%, ratio 1.26x, verdict UNUSABLE because the baseline exceeds the 35% density ceiling.

C10. Under a sparse log-compressed subband novelty picker ghost ride positions matched at 27.7% against a chance baseline of 24.2%, ratio 1.15x, binomial p 0.00174, verdict UNDETERMINED, and 1.15x is below the 1.5x floor so it is carried as no support.

C11. Under the same picker plain ride positions matched at 27.7% against a chance baseline of 24.2%, ratio 1.14x, binomial p 0.0574, verdict UNDETERMINED, and 1.14x is below the 1.5x floor so it is carried as no support.

C12. C10 and C11 are indistinguishable, so the audio separates ghost from plain nowhere on the Ride (middle) lane.

## The historical 1.45x

C13. Displacements measured in seconds land off the sixteenth lattice, and the one matching the historical construction reproduces a chance baseline of 49.0% against the historical 49.0%, a 0.1 point agreement.

C14. Every displacement measured in bar positions stays on the lattice and yields a chance baseline between 62.2% and 63.7%, and each gives a ratio between 0.97x and 0.99x, below the 1.5x floor, so none is carried as support.

C15. The historical observed rate of 71.3% against its stated chance baseline of 49.0% is matched here at 69.9% only with a 65 ms tolerance, while that same 49.0% chance baseline is matched only with a 45 ms tolerance, so the pair needs two tolerances at once and no single procedure yields both.

## Matched-control attack test, 2026-09-07

C20. Notated offbeat sixteenth slots matched at 31.2% against a rotation-null recall of 14.4% plus or minus 4.2%, gain +16.8 points, z 4.02, p_rank 0.000, verdict UNDETERMINED because z 4.02 is under the 5.0 confirm floor.

C21. Decay-matched off-lattice control points matched at 4.6% against a rotation-null recall of 14.6% plus or minus 4.2%, gain -10.0 points, z -2.40, and 99.8% of null draws matched as well or better, verdict UNDETERMINED.

C22. C20 and C21 were scored by one sparse log-compressed subband novelty detector at k=8 with 1,322 peaks at 2.42 per second and 30 ms tolerance, which never received ghost status as an input, and the two sets were matched on decay depth to a median absolute log predicted-level gap of 0.0085.

C23. Across 563 decay-matched pairs the notated member matched at 30.4% against the control member at 5.5%, a difference of 24.9 points, and a paired permutation over the label with 5000 draws gives one-sided p 0.0002.

C24. Sorted by decay age the notated-to-control ratio runs 4.50x at 271 ms, 5.63x at 542 ms and 7.09x at 813 ms, so it does not fall as the preceding strike decays.

C25. Five of eleven sections favour the notated position at Benjamini-Hochberg q under 0.05, and the strongest is section 3 at 55.1% notated against 4.3% control with 35 of 35 discordant pairs favouring the notated position.

C26. The collapse diagnostic reports 1.00 attacks per used onset with a busiest onset of 1 of 681, so no single onset absorbed many notated positions, and the residual bias is +5.4 ms with a median absolute residual of 16.8 ms.

C27. C20 through C26 show attacks at the notated offbeat positions that decay-matched off-lattice points do not carry, and they do not identify the striking instrument, so they support the presence of an event and not its identification as Ride (middle).

## Provenance

C16. Every audio figure above was measured on the isolated cymbals stem rather than the full mix, so each is a statement about that stem and about the detector's reach on it.

C17. A negative result here is a statement about this detector on this stem and it is never evidence that the notated texture is absent from the record.

C18. The Drumnet chart by BartoRomeo notates a continuous sixteenth stream of X noteheads on the hand cymbal lane above the top staff line, an independent printed witness agreeing with the tab's density on that lane.

C19. Nothing above authorises deleting a flag and no revision is proposed.
