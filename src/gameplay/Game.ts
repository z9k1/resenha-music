import { AudioEngine } from '../audio/AudioEngine.ts';
import { BEATMAPS, getDefaultBeatmap } from '../beatmap/index.ts';
import { ImageLoader } from '../render/ImageLoader.ts';
import { InputManager } from '../input/InputManager.ts';
import { ParticleSystem } from '../render/ParticleSystem.ts';
import { Playfield } from '../render/Playfield.ts';
import { Renderer } from '../render/Renderer.ts';
import { Skin } from '../render/Skin.ts';
import type { ActiveMods, Beatmap, GameState, HitObject, JudgementResult, Vector2 } from '../types/index.ts';
import { isSlider } from '../types/index.ts';
import { UIManager } from '../ui/UIManager.ts';
import { LeaderboardManager } from '../storage/LeaderboardManager.ts';
import { ActiveSlider, type SliderCallbacks } from './ActiveSlider.ts';
import { AutoplayController } from './AutoplayController.ts';
import { JudgementSystem } from './JudgementSystem.ts';
import { ScoreSystem } from './ScoreSystem.ts';

export class Game {
  private canvas: HTMLCanvasElement;
  private uiContainer: HTMLElement;

  private state: GameState = 'main_menu';
  private beatmap: Beatmap = getDefaultBeatmap();
  private currentEffectiveBeatmap: Beatmap = getDefaultBeatmap();
  private unjudgedObjects: HitObject[] = [];
  private activeSliders: ActiveSlider[] = [];

  private activeMods: ActiveMods = {
    autoPlay: false,
    easy: false,
  };
  private autoplayController: AutoplayController | null = null;

  private audioEngine: AudioEngine;
  private inputManager: InputManager;
  private playfield: Playfield;
  private particleSystem: ParticleSystem;
  private renderer: Renderer;
  private scoreSystem: ScoreSystem;
  private judgementSystem: JudgementSystem;
  private uiManager: UIManager;

  private lastFrameTime: number = 0;
  private animationFrameId: number | null = null;
  private isMapFinished: boolean = false;
  private hasSavedCurrentResult: boolean = false;
  private backgroundDim: number = 0.75;
  private leaderboardManager: LeaderboardManager;

  constructor(canvas: HTMLCanvasElement, uiContainer: HTMLElement) {
    this.canvas = canvas;
    this.uiContainer = uiContainer;

    const savedDim = typeof localStorage !== 'undefined' ? localStorage.getItem('resenha_bg_dim') : null;
    if (savedDim !== null) {
      const parsed = parseFloat(savedDim);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= 1) {
        this.backgroundDim = parsed;
      }
    }

    // Preload song covers for fluid transitions and zero gameplay delay
    ImageLoader.preloadAll(BEATMAPS.map((b) => b.coverUrl).filter(Boolean) as string[]);

    this.playfield = new Playfield(this.canvas);
    this.particleSystem = new ParticleSystem();
    this.renderer = new Renderer(this.canvas, this.playfield, this.particleSystem);
    this.audioEngine = new AudioEngine();
    this.inputManager = new InputManager(this.canvas);
    this.scoreSystem = new ScoreSystem();
    this.leaderboardManager = new LeaderboardManager();

    this.judgementSystem = new JudgementSystem(
      this.scoreSystem,
      this.beatmap.circleRadius,
      {
        onJudgement: (result: JudgementResult) => this.handleJudgementEvent(result),
      }
    );

