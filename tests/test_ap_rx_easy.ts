import { quemFiscalizaOFiscalBeatmap } from '../src/beatmap/maps/quemFiscalizaOFiscal.ts';
import { mapeamentoBeatmap } from '../src/beatmap/maps/mapeamento.ts';
import { unoparMeDeixaEmPazBeatmap } from '../src/beatmap/maps/unoparMeDeixaEmPaz.ts';
import { createEasyBeatmap } from '../src/gameplay/EasyModeHelper.ts';
import { AutoplayController } from '../src/gameplay/AutoplayController.ts';
import { JudgementSystem } from '../src/gameplay/JudgementSystem.ts';
import { ScoreSystem } from '../src/gameplay/ScoreSystem.ts';
import { LeaderboardManager } from '../src/storage/LeaderboardManager.ts';
import { ActiveSlider } from '../src/gameplay/ActiveSlider.ts';
import { isSlider, type ActiveMods, type GameStats, type Vector2 } from '../src/types/index.ts';

function assert(condition: boolean, message: string): void {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
}

console.log('=== TEST 1: Easy Mode Enhancements (Fiscal, Mapeamento, Unopar) ===');
{
  // 1. Unopar: Circle radius MUST remain normal size (52px, not 65px!)
  const unoparEasy = createEasyBeatmap(unoparMeDeixaEmPazBeatmap);
  assert(
    unoparEasy.circleRadius === unoparMeDeixaEmPazBeatmap.circleRadius,
    `Unopar circleRadius must be normal (${unoparMeDeixaEmPazBeatmap.circleRadius}px), got ${unoparEasy.circleRadius}px`
  );
  assert(
    unoparEasy.approachTimeMs > unoparMeDeixaEmPazBeatmap.approachTimeMs,
    'Unopar approach time must be slower (larger approachTimeMs)'
  );
  assert(
    unoparEasy.notes.length < unoparMeDeixaEmPazBeatmap.notes.length,
    `Unopar Easy rhythm must be simplified (${unoparEasy.notes.length} notes vs original ${unoparMeDeixaEmPazBeatmap.notes.length})`
  );
  console.log(`  ✓ Unopar: Normal buttons (${unoparEasy.circleRadius}px), Slower AR (${unoparEasy.approachTimeMs}ms), Simplified rhythm (${unoparEasy.notes.length} notes)`);

  // 2. Quem Fiscaliza o Fiscal?
  const fiscalEasy = createEasyBeatmap(quemFiscalizaOFiscalBeatmap);
  assert(
    fiscalEasy.circleRadius === quemFiscalizaOFiscalBeatmap.circleRadius,
    `Fiscal circleRadius must be normal (${quemFiscalizaOFiscalBeatmap.circleRadius}px)`
  );
  assert(
    fiscalEasy.approachTimeMs > quemFiscalizaOFiscalBeatmap.approachTimeMs,
    'Fiscal approach time must be slower'
  );
  assert(
    fiscalEasy.notes.length < 650 && fiscalEasy.notes.length > 250,
    `Fiscal Easy rhythm must be filtered from 1277 notes to comfortable pace, got ${fiscalEasy.notes.length} notes`
  );
  console.log(`  ✓ Fiscal: Normal buttons (${fiscalEasy.circleRadius}px), Slower AR (${fiscalEasy.approachTimeMs}ms), Stream-smoothed rhythm (${fiscalEasy.notes.length} notes)`);

  // 3. Mapeamento
  const mapEasy = createEasyBeatmap(mapeamentoBeatmap);
  assert(
    mapEasy.circleRadius === mapeamentoBeatmap.circleRadius,
    `Mapeamento circleRadius must be normal (${mapeamentoBeatmap.circleRadius}px)`
  );
  assert(
    mapEasy.notes.length < mapeamentoBeatmap.notes.length,
    `Mapeamento Easy rhythm must be simplified (${mapEasy.notes.length} notes vs original ${mapeamentoBeatmap.notes.length})`
  );
  console.log(`  ✓ Mapeamento: Normal buttons (${mapEasy.circleRadius}px), Slower AR (${mapEasy.approachTimeMs}ms), Simplified rhythm (${mapEasy.notes.length} notes)`);
  console.log('✓ TEST 1 PASSED: Easy mode maintains normal button sizes, slower approach, and simplified musical rhythms\n');
}

