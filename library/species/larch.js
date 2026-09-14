import { defineSpecies } from '../contract.js';

// Softer, shorter needle cone than pine — warm bark, cool canopy. Original
// kit data (GROK-17); not a copy of any game asset.
export default defineSpecies({
  id: 'larch',
  name: 'larch',
  trunk: {
    height: 10.5,
    radius: 0.48,
    lean: 0.22,
    tint: 'barkWarm',
  },
  limbs: {
    count: 0,
  },
  crown: {
    shape: 'cone',
    cards: 96,
    size: 2.4,
    radius: 3.4,
    height: 8.5,
    from: 0.22,
  },
  leaf: 'needle',
  tint: {
    cold: 'canopyCold',
    warm: 'canopyDusk',
    dry: 'canopyDry',
  },
  scale: [1.0, 2.0],
});