    this.uiManager = new UIManager(this.uiContainer, {
      onGoToSongSelect: () => this.goToSongSelect(),
      onSelectSong: (b: Beatmap) => this.handleSongSelected(b),
      onPlaySong: (b: Beatmap) => this.startBeatmap(b),
      onBackToMainMenu: () => this.goToMainMenu(),
      onResume: () => this.togglePause(),
      onRestart: () => this.restartGame(),
      onReturnToSongSelect: () => this.goToSongSelect(),
      onModsChange: (mods: ActiveMods) => {
        this.activeMods = { ...mods };
        this.judgementSystem.setEasyMode(this.activeMods.easy);
      },
      onStartMenuAudio: () => {
        this.audioEngine.playMenuMusic(this.beatmap);
      },
      onTestHitsound: () => {
        this.audioEngine.playHitsound();
      },
      onMusicVolumeChange: (vol: number) => {
        this.audioEngine.setMusicVolume(vol);
      },
      onSfxVolumeChange: (vol: number) => {
        this.audioEngine.setSfxVolume(vol);
      },
      onMasterVolumeChange: (vol: number) => {
        this.audioEngine.setMasterVolume(vol);
      },
      getAudioVolumes: () => ({
        master: this.audioEngine.getMasterVolume(),
        music: this.audioEngine.getMusicVolume(),
        sfx: this.audioEngine.getSfxVolume(),
      }),
      onBackgroundDimChange: (dim: number) => {
        this.backgroundDim = dim;
        if (typeof localStorage !== 'undefined') {
          try {
            localStorage.setItem('resenha_bg_dim', dim.toString());
          } catch {
            // Ignore
          }
        }
      },
      getBackgroundDim: () => this.backgroundDim,
      getBeatmapScores: (id: string) => this.leaderboardManager.getScores(id),
    });

