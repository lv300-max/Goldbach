# IMPORTED 2026-05-09 CLEANUP PACKET COMPARISON

## Status

IMPORTED REFERENCE PACKET - COMPARED, NOT CANONICAL

Imported source files:

```text
imports/2026-05-09_cleanup_packet/GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.md
imports/2026-05-09_cleanup_packet/GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.json
```

Canonical current files remain:

```text
GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.md
evidence/GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.json
GOLDBACH_GREEDY_LANE_DECAY_CURVE.md
GOLDBACH_OVERLAP_WASTE_CURVE.md
GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT.md
```

## Main Comparison

The imported cleanup packet matches the canonical cleanup packet on the core
boss definitions and counts.

Exact matches confirmed:

```text
boss S17 = 757
boss S29 = 582
boss final20 = FOE 13 / HALF-L 4 / HALF-R 3 / BOTH 0 / M1 3
boss top left killers begin:
large/unknown 71, 31 19, 41 17, 43 13, 37 13
boss top right killers begin:
large/unknown 83, 31 23, 37 15, 41 12, 47 11
```

So this imported packet is consistent with the canonical cleanup on the main
definition question:

```text
the earlier 758 vs 582 issue was definition drift, not a math contradiction
```

## What The Imported Packet Adds

The imported packet is useful as a clean local checkpoint for:

```text
S17 / S19 / S23 / S29 definitions
boss hot-row comparison
final20 / final50 / final100 tail summaries
```

It is a valid finite reference.

## What The Imported Packet Does Not Cover

It does not include the later theorem-facing bridge work:

```text
greedy-lane decay
overlap-waste curve
uncovered survivor audit
structured leftover residue family note
```

So it should not replace the canonical current packet.

## Score Comparison

The imported packet carries older, lower readiness percentages:

```text
Framework / notation: 98%
Finite engine stack: 91%
Classification consistency: 90%
No-Escape target clarity: 86%
Actual No-Escape proof: 18-20%
Universal Goldbach proof: 24-27%
```

Current canonical percentages are higher because the theorem map is now more
complete and the later bridge tests exist:

```text
Framework / notation:        99%
Finite engine stack:         97%
Classification consistency:  97%
No-Escape target clarity:    97%
Large-Prime No-Cover proof:  39-46%
Universal Goldbach proof:    37-44%
```

The imported score update should be treated as historical, not current.

## User-Supplied Summary vs Canonical Packet

The user summary reported:

```text
boss top20 coverage = 36.9%
boss top100 coverage = 67.9%
boss top291 coverage = 100%
boss top200 leftovers = 87
cluster {3,15,27} share = 100%
```

Current canonical greedy-lane audit gives:

```text
boss top20 coverage = 36.60%
boss top100 coverage = 67.18%
boss top291 coverage = 100.00%
boss top200 leftovers = 91
```

So:

1. The top20/top100/top291 numbers are directionally consistent and close.
2. The top200 leftover count does not exactly match the canonical greedy audit.
3. The imported cleanup packet itself does not contain the boss top200 cluster audit, so that claim is not imported as canonical evidence from those files alone.

## Bottom Line

The imported cleanup packet is consistent with the canonical local cleanup on
definitions and core boss counts.

It is safe to keep as an imported reference packet.

It does **not** supersede the current theorem-facing packet, because it does not
include:

```text
overlap-loss evidence
leftover survivor clustering
structured leftover residue family target
```
