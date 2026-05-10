# STRUCTURED LEFTOVER RESIDUE FAMILY NOTE

## Status

TARGET NOTE - NOT PROVEN

This note explains the next proof target after the finite overlap-waste tests.

The current finite evidence shows that large-prime killer lanes are diffuse.
Even after many greedy lanes, some high-pressure rows still leave uncovered survivor gaps.

The next question is:

Can the leftover uncovered survivors form a structured residue family that avoids BOTH forever?

This note says what must be proven.

---

## Setup

Let:

```text
E = 2C
```

For each mirror gap `g`:

```text
left = C - g
right = C + g
```

A BOTH escape occurs when:

```text
C - g is prime
C + g is prime
```

Let:

```text
W = floor(K log^2 C)
```

Let `S_P(C,W)` be the survivor set after filtering all primes `p <= P`.

For `P = 29`:

```text
S29 means g is parity-valid, 1 <= g <= W, and neither C-g nor C+g is divisible by:
2,3,5,7,11,13,17,19,23,29
```

---

## Killer Lanes

A large-prime killer lane is a periodic residue class.

Left killer:

```text
C - g ≡ 0 mod p
```

So:

```text
g ≡ C mod p
```

Right killer:

```text
C + g ≡ 0 mod p
```

So:

```text
g ≡ -C mod p
```

Each killer lane is:

```text
(side, p, residue)
```

Example:

```text
(L, 31, C mod 31)
(R, 31, -C mod 31)
```

---

## Finite Evidence So Far

The greedy lane decay and overlap-waste tests show:

1. Killer nets are diffuse.
2. Top 20 lanes cover only about one-third of survivor gaps.
3. Hundreds of lanes may be needed.
4. Some high-pressure rows still have uncovered survivors after the same number of lanes that covers the boss row.
5. Raw survivor mass alone is misleading.
6. Normalized survivor pressure is more useful.

This supports the Large-Prime No-Cover direction.

But it does not prove it.

Additional finite bridge support from the canonical 16-core packet and the
imported local tie-model packet:

```text
boss top200 leftovers stay 100% inside g mod 30 in {3,15,27}
but the same pocket breaks at mod 210 / 2310 / 30030
and the HALF-L right killers stay diffuse with max repeat 1
```

---

## New Narrower Proof Target

Even if some survivor gaps remain after many killer lanes, a skeptic can ask:

- Maybe the leftover survivors form a special residue family.
- Maybe that family is always killed later by more large-prime lanes.
- Maybe the leftover set persists but never becomes BOTH.

So the next target is:

## Structured Leftover No-Persistence Lemma

For sufficiently large C, any nonempty leftover survivor family inside S_P(C,W) cannot remain permanently covered by later large-prime killer lanes.

Equivalently:

```text
A structured leftover residue family cannot avoid BOTH forever.
```

---

## Why This Matters

The previous No-Cover target was:

```text
large-prime lanes cannot cover all survivors.
```

The sharper target is:

```text
even the leftover structured survivors cannot be perfectly covered forever.
```

This is narrower.

It attacks the exact escape route a counterexample would need.

---

## What A Goldbach Failure Would Require

A Goldbach failure for `E = 2C` would require:

1. Small-prime filters leave survivor gaps.
2. Large-prime killer lanes cover every survivor gap.
3. Any leftover survivors are later covered by more killer lanes.
4. No survivor gap ever becomes BOTH.

So failure requires a perfect infinite covering system.

The proof must show that this covering system cannot persist.

---

## Key Inequality Shape

We need an inequality of the form:

```text
Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)|
```

But after uncovered survivors remain, we need a second inequality:

```text
FutureCoverage(leftover family) - FutureOverlapLoss(leftover family) < |leftover family|
```

This would show at least one leftover survivor remains uncovered.

An uncovered survivor is not killed on the left or right.

So:

```text
C - g is prime
C + g is prime
```

Therefore BOTH occurs.

---

## What Must Be Proven

To prove the Structured Leftover No-Persistence Lemma, we need:

### 1. Leftover Family Definition

Define `L(C,W,P,N)` as the survivor gaps left after the first `N` greedy killer lanes.

Example:

```text
L = S29 survivors not covered by the top 291 killer lanes.
```

### 2. Residue Structure Test

Show whether `L` is concentrated in a few residues or spread across many residues.

If spread out, full future cover becomes expensive.

If concentrated, identify the exact residue family.

### 3. Future Killer Limit

For primes `p > P`, each new lane only covers gaps in one residue class.

The proof needs a bound showing future lanes cannot keep covering every leftover residue forever.

### 4. Overlap-Loss Growth

As more lanes are added, overlaps increase.

The more lanes used, the more coverage is wasted.

This creates pressure against perfect cover.

### 5. Escape Condition

If any leftover survivor is not covered by a left or right killer, it is BOTH.

That gives Goldbach for that `E`.

---

## Boss Bridge Corroboration

The canonical final bridge packet gives:

```text
top200 leftovers = 91
clusterShare30 = 100%
clusterBreaksAt210 = true
clusterBreaksAt2310 = true
clusterBreaksAt30030 = true
HALF-L leftovers = 53
unique right killers = 53
max right-killer repeat = 1
```

An imported local tie-model packet gives the same shape with different counts:

```text
top200 leftovers = 88
clusterShare30 = 100%
mod210 bucket count = 15
mod2310 bucket count = 68
mod30030 bucket count = 88
mod510510 bucket count = 88
HALF-L leftovers = 27
unique minimum right killers = 27
max right-killer repeat = 1
```

Read:

```text
the mod-30 cluster is shallow
the deeper bucket structure explodes
the right-side killer net stays diffuse
```

Locked statement:

```text
BOSS_MOD30_CLUSTER_BREAKS_INTO_MANY_HIGHER_MOD_BUCKETS_AND_RIGHT_KILLERS_DIFFUSE
```

This does not prove the theorem. It sharpens the exact obstruction that a
future overlap-loss bound must defeat.

---

## Current Proof Status

Finite evidence supports the target.

Universal proof is still open.

The missing bridge is:

```text
show that structured leftover residue families cannot be perfectly covered forever by later large-prime killer lanes.
```

---

## Reviewer-Safe Claim

The current work does not prove Goldbach.

It formalizes the Large-Prime No-Cover target and provides finite evidence that killer coverage is diffuse, overlap-heavy, and expensive.

The next proof step is to prove that any leftover survivor family after greedy killer coverage cannot persist as a permanent no-BOTH residue structure.

---

## Next Tests

1. Uncovered Survivor Residue Audit
   Study the 22 and 52 leftover survivors from the hostile/raw-max rows.
2. Leftover Family Mod Profile
   Compute residues of leftover survivors modulo 31,37,41,43,47,53,59,61.
3. Future Killer Simulation
   Add next prime killer lanes after top 291 and measure whether coverage becomes more efficient or more wasteful.
4. Leftover Escape Search
   Check whether leftover survivors become BOTH shortly after the tested window.
5. Lemma Draft
   Try to prove that leftover coverage requires too many independent lanes with growing overlap loss.
