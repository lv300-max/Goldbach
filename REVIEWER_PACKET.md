# Reviewer Packet - Goldbach No-Escape Workbench

## Safe Status

```text
FINITE EVIDENCE ONLY
UNIVERSAL PROOF OPEN
LARGE-PRIME NO-COVER LEMMA OPEN
```

This packet is the current reviewer entry point. It supersedes older K12-era
status files for review purposes.

Canonical reviewer Q&A packet:

```text
REVIEWER_WEAKNESS_QA_PACKET.md
GOLDBACH_NO_COVER_BRIDGE_1_PAGE_SUMMARY.md
```

Imported external reference packet:

```text
IMPORTED_2026_05_09_CLEANUP_PACKET_COMPARISON.md
IMPORTED_2026_05_09_BOSS_CLUSTER_BRIDGE_COMPARISON.md
```

Use it as a consistency check only, not as the canonical current status file.

## What Is Being Claimed

The workbench gives a structured finite-evidence attack on the Goldbach mirror
problem.

For an even number:

```text
E = 2C
```

and a mirror gap:

```text
Room(C,g) = (C-g, C+g)
```

a BOTH escape occurs when:

```text
C-g is prime
C+g is prime
```

The current target is not “Goldbach proven.” The current target is:

```text
Large-Prime No-Cover Lemma
```

Plain statement:

```text
After small-prime filtering, survivor gaps cannot all be permanently killed
on the left or right side. A two-sided prime escape must eventually occur.
```

## What Is Not Being Claimed

Do not read this packet as claiming:

```text
K13.431 is proven.
Tail pressure proves Goldbach.
No-Escape is solved.
Goldbach is proven.
```

Correct reviewer-safe read:

```text
The No-Escape target is the missing theorem.
The current evidence is finite support for the Large-Prime No-Cover direction.
```

## Canonical Current Files

Read in this order:

1. `README.md`
2. `REVIEWER_WEAKNESS_QA_PACKET.md`
3. `GOLDBACH_NO_COVER_BRIDGE_1_PAGE_SUMMARY.md`
4. `GOLDBACH_NO_ESCAPE_DIRECTIONS.html`
5. `NO_ESCAPE_THEOREM.md`
6. `STRUCTURED_LEFTOVER_RESIDUE_FAMILY_NOTE.md`
7. `GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR.md`
8. `GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.md`
9. `GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.md`
10. `GOLDBACH_NEXT3_NO_ESCAPE_FOLLOWUP.md`
11. `GOLDBACH_GREEDY_LANE_DECAY_CURVE.md`
12. `GOLDBACH_OVERLAP_WASTE_CURVE.md`
13. `GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT.md`
14. `GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.md`
15. `GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md`
16. `GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md`

Evidence files:

```text
evidence/GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR.json
evidence/GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.json
evidence/GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.json
evidence/GOLDBACH_NEXT3_NO_ESCAPE_FOLLOWUP.json
evidence/GOLDBACH_GREEDY_LANE_DECAY_CURVE.json
evidence/GOLDBACH_OVERLAP_WASTE_CURVE.json
evidence/GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT.json
evidence/GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.json
evidence/GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.json
evidence/GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.json
```

Reproducible engines:

```text
goldbach_filtered_no_escape_validator.js
goldbach_3h_8core_no_escape_proof_assault.js
goldbach_next3_no_escape_followup.js
goldbach_greedy_lane_decay_curve.js
goldbach_overlap_waste_curve.js
goldbach_uncovered_residue_survivor_audit.js
goldbach_final_5min_no_cover_bridge_16core.js
goldbach_greedy_vs_optimal_cover_gap_16core.js
goldbach_15min_greedy_vs_optimal_cover_gap_16core.js
```

Shared report rule:

```text
goldbach_report_rule.js
```

## Current Evidence Summary

### Filtered Validator

