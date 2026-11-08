import type { Vector2, InputState } from '../types/index.ts';

export interface ViewportTransform {
  scale: number;
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
}

export type TapCallback = (key: 'z' | 'x' | 'mouse', pos: Vector2) => void;
export type PauseCallback = () => void;
export type RestartCallback = () => void;

export class InputManager {
  private canvas: HTMLCanvasElement;
  private transform: ViewportTransform = { scale: 1, offsetX: 0, offsetY: 0, width: 800, height: 600 };

  private state: InputState = {
    cursor: { x: 400, y: 300 },
    inPlayfield: true,
    keys: {
      z: false,
      x: false,
      mouseLeft: false,
      mouseRight: false,
    },
    keyCounts: {
      z: 0,
      x: 0,
    },
  };

  private onTapCallbacks: TapCallback[] = [];
  private onPauseCallbacks: PauseCallback[] = [];
  private onRestartCallbacks: RestartCallback[] = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.setupListeners();
  }

  public setViewportTransform(transform: ViewportTransform): void {
    this.transform = transform;
  }

  public on(event: 'tap', callback: TapCallback): void;
  public on(event: 'pause', callback: PauseCallback): void;
  public on(event: 'restart', callback: RestartCallback): void;
  public on(event: 'tap' | 'pause' | 'restart', callback: unknown): void {
    if (event === 'tap') {
      this.onTapCallbacks.push(callback as TapCallback);
    } else if (event === 'pause') {
      this.onPauseCallbacks.push(callback as PauseCallback);
    } else if (event === 'restart') {
      this.onRestartCallbacks.push(callback as RestartCallback);
    }
  }

  public getState(): InputState {
    return this.state;
  }

  public getCursor(): Vector2 {
    return { ...this.state.cursor };
  }

  public resetKeyCounts(): void {
    this.state.keyCounts.z = 0;
    this.state.keyCounts.x = 0;
  }

  /**
   * Converts screen pixel coordinates (e.g. clientX, clientY) to 800x600 logical playfield space
   */
  public screenToLogical(clientX: number, clientY: number): Vector2 {
    const rect = this.canvas.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top;

    const logicalX = (canvasX - this.transform.offsetX) / this.transform.scale;
    const logicalY = (canvasY - this.transform.offsetY) / this.transform.scale;

    return {
      x: Math.max(0, Math.min(800, logicalX)),
      y: Math.max(0, Math.min(600, logicalY)),
    };
  }

  private setupListeners(): void {
    // 1. Pointer Events: unified support for Mouse and Graphics Tablets / Pens
    window.addEventListener('pointermove', (e: PointerEvent) => {
      this.handlePointerMove(e);
    }, { passive: false });

    window.addEventListener('pointerdown', (e: PointerEvent) => {
      this.handlePointerMove(e);
      // Support left click (0) and right click (2)
      if (e.button === 0) {
        this.state.keys.mouseLeft = true;
        this.emitTap('mouse');
      } else if (e.button === 2) {
        this.state.keys.mouseRight = true;
        this.emitTap('mouse');
      }
    }, { passive: false });

    window.addEventListener('pointerup', (e: PointerEvent) => {
      if (e.button === 0) {
        this.state.keys.mouseLeft = false;
      } else if (e.button === 2) {
        this.state.keys.mouseRight = false;
      }
    });

    // 2. Keyboard Events (Z, X, ESC, R)
    window.addEventListener('keydown', (e: KeyboardEvent) => {
      const code = e.code;
      const key = e.key.toLowerCase();

      // Pause toggle: Escape
      if (code === 'Escape') {
        e.preventDefault();
        this.emitPause();
        return;
      }

      // Quick restart with 'R' or '~'
      if (code === 'KeyR' && (e.ctrlKey || e.metaKey)) {
        return; // Allow browser reload
      }
      if (code === 'KeyR' && !e.ctrlKey && !e.metaKey && !e.repeat) {
        this.emitRestart();
        return;
      }

      // Hit keys: Z and X (and ABNT2/international equivalents)
      const isZ = code === 'KeyZ' || key === 'z';
      const isX = code === 'KeyX' || key === 'x';

      if (isZ && !e.repeat) {
        e.preventDefault();
        this.state.keys.z = true;
        this.state.keyCounts.z++;
        this.emitTap('z');
      } else if (isX && !e.repeat) {
        e.preventDefault();
        this.state.keys.x = true;
        this.state.keyCounts.x++;
        this.emitTap('x');
      }
    });

    window.addEventListener('keyup', (e: KeyboardEvent) => {
      const code = e.code;
      const key = e.key.toLowerCase();

      if (code === 'KeyZ' || key === 'z') {
        this.state.keys.z = false;
      } else if (code === 'KeyX' || key === 'x') {
        this.state.keys.x = false;
      }
    });

    // Prevent context menu on right click / tablet long press
    window.addEventListener('contextmenu', (e: MouseEvent) => {
      e.preventDefault();
    });
  }

  private handlePointerMove(e: PointerEvent): void {
    const coords = this.screenToLogical(e.clientX, e.clientY);
    this.state.cursor.x = coords.x;
    this.state.cursor.y = coords.y;

    // Check if cursor is within 800x600 logical bounds
    this.state.inPlayfield = coords.x >= 0 && coords.x <= 800 && coords.y >= 0 && coords.y <= 600;

    // Synchronize mouse/pen button drag state with active pointer buttons
    if (typeof e.buttons === 'number') {
      this.state.keys.mouseLeft = (e.buttons & 1) !== 0;
      this.state.keys.mouseRight = (e.buttons & 2) !== 0;
    }
  }

  private emitTap(key: 'z' | 'x' | 'mouse'): void {
    const pos = { ...this.state.cursor };
    for (const cb of this.onTapCallbacks) {
      cb(key, pos);
    }
  }

  private emitPause(): void {
    for (const cb of this.onPauseCallbacks) {
      cb();
    }
  }

  private emitRestart(): void {
    for (const cb of this.onRestartCallbacks) {
      cb();
    }
  }
}
