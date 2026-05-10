"use strict";

/*
GOLDBACH_GREEDY_LANE_DECAY_CURVE

Focused finite analyzer for the Large-Prime No-Cover path.
It measures whether composite killer lanes cover S29 survivor gaps compactly
or diffusely for selected high-pressure rows.

FINITE EVIDENCE ONLY.
UNIVERSAL PROOF REMAINS OPEN.
*/

const fs = require("fs");
const path = require("path");

const TEST_NAME = "GOLDBACH_GREEDY_LANE_DECAY_CURVE";
const INPUT_JSON = path.join("evidence", "GOLDBACH_3H_8CORE_NO_ESCAPE_PROOF_ASSAULT.json");
const OUT_JSON = path.join("evidence", `${TEST_NAME}.json`);
const OUT_MD = `${TEST_NAME}.md`;
const THRESHOLDS = [10, 20, 50, 100, 200, 291];
const WARNING = [
  "FINITE EVIDENCE ONLY.",
  "UNIVERSAL GOLDBACH PROOF REMAINS OPEN.",
  "A GREEDY COVER CURVE IS A DIAGNOSTIC, NOT A PROOF.",
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

function fmtInt(value) {
  return String(value ?? "-").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

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

function greedyCover(rows) {
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
      }
    }
    if (!bestLane || bestHits.length === 0) break;
    for (const g of bestHits) uncovered.delete(g);
    chosen.push({ lane: bestLane, covers: bestHits.length, cumulativeCovered: rows.length - uncovered.size });
  }

  return { chosen, uncoveredCount: uncovered.size };
}

