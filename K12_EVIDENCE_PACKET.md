# K12 Evidence Packet

Safe status: finite raw evidence only. This packet does not prove Goldbach and does not prove the Rescue Lemma analytically.

```text
CURRENT FINITE CANDIDATE CEILING: K = 12
K=8.25: broken in finite adversarial data
K=10: broken in finite adversarial data
K=12: held in completed K-window packets so far
UNIVERSAL PROOF STATUS: OPEN
```

## Core Quantity

For `E = 2C` and window `W`, define:

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g)
S(C,W) = sum_{0 <= g <= W} BOTH_C(g)
W_K = floor(K log^2(C))
```

The finite K-window tests ask whether:

```text
S(C, W_K) >= 1
```

for each tested center.

## Completed K-Window Packets

| Packet | Scope | Rows | missK825 | missK10 | missK12 | Highest trueK |
|---|---|---:|---:|---:|---:|---:|
| Global coprime sweep | 92,160 coprime residues mod 510510, k=1->100 | 9,216,000 | 33 | 2 | 0 | 10.535772 |
| Hardest-residue octave replay | residues 256769 and 105619, k=1->100000 | 200,000 | 3 | 2 | 0 | 10.535772 |
| Top-100 K12 breach hunter | top 100 hardest residues, k=1->10000 | 1,000,000 | 37 | 2 | 0 | 10.535772 |

These scopes overlap. The miss counts are packet counts, not unique global counts.

## Hardest Exact Rows

| Rank | Residue | k | C | E | firstBothG | trueK | passK12 | totalBothHitsK12 |
|---:|---:|---:|---:|---:|---:|---:|---|---:|
| 1 | 256769 | 66 | 33,950,429 | 67,900,858 | 3,168 | 10.535772 | true | 4 |
| 2 | 105619 | 53 | 27,162,649 | 54,325,298 | 2,982 | 10.177343 | true | 2 |
| 3 | 491009 | 33 | 17,337,839 | 34,675,678 | 2,700 | 9.717976 | true | 4 |
| 4 | 203387 | 54 | 27,770,927 | 55,541,854 | 2,814 | 9.579168 | true | 2 |

## Lower-Bound Pressure Probe

The K=12 lower-bound pressure probe measured the actual count `S(C,W)` in sampled rows.

```text
Rows: 4,500
zeroBothRows: 0
min S(C,W): 5
avg S(C,W): about 23.95
p5 S(C,W): 12
min actual/HL ratio: about 0.315
p5 actual/HL ratio: about 0.695
```

This supports the target numerically but does not prove the needed lower bound.

## Safe Interpretation

The completed finite packets say:

```text
K=8.25 and K=10 are not safe finite ceilings.
K=12 is the current finite candidate ceiling.
No tested row in these packets missed K=12.
The universal proof remains open.
```

## Remaining Analytic Wall

To turn this into proof, one still needs to prove:

```text
S(C, floor(K log^2(C))) >= 1
```

for every sufficiently large `C`, with an analytically fixed `K`.
