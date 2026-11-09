import type { Beatmap, HitObject } from '../types/index.ts';

/**
 * Creates an Easy Mode transformed Beatmap:
 * 1. Keeps buttons at NORMAL size (beatmap.circleRadius) so circles are not huge.
 * 2. Slows down approach speed (approachTimeMs * 1.45) so the reading rhythm is gentle and relaxed.
 * 3. Simplifies the note rhythm for high-density maps (Fiscal, Mapeamento, Unopar) so rapid streams are smoothed into comfortable beats.
 */
export function createEasyBeatmap(original: Beatmap): Beatmap {
  const isHighDensitySong = [
    'quem-fiscaliza-o-fiscal',
    'mapeamento',
    'unopar-me-deixa-em-paz',
  ].includes(original.id) || original.notes.length > 300;

  let simplifiedNotes: HitObject[];

  if (isHighDensitySong) {
    // Determine minimum comfortable spacing based on tempo (BPM)
    // At high BPM (e.g. 176 BPM), 330ms ensures 1 note per beat (quarter note pacing), removing rapid streams
    const minGapMs = original.bpm >= 150 ? 330 : 360;
    simplifiedNotes = [];
    let lastTimeMs = -99999;
    let comboNumber = 1;
    let comboColorIndex = 0;

    for (const note of original.notes) {
      const isSlider = note.type === 'slider';

      // Always keep sliders or notes that respect comfortable rhythmic spacing
      if (isSlider || note.timeMs - lastTimeMs >= minGapMs) {
        if (comboNumber > 12) {
          comboNumber = 1;
          comboColorIndex = (comboColorIndex + 1) % 4;
        }

        simplifiedNotes.push({
          ...note,
          comboNumber: comboNumber++,
          comboColorIndex: note.comboColorIndex ?? comboColorIndex,
        });

        lastTimeMs = isSlider ? note.timeMs + (note.durationMs || 0) : note.timeMs;
      }
    }
  } else {
    simplifiedNotes = original.notes.map((n) => ({ ...n }));
  }

  return {
    ...original,
    // Buttons remain normal size as requested ("os botoes do tamanho normal")
    circleRadius: original.circleRadius,
    // Slower approach ("ritmo mais lento / leitura mais lenta")
    approachTimeMs: Math.round(original.approachTimeMs * 1.45),
    notes: simplifiedNotes,
  };
}
