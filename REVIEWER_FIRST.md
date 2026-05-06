# Reviewer First Summary

## Safe claim

This repository does **not** claim a completed proof of Goldbach's conjecture.

It presents a computational proof-direction framework that reduces the project to one central open analytic target: the Rescue Lemma.

```text
Finite evidence: strong
Rescue Lemma: computationally supported
Universal analytic proof: open
```

---

## Main theorem target

Goldbach's conjecture says:

```text
Every even integer E > 2 is the sum of two primes.
```

This framework writes every even number as:

```text
E = 2C
```

and searches mirror gaps `g` around the center `C`:

```text
E = (C - g) + (C + g)
```

A Goldbach pair is found when both `C - g` and `C + g` are prime.

---

## Central open lemma

```text
Rescue Lemma

There exist constants K > 0 and C0 such that for every C >= C0,
there exists an integer g with

0 <= g <= K log^2(C)

such that C - g and C + g are both prime.
```

If the Rescue Lemma is proven analytically, then all sufficiently large even numbers are covered. All smaller centers can be handled by finite verification.

---

## Lemma stack status

| Item | Statement | Status |
|---|---|---|
| Lemma 1 | `(C-g) + (C+g) = 2C` | proven by algebra |
| Lemma 2 | `BOTH_C(g)=1` means both mirror values are prime | definition |
| Lemma 3 | Goldbach for `E=2C` iff some `BOTH_C(g)=1` | follows from Lemmas 1–2 |
| Lemma 4 | Rescue Lemma: a BOTH-hit exists within `K log^2(C)` for all large `C` | analytic open |
| Lemma 5 | finite base below cutoff | finite verified in reported run |

---

## Reported finite evidence

Reported finite-base run:

```text
Centers tested: 99,998
Decompositions found: 99,998
Failures: 0
Max gap observed: 720
Max K ratio: 5.804
```

Reported scale-validation summary:

```text
Sampled bands: 10^5 through 10^12
Observed failures: 0 in reported runs
Max observed K: 6.327 in reported scale validation
Selected test ceiling: around K = 8.0 to 8.25
```

These are finite computations only. They support the target but do not prove it universally.

---

## Main observed pattern

The workbench suggests:

```text
Goldbach rescue does not appear to rely on one residue lane.
Low-pressure rows spread across many lanes.
High-pressure rows narrow into fewer lanes, but still use many rescue lanes.
The main hardness driver appears to be first-rescue gap size.
```

Short label:

```text
Goldbach Distributed Rescue Framework
```

---

## What remains

The unresolved step is to prove, for every sufficiently large center `C`, that no mirror-prime desert can last longer than a bounded `K log^2(C)` distance.

A possible analytic shape is:

```text
Actual BOTH-hits = Expected BOTH-hits ± Error
```

and then show:

```text
Error < Expected
```

which forces:

```text
Actual BOTH-hits > 0
```

---

## What a reviewer should check first

1. Is the Rescue Lemma stated correctly and clearly?
2. Does Lemma 3 correctly reduce Goldbach to the existence of a BOTH-hit?
3. Is the finite-base checker reproducible and free of primality bugs?
4. Do the validation summaries avoid overclaiming?
5. Is there any known theorem that can imply the Rescue Lemma, or is a new analytic argument required?

---

## Current conclusion

```text
The theorem stack is coherent.
The finite evidence is strong.
The universal proof remains open until the Rescue Lemma is proven analytically.
```
