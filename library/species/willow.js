import { defineSpecies } from '../contract.js';

// Soft, slightly weeping canopy — cool greens over pale bark. Original kit data
// (GROK-16); not a copy of any game asset.
export default defineSpecies({
  id: 'willow',
  name: 'willow',
  trunk: {
    height: 5.8,
    radius: 0.55,
    lean: 0.85,
    tint: 'barkPale',
  },
  limbs: {
    count: 5,
    spread: 5.5,
    rise: 6.5,
    from: 0.4,
  },
  crown: {
    shape: 'fan',
    cards: 48,
    size: 3.4,
    radius: 4.6,
    height: 3.2,
  },
  leaf: 'elder',
  tint: {
    cold: 'canopyCold',
    warm: 'canopyDusk',
    dry: 'canopyDry',
  },
  scale: [1.0, 2.1],
});
