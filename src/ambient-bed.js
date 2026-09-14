/**
 * GROK-13 Phase 2 — soft generative ambient pad.
 * Original Web Audio only (no samples). Caller must connect into master gain
 * so mute / volume / Begin / pause apply.
 */
export function startAmbientBed(ctx, master) {
  const bedGain = ctx.createGain();
  bedGain.gain.value = 0;
  bedGain.connect(master);
  const bedRoot = 98; // G2 — low, calm
  for (const [freq, level] of [
    [bedRoot, 0.038],
    [bedRoot * 1.5, 0.024],
    [bedRoot * 2.002, 0.01],
  ]) {
    const o = ctx.createOscillator();
    o.type = 'sine';
    o.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.value = level;
    o.connect(g).connect(bedGain);
    o.start();
  }
  // Long fade-in so the bed never punches through at Begin.
  bedGain.gain.linearRampToValueAtTime(1, ctx.currentTime + 14);
  return bedGain;
}
