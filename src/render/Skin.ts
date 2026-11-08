export const Skin = {
  // Color palette
  bgDark: '#08090e',
  bgPlayfield: '#0d0f18',
  playfieldBorder: 'rgba(0, 240, 255, 0.4)',
  playfieldBorderGlow: 'rgba(0, 240, 255, 0.15)',
  gridLine: 'rgba(255, 255, 255, 0.03)',

  comboColors: [
    { main: '#00f0ff', glow: 'rgba(0, 240, 255, 0.6)', inner: 'rgba(0, 240, 255, 0.15)' }, // Cyan
    { main: '#ff007f', glow: 'rgba(255, 0, 127, 0.6)', inner: 'rgba(255, 0, 127, 0.15)' }, // Neon Pink
    { main: '#ffd700', glow: 'rgba(255, 215, 0, 0.6)', inner: 'rgba(255, 215, 0, 0.15)' }, // Gold
    { main: '#00ff88', glow: 'rgba(0, 255, 136, 0.6)', inner: 'rgba(0, 255, 136, 0.15)' }, // Emerald
  ],

  judgements: {
    '300': { text: '300', color: '#00f0ff', glow: 'rgba(0, 240, 255, 0.8)' },
    '100': { text: '100', color: '#00ff88', glow: 'rgba(0, 255, 136, 0.8)' },
    '50': { text: '50', color: '#ffaa00', glow: 'rgba(255, 170, 0, 0.8)' },
    'MISS': { text: 'MISS', color: '#ff2244', glow: 'rgba(255, 34, 68, 0.8)' },
  },

  cursor: {
    inner: '#ffffff',
    outer: '#00f0ff',
    trail: 'rgba(0, 240, 255, 0.35)',
    glow: 'rgba(0, 240, 255, 0.5)',
  },

  fonts: {
    primary: '"Inter", "Montserrat", system-ui, -apple-system, sans-serif',
    display: '"Rajdhani", "Chakra Petch", "Impact", system-ui, sans-serif',
  },
};
