# Raw Results Summary

## Pattern map

The raw number tests suggest the following finite patterns:

```text
Goldbach: high-diversity mirror rescue field
Twin Prime: locked 3-lane mod-30 structure
Polignac: gap-controlled mod-30 lane structure
Collatz: deterministic mod-4 one-step drop/rise switch
K pressure: volatile max values, stable p95 in tested bands
```

---

## Goldbach lane diversity

Observed pattern:

```text
Goldbach does not appear to rely on one magic residue lane.
Low-K rows spread across many lanes.
High-K rows narrow into fewer lanes, but still use many rescue lanes.
```

Interpretation:

```text
The main hardness driver appears to be larger first-rescue gap size,
not one permanently bad residue lane.
```

---

## High-K anatomy

Reported high-K result:

```text
High-K rows used fewer lanes than low-K rows,
but still used many distinct rescue lanes.
High-K average gap was much larger than low-K average gap.
```

Safe label:

```text
HIGH-K GOLDBACH ROWS CLUSTER INTO PRESSURE LANES,
BUT DO NOT COLLAPSE TO A SINGLE FAILURE LANE.
```

---

## K pressure

Reported cross-band result:

```text
Average first-rescue gap grows with scale.
K = g / log^2(C) did not explode in tested bands.
One known K=8.25 breach was later found at C = 435067631.
K=10 had zero misses in the completed adversarial packet so far.
P95 K stayed much lower than the selected ceiling.
```

Safe label:

```text
MAX K IS VOLATILE; P95 K IS STABLE IN TESTED BANDS.
```

---

## Twin Prime and Polignac

Twin Prime mod-30 lanes:

```text
29/1
17/19
11/13
```

Polignac fixed-gap lanes are controlled by the selected even gap modulo 30.

Safe label:

```text
TWIN AND POLIGNAC SHOW MOD-30 RESIDUE LOCKING.
```

---

## Collatz comparison

The one-step compressed odd Collatz map:

```text
T(n) = odd part of 3n + 1
```

showed:

```text
n ≡ 1 mod 4 -> drop
n ≡ 3 mod 4 -> rise
```

Safe label:

```text
THE APPARENT 50/50 COLLATZ SPLIT IS A DETERMINISTIC MOD-4 SWITCH.
```

---

## Honest conclusion

```text
The raw tests reveal structured filtering and rescue behavior.
They do not prove the open conjectures.
The universal proof target remains the analytic Rescue Lemma.
```
