"use strict";

/*
GOLDBACH_OVERLAP_WASTE_CURVE

Measures greedy killer-lane growth one lane at a time:
- new coverage gained
- overlap wasted
- cumulative coverage
- uncovered survivors left

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
*/

const fs = require("fs");
const path = require("path");

const TEST_NAME = "GOLDBACH_OVERLAP_WASTE_CURVE";
const INPUT_JSON = path.join("evidence", "GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.json");
const OUT_JSON = path.join("evidence", `${TEST_NAME}.json`);
const OUT_MD = `${TEST_NAME}.md`;
const SURVIVOR_FILTER = 29;
const THRESHOLDS = [1, 2, 3, 5, 10, 20, 50, 100, 200, 291];
const WARNING = [
  "FINITE EVIDENCE ONLY.",
  "UNIVERSAL GOLDBACH PROOF REMAINS OPEN.",
  "OVERLAP-WASTE CURVES ARE DIAGNOSTIC EVIDENCE, NOT A PROOF.",
].join("\n");

const S29_PRIMES = [2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n];
const SMALL_TRIAL_PRIMES = [
  2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n,
  41n, 43n, 47n, 53n, 59n, 61n, 67n, 71n, 73n, 79n, 83n, 89n, 97n,
];
const MR_BASES = [
  2n, 3n, 5n, 7n, 11n, 13n, 17n, 19n, 23n, 29n, 31n, 37n,
  325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n,
];
const FACTOR_CACHE = new Map();

function fmtFloat(value, digits = 6) {
  if (value === null || value === undefined || !Number.isFinite(value)) return "-";
  return Number(value).toFixed(digits).replace(/0+$/, "").replace(/\.$/, "");
}

function addMap(map, key, amount = 1) {
  map.set(key, (map.get(key) || 0) + amount);
}

function gcd(a, b) {
  a = a < 0n ? -a : a;
  b = b < 0n ? -b : b;
  while (b !== 0n) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function modPow(base, exp, mod) {
  let result = 1n;
  base %= mod;
  while (exp > 0n) {
    if (exp & 1n) result = (result * base) % mod;
    base = (base * base) % mod;
    exp >>= 1n;
  }
  return result;
}

function isPrime64(n) {
  if (n < 2n) return false;
  for (const p of SMALL_TRIAL_PRIMES) {
    if (n === p) return true;
    if (n % p === 0n) return false;
  }
  let d = n - 1n;
  let s = 0n;
  while ((d & 1n) === 0n) {
    d >>= 1n;
    s++;
  }
  witnessLoop:
  for (const a0 of MR_BASES) {
    const a = a0 % n;
    if (a === 0n) continue;
    let x = modPow(a, d, n);
    if (x === 1n || x === n - 1n) continue;
    for (let r = 1n; r < s; r++) {
      x = (x * x) % n;
      if (x === n - 1n) continue witnessLoop;
    }
    return false;
  }
  return true;
}

function generatePrimes(limit) {
  const primes = [];
  const composite = new Uint8Array(limit + 1);
  for (let i = 2; i <= limit; i++) {
    if (!composite[i]) {
      primes.push(BigInt(i));
      if (i * i <= limit) {
        for (let j = i * i; j <= limit; j += i) composite[j] = 1;
      }
    }
  }
  return primes;
}

const TRIAL_PRIMES = generatePrimes(200_000);

function pollardRho(n) {
  if ((n & 1n) === 0n) return 2n;
  if (n % 3n === 0n) return 3n;
  for (let c = 1n; c < 96n; c++) {
    let x = 2n + c;
    let y = x;
    let d = 1n;
    const f = (v) => (v * v + c) % n;
    for (let iter = 0; iter < 200_000 && d === 1n; iter++) {
      x = f(x);
      y = f(f(y));
      d = gcd(x > y ? x - y : y - x, n);
    }
    if (d > 1n && d < n) return d;
  }
  return n;
}

function factorList(n, out = []) {
  if (n === 1n) return out;
  if (isPrime64(n)) {
    out.push(n);
    return out;
  }
  for (const p of TRIAL_PRIMES) {
    if (p * p > n) break;
    if (n % p === 0n) {
      out.push(p);
      factorList(n / p, out);
      return out;
    }
  }
  const d = pollardRho(n);
  if (d === n) {
    out.push(n);
    return out;
  }
  factorList(d, out);
  factorList(n / d, out);
  return out;
}

function smallestPrimeFactor(n) {
  const key = n.toString();
  if (FACTOR_CACHE.has(key)) return FACTOR_CACHE.get(key);
  if (isPrime64(n)) {
    FACTOR_CACHE.set(key, null);
    return null;
  }
  const factors = factorList(n, []).sort((a, b) => a < b ? -1 : a > b ? 1 : 0);
  const first = factors[0] || n;
  FACTOR_CACHE.set(key, first);
  return first;
}

function survivesAll(n, primes) {
  for (const p of primes) {
    if (n !== p && n % p === 0n) return false;
  }
  return true;
}

function laneId(side, p, residue) {
  return `${side}:p${p}:g=${residue}`;
}

function topMap(map, limit) {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1] || String(a[0]).localeCompare(String(b[0])))
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

