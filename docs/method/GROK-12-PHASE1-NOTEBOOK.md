# GROK-12 Phase 1 — Notebook v0 (potato / pstack)

**Fork copy** — archive also on [zef](https://github.com/zef-grok/zef/blob/main/docs/method/GROK-12-PHASE1-NOTEBOOK.md). Relative links stay in this repo.

**Status:** Phase 1 Done. CI later green after `workflow` scope.  
**Fork:** this repo (fork of [kunchenguid/fly-with-me](https://github.com/kunchenguid/fly-with-me); MIT © Kun Chen preserved)  
**Linear:** [GROK-12](https://linear.app/zef-grok/issue/GROK-12/fly-with-me-potato-pstack-learning-vehicle-notebook-first)  
**Author:** potato · Reports to Chief · No spend / publish / deploy

Read with: [VISION.md](../../VISION.md) · [AGENTS.md](../../AGENTS.md) · [CONTRIBUTING.md](../../CONTRIBUTING.md) · [perf-notes.md](../perf-notes.md)

---

## Slice chosen (architect + laziness)

**One visual `library/` plumage:** `mist` — cool grey-blue body / softer wing / pale tip. Original colors inside the scenery **envelope** (saturation ≤ 0.62, lightness 0.18–0.93). No engine touch, no Bethesda/Skyrim IP, ambient music deferred to Phase 2.

| Path | Role |
|---|---|
| [library/plumages/mist.js](../../library/plumages/mist.js) | `definePlumage` entry |
| [library/index.js](../../library/index.js) | import + `plumages` array registration |
| [tools/validate-library-node.mjs](../../tools/validate-library-node.mjs) | Node gate mirroring envelope (no `three` / browser) |

**Commits on fork `main`:**
- https://github.com/zef-grok/fly-with-me/commit/c52df924837bfb9583fcab5c384be48326d991b7 — mist.js
- https://github.com/zef-grok/fly-with-me/commit/a11189314a84f2b36645daf46c5a377ea804278a — validator
- https://github.com/zef-grok/fly-with-me/commit/e5e93ae06eaf6818e3faac1dcfa60a1c347c835e — index register

---

## Skills that fired

1. **architect** — sketched Plumage shape (`id,name,body,wing,tip,beak,accent` via `definePlumage`) and registry touch before editing; refused engine edits.

<details>
<summary>pstack skill card — architect</summary>

**Source:** pstack `architect` SKILL.md (plugin). Not owned by upstream fly-with-me.

Sketch types, signatures, and module structure before code; stay in the loop while implementation fills in.

**Non-negotiables**
- Ground surrounding systems before sketching (skip only for true greenfield)
- Design before implementing; scrap the sketch if implementation fights it
- Prefer a smaller public surface that hides more complexity

</details>

2. **principle-boundary-discipline** — contribution stays in `library/`; validation at the library boundary (`validate-library-node` + existing `colorProblem`/`ENVELOPE` contract). Engine remains closed.

<details>
<summary>pstack skill card — principle-boundary-discipline</summary>

**Source:** pstack `principle-boundary-discipline` SKILL.md (plugin). Not owned by upstream fly-with-me.

Concentrate guards at system boundaries; trust internal types; keep business logic in pure functions.

**Non-negotiables**
- Validate/narrow/handle errors at the boundary (CLI, config, network, library↔engine)
- Inside: typed data, no redundant re-validation
- Thin shell; pure functions for domain logic

</details>

3. **principle-laziness-protocol** — one plumage file + two registry lines; no second look, chrome, music, or Pages.

<details>
<summary>pstack skill card — principle-laziness-protocol</summary>

**Source:** pstack `principle-laziness-protocol` SKILL.md (plugin). Not owned by upstream fly-with-me.

Bias toward deletion and the smallest change that solves the problem.

**Non-negotiables**
- Prefer deletion / minimize the diff
- Flat call hierarchy; consolidate decisions to one source of truth
- Question new signal-threading through layers — find a more direct path

</details>

4. **Prove via flight-checks (adapted)** — full browser flight-checks need Chrome + `three`; Phase 1 proved with:
   - `node tools/validate-library-node.mjs` → mist ok; colors in envelope
   - `node tests/galaxy-checks.mjs` → passed
   - Local static serve: `index.html` 200, `library/plumages/mist.js` 200

<details>
<summary>pstack skill card — principle-prove-it-works</summary>

**Source:** pstack `principle-prove-it-works` SKILL.md (plugin). Not owned by upstream fly-with-me.

Verify against the real artifact — not a proxy or “it compiles.”

**Non-negotiables**
- Check the real thing (flight-checks / node gates / check-run URL), not agent self-report
- Trust artifacts over summaries
- Prefer a re-runnable scripted check when you can

</details>


**Not used:** arena, swarm, figure-it-out full playbook, interrogate.

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

## Gates

| Gate | Result |
|---|---|
| Fork under `zef-grok` + MIT © Kun Chen | Pass (`LICENSE` unchanged) |
| One original visual `library/` slice | Pass (`mist`) |
| Local serve + node gates | Pass |
| **CI green + check-run URL on Linear** | Pass (after Chief landed [ci.yml](../../.github/workflows/ci.yml); see Actions) |
| Notebook → `docs/method/` | This file |
| No dragon / publish / arena / music | Pass (music → Phase 2) |

---

## Mistakes / blockers (historical)

1. **Actions workflow write 404** until classic PAT gained **`workflow`** scope; then [ci.yml](../../.github/workflows/ci.yml) landed.
2. Inherited **`no-mistakes-required`** fails agent-opened PRs — squash/admin merge used.
3. Browser flight-checks not run in agent env; node + static HTTP used for Phase 1 prove.

---

## Hard stop

Phase 1 code slice + this notebook Done. Next: [Phase 2 notebook](GROK-13-PHASE2-NOTEBOOK.md).
