# 02 Flake of the Year, label these attacks

Live: https://7onething1.github.io/theship-flake-labels/

24 written chord attacks from 02 Flake, each clip starting 0.35s before the strike.
12 from the top of the candidate ranking, 12 from the bottom, presented in TIME
order so the detector's opinion does not lead the ear.

The ranking is a candidate ordering from seven acoustic features, none of which is
ground truth. The listener's calls are the ground truth.

Write each call into `~/Projects/_outputs/theship-tabs/FLAKE_LABELS_TEMPLATE.txt`:

```
muted 112.78
rung  47.90
```

Then:

```
python3 ~/Projects/_outputs/theship-tabs/muted_classify.py --user-labels ~/Projects/_outputs/theship-tabs/FLAKE_LABELS_TEMPLATE.txt
```

Minimum 4 muted + 4 rung, 6 of each preferred. The control requires AUC >= 0.80
before any .gp edit is licensed.

Method: https://7onething1.github.io/theship-guitar-count/
