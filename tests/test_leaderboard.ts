import { LeaderboardManager } from '../src/storage/LeaderboardManager.ts';
import { BEATMAPS, getDefaultBeatmap } from '../src/beatmap/index.ts';
import { UIManager } from '../src/ui/UIManager.ts';
import type { ActiveMods, GameStats, ScoreRecord } from '../src/types/index.ts';

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(`Assertion failed: ${msg}`);
}

// In-memory mock localStorage for Node testing
const mockStorage = new Map<string, string>();
const mockLocalStorage = {
  getItem: (k: string) => mockStorage.get(k) ?? null,
  setItem: (k: string, v: string) => mockStorage.set(k, String(v)),
  removeItem: (k: string) => mockStorage.delete(k),
  clear: () => mockStorage.clear(),
};

(globalThis as unknown as { window: any }).window = {
  localStorage: mockLocalStorage,
  addEventListener: () => {},
};
(globalThis as unknown as { localStorage: any }).localStorage = mockLocalStorage;

console.log('=== TEST 1: LeaderboardManager Core Saving & Mod Rules ===');
{
  const lm = new LeaderboardManager();
  lm.clearScores();

  const mapA = 'sua-rifa-nao-vou-comprar';
  const mapB = 'dalsao-no-suco';

  // 1. Normal run (no mods) -> MUST BE SAVED
  const normalStats: GameStats = {
    score: 1850000,
    combo: 350,
    maxCombo: 350,
    accuracy: 98.5,
    counts: { 300: 340, 100: 10, 50: 0, miss: 0 },
    totalHits: 350,
  };
  const normalRecord = lm.recordScore(mapA, normalStats, 'S', { autoPlay: false, easy: false });
  assert(normalRecord !== null, 'Normal run must return a registered ScoreRecord');
  assert(normalRecord!.playerName === 'Jogador', 'Player name must be fixed to "Jogador"');
  assert(normalRecord!.score === 1850000, 'Score must match');
  assert(normalRecord!.accuracy === 98.5, 'Accuracy must match');
  assert(normalRecord!.grade === 'S', 'Grade must match');
  assert(normalRecord!.mods.easy === false, 'Easy mod must be false');
  assert(normalRecord!.mods.autoPlay === false, 'Autoplay must be false');
  assert(typeof normalRecord!.dateFormatted === 'string', 'Must contain formatted date string');

  // 2. Easy run (easy: true) -> MUST BE SAVED with Easy flag
  const easyStats: GameStats = {
    score: 1920000,
    combo: 420,
    maxCombo: 420,
    accuracy: 99.2,
    counts: { 300: 410, 100: 10, 50: 0, miss: 0 },
    totalHits: 420,
  };
  const easyRecord = lm.recordScore(mapA, easyStats, 'SS', { autoPlay: false, easy: true });
  assert(easyRecord !== null, 'Easy run must be registered');
  assert(easyRecord!.mods.easy === true, 'Easy flag must be true');

  // 3. Autoplay run (autoPlay: true) -> MUST NOT BE SAVED
  const autoStats: GameStats = {
    score: 2247420,
    combo: 452,
    maxCombo: 452,
    accuracy: 100.0,
    counts: { 300: 452, 100: 0, 50: 0, miss: 0 },
    totalHits: 452,
  };
  const autoRecord = lm.recordScore(mapA, autoStats, 'SS', { autoPlay: true, easy: false });
  assert(autoRecord === null, 'Autoplay run must NOT be registered (returns null)');

  // 4. Autoplay + Easy run -> MUST NOT BE SAVED
  const autoEasyRecord = lm.recordScore(mapA, autoStats, 'SS', { autoPlay: true, easy: true });
  assert(autoEasyRecord === null, 'Autoplay + Easy run must NOT be registered');

  // Verify mapA has exactly 2 records
  const scoresA = lm.getScores(mapA);
  assert(scoresA.length === 2, `Map A should have 2 records, got ${scoresA.length}`);
  // Highest score first (Easy score 1.920.000 > Normal 1.850.000)
  assert(scoresA[0].score === 1920000, 'Top score must be highest score');
  assert(scoresA[0].mods.easy === true, 'Top score must have Easy mod');
  assert(scoresA[1].score === 1850000, 'Second score must be lower score');

  // Verify mapB is independent and currently empty
  const scoresB = lm.getScores(mapB);
  assert(scoresB.length === 0, 'Map B must have 0 records');
  assert(!lm.hasScores(mapB), 'hasScores(mapB) must be false');

  console.log('✓ TEST 1 PASSED: Core saving, mod eligibility, and ranking rules verified');
}

