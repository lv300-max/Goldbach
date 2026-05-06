# Theorem Stack

## Main theorem target

For every even integer `E > 2`, there exist primes `p` and `q` such that:

```text
E = p + q
```

This is Goldbach's conjecture.

---

## Setup

Let:

```text
E = 2C
```

For an integer mirror gap `g >= 0`, define:

```text
p = C - g
q = C + g
```

Then:

```text
p + q = (C - g) + (C + g) = 2C = E
```

So Goldbach holds for `E` exactly when some `g` makes both mirror numbers prime.

---

## Lemma 1 — Mirror Identity

For every even integer `E = 2C` and every integer `g`:

```text
(C - g) + (C + g) = E
```

**Status:** proven by algebra.

---

## Lemma 2 — BOTH-Hit Definition

Define:

```text
BOTH_C(g) = 1
```

if both `C - g` and `C + g` are prime. Otherwise:

```text
BOTH_C(g) = 0
```

**Status:** definition.

---

## Lemma 3 — Goldbach Equivalence Lemma

For an even integer `E = 2C`, Goldbach holds for `E` if and only if there exists some integer `g >= 0` such that:

```text
BOTH_C(g) = 1
```

**Status:** follows from Lemma 1 and Lemma 2.

---

## Lemma 4 — Rescue Lemma

There exist constants `K > 0` and `C0` such that for every center `C >= C0`, there exists an integer `g` satisfying:

```text
0 <= g <= K log^2(C)
```

and:

```text
BOTH_C(g) = 1
```

**Status:** analytic open; computationally supported in tested ranges.

This is the central universal proof wall.

Plain version: every large center `C` must be rescued by a prime mirror pair inside a bounded `log^2(C)` distance.

---

## Lemma 5 — Finite Base Lemma

For every center `C` with `2 <= C < C0`, there exists an integer `g` such that:

```text
BOTH_C(g) = 1
```

**Status:** finite verified in the local test run.

Recorded finite-base run:

```text
Centers tested: 99,998
Decompositions found: 99,998
Failures: 0
Max gap observed: 720
Max K ratio: 5.804
```

---

## Conditional theorem

If Lemma 4 is proven analytically and Lemma 5 is verified computationally for the chosen cutoff `C0`, then Goldbach's conjecture follows for every even integer `E > 2`.

---

## Final status

```text
THEOREM STACK BUILT
LEMMA 1: PROVEN
LEMMA 2: DEFINITION
LEMMA 3: PROVEN FROM DEFINITIONS
LEMMA 4: ANALYTIC OPEN
LEMMA 5: FINITE VERIFIED
FINAL THEOREM: CONDITIONAL ON LEMMA 4
UNIVERSAL PROOF STATUS: OPEN
```
