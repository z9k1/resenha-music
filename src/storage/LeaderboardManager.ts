import type { ActiveMods, GameStats, LeaderboardStorageSchema, ScoreRecord } from '../types/index.ts';

const STORAGE_KEY = 'resenha_music_leaderboard_v1';
const STORAGE_VERSION = 1;
const MAX_SCORES_PER_BEATMAP = 100;

export class LeaderboardManager {
  private memoryFallback: Record<string, ScoreRecord[]> = {};
  private isStorageAvailable: boolean = true;

  constructor() {
    this.checkStorageAvailability();
  }

  private checkStorageAvailability(): void {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        this.isStorageAvailable = false;
        return;
      }
      const testKey = '__resenha_storage_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      this.isStorageAvailable = true;
    } catch {
      this.isStorageAvailable = false;
      console.warn('[LeaderboardManager] localStorage indisponível; utilizando fallback em memória.');
    }
  }

  /**
   * Evaluates if a run is eligible for leaderboard registration.
   * Runs with Autoplay are ineligible for competitive ranking.
   */
  public isEligibleForRanking(mods?: ActiveMods): boolean {
    if (!mods) return true;
    return !mods.autoPlay;
  }

  /**
   * Loads all scores safely from localStorage or memory fallback.
   */
  private loadAllScores(): Record<string, ScoreRecord[]> {
    if (!this.isStorageAvailable) {
      return { ...this.memoryFallback };
    }

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return {};
      }

      const parsed = JSON.parse(raw) as Partial<LeaderboardStorageSchema>;
      if (!parsed || typeof parsed !== 'object' || typeof parsed.version !== 'number') {
        return {};
      }

      const rawScores = parsed.scores || {};
      const validatedScores: Record<string, ScoreRecord[]> = {};

      for (const [mapId, list] of Object.entries(rawScores)) {
        if (!Array.isArray(list)) continue;
        validatedScores[mapId] = list.filter((rec): rec is ScoreRecord => {
          return (
            rec &&
            typeof rec === 'object' &&
            typeof rec.id === 'string' &&
            typeof rec.beatmapId === 'string' &&
            typeof rec.playerName === 'string' &&
            typeof rec.score === 'number' &&
            !isNaN(rec.score) &&
            typeof rec.accuracy === 'number' &&
            !isNaN(rec.accuracy) &&
            typeof rec.maxCombo === 'number' &&
            typeof rec.grade === 'string' &&
            typeof rec.timestamp === 'number'
          );
        });
      }

      return validatedScores;
    } catch (e) {
      console.error('[LeaderboardManager] Erro ao carregar recordes do localStorage:', e);
      return {};
    }
  }

  /**
   * Persists all scores safely to localStorage or memory fallback.
   */
  private saveAllScores(scores: Record<string, ScoreRecord[]>): boolean {
    if (!this.isStorageAvailable) {
      this.memoryFallback = scores;
      return true;
    }

    try {
      const data: LeaderboardStorageSchema = {
        version: STORAGE_VERSION,
        scores,
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.warn('[LeaderboardManager] Falha ao persistir no localStorage (cota cheia ou bloqueio), chaveando para fallback:', e);
      this.isStorageAvailable = false;
      this.memoryFallback = scores;
      return false;
    }
  }

  /**
   * Compares two scores with consistent deterministic tie-breakers:
   * 1. Score descending
   * 2. Accuracy descending
   * 3. Max combo descending
   * 4. Timestamp descending (newest first)
   */
  public compareScores(a: ScoreRecord, b: ScoreRecord): number {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    if (Math.abs(b.accuracy - a.accuracy) > 0.001) {
      return b.accuracy - a.accuracy;
    }
    if (b.maxCombo !== a.maxCombo) {
      return b.maxCombo - a.maxCombo;
    }
    return b.timestamp - a.timestamp;
  }

  /**
   * Records a completed match score for a beatmap.
   * Returns the registered ScoreRecord if eligible, or null if ineligible (e.g. Autoplay).
   */
  public recordScore(
    beatmapId: string,
    stats: GameStats,
    grade: string,
    mods?: ActiveMods
  ): ScoreRecord | null {
    if (!this.isEligibleForRanking(mods)) {
      return null;
    }

    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const dateFormatted = `${day}/${month}/${year} ${hours}:${minutes}`;

    const newRecord: ScoreRecord = {
      id: `rec_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      beatmapId,
      playerName: 'Jogador',
      score: Math.round(stats.score),
      accuracy: Math.round(stats.accuracy * 100) / 100,
      maxCombo: stats.maxCombo,
      grade,
      counts: {
        300: stats.counts[300] ?? 0,
        100: stats.counts[100] ?? 0,
        50: stats.counts[50] ?? 0,
        miss: stats.counts.miss ?? 0,
      },
      mods: {
        easy: Boolean(mods?.easy),
        autoPlay: false,
      },
      timestamp: Date.now(),
      dateFormatted,
    };

    const allScores = this.loadAllScores();
    const mapScores = allScores[beatmapId] || [];

    mapScores.push(newRecord);
    mapScores.sort((a, b) => this.compareScores(a, b));

    // Keep up to max scores per map without blowing memory
    if (mapScores.length > MAX_SCORES_PER_BEATMAP) {
      mapScores.length = MAX_SCORES_PER_BEATMAP;
    }

    allScores[beatmapId] = mapScores;
    this.saveAllScores(allScores);

    return newRecord;
  }

  /**
   * Returns all recorded scores for a given beatmap, sorted by ranking criteria.
   */
  public getScores(beatmapId: string): ScoreRecord[] {
    const allScores = this.loadAllScores();
    const list = allScores[beatmapId] || [];
    return [...list].sort((a, b) => this.compareScores(a, b));
  }

  /**
   * Returns top N records for a given beatmap.
   */
  public getTopScores(beatmapId: string, limit: number = 3): ScoreRecord[] {
    return this.getScores(beatmapId).slice(0, limit);
  }

  /**
   * Checks whether any scores exist for a given beatmap.
   */
  public hasScores(beatmapId: string): boolean {
    const list = this.loadAllScores()[beatmapId];
    return Array.isArray(list) && list.length > 0;
  }

  /**
   * Clears scores for testing or reset purposes.
   */
  public clearScores(beatmapId?: string): void {
    if (beatmapId) {
      const all = this.loadAllScores();
      delete all[beatmapId];
      this.saveAllScores(all);
    } else {
      this.saveAllScores({});
    }
  }
}
