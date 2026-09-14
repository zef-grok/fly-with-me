import { defineSpecies } from '../contract.js';

// Slender pale trunk and a light autumn dome — soft gold canopy. Original kit
// data (GROK-18); not a copy of any game asset.
export default defineSpecies({
  id: 'aspen',
  name: 'aspen',
  trunk: {
    height: 8.2,
    radius: 0.38,
    lean: 0.35,
    tint: 'barkPale',
  },
  limbs: {
    count: 4,
    spread: 3.6,
    rise: 9.5,
    from: 0.48,
  },
  crown: {
    shape: 'dome',
    cards: 28,
    size: 3.0,
    radius: 3.2,
    height: 3.4,
  },
  leaf: 'autumn',
  tint: {
    cold: 'canopyCold',
    warm: 'canopyDry',
    dry: 'canopyDry',
  },
  scale: [0.95, 1.9],
});
