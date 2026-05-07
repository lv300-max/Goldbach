# Validation Summary

## Scope

This file records finite computational evidence produced by the workbench and related local scripts.

These results are finite validation only. They do not prove Goldbach universally.

---

## Main finite validation findings

Recorded evidence from the workbench includes:

```text
Tested mirror-prime rescue patterns across bands up to 10^12.
K=8.25 finite status: broken.
K=10 finite status: broken.
K=12 misses in the completed K-window packets: 0.
Highest observed trueK: 10.535772 at C = 33950429.
Finite base check below the selected cutoff passed in the local test run.
```

---

## Finite base verification record

Local command:

```bash
python3 test_finite_base.py
```

Reported output:

```text
Centers tested: 99,998
Decompositions found: 99,998
All within Rescue Lemma: 99,998
Failures: 0
Max gap observed: 720
Average gap: 48.8
Max K ratio: 5.804
Runtime: 15.2 seconds
```

Safe interpretation:

```text
FINITE BASE VERIFICATION PASSED.
Universal proof still depends on the analytic Rescue Lemma.
```

---

## Extreme-scale validation record

Reported high-scale validation summary:

```text
Bands: 10^5 through 10^12
Centers tested: 560 in the reported extreme-scale run
Success rate: 100% in that finite sample
Max K observed: 6.327
No observed breach of the selected K ceiling in that run
```

Safe interpretation:

```text
The log^2(C) rescue target is strongly supported by finite samples.
It is not yet analytically proven.
```

---

## Important wording rule

Avoid:

```text
"Goldbach is universally proven."
"Lemma 4 is analytically proven."
```

Use:

```text
Finite validation is strong.
Lemma 4 is computationally supported.
The universal analytic proof remains open.
```
