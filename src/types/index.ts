export interface Vector2 {
  x: number;
  y: number;
}

export type JudgementType = '300' | '100' | '50' | 'MISS';

export interface JudgementResult {
  id: number;
  type: JudgementType;
  deltaMs: number;
  scoreGained: number;
  combo: number;
  position: Vector2;
  timestamp: number;
  isSliderEnd?: boolean;
}

export type HitObjectType = 'circle' | 'slider';

export interface SliderPoint {
  x: number;
  y: number;
}

export type SliderCurveType = 'linear' | 'bezier';

export interface BaseHitObject {
  id: number;
  type?: HitObjectType;
  x: number;
  y: number;
  timeMs: number;
  comboNumber: number;
  comboColorIndex: number;
}

export interface HitCircleData extends BaseHitObject {
  type?: 'circle';
}

export interface SliderData extends BaseHitObject {
  type: 'slider';
  durationMs: number;
  curveType: SliderCurveType;
  controlPoints: SliderPoint[]; // e.g. [start, control, end] or [start, c1, c2, end]
  slides: number; // 1 = standard, 2 = 1 repeat, 3 = 2 repeats...
  ticks?: number[]; // relative progress t in [0, 1] e.g. [0.33, 0.66]
}

export type HitObject = HitCircleData | SliderData;

export function isSlider(obj: HitObject): obj is SliderData {
  return obj.type === 'slider';
}

export interface BeatmapMetadata {
  id: string;
  title: string;
  artist: string;
  bpm: number;
  durationSec: number;
  durationFormatted: string;
  difficultyName: string;
  difficultyStars: number;
  audioSourceType: 'file' | 'synth';
  audioUrl?: string;
  coverUrl?: string;
  previewStartSec?: number;
  offsetMs: number;
  circleRadius: number;
  approachTimeMs: number;
}

export interface Beatmap extends BeatmapMetadata {
  notes: HitObject[];
}

export type GameState = 'main_menu' | 'song_select' | 'playing' | 'paused' | 'results';

export interface ActiveMods {
  autoPlay: boolean;
  easy: boolean;
  autoPilot: boolean;
  relax: boolean;
}

export interface InputState {
  cursor: Vector2;
  inPlayfield: boolean;
  keys: {
    z: boolean;
    x: boolean;
    mouseLeft: boolean;
    mouseRight?: boolean;
  };
  keyCounts: {
    z: number;
    x: number;
  };
}

export interface GameStats {
  score: number;
  combo: number;
  maxCombo: number;
  accuracy: number;
  counts: {
    300: number;
    100: number;
    50: number;
    miss: number;
  };
  totalHits: number;
  mods?: ActiveMods;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  maxLife: number;
  life: number;
}

export interface ScoreRecord {
  id: string;
  beatmapId: string;
  playerName: string;
  score: number;
  accuracy: number;
  maxCombo: number;
  grade: string;
  counts: {
    300: number;
    100: number;
    50: number;
    miss: number;
  };
  mods: {
    easy?: boolean;
    autoPlay?: boolean;
    autoPilot?: boolean;
    relax?: boolean;
  };
  timestamp: number;
  dateFormatted: string;
  category?: 'competitive' | 'assisted';
}

export interface LeaderboardStorageSchema {
  version: number;
  scores: Record<string, ScoreRecord[]>;
}

export interface VisualJudgement {
  id: number;
  type: JudgementType;
  x: number;
  y: number;
  spawnTime: number;
  color: string;
}

export interface RippleEffect {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  color: string;
  alpha: number;
  spawnTime: number;
  durationMs: number;
}
