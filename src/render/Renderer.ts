import type { ActiveMods, Beatmap, GameState, GameStats, HitObject, InputState } from '../types/index.ts';
import { isSlider } from '../types/index.ts';
import { ActiveSlider } from '../gameplay/ActiveSlider.ts';
import { JudgementSystem } from '../gameplay/JudgementSystem.ts';
import { ParticleSystem } from './ParticleSystem.ts';
import { Playfield } from './Playfield.ts';
import { Skin } from './Skin.ts';
import { ImageLoader } from './ImageLoader.ts';

export class Renderer {
  private ctx: CanvasRenderingContext2D;
  private playfield: Playfield;
  private particleSystem: ParticleSystem;

  private animatedScore: number = 0;
  private comboBounceScale: number = 1.0;
  private lastCombo: number = 0;

  constructor(canvas: HTMLCanvasElement, playfield: Playfield, particleSystem: ParticleSystem) {
    const context = canvas.getContext('2d', { alpha: false });
    if (!context) throw new Error('Could not get 2D context from canvas');
    this.ctx = context;
    this.playfield = playfield;
    this.particleSystem = particleSystem;
  }

  public getContext(): CanvasRenderingContext2D {
    return this.ctx;
  }

  public render(
    currentTimeMs: number,
    beatmap: Beatmap,
    unjudgedObjects: HitObject[],
    activeSliders: ActiveSlider[],
    stats: GameStats,
    inputState: InputState,
    totalDurationMs: number,
    activeMods?: ActiveMods,
    gameState: GameState = 'playing',
    backgroundDim: number = 0.75
  ): void {
    const dpr = window.devicePixelRatio || 1;
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const bgImage = ImageLoader.get(beatmap.coverUrl);

    // 1. Draw outer background
    this.playfield.renderBackground(this.ctx, bgImage);

    if (gameState === 'playing' || gameState === 'paused') {
      // 2. Draw HUD elements outside / around playfield
      this.renderHUD(stats, totalDurationMs, currentTimeMs, beatmap, activeMods);
      this.renderKeyOverlay(inputState);

      // 3. Begin 800x600 logical playfield transform
      this.playfield.beginPlayfield(this.ctx);

      // 4. Draw playfield boundaries, cover artwork & cyber grid
      this.playfield.drawPlayfieldBounds(this.ctx, bgImage, backgroundDim);

      // 5. Draw sliders (drawn below circles for proper layering)
      this.renderSliders(currentTimeMs, beatmap, activeSliders);

      // 6. Draw active hit circles and approach circles
      this.renderHitCircles(currentTimeMs, beatmap, unjudgedObjects);

      // 7. Draw particle bursts, ripples, and floating judgements
      this.particleSystem.render(this.ctx, performance.now());

      // 8. Draw in-game cursor & trail
      this.renderCursor(inputState);

      // End logical playfield transform
      this.playfield.endPlayfield(this.ctx);
    } else {
      // In menus: draw ambient particles and custom cursor cleanly
      this.playfield.beginPlayfield(this.ctx);
      this.particleSystem.render(this.ctx, performance.now());
      this.renderCursor(inputState);
      this.playfield.endPlayfield(this.ctx);
    }
  }

