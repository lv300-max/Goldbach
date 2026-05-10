# Reviewer Weakness Q&A Packet

## Status

CANONICAL REVIEWER Q&A FOR WEAKNESS-HUNTER QUESTIONS

```text
FINITE EVIDENCE ONLY
UNIVERSAL PROOF REMAINS OPEN
LARGE-PRIME NO-COVER LEMMA NOT PROVEN
```

This file sits next to `REVIEWER_PACKET.md` and answers the specific questions
that a hostile reviewer would use to probe the current weak points.

## Core Rule

If an answer below says `OPEN`, that means the repository does not currently
have a proof of that point.

When possible, the answer includes:

1. what is already established
2. what is still missing
3. what exact note or test should answer it next

---

## First-Wave Weakness Questions

### 1. What exact theorem are you claiming?

Answer:

```text
Not Goldbach proven.
Not K13.431 proven.
Not Large-Prime No-Cover proven.
```

The current exact claim is:

```text
The repository has a formalized target theorem path and strong finite evidence
for the Large-Prime No-Cover direction.
```

Current target theorem:

```text
Large-Prime No-Cover Lemma
For sufficiently large C, the survivor set S_P(C,W) cannot be fully covered
by large-prime left/right killer lanes.
```

Status:

```text
FORMALIZED, NOT PROVEN
```

### 2. Where is the universal step?

Answer:

```text
It is missing.
```

Current work goes from:

```text
tested rows -> stable finite patterns
```

but not yet to:

```text
all sufficiently large C
```

What is needed:

```text
a theorem-level inequality or covering contradiction uniform in C
```

What to write next:

```text
UNIVERSAL_STEP_GAP_NOTE.md
```

Purpose:

```text
State exactly which finite observations are stable enough to aim for a uniform
all-C bound, and which are still only row-specific.
```

### 3. What is the exact inequality?

Answer:

The main bridge inequality is:

```text
Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)|
```

The narrower structured-leftover form is:

```text
FutureRightCover(L) - FutureOverlapLoss(L) < |L|
```

Current status:

```text
NOT PROVEN
```

What is already true:

```text
finite overlap-waste tests measure the shape of this inequality
```

What is missing:

```text
symbolic bounds for Coverage and OverlapLoss
valid for quantified ranges of C, P, and W
```

What to write next:

```text
OVERLAP_LOSS_INEQUALITY_DRAFT.md
```

### 4. Can large primes after your cutoff still cover everything?

Answer:

```text
Yes, this is the main open danger.
```

The relevant range is:

```text
P < p <= sqrt(C+W)
```

Current work only shows:

```text
finite tested rows do not exhibit a compact successful large-prime cover
```

It does not prove:

```text
all later large primes fail to finish the cover
```

What to test next:

```text
LATE_PRIME_FINISHER_STRESS_TEST
```

Goal:

```text
measure whether later primes become more efficient or less efficient after the
top greedy lanes have already consumed the easy coverage
```

### 5. Are your survivor definitions fixed?

Answer:

```text
Yes, now they are fixed and must not drift.
```

Current locked definitions:

```text
S17 = survives filters through primes 2,3,5,7,11,13,17
S29 = survives filters through primes 2,3,5,7,11,13,17,19,23,29
S37 = survives filters through primes <= 37
S41 = survives filters through primes <= 41
```

Current evidence:

```text
the old 758 vs 582 issue was definition mixing, not a math contradiction
```

What to write if needed:

```text
SURVIVOR_DEFINITIONS_LOCK.md
```

### 6. Is your greedy lane cover mathematically meaningful?

Answer:

```text
Meaningful as finite evidence, not yet as a theorem.
```

Greedy answers:

```text
how efficiently a strong algorithm can cover the current survivor set
```

Greedy does not yet prove:

```text
no better non-greedy cover exists
```

This is one of the biggest real weaknesses.

What to test next:

```text
GREEDY_VS_OPTIMAL_COVER_GAP
```

Question:

```text
Does a smarter non-greedy cover beat greedy enough to change the theorem read?
```

### 7. Does “diffuse” have a formal definition?

Answer:

```text
Not fully formalized yet.
```

Current finite working definition:

```text
DIFFUSE if top20 coverage < 45%
MIXED if top20 coverage is 45% to 70%
COMPACT if top20 coverage >= 70%
```

Additional finite markers:

```text
maxRightKillerRepeat
top10 right-killer coverage
top20 right-killer coverage
higher-modulus bucket explosion
```

What to write next:

```text
DIFFUSION_METRICS_LOCK.md
```

Purpose:

```text
replace visual language like "looks diffuse" with exact thresholded metrics
```

### 8. Why does bucket-splitting imply no permanent obstruction?

Answer:

```text
It does not imply that by itself.
```

What bucket-splitting currently shows:

```text
the obstruction is not one clean stable deep residue block
```

What it does not prove:

```text
the many smaller buckets cannot all be killed later
```

Needed next step:

```text
show that deeper splitting forces too many independent later killer lanes
with too much overlap waste
```

What to write next:

```text
BUCKET_SPLIT_TO_COVER_COST_NOTE.md
```

### 9. Why does HALF-L right-killer uniqueness matter?

Answer:

It matters because:

```text
if HALF-L leftovers are already prime on the left,
then only the right side can stop them from becoming BOTH
```

So if:

```text
many HALF-L leftovers require many different right killers
```

then the future right-side cover looks expensive.

But current status:

```text
FINITE ONLY
```

It does not prove this must continue forever.

What to write next:

```text
RIGHT_KILLER_COST_GROWTH_NOTE.md
```

### 10. Can someone rebuild the exact boss packet?

Answer:

```text
Yes, for the canonical finite packet.
```

Canonical rebuild files:

```text
goldbach_final_5min_no_cover_bridge_16core.js
GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.md
evidence/GOLDBACH_FINAL_5MIN_NO_COVER_BRIDGE_16CORE.json
```

Canonical boss row:

```text
C = 3889129261038184
E = 7778258522076368
firstBothG = 17307
trueK = 13.4309400510447
```

Rebuild command:

```bash
node goldbach_final_5min_no_cover_bridge_16core.js
```

The imported local tie-model is also rebuildable as an imported artifact, but
it is not the canonical packet.

---

## Second-Wave Weakness Questions

### 11. What happens if P changes?

Answer:

Current finite work already tracks:

```text
S17, S29, S37, S41
```

What is true now:

```text
the framework survives the change of P
```

What is not proved:

```text
the same no-cover theorem holds uniformly for all useful cutoffs P
```

What to test next:

```text
MULTI_P_STABILITY_AUDIT
```

Question:

```text
Which bridge features stay stable when P changes?
```

### 12. What happens if K changes?

Answer:

Current finite result:

```text
boss boundary replay still gives
K13.430 = MISS
K13.431 = HIT
K14 = HIT
```

What is true:

```text
the finite wall is stable in the current packet
```

What is not proved:

```text
the theorem is independent of the chosen K
```

What to test next:

```text
MULTI_K_BRIDGE_STABILITY_TEST
```

Suggested K values:

```text
13.431, 14, 15, 17
```

### 13. Are you counting only gaps before first BOTH?

Answer:

Mostly, yes, in the bridge packet.

Why:

```text
the obstacle is the pre-rescue region
```

But reviewers are right to ask whether the argument still matters if BOTH sits
outside the chosen window.

What to write next:

```text
PRE_RESCUE_VS_FULL_WINDOW_NOTE.md
```

### 14. Are the leftover gaps chosen by the algorithm or by math?

Answer:

```text
Both.
```

The exact leftover count depends on algorithmic tie path.

But the current stable structure across tie paths is:

```text
boss mod30 pocket is real
the pocket breaks deeply
right killers stay diffuse
max right-killer repeat stays 1
```

That is the correct response to this attack.

### 15. Can a non-greedy cover be more compact?

Answer:

```text
Possibly. This is open.
```

This is the biggest active weakness in the finite bridge argument.

What to test next:

```text
GREEDY_VS_OPTIMAL_COVER_GAP
```

Required outputs:

```text
best greedy coverage at N
best bounded-search coverage at N
compactness gap
whether a hidden compact cover exists
```

### 16. What is the density estimate for survivor gaps?

Answer:

Current repository does not yet have a theorem-level density formula for:

```text
|S_P(C,W)|
```

What it has:

```text
measured survivor counts on selected rows
```

What is needed:

```text
a model or lower-bound note for expected survivor mass after small-prime filtering
```

What to write next:

```text
SURVIVOR_DENSITY_ESTIMATE_NOTE.md
```

### 17. How do you handle correlations between lanes?

Answer:

Current finite work measures overlap explicitly, so it does not assume
independence.

What is true now:

```text
lane overlap is observed and recorded
```

What is not proved:

```text
a theorem-level correlation law or overlap lower bound
```

What to write next:

```text
LANE_CORRELATION_AND_OVERLAP_NOTE.md
```

### 18. What if the obstruction is rare but infinite?

Answer:

```text
Current finite work does not rule that out.
```

This is exactly why:

```text
boss isolation does not equal universal proof
```

What is needed:

```text
a theorem that forbids even rare infinite covering families
```

What to write next:

```text
RARE_INFINITE_OBSTRUCTION_NOTE.md
```

### 19. Can you produce a formal contradiction from full cover?

Answer:

```text
Not yet.
```

Current work produces:

```text
finite evidence that full cover looks expensive and overlap-heavy
```

But not yet:

```text
Assume full cover.
Then derive impossible inequality / impossible residue structure.
```

What to write next:

```text
FULL_COVER_CONTRADICTION_DRAFT.md
```

### 20. What is the simplest lemma you can prove today?

Answer:

There are several small statements that should already be provable cleanly:

1. periodicity of left killer lanes
2. periodicity of right killer lanes
3. exact survivor definition equivalence
4. overlap period of two compatible residue lanes
5. finite certificate lemma for a saved packet

Best immediate provable lemma:

```text
Killer Lane Periodicity Lemma
For fixed C and prime p, the left-killed gaps are exactly one residue class
mod p, and the right-killed gaps are exactly one residue class mod p.
```

Best finite certificate lemma:

```text
Boss Packet Certificate Lemma
In the canonical 16-core bridge packet, the boss top200 leftover set is 100%
inside g mod 30 in {3,15,27}, but breaks at mod 210 / 2310 / 30030 and the
HALF-L right killers have max repeat 1.
```

---

## Biggest Current Weakness

```text
Greedy diffusion is evidence, not an optimal-cover proof.
```

That is the current main reviewer attack.

## Best Next Response

Next required test:

```text
GREEDY_VS_OPTIMAL_COVER_GAP
```

Mission:

```text
Turn "diffuse in greedy testing" into "no compact cover exists."
```

## Safe Bottom Line

```text
The current packet is strong finite evidence.
The current packet is not a universal proof.
The exact open bridge is still the no-cover inequality.
```
