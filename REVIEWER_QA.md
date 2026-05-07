# Reviewer Q&A

Safe status: This is a proof-direction framework with strong finite evidence. It does not currently prove Goldbach. The universal proof remains open until the Rescue Lemma is proven analytically.

## Direct 20-Question Answer Sheet

### 1. What exactly is the new theorem statement being tested?

Short direct answer: The tested target is the Rescue Lemma:

```text
There exist constants K > 0 and C0 such that for every C >= C0,
S(C, floor(K log^2(C))) >= 1.
```

Status: ANALYTIC OPEN.

Data support: finite mirror-rescue, density, K-window, and adversarial tests.

Missing: a universal lower bound for `S(C,W)`.

### 2. Is the Rescue Lemma just Goldbach rewritten in bounded-gap form?

Short direct answer: It is stronger than plain Goldbach because it requires a
BOTH-hit inside a `K log^2(C)` mirror window.

Status: ANALYTIC OPEN.

Data support: finite rescues usually appear early in the tested windows.

Missing: a proof that the bounded window works for every large `C`.

### 3. Why should `g <= K log^2(C)` hold for every large center `C`?

Short direct answer: It should not be assumed; this is the open theorem.

Status: ANALYTIC OPEN.

Data support: completed finite K-window packets found breaches for `K=8.25`
and `K=10`, while `K=12` had zero misses so far.

Missing: a uniform analytic bound independent of samples.

### 4. What analytic theorem proves a mirror-prime pair near every center?

Short direct answer: None currently in this repository.

Status: ANALYTIC OPEN.

Data support: raw counts suggest persistent mirror-prime hits.

Missing: a pointwise short-window two-prime lower bound.

### 5. Are you using Hardy-Littlewood as evidence, or as proof?

Short direct answer: Evidence/model only.

Status: FINITE EVIDENCE.

Data support: observed BOTH-hit counts are compared against approximate
Hardy-Littlewood-style expectations.

Missing: an error term small enough to force `S(C,W) >= 1`.

### 6. What is the exact value of `K`, and is it fixed or fitted?

Short direct answer: `K=12` is the current finite candidate ceiling after
finite breaches for `K=8.25` and `K=10`; no analytic `K` is proven.

Status: FINITE EVIDENCE.

Data support: the completed global coprime sweep, hardest-residue replay, and
top-100 hardest-residue hunter all had zero `K=12` misses. The highest observed
`trueK` was `10.535772`.

Missing: a theorem establishing a fixed `K`.

### 7. What is the cutoff `C0`, and how is it chosen?

Short direct answer: the working finite cutoff is `C0 = 100000`, chosen as a
practical finite-base boundary.

Status: FINITE EVIDENCE.

Data support: reported finite-base run checked centers below this cutoff.

Missing: an analytic theorem that specifies or permits a final cutoff.

### 8. Does the finite base checker cover every `C < C0`, or only samples?

Short direct answer: every integer center `2 <= C < 100000` in the reported run.

Status: FINITE VERIFIED IN LOCAL RUN.

Data support: `99,998` centers tested, `0` failures.

Missing: independent reviewer reruns are still useful.

### 9. Do large-scale tests cover every center, or samples?

Short direct answer: random and adversarial samples, not exhaustive above `C0`.

Status: FINITE EVIDENCE.

Data support: high-band and residue-danger runs are sampled or constructed.

Missing: universal coverage above `C0`.

### 10. How do you prevent primality-test bugs?

Short direct answer: deterministic primality where practical, BigInt-safe
Miller-Rabin in app tests, no unsafe BigInt bitwise shifts, reproducible saved
outputs, and independent script cross-checks.

Status: FINITE EVIDENCE.

Data support: finite-base and raw-test artifacts are saved.

Missing: reviewer-grade independent reproduction.

### 11. Can the Rescue Lemma be stated cleanly without computation?

Short direct answer: yes:

```text
There exist K > 0 and C0 such that every C >= C0 has
S(C, floor(K log^2(C))) >= 1.
```

Status: ANALYTIC OPEN.

Data support: computation supports the target only.

Missing: computation-free proof.

### 12. Is `K log^2(C)` stronger than current sieve methods can prove?

Short direct answer: yes, for a uniform pointwise mirror-prime pair around
every center, this appears stronger than current sieve methods prove.

Status: ANALYTIC OPEN.

