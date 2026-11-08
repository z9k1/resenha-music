import type { HitObject, JudgementResult, JudgementType, Vector2 } from '../types/index.ts';
import { isSlider } from '../types/index.ts';
import { ActiveSlider, type SliderCallbacks } from './ActiveSlider.ts';
import { ScoreSystem } from './ScoreSystem.ts';

export interface JudgementCallbacks {
  onJudgement: (result: JudgementResult) => void;
}

export class JudgementSystem {
  // Standard timing windows in milliseconds
  public static readonly WINDOW_300 = 55;
  public static readonly WINDOW_100 = 110;
  public static readonly WINDOW_50 = 165;

  // Easy mode timing windows (+45% to +33% more forgiving)
  public static readonly EASY_WINDOW_300 = 80;
  public static readonly EASY_WINDOW_100 = 150;
  public static readonly EASY_WINDOW_50 = 220;

  private scoreSystem: ScoreSystem;
  private callbacks: JudgementCallbacks;
  private circleRadius: number;
  private isEasyMode: boolean = false;

  public window300: number = JudgementSystem.WINDOW_300;
  public window100: number = JudgementSystem.WINDOW_100;
  public window50: number = JudgementSystem.WINDOW_50;

  constructor(scoreSystem: ScoreSystem, circleRadius: number, callbacks: JudgementCallbacks) {
    this.scoreSystem = scoreSystem;
    this.circleRadius = circleRadius;
    this.callbacks = callbacks;
  }

  public setEasyMode(isEasy: boolean): void {
    this.isEasyMode = isEasy;
    this.window300 = isEasy ? JudgementSystem.EASY_WINDOW_300 : JudgementSystem.WINDOW_300;
    this.window100 = isEasy ? JudgementSystem.EASY_WINDOW_100 : JudgementSystem.WINDOW_100;
    this.window50 = isEasy ? JudgementSystem.EASY_WINDOW_50 : JudgementSystem.WINDOW_50;
  }

  public getEasyMode(): boolean {
    return this.isEasyMode;
  }

  public setCircleRadius(radius: number): void {
    this.circleRadius = radius;
  }

  /**
   * Attempts to hit an active circle or slider head with user tap input at given position and time
   */
  public handleTap(
    cursor: Vector2,
    currentTimeMs: number,
    unjudgedObjects: HitObject[],
    activeSliders: ActiveSlider[],
    sliderCallbacks: SliderCallbacks
  ): { hitId: number; isSlider: boolean } | null {
    // Find candidate objects within hittable time window [-window50, +window50]
    const candidates = unjudgedObjects
      .filter((obj) => {
        const delta = currentTimeMs - obj.timeMs;
        return delta >= -this.window50 && delta <= this.window50;
      })
      .sort((a, b) => a.timeMs - b.timeMs);

    for (const obj of candidates) {
      if (isSlider(obj)) {
        // Slider head test
        const activeSlider = activeSliders.find((s) => s.data.id === obj.id);
        if (activeSlider && !activeSlider.headJudged) {
          const hit = activeSlider.handleHeadTap(
            cursor,
            currentTimeMs,
            this.circleRadius,
            sliderCallbacks,
            this.window300,
            this.window100,
            this.window50
          );
          if (hit) {
            return { hitId: obj.id, isSlider: true };
          }
        }
      } else {
        // Regular circle test
        const dx = cursor.x - obj.x;
        const dy = cursor.y - obj.y;
        const distance = Math.hypot(dx, dy);

        if (distance <= this.circleRadius) {
          const deltaMs = currentTimeMs - obj.timeMs;
          const absDelta = Math.abs(deltaMs);

          let type: JudgementType = '50';
          if (absDelta <= this.window300) {
            type = '300';
          } else if (absDelta <= this.window100) {
            type = '100';
          } else {
            type = '50';
          }

          const { scoreGained, newCombo } = this.scoreSystem.registerJudgement(type);

          const result: JudgementResult = {
            id: obj.id,
            type,
            deltaMs,
            scoreGained,
            combo: newCombo,
            position: { x: obj.x, y: obj.y },
            timestamp: currentTimeMs,
          };

          this.callbacks.onJudgement(result);
          return { hitId: obj.id, isSlider: false };
        }
      }
    }

    return null;
  }

  /**
   * Checks for expired circles that timed out without being tapped
   */
  public checkExpiredCircles(
    currentTimeMs: number,
    unjudgedObjects: HitObject[],
    onExpire: (objId: number) => void
  ): void {
    for (const obj of unjudgedObjects) {
      if (isSlider(obj)) continue; // Sliders manage their own head expiration & completion

      if (currentTimeMs > obj.timeMs + this.window50) {
        onExpire(obj.id);

        const { scoreGained, newCombo } = this.scoreSystem.registerJudgement('MISS');

        const result: JudgementResult = {
          id: obj.id,
          type: 'MISS',
          deltaMs: currentTimeMs - obj.timeMs,
          scoreGained,
          combo: newCombo,
          position: { x: obj.x, y: obj.y },
          timestamp: currentTimeMs,
        };

        this.callbacks.onJudgement(result);
      }
    }
  }
}
