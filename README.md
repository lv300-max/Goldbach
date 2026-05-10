# Goldbach No-Escape Workbench

Reviewer start here:

```text
REVIEWER_PACKET.md
REVIEWER_WEAKNESS_QA_PACKET.md
GOLDBACH_NO_COVER_BRIDGE_1_PAGE_SUMMARY.md
GOLDBACH_NO_ESCAPE_DIRECTIONS.html
NO_ESCAPE_THEOREM.md
STRUCTURED_LEFTOVER_RESIDUE_FAMILY_NOTE.md
```

## Status

```text
FINITE EVIDENCE STRONG
LARGE-PRIME NO-COVER TARGET OPEN
UNIVERSAL GOLDBACH PROOF NOT CLAIMED
```

This repository studies Goldbach's conjecture through a mirror-center framework.
Every even number is written as:

```text
E = 2C
```

Every mirror gap `g` gives:

```text
left  = C - g
right = C + g
```

A center is rescued when both sides are prime:

```text
BOTH_C(g) = 1_prime(C-g) * 1_prime(C+g)
```

Goldbach for `E = 2C` is equivalent to:

```text
there exists g such that BOTH_C(g) = 1
```

## Current Focus

The active proof target is the **Large-Prime No-Cover Lemma**:

```text
After small-prime filtering, survivor gaps cannot all be permanently killed
on the left or right side. A two-sided prime escape must eventually occur.
```

In bounded workbench form:

```text
W = floor(K log^2(C))
```

The finite tests ask:

```text
Can large-prime killer lanes fully cover every survivor gap before a BOTH escape?
```

## Current Evidence Snapshot

Latest reviewer-ready packet:

| Artifact | Result |
|---|---|
| `GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR.md` | canonical filtered DMV conversion; proof-scale `K13.431` misses = 0 |
| `GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.md` | normalized boss counts: `S17=757`, `S29=582` |
| `GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.md` | 102,211,417 unique rows; `K13.431` misses = 0; full coverage candidates = 0 |
| `GOLDBACH_NEXT3_NO_ESCAPE_FOLLOWUP.md` | normalized survivor density puts boss back on top; killer nets are diffuse |
| `GOLDBACH_GREEDY_LANE_DECAY_CURVE.md` | top-10/20/50/100/200/291 greedy lane coverage confirms diffuse killer nets |
| `GOLDBACH_OVERLAP_WASTE_CURVE.md` | per-lane gain vs overlap waste measures the missing inequality shape |
| `GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT.md` | uncovered survivors after top 291 lanes show partial residue clustering |
| `GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.md` | focused 16-core bridge packet for boss boundary, cluster breakup, and right-killer diffusion |
| `GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md` | bounded-search check for whether smarter non-greedy covers beat greedy on boss, hot1, and hot2 |
| `GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md` | 15-minute bounded-search followup on whether a hidden compact cover exists beyond greedy |
| `GOLDBACH_TIE_PATH_INVARIANCE_SUMMARY.md` | tiny defense note showing tie-path counts can move while the bridge shape stays stable |
| `NO_COMPACT_COVER_FOUND_IN_BOUNDED_SEARCH_NOTE.md` | theorem-facing note for the bounded-search result against the greedy-vs-optimal weakness |
| `GOLDBACH_KILLER_CONTAINMENT_BOX_ENGINE.md` | containment-box summary engine for survivor boxes, killer-lane boxes, and cover-matrix read |
| `KILLER_CONTAINMENT_BOX_NOTE.md` | theorem-facing note for boxing survivors and killer lanes in the bounded arena |
| `GOLDBACH_BOX_GUARD_RATIO_NEXT_TESTS.md` | boss-focused next-test suite for box growth, guard repeat, box/guard ratio, and future right-cover probe |
| `STRUCTURED_LEFTOVER_RESIDUE_FAMILY_NOTE.md` | next theorem note for structured leftover residue families |
| `IMPORTED_2026_05_09_BOSS_CLUSTER_BRIDGE_COMPARISON.md` | imported local tie-model corroboration for boss cluster breakup and right-killer diffusion |

Latest percentages:

```text
Framework / notation:        99%
Finite engine stack:         98%
Classification consistency:  98%
No-Escape target clarity:    97%
Large-Prime No-Cover proof:  44-46%
Universal Goldbach proof:    42-44%
```

These percentages are internal readiness estimates, not proof percentages in the formal mathematical sense.

## Strongest Current Rows

Boss row:

```text
C = 3,889,129,261,038,184
firstBothG = 17,307
trueK = 13.4309400510447
S29 = 582
S29/log^2(C) = 0.451656
DMV = 3|5 / D24 / P29_BOSS / TAIL_STRONG / K13
```

Best non-boss K13 visitor from the 3-hour assault:

```text
C = 3,209,851,850,270,339
trueK = 13.201583059795
S29 = 557
DMV = 19|L / D0 / P29_BOSS / TAIL_STRONG / K13
```

Best hostile CRT visitor:

```text
C = 59,825,417,609,829,034
trueK = 13.157604706523
S29 = 657
S29/log^2(C) = 0.440262
DMV = L|31 / D0 / P29_BOSS / TAIL_STRONG / K13
```

Max raw survivor mass:

```text
C = 3,268,329,311,518,612,504
trueK = 11.639244409992
S29 = 706
S29/log^2(C) = 0.388470
DMV = L|L / D6 / P29_BOSS / TAIL_STRONG / K10
```

## Key Takeaway

Raw survivor mass can beat the boss, but normalized survivor pressure and first-rescue delay still keep the boss on top in the current packet.

The strongest new structural signal is:

```text
High-pressure killer nets are diffuse.
Top-20 killer lanes cover only about one-third of S29 survivor gaps.
The boss needs 291 greedy lanes; the strongest hostile visitor needs 311.
```

