import type { Beatmap, HitObject, SliderPoint } from '../../types/index.ts';

const BPM = 163;
const OFFSET_MS = 420;
const BEAT_MS = (60 / BPM) * 1000; // ~368.1 ms

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

const rawCombos: RawPattern[][] = [
  // --- SECTION 1: Intro Beat Drops (8 - 24) ---
  [
    { beat: 8.0, x: 240, y: 220 },
    { beat: 9.0, x: 560, y: 220 },
    // Slider reto suave no drop inicial da bateria
    {
      beat: 10.0,
      x: 520,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 520, y: 380 }, { x: 280, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 12.0, x: 400, y: 150 }, { beat: 13.0, x: 620, y: 420 },
    // Slider curvo na intro
    {
      beat: 14.0,
      x: 180,
      y: 420,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 180, y: 420 }, { x: 290, y: 350 }, { x: 400, y: 280 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 16.0, x: 300, y: 250 }, { beat: 16.5, x: 370, y: 220 }, { beat: 17.0, x: 440, y: 250 },
    { beat: 18.0, x: 550, y: 350 }, { beat: 18.5, x: 480, y: 380 }, { beat: 19.0, x: 410, y: 350 }
  ],
  [
    { beat: 20.0, x: 160, y: 300 }, { beat: 21.0, x: 320, y: 300 },
    // Slider diagonal na subida do verso
    {
      beat: 22.0,
      x: 480,
      y: 300,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 480, y: 300 }, { x: 640, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],

  // --- SECTION 2: Verse 1 Groove (24 - 64) ---
  [
    { beat: 24.0, x: 580, y: 180 }, { beat: 25.0, x: 420, y: 160 },
    // Slider curvo no groove
    {
      beat: 26.0,
      x: 280,
      y: 220,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 280, y: 220 }, { x: 180, y: 300 }, { x: 200, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 28.0, x: 300, y: 440 }, { beat: 28.5, x: 370, y: 410 },
    { beat: 29.0, x: 440, y: 360 }, { beat: 29.5, x: 510, y: 310 }, { beat: 30.0, x: 580, y: 240 }
  ],
  [
    // Slider curvo reverso suave (slides: 2, 2.5 beats, velocidade confortável)
    {
      beat: 32.0,
      x: 540,
      y: 220,
      isSlider: true,
      durationBeats: 2.5,
      curveType: 'bezier',
      controlPoints: [
        { x: 540, y: 220 },
        { x: 420, y: 320 },
        { x: 320, y: 240 },
      ],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 36.0, x: 400, y: 140 }, { beat: 37.0, x: 590, y: 300 },
    // Slider curvo descendente
    {
      beat: 38.0,
      x: 400,
      y: 460,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 400, y: 460 }, { x: 300, y: 400 }, { x: 210, y: 300 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 40.0, x: 320, y: 220 }, { beat: 40.5, x: 400, y: 220 }, { beat: 41.0, x: 480, y: 220 },
    { beat: 41.5, x: 400, y: 300 }, { beat: 42.0, x: 400, y: 380 }
  ],
  [
    { beat: 44.0, x: 220, y: 440 }, { beat: 44.5, x: 280, y: 380 }, { beat: 45.0, x: 350, y: 330 },
    { beat: 45.5, x: 430, y: 290 },
    // Slider horizontal fluido
    {
      beat: 46.0,
      x: 510,
      y: 260,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 510, y: 260 }, { x: 650, y: 320 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 48.0, x: 400, y: 300 }
  ],
  [
    { beat: 50.0, x: 250, y: 200 }, { beat: 51.0, x: 380, y: 260 },
    { beat: 52.0, x: 510, y: 200 }, { beat: 53.0, x: 600, y: 320 },
    // Slider curvo horizontal
    {
      beat: 54.0,
      x: 480,
      y: 420,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 480, y: 420 }, { x: 400, y: 460 }, { x: 320, y: 420 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 56.0, x: 200, y: 300 }, { beat: 57.0, x: 300, y: 200 },
    { beat: 58.0, x: 500, y: 200 }, { beat: 59.0, x: 600, y: 300 },
    // Slider de transição
    {
      beat: 60.0,
      x: 500,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 500, y: 400 }, { x: 400, y: 340 }, { x: 300, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],

  // --- SECTION 3: Pre-Chorus Build (64 - 96) ---
  [
    { beat: 64.0, x: 180, y: 220 }, { beat: 65.0, x: 300, y: 160 },
    { beat: 66.0, x: 440, y: 160 }, { beat: 67.0, x: 560, y: 220 },
    // Slider curvo no pré-refrão
    {
      beat: 68.0,
      x: 620,
      y: 340,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 620, y: 340 }, { x: 580, y: 420 }, { x: 500, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 70.0, x: 380, y: 460 }, { beat: 71.0, x: 260, y: 400 },
    { beat: 72.0, x: 200, y: 300 }, { beat: 73.0, x: 320, y: 260 },
    // Slider vertical
    {
      beat: 74.0,
      x: 440,
      y: 300,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 440, y: 300 }, { x: 400, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 76.0, x: 240, y: 180 }, { beat: 76.5, x: 320, y: 180 },
    { beat: 77.0, x: 400, y: 180 }, { beat: 78.0, x: 480, y: 260 },
    { beat: 78.5, x: 480, y: 340 }, { beat: 79.0, x: 480, y: 420 }
  ],
  [
    { beat: 80.0, x: 380, y: 420 }, { beat: 81.0, x: 280, y: 420 },
    // Slider reverso na subida
    {
      beat: 82.0,
      x: 180,
      y: 340,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 180, y: 340 }, { x: 240, y: 290 }, { x: 180, y: 240 }],
      slides: 2,
      ticks: [0.5],
    },
    { beat: 84.0, x: 280, y: 160 }, { beat: 85.0, x: 400, y: 160 }
  ],
  [
    { beat: 86.0, x: 520, y: 200 }, { beat: 86.5, x: 580, y: 260 },
    { beat: 87.0, x: 620, y: 340 }, { beat: 87.5, x: 580, y: 420 },
    // Slider de conexão
    {
      beat: 88.0,
      x: 500,
      y: 460,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 500, y: 460 }, { x: 400, y: 300 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 90.0, x: 250, y: 350 }, { beat: 91.0, x: 550, y: 350 },
    { beat: 92.0, x: 400, y: 180 }, { beat: 93.0, x: 400, y: 420 },
    { beat: 94.0, x: 220, y: 220 }, { beat: 95.0, x: 580, y: 220 }
  ],

  // --- SECTION 4: Chorus 1 Drop & Jumps (96 - 160) ---
  [
    { beat: 96.0, x: 400, y: 140 }, { beat: 97.0, x: 580, y: 440 },
    { beat: 98.0, x: 180, y: 260 }, { beat: 99.0, x: 620, y: 260 },
    { beat: 100.0, x: 220, y: 440 }
  ],
  [
    // Slider horizontal fluido no refrão (280px, 2 beats)
    {
      beat: 102.0,
      x: 260,
      y: 220,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'linear',
      controlPoints: [{ x: 260, y: 220 }, { x: 540, y: 220 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 106.0, x: 300, y: 280 }, { beat: 106.5, x: 370, y: 240 },
    { beat: 107.0, x: 440, y: 280 }, { beat: 107.5, x: 510, y: 320 },
    { beat: 108.0, x: 580, y: 280 }, { beat: 109.0, x: 400, y: 420 }
  ],
  [
    { beat: 110.0, x: 220, y: 180 }, { beat: 111.0, x: 580, y: 180 },
    // Slider horizontal largo no refrão
    {
      beat: 112.0,
      x: 220,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 220, y: 400 }, { x: 400, y: 440 }, { x: 580, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 114.0, x: 320, y: 300 }, { beat: 115.0, x: 480, y: 300 },
    { beat: 116.0, x: 400, y: 200 }, { beat: 117.0, x: 400, y: 400 }
  ],
  [
    { beat: 118.0, x: 240, y: 440 }, { beat: 118.5, x: 300, y: 380 },
    { beat: 119.0, x: 370, y: 330 }, { beat: 119.5, x: 450, y: 290 },
    // Slider reverso rápido no refrão
    {
      beat: 120.0,
      x: 530,
      y: 260,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 530, y: 260 }, { x: 600, y: 320 }, { x: 550, y: 400 }],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 122.0, x: 550, y: 440 }, { beat: 123.0, x: 380, y: 440 },
    { beat: 124.0, x: 240, y: 360 }, { beat: 125.0, x: 180, y: 240 },
    { beat: 126.0, x: 280, y: 160 }, { beat: 127.0, x: 440, y: 160 }
  ],
  [
    { beat: 128.0, x: 600, y: 220 }, { beat: 129.0, x: 200, y: 380 },
    // Slider horizontal
    {
      beat: 130.0,
      x: 600,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 600, y: 380 }, { x: 360, y: 380 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 132.0, x: 340, y: 240 }, { beat: 132.5, x: 420, y: 200 },
    { beat: 133.0, x: 500, y: 240 }, { beat: 134.0, x: 540, y: 340 },
    { beat: 134.5, x: 480, y: 400 }, { beat: 135.0, x: 400, y: 400 },
    { beat: 135.5, x: 320, y: 360 }, { beat: 136.0, x: 300, y: 280 }
  ],
  [
    { beat: 138.0, x: 180, y: 300 }, { beat: 139.0, x: 360, y: 180 },
    { beat: 140.0, x: 540, y: 180 }, { beat: 141.0, x: 620, y: 340 },
    // Slider curvo no drop vocal
    {
      beat: 142.0,
      x: 440,
      y: 440,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 440, y: 440 }, { x: 340, y: 460 }, { x: 260, y: 420 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 144.0, x: 400, y: 300 }, { beat: 145.0, x: 250, y: 200 },
    { beat: 146.0, x: 550, y: 200 }, { beat: 147.0, x: 400, y: 400 },
    { beat: 148.0, x: 180, y: 320 }, { beat: 149.0, x: 620, y: 320 }
  ],
  [
    { beat: 150.0, x: 320, y: 220 }, { beat: 150.5, x: 400, y: 220 },
    { beat: 151.0, x: 480, y: 220 }, { beat: 152.0, x: 560, y: 300 },
    { beat: 152.5, x: 520, y: 380 }, { beat: 153.0, x: 440, y: 420 },
    // Slider curvo terminando refrão
    {
      beat: 154.0,
      x: 340,
      y: 420,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 340, y: 420 }, { x: 280, y: 380 }, { x: 240, y: 320 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 156.0, x: 400, y: 300 }
  ],

  // --- SECTION 5: Verse 2 / Funk Trap Flow (160 - 224) ---
  [
    { beat: 160.0, x: 240, y: 220 }, { beat: 161.0, x: 560, y: 220 },
    { beat: 162.0, x: 560, y: 420 }, { beat: 163.0, x: 240, y: 420 }
  ],
  [
    { beat: 164.0, x: 300, y: 320 }, { beat: 164.5, x: 360, y: 260 },
    { beat: 165.0, x: 440, y: 240 }, { beat: 165.5, x: 520, y: 280 },
    { beat: 166.0, x: 560, y: 360 }, { beat: 167.0, x: 420, y: 440 }
  ],
  [
    // Slider curvo elegante na parte vocal (280px, 2.5 beats)
    {
      beat: 168.0,
      x: 260,
      y: 220,
      isSlider: true,
      durationBeats: 2.5,
      curveType: 'bezier',
      controlPoints: [
        { x: 260, y: 220 },
        { x: 400, y: 320 },
        { x: 540, y: 220 },
      ],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 172.0, x: 400, y: 150 }, { beat: 173.0, x: 550, y: 280 },
    { beat: 174.0, x: 400, y: 450 }, { beat: 175.0, x: 250, y: 280 }
  ],
  [
    { beat: 176.0, x: 320, y: 220 }, { beat: 176.5, x: 400, y: 200 },
    { beat: 177.0, x: 480, y: 220 },
    // Slider curvo
    {
      beat: 178.0,
      x: 540,
      y: 300,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 540, y: 300 }, { x: 480, y: 380 }, { x: 400, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 180.0, x: 260, y: 360 }, { beat: 181.0, x: 220, y: 260 },
    { beat: 182.0, x: 320, y: 180 }, { beat: 183.0, x: 460, y: 180 },
    // Slider reverso
    {
      beat: 184.0,
      x: 580,
      y: 260,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 580, y: 260 }, { x: 620, y: 340 }, { x: 540, y: 380 }],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 186.0, x: 400, y: 440 }, { beat: 187.0, x: 280, y: 420 },
    { beat: 188.0, x: 180, y: 320 }, { beat: 189.0, x: 240, y: 200 },
    { beat: 190.0, x: 380, y: 160 }, { beat: 191.0, x: 520, y: 180 }
  ],
  [
    { beat: 192.0, x: 640, y: 280 }, { beat: 193.0, x: 540, y: 400 },
    { beat: 194.0, x: 380, y: 440 }, { beat: 195.0, x: 220, y: 380 },
    // Slider diagonal
    {
      beat: 196.0,
      x: 160,
      y: 240,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 160, y: 240 }, { x: 280, y: 160 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 198.0, x: 440, y: 150 }, { beat: 199.0, x: 580, y: 220 },
    { beat: 200.0, x: 620, y: 360 }, { beat: 201.0, x: 480, y: 450 }
  ],
  [
    { beat: 202.0, x: 320, y: 420 }, { beat: 202.5, x: 260, y: 340 },
    { beat: 203.0, x: 260, y: 260 }, { beat: 203.5, x: 340, y: 200 },
    { beat: 204.0, x: 440, y: 200 }, { beat: 204.5, x: 520, y: 260 },
    { beat: 205.0, x: 520, y: 360 }, { beat: 206.0, x: 400, y: 300 }
  ],
  [
    { beat: 208.0, x: 200, y: 220 }, { beat: 209.0, x: 400, y: 160 },
    // Slider curvo
    {
      beat: 210.0,
      x: 600,
      y: 220,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 600, y: 220 }, { x: 560, y: 340 }, { x: 500, y: 420 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 212.0, x: 300, y: 420 }, { beat: 213.0, x: 400, y: 300 }
  ],
  [
    { beat: 214.0, x: 240, y: 200 }, { beat: 215.0, x: 560, y: 200 },
    { beat: 216.0, x: 240, y: 400 }, { beat: 217.0, x: 560, y: 400 },
    { beat: 218.0, x: 400, y: 180 }, { beat: 219.0, x: 400, y: 420 }
  ],
  [
    { beat: 220.0, x: 280, y: 300 }, { beat: 220.5, x: 360, y: 300 },
    { beat: 221.0, x: 440, y: 300 }, { beat: 221.5, x: 520, y: 300 },
    { beat: 222.0, x: 600, y: 300 }, { beat: 223.0, x: 400, y: 300 }
  ],

  // --- SECTION 6: Bridge Build-up (224 - 264) ---
  [
    { beat: 224.0, x: 180, y: 420 }, { beat: 225.0, x: 280, y: 360 },
    // Slider diagonal na subida de intensidade (220px, 2 beats)
    {
      beat: 226.0,
      x: 340,
      y: 320,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'linear',
      controlPoints: [{ x: 340, y: 320 }, { x: 520, y: 200 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 230.0, x: 620, y: 380 }, { beat: 231.0, x: 500, y: 440 },
    { beat: 232.0, x: 360, y: 440 }, { beat: 233.0, x: 240, y: 380 },
    // Slider curvo na ponte
    {
      beat: 234.0,
      x: 200,
      y: 260,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 200, y: 260 }, { x: 220, y: 200 }, { x: 280, y: 160 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 236.0, x: 380, y: 160 }, { beat: 236.5, x: 440, y: 200 },
    { beat: 237.0, x: 500, y: 260 }, { beat: 238.0, x: 520, y: 360 },
    { beat: 238.5, x: 460, y: 420 }, { beat: 239.0, x: 380, y: 440 }
  ],
  [
    { beat: 240.0, x: 280, y: 400 }, { beat: 241.0, x: 220, y: 300 },
    { beat: 242.0, x: 280, y: 200 }, { beat: 243.0, x: 400, y: 160 },
    // Slider reverso na subida
    {
      beat: 244.0,
      x: 520,
      y: 200,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 520, y: 200 }, { x: 580, y: 260 }, { x: 520, y: 320 }],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 246.0, x: 520, y: 400 }, { beat: 246.5, x: 440, y: 440 },
    { beat: 247.0, x: 360, y: 420 }, { beat: 247.5, x: 300, y: 360 },
    { beat: 248.0, x: 300, y: 280 }, { beat: 249.0, x: 400, y: 220 }
  ],
  [
    { beat: 250.0, x: 500, y: 280 }, { beat: 251.0, x: 500, y: 380 },
    { beat: 252.0, x: 380, y: 420 }, { beat: 253.0, x: 260, y: 360 },
    { beat: 254.0, x: 240, y: 240 }, { beat: 255.0, x: 340, y: 160 }
  ],
  [
    { beat: 256.0, x: 480, y: 160 }, { beat: 257.0, x: 600, y: 240 },
    // Slider linear cruzando para o drop
    {
      beat: 258.0,
      x: 600,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 600, y: 380 }, { x: 460, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 260.0, x: 320, y: 440 }, { beat: 261.0, x: 200, y: 360 },
    { beat: 262.0, x: 400, y: 300 }
  ],

  // --- SECTION 7: Final Climax Chorus (264 - 336) ---
  [
    { beat: 264.0, x: 400, y: 140 }, { beat: 265.0, x: 600, y: 440 },
    { beat: 266.0, x: 180, y: 260 }, { beat: 267.0, x: 620, y: 260 },
    { beat: 268.0, x: 200, y: 440 }
  ],
  [
    // Slider curvo reverso suave no refrão final (240px, 2.5 beats)
    {
      beat: 270.0,
      x: 280,
      y: 220,
      isSlider: true,
      durationBeats: 2.5,
      curveType: 'bezier',
      controlPoints: [
        { x: 280, y: 220 },
        { x: 400, y: 300 },
        { x: 520, y: 220 },
      ],
      slides: 2, // Reversal
      ticks: [0.5],
    },
  ],
  [
    { beat: 274.0, x: 400, y: 300 }, { beat: 275.0, x: 250, y: 200 },
    { beat: 276.0, x: 550, y: 200 }, { beat: 277.0, x: 400, y: 420 },
    { beat: 278.0, x: 180, y: 300 }, { beat: 279.0, x: 620, y: 300 }
  ],
  [
    { beat: 280.0, x: 520, y: 180 }, { beat: 280.5, x: 440, y: 220 },
    { beat: 281.0, x: 360, y: 260 }, { beat: 281.5, x: 280, y: 320 },
    // Slider curvo no clímax
    {
      beat: 282.0,
      x: 220,
      y: 400,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 220, y: 400 }, { x: 280, y: 460 }, { x: 360, y: 440 }],
      slides: 1,
      ticks: [0.5],
    },
  ],
  [
    { beat: 284.0, x: 460, y: 440 }, { beat: 285.0, x: 580, y: 380 },
    { beat: 286.0, x: 620, y: 260 }, { beat: 287.0, x: 520, y: 160 },
    { beat: 288.0, x: 380, y: 160 }, { beat: 289.0, x: 240, y: 220 }
  ],
  [
    { beat: 290.0, x: 180, y: 340 }, { beat: 291.0, x: 240, y: 440 },
    { beat: 292.0, x: 380, y: 440 }, { beat: 293.0, x: 520, y: 400 },
    // Slider reverso no clímax
    {
      beat: 294.0,
      x: 620,
      y: 300,
      isSlider: true,
      durationBeats: 1.8,
      curveType: 'bezier',
      controlPoints: [{ x: 620, y: 300 }, { x: 620, y: 220 }, { x: 540, y: 180 }],
      slides: 2,
      ticks: [0.5],
    },
  ],
  [
    { beat: 296.0, x: 420, y: 160 }, { beat: 297.0, x: 280, y: 200 },
    { beat: 298.0, x: 200, y: 300 }, { beat: 299.0, x: 260, y: 400 },
    { beat: 300.0, x: 400, y: 440 }, { beat: 301.0, x: 540, y: 380 }
  ],
  [
    { beat: 302.0, x: 600, y: 260 }, { beat: 302.5, x: 540, y: 200 },
    { beat: 303.0, x: 460, y: 180 }, { beat: 303.5, x: 380, y: 200 },
    // Slider linear cruzando
    {
      beat: 304.0,
      x: 320,
      y: 260,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'linear',
      controlPoints: [{ x: 320, y: 260 }, { x: 480, y: 360 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 306.0, x: 480, y: 360 }, { beat: 307.0, x: 400, y: 280 }
  ],
  [
    { beat: 308.0, x: 200, y: 200 }, { beat: 309.0, x: 600, y: 200 },
    { beat: 310.0, x: 200, y: 420 }, { beat: 311.0, x: 600, y: 420 }
  ],
  [
    { beat: 312.0, x: 400, y: 140 }, { beat: 313.0, x: 620, y: 300 },
    { beat: 314.0, x: 400, y: 460 }, { beat: 315.0, x: 180, y: 300 }
  ],
  [
    { beat: 316.0, x: 300, y: 240 }, { beat: 316.5, x: 380, y: 220 },
    { beat: 317.0, x: 460, y: 240 }, { beat: 317.5, x: 520, y: 300 },
    // Slider curvo
    {
      beat: 318.0,
      x: 500,
      y: 380,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 500, y: 380 }, { x: 440, y: 440 }, { x: 340, y: 400 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 320.0, x: 400, y: 300 }
  ],
  [
    { beat: 322.0, x: 180, y: 320 }, { beat: 323.0, x: 340, y: 180 },
    { beat: 324.0, x: 500, y: 180 }, { beat: 325.0, x: 620, y: 320 },
    { beat: 326.0, x: 480, y: 440 }, { beat: 327.0, x: 280, y: 440 }
  ],
  [
    { beat: 328.0, x: 400, y: 300 }, { beat: 329.0, x: 240, y: 200 },
    // Slider curvo no fechamento
    {
      beat: 330.0,
      x: 560,
      y: 200,
      isSlider: true,
      durationBeats: 1.5,
      curveType: 'bezier',
      controlPoints: [{ x: 560, y: 200 }, { x: 440, y: 280 }, { x: 340, y: 220 }],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 332.0, x: 560, y: 420 }, { beat: 333.0, x: 400, y: 180 },
    { beat: 334.0, x: 400, y: 420 }
  ],

  // --- SECTION 8: Outro Downbeats (336 - 348) ---
  [
    { beat: 336.0, x: 260, y: 300 }, { beat: 338.0, x: 540, y: 300 },
    { beat: 340.0, x: 320, y: 220 }, { beat: 342.0, x: 480, y: 380 },
    // Slider final de fechamento (suave e fluido)
    {
      beat: 344.0,
      x: 320,
      y: 360,
      isSlider: true,
      durationBeats: 2.0,
      curveType: 'bezier',
      controlPoints: [
        { x: 320, y: 360 },
        { x: 440, y: 240 },
        { x: 400, y: 300 },
      ],
      slides: 1,
      ticks: [0.5],
    },
    { beat: 348.0, x: 400, y: 300 }, // Nota final aos ~128.5s
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

export const aloCachorradaBeatmap: Beatmap = {
  id: 'alo-cachorrada',
  title: 'Alô cachorrada!',
  artist: 'Desconhecido',
  bpm: BPM,
  durationSec: 131,
  durationFormatted: '2:11',
  difficultyName: 'Insane',
  difficultyStars: 4.2,
  audioSourceType: 'file',
  audioUrl: './songs/alo-cachorrada.mp3',
  coverUrl: './covers/alocachorrada.jpg',
  previewStartSec: 18,
  offsetMs: OFFSET_MS,
  circleRadius: 48,
  approachTimeMs: 650,
  notes: allNotes,
};
