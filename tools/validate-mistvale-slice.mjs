/**
 * GROK-16 static gate: willow species + mistvale biome registered.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const index = fs.readFileSync(path.join(root, 'library/index.js'), 'utf8');
const willow = fs.readFileSync(path.join(root, 'library/species/willow.js'), 'utf8');
const mistvale = fs.readFileSync(path.join(root, 'library/biomes/mistvale.js'), 'utf8');

for (const [label, src, needles] of [
  ['willow.js', willow, ["id: 'willow'", "leaf: 'elder'", "shape: 'fan'"]],
  ['mistvale.js', mistvale, ["id: 'mistvale'", 'willow: 1', 'climate: [0.36, 0.66, 0.34]']],
  ['index.js', index, ["from './species/willow.js'", "from './biomes/mistvale.js'", ', willow]', ', mistvale]']],
]) {
  for (const n of needles) {
    if (!src.includes(n)) {
      console.error('validate-mistvale-slice: missing in', label, n);
      process.exit(1);
    }
  }
}
if (/Skyrim|Bethesda/i.test(willow + mistvale)) {
  console.error('validate-mistvale-slice: forbidden IP marker');
  process.exit(1);
}
console.log('validate-mistvale-slice: willow + mistvale registered');
