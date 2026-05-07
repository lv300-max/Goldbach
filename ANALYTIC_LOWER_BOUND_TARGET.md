# Analytic Lower Bound Target

This document states the exact missing wall. It is not a proof.

## Target Count

For an even number `E = 2C`, define the mirror-prime count

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)
```

where

```text
W = floor(K log^2(C)).
```

The Rescue Lemma would follow from the pointwise lower bound

```text
S(C, floor(K log^2(C))) > 0
```

for every sufficiently large `C`.

## Required Theorem

There exist constants `K > 0` and `C0` such that for every `C >= C0`,

```text
S(C, floor(K log^2(C))) >= 1.
```

Equivalently, at least one mirror gap `g` in the window makes both `C-g`
and `C+g` prime.

## Why Separate One-Sided Bounds Do Not Close It

Let

```text
A = {0 <= g <= W : C-g is prime}
B = {0 <= g <= W : C+g is prime}
```

Finite data suggests `|A|` and `|B|` are often about `K log(C)` when
`W = K log^2(C)`. But the ambient window has size about `K log^2(C)`.
Therefore

```text
|A| + |B| << W
```

for large `C`, so pigeonhole alone cannot force `A ∩ B` to be nonempty.

The needed object is the intersection count:

```text
|A ∩ B| = S(C,W).
```

## Important Correction

Brun-Titchmarsh gives upper bounds for prime counts in intervals and arithmetic
progressions. It is not the lower bound needed to force mirror-prime pairs in
every specific `log^2(C)`-length window.

In particular, Brun-Titchmarsh does not prove

```text
S(C, K log^2(C)) > 0
```

and does not prove the Rescue Lemma.

## Heuristic Main Term

The expected shape is

```text
S(C,W) = Main(C,W) + Error(C,W)
```

with

```text
Main(C,W) ~= SingularSeries(2C) * W / log^2(C).
```

For `W = K log^2(C)`, this becomes approximately

```text
Main(C,W) ~= SingularSeries(2C) * K.
```

This explains why the finite workbench often sees a stable positive number of
BOTH-hits inside the window.

## Proof Requirement

A valid analytic proof needs a uniform bound of the form

```text
|Error(C,W)| < Main(C,W)
```

for every sufficiently large `C`, or another argument that directly proves

```text
S(C,W) >= 1.
```

This is the current universal proof wall.

## Candidate Routes

Possible routes include:

- a short-window circle method estimate with pointwise error control
- a sieve lower bound strong enough to count two primes, not only survivors
- a weighted estimate such as `sum Lambda(C-g)Lambda(C+g)` with explicit error
- a new argument converting small-prime survivor structure into a guaranteed BOTH-hit

None of these is currently completed in this repository.

## Current Evidence Status

Finite raw-number tests support the target:

- direct zero-BOTH hunting found `zeroBothRows = 0` in earlier broad tested samples
- later K-window packets found finite breaches for `K=8.25` and `K=10`
- `K=12` had zero misses in the completed K-window packets so far
- BOTH-hit density tests found average BOTH-hits around `16-17` in tested windows
- adversarial small-prime covering tests found no full covering wall
- hardest small-prime walls still left survivor gaps and BOTH-hits

Safe interpretation:

```text
Finite evidence is strong.
The analytic lower bound for S(C,W) remains open.
Universal proof status: open.
```
