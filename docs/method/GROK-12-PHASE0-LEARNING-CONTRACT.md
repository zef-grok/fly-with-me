# GROK-12 Phase 0 — Learning contract (potato / pstack)

**Fork copy** — same archive on [zef `docs/method/`](https://github.com/zef-grok/zef/blob/main/docs/method/GROK-12-PHASE0-LEARNING-CONTRACT.md). Links below are relative to this repo.

**Status:** Phase 0 complete (historical). Phase 1–2 later Done.  
**Upstream:** [kunchenguid/fly-with-me](https://github.com/kunchenguid/fly-with-me) (MIT © Kun Chen)  
**Linear:** [GROK-12](https://linear.app/zef-grok/issue/GROK-12/fly-with-me-potato-pstack-learning-vehicle-notebook-first)  
**Author:** potato (pstack) · Reports to Chief · No spend / publish / deploy

---

## 1. What I read

| Doc | Takeaway for this vehicle |
|---|---|
| [VISION.md](../../VISION.md) | Product is ambient calm + rare awe beside work: bird flight, no goals/scores/notifications. Judge changes by calm/awe, plausibility, machine cost for hours-long idle tabs. |
| [AGENTS.md](../../AGENTS.md) | Engine rules for `src/`: CPU heightfield is terrain truth; library is the contributor surface; engine stays closed; approved looks are the reference; measure cost (`bench`/`parity`); tear down browser tabs after checks. |
| [CONTRIBUTING.md](../../CONTRIBUTING.md) | How to run (static server), library contract (`library/contract.js`), how to add biome/species/ruin/prop/bird, browser **flight-checks**, bundle, Pages publish. |
| [docs/perf-notes.md](../perf-notes.md) | Cost is measured at fixed vantages; prefer lossless wins; fan noise is part of the experience. |
| [README.md](../../README.md) + [LICENSE](../../LICENSE) | Link-is-enough UX; MIT © Kun Chen; Three.js from CDN under its own license. |

**Architecture sketch (from those docs):** `index.html` + `src/` (engine) + `library/` (data/kits) → optional `dist/` bundle. Prefer extending `library/` over touching light/sky/shaders. Validation refuses bad entries by name at load.

**Terms (for this commission):**
- **PR** (pull request): proposed change branch reviewed before merge to `main`.
- **CI** (continuous integration): automated checks on each PR/push (here: flight-checks / workflow green).
- **Lint:** automated style/static rules; fly-with-me leans on validators + browser checks more than a separate linter.

---

## 2. pstack skills to demonstrate in Phase 1

Explicit pick (not the whole catalog):

1. **architect** — sketch types/module boundary before any `library/` or `src/` edit; scrap if implementation fights the sketch.
2. **principle-boundary-discipline** — prefer `library/` kits + validators; guards at the library/engine boundary; no one-off engine holes for a single asset.
3. **principle-laziness-protocol** — smallest reversible slice; no second look, no control chrome in the picture.
4. **Prove it works** ([CONTRIBUTING.md](../../CONTRIBUTING.md) / [AGENTS.md](../../AGENTS.md) verification) — run flight-checks (and night/galaxy checks if sky-touched) in a real browser; record before/after at same seed/vantage when the approved look moves; cite green check-run URL on Linear.

**Defer in Phase 1:** full `figure-it-out` playbook, `arena` / swarm, `interrogate` unless a contested engine change appears.

---

## 3. Phase 1 success criteria (one slice)

**Choose: one visual slice** (not ambient-music in the same phase unless the visual change is already trivial).

Done when all hold:

- Fork under `zef-grok` exists; MIT copyright notice preserved.
- Local serve works; **CI** green on the fork (link the Actions check-run URL).
- One **original** visual contribution via `library/` (or an engine change only if required for calm/awe and carrying AGENTS rules + before/after) — judged by eye at seed 42, cruise + low pass.
- Learning notebook **v0** landed (see [Phase 1 notebook](GROK-12-PHASE1-NOTEBOOK.md)).
- Linear GROK-12 evidence cites green check-run URL.
- No Bethesda/Skyrim IP; no demo **publish** (Pages/demo gate stays CEO-owned).

**Ambient / calming music:** deferred to a later phase (see [Phase 2 notebook](GROK-13-PHASE2-NOTEBOOK.md)).

---

## 4. IP rules

- **MIT:** keep Kun Chen copyright + license text on all substantial copies; attribute upstream.
- **Original art only:** photographs/game frames may *inform*; none are copied into the tree (upstream rule; we keep it).
- **Forbidden:** Bethesda / Skyrim assets, OST, trademarks, ripped textures, “Skyrim” branding, or anything that would confuse affiliation.
- Mood may be “Skyrim-*like* atmosphere” in prose only — never in assets or names that imply affiliation.

---

## 5. Repo plan

| Artifact | Location |
|---|---|
| Product fork | This repo |
| Learning notebooks | `docs/method/` here + archive on zef |
| Commissions / evidence | Linear GROK-12 / GROK-13 |

---

## 6. What I will *not* do (Phase 0–1)

- Dragon / mystical progression content
- Demo **publish** / marketing deploy without CEO gate
- `arena` / swarm / unbounded multi-agent bakeoffs
- Bethesda IP or “Skyrim assets” shortcuts
- Burn usage into Phase 1 before CEO checkpoint
- Treat chat as the store (SoR: Linear + GitHub)

---

## Hard stop

Phase 0 deliverable = this contract. Phase 1–2 later completed under CEO greenlights.
