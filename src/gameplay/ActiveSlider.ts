import type { InputState, JudgementType, SliderData, Vector2 } from '../types/index.ts';
import { JudgementSystem } from './JudgementSystem.ts';
import { SliderPath } from './SliderPath.ts';

export interface ActiveSliderTick {
  timeMs: number;
  progress: number;
  position: Vector2;
  processed: boolean;
  hit: boolean;
}

export interface ActiveSliderRepeat {
  timeMs: number;
  slideIndex: number;
  position: Vector2;
  angle: number;
  processed: boolean;
  hit: boolean;
}

export interface SliderCallbacks {
  onHeadJudged: (type: JudgementType, pos: Vector2, deltaMs: number) => void;
  onTickHit: (pos: Vector2) => void;
  onTickMiss: (pos: Vector2) => void;
  onRepeatHit: (pos: Vector2) => void;
  onRepeatMiss: (pos: Vector2) => void;
  onSliderComplete: (overallType: JudgementType, pos: Vector2) => void;
}

export class ActiveSlider {
  public data: SliderData;
  public path: SliderPath;

  public headJudged: boolean = false;
  public headHit: boolean = false;
  public isTracking: boolean = false;
  public completed: boolean = false;
  public lastTrackingTimeMs: number = 0;

  // Visual animation properties
  public followCircleScale: number = 0;
  public followCircleAlpha: number = 0;

  public ticks: ActiveSliderTick[] = [];
  public repeats: ActiveSliderRepeat[] = [];

  public totalEvents: number = 0;
  public hitEvents: number = 0;
  public isEasyMode: boolean = false;

  constructor(data: SliderData, isEasyMode: boolean = false) {
    this.data = data;
    this.isEasyMode = isEasyMode;
    this.path = new SliderPath(data.controlPoints, data.curveType);
    this.initEvents();
  }

  private initEvents(): void {
    const { timeMs, durationMs, slides } = this.data;
    const singleSlideDuration = durationMs / slides;

    // 1. Ticks
    // If specific ticks are defined, use them. Otherwise auto-generate 1-2 ticks per slide
    const tickIntervals = this.data.ticks ?? [0.33, 0.66];
    for (let s = 0; s < slides; s++) {
      const slideStart = timeMs + s * singleSlideDuration;
      const isReverse = s % 2 === 1;

      for (const t of tickIntervals) {
        if (t <= 0.05 || t >= 0.95) continue;
        const tickTime = slideStart + t * singleSlideDuration;
        const curveT = isReverse ? 1 - t : t;
        const pos = this.path.getPositionAt(curveT);

        this.ticks.push({
          timeMs: Math.round(tickTime),
          progress: curveT,
          position: pos,
          processed: false,
          hit: false,
        });
      }
    }

    // 2. Repeats (Reversal points)
    // For slides > 1, repeat occurs at end of slide 0, 1, ... slides - 2
    for (let s = 1; s < slides; s++) {
      const repeatTime = timeMs + s * singleSlideDuration;
      const atTail = s % 2 === 1; // Slide 0 ends at tail
      const pos = atTail ? this.path.getTailPosition() : this.path.getHeadPosition();
      // Arrow points back along curve
      const angle = atTail ? this.path.getAngleAt(0.98) + Math.PI : this.path.getAngleAt(0.02);

      this.repeats.push({
        timeMs: Math.round(repeatTime),
        slideIndex: s,
        position: pos,
        angle,
        processed: false,
        hit: false,
      });
    }

    // Sort ticks chronologically
    this.ticks.sort((a, b) => a.timeMs - b.timeMs);

    // Total trackable events: 1 (head) + ticks.length + repeats.length + 1 (tail)
    this.totalEvents = 1 + this.ticks.length + this.repeats.length + 1;
  }

  /**
   * Attempts to hit slider head with tap input
   */
  public handleHeadTap(
    cursor: Vector2,
    currentTimeMs: number,
    circleRadius: number,
    callbacks: SliderCallbacks,
    customWindow300?: number,
    customWindow100?: number,
    customWindow50?: number
  ): boolean {
    if (this.headJudged) return false;

    const win300 = customWindow300 ?? (this.isEasyMode ? JudgementSystem.EASY_WINDOW_300 : JudgementSystem.WINDOW_300);
    const win100 = customWindow100 ?? (this.isEasyMode ? JudgementSystem.EASY_WINDOW_100 : JudgementSystem.WINDOW_100);
    const win50 = customWindow50 ?? (this.isEasyMode ? JudgementSystem.EASY_WINDOW_50 : JudgementSystem.WINDOW_50);

    const deltaMs = currentTimeMs - this.data.timeMs;
    const absDelta = Math.abs(deltaMs);

    if (absDelta > win50) return false;

    const headPos = this.path.getHeadPosition();
    const dist = Math.hypot(cursor.x - headPos.x, cursor.y - headPos.y);

    if (dist <= circleRadius) {
      let type: JudgementType = '50';
      if (absDelta <= win300) {
        type = '300';
      } else if (absDelta <= win100) {
        type = '100';
      } else {
        type = '50';
      }

      this.headJudged = true;
      this.headHit = true;
      this.hitEvents++;
      this.isTracking = true;
      this.lastTrackingTimeMs = currentTimeMs;
      this.followCircleScale = 1.0;
      this.followCircleAlpha = 1.0;

      callbacks.onHeadJudged(type, headPos, deltaMs);
      return true;
    }

    return false;
  }

