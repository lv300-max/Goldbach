# GOLDBACH_GREEDY_LANE_DECAY_CURVE

## Verdict

`FINITE_DIFFUSE_KILLER_NET_DECAY_CONFIRMED`

FINITE EVIDENCE ONLY.
UNIVERSAL GOLDBACH PROOF REMAINS OPEN.
A GREEDY COVER CURVE IS A DIAGNOSTIC, NOT A PROOF.

## Question

Does the large-prime killer net look compact, or does coverage require many independent lanes?

## Rows Tested

| row | C | trueK | S29 | unique lanes | greedy lanes | compactness |
|---|---:|---:|---:|---:|---:|---|
| boss row | 3889129261038184 | 13.430940051045 | 582 | 591 | 291 | `DIFFUSE` |
| hot row 1 | 3209851850270339 | 13.201583059795 | 557 | 583 | 276 | `DIFFUSE` |
| hot row 2 | 3209851853146567 | 11.290765689433 | 475 | 512 | 250 | `DIFFUSE` |
| hostile visitor | 59825417609829034 | 13.157604706523 | 657 | 664 | 313 | `DIFFUSE` |
| raw max S29 row | 3268329311518612504 | 11.639244409992 | 706 | 725 | 343 | `VERY_DIFFUSE` |

## Greedy-Lane Decay Curve

| row | top 10 | top 20 | top 50 | top 100 | top 200 | top 291 |
|---|---:|---:|---:|---:|---:|---:|
| boss row | 23.88% | 36.6% | 55.5% | 67.18% | 84.36% | 100% |
| hot row 1 | 22.62% | 34.47% | 54.22% | 68.4% | 86.36% | 100% |
| hot row 2 | 23.58% | 35.79% | 55.16% | 68.42% | 89.47% | 100% |
| hostile visitor | 24.81% | 36.38% | 54.64% | 67.58% | 82.8% | 96.65% |
| raw max S29 row | 22.38% | 33.85% | 52.12% | 65.58% | 79.75% | 92.63% |

## Lane Counts

| row | FOE | HALF-L | HALF-R | BOTH before rescue | top killer lane | top killer prime |
|---|---:|---:|---:|---:|---|---|
| boss row | 394 | 96 | 92 | 0 | `R:p31:g=1 (23)` | `31 (42)` |
| hot row 1 | 391 | 76 | 90 | 0 | `L:p31:g=23 (17)` | `31 (33)` |
| hot row 2 | 334 | 69 | 72 | 0 | `R:p31:g=22 (17)` | `31 (33)` |
| hostile visitor | 465 | 115 | 77 | 0 | `R:p31:g=3 (22)` | `31 (41)` |
| raw max S29 row | 510 | 92 | 104 | 0 | `L:p31:g=0 (20)` | `31 (40)` |

## Interpretation

- Compact would mean top 20 lanes explain most of the S29 survivor kills.
- Diffuse means coverage keeps rising slowly and needs many independent residue lanes.
- The finite proof target is to turn this into a coverage-cost and overlap-loss bound.
- This test does not prove No-Escape; it sharpens what a proof must establish.

## Next Proof Pieces

1. Formalize each killer lane as one periodic residue class on survivor gaps.
2. Prove a coverage-cost lower bound: many lanes are required to cover high-pressure rows.
3. Prove an overlap-loss bound: adding more periodic lanes loses efficiency and cannot persist as a perfect net.