function curveFromGreedy(total, greedy) {
  return THRESHOLDS.map((n) => {
    const used = Math.min(n, greedy.chosen.length);
    const covered = used === 0 ? 0 : greedy.chosen[used - 1].cumulativeCovered;
    return {
      topLanes: n,
      lanesAvailable: greedy.chosen.length,
      lanesUsed: used,
      covered,
      total,
      coveragePct: total ? covered / total : 0,
      uncovered: Math.max(0, total - covered),
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
  const killerPrimeCounts = new Map();
  let halfL = 0;
  let halfR = 0;
  let foe = 0;
  let bothBefore = 0;

  for (let g = desiredParity === 1 ? 1 : 2; g < firstBothG; g += 2) {
    const gg = BigInt(g);
    const left = C - gg;
    const right = C + gg;
    if (!survivesAll(left, S29_PRIMES) || !survivesAll(right, S29_PRIMES)) continue;

    const leftPrime = isPrime64(left);
    const rightPrime = isPrime64(right);
    const coverLanes = [];
    let state = "FOE";

    if (leftPrime && rightPrime) {
      state = "BOTH";
      bothBefore++;
    } else if (leftPrime) {
      state = "HALF_L";
      halfL++;
    } else if (rightPrime) {
      state = "HALF_R";
      halfR++;
    } else {
      foe++;
    }

    if (!leftPrime) {
      const p = smallestPrimeFactor(left);
      const lane = laneId("L", p.toString(), Number(C % p));
      coverLanes.push(lane);
      addMap(laneCounts, lane);
      addMap(killerPrimeCounts, p.toString());
    }

    if (!rightPrime) {
      const p = smallestPrimeFactor(right);
      const lane = laneId("R", p.toString(), Number((p - (C % p)) % p));
      coverLanes.push(lane);
      addMap(laneCounts, lane);
      addMap(killerPrimeCounts, p.toString());
    }

    rows.push({ g, state, coverLanes });
  }

  const greedy = greedyCover(rows);
  const curve = curveFromGreedy(rows.length, greedy);
  const top20 = curve.find((row) => row.topLanes === 20);
  const top291 = curve.find((row) => row.topLanes === 291);
  const compactness =
    top20.coveragePct >= 0.75 ? "COMPACT" :
      top291.coveragePct < 0.95 ? "VERY_DIFFUSE" :
        "DIFFUSE";

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
    states: { FOE: foe, HALF_L: halfL, HALF_R: halfR, BOTH_BEFORE: bothBefore },
    uniqueKillerLanes: laneCounts.size,
    greedyLaneCount: greedy.chosen.length,
    uncoveredAfterGreedy: greedy.uncoveredCount,
    curve,
    compactness,
    topKillerLanes: topMap(laneCounts, 20),
    topKillerPrimes: topMap(killerPrimeCounts, 12),
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
  const compact = analyses.filter((row) => row.compactness === "COMPACT");
  const fullyBy291 = analyses.filter((row) => row.curve.find((x) => x.topLanes === 291).coveragePct >= 0.999);
  if (compact.length > 0) return "FINITE_COMPACT_KILLER_NET_FOUND";
  if (fullyBy291.length === analyses.length) return "FINITE_DIFFUSE_BUT_291_LANES_COVER_SELECTED_ROWS";
  return "FINITE_DIFFUSE_KILLER_NET_DECAY_CONFIRMED";
}

function buildReport(result) {
  const lines = [];
  lines.push(`# ${TEST_NAME}`);
  lines.push("");
  lines.push("## Verdict");
  lines.push("");
  lines.push(`\`${result.finalVerdict}\``);
  lines.push("");
  lines.push(WARNING);
  lines.push("");
  lines.push("## Question");
  lines.push("");
  lines.push("Does the large-prime killer net look compact, or does coverage require many independent lanes?");
  lines.push("");
  lines.push("## Rows Tested");
  lines.push("");
  lines.push("| row | C | trueK | S29 | unique lanes | greedy lanes | compactness |");
  lines.push("|---|---:|---:|---:|---:|---:|---|");
  for (const row of result.analyses) {
    lines.push(`| ${row.label} | ${row.C} | ${fmtFloat(row.trueK, 12)} | ${row.S29} | ${row.uniqueKillerLanes} | ${row.greedyLaneCount} | \`${row.compactness}\` |`);
  }
  lines.push("");
  lines.push("## Greedy-Lane Decay Curve");
  lines.push("");
  lines.push("| row | top 10 | top 20 | top 50 | top 100 | top 200 | top 291 |");
  lines.push("|---|---:|---:|---:|---:|---:|---:|");
  for (const row of result.analyses) {
    const cell = (n) => {
      const point = row.curve.find((x) => x.topLanes === n);
      return `${fmtFloat(point.coveragePct * 100, 2)}%`;
    };
    lines.push(`| ${row.label} | ${cell(10)} | ${cell(20)} | ${cell(50)} | ${cell(100)} | ${cell(200)} | ${cell(291)} |`);
  }
  lines.push("");
  lines.push("## Lane Counts");
  lines.push("");
  lines.push("| row | FOE | HALF-L | HALF-R | BOTH before rescue | top killer lane | top killer prime |");
  lines.push("|---|---:|---:|---:|---:|---|---|");
  for (const row of result.analyses) {
    const topLane = row.topKillerLanes[0] ? `${row.topKillerLanes[0].key} (${row.topKillerLanes[0].count})` : "-";
    const topPrime = row.topKillerPrimes[0] ? `${row.topKillerPrimes[0].key} (${row.topKillerPrimes[0].count})` : "-";
    lines.push(`| ${row.label} | ${row.states.FOE} | ${row.states.HALF_L} | ${row.states.HALF_R} | ${row.states.BOTH_BEFORE} | \`${topLane}\` | \`${topPrime}\` |`);
  }
  lines.push("");
  lines.push("## Interpretation");
  lines.push("");
  lines.push("- Compact would mean top 20 lanes explain most of the S29 survivor kills.");
  lines.push("- Diffuse means coverage keeps rising slowly and needs many independent residue lanes.");
  lines.push("- The finite proof target is to turn this into a coverage-cost and overlap-loss bound.");
  lines.push("- This test does not prove No-Escape; it sharpens what a proof must establish.");
  lines.push("");
  lines.push("## Next Proof Pieces");
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
    rowsRequested: ["boss row", "hot row 1", "hot row 2", "hostile visitor", "raw max S29 row"],
    rowsAnalyzed: analyses.length,
    thresholds: THRESHOLDS,
    finalVerdict: verdict(analyses),
    analyses,
    next3: [
      "Formalize each killer lane as one periodic residue class on survivor gaps.",
      "Prove a coverage-cost lower bound: many lanes are required to cover high-pressure rows.",
      "Prove an overlap-loss bound: adding more periodic lanes loses efficiency and cannot persist as a perfect net.",
    ],
    warning: WARNING,
  };

  fs.mkdirSync("evidence", { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));
  fs.writeFileSync(OUT_MD, buildReport(result));

  console.log("");
  console.log("=== GREEDY LANE DECAY SUMMARY ===");
  console.log(`runtime: ${result.runtimeSeconds}s`);
  console.log(`rows analyzed: ${result.rowsAnalyzed}`);
  console.log(`verdict: ${result.finalVerdict}`);
  for (const row of analyses) {
    const t20 = row.curve.find((x) => x.topLanes === 20);
    const t291 = row.curve.find((x) => x.topLanes === 291);
    console.log(`${row.label}: S29=${row.S29} top20=${fmtFloat(t20.coveragePct * 100, 2)}% top291=${fmtFloat(t291.coveragePct * 100, 2)}% greedy=${row.greedyLaneCount} compactness=${row.compactness}`);
  }
  console.log(`wrote ${OUT_MD}`);
  console.log(`wrote ${OUT_JSON}`);
}

main();
