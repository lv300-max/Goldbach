# Current Status

```text
GOLDBACH MIRROR WORKBENCH ACTIVE
K12 AND K13 FINITE WINDOWS BROKEN
K13.431 HELD IN CURRENT FINITE TESTING
HOTEL CITY / DMV CLASSIFICATION SYSTEM ADDED
UNIVERSAL RESCUE LEMMA STILL THE ANALYTIC TARGET
```

## Core Setup

For an even number `E = 2C`, every mirror gap `g` gives:

```text
left  = C - g
right = C + g
E = (C - g) + (C + g) = 2C
```

A BOTH hit occurs when:

```text
prime(C-g) AND prime(C+g)
```

The first such gap is:

```text
firstBothG
```

The normalized pressure score is:

```text
trueK = firstBothG / log(C)^2
```

The full door-to-door spacing is:

```text
D = 2 * firstBothG
```

## Current Boss Row

```text
C = 3,889,129,261,038,184
E = 7,778,258,522,076,368
firstBothG = 17,307
D = 34,614
trueK = 13.4309400510447
D mod 30 = 24
pairStart = 3|5
P29 survivors = 582
S17 survivors = 757
tail1/tail2/tail4 = 6 / 16 / 28
```

Current finite wall around the boss:

```text
K13.430 = MISS
K13.431 = HIT at boundary
13.430 < current finite wall <= 13.431
```

## Superseded Older Status

Older repository notes treated `K=12` as the strongest finite ceiling. That is now superseded.

Current status:

```text
K12 = broken
K13 = broken
K13.431 = held in current finite testing
```

## Recent Finite Evidence Snapshot

### 5-minute unique sweep

```text
runtime = 300.006s
unique rows = 4,022,759
K13.431 misses = 0
max trueK = 13.4309400510447
best C = 3,889,129,261,038,184
verdict = K13_431_HELD_FINITE_IN_5MIN_UNIQUE_SWEEP
```

### 6-test / 2-minute / 10-core suite

```text
unique rows = 9,229,532
K13.431 misses = 0
trueK >= 13 rows = 0 outside boss context
tail1-zero danger rows = 0
global max trueK = 10.323590888035527 at C = 3,209,851,851,697,528
final finite verdict = LARGE_PRIME_FULL_COVER_FOUND_FINITE
```

Important rows from that suite:

```text
hot row:
C = 3,209,851,851,697,528
firstBothG = 13,161
trueK = 10.323590888035527
pairStart = 3|17
P29 = 441

fullCover / baby-boss row:
C = 3,194,349,700,443,064
firstBothG = 12,225
trueK = 9.591986184281602
pairStart = 3|5
P29 = 417

corridor row:
C = 3,912,698,353,475,078
firstBothG = 12,915
trueK = 10.019195344119744
pairStart = L|3
P29 = 457

tailWeak row:
C = 3,889,134,139,471,741
firstBothG = 12,030
trueK = 9.335771509911405
pairStart = L|L
P29 = 405
```

## Current Working Interpretation

The older `K12/K13 always works` idea is dead.

The active mechanism now being studied is:

```text
P29 survivor mass + tail rescue + state-specific DMV identity
```

The boss behaves like a gravity well because it traps survivor pressure longer than nearby rows.

The strongest current visible difference between boss and baby-boss:

```text
boss P29 survivors      = 582
baby-boss P29 survivors = 417
difference              = 165
```

## Hotel City / DMV Classification Status

The workbench now includes a deterministic classification architecture:

```text
City
└── State / Hotel
    └── Floor
        └── Room
            └── DMV ID
                └── Echo Bridges
```

Core rule:

```text
Every C gets exactly one home state.
Every C can carry zero or more echo bridges.
Every C keeps returnAddress = C.
No C escapes classification.
```

Best current DMV sorter:

```text
homeState / D-width / P29 bucket / tail bucket / K bucket / suffix
```

Boss DMV ID:

```text
3|5 / D24 / P29_BOSS / TAIL_STRONG / K13 / 37|3;3|11
```

## State-Specific ID Rules

Different states use different useful fields.

```text
3|5  state: P29 + tail + K + D-width + suffix
3|17 state: suffix rhythm + P29 + K + D-width
L|3  state: side-leak shape + D-width + P29 + tail
L|L  state: tail rescue + suffix + P29 + K
```

## Current Best Theorem Target

The analytic wall remains a rescue statement:

```text
For sufficiently large C, prove that at least one BOTH-prime hit appears inside a bounded K log^2(C) mirror window.
```

But the computational classification target is now sharper:

```text
Explain why high survivor mass plus tail rescue keeps producing a prime-prime door before the current finite wall.
```

## Active Next Tests

```text
1. Boss DMV ID stress test over larger state neighborhoods
2. State-width DMV test using pairStart + D mod 30 + P29 + tail
3. Boss vs baby-boss leak map to locate where the +165 survivor difference emerges
4. Hotel/state classification validator over wider C ranges
5. Color City visualization linking home state, P29 bucket, tail bucket, and K bucket
```

## Safe Repository Statement

```text
Goldbach is reframed as a folded hallway / mirror-center rescue problem.
The new workbench classifies every center C into a state/hotel/room identity,
then measures survivor pressure and tail rescue inside that identity.
The current finite boss row is C = 3,889,129,261,038,184 with trueK = 13.4309400510447.
K12 and K13 finite window claims are superseded; K13.431 is the current held finite backwall in these tests.
```