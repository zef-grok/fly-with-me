/**
 * Node gate for library plumage entries — no three.js.
 * Envelope mirrors library/contract.js ENVELOPE (sat<=0.62, L 0.18–0.93).
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const ENVELOPE = { maxSaturation: 0.62, minLightness: 0.18, maxLightness: 0.93 };

function rgbToHsl(hex) {
  const r = ((hex >> 16) & 255) / 255;
  const g = ((hex >> 8) & 255) / 255;
  const b = (hex & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return { h: 0, s: 0, l };
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
  else if (max === g) h = ((b - r) / d + 2) / 6;
  else h = ((r - g) / d + 4) / 6;
  return { h, s, l };
}

function fieldHex(src, key) {
  const marker = key + ': 0x';
  const i = src.indexOf(marker);
  if (i < 0) return null;
  return Number('0x' + src.slice(i + marker.length, i + marker.length + 6));
}

const mistSrc = fs.readFileSync(path.join(root, 'library/plumages/mist.js'), 'utf8');
if (!mistSrc.includes("id: 'mist'") || !mistSrc.includes("name: 'mist'")) {
  console.error('mist id/name missing');
  process.exit(1);
}
for (const key of ['body', 'wing', 'tip', 'beak', 'accent']) {
  const hex = fieldHex(mistSrc, key);
  if (hex == null || !Number.isInteger(hex)) {
    console.error('mist missing field', key);
    process.exit(1);
  }
  const { s, l } = rgbToHsl(hex);
  if (s > ENVELOPE.maxSaturation || l < ENVELOPE.minLightness || l > ENVELOPE.maxLightness) {
    console.error(key + ' outside envelope');
    process.exit(1);
  }
}

const index = fs.readFileSync(path.join(root, 'library/index.js'), 'utf8');
if (!index.includes("from './plumages/mist.js'") || !index.includes(', mist]')) {
  console.error('mist not registered in library/index.js');
  process.exit(1);
}

console.log('validate-library-node: mist ok; colors in envelope');