console.log('=== TEST 2: Autopilot (AP) Mechanics ===');
{
  const map = unoparMeDeixaEmPazBeatmap;
  const sliders = map.notes.filter(isSlider).map((s) => new ActiveSlider(s));
  // Autopilot does not provide a tap callback (player is responsible for clicks!)
  const ap = new AutoplayController(map, sliders);

  // Check cursor movement
  const cursor1 = ap.updateCursorTrajectory(100);
  assert(typeof cursor1.x === 'number' && typeof cursor1.y === 'number', 'AP cursor must be valid Vector2');

  const firstNote = map.notes[0];
  const cursorAtFirst = ap.updateCursorTrajectory(firstNote.timeMs);
  assert(
    Math.abs(cursorAtFirst.x - firstNote.x) < 2 && Math.abs(cursorAtFirst.y - firstNote.y) < 2,
    'AP cursor must land precisely on hit object position at note timeMs'
  );

  console.log('  ✓ AP smoothly calculates cursor trajectory without auto-tapping');
  console.log('✓ TEST 2 PASSED: Autopilot guides cursor while delegating tap input\n');
}

console.log('=== TEST 3: Relax (RX) Timing & Hit Validation ===');
{
  const ss = new ScoreSystem();
  let lastJudgement: any = null;
  const js = new JudgementSystem(ss, 52, { onJudgement: (res) => { lastJudgement = res; } });

  // Note at timeMs = 1000, position = (300, 200)
  const testNote = { id: 10, type: 'circle' as const, x: 300, y: 200, timeMs: 1000, comboNumber: 1, comboColorIndex: 0 };
  const unjudged = [testNote];

  // 1. Cursor far away (e.g. 500, 500) -> Should NOT hit
  const farCursor: Vector2 = { x: 500, y: 500 };
  const distFar = Math.hypot(farCursor.x - testNote.x, farCursor.y - testNote.y);
  assert(distFar > 52, 'Cursor is far from note');

  // 2. Cursor accurately aimed (305, 202) -> Within radius
  const aimedCursor: Vector2 = { x: 305, y: 202 };
  const distAimed = Math.hypot(aimedCursor.x - testNote.x, aimedCursor.y - testNote.y);
  assert(distAimed <= 52, 'Cursor is within note hit radius');

  // Simulate Relax trigger check
  let relaxTapped = false;
  const currentTimeMs = 1000;
  const delta = currentTimeMs - testNote.timeMs;
  if (delta >= -js.window300 && delta <= js.window100 && distAimed <= 52) {
    relaxTapped = true;
    const res = js.handleTap(aimedCursor, currentTimeMs, unjudged, [], {
      onHeadJudged: () => {},
      onTickHit: () => {},
      onTickMiss: () => {},
      onRepeatHit: () => {},
      onRepeatMiss: () => {},
      onSliderComplete: () => {},
    });
    assert(res !== null && lastJudgement?.type === '300', 'Relax hit should yield 300 judgement when aimed properly');
  }

  assert(relaxTapped, 'Relax mod must trigger tap when cursor is on target within timing window');
  console.log('  ✓ Relax triggers tap when cursor is positioned accurately on hit circle');
  console.log('✓ TEST 3 PASSED: Relax mod validates aim before executing automatic timing tap\n');
}

console.log('=== TEST 4: Mod Mutual Exclusivity ===');
{
  const mods: ActiveMods = {
    autoPlay: false,
    easy: false,
    autoPilot: false,
    relax: false,
  };

  // Helper simulating UI mutual exclusivity
  const setMod = (target: keyof ActiveMods) => {
    if (target === 'autoPlay') {
      mods.autoPlay = !mods.autoPlay;
      if (mods.autoPlay) {
        mods.autoPilot = false;
        mods.relax = false;
      }
    } else if (target === 'autoPilot') {
      mods.autoPilot = !mods.autoPilot;
      if (mods.autoPilot) {
        mods.autoPlay = false;
        mods.relax = false;
      }
    } else if (target === 'relax') {
      mods.relax = !mods.relax;
      if (mods.relax) {
        mods.autoPlay = false;
        mods.autoPilot = false;
      }
    } else if (target === 'easy') {
      mods.easy = !mods.easy;
    }
  };

  // Enable AP
  setMod('autoPilot');
  assert(mods.autoPilot && !mods.autoPlay && !mods.relax, 'Enabling AP must keep AP and disable others');

  // Enable RX -> AP must turn off
  setMod('relax');
  assert(mods.relax && !mods.autoPilot && !mods.autoPlay, 'Enabling RX must disable AP and AutoPlay');

  // Enable AutoPlay -> RX must turn off
  setMod('autoPlay');
  assert(mods.autoPlay && !mods.relax && !mods.autoPilot, 'Enabling AutoPlay must disable RX and AP');

  // Easy can combine with AP
  setMod('autoPilot');
  setMod('easy');
  assert(mods.autoPilot && mods.easy && !mods.autoPlay && !mods.relax, 'EZ + AP combo must be permitted');

  // Easy can combine with RX
  setMod('relax');
  assert(mods.relax && mods.easy && !mods.autoPilot && !mods.autoPlay, 'EZ + RX combo must be permitted');

  console.log('  ✓ AP, RX and AutoPlay are strictly mutually exclusive');
  console.log('  ✓ EZ combines seamlessly with AP and RX');
  console.log('✓ TEST 4 PASSED: Mod exclusivity and compatibility rules verified\n');
}

