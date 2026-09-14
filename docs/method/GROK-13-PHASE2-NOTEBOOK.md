# GROK-13 Phase 2 — Notebook (ambient music, IP-safe)

**Fork copy** — archive also on [zef](https://github.com/zef-grok/zef/blob/main/docs/method/GROK-13-PHASE2-NOTEBOOK.md).

**Status:** Phase 2 Done — hard stop (no dragon / Pages / arena / second visual). Skyrim-*like* music exploration held until after MVP.  
**Linear:** [GROK-13](https://linear.app/zef-grok/issue/GROK-13/fly-with-me-phase-2-ambient-music-ip-safe)  
**Prior:** GROK-12 Done (mist); [Phase 0](GROK-12-PHASE0-LEARNING-CONTRACT.md) · [Phase 1](GROK-12-PHASE1-NOTEBOOK.md)  
**Author:** potato · Reports to Chief · No spend / publish / deploy

Read with: [VISION.md](../../VISION.md) · [AGENTS.md](../../AGENTS.md) · [CONTRIBUTING.md](../../CONTRIBUTING.md) · [perf-notes.md](../perf-notes.md)

---

## What upstream already had

Sound is **entirely synthesized** in [src/main.js](../../src/main.js) (Web Audio): wind, water, rare pentatonic chimes, flap brushes. Routed through a **master gain** with Begin-gate, mute + volume, pause / visibility suspend. See [VISION.md](../../VISION.md) / [README.md](../../README.md). No sample soundtrack files in `assets/`.

**Extension point chosen:** [src/ambient-bed.js](../../src/ambient-bed.js) + one call from `audio.start()` into `master`.

---

## Slice

| Change | Why |
|---|---|
| [src/ambient-bed.js](../../src/ambient-bed.js) — soft sine triad (G2 + fifth + octave) | Calming bed; original generative |
| `startAmbientBed(ctx, master)` from `audio.start()` | Mute/volume/pause/Begin apply unchanged |
| 14s fade-in on bed gain | Never punches through at Begin |
| [tools/validate-ambient-bed.mjs](../../tools/validate-ambient-bed.mjs) + CI step | Static gate: module wiring + no sample loads |

**License / source:** original generative graph — no third-party audio bytes, no game OST. Upstream MIT © Kun Chen preserved.

**Check-run (CI library job):** https://github.com/zef-grok/fly-with-me/actions/runs/34810798415/job/103871565834

---

## Skills that fired

1. **architect** — reuse existing audio bus; refuse new asset pipeline.

<details>
<summary>pstack skill card — architect</summary>

**Source:** pstack `architect` SKILL.md (plugin). Not owned by upstream fly-with-me.

Sketch types, signatures, and module structure before code; stay in the loop while implementation fills in.

**Non-negotiables**
- Ground surrounding systems before sketching (skip only for true greenfield)
- Design before implementing; scrap the sketch if implementation fights it
- Prefer a smaller public surface that hides more complexity

</details>

2. **principle-boundary-discipline** — bed only through `master`.

<details>
<summary>pstack skill card — principle-boundary-discipline</summary>

**Source:** pstack `principle-boundary-discipline` SKILL.md (plugin). Not owned by upstream fly-with-me.

Concentrate guards at system boundaries; trust internal types; keep business logic in pure functions.

**Non-negotiables**
- Validate/narrow/handle errors at the boundary (CLI, config, network, library↔engine)
- Inside: typed data, no redundant re-validation
- Thin shell; pure functions for domain logic

</details>

3. **principle-laziness-protocol** — small module + one call site; no LFO.

<details>
<summary>pstack skill card — principle-laziness-protocol</summary>

**Source:** pstack `principle-laziness-protocol` SKILL.md (plugin). Not owned by upstream fly-with-me.

Bias toward deletion and the smallest change that solves the problem.

**Non-negotiables**
- Prefer deletion / minimize the diff
- Flat call hierarchy; consolidate decisions to one source of truth
- Question new signal-threading through layers — find a more direct path

</details>

4. **Prove** — local gates + green Actions check-run on Linear GROK-13.

<details>
<summary>pstack skill card — principle-prove-it-works</summary>

**Source:** pstack `principle-prove-it-works` SKILL.md (plugin). Not owned by upstream fly-with-me.

Verify against the real artifact — not a proxy or “it compiles.”

**Non-negotiables**
- Check the real thing (flight-checks / node gates / check-run URL), not agent self-report
- Trust artifacts over summaries
- Prefer a re-runnable scripted check when you can

</details>


---

## Gates

| Gate | Result |
|---|---|
| Prefer existing audio extension | Pass |
| IP-safe ambient | Pass (generative; no samples) |
| Respect mute / Begin / pause | Pass |
| CI library + ambient gate | Pass (URL above) |
| No dragon / Pages / arena / second visual | Pass |

---

## Mistakes

1. LFO into bed gain during fade-in would leak — removed.
2. Validator false-positive on a “not Skyrim” comment — tightened.
3. Inherited `no-mistakes` fails agent PRs — Chief squash-merged.

---

## Hard stop

Phase 2 code + this notebook Done. Skyrim-*like* music / richer audio waits until after MVP (CEO).
