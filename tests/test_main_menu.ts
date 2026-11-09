import { AudioEngine } from '../src/audio/AudioEngine.ts';
import { UIManager } from '../src/ui/UIManager.ts';
import { getDefaultBeatmap, BEATMAPS } from '../src/beatmap/index.ts';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

// Mock browser environment for DOM and AudioContext testing
const localStorageMock: Record<string, string> = {};
(globalThis as unknown as { localStorage: Storage }).localStorage = {
  getItem: (key: string) => localStorageMock[key] ?? null,
  setItem: (key: string, val: string) => {
    localStorageMock[key] = val.toString();
  },
  removeItem: (key: string) => {
    delete localStorageMock[key];
  },
  clear: () => {
    for (const k in localStorageMock) delete localStorageMock[k];
  },
  length: 0,
  key: () => null,
};

console.log('=== TEST 1: AudioEngine Volume & Persistence ===');
{
  const audio = new AudioEngine();
  audio.setMusicVolume(0.72);
  audio.setSfxVolume(0.88);
  audio.setMasterVolume(0.95);

  assert(Math.abs(audio.getMusicVolume() - 0.72) < 0.001, 'Music volume should be 0.72');
  assert(Math.abs(audio.getSfxVolume() - 0.88) < 0.001, 'SFX volume should be 0.88');
  assert(Math.abs(audio.getMasterVolume() - 0.95) < 0.001, 'Master volume should be 0.95');

  assert(localStorageMock['resenha_music_vol'] === '0.72', 'Music volume persisted in localStorage');
  assert(localStorageMock['resenha_sfx_vol'] === '0.88', 'SFX volume persisted in localStorage');
  assert(localStorageMock['resenha_master_vol'] === '0.95', 'Master volume persisted in localStorage');

  // New instance loads from localStorage
  const audio2 = new AudioEngine();
  assert(Math.abs(audio2.getMusicVolume() - 0.72) < 0.001, 'Audio2 loaded persisted music volume');
  assert(Math.abs(audio2.getSfxVolume() - 0.88) < 0.001, 'Audio2 loaded persisted SFX volume');
  assert(Math.abs(audio2.getMasterVolume() - 0.95) < 0.001, 'Audio2 loaded persisted master volume');

  console.log('✓ TEST 1 PASSED: Volumes get, set, and persist reliably in localStorage');
}

console.log('\n=== TEST 2: UIManager Start Screen & Interactions ===');
{
  // Minimal DOM mocking
  class MockElement {
    public id: string = '';
    public className: string = '';
    public innerHTML: string = '';
    public style: Record<string, string> = {};
    public classList = {
      classes: new Set<string>(),
      add: (c: string) => this.classList.classes.add(c),
      remove: (c: string) => this.classList.classes.delete(c),
      toggle: (c: string, force?: boolean) => {
        if (force !== undefined) {
          if (force) this.classList.classes.add(c);
          else this.classList.classes.delete(c);
        } else {
          if (this.classList.classes.has(c)) this.classList.classes.delete(c);
          else this.classList.classes.add(c);
        }
      },
      contains: (c: string) => this.classList.classes.has(c),
    };
    public children: MockElement[] = [];
    public addEventListener(_ev: string, _cb: Function) {}
    public appendChild(child: MockElement) {
      this.children.push(child);
      return child;
    }
    public remove() {}
  }

  const container = new MockElement();
  (globalThis as unknown as { document: any }).document = {
    getElementById: () => new MockElement(),
    querySelectorAll: () => [],
    addEventListener: () => {},
  };

  let navigatedToSelect = false;
  let menuAudioStarted = false;
  let sfxTested = false;

  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {
      navigatedToSelect = true;
    },
    onSelectSong: () => {},
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
    onStartMenuAudio: () => {
      menuAudioStarted = true;
    },
    onTestHitsound: () => {
      sfxTested = true;
    },
    getAudioVolumes: () => ({ master: 0.95, music: 0.72, sfx: 0.88 }),
  });

  ui.showStartScreen();
  assert(container.innerHTML.includes('title-screen-container'), 'HTML contains title-screen-container');
  assert(container.innerHTML.includes('logo-resenha.png'), 'HTML references logo-resenha.png mascot');
  assert(container.innerHTML.includes('JOGAR'), 'HTML includes JOGAR button');
  assert(container.innerHTML.includes('CONFIGURAÇÕES'), 'HTML includes CONFIGURAÇÕES button');
  assert(container.innerHTML.includes('CRÉDITOS'), 'HTML includes CRÉDITOS button');

  // Verify updated footer requirements
  assert(container.innerHTML.includes('RESENHA MUSIC 2.0'), 'Footer contains RESENHA MUSIC 2.0');
  assert(container.innerHTML.includes('Projeto Cultural • 2026'), 'Footer contains Projeto Cultural • 2026');
  assert(!container.innerHTML.includes('MASCOTE LORO'), 'Footer does not contain MASCOTE LORO');

  // Verify transition to active state
  ui.setMainMenuActive(true);
  assert(menuAudioStarted, 'Activating menu triggers menu ambient audio start');
  assert(sfxTested, 'Activating menu triggers UI click audio feedback');

  console.log('✓ TEST 2 PASSED: Main Menu initializes and transitions cleanly');
}

