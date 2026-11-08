import type { SliderCurveType, SliderPoint, Vector2 } from '../types/index.ts';

export class SliderPath {
  private controlPoints: SliderPoint[];
  private curveType: SliderCurveType;
  private sampledPoints: Vector2[] = [];
  private cumulativeDistances: number[] = [];
  private totalLength: number = 0;

  constructor(controlPoints: SliderPoint[], curveType: SliderCurveType = 'bezier') {
    this.controlPoints = controlPoints;
    this.curveType = curveType;
    this.buildPath();
  }

  private buildPath(): void {
    if (this.controlPoints.length < 2) {
      this.sampledPoints = this.controlPoints.map((p) => ({ x: p.x, y: p.y }));
      this.totalLength = 0;
      this.cumulativeDistances = [0];
      return;
    }

    const segments = 80;
    this.sampledPoints = [];
    this.cumulativeDistances = [0];
    let dist = 0;

    let prevPoint = this.evaluateRawCurve(0);
    this.sampledPoints.push(prevPoint);

    for (let i = 1; i <= segments; i++) {
      const t = i / segments;
      const point = this.evaluateRawCurve(t);
      dist += Math.hypot(point.x - prevPoint.x, point.y - prevPoint.y);
      this.sampledPoints.push(point);
      this.cumulativeDistances.push(dist);
      prevPoint = point;
    }

    this.totalLength = dist;
  }

  private evaluateRawCurve(t: number): Vector2 {
    const pts = this.controlPoints;
    const n = pts.length;

    if (this.curveType === 'linear' || n === 2) {
      const p0 = pts[0];
      const p1 = pts[n - 1];
      return {
        x: p0.x + (p1.x - p0.x) * t,
        y: p0.y + (p1.y - p0.y) * t,
      };
    }

    if (n === 3) {
      // Quadratic Bezier
      const p0 = pts[0];
      const p1 = pts[1];
      const p2 = pts[2];
      const mt = 1 - t;
      return {
        x: mt * mt * p0.x + 2 * mt * t * p1.x + t * t * p2.x,
        y: mt * mt * p0.y + 2 * mt * t * p1.y + t * t * p2.y,
      };
    }

    if (n === 4) {
      // Cubic Bezier
      const p0 = pts[0];
      const p1 = pts[1];
      const p2 = pts[2];
      const p3 = pts[3];
      const mt = 1 - t;
      return {
        x: mt * mt * mt * p0.x + 3 * mt * mt * t * p1.x + 3 * mt * t * t * p2.x + t * t * t * p3.x,
        y: mt * mt * mt * p0.y + 3 * mt * mt * t * p1.y + 3 * mt * t * t * p2.y + t * t * t * p3.y,
      };
    }

    // De Casteljau algorithm for arbitrary N control points
    let current = pts.map((p) => ({ x: p.x, y: p.y }));
    while (current.length > 1) {
      const next: Vector2[] = [];
      for (let i = 0; i < current.length - 1; i++) {
        next.push({
          x: current[i].x + (current[i + 1].x - current[i].x) * t,
          y: current[i].y + (current[i + 1].y - current[i].y) * t,
        });
      }
      current = next;
    }
    return current[0];
  }

  public getLength(): number {
    return this.totalLength;
  }

  public getSampledPoints(): Vector2[] {
    return this.sampledPoints;
  }

  public getHeadPosition(): Vector2 {
    return { ...this.controlPoints[0] };
  }

  public getTailPosition(): Vector2 {
    return { ...this.controlPoints[this.controlPoints.length - 1] };
  }

  /**
   * Arc-length parameterized position: guaranteed constant speed along curve
   */
  public getPositionAt(progress: number): Vector2 {
    const clampedProgress = Math.max(0, Math.min(1, progress));
    if (this.totalLength === 0 || this.sampledPoints.length <= 1) {
      return this.getHeadPosition();
    }

    const targetDist = clampedProgress * this.totalLength;

    // Binary search in cumulativeDistances
    let low = 0;
    let high = this.cumulativeDistances.length - 1;

    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (this.cumulativeDistances[mid] < targetDist) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }

    const idx = Math.max(1, low);
    const d0 = this.cumulativeDistances[idx - 1];
    const d1 = this.cumulativeDistances[idx];
    const segDist = d1 - d0;

    const t = segDist > 0 ? (targetDist - d0) / segDist : 0;
    const p0 = this.sampledPoints[idx - 1];
    const p1 = this.sampledPoints[idx];

    return {
      x: p0.x + (p1.x - p0.x) * t,
      y: p0.y + (p1.y - p0.y) * t,
    };
  }

  /**
   * Returns tangent angle in radians at given progress [0, 1]
   */
  public getAngleAt(progress: number): number {
    const delta = 0.02;
    const p1 = this.getPositionAt(Math.max(0, progress - delta));
    const p2 = this.getPositionAt(Math.min(1, progress + delta));
    return Math.atan2(p2.y - p1.y, p2.x - p1.x);
  }

  /**
   * Calculates ball position, angle, and repeat progress strictly from Web Audio clock
   */
  public getBallStateAtTime(
    currentTimeMs: number,
    startTimeMs: number,
    durationMs: number,
    slides: number = 1
  ): {
    position: Vector2;
    angle: number;
    currentSlide: number;
    isReverse: boolean;
    slideProgress: number;
    totalProgress: number;
  } {
    const elapsed = Math.max(0, currentTimeMs - startTimeMs);
    const totalProgress = durationMs > 0 ? Math.min(1, elapsed / durationMs) : 1;

    // Map totalProgress to slide count
    // e.g. slides = 2: slide 0 (0 -> 1), slide 1 (1 -> 0)
    const rawSlideProgress = totalProgress * slides;
    let currentSlide = Math.min(slides - 1, Math.floor(rawSlideProgress));
    let slideProgress = rawSlideProgress - currentSlide;

    // Boundary at exact completion
    if (totalProgress >= 1) {
      currentSlide = slides - 1;
      slideProgress = 1;
    }

    const isReverse = currentSlide % 2 === 1;
    const curveT = isReverse ? 1 - slideProgress : slideProgress;

    const position = this.getPositionAt(curveT);
    let angle = this.getAngleAt(curveT);
    if (isReverse) {
      angle += Math.PI; // Invert tangent when traveling in reverse
    }

    return {
      position,
      angle,
      currentSlide,
      isReverse,
      slideProgress,
      totalProgress,
    };
  }
}
