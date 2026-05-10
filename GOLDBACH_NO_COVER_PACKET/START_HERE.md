# START HERE — Goldbach No-Cover Bridge

This packet is focused on one bridge idea:

**The rooms multiply faster than the guards repeat.**

## Core setup

Goldbach is written as a mirror problem:

E = 2C

left = C - g  
right = C + g

A BOTH escape happens when:

C - g is prime  
C + g is prime

## Bridge idea

After small-prime filtering, survivor gaps remain.

Large-prime killer lanes try to cover those survivor gaps.

The current bridge studies whether those killer lanes can cover every survivor gap, or whether the survivor boxes split faster than the killer lanes can repeat.

## Strongest current structure

- boss S29 = 582
- mod30 leftover pocket exists
- deeper residue boxes split: 3 -> 15 -> 68 -> 88 -> 88
- largest bucket share collapses: 36.36% -> 1.14%
- HALF-L = 53
- unique right killers = 53
- max right-killer repeat = 1
- bounded greedy-vs-non-greedy search found no hidden compact cover

## Target inequality

Coverage - OverlapLoss < Survivors

Meaning:

covered rooms - wasted overlap < survivor rooms

So at least one survivor room remains uncovered.

## Sharper leftover target

FutureRightCover - FutureRightOverlapLoss < Leftovers

Meaning:

future right-side guards cannot permanently cover every HALF-L leftover room.

## Main question

Can the box-splitting / guard-diffusion structure be turned into a real inequality?
