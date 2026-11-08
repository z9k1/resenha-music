import type { Beatmap, HitObject, SliderPoint } from '../../types/index.ts';

const BPM = 110;
const OFFSET_MS = 1870;
const BEAT_MS = (60 / BPM) * 1000; // ~545.45 ms

function beat(b: number): number {
  return Math.round(OFFSET_MS + b * BEAT_MS);
}

interface RawPattern {
  beat: number;
  x: number;
  y: number;
  isSlider?: boolean;
  durationBeats?: number;
  curveType?: 'linear' | 'bezier';
  controlPoints?: SliderPoint[];
  slides?: number;
  ticks?: number[];
}

// Complete 91.2s beatmap: richly arranged with hit circles, straight/curved sliders and reversals
const rawCombos: RawPattern[][] = [
  // --- SECTION 1: Entrada do Pandeiro e Cavaquinho (4 - 16) ---
  [
    { beat: 4.0, x: 260, y: 220 },
    { beat: 5.0, x: 540, y: 220 },
    // Slider reto suave no cavaquinho
    {
      beat: 6.0,
      x: 540,
      y: 220,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 540, y: 220 }, { x: 540, y: 400 }],
      slides: 1,
    },
  ],
  [
    { beat: 8.0, x: 400, y: 160 }, { beat: 9.0, x: 600, y: 280 },
    // Slider curvo no balanço do cavaquinho
    {
      beat: 10.0,
      x: 500,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 500, y: 440 }, { x: 400, y: 470 }, { x: 300, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 12.0, x: 320, y: 300 }, { beat: 12.5, x: 400, y: 240 },
    { beat: 13.0, x: 480, y: 300 }, { beat: 14.0, x: 400, y: 360 },
    { beat: 14.5, x: 320, y: 300 }, { beat: 15.0, x: 480, y: 300 },
  ],

  // --- SECTION 2: Verso 1 (16 - 48) ---
  [
    { beat: 16.0, x: 180, y: 200 }, { beat: 17.0, x: 620, y: 200 },
    { beat: 18.0, x: 180, y: 420 }, { beat: 19.0, x: 620, y: 420 },
  ],
  [
    { beat: 20.0, x: 580, y: 320 }, { beat: 20.5, x: 500, y: 250 },
    { beat: 21.0, x: 420, y: 320 },
    // Slider curvo reverso suave (slides: 2, 1.8 beats) no cavaquinho
    {
      beat: 22.0,
      x: 340,
      y: 250,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [
        { x: 340, y: 250 },
        { x: 250, y: 350 },
        { x: 180, y: 250 },
      ],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 24.0, x: 220, y: 180 }, { beat: 25.0, x: 580, y: 180 },
    // Slider vertical curvo
    {
      beat: 26.0,
      x: 400,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 440 }, { x: 330, y: 360 }, { x: 400, y: 280 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 28.0, x: 280, y: 380 }, { beat: 28.5, x: 360, y: 330 },
    { beat: 29.0, x: 440, y: 280 }, { beat: 29.5, x: 520, y: 230 },
    { beat: 30.0, x: 600, y: 180 },
  ],
  [
    { beat: 32.0, x: 400, y: 150 }, { beat: 33.0, x: 590, y: 300 },
    // Slider diagonal
    {
      beat: 34.0,
      x: 400,
      y: 450,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 400, y: 450 }, { x: 220, y: 320 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 36.0, x: 300, y: 220 }, { beat: 37.0, x: 500, y: 220 },
    { beat: 38.0, x: 500, y: 380 }, { beat: 39.0, x: 300, y: 380 },
    { beat: 40.0, x: 400, y: 300 },
  ],
  [
    { beat: 41.0, x: 220, y: 320 }, { beat: 42.0, x: 320, y: 200 },
    { beat: 43.0, x: 480, y: 200 },
    // Slider na virada do verso
    {
      beat: 44.0,
      x: 580,
      y: 320,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 580, y: 320 }, { x: 500, y: 420 }, { x: 380, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],

  // --- SECTION 3: Refrão 1 (48 - 80) ---
  [
    { beat: 48.0, x: 200, y: 200 }, { beat: 49.0, x: 600, y: 200 },
    // Slider linear suave cruzando a tela (240px, 1.5 beats)
    {
      beat: 50.0,
      x: 520,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 520, y: 400 }, { x: 280, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 52.0, x: 320, y: 250 }, { beat: 52.5, x: 400, y: 200 },
    { beat: 53.0, x: 480, y: 250 }, { beat: 54.0, x: 540, y: 340 },
    { beat: 54.5, x: 480, y: 410 }, { beat: 55.0, x: 400, y: 410 },
    { beat: 55.5, x: 320, y: 340 },
  ],
  [
    { beat: 56.0, x: 180, y: 300 }, { beat: 57.0, x: 360, y: 160 },
    // Slider curvo reverso no refrão
    {
      beat: 58.0,
      x: 540,
      y: 160,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 540, y: 160 }, { x: 600, y: 240 }, { x: 540, y: 320 }],
      slides: 2,
      ticks: [0.5],
    },
    { beat: 60.0, x: 500, y: 440 }, { beat: 61.0, x: 300, y: 440 },
    { beat: 62.0, x: 400, y: 300 },
  ],
  [
    { beat: 64.0, x: 600, y: 220 }, { beat: 65.0, x: 200, y: 220 },
    // Slider horizontal
    {
      beat: 66.0,
      x: 600,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 600, y: 400 }, { x: 260, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 68.0, x: 260, y: 360 }, { beat: 68.5, x: 330, y: 300 },
    { beat: 69.0, x: 400, y: 250 }, { beat: 69.5, x: 470, y: 300 },
    { beat: 70.0, x: 540, y: 360 }, { beat: 71.0, x: 400, y: 440 },
  ],
  [
    { beat: 72.0, x: 220, y: 240 }, { beat: 73.0, x: 340, y: 160 },
    { beat: 74.0, x: 460, y: 160 }, { beat: 75.0, x: 580, y: 240 },
    // Slider curvo no final do refrão
    {
      beat: 76.0,
      x: 540,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 540, y: 380 }, { x: 440, y: 440 }, { x: 320, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],

  // --- SECTION 4: Verso 2 / Partido Alto Swing (80 - 112) ---
  [
    { beat: 80.0, x: 250, y: 200 }, { beat: 81.0, x: 550, y: 200 },
    { beat: 82.0, x: 550, y: 420 }, { beat: 83.0, x: 250, y: 420 },
  ],
  [
    { beat: 84.0, x: 300, y: 300 }, { beat: 84.5, x: 370, y: 240 },
    { beat: 85.0, x: 450, y: 240 }, { beat: 85.5, x: 520, y: 300 },
    // Slider reverso no partido alto
    {
      beat: 86.0,
      x: 480,
      y: 390,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 480, y: 390 }, { x: 400, y: 330 }, { x: 320, y: 390 }],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 88.0, x: 180, y: 180 }, { beat: 89.0, x: 620, y: 180 },
    { beat: 90.0, x: 180, y: 420 }, { beat: 91.0, x: 620, y: 420 },
  ],
  [
    { beat: 92.0, x: 400, y: 150 }, { beat: 93.0, x: 560, y: 280 },
    // Slider curvo
    {
      beat: 94.0,
      x: 400,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 440 }, { x: 300, y: 380 }, { x: 240, y: 280 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 96.0, x: 300, y: 200 }, { beat: 96.5, x: 380, y: 180 },
    { beat: 97.0, x: 460, y: 200 }, { beat: 98.0, x: 520, y: 280 },
    { beat: 98.5, x: 500, y: 360 }, { beat: 99.0, x: 420, y: 400 },
    { beat: 100.0, x: 320, y: 400 }, { beat: 101.0, x: 260, y: 320 },
  ],
  [
    { beat: 102.0, x: 200, y: 240 }, { beat: 103.0, x: 400, y: 160 },
    // Slider diagonal
    {
      beat: 104.0,
      x: 600,
      y: 240,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 600, y: 240 }, { x: 420, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 106.0, x: 300, y: 420 }, { beat: 107.0, x: 400, y: 290 },
  ],
  [
    { beat: 108.0, x: 240, y: 360 }, { beat: 108.5, x: 320, y: 320 },
    { beat: 109.0, x: 400, y: 280 }, { beat: 109.5, x: 480, y: 320 },
    { beat: 110.0, x: 560, y: 360 }, { beat: 111.0, x: 400, y: 440 },
  ],

  // --- SECTION 5: Solo de Cavaquinho com Sliders Fluidos (112 - 136) ---
  [
    { beat: 112.0, x: 580, y: 200 }, { beat: 112.5, x: 500, y: 160 },
    { beat: 113.0, x: 420, y: 180 }, { beat: 113.5, x: 340, y: 220 },
    // Slider ondulado acompanhando o solo
    {
      beat: 114.0,
      x: 260,
      y: 280,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [
        { x: 260, y: 280 },
        { x: 180, y: 360 },
        { x: 240, y: 440 },
      ],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 116.0, x: 320, y: 440 }, { beat: 117.0, x: 440, y: 400 },
    { beat: 118.0, x: 540, y: 340 }, { beat: 119.0, x: 600, y: 240 },
    // Slider suave no solo
    {
      beat: 120.0,
      x: 500,
      y: 160,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 500, y: 160 }, { x: 420, y: 120 }, { x: 360, y: 160 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 122.0, x: 240, y: 220 }, { beat: 122.5, x: 320, y: 260 },
    { beat: 123.0, x: 400, y: 300 }, { beat: 123.5, x: 480, y: 340 },
    { beat: 124.0, x: 560, y: 380 }, { beat: 125.0, x: 400, y: 440 },
  ],
  [
    { beat: 126.0, x: 200, y: 340 }, { beat: 127.0, x: 280, y: 200 },
    // Slider reverso no solo
    {
      beat: 128.0,
      x: 440,
      y: 160,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 440, y: 160 }, { x: 540, y: 220 }, { x: 600, y: 320 }],
      slides: 2,
      ticks: [0.5],
    },
    { beat: 130.0, x: 600, y: 380 }, { beat: 131.0, x: 460, y: 440 },
    { beat: 132.0, x: 320, y: 420 }, { beat: 133.0, x: 400, y: 300 },
  ],
  [
    { beat: 134.0, x: 240, y: 200 }, { beat: 134.5, x: 340, y: 180 },
    { beat: 135.0, x: 440, y: 180 }, { beat: 135.5, x: 540, y: 220 },
  ],

  // --- SECTION 6: Refrão Final no Clímax (136 - 156) ---
  [
    { beat: 136.0, x: 400, y: 140 }, { beat: 137.0, x: 580, y: 440 },
    { beat: 138.0, x: 180, y: 260 }, { beat: 139.0, x: 620, y: 260 },
    { beat: 140.0, x: 220, y: 440 },
  ],
  [
    { beat: 141.0, x: 200, y: 200 },
    // Slider reverso suave com curva no refrão (240px, 2 beats)
    {
      beat: 142.0,
      x: 560,
      y: 220,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [
        { x: 560, y: 220 },
        { x: 420, y: 310 },
        { x: 560, y: 400 },
      ],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 145.0, x: 320, y: 280 }, { beat: 145.5, x: 400, y: 240 },
    { beat: 146.0, x: 480, y: 280 }, { beat: 146.5, x: 540, y: 340 },
    { beat: 147.0, x: 480, y: 410 }, { beat: 147.5, x: 400, y: 410 },
    { beat: 148.0, x: 320, y: 340 },
  ],
  [
    { beat: 149.0, x: 180, y: 300 }, { beat: 150.0, x: 340, y: 180 },
    { beat: 151.0, x: 500, y: 180 },
    // Slider curvo no clímax
    {
      beat: 152.0,
      x: 620,
      y: 300,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 620, y: 300 }, { x: 520, y: 420 }, { x: 400, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 154.0, x: 340, y: 440 },
    { beat: 155.0, x: 400, y: 300 },
  ],

  // --- SECTION 7: Fechamento / Outro (156 - 162) ---
  [
    { beat: 156.0, x: 240, y: 220 }, { beat: 157.0, x: 560, y: 220 },
    { beat: 158.0, x: 560, y: 400 }, { beat: 159.0, x: 240, y: 400 },
    // Slider final de resolução
    {
      beat: 160.0,
      x: 300,
      y: 300,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [
        { x: 300, y: 300 },
        { x: 360, y: 240 },
        { x: 400, y: 300 },
      ],
      slides: 1,
      ticks: [0.5],
    },
  ],
];