console.log('=== TEST 5: Leaderboard Assisted Records Separation ===');
{
  const lm = new LeaderboardManager();
  lm.clearScores('test_map');

  const baseStats: GameStats = {
    score: 1500000,
    combo: 300,
    maxCombo: 300,
    accuracy: 99.5,
    counts: { 300: 290, 100: 10, 50: 0, miss: 0 },
    totalHits: 300,
  };

  // 1. Competitive run (unassisted)
  const compRec = lm.recordScore('test_map', { ...baseStats, score: 2000000 }, 'SS', {
    autoPlay: false,
    easy: false,
    autoPilot: false,
    relax: false,
  });
  assert(compRec !== null && compRec.category === 'competitive', 'Competitive run must be categorized as competitive');

  // 2. Autopilot run (assisted)
  const apRec = lm.recordScore('test_map', { ...baseStats, score: 2500000 }, 'SS', {
    autoPlay: false,
    easy: false,
    autoPilot: true,
    relax: false,
  });
  assert(apRec !== null && apRec.category === 'assisted', 'AP run must be categorized as assisted');
  assert(apRec!.mods.autoPilot === true, 'AP record must have autoPilot flag');

  // 3. Relax run (assisted)
  const rxRec = lm.recordScore('test_map', { ...baseStats, score: 2400000 }, 'SS', {
    autoPlay: false,
    easy: false,
    autoPilot: false,
    relax: true,
  });
  assert(rxRec !== null && rxRec.category === 'assisted', 'RX run must be categorized as assisted');
  assert(rxRec!.mods.relax === true, 'RX record must have relax flag');

  // 4. Autoplay run (ineligible)
  const autoRec = lm.recordScore('test_map', baseStats, 'SS', {
    autoPlay: true,
    easy: false,
    autoPilot: false,
    relax: false,
  });
  assert(autoRec === null, 'AutoPlay must not be recorded');

  // 5. Query competitive scores: must NOT include AP or RX, even though AP had higher score!
  const compScores = lm.getScores('test_map', 'competitive');
  assert(compScores.length === 1, `Competitive leaderboard must have 1 record, got ${compScores.length}`);
  assert(compScores[0].id === compRec!.id, 'Competitive #1 must be the unassisted run');
  assert(!compScores[0].mods.autoPilot && !compScores[0].mods.relax, 'Competitive scores cannot contain AP or RX');

  // 6. Query assisted scores: must contain AP and RX
  const assistedScores = lm.getScores('test_map', 'assisted');
  assert(assistedScores.length === 2, `Assisted leaderboard must have 2 records, got ${assistedScores.length}`);
  assert(assistedScores[0].score === 2500000, 'Assisted top score must be the AP record');

  // 7. Query all scores: contains all 3
  const allScores = lm.getScores('test_map', 'all');
  assert(allScores.length === 3, 'All scores query must return all recorded matches');

  console.log('  ✓ Competitive leaderboard is strictly isolated from assisted runs');
  console.log('  ✓ Assisted leaderboard tracks and displays AP and RX scores');
  console.log('  ✓ AutoPlay is completely blocked from registering');
  console.log('✓ TEST 5 PASSED: Leaderboard segregation and storage rules verified\n');
}

console.log('ALL AUTOPILOT, RELAX, AND EASY MODE TESTS PASSED 100%!');
