import { BEATMAPS } from '../src/beatmap/index.ts';
import { JudgementSystem } from '../src/gameplay/JudgementSystem.ts';
import { ScoreSystem } from '../src/gameplay/ScoreSystem.ts';
import { ActiveSlider, type SliderCallbacks } from '../src/gameplay/ActiveSlider.ts';
import { AutoplayController } from '../src/gameplay/AutoplayController.ts';
import { isSlider, type Beatmap, type JudgementResult, type SliderData } from '../src/types/index.ts';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

console.log('=== TEST 1: JudgementSystem Timing Windows & Easy Mode ===');
{
  const scoreSystem = new ScoreSystem();
  const js = new JudgementSystem(scoreSystem, 48, { onJudgement: () => {} });

  assert(js.window300 === 55, 'Default window 300 should be 55');
  assert(js.window100 === 110, 'Default window 100 should be 110');
  assert(js.window50 === 165, 'Default window 50 should be 165');
  assert(!js.getEasyMode(), 'Easy mode should initially be false');

  js.setEasyMode(true);
  assert(js.window300 === 80, 'Easy window 300 should be 80');
  assert(js.window100 === 150, 'Easy window 100 should be 150');
  assert(js.window50 === 220, 'Easy window 50 should be 220');
  assert(js.getEasyMode(), 'Easy mode should be true');

  js.setEasyMode(false);
  assert(js.window300 === 55, 'Standard window 300 should be 55');
  assert(js.window100 === 110, 'Standard window 100 should be 110');
  assert(js.window50 === 165, 'Standard window 50 should be 165');

  console.log('✓ TEST 1 PASSED: JudgementSystem windows scale correctly');
}

console.log('\n=== TEST 2: ActiveSlider Easy Mode Tolerances ===');
{
  const dummySlider: SliderData = {
    id: 999,
    type: 'slider',
    x: 400,
    y: 300,
    timeMs: 1000,
    durationMs: 800,
    slides: 1,
    curveType: 'linear',
    controlPoints: [
      { x: 400, y: 300 },
      { x: 500, y: 300 },
    ],
    comboNumber: 1,
    comboColorIndex: 0,
  };

  const standardSlider = new ActiveSlider(dummySlider, false);
  const easySlider = new ActiveSlider(dummySlider, true);

  assert(!standardSlider.isEasyMode, 'Standard slider isEasyMode should be false');
  assert(easySlider.isEasyMode, 'Easy slider isEasyMode should be true');

  let stdTapped = false;
  let easyTapped = false;

  const callbacks: SliderCallbacks = {
    onHeadJudged: (type) => {
      if (type !== 'MISS') stdTapped = true;
    },
    onTickHit: () => {},
    onTickMiss: () => {},
    onRepeatHit: () => {},
    onRepeatMiss: () => {},
    onSliderComplete: () => {},
  };

  const easyCallbacks: SliderCallbacks = {
    ...callbacks,
    onHeadJudged: (type) => {
      if (type !== 'MISS') easyTapped = true;
    },
  };

  // Tap at 1190ms (delta = +190ms)
  const hitStd = standardSlider.handleHeadTap({ x: 400, y: 300 }, 1190, 48, callbacks);
  assert(!hitStd && !stdTapped, 'Standard slider should reject tap at 190ms');

  const hitEasy = easySlider.handleHeadTap({ x: 400, y: 300 }, 1190, 48, easyCallbacks);
  assert(hitEasy && easyTapped, 'Easy slider should accept tap at 190ms');

  console.log('✓ TEST 2 PASSED: Easy slider allows wider window and more forgiving tolerances');
}

