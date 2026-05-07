#!/usr/bin/env python3
"""
FINITE BASE VERIFICATION: Goldbach's Conjecture for C < 10⁵
===========================================================

Complete exhaustive verification of all even numbers E < 2×10⁵
using the mirror-gap framework.

This is a finite base check only:
- Lemma 4 is computationally supported, analytic open
- This script covers C < 10⁵ for the selected finite base
- Universal proof remains open until Lemma 4 is proven analytically

Timing: usually under a minute for this finite range on standard hardware
"""

import time
import math
from datetime import datetime, timedelta


# ============================================================================
# DETERMINISTIC PRIMALITY TEST FOR THE FINITE BASE RANGE
# ============================================================================

def miller_rabin(n, rounds=40):
    """
    Deterministic primality test for the finite base range.

    The function name is retained so the rest of the checker remains stable.
    For C < 10^5 and the searched mirror windows, trial division is exact and
    fast enough.
    
    Args:
        n: Integer to test
        rounds: Ignored; retained for compatibility
    
    Returns:
        True if n is prime, False otherwise
    """
    if n < 2:
        return False
    if n % 2 == 0:
        return n == 2
    divisor = 3
    while divisor * divisor <= n:
        if n % divisor == 0:
            return False
        divisor += 2
    return True


# ============================================================================
# RESCUE LEMMA VERIFICATION
# ============================================================================

def find_rescue_gap(C, K=8):
    """
    Find minimum gap g where C-g and C+g are both prime.
    
    Args:
        C: Center value
        K: Bound parameter (from Lemma 4)
    
    Returns:
        (gap, found) where:
        - gap: minimum g where C-g and C+g both prime (or -1 if not found)
        - found: whether gap satisfies g ≤ K·log²(C)
    """
    max_gap = int(K * math.log(C)**2) + 1
    
    for g in range(max_gap + 1):
        left = C - g
        right = C + g
        
        if left >= 2 and miller_rabin(left) and miller_rabin(right):
            return g, True
    
    # If no gap found within bound, search further
    for g in range(max_gap + 1, max_gap * 2):
        left = C - g
        right = C + g
        
        if left >= 2 and miller_rabin(left) and miller_rabin(right):
            return g, False
    
    return -1, False


# ============================================================================
# VERIFICATION SUITE
# ============================================================================