function greedyWasteCurve(rows) {
  const uncovered = new Set(rows.map((row) => row.g));
  const laneToGaps = new Map();
  for (const row of rows) {
    for (const lane of row.coverLanes) {
      if (!laneToGaps.has(lane)) laneToGaps.set(lane, new Set());
      laneToGaps.get(lane).add(row.g);
    }
  }

  const chosen = [];
  while (uncovered.size > 0) {
    let bestLane = null;
    let bestHits = [];
    let bestTotal = 0;
    for (const [lane, gaps] of laneToGaps.entries()) {
      const hits = [];
      for (const g of gaps) {
        if (uncovered.has(g)) hits.push(g);
      }
      if (
        hits.length > bestHits.length
        || (hits.length === bestHits.length && bestLane !== null && lane < bestLane)
      ) {
        bestLane = lane;
        bestHits = hits;
        bestTotal = gaps.size;
      }
    }
    if (!bestLane || bestHits.length === 0) break;
    for (const g of bestHits) uncovered.delete(g);
    const cumulativeCovered = rows.length - uncovered.size;
    chosen.push({
      lane: bestLane,
      laneCoverage: bestTotal,
      marginalGain: bestHits.length,
      overlapWaste: bestTotal - bestHits.length,
      cumulativeCovered,
      cumulativeCoveragePct: rows.length ? cumulativeCovered / rows.length : 0,
      uncoveredLeft: uncovered.size,
    });
  }
  return { chosen, uncoveredCount: uncovered.size };
}

function thresholdsFromCurve(total, chosen) {
  return THRESHOLDS.map((n) => {
    const used = Math.min(n, chosen.length);
    const point = used === 0 ? null : chosen[used - 1];
    return {
      topLanes: n,
      lanesUsed: used,
      covered: point ? point.cumulativeCovered : 0,
      coveragePct: point ? point.cumulativeCoveragePct : 0,
      uncoveredLeft: point ? point.uncoveredLeft : total,
    };
  });
}