console.log('\n=== TEST 3: Default Beatmap (Sua Rifa Não Vou Comprar) & Song Metadata ===');
{
  const defaultMap = getDefaultBeatmap();
  assert(defaultMap.id === 'sua-rifa-nao-vou-comprar', 'Default beatmap must be sua-rifa-nao-vou-comprar');
  assert(BEATMAPS[0].id === 'sua-rifa-nao-vou-comprar', 'First beatmap in list must be sua-rifa-nao-vou-comprar');
  console.log(`✓ TEST 3 PASSED: Initial song set to "${defaultMap.title}" (${defaultMap.id})`);

  // Verify artists and titles
  const suaRifa = BEATMAPS.find((b) => b.id === 'sua-rifa-nao-vou-comprar')!;
  const fiscal = BEATMAPS.find((b) => b.id === 'quem-fiscaliza-o-fiscal')!;
  const mapeamento = BEATMAPS.find((b) => b.id === 'mapeamento')!;
  const pod = BEATMAPS.find((b) => b.id === 'pod-no-banheiro')!;
  const dalsao = BEATMAPS.find((b) => b.id === 'dalsao-no-suco')!;
  const alo = BEATMAPS.find((b) => b.id === 'alo-cachorrada')!;
  const groove = BEATMAPS.find((b) => b.id === 'resenha-groove-demo')!;

  assert(suaRifa.artist === 'Desconhecido', 'Sua Rifa artist must be Desconhecido');
  assert(fiscal.title === 'Quem Fiscaliza o Fiscal?', 'Quem Fiscaliza o Fiscal title must be correct');
  assert(fiscal.artist === 'Desconhecido', 'Quem Fiscaliza o Fiscal artist must be Desconhecido');
  assert(mapeamento.title === 'Mapeamento', 'Mapeamento title must be correct');
  assert(mapeamento.artist === 'Desconhecido', 'Mapeamento artist must be Desconhecido');
  assert(pod.title === 'Pod no Banheiro', 'Pod no Banheiro title must be Pod no Banheiro');
  assert(pod.artist === 'Desconhecido', 'Pod no Banheiro artist must be Desconhecido');
  assert(dalsao.artist === 'Desconhecido', 'Dalsão artist must be Desconhecido');
  assert(alo.artist === 'Desconhecido', 'Alô cachorrada artist must be Desconhecido');
  assert(groove.title === 'Ritimo da resenha', 'Resenha groove title must be "Ritimo da resenha"');
  assert(groove.artist === 'Miguel', 'Ritimo da resenha artist must be Miguel');
  console.log('✓ Song metadata verified: Desconhecido for 6 songs, Miguel for Ritimo da resenha');
}

console.log('\n=== TEST 4: Credits Modal & Content Notice ===');
{
  const elementsById = new Map<string, any>();

  class MockElement {
    private _id: string = '';
    public get id(): string {
      return this._id;
    }
    public set id(val: string) {
      this._id = val;
      elementsById.set(val, this);
    }
    public className: string = '';
    public innerHTML: string = '';
    public children: MockElement[] = [];
    public addEventListener(_ev: string, _cb: Function) {}
    public appendChild(child: MockElement) {
      this.children.push(child);
      return child;
    }
    public remove() {
      const idx = container.children.indexOf(this);
      if (idx !== -1) container.children.splice(idx, 1);
      if (this._id) elementsById.delete(this._id);
    }
  }

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

  const ui = new UIManager(container as unknown as HTMLElement, {
    onGoToSongSelect: () => {},
    onSelectSong: () => {},
    onPlaySong: () => {},
    onBackToMainMenu: () => {},
    onResume: () => {},
    onRestart: () => {},
    onReturnToSongSelect: () => {},
  });

  ui.openCreditsModal();
  const creditsOverlay = container.children[0];
  assert(creditsOverlay !== undefined, 'Credits overlay was appended to container');

  const creditsHtml = creditsOverlay.innerHTML;
  assert(creditsHtml.includes('CRÉDITOS & EQUIPE'), 'Title is CRÉDITOS & EQUIPE');
  assert(creditsHtml.includes('Resenha Music — Projeto Cultural 2026'), 'Subtitle is Resenha Music — Projeto Cultural 2026');

  // Verify all 3 team members with equal visual prominence
  assert(creditsHtml.includes('Miguel'), 'Contains Miguel');
  assert(creditsHtml.includes('Victor Tirolla'), 'Contains Victor Tirolla');
  assert(creditsHtml.includes('Mateus'), 'Contains Mateus');

  // Verify project description
  assert(
    creditsHtml.includes('Resenha Music é um jogo de ritmo desenvolvido como projeto escolar de incentivo à cultura'),
    'Contains correct Sobre o projeto text'
  );

  // Verify content warning text
  assert(
    creditsHtml.includes('Algumas músicas podem conter linguagem explícita e conteúdo humorístico'),
    'Credits contains Aviso de Conteúdo text'
  );

  // Verify removed sections
  assert(!creditsHtml.includes('Loro (Mascote Oficial)'), 'Does not contain generic Mascot credit');
  assert(!creditsHtml.includes('Arte Neon do Papagaio'), 'Does not contain Arte Neon text');
  assert(!creditsHtml.includes('Cyber Aesthetic'), 'Does not contain Cyber Aesthetic text');
  assert(!creditsHtml.includes('Equipe de Design & Arte'), 'Does not contain Equipe de Design & Arte');
  assert(!creditsHtml.includes('Turma & Professores'), 'Does not contain generic unconfirmed thank-yous');

  // Test close credits modal
  ui.closeCreditsModal();
  assert(container.children.length === 0, 'Closing credits removes overlay');

  // Test Song Select screen contains content warning
  ui.showSongSelectScreen(BEATMAPS);
  assert(
    container.innerHTML.includes('AVISO DE CONTEÚDO') || container.innerHTML.includes('Aviso de Conteúdo'),
    'Song select screen includes content warning'
  );
  assert(
    container.innerHTML.includes('Algumas músicas podem conter linguagem explícita e conteúdo humorístico'),
    'Song select screen contains content warning text'
  );

  console.log('✓ TEST 4 PASSED: Credits modal and content warnings verified successfully');
}

console.log('\n=== ALL MAIN MENU TESTS PASSED! ===');