Latest greedy-lane decay:

```text
boss top20/top291 = 36.60% / 100.00%
hot row 1 top20/top291 = 34.47% / 100.00%
hot row 2 top20/top291 = 35.79% / 100.00%
hostile visitor top20/top291 = 36.38% / 96.65%
raw max S29 top20/top291 = 33.85% / 92.63%
```

Latest overlap-waste curve:

```text
boss overlap waste / covered = 0.1237, uncovered after top 291 = 0
hostile visitor overlap waste / covered = 0.1324, uncovered after top 291 = 22
raw max S29 overlap waste / covered = 0.1133, uncovered after top 291 = 52
```

Latest uncovered-survivor audit:

```text
hostile visitor uncovered = 22, all HALF_L, top g mod 30 = 15/27/3
raw max S29 uncovered = 52, mostly HALF_L, top g mod 30 = 27/15/3
verdict = FINITE_UNCOVERED_SURVIVORS_SHOW_PARTIAL_CLUSTERING
```

This supports the Large-Prime No-Cover direction as finite evidence only.

## Repository Map

| File | Purpose |
|---|---|
| `REVIEWER_PACKET.md` | current reviewer entry packet |
| `REVIEWER_WEAKNESS_QA_PACKET.md` | direct answers to the main weakness-hunter reviewer questions |
| `GOLDBACH_NO_COVER_BRIDGE_1_PAGE_SUMMARY.md` | one-page mini-packet with only the core bridge definitions, results, and missing inequality |
| `GOLDBACH_NO_ESCAPE_DIRECTIONS.html` | visual directions and current status |
| `NO_ESCAPE_THEOREM.md` | theorem target and Large-Prime No-Cover wording |
| `STRUCTURED_LEFTOVER_RESIDUE_FAMILY_NOTE.md` | next theorem note after the overlap-loss and leftover audits |
| `GOLDBACH_FILTERED_NO_ESCAPE_VALIDATOR.md` | canonical filtered DMV validator report |
| `GOLDBACH_LOCAL_PUMP_CLEANUP_TESTS.md` | S17/S29 definition cleanup report |
| `GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.md` | 3-hour 8-core finite assault report |
| `GOLDBACH_NEXT3_NO_ESCAPE_FOLLOWUP.md` | residue-lane and normalization followup |
| `GOLDBACH_GREEDY_LANE_DECAY_CURVE.md` | greedy killer-lane coverage decay report |
| `GOLDBACH_OVERLAP_WASTE_CURVE.md` | overlap-loss and marginal-gain decay report |
| `GOLDBACH_UNCOVERED_RESIDUE_SURVIVOR_AUDIT.md` | residue and side audit for survivors left after top 291 lanes |
| `GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.md` | canonical final bridge packet for boss clustering and right-killer diffusion |
| `GOLDBACH_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md` | bounded-search test for hidden compact covers that greedy may have missed |
| `GOLDBACH_15MIN_GREEDY_VS_OPTIMAL_COVER_GAP_16CORE.md` | stronger 15-minute bounded-search test against the same hidden-compact-cover weakness |
| `GOLDBACH_TIE_PATH_INVARIANCE_SUMMARY.md` | tiny tie-path defense summary for count drift versus stable bridge shape |
| `NO_COMPACT_COVER_FOUND_IN_BOUNDED_SEARCH_NOTE.md` | theorem-facing interpretation of the bounded-search no-compact-cover result |
| `GOLDBACH_KILLER_CONTAINMENT_BOX_ENGINE.md` | finite containment-box view of survivor rooms versus killer-lane rooms |
| `KILLER_CONTAINMENT_BOX_NOTE.md` | theorem-facing wording for the containment-box move |
| `GOLDBACH_BOX_GUARD_RATIO_NEXT_TESTS.md` | next-test suite that packages box growth, guard repeat, ratio, future right-cover, and bounded non-greedy results |
| `IMPORTED_2026_05_09_CLEANUP_PACKET_COMPARISON.md` | compare note for the imported external cleanup packet |
| `IMPORTED_2026_05_09_BOSS_CLUSTER_BRIDGE_COMPARISON.md` | compare note for the imported boss-cluster local tie-model packet |
| `evidence/` | JSON evidence files |
| `goldbach_3h_8core_no_escape_proof_assault.js` | reproducible 3-hour runner |
| `goldbach_next3_no_escape_followup.js` | exact followup analyzer |
| `goldbach_greedy_lane_decay_curve.js` | focused greedy-lane decay analyzer |
| `goldbach_overlap_waste_curve.js` | focused overlap-waste analyzer |
| `goldbach_uncovered_residue_survivor_audit.js` | focused audit of survivors left after top 291 lanes |
| `goldbach_final_5min_no_cover_bridge_16core.js` | focused 16-core bridge packet for boss boundary, cluster breakup, and right-killer diffusion |
| `goldbach_greedy_vs_optimal_cover_gap_16core.js` | bounded non-greedy cover search against the greedy bridge packet |
| `goldbach_15min_greedy_vs_optimal_cover_gap_16core.js` | time-based 15-minute bounded non-greedy cover search against the same bridge packet |
| `goldbach_tie_path_invariance_summary.js` | tiny invariance summary that compares canonical and imported boss tie paths |
| `goldbach_killer_containment_box_engine.js` | finite containment-box summary engine built from the canonical bridge packet |
| `goldbach_box_guard_ratio_next_tests.js` | boss-focused next-test suite driven by canonical and imported bridge evidence |

## Reviewer Warning

Older exploratory files remain in the repository and may contain superseded K12-era wording or proof-sounding drafts. Treat the files listed in `REVIEWER_PACKET.md` as canonical for current review.

This repository does **not** claim a completed proof of Goldbach.