  private renderSliders(
    currentTimeMs: number,
    beatmap: Beatmap,
    activeSliders: ActiveSlider[]
  ): void {
    const approachTime = beatmap.approachTimeMs;
    const radius = beatmap.circleRadius;

    // Filter visible sliders
    const visibleSliders = activeSliders.filter((slider) => {
      const startTime = slider.data.timeMs;
      const endTime = slider.data.timeMs + slider.data.durationMs;
      return currentTimeMs >= startTime - approachTime && currentTimeMs <= endTime + 200;
    });

    for (const slider of visibleSliders) {
      const { timeMs, durationMs, comboColorIndex } = slider.data;
      const colorScheme = Skin.comboColors[comboColorIndex % Skin.comboColors.length];
      const pts = slider.path.getSampledPoints();
      if (pts.length < 2) continue;

      // Compute opacity
      let alpha = 1;
      const timeUntilStart = timeMs - currentTimeMs;
      if (timeUntilStart > 0) {
        const timeSinceSpawn = approachTime - timeUntilStart;
        alpha = Math.min(1, Math.max(0, timeSinceSpawn / 120));
      } else if (currentTimeMs > timeMs + durationMs) {
        alpha = Math.max(0, 1 - (currentTimeMs - (timeMs + durationMs)) / 200);
      }

      this.ctx.save();
      this.ctx.globalAlpha = alpha;

      // --- 1. SLIDER TRACK BODY ---
      const buildPath = () => {
        this.ctx.beginPath();
        this.ctx.moveTo(pts[0].x, pts[0].y);
        for (let i = 1; i < pts.length; i++) {
          this.ctx.lineTo(pts[i].x, pts[i].y);
        }
      };

      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';

      // Outer neon aura (translucent pass, zero CPU/GPU blur penalty for max 120fps fluid glide)
      this.ctx.shadowBlur = 0;
      this.ctx.lineWidth = radius * 2 + 10;
      this.ctx.strokeStyle = colorScheme.glow;
      this.ctx.globalAlpha = 0.28 * alpha;
      buildPath();
      this.ctx.stroke();

      // Outer crisp neon border
      this.ctx.globalAlpha = alpha;
      this.ctx.lineWidth = radius * 2 + 2;
      this.ctx.strokeStyle = colorScheme.main;
      buildPath();
      this.ctx.stroke();

      // Inner dark track body
      this.ctx.lineWidth = radius * 2 - 4;
      this.ctx.strokeStyle = '#090c16';
      buildPath();
      this.ctx.stroke();

      // Center translucent highlight track
      this.ctx.lineWidth = 3.5;
      this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
      buildPath();
      this.ctx.stroke();

      // --- 2. SLIDER TICKS ---
      for (const tick of slider.ticks) {
        if (!tick.processed) {
          this.ctx.save();
          this.ctx.translate(tick.position.x, tick.position.y);
          this.ctx.rotate(Math.PI / 4); // Diamond shape

          this.ctx.fillStyle = '#ffffff';
          this.ctx.shadowColor = '#00f0ff';
          this.ctx.shadowBlur = 6;
          this.ctx.fillRect(-5, -5, 10, 10);

          this.ctx.restore();
        }
      }

      // --- 3. REPEAT / REVERSE ARROWS ---
      for (const repeat of slider.repeats) {
        if (!repeat.processed && currentTimeMs < repeat.timeMs) {
          const pulse = 1.0 + 0.12 * Math.sin(performance.now() * 0.014);

          this.ctx.save();
          this.ctx.translate(repeat.position.x, repeat.position.y);
          this.ctx.scale(pulse, pulse);
          this.ctx.rotate(repeat.angle);

          // Arrow circle backing
          this.ctx.beginPath();
          this.ctx.arc(0, 0, radius * 0.75, 0, Math.PI * 2);
          this.ctx.fillStyle = 'rgba(10, 12, 22, 0.85)';
          this.ctx.strokeStyle = '#ffd700';
          this.ctx.lineWidth = 2.5;
          this.ctx.shadowColor = '#ffd700';
          this.ctx.shadowBlur = 10;
          this.ctx.fill();
          this.ctx.stroke();

          // Chevron arrow icon
          this.ctx.shadowBlur = 0;
          this.ctx.beginPath();
          this.ctx.moveTo(-7, -9);
          this.ctx.lineTo(5, 0);
          this.ctx.lineTo(-7, 9);
          this.ctx.strokeStyle = '#ffffff';
          this.ctx.lineWidth = 3.5;
          this.ctx.lineCap = 'round';
          this.ctx.lineJoin = 'round';
          this.ctx.stroke();

          this.ctx.restore();
        }
      }

      // --- 4. SLIDER TAIL ANCHOR CIRCLE ---
      const tailPos = slider.path.getTailPosition();
      this.renderAnchorCircle(tailPos.x, tailPos.y, radius, colorScheme);

      // --- 5. SLIDER HEAD (full hit circle before hit, anchor circle once hit/in motion) ---
      const headPos = slider.path.getHeadPosition();
      if (!slider.headJudged && currentTimeMs <= timeMs + JudgementSystem.WINDOW_50) {
        this.renderHitCircleShape(
          headPos.x,
          headPos.y,
          radius,
          slider.data.comboNumber,
          colorScheme,
          timeMs,
          currentTimeMs,
          approachTime
        );
      } else {
        // Head anchor remains visible while sliding
        this.renderAnchorCircle(headPos.x, headPos.y, radius, colorScheme);
      }

      // --- 6. SLIDER BALL & FOLLOW CIRCLE ---
      // Active while gliding, or right after an early head tap before timeMs
      const ballActive =
        (currentTimeMs >= timeMs && currentTimeMs <= timeMs + durationMs) ||
        (slider.headJudged && currentTimeMs < timeMs && currentTimeMs >= timeMs - JudgementSystem.WINDOW_50);

      if (ballActive) {
        const ballPos =
          currentTimeMs < timeMs ? headPos : slider.getBallState(currentTimeMs).position;

        // Follow circle (indicates valid tracking distance around ball)
        const pulse = slider.isTracking ? 1.0 + 0.03 * Math.sin(performance.now() * 0.016) : 1.0;
        const followRadius = radius * 2.5 * Math.max(0.2, slider.followCircleScale) * pulse;
        if (slider.followCircleAlpha > 0.02) {
          this.ctx.save();
          this.ctx.globalAlpha = slider.followCircleAlpha * alpha;
          this.ctx.beginPath();
          this.ctx.arc(ballPos.x, ballPos.y, followRadius, 0, Math.PI * 2);
          this.ctx.lineWidth = slider.isTracking ? 3 : 2;
          this.ctx.strokeStyle = slider.isTracking ? '#00f0ff' : 'rgba(255, 255, 255, 0.4)';
          this.ctx.shadowColor = slider.isTracking ? '#00f0ff' : 'transparent';
          this.ctx.shadowBlur = slider.isTracking ? 10 : 0;
          this.ctx.stroke();

          // Soft translucent fill inside follow zone when active
          if (slider.isTracking) {
            this.ctx.fillStyle = 'rgba(0, 240, 255, 0.12)';
            this.ctx.fill();
          }
          this.ctx.restore();
        }

        // Slider Ball
        this.ctx.save();
        this.ctx.shadowColor = colorScheme.glow;
        this.ctx.shadowBlur = slider.isTracking ? 18 : 10;

        // Ball outer ring
        this.ctx.beginPath();
        this.ctx.arc(ballPos.x, ballPos.y, radius, 0, Math.PI * 2);
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = slider.isTracking ? '#ffffff' : colorScheme.main;
        this.ctx.stroke();

        // Ball inner glowing core
        this.ctx.shadowBlur = 0;
        this.ctx.beginPath();
        this.ctx.arc(ballPos.x, ballPos.y, radius * 0.45, 0, Math.PI * 2);
        const grad = this.ctx.createRadialGradient(
          ballPos.x, ballPos.y, 0,
          ballPos.x, ballPos.y, radius * 0.45
        );
        grad.addColorStop(0, '#ffffff');
        grad.addColorStop(0.7, colorScheme.main);
        grad.addColorStop(1, 'rgba(0,0,0,0.5)');
        this.ctx.fillStyle = grad;
        this.ctx.fill();

        this.ctx.restore();
      }

      this.ctx.restore();
    }
  }