    this.uiManager.setBeatmaps(BEATMAPS);
    this.setupEvents();
    this.goToMainMenu();
    this.startLoop();
  }

  private setupEvents(): void {
    // Window resize
    window.addEventListener('resize', () => {
      const transform = this.playfield.resize();
      this.inputManager.setViewportTransform(transform);
    });
    this.inputManager.setViewportTransform(this.playfield.getTransform());

    // Input taps (Z, X, mouse)
    this.inputManager.on('tap', (_key, pos) => {
      if (this.state !== 'playing' || this.activeMods.autoPlay) return;
      const currentTimeMs = this.audioEngine.getCurrentTimeMs();
      this.handleTapAt(pos, currentTimeMs);
    });

    // Pause toggle (ESC)
    this.inputManager.on('pause', () => {
      if (this.state === 'playing' || this.state === 'paused') {
        this.togglePause();
      } else if (this.state === 'song_select') {
        this.goToMainMenu();
      }
    });

    // Quick restart (R)
    this.inputManager.on('restart', () => {
      if (this.state === 'playing' || this.state === 'paused' || this.state === 'results') {
        this.restartGame();
      }
    });

    // Pause on tab loss
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (this.state === 'playing') {
          this.togglePause();
        } else if (this.state === 'song_select') {
          this.audioEngine.stopPreview();
        }
      }
    });
  }

  private createSliderCallbacks(currentTimeMs: number): SliderCallbacks {
    return {
      onHeadJudged: (type, headPos, _deltaMs) => {
        if (type !== 'MISS') {
          this.scoreSystem.registerSliderTickHit(50);
          this.audioEngine.playHitsound();
          this.particleSystem.spawnHitBurst(headPos.x, headPos.y, '#00f0ff', 12);
          this.particleSystem.spawnJudgement(type, headPos.x, headPos.y, performance.now());
        } else {
          this.scoreSystem.registerSliderTickMiss();
          this.audioEngine.playMissSound();
          this.particleSystem.spawnJudgement('MISS', headPos.x, headPos.y, performance.now());
        }
      },
      onTickHit: (tickPos) => {
        this.scoreSystem.registerSliderTickHit(30);
        this.audioEngine.playSliderTick();
        this.particleSystem.spawnHitBurst(tickPos.x, tickPos.y, '#00f0ff', 6);
      },
      onTickMiss: (tickPos) => {
        this.scoreSystem.registerSliderTickMiss();
        this.particleSystem.spawnJudgement('MISS', tickPos.x, tickPos.y, performance.now());
      },
      onRepeatHit: (repeatPos) => {
        this.scoreSystem.registerSliderTickHit(60);
        this.audioEngine.playHitsound();
        this.particleSystem.spawnHitBurst(repeatPos.x, repeatPos.y, '#ffd700', 14);
      },
      onRepeatMiss: (repeatPos) => {
        this.scoreSystem.registerSliderTickMiss();
        this.particleSystem.spawnJudgement('MISS', repeatPos.x, repeatPos.y, performance.now());
      },
      onSliderComplete: (overallType, tailPos) => {
        const { scoreGained, newCombo } = this.scoreSystem.registerJudgement(overallType);
        const result: JudgementResult = {
          id: -1,
          type: overallType,
          deltaMs: 0,
          scoreGained,
          combo: newCombo,
          position: tailPos,
          timestamp: currentTimeMs,
          isSliderEnd: true,
        };
        this.handleJudgementEvent(result);
      },
    };
  }

  private handleTapAt(pos: Vector2, currentTimeMs: number): void {
    const sliderCallbacks = this.createSliderCallbacks(currentTimeMs);

    const result = this.judgementSystem.handleTap(
      pos,
      currentTimeMs,
      this.unjudgedObjects,
      this.activeSliders,
      sliderCallbacks
    );

    if (result && !result.isSlider) {
      const idx = this.unjudgedObjects.findIndex((n) => n.id === result.hitId);
      if (idx !== -1) {
        this.unjudgedObjects.splice(idx, 1);
      }
    }
  }

  public goToMainMenu(): void {
    this.audioEngine.stop();
    this.audioEngine.stopPreview();
    this.state = 'main_menu';
    this.uiManager.showStartScreen();
  }

  public goToSongSelect(): void {
    this.audioEngine.stopMenuMusic();
    this.audioEngine.stop();
    this.state = 'song_select';
    this.uiManager.showSongSelectScreen(BEATMAPS, this.beatmap);
  }

  private handleSongSelected(beatmap: Beatmap): void {
    this.beatmap = beatmap;
    this.activeMods = this.uiManager.getActiveMods();
    this.judgementSystem.setEasyMode(this.activeMods.easy);
    const radius = this.activeMods.easy ? Math.round(beatmap.circleRadius * 1.25) : beatmap.circleRadius;
    this.judgementSystem.setCircleRadius(radius);
    this.audioEngine.playPreview(beatmap);
  }

  public async startBeatmap(beatmap: Beatmap): Promise<void> {
    this.beatmap = beatmap;
    this.activeMods = this.uiManager.getActiveMods();
    this.judgementSystem.setEasyMode(this.activeMods.easy);

    // Create cloned effective beatmap with modified CS / AR without mutating original
    this.currentEffectiveBeatmap = this.activeMods.easy
      ? {
          ...beatmap,
          circleRadius: Math.round(beatmap.circleRadius * 1.25),
          approachTimeMs: Math.round(beatmap.approachTimeMs * 1.3),
          notes: beatmap.notes.map((n) => ({ ...n })),
        }
      : {
          ...beatmap,
          notes: beatmap.notes.map((n) => ({ ...n })),
        };

    this.judgementSystem.setCircleRadius(this.currentEffectiveBeatmap.circleRadius);

    this.audioEngine.stopMenuMusic();
    this.audioEngine.stopPreview();
    await this.audioEngine.prepareBeatmapAudio(beatmap);

    this.resetGameplay();
    this.uiManager.hide();
    this.state = 'playing';

    this.audioEngine.start(0);
  }

  public restartGame(): void {
    this.resetGameplay();
    this.uiManager.hide();
    this.state = 'playing';
    this.audioEngine.stop();
    this.audioEngine.start(0);
  }

  public togglePause(): void {
    if (this.state === 'playing') {
      this.state = 'paused';
      this.audioEngine.pause();
      this.uiManager.showPauseScreen();
    } else if (this.state === 'paused') {
      this.state = 'playing';
      this.uiManager.hide();
      this.audioEngine.resume();
    }
  }

  private resetGameplay(): void {
    this.unjudgedObjects = this.currentEffectiveBeatmap.notes.map((n) => ({ ...n }));
    this.activeSliders = this.unjudgedObjects
      .filter(isSlider)
      .map((s) => new ActiveSlider(s, this.activeMods.easy));

    this.scoreSystem.reset();
    this.particleSystem.reset();
    this.inputManager.resetKeyCounts();
    this.isMapFinished = false;
    this.hasSavedCurrentResult = false;

    if (this.activeMods.autoPlay) {
      this.autoplayController = new AutoplayController(
        this.currentEffectiveBeatmap,
        this.activeSliders,
        (cursor, timeMs) => this.handleTapAt(cursor, timeMs)
      );
    } else {
      this.autoplayController = null;
    }
  }

  private handleJudgementEvent(result: JudgementResult): void {
    const isHit = result.type !== 'MISS';

    if (isHit) {
      this.audioEngine.playHitsound();
      const obj = this.currentEffectiveBeatmap.notes.find((n) => n.id === result.id);
      const colorScheme = Skin.comboColors[obj?.comboColorIndex ?? 0];
      this.particleSystem.spawnHitBurst(result.position.x, result.position.y, colorScheme.main);
    } else {
      this.audioEngine.playMissSound();
    }

    this.particleSystem.spawnJudgement(
      result.type,
      result.position.x,
      result.position.y,
      performance.now()
    );
  }

  private startLoop(): void {
    this.lastFrameTime = performance.now();
    const frame = (now: number) => {
      const dt = Math.min((now - this.lastFrameTime) / 1000, 0.1);
      this.lastFrameTime = now;

      this.update(dt);
      this.render();

      this.animationFrameId = requestAnimationFrame(frame);
    };

    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.animationFrameId = requestAnimationFrame(frame);
  }

  private update(dt: number): void {
    const currentTimeMs = this.audioEngine.getCurrentTimeMs();
    let currentInput = this.inputManager.getState();

    // AutoPlay takes over input during gameplay
    if (this.state === 'playing' && this.activeMods.autoPlay && this.autoplayController) {
      const autoState = this.autoplayController.update(currentTimeMs, dt);
      currentInput = {
        cursor: autoState.cursor,
        inPlayfield: autoState.inPlayfield,
        keys: autoState.keys,
        keyCounts: autoState.keyCounts,
      };
    }

    // Track cursor trail
    this.particleSystem.addCursorPosition(currentInput.cursor, performance.now());

    // Update particles and ripples
    this.particleSystem.update(dt, performance.now());

    if (this.state === 'playing') {
      // 1. Check for expired circles
      this.judgementSystem.checkExpiredCircles(currentTimeMs, this.unjudgedObjects, (objId) => {
        const idx = this.unjudgedObjects.findIndex((n) => n.id === objId);
        if (idx !== -1) {
          this.unjudgedObjects.splice(idx, 1);
        }
      });

      // 2. Update active sliders
      for (const slider of this.activeSliders) {
        if (!slider.completed) {
          const sliderCallbacks: SliderCallbacks = {
            onHeadJudged: (type, headPos) => {
              if (type !== 'MISS') {
                this.scoreSystem.registerSliderTickHit(50);
                this.audioEngine.playHitsound();
                this.particleSystem.spawnHitBurst(headPos.x, headPos.y, '#00f0ff', 12);
                this.particleSystem.spawnJudgement(type, headPos.x, headPos.y, performance.now());
              } else {
                this.scoreSystem.registerSliderTickMiss();
                this.audioEngine.playMissSound();
                this.particleSystem.spawnJudgement('MISS', headPos.x, headPos.y, performance.now());
              }
            },
            onTickHit: (tickPos) => {
              this.scoreSystem.registerSliderTickHit(30);
              this.audioEngine.playSliderTick();
              this.particleSystem.spawnHitBurst(tickPos.x, tickPos.y, '#00f0ff', 6);
            },
            onTickMiss: (tickPos) => {
              this.scoreSystem.registerSliderTickMiss();
              this.particleSystem.spawnJudgement('MISS', tickPos.x, tickPos.y, performance.now());
            },
            onRepeatHit: (repeatPos) => {
              this.scoreSystem.registerSliderTickHit(60);
              this.audioEngine.playHitsound();
              this.particleSystem.spawnHitBurst(repeatPos.x, repeatPos.y, '#ffd700', 14);
            },
            onRepeatMiss: (repeatPos) => {
              this.scoreSystem.registerSliderTickMiss();
              this.particleSystem.spawnJudgement('MISS', repeatPos.x, repeatPos.y, performance.now());
            },
            onSliderComplete: (overallType, tailPos) => {
              const { scoreGained, newCombo } = this.scoreSystem.registerJudgement(overallType);
              const result: JudgementResult = {
                id: slider.data.id,
                type: overallType,
                deltaMs: 0,
                scoreGained,
                combo: newCombo,
                position: tailPos,
                timestamp: currentTimeMs,
                isSliderEnd: true,
              };
              this.handleJudgementEvent(result);

              // Remove slider from unjudged objects list
              const idx = this.unjudgedObjects.findIndex((n) => n.id === slider.data.id);
              if (idx !== -1) {
                this.unjudgedObjects.splice(idx, 1);
              }
            },
          };

          slider.update(
            currentTimeMs,
            currentInput,
            this.currentEffectiveBeatmap.circleRadius,
            dt,
            sliderCallbacks,
            this.judgementSystem.window50
          );
        }
      }

      // 3. Check if beatmap is completed
      const lastObj = this.currentEffectiveBeatmap.notes[this.currentEffectiveBeatmap.notes.length - 1];
      const lastEndTime = lastObj
        ? isSlider(lastObj)
          ? lastObj.timeMs + lastObj.durationMs
          : lastObj.timeMs
        : 0;

      const hasFinishedAll = this.unjudgedObjects.length === 0;
      const isPastLast = currentTimeMs > lastEndTime + 1200;

      if (!this.isMapFinished && (isPastLast || (hasFinishedAll && currentTimeMs > lastEndTime + 800))) {
        this.isMapFinished = true;
        setTimeout(() => {
          if (this.state === 'playing') {
            this.state = 'results';
            this.audioEngine.stop();
            const stats = this.scoreSystem.getStats();
            stats.mods = { ...this.activeMods };
            const grade = this.scoreSystem.getGrade();

            if (!this.hasSavedCurrentResult) {
              this.hasSavedCurrentResult = true;
              this.leaderboardManager.recordScore(
                this.beatmap.id,
                stats,
                grade,
                this.activeMods
              );
            }

            this.uiManager.showResultsScreen(stats, grade, this.beatmap, this.activeMods);
          }
        }, 600);
      }
    }
  }

  private render(): void {
    const currentTimeMs = this.audioEngine.getCurrentTimeMs();
    const stats = this.scoreSystem.getStats();
    let currentInput = this.inputManager.getState();

    if (this.state === 'playing' && this.activeMods.autoPlay && this.autoplayController) {
      const auto = this.autoplayController.update(currentTimeMs, 0);
      currentInput = {
        cursor: auto.cursor,
        inPlayfield: auto.inPlayfield,
        keys: auto.keys,
        keyCounts: auto.keyCounts,
      };
    }

    const totalDuration = this.audioEngine.getDurationMs();

    this.renderer.render(
      currentTimeMs,
      this.currentEffectiveBeatmap,
      this.unjudgedObjects,
      this.activeSliders,
      stats,
      currentInput,
      totalDuration,
      this.activeMods,
      this.state,
      this.backgroundDim
    );
  }

  public destroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.audioEngine.stop();
    this.audioEngine.stopPreview();
  }
}
