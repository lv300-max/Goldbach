# Goldbach Distributed Rescue Framework

Start here for review: CURRENT_STATUS.md, CANONICAL_EQUATIONS_AND_LEMMAS.md, THEOREM_STACK.md, REVIEWER_FIRST.md, REVIEWER_QA.md, RESCUE_LEMMA.md, ANALYTIC_LOWER_BOUND_TARGET.md, ANALYTIC_PROOF_FRONTIER.md, WHAT_REMAINS.md

**Status:** finite computational evidence and proof-direction research.  
**Universal proof status:** open.  
**Main missing theorem:** the Rescue Lemma.

```text
FRAMEWORK VALID
FINITE EVIDENCE STRONG
RESCUE LEMMA OPEN
UNIVERSAL PROOF NOT CLAIMED
```

This repository studies Goldbach's conjecture through a mirror-center framework. For an even number `E = 2C`, the search is rewritten around the center `C` by testing mirror gaps `g`:

```text
E = (C - g) + (C + g)
```

A Goldbach pair is found when both `C - g` and `C + g` are prime.

---

## The core target

The framework reduces the universal problem to one analytic statement:

```text
Rescue Lemma

There exist constants K > 0 and C0 such that for every C >= C0,
there exists an integer g with

0 <= g <= K log^2(C)

such that C - g and C + g are both prime.
```

If this lemma is proven, then every sufficiently large even number has a Goldbach pair. Smaller centers can then be handled by finite verification.

---

## Current safe claim

```text
Every even number E = 2C can be tested through mirror gaps g.
A Goldbach pair appears when C-g and C+g are both prime.
Define:
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)

The universal proof target is the Rescue Lemma:
There exist constants K > 0 and C0 such that, for every C >= C0,
S(C, floor(K log^2(C))) >= 1.

Finite tests strongly support this target. The current finite raw packet records
one known `K=8.25` breach at `C = 435067631`, while `K=10` had zero misses in
the completed adversarial tests so far. Small-prime covering walls did not fully
cover the tested windows, and BOTH-hit density thinned with scale but stayed
positive in the tested samples.

The proof is not complete. Brun-Titchmarsh cannot prove the Rescue Lemma
because it is an upper-bound tool, while the framework needs a lower bound.
The remaining analytic wall is to prove that the survivor gaps left after
local congruence obstructions contain at least one true BOTH-prime hit inside
the K log^2(C) mirror window.
```

This repository does **not** claim a completed proof of Goldbach.

---

## What has been found computationally

The current workbench evidence suggests:

- Goldbach rescue does not appear to rely on one residue lane.
- Low-pressure rows spread across many residue lanes.
- High-pressure rows narrow into fewer lanes, but still use many rescue lanes.
- First-rescue gap pressure `K = g / log^2(C)` stayed below the tested ceiling in sampled ranges.
- Finite base checks below the selected cutoff passed in the local test run.
- The open wall remains an analytic proof of the Rescue Lemma for all large `C`.

---

## Repository map

| File | Purpose |
|---|---|
| `CURRENT_STATUS.md` | Current readiness percentages, proof gap, and reproducibility artifacts |
| `CANONICAL_EQUATIONS_AND_LEMMAS.md` | Standard notation and Lemmas 1-5 in one canonical packet |
| `THEOREM_STACK.md` | The lemma-by-lemma framework |
| `WHAT_REMAINS.md` | The exact missing universal proof step |
| `ANALYTIC_PROOF_FRONTIER.md` | Strongest current analytic proof attempt and why it remains open |
| `VALIDATION_SUMMARY.md` | Finite computational evidence summary |
| `RAW_RESULTS_SUMMARY.md` | Pattern findings from raw number tests |
| `scripts/test_finite_base.py` | Reproducible finite base checker |

---

## One-sentence version

Goldbach is reframed as a mirror-prime rescue problem: every even number `E = 2C` is rescued if some bounded gap `g` makes both `C-g` and `C+g` prime; finite evidence is strong, but the universal Rescue Lemma remains analytically open.