let globalId = 1;
const allNotes: HitObject[] = rawCombos.flatMap((comboPatterns, colorIdx) => {
  return comboPatterns.map((p, indexInCombo) => {
    if (p.isSlider && p.controlPoints) {
      return {
        id: globalId++,
        type: 'slider' as const,
        x: p.x,
        y: p.y,
        timeMs: beat(p.beat),
        durationMs: Math.round((p.durationBeats ?? 1.5) * BEAT_MS),
        curveType: p.curveType ?? 'bezier',
        controlPoints: p.controlPoints,
        slides: p.slides ?? 1,
        ticks: p.ticks,
        comboNumber: indexInCombo + 1,
        comboColorIndex: colorIdx % 4,
      };
    }

    return {
      id: globalId++,
      type: 'circle' as const,
      x: p.x,
      y: p.y,
      timeMs: beat(p.beat),
      comboNumber: indexInCombo + 1,
      comboColorIndex: colorIdx % 4,
    };
  });
});

export const dalsaoNoSucoBeatmap: Beatmap = {
  id: 'dalsao-no-suco',
  title: 'Dalsão no Suco',
  artist: 'Desconhecido',
  bpm: BPM,
  durationSec: 91,
  durationFormatted: '1:31',
  difficultyName: 'Normal',
  difficultyStars: 2.8,
  audioSourceType: 'file',
  audioUrl: './songs/dalsao-no-suco.mp3',
  coverUrl: './covers/dalsao.jpeg',
  previewStartSec: 10,
  offsetMs: OFFSET_MS,
  circleRadius: 50,
  approachTimeMs: 720,
  notes: allNotes,
};