Data support: finite tests show the target is plausible.

Missing: a sieve lower bound strong enough to count two primes in this window.

### 13. What blocks a direct circle-method proof?

Short direct answer: the window is only `K log^2(C)`, and the bound must be
uniform for every center, not just average behavior.

Status: ANALYTIC OPEN.

Data support: finite averages are stable.

Missing: pointwise short-window error control.

### 14. Are you counting all mirror-prime pairs, or only the first hit?

Short direct answer: both; engines track first rescue and total `S(C,W)`.

Status: FINITE EVIDENCE.

Data support: density tests count total BOTH-hits inside windows.

Missing: a weighted analytic counting theorem.

### 15. What is the expected count inside `g <= K log^2(C)`?

Short direct answer:

```text
S(C,W) ~= SingularSeries(2C) * W / log^2(C).
```

For `W = K log^2(C)`, this is about:

```text
SingularSeries(2C) * K.
```

Status: HEURISTIC / FINITE EVIDENCE.

Data support: raw tests compare actual counts to model counts.

Missing: rigorous main term plus error control.

### 16. What singular series/local correction is used?

Short direct answer: raw tests use an approximate Goldbach-style local
correction using small odd primes dividing `E`.

Status: MODEL ONLY.

Data support: model comparisons are saved in raw outputs.

Missing: a precise theorem-level singular series with uniform error.

### 17. Can residue-lane diversity become a real lower bound?

Short direct answer: not yet.

Status: ANALYTIC OPEN.

Data support: finite lane diversity suggests rescue is not locked to one lane.

Missing: a theorem converting survivor-lane diversity into `S(C,W) >= 1`.

### 18. Do tests account for all small-prime congruence obstructions?

Short direct answer: they account for tested finite wheels, not all primes.

Status: FINITE EVIDENCE.

Data support: wheels such as `210`, `2310`, `30030`, `510510`, and `9699690`
were used.

Missing: proof handling all local obstructions.

### 19. What happens in very bad residue classes?

Short direct answer: adversarial tests found dark rows and finite breaches for
`K=8.25` and `K=10`, but no completed `K=12` miss so far.

Status: FINITE EVIDENCE.

Data support: residue-danger replay and K-window tests.

Missing: a universal theorem for all bad residue configurations.

### 20. Can you prove local obstructions never erase every survivor gap?

Short direct answer: no; this is the central analytic wall.

Status: ANALYTIC OPEN.

Data support: finite small-prime wall and K-window tests did not produce a
completed `K=12` failure.

Missing: prove that survivor gaps left after local congruence obstructions
contain at least one true BOTH-prime hit inside a `K log^2(C)` mirror window.

## Framework summary

Canonical source: `CANONICAL_EQUATIONS_AND_LEMMAS.md`.

Core notation:

```text
E = 2C
L_C(g) = C - g
R_C(g) = C + g
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g)
S(C,W) = sum_{0 <= g <= W} BOTH_C(g)
```

### Lemma 1 — Mirror Identity

Statement:

```text
(C - g) + (C + g) = 2C = E
```

Status: PROVEN by algebra.

Plain version: Every mirror pair around `C` sums back to the even number `E`.

### Lemma 2 — BOTH-Hit Definition

Statement:

```text
BOTH_C(g) = 1
```

means `C - g` and `C + g` are both prime.

Status: DEFINITION.

Plain version: A BOTH-hit is exactly a mirror Goldbach pair.

### Lemma 3 — Goldbach Equivalence

Statement: Goldbach holds for `E = 2C` if and only if there exists some `g`
where `BOTH_C(g) = 1`.

Status: PROVEN from Lemma 1 and Lemma 2.

Plain version: Finding a BOTH-hit is the same as finding a Goldbach
decomposition for `E`.

### Lemma 4 — Rescue Lemma

Statement: There exist constants `K > 0` and `C0` such that for every
`C >= C0`, there exists a gap `g` with

```text
0 <= g <= K log^2(C)
```

and

```text
BOTH_C(g) = 1.
```

Status: ANALYTIC OPEN, computationally supported.

Plain version: No large center `C` can stay in a mirror-prime desert longer
than `K log^2(C)`.

### Lemma 5 — Finite Base Lemma

Statement: For every center `C` with `2 <= C < C0`, there exists a gap `g`
such that `BOTH_C(g) = 1`.

