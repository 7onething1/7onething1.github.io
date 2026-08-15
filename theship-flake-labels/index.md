# 02 Flake, one chord shape, sixteen takes

Live: https://7onething1.github.io/theship-flake-labels/

Every clip is the SAME written chord, `E3 B3 E4 G#4`, which the tab writes
127 times. Eight where the detector scores it most extreme each way, in
TIME order with NO scores shown.

Because the written notes are identical across all sixteen, any audible difference
is a difference in PLAYING, not arrangement. Does the chord ring, or is it damped?

Write calls into `~/Projects/_outputs/theship-tabs/FLAKE_LABELS_TEMPLATE.txt`:

```
muted 112.78
rung  47.90
```

Then:

```
python3 ~/Projects/_outputs/theship-tabs/muted_classify.py --user-labels ~/Projects/_outputs/theship-tabs/FLAKE_LABELS_TEMPLATE.txt
```

Attacks over silence are excluded; separate defect (93 of 925). Scores withheld
deliberately, and the control warns if labels track the ranking rather than the ear.

Method: https://7onething1.github.io/theship-guitar-count/
