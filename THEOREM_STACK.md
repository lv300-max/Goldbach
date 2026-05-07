# Theorem Stack

This file follows the canonical notation in `CANONICAL_EQUATIONS_AND_LEMMAS.md`.
It is a theorem-chain map, not a completed proof of Goldbach.

## Main Theorem Target

Goldbach's conjecture says:

```text
For every even integer E >= 4, there exist primes p and q such that E = p + q.
```

## Canonical Setup

Write:

```text
E = 2C
```

For a mirror gap `g >= 0`, define:

```text
L_C(g) = C - g
R_C(g) = C + g
```

Then:

```text
L_C(g) + R_C(g) = (C - g) + (C + g) = 2C = E.
```

Define:

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g)
```

and:

```text
S(C,W) = sum_{0 <= g <= W} BOTH_C(g).
```

Thus `S(C,W) >= 1` means at least one mirror Goldbach pair appears inside
the window `0 <= g <= W`.

## Lemma 1 — Mirror Identity

For every even integer `E = 2C` and every integer `g`,

```text
(C - g) + (C + g) = E.
```

**Status:** PROVEN by algebra.

## Lemma 2 — BOTH-Hit Definition

For every center `C` and gap `g >= 0`,

```text
BOTH_C(g) = 1
```

if and only if `C-g` and `C+g` are both prime. Otherwise `BOTH_C(g)=0`.

Equivalently:

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g).
```

**Status:** DEFINITION.

## Lemma 3 — Goldbach Equivalence

For an even integer `E = 2C`, Goldbach holds for `E` if and only if there
exists an integer `g >= 0` such that:

```text
BOTH_C(g) = 1.
```

Equivalently, Goldbach holds for `E` if and only if:

```text
S(C,W) >= 1
```

for some finite `W`.

**Status:** PROVEN from Lemma 1 and Lemma 2.

## Lemma 4 — Rescue Lemma

There exist constants `K > 0` and `C0` such that for every `C >= C0`,

```text
S(C, floor(K log^2(C))) >= 1.
```

Equivalently, every sufficiently large center `C` has some integer `g`
satisfying:

```text
0 <= g <= K log^2(C)
```

and:

```text
BOTH_C(g) = 1.
```

**Status:** ANALYTIC OPEN; computationally supported.

This is the central universal proof wall.

## Lemma 5 — Finite Base Lemma

For the selected cutoff `C0`, every center `C` with:

```text
2 <= C < C0
```

has some integer `g >= 0` such that:

```text
BOTH_C(g) = 1.
```

**Status:** FINITE VERIFIED in the local reported run.

Recorded finite-base run:

```text
Working cutoff: C0 = 100000
Centers tested: 99,998
Decompositions found: 99,998
Failures: 0
Max gap observed: 720
Max K ratio: 5.804285512131998
```

## Conditional Theorem

If Lemma 4 is proven analytically and Lemma 5 is verified for the chosen
cutoff `C0`, then Goldbach follows for every even integer `E >= 4`.

Proof chain:

```text
Lemma 1 + Lemma 2 -> mirror pair identity and BOTH-hit definition.
Lemma 3 -> Goldbach is equivalent to existence of a BOTH-hit.
Lemma 5 -> covers 2 <= C < C0.
Lemma 4 -> covers C >= C0.
Therefore all even E = 2C >= 4 are covered.
```

## Current Finite K Status

The current finite raw evidence records:

```text
K = 8.25 is too small in the completed finite K-window packets.
K = 10 is too small in the completed finite K-window packets.
K = 12 had zero misses in the completed K-window packets so far.
Highest observed trueK = 10.535772 at C = 33950429.
```

This does not set the final analytic constant. A proof must establish a fixed
`K` by theorem, not by finite testing.

## Final Status

```text
THEOREM STACK STANDARDIZED
LEMMA 1: PROVEN
LEMMA 2: DEFINITION
LEMMA 3: PROVEN FROM DEFINITIONS
LEMMA 4: ANALYTIC OPEN
LEMMA 5: FINITE VERIFIED IN LOCAL RUN
FINAL THEOREM: CONDITIONAL ON LEMMA 4
UNIVERSAL PROOF STATUS: OPEN
```
