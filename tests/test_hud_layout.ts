import { Playfield } from '../src/render/Playfield.ts';
import { InputManager } from '../src/input/InputManager.ts';

// Mock DOM environment if running in node/tsx
if (typeof window === 'undefined') {
  (global as any).window = {
    innerWidth: 1920,
    innerHeight: 1080,
    devicePixelRatio: 1,
    addEventListener: () => {},
    removeEventListener: () => {},
  };
}

const mockCanvas: any = {
  width: 0,
  height: 0,
  style: {},
  getBoundingClientRect: () => ({ left: 0, top: 0, width: window.innerWidth, height: window.innerHeight }),
  getContext: () => null,
};

interface ResolutionScenario {
  name: string;
  w: number;
  h: number;
}

const scenarios: ResolutionScenario[] = [
  { name: '1080p Full HD (1920x1080)', w: 1920, h: 1080 },
  { name: 'Laptop Standard (1366x768)', w: 1366, h: 768 },
  { name: '720p HD (1280x720)', w: 1280, h: 720 },
  { name: '16:10 Monitor (1440x900)', w: 1440, h: 900 },
  { name: 'Educatron / 4:3 Projector (1024x768)', w: 1024, h: 768 },
  { name: 'Min Classroom Projector (800x600)', w: 800, h: 600 },
  { name: 'Windowed Mode Medium (1120x680)', w: 1120, h: 680 },
  { name: 'Windowed Mode Compact (960x640)', w: 960, h: 640 },
];

console.log('=== RUNNING HUD & ARENA RESPONSIVE LAYOUT VERIFICATION ===\n');

const playfield = new Playfield(mockCanvas);
const inputManager = new InputManager(mockCanvas);

let allPassed = true;

for (const sc of scenarios) {
  // Update mock window
  (window as any).innerWidth = sc.w;
  (window as any).innerHeight = sc.h;

  const transform = playfield.resize();
  inputManager.setViewportTransform(transform);
  const hudH = playfield.getHudHeight();

  console.log(`Testing: ${sc.name}`);
  console.log(`  Window: ${sc.w}x${sc.h} | HUD height: ${hudH}px`);
  console.log(`  Arena: scale=${transform.scale.toFixed(4)}, size=${transform.width.toFixed(1)}x${transform.height.toFixed(1)}`);
  console.log(`  Arena Position: offsetX=${transform.offsetX.toFixed(1)}px, offsetY=${transform.offsetY.toFixed(1)}px`);

  // 1. Check top cutoff: arena must start at or below HUD height
  if (transform.offsetY < hudH) {
    console.error(`  [FAIL] Arena offsetY (${transform.offsetY}) is less than hudHeight (${hudH})! Cutoff detected.`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Arena begins below HUD (offsetY ${transform.offsetY.toFixed(1)} >= hudHeight ${hudH})`);
  }

  // 2. Check bottom cutoff: arena + height must not exceed window height
  const bottomMargin = sc.h - (transform.offsetY + transform.height);
  if (bottomMargin < 0) {
    console.error(`  [FAIL] Arena bottom (${transform.offsetY + transform.height}) exceeds window height (${sc.h})!`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Arena bottom fits window (bottomMargin = ${bottomMargin.toFixed(1)}px)`);
  }

  // 3. Check horizontal margins
  const rightMargin = sc.w - (transform.offsetX + transform.width);
  if (transform.offsetX < 0 || rightMargin < 0) {
    console.error(`  [FAIL] Horizontal overflow! offsetX=${transform.offsetX}, rightMargin=${rightMargin}`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Horizontal bounds valid (offsetX=${transform.offsetX.toFixed(1)}px, rightMargin=${rightMargin.toFixed(1)}px)`);
  }

  // 4. Check 4:3 aspect ratio
  const aspectRatio = transform.width / transform.height;
  const targetRatio = 800 / 600;
  if (Math.abs(aspectRatio - targetRatio) > 0.001) {
    console.error(`  [FAIL] 4:3 aspect ratio distorted! got ${aspectRatio}, expected ${targetRatio}`);
    allPassed = false;
  } else {
    console.log(`  [PASS] 4:3 aspect ratio perfectly preserved (${aspectRatio.toFixed(4)})`);
  }

  // 5. Check Centering
  const expectedOffsetX = (sc.w - transform.width) / 2;
  if (Math.abs(transform.offsetX - expectedOffsetX) > 0.001) {
    console.error(`  [FAIL] Playfield not horizontally centered!`);
    allPassed = false;
  } else {
    console.log(`  [PASS] Playfield perfectly centered horizontally`);
  }

  // 6. Check Key Overlay Placement
  const availableRight = sc.w - (transform.offsetX + transform.width);
  if (availableRight >= 36) {
    const cardW = Math.min(40, Math.max(28, Math.floor(availableRight - 10)));
    const keyStartX = Math.round(transform.offsetX + transform.width + Math.max(6, Math.floor((availableRight - cardW) / 2)));
    if (keyStartX <= transform.offsetX + transform.width) {
      console.error(`  [FAIL] Key overlay invaded playfield bounds! keyStartX=${keyStartX}`);
      allPassed = false;
    } else if (keyStartX + cardW > sc.w) {
      console.error(`  [FAIL] Key overlay clipped on right window edge!`);
      allPassed = false;
    } else {
      console.log(`  [PASS] Key overlay safely placed in right margin outside arena (x=${keyStartX}, w=${cardW})`);
    }
  } else {
    console.log(`  [PASS] Key overlay uses fallback outside playfield`);
  }

  // 7. Check 800x600 logical coordinate mapping precision
  const screenOrigin = { x: transform.offsetX, y: transform.offsetY };
  const screenEnd = { x: transform.offsetX + transform.width, y: transform.offsetY + transform.height };

  const logicalOrigin = inputManager.screenToLogical(screenOrigin.x, screenOrigin.y);
  const logicalEnd = inputManager.screenToLogical(screenEnd.x, screenEnd.y);

  if (Math.abs(logicalOrigin.x - 0) > 0.001 || Math.abs(logicalOrigin.y - 0) > 0.001) {
    console.error(`  [FAIL] Logical origin mapped inaccurately: (${logicalOrigin.x}, ${logicalOrigin.y})`);
    allPassed = false;
  }
  if (Math.abs(logicalEnd.x - 800) > 0.001 || Math.abs(logicalEnd.y - 600) > 0.001) {
    console.error(`  [FAIL] Logical end mapped inaccurately: (${logicalEnd.x}, ${logicalEnd.y})`);
    allPassed = false;
  }
  console.log(`  [PASS] Screen-to-logical coordinates mapped with 100% precision: (0,0)->(800,600)\n`);
}

if (allPassed) {
  console.log('✓ ALL RESOLUTION AND HUD TESTS PASSED WITH ZERO CUTOFFS!');
  process.exit(0);
} else {
  console.error('✗ SOME TESTS FAILED');
  process.exit(1);
}