```text
records converted = 1,265
proof-scale rows = 65
returnAddress mismatches = 0
proof-scale K13.431 misses = 0
proof-scale full coverage before rescue = 0
```

### Cleanup Test

```text
boss S17 = 757
boss S29 = 582
K13.431 misses = 0
definition issue resolved: old 758 vs 582 was S17/P29 mixing
```

### 3H 8-Core No-Escape Assault

```text
runtime = 10,800.043s
workers = 8
unique rows tested = 102,211,417
K13.431 misses = 0
full coverage candidates inside K13.431 = 0
max trueK = 13.4309400510447
max S29 = 706
```

Strong rows:

```text
boss trueK = 13.4309400510447, S29 = 582
best non-boss trueK = 13.201583059795, S29 = 557
best hostile CRT trueK = 13.157604706523, S29 = 657
max raw S29 row trueK = 11.639244409992, S29 = 706
```

### Next3 Followup

```text
rows analyzed = 23
K13.431 breaks = 0
audit errors = 0
verdict = FINITE_DIFFUSE_KILLER_NET_PATTERN_STRONG
```

Normalized survivor mass:

```text
boss S29/log^2(C) = 0.451656
best visitor S29/log^2(C) = 0.440262
raw max S29 row S29/log^2(C) = 0.388470
```

Killer-net diffusion:

```text
boss top20 lane cover = 36.43%
boss greedy lanes = 291
best hostile visitor top20 lane cover = 35.77%
best hostile visitor greedy lanes = 311
```

### Greedy-Lane Decay Curve

```text
rows analyzed = 5
verdict = FINITE_DIFFUSE_KILLER_NET_DECAY_CONFIRMED
boss top10/top20/top50/top100/top200/top291 = 23.88% / 36.60% / 55.50% / 67.18% / 84.36% / 100.00%
hot row 1 top10/top20/top50/top100/top200/top291 = 22.62% / 34.47% / 54.22% / 68.40% / 86.36% / 100.00%
hot row 2 top10/top20/top50/top100/top200/top291 = 23.58% / 35.79% / 55.16% / 68.42% / 89.47% / 100.00%
hostile visitor top10/top20/top50/top100/top200/top291 = 24.81% / 36.38% / 54.64% / 67.58% / 82.80% / 96.65%
raw max S29 top10/top20/top50/top100/top200/top291 = 22.38% / 33.85% / 52.12% / 65.58% / 79.75% / 92.63%
```

### Overlap Waste Curve

```text
rows analyzed = 5
verdict = FINITE_OVERLAP_WASTE_SUPPORTS_NO_COVER_TARGET
boss overlap waste / covered = 0.1237
hot row 1 overlap waste / covered = 0.1257
hot row 2 overlap waste / covered = 0.1242
hostile visitor overlap waste / covered = 0.1324, uncovered after top 291 = 22
raw max S29 overlap waste / covered = 0.1133, uncovered after top 291 = 52
```

### Uncovered Residue Survivor Audit

```text
rows analyzed = 2
verdict = FINITE_UNCOVERED_SURVIVORS_SHOW_PARTIAL_CLUSTERING
hostile visitor uncovered = 22, all HALF_L, top g mod 30 = 15 / 27 / 3
raw max S29 uncovered = 52, HALF_L dominant, top g mod 30 = 27 / 15 / 3
```

### Greedy vs Optimal Cover Attack

```text
Artifact: GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md
JSON: evidence/GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.json
verdict = NO_COMPACT_COVER_FOUND_IN_BOUNDED_SEARCH
hidden compact cover found = no
max absolute gap = 0
max percent gap = 0.00%
```

```text
Artifact: GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md
JSON: evidence/GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.json
runtime = 900.456s
total iterations = 3,183,126
verdict = NO_COMPACT_COVER_FOUND_IN_15MIN_BOUNDED_SEARCH
hidden compact cover found = no
max absolute gap = 0
max percent gap = 0.00%
```

