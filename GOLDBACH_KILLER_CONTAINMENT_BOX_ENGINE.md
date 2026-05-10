# GOLDBACH_KILLER_CONTAINMENT_BOX_ENGINE

## Verdict

`SURVIVOR_BOXES_SPLIT_FASTER_THAN_KILLER_LANES_REPEAT_FINITE`

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
THIS IS A CONTAINMENT SUMMARY, NOT A PROOF.

## Containment Rule

Once survivor gaps are boxed by deeper residue structure, the large-prime killers must also be boxed as periodic lanes. The obstruction fails to stay compact when the survivor boxes split faster than the killer lanes can repeat.

## Box Summary

| row | S29 | leftovers@200 | leftovers@291 | mod30 boxes | mod210 boxes | mod2310 boxes | mod30030 boxes | cluster30 | HALF-L | unique right killers | max repeat | right compactness |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| boss | 582 | 91 | 0 | 3 | 12+ | 12+ | 12+ | 100% | 53 | 53 | 1 | `RIGHT_KILLERS_DIFFUSE` |
| hot1 | 441 | 42 | 0 | 3 | 12+ | 12+ | 12+ | 35.71% | 37 | 37 | 1 | `RIGHT_KILLERS_DIFFUSE` |
| hot2 | 457 | 41 | 0 | 3 | 12+ | 12+ | 12+ | 24.39% | 41 | 41 | 1 | `RIGHT_KILLERS_DIFFUSE` |
| hostile_visitor | 657 | 113 | 22 | 3 | 12+ | 12+ | 12+ | 100% | 65 | 65 | 1 | `RIGHT_KILLERS_DIFFUSE` |
| raw_max_s29 | 706 | 143 | 52 | 3 | 12+ | 12+ | 12+ | 100% | 45 | 45 | 1 | `RIGHT_KILLERS_DIFFUSE` |

## Cover-Matrix Read

- rows = survivor gaps
- columns = killer lanes
- cell = 1 if the lane kills the gap, else 0
- higher-modulus box counts marked `12+` mean the canonical bridge packet stored only the top 12 listed buckets, not the full exact bucket count
- current finite result: many survivor boxes, many killer lanes, low repeat, low compactness

## Money Result

leftover buckets = many; unique right killers = many; max repeat = low; top killers cover low %. The soldiers are contained and scattered in the current finite packet.

