# GOLDBACH_OVERLAP_WASTE_CURVE

## Verdict

`FINITE_OVERLAP_WASTE_SUPPORTS_NO_COVER_TARGET`

FINITE EVIDENCE ONLY.
UNIVERSAL GOLDBACH PROOF REMAINS OPEN.
OVERLAP-WASTE CURVES ARE DIAGNOSTIC EVIDENCE, NOT A PROOF.

## Target Inequality

```text
Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)|
```

This test does not prove the inequality. It measures the finite waste pattern that any proof must control.

## Rows Tested

| row | C | trueK | S29 | greedy lanes | total overlap waste | waste/covered | uncovered after top 291 |
|---|---:|---:|---:|---:|---:|---:|---:|
| boss row | 3889129261038184 | 13.430940051045 | 582 | 291 | 72 | 0.1237 | 0 |
| hot row 1 | 3209851850270339 | 13.201583059795 | 557 | 276 | 70 | 0.1257 | 0 |
| hot row 2 | 3209851853146567 | 11.290765689433 | 475 | 250 | 59 | 0.1242 | 0 |
| hostile visitor | 59825417609829034 | 13.157604706523 | 657 | 313 | 87 | 0.1324 | 22 |
| raw max S29 row | 3268329311518612504 | 11.639244409992 | 706 | 343 | 80 | 0.1133 | 52 |

## Overlap Waste Curve

| row | top 1 | top 2 | top 3 | top 5 | top 10 | top 20 | top 50 | top 100 | top 200 | top 291 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| boss row | 3.95% | 7.22% | 9.97% | 14.78% | 23.88% | 36.6% | 55.5% | 67.18% | 84.36% | 100% |
| hot row 1 | 3.05% | 5.92% | 8.44% | 12.93% | 22.62% | 34.47% | 54.22% | 68.4% | 86.36% | 100% |
| hot row 2 | 3.58% | 6.95% | 9.89% | 14.32% | 23.58% | 35.79% | 55.16% | 68.42% | 89.47% | 100% |
| hostile visitor | 3.35% | 6.39% | 9.28% | 14.61% | 24.81% | 36.38% | 54.64% | 67.58% | 82.8% | 96.65% |
| raw max S29 row | 2.83% | 5.67% | 8.36% | 13.03% | 22.38% | 33.85% | 52.12% | 65.58% | 79.75% | 92.63% |

## Marginal Gain Decay

| row | lane 1 gain | lane 10 gain | lane 20 gain | lane 50 gain | lane 100 gain | last gain |
|---|---:|---:|---:|---:|---:|---:|
| boss row | 23 | 9 | 5 | 2 | 1 | 1 |
| hot row 1 | 17 | 9 | 5 | 2 | 1 | 1 |
| hot row 2 | 17 | 8 | 5 | 2 | 1 | 1 |
| hostile visitor | 22 | 11 | 6 | 3 | 1 | 1 |
| raw max S29 row | 20 | 11 | 7 | 3 | 1 | 1 |

## Uncovered Survivor Audit After Top 291 Lanes

| row | survivors left | top lane |
|---|---:|---|
| boss row | 0 | `R:p31:g=1 (23)` |
| hot row 1 | 0 | `L:p31:g=23 (17)` |
| hot row 2 | 0 | `R:p31:g=22 (17)` |
| hostile visitor | 22 | `R:p31:g=3 (22)` |
| raw max S29 row | 52 | `L:p31:g=0 (20)` |

## Interpretation

- Diffuse growth means each added lane buys less and less new coverage.
- Overlap waste records how much of a lane's raw periodic reach is already spent on previously covered survivors.
- If a theorem proves enough overlap loss relative to survivor mass, full coverage becomes impossible.
- That is the actual missing bridge.

## Next 3

1. Turn overlap waste into a symbolic overlap-loss lower bound.
2. Prove a marginal-gain decay inequality for periodic killer lanes on S_P(C,W).
3. Classify the uncovered survivors left after top 291 lanes by residue and side to test whether they cluster or stay diffuse.

