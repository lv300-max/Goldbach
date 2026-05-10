"use strict";

const fs = require("fs");
const path = require("path");

const target = "index.html";
const html = fs.readFileSync(target, "utf8");
const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
const missing = [];

for (const href of hrefs) {
  if (href.startsWith("http") || href.startsWith("#") || href.startsWith("mailto:")) continue;
  if (!fs.existsSync(path.resolve(href))) missing.push(href);
}

console.log(`hrefs=${hrefs.length}`);
console.log(`missing=${missing.length}`);
for (const item of missing) console.log(`MISSING ${item}`);
process.exit(missing.length ? 1 : 0);
