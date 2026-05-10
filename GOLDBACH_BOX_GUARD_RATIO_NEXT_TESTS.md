# GOLDBACH_BOX_GUARD_RATIO_NEXT_TESTS

## Verdict

`BOX_SPLITTING_AND_GUARD_DIFFUSION_HOLD_IN_NEXT_TESTS`

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
THIS IS A FOLLOWUP TEST SUITE, NOT A PROOF.

## Test 1 - Box-Splitting Growth Curve

| modulus | bucketCount | largestBucketShare |
|---:|---:|---:|
| 30 | 3 | 36.36% |
| 210 | 15 | 9.09% |
| 2310 | 68 | 3.41% |
| 30030 | 88 | 1.14% |
| 510510 | 88 | 1.14% |

## Test 2 - Killer Repeat Growth Curve

| row | HALF-L | unique right killers | max repeat | top10 coverage | top20 coverage | compactness |
|---|---:|---:|---:|---:|---:|---|
| boss | 53 | 53 | 1 | 18.87% | 37.74% | `RIGHT_KILLERS_DIFFUSE` |
| hot1 | 37 | 37 | 1 | 27.03% | 54.05% | `RIGHT_KILLERS_DIFFUSE` |
| hot2 | 41 | 41 | 1 | 24.39% | 48.78% | `RIGHT_KILLERS_DIFFUSE` |

## Test 3 - Box vs Guard Ratio

| modulus | boxCount | maxRightRepeat | boxToRepeatRatio |
|---:|---:|---:|---:|
| 30 | 3 | 1 | 3 |
| 210 | 15 | 1 | 15 |
| 2310 | 68 | 1 | 68 |
| 30030 | 88 | 1 | 88 |
| 510510 | 88 | 1 | 88 |

## Test 4 - Future Right-Cover Bound Probe

| row | leftovers@200 | future escapes | future no-escapes | min future escape distance | escape rate |
|---|---:|---:|---:|---:|---:|
| boss | 91 | 7 | 84 | 4200 | 7.69% |
| hot1 | 42 | 6 | 36 | 3780 | 14.29% |
| hot2 | 41 | 11 | 30 | 3150 | 26.83% |

## Test 5 - Greedy vs Non-Greedy Cover

- verdict: `NO_COMPACT_COVER_FOUND_IN_15MIN_BOUNDED_SEARCH`
- hidden compact cover found: NO
- max absolute gap: 0
- max percent gap: 0%
- total iterations: 3,183,126

## Read

The next tests keep the same bridge shape. Exact boss box counts grow from 3 to 15 to 68 to 88 to 88, largest bucket share collapses from 36.36% to 1.14%, right-killer repeat stays at 1, future right-cover probes already find short escapes, and the 15-minute bounded search still finds no hidden compact cover.

