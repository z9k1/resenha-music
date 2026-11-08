import { AudioEngine } from '../src/audio/AudioEngine.ts';
import { BEATMAPS } from '../src/beatmap/index.ts';

function assert(condition: boolean, msg: string) {
  if (!condition) throw new Error(`Assertion failed: ${msg}`);
}

const mockStorage = new Map<string, string>();
const localStorageMock = {
  getItem: (key: string) => mockStorage.get(key) ?? null,
  setItem: (key: string, val: string) => mockStorage.set(key, String(val)),
  removeItem: (key: string) => mockStorage.delete(key),
  clear: () => mockStorage.clear(),
};

class MockAudioParam {
  public value: number = 1.0;
  public cancelScheduledValues(_time: number) {}
  public setValueAtTime(val: number, _time: number) {
    this.value = val;
  }
  public linearRampToValueAtTime(val: number, _time: number) {
    this.value = val;
  }
}

class MockAudioNode {
  public gain = new MockAudioParam();
  public destinationNode: MockAudioNode | null = null;
  public connect(dest: MockAudioNode) {
    this.destinationNode = dest;
    return dest;
  }
  public disconnect() {
    this.destinationNode = null;
  }
}

class MockAudioBufferSourceNode extends MockAudioNode {
  public buffer: any = null;
  public loop: boolean = false;
  public start(_when?: number, _offset?: number) {}
  public stop() {}
}

class MockAudioContext {
  public currentTime = 10;
  public sampleRate = 44100;
  public state = 'running';
  public destination = new MockAudioNode();
  public createGain() {
    return new MockAudioNode();
  }
  public createBufferSource() {
    return new MockAudioBufferSourceNode();
  }
  public createBuffer(_channels: number, length: number, sampleRate: number) {
    const data = new Float32Array(length);
    return {
      duration: length / sampleRate,
      numberOfChannels: 1,
      length,
      sampleRate,
      getChannelData: () => data,
    };
  }
  public async resume() {}
  public async decodeAudioData(_buf: ArrayBuffer) {
    return { duration: 120 };
  }
}

(globalThis as unknown as { window: any }).window = {
  localStorage: localStorageMock,
  AudioContext: MockAudioContext,
};
(globalThis as unknown as { localStorage: any }).localStorage = localStorageMock;

console.log('=== TEST 1: Default Lowered Volume Levels ===');
{
  mockStorage.clear();
  const audio = new AudioEngine();
  assert(Math.abs(audio.getMusicVolume() - 0.35) < 0.001, `Default music volume must be 0.35, got ${audio.getMusicVolume()}`);
  assert(Math.abs(audio.getMasterVolume() - 0.70) < 0.001, `Default master volume must be 0.70, got ${audio.getMasterVolume()}`);
  assert(Math.abs(audio.getSfxVolume() - 0.65) < 0.001, `Default SFX volume must be 0.65, got ${audio.getSfxVolume()}`);
  console.log('✓ TEST 1 PASSED: Fresh initial volume defaults are pleasantly lowered (35% music, 70% master)');
}

console.log('\n=== TEST 2: Preview Routes Through musicGain and Follows User Volume Settings ===');
{
  mockStorage.clear();
  const audio = new AudioEngine();
  await audio.init();

  const musicGain = (audio as any).musicGain as MockAudioNode;
  const previewGain = (audio as any).previewGain as MockAudioNode;
  const masterGain = (audio as any).masterGain as MockAudioNode;

  assert(previewGain.destinationNode === musicGain, 'previewGain must route directly through musicGain');
  assert(musicGain.destinationNode === masterGain, 'musicGain must route directly through masterGain');

  // Change music volume to 20%
  audio.setMusicVolume(0.20);
  assert(Math.abs(musicGain.gain.value - 0.20) < 0.001, `musicGain must reflect 0.20, got ${musicGain.gain.value}`);

  // Play preview of synth track or mock fetch
  (globalThis as unknown as { fetch: any }).fetch = async () => ({
    ok: true,
    arrayBuffer: async () => new ArrayBuffer(1024),
  });

  const map = BEATMAPS[0];
  await audio.playPreview(map);

  // The preview source must be connected to previewGain, which is routed into musicGain (at 0.20)
  const previewSource = (audio as any).previewSource as MockAudioBufferSourceNode;
  assert(previewSource !== null, 'previewSource must be active');
  assert(previewSource.destinationNode === previewGain, 'previewSource connects to previewGain');
  assert(previewGain.destinationNode === musicGain, 'previewGain routes to musicGain');
  assert(Math.abs(musicGain.gain.value - 0.20) < 0.001, 'musicGain remains at user-configured 0.20');

  // When changing volume during active preview, it updates immediately
  audio.setMusicVolume(0.12);
  assert(Math.abs(musicGain.gain.value - 0.12) < 0.001, 'Live slider adjustment immediately adjusts musicGain');

  // When setting to 0 (mute), it fully mutes
  audio.setMusicVolume(0);
  assert(musicGain.gain.value === 0, 'Volume 0 fully mutes musicGain');

  console.log('✓ TEST 2 PASSED: Track preview strictly respects and scales with user music volume settings');
}

console.log('\n=== ALL AUDIO VOLUME TESTS PASSED! ===');
