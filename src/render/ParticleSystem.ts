import type { JudgementType, Particle, RippleEffect, Vector2, VisualJudgement } from '../types/index.ts';
import { Skin } from './Skin.ts';

export class ParticleSystem {
  private particles: Particle[] = [];
  private ripples: RippleEffect[] = [];
  private judgements: VisualJudgement[] = [];
  private cursorTrail: Array<{ x: number; y: number; time: number }> = [];

  public update(dt: number, currentTime: number): void {
    // 1. Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += dt;
      if (p.life >= p.maxLife) {
        this.particles.splice(i, 1);
        continue;
      }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vx *= 0.95; // drag
      p.vy *= 0.95;
      p.alpha = Math.max(0, 1 - (p.life / p.maxLife));
    }

    // 2. Update ripples
    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      const elapsed = currentTime - r.spawnTime;
      if (elapsed >= r.durationMs) {
        this.ripples.splice(i, 1);
        continue;
      }
      const progress = elapsed / r.durationMs;
      r.alpha = (1 - progress) * 0.8;
      r.radius = r.maxRadius * Math.sin((progress * Math.PI) / 2);
    }

    // 3. Clean up expired visual judgements (> 800ms)
    this.judgements = this.judgements.filter((j) => currentTime - j.spawnTime < 800);

    // 4. Update cursor trail (keep last 150ms)
    this.cursorTrail = this.cursorTrail.filter((pt) => currentTime - pt.time < 160);
  }

  public addCursorPosition(pos: Vector2, currentTime: number): void {
    this.cursorTrail.push({ x: pos.x, y: pos.y, time: currentTime });
  }

  public getCursorTrail(): Array<{ x: number; y: number; time: number }> {
    return this.cursorTrail;
  }

  public spawnHitBurst(x: number, y: number, color: string, count: number = 16): void {
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const speed = 120 + Math.random() * 260;
      this.particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: 2 + Math.random() * 3,
        color,
        alpha: 1,
        life: 0,
        maxLife: 0.35 + Math.random() * 0.25,
      });
    }

    // Expanding shockwave ripple
    this.ripples.push({
      x,
      y,
      radius: 0,
      maxRadius: 75,
      color,
      alpha: 0.8,
      spawnTime: performance.now(),
      durationMs: 380,
    });
  }

  public spawnJudgement(type: JudgementType, x: number, y: number, currentTime: number): void {
    const skinInfo = Skin.judgements[type];
    this.judgements.push({
      id: Math.random(),
      type,
      x,
      y,
      spawnTime: currentTime,
      color: skinInfo.color,
    });
  }

  public render(ctx: CanvasRenderingContext2D, currentTime: number): void {
    // 1. Render ripples
    ctx.save();
    for (const r of this.ripples) {
      ctx.beginPath();
      ctx.arc(r.x, r.y, Math.max(1, r.radius), 0, Math.PI * 2);
      ctx.strokeStyle = r.color;
      ctx.globalAlpha = Math.max(0, r.alpha);
      ctx.lineWidth = 2.5;
      ctx.stroke();
    }
    ctx.restore();

    // 2. Render particles
    ctx.save();
    for (const p of this.particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.fill();
    }
    ctx.restore();

    // 3. Render visual judgements
    ctx.save();
    for (const j of this.judgements) {
      const elapsed = currentTime - j.spawnTime;
      const progress = Math.min(1, elapsed / 700);

      // Scale pop-in: starts at 1.4, settles to 1.0, floats up
      const scale = progress < 0.2 ? 0.7 + (progress / 0.2) * 0.5 : 1.2 - progress * 0.2;
      const offsetY = -progress * 25;
      const alpha = progress < 0.7 ? 1 : 1 - (progress - 0.7) / 0.3;

      ctx.save();
      ctx.translate(j.x, j.y + offsetY);
      ctx.scale(scale, scale);
      ctx.globalAlpha = Math.max(0, alpha);

      const skinData = Skin.judgements[j.type];
      ctx.font = `bold 28px ${Skin.fonts.display}`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Glow outline
      ctx.shadowColor = skinData.glow;
      ctx.shadowBlur = 12;
      ctx.fillStyle = skinData.color;
      ctx.fillText(skinData.text, 0, 0);

      // Clean core text
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#ffffff';
      ctx.fillText(skinData.text, 0, 0);

      ctx.restore();
    }
    ctx.restore();
  }

  public reset(): void {
    this.particles = [];
    this.ripples = [];
    this.judgements = [];
    this.cursorTrail = [];
  }
}
