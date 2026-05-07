// _three_tests.mjs — All 3 follow-up tests combined
// FINITE RAW NUMBER TEST ONLY.

function _mp(b,e,m){let r=1n;b=b%m;while(e>0n){if(e%2n===1n)r=r*b%m;e=e/2n;b=b*b%m;}return r;}
const _W=[2n,3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n];
function _ip(n){if(n<2n)return false;if(n===2n||n===3n)return true;if(n%2n===0n)return false;let d=n-1n,r=0n;while(d%2n===0n){d=d/2n;r++;}outer:for(const a of _W){if(a>=n)continue;let x=_mp(a,d,n);if(x===1n||x===n-1n)continue;for(let i=0n;i<r-1n;i++){x=x*x%n;if(x===n-1n)continue outer;}return false;}return true;}
function ip(n){return _ip(BigInt(Math.round(n)));}
function gcd(a,b){while(b){[a,b]=[b,a%b];}return a;}
function pctArr(a,p){if(!a.length)return null;const s=a.slice().sort((x,y)=>x-y);return s[Math.min(s.length-1,Math.floor(p*s.length))];}

const KS=[8.25,10,12,16,20];
function scanSummary(C){
  const lC=Math.log(C),lC2=lC*lC;
  const wins=KS.map(k=>Math.floor(k*lC2));
  const W20=wins[4];let firstBothG=null;const hits=[0,0,0,0,0];
  for(let g=0;g<=W20;g++){
    const L=C-g,R=C+g;if(L<2)break;
    if(ip(L)&&ip(R)){if(firstBothG===null)firstBothG=g;for(let ki=0;ki<5;ki++)if(g<=wins[ki])hits[ki]++;}
  }
  return{C,firstBothG,trueK:firstBothG!==null?firstBothG/lC2:null,hits,pass:hits.map(h=>h>=1)};
}
function makeTopN(n){const arr=[];return{push(row){if(arr.length<n){arr.push(row);arr.sort((a,b)=>(b.trueK??-Infinity)-(a.trueK??-Infinity));}else if((row.trueK??-Infinity)>(arr[arr.length-1].trueK??-Infinity)){arr[arr.length-1]=row;arr.sort((a,b)=>(b.trueK??-Infinity)-(a.trueK??-Infinity));}},get(){return arr;}};}

// Octave band runner — reusable
const OCTAVE_BANDS=[
  {label:"k 1-1k",    start:1,     end:1000},
  {label:"k 1k-5k",   start:1001,  end:5000},
  {label:"k 5k-10k",  start:5001,  end:10000},
  {label:"k 10k-20k", start:10001, end:20000},
  {label:"k 20k-50k", start:20001, end:50000},
  {label:"k 50k-100k",start:50001, end:100000},
];