function analyzeRow(source) {
  const C = BigInt(source.C);
  const firstBothG = Number(source.firstBothG);
  const logC = Math.log(Number(C));
  const log2 = logC * logC;
  const desiredParity = (C & 1n) === 0n ? 1 : 0;
  const rows = [];
  const laneCounts = new Map();

  for (let g = desiredParity === 1 ? 1 : 2; g < firstBothG; g += 2) {
    const gg = BigInt(g);
    const left = C - gg;
    const right = C + gg;
    if (!survivesAll(left, S29_PRIMES) || !survivesAll(right, S29_PRIMES)) continue;

    const leftPrime = isPrime64(left);
    const rightPrime = isPrime64(right);
    const coverLanes = [];

    if (!leftPrime) {
      const p = smallestPrimeFactor(left);
      const lane = laneId("L", p.toString(), Number(C % p));
      coverLanes.push(lane);
      addMap(laneCounts, lane);
    }
    if (!rightPrime) {
      const p = smallestPrimeFactor(right);
      const lane = laneId("R", p.toString(), Number((p - (C % p)) % p));
      coverLanes.push(lane);
      addMap(laneCounts, lane);
    }

    rows.push({ g, coverLanes });
  }

  const greedy = greedyWasteCurve(rows);
  const chosen = greedy.chosen;
  const thresholds = thresholdsFromCurve(rows.length, chosen);
  const totalMarginalGain = chosen.reduce((sum, row) => sum + row.marginalGain, 0);
  const totalOverlapWaste = chosen.reduce((sum, row) => sum + row.overlapWaste, 0);
  const maxMarginalGain = chosen.length ? chosen[0].marginalGain : 0;
  const lastMarginalGain = chosen.length ? chosen[chosen.length - 1].marginalGain : 0;
  const after291 = thresholds.find((row) => row.topLanes === 291);

  return {
    label: source.label,
    C: source.C,
    sourceReason: source.sourceReason,
    sourceLane: source.sourceLane,
    firstBothG,
    trueK: firstBothG / log2,
    sourceTrueK: source.trueK,
    S29: rows.length,
    sourceS29: source.S29,
    DMV: source.DMV,
    uniqueKillerLanes: laneCounts.size,
    greedyLaneCount: chosen.length,
    totalMarginalGain,
    totalOverlapWaste,
    wastePerCovered: totalMarginalGain ? totalOverlapWaste / totalMarginalGain : 0,
    maxMarginalGain,
    lastMarginalGain,
    thresholds,
    curveAll: chosen,
    curveFirst25: chosen.slice(0, 25),
    curveLast25: chosen.slice(-25),
    uncoveredAfter291: after291 ? after291.uncoveredLeft : rows.length,
    threshold291CoveragePct: after291 ? after291.coveragePct : 0,
    topKillerLanes: topMap(laneCounts, 12),
  };
}

function pickRows(input) {
  const seen = new Set();
  const selected = [];
  const add = (row, label) => {
    if (!row || !row.C || seen.has(row.C)) return;
    seen.add(row.C);
    selected.push({ ...row, label });
  };

  add(input.topRows.find((row) => row.sourceReason === "boss-net-anchor:boss"), "boss row");
  add(input.topRows.find((row) => row.sourceReason === "one-sided-trap:hot"), "hot row 1");
  add(input.topRows.filter((row) => row.sourceReason === "one-sided-trap:hot")[1], "hot row 2");
  add(input.hostileRows.find((row) => row.sourceReason === "hostile-crt:boss:m4"), "hostile visitor");
  add(input.topP29Rows[0], "raw max S29 row");

  return selected;
}

function verdict(analyses) {
  const allDiffuse = analyses.every((row) => row.threshold291CoveragePct < 1 || row.greedyLaneCount >= 250);
  const someResidualAfter291 = analyses.some((row) => row.uncoveredAfter291 > 0);
  if (allDiffuse && someResidualAfter291) return "FINITE_OVERLAP_WASTE_SUPPORTS_NO_COVER_TARGET";
  if (allDiffuse) return "FINITE_OVERLAP_WASTE_DIFFUSE_BUT_291_CAN_CLOSE_SELECTED_ROWS";
  return "FINITE_OVERLAP_WASTE_AUDIT_COMPLETE";
}

