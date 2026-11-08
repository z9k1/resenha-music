import type { Beatmap } from '../types/index.ts';
import { SoundSynthesizer } from './SoundSynthesizer.ts';

export type AudioMode = 'synth' | 'metronome';

export class AudioEngine {
  private ctx: AudioContext | null = null;
  private synthesizer: SoundSynthesizer | null = null;

  // Cached AudioBuffers
  private synthTrackBuffer: AudioBuffer | null = null;
  private metronomeTrackBuffer: AudioBuffer | null = null;
  private hitsoundBuffer: AudioBuffer | null = null;
  private missSoundBuffer: AudioBuffer | null = null;
  private sliderTickBuffer: AudioBuffer | null = null;
  private audioBufferCache: Map<string, AudioBuffer> = new Map();

  // Active playback nodes
  private activeSource: AudioBufferSourceNode | null = null;
  private previewSource: AudioBufferSourceNode | null = null;
  private previewGain: GainNode | null = null;
  private currentPreviewRequestId: number = 0;
  private currentPreviewBeatmapId: string | null = null;


  private masterGain: GainNode | null = null;
  private sfxGain: GainNode | null = null;
  private musicGain: GainNode | null = null;

  private masterVolume: number = 0.70;
  private musicVolume: number = 0.35;
  private sfxVolume: number = 0.65;

  // State
  private isStarted: boolean = false;
  private isPausedState: boolean = false;
  private startCtxTime: number = 0;
  private pausedOffsetMs: number = 0;
  private durationMs: number = 0;

  private currentBuffer: AudioBuffer | null = null;
  private currentMode: AudioMode = 'synth';
  private currentBeatmap: Beatmap | null = null;

  constructor() {
    this.loadSavedVolumes();
  }

  private loadSavedVolumes(): void {
    try {
      const hasUpdated = localStorage.getItem('resenha_volume_updated');
      if (!hasUpdated) {
        // Lower default music volume to comfortable levels and persist
        this.masterVolume = 0.70;
        this.musicVolume = 0.35;
        this.sfxVolume = 0.65;
        localStorage.setItem('resenha_master_vol', '0.70');
        localStorage.setItem('resenha_music_vol', '0.35');
        localStorage.setItem('resenha_sfx_vol', '0.65');
        localStorage.setItem('resenha_volume_updated', '1');
        return;
      }

      const savedMaster = localStorage.getItem('resenha_master_vol');
      if (savedMaster !== null) {
        const val = parseFloat(savedMaster);
        if (!isNaN(val)) this.masterVolume = Math.min(1, Math.max(0, val));
      }
      const savedMusic = localStorage.getItem('resenha_music_vol');
      if (savedMusic !== null) {
        const val = parseFloat(savedMusic);
        if (!isNaN(val)) this.musicVolume = Math.min(1, Math.max(0, val));
      }
      const savedSfx = localStorage.getItem('resenha_sfx_vol');
      if (savedSfx !== null) {
        const val = parseFloat(savedSfx);
        if (!isNaN(val)) this.sfxVolume = Math.min(1, Math.max(0, val));
      }
    } catch {
      // LocalStorage access restricted or unavailable
    }
  }

