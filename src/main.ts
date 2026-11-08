import { Game } from './gameplay/Game.ts';
import './style.css';

window.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('game-canvas') as HTMLCanvasElement;
  const uiOverlay = document.getElementById('ui-overlay') as HTMLElement;

  if (!canvas || !uiOverlay) {
    console.error('Fatal: Missing #game-canvas or #ui-overlay elements');
    return;
  }

  const game = new Game(canvas, uiOverlay);

  // Attach to window for local debugging
  (window as unknown as { __resenhaGame: Game }).__resenhaGame = game;
});
