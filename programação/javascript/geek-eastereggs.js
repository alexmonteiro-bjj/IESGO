/**
 * ==========================================================================
 * ALEXVERSO — MÓDULO DE EASTER EGGS EXTRAS
 * JavaScript Puro | Totalmente independente
 * Conecta-se ao GeekBot (geek-assistant.js)
 * ==========================================================================
 */

(function (window, document) {
  "use strict";

  // ==========================================================================
  // SINTETIZADOR DE ÁUDIO RETRÔ (Puro Web Audio API - Sem arquivos externos)
  // ==========================================================================
  const SFX = {
    ctx: null,

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === "suspended") {
        this.ctx.resume().catch(() => {});
      }
    },

    playTone(freq, type, duration, delay = 0) {
      try {
        this.init();
        if (!this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type || "sine";
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + delay);
        osc.stop(this.ctx.currentTime + delay + duration);
      } catch (e) {
        // Áudio bloqueado pelo navegador silenciosamente
      }
    },

    // Jingle do Konami Code / Vitória
    playVictory() {
      const notes = [261.63, 329.63, 392.0, 523.25, 659.25, 783.99];
      notes.forEach((freq, i) => {
        this.playTone(freq, "triangle", 0.14, i * 0.08);
      });
    },

    // Som de sabre de luz Sith
    playSithHum() {
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(85, this.ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(65, this.ctx.currentTime + 1.2);

        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 1.2);
      } catch (e) {}
    },

    // Som de poder Super Saiyajin
    playSaiyajinRise() {
      try {
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.8);

        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.9);

        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.9);
      } catch (e) {}
    }
  };

  // ==========================================================================
  // OBJETO CENTRAL DE EASTER EGGS
  // ==========================================================================
  const GeekEasterEggs = {

    /**
     * Ponto de entrada chamado pelo GeekBot no chat
     * Retorna true se a mensagem acionou algum easter egg
     */
    executar(mensagemOriginal) {
      const clean = String(mensagemOriginal || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

      // 1. Matrix
      if (/\b(matrix|neo|pilula vermelha|digital rain)\b/.test(clean)) {
        this.abrirMatrix();
        return true;
      }

      // 2. Thanos Snap
      if (/\b(thanos|snap|estalar|manopla)\b/.test(clean)) {
        this.thanosSnap();
        return true;
      }

      // 3. Star Wars — Ordem 66 / Sith Mode
      if (/\b(66|ordem 66|vader|sith|lado sombrio|dark side)\b/.test(clean)) {
        this.ativarOrdem66();
        return true;
      }

      // 4. Harry Potter — Lumos & Nox
      if (/\b(lumos|varinha|luz magica)\b/.test(clean)) {
        this.ativarLumos();
        return true;
      }
      if (/\b(nox|apagar luz)\b/.test(clean)) {
        this.desativarLumos();
        return true;
      }

      // 5. Star Fox — Barrel Roll
      if (/\b(barrel roll|girar|do a barrel roll)\b/.test(clean)) {
        this.barrelRoll();
        return true;
      }

      // 6. Dragon Ball — Super Saiyajin
      if (/\b(kamehameha|8000|mais de 8000|saiyajin|goku)\b/.test(clean)) {
        this.superSaiyajin();
        return true;
      }

      // 7. Konami Code
      if (/\b(konami|god mode|30 vidas)\b/.test(clean)) {
        this.ativarKonamiMode();
        return true;
      }

      return false;
    },

    // ------------------------------------------------------------------------
    // 1. MATRIX RAIN
    // ------------------------------------------------------------------------
    abrirMatrix() {
      if (document.getElementById("gee-matrix-modal")) return;

      const modal = document.createElement("div");
      modal.id = "gee-matrix-modal";

      modal.innerHTML = `
        <canvas id="gee-matrix-canvas"></canvas>
        <div class="gee-matrix-hud">
          <div class="gee-matrix-title">
            <span>[ SYSTEM: CONSTRUCT v2.1999 ]</span>
            <span>MATRIX PROTOCOL</span>
          </div>
          <div class="gee-matrix-typing" id="geeMatrixText"></div>
          <button class="gee-matrix-close-btn" id="geeMatrixClose">VOLTAR À REALIDADE [ESC]</button>
        </div>
      `;

      document.body.appendChild(modal);

      const canvas = modal.querySelector("#gee-matrix-canvas");
      const ctx = canvas.getContext("2d");
      const typingEl = modal.querySelector("#geeMatrixText");
      const closeBtn = modal.querySelector("#geeMatrixClose");

      // Redimensionamento
      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      resize();
      window.addEventListener("resize", resize);

      // Caracteres estilo Matrix (Katakana + Alfabeto + Números)
      const chars = "ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ1234567890ABCDEF@#$%*+-=";
      const fontSize = 16;
      let columns = Math.floor(canvas.width / fontSize);
      let drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

      let animId = null;

      const drawMatrix = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff66";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          // Cabeça brilhante do rastro
          ctx.fillStyle = "#ffffff";
          ctx.fillText(text, x, y);
          ctx.fillStyle = "#00ff66";

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }

        animId = requestAnimationFrame(drawMatrix);
      };

      animId = requestAnimationFrame(drawMatrix);

      // Efeito de máquina de escrever
      const lines = [
        "Acorde, Alex...",
        "A Matrix tem você.",
        "Siga o coelho branco. 🐇",
        "Você tomou a pílula vermelha."
      ];
      let lineIdx = 0;
      let charIdx = 0;
      let typingInterval = null;

      const typeNext = () => {
        if (lineIdx >= lines.length) return;
        const currentLine = lines[lineIdx];

        if (charIdx < currentLine.length) {
          typingEl.textContent += currentLine[charIdx];
          charIdx++;
          typingInterval = setTimeout(typeNext, 45);
        } else {
          typingEl.textContent += "\n";
          lineIdx++;
          charIdx = 0;
          typingInterval = setTimeout(typeNext, 500);
        }
      };
      typeNext();

      const fechar = () => {
        cancelAnimationFrame(animId);
        clearTimeout(typingInterval);
        window.removeEventListener("resize", resize);
        window.removeEventListener("keydown", onKey);
        modal.remove();
      };

      const onKey = (e) => {
        if (e.key === "Escape") fechar();
      };
      window.addEventListener("keydown", onKey);
      closeBtn.onclick = fechar;
      modal.onclick = (e) => {
        if (e.target === modal || e.target === canvas) fechar();
      };
    },

    // ------------------------------------------------------------------------
    // 2. THANOS SNAP (Estalar de Dedos)
    // ------------------------------------------------------------------------
    thanosSnap() {
      const messagesContainer = document.querySelector("#ga-widget .ga-messages");
      if (!messagesContainer) return;

      const allMsgs = Array.from(messagesContainer.querySelectorAll(".ga-msg:not(.ga-typing)"));
      if (allMsgs.length === 0) return;

      // Seleciona aleatoriamente metade das mensagens
      const victims = allMsgs.filter(() => Math.random() < 0.5);
      if (victims.length === 0 && allMsgs.length > 0) victims.push(allMsgs[0]);

      SFX.playTone(180, "sawtooth", 0.5);

      // Adiciona classe de desintegração
      victims.forEach((msg, idx) => {
        setTimeout(() => {
          msg.classList.add("gee-disintegrate");
        }, idx * 120);
      });

      // Cria aviso com botão da Joia do Tempo para restaurar
      if (!document.getElementById("geeThanosToast")) {
        const toast = document.createElement("div");
        toast.id = "geeThanosToast";
        toast.className = "gee-thanos-toast";
        toast.innerHTML = `
          <span>🫰 Thanos estalou os dedos... Metade das mensagens viraram pó!</span>
          <button class="gee-thanos-btn" id="geeTimeStoneBtn">⏳ USAR JOIA DO TEMPO</button>
        `;
        document.body.appendChild(toast);

        toast.querySelector("#geeTimeStoneBtn").onclick = () => {
          SFX.playVictory();
          victims.forEach(msg => {
            msg.classList.remove("gee-disintegrate");
          });
          toast.remove();
        };

        // Remove automaticamente após 14 segundos se não clicar
        setTimeout(() => {
          if (document.body.contains(toast)) toast.remove();
        }, 14000);
      }
    },

    // ------------------------------------------------------------------------
    // 3. STAR WARS — ORDEM 66 (SITH MODE)
    // ------------------------------------------------------------------------
    ativarOrdem66() {
      const widget = document.getElementById("ga-widget");
      if (!widget) return;

      SFX.playSithHum();

      const isSith = widget.classList.toggle("ga-sith-mode");

      // Adiciona mensagem temática do Lord Vader no chat
      const messages = widget.querySelector(".ga-messages");
      if (messages) {
        const msg = document.createElement("div");
        msg.className = "ga-msg ga-bot";
        msg.innerHTML = `
          <div class="ga-bubble">
            <strong>${isSith ? "⚡ ORDEM 66 EXECUTADA" : "🟢 EQUILÍBRIO RESTAURADO"}</strong><br><br>
            ${isSith
              ? "<em>'Você não conhece o poder do Lado Sombrio...'</em> 🔴⚔️<br><br>O Alexverso entrou no <strong>Modo Sith Imperial</strong>!"
              : "A Luz voltou à galáxia Jedi! O assistente retornou ao modo padrão."}
          </div>
        `;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }
    },

    // ------------------------------------------------------------------------
    // 4. HARRY POTTER — LUMOS & NOX
    // ------------------------------------------------------------------------
    ativarLumos() {
      let spotlight = document.getElementById("gee-lumos-spotlight");
      if (!spotlight) {
        spotlight = document.createElement("div");
        spotlight.id = "gee-lumos-spotlight";
        document.body.appendChild(spotlight);

        const onMouseMove = (e) => {
          spotlight.style.setProperty("--lumos-x", `${e.clientX}px`);
          spotlight.style.setProperty("--lumos-y", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", onMouseMove);
        spotlight._mouseHandler = onMouseMove;
      }

      SFX.playTone(587.33, "sine", 0.35); // Ré agudo brilhante
      SFX.playTone(880.0, "sine", 0.5, 0.15);

      const messages = document.querySelector("#ga-widget .ga-messages");
      if (messages) {
        const msg = document.createElement("div");
        msg.className = "ga-msg ga-bot";
        msg.innerHTML = `
          <div class="ga-bubble">
            ✨ <strong>Lumos!</strong> A ponta da sua varinha acendeu uma luz mágica que segue o mouse!<br><br>
            <em>(Digite <strong>nox</strong> para apagar a varinha)</em>
          </div>
        `;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }
    },

    desativarLumos() {
      const spotlight = document.getElementById("gee-lumos-spotlight");
      if (spotlight) {
        if (spotlight._mouseHandler) {
          window.removeEventListener("mousemove", spotlight._mouseHandler);
        }
        spotlight.remove();
        SFX.playTone(330, "sine", 0.4);

        const messages = document.querySelector("#ga-widget .ga-messages");
        if (messages) {
          const msg = document.createElement("div");
          msg.className = "ga-msg ga-bot";
          msg.innerHTML = `
            <div class="ga-bubble">
              🌑 <strong>Nox!</strong> A luz da varinha foi apagada.
            </div>
          `;
          messages.appendChild(msg);
          messages.scrollTop = messages.scrollHeight;
        }
      }
    },

    // ------------------------------------------------------------------------
    // 5. STAR FOX — BARREL ROLL
    // ------------------------------------------------------------------------
    barrelRoll() {
      const chatWindow = document.getElementById("ga-chat-window");
      const launcher = document.getElementById("ga-launcher-btn");

      SFX.playTone(440, "triangle", 0.15);
      SFX.playTone(660, "triangle", 0.25, 0.12);

      if (chatWindow) {
        chatWindow.classList.remove("gee-barrel-roll");
        void chatWindow.offsetWidth; // Força reflow
        chatWindow.classList.add("gee-barrel-roll");
        setTimeout(() => chatWindow.classList.remove("gee-barrel-roll"), 1100);
      }

      if (launcher) {
        launcher.classList.remove("gee-barrel-roll");
        void launcher.offsetWidth;
        launcher.classList.add("gee-barrel-roll");
        setTimeout(() => launcher.classList.remove("gee-barrel-roll"), 1100);
      }
    },

    // ------------------------------------------------------------------------
    // 6. DRAGON BALL — SUPER SAIYAJIN
    // ------------------------------------------------------------------------
    superSaiyajin() {
      SFX.playSaiyajinRise();

      const widget = document.getElementById("ga-widget");
      const chatWindow = document.getElementById("ga-chat-window");
      const launcher = document.getElementById("ga-launcher-btn");

      document.body.classList.add("gee-screen-shake");
      if (chatWindow) chatWindow.classList.add("gee-saiyajin-aura");
      if (launcher) launcher.classList.add("gee-saiyajin-aura");

      setTimeout(() => {
        document.body.classList.remove("gee-screen-shake");
      }, 700);

      setTimeout(() => {
        if (chatWindow) chatWindow.classList.remove("gee-saiyajin-aura");
        if (launcher) launcher.classList.remove("gee-saiyajin-aura");
      }, 4500);

      const messages = widget ? widget.querySelector(".ga-messages") : null;
      if (messages) {
        const msg = document.createElement("div");
        msg.className = "ga-msg ga-bot";
        msg.innerHTML = `
          <div class="ga-bubble">
            🔥⚡ <strong>O PODER DE LUTA É DE MAIS DE 8.000!!!</strong><br><br>
            <em>KAAAA... MEEEE... HAAAA... MEEEE... HAAAA! 💥</em><br>
            O Alexverso atingiu a transformação de <strong>Super Saiyajin</strong>!
          </div>
        `;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }
    },

    // ------------------------------------------------------------------------
    // 7. KONAMI CODE (GOD MODE)
    // ------------------------------------------------------------------------
    ativarKonamiMode() {
      SFX.playVictory();

      // Confetes pixelados caindo
      const colors = ["#ffcc00", "#ff0055", "#00ffcc", "#3399ff", "#ffffff"];
      for (let i = 0; i < 45; i++) {
        const confetti = document.createElement("div");
        confetti.className = "gee-confetti-piece";
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = `${1.5 + Math.random() * 2}s`;
        confetti.style.animationDelay = `${Math.random() * 0.4}s`;
        confetti.style.width = `${6 + Math.random() * 8}px`;
        confetti.style.height = `${6 + Math.random() * 8}px`;
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
      }

      const messages = document.querySelector("#ga-widget .ga-messages");
      if (messages) {
        const msg = document.createElement("div");
        msg.className = "ga-msg ga-bot";
        msg.innerHTML = `
          <div class="ga-bubble">
            🏆👑 <strong>KONAMI CODE DESBLOQUEADO!</strong><br><br>
            🎮 <strong>+30 VIDAS CONCEDIDAS</strong><br>
            Você ativou o lendário <em>Modo Deus do Alexverso</em>!
          </div>
        `;
        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
      }
    }
  };

  // --------------------------------------------------------------------------
  // LISTENER GLOBAL DE TECLADO PARA O KONAMI CODE CLÁSSICO:
  // ↑ ↑ ↓ ↓ ← → ← → B A
  // --------------------------------------------------------------------------
  const konamiSequence = [
    "ArrowUp", "ArrowUp",
    "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight",
    "ArrowLeft", "ArrowRight",
    "b", "a"
  ];
  let konamiIndex = 0;

  window.addEventListener("keydown", (e) => {
    const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    const expected = konamiSequence[konamiIndex].toLowerCase();

    if (key === expected) {
      konamiIndex++;
      if (konamiIndex === konamiSequence.length) {
        konamiIndex = 0;
        GeekEasterEggs.ativarKonamiMode();
      }
    } else {
      konamiIndex = 0;
    }
  });

  // Exporta globalmente para o GeekBot acessar
  window.GeekEasterEggs = GeekEasterEggs;

})(window, document);