  /**
   * Initializes the AudioContext and pre-synthesizes procedural buffers on user gesture
   */
  public async init(): Promise<void> {
    if (!this.ctx) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtxClass();

      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = this.masterVolume;
      this.masterGain.connect(this.ctx.destination);

      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = this.musicVolume;
      this.musicGain.connect(this.masterGain);

      // Route preview through musicGain so it ALWAYS respects musicVolume & masterVolume
      this.previewGain = this.ctx.createGain();
      this.previewGain.gain.value = 1.0;
      this.previewGain.connect(this.musicGain);

      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = this.sfxVolume;
      this.sfxGain.connect(this.masterGain);

      this.synthesizer = new SoundSynthesizer(this.ctx);

      // Pre-synthesize buffers
      this.hitsoundBuffer = this.synthesizer.createHitsoundBuffer();
      this.missSoundBuffer = this.synthesizer.createMissSoundBuffer();
      this.sliderTickBuffer = this.synthesizer.createSliderTickBuffer();
      this.synthTrackBuffer = this.synthesizer.generateSynthTrack(130, 64);
      this.metronomeTrackBuffer = this.synthesizer.generateMetronomeTrack(130, 64);
    }

    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
  }

  /**
   * Loads an audio file into an AudioBuffer with caching and error handling
   */
  public async loadAudioFile(url: string): Promise<AudioBuffer> {
    await this.init();

    if (this.audioBufferCache.has(url)) {
      return this.audioBufferCache.get(url)!;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: Failed to fetch audio file from ${url}`);
      }
      const arrayBuffer = await response.arrayBuffer();
      if (!this.ctx) throw new Error('AudioContext not initialized');

      const decodedBuffer = await this.ctx.decodeAudioData(arrayBuffer);
      this.audioBufferCache.set(url, decodedBuffer);
      return decodedBuffer;
    } catch (err) {
      console.error(`[AudioEngine] Failed to load audio from "${url}":`, err);
      throw err;
    }
  }

  /**
   * Prepares and sets the current beatmap's audio buffer
   */
  public async prepareBeatmapAudio(beatmap: Beatmap): Promise<void> {
    await this.init();
    this.currentBeatmap = beatmap;

    if (beatmap.audioSourceType === 'file' && beatmap.audioUrl) {
      this.currentBuffer = await this.loadAudioFile(beatmap.audioUrl);
      this.durationMs = this.currentBuffer.duration * 1000;
    } else {
      // Procedural synth or metronome
      this.currentBuffer =
        this.currentMode === 'synth' ? this.synthTrackBuffer : this.metronomeTrackBuffer;
      this.durationMs = (beatmap.durationSec || 30) * 1000;
    }
  }

  /**
   * Plays a preview of the beatmap in the song selection screen or menu jukebox.
   * If the exact same beatmap is already playing, it continues seamlessly without restart.
   */
  public async playPreview(beatmap: Beatmap): Promise<void> {
    // If THIS EXACT beatmap is already playing in the background, keep playing seamlessly!
    if (this.currentPreviewBeatmapId === beatmap.id && this.previewSource) {
      return;
    }

    // 1. Stop any currently playing preview node first
    this.stopPreview();

    // 2. Assign a new request ID AFTER stopping previous ones
    const reqId = ++this.currentPreviewRequestId;

    try {
      await this.init();

      let buffer: AudioBuffer | null = null;
      if (beatmap.audioSourceType === 'file' && beatmap.audioUrl) {
        buffer = await this.loadAudioFile(beatmap.audioUrl);
      } else {
        buffer = this.synthTrackBuffer;
      }

      // Check if another song was selected while this buffer was loading
      if (this.currentPreviewRequestId !== reqId) {
        return;
      }

      if (!buffer || !this.ctx || !this.previewGain) return;

      if (this.ctx.state === 'suspended') {
        await this.ctx.resume();
      }

      // Double-check: disconnect any previous preview source
      if (this.previewSource) {
        try {
          this.previewSource.stop();
          this.previewSource.disconnect();
        } catch {
          // ignore
        }
        this.previewSource = null;
      }

      const source = this.ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;

      // Soft fade in for preview through previewGain (routed through musicGain)
      this.previewGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.previewGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.previewGain.gain.linearRampToValueAtTime(1.0, this.ctx.currentTime + 0.12);

      source.connect(this.previewGain);

      const offsetSec = Math.min(
        Math.max(0, beatmap.previewStartSec ?? 10),
        Math.max(0, buffer.duration - 5)
      );

      source.start(0, offsetSec);
      this.previewSource = source;
      this.currentPreviewBeatmapId = beatmap.id;
    } catch (err) {
      console.warn('[AudioEngine] Could not play preview for beatmap:', beatmap.title, err);
    }
  }

  /**
   * Stops the active preview audio immediately and invalidates any in-flight requests
   */
  public stopPreview(): void {
    // Invalidate any pending preview requests in flight
    this.currentPreviewRequestId++;
    this.currentPreviewBeatmapId = null;

    if (this.previewSource) {
      try {
        this.previewSource.stop();
        this.previewSource.disconnect();
      } catch {
        // ignore
      }
      this.previewSource = null;
    }
  }

  /**
   * Starts playing the track from beginning or specific offset (ms)
   */
  public start(offsetMs: number = 0): void {
    if (!this.ctx || !this.musicGain || !this.currentBuffer) return;

    // Ensure preview is stopped
    this.stopPreview();

    if (this.activeSource) {
      try {
        this.activeSource.stop();
        this.activeSource.disconnect();
      } catch {
        // ignore
      }
      this.activeSource = null;
    }

    const source = this.ctx.createBufferSource();
    source.buffer = this.currentBuffer;
    source.connect(this.musicGain);

    const offsetSeconds = Math.max(0, offsetMs / 1000);
    this.startCtxTime = this.ctx.currentTime;
    this.pausedOffsetMs = offsetMs;

    source.start(0, offsetSeconds);
    this.activeSource = source;
    this.isStarted = true;
    this.isPausedState = false;
  }

  /**
   * Pauses track and freezes clock
   */
  public pause(): void {
    if (!this.ctx || !this.isStarted || this.isPausedState) return;

    this.pausedOffsetMs = this.getCurrentTimeMs();

    if (this.activeSource) {
      try {
        this.activeSource.stop();
        this.activeSource.disconnect();
      } catch {
        // ignore
      }
      this.activeSource = null;
    }

    this.isPausedState = true;
  }

  /**
   * Resumes playback from paused position
   */
  public resume(): void {
    if (!this.ctx || !this.isStarted || !this.isPausedState) return;
    this.start(this.pausedOffsetMs);
  }

  /**
   * Stops playback and resets
   */
  public stop(): void {
    if (this.activeSource) {
      try {
        this.activeSource.stop();
        this.activeSource.disconnect();
      } catch {
        // ignore
      }
      this.activeSource = null;
    }
    this.isStarted = false;
    this.isPausedState = false;
    this.pausedOffsetMs = 0;
  }

  /**
   * Returns current song time in milliseconds, strictly synced to AudioContext.currentTime!
   */
  public getCurrentTimeMs(): number {
    if (!this.ctx || !this.isStarted) {
      return 0;
    }

    if (this.isPausedState) {
      return this.pausedOffsetMs;
    }

    const elapsedMs = (this.ctx.currentTime - this.startCtxTime) * 1000;
    return this.pausedOffsetMs + elapsedMs;
  }

  public getDurationMs(): number {
    return this.durationMs;
  }

  public isPlaying(): boolean {
    return this.isStarted && !this.isPausedState;
  }

  public isPaused(): boolean {
    return this.isPausedState;
  }

  public playHitsound(): void {
    if (!this.ctx || !this.hitsoundBuffer || !this.sfxGain) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.hitsoundBuffer;
    source.connect(this.sfxGain);
    source.start(0);
  }

  public playMissSound(): void {
    if (!this.ctx || !this.missSoundBuffer || !this.sfxGain) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.missSoundBuffer;
    source.connect(this.sfxGain);
    source.start(0);
  }

  public playSliderTick(): void {
    if (!this.ctx || !this.sliderTickBuffer || !this.sfxGain) return;
    const source = this.ctx.createBufferSource();
    source.buffer = this.sliderTickBuffer;
    source.connect(this.sfxGain);
    source.start(0);
  }

  public getCurrentBeatmap(): Beatmap | null {
    return this.currentBeatmap;
  }

  public setMode(mode: AudioMode): void {
    this.currentMode = mode;
  }

  public getMode(): AudioMode {
    return this.currentMode;
  }

  /* --- VOLUME CONTROLS WITH LOCAL STORAGE PERSISTENCE --- */

  public setMasterVolume(val: number): void {
    this.masterVolume = Math.min(1, Math.max(0, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.masterGain.gain.setValueAtTime(this.masterVolume, this.ctx.currentTime);
    }
    try {
      localStorage.setItem('resenha_master_vol', this.masterVolume.toString());
      localStorage.setItem('resenha_volume_updated', '1');
    } catch {}
  }

  public setMusicVolume(val: number): void {
    this.musicVolume = Math.min(1, Math.max(0, val));
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.musicGain.gain.setValueAtTime(this.musicVolume, this.ctx.currentTime);
    }
    try {
      localStorage.setItem('resenha_music_vol', this.musicVolume.toString());
      localStorage.setItem('resenha_volume_updated', '1');
    } catch {}
  }

  public setSfxVolume(val: number): void {
    this.sfxVolume = Math.min(1, Math.max(0, val));
    if (this.sfxGain && this.ctx) {
      this.sfxGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.sfxGain.gain.setValueAtTime(this.sfxVolume, this.ctx.currentTime);
    }
    try {
      localStorage.setItem('resenha_sfx_vol', this.sfxVolume.toString());
      localStorage.setItem('resenha_volume_updated', '1');
    } catch {}
  }

  public getMasterVolume(): number {
    return this.masterVolume;
  }

  public getMusicVolume(): number {
    return this.musicVolume;
  }

  public getSfxVolume(): number {
    return this.sfxVolume;
  }

  /* --- MENU AMBIENT MUSIC (USER-INITIATED ONLY) --- */

  /**
   * Plays smooth ambient looped music for the main menu.
   * Seamlessly shares the preview audio player so navigating between main menu and song selection never restarts playback.
   */
  public async playMenuMusic(beatmap?: Beatmap): Promise<void> {
    if (!beatmap) return;
    return this.playPreview(beatmap);
  }

  public stopMenuMusic(): void {
    this.stopPreview();
  }

  public isMenuMusicPlaying(): boolean {
    return this.previewSource !== null;
  }
}