function runOctave(residue, M, maxK, progressLabel){
  const bandState=OCTAVE_BANDS.map(b=>({...b,tested:0,miss:[0,0,0,0,0],tks:[],maxTK:-Infinity,maxFBG:0,top1:makeTopN(1)}));
  let bi=0;
  let totalMiss=[0,0,0,0,0],globalMaxTK=-Infinity,globalMaxRow=null,totalTested=0;
  const t0=Date.now();
  for(let k=1;k<=maxK;k++){
    while(bi<bandState.length-1&&k>bandState[bi].end)bi++;
    const C=residue+k*M;
    const r=scanSummary(C);
    const bs=bandState[bi];
    bs.tested++;totalTested++;
    for(let i=0;i<5;i++){if(!r.pass[i]){bs.miss[i]++;totalMiss[i]++;}}
    if(r.trueK!==null){
      bs.tks.push(r.trueK);if(r.trueK>bs.maxTK)bs.maxTK=r.trueK;
      if(r.firstBothG>bs.maxFBG)bs.maxFBG=r.firstBothG;
      bs.top1.push({k,C,E:C*2,firstBothG:r.firstBothG,trueK:r.trueK,pass:r.pass});
      if(r.trueK>globalMaxTK){globalMaxTK=r.trueK;globalMaxRow={k,C,E:C*2,firstBothG:r.firstBothG,trueK:r.trueK,pass:r.pass};}
    }
    if(k%10000===0)process.stderr.write(`  ${progressLabel} k=${k} t=${((Date.now()-t0)/1000).toFixed(1)}s m825=${totalMiss[0]} m10=${totalMiss[1]}\n`);
  }
  const compact=bandState.filter(bs=>bs.end<=maxK||bs.start<=maxK).map(bs=>{
    const hr=bs.top1.get()[0];
    return{label:bs.label,tested:bs.tested,miss825:bs.miss[0],miss10:bs.miss[1],miss12:bs.miss[2],miss16:bs.miss[3],miss20:bs.miss[4],
      maxK:bs.maxTK>-Infinity?+bs.maxTK.toFixed(6):null,
      p95K:bs.tks.length?+(pctArr(bs.tks,0.95)||0).toFixed(6):null,
      p99K:bs.tks.length?+(pctArr(bs.tks,0.99)||0).toFixed(6):null,
      avgK:bs.tks.length?+(bs.tks.reduce((s,v)=>s+v,0)/bs.tks.length).toFixed(6):null,
      maxFBG:bs.maxFBG,
      highestKRow:hr?{k:hr.k,C:hr.C,firstBothG:hr.firstBothG,trueK:+hr.trueK.toFixed(6),pass825:hr.pass[0],pass10:hr.pass[1]}:null};
  }).filter(b=>b.tested>0);
  let csk;if(totalMiss[1]===0)csk=10;else if(totalMiss[2]===0)csk=12;else if(totalMiss[3]===0)csk=16;else if(totalMiss[4]===0)csk=20;else csk='ABOVE_20_NEEDED';
  const bandMaxKs=compact.map(b=>b.maxK??0);
  const last=bandMaxKs.slice(Math.floor(bandMaxKs.length/2));
  const first=bandMaxKs.slice(0,Math.floor(bandMaxKs.length/2));
  const climbToward10=Math.max(...last)>Math.max(...first)&&Math.max(...last)>8.0;
  let pressureTrend;
  if(totalMiss[1]>0)pressureTrend="K10_BREACH_FOUND";
  else if(climbToward10)pressureTrend="CLIMBING_TOWARD_10";
  else if(bandMaxKs.every((v,i)=>i===0||v<=bandMaxKs[0]+0.5))pressureTrend="SPIKE_RELEASED";
  else pressureTrend="STABLE_BELOW_10";
  let statusRead;
  if(totalMiss[1]===0&&!climbToward10)statusRead="K=10 held; spike did not scale upward.";
  else if(totalMiss[1]===0&&climbToward10)statusRead="K=10 held, but pressure shows upward drift toward 10.";
  else statusRead="K=10 failed; raise candidate K.";
  return{residue,M,maxK,totalTested,totalMiss,globalMaxTK,globalMaxRow,candidateSafeK:csk,climbToward10,pressureTrend,statusRead,compact};
}

const M=510510;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEST A — Octave test on neighborhood maximum C=435,106,531
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const C_NEIGH=435106531;
const resA=C_NEIGH%M;  // find residue class
process.stderr.write(`\n=== TEST A: neighborhood max residue octave test ===\n`);
process.stderr.write(`C=435106531 mod 510510 = ${resA}\n`);
// Find k such that resA + k*M = C_NEIGH
const kA=Math.round((C_NEIGH-resA)/M);
process.stderr.write(`That is k=${kA} in residue ${resA}\n`);
const tAs=Date.now();
const resultA=runOctave(resA,M,100000,'testA');