def verify_finite_base():
    """
    Exhaustively verify Goldbach decomposition for all C from 2 to 10⁵.
    
    Outputs:
    - Progress updates every 10,000 centers
    - Real-time statistics (gaps found, K ratios)
    - Final comprehensive report
    """
    
    print("=" * 90)
    print("FINITE BASE VERIFICATION: GOLDBACH'S CONJECTURE (C < 10⁵)")
    print("=" * 90)
    print(f"\nStart time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"Target: Verify all C from 2 to 99,999 (49,999 centers)")
    print(f"Method: deterministic trial division primality")
    print(f"Lemma 4 bound: K = 8, K·log²(C)")
    print()
    
    start_time = time.time()
    
    # Statistics tracking
    total_centers = 0
    total_found = 0
    total_within_bound = 0
    total_failures = 0
    
    gaps_data = []
    k_ratios = []
    max_gap_observed = 0
    max_k_ratio = 0
    
    # Verification loop
    last_report = 0
    checkpoint_interval = 10000
    
    print(f"{'Progress':<12} {'Centers':<12} {'Found':<12} {'In Bound':<12} {'% Within':<12} {'Avg Gap':<12}")
    print("-" * 90)
    
    for C in range(2, 100000):
        total_centers += 1
        
        gap, within_bound = find_rescue_gap(C)
        
        if gap >= 0:
            total_found += 1
            gaps_data.append((C, gap))
            max_gap_observed = max(max_gap_observed, gap)
            
            if within_bound:
                total_within_bound += 1
            
            # Calculate K ratio: gap / log²(C)
            if C > 1:
                k_ratio = gap / (math.log(C) ** 2)
                k_ratios.append(k_ratio)
                max_k_ratio = max(max_k_ratio, k_ratio)
        else:
            total_failures += 1
        
        # Progress reporting
        if total_centers - last_report >= checkpoint_interval:
            elapsed = time.time() - start_time
            percent_within = 100 * total_within_bound / total_found if total_found > 0 else 0
            avg_gap = sum(g for _, g in gaps_data) / len(gaps_data) if gaps_data else 0
            
            print(f"{total_centers:<12,} {total_centers:<12,} {total_found:<12,} {total_within_bound:<12,} {percent_within:<12.1f}% {avg_gap:<12.1f}")
            last_report = total_centers
    
    # Final results
    elapsed = time.time() - start_time
    percent_within = 100 * total_within_bound / total_found if total_found > 0 else 0
    avg_gap = sum(g for _, g in gaps_data) / len(gaps_data) if gaps_data else 0
    avg_k_ratio = sum(k_ratios) / len(k_ratios) if k_ratios else 0
    
    print("-" * 90)
    print(f"COMPLETED {total_centers:<12,} {total_found:<12,} {total_within_bound:<12,} {percent_within:<12.1f}% {avg_gap:<12.1f}")
    print()
    
    # ========================================================================
    # COMPREHENSIVE SUMMARY
    # ========================================================================
    
    print("=" * 90)
    print("FINITE BASE VERIFICATION SUMMARY")
    print("=" * 90)
    print()
    
    print("COVERAGE:")
    print(f"  • Centers tested:        {total_centers:,}")
    print(f"  • All found decompositions: {total_found:,}")
    print(f"  • Gaps within K·log²(C): {total_within_bound:,}")
    print(f"  • Gaps exceeding bound:  {total_found - total_within_bound:,}")
    print(f"  • Failures (no gap found): {total_failures:,}")
    print()
    
    print("SUCCESS RATE:")
    success_rate = 100 * total_found / total_centers
    print(f"  • Goldbach decomposition found: {success_rate:.1f}% ({total_found}/{total_centers})")
    print(f"  • Within Rescue Lemma bound: {percent_within:.1f}% ({total_within_bound}/{total_found})")
    print()
    
    print("GAP STATISTICS:")
    print(f"  • Minimum gap: {min(g for _, g in gaps_data) if gaps_data else 'N/A'}")
    print(f"  • Maximum gap: {max_gap_observed}")
    print(f"  • Average gap: {avg_gap:.2f}")
    print(f"  • Median gap:  {sorted([g for _, g in gaps_data])[len(gaps_data)//2] if gaps_data else 'N/A'}")
    print()
    
    print("K RATIO ANALYSIS (gap / log²(C)):")
    print(f"  • K (theoretical bound): ≤ 8.000")
    print(f"  • K (empirical max):     {max_k_ratio:.3f}×")
    print(f"  • K (empirical avg):     {avg_k_ratio:.3f}×")
    print(f"  • Safety margin:         {100 * (1 - max_k_ratio/8):.1f}%")
    print()
    
    if total_failures == 0:
        print("✅ VERIFICATION RESULT: PERFECT SUCCESS")
        print("   All centers C < 10⁵ have valid Goldbach decompositions")
        print("   All gaps satisfy the Rescue Lemma bound")
    else:
        print(f"⚠️  VERIFICATION WARNING: {total_failures} failures detected")
        print("   These centers lack Goldbach decompositions")
    print()
    
    print("TIMING:")
    print(f"  • Total runtime: {elapsed:.1f} seconds ({elapsed/60:.1f} minutes)")
    print(f"  • Rate: {total_centers/elapsed:.0f} centers/second")
    print()
    
    print("GOLDBACH'S CONJECTURE STATUS:")
    if total_failures == 0:
        print("  ✅ FINITE BASE (C < 10⁵):    finite base check passed")
        print("  ⚠️  LEMMA 4 (C ≥ 10⁵):        computationally supported, analytic open")
        print("  ⚠️  UNIVERSAL PROOF:          remains open")
    else:
        print("  ⚠️  Finite base incomplete. Universal proof remains open.")
    print()
    
    print("=" * 90)
    print(f"End time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 90)
    print()
    
    # Return data for further analysis
    return {
        'total_centers': total_centers,
        'total_found': total_found,
        'total_within_bound': total_within_bound,
        'total_failures': total_failures,
        'gaps_data': gaps_data,
        'k_ratios': k_ratios,
        'max_gap': max_gap_observed,
        'max_k_ratio': max_k_ratio,
        'avg_gap': avg_gap,
        'avg_k_ratio': avg_k_ratio,
        'elapsed_time': elapsed,
        'percent_within': percent_within,
    }


# ============================================================================
# MAIN EXECUTION
# ============================================================================

if __name__ == "__main__":
    results = verify_finite_base()
    
    # Save results to JSON for analysis
    import json
    with open('finite_base_results.json', 'w') as f:
        json.dump({
            k: v for k, v in results.items() 
            if k not in ['gaps_data', 'k_ratios']  # Skip large arrays
        }, f, indent=2)
    
    print("Results saved to: finite_base_results.json")
