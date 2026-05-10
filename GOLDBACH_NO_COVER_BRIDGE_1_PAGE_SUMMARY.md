# GOLDBACH NO-COVER BRIDGE — 1 PAGE SUMMARY

## 1. One-sentence idea

The obstruction begins as a visible mod30 pocket, but deeper residue boxing splits it into many small rooms while the right-side killer guards fail to repeat; **the rooms multiply faster than the guards repeat.**

---

## 2. Mirror setup

Every even number is written as:

```txt
E = 2C
```

For each mirror gap `g`:

```txt
left  = C - g
right = C + g
```

The mirror identity is:

```txt
(C - g) + (C + g) = 2C = E
```

So the goal is to find one gap `g` where:

```txt
C - g is prime
C + g is prime
```

That is called a BOTH escape.

## 3. Survivor definition

Fix a small-prime cutoff `P`.

For the current packet:

```txt
P = 29
```

Define:

```txt
S29(C,W)
```

as the survivor gaps after filtering out primes:

```txt
2,3,5,7,11,13,17,19,23,29
```

A gap `g` is in `S29` if neither side is divisible by those primes:

```txt
C - g is not divisible by any p <= 29
C + g is not divisible by any p <= 29
```

These are the possible escape doors.

## 4. Killer lane definition

A large-prime killer lane is a periodic residue lane that kills one side.

For a prime `p > 29`:

Left killer

```txt
C - g ≡ 0 mod p
```

so:

```txt
g ≡ C mod p
```

Right killer

```txt
C + g ≡ 0 mod p
```

so:

```txt
g ≡ -C mod p
```

So every killer guard can be labeled as:

```txt
side, prime p, residue
```

Plain meaning:

```txt
Every guard has a lane.
Every lane can be counted.
No guard gets to hide.
```

## 5. Boss row packet

Current boss row:

```txt
C = 3,889,129,261,038,184
E = 7,778,258,522,076,368
firstBothG = 17,307
trueK = 13.4309400510447
```

Boss survivor count:

```txt
S29 = 582
```

Known boundary:

```txt
K13.430 = MISS
K13.431 = HIT
```

## 6. Box-splitting result

The leftover pocket first appears at low resolution:

```txt
g mod 30 in {3,15,27}
```

But when the same leftovers are boxed by deeper moduli, the pocket breaks apart:

```txt
mod 30      -> 3 boxes
mod 210     -> 15 boxes
mod 2310    -> 68 boxes
mod 30030   -> 88 boxes
mod 510510  -> 88 boxes
```

Largest bucket share collapses:

```txt
36.36% -> 9.09% -> 3.41% -> 1.14% -> 1.14%
```

Meaning:

```txt
The pocket looks organized from far away,
but deeper zoom splits it into many tiny rooms.
```

## 7. Right-killer diffusion result

The important leftover type is:

```txt
HALF-L
```

That means:

```txt
C - g is prime
C + g is composite
```

So the left side already escaped.

To stop BOTH, the right side needs a killer.

Boss result:

```txt
HALF-L = 53
unique right killers = 53
max right-killer repeat = 1
```

Meaning:

```txt
53 rooms
53 different right-side guards
no guard repeats
```

This is the key structure:

```txt
The right-side cover is diffuse, not compact.
```

## 8. Greedy vs non-greedy defense

A bounded search tested whether greedy was missing a hidden compact cover.

Result:

```txt
NO_COMPACT_COVER_FOUND_IN_15MIN_BOUNDED_SEARCH
hidden compact cover: NO
max improvement gap: 0.00%
```

Boss row coverage:

```txt
N=20:  greedy 36.6%, best non-greedy 36.6%
N=50:  greedy 55.5%, best non-greedy 55.5%
N=100: greedy 67.18%, best non-greedy 67.18%
N=150: greedy 75.77%, best non-greedy 75.77%
N=200: greedy 84.36%, best non-greedy 84.36%
```

Meaning:

```txt
The diffuse cover was not just greedy being weak.
No better compact cover appeared in the bounded search.
```

## 9. Main bridge inequality

The target inequality is:

```txt
Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)|
```

In custom room/guard language:

```txt
covered rooms - wasted overlap < survivor rooms
```

Meaning:

```txt
The guards cannot cover every room.
```

For the leftover HALF-L family `L`, the sharper target is:

```txt
FutureRightCover(L) - FutureRightOverlapLoss(L) < |L|
```

Meaning:

```txt
future right-side guards cannot permanently cover every HALF-L leftover room.
```

## 10. Current bridge statement

The current bridge is:

```txt
Once survivor gaps are boxed by deeper residue structure,
the large-prime killers must also be boxed as periodic lanes.
The obstruction fails to stay compact when the survivor boxes split faster
than the killer lanes can repeat.
```

Short version:

```txt
The rooms multiply faster than the guards repeat.
```

## 11. Current conclusion

The boss row does not look like one clean permanent trap.

It looks like this:

```txt
1. small primes create survivor rooms
2. large primes try to guard those rooms
3. the low-level mod30 pocket appears
4. deeper residue boxes split the pocket apart
5. HALF-L leftovers need right-side guards
6. the right-side guards do not repeat
7. no compact cover appears in bounded search
```

This gives the current proof bridge:

```txt
Box splitting + guard diffusion + overlap waste
```

The next mathematical task is to turn this structural sentence:

```txt
The rooms multiply faster than the guards repeat.
```

into the formal inequality:

```txt
Coverage - OverlapLoss < Survivors
```

and then into the leftover version:

```txt
FutureRightCover - FutureRightOverlapLoss < Leftovers
```

That is the bridge.

This is clean, strong, and readable. This is the page you want at the front of the packet.
