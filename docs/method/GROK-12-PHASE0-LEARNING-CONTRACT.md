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

<details>
<summary>pstack skill card — architect</summary>

**Source:** pstack `architect` SKILL.md (plugin). Not owned by upstream fly-with-me.

Sketch types, signatures, and module structure before code; stay in the loop while implementation fills in.

**Non-negotiables**
- Ground surrounding systems before sketching (skip only for true greenfield)
- Design before implementing; scrap the sketch if implementation fights it
- Prefer a smaller public surface that hides more complexity

</details>

2. **principle-boundary-discipline** — prefer `library/` kits + validators; guards at the library/engine boundary; no one-off engine holes for a single asset.

<details>
<summary>pstack skill card — principle-boundary-discipline</summary>

**Source:** pstack `principle-boundary-discipline` SKILL.md (plugin). Not owned by upstream fly-with-me.

Concentrate guards at system boundaries; trust internal types; keep business logic in pure functions.

**Non-negotiables**
- Validate/narrow/handle errors at the boundary (CLI, config, network, library↔engine)
- Inside: typed data, no redundant re-validation
- Thin shell; pure functions for domain logic

</details>

3. **principle-laziness-protocol** — smallest reversible slice; no second look, no control chrome in the picture.

<details>
<summary>pstack skill card — principle-laziness-protocol</summary>

**Source:** pstack `principle-laziness-protocol` SKILL.md (plugin). Not owned by upstream fly-with-me.

Bias toward deletion and the smallest change that solves the problem.

**Non-negotiables**
- Prefer deletion / minimize the diff
- Flat call hierarchy; consolidate decisions to one source of truth
- Question new signal-threading through layers — find a more direct path

</details>

4. **Prove it works** ([CONTRIBUTING.md](../../CONTRIBUTING.md) / [AGENTS.md](../../AGENTS.md) verification) — run flight-checks (and night/galaxy checks if sky-touched) in a real browser; record before/after at same seed/vantage when the approved look moves; cite green check-run URL on Linear.

<details>
<summary>pstack skill card — principle-prove-it-works</summary>

**Source:** pstack `principle-prove-it-works` SKILL.md (plugin). Not owned by upstream fly-with-me.

Verify against the real artifact — not a proxy or “it compiles.”

**Non-negotiables**
- Check the real thing (flight-checks / node gates / check-run URL), not agent self-report
- Trust artifacts over summaries
- Prefer a re-runnable scripted check when you can

</details>


**Defer in Phase 1:** full `figure-it-out` playbook, `arena` / swarm, `interrogate` unless a contested engine change appears.

<details>
<summary>pstack skill card — figure-it-out</summary>

**Source:** pstack `figure-it-out` SKILL.md (plugin). Not owned by upstream fly-with-me.

When no narrower playbook fits: design an auditable workflow first, then execute.

**Non-negotiables**
- Done = falsifiable predicate; rigor biased high for one-way doors
- Build verification harness before the work
- Decision trail a human can audit after stepping away

</details>

<details>
<summary>pstack skill card — arena</summary>

**Source:** pstack `arena` SKILL.md (plugin). Not owned by upstream fly-with-me.

Spawn N parallel candidates; pick a base; graft strongest parts of losers.

**Non-negotiables**
- Shared prompt is the contract
- Separate candidate outputs before synthesizing
- Verify the grafted result

</details>

<details>
<summary>pstack skill card — interrogate</summary>

**Source:** pstack `interrogate` SKILL.md (plugin). Not owned by upstream fly-with-me.

Multi-model adversarial review; synthesized verdict — do not auto-apply.

**Non-negotiables**
- State intent before spawning reviewers
- Diversity of models is the signal
- Deliver a verdict; human decides what to apply

</details>


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