console.log('\n=== TEST 3: Autoplay Simulation on All Beatmaps ===');
for (const originalMap of BEATMAPS) {
  for (const easyMode of [false, true]) {
    const mapName = `${originalMap.title} (${originalMap.difficultyName}) [Easy=${easyMode}]`;
    const scoreSystem = new ScoreSystem();

    const beatmap: Beatmap = easyMode
      ? {
          ...originalMap,
          circleRadius: Math.round(originalMap.circleRadius * 1.25),
          approachTimeMs: Math.round(originalMap.approachTimeMs * 1.3),
          notes: originalMap.notes.map((n) => ({ ...n })),
        }
      : {
          ...originalMap,
          notes: originalMap.notes.map((n) => ({ ...n })),
        };

    const unjudged = beatmap.notes.map((n) => ({ ...n }));
    const activeSliders = unjudged.filter(isSlider).map((s) => new ActiveSlider(s, easyMode));

    let missedNotes = 0;
    let hit300s = 0;
    let sliderEnds = 0;

    const js = new JudgementSystem(scoreSystem, beatmap.circleRadius, {
      onJudgement: (res: JudgementResult) => {
        if (res.type === 'MISS') {
          missedNotes++;
        } else if (res.type === '300') {
          hit300s++;
        }
        if (res.isSliderEnd) {
          sliderEnds++;
        }
      },
    });
    js.setEasyMode(easyMode);

    const sliderCallbacks: SliderCallbacks = {
      onHeadJudged: (type) => {
        if (type !== 'MISS') {
          scoreSystem.registerSliderTickHit(50);
        } else {
          scoreSystem.registerSliderTickMiss();
          missedNotes++;
        }
      },
      onTickHit: () => {
        scoreSystem.registerSliderTickHit(30);
      },
      onTickMiss: () => {
        scoreSystem.registerSliderTickMiss();
        missedNotes++;
      },
      onRepeatHit: () => {
        scoreSystem.registerSliderTickHit(60);
      },
      onRepeatMiss: () => {
        scoreSystem.registerSliderTickMiss();
        missedNotes++;
      },
      onSliderComplete: (overallType, tailPos) => {
        const { scoreGained, newCombo } = scoreSystem.registerJudgement(overallType);
        const result: JudgementResult = {
          id: -1,
          type: overallType,
          deltaMs: 0,
          scoreGained,
          combo: newCombo,
          position: tailPos,
          timestamp: 0,
          isSliderEnd: true,
        };
        if (overallType === 'MISS') missedNotes++;
        else if (overallType === '300') hit300s++;
        sliderEnds++;
      },
    };

    const handleTapAt = (pos: { x: number; y: number }, currentTimeMs: number) => {
      const res = js.handleTap(pos, currentTimeMs, unjudged, activeSliders, sliderCallbacks);
      if (res && !res.isSlider) {
        const idx = unjudged.findIndex((n) => n.id === res.hitId);
        if (idx !== -1) unjudged.splice(idx, 1);
      }
    };

    const bot = new AutoplayController(beatmap, activeSliders, handleTapAt);

    // Simulate timeline in 16ms increments (~60fps)
    const startTime = 0;
    const lastNote = beatmap.notes[beatmap.notes.length - 1];
    const endTime = (isSlider(lastNote) ? lastNote.timeMs + lastNote.durationMs : lastNote.timeMs) + 600;

    let time = startTime;
    const dt = 16 / 1000;

    while (time <= endTime) {
      const input = bot.update(time, dt);

      // Check expired circles
      js.checkExpiredCircles(time, unjudged, (id) => {
        const idx = unjudged.findIndex((n) => n.id === id);
        if (idx !== -1) unjudged.splice(idx, 1);
      });

      // Update active sliders
      for (const s of activeSliders) {
        if (!s.completed) {
          s.update(time, input, beatmap.circleRadius, dt, sliderCallbacks, js.window50);
          if (s.completed) {
            const idx = unjudged.findIndex((n) => n.id === s.data.id);
            if (idx !== -1) unjudged.splice(idx, 1);
          }
        }
      }

      time += 16;
    }

    const stats = scoreSystem.getStats();
    const grade = scoreSystem.getGrade();

    assert(missedNotes === 0, `${mapName}: missedNotes must be 0, got ${missedNotes}`);
    assert(stats.counts.miss === 0, `${mapName}: stats.counts.miss must be 0, got ${stats.counts.miss}`);
    assert(stats.accuracy === 100, `${mapName}: accuracy must be 100%, got ${stats.accuracy}%`);
    assert(grade === 'SS', `${mapName}: grade must be SS, got ${grade}`);

    console.log(`✓ ${mapName}: Score=${stats.score.toLocaleString()}, MaxCombo=${stats.maxCombo}x, Acc=${stats.accuracy}%, Grade=${grade}, 0 Misses!`);
  }
}

console.log('\nALL TESTS PASSED WITH 100% ACCURACY AND 0 MISSES!');
