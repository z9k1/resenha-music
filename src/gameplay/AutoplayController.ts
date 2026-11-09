import type { Beatmap, Vector2 } from '../types/index.ts';
import { isSlider } from '../types/index.ts';
import { ActiveSlider } from './ActiveSlider.ts';

export interface AutoplayInputState {
  cursor: Vector2;
  inPlayfield: boolean;
  keys: {
    z: boolean;
    x: boolean;
    mouseLeft: boolean;
    mouseRight: boolean;
  };
  keyCounts: {
    z: number;
    x: number;
  };
}

export class AutoplayController {
  private beatmap: Beatmap;
  private activeSliders: ActiveSlider[];
  private onTriggerTap?: (cursor: Vector2, timeMs: number) => void;

  private triggeredNoteIds: Set<number> = new Set();
  private cursor: Vector2 = { x: 400, y: 300 };
  private hitCount: number = 0;
  private currentKey: 'z' | 'x' = 'z';
  private keyReleaseTime: number = 0;

  private keyCounts = {
    z: 0,
    x: 0,
  };

  constructor(
    beatmap: Beatmap,
    activeSliders: ActiveSlider[],
    onTriggerTap?: (cursor: Vector2, timeMs: number) => void
  ) {
    this.beatmap = beatmap;
    this.activeSliders = activeSliders;
    this.onTriggerTap = onTriggerTap;

    // Start cursor at first note or center
    if (this.beatmap.notes.length > 0) {
      const first = this.beatmap.notes[0];
      this.cursor = { x: first.x, y: first.y };
    }
  }

  /**
   * Calculates and updates the smooth cursor trajectory towards the next object
   * or following active rolling sliders without triggering any taps.
   */
  public updateCursorTrajectory(currentTimeMs: number): Vector2 {
    const notes = this.beatmap.notes;

    // Is any slider currently active/rolling right now?
    const rollingSlider = this.activeSliders.find((s) => {
      return (
        currentTimeMs >= s.data.timeMs &&
        currentTimeMs <= s.data.timeMs + s.data.durationMs &&
        !s.completed
      );
    });

    if (rollingSlider) {
      // Follow the slider ball position smoothly
      const ball = rollingSlider.getBallState(currentTimeMs);
      this.cursor = { x: ball.position.x, y: ball.position.y };
      return this.cursor;
    }

    // Find upcoming note to move toward
    const nextNote = notes.find((n) => n.timeMs > currentTimeMs);

    if (nextNote) {
      let prevPos: Vector2 = { x: 400, y: 300 };
      let prevEndTime = 0;

      const prevNoteIndex = notes.indexOf(nextNote) - 1;
      if (prevNoteIndex >= 0) {
        const prevNote = notes[prevNoteIndex];
        if (isSlider(prevNote)) {
          const activePrev = this.activeSliders.find((s) => s.data.id === prevNote.id);
          if (activePrev) {
            prevPos =
              prevNote.slides % 2 === 1
                ? activePrev.path.getTailPosition()
                : activePrev.path.getHeadPosition();
          } else {
            prevPos = { x: prevNote.x, y: prevNote.y };
          }
          prevEndTime = prevNote.timeMs + prevNote.durationMs;
        } else {
          prevPos = { x: prevNote.x, y: prevNote.y };
          prevEndTime = prevNote.timeMs;
        }
      } else {
        prevPos = { x: nextNote.x, y: nextNote.y };
        prevEndTime = 0;
      }

      const targetPos: Vector2 = { x: nextNote.x, y: nextNote.y };
      const availableInterval = nextNote.timeMs - prevEndTime;

      // Move duration: proportion of available gap, clamped for smooth pacing
      const moveDuration = Math.min(360, Math.max(100, availableInterval * 0.78));
      const startMoveTime = nextNote.timeMs - moveDuration;

      if (currentTimeMs <= startMoveTime) {
        this.cursor = { ...prevPos };
      } else if (currentTimeMs >= nextNote.timeMs) {
        this.cursor = { ...targetPos };
      } else {
        // Smooth Hermite / EaseInOut interpolation
        const p = Math.max(0, Math.min(1, (currentTimeMs - startMoveTime) / moveDuration));
        // Cubic easeInOut
        const t = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;

        const lx = prevPos.x + (targetPos.x - prevPos.x) * t;
        const ly = prevPos.y + (targetPos.y - prevPos.y) * t;

        // Subtle organic arc curve perpendicular to vector
        const dx = targetPos.x - prevPos.x;
        const dy = targetPos.y - prevPos.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 15) {
          const nx = -dy / dist;
          const ny = dx / dist;
          const arcDirection = nextNote.id % 2 === 0 ? 1 : -1;
          const arcFactor = Math.sin(p * Math.PI) * Math.min(35, dist * 0.12) * arcDirection;

          this.cursor = {
            x: lx + nx * arcFactor,
            y: ly + ny * arcFactor,
          };
        } else {
          this.cursor = { x: lx, y: ly };
        }
      }
    } else if (notes.length > 0) {
      const last = notes[notes.length - 1];
      this.cursor = { x: last.x, y: last.y };
    }

    return this.cursor;
  }

  public getCursor(): Vector2 {
    return { ...this.cursor };
  }

  public update(currentTimeMs: number, _dt: number): AutoplayInputState {
    const notes = this.beatmap.notes;

    // 1. Check for notes ready to be tapped (at exact timeMs)
    if (this.onTriggerTap) {
      for (const note of notes) {
        if (!this.triggeredNoteIds.has(note.id) && currentTimeMs >= note.timeMs) {
          this.triggeredNoteIds.add(note.id);

          // Alternate Z and X keys
          this.currentKey = this.hitCount % 2 === 0 ? 'z' : 'x';
          this.hitCount++;
          this.keyCounts[this.currentKey]++;

          if (isSlider(note)) {
            // Hold key through slider duration plus small buffer
            this.keyReleaseTime = Math.max(this.keyReleaseTime, note.timeMs + note.durationMs + 25);
          } else {
            // Tap hit circle and hold for ~75ms for realistic key-overlay feedback
            this.keyReleaseTime = Math.max(this.keyReleaseTime, note.timeMs + 75);
          }

          // Tap exactly at object position
          const tapPos: Vector2 = { x: note.x, y: note.y };
          this.cursor = { ...tapPos };
          this.onTriggerTap(tapPos, currentTimeMs);
        }
      }
    }

    // 2. Determine Cursor Trajectory
    this.updateCursorTrajectory(currentTimeMs);

    // 3. Evaluate key states
    const isKeyDown = currentTimeMs < this.keyReleaseTime;
    const isZ = isKeyDown && this.currentKey === 'z';
    const isX = isKeyDown && this.currentKey === 'x';

    return {
      cursor: { ...this.cursor },
      inPlayfield: true,
      keys: {
        z: isZ,
        x: isX,
        mouseLeft: false,
        mouseRight: false,
      },
      keyCounts: { ...this.keyCounts },
    };
  }

  public reset(): void {
    this.triggeredNoteIds.clear();
    this.hitCount = 0;
    this.keyReleaseTime = 0;
    this.keyCounts = { z: 0, x: 0 };
    if (this.beatmap.notes.length > 0) {
      this.cursor = { x: this.beatmap.notes[0].x, y: this.beatmap.notes[0].y };
    }
  }
}