  /**
   * Updates slider tracking, follow circle, ticks, repeats, and completion
   */
  public update(
    currentTimeMs: number,
    inputState: InputState,
    circleRadius: number,
    dt: number,
    callbacks: SliderCallbacks,
    customWindow50?: number
  ): void {
    const { timeMs, durationMs, slides } = this.data;
    const gracePeriodMs = this.isEasyMode ? 200 : 120;
    // Allow evaluation up to tail + grace buffer so tail hits are never missed between frames
    const isInsideTimeline = currentTimeMs >= timeMs && currentTimeMs <= timeMs + durationMs + 30;
    const win50 = customWindow50 ?? (this.isEasyMode ? JudgementSystem.EASY_WINDOW_50 : JudgementSystem.WINDOW_50);

    // 1. Check if head expired without hit
    if (!this.headJudged && currentTimeMs > timeMs + win50) {
      this.headJudged = true;
      this.headHit = false;
      callbacks.onHeadJudged('MISS', this.path.getHeadPosition(), currentTimeMs - timeMs);
    }

    // 2. Evaluate ball tracking
    if (isInsideTimeline) {
      const evalTime = Math.min(currentTimeMs, timeMs + durationMs);
      const ballState = this.path.getBallStateAtTime(evalTime, timeMs, durationMs, slides);
      const isHoldingKey =
        inputState.keys.z ||
        inputState.keys.x ||
        inputState.keys.mouseLeft ||
        Boolean(inputState.keys.mouseRight);
      const distToBall = Math.hypot(
        inputState.cursor.x - ballState.position.x,
        inputState.cursor.y - ballState.position.y
      );

      // Follow circle radius: 3.0x on Easy mode, 2.5x on Standard
      const followRadiusMultiplier = this.isEasyMode ? 3.0 : 2.5;
      const followRadius = circleRadius * followRadiusMultiplier;
      const insideFollowZone = distToBall <= followRadius;

      // Player tracks ball if holding down button AND cursor is within follow zone
      if (isHoldingKey && insideFollowZone) {
        this.lastTrackingTimeMs = currentTimeMs;
        this.isTracking = true;
      } else {
        const inGracePeriod = currentTimeMs - this.lastTrackingTimeMs <= gracePeriodMs;
        this.isTracking = isHoldingKey && inGracePeriod;
      }

      // Smooth follow circle animations
      if (this.isTracking && this.followCircleAlpha < 0.2) {
        this.followCircleScale = 1.0;
        this.followCircleAlpha = 0.9;
      }
      const targetScale = this.isTracking ? 1.0 : 0.8;
      const targetAlpha = this.isTracking ? 1.0 : 0.0;
      this.followCircleScale += (targetScale - this.followCircleScale) * Math.min(1, dt * 20);
      this.followCircleAlpha += (targetAlpha - this.followCircleAlpha) * Math.min(1, dt * 20);
    } else {
      this.isTracking = false;
      this.followCircleAlpha += (0 - this.followCircleAlpha) * Math.min(1, dt * 15);
    }

    // 3. Process Ticks
    for (const tick of this.ticks) {
      if (!tick.processed && currentTimeMs >= tick.timeMs) {
        tick.processed = true;
        if (this.isTracking || currentTimeMs - this.lastTrackingTimeMs <= gracePeriodMs) {
          tick.hit = true;
          this.hitEvents++;
          callbacks.onTickHit(tick.position);
        } else {
          tick.hit = false;
          callbacks.onTickMiss(tick.position);
        }
      }
    }

    // 4. Process Repeats
    for (const repeat of this.repeats) {
      if (!repeat.processed && currentTimeMs >= repeat.timeMs) {
        repeat.processed = true;
        if (this.isTracking || currentTimeMs - this.lastTrackingTimeMs <= gracePeriodMs) {
          repeat.hit = true;
          this.hitEvents++;
          callbacks.onRepeatHit(repeat.position);
        } else {
          repeat.hit = false;
          callbacks.onRepeatMiss(repeat.position);
        }
      }
    }

    // 5. Process Tail / Completion
    if (!this.completed && currentTimeMs >= timeMs + durationMs) {
      this.completed = true;

      // Evaluate tail: was actively tracking or was within grace period
      const wasTrackingTail = this.isTracking || currentTimeMs - this.lastTrackingTimeMs <= gracePeriodMs;
      if (wasTrackingTail) {
        this.hitEvents++;
      }

      // Determine overall slider judgement based on fraction of hit events
      const ratio = this.totalEvents > 0 ? this.hitEvents / this.totalEvents : 0;
      let overallType: JudgementType = 'MISS';

      if (ratio >= 0.99) {
        overallType = '300';
      } else if (ratio >= 0.5) {
        overallType = '100';
      } else if (this.hitEvents > 0) {
        overallType = '50';
      } else {
        overallType = 'MISS';
      }

      const tailPos =
        slides % 2 === 1 ? this.path.getTailPosition() : this.path.getHeadPosition();

      callbacks.onSliderComplete(overallType, tailPos);
    }
  }

  public getBallState(currentTimeMs: number) {
    return this.path.getBallStateAtTime(
      currentTimeMs,
      this.data.timeMs,
      this.data.durationMs,
      this.data.slides
    );
  }
}
