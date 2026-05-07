# FINITE RAW EVIDENCE STATUS

| Field | Value |
|---|---|
| Rows/copies tested | 169,501 |
| K=8.25 breaches | 1 unique row |
| Known breach C | 435,067,631 |
| Known trueK | 8.370985 |
| K=10 misses | 0 |
| K=12 misses | 0 |
| K=16 misses | 0 |
| K=20 misses | 0 |
| Candidate finite ceiling | K = 10 |
| Adversarial evidence | 100% |
| Universal proof | 5% |

## Best Label

**FINITE RAW K10 RESCUE EVIDENCE**

## Safe Sentence

Across the completed finite raw adversarial tests, K=10 had zero misses, while K=8.25 had one known breach at C=435,067,631.

## One-Line Version

Finite raw testing says K=8.25 is too small, but K=10 survived every completed adversarial test so far.

## Tests Completed

| Test | Description | Rows | missesK825 | missesK10 |
|---|---|---|---|---|
| T1 | Exact state known breach C=435,067,631 | 1 | 1 | 0 |
| T2 | Residue 113111 k=1→50,000 (M=510510) | 50,000 | 1 | 0 |
| T3 | All 10 danger residues k=1→10,000 | 100,000 | 1 | 0 |
| T4 | Random band sweep 10⁵→10¹² | 19,500 | 0 | 0 |

*Note: The 3 totalMissesK825 in the scorecard count C=435,067,631 once per test scope (T1, T2, T3). It is the same single row.*

## Known Breach Full Record

```
C          = 435,067,631
E          = 870,135,262
log²(C)    = 395.652360
W825       = 3,264
W10        = 3,956
firstBothG = 3,312
trueK      = 8.370985
passK825   = FALSE
passK10    = TRUE
checksum   = 7703e3bb
```

## Proof Status

- **Finite adversarial evidence readiness:** 100%
- **Universal proof status:** OPEN
- **Analytic wall:** No unconditional lower bound for primes in O(log²C) length intervals exists with current techniques.

---

FINITE ADVERSARIAL EVIDENCE ONLY. UNIVERSAL PROOF STATUS: OPEN.
