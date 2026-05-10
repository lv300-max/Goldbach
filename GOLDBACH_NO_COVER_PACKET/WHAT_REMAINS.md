# What Remains

Universal proof: OPEN.

## Current Open Target

The active missing theorem is:

```text
Large-Prime No-Cover Lemma
```

The next narrower note is:

```text
Structured Leftover No-Persistence Lemma
```

After small-prime filtering, survivor gaps remain. A universal proof must show:

```text
large-prime left/right killer lanes cannot cover every survivor gap forever
```

Equivalently:

```text
Perfect killer nets cannot persist forever.
```

## What The Latest Finite Evidence Shows

The current reviewer packet has:

```text
K13.431 misses = 0
full K-window coverage candidates = 0
boss normalized survivor pressure remains highest
high-pressure killer nets are diffuse
greedy-lane decay requires hundreds of lanes on the selected high-pressure rows
overlap waste is measurable and leaves 22 and 52 uncovered survivors after top 291 lanes in two selected rows
those uncovered survivors show partial residue clustering instead of uniform spread
the boss top200 leftover pocket is 100% inside g mod 30 in {3,15,27} but breaks at mod 210 / 2310 / 30030
boss HALF-L leftovers require one right killer each in the canonical 16-core bridge packet
```

The strongest finite followup found:

```text
boss S29/log^2(C) = 0.451656
best visitor S29/log^2(C) = 0.440262
boss top20 killer-lane cover = 36.60%
boss greedy lane count = 291
boss top200 leftovers = 91
boss unique right killers on HALF-L leftovers = 53 with max repeat 1
raw max S29 row top20/top291 cover = 33.85% / 92.63%
```

## What Is Still Missing

1. A symbolic lower bound for the number of independent survivor gaps that cannot be killed by residue lanes.
2. A theorem proving that left/right large-prime killer lanes cannot form a complete covering system.
3. A scale-matched control audit separating true pressure from raw survivor mass growth.
4. Independent reviewer reruns of the 3-hour assault and exact followup analyzer.
5. A formal proof bridge from diffuse finite killer nets to a uniform all-`C` obstruction theorem.
6. A theorem-level version of the greedy-lane decay curve: coverage grows too slowly, and overlap loss prevents permanent full coverage.
7. A rigorous inequality turning measured overlap waste into a universal `OverlapLoss(C,W,P)` term.
8. A structural explanation for why uncovered survivors cluster in residues like `g mod 30 in {3,15,27}` without allowing permanent full cover.
9. A theorem-level bridge from shallow mod-30 clustering to deep-modulus breakup with diffuse right-killer coverage.

## What Would Move This To Proof

A proof must establish something like:

```text
For all sufficiently large C, inside W = floor(K log^2(C)),
the survivor set after small-prime filtering cannot be fully covered by
left-side and right-side composite residue classes.
```

Then at least one survivor gap must satisfy:

```text
C-g is prime
C+g is prime
```

That would produce a BOTH escape.

## Safe Bottom Line

```text
The paperwork and finite evidence are reviewer-ready.
The theorem is not proven.
The next mathematical job is a real no-cover theorem for large-prime killer lanes.
```
