# Goldbach Bullseye Proof Direction

This project does not prove Goldbach. It stress-tests the proof target.

For every even `E > 2`, define:

```text
C = E / 2
L = C - g
R = C + g
```

The proof target is:

```text
There exists some gap g such that L and R are both prime.
```

The engine currently allows `g = 0`. That represents the valid center pair
`C + C = E`, which matters for numbers like `E = 10` where `5 + 5` is a
Goldbach representation. If you want only visible outer rings, start at
`g = 1`, but then `E = 2p` center pairs are intentionally ignored.

The computational target is sharper:

```text
Find evidence for a universal bound g < f(E).
```

A proof-shaped bound would look like:

```text
g < K * log(E)^2
```

or any other function that is always small relative to `E`.

## What The Engine Measures

- `firstGap`: how far from center the first prime pair appears.
- `compressionRatio = firstGap / C`: whether the search distance shrinks relative to scale.
- `gap / log(E)`, `gap / log(E)^2`, `gap / log(E)^3`: competing growth-law normalizations.
- `maxGapWindowBeforeSuccess`: the failure window before the first hit.
- `gap / log(E)^2`: pressure test for a possible logarithmic bound.
- `windowNorm = failureRun / log(E)`: pressure test for prime-desert size.
- multi-scale symmetry deficit around `C`: whether primes are balanced on both sides of center.
- certificate chain hashes: tamper-checkable finite verification.

## What Would Support A Proof Path

- `compressionRatio` trends toward `0` as `E` grows.
- `firstGap` grows much slower than `E`.
- worst observed `firstGap / log(E)^2` stays bounded or grows slowly.
- the upper envelope of `firstGap / log(E)^2` flattens across scale.
- `windowNorm` stays bounded.
- every residue lane, especially `C mod 30`, has bounded worst normalized gap.
- Hardy-Littlewood observed/expected ratios, where exact counts are feasible, do not collapse toward zero.
- anomalies do not grow proportionally with `E`.
- contradiction mode shows that small-prime modular coverings leave holes before the first valid gap.
- long failure walls show redundant blocker overlap rather than a clean covering system.
- hole survival mode shows that residue holes become success holes or half-open holes often enough that large-prime closure has to keep winning repeatedly.

## What Would Be A Counterexample Signal

- a certificate failure after independent verification.
- no prime pair found for a tested `E`.
- first gaps growing proportionally with `E`.
- expanding symmetric prime deserts around centers.
- small-prime residue coverings become complete over growing windows without a prime-pair hit.
- blocker maps form stable covering systems that leave no free gaps.

## Reality Check

Testing cannot prove the infinite claim. The value of this engine is:

- counterexample hunting
- anomaly discovery
- certificate-backed finite verification
- empirical pressure toward a proof-shaped bound
- modular-covering contradiction experiments

## Contradiction Direction

Instead of only showing that a hit exists, contradiction mode asks whether failure can organize itself:

```text
For every gap g <= G, at least one of C-g or C+g is composite.
```

It records the blocking prime, side, and residue class for each miss. The proof-shaped question is:

```text
Can finitely many prime residue blockers cover every possible gap forever?
```

If residue coverage leaves holes, a finite covering explanation of failure is incomplete. A full proof would need to turn those holes into guaranteed prime-pair hits rather than just candidate openings.

## Large-Prime Closure Target

After small-prime residue holes appear, failure can still continue if larger
prime factors close at least one side:

```text
For every tested g:
(C - g is composite) OR (C + g is composite)
```

That is the sharp failure condition. Both sides do not need to be composite;
one composite side is enough to block a Goldbach pair.

Large-prime closure mode asks:

```text
Can larger prime factors keep closing every residue hole forever?
```

For each residue hole it records:

- the first closing prime factor on the left and/or right side.
- repeated large-prime blockers.
- closure-prime size.
- `closurePrime / sqrt(C ± g)`.
- closure persistence by hole index.
- the first residue hole that survives as a prime-prime pair.

The proof-shaped obstruction is now:

```text
large-prime closure must win infinitely often, with no surviving prime-prime hole
```

The engine can only test this finitely. A proof would need to show that this
closure pattern cannot persist for all gaps.

## Side-Cover Persistence Target

The exact failure condition is side cover:

```text
For every mirror gap g:
(C - g composite) OR (C + g composite)
```

Side-cover mode classifies every tested gap:

- `L_BLOCKS`: left side composite, right side prime.
- `R_BLOCKS`: right side composite, left side prime.
- `BOTH_BLOCK`: both sides composite.
- `SUCCESS`: both sides prime.

The proof-shaped question is:

```text
Can one side or both sides keep covering every gap forever?
```

Useful evidence against persistent failure:

- side cover breaks at a prime-prime gap.
- L-only and R-only blockers alternate rather than stabilize.
- both-composite walls are finite and break.
- side imbalance stays modest instead of one side dominating indefinitely.

## Composite Wall Anatomy Target

A both-composite wall is a consecutive gap range where both mirror sides are
composite:

```text
C - g composite
C + g composite
```

Wall anatomy mode dissects each such range:

- wall start and end.
- wall length.
- left and right smallest-factor sequences.
- top left and right blockers.
- shared blocker primes.
- repeated factor patterns.
- factor-size growth or decay.
- the first gap that breaks the wall.

The proof-shaped question is:

```text
Why do both-side composite walls break?
```

