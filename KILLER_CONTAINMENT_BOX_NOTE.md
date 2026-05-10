# KILLER CONTAINMENT BOX NOTE

## Status

TARGET NOTE - FINITE ONLY

```text
FINITE EVIDENCE ONLY
UNIVERSAL PROOF REMAINS OPEN
```

## Core Move

We do not chase large-prime killers one by one forever.

We contain them in boxes.

For Goldbach:

```text
C fixed
W = floor(K log^2 C)
S29 = survivor gaps
```

Every killer soldier must enter through one of these doors:

```text
Left killer:  g ≡ C mod p
Right killer: g ≡ -C mod p
```

So every killer gets a box label:

```text
(side, prime p, residue)
```

## Containment Arena

The battlefield is:

```text
1 <= g <= W
```

This removes endless fog. The argument becomes a finite boxed arena.

## Survivor Boxes

Split survivor gaps by deeper modulus:

```text
mod 30
mod 210
mod 2310
mod 30030
mod 510510
```

Current finite read:

```text
the mod30 pocket is real
but deeper moduli split it into many smaller boxes
```

## Killer Boxes

Each killer lane is boxed as:

```text
L:p31:residue
R:p31:residue
L:p37:residue
R:p37:residue
```

Now the soldiers cannot hide.

They are counted by:

1. how many gaps each lane kills
2. how much overlap each lane has
3. how many leftovers remain
4. how often the same killer repeats

## Cover Matrix

Rows:

```text
survivor gaps
```

Columns:

```text
killer lanes
```

Cell:

```text
1 if this killer kills this gap
0 otherwise
```

This turns the problem into a box-counting cover question.

## The Key Containment Claim

Plain form:

```text
The leftovers split into many rooms,
but the killers do not repeat enough to guard all rooms compactly.
```

Theorem-facing form:

```text
Once survivor gaps are boxed by deeper residue structure, the large-prime
killers must also be boxed as periodic lanes. The obstruction fails to stay
compact when the survivor boxes split faster than the killer lanes can repeat.
```

## Current Finite Meaning

What the current packet supports:

```text
leftover buckets = many
unique right killers = many
max repeat = low
top killers cover low %
```

That means:

```text
the soldiers are contained
and they are scattered
```

## THE ROOMS MULTIPLY FASTER THAN THE GUARDS REPEAT

1. Box count rises: `3 -> 15 -> 68 -> 88 -> 88`
2. Largest bucket collapses: `36.36% -> 1.14%`
3. Right-killer repeat stays max `1`
4. No hidden compact cover found in bounded search

This is the heart of the current bridge.

## Safe Bottom Line

```text
We contain the soldiers by forcing every killer into a labeled lane,
then showing the lanes cannot guard all the survivor rooms efficiently.
```
