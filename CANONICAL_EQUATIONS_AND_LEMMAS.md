# Canonical Equations And Lemmas

Safe status: this file standardizes the framework notation and theorem chain.
It does not prove Goldbach. The analytic Rescue Lemma remains open.

## Canonical Notation

For every even integer `E >= 4`, write:

```text
E = 2C
```

where `C` is the mirror center.

For an integer mirror gap `g >= 0`, define:

```text
L_C(g) = C - g
R_C(g) = C + g
```

The mirror identity is:

```text
L_C(g) + R_C(g) = (C - g) + (C + g) = 2C = E.
```

Define the BOTH-hit indicator:

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g)
```

Equivalently:

```text
BOTH_C(g) = 1  iff  C-g and C+g are both prime.
BOTH_C(g) = 0  otherwise.
```

For a window `W >= 0`, define the mirror-prime count:

```text
S(C,W) = sum_{0 <= g <= W} BOTH_C(g)
       = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g).
```

Thus:

```text
S(C,W) >= 1
```

means at least one Goldbach mirror pair appears inside the window `0 <= g <= W`.

## Lemma 1 — Mirror Identity

For every even integer `E = 2C` and every integer `g`,

```text
(C - g) + (C + g) = E.
```

Status: PROVEN by algebra.

## Lemma 2 — BOTH-Hit Definition

For every center `C` and gap `g >= 0`,

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g).
```

Status: DEFINITION.

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

Status: PROVEN from Lemma 1 and Lemma 2.

## Lemma 4 — Rescue Lemma

There exist constants `K > 0` and `C0` such that for every `C >= C0`,

```text
S(C, floor(K log^2(C))) >= 1.
```

Equivalently, every sufficiently large center `C` has some integer `g` with:

```text
0 <= g <= K log^2(C)
```

and:

```text
BOTH_C(g) = 1.
```

Status: ANALYTIC OPEN; computationally supported.

This is the central proof wall.

## Lemma 5 — Finite Base Lemma

For the chosen cutoff `C0`, every center `C` with:

```text
2 <= C < C0
```

has some integer `g >= 0` such that:

```text
BOTH_C(g) = 1.
```

Status: FINITE VERIFIED in the local reported run for working cutoff
`C0 = 100000`.

## Conditional Theorem Chain

The chain is:

```text
Lemma 1 + Lemma 2 -> mirror pair identity and BOTH-hit definition.
Lemma 3 -> Goldbach is equivalent to existence of a BOTH-hit.
Lemma 5 -> checked finite base below C0.
Lemma 4 -> would cover every C >= C0.
```

Therefore:

```text
Lemma 4 + Lemma 5 imply Goldbach for every even E >= 4.
```

Current status:

```text
Lemma 1: PROVEN
Lemma 2: DEFINITION
Lemma 3: PROVEN FROM LEMMAS 1-2
Lemma 4: ANALYTIC OPEN
Lemma 5: FINITE VERIFIED IN LOCAL RUN
Universal proof: OPEN
```

## Current Finite K Status

Finite raw tests currently support this reviewer-safe statement:

```text
K = 8.25 had one known finite breach at C = 435067631.
K = 10 had zero misses in the completed adversarial tests so far.
```

This is finite evidence only. A final proof needs an analytically fixed `K`
and a theorem proving `S(C, floor(K log^2(C))) >= 1` for every sufficiently
large `C`.

## Exact Remaining Wall

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
