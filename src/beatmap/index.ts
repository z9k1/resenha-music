import type { Beatmap } from '../types/index.ts';
import { dalsaoNoSucoBeatmap } from './maps/dalsaoNoSuco.ts';
import { suaRifaNaoVouComprarBeatmap } from './maps/suaRifaNaoVouComprar.ts';
import { quemFiscalizaOFiscalBeatmap } from './maps/quemFiscalizaOFiscal.ts';
import { podNoBanheiroBeatmap } from './maps/podNoBanheiro.ts';
import { aloCachorradaBeatmap } from './maps/aloCachorrada.ts';
import { resenhaGrooveBeatmap } from './maps/resenhaGroove.ts';

export const BEATMAPS: Beatmap[] = [
  suaRifaNaoVouComprarBeatmap,
  quemFiscalizaOFiscalBeatmap,
  podNoBanheiroBeatmap,
  dalsaoNoSucoBeatmap,
  aloCachorradaBeatmap,
  resenhaGrooveBeatmap,
];

export function getAllBeatmaps(): Beatmap[] {
  return BEATMAPS;
}

export function getBeatmapById(id: string): Beatmap | undefined {
  return BEATMAPS.find((b) => b.id === id);
}

export function getDefaultBeatmap(): Beatmap {
  return suaRifaNaoVouComprarBeatmap;
}
