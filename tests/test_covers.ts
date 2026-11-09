import fs from 'fs';
import path from 'path';
import { BEATMAPS, getBeatmapById } from '../src/beatmap/index.ts';
import { UIManager } from '../src/ui/UIManager.ts';

function assert(cond: boolean, msg: string) {
  if (!cond) throw new Error(`Assertion failed: ${msg}`);
}

console.log('=== TEST 1: Beatmaps Cover URLs and Asset Files ===');

for (const b of BEATMAPS) {
  assert(!!b.coverUrl, `Beatmap "${b.title}" must have a coverUrl defined`);
  console.log(`  Map: ${b.title} -> coverUrl: ${b.coverUrl}`);

  // Check physical file exists in public/ directory
  const relativePath = b.coverUrl!.replace(/^\.\//, '');
  const physicalPath = path.resolve(process.cwd(), 'public', relativePath);
  assert(fs.existsSync(physicalPath), `Physical cover file must exist: ${physicalPath}`);
  const stats = fs.statSync(physicalPath);
  assert(stats.size > 0, `Cover file must not be empty (${stats.size} bytes)`);
  console.log(`  ✓ Asset verified: ${relativePath} (${(stats.size / 1024).toFixed(1)} KB)`);
}

const rifa = getBeatmapById('sua-rifa-nao-vou-comprar');
assert(rifa?.coverUrl === './covers/sua-rifa-nao-vou-comprar.jpg', 'Sua Rifa cover must be ./covers/sua-rifa-nao-vou-comprar.jpg');

const fiscal = getBeatmapById('quem-fiscaliza-o-fiscal');
assert(fiscal?.coverUrl === './covers/quem-fiscaliza-o-fiscal.jpg', 'Quem Fiscaliza o Fiscal cover must be ./covers/quem-fiscaliza-o-fiscal.jpg');

const map = getBeatmapById('mapeamento');
assert(map?.coverUrl === './covers/mapeamento.jpg', 'Mapeamento cover must be ./covers/mapeamento.jpg');

const pod = getBeatmapById('pod-no-banheiro');
assert(pod?.coverUrl === './covers/pod-no-banheiro.jpg', 'Pod no Banheiro cover must be ./covers/pod-no-banheiro.jpg');

const dalsao = getBeatmapById('dalsao-no-suco');
assert(dalsao?.coverUrl === './covers/dalsao.jpeg', 'Dalsão cover must be ./covers/dalsao.jpeg');

const alo = getBeatmapById('alo-cachorrada');
assert(alo?.coverUrl === './covers/alocachorrada.jpg', 'Alô cachorrada cover must be ./covers/alocachorrada.jpg');

const groove = getBeatmapById('resenha-groove-demo');
assert(groove?.coverUrl === './covers/resenha-groove.png', 'Resenha Groove cover must be ./covers/resenha-groove.png');

console.log('✓ TEST 1 PASSED: All 7 songs have valid relative covers in project assets');

console.log('\n=== TEST 2: Song Select UI Thumbnails and Spotlight ===');
{
  class MockElement {
    public id: string = '';
    public className: string = '';
    public innerHTML: string = '';
    public src: string = '';
    public alt: string = '';
    public textContent: string = '';
    public children: MockElement[] = [];
    public classList = {
      add: (_c: string) => {},
      remove: (_c: string) => {},
    };
    public addEventListener(_ev: string, _cb: Function) {}
    public appendChild(child: MockElement) {
      this.children.push(child);
      return child;
    }
    public remove() {}
    public scrollIntoView() {}
    public getAttribute(_attr: string) { return ''; }
  }

  const elementsById = new Map<string, MockElement>();
  const container = new MockElement();

  (globalThis as unknown as { document: any }).document = {
    getElementById: (id: string) => elementsById.get(id) ?? null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: (_tag: string) => new MockElement(),
  };

  let selectedMapId = '';
  let dimValue = 0.75;

  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {},
    onSelectSong: (b) => {
      selectedMapId = b.id;
    },
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
    onBackgroundDimChange: (dim) => {
      dimValue = dim;
    },
    getBackgroundDim: () => dimValue,
  });

  ui.setBeatmaps(BEATMAPS);
  ui.showSongSelectScreen(BEATMAPS);

  // Check thumbnails in song list
  assert(container.innerHTML.includes('song-card-thumb-wrap'), 'Song list cards include song-card-thumb-wrap');
  assert(container.innerHTML.includes('covers/sua-rifa-nao-vou-comprar.jpg'), 'Song list includes sua-rifa-nao-vou-comprar.jpg thumb');
  assert(container.innerHTML.includes('covers/pod-no-banheiro.jpg'), 'Song list includes pod-no-banheiro.jpg thumb');
  assert(container.innerHTML.includes('covers/dalsao.jpeg'), 'Song list includes dalsao.jpeg thumb');
  assert(container.innerHTML.includes('covers/alocachorrada.jpg'), 'Song list includes alocachorrada.jpg thumb');
  assert(container.innerHTML.includes('covers/resenha-groove.png'), 'Song list includes resenha-groove.png thumb');

  // Check spotlight hero cover banner
  assert(container.innerHTML.includes('spotlight-cover-hero'), 'Spotlight card includes spotlight-cover-hero banner');
  assert(container.innerHTML.includes('spotlight-banner-img'), 'Spotlight card includes spotlight-banner-img');

  console.log('✓ TEST 2 PASSED: Song select renders thumbnails and spotlight hero banner');
}

console.log('\n=== TEST 3: Settings Modal Background Dim Slider ===');
{
  class MockElement {
    public id: string = '';
    public className: string = '';
    public innerHTML: string = '';
    public value: string = '75';
    public textContent: string = '';
    public children: MockElement[] = [];
    public addEventListener(_ev: string, _cb: Function) {}
    public appendChild(child: MockElement) {
      this.children.push(child);
      return child;
    }
    public remove() {}
  }

  const elementsById = new Map<string, MockElement>();
  const container = new MockElement();

  (globalThis as unknown as { document: any }).document = {
    getElementById: (id: string) => elementsById.get(id) ?? null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    createElement: (_tag: string) => {
      const el = new MockElement();
      return el;
    },
  };

  let dimChangedTo = -1;
  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {},
    onSelectSong: () => {},
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
    onBackgroundDimChange: (d) => {
      dimChangedTo = d;
    },
    getBackgroundDim: () => 0.75,
  });

  ui.openSettingsModal();
  const settingsModal = container.children[0];
  assert(settingsModal !== undefined, 'Settings modal was created');
  assert(settingsModal.innerHTML.includes('slider-bg-dim'), 'Settings modal includes slider-bg-dim');
  assert(settingsModal.innerHTML.includes('Escurecimento do Fundo (Dim)'), 'Settings modal includes Escurecimento do Fundo title');

  ui.closeSettingsModal();
  console.log('✓ TEST 3 PASSED: Settings modal integrates background dim slider seamlessly');
}

console.log('\n=== ALL SONG COVERS AND BACKGROUND TESTS PASSED! ===');
