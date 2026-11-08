import type { Beatmap, HitObject, SliderPoint } from '../../types/index.ts';

const BPM = 135;
const OFFSET_MS = 290;
const BEAT_MS = (60 / BPM) * 1000; // ~444.44 ms

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

// Complete 166s dance-pop beatmap for "Sua Rifa Não Vou Comprar"
// Richly crafted with geometric patterns, curved Bézier sliders, reversals, and syncopated dance rhythms.
const rawCombos: RawPattern[][] = [
  // =========================================================================
  // SECTION 1: INTRO (Beats 4 - 28) - Rhythmic hook setup
  // =========================================================================
  [
    { beat: 4.0, x: 280, y: 220 },
    { beat: 5.0, x: 520, y: 220 },
    {
      beat: 6.0,
      x: 400,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 400, y: 380 }, { x: 400, y: 200 }],
      slides: 1,
    },
  ],
  [
    { beat: 8.0, x: 220, y: 320 },
    { beat: 9.0, x: 340, y: 200 },
    { beat: 10.0, x: 460, y: 320 },
    {
      beat: 11.0,
      x: 580,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 580, y: 200 }, { x: 640, y: 320 }, { x: 520, y: 420 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 13.0, x: 380, y: 420 },
    { beat: 14.0, x: 240, y: 380 },
    { beat: 15.0, x: 180, y: 240 },
    {
      beat: 16.0,
      x: 300,
      y: 160,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 300, y: 160 }, { x: 450, y: 120 }, { x: 600, y: 180 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 19.0, x: 620, y: 320 },
    { beat: 20.0, x: 500, y: 400 },
    { beat: 21.0, x: 380, y: 320 },
    {
      beat: 22.0,
      x: 260,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 260, y: 400 }, { x: 180, y: 320 }, { x: 260, y: 240 }],
      slides: 2, // Reversal back to start
      ticks: [0.5],
    },
  ],
  [
    { beat: 25.0, x: 380, y: 200 },
    { beat: 25.5, x: 460, y: 220 },
    { beat: 26.0, x: 540, y: 260 },
    { beat: 27.0, x: 400, y: 340 },
  ],

  // =========================================================================
  // SECTION 2: VERSO 1 (Beats 28 - 60) - Vocal groove & syncopation
  // =========================================================================
  [
    { beat: 28.0, x: 200, y: 220 },
    { beat: 29.0, x: 200, y: 380 },
    { beat: 30.0, x: 360, y: 380 },
    {
      beat: 31.0,
      x: 360,
      y: 220,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 360, y: 220 }, { x: 540, y: 220 }],
      slides: 1,
    },
  ],
  [
    { beat: 33.0, x: 620, y: 300 },
    { beat: 34.0, x: 540, y: 420 },
    { beat: 35.0, x: 420, y: 460 },
    {
      beat: 36.0,
      x: 300,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 300, y: 400 }, { x: 220, y: 320 }, { x: 300, y: 220 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 38.0, x: 420, y: 180 },
    { beat: 38.5, x: 500, y: 180 },
    { beat: 39.0, x: 580, y: 220 },
    { beat: 40.0, x: 620, y: 340 },
    {
      beat: 41.0,
      x: 520,
      y: 420,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 420 }, { x: 380, y: 460 }, { x: 240, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 44.0, x: 180, y: 280 },
    { beat: 45.0, x: 280, y: 180 },
    { beat: 46.0, x: 400, y: 160 },
    {
      beat: 47.0,
      x: 520,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 200 }, { x: 620, y: 280 }, { x: 540, y: 380 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 50.0, x: 400, y: 420 },
    { beat: 50.5, x: 320, y: 420 },
    { beat: 51.0, x: 240, y: 380 },
    { beat: 52.0, x: 200, y: 260 },
    { beat: 53.0, x: 280, y: 180 },
    {
      beat: 54.0,
      x: 420,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 420, y: 180 }, { x: 600, y: 260 }],
      slides: 1,
    },
  ],
  [
    { beat: 56.5, x: 640, y: 380 },
    { beat: 57.0, x: 540, y: 440 },
    { beat: 58.0, x: 420, y: 440 },
    { beat: 59.0, x: 320, y: 380 },
  ],

  // =========================================================================
  // SECTION 3: PRÉ-REFRÃO 1 (Beats 60 - 92) - Building rhythm & anticipation
  // =========================================================================
  [
    { beat: 60.0, x: 240, y: 240 },
    { beat: 61.0, x: 340, y: 180 },
    { beat: 62.0, x: 460, y: 180 },
    {
      beat: 63.0,
      x: 560,
      y: 240,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 560, y: 240 }, { x: 620, y: 340 }, { x: 540, y: 420 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 65.5, x: 420, y: 440 },
    { beat: 66.0, x: 300, y: 400 },
    { beat: 67.0, x: 220, y: 300 },
    {
      beat: 68.0,
      x: 300,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 300, y: 200 }, { x: 480, y: 200 }],
      slides: 1,
    },
  ],
  [
    { beat: 70.0, x: 600, y: 240 },
    { beat: 71.0, x: 580, y: 360 },
    { beat: 72.0, x: 480, y: 440 },
    {
      beat: 73.0,
      x: 360,
      y: 440,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 360, y: 440 }, { x: 240, y: 380 }, { x: 180, y: 260 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 76.5, x: 280, y: 180 },
    { beat: 77.0, x: 400, y: 160 },
    { beat: 78.0, x: 520, y: 180 },
    { beat: 79.0, x: 620, y: 260 },
    {
      beat: 80.0,
      x: 560,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 560, y: 380 }, { x: 440, y: 440 }, { x: 320, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    // Snappy build-up rolls
    { beat: 82.5, x: 220, y: 320 },
    { beat: 83.0, x: 260, y: 220 },
    { beat: 83.5, x: 340, y: 160 },
    { beat: 84.0, x: 440, y: 160 },
    { beat: 84.5, x: 520, y: 200 },
    { beat: 85.0, x: 580, y: 280 },
    { beat: 86.0, x: 540, y: 400 },
    { beat: 87.0, x: 400, y: 440 },
    { beat: 88.0, x: 260, y: 400 },
    { beat: 89.0, x: 200, y: 280 },
    {
      beat: 90.0,
      x: 320,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 320, y: 180 }, { x: 520, y: 180 }],
      slides: 1,
    },
  ],

  // =========================================================================
  // SECTION 4: REFRÃO 1 (Beats 92 - 124) - Explosive drop & dance hook
  // "Sua Rifa Não Vou Comprar!"
  // =========================================================================
  [
    // Center star jump pattern
    { beat: 92.0, x: 400, y: 160 },
    { beat: 93.0, x: 600, y: 360 },
    { beat: 94.0, x: 200, y: 360 },
    {
      beat: 95.0,
      x: 520,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 200 }, { x: 400, y: 280 }, { x: 280, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 97.0, x: 200, y: 340 },
    { beat: 97.5, x: 280, y: 420 },
    { beat: 98.0, x: 400, y: 440 },
    { beat: 99.0, x: 540, y: 400 },
    {
      beat: 100.0,
      x: 620,
      y: 300,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 620, y: 300 }, { x: 540, y: 180 }, { x: 400, y: 160 }],
      slides: 2, // Double slide
      ticks: [0.5],
    },
  ],
  [
    { beat: 103.0, x: 260, y: 200 },
    { beat: 103.5, x: 200, y: 280 },
    { beat: 104.0, x: 240, y: 380 },
    { beat: 105.0, x: 360, y: 420 },
    {
      beat: 106.0,
      x: 480,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 480, y: 400 }, { x: 640, y: 300 }],
      slides: 1,
    },
  ],
  [
    { beat: 108.0, x: 580, y: 180 },
    { beat: 108.5, x: 480, y: 160 },
    { beat: 109.0, x: 380, y: 180 },
    { beat: 110.0, x: 280, y: 240 },
    {
      beat: 111.0,
      x: 220,
      y: 360,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 220, y: 360 }, { x: 320, y: 460 }, { x: 460, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 113.5, x: 580, y: 400 },
    { beat: 114.0, x: 640, y: 280 },
    { beat: 115.0, x: 560, y: 180 },
    { beat: 116.0, x: 420, y: 160 },
    {
      beat: 117.0,
      x: 280,
      y: 200,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 280, y: 200 }, { x: 180, y: 320 }, { x: 280, y: 420 }],
      slides: 2, // Reversal back
      ticks: [0.5],
    },
  ],
  [
    { beat: 120.0, x: 420, y: 420 },
    { beat: 120.5, x: 500, y: 400 },
    { beat: 121.0, x: 580, y: 340 },
    { beat: 122.0, x: 600, y: 220 },
    { beat: 123.0, x: 480, y: 160 },
  ],

  // =========================================================================
  // SECTION 5: PÓS-REFRÃO / GROOVE (Beats 124 - 156) - Synth bounce & flow
  // =========================================================================
  [
    { beat: 124.0, x: 320, y: 200 },
    { beat: 125.0, x: 220, y: 320 },
    { beat: 126.0, x: 320, y: 440 },
    {
      beat: 127.0,
      x: 460,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 460, y: 440 }, { x: 580, y: 340 }],
      slides: 1,
    },
  ],
  [
    { beat: 129.0, x: 600, y: 200 },
    { beat: 130.0, x: 480, y: 160 },
    { beat: 131.0, x: 360, y: 200 },
    {
      beat: 132.0,
      x: 260,
      y: 280,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 260, y: 280 }, { x: 200, y: 400 }, { x: 320, y: 460 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 134.5, x: 460, y: 440 },
    { beat: 135.0, x: 560, y: 380 },
    { beat: 136.0, x: 620, y: 260 },
    {
      beat: 137.0,
      x: 520,
      y: 180,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 180 }, { x: 380, y: 140 }, { x: 240, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 140.0, x: 180, y: 320 },
    { beat: 140.5, x: 220, y: 420 },
    { beat: 141.0, x: 340, y: 460 },
    { beat: 142.0, x: 460, y: 420 },
    {
      beat: 143.0,
      x: 560,
      y: 340,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 560, y: 340 }, { x: 560, y: 180 }],
      slides: 2, // Reversal
    },
  ],
  [
    { beat: 146.0, x: 440, y: 180 },
    { beat: 146.5, x: 360, y: 220 },
    { beat: 147.0, x: 300, y: 300 },
    { beat: 148.0, x: 320, y: 420 },
    { beat: 149.0, x: 440, y: 460 },
    {
      beat: 150.0,
      x: 560,
      y: 420,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 560, y: 420 }, { x: 640, y: 320 }, { x: 560, y: 220 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 153.0, x: 440, y: 220 },
    { beat: 153.5, x: 360, y: 240 },
    { beat: 154.0, x: 280, y: 300 },
    { beat: 155.0, x: 240, y: 400 },
  ],

  // =========================================================================
  // SECTION 6: VERSO 2 (Beats 156 - 188) - Alternating funk rhythm
  // =========================================================================
  [
    { beat: 156.0, x: 380, y: 440 },
    { beat: 157.0, x: 520, y: 420 },
    { beat: 158.0, x: 600, y: 320 },
    {
      beat: 159.0,
      x: 580,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 580, y: 180 }, { x: 400, y: 180 }],
      slides: 1,
    },
  ],
  [
    { beat: 161.0, x: 260, y: 220 },
    { beat: 162.0, x: 180, y: 340 },
    { beat: 163.0, x: 260, y: 440 },
    {
      beat: 164.0,
      x: 400,
      y: 460,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 460 }, { x: 540, y: 420 }, { x: 600, y: 300 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 166.5, x: 560, y: 180 },
    { beat: 167.0, x: 440, y: 160 },
    { beat: 168.0, x: 320, y: 200 },
    {
      beat: 169.0,
      x: 240,
      y: 300,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 240, y: 300 }, { x: 200, y: 420 }, { x: 340, y: 460 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 172.5, x: 460, y: 440 },
    { beat: 173.0, x: 580, y: 380 },
    { beat: 174.0, x: 620, y: 260 },
    { beat: 175.0, x: 540, y: 180 },
    {
      beat: 176.0,
      x: 400,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 400, y: 180 }, { x: 240, y: 240 }],
      slides: 1,
    },
  ],
  [
    { beat: 178.5, x: 180, y: 360 },
    { beat: 179.0, x: 260, y: 440 },
    { beat: 180.0, x: 380, y: 460 },
    { beat: 181.0, x: 500, y: 420 },
    { beat: 182.0, x: 580, y: 320 },
    {
      beat: 183.0,
      x: 540,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 540, y: 200 }, { x: 420, y: 160 }, { x: 300, y: 220 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 185.5, x: 220, y: 320 },
    { beat: 186.0, x: 260, y: 420 },
    { beat: 187.0, x: 380, y: 440 },
  ],

  // =========================================================================
  // SECTION 7: PRÉ-REFRÃO 2 (Beats 188 - 220) - Stepping excitement
  // =========================================================================
  [
    { beat: 188.0, x: 500, y: 420 },
    { beat: 189.0, x: 600, y: 340 },
    { beat: 190.0, x: 600, y: 220 },
    {
      beat: 191.0,
      x: 480,
      y: 160,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 480, y: 160 }, { x: 320, y: 200 }],
      slides: 1,
    },
  ],
  [
    { beat: 193.0, x: 220, y: 280 },
    { beat: 194.0, x: 200, y: 400 },
    { beat: 195.0, x: 320, y: 460 },
    {
      beat: 196.0,
      x: 460,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 460, y: 440 }, { x: 580, y: 380 }, { x: 620, y: 260 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 198.5, x: 560, y: 160 },
    { beat: 199.0, x: 420, y: 160 },
    { beat: 200.0, x: 300, y: 200 },
    {
      beat: 201.0,
      x: 220,
      y: 300,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 220, y: 300 }, { x: 220, y: 440 }, { x: 360, y: 460 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 204.5, x: 480, y: 420 },
    { beat: 205.0, x: 580, y: 340 },
    { beat: 206.0, x: 620, y: 220 },
    { beat: 207.0, x: 520, y: 160 },
    {
      beat: 208.0,
      x: 380,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 380, y: 180 }, { x: 240, y: 260 }],
      slides: 1,
    },
  ],
  [
    // Drum roll buildup before Drop 2
    { beat: 210.5, x: 200, y: 380 },
    { beat: 211.0, x: 300, y: 440 },
    { beat: 211.5, x: 400, y: 460 },
    { beat: 212.0, x: 500, y: 440 },
    { beat: 212.5, x: 600, y: 380 },
    { beat: 213.0, x: 640, y: 260 },
    { beat: 214.0, x: 560, y: 160 },
    { beat: 215.0, x: 420, y: 140 },
    { beat: 216.0, x: 280, y: 160 },
    { beat: 217.0, x: 200, y: 260 },
    {
      beat: 218.0,
      x: 300,
      y: 360,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 300, y: 360 }, { x: 500, y: 360 }],
      slides: 1,
    },
  ],

  // =========================================================================
  // SECTION 8: REFRÃO 2 (Beats 220 - 252) - Maximum chorus energy
  // =========================================================================
  [
    { beat: 220.0, x: 620, y: 220 },
    { beat: 221.0, x: 400, y: 440 },
    { beat: 222.0, x: 180, y: 220 },
    {
      beat: 223.0,
      x: 400,
      y: 160,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 160 }, { x: 540, y: 240 }, { x: 480, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 225.5, x: 360, y: 440 },
    { beat: 226.0, x: 240, y: 420 },
    { beat: 227.0, x: 180, y: 300 },
    {
      beat: 228.0,
      x: 260,
      y: 180,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 260, y: 180 }, { x: 400, y: 140 }, { x: 540, y: 200 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 231.0, x: 620, y: 320 },
    { beat: 231.5, x: 560, y: 420 },
    { beat: 232.0, x: 440, y: 460 },
    { beat: 233.0, x: 320, y: 420 },
    {
      beat: 234.0,
      x: 220,
      y: 320,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 220, y: 320 }, { x: 380, y: 220 }],
      slides: 1,
    },
  ],
  [
    { beat: 236.0, x: 520, y: 180 },
    { beat: 236.5, x: 600, y: 240 },
    { beat: 237.0, x: 620, y: 360 },
    { beat: 238.0, x: 520, y: 440 },
    {
      beat: 239.0,
      x: 380,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 380, y: 440 }, { x: 240, y: 380 }, { x: 200, y: 240 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 241.5, x: 300, y: 160 },
    { beat: 242.0, x: 440, y: 160 },
    { beat: 243.0, x: 560, y: 220 },
    { beat: 244.0, x: 600, y: 340 },
    {
      beat: 245.0,
      x: 480,
      y: 420,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 480, y: 420 }, { x: 340, y: 440 }, { x: 220, y: 360 }],
      slides: 2, // Double slide
      ticks: [0.5],
    },
  ],
  [
    { beat: 248.0, x: 200, y: 220 },
    { beat: 248.5, x: 300, y: 160 },
    { beat: 249.0, x: 420, y: 160 },
    { beat: 250.0, x: 540, y: 200 },
    { beat: 251.0, x: 600, y: 320 },
  ],

  // =========================================================================
  // SECTION 9: PONTE & SOLO (Beats 252 - 284) - Flowing wide sweep
  // =========================================================================
  [
    { beat: 252.0, x: 520, y: 420 },
    { beat: 253.0, x: 380, y: 440 },
    { beat: 254.0, x: 240, y: 380 },
    {
      beat: 255.0,
      x: 200,
      y: 240,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 200, y: 240 }, { x: 360, y: 180 }],
      slides: 1,
    },
  ],
  [
    { beat: 257.0, x: 500, y: 180 },
    { beat: 258.0, x: 620, y: 260 },
    { beat: 259.0, x: 580, y: 380 },
    {
      beat: 260.0,
      x: 440,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 440, y: 440 }, { x: 300, y: 420 }, { x: 220, y: 320 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 262.5, x: 240, y: 180 },
    { beat: 263.0, x: 360, y: 140 },
    { beat: 264.0, x: 480, y: 160 },
    {
      beat: 265.0,
      x: 580,
      y: 240,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 580, y: 240 }, { x: 620, y: 380 }, { x: 480, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 268.0, x: 340, y: 420 },
    { beat: 268.5, x: 240, y: 360 },
    { beat: 269.0, x: 200, y: 240 },
    { beat: 270.0, x: 300, y: 160 },
    {
      beat: 271.0,
      x: 440,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 440, y: 180 }, { x: 580, y: 260 }],
      slides: 2, // Reversal
    },
  ],
  [
    { beat: 274.0, x: 480, y: 380 },
    { beat: 274.5, x: 400, y: 420 },
    { beat: 275.0, x: 300, y: 400 },
    { beat: 276.0, x: 220, y: 300 },
    { beat: 277.0, x: 260, y: 180 },
    {
      beat: 278.0,
      x: 400,
      y: 160,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 160 }, { x: 540, y: 200 }, { x: 600, y: 320 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 280.5, x: 540, y: 440 },
    { beat: 281.0, x: 400, y: 460 },
    { beat: 282.0, x: 280, y: 420 },
    { beat: 283.0, x: 200, y: 320 },
  ],

  // =========================================================================
  // SECTION 10: REFRÃO FINAL & CLÍMAX (Beats 284 - 332) - Grand Finale!
  // =========================================================================
  [
    // Box cross pattern
    { beat: 284.0, x: 200, y: 180 },
    { beat: 285.0, x: 600, y: 180 },
    { beat: 286.0, x: 200, y: 420 },
    { beat: 287.0, x: 600, y: 420 },
  ],
  [
    {
      beat: 288.0,
      x: 400,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 200 }, { x: 540, y: 300 }, { x: 400, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
    {
      beat: 290.0,
      x: 400,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 400 }, { x: 260, y: 300 }, { x: 400, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 292.0, x: 560, y: 180 },
    { beat: 292.5, x: 620, y: 280 },
    { beat: 293.0, x: 580, y: 400 },
    { beat: 294.0, x: 440, y: 440 },
    {
      beat: 295.0,
      x: 300,
      y: 400,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 300, y: 400 }, { x: 180, y: 300 }, { x: 260, y: 180 }],
      slides: 2, // Double slide
      ticks: [0.5],
    },
  ],
  [
    { beat: 298.0, x: 400, y: 160 },
    { beat: 298.5, x: 500, y: 180 },
    { beat: 299.0, x: 580, y: 260 },
    { beat: 300.0, x: 560, y: 380 },
    {
      beat: 301.0,
      x: 440,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 440, y: 440 }, { x: 260, y: 380 }],
      slides: 1,
    },
  ],
  [
    { beat: 303.5, x: 180, y: 260 },
    { beat: 304.0, x: 260, y: 160 },
    { beat: 305.0, x: 400, y: 160 },
    { beat: 306.0, x: 520, y: 200 },
    {
      beat: 307.0,
      x: 600,
      y: 320,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 600, y: 320 }, { x: 520, y: 440 }, { x: 380, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 309.5, x: 240, y: 380 },
    { beat: 310.0, x: 180, y: 260 },
    { beat: 311.0, x: 260, y: 160 },
    { beat: 312.0, x: 380, y: 160 },
    {
      beat: 313.0,
      x: 520,
      y: 200,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 200 }, { x: 620, y: 300 }, { x: 520, y: 420 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 316.0, x: 380, y: 440 },
    { beat: 316.5, x: 280, y: 420 },
    { beat: 317.0, x: 200, y: 340 },
    { beat: 318.0, x: 220, y: 200 },
    { beat: 319.0, x: 340, y: 160 },
    {
      beat: 320.0,
      x: 480,
      y: 180,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 480, y: 180 }, { x: 620, y: 280 }],
      slides: 1,
    },
  ],
  [
    { beat: 322.5, x: 580, y: 420 },
    { beat: 323.0, x: 460, y: 460 },
    { beat: 324.0, x: 320, y: 440 },
    { beat: 325.0, x: 200, y: 340 },
    {
      beat: 326.0,
      x: 240,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 240, y: 200 }, { x: 380, y: 140 }, { x: 520, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 328.5, x: 600, y: 300 },
    { beat: 329.0, x: 560, y: 420 },
    { beat: 330.0, x: 420, y: 460 },
    { beat: 331.0, x: 280, y: 400 },
  ],

  // =========================================================================
  // SECTION 11: OUTRO (Beats 332 - 368) - Smooth cool-down & Final chord
  // =========================================================================
  [
    { beat: 332.0, x: 200, y: 280 },
    { beat: 333.0, x: 300, y: 180 },
    { beat: 334.0, x: 440, y: 160 },
    {
      beat: 335.0,
      x: 560,
      y: 220,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 560, y: 220 }, { x: 560, y: 380 }],
      slides: 1,
    },
  ],
  [
    { beat: 337.0, x: 440, y: 440 },
    { beat: 338.0, x: 300, y: 420 },
    { beat: 339.0, x: 200, y: 320 },
    {
      beat: 340.0,
      x: 280,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 280, y: 200 }, { x: 420, y: 160 }, { x: 540, y: 240 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 342.5, x: 600, y: 360 },
    { beat: 343.0, x: 480, y: 440 },
    { beat: 344.0, x: 340, y: 440 },
    {
      beat: 345.0,
      x: 220,
      y: 360,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 220, y: 360 }, { x: 220, y: 200 }, { x: 380, y: 180 }],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 348.0, x: 500, y: 220 },
    { beat: 348.5, x: 580, y: 300 },
    { beat: 349.0, x: 560, y: 420 },
    { beat: 350.0, x: 420, y: 460 },
    {
      beat: 351.0,
      x: 280,
      y: 420,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 280, y: 420 }, { x: 200, y: 280 }],
      slides: 1,
    },
  ],
  [
    { beat: 353.5, x: 280, y: 180 },
    { beat: 354.0, x: 400, y: 160 },
    { beat: 355.0, x: 520, y: 200 },
    { beat: 356.0, x: 600, y: 300 },
    {
      beat: 357.0,
      x: 520,
      y: 420,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 420 }, { x: 400, y: 460 }, { x: 280, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    // Final closing sequence
    { beat: 360.0, x: 200, y: 260 },
    { beat: 361.0, x: 320, y: 180 },
    { beat: 362.0, x: 480, y: 180 },
    { beat: 363.0, x: 600, y: 260 },
    {
      beat: 364.0,
      x: 540,
      y: 400,
      isSlider: true,
      durationBeats: 2.5,
      curveType: 'bezier',
      controlPoints: [{ x: 540, y: 400 }, { x: 400, y: 460 }, { x: 260, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
    // Final single ringing beat note
    { beat: 367.0, x: 400, y: 280 },
  ],
];

// Convert raw patterns into fully typed and indexed HitObjects
let objectIdCounter = 1;
const allNotes: HitObject[] = [];

rawCombos.forEach((comboPatterns, colorIdx) => {
  comboPatterns.forEach((p, indexInCombo) => {
    if (p.isSlider) {
      allNotes.push({
        id: objectIdCounter++,
        type: 'slider' as const,
        x: p.x,
        y: p.y,
        timeMs: beat(p.beat),
        durationMs: Math.round((p.durationBeats || 1) * BEAT_MS),
        curveType: p.curveType || 'linear',
        controlPoints: p.controlPoints || [{ x: p.x, y: p.y }, { x: p.x + 100, y: p.y }],
        slides: p.slides || 1,
        ticks: p.ticks || [0.5],
        comboNumber: indexInCombo + 1,
        comboColorIndex: colorIdx % 4,
      });
    } else {
      allNotes.push({
        id: objectIdCounter++,
        type: 'circle' as const,
        x: p.x,
        y: p.y,
        timeMs: beat(p.beat),
        comboNumber: indexInCombo + 1,
        comboColorIndex: colorIdx % 4,
      });
    }
  });
});

export const suaRifaNaoVouComprarBeatmap: Beatmap = {
  id: 'sua-rifa-nao-vou-comprar',
  title: 'Sua Rifa Não Vou Comprar',
  artist: 'Desconhecido',
  bpm: BPM,
  durationSec: 166,
  durationFormatted: '2:46',
  difficultyName: 'Hard',
  difficultyStars: 3.6,
  audioSourceType: 'file',
  audioUrl: './songs/sua-rifa-nao-vou-comprar.mp3',
  coverUrl: './covers/sua-rifa-nao-vou-comprar.jpg',
  previewStartSec: 41, // Chorus drop preview
  offsetMs: OFFSET_MS,
  circleRadius: 48,
  approachTimeMs: 680,
  notes: allNotes,
};
