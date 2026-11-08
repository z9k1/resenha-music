import type { GameStats, JudgementType } from '../types/index.ts';

export class ScoreSystem {
  private stats: GameStats = {
    score: 0,
    combo: 0,
    maxCombo: 0,
    accuracy: 100,
    counts: {
      300: 0,
      100: 0,
      50: 0,
      miss: 0,
    },
    totalHits: 0,
  };

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.stats = {
      score: 0,
      combo: 0,
      maxCombo: 0,
      accuracy: 100,
      counts: {
        300: 0,
        100: 0,
        50: 0,
        miss: 0,
      },
      totalHits: 0,
    };
  }

  public registerJudgement(type: JudgementType): { scoreGained: number; newCombo: number } {
    let baseValue = 0;

    switch (type) {
      case '300':
        baseValue = 300;
        this.stats.counts[300]++;
        this.stats.combo++;
        break;
      case '100':
        baseValue = 100;
        this.stats.counts[100]++;
        this.stats.combo++;
        break;
      case '50':
        baseValue = 50;
        this.stats.counts[50]++;
        this.stats.combo++;
        break;
      case 'MISS':
        baseValue = 0;
        this.stats.counts.miss++;
        this.stats.combo = 0; // Combo breaks!
        break;
    }

    if (this.stats.combo > this.stats.maxCombo) {
      this.stats.maxCombo = this.stats.combo;
    }

    this.stats.totalHits++;

    // Calculate score gained with combo multiplier
    const comboBonus = this.stats.combo > 0 ? (this.stats.combo - 1) * 0.1 : 0;
    const scoreGained = Math.round(baseValue * (1 + comboBonus));
    this.stats.score += scoreGained;

    // Calculate accuracy %
    this.calculateAccuracy();

    return {
      scoreGained,
      newCombo: this.stats.combo,
    };
  }

  /**
   * Registers intermediate slider tick or repeat hits.
   * Increments combo and score without inflating the accuracy denominator (totalHits).
   */
  public registerSliderTickHit(baseValue: number = 30): { scoreGained: number; newCombo: number } {
    this.stats.combo++;
    if (this.stats.combo > this.stats.maxCombo) {
      this.stats.maxCombo = this.stats.combo;
    }

    const comboBonus = this.stats.combo > 0 ? (this.stats.combo - 1) * 0.05 : 0;
    const scoreGained = Math.round(baseValue * (1 + comboBonus));
    this.stats.score += scoreGained;

    return {
      scoreGained,
      newCombo: this.stats.combo,
    };
  }

  /**
   * Breaks combo when missing a slider tick or repeat while tracking was lost
   */
  public registerSliderTickMiss(): void {
    this.stats.combo = 0;
  }

  private calculateAccuracy(): void {
    const { counts, totalHits } = this.stats;
    if (totalHits === 0) {
      this.stats.accuracy = 100;
      return;
    }

    const totalWeight = (counts[300] * 300) + (counts[100] * 100) + (counts[50] * 50);
    const maxPossibleWeight = totalHits * 300;
    this.stats.accuracy = Math.round((totalWeight / maxPossibleWeight) * 10000) / 100;
  }

  public getStats(): GameStats {
    return {
      ...this.stats,
      counts: { ...this.stats.counts },
    };
  }

  public getGrade(): 'SS' | 'S' | 'A' | 'B' | 'C' | 'D' {
    const { accuracy, counts } = this.stats;
    if (accuracy === 100) return 'SS';
    if (accuracy >= 95 && counts.miss === 0) return 'S';
    if (accuracy >= 90) return 'A';
    if (accuracy >= 80) return 'B';
    if (accuracy >= 70) return 'C';
    return 'D';
  }
}