console.log('\n==== TEST A: NEIGHBORHOOD_MAX_RESIDUE_OCTAVE_TEST ====');
console.log(`C_NEIGH=435106531  resA=${resA}  k_neigh=${kA}`);
console.log('Compact band table:');
console.table(resultA.compact.map(b=>({label:b.label,tested:b.tested,miss825:b.miss825,miss10:b.miss10,maxK:b.maxK,p95K:b.p95K,p99K:b.p99K,avgK:b.avgK,maxFBG:b.maxFBG})));
console.log('Highest row per band:');
resultA.compact.forEach(b=>{if(b.highestKRow)console.log(`  ${b.label}: k=${b.highestKRow.k} C=${b.highestKRow.C} trueK=${b.highestKRow.trueK} pass825=${b.highestKRow.pass825} pass10=${b.highestKRow.pass10}`);});
console.log('Cross summary:');
console.log(JSON.stringify({residue:resA,k_neigh:kA,C_neigh:C_NEIGH,totalTested:resultA.totalTested,totalMissesK825:resultA.totalMiss[0],totalMissesK10:resultA.totalMiss[1],highestTrueKObserved:+resultA.globalMaxTK.toFixed(6),highestTrueKRow:resultA.globalMaxRow?{k:resultA.globalMaxRow.k,C:resultA.globalMaxRow.C,trueK:+resultA.globalMaxRow.trueK.toFixed(6),pass825:resultA.globalMaxRow.pass[0],pass10:resultA.globalMaxRow.pass[1]}:null,candidateSafeK:resultA.candidateSafeK,climbToward10:resultA.climbToward10,pressureTrend:resultA.pressureTrend,statusRead:resultA.statusRead},null,2));
console.log(`elapsed=${((Date.now()-tAs)/1000).toFixed(1)}s`);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEST B — p99 per band for all 10 danger residues (k=1→10000 each)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const dangerResidues=[113111,293074,136021,478724,232018,75317,81938,142018,339542,360431];
const BANDS_SHORT=OCTAVE_BANDS.slice(0,3); // k 1-1k, 1k-5k, 5k-10k
process.stderr.write('\n=== TEST B: p99 per band across 10 danger residues (k=1→10k) ===\n');
const tBs=Date.now();

// collect per-residue per-band p99
const testBResults=[];
for(const residue of dangerResidues){
  process.stderr.write(`  residue=${residue}...\n`);
  const bandState=BANDS_SHORT.map(b=>({...b,tks:[],miss:[0,0,0,0,0],tested:0,maxTK:-Infinity}));
  let bi=0;
  for(let k=1;k<=10000;k++){
    while(bi<bandState.length-1&&k>bandState[bi].end)bi++;
    const C=residue+k*M;
    const r=scanSummary(C);
    const bs=bandState[bi];
    bs.tested++;
    for(let i=0;i<5;i++)if(!r.pass[i])bs.miss[i]++;
    if(r.trueK!==null){bs.tks.push(r.trueK);if(r.trueK>bs.maxTK)bs.maxTK=r.trueK;}
  }
  bi=0;
  const row={residue};
  for(const bs of bandState){
    const lbl=bs.label.replace(/\s+/g,'_');
    row[`${lbl}_miss825`]=bs.miss[0];
    row[`${lbl}_miss10`]=bs.miss[1];
    row[`${lbl}_maxK`]=bs.maxTK>-Infinity?+bs.maxTK.toFixed(4):null;
    row[`${lbl}_p99K`]=bs.tks.length?+(pctArr(bs.tks,0.99)||0).toFixed(4):null;
    row[`${lbl}_p95K`]=bs.tks.length?+(pctArr(bs.tks,0.95)||0).toFixed(4):null;
  }
  testBResults.push(row);
  process.stderr.write(`    done t=${((Date.now()-tBs)/1000).toFixed(1)}s\n`);
}

console.log('\n==== TEST B: p99 PER BAND ACROSS 10 DANGER RESIDUES (k=1-10k) ====');
// Print p99 matrix
console.log('\np99TrueK matrix (rows=residue, cols=band):');
console.table(testBResults.map(r=>({
  residue:r.residue,
  'k1-1k_p99':r['k_1-1k_p99K'],
  'k1-1k_max':r['k_1-1k_maxK'],
  'k1k-5k_p99':r['k_1k-5k_p99K'],
  'k1k-5k_max':r['k_1k-5k_maxK'],
  'k5k-10k_p99':r['k_5k-10k_p99K'],
  'k5k-10k_max':r['k_5k-10k_maxK'],
})));
console.log('miss825 matrix:');
console.table(testBResults.map(r=>({
  residue:r.residue,
  'k1-1k_m825':r['k_1-1k_miss825'],
  'k1k-5k_m825':r['k_1k-5k_miss825'],
  'k5k-10k_m825':r['k_5k-10k_miss825'],
})));
console.log(`elapsed=${((Date.now()-tBs)/1000).toFixed(1)}s`);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TEST C — Global maxTrueK: all residues coprime to 510510, k=1→10 each
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
process.stderr.write('\n=== TEST C: all residues coprime to 510510, k=1→10 ===\n');
const tCs=Date.now();

