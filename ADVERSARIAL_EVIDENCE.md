# Adversarial Evidence

Safe status: This is finite computational evidence only. It does not prove
Goldbach and does not prove the Rescue Lemma.

## Target Under Attack

The adversarial tests attack the possibility that a center `C` has no BOTH-hit
inside a finite rescue window

```text
W = floor(K log^2(C)).
```

For

```text
E = 2C
left = C-g
right = C+g
```

the failure pattern would require

```text
totalBothHitsInsideW = 0.
```

## Direct Zero-BOTH Hunter

Purpose: sample many centers and directly scan every `g` in `0..W` for BOTH
hits.

Reported finite pattern:

- `zeroBothRows = 0` in the earlier broad tested samples
- `minBothHits` stayed positive in the earlier broad reported runs
- one later danger replay found a `K=8.25` breach at `C = 435067631`
- the same breach was rescued at `K=10`
- BOTH-hit density thinned with scale, but did not vanish in the tested windows

Safe interpretation:

```text
No zero-BOTH row was found in the earlier broad samples; the later danger replay
found one zero-BOTH row for K=8.25 but not for K=10.
This is finite evidence only.
```

## Constructed Covering-Wall Search

Purpose: look for centers where small-prime divisibility blocks most mirror
gaps before running full primality scans.

Small-prime wheels tested in the workbench included levels such as:

```text
210
2310
30030
510510
9699690
```

Reported finite pattern:

- hardest small-prime walls blocked over 95% of gaps in tested cases
- `anyFullCoverWall = false` in the reported covering-wall summary
- `anyMissedBothHit = false` after full primality scans in the reported summary
- the hardest reported wheel in the reviewer packet was `510510`
- dark residue classes still left survivor gaps and BOTH-hits

Safe interpretation:

```text
Small-prime walls did not fully cover the tested rescue windows.
The remaining survivor gaps still produced BOTH-hits in the reported scans.
This is finite adversarial evidence only.
```

## Possible Rescue Failure Test

Purpose: combine direct zero-BOTH hunting, constructed small-prime walls, and
higher-octave residue replay to look for a structural failure pattern.

Failure would require all of the following:

- every `g` in `0..W` has `BOTH(g)=false`
- small-prime walls cover most gaps
- survivor gaps remain but never become BOTH-prime
- total BOTH-hits inside `W` equals zero

Reported finite pattern:

- no structural failure was found in the reported tests
- small-prime walls did not fully cover `W`
- every tested row had BOTH-hits
- no zero-BOTH higher-octave copy was reported

Safe structural read:

```text
NO STRUCTURAL FAILURE FOUND: small-prime walls did not fully cover W and every
tested row had BOTH-hits.
```

## Residue-Octave Rescue Pattern

The safer mechanism label is:

```text
Residue-Octave Rescue Pattern
```

Plain version:

```text
Residue darkness can repeat, but it does not appear to compound into permanent
failure in the tested higher-octave replays.
```

The higher-octave replay data reported:

```text
anyZeroBothHigherOctaveCopy = false
minBothHits >= 1 in the worst replay families
zeroBothCopies = 0
```

This supports the idea that bad residue classes can echo upward under
`C -> C + kM`, while survivor gaps and BOTH-hits still reappear inside the
tested `log^2` windows.

Safe interpretation:

```text
Finite higher-octave evidence supports Residue-Octave Rescue as a possible
mechanism for Lemma 4. It is not a law and not a proof.
```

## What This Evidence Supports

The adversarial results support these finite claims:

- sampled centers had BOTH rescues inside the tested window
- dark small-prime residue classes did not erase all candidates
- covering walls left survivor gaps
- survivor gaps did not all fail primality in the tested rows

## What This Evidence Does Not Prove

The adversarial results do not prove:

- Goldbach
- the Rescue Lemma
- the analytic lower bound `S(C,W) > 0`
- that no future untested center has a zero-BOTH window
- that small-prime survivor structure always forces a BOTH-hit

## Remaining Wall

The open analytic step is still:

```text
S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * 1_prime(C+g) > 0
```

for every sufficiently large `C`, with

```text
W = floor(K log^2(C)).
```

Universal proof status: open.