  /**
   * Subtle anchor circle rendered at slider endpoints
   */
  private renderAnchorCircle(
    x: number,
    y: number,
    radius: number,
    colorScheme: { main: string; glow: string; inner: string }
  ): void {
    this.ctx.save();

    // Outer neon ring
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.lineWidth = 3;
    this.ctx.strokeStyle = colorScheme.main;
    this.ctx.shadowColor = colorScheme.glow;
    this.ctx.shadowBlur = 8;
    this.ctx.stroke();

    // Dark body fill
    this.ctx.shadowBlur = 0;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius - 2, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(13, 16, 28, 0.75)';
    this.ctx.fill();

    // Subtle inner accent ring
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius * 0.85, 0, Math.PI * 2);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    this.ctx.stroke();

    this.ctx.restore();
  }

  private renderHitCircles(
    currentTimeMs: number,
    beatmap: Beatmap,
    unjudgedObjects: HitObject[]
  ): void {
    const approachTime = beatmap.approachTimeMs;
    const radius = beatmap.circleRadius;

    // Filter only regular hit circles (not sliders) that are visible
    const visibleCircles = unjudgedObjects
      .filter((obj) => {
        if (isSlider(obj)) return false; // Handled in renderSliders
        const timeUntilHit = obj.timeMs - currentTimeMs;
        return timeUntilHit <= approachTime && timeUntilHit >= -JudgementSystem.WINDOW_50;
      })
      .sort((a, b) => b.timeMs - a.timeMs);

    for (const note of visibleCircles) {
      const colorScheme = Skin.comboColors[note.comboColorIndex % Skin.comboColors.length];
      this.renderHitCircleShape(
        note.x,
        note.y,
        radius,
        note.comboNumber,
        colorScheme,
        note.timeMs,
        currentTimeMs,
        approachTime
      );
    }
  }

  private renderHitCircleShape(
    x: number,
    y: number,
    radius: number,
    comboNumber: number,
    colorScheme: { main: string; glow: string; inner: string },
    timeMs: number,
    currentTimeMs: number,
    approachTime: number
  ): void {
    const timeUntilHit = timeMs - currentTimeMs;
    const progress = 1 - timeUntilHit / approachTime; // 0.0 at spawn, 1.0 at hit time

    // Fade in smoothly over the first 120ms of appearance
    const timeSinceSpawn = approachTime - timeUntilHit;
    const alpha = Math.min(1, Math.max(0, timeSinceSpawn / 120));

    this.ctx.save();
    this.ctx.globalAlpha = alpha;

    // --- 1. Hit Circle Body ---
    this.ctx.shadowColor = colorScheme.glow;
    this.ctx.shadowBlur = 12;

    // Outer ring
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = colorScheme.main;
    this.ctx.stroke();

    // Inner circular fill
    this.ctx.shadowBlur = 0;
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius - 2, 0, Math.PI * 2);

    const grad = this.ctx.createRadialGradient(x, y, radius * 0.2, x, y, radius);
    grad.addColorStop(0, '#161925');
    grad.addColorStop(0.7, '#0f111a');
    grad.addColorStop(1, colorScheme.inner);
    this.ctx.fillStyle = grad;
    this.ctx.fill();

    // Thin inner crisp ring
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius * 0.85, 0, Math.PI * 2);
    this.ctx.lineWidth = 1.5;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
    this.ctx.stroke();

    // Combo Number inside circle
    this.ctx.fillStyle = '#ffffff';
    this.ctx.font = `bold ${Math.round(radius * 0.75)}px ${Skin.fonts.display}`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.shadowColor = 'rgba(0,0,0,0.8)';
    this.ctx.shadowBlur = 4;
    this.ctx.fillText(comboNumber.toString(), x, y + 1);

    // --- 2. Approach Circle ---
    if (progress <= 1.0) {
      const approachScale = 1.0 + Math.max(0, 1 - progress) * 2.2;
      const currentApproachRadius = radius * approachScale;

      this.ctx.shadowColor = colorScheme.glow;
      this.ctx.shadowBlur = 8;
      this.ctx.beginPath();
      this.ctx.arc(x, y, currentApproachRadius, 0, Math.PI * 2);
      this.ctx.lineWidth = 2.5;
      this.ctx.strokeStyle = colorScheme.main;
      this.ctx.stroke();
    }

    this.ctx.restore();
  }

  private renderCursor(inputState: InputState): void {
    const cursor = inputState.cursor;
    const isPressing = inputState.keys.z || inputState.keys.x || inputState.keys.mouseLeft;

    // Draw trail
    const trail = this.particleSystem.getCursorTrail();
    if (trail.length > 1) {
      this.ctx.save();
      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const alpha = (i / trail.length) * 0.45;
        this.ctx.beginPath();
        this.ctx.moveTo(p1.x, p1.y);
        this.ctx.lineTo(p2.x, p2.y);
        this.ctx.strokeStyle = Skin.cursor.trail;
        this.ctx.globalAlpha = alpha;
        this.ctx.lineWidth = 3 + (i / trail.length) * 4;
        this.ctx.lineCap = 'round';
        this.ctx.stroke();
      }
      this.ctx.restore();
    }

    // Cursor circle
    this.ctx.save();
    const radius = isPressing ? 15 : 12;

    // Cursor outer glow
    this.ctx.shadowColor = isPressing ? '#ff007f' : Skin.cursor.glow;
    this.ctx.shadowBlur = isPressing ? 18 : 12;

    // Ring
    this.ctx.beginPath();
    this.ctx.arc(cursor.x, cursor.y, radius, 0, Math.PI * 2);
    this.ctx.lineWidth = isPressing ? 3.5 : 2.5;
    this.ctx.strokeStyle = isPressing ? '#ff007f' : Skin.cursor.outer;
    this.ctx.stroke();

    // Solid inner core
    this.ctx.shadowBlur = 0;
    this.ctx.beginPath();
    this.ctx.arc(cursor.x, cursor.y, isPressing ? 5 : 4, 0, Math.PI * 2);
    this.ctx.fillStyle = Skin.cursor.inner;
    this.ctx.fill();

    this.ctx.restore();
  }

  private renderHUD(
    stats: GameStats,
    totalDurationMs: number,
    currentTimeMs: number,
    beatmap: Beatmap,
    activeMods?: ActiveMods
  ): void {
    const transform = this.playfield.getTransform();
    const ctx = this.ctx;
    const hudH = this.playfield.getHudHeight();
    const windowW = window.innerWidth;

    this.animatedScore += (stats.score - this.animatedScore) * 0.2;
    if (Math.abs(this.animatedScore - stats.score) < 1) {
      this.animatedScore = stats.score;
    }

    if (stats.combo > this.lastCombo) {
      this.comboBounceScale = 1.18;
    }
    this.lastCombo = stats.combo;
    this.comboBounceScale += (1.0 - this.comboBounceScale) * 0.15;

    ctx.save();

    // ==========================================
    // 1. TOP HUD GLASS BANNER (0 <= Y <= hudH)
    // ==========================================
    // Dark glassmorphic background
    ctx.fillStyle = 'rgba(7, 10, 19, 0.92)';
    ctx.fillRect(0, 0, windowW, hudH);

    // Subtle bottom border
    ctx.strokeStyle = 'rgba(0, 240, 255, 0.18)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, hudH - 0.5);
    ctx.lineTo(windowW, hudH - 0.5);
    ctx.stroke();

    // Neon accent glow gradient line along the bottom of the HUD
    const borderGrad = ctx.createLinearGradient(0, 0, windowW, 0);
    borderGrad.addColorStop(0, 'rgba(0, 240, 255, 0)');
    borderGrad.addColorStop(0.25, 'rgba(0, 240, 255, 0.35)');
    borderGrad.addColorStop(0.5, 'rgba(255, 0, 127, 0.35)');
    borderGrad.addColorStop(0.75, 'rgba(0, 240, 255, 0.35)');
    borderGrad.addColorStop(1, 'rgba(0, 240, 255, 0)');
    ctx.strokeStyle = borderGrad;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, hudH);
    ctx.lineTo(windowW, hudH);
    ctx.stroke();

    // ==========================================
    // 2. LEFT: SONG TITLE, ARTIST & MOD BADGES
    // ==========================================
    const leftX = Math.max(16, Math.round(transform.offsetX));
    const titleY = Math.round(hudH * 0.36);
    const artistY = Math.round(hudH * 0.72);

    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';

    // Song Title
    ctx.font = `bold 15px ${Skin.fonts.display}`;
    ctx.fillStyle = '#ffffff';
    ctx.fillText(beatmap.title, leftX, titleY);

    const titleWidth = ctx.measureText(beatmap.title).width;

    // Active Mods Badges (positioned next to song title)
    if (activeMods && (activeMods.autoPlay || activeMods.easy)) {
      let badgeX = leftX + titleWidth + 12;

      if (activeMods.autoPlay) {
        ctx.save();
        const text = 'AUTO PLAY';
        ctx.font = `bold 10px ${Skin.fonts.display}`;
        const w = ctx.measureText(text).width + 12;
        const h = 18;
        const y = titleY - h / 2;

        ctx.fillStyle = 'rgba(0, 240, 255, 0.15)';
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.roundRect(badgeX, y, w, h, 9);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#00f0ff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, badgeX + w / 2, y + h / 2);
        ctx.restore();

        badgeX += w + 8;
      }

      if (activeMods.easy) {
        ctx.save();
        const text = 'EASY';
        ctx.font = `bold 10px ${Skin.fonts.display}`;
        const w = ctx.measureText(text).width + 12;
        const h = 18;
        const y = titleY - h / 2;

        ctx.fillStyle = 'rgba(217, 70, 239, 0.15)';
        ctx.strokeStyle = '#d946ef';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#d946ef';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.roundRect(badgeX, y, w, h, 9);
        ctx.fill();
        ctx.stroke();

        ctx.shadowBlur = 0;
        ctx.fillStyle = '#d946ef';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, badgeX + w / 2, y + h / 2);
        ctx.restore();
      }
    }

    // Artist
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    ctx.font = `500 12px ${Skin.fonts.primary}`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.fillText(beatmap.artist, leftX, artistY);

    // ==========================================
    // 3. CENTER: PROGRESS BAR & DURATION
    // ==========================================
    const progressW = Math.min(320, Math.max(160, Math.floor(transform.width * 0.32)));
    const progressX = Math.round((windowW - progressW) / 2);
    const progressY = Math.round(hudH * 0.36 - 2);
    const progressH = 5;

    // Track
    ctx.fillStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.beginPath();
    ctx.roundRect(progressX, progressY, progressW, progressH, 2.5);
    ctx.fill();

    // Progress Fill
    const progress =
      totalDurationMs > 0 ? Math.min(1, Math.max(0, currentTimeMs / totalDurationMs)) : 0;
    if (progress > 0) {
      const fillW = Math.max(progressH, progressW * progress);
      const pGrad = ctx.createLinearGradient(progressX, 0, progressX + progressW, 0);
      pGrad.addColorStop(0, '#00f0ff');
      pGrad.addColorStop(1, '#ff007f');
      ctx.fillStyle = pGrad;
      ctx.shadowColor = '#00f0ff';
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.roundRect(progressX, progressY, fillW, progressH, 2.5);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Current Time / Total Time
    const currentFormatted = this.formatTime(currentTimeMs);
    const totalFormatted = this.formatTime(totalDurationMs);
    const timeStr = `${currentFormatted} / ${totalFormatted}`;

    ctx.font = `600 11px ${Skin.fonts.display}`;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(timeStr, Math.round(windowW / 2), artistY);

    // ==========================================
    // 4. RIGHT: SCORE & ACCURACY
    // ==========================================
    const rightX = Math.min(windowW - 16, Math.round(transform.offsetX + transform.width));
    const scoreStr = Math.round(this.animatedScore).toString().padStart(8, '0');
    const accStr = `${stats.accuracy.toFixed(2)}%`;

    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    // 8-Digit Score
    ctx.font = `bold 22px ${Skin.fonts.display}`;
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(0, 240, 255, 0.45)';
    ctx.shadowBlur = 8;
    ctx.fillText(scoreStr, rightX, titleY);

    // Accuracy
    ctx.shadowBlur = 0;
    ctx.font = `bold 13px ${Skin.fonts.display}`;
    ctx.fillStyle = '#00ff88';
    ctx.fillText(accStr, rightX, artistY);

    // ==========================================
    // 5. DISCRETE COMBO COUNTER (BOTTOM LEFT)
    // ==========================================
    if (stats.combo > 0) {
      const comboX = Math.round(transform.offsetX + 24);
      const comboY = Math.round(transform.offsetY + transform.height - 24);

      ctx.save();
      ctx.translate(comboX, comboY);
      ctx.scale(this.comboBounceScale, this.comboBounceScale);

      // Discrete COMBO label
      ctx.textAlign = 'left';
      ctx.textBaseline = 'bottom';
      ctx.font = `bold 10px ${Skin.fonts.display}`;
      ctx.fillStyle = 'rgba(0, 240, 255, 0.75)';
      ctx.fillText('COMBO', 0, -30);

      // Discrete modern combo number
      ctx.font = `bold 32px ${Skin.fonts.display}`;
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = 'rgba(0, 240, 255, 0.55)';
      ctx.shadowBlur = 10;
      ctx.fillText(`${stats.combo}x`, 0, 0);

      ctx.restore();
    }

    ctx.restore();
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.max(0, Math.floor(ms / 1000));
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  private renderKeyOverlay(inputState: InputState): void {
    const transform = this.playfield.getTransform();
    const ctx = this.ctx;
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    const availableRight = windowW - (transform.offsetX + transform.width);
    const cardW = Math.min(40, Math.max(28, Math.floor(availableRight - 10)));
    const cardH = Math.round(cardW * 1.15);
    const spacing = 10;

    const keys = [
      { label: 'Z', active: inputState.keys.z, count: inputState.keyCounts.z, color: '#00f0ff' },
      { label: 'X', active: inputState.keys.x, count: inputState.keyCounts.x, color: '#ff007f' },
    ];

    ctx.save();

    if (availableRight >= 36) {
      // Side placement: cleanly docked in the right margin outside the playfield
      const startX = Math.round(
        transform.offsetX + transform.width + Math.max(6, Math.floor((availableRight - cardW) / 2))
      );
      const totalH = cardH * 2 + spacing;
      const startY = Math.round(transform.offsetY + (transform.height - totalH) / 2);

      keys.forEach((k, idx) => {
        const y = startY + idx * (cardH + spacing);
        this.drawKeyCard(ctx, startX, y, cardW, cardH, k);
      });
    } else {
      // Fallback for extremely constrained horizontal margins (e.g. ultra-narrow window):
      // Dock in bottom-right corner strictly OUTSIDE the playfield bounds
      const bottomSpace = windowH - (transform.offsetY + transform.height);
      const fallbackW = 32;
      const fallbackH = Math.round(fallbackW * 1.15);
      const startX = windowW - (fallbackW * 2 + spacing) - 12;
      const startY =
        bottomSpace >= fallbackH + 8
          ? Math.round(transform.offsetY + transform.height + Math.floor((bottomSpace - fallbackH) / 2))
          : windowH - fallbackH - 8;

      keys.forEach((k, idx) => {
        const x = startX + idx * (fallbackW + spacing);
        this.drawKeyCard(ctx, x, startY, fallbackW, fallbackH, k);
      });
    }

    ctx.restore();
  }

  private drawKeyCard(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    key: { label: string; active: boolean; count: number; color: string }
  ): void {
    ctx.beginPath();
    ctx.roundRect(x, y, width, height, 8);
    ctx.fillStyle = key.active ? key.color : 'rgba(255, 255, 255, 0.06)';
    ctx.shadowColor = key.active ? key.color : 'transparent';
    ctx.shadowBlur = key.active ? 14 : 0;
    ctx.fill();

    ctx.lineWidth = 1.5;
    ctx.strokeStyle = key.active ? '#ffffff' : 'rgba(255, 255, 255, 0.18)';
    ctx.stroke();

    ctx.shadowBlur = 0;

    // Key Letter
    ctx.font = `bold ${Math.round(width * 0.42)}px ${Skin.fonts.display}`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = key.active ? '#0a0b12' : '#ffffff';
    ctx.fillText(key.label, x + width / 2, y + height * 0.38);

    // Key Tap Count inside card
    ctx.font = `600 ${Math.max(9, Math.round(width * 0.28))}px ${Skin.fonts.primary}`;
    ctx.fillStyle = key.active ? 'rgba(10, 11, 18, 0.75)' : 'rgba(255, 255, 255, 0.55)';
    ctx.fillText(key.count.toString(), x + width / 2, y + height * 0.74);
  }
}