Status: FINITE EVIDENCE, verified in the reported local run.

Plain version: The small centers below the cutoff are checked directly by
computer.

### Main theorem chain

Lemma 1, Lemma 2, and Lemma 3 give the mirror form of Goldbach. Lemma 5 covers
small `C`. Lemma 4 would cover all large `C`. Therefore, if Lemma 4 is proven
analytically, Goldbach follows.

## Structural reviewer questions

### 1. What exactly is the new theorem statement you believe is being proved?

Short direct answer: The target is the Rescue Lemma, not a completed proof of Goldbach: there exist constants `K > 0` and `C0` such that every `C >= C0` has some `g` with `0 <= g <= K log^2(C)` and `BOTH_C(g)=1`.

Status: ANALYTIC OPEN.

Data support: finite tests found many mirror rescues, and the current K-window
packet records finite breaches for `K=8.25` and `K=10` but zero `K=12` misses
in the completed packets so far.

Missing: A proof that `S(C,W) > 0` for every sufficiently large `C`, where `S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)`.

### 2. Is the Rescue Lemma just a restatement of Goldbach in a bounded-gap form?

Short direct answer: It is stronger and more structured than plain Goldbach because it imposes a `log^2(C)` bound on the first mirror-prime rescue.

Status: ANALYTIC OPEN.

Data support: Finite tests show rescues appearing inside the tested `K log^2(C)` window.

Missing: A universal proof of the bounded rescue window.

### 3. Why should `g <= K log^2(C)` hold for every center `C`, not just tested centers?

Short direct answer: It should not be assumed; proving this for every large `C` is the open problem.

Status: ANALYTIC OPEN.

Data support: sampled and adversarial tests found finite breaches for `K=8.25`
and `K=10`; `K=12` had zero misses in the completed K-window packets so far.

Missing: A uniform analytic bound independent of sampling.

### 4. What analytic theorem proves that a mirror-prime pair must exist near every center?

Short direct answer: No theorem currently in the repo proves this.

Status: ANALYTIC OPEN.

Data support: Raw counts and adversarial tests suggest persistent mirror-prime pairs.

Missing: A lower bound for mirror-prime pairs, potentially via circle method, prime-pair heuristic estimates, or sieve methods with explicit error control.

### 5. Are you using Hardy-Littlewood Goldbach heuristic as evidence, or as a proof?

Short direct answer: Evidence/model only.

Status: FINITE EVIDENCE.

Data support: BOTH-hit density tests found average BOTH-hits inside `W` stayed around `16-17` in tested windows, with `zeroBoth = 0`.

Missing: An explicit theorem with error smaller than the main term.

### 6. What is the exact value of `K`, and is it fixed forever or adjusted after testing?

Short direct answer: `K = 12` is the current finite candidate ceiling after
finite breaches for `K=8.25` and `K=10`; a proof would need a fixed `K`
established analytically.

Status: FINITE EVIDENCE.

Data support: The hardest completed K-window row has `C = 33950429`,
`firstBothG = 3168`, and `trueK = 10.535772`; it passed `K=12` with
`S(C, floor(12 log^2(C))) = 4`.

Missing: A non-data-fitted analytic constant.

### 7. What is the cutoff `C0`, and how is it chosen?

Short direct answer: The current working cutoff is `C0 = 10^5` for finite-base testing.

Status: FINITE EVIDENCE.

Data support: The finite-base script targets every integer center `2 <= C < 100000`.

Missing: A final analytic theorem must specify or allow a cutoff for all larger `C`.

### 8. Does the finite base checker cover every `C < C0` or only sampled centers?

Short direct answer: It is intended to exhaustively cover every integer center `2 <= C < 100000`.

Status: FINITE EVIDENCE.

Data support: Reported finite-base output records all centers below the selected cutoff with no failures.

Missing: Independent reproducibility checks and deterministic primality validation are still useful for review.

### 9. Does the large-scale validation test every center or random sampled centers?

Short direct answer: Random and adversarial sampled centers, not exhaustive above `C0`.

Status: FINITE EVIDENCE.

Data support: High-band, spark-decay, density, and covering-wall tests report finite sampled rows.

Missing: Universal coverage above `C0`.

### 10. How do you prevent probabilistic Miller-Rabin or BigInt bugs from creating false primes?

