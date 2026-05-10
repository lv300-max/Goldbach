# GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE

## Verdict

`NO_COMPACT_COVER_FOUND_IN_BOUNDED_SEARCH`

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
BOUNDED NON-GREEDY SEARCH IS STILL NOT A UNIVERSAL PROOF.

## Summary

- runtime: 5.43s
- workers: 16
- tasks: 15
- hiddenCompactCoverFound: NO
- maxAbsoluteGap: 0
- maxPercentGap: 0%

## Per-Task Results

| row | N | survivors | greedy covered | greedy % | best covered | best % | gap | best strategy | hidden compact? |
|---|---:|---:|---:|---:|---:|---:|---:|---|---|
| boss | 20 | 582 | 213 | 36.6% | 213 | 36.6% | 0 | `greedy` | NO |
| boss | 50 | 582 | 323 | 55.5% | 323 | 55.5% | 0 | `greedy` | NO |
| boss | 100 | 582 | 391 | 67.18% | 391 | 67.18% | 0 | `greedy` | NO |
| boss | 150 | 582 | 441 | 75.77% | 441 | 75.77% | 0 | `greedy` | NO |
| boss | 200 | 582 | 491 | 84.36% | 491 | 84.36% | 0 | `greedy` | NO |
| hot1 | 20 | 441 | 162 | 36.73% | 162 | 36.73% | 0 | `greedy` | NO |
| hot1 | 50 | 441 | 241 | 54.65% | 241 | 54.65% | 0 | `greedy` | NO |
| hot1 | 100 | 441 | 299 | 67.8% | 299 | 67.8% | 0 | `greedy` | NO |
| hot1 | 150 | 441 | 349 | 79.14% | 349 | 79.14% | 0 | `greedy` | NO |
| hot1 | 200 | 441 | 399 | 90.48% | 399 | 90.48% | 0 | `greedy` | NO |
| hot2 | 20 | 457 | 167 | 36.54% | 167 | 36.54% | 0 | `greedy` | NO |
| hot2 | 50 | 457 | 254 | 55.58% | 254 | 55.58% | 0 | `greedy` | NO |
| hot2 | 100 | 457 | 316 | 69.15% | 316 | 69.15% | 0 | `greedy` | NO |
| hot2 | 150 | 457 | 366 | 80.09% | 366 | 80.09% | 0 | `greedy` | NO |
| hot2 | 200 | 457 | 416 | 91.03% | 416 | 91.03% | 0 | `greedy` | NO |

## Row Summary

| row | max gap | mean gap | any hidden compact cover? | best N for non-greedy |
|---|---:|---:|---|---:|
| boss | 0 | 0 | NO | 20 |
| hot1 | 0 | 0 | NO | 20 |
| hot2 | 0 | 0 | NO | 20 |

## Read

Bounded non-greedy search did not beat greedy on the tested rows and N values. This strengthens the current finite bridge read, but it still does not prove no compact cover exists universally.

