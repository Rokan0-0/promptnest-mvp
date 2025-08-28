const fs = require('fs');
const path = require('path');

const MARKERS = [
  'package.json',
  'app',
  'next.config.js',
  'tsconfig.json',
  '.next'
];

function getMarkers(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let found = [];
  for (const marker of MARKERS) {
    if (entries.some(e => e.name === marker)) found.push(marker);
  }
  return found;
}

function printTree(dir, prefix = '', depth = 0, maxDepth = 4) {
  if (depth > maxDepth) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const markers = getMarkers(dir);
  const markerStr = markers.length ? ` [${markers.join(', ')}]` : '';
  console.log(`${prefix}${path.basename(dir)}/${markerStr}`);

  const files = entries.filter(e => e.isFile());
  const folders = entries.filter(e => e.isDirectory());

  for (const file of files) {
    console.log(`${prefix}  ├─ ${file.name}`);
  }
  for (const folder of folders) {
    printTree(path.join(dir, folder.name), prefix + '  │  ', depth + 1, maxDepth);
  }
}

printTree(process.cwd());