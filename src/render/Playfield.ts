import { Skin } from './Skin.ts';
import type { ViewportTransform } from '../input/InputManager.ts';

export class Playfield {
  public static readonly LOGICAL_WIDTH = 800;
  public static readonly LOGICAL_HEIGHT = 600;

  private canvas: HTMLCanvasElement;
  private transform: ViewportTransform = {
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    width: 800,
    height: 600,
  };
  private dpr: number = 1;
  private hudHeight: number = 64;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.resize();
  }

  public getHudHeight(): number {
    return this.hudHeight;
  }

  public resize(): ViewportTransform {
    this.dpr = window.devicePixelRatio || 1;
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    // Set physical buffer size for high DPI
    this.canvas.width = Math.floor(windowW * this.dpr);
    this.canvas.height = Math.floor(windowH * this.dpr);

    // Set CSS display size
    this.canvas.style.width = `${windowW}px`;
    this.canvas.style.height = `${windowH}px`;

    // Dedicated top HUD space (never overlaps or clips the 4:3 arena)
    this.hudHeight = windowH >= 900 ? 68 : windowH >= 700 ? 60 : 54;
    const bottomMargin = windowH >= 900 ? 20 : 14;
    const horizontalMargin = windowW >= 1200 ? 28 : 16;

    // Available arena space strictly considering top HUD and margins
    const availableW = Math.max(320, windowW - horizontalMargin * 2);
    const availableH = Math.max(240, windowH - this.hudHeight - bottomMargin);

    const scale = Math.min(
      availableW / Playfield.LOGICAL_WIDTH,
      availableH / Playfield.LOGICAL_HEIGHT
    );

    const playfieldW = Playfield.LOGICAL_WIDTH * scale;
    const playfieldH = Playfield.LOGICAL_HEIGHT * scale;

    const offsetX = (windowW - playfieldW) / 2;
    // Positioned cleanly below the dedicated top HUD banner
    const offsetY = this.hudHeight + (availableH - playfieldH) / 2;

    this.transform = {
      scale,
      offsetX,
      offsetY,
      width: playfieldW,
      height: playfieldH,
    };

    return this.transform;
  }

  public getTransform(): ViewportTransform {
    return this.transform;
  }

  /**
   * Clears screen and renders outer background
   */
  public renderBackground(ctx: CanvasRenderingContext2D, bgImage?: HTMLImageElement | null): void {
    const w = window.innerWidth;
    const h = window.innerHeight;

    // Fullscreen outer background
    if (bgImage && bgImage.complete && bgImage.naturalWidth > 0) {
      const iw = bgImage.naturalWidth;
      const ih = bgImage.naturalHeight;
      const scale = Math.max(w / iw, h / ih);
      const drawW = iw * scale;
      const drawH = ih * scale;
      const drawX = (w - drawW) / 2;
      const drawY = (h - drawH) / 2;

      ctx.drawImage(bgImage, drawX, drawY, drawW, drawH);

      // Deep atmospheric dark overlay outside the arena
      ctx.fillStyle = 'rgba(5, 7, 14, 0.88)';
      ctx.fillRect(0, 0, w, h);
    } else {
      ctx.fillStyle = Skin.bgDark;
      ctx.fillRect(0, 0, w, h);
    }

    // Subtle radial ambient glow behind playfield
    const grad = ctx.createRadialGradient(
      w / 2, h / 2, 50,
      w / 2, h / 2, Math.max(w, h) * 0.65
    );
    grad.addColorStop(0, 'rgba(15, 23, 42, 0.6)');
    grad.addColorStop(0.5, 'rgba(10, 12, 22, 0.85)');
    grad.addColorStop(1, '#05060a');

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  /**
   * Sets up 800x600 logical coordinate matrix
   */
  public beginPlayfield(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.translate(this.transform.offsetX, this.transform.offsetY);
    ctx.scale(this.transform.scale, this.transform.scale);
  }

  /**
   * Draws the playfield bounds, cyber grid, and corner accents
   */
  public drawPlayfieldBounds(
    ctx: CanvasRenderingContext2D,
    bgImage?: HTMLImageElement | null,
    backgroundDim: number = 0.75
  ): void {
    const W = Playfield.LOGICAL_WIDTH;
    const H = Playfield.LOGICAL_HEIGHT;
    const radius = 12;

    ctx.save();

    // Clip inner content to rounded playfield arena
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, radius);
    ctx.clip();

    // 1. Playfield base fill & Cover Artwork
    if (bgImage && bgImage.complete && bgImage.naturalWidth > 0) {
      // Calculate 'cover' fitting preserving original aspect ratio
      const iw = bgImage.naturalWidth;
      const ih = bgImage.naturalHeight;
      const scale = Math.max(W / iw, H / ih);
      const drawW = iw * scale;
      const drawH = ih * scale;
      const drawX = (W - drawW) / 2;
      const drawY = (H - drawH) / 2;

      ctx.drawImage(bgImage, drawX, drawY, drawW, drawH);

      // Black overlay layer with configurable opacity (default 75%)
      const clampedDim = Math.min(1, Math.max(0, backgroundDim));
      ctx.fillStyle = `rgba(0, 0, 0, ${clampedDim})`;
      ctx.fillRect(0, 0, W, H);
    } else {
      ctx.fillStyle = Skin.bgPlayfield;
      ctx.fillRect(0, 0, W, H);
    }

    // 2. Subtle internal cyber grid lines
    ctx.strokeStyle = Skin.gridLine;
    ctx.lineWidth = 1;
    const gridSize = 40;
    ctx.beginPath();
    for (let x = gridSize; x < W; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, H);
    }
    for (let y = gridSize; y < H; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(W, y);
    }
    ctx.stroke();

    // 3. Subtle center crosshair guide
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(W / 2 - 20, H / 2);
    ctx.lineTo(W / 2 + 20, H / 2);
    ctx.moveTo(W / 2, H / 2 - 20);
    ctx.lineTo(W / 2, H / 2 + 20);
    ctx.stroke();

    ctx.restore(); // Remove clip

    // 4. Glowing border
    ctx.save();
    ctx.strokeStyle = Skin.playfieldBorder;
    ctx.lineWidth = 2;
    ctx.shadowColor = Skin.playfieldBorderGlow;
    ctx.shadowBlur = 10;
    ctx.beginPath();
    ctx.roundRect(0, 0, W, H, radius);
    ctx.stroke();

    // 5. Modern corner bracket accents
    const cornerSize = 24;
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 3;
    ctx.shadowColor = '#00f0ff';
    ctx.shadowBlur = 8;

    // Top-left
    ctx.beginPath();
    ctx.moveTo(0, cornerSize);
    ctx.lineTo(0, 0);
    ctx.lineTo(cornerSize, 0);
    // Top-right
    ctx.moveTo(W - cornerSize, 0);
    ctx.lineTo(W, 0);
    ctx.lineTo(W, cornerSize);
    // Bottom-left
    ctx.moveTo(0, H - cornerSize);
    ctx.lineTo(0, H);
    ctx.lineTo(cornerSize, H);
    // Bottom-right
    ctx.moveTo(W - cornerSize, H);
    ctx.lineTo(W, H);
    ctx.lineTo(W, H - cornerSize);
    ctx.stroke();

    ctx.restore();
  }

  public endPlayfield(ctx: CanvasRenderingContext2D): void {
    ctx.restore();
  }
}
