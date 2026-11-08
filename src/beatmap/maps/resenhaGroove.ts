import type { Beatmap, HitObject } from '../../types/index.ts';

const BPM = 130;
const BEAT_MS = (60 / BPM) * 1000; // ~461.54 ms

function beat(b: number): number {
  return Math.round(b * BEAT_MS);
}

const notes: HitObject[] = [
  // Section 1: Box Jumps + First Straight Slider
  { id: 1, type: 'circle', x: 250, y: 200, timeMs: beat(4.0), comboNumber: 1, comboColorIndex: 0 },
  { id: 2, type: 'circle', x: 550, y: 200, timeMs: beat(5.0), comboNumber: 2, comboColorIndex: 0 },
  // Straight slider along the bottom from (520, 400) to (280, 400)
  {
    id: 3,
    type: 'slider',
    x: 520,
    y: 400,
    timeMs: beat(6.0),
    durationMs: Math.round(BEAT_MS * 1.5),
    curveType: 'linear',
    controlPoints: [
      { x: 520, y: 400 },
      { x: 280, y: 400 },
    ],
    slides: 1,
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 0,
  },

  // Section 2: Diamond Jumps + Curved Slider
  { id: 4, type: 'circle', x: 400, y: 140, timeMs: beat(8.0), comboNumber: 1, comboColorIndex: 1 },
  { id: 5, type: 'circle', x: 640, y: 300, timeMs: beat(9.0), comboNumber: 2, comboColorIndex: 1 },
  {
    id: 6,
    type: 'slider',
    x: 400,
    y: 460,
    timeMs: beat(10.0),
    durationMs: Math.round(BEAT_MS * 1.5),
    curveType: 'bezier',
    controlPoints: [
      { x: 400, y: 460 },
      { x: 260, y: 420 },
      { x: 160, y: 300 },
    ],
    slides: 1,
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 1,
  },

  // Section 3: Center-Out Alternating + Reverse Slider
  { id: 7, type: 'circle', x: 400, y: 300, timeMs: beat(12.0), comboNumber: 1, comboColorIndex: 2 },
  { id: 8, type: 'circle', x: 260, y: 190, timeMs: beat(13.0), comboNumber: 2, comboColorIndex: 2 },
  {
    id: 9,
    type: 'slider',
    x: 540,
    y: 410,
    timeMs: beat(14.0),
    durationMs: Math.round(BEAT_MS * 1.5),
    curveType: 'bezier',
    controlPoints: [
      { x: 540, y: 410 },
      { x: 460, y: 330 },
      { x: 380, y: 410 },
    ],
    slides: 2, // Reversal
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 2,
  },

  // Section 4: Rhythm burst + Slider
  { id: 10, type: 'circle', x: 200, y: 250, timeMs: beat(16.0), comboNumber: 1, comboColorIndex: 3 },
  { id: 11, type: 'circle', x: 320, y: 220, timeMs: beat(17.0), comboNumber: 2, comboColorIndex: 3 },
  {
    id: 12,
    type: 'slider',
    x: 440,
    y: 250,
    timeMs: beat(18.0),
    durationMs: Math.round(BEAT_MS * 1.4),
    curveType: 'linear',
    controlPoints: [
      { x: 440, y: 250 },
      { x: 580, y: 360 },
    ],
    slides: 1,
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 3,
  },

  // Section 5: Linear Tracking + Curved Bezier Slider
  { id: 13, type: 'circle', x: 650, y: 200, timeMs: beat(20.0), comboNumber: 1, comboColorIndex: 0 },
  // Curved Bezier slider (smooth and readable)
  {
    id: 14,
    type: 'slider',
    x: 480,
    y: 180,
    timeMs: beat(21.0),
    durationMs: Math.round(BEAT_MS * 1.5),
    curveType: 'bezier',
    controlPoints: [
      { x: 480, y: 180 },
      { x: 360, y: 220 },
      { x: 260, y: 320 },
    ],
    slides: 1,
    ticks: [0.5],
    comboNumber: 2,
    comboColorIndex: 0,
  },
  { id: 15, type: 'circle', x: 150, y: 440, timeMs: beat(23.0), comboNumber: 3, comboColorIndex: 0 },

  // Section 6: Star Pattern + Wide Curved Slider
  { id: 16, type: 'circle', x: 400, y: 140, timeMs: beat(24.0), comboNumber: 1, comboColorIndex: 1 },
  { id: 17, type: 'circle', x: 570, y: 440, timeMs: beat(25.0), comboNumber: 2, comboColorIndex: 1 },
  {
    id: 18,
    type: 'slider',
    x: 180,
    y: 250,
    timeMs: beat(26.0),
    durationMs: Math.round(BEAT_MS * 1.5),
    curveType: 'bezier',
    controlPoints: [
      { x: 180, y: 250 },
      { x: 400, y: 180 },
      { x: 620, y: 250 },
    ],
    slides: 1,
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 1,
  },
  { id: 19, type: 'circle', x: 230, y: 440, timeMs: beat(28.0), comboNumber: 4, comboColorIndex: 1 },

  // Section 7: Finale with Reversal Slider (slides: 2)
  { id: 20, type: 'circle', x: 340, y: 360, timeMs: beat(29.0), comboNumber: 1, comboColorIndex: 2 },
  { id: 21, type: 'circle', x: 400, y: 320, timeMs: beat(29.5), comboNumber: 2, comboColorIndex: 2 },
  // Reversal Slider (2 beats, smooth reversal pace)
  {
    id: 22,
    type: 'slider',
    x: 440,
    y: 280,
    timeMs: beat(30.0),
    durationMs: Math.round(BEAT_MS * 2.0),
    curveType: 'bezier',
    controlPoints: [
      { x: 440, y: 280 },
      { x: 540, y: 330 },
      { x: 440, y: 400 },
    ],
    slides: 2, // 1 repeat back!
    ticks: [0.5],
    comboNumber: 3,
    comboColorIndex: 2,
  },
  { id: 23, type: 'circle', x: 400, y: 300, timeMs: beat(32.5), comboNumber: 4, comboColorIndex: 2 },
];

export const resenhaGrooveBeatmap: Beatmap = {
  id: 'resenha-groove-demo',
  title: 'Ritimo da resenha',
  artist: 'Miguel',
  bpm: BPM,
  durationSec: 30,
  durationFormatted: '0:30',
  difficultyName: 'Tutorial Demo',
  difficultyStars: 2.0,
  audioSourceType: 'synth',
  coverUrl: './covers/resenha-groove.png',
  offsetMs: 0,
  circleRadius: 48,
  approachTimeMs: 700,
  notes,
};