// Enumerate all residues 1..M-1 with gcd(r,M)=1
const coprimes=[];
for(let r=1;r<M;r++){if(gcd(r,M)===1)coprimes.push(r);}
process.stderr.write(`  φ(510510)=${coprimes.length} residue classes\n`);

const top20C=makeTopN(20);
let cTotalRows=0,cMiss825=0,cMiss10=0,cMaxTK=-Infinity,cMaxRow=null;
// Track residues with any miss825 in k=1..10
const miss825Residues=[];

for(const residue of coprimes){
  let residueMiss825=0,residueMaxTK=-Infinity,residueMaxRow=null;
  for(let k=1;k<=10;k++){
    const C=residue+k*M;
    const r=scanSummary(C);
    cTotalRows++;
    if(!r.pass[0]){cMiss825++;residueMiss825++;if(!r.pass[1])cMiss10++;}
    if(r.trueK!==null){
      if(r.trueK>residueMaxTK){residueMaxTK=r.trueK;residueMaxRow={k,C,trueK:r.trueK,pass825:r.pass[0],pass10:r.pass[1],firstBothG:r.firstBothG};}
      if(r.trueK>cMaxTK){cMaxTK=r.trueK;cMaxRow={residue,k,C,trueK:r.trueK,pass825:r.pass[0],pass10:r.pass[1],firstBothG:r.firstBothG};}
      top20C.push({residue,k,C,firstBothG:r.firstBothG,trueK:r.trueK,pass:[r.pass[0],r.pass[1]]});
    }
  }
  if(residueMiss825>0)miss825Residues.push({residue,miss825:residueMiss825,maxTK:+residueMaxTK.toFixed(6),hardestRow:residueMaxRow});
}

const sortedMiss825=miss825Residues.sort((a,b)=>b.maxTK-a.maxTK);

console.log('\n==== TEST C: GLOBAL maxTrueK — ALL COPRIME RESIDUES mod 510510, k=1→10 ====');
console.table([{coprimeResidues:coprimes.length,totalRows:cTotalRows,miss825:cMiss825,miss10:cMiss10,maxTrueK:+cMaxTK.toFixed(6)}]);
console.log(`globalMaxRow: residue=${cMaxRow?.residue} k=${cMaxRow?.k} C=${cMaxRow?.C} trueK=${cMaxRow?.trueK?.toFixed(6)} pass825=${cMaxRow?.pass825} pass10=${cMaxRow?.pass10}`);
console.log(`\nResidues with K=8.25 breach in k=1→10 (${sortedMiss825.length} found):`);
if(sortedMiss825.length===0)console.log('  NONE');
else console.table(sortedMiss825.map(r=>({residue:r.residue,miss825:r.miss825,maxTK:r.maxTK,k:r.hardestRow?.k,C:r.hardestRow?.C,firstBothG:r.hardestRow?.firstBothG,pass10:r.hardestRow?.pass10})));
console.log('\nTop 20 hardest rows across all residues k=1→10:');
console.table(top20C.get().map(r=>({residue:r.residue,k:r.k,C:r.C,firstBothG:r.firstBothG,trueK:r.trueK.toFixed(6),pass825:r.pass[0],pass10:r.pass[1]})));
console.log(`elapsed=${((Date.now()-tCs)/1000).toFixed(1)}s`);

console.log(`\nTotal all-test elapsed: ${((Date.now()-tAs)/1000).toFixed(1)}s`);
console.log('\nFINITE RAW NUMBER TEST ONLY.');
