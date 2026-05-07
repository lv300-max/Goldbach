# FINITE RAW EVIDENCE STATUS

| Field | Value |
|---|---|
| Current finite candidate ceiling | K = 12 |
| K=8.25 status | Broken in finite adversarial tests |
| K=10 status | Broken in finite adversarial tests |
| K=12 status | Held in completed finite packets below |
| K=16 status | Held in completed finite packets below |
| K=20 status | Held in completed finite packets below |
| Highest trueK observed in K-window packets | 10.535772 |
| Hardest observed center | C = 33,950,429 |
| Hardest observed even number | E = 67,900,858 |
| Universal proof | OPEN |

## Best Label

**FINITE RAW K12 RESCUE EVIDENCE**

## Safe Sentence

Across the completed finite raw K-window packets listed here, K=12 had zero misses. K=8.25 and K=10 both had finite breaches, so they should not be described as the current ceiling.

## One-Line Version

Finite raw testing says K=8.25 and K=10 are too small in the tested adversarial data, while K=12 survived the completed K-window packets so far.

## Tests Completed

| Test | Description | Rows | missesK825 | missesK10 | missesK12 | Highest trueK |
|---|---|---:|---:|---:|---:|---:|
| T1 | Global coprime sweep, k=1->100 over 92,160 residues mod 510510 | 9,216,000 | 33 | 2 | 0 | 10.535772 |
| T2 | Focused octave replay of the two hardest residues, k=1->100,000 | 200,000 | 3 | 2 | 0 | 10.535772 |
| T3 | Top-100 hardest-residue K12 breach hunter, k=1->10,000 | 1,000,000 | 37 | 2 | 0 | 10.535772 |
| T4 | Lower-bound pressure probe, K=12 sampled rows | 4,500 | n/a | n/a | 0 | n/a |

Notes:

- These test scopes overlap, so miss counts should not be added as unique counterexamples.
- The K=12 claim here is finite raw evidence only, not a universal theorem.

## Hardest Observed Rows

| Rank | Residue | k | C | E | firstBothG | trueK | K12 BOTH-hits |
|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | 256769 | 66 | 33,950,429 | 67,900,858 | 3,168 | 10.535772 | 4 |
| 2 | 105619 | 53 | 27,162,649 | 54,325,298 | 2,982 | 10.177343 | 2 |
| 3 | 491009 | 33 | 17,337,839 | 34,675,678 | 2,700 | 9.717976 | 4 |
| 4 | 203387 | 54 | 27,770,927 | 55,541,854 | 2,814 | 9.579168 | 2 |

## Lower-Bound Pressure Probe

The K=12 lower-bound pressure probe sampled 4,500 rows and found:

```text
zeroBothRows = 0
min S(C,W) = 5
avg S(C,W) ~= 23.95
p5 S(C,W) = 12
min actual/HL ratio ~= 0.315
```

This is evidence about the target quantity `S(C,W)`, not a proof of a lower bound.

## Proof Status

- **Finite K12 evidence readiness:** strong
- **Universal proof status:** OPEN
- **Analytic wall:** no unconditional lower bound is proven for `S(C, floor(K log^2(C)))` in every sufficiently large center.

---

FINITE ADVERSARIAL EVIDENCE ONLY. UNIVERSAL PROOF STATUS: OPEN.
