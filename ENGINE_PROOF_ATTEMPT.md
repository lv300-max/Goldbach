# Engine Proof Attempt

Safe status: The engines were used to attack the missing lower bound. They did
not prove the Rescue Lemma. They identify the remaining analytic wall more
sharply.

## Target

Prove that for every sufficiently large `C`,

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g) > 0
W = floor(K log^2(C))
```

with the current finite evidence ceiling

```text
K = 10.
```

The older `K=8.25` runs remain useful as proof-pressure artifacts, but the
current finite raw packet records one known `K=8.25` breach.

## Engine Runs

### Lemma 4 sieve-bound engine

Command:

```text
python3 lemma4_sieve_bound.py
```

Result over 35 sampled centers from about `10^5` to `10^12`:

```text
Min E[R]:       7.25
Min actual R:   6
Min admissible: 73
Avg actual/E[R]: 1.471
Near misses: none found
```

Interpretation:

```text
The sampled rows had BOTH-hits inside W.
The heuristic expected count stayed above 1.
This is finite computational evidence, not a proof.
```

### Proof roadmap engine

Command:

```text
python3 goldbach_proof_lab.py --proof-roadmap --case-limit 12 --max-e 1000000 --K 8.25 --prime-limit 13 --json proof_pressure_roadmap.json
```

Key output:

```text
Live candidate count: 8
Broken candidate count: 1
Next proof target: prove the survivor gaps left after local congruence obstructions contain at least one true BOTH-prime hit inside a K log^2(E) mirror window.
```

Main proof obligations reported by the engine:

- finite small-prime obstruction cannot cover all lanes
- survivors appear inside `K log^2(E)`
- survivor gaps left after local congruence obstructions contain a true BOTH-prime hit
- a uniform `K` exists

Highest-risk remaining obligations:

```text
Prove that local-congruence survivor gaps contain at least one true BOTH-prime hit.
Replace finite attack search with a uniform analytic bound.
```

### Closure matrix engine

Command:

```text
python3 goldbach_proof_lab.py --closure-matrix --case-limit 24 --max-e 10000000 --K 8.25 --prime-limit 13 --json proof_pressure_closure_matrix.json
```

Key output:

```text
K=1: failures=1
K=2: failures=0
K=4: failures=0
K=8: failures=0
Dangerous clean-cover cases: 0
```

Interpretation:

```text
The finite matrix supports survivor escape.
It still says a proof needs a theorem forcing at least one local-congruence
survivor gap to become a true BOTH-prime hit.
```

### Contradiction pressure engine

Command:

```text
python3 goldbach_contradiction.py --E 100000000 --G 3000 --proof-pressure-only --json proof_pressure_contradiction_E100000000.json
```

Key output:

```text
Small-prime obstruction lanes tested: 30030
Lanes with zero surviving gaps: 0
All lanes have survivors: True
Exact survivors in selected window: 89
First success within window: 243
```

Interpretation:

```text
Small-prime obstruction alone did not cover all lanes.
The selected E has a BOTH-hit inside the log-squared window.
This verifies one finite row only.
```

## Engine Conclusion

The engines support this finite pattern:

- small-prime walls leave survivor gaps
- sampled centers usually have BOTH-hits inside `K log^2(C)`
- one later danger replay produced a zero-BOTH row for `K=8.25`
- no completed adversarial packet miss was found at `K=10`
- the heuristic count stays positive in sampled rows

The engines do not prove:

- `S(C,W) > 0` for every sufficiently large `C`
- that every survivor set contains an actual BOTH-hit
- that local-congruence survivor gaps always contain a BOTH-prime hit
- Goldbach

## Remaining Wall

The next proof target is:

```text
Prove that the survivor gaps left after local congruence obstructions contain
at least one true BOTH-prime hit inside a K log^2(C) mirror window.
```

Equivalently, prove the pointwise lower bound:

```text
S(C, floor(K log^2(C))) >= 1
```

for every sufficiently large `C`.

Universal proof status: open.