Short direct answer: Use deterministic primality for tested ranges when possible, avoid unsafe BigInt bitwise shifts, use reproducible seeds, and cross-check with independent scripts.

Status: FINITE EVIDENCE.

Data support: Recent app-side raw tests used deterministic BigInt-safe Miller-Rabin logic.

Missing: A reviewer-grade reproducibility harness with independent primality implementation checks.

## Analytic reviewer questions

### 1. Can the Rescue Lemma be stated in a form independent of computation?

Short direct answer: Yes: there exist constants `K > 0` and `C0` such that every `C >= C0` has a mirror-prime gap `g <= K log^2(C)`.

Status: ANALYTIC OPEN.

Data support: Computation supports the target but is not part of the universal statement.

Missing: A computation-independent proof.

### 2. Is the proposed `K log^2(C)` bound stronger than what current sieve methods can support?

Short direct answer: Likely yes for a uniform mirror-prime pair around every center.

Status: ANALYTIC OPEN.

Data support: Finite windows show persistent rescues, but finite tests do not establish sieve-strength bounds.

Missing: A rigorous pointwise lower bound in a very short interval.

### 3. What obstruction prevents a direct circle-method proof of the Rescue Lemma?

Short direct answer: The window `W = K log^2(C)` is very short, and the result must hold uniformly for every center, not just on average.

Status: ANALYTIC OPEN.

Data support: BOTH-hit averages are stable in finite tests.

Missing: Uniform error control for every center.

### 4. Are you counting mirror-prime pairs with a weighted sum or only searching for first hits?

Short direct answer: The app searches first hits and also counts BOTH-hits inside `W`; a proof should use a weighted or smoothed counting function.

Status: FINITE EVIDENCE.

Data support: BOTH-hit density tests count total BOTH-hits inside `W`.

Missing: A theorem for a weighted sum such as `sum Lambda(C-g)Lambda(C+g)`.

### 5. What is the expected asymptotic count of BOTH-hits inside `g <= K log^2(C)`?

Short direct answer: Heuristically about `SingularSeries(2C) * K`, since `W/log^2(C) = K`.

Status: FINITE EVIDENCE.

Data support: Average BOTH-hits inside `W` stayed around `16-17` in tested windows.

Missing: A precise singular-series theorem and error term.

### 6. What singular series are you using for local prime-pair density?

Short direct answer: Currently only an approximate/local model; a final framework needs the precise singular series for the pair `C-g`, `C+g`.

Status: ANALYTIC OPEN.

Data support: Residue-lane and wheel tests model local obstructions.

Missing: A formal singular-series formula integrated into a lower-bound proof.

### 7. Can the residue-lane diversity be converted into a rigorous lower bound?

Short direct answer: Not yet.

Status: ANALYTIC OPEN.

Data support: First-rescue residue lanes became more diverse in higher bands, and no single lane dominated the finite tests.

Missing: A theorem converting survivor-lane diversity into `S(C,W)>0`.

### 8. Does the model account for all small-prime congruence obstructions?

Short direct answer: The adversarial wheel tests account for tested small-prime wheels, including levels such as `510510`.

Status: FINITE EVIDENCE.

Data support: Small-prime wheels up to `510510` blocked over 95% of gaps in hardest tested cases, with `anyFullCoverWall = false` and `anyMissedBothHit = false`.

Missing: A proof handling all local obstructions through a singular series or sieve product.

### 9. What happens if `C` lies in an unusually bad residue class modulo many primes?

Short direct answer: That is what the covering-wall tests attack.

Status: FINITE EVIDENCE.

Data support: Dark residue classes still left survivor gaps and BOTH-hits in finite adversarial tests; hardest wheel was `510510`.

Missing: A universal proof for all bad residue configurations.

### 10. Can you prove the local obstruction product is never large enough to erase all candidates?

Short direct answer: Not yet.

Status: ANALYTIC OPEN.

Data support: Finite adversarial evidence found no full small-prime cover and no missed BOTH-hit after full prime scans.

Missing: A rigorous lower-bound or sieve argument proving local obstructions cannot erase all candidates.

## Important Correction

Brun-Titchmarsh is an upper bound, not the lower bound needed here. It cannot prove the Rescue Lemma by itself. The needed analytic statement is a lower bound for:

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g)
```

with `W = K log^2(C)`, strong enough to prove `S(C,W) > 0` for every sufficiently large `C`.
