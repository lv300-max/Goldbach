# Rescue Lemma

## Status

```text
COMPUTATIONALLY SUPPORTED
ANALYTIC PROOF OPEN
UNIVERSAL PROOF WALL
```

This document states the central missing theorem in the Goldbach Distributed Rescue Framework.

---

## Setup

Let `E` be an even integer greater than `2`.

Write:

```text
E = 2C
```

where `C` is the center of the even number.

For an integer mirror gap `g >= 0`, define the mirror pair:

```text
left  = C - g
right = C + g
```

Then:

```text
left + right = (C - g) + (C + g) = 2C = E
```

So `E` has a Goldbach decomposition exactly when there exists some `g` such that both `C - g` and `C + g` are prime.

---

## Definition — BOTH-hit

Define:

```text
BOTH_C(g) = 1
```

if both of the following are true:

```text
C - g is prime
C + g is prime
```

Otherwise:

```text
BOTH_C(g) = 0
```

A BOTH-hit is also called a mirror-prime rescue.

---

## Rescue Lemma

There exist constants `K > 0` and `C0` such that for every center `C >= C0`,

```text
S(C, floor(K log^2(C))) >= 1.
```

Equivalently, there exists an integer `g` satisfying:

```text
0 <= g <= K log^2(C)
```

and:

```text
BOTH_C(g) = 1
```

Equivalently:

```text
C - g and C + g are both prime.
```

---

## Plain meaning

Every sufficiently large center `C` must be rescued by a prime mirror pair within a bounded `log^2(C)` distance.

In simpler words:

```text
No large even number can stay in a mirror-prime desert longer than K log^2(C).
```

---

## Why this lemma matters

If the Rescue Lemma is proven, then every sufficiently large even number `E = 2C` has a Goldbach pair:

```text
E = (C - g) + (C + g)
```

where both parts are prime.

All smaller centers below `C0` can then be covered by finite verification.

Together:

```text
Rescue Lemma for C >= C0
+
Finite Base Lemma for C < C0
=
Goldbach for every even E > 2
```

---

## Current evidence

The workbench has produced finite computational support for the Rescue Lemma target, including:

```text
- mirror-prime rescue searches across large sampled bands
- K = g / log^2(C) pressure tracking
- high-K row anatomy
- BOTH-desert and half-hit/spark tracking
- finite base verification below the selected cutoff
- one known K=8.25 finite breach at C = 435067631
- zero K=10 misses in the completed adversarial tests so far
```

Reported finite evidence includes validation through sampled ranges up to `10^12`,
with no universal proof claim.

---

## Important limitation

Finite validation is not a universal proof.

The missing step is an analytic argument proving that the Rescue Lemma holds for every `C >= C0`, not only for tested values.

A possible proof shape would be:

```text
Actual BOTH-hits = Expected BOTH-hits ± Error
```

and then prove:

```text
Error < Expected
```

which forces:

```text
Actual BOTH-hits > 0
```

This would guarantee at least one mirror-prime rescue.

---

## Safe claim

```text
The Rescue Lemma is the central open analytic target of this framework.
Finite tests strongly support it, but a universal proof remains open.
```

---

## Unsafe claims to avoid

Do not claim:

```text
"Goldbach is universally proven."
"The Rescue Lemma is analytically proven."
"Finite validation alone proves the theorem."
```

Use instead:

```text
The Rescue Lemma is computationally supported and analytically open.
```
