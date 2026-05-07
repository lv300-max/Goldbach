// _neighborhood_sweep.mjs — ±50000 around C=435,067,631
function _mp(b,e,m){let r=1n;b=b%m;while(e>0n){if(e%2n===1n)r=r*b%m;e=e/2n;b=b*b%m;}return r;}
const _W=[2n,3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n];
function _ip(n){if(n<2n)return false;if(n===2n||n===3n)return true;if(n%2n===0n)return false;let d=n-1n,r=0n;while(d%2n===0n){d=d/2n;r++;}outer:for(const a of _W){if(a>=n)continue;let x=_mp(a,d,n);if(x===1n||x===n-1n)continue;for(let i=0n;i<r-1n;i++){x=x*x%n;if(x===n-1n)continue outer;}return false;}return true;}
function ip(n){return _ip(BigInt(Math.round(n)));}

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

const CENTER=435067631;
const RADIUS=50000;
const t0=Date.now();
const m=[0,0,0,0,0];let count=0,maxTK=-Infinity,localMax=null;
const top20=makeTopN(20);

for(let delta=-RADIUS;delta<=RADIUS;delta++){
  const C=CENTER+delta;
  if(C<2)continue;
  const r=scanSummary(C);count++;
  for(let i=0;i<5;i++)if(!r.pass[i])m[i]++;
  if(r.trueK!==null){
    if(r.trueK>maxTK){maxTK=r.trueK;localMax={delta,C,trueK:r.trueK,firstBothG:r.firstBothG,pass:r.pass};}
    top20.push({delta,C,firstBothG:r.firstBothG,trueK:r.trueK,pass:r.pass});
  }
  const done=delta+RADIUS;
  if(done>0&&done%10000===0)process.stderr.write(`done=${done}/${2*RADIUS} t=${((Date.now()-t0)/1000).toFixed(1)}s m825=${m[0]}\n`);
}

console.log('\n==== NEIGHBORHOOD SWEEP +-50000 AROUND C=435067631 ====');
console.table([{centerC:CENTER,radius:RADIUS,totalScanned:count,
  missesK825:m[0],missesK10:m[1],missesK12:m[2],missesK16:m[3],missesK20:m[4],
  maxTrueK:+maxTK.toFixed(6)}]);
console.log(`localMaxRow: delta=${localMax?.delta} C=${localMax?.C} trueK=${localMax?.trueK?.toFixed(6)} firstBothG=${localMax?.firstBothG} pass825=${localMax?.pass?.[0]} pass10=${localMax?.pass?.[1]}`);
console.log('\nTop 20 hardest in neighborhood:');
console.table(top20.get().map(r=>({delta:r.delta,C:r.C,firstBothG:r.firstBothG,trueK:r.trueK.toFixed(6),pass825:r.pass[0],pass10:r.pass[1]})));
console.log(`\nTotal elapsed: ${((Date.now()-t0)/1000).toFixed(1)}s`);
console.log('FINITE ADVERSARIAL EVIDENCE ONLY. UNIVERSAL PROOF STATUS: OPEN.');
