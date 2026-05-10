"use strict";

const fs = require("fs");

for (const file of ["index.html", "GOLDBACH_NO_ESCAPE_DIRECTIONS.html"]) {
  const text = fs.readFileSync(file, "utf8");
  const opens = (text.match(/<div\b/g) || []).length;
  const closes = (text.match(/<\/div>/g) || []).length;
  console.log(`${file} opens=${opens} closes=${closes}`);
  if (opens !== closes) process.exitCode = 1;
}
