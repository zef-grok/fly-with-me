/** GROK-17 static gate: larch species registered and weighted in frostpines. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = fs.readFileSync(path.join(root, 'library/index.js'), 'utf8');
const larch = fs.readFileSync(path.join(root, 'library/species/larch.js'), 'utf8');
const frost = fs.readFileSync(path.join(root, 'library/biomes/frostpines.js'), 'utf8');

for (const [label, src, needles] of [
  ['larch.js', larch, ["id: 'larch'", "leaf: 'needle'", "shape: 'cone'", "tint: 'barkWarm'"]],
  ['frostpines.js', frost, ['larch: 0.55']],
  ['index.js', index, ["from './species/larch.js'", ', larch]']],
]) {
  for (const n of needles) {
    if (!src.includes(n)) {
      console.error('validate-larch-slice: missing in', label, n);
      process.exit(1);
    }
  }
}
if (/Skyrim|Bethesda/i.test(larch + frost)) {
  console.error('validate-larch-slice: forbidden IP marker');
  process.exit(1);
}
console.log('validate-larch-slice: larch + frostpines weight ok');
