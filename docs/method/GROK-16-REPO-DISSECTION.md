# GROK-16 — Repo dissection (how to read fly-with-me)

**Author:** potato · Commission GROK-16 · Learning-by-shipping  
**Repo:** this fork (`zef-grok/fly-with-me`)

## Structure map

| Path | Role |
|---|---|
| `VISION.md` | Product intent: ambient calm + rare awe; idle-tab cost; no goals/scores |
| `AGENTS.md` | Engine rules for `src/`: heightfield truth, closed engine, budgets, audio suspend |
| `CONTRIBUTING.md` | How to run (static server), library contract, flight-checks, Pages (CEO-gated) |
| `library/contract.js` | `define*` helpers, swatches, leaf kits, `validateLibrary` |
| `library/{biomes,species,...}/` | **Contributor surface** — data entries only |
| `library/index.js` | Registry: one import + array line per entry |
| `src/` | Engine (terrain, light, streaming, bird, audio) — prefer not to touch |
| `index.html` | Shell UI (Begin, mute, perch) |
| `tests/` | Galaxy CPU checks; browser flight-checks |
| `tools/` | Node gates, capture/bundle helpers |

## How to read (order that worked)

1. **VISION** — what “good” feels like (calm > novelty).
2. **AGENTS** — hard engine invariants (don’t fight the heightfield / budgets).
3. **`library/contract.js`** — what an entry may say; refuse neon / over-budget crowns.
4. **One existing biome + species** — copy shape, change climate/weights/crown, not shaders.
5. **Prove** with Node gates (+ flight-checks when the approved look moves).

## library vs engine

- **library/** owns *what stands in the world* (places, trees, ruins, birds’ colors).
- **src/** owns *how the world runs* (light, fog, streaming, simulation).
- Boundary discipline: new calm foliage = new `defineSpecies` / `defineBiome` + registry lines. Engine rewrite only if calm/awe cannot be reached through the kit — then justify and measure.

## This commission’s cut

One scenery slice: species `willow` + biome `mistvale` (cool moist climate pocket). Original kit data only. No music / Pages / dragon / arena.
