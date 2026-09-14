/** GROK-18 static gate: aspen species registered and weighted in autumn. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = fs.readFileSync(path.join(root, 'library/index.js'), 'utf8');
const aspen = fs.readFileSync(path.join(root, 'library/species/aspen.js'), 'utf8');
const autumn = fs.readFileSync(path.join(root, 'library/biomes/autumn.js'), 'utf8');

for (const [label, src, needles] of [
  ['aspen.js', aspen, ["id: 'aspen'", "leaf: 'autumn'", "shape: 'dome'", "tint: 'barkPale'"]],
  ['autumn.js', autumn, ['aspen: 0.7']],
  ['index.js', index, ["from './species/aspen.js'", 'aspen']],
]) {
  for (const n of needles) {
    if (!src.includes(n)) {
      console.error('validate-aspen-slice: missing in', label, n);
      process.exit(1);
    }
  }
}
if (!/\baspen\b/.test(index.split('export const species')[1] || '')) {
  console.error('validate-aspen-slice: aspen not in species export');
  process.exit(1);
}
if (/Skyrim|Bethesda/i.test(aspen + autumn)) {
  console.error('validate-aspen-slice: forbidden IP marker');
  process.exit(1);
}
console.log('validate-aspen-slice: aspen + autumn weight ok');
