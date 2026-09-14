/**
 * Static gate for GROK-13 ambient bed: generative pad under master gain.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const main = fs.readFileSync(path.join(root, 'src/main.js'), 'utf8');
const bedMod = fs.readFileSync(path.join(root, 'src/ambient-bed.js'), 'utf8');

for (const [label, src, needles] of [
  ['main.js', main, ["from './ambient-bed.js'", 'startAmbientBed(ctx, master)', 'GROK-13', 'toggleMute', 'master.gain.setTargetAtTime(muted ? 0 : volume']],
  ['ambient-bed.js', bedMod, ['export function startAmbientBed', 'bedGain.connect(master)', 'GROK-13']],
]) {
  for (const needle of needles) {
    if (!src.includes(needle)) {
      console.error('validate-ambient-bed: missing in', label, ':', needle);
      process.exit(1);
    }
  }
}
const soundStart = main.indexOf('// Sound:');
const soundEnd = main.indexOf('function saveSettings()', soundStart);
const sound = main.slice(soundStart, soundEnd);
if (/['"][^'"]+\.(mp3|ogg|wav|m4a|flac)['"]/i.test(sound + bedMod) || /decodeAudioData|HTMLAudioElement/i.test(sound + bedMod)) {
  console.error('validate-ambient-bed: sample-file load detected');
  process.exit(1);
}
console.log('validate-ambient-bed: generative pad module under master; mute path intact');
