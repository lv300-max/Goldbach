# GOLDBACH LOCAL PUMP CLEANUP TESTS

## Verdict

Clean finite test. The survivor-count mismatch is explained by definition drift:

- **Boss S17 = 757**
- **Boss S29 = 582**

So the earlier `758 vs 582` issue was almost certainly **S17/P29 definition mixing**, not a math failure.

## Normalized definitions

- **S17** = odd mirror gaps before first BOTH surviving divisibility by 3,5,7,11,13,17 on both sides.
- **S19** = S17 plus 19.
- **S23** = S19 plus 23.
- **S29** = S23 plus 29.
- **Final tails** = last S29 survivors before first BOTH.

## Results

| Row | firstBothG | trueK | S17 | S19 | S23 | S29 | Final20 FOE | Final20 HALF-L | Final20 HALF-R | K13.431 miss |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| boss | 17307 | 13.430940051045 | 757 | 685 | 626 | 582 | 13 | 4 | 3 | False |
| hot_non_boss_1 | 13161 | 10.323590888036 | 575 | 519 | 474 | 441 | 14 | 4 | 2 | False |
| hot_non_boss_2 | 12915 | 10.019195344120 | 561 | 531 | 486 | 457 | 14 | 4 | 2 | False |
| octave_below_P29 | 627 | 0.486577696453 | 27 | 25 | 23 | 21 | 18 | 2 | 0 | False |
| octave_above_P29 | 1557 | 1.208295586831 | 69 | 62 | 56 | 51 | 19 | 1 | 0 | False |

## Boss packet

- C = 3,889,129,261,038,184
- E = 7,778,258,522,076,368
- firstBothG = 17,307
- trueK = 13.4309400510447
- K13.430 = MISS
- K13.431 = HIT
- S17 = 757
- S29 = 582

## Hot row comparison

The hot rows are real pressure rows, but not boss-level:

- hot_non_boss_1 trueK = 10.323590888035527, S29 = 441
- hot_non_boss_2 trueK = 10.019195344119744, S29 = 457

## Octave result

The P29 octave copies are not bosses:

- octave below trueK = 0.4865776964531175
- octave above trueK = 1.2082955868306542

## Local no-cover check

For the boss final-20 S29 survivor tail:

- FOE = 13
- HALF-L = 4
- HALF-R = 3
- M1 = 3
- BOTH before rescue = 0

This is not a proof, but it keeps the two-sided tail-pressure idea alive.

## Updated readiness

- Framework / notation: 98%
- Finite engine stack: 91%
- Classification consistency: 90%
- No-Escape target clarity: 86%
- Actual No-Escape proof: 18-20%
- Universal Goldbach proof: 24-27%

## Warning

FINITE EVIDENCE ONLY. UNIVERSAL PROOF REMAINS OPEN. HELD FINITE DOES NOT MEAN PROVEN.
