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
2. **principle-boundary-discipline** — bed only through `master`.
3. **principle-laziness-protocol** — small module + one call site; no LFO.
4. **Prove** — local gates + green Actions check-run on Linear GROK-13.

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