console.log('\n=== TEST 2: Deterministic Tie-breaking & Persistence across Restarts ===');
{
  const lm1 = new LeaderboardManager();
  lm1.clearScores();

  const mapId = 'alo-cachorrada';

  // Record 1: Score 1.000.000, Acc 95.0%, Combo 200
  lm1.recordScore(mapId, {
    score: 1000000,
    combo: 200,
    maxCombo: 200,
    accuracy: 95.0,
    counts: { 300: 200, 100: 0, 50: 0, miss: 0 },
    totalHits: 200,
  }, 'S');

  // Record 2: Same score 1.000.000, but higher Acc 97.0% -> Must win tie-breaker!
  lm1.recordScore(mapId, {
    score: 1000000,
    combo: 180,
    maxCombo: 180,
    accuracy: 97.0,
    counts: { 300: 200, 100: 0, 50: 0, miss: 0 },
    totalHits: 200,
  }, 'S');

  // Record 3: Higher score 1.500.000 -> Must be #1
  lm1.recordScore(mapId, {
    score: 1500000,
    combo: 300,
    maxCombo: 300,
    accuracy: 92.0,
    counts: { 300: 300, 100: 0, 50: 0, miss: 0 },
    totalHits: 300,
  }, 'A');

  const sorted = lm1.getScores(mapId);
  assert(sorted.length === 3, 'Must have 3 scores');
  assert(sorted[0].score === 1500000, '#1 must be 1.500.000');
  assert(sorted[1].score === 1000000 && sorted[1].accuracy === 97.0, '#2 must be tie-breaker winner with 97% accuracy');
  assert(sorted[2].score === 1000000 && sorted[2].accuracy === 95.0, '#3 must be tie-breaker loser with 95% accuracy');

  // Simulate browser reload / page restart: create new LeaderboardManager instance
  const lm2 = new LeaderboardManager();
  const reloadedScores = lm2.getScores(mapId);
  assert(reloadedScores.length === 3, 'Scores must persist after reload in localStorage');
  assert(reloadedScores[0].score === 1500000, 'Persisted #1 matches');
  assert(reloadedScores[1].accuracy === 97.0, 'Persisted #2 matches');

  console.log('✓ TEST 2 PASSED: Tie-breaking criteria and localStorage persistence verified');
}

console.log('\n=== TEST 3: Safe Error Handling on Corrupted localStorage ===');
{
  // Write malformed JSON
  mockLocalStorage.setItem('resenha_music_leaderboard_v1', '{ invalid json ...');
  const lmCorrupted = new LeaderboardManager();
  const emptyScores = lmCorrupted.getScores('sua-rifa-nao-vou-comprar');
  assert(Array.isArray(emptyScores) && emptyScores.length === 0, 'Corrupted JSON must not crash and returns empty array');

  // Able to record and recover cleanly
  lmCorrupted.recordScore('sua-rifa-nao-vou-comprar', {
    score: 500000,
    combo: 100,
    maxCombo: 100,
    accuracy: 96.0,
    counts: { 300: 100, 100: 0, 50: 0, miss: 0 },
    totalHits: 100,
  }, 'A');
  assert(lmCorrupted.getScores('sua-rifa-nao-vou-comprar').length === 1, 'Recovers cleanly after corrupted data');

  console.log('✓ TEST 3 PASSED: Resilient error handling prevents crashes');
}

