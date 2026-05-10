# GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT

## Verdict

`FINITE_UNCOVERED_SURVIVORS_SHOW_PARTIAL_CLUSTERING`

FINITE EVIDENCE ONLY.
UNIVERSAL GOLDBACH PROOF REMAINS OPEN.
UNCOVERED-SURVIVOR AUDITS ARE DIAGNOSTIC EVIDENCE, NOT A PROOF.

Filter: `P=29`, audit cutoff: top `291` greedy lanes.

## Rows Audited

| row | C | trueK | S29 | greedy lanes | uncovered after top 291 | uncovered % of S29 |
|---|---:|---:|---:|---:|---:|---:|
| hostile visitor | 59825417609829034 | 13.157604706523 | 657 | 313 | 22 | 3.35% |
| raw max S29 row | 3268329311518612504 | 11.639244409992 | 706 | 343 | 52 | 7.37% |

## hostile visitor

- Source reason: `hostile-crt:boss:m4`
- DMV: `L|31/D0/P29_BOSS/TAIL_STRONG/K13`
- Uncovered survivors: 22
- Share of S29: 3.35%

Top g mod 30:
- 15: 11
- 27: 6
- 3: 5

Top g mod 210:
- 195: 5
- 15: 3
- 147: 2
- 165: 2
- 183: 2
- 27: 2
- 123: 1
- 3: 1
- 45: 1
- 57: 1
- 63: 1
- 87: 1

Side states:
- HALF_L: 22

Left factor bands:
- prime: 22

Right factor bands:
- 100-999: 6
- 1k-9k: 6
- 10k-99k: 5
- 100k-999k: 3
- 1M+: 2

Factor-band pairs:
- prime/100-999: 6
- prime/1k-9k: 6
- prime/10k-99k: 5
- prime/100k-999k: 3
- prime/1M+: 2

## raw max S29 row

- Source reason: `hostile-crt:boss:m5`
- DMV: `L|L/D6/P29_BOSS/TAIL_STRONG/K10`
- Uncovered survivors: 52
- Share of S29: 7.37%

Top g mod 30:
- 27: 20
- 15: 18
- 3: 14

Top g mod 210:
- 27: 7
- 153: 5
- 195: 5
- 207: 5
- 57: 5
- 165: 4
- 105: 3
- 15: 3
- 45: 3
- 63: 3
- 123: 2
- 183: 2

Side states:
- HALF_L: 45
- FOE: 6
- HALF_R: 1

Left factor bands:
- prime: 45
- 100k-999k: 3
- 1M+: 2
- 100-999: 1
- 10k-99k: 1

Right factor bands:
- 100-999: 13
- 1k-9k: 13
- 1M+: 13
- 100k-999k: 6
- 10k-99k: 6
- prime: 1

Factor-band pairs:
- prime/100-999: 12
- prime/1M+: 11
- prime/1k-9k: 10
- prime/100k-999k: 6
- prime/10k-99k: 6
- 100k-999k/1k-9k: 2
- 100-999/1M+: 1
- 100k-999k/100-999: 1
- 10k-99k/prime: 1
- 1M+/1k-9k: 1
- 1M+/1M+: 1

## Interpretation

- If uncovered survivors collapse into one tiny residue pocket, the no-cover bridge is weaker.
- If they stay spread across many residues and factor-size bands, the no-cover bridge is stronger.
- This audit measures that spread on the strongest currently known leftover rows.

## Next 3

1. Build a marginal-gain decay table from the long-run packet as a standalone theorem artifact.
2. Turn uncovered survivor spread into a lower bound on the number of independent killer residues still needed after top 291 lanes.
3. Write the overlap-loss theorem note that formalizes why these leftovers matter.

