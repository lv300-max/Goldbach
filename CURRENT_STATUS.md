# Current Status

```text
FRAMEWORK VALID
FINITE EVIDENCE STRONG
RESCUE LEMMA OPEN
UNIVERSAL PROOF NOT CLAIMED
```

## Central Proof Target

For an even number `E = 2C`, mirror gap `g`, and window `W`, define:

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)
```

Rescue Lemma target:

```text
There exist constants K > 0 and C0 such that, for every C >= C0,
S(C, floor(K log^2(C))) >= 1.
```

Current working finite status:

```text
Finite candidate ceiling: K = 12
K=8.25 finite status: broken
K=10 finite status: broken
Highest observed trueK in completed K-window packets: 10.535772
C0 = 100000
```

## Readiness Percentages

| Area | Current | Max Without New Analytic Proof | Missing Item To Reach 100% |
|---|---:|---:|---|
| Equation setup | 99% | 99% | Keep `E=2C`, `L_C(g)`, `R_C(g)`, `BOTH_C(g)`, and `S(C,W)` identical across new docs and engines |
| Lemma structure | 99% | 99% | Treat `CANONICAL_EQUATIONS_AND_LEMMAS.md` as the source of truth for Lemmas 1-5 |
| Finite base / finite testing | 96% | 97% | Add independent deterministic cross-checks from another implementation |
| Raw-number evidence | 96% | 97% | Keep `K12_EVIDENCE_PACKET.md` current as new raw packets finish |
| Adversarial stress testing | 98% | 99% | Continue expanding hardest-residue and covering-wall packets without calling them exhaustive |
| Reviewer-safe wording | 97% | 98% | Keep proof-sounding claims out of reviewer-facing docs |
| Proof-direction clarity | 95% | 96% | State the exact analytic wall in every review document |
| Analytic Rescue Lemma proof | 5-10% | 5-10% | Prove a real lower-bound theorem for `S(C,W)` |
| Universal Goldbach proof | OPEN | OPEN | Opens only if Lemma 4 is proven analytically and the finite base is accepted |
| Overall framework readiness | 94-96% | 96-97% | Documentation, reproducibility, and evidence packaging |
| Overall proof completion | 5-10% | 5-10% | Requires analytic proof of Lemma 4 |

## Current Evidence Snapshot

Finite base:

```text
Artifact: finite_base_run_latest.txt
JSON: finite_base_results.json
Method: deterministic trial division primality
Centers tested: 99,998
Decompositions found: 99,998
Failures: 0
Within K log^2(C): 99,998
Max gap observed: 720
Max K ratio: 5.804285512131998
```

Reviewer data:

```text
Artifact: reviewer_qa_data.json
Command: python3 scripts/generate_reviewer_qa_data.py > reviewer_qa_data.json
Status: JSON validates
```

Lemma 4 proof-pressure:

```text
Artifact: lemma4_sieve_bound_latest.txt
Command: python3 lemma4_sieve_bound.py > lemma4_sieve_bound_latest.txt
Sampled centers: 35
Min E[R]: 7.25
Min actual R: 6
Min admissible: 73
Near misses: none found
Proof status: open
```

Proof roadmap:

```text
Artifact: proof_pressure_roadmap_latest.txt
JSON: proof_pressure_roadmap.json
Command: python3 goldbach_proof_lab.py --proof-roadmap --case-limit 12 --max-e 1000000 --K 8.25 --prime-limit 13 --json proof_pressure_roadmap.json > proof_pressure_roadmap_latest.txt
Next proof target: survivor gaps left after local congruence obstructions must contain a true BOTH-prime hit
Proof status: open
```

Adversarial evidence:

```text
Direct zero-BOTH hunter: zeroBothRows = 0 in tested samples
K=8.25 finite status: broken
K=10 finite status: broken
K=12 misses in completed K-window packets: 0
Highest observed trueK: 10.535772 at C = 33950429
Covering-wall search: anyFullCoverWall = false in reported summary
BOTH-hit density: thinned with scale but stayed positive in tested windows
```

K12 evidence packet:

```text
Artifact: K12_EVIDENCE_PACKET.md
Global coprime sweep: 9,216,000 rows, missK12 = 0
Focused hardest-residue replay: 200,000 rows, missK12 = 0
Top-100 hardest-residue hunter: 1,000,000 rows, missK12 = 0
Lower-bound pressure probe: 4,500 rows, zeroBothRows = 0, min S(C,W) = 5
Current finite candidate ceiling: K = 12
Universal proof status: open
```

## Proof Gap

Brun-Titchmarsh cannot prove the Rescue Lemma because it is an upper-bound
tool, while the framework needs a lower bound for:

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)
```

The remaining analytic wall is:

```text
Prove that the survivor gaps left after local congruence obstructions contain
at least one true BOTH-prime hit inside a K log^2(C) mirror window.
```

Equivalently:

```text
S(C, floor(K log^2(C))) >= 1
```

for every sufficiently large `C`.

## Requirements To Reach 100%

To move the Analytic Rescue Lemma proof from `5-10%` to `100%`, one of these
must be proven.

Direct lower bound:

```text
S(C, floor(K log^2(C))) >= 1
```

for all sufficiently large `C`.

Weighted lower bound:

```text
sum_{0 <= g <= W} Lambda(C-g)Lambda(C+g) > 0
```

with an error term small enough to force an actual BOTH-prime pair.

Survivor-to-prime theorem:

```text
The survivor gaps left after local congruence obstructions contain at least
one true BOTH-prime hit inside K log^2(C).
```

Short-window circle-method theorem with pointwise control:

```text
S(C,W) = SingularSeries(2C) * W/log^2(C) + Error(C,W)
```

and:

```text
|Error(C,W)| < Main(C,W)
```

uniformly for every sufficiently large `C`.

## Safe Final Statement

```text
Goldbach Distributed Rescue Framework:
Every even number E = 2C can be tested through mirror gaps g.
A Goldbach pair appears when C-g and C+g are both prime.
Finite tests strongly support that a BOTH-hit appears inside K log^2(C).
The universal proof remains open until the Rescue Lemma is proven analytically.
```
