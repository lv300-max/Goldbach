# Goldbach Distributed Rescue Framework

**Status:** finite computational evidence and proof-direction research.  
**Universal proof status:** open.  
**Main missing theorem:** the Rescue Lemma.

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
Finite tests strongly support the Rescue Lemma target,
but a universal analytic proof is still required.
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
| `THEOREM_STACK.md` | The lemma-by-lemma framework |
| `WHAT_REMAINS.md` | The exact missing universal proof step |
| `VALIDATION_SUMMARY.md` | Finite computational evidence summary |
| `RAW_RESULTS_SUMMARY.md` | Pattern findings from raw number tests |
| `scripts/test_finite_base.py` | Reproducible finite base checker |

---

## One-sentence version

Goldbach is reframed as a mirror-prime rescue problem: every even number `E = 2C` is rescued if some bounded gap `g` makes both `C-g` and `C+g` prime; finite evidence is strong, but the universal Rescue Lemma remains analytically open.
