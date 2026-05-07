# Analytic Proof Frontier

Safe status: This is the strongest current analytic proof attempt packet. It
does not prove the Rescue Lemma and does not prove Goldbach.

## Target Theorem

For `E = 2C`, define:

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)
```

with:

```text
W = floor(K log^2(C)).
```

The required analytic theorem is:

```text
There exist constants K > 0 and C0 such that, for every C >= C0,
S(C, floor(K log^2(C))) >= 1.
```

This is exactly the Rescue Lemma in counting form.

## Rigorous Part Available Now

Fix a finite set of obstruction primes:

```text
P_B = {p prime : p <= B}
```

For each `p in P_B`, the mirror gap `g` is locally blocked if:

```text
g == C mod p
```

or:

```text
g == -C mod p.
```

Therefore, modulo each prime `p`, at most two residue classes of `g` are
forbidden. If `p | C`, the two forbidden classes coincide, so only one class is
forbidden.

For the finite wheel:

```text
M_B = product_{p <= B} p
```

the survivor residues modulo `M_B` are exactly the residue classes avoiding all
the local forbidden classes.

This proves a finite local fact:

```text
small-prime congruence obstructions alone do not automatically imply BOTH-hit failure.
```

It does not prove that any survivor gap gives two primes.

## Why This Does Not Finish Lemma 4

Let:

```text
H_B(C,W) = {0 <= g <= W : no p <= B divides C-g or C+g}
```

These are local-congruence survivor gaps. To prove the Rescue Lemma, one needs:

```text
exists g in H_B(C,W) such that C-g and C+g are both prime.
```

But a survivor gap only says no selected small prime divides either side.
It does not rule out composite factors larger than `B`.

The remaining analytic wall is:

```text
Prove that the survivor gaps left after local congruence obstructions contain
at least one true BOTH-prime hit inside a K log^2(C) mirror window.
```

Equivalently:

```text
S(C, floor(K log^2(C))) >= 1.
```

## Tempting Routes That Do Not Close The Proof

### Brun-Titchmarsh

Brun-Titchmarsh is an upper-bound tool. The Rescue Lemma needs a lower bound
for a two-prime count in a very short mirror window.

It does not prove:

```text
S(C, floor(K log^2(C))) > 0.
```

### One-Sided Prime Counts

Define:

```text
A = {0 <= g <= W : C-g is prime}
B = {0 <= g <= W : C+g is prime}
```

Finite evidence suggests `|A|` and `|B|` are often about `K log(C)` when
`W = K log^2(C)`.

But:

```text
|A| + |B| << W
```

for large `C`, so pigeonhole alone cannot force `A intersect B` to be
nonempty.

### Fixed Finite Wheel

A fixed wheel can show survivor residues remain after finitely many local
obstructions. But a proof must handle all larger composite factors and all
sufficiently large centers.

Finite wheels do not imply:

```text
survivor gap = BOTH-prime gap.
```

### Hardy-Littlewood Heuristic

The expected main term is:

```text
Main(C,W) ~= SingularSeries(2C) * W / log^2(C).
```

For `W = K log^2(C)`, this is approximately:

```text
Main(C,W) ~= SingularSeries(2C) * K.
```

This explains the observed finite pattern, but a proof needs:

```text
|Error(C,W)| < Main(C,W)
```

uniformly for every sufficiently large `C`.

That error control is not currently available in this framework.

### GRH-Style Short-Interval Estimates

Standard conditional prime-counting estimates still do not directly give a
uniform two-prime lower bound in windows as short as:

```text
K log^2(C).
```

They do not currently close the Rescue Lemma in this form.

## What A Successful Analytic Proof Must Contain

Any valid proof must include one of the following.

### Direct Lower Bound

```text
S(C, floor(K log^2(C))) >= 1
```

for every sufficiently large `C`.

### Weighted Lower Bound

```text
sum_{0 <= g <= W} Lambda(C-g)Lambda(C+g) > 0
```

with an error term small enough to force an actual BOTH-prime pair.

### Survivor-To-Prime Theorem

```text
The survivor gaps left after local congruence obstructions contain at least
one true BOTH-prime hit inside K log^2(C).
```

### Short-Window Circle Method With Pointwise Error Control

```text
S(C,W) = SingularSeries(2C) * W/log^2(C) + Error(C,W)
```

and:

```text
|Error(C,W)| < Main(C,W)
```

uniformly for every sufficiently large `C`.

## Current Conclusion

The current framework has:

```text
Clear theorem target: yes
Finite evidence: strong
Adversarial evidence: strong
Reviewer-safe wording: in place
Analytic Rescue Lemma proof: open
Universal Goldbach proof: not claimed
```

The analytic proof cannot honestly be marked complete until the lower bound for
`S(C,W)` is proven.
