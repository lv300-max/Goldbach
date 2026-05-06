#!/usr/bin/env python3
"""
Finite base checker for the Goldbach Distributed Rescue Framework.

This script verifies finite centers only. It does not prove Goldbach universally.
The universal proof still requires the analytic Rescue Lemma.
"""

from __future__ import annotations

import math
from dataclasses import dataclass
from typing import Optional


@dataclass
class RescueResult:
    center: int
    gap: Optional[int]
    left: Optional[int]
    right: Optional[int]
    k_ratio: Optional[float]


def sieve(limit: int) -> list[bool]:
    if limit < 2:
        return [False] * (limit + 1)

    prime = [True] * (limit + 1)
    prime[0] = False
    prime[1] = False

    for p in range(2, int(limit ** 0.5) + 1):
        if prime[p]:
            start = p * p
            step = p
            prime[start : limit + 1 : step] = [False] * (((limit - start) // step) + 1)

    return prime


def first_rescue(center: int, prime: list[bool], k_bound: float) -> RescueResult:
    max_gap = int(math.floor(k_bound * (math.log(center) ** 2))) if center > 2 else center
    max_gap = min(max_gap, center - 2)

    for g in range(max_gap + 1):
        left = center - g
        right = center + g
        if left >= 2 and right < len(prime) and prime[left] and prime[right]:
            k_ratio = g / (math.log(center) ** 2) if center > 2 else 0.0
            return RescueResult(center, g, left, right, k_ratio)

    return RescueResult(center, None, None, None, None)


def run_finite_base(cutoff: int = 100_000, k_bound: float = 8.0) -> dict:
    # Need primes up to max right endpoint. Conservative allocation.
    max_right = cutoff + int(math.ceil(k_bound * (math.log(cutoff) ** 2))) + 10
    prime = sieve(max_right)

    tested = 0
    found = 0
    failures: list[int] = []
    gaps: list[int] = []
    k_ratios: list[float] = []
    worst: Optional[RescueResult] = None

    for center in range(2, cutoff):
        tested += 1
        result = first_rescue(center, prime, k_bound)

        if result.gap is None:
            failures.append(center)
            continue

        found += 1
        gaps.append(result.gap)
        k_ratios.append(result.k_ratio or 0.0)

        if worst is None or (result.k_ratio or 0.0) > (worst.k_ratio or 0.0):
            worst = result

    return {
        "label": "FINITE_BASE_CHECK",
        "cutoff": cutoff,
        "k_bound": k_bound,
        "tested": tested,
        "found": found,
        "failures": len(failures),
        "failure_centers_top10": failures[:10],
        "max_gap": max(gaps) if gaps else None,
        "avg_gap": sum(gaps) / len(gaps) if gaps else None,
        "max_k_ratio": max(k_ratios) if k_ratios else None,
        "avg_k_ratio": sum(k_ratios) / len(k_ratios) if k_ratios else None,
        "worst": worst.__dict__ if worst else None,
        "honesty": "FINITE BASE CHECK ONLY. UNIVERSAL PROOF STILL REQUIRES ANALYTIC RESCUE LEMMA.",
    }


def main() -> None:
    result = run_finite_base()

    print("FINITE BASE CHECK")
    print(f"cutoff: {result['cutoff']}")
    print(f"K bound: {result['k_bound']}")
    print(f"centers tested: {result['tested']}")
    print(f"decompositions found: {result['found']}")
    print(f"failures: {result['failures']}")
    print(f"max gap observed: {result['max_gap']}")
    print(f"avg gap: {result['avg_gap']:.3f}")
    print(f"max K ratio: {result['max_k_ratio']:.6f}")
    print(f"avg K ratio: {result['avg_k_ratio']:.6f}")
    print("status: FINITE BASE PASSED" if result["failures"] == 0 else "status: FINITE BASE FAILED")
    print(result["honesty"])


if __name__ == "__main__":
    main()
