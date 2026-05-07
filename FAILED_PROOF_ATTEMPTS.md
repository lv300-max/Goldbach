# Failed Proof Attempts

Safe status: This file records proof routes that do not currently prove the
Rescue Lemma. It is included to make the open analytic gap visible.

## Brun-Titchmarsh Upper-Bound Mistake

### Claimed Route

The attempted route was to use Brun-Titchmarsh or a related prime-counting
bound to show that every mirror window

```text
0 <= g <= W
W = floor(K log^2(C))
```

contains a mirror-prime pair

```text
C-g and C+g both prime.
```

Equivalently, the goal was to prove

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g) > 0
```

for every sufficiently large `C`.

### Why This Fails

Brun-Titchmarsh gives upper bounds for primes in intervals and arithmetic
progressions. The Rescue Lemma needs a lower bound for a two-prime
intersection count in a very short mirror window.

An upper bound cannot force existence. In particular, it does not prove

```text
S(C, floor(K log^2(C))) >= 1.
```

It also does not prove that the one-sided prime sets

```text
A = {0 <= g <= W : C-g is prime}
B = {0 <= g <= W : C+g is prime}
```

must intersect.

Even if finite data suggests `|A|` and `|B|` are often about `K log(C)`, the
ambient window has size about `K log^2(C)`. Therefore

```text
|A| + |B| << W
```

for large `C`, so pigeonhole alone cannot force `A ∩ B` to be nonempty.

### What Remains Needed

A valid proof needs a pointwise lower bound such as

```text
S(C, floor(K log^2(C))) >= 1
```

for every sufficiently large `C`, or a weighted version with an error term
small enough to force at least one actual BOTH-hit.

One possible target shape is

```text
S(C,W) = Main(C,W) + Error(C,W)
Main(C,W) ~= SingularSeries(2C) * W / log^2(C)
```

with a uniform guarantee that the error cannot cancel the main term.

### Status

Status: FAILED AS A PROOF.

What it still provides: useful context about prime-counting limits and why the
current wall is a lower-bound problem.

What it does not provide: an analytic proof of Lemma 4, the Rescue Lemma, or
Goldbach.

Safe wording:

```text
Brun-Titchmarsh is an upper bound and does not prove the Rescue Lemma.
The missing analytic step is a lower bound for S(C,W) > 0.
Universal proof status: open.
```
