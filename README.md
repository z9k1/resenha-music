# Resenha Music

Um jogo de ritmo para navegador com mecânica de mira (aim-based rhythm game) inspirado em clássicos como *osu!standard*, com identidade visual neo-arcade original (fundo escuro com detalhes em ciano e rosa neon) e código 100% autoral.

---

## 🎮 Controles & Mecânicas

- **Mira:** Movimente o cursor usando o **mouse** ou caneta da **mesa digitalizadora**.
- **Acerto de Círculos:** Teclas <kbd>Z</kbd> e <kbd>X</kbd> (ou clique esquerdo do mouse).
- **Mecânica de Sliders:**
  - Acerte o início (círculo com approach circle) no timing correto.
  - Mantenha <kbd>Z</kbd>, <kbd>X</kbd> ou o botão do mouse pressionado.
  - Acompanhe a bolinha ao longo da trilha mantendo o cursor dentro do **Follow Circle**.
  - Colete os **Slider Ticks** intermediários para bônus de pontuação e combo.
  - Acompanhe as **Setas de Retorno (Reversals)** nos sliders de repetição.
  - **Recuperação de Tracking:** se perder temporariamente o contato, reponha o cursor no Follow Circle e segure a tecla para continuar pontuando!
- **Navegação na Seleção de Músicas:** Teclas de seta <kbd>↑</kbd> e <kbd>↓</kbd> (ou clique no card) e tecla <kbd>ENTER</kbd> para iniciar.
- **Pausar / Retomar:** Pressione a tecla <kbd>ESC</kbd>.
- **Reinício Rápido:** Pressione a tecla <kbd>R</kbd>.

---

## 🎵 Músicas e Beatmaps Disponíveis

1. **Alô cachorrada!**
   - **Artista:** victor_tirolla_oliveira
   - **Gênero:** Funk / Rap / Trap
   - **Tempo:** 163 BPM • **Duração:** 2:11
   - **Dificuldade:** Insane ★ 4.2 (música completa com 363 notas, incluindo sliders retos no drop de bateria, sliders curvos amplos e reversos)
   - **Arquivo:** `public/songs/alo-cachorrada.mp3`

2. **Dalsão no Suco**
   - **Artista:** miguelao2
   - **Gênero:** Pagode / Partido-Alto Cômico
   - **Tempo:** 110 BPM • **Duração:** 1:31
   - **Dificuldade:** Normal ★ 2.8 (música completa com 185 notas, integrando sliders suaves de cavaquinho, reversões sincopadas de pandeiro e finalização resolutiva)
   - **Arquivo:** `public/songs/dalsao-no-suco.mp3`

3. **Resenha Groove [Demo Synth]**
   - **Artista:** Antigravity Sound Lab
   - **Gênero:** Synthwave / Chiptune Original
   - **Tempo:** 130 BPM • **Duração:** 0:30
   - **Dificuldade:** Tutorial Demo ★ 2.0 (sliders retos, curvas Bezier e reversão final)

---

## 🚀 Tecnologias

- **TypeScript** (arquitetura modular com tipagem estrita)
- **HTML5 Canvas 2D** (renderização em 60/120+ FPS no formato 4:3 com High-DPI / Retina)
- **Web Audio API** (relógio de jogo em tempo real sincronizado com `audioContext.currentTime`, decodificação de MP3, prévias sonoras com fade e hitsounds de baixa latência)
- **Vite** (build estático com `base: './'` totalmente compatível com GitHub Pages)

---

## 📦 Como Testar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra seu navegador em `http://localhost:3000/`.
4. Clique em **"▶ ESCOLHER MÚSICA & JOGAR"** para abrir o menu de seleção com prévia de áudio e selecionar seu beatmap.

---

## 🌐 Publicação no GitHub Pages

```bash
npm run build
```

Os arquivos na pasta `dist/` estão prontos para publicação estática.
