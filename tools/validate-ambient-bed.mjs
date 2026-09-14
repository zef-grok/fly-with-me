/**
 * Static gate for GROK-13 ambient bed: generative pad under master gain.
 * Does not replace browser flight-checks; keeps library/galaxy CI green.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = fs.readFileSync(path.join(root, 'src/main.js'), 'utf8');
const soundStart = src.indexOf('// Sound:');
const soundEnd = src.indexOf('function saveSettings()', soundStart);
const sound = soundStart >= 0 && soundEnd > soundStart ? src.slice(soundStart, soundEnd) : '';

const needed = [
  'Ambient bed: very quiet sine pad',
  'bedGain.connect(master)',
  'GROK-13',
  'toggleMute',
  'master.gain.setTargetAtTime(muted ? 0 : volume',
];
for (const needle of needed) {
  if (!src.includes(needle)) {
    console.error('validate-ambient-bed: missing', needle);
    process.exit(1);
  }
}
if (!sound) {
  console.error('validate-ambient-bed: Sound section not found');
  process.exit(1);
}
// Forbid loading sample files in the Sound section (URLs / paths).
if (/['"][^'"]+\.(mp3|ogg|wav|m4a|flac)['"]/i.test(sound) || /decodeAudioData|HTMLAudioElement/i.test(sound)) {
  console.error('validate-ambient-bed: sample-file load detected in Sound section');
  process.exit(1);
}
console.log('validate-ambient-bed: generative pad under master; mute path intact');
