
/* ==========================================================
   ALEXVERSO — FILMES E SÉRIES
   Funcionalidades: menu, preloader, animações e navegação
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const selecionar = (seletor, contexto = document) =>
    contexto.querySelector(seletor);

  const selecionarTodos = (seletor, contexto = document) =>
    [...contexto.querySelectorAll(seletor)];

  /* 1. ELEMENTOS PRINCIPAIS */

  const cabecalho = selecionar(".cabecalho");
  const menu = selecionar("#menuPrincipal, .menu");
  const menuToggle = selecionar("#menuToggle, .menu-mobile-btn");
  const preloader = selecionar("#preloader");
  const barraLeitura = selecionar("#barraLeitura");
  const btnTopo = selecionar("#btnTopo");
  const anoAtual = selecionar("#anoAtual");

  /* 2. PRELOADER */

  function esconderPreloader() {
    if (!preloader) return;

    preloader.classList.add("oculto");
    document.body.classList.remove("carregando");
  }

  if (preloader) {
    document.body.classList.add("carregando");

    if (document.readyState === "complete") {
      esconderPreloader();
    } else {
      window.addEventListener("load", esconderPreloader, {
        once: true
      });
    }

    // Evita que o preloader permaneça na tela por tempo indeterminado.
    window.setTimeout(esconderPreloader, 3000);
  }

  /* 3. MENU RESPONSIVO */

  function fecharMenu() {
    if (!menu || !menuToggle) return;

    menu.classList.remove("aberto");
    document.body.classList.remove("menu-aberto");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute(
      "aria-label",
      "Abrir menu de navegação"
    );
  }

  function alternarMenu() {
    if (!menu || !menuToggle) return;

    const aberto = menu.classList.toggle("aberto");

    document.body.classList.toggle("menu-aberto", aberto);

    menuToggle.setAttribute("aria-expanded", String(aberto));
    menuToggle.setAttribute(
      "aria-label",
      aberto
        ? "Fechar menu de navegação"
        : "Abrir menu de navegação"
    );
  }

  if (menu && menuToggle) {
    menuToggle.addEventListener("click", alternarMenu);

    selecionarTodos("a", menu).forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        fecharMenu();
      }
    });

    document.addEventListener("click", (evento) => {
      if (
        menu.classList.contains("aberto") &&
        !menu.contains(evento.target) &&
        !menuToggle.contains(evento.target)
      ) {
        fecharMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) {
        fecharMenu();
      }
    });
  }

  /* 4. CABEÇALHO E BARRA DE LEITURA */

  let quadroPendente = false;

  function atualizarPagina() {
    const rolagem =
      window.scrollY ||
      document.documentElement.scrollTop;

    const alturaTotal =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progresso =
      alturaTotal > 0
        ? Math.min(100, Math.max(0, (rolagem / alturaTotal) * 100))
        : 0;

    if (cabecalho) {
      cabecalho.classList.toggle("rolado", rolagem > 30);
    }

    if (barraLeitura) {
      barraLeitura.style.width = `${progresso}%`;
    }

    if (btnTopo) {
      btnTopo.hidden = rolagem < 400;
    }

    quadroPendente = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!quadroPendente) {
        window.requestAnimationFrame(atualizarPagina);
        quadroPendente = true;
      }
    },
    { passive: true }
  );

  atualizarPagina();

  /* 5. ANIMAÇÕES DOS ELEMENTOS */

  const elementosAnimados = selecionarTodos(".animacao");

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !movimentoReduzido) {
    const observador = new IntersectionObserver(
      (entradas, observer) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
            observer.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("animacao-pendente");
      observador.observe(elemento);
    });
  } else {
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("aparecer");
    });
  }

  /* 6. BOTÃO VOLTAR AO TOPO */

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: movimentoReduzido ? "auto" : "smooth"
      });
    });
  }

  /* 7. ANO AUTOMÁTICO */

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  /* 8. DESTAQUE DO MENU ATIVO */

  if (menu) {
    const paginaAtual = window.location.pathname
      .split("/")
      .pop()
      .toLowerCase();

    selecionarTodos("a", menu).forEach((link) => {
      const destino = link.getAttribute("href");

      if (!destino) return;

      const arquivoDestino = destino
        .split("/")
        .pop()
        .split("#")[0]
        .toLowerCase();

      if (
        arquivoDestino &&
        arquivoDestino === paginaAtual
      ) {
        selecionarTodos(".ativo", menu).forEach((item) => {
          item.classList.remove("ativo");
          item.removeAttribute("aria-current");
        });

        link.classList.add("ativo");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* 9. TRATAMENTO DE IMAGENS */

  selecionarTodos(".filme-card img, .serie-card img").forEach(
    (imagem) => {
      imagem.addEventListener("error", () => {
        imagem.classList.add("imagem-indisponivel");
      });
    }
  );

});
