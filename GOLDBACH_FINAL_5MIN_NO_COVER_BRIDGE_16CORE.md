# GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE

## Verdict

`BOSS_CLUSTER_PERSISTS_BUT_RIGHT_KILLERS_DIFFUSE`

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.

## Global Output

- runtime: 301.556s
- workers: 16
- rowsAnalyzed: 1,083,085
- definitionMismatches: 0
- bossBoundaryPassed: true
- K13.431 misses: 0

## S17/S29 Table

| row | firstBothG | trueK | S17 | S29 | S37 | S41 | K13.430 | K13.431 | K14 |
|---|---:|---:|---:|---:|---:|---:|---|---|---|
| boss | 17307 | 13.430940051045 | 757 | 582 | 512 | 485 | MISS | HIT | HIT |
| hot1 | 13161 | 10.323590888036 | 575 | 441 | 394 | 373 | HIT | HIT | HIT |
| hot2 | 12915 | 10.01919534412 | 561 | 457 | 402 | 382 | HIT | HIT | HIT |
| hostile_visitor | 19635 | 13.157604706523 | 858 | 657 | 577 | 548 | HIT | HIT | HIT |
| raw_max_s29 | 21153 | 11.639244409992 | 921 | 706 | 650 | 614 | HIT | HIT | HIT |

## Greedy Coverage

| row | top20 | top100 | top291 | full cover lanes | compactness |
|---|---:|---:|---:|---:|---|
| boss | 36.6% | 67.18% | 100% | 291 | `DIFFUSE` |
| hot1 | 36.73% | 67.8% | 100% | 242 | `DIFFUSE` |
| hot2 | 36.54% | 69.15% | 100% | 241 | `DIFFUSE` |
| hostile_visitor | 36.38% | 67.58% | 96.65% | 313 | `DIFFUSE` |
| raw_max_s29 | 33.85% | 65.58% | 92.63% | 343 | `DIFFUSE` |

## Leftover Cluster Split

| row | leftovers@200 | leftovers@291 | clusterShare30@200 | HALF-L@200 | unique right killers@200 | max right repeat@200 |
|---|---:|---:|---:|---:|---:|---:|
| boss | 91 | 0 | 100% | 53 | 53 | 1 |
| hot1 | 42 | 0 | 35.71% | 37 | 37 | 1 |
| hot2 | 41 | 0 | 24.39% | 41 | 41 | 1 |
| hostile_visitor | 113 | 22 | 100% | 65 | 65 | 1 |
| raw_max_s29 | 143 | 52 | 100% | 45 | 45 | 1 |

## Reviewer Questions Auto-Answer

- 1. What is the exact theorem statement? For sufficiently large C, S_P(C,W) cannot be fully covered by large-prime left/right killer lanes, so at least one g in S_P(C,W) must be BOTH.
- 2. What is S29 exactly? S29 is the parity-valid gaps g <= W where neither C-g nor C+g is divisible by 2,3,5,7,11,13,17,19,23,29.
- 3. What is a killer lane exactly? A left lane is g ≡ C mod p from C-g ≡ 0 mod p. A right lane is g ≡ -C mod p from C+g ≡ 0 mod p.
- 4. Is this one C, many C, or all C? This run gives exact finite audits on five seed rows plus many focused nearby rows. It is not a universal proof.
- 5. Where is the missing inequality? Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)| is the missing bridge.
- 6. How do we stop infinitely many large primes? That remains open. The finite evidence says future killer lanes stay diffuse and overlap-heavy.
- 7. How do overlaps behave? They grow with lane count and reduce marginal gain. The overlap-waste buckets measure that finitely.
- 8. Why does tail pressure alone not prove BOTH? Because HALF and FOE rows can still dominate without a theorem forcing an uncovered survivor.
- 9. What hostile tests tried to break it? Hostile CRT builders, matched controls, greedy-lane decay, overlap-waste curves, leftover cluster audits, and future escape probes.
- 10. Can someone rebuild this independently? Yes. The script, report, and JSON are deterministic and use locked definitions documented in the packet.