Useful evidence:

- long walls depend on redundant small factors instead of a clean cycle.
- factor patterns do not stabilize into a permanent covering system.
- the wall break occurs because one or both sides become prime.

## Wall Break Prediction Target

Wall break prediction asks whether a both-composite wall shows instability
before it opens.

For each pre-success both-block wall, the engine now records:

- wall length.
- top left and right blocker primes.
- shared blocker primes.
- blocker-pair entropy.
- first-half versus last-half entropy.
- first-half versus last-half shared blockers.
- the last five blocker pairs before the break.
- the actual wall break type.

The current strict trigger is:

```text
blocker diversity rises
AND
shared blockers drop
```

When that trigger appears inside a wall, the engine predicts that the next
gap is near a wall break and compares the predicted gap with the actual
opening.

Break types:

- `L PRIME OPEN`: the left side became prime.
- `R PRIME OPEN`: the right side became prime.
- `BOTH PRIME OPEN`: both sides became prime, which is a Goldbach hit.
- `WALL CONTINUES`: no wall break inside the tested window.

The proof-shaped question is:

```text
Do long composite walls become unstable before they break?
```

Useful evidence:

- high-confidence predictions on hard delayed cases.
- blocker entropy rises before a wall opens.
- shared blockers drop before a wall opens.
- failed predictions on small or organized walls, because that means wall
  breaks have multiple mechanisms and should not be overfit to one signal.

## Wall Break Mechanism Classifier Target

The mechanism classifier turns wall breaks into a taxonomy instead of forcing
every break through one predictor.

For every pre-success both-block wall, it records:

- wall start, end, and length.
- break gap and break type.
- entropy trend.
- shared-blocker trend.
- small-prime blocker drop for `2,3,5,7`.
- large-prime blocker spike.
- parity / `2`-block pattern.
- `mod 30` lane.
- last five blocker pairs.

Primary mechanism labels:

- `ENTROPY BREAK`: blocker entropy rises before the wall opens.
- `SHARED-BLOCKER DROP`: shared blockers disappear before the wall opens.
- `SMALL-PRIME EXHAUSTION`: `2,3,5,7` explain less of the late wall.
- `LARGE-PRIME CHAOS`: larger blockers appear irregularly late in the wall.
- `SIDE RELEASE`: one or both sides become prime at the break.
- `CENTER LANE SHIFT`: the break enters a stronger `mod 30` prime-eligible lane.
- `UNKNOWN BREAK`: no current trigger explains the break.

The proof-shaped question is:

```text
Can every composite wall collapse by a finite set of mechanisms?
```

The warning signal is the unknown rate:

```text
unknownRate = UNKNOWN BREAK walls / pre-success walls
```

If unknown rate is high, the current wall model is incomplete.

## Universal Obstruction Target

Universal obstruction mode moves from one tested `E` to every center lane
modulo a primorial:

```text
M = 2 * 3 * 5 * 7 * 11 * 13 * ...
C lane = C mod M
```

For each center lane, it asks whether there are gap residues `g mod M` such
that neither side is blocked by any prime dividing `M`:

```text
C - g not divisible by p
C + g not divisible by p
for every p | M
```

The count is symbolic because the prime moduli are independent:

```text
survivors(C mod M) = product_p (p - #forbidden residues mod p)
forbidden residues: g = C or -C mod p
```

The proof-shaped question is:

```text
Can small-prime obstruction cover every center lane?
```

If every center lane has surviving gap residues, then small-prime blocking
alone cannot organize a universal Goldbach failure. This still does not prove
Goldbach, because larger primes can still close surviving gaps.

## Survivor Count Lower Bound Target

Survivor lower-bound mode tests one finite proof-shaped window:

```text
W = ceil(K * log(E)^2)
```

Inside `1 <= g <= W`, it counts gaps that survive the selected small-prime
obstruction. Each survivor is classified:

- `SUCCESS`: both sides are prime.
- `HALF_OPEN`: one side is prime.
- `CLOSED_BY_LARGE_PRIME`: both sides survived small primes but are still
  composite by larger factors.

The proof-shaped question is:

```text
Are there enough admissible mirror gaps inside K log^2(E)
that large-prime closure cannot close all of them?
```

The strongest empirical signal is:

```text
knownSuccessInsideWindow = true
```

The hardest cases are those with survivors but no success inside the window,
because then all admissible gaps were closed by larger primes.

## Current Formula Corrections

The mirror formula is the current core formula:

```text
E = 2C
L = C - g
R = C + g
L + R = E
```

The parts that need care are the pressure metrics:

- `residueCoverage` in this project means finite-window gap coverage over
  `1 <= g <= G`, not proof that all residue classes are covered forever.
- For one prime `p`, forbidden gaps satisfy `g ≡ C (mod p)` or
  `g ≡ -C (mod p)`.
- A residue hole means a tested gap escaped the selected small-prime blockers.
  It can still be half-open or closed by larger prime factors.
- `observedPairCount` counts unordered mirror pairs, so the Hardy-Littlewood
  check uses an unordered estimate:

```text
HL_unordered(E) ≈ C2 * S(E) * E / log(E)^2
S(E) = product over odd primes p|E of (p - 1)/(p - 2)
C2 ≈ 0.6601618158468696
```

The simplified `2*C2*E/log(E)^2` estimate is for a different counting
convention and was too blunt for this engine.