```text
Artifact: GOLDBACH_TIE_PATH_INVARIANCE_SUMMARY.md
JSON: evidence/GOLDBACH_TIE_PATH_INVARIANCE_SUMMARY.json
verdict = TIE_PATH_COUNTS_MOVE_BUT_BRIDGE_SHAPE_STAYS_STABLE
canonical top200 leftovers / HALF-L / right killers = 91 / 53 / 53
imported top200 leftovers / HALF-L / right killers = 88 / 27 / 27
stable invariants = mod30 pocket real, deeper split real, right killers diffuse, max repeat 1
```

Reviewer-safe note:

```text
NO_COMPACT_COVER_FOUND_IN_BOUNDED_SEARCH_NOTE.md
```

### Killer Containment Box Move

```text
Artifact: GOLDBACH_KILLER_CONTAINMENT_BOX_ENGINE.md
JSON: evidence/GOLDBACH_KILLER_CONTAINMENT_BOX_ENGINE.json
verdict = SURVIVOR_BOXES_SPLIT_FASTER_THAN_KILLER_LANES_REPEAT_FINITE
money result = leftover buckets many, unique right killers many, max repeat low, top killers cover low %
```

Theorem-facing note:

```text
KILLER_CONTAINMENT_BOX_NOTE.md
```

Boss-focused followup suite:

```text
GOLDBACH_BOX_GUARD_RATIO_NEXT_TESTS.md
```

## Current Readiness

```text
Framework / notation:        99%
Finite engine stack:         98%
Classification consistency:  98%
No-Escape target clarity:    97%
Large-Prime No-Cover proof:  44-46%
Universal Goldbach proof:    42-44%
```

These are internal readiness estimates. They are not formal proof percentages.

## Reviewer Checks To Run

Syntax and JSON checks:

```bash
node --check goldbach_3h_8core_no_escape_proof_assault.js
node --check goldbach_next3_no_escape_followup.js
node --check goldbach_greedy_lane_decay_curve.js
node --check goldbach_overlap_waste_curve.js
node -e "JSON.parse(require('fs').readFileSync('evidence/GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.json','utf8')); console.log('3h JSON ok')"
node -e "JSON.parse(require('fs').readFileSync('evidence/GOLDBACH_NEXT3_NO_ESCAPE_FOLLOWUP.json','utf8')); console.log('next3 JSON ok')"
node -e "JSON.parse(require('fs').readFileSync('evidence/GOLDBACH_GREEDY_LANE_DECAY_CURVE.json','utf8')); console.log('greedy JSON ok')"
node -e "JSON.parse(require('fs').readFileSync('evidence/GOLDBACH_OVERLAP_WASTE_CURVE.json','utf8')); console.log('overlap JSON ok')"
```

Short rerun:

```bash
node goldbach_3h_8core_no_escape_proof_assault.js --workers=8 --seconds=60
node goldbach_next3_no_escape_followup.js
node goldbach_greedy_lane_decay_curve.js
node goldbach_overlap_waste_curve.js
```

Full rerun:

```bash
node goldbach_3h_8core_no_escape_proof_assault.js --workers=8 --seconds=10800
node goldbach_next3_no_escape_followup.js
node goldbach_greedy_lane_decay_curve.js
node goldbach_overlap_waste_curve.js
```

## Main Open Gap

The remaining theorem-level gap is:

```text
Prove that large-prime left/right residue killer lanes cannot fully cover
all survivor gaps for every sufficiently large center C.
```

In other words:

```text
Perfect killer nets cannot persist forever.
```

Current finite evidence says the observed high-pressure nets are diffuse and
still leak. A proof must turn that into a uniform theorem.

## Reviewer Warning About Older Files

Older exploratory files remain because the user asked not to delete old work.
Some old drafts may contain superseded language. For review, treat this packet
and the canonical current files above as the source of truth.
