/**
 * ==========================================================================
 * PRELOADER GEEK — ALEXVERSO
 * 100% JavaScript Puro | Dinâmico, Temático & Rápido
 * ==========================================================================
 */

(function () {
  'use strict';

  // Frases e Ícones Temáticos Geek
  const GEEK_STEPS = [
    { threshold: 0, text: "🚀 Calibrando motores do hiperespaço...", icon: "🚀" },
    { threshold: 25, text: "⚔️ Forjando sabres de luz e armaduras...", icon: "⚔️" },
    { threshold: 50, text: "🔮 Reunindo as 7 Esferas do Dragão...", icon: "🔮" },
    { threshold: 75, text: "👾 Sincronizando biblioteca do multiverso...", icon: "👾" },
    { threshold: 95, text: "✨ Alexverso pronto! Que a Força esteja com você!", icon: "⭐" }
  ];

  function createPreloaderHTML() {
    if (document.getElementById("geek-preloader")) return;

    // Se houver um preloader antigo simples na página, oculta ele
    const oldPreloader = document.getElementById("preloader");
    if (oldPreloader) {
      oldPreloader.style.display = "none";
    }

    const preloader = document.createElement("div");
    preloader.id = "geek-preloader";
    preloader.setAttribute("aria-hidden", "false");
    preloader.setAttribute("role", "progressbar");
    preloader.setAttribute("aria-valuemin", "0");
    preloader.setAttribute("aria-valuemax", "100");

    preloader.innerHTML = `
      <div class="gp-grid-bg"></div>
      <div class="gp-scanline"></div>

      <div class="gp-container">
        <!-- Reator / Portal Central -->
        <div class="gp-portal-wrap">
          <div class="gp-ring-outer"></div>
          <div class="gp-ring-mid"></div>
          <div class="gp-ring-inner"></div>
          <div class="gp-core">
            <span class="gp-icon" id="gpIcon">🚀</span>
          </div>
        </div>

        <!-- Título Sci-Fi -->
        <h2 class="gp-title">ALEX<span>VERSO</span></h2>
        <span class="gp-tag">SYSTEM // MULTIVERSE_OS 2.6</span>

        <!-- Status Dinâmico -->
        <div class="gp-status-box">
          <span class="gp-status-text" id="gpStatusText">
            🚀 Inicializando multiverso...
          </span>
        </div>

        <!-- Barra de Progresso Geek -->
        <div class="gp-progress-wrap">
          <div class="gp-progress-bar">
            <div class="gp-progress-fill" id="gpProgressFill"></div>
          </div>
          <div class="gp-progress-info">
            <span>CARREGANDO DADOS...</span>
            <span class="gp-percent" id="gpPercent">0%</span>
          </div>
        </div>
      </div>
    `;

    // Injeta no início do body
    if (document.body) {
      document.body.prepend(preloader);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.prepend(preloader);
      });
    }

    startAnimation(preloader);
  }

  function startAnimation(preloader) {
    const progressFill = document.getElementById("gpProgressFill");
    const percentEl = document.getElementById("gpPercent");
    const statusText = document.getElementById("gpStatusText");
    const iconEl = document.getElementById("gpIcon");

    let currentPercent = 0;
    let targetPercent = 85;
    let pageLoaded = false;
    let finished = false;

    // Atualiza interface do preloader
    function updateUI(val) {
      const rounded = Math.min(100, Math.floor(val));
      if (progressFill) progressFill.style.width = rounded + "%";
      if (percentEl) percentEl.textContent = rounded + "%";
      preloader.setAttribute("aria-valuenow", String(rounded));

      // Busca a frase e ícone para a porcentagem atual
      for (let i = GEEK_STEPS.length - 1; i >= 0; i--) {
        if (rounded >= GEEK_STEPS[i].threshold) {
          if (statusText && statusText.getAttribute("data-step") !== String(i)) {
            statusText.setAttribute("data-step", String(i));
            statusText.textContent = GEEK_STEPS[i].text;
          }
          if (iconEl) iconEl.textContent = GEEK_STEPS[i].icon;
          break;
        }
      }
    }

    // Intervalo de carregamento fluido
    const interval = setInterval(() => {
      if (finished) {
        clearInterval(interval);
        return;
      }

      if (!pageLoaded) {
        // Incrementa até o limite temporário enquanto carrega
        if (currentPercent < targetPercent) {
          currentPercent += Math.random() * 4 + 2;
        }
      } else {
        // Página carregou: acelera até 100%
        currentPercent += Math.random() * 9 + 6;
      }

      if (currentPercent >= 100) {
        currentPercent = 100;
        updateUI(100);
        finishPreloader();
      } else {
        updateUI(currentPercent);
      }
    }, 40);

    function finishPreloader() {
      if (finished) return;
      finished = true;
      clearInterval(interval);
      updateUI(100);

      // Aguarda 220ms no 100% para o usuário ver e depois desaparece suavemente
      setTimeout(() => {
        preloader.classList.add("gp-loaded");
        preloader.setAttribute("aria-hidden", "true");

        setTimeout(() => {
          preloader.style.display = "none";
        }, 550);
      }, 220);
    }

    // Evento de carregamento da página
    if (document.readyState === "complete") {
      pageLoaded = true;
      targetPercent = 100;
    } else {
      window.addEventListener("load", () => {
        pageLoaded = true;
        targetPercent = 100;
      }, { once: true });
    }

    // Salvaguarda: nunca fica preso por mais de 2.6 segundos
    setTimeout(() => {
      pageLoaded = true;
      targetPercent = 100;
      if (!finished) finishPreloader();
    }, 2600);
  }

  // Inicializa imediatamente
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", createPreloaderHTML);
  } else {
    createPreloaderHTML();
  }
})();
