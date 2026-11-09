import type { ActiveMods, Beatmap, GameStats, ScoreRecord } from '../types/index.ts';
import { BEATMAPS } from '../beatmap/index.ts';

export interface UIEventHandlers {
  onGoToSongSelect: () => void;
  onSelectSong: (beatmap: Beatmap) => void;
  onPlaySong: (beatmap: Beatmap) => void;
  onBackToMainMenu: () => void;
  onResume: () => void;
  onRestart: () => void;
  onReturnToSongSelect: () => void;
  onModsChange?: (mods: ActiveMods) => void;
  onStartMenuAudio?: () => void;
  onTestHitsound?: () => void;
  onMusicVolumeChange?: (volume: number) => void;
  onSfxVolumeChange?: (volume: number) => void;
  onMasterVolumeChange?: (volume: number) => void;
  getAudioVolumes?: () => { master: number; music: number; sfx: number };
  onBackgroundDimChange?: (dim: number) => void;
  getBackgroundDim?: () => number;
  getBeatmapScores?: (beatmapId: string) => ScoreRecord[];
}

export class UIManager {
  private container: HTMLElement;
  private handlers: UIEventHandlers;
  private selectedBeatmap: Beatmap | null = null;
  private beatmapsList: Beatmap[] = [];

  private activeMods: ActiveMods = {
    autoPlay: false,
    easy: false,
    autoPilot: false,
    relax: false,
  };
  private isModsModalOpen: boolean = false;
  private rankingCategoryTab: 'competitive' | 'assisted' = 'competitive';

  private isMainMenuOpen: boolean = false;
  private isMainMenuActive: boolean = false;
  private isSettingsOpen: boolean = false;
  private isCreditsOpen: boolean = false;
  private isRecordsModalOpen: boolean = false;

  constructor(container: HTMLElement, handlers: UIEventHandlers) {
    this.container = container;
    this.handlers = handlers;
    this.setupGlobalShortcuts();
  }

  public getActiveMods(): ActiveMods {
    return { ...this.activeMods };
  }

  public setActiveMods(mods: Partial<ActiveMods>): void {
    this.activeMods = { ...this.activeMods, ...mods };
    this.updateModsBadges();
    this.updateSpotlightMapInfo();
    this.handlers.onModsChange?.(this.activeMods);
  }

  public setBeatmaps(beatmaps: Beatmap[]): void {
    this.beatmapsList = beatmaps;
    if (!this.selectedBeatmap && beatmaps.length > 0) {
      this.selectedBeatmap = beatmaps[0];
    }
  }

  private setupGlobalShortcuts(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('keydown', (e: KeyboardEvent) => {
      // 1. If Settings modal is open, ESC closes it
      if (this.isSettingsOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          this.closeSettingsModal();
          return;
        }
      }

      // 2. If Credits modal is open, ESC closes it
      if (this.isCreditsOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          this.closeCreditsModal();
          return;
        }
      }

      // 3. If MODS modal is open, ESC closes it
      if (this.isModsModalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          this.closeModsModal();
          return;
        }
      }

      // 4. If Records History modal is open, ESC closes it
      if (this.isRecordsModalOpen) {
        if (e.key === 'Escape') {
          e.preventDefault();
          e.stopPropagation();
          this.closeAllRecordsModal();
          return;
        }
      }

      // 4. In Main Menu navigation
      if (this.isMainMenuOpen && !this.isSettingsOpen && !this.isCreditsOpen) {
        if (!this.isMainMenuActive) {
          // In Idle mode: any normal key activates the menu
          if (e.key !== 'F12' && e.key !== 'F5' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            e.preventDefault();
            this.setMainMenuActive(true);
            return;
          }
        } else {
          // When active:
          if (e.key === 'Escape') {
            e.preventDefault();
            this.setMainMenuActive(false);
          } else if (e.key === 'Enter' || e.key === '1') {
            e.preventDefault();
            this.handlers.onGoToSongSelect();
          } else if (e.key === '2' || e.key.toLowerCase() === 'c') {
            e.preventDefault();
            this.openSettingsModal();
          } else if (e.key === '3' || e.key.toLowerCase() === 'k') {
            e.preventDefault();
            this.openCreditsModal();
          }
        }
      }

