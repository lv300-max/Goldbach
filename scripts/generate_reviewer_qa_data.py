#!/usr/bin/env python3
"""Package reviewer-facing Goldbach framework data as JSON.

This script is descriptive only. It does not prove Goldbach or the Rescue Lemma.
"""

import json


REVIEWER_QA_DATA = {
    "statusLabel": [
        "FRAMEWORK VALID",
        "FINITE EVIDENCE STRONG",
        "RESCUE LEMMA OPEN",
        "UNIVERSAL PROOF NOT CLAIMED",
    ],
    "frameworkReadiness": {
        "equationSetup": {
            "current": "99%",
            "maxWithoutNewAnalyticProof": "99%",
            "missingToReach100": "Keep E=2C, L_C(g), R_C(g), BOTH_C(g), and S(C,W) identical across future docs and engines.",
        },
        "lemmaStructure": {
            "current": "99%",
            "maxWithoutNewAnalyticProof": "99%",
            "missingToReach100": "Treat CANONICAL_EQUATIONS_AND_LEMMAS.md as the source of truth for Lemmas 1-5.",
        },
        "finiteBaseAndTesting": {
            "current": "90%",
            "maxWithoutNewAnalyticProof": "96%",
            "missingToReach100": "Maintain deterministic cross-checks and reproducible artifacts.",
        },
        "rawNumberEvidence": {
            "current": "92%",
            "maxWithoutNewAnalyticProof": "96%",
            "missingToReach100": "Keep one consolidated raw evidence summary with exact labels/results.",
        },
        "adversarialStressTesting": {
            "current": "88%",
            "maxWithoutNewAnalyticProof": "94%",
            "missingToReach100": "Continue expanding covering-wall, zero-BOTH, and residue-octave evidence.",
        },
        "reviewerSafeWording": {
            "current": "85%",
            "maxWithoutNewAnalyticProof": "96%",
            "missingToReach100": "Remove proof-sounding wording and keep analytic-open status explicit.",
        },
        "proofDirectionClarity": {
            "current": "90%",
            "maxWithoutNewAnalyticProof": "96%",
            "missingToReach100": "State the exact analytic wall in every review document.",
        },
        "analyticRescueLemmaProof": {
            "current": "5-10%",
            "maxWithoutNewAnalyticProof": "5-10%",
            "missingToReach100": "Prove a real lower-bound theorem for S(C,W).",
        },
        "universalGoldbachProof": {
            "current": "OPEN",
            "maxWithoutNewAnalyticProof": "OPEN",
            "missingToReach100": "Prove Lemma 4 analytically and accept the finite base.",
        },
        "overallFrameworkReadiness": {
            "current": "85-88%",
            "maxWithoutNewAnalyticProof": "93-96%",
            "missingToReach100": "Improve documentation, reproducibility, and evidence packaging.",
        },
        "overallProofCompletion": {
            "current": "5-10%",
            "maxWithoutNewAnalyticProof": "5-10%",
            "missingToReach100": "Requires analytic proof of Lemma 4.",
        },
    },
    "theoremTarget": {
        "name": "Rescue Lemma",
        "statement": (
            "There exist constants K > 0 and C0 such that every C >= C0 "
            "has some integer g with 0 <= g <= K log^2(C) and both C-g "
            "and C+g prime."
        ),
        "goldbachImplication": (
            "If the Rescue Lemma is proven analytically and the finite base "
            "below C0 is verified, then Goldbach follows."
        ),
        "status": "computationally supported, analytic open",
    },
    "lemmaStatus": {
        "Lemma 1 Mirror Identity": "PROVEN by algebra",
        "Lemma 2 BOTH-hit": "DEFINITION",
        "Lemma 3 Goldbach equivalence": "PROVEN from Lemmas 1-2",
        "Lemma 4 Rescue Lemma": "ANALYTIC OPEN, computationally supported",
        "Lemma 5 finite base": "FINITE EVIDENCE, local run reported passed",
        "Universal proof": "OPEN",
    },
    "finiteBaseStatus": {
        "cutoff": "C0 = 100000 working cutoff",
        "scope": "intended exhaustive check for every integer center 2 <= C < 100000",
        "safeInterpretation": "finite base check passed in the reported local run",
    },
    "rawEvidenceSummary": {
        "mirrorDesertBreak": {
            "knownK825Breach": "C = 435067631, trueK = 8.370985",
            "missesK10": 0,
            "p95K": "stayed low in most tested bands",
            "maxK": "K=10 had zero misses in the completed adversarial tests so far",
            "desertPattern": "deserts grew with scale but still broke",
            "halfHitPattern": "half-hit sparks appeared before most rescues",
            "lanePattern": "first-rescue residue lanes became more diverse in higher bands",
        },
        "sparkAndDensity": {
            "sparkRate": "decayed with scale in finite tests",
            "bothHitDensity": "thinned with scale",
            "avgBothHitsInsideW": "around 16-17 in tested windows",
            "zeroBoth": 0,
        },
    },
    "adversarialEvidenceSummary": {
        "smallPrimeWheels": "tested wheels through levels such as 510510",
        "coverage": "over 95% of gaps blocked in hardest tested cases",
        "anyFullCoverWall": False,
        "anyMissedBothHit": False,
        "hardestWheel": 510510,
        "safeInterpretation": "finite adversarial evidence only",
    },
    "openAnalyticGap": {
        "neededBound": (
            "Prove S(C,W) = sum_{0 <= g <= W} 1_prime(C-g) * "
            "1_prime(C+g) > 0 for every sufficiently large C, with "
            "W = K log^2(C)."
        ),
        "reviewerFacingWall": (
            "Prove that the survivor gaps left after local congruence "
            "obstructions contain at least one true BOTH-prime hit inside "
            "a K log^2(C) mirror window."
        ),
        "importantCorrection": (
            "Brun-Titchmarsh is an upper bound, not a lower bound; it cannot "
            "prove the Rescue Lemma by itself."
        ),
    },
    "unsafeClaimsToAvoid": [
        "Goldbach is universally proven.",
        "Lemma 4 is analytically proven.",
        "Finite validation proves the theorem.",
        "Universal proof complete.",
    ],
    "safeClaimsToUse": [
        "Finite tests strongly support the Rescue Lemma target.",
        "The Rescue Lemma is computationally supported and analytically open.",
        "The universal proof remains open.",
        "The current framework is a proof-direction framework.",
    ],
}


if __name__ == "__main__":
    print(json.dumps({"REVIEWER_QA_DATA": REVIEWER_QA_DATA}, indent=2))
