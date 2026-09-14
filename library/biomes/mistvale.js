import { defineBiome } from '../contract.js';

// Cool moist vale: soft willows and pale birch over moss and meadow — calm
// canopy, light ruins. Original climate pocket (GROK-16).
export default defineBiome({
  id: 'mistvale',
  name: 'Mistvale',
  climate: [0.36, 0.66, 0.34],
  ground: {
    base: 'meadow',
    alt: 'mossDeep',
    rock: 'rockCold',
  },
  species: {
    willow: 1,
    birch: 0.35,
    pine: 0.12,
  },
  density: 0.72,
  grass: {
    tint: 'grassCool',
    density: 0.55,
  },
  props: {
    boulders: 0.25,
    cairns: 0.15,
  },
  ruins: 0.6,
});
