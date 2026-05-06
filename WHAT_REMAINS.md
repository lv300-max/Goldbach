# What Remains

## The repository does not currently prove Goldbach

This project has a structured framework and strong finite evidence. The universal proof remains open.

The exact missing step is the analytic proof of the Rescue Lemma.

---

## The missing theorem

```text
Rescue Lemma

There exist constants K > 0 and C0 such that for every C >= C0,
there exists an integer g with

0 <= g <= K log^2(C)

such that C - g and C + g are both prime.
```

This is the only universal wall in the current theorem stack.

---

## Why finite testing is not enough

Computational validation can show that no failure appears up to a very large bound. It cannot by itself prove the statement for every future center `C`.

A universal proof needs an argument that works for all `C >= C0`.

---

## The needed analytic shape

The desired proof likely needs an estimate of the form:

```text
Actual BOTH-hits = Expected BOTH-hits ± Error
```

Then prove:

```text
Error < Expected
```

That would force:

```text
Actual BOTH-hits > 0
```

which means some mirror gap `g` produces two primes.

---

## Tools that may be relevant

- circle method
- sieve theory
- Hardy-Littlewood style estimates
- prime distribution in short intervals
- explicit error bounds

Important note: ordinary prime-gap theorems are not enough by themselves. Goldbach needs the linked mirror condition:

```text
C - g is prime
C + g is prime
```

using the same `g`.

---

## Safe current status

```text
Finite evidence: strong
Proof direction: clear
Rescue Lemma: analytic open
Universal Goldbach proof: open
```