console.log('\n=== TEST 4: UI Song Select Ranking Section & All Records Modal ===');
{
  class MockElement {
    public id: string = '';
    public className: string = '';
    public innerHTML: string = '';
    public textContent: string = '';
    public children: MockElement[] = [];
    public classList = {
      add: (_c: string) => {},
      remove: (_c: string) => {},
      toggle: (_c: string, _b?: boolean) => {},
    };
    public addEventListener(_ev: string, _cb: Function) {}
    public appendChild(child: MockElement) {
      this.children.push(child);
      return child;
    }
    public remove() {
      const idx = container.children.indexOf(this);
      if (idx !== -1) container.children.splice(idx, 1);
    }
    public scrollIntoView() {}
    public getAttribute(_attr: string) { return ''; }
    public querySelector(_sel: string) { return new MockElement(); }
    public querySelectorAll(_sel: string) { return []; }
  }

  const container = new MockElement();
  (globalThis as unknown as { document: any }).document = {
    getElementById: (id: string) => {
      const findInEl = (el: MockElement): MockElement | null => {
        if (el.id === id) return el;
        for (const c of el.children) {
          const res = findInEl(c);
          if (res) return res;
        }
        return null;
      };
      return findInEl(container);
    },
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: (_tag: string) => new MockElement(),
  };

  const lm = new LeaderboardManager();
  lm.clearScores();

  const map = BEATMAPS[0]; // 'sua-rifa-nao-vou-comprar'

  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {},
    onSelectSong: () => {},
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
    getBeatmapScores: (id) => lm.getScores(id),
  });

  ui.setBeatmaps(BEATMAPS);
  ui.showSongSelectScreen(BEATMAPS);

  // 1. Initially no scores -> displays empty state
  assert(container.innerHTML.includes('spotlight-ranking-panel'), 'Spotlight contains spotlight-ranking-panel');
  assert(container.innerHTML.includes('RANKING LOCAL'), 'Contains RANKING LOCAL header');
  assert(container.innerHTML.includes('Nenhum recorde registrado ainda'), 'Shows empty state friendly message');

  // 2. Add records to map: 1 with Easy, 1 normal
  lm.recordScore(map.id, {
    score: 1450000,
    combo: 300,
    maxCombo: 300,
    accuracy: 96.5,
    counts: { 300: 290, 100: 10, 50: 0, miss: 0 },
    totalHits: 300,
  }, 'S', { autoPlay: false, easy: false });

  lm.recordScore(map.id, {
    score: 1780000,
    combo: 390,
    maxCombo: 390,
    accuracy: 99.0,
    counts: { 300: 385, 100: 5, 50: 0, miss: 0 },
    totalHits: 390,
  }, 'SS', { autoPlay: false, easy: true });

  // Re-render song select
  ui.showSongSelectScreen(BEATMAPS);

  // Verify records are rendered
  assert(container.innerHTML.includes('Jogador'), 'Displays player name Jogador');
  assert(container.innerHTML.includes('1.780.000'), 'Displays formatted score 1.780.000');
  assert(container.innerHTML.includes('badge-ez-mod'), 'Displays EZ badge for Easy run');
  assert(container.innerHTML.includes('is-best-record'), 'Highlights top 1 best record');
  assert(container.innerHTML.includes('Ver todos os recordes'), 'Includes button to view all records');

  // Test opening all records modal
  ui.openAllRecordsModal(map);
  assert(container.children.length > 0, 'Records modal was appended to container');
  const modalEl = container.children[container.children.length - 1];
  assert(modalEl.innerHTML.includes('HISTÓRICO COMPLETO'), 'Modal contains HISTÓRICO COMPLETO badge');
  assert(modalEl.innerHTML.includes('records-table'), 'Modal contains records-table');

  ui.closeAllRecordsModal();

  console.log('✓ TEST 4 PASSED: Song select ranking section and history modal verified');
}

console.log('\n=== TEST 5: Results Screen Autoplay Demo vs Registered Banners ===');
{
  class MockElement {
    public id: string = '';
    public className: string = '';
    public innerHTML: string = '';
    public textContent: string = '';
    public addEventListener(_ev: string, _cb: Function) {}
  }
  const container = new MockElement();

  (globalThis as unknown as { document: any }).document = {
    getElementById: () => new MockElement(),
    querySelectorAll: () => [],
    addEventListener: () => {},
  };

  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {},
    onSelectSong: () => {},
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
  });

  const map = BEATMAPS[0];
  const stats: GameStats = {
    score: 1500000,
    combo: 300,
    maxCombo: 300,
    accuracy: 98.0,
    counts: { 300: 290, 100: 10, 50: 0, miss: 0 },
    totalHits: 300,
  };

  // Case A: Autoplay results
  ui.showResultsScreen(stats, 'SS', map, { autoPlay: true, easy: false });
  assert(container.innerHTML.includes('autoplay-demo-banner'), 'Autoplay results display autoplay-demo-banner');
  assert(container.innerHTML.includes('não elegível para o ranking local'), 'Displays clear ineligibility notice');
  assert(!container.innerHTML.includes('leaderboard-saved-banner'), 'Autoplay does not show saved banner');

  // Case B: Normal results
  ui.showResultsScreen(stats, 'SS', map, { autoPlay: false, easy: false });
  assert(container.innerHTML.includes('leaderboard-saved-banner'), 'Normal results display leaderboard-saved-banner');
  assert(container.innerHTML.includes('Pontuação Registrada!'), 'Displays confirmation of registration');

  console.log('✓ TEST 5 PASSED: Results screen properly discriminates Autoplay vs Competitive results');
}

console.log('\n=== ALL LEADERBOARD AND RANKING TESTS PASSED! ===');