      // 5. In song select screen: allow ArrowUp / ArrowDown, Enter, and F1/M for mods
      const songSelectElement = document.getElementById('song-select-view');
      if (songSelectElement && this.beatmapsList.length > 0 && !this.isModsModalOpen) {
        const currentIndex = this.beatmapsList.findIndex(
          (b) => b.id === this.selectedBeatmap?.id
        );

        if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W') {
          e.preventDefault();
          const nextIndex = (currentIndex - 1 + this.beatmapsList.length) % this.beatmapsList.length;
          this.changeSelectedSong(this.beatmapsList[nextIndex]);
        } else if (e.key === 'ArrowDown' || e.key === 's' || e.key === 'S') {
          e.preventDefault();
          const nextIndex = (currentIndex + 1) % this.beatmapsList.length;
          this.changeSelectedSong(this.beatmapsList[nextIndex]);
        } else if (e.key === 'PageUp') {
          e.preventDefault();
          const nextIndex = Math.max(0, currentIndex - 4);
          this.changeSelectedSong(this.beatmapsList[nextIndex]);
        } else if (e.key === 'PageDown') {
          e.preventDefault();
          const nextIndex = Math.min(this.beatmapsList.length - 1, currentIndex + 4);
          this.changeSelectedSong(this.beatmapsList[nextIndex]);
        } else if (e.key === 'Home') {
          e.preventDefault();
          this.changeSelectedSong(this.beatmapsList[0]);
        } else if (e.key === 'End') {
          e.preventDefault();
          this.changeSelectedSong(this.beatmapsList[this.beatmapsList.length - 1]);
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (this.selectedBeatmap) {
            this.handlers.onPlaySong(this.selectedBeatmap);
          }
        } else if (e.key === 'F1' || (e.key.toLowerCase() === 'm' && !e.ctrlKey && !e.metaKey)) {
          e.preventDefault();
          this.openModsModal();
        }
      }
    });
  }

  /**
   * Modern Rhythm Game Main Menu with Loro Mascot & Interactive Stage
   */
  public showStartScreen(): void {
    this.isMainMenuOpen = true;
    this.isMainMenuActive = false;
    this.isSettingsOpen = false;
    this.isCreditsOpen = false;

    this.container.innerHTML = `
      <div class="title-screen-container animate-fade-in" id="title-screen">
        <!-- Atmospheric audio wave rings radiating outward behind the mascot logo -->
        <div class="title-wave-rings" aria-hidden="true">
          <div class="wave-ring ring-cyan ring-1"></div>
          <div class="wave-ring ring-pink ring-2"></div>
          <div class="wave-ring ring-cyan ring-3"></div>
        </div>

        <!-- Ambient cyber glows -->
        <div class="title-ambient-glow glow-cyan" aria-hidden="true"></div>
        <div class="title-ambient-glow glow-pink" aria-hidden="true"></div>

        <!-- Main interactive stage -->
        <div class="title-main-stage ${this.isMainMenuActive ? 'stage-menu-active' : 'stage-idle'}" id="title-main-stage">
          
          <!-- Official Logo Badge with Mascot Loro -->
          <div class="title-logo-wrapper" id="btn-hero-logo" role="button" tabindex="0" title="Clique para abrir o menu">
            <div class="logo-inner-frame">
              <img src="./logo-resenha.png" alt="Resenha Music - Mascote Loro" class="title-logo-img" />
              <div class="logo-pulse-highlight"></div>
            </div>
            <div class="logo-shadow-glow"></div>
            <p class="title-slogan">Qualquer semelhança é mera conhecidência!</p>
          </div>

          <!-- Idle Prompt (Visible only before clicking) -->
          <div class="title-idle-prompt ${this.isMainMenuActive ? 'hidden' : ''}" id="title-prompt" role="button" tabindex="0">
            <div class="prompt-pill">
              <span class="prompt-icon">⚡</span>
              <span class="prompt-main">CLIQUE OU PRESSIONE QUALQUER TECLA</span>
            </div>
            <p class="prompt-sub">RHYTHM GAME • MIRA & PRECISÃO • Z & X</p>
          </div>

          <!-- Action Menu Navigation (Revealed when clicked) -->
          <nav class="title-action-menu ${this.isMainMenuActive ? 'visible' : ''}" id="title-action-nav" aria-label="Menu Principal">
            <div class="action-menu-header">
              <span class="menu-brand-tag">MENU PRINCIPAL</span>
              <div class="menu-divider-line"></div>
            </div>

            <button id="btn-nav-play" class="action-btn btn-action-play" tabindex="0">
              <div class="btn-action-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <div class="btn-action-content">
                <span class="btn-action-title">JOGAR</span>
                <span class="btn-action-desc">Escolher músicas e beatmaps</span>
              </div>
              <kbd class="btn-action-kbd">ENTER</kbd>
            </button>

            <button id="btn-nav-settings" class="action-btn btn-action-settings" tabindex="0">
              <div class="btn-action-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div class="btn-action-content">
                <span class="btn-action-title">CONFIGURAÇÕES</span>
                <span class="btn-action-desc">Volume de música e efeitos</span>
              </div>
              <kbd class="btn-action-kbd">2</kbd>
            </button>

            <button id="btn-nav-credits" class="action-btn btn-action-credits" tabindex="0">
              <div class="btn-action-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div class="btn-action-content">
                <span class="btn-action-title">CRÉDITOS</span>
                <span class="btn-action-desc">Equipe e participantes</span>
              </div>
              <kbd class="btn-action-kbd">3</kbd>
            </button>

            <button id="btn-nav-back" class="action-btn btn-action-back" tabindex="0">
              <div class="btn-action-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </div>
              <div class="btn-action-content">
                <span class="btn-action-title">RECOLHER</span>
              </div>
              <kbd class="btn-action-kbd">ESC</kbd>
            </button>
          </nav>
        </div>

        <!-- Title Footer -->
        <footer class="title-footer">
          <div class="footer-left">
            <span class="footer-project-tag">RESENHA MUSIC 2.0</span>
          </div>
          <div class="footer-right">
            <span>Projeto Cultural • 2026</span>
          </div>
        </footer>
      </div>
    `;

    this.attachMainMenuEvents();
  }

  private attachMainMenuEvents(): void {
    // Clicking hero logo or prompt toggles the active state
    const logoBtn = document.getElementById('btn-hero-logo');
    logoBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!this.isMainMenuActive) {
        this.setMainMenuActive(true);
      }
    });

    const promptBtn = document.getElementById('title-prompt');
    promptBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!this.isMainMenuActive) {
        this.setMainMenuActive(true);
      }
    });

    // Clicking anywhere on idle screen background activates menu
    const screen = document.getElementById('title-screen');
    screen?.addEventListener('click', () => {
      if (!this.isMainMenuActive && !this.isSettingsOpen && !this.isCreditsOpen) {
        this.setMainMenuActive(true);
      }
    });

    // Navigation buttons
    document.getElementById('btn-nav-play')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.handlers.onGoToSongSelect();
    });

    document.getElementById('btn-nav-settings')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openSettingsModal();
    });

    document.getElementById('btn-nav-credits')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.openCreditsModal();
    });

    document.getElementById('btn-nav-back')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.setMainMenuActive(false);
    });
  }

  public setMainMenuActive(active: boolean): void {
    this.isMainMenuActive = active;

    if (active) {
      this.handlers.onStartMenuAudio?.();
      this.handlers.onTestHitsound?.();
    }

    const stage = document.getElementById('title-main-stage');
    const prompt = document.getElementById('title-prompt');
    const nav = document.getElementById('title-action-nav');

    if (stage) {
      stage.classList.toggle('stage-menu-active', active);
      stage.classList.toggle('stage-idle', !active);
    }
    if (prompt) {
      prompt.classList.toggle('hidden', active);
    }
    if (nav) {
      nav.classList.toggle('visible', active);
    }
  }

  /**
   * Settings Modal (Volume & Audio Controls with live test & persistence)
   */
  public openSettingsModal(): void {
    if (this.isSettingsOpen) return;
    this.isSettingsOpen = true;

    const volumes = this.handlers.getAudioVolumes?.() ?? {
      master: 0.70,
      music: 0.35,
      sfx: 0.65,
    };
    const bgDim = this.handlers.getBackgroundDim?.() ?? 0.75;

    const overlay = document.createElement('div');
    overlay.id = 'settings-modal-overlay';
    overlay.className = 'modal-backdrop settings-modal-backdrop';
    overlay.innerHTML = `
      <div class="menu-card settings-card animate-pop" id="settings-card" role="dialog" aria-modal="true">
        <div class="modal-card-header">
          <div class="modal-header-icon icon-cyan">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="3"></circle>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
            </svg>
          </div>
          <div class="modal-header-texts">
            <h2 class="modal-card-title">CONFIGURAÇÕES</h2>
            <p class="modal-card-subtitle">Áudio & Controles do Resenha Music</p>
          </div>
          <button id="btn-close-settings" class="modal-close-btn" aria-label="Fechar" title="Fechar">✕</button>
        </div>

        <div class="settings-body">
          <!-- Volume da Música -->
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">🎵 Volume da Música (BGM)</span>
              <span class="setting-desc">Músicas do jogo, prévias e áudio do menu</span>
            </div>
            <div class="setting-control">
              <input type="range" id="slider-music-volume" class="range-slider" min="0" max="100" value="${Math.round(volumes.music * 100)}" />
              <span class="setting-val-badge" id="val-music-volume">${Math.round(volumes.music * 100)}%</span>
            </div>
          </div>

          <!-- Volume dos Efeitos (SFX) -->
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">🔊 Volume dos Efeitos (SFX)</span>
              <span class="setting-desc">Hitsounds de acerto, ticks de sliders e cliques</span>
            </div>
            <div class="setting-control">
              <input type="range" id="slider-sfx-volume" class="range-slider" min="0" max="100" value="${Math.round(volumes.sfx * 100)}" />
              <span class="setting-val-badge" id="val-sfx-volume">${Math.round(volumes.sfx * 100)}%</span>
              <button id="btn-test-sfx" class="btn-test-sfx" title="Ouvir teste de som">▶ Testar</button>
            </div>
          </div>

          <!-- Volume Geral (Master) -->
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">🎚️ Volume Geral (Master)</span>
              <span class="setting-desc">Saída principal de todos os sons</span>
            </div>
            <div class="setting-control">
              <input type="range" id="slider-master-volume" class="range-slider" min="0" max="100" value="${Math.round(volumes.master * 100)}" />
              <span class="setting-val-badge" id="val-master-volume">${Math.round(volumes.master * 100)}%</span>
            </div>
          </div>

          <!-- Escurecimento do Fundo (Dim) -->
          <div class="setting-row">
            <div class="setting-info">
              <span class="setting-name">🖼️ Escurecimento do Fundo (Dim)</span>
              <span class="setting-desc">Opacidade da camada escura sobre a capa no gameplay</span>
            </div>
            <div class="setting-control">
              <input type="range" id="slider-bg-dim" class="range-slider" min="0" max="100" value="${Math.round(bgDim * 100)}" />
              <span class="setting-val-badge" id="val-bg-dim">${Math.round(bgDim * 100)}%</span>
            </div>
          </div>
        </div>

        <div class="modal-card-footer">
          <button id="btn-save-settings" class="btn-primary btn-save-modal">
            ✓ CONCLUÍDO
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(overlay);

    // Event hooks
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeSettingsModal();
    });
    document.getElementById('btn-close-settings')?.addEventListener('click', () => this.closeSettingsModal());
    document.getElementById('btn-save-settings')?.addEventListener('click', () => this.closeSettingsModal());

    const musicSlider = document.getElementById('slider-music-volume') as HTMLInputElement | null;
    musicSlider?.addEventListener('input', () => {
      const val = parseInt(musicSlider.value, 10) / 100;
      const badge = document.getElementById('val-music-volume');
      if (badge) badge.textContent = `${Math.round(val * 100)}%`;
      this.handlers.onMusicVolumeChange?.(val);
    });

    const sfxSlider = document.getElementById('slider-sfx-volume') as HTMLInputElement | null;
    sfxSlider?.addEventListener('input', () => {
      const val = parseInt(sfxSlider.value, 10) / 100;
      const badge = document.getElementById('val-sfx-volume');
      if (badge) badge.textContent = `${Math.round(val * 100)}%`;
      this.handlers.onSfxVolumeChange?.(val);
    });

    const masterSlider = document.getElementById('slider-master-volume') as HTMLInputElement | null;
    masterSlider?.addEventListener('input', () => {
      const val = parseInt(masterSlider.value, 10) / 100;
      const badge = document.getElementById('val-master-volume');
      if (badge) badge.textContent = `${Math.round(val * 100)}%`;
      this.handlers.onMasterVolumeChange?.(val);
    });

    const bgDimSlider = document.getElementById('slider-bg-dim') as HTMLInputElement | null;
    bgDimSlider?.addEventListener('input', () => {
      const val = parseInt(bgDimSlider.value, 10) / 100;
      const badge = document.getElementById('val-bg-dim');
      if (badge) badge.textContent = `${Math.round(val * 100)}%`;
      this.handlers.onBackgroundDimChange?.(val);
    });

    document.getElementById('btn-test-sfx')?.addEventListener('click', () => {
      this.handlers.onTestHitsound?.();
    });
  }

  public closeSettingsModal(): void {
    const overlay = document.getElementById('settings-modal-overlay');
    if (overlay) overlay.remove();
    this.isSettingsOpen = false;
  }

  /**
   * Credits Modal (Team, Mascot Loro, Soundtracks & School project)
   */
  public openCreditsModal(): void {
    if (this.isCreditsOpen) return;
    this.isCreditsOpen = true;

    const trackList = this.beatmapsList.length > 0 ? this.beatmapsList : BEATMAPS;
    const getTrackIcon = (id: string) => {
      switch (id) {
        case 'sua-rifa-nao-vou-comprar': return '🎟️';
        case 'quem-fiscaliza-o-fiscal': return '🚨';
        case 'mapeamento': return '🗺️';
        case 'unopar-me-deixa-em-paz': return '🎓';
        case 'pod-no-banheiro': return '💨';
        case 'dalsao-no-suco': return '⚡';
        case 'alo-cachorrada': return '🔥';
        case 'resenha-groove-demo': return '🎧';
        default: return '🎵';
      }
    };

    const tracksHtml = trackList
      .map(
        (b) => `
              <div class="credit-track-pill">
                <span class="track-icon">${getTrackIcon(b.id)}</span>
                <div>
                  <strong>${b.title}</strong>
                  <p>${b.artist} • ★${b.difficultyStars.toFixed(1)} ${b.difficultyName}</p>
                </div>
              </div>`
      )
      .join('');

    const overlay = document.createElement('div');
    overlay.id = 'credits-modal-overlay';
    overlay.className = 'modal-backdrop credits-modal-backdrop';
    overlay.innerHTML = `
      <div class="menu-card credits-card animate-pop" id="credits-card" role="dialog" aria-modal="true">
        <div class="modal-card-header">
          <div class="modal-header-icon icon-gold">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
          </div>
          <div class="modal-header-texts">
            <h2 class="modal-card-title">CRÉDITOS & EQUIPE</h2>
            <p class="modal-card-subtitle">Resenha Music — Projeto Cultural 2026</p>
          </div>
          <button id="btn-close-credits" class="modal-close-btn" aria-label="Fechar" title="Fechar">✕</button>
        </div>

        <div class="credits-body">
          <div class="credit-block">
            <div class="credit-role-tag highlight-cyan">SOBRE O PROJETO</div>
            <p class="credit-project-desc">
              Resenha Music é um jogo de ritmo desenvolvido como projeto escolar de incentivo à cultura, integrando música, arte digital e tecnologia. A proposta busca demonstrar o potencial dos jogos digitais como forma de expressão artística e entretenimento interativo.
            </p>
          </div>

          <div class="credit-block">
            <div class="credit-role-tag highlight-pink">EQUIPE RESPONSÁVEL</div>
            <div class="credit-team-grid">
              <div class="credit-member-card">
                <div class="credit-member-avatar">M</div>
                <span class="credit-member-name">Miguel</span>
              </div>
              <div class="credit-member-card">
                <div class="credit-member-avatar">VT</div>
                <span class="credit-member-name">Victor Tirolla</span>
              </div>
              <div class="credit-member-card">
                <div class="credit-member-avatar">M</div>
                <span class="credit-member-name">Mateus</span>
              </div>
            </div>
          </div>

          <div class="credit-block">
            <div class="credit-role-tag highlight-gold">TRILHA SONORA & BEATMAPS</div>
            <div class="credit-tracks-grid">
${tracksHtml}
            </div>
          </div>

          <div class="credit-block credit-warning-block">
            <div class="credit-role-tag highlight-amber">⚠️ AVISO DE CONTEÚDO</div>
            <p class="credit-warning-desc">
              Algumas músicas podem conter linguagem explícita e conteúdo humorístico. As composições possuem caráter recreativo e não representam posicionamentos oficiais da instituição de ensino.
            </p>
          </div>
        </div>

        <div class="modal-card-footer">
          <button id="btn-save-credits" class="btn-primary btn-save-modal">
            ◀ VOLTAR AO MENU
          </button>
        </div>
      </div>
    `;

    this.container.appendChild(overlay);

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.closeCreditsModal();
    });
    document.getElementById('btn-close-credits')?.addEventListener('click', () => this.closeCreditsModal());
    document.getElementById('btn-save-credits')?.addEventListener('click', () => this.closeCreditsModal());
  }

  public closeCreditsModal(): void {
    const overlay = document.getElementById('credits-modal-overlay');
    if (overlay) overlay.remove();
    this.isCreditsOpen = false;
  }

  /**
   * Song Selection Screen inspired by osu! with Resenha Music visual identity
   */
  public showSongSelectScreen(beatmaps: Beatmap[], defaultSelected?: Beatmap): void {
    this.isMainMenuOpen = false;
    this.beatmapsList = beatmaps;
    if (defaultSelected) {
      this.selectedBeatmap = defaultSelected;
    } else if (!this.selectedBeatmap && beatmaps.length > 0) {
      this.selectedBeatmap = beatmaps[0];
    }

    this.renderSongSelectDOM();
    if (this.selectedBeatmap) {
      this.handlers.onSelectSong(this.selectedBeatmap);
    }
  }

  private renderSongSelectDOM(): void {
    if (!this.selectedBeatmap && this.beatmapsList.length > 0) {
      this.selectedBeatmap = this.beatmapsList[0];
    }

    const current = this.selectedBeatmap!;
    const badgeText = this.getModsBadgeText();

    const effectiveRadius = current.circleRadius;
    const effectiveAR = this.activeMods.easy
      ? Math.round(current.approachTimeMs * 1.45)
      : current.approachTimeMs;

    this.container.innerHTML = `
      <div class="song-select-container animate-pop" id="song-select-view">
        <!-- Top Navigation Bar -->
        <header class="select-header">
          <button id="btn-back-menu" class="btn-nav">
            ◀ MENU PRINCIPAL
          </button>
          <div class="select-header-title">
            <h2>SELEÇÃO DE MÚSICAS</h2>
            <span>Escolha um beatmap ou use as setas ↑ ↓ e ENTER</span>
          </div>
          <div class="select-header-actions">
            <button id="btn-mods-header" class="btn-mods ${badgeText ? 'has-active-mods' : ''}">
              <svg class="mods-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="8" x2="21" y2="8"></line>
                <line x1="3" y1="16" x2="21" y2="16"></line>
                <circle cx="8" cy="8" r="3" fill="currentColor"></circle>
                <circle cx="16" cy="16" r="3" fill="currentColor"></circle>
              </svg>
              <span>MODS</span>
              <span class="mods-btn-badge ${badgeText ? 'visible' : ''}" id="mods-btn-badge">${badgeText}</span>
            </button>
          </div>
        </header>

        <!-- Main Content Grid -->
        <main class="select-content">
          <!-- Left: Vertical Song List -->
          <section class="song-list-panel" id="song-list">
            ${this.beatmapsList
              .map((map) => {
                const isSelected = map.id === current.id;
                const starColor = map.difficultyStars >= 4.0 ? 'star-insane' : 'star-normal';

                return `
                  <article class="song-card ${isSelected ? 'active' : ''}" data-id="${map.id}">
                    <div class="song-card-accent"></div>
                    <div class="song-card-thumb-wrap">
                      <img src="${map.coverUrl || './logo-resenha.png'}" alt="${map.title}" class="song-card-thumb" loading="lazy" />
                    </div>
                    <div class="song-card-info">
                      <h3 class="song-card-title">${map.title}</h3>
                      <p class="song-card-artist">${map.artist}</p>
                      <div class="song-card-meta">
                        <span class="meta-tag ${starColor}">★ ${map.difficultyStars.toFixed(1)} ${map.difficultyName}</span>
                        <span class="meta-tag">⚡ ${map.bpm} BPM</span>
                        <span class="meta-tag">⏱️ ${map.durationFormatted}</span>
                      </div>
                    </div>
                  </article>
                `;
              })
              .join('')}
          </section>

          <!-- Right: Selected Song Details & Play Action -->
          <section class="song-spotlight-panel">
            <div class="spotlight-card" id="spotlight-card">
              <div class="spotlight-cover-hero">
                <img src="${current.coverUrl || './logo-resenha.png'}" alt="${current.title}" class="spotlight-cover-img" id="spotlight-banner-img" />
                <div class="spotlight-cover-overlay"></div>
                <div class="spotlight-cover-info">
                  <span class="spotlight-badge">BEATMAP SELECIONADO</span>
                  <h1 class="spotlight-title" id="spotlight-title">${current.title}</h1>
                  <p class="spotlight-artist" id="spotlight-artist">${current.artist}</p>
                </div>
              </div>

              <div class="spotlight-stats">
                <div class="spotlight-stat-item">
                  <span class="label">Dificuldade</span>
                  <span class="value highlight-gold" id="spotlight-diff">★ ${current.difficultyStars.toFixed(1)} (${current.difficultyName})</span>
                </div>
                <div class="spotlight-stat-item">
                  <span class="label">Tempo / Ritmo</span>
                  <span class="value highlight-cyan" id="spotlight-bpm">${current.bpm} BPM</span>
                </div>
                <div class="spotlight-stat-item">
                  <span class="label">Duração</span>
                  <span class="value" id="spotlight-duration">${current.durationFormatted}</span>
                </div>
                <div class="spotlight-stat-item">
                  <span class="label">Total de Objetos</span>
                  <span class="value" id="spotlight-notes">${current.notes.length} notas / sliders</span>
                </div>
              </div>

              <details class="spotlight-tech-details" id="spotlight-tech-details">
                <summary class="spotlight-tech-summary">
                  <span class="tech-summary-left">⚙️ Parâmetros Técnicos (CS / AR / Áudio)</span>
                  <span class="tech-summary-arrow">▾</span>
                </summary>
                <div class="spotlight-map-info" id="spotlight-map-info">
                  <div class="map-param">
                    <span>Tamanho Círculo (CS):</span>
                    <strong id="spotlight-cs">${effectiveRadius} px</strong>
                  </div>
                  <div class="map-param">
                    <span>Janela Aproximação (AR):</span>
                    <strong id="spotlight-ar">${effectiveAR} ms ${this.activeMods.easy ? '<span class="easy-mod-indicator">(EASY RITMO SUAVE)</span>' : ''}</strong>
                  </div>
                  <div class="map-param">
                    <span>Áudio:</span>
                    <strong id="spotlight-audio">${current.audioSourceType === 'file' ? 'Arquivo MP3' : 'Sintetizador Procedural'}</strong>
                  </div>
                </div>
              </details>

              <!-- Local Leaderboard Panel -->
              <div class="spotlight-ranking-panel" id="spotlight-ranking-panel">
                ${this.renderRankingSection(current.id)}
              </div>

              <div class="spotlight-actions">
                <button id="btn-start-song" class="btn-primary btn-play-song">
                  ▶ JOGAR BEATMAP <kbd>ENTER</kbd>
                </button>
                <button id="btn-mods-spotlight" class="btn-secondary btn-mods-spotlight ${badgeText ? 'has-active-mods' : ''}">
                  <svg class="mods-btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="8" x2="21" y2="8"></line>
                    <line x1="3" y1="16" x2="21" y2="16"></line>
                    <circle cx="8" cy="8" r="3" fill="currentColor"></circle>
                    <circle cx="16" cy="16" r="3" fill="currentColor"></circle>
                  </svg>
                  <span>MODS <kbd>F1</kbd></span>
                  <span class="mods-btn-badge ${badgeText ? 'visible' : ''}" id="mods-spotlight-badge">${badgeText}</span>
                </button>
              </div>
            </div>
          </section>
        </main>

        <!-- Bottom Notice Bar (Aviso de Conteúdo) -->
        <footer class="song-select-notice-bar" aria-label="Aviso de Conteúdo">
          <div class="select-notice-content">
            <span class="select-notice-tag">⚠️ AVISO DE CONTEÚDO:</span>
            <span class="select-notice-text">Algumas músicas podem conter linguagem explícita e conteúdo humorístico. As composições possuem caráter recreativo e não representam posicionamentos oficiais da instituição de ensino.</span>
          </div>
        </footer>
      </div>
    `;

    document.getElementById('btn-back-menu')?.addEventListener('click', () => {
      this.handlers.onBackToMainMenu();
    });

    document.getElementById('btn-start-song')?.addEventListener('click', () => {
      if (this.selectedBeatmap) {
        this.handlers.onPlaySong(this.selectedBeatmap);
      }
    });

    document.getElementById('btn-mods-header')?.addEventListener('click', () => {
      this.openModsModal();
    });

    document.getElementById('btn-mods-spotlight')?.addEventListener('click', () => {
      this.openModsModal();
    });

    this.attachRankingEvents();

    const cards = document.querySelectorAll('.song-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        const found = this.beatmapsList.find((b) => b.id === id);
        if (found) {
          this.changeSelectedSong(found);
        }
      });
    });

    // Ensure the currently active card is visible in the scrollable panel upon entering
    const scheduleNextFrame = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb: () => void) => setTimeout(cb, 0);

    scheduleNextFrame(() => {
      const activeCard = (typeof this.container?.querySelector === 'function'
        ? this.container.querySelector('.song-card.active')
        : (typeof document !== 'undefined' && typeof document.querySelector === 'function'
            ? document.querySelector('.song-card.active')
            : null)) as HTMLElement | null;
      if (activeCard && typeof activeCard.scrollIntoView === 'function') {
        activeCard.scrollIntoView({ block: 'nearest', behavior: 'auto' });
      }
    });
  }

  private changeSelectedSong(beatmap: Beatmap): void {
    if (this.selectedBeatmap?.id === beatmap.id) return;
    this.selectedBeatmap = beatmap;

    const cards = document.querySelectorAll('.song-card');
    cards.forEach((card) => {
      const isTarget = card.getAttribute('data-id') === beatmap.id;
      if (isTarget) {
        card.classList.add('active');
        if (typeof card.scrollIntoView === 'function') {
          card.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
      } else {
        card.classList.remove('active');
      }
    });

    const titleEl = document.getElementById('spotlight-title');
    const artistEl = document.getElementById('spotlight-artist');
    const diffEl = document.getElementById('spotlight-diff');
    const bpmEl = document.getElementById('spotlight-bpm');
    const durationEl = document.getElementById('spotlight-duration');
    const notesEl = document.getElementById('spotlight-notes');
    const audioEl = document.getElementById('spotlight-audio');

    const bannerImg = document.getElementById('spotlight-banner-img') as HTMLImageElement | null;
    if (bannerImg) {
      bannerImg.src = beatmap.coverUrl || './logo-resenha.png';
      bannerImg.alt = beatmap.title;
    }

    if (titleEl) titleEl.textContent = beatmap.title;
    if (artistEl) artistEl.textContent = beatmap.artist;
    if (diffEl) {
      diffEl.textContent = `★ ${beatmap.difficultyStars.toFixed(1)} (${beatmap.difficultyName})`;
    }
    if (bpmEl) bpmEl.textContent = `${beatmap.bpm} BPM`;
    if (durationEl) durationEl.textContent = beatmap.durationFormatted;
    if (notesEl) notesEl.textContent = `${beatmap.notes.length} notas / sliders`;
    if (audioEl) {
      audioEl.textContent =
        beatmap.audioSourceType === 'file' ? 'Arquivo MP3' : 'Sintetizador Procedural';
    }

    this.updateSpotlightMapInfo();
    this.updateRankingSection(beatmap.id);
    this.handlers.onSelectSong(beatmap);
  }

  private getScoresForBeatmap(beatmapId: string): ScoreRecord[] {
    return this.handlers.getBeatmapScores?.(beatmapId) ?? [];
  }

  private renderRankingSection(beatmapId: string): string {
    const allScores = this.getScoresForBeatmap(beatmapId);
    const compScores = allScores.filter((r) => !r.mods?.autoPilot && !r.mods?.relax);
    const assistedScores = allScores.filter((r) => r.mods?.autoPilot || r.mods?.relax);

    const activeList = this.rankingCategoryTab === 'assisted' ? assistedScores : compScores;
    const topScores = activeList.slice(0, 3);

    const gradeColors: Record<string, string> = {
      SS: '#ffd700',
      S: '#00f0ff',
      A: '#00ff88',
      B: '#3b82f6',
      C: '#a855f7',
      D: '#ef4444',
    };

    if (allScores.length === 0) {
      return `
        <div class="ranking-header-bar">
          <div class="ranking-title-group">
            <span class="ranking-icon">🏆</span>
            <span class="ranking-heading">RANKING LOCAL</span>
          </div>
        </div>
        <div class="ranking-empty-state">
          <span class="empty-trophy">🎮</span>
          <div class="empty-texts">
            <span class="empty-main">Nenhum recorde registrado ainda</span>
            <span class="empty-sub">Jogue esta música para cravar sua pontuação no topo do ranking!</span>
          </div>
        </div>
      `;
    }

    return `
      <div class="ranking-header-bar">
        <div class="ranking-title-group">
          <span class="ranking-icon">🏆</span>
          <span class="ranking-heading">RANKING</span>
          <div class="ranking-category-tabs">
            <button type="button" class="rank-tab-btn ${this.rankingCategoryTab === 'competitive' ? 'active' : ''}" id="tab-rank-comp" data-cat="competitive">Competitivo (${compScores.length})</button>
            <button type="button" class="rank-tab-btn ${this.rankingCategoryTab === 'assisted' ? 'active' : ''}" id="tab-rank-assisted" data-cat="assisted">Assistido (${assistedScores.length})</button>
          </div>
        </div>
        <button id="btn-view-all-records" class="btn-all-records" type="button" title="Ver histórico completo de recordes">
          <span>Ver todos os recordes</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M7 17l9.2-9.2M17 17V8H8"/>
          </svg>
        </button>
      </div>

      ${
        activeList.length === 0
          ? `
        <div class="ranking-empty-state ranking-empty-compact">
          <span class="empty-trophy">🎯</span>
          <div class="empty-texts">
            <span class="empty-main">Nenhum recorde ${this.rankingCategoryTab === 'assisted' ? 'assistido' : 'competitivo'}</span>
            <span class="empty-sub">Jogue com ${this.rankingCategoryTab === 'assisted' ? 'Autopilot (AP) ou Relax (RX)' : 'as regras padrão'} para pontuar aqui.</span>
          </div>
        </div>
      `
          : `
      <div class="ranking-scores-mini-list">
        ${topScores
          .map((rec, idx) => {
            const pos = idx + 1;
            const isTop1 = pos === 1;
            const posClass = pos === 1 ? 'pos-gold' : pos === 2 ? 'pos-silver' : 'pos-bronze';
            const gradeColor = gradeColors[rec.grade] || '#00f0ff';
            const hasEz = Boolean(rec.mods?.easy);
            const hasAp = Boolean(rec.mods?.autoPilot);
            const hasRx = Boolean(rec.mods?.relax);

            return `
              <div class="ranking-mini-row ${isTop1 ? 'is-best-record' : ''}">
                <div class="rank-pos-col ${posClass}">#${pos}</div>
                <div class="rank-grade-badge" style="border-color: ${gradeColor}; color: ${gradeColor}; text-shadow: 0 0 10px ${gradeColor}80;">
                  ${rec.grade}
                </div>
                <div class="rank-player-col">
                  <div class="rank-player-name-line">
                    <span class="rank-player-name">${rec.playerName}</span>
                    ${hasEz ? '<span class="badge-ez-mod">EZ</span>' : ''}
                    ${hasAp ? '<span class="badge-ap-mod">AP</span>' : ''}
                    ${hasRx ? '<span class="badge-rx-mod">RX</span>' : ''}
                  </div>
                  <span class="rank-timestamp">${rec.dateFormatted || ''}</span>
                </div>
                <div class="rank-score-col">
                  <span class="rank-score-val">${rec.score.toLocaleString()}</span>
                  <div class="rank-sub-details">
                    <span class="rank-acc-val">${rec.accuracy.toFixed(1)}%</span>
                    <span class="rank-combo-val">${rec.maxCombo}x</span>
                  </div>
                </div>
              </div>
            `;
          })
          .join('')}
      </div>
      `
      }
    `;
  }

  private attachRankingEvents(): void {
    document.getElementById('tab-rank-comp')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.rankingCategoryTab = 'competitive';
      if (this.selectedBeatmap) {
        this.updateRankingSection(this.selectedBeatmap.id);
      }
    });

    document.getElementById('tab-rank-assisted')?.addEventListener('click', (e) => {
      e.stopPropagation();
      this.rankingCategoryTab = 'assisted';
      if (this.selectedBeatmap) {
        this.updateRankingSection(this.selectedBeatmap.id);
      }
    });

    const btn = document.getElementById('btn-view-all-records');
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.selectedBeatmap) {
        this.openAllRecordsModal(this.selectedBeatmap);
      }
    });
  }

  private updateRankingSection(beatmapId: string): void {
    const container = document.getElementById('spotlight-ranking-panel');
    if (container) {
      container.innerHTML = this.renderRankingSection(beatmapId);
      this.attachRankingEvents();
    }
  }

  public openAllRecordsModal(beatmap: Beatmap): void {
    if (this.isRecordsModalOpen) return;
    this.isRecordsModalOpen = true;

    const scores = this.getScoresForBeatmap(beatmap.id);
    const gradeColors: Record<string, string> = {
      SS: '#ffd700',
      S: '#00f0ff',
      A: '#00ff88',
      B: '#3b82f6',
      C: '#a855f7',
      D: '#ef4444',
    };

    const modalEl = document.createElement('div');
    modalEl.id = 'records-modal-backdrop';
    modalEl.className = 'modal-backdrop';

    modalEl.innerHTML = `
      <div class="menu-card animate-pop records-modal-card">
        <div class="records-modal-header">
          <div class="records-modal-titles">
            <span class="records-modal-badge">HISTÓRICO COMPLETO</span>
            <h2 class="records-modal-title">🏆 Ranking Local: ${beatmap.title}</h2>
            <p class="records-modal-artist">${beatmap.artist} • ★ ${beatmap.difficultyStars.toFixed(1)} ${beatmap.difficultyName}</p>
          </div>
          <button id="btn-close-records-modal" class="btn-close-modal" aria-label="Fechar modal">✕</button>
        </div>

        <div class="records-modal-body">
          ${scores.length === 0 ? `
            <div class="ranking-empty-state large-empty">
              <span class="empty-trophy">🎮</span>
              <p class="empty-main">Nenhum recorde registrado para este beatmap.</p>
              <span class="empty-sub">Jogue esta música sem Autoplay para registrar sua pontuação!</span>
            </div>
          ` : `
            <div class="records-table-container">
              <table class="records-table">
                <thead>
                  <tr>
                    <th class="th-pos">#</th>
                    <th class="th-grade">Rank</th>
                    <th class="th-player">Jogador</th>
                    <th class="th-mods">Mods</th>
                    <th class="th-score">Pontuação</th>
                    <th class="th-acc">Precisão</th>
                    <th class="th-combo">Max Combo</th>
                    <th class="th-judgements">Julgamento (300/100/50/X)</th>
                    <th class="th-date">Data / Hora</th>
                  </tr>
                </thead>
                <tbody>
                  ${scores.map((rec, idx) => {
                    const pos = idx + 1;
                    const isTop1 = pos === 1;
                    const posClass = pos === 1 ? 'pos-gold' : pos === 2 ? 'pos-silver' : pos === 3 ? 'pos-bronze' : '';
                    const gradeColor = gradeColors[rec.grade] || '#00f0ff';

                    return `
                      <tr class="${isTop1 ? 'tr-top-1' : ''}">
                        <td class="td-pos ${posClass}">#${pos}</td>
                        <td class="td-grade">
                          <span class="table-grade-badge" style="border-color: ${gradeColor}; color: ${gradeColor};">${rec.grade}</span>
                        </td>
                        <td class="td-player"><strong>${rec.playerName}</strong></td>
                        <td class="td-mods">
                          ${[
                            rec.mods?.easy ? '<span class="badge-ez-mod">EZ</span>' : '',
                            rec.mods?.autoPilot ? '<span class="badge-ap-mod">AP</span>' : '',
                            rec.mods?.relax ? '<span class="badge-rx-mod">RX</span>' : '',
                          ].filter(Boolean).join(' ') || '<span class="no-mods-label">—</span>'}
                        </td>
                        <td class="td-score highlight-score">${rec.score.toLocaleString()}</td>
                        <td class="td-acc highlight-cyan">${rec.accuracy.toFixed(2)}%</td>
                        <td class="td-combo highlight-gold">${rec.maxCombo}x</td>
                        <td class="td-judgements">
                          <span class="j-count-300">${rec.counts[300]}</span> /
                          <span class="j-count-100">${rec.counts[100]}</span> /
                          <span class="j-count-50">${rec.counts[50]}</span> /
                          <span class="j-count-miss">${rec.counts.miss}</span>
                        </td>
                        <td class="td-date">${rec.dateFormatted}</td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <div class="records-modal-footer">
          <span class="records-count-info">${scores.length} ${scores.length === 1 ? 'recorde registrado' : 'recordes registrados'}</span>
          <button id="btn-close-records-footer" class="btn-secondary">FECHAR <kbd>ESC</kbd></button>
        </div>
      </div>
    `;

    this.container.appendChild(modalEl);

    const close = () => this.closeAllRecordsModal();
    modalEl.querySelector('#btn-close-records-modal')?.addEventListener('click', close);
    modalEl.querySelector('#btn-close-records-footer')?.addEventListener('click', close);
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) close();
    });
  }

  public closeAllRecordsModal(): void {
    if (!this.isRecordsModalOpen) return;
    this.isRecordsModalOpen = false;
    document.getElementById('records-modal-backdrop')?.remove();
  }

  private updateSpotlightMapInfo(): void {
    if (!this.selectedBeatmap) return;
    const current = this.selectedBeatmap;
    const csEl = document.getElementById('spotlight-cs');
    const arEl = document.getElementById('spotlight-ar');

    const effectiveRadius = current.circleRadius;
    const effectiveAR = this.activeMods.easy
      ? Math.round(current.approachTimeMs * 1.45)
      : current.approachTimeMs;

    if (csEl) {
      csEl.innerHTML = `${effectiveRadius} px`;
    }
    if (arEl) {
      arEl.innerHTML = `${effectiveAR} ms ${this.activeMods.easy ? '<span class="easy-mod-indicator">(EASY RITMO SUAVE)</span>' : ''}`;
    }
  }

  private getModsBadgeText(): string {
    const list: string[] = [];
    if (this.activeMods.autoPlay) list.push('AUTO');
    if (this.activeMods.autoPilot) list.push('AP');
    if (this.activeMods.relax) list.push('RX');
    if (this.activeMods.easy) list.push('EZ');
    return list.join(' + ');
  }

  private updateModsBadges(): void {
    const text = this.getModsBadgeText();
    const headerBtn = document.getElementById('btn-mods-header');
    const headerBadge = document.getElementById('mods-btn-badge');
    const spotBtn = document.getElementById('btn-mods-spotlight');
    const spotBadge = document.getElementById('mods-spotlight-badge');

    if (headerBtn) {
      headerBtn.classList.toggle('has-active-mods', Boolean(text));
    }
    if (headerBadge) {
      headerBadge.textContent = text;
      headerBadge.classList.toggle('visible', Boolean(text));
    }
    if (spotBtn) {
      spotBtn.classList.toggle('has-active-mods', Boolean(text));
    }
    if (spotBadge) {
      spotBadge.textContent = text;
      spotBadge.classList.toggle('visible', Boolean(text));
    }
  }

  /**
   * MODS Modal dialog
   */
  public openModsModal(): void {
    if (this.isModsModalOpen) return;
    this.isModsModalOpen = true;

    const overlay = document.createElement('div');
    overlay.id = 'mods-modal-overlay';
    overlay.className = 'modal-backdrop mods-modal-backdrop';
    overlay.innerHTML = this.getModsModalHTML();
    this.container.appendChild(overlay);

    this.attachModsModalEvents(overlay);
  }

  public closeModsModal(): void {
    const overlay = document.getElementById('mods-modal-overlay');
    if (overlay) {
      overlay.remove();
    }
    this.isModsModalOpen = false;
  }

  private getModsModalHTML(): string {
    return `
      <div class="mods-dialog animate-pop" id="mods-dialog" role="dialog" aria-modal="true">
        <!-- Dialog Header -->
        <div class="mods-dialog-header">
          <div class="mods-title-group">
            <div class="mods-title-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="8" x2="21" y2="8"></line>
                <line x1="3" y1="16" x2="21" y2="16"></line>
                <circle cx="8" cy="8" r="3" fill="#00f0ff"></circle>
                <circle cx="16" cy="16" r="3" fill="#00f0ff"></circle>
              </svg>
            </div>
            <div class="mods-title-texts">
              <h2 class="mods-title">MODS</h2>
              <p class="mods-subtitle">Personalize sua experiência</p>
            </div>
          </div>
          <div class="mods-header-right">
            <span class="mods-brand-badge">RESENHA MUSIC</span>
            <button id="btn-close-mods" class="mods-close-btn" aria-label="Fechar" title="Fechar">✕</button>
          </div>
        </div>

        <!-- Mods Cards List -->
        <div class="mods-list">
          <!-- 1. Auto Play -->
          <div class="mod-card mod-card-autoplay ${this.activeMods.autoPlay ? 'active' : ''}" id="mod-card-autoplay" role="button" tabindex="0">
            <div class="mod-icon-wrapper mod-icon-autoplay">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="10" width="18" height="11" rx="3"></rect>
                <circle cx="8.5" cy="15.5" r="1.5" fill="#00f0ff"></circle>
                <circle cx="15.5" cy="15.5" r="1.5" fill="#00f0ff"></circle>
                <path d="M12 2v4"></path>
                <path d="M8 2h8"></path>
                <line x1="9" y1="19" x2="15" y2="19"></line>
              </svg>
            </div>
            <div class="mod-info">
              <h3 class="mod-name">Auto Play</h3>
              <p class="mod-desc">Assista ao jogo jogando sozinho (sem pontuação)</p>
            </div>
            <div class="mod-toggle-indicator" id="indicator-autoplay">
              ${this.renderCheckboxIcon(this.activeMods.autoPlay)}
            </div>
          </div>

          <!-- 2. Autopilot (AP) -->
          <div class="mod-card mod-card-autopilot ${this.activeMods.autoPilot ? 'active' : ''}" id="mod-card-autopilot" role="button" tabindex="0">
            <div class="mod-icon-wrapper mod-icon-autopilot">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00f0ff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3l7 18 3-7 7-3L3 3z"></path>
              </svg>
            </div>
            <div class="mod-info">
              <h3 class="mod-name">Autopilot <span class="mod-tag-pill tag-ap">AP</span></h3>
              <p class="mod-desc">O cursor mira automaticamente; você aperta Z e X no ritmo</p>
            </div>
            <div class="mod-toggle-indicator" id="indicator-autopilot">
              ${this.renderCheckboxIcon(this.activeMods.autoPilot)}
            </div>
          </div>

          <!-- 3. Relax (RX) -->
          <div class="mod-card mod-card-relax ${this.activeMods.relax ? 'active' : ''}" id="mod-card-relax" role="button" tabindex="0">
            <div class="mod-icon-wrapper mod-icon-relax">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div class="mod-info">
              <h3 class="mod-name">Relax <span class="mod-tag-pill tag-rx">RX</span></h3>
              <p class="mod-desc">Você controla a mira; cliques executados no timing certo</p>
            </div>
            <div class="mod-toggle-indicator" id="indicator-relax">
              ${this.renderCheckboxIcon(this.activeMods.relax)}
            </div>
          </div>

          <!-- 4. Easy (EZ) -->
          <div class="mod-card mod-card-easy ${this.activeMods.easy ? 'active' : ''}" id="mod-card-easy" role="button" tabindex="0">
            <div class="mod-icon-wrapper mod-icon-easy">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d946ef" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div class="mod-info">
              <h3 class="mod-name">Easy <span class="mod-tag-pill tag-ez">EZ</span></h3>
              <p class="mod-desc">Botões normais, ritmo simplificado e leitura suave</p>
            </div>
            <div class="mod-toggle-indicator" id="indicator-easy">
              ${this.renderCheckboxIcon(this.activeMods.easy)}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private renderCheckboxIcon(checked: boolean): string {
    if (checked) {
      return `
        <div class="mod-indicator-circle checked">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
          </svg>
        </div>
      `;
    }
    return `<div class="mod-indicator-circle unchecked"></div>`;
  }

  private attachModsModalEvents(overlay: HTMLElement): void {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        this.closeModsModal();
      }
    });

    document.getElementById('btn-close-mods')?.addEventListener('click', () => {
      this.closeModsModal();
    });

    const refreshModCardsUI = () => {
      const list = [
        { id: 'autoplay', active: this.activeMods.autoPlay },
        { id: 'autopilot', active: this.activeMods.autoPilot },
        { id: 'relax', active: this.activeMods.relax },
        { id: 'easy', active: this.activeMods.easy },
      ];
      for (const item of list) {
        const cardEl = document.getElementById(`mod-card-${item.id}`);
        const indicatorEl = document.getElementById(`indicator-${item.id}`);
        if (cardEl) cardEl.classList.toggle('active', item.active);
        if (indicatorEl) indicatorEl.innerHTML = this.renderCheckboxIcon(item.active);
      }
      this.updateModsBadges();
      this.updateSpotlightMapInfo();
      this.handlers.onModsChange?.(this.activeMods);
    };

    // Mutual exclusivity: Autoplay, Autopilot, and Relax cannot be combined with each other!
    const autoplayCard = document.getElementById('mod-card-autoplay');
    autoplayCard?.addEventListener('click', () => {
      this.activeMods.autoPlay = !this.activeMods.autoPlay;
      if (this.activeMods.autoPlay) {
        this.activeMods.autoPilot = false;
        this.activeMods.relax = false;
      }
      refreshModCardsUI();
    });

    const autopilotCard = document.getElementById('mod-card-autopilot');
    autopilotCard?.addEventListener('click', () => {
      this.activeMods.autoPilot = !this.activeMods.autoPilot;
      if (this.activeMods.autoPilot) {
        this.activeMods.autoPlay = false;
        this.activeMods.relax = false;
      }
      refreshModCardsUI();
    });

    const relaxCard = document.getElementById('mod-card-relax');
    relaxCard?.addEventListener('click', () => {
      this.activeMods.relax = !this.activeMods.relax;
      if (this.activeMods.relax) {
        this.activeMods.autoPlay = false;
        this.activeMods.autoPilot = false;
      }
      refreshModCardsUI();
    });

    // Easy mod can combine freely with unassisted, AP, or RX
    const easyCard = document.getElementById('mod-card-easy');
    easyCard?.addEventListener('click', () => {
      this.activeMods.easy = !this.activeMods.easy;
      refreshModCardsUI();
    });
  }

  /**
   * Pause Menu
   */
  public showPauseScreen(): void {
    this.isMainMenuOpen = false;
    this.container.innerHTML = `
      <div class="modal-backdrop">
        <div class="menu-card animate-pop pause-card">
          <h2 class="pause-title">PAUSADO</h2>
          <p class="pause-hint">Pressione <kbd>ESC</kbd> para continuar</p>

          <div class="pause-actions">
            <button id="btn-resume" class="btn-primary">
              ▶ CONTINUAR
            </button>
            <button id="btn-restart" class="btn-secondary">
              🔄 REINICIAR MAPA
            </button>
            <button id="btn-song-select" class="btn-secondary">
              📋 SELEÇÃO DE MÚSICAS
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-resume')?.addEventListener('click', () => {
      this.handlers.onResume();
    });

    document.getElementById('btn-restart')?.addEventListener('click', () => {
      this.handlers.onRestart();
    });

    document.getElementById('btn-song-select')?.addEventListener('click', () => {
      this.handlers.onReturnToSongSelect();
    });
  }

  /**
   * Results Screen with Mods badges and Autoplay Demo warning
   */
  public showResultsScreen(
    stats: GameStats,
    grade: string,
    beatmap: Beatmap,
    mods?: ActiveMods
  ): void {
    this.isMainMenuOpen = false;
    const gradeColors: Record<string, string> = {
      SS: '#ffd700',
      S: '#00f0ff',
      A: '#00ff88',
      B: '#3b82f6',
      C: '#a855f7',
      D: '#ef4444',
    };

    const color = gradeColors[grade] || '#ffffff';
    const effectiveMods = mods || this.activeMods;

    this.container.innerHTML = `
      <div class="modal-backdrop">
        <div class="menu-card animate-pop results-card">
          <div class="results-header">
            <span class="logo-sub">${beatmap.title} • ${beatmap.artist}</span>
            <h2 class="results-title">RESULTADOS</h2>

            ${
              effectiveMods.autoPlay || effectiveMods.autoPilot || effectiveMods.relax || effectiveMods.easy
                ? `
              <div class="results-mods-row">
                ${effectiveMods.autoPlay ? '<span class="result-mod-badge mod-badge-autoplay">🤖 AUTO PLAY</span>' : ''}
                ${effectiveMods.autoPilot ? '<span class="result-mod-badge mod-badge-autopilot">🎯 AUTOPILOT</span>' : ''}
                ${effectiveMods.relax ? '<span class="result-mod-badge mod-badge-relax">☕ RELAX</span>' : ''}
                ${effectiveMods.easy ? '<span class="result-mod-badge mod-badge-easy">❤️ EASY</span>' : ''}
              </div>
            `
                : ''
            }
          </div>

          <div class="results-body">
            <div class="grade-badge" style="border-color: ${color}; color: ${color}; text-shadow: 0 0 25px ${color};">
              ${grade}
            </div>

            <div class="stats-grid">
              <div class="stat-box">
                <span class="stat-label">Pontuação</span>
                <span class="stat-value">${stats.score.toLocaleString()}</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">Precisão</span>
                <span class="stat-value highlight-cyan">${stats.accuracy.toFixed(2)}%</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">Combo Máximo</span>
                <span class="stat-value highlight-gold">${stats.maxCombo}x</span>
              </div>
              <div class="stat-box">
                <span class="stat-label">Total Notas</span>
                <span class="stat-value">${stats.totalHits}</span>
              </div>
            </div>

            <div class="judgement-breakdown">
              <div class="judgement-chip c300">
                <span class="j-count">${stats.counts[300]}</span>
                <span class="j-label">300</span>
              </div>
              <div class="judgement-chip c100">
                <span class="j-count">${stats.counts[100]}</span>
                <span class="j-label">100</span>
              </div>
              <div class="judgement-chip c50">
                <span class="j-count">${stats.counts[50]}</span>
                <span class="j-label">50</span>
              </div>
              <div class="judgement-chip cmiss">
                <span class="j-count">${stats.counts.miss}</span>
                <span class="j-label">MISS</span>
              </div>
            </div>

            ${
              effectiveMods.autoPlay
                ? `
              <div class="autoplay-demo-banner">
                <span class="demo-icon">🤖</span>
                <div class="demo-banner-text">
                  <strong>Modo Demonstração (Auto Play)</strong>
                  <span>Partida não elegível para o ranking local competitivo.</span>
                </div>
              </div>
            `
                : (effectiveMods.autoPilot || effectiveMods.relax)
                ? `
              <div class="leaderboard-saved-banner assisted-banner">
                <span class="saved-icon">🎮</span>
                <div class="saved-banner-text">
                  <strong>Partida Assistida Registrada!</strong>
                  <span>Pontuação salva na categoria de recordes assistidos (${[effectiveMods.autoPilot ? 'AP' : '', effectiveMods.relax ? 'RX' : ''].filter(Boolean).join(' + ')}).</span>
                </div>
              </div>
            `
                : `
              <div class="leaderboard-saved-banner">
                <span class="saved-icon">🏆</span>
                <div class="saved-banner-text">
                  <strong>Pontuação Registrada!</strong>
                  <span>Seu resultado foi salvo com sucesso no ranking local competitivo.</span>
                </div>
              </div>
            `
            }
          </div>

          <div class="results-actions">
            <button id="btn-replay" class="btn-primary">
              🔄 JOGAR NOVAMENTE
            </button>
            <button id="btn-goto-select-from-results" class="btn-secondary">
              📋 SELEÇÃO DE MÚSICAS
            </button>
          </div>
        </div>
      </div>
    `;

    document.getElementById('btn-replay')?.addEventListener('click', () => {
      this.handlers.onRestart();
    });

    document.getElementById('btn-goto-select-from-results')?.addEventListener('click', () => {
      this.handlers.onReturnToSongSelect();
    });
  }

  public hide(): void {
    this.isMainMenuOpen = false;
    this.isModsModalOpen = false;
    this.isSettingsOpen = false;
    this.isCreditsOpen = false;
    this.isRecordsModalOpen = false;
    this.container.innerHTML = '';
  }
}
