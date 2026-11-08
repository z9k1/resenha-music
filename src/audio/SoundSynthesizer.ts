/**
 * SoundSynthesizer: Pure procedural audio generator using Web Audio API buffers.
 * Creates drum hits, synth chords, basslines, metronome, and crisp hitsounds with zero external assets.
 */
export class SoundSynthesizer {
  private ctx: AudioContext;

  constructor(ctx: AudioContext) {
    this.ctx = ctx;
  }

  /**
   * Generates a snappy, satisfying hitsound (osu!-like crisp click/ting)
   */
  public createHitsoundBuffer(): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const duration = 0.07; // 70ms
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      // Exponential decay envelope
      const env = Math.exp(-t * 60);

      // Dual sine frequency for metallic punch + high transient click
      const f1 = 1200 * Math.exp(-t * 30);
      const f2 = 2400;
      const tone = Math.sin(2 * Math.PI * f1 * t) * 0.6 + Math.sin(2 * Math.PI * f2 * t) * 0.4;

      // Initial noise burst for mechanical snap
      const noise = (Math.random() * 2 - 1) * Math.exp(-t * 120) * 0.35;

      data[i] = (tone * 0.7 + noise) * env;
    }

    return buffer;
  }

  /**
   * Generates a crisp high tick sound for slider ticks
   */
  public createSliderTickBuffer(): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const duration = 0.035; // 35ms
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const env = Math.exp(-t * 90);
      const tone = Math.sin(2 * Math.PI * 3200 * t) * 0.7;
      const noise = (Math.random() * 2 - 1) * Math.exp(-t * 180) * 0.3;
      data[i] = (tone + noise) * env * 0.45;
    }

    return buffer;
  }

  /**
   * Generates a soft dull "miss" thud
   */
  public createMissSoundBuffer(): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const duration = 0.12; // 120ms
    const length = Math.floor(sampleRate * duration);
    const buffer = this.ctx.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);

    for (let i = 0; i < length; i++) {
      const t = i / sampleRate;
      const env = Math.exp(-t * 25);
      // Pitch drop from 180Hz down to 40Hz
      const freq = 180 * Math.exp(-t * 20);
      const tone = Math.sin(2 * Math.PI * freq * t);
      const noise = (Math.random() * 2 - 1) * 0.15 * Math.exp(-t * 30);
      data[i] = (tone * 0.6 + noise) * env * 0.5;
    }

    return buffer;
  }

  /**
   * Generates an energetic original electronic rhythm track ("Ritimo da resenha")
   * BPM = 130, length = 16 bars (64 beats) ~ 29.5 seconds
   */
  public generateSynthTrack(bpm: number, totalBeats: number = 64): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const beatDuration = 60 / bpm;
    const totalDuration = totalBeats * beatDuration + 1.0; // slight tail
    const length = Math.floor(sampleRate * totalDuration);
    const buffer = this.ctx.createBuffer(2, length, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    // Synthesize kick, snare, hi-hat, bass, and synth melody directly into stereo buffer
    const kickPattern = [1, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 0,  1, 0, 0, 0]; // 4 on the floor
    const snarePattern = [0, 0, 0, 0,  1, 0, 0, 0,  0, 0, 0, 0,  1, 0, 0, 0]; // 2 and 4
    const hatPattern =   [0, 0, 1, 0,  0, 0, 1, 0,  0, 0, 1, 0,  0, 0, 1, 0]; // off-beat eighths

    // Bass notes (frequencies in Hz: F2, Ab2, Bb2, C3, Eb3)
    const bassline = [87.31, 87.31, 103.83, 116.54, 87.31, 130.81, 116.54, 103.83];
    // Synth melody arpeggio (frequencies in Hz)
    const melodyScale = [349.23, 415.30, 466.16, 523.25, 622.25, 698.46];

    const sixteenthDuration = beatDuration / 4;
    const totalSixteenths = totalBeats * 4;

    for (let step = 0; step < totalSixteenths; step++) {
      const stepStartTime = step * sixteenthDuration;
      const stepStartIndex = Math.floor(stepStartTime * sampleRate);
      const stepInBar = step % 16;
      const currentBeat = Math.floor(step / 4);

      // 1. Kick Drum (every quarter beat)
      if (kickPattern[stepInBar] && currentBeat >= 4) { // Kick enters on bar 2
        this.renderKick(left, right, stepStartIndex, sampleRate);
      }

      // 2. Snare / Clap (on 2 and 4)
      if (snarePattern[stepInBar] && currentBeat >= 8) { // Snare enters on bar 3
        this.renderSnare(left, right, stepStartIndex, sampleRate);
      }

      // 3. Hi-Hat
      if ((hatPattern[stepInBar] || (currentBeat >= 16 && step % 2 === 0)) && currentBeat >= 4) {
        const isAccent = stepInBar === 8;
        this.renderHiHat(left, right, stepStartIndex, sampleRate, isAccent);
      }

      // 4. Bassline (16th note groove)
      if (step % 2 === 0 && currentBeat >= 8 && currentBeat < 56) {
        const noteIndex = Math.floor(step / 4) % bassline.length;
        const freq = bassline[noteIndex];
        this.renderBassNote(left, right, stepStartIndex, sixteenthDuration * 1.8, sampleRate, freq);
      }

      // 5. Synth Pluck / Arpeggio
      if (currentBeat >= 0) {
        const melIdx = (step * 3) % melodyScale.length;
        const freq = melodyScale[melIdx];
        const pan = Math.sin(step * 0.7) * 0.4; // stereo panning movement
        this.renderPluck(left, right, stepStartIndex, sixteenthDuration * 2.2, sampleRate, freq, pan);
      }
    }

    // Apply master soft limiter / normalization
    let peak = 0.0001;
    for (let i = 0; i < length; i++) {
      peak = Math.max(peak, Math.abs(left[i]), Math.abs(right[i]));
    }
    const gain = Math.min(0.85 / peak, 1.2);
    for (let i = 0; i < length; i++) {
      left[i] = Math.tanh(left[i] * gain);
      right[i] = Math.tanh(right[i] * gain);
    }

    return buffer;
  }

  /**
   * Generates a clean rhythmic metronome AudioBuffer (accents on 1)
   */
  public generateMetronomeTrack(bpm: number, totalBeats: number = 64): AudioBuffer {
    const sampleRate = this.ctx.sampleRate;
    const beatDuration = 60 / bpm;
    const totalDuration = totalBeats * beatDuration + 0.5;
    const length = Math.floor(sampleRate * totalDuration);
    const buffer = this.ctx.createBuffer(2, length, sampleRate);
    const left = buffer.getChannelData(0);
    const right = buffer.getChannelData(1);

    for (let beat = 0; beat < totalBeats; beat++) {
      const beatStartTime = beat * beatDuration;
      const startIndex = Math.floor(beatStartTime * sampleRate);
      const isAccent = beat % 4 === 0;

      const clickFreq = isAccent ? 1760 : 880; // A6 or A5
      const clickDuration = 0.05;
      const clickSamples = Math.floor(clickDuration * sampleRate);

      for (let i = 0; i < clickSamples; i++) {
        if (startIndex + i >= length) break;
        const t = i / sampleRate;
        const env = Math.exp(-t * 60);
        const sample = Math.sin(2 * Math.PI * clickFreq * t) * env * (isAccent ? 0.7 : 0.4);
        left[startIndex + i] += sample;
        right[startIndex + i] += sample;
      }
    }

    return buffer;
  }

  private renderKick(left: Float32Array, right: Float32Array, startIndex: number, sampleRate: number): void {
    const duration = 0.28;
    const samples = Math.floor(duration * sampleRate);
    for (let i = 0; i < samples; i++) {
      const idx = startIndex + i;
      if (idx >= left.length) break;
      const t = i / sampleRate;
      const env = Math.exp(-t * 14);
      // Fast pitch sweep from 150Hz to 42Hz
      const freq = 42 + 108 * Math.exp(-t * 35);
      const val = Math.sin(2 * Math.PI * freq * t) * env * 0.75;
      left[idx] += val;
      right[idx] += val;
    }
  }

  private renderSnare(left: Float32Array, right: Float32Array, startIndex: number, sampleRate: number): void {
    const duration = 0.2;
    const samples = Math.floor(duration * sampleRate);
    for (let i = 0; i < samples; i++) {
      const idx = startIndex + i;
      if (idx >= left.length) break;
      const t = i / sampleRate;
      const envTone = Math.exp(-t * 30);
      const envNoise = Math.exp(-t * 18);
      const tone = Math.sin(2 * Math.PI * 180 * t) * envTone * 0.3;
      const noise = (Math.random() * 2 - 1) * envNoise * 0.4;
      const val = tone + noise;
      left[idx] += val;
      right[idx] += val;
    }
  }

  private renderHiHat(left: Float32Array, right: Float32Array, startIndex: number, sampleRate: number, accent: boolean): void {
    const duration = accent ? 0.08 : 0.04;
    const samples = Math.floor(duration * sampleRate);
    for (let i = 0; i < samples; i++) {
      const idx = startIndex + i;
      if (idx >= left.length) break;
      const t = i / sampleRate;
      const env = Math.exp(-t * (accent ? 40 : 80));
      // Metallic noise approximation
      const noise = (Math.random() * 2 - 1) * env * (accent ? 0.25 : 0.15);
      left[idx] += noise;
      right[idx] += noise;
    }
  }

  private renderBassNote(left: Float32Array, right: Float32Array, startIndex: number, duration: number, sampleRate: number, freq: number): void {
    const samples = Math.floor(duration * sampleRate);
    for (let i = 0; i < samples; i++) {
      const idx = startIndex + i;
      if (idx >= left.length) break;
      const t = i / sampleRate;
      const env = Math.exp(-t * 6);
      // Saw-like rich bass with sub octave
      const fundamental = Math.sin(2 * Math.PI * freq * t);
      const sub = Math.sin(Math.PI * freq * t) * 0.6;
      const harmonic = Math.sin(4 * Math.PI * freq * t) * 0.25;
      const val = (fundamental + sub + harmonic) * env * 0.35;
      left[idx] += val;
      right[idx] += val;
    }
  }

  private renderPluck(left: Float32Array, right: Float32Array, startIndex: number, duration: number, sampleRate: number, freq: number, pan: number): void {
    const samples = Math.floor(duration * sampleRate);
    const leftGain = 0.5 * (1 - pan);
    const rightGain = 0.5 * (1 + pan);
    for (let i = 0; i < samples; i++) {
      const idx = startIndex + i;
      if (idx >= left.length) break;
      const t = i / sampleRate;
      const env = Math.exp(-t * 10);
      const tone1 = Math.sin(2 * Math.PI * freq * t);
      const tone2 = Math.sin(4 * Math.PI * freq * t) * 0.35;
      const val = (tone1 + tone2) * env * 0.2;
      left[idx] += val * leftGain;
      right[idx] += val * rightGain;
    }
  }
}