function buildReport(result) {
  const gainAt = (row, n) => row.curveAll[n - 1]?.marginalGain ?? 0;
  const lines = [];
  lines.push(`# ${TEST_NAME}`);
  lines.push("");
  lines.push("## Verdict");
  lines.push("");
  lines.push(`\`${result.finalVerdict}\``);
  lines.push("");
  lines.push(WARNING);
  lines.push("");
  lines.push("## Target Inequality");
  lines.push("");
  lines.push("```text");
  lines.push("Coverage(C,W,P) - OverlapLoss(C,W,P) < |S_P(C,W)|");
  lines.push("```");
  lines.push("");
  lines.push("This test does not prove the inequality. It measures the finite waste pattern that any proof must control.");
  lines.push("");
  lines.push("## Rows Tested");
  lines.push("");
  lines.push("| row | C | trueK | S29 | greedy lanes | total overlap waste | waste/covered | uncovered after top 291 |");
  lines.push("|---|---:|---:|---:|---:|---:|---:|---:|");
  for (const row of result.analyses) {
    lines.push(`| ${row.label} | ${row.C} | ${fmtFloat(row.trueK, 12)} | ${row.S29} | ${row.greedyLaneCount} | ${row.totalOverlapWaste} | ${fmtFloat(row.wastePerCovered, 4)} | ${row.uncoveredAfter291} |`);
  }
  lines.push("");
  lines.push("## Overlap Waste Curve");
  lines.push("");
  lines.push("| row | top 1 | top 2 | top 3 | top 5 | top 10 | top 20 | top 50 | top 100 | top 200 | top 291 |");
  lines.push("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  for (const row of result.analyses) {
    const pct = (n) => {
      const point = row.thresholds.find((x) => x.topLanes === n);
      return `${fmtFloat(point.coveragePct * 100, 2)}%`;
    };
    lines.push(`| ${row.label} | ${pct(1)} | ${pct(2)} | ${pct(3)} | ${pct(5)} | ${pct(10)} | ${pct(20)} | ${pct(50)} | ${pct(100)} | ${pct(200)} | ${pct(291)} |`);
  }
  lines.push("");
  lines.push("## Marginal Gain Decay");
  lines.push("");
  lines.push("| row | lane 1 gain | lane 10 gain | lane 20 gain | lane 50 gain | lane 100 gain | last gain |");
  lines.push("|---|---:|---:|---:|---:|---:|---:|");
  for (const row of result.analyses) {
    lines.push(`| ${row.label} | ${gainAt(row, 1)} | ${gainAt(row, 10)} | ${gainAt(row, 20)} | ${gainAt(row, 50)} | ${gainAt(row, 100)} | ${row.lastMarginalGain} |`);
  }
  lines.push("");
  lines.push("## Uncovered Survivor Audit After Top 291 Lanes");
  lines.push("");
  lines.push("| row | survivors left | top lane |");
  lines.push("|---|---:|---|");
  for (const row of result.analyses) {
    const topLane = row.topKillerLanes[0] ? `${row.topKillerLanes[0].key} (${row.topKillerLanes[0].count})` : "-";
    lines.push(`| ${row.label} | ${row.uncoveredAfter291} | \`${topLane}\` |`);
  }
  lines.push("");
  lines.push("## Interpretation");
  lines.push("");
  lines.push("- Diffuse growth means each added lane buys less and less new coverage.");
  lines.push("- Overlap waste records how much of a lane's raw periodic reach is already spent on previously covered survivors.");
  lines.push("- If a theorem proves enough overlap loss relative to survivor mass, full coverage becomes impossible.");
  lines.push("- That is the actual missing bridge.");
  lines.push("");
  lines.push("## Next 3");
  lines.push("");
  result.next3.forEach((item, idx) => lines.push(`${idx + 1}. ${item}`));
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const start = Date.now();
  const input = JSON.parse(fs.readFileSync(INPUT_JSON, "utf8"));
  const selected = pickRows(input);
  const analyses = selected.map((row, idx) => {
    console.log(`[analyze] ${idx + 1}/${selected.length} ${row.label} C=${row.C}`);
    return analyzeRow(row);
  });
  const result = {
    suiteName: TEST_NAME,
    source: INPUT_JSON,
    runtimeSeconds: Number(((Date.now() - start) / 1000).toFixed(3)),
    survivorFilterPrime: SURVIVOR_FILTER,
    thresholds: THRESHOLDS,
    rowsAnalyzed: analyses.length,
    finalVerdict: verdict(analyses),
    analyses,
    next3: [
      "Turn overlap waste into a symbolic overlap-loss lower bound.",
      "Prove a marginal-gain decay inequality for periodic killer lanes on S_P(C,W).",
      "Classify the uncovered survivors left after top 291 lanes by residue and side to test whether they cluster or stay diffuse.",
    ],
    warning: WARNING,
  };
  fs.mkdirSync("evidence", { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(result));

  console.log("");
  console.log("=== OVERLAP WASTE CURVE SUMMARY ===");
  console.log(`runtime: ${result.runtimeSeconds}s`);
  console.log(`rows analyzed: ${result.rowsAnalyzed}`);
  console.log(`verdict: ${result.finalVerdict}`);
  for (const row of analyses) {
    console.log(`${row.label}: S29=${row.S29} greedy=${row.greedyLaneCount} overlapWaste=${row.totalOverlapWaste} wastePerCovered=${fmtFloat(row.wastePerCovered, 4)} uncoveredAfter291=${row.uncoveredAfter291}`);
  }
  console.log(`wrote ${OUT_MD}`);
  console.log(`wrote ${OUT_JSON}`);
}

main();
