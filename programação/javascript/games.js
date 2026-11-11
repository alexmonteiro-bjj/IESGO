
/* ==========================================================
   ALEXVERSO — JAVASCRIPT DA PÁGINA DE GAMES
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // 1. ELEMENTOS

  const preloader = document.getElementById("preloader");
  const cabecalho = document.getElementById("topo");
  const menu = document.getElementById("menuPrincipal");
  const menuToggle = document.getElementById("menuToggle");
  const barraLeitura = document.getElementById("barraLeitura");
  const btnTopo = document.getElementById("btnTopo");
  const anoAtual = document.getElementById("anoAtual");

  const campoBusca = document.getElementById("campoBusca");
  const limparBusca = document.getElementById("limparBusca");
  const filtrosGenero = document.getElementById("filtrosGenero");
  const contadorGames = document.getElementById("contadorGames");
  const gradeGames = document.getElementById("gradeGames");
  const mensagemVazia = document.getElementById("mensagemVazia");
  const limparFiltros = document.getElementById("limparFiltros");

  const cards = gradeGames
    ? Array.from(gradeGames.querySelectorAll(".game-card"))
    : [];

  let generoSelecionado = "todos";

  // 2. PRELOADER

  let preloaderOcultado = false;

  function esconderPreloader() {
    if (!preloader || preloaderOcultado) return;

    preloaderOcultado = true;
    preloader.classList.add("oculto");

    window.setTimeout(() => {
      preloader.style.display = "none";
    }, 450);
  }

  if (document.readyState === "complete") {
    esconderPreloader();
  } else {
    window.addEventListener("load", esconderPreloader, {
      once: true
    });
  }

  window.setTimeout(esconderPreloader, 4000);

  // 3. MENU RESPONSIVO

  function abrirMenu() {
    if (!menu || !menuToggle) return;

    menu.classList.add("aberto");
    document.body.classList.add("menu-aberto");

    menuToggle.setAttribute("aria-expanded", "true");
    menuToggle.setAttribute("aria-label", "Fechar menu de navegação");
  }

  function fecharMenu() {
    if (!menu || !menuToggle) return;

    menu.classList.remove("aberto");
    document.body.classList.remove("menu-aberto");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }

  if (menu && menuToggle) {
    menuToggle.addEventListener("click", () => {
      if (menu.classList.contains("aberto")) {
        fecharMenu();
      } else {
        abrirMenu();
      }
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("click", (evento) => {
      const clicouNoMenu = menu.contains(evento.target);
      const clicouNoBotao = menuToggle.contains(evento.target);

      if (!clicouNoMenu && !clicouNoBotao) {
        fecharMenu();
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        const estavaAberto = menu.classList.contains("aberto");
        fecharMenu();

        if (estavaAberto) {
          menuToggle.focus();
        }
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 650) {
        fecharMenu();
      }
    });
  }

  // 4. CABEÇALHO E PROGRESSO DE LEITURA

  function atualizarCabecalho() {
    if (!cabecalho) return;

    cabecalho.classList.toggle("rolado", window.scrollY > 30);
  }

  function atualizarBarraLeitura() {
    if (!barraLeitura) return;

    const alturaDocumento =
      document.documentElement.scrollHeight - window.innerHeight;

    if (alturaDocumento <= 0) {
      barraLeitura.style.width = "0%";
      return;
    }

    const progresso = Math.min(
      100,
      Math.max(0, (window.scrollY / alturaDocumento) * 100)
    );

    barraLeitura.style.width = `${progresso}%`;
  }

  // 5. BOTÃO VOLTAR AO TOPO

  function atualizarBotaoTopo() {
    if (!btnTopo) return;

    btnTopo.hidden = window.scrollY <= 400;
  }

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 6. BUSCA E FILTROS

  function normalizarTexto(texto) {
    return String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .trim();
  }

  function atualizarCatalogo() {
    if (!gradeGames) return;

    const termoBusca = normalizarTexto(
      campoBusca ? campoBusca.value : ""
    );

    let quantidadeVisivel = 0;

    cards.forEach((card) => {
      const nome = normalizarTexto(card.dataset.nome);
      const pesquisa = normalizarTexto(card.dataset.pesquisa);
      const genero = card.dataset.genero || "";

      const correspondeBusca =
        termoBusca === "" ||
        nome.includes(termoBusca) ||
        pesquisa.includes(termoBusca);

      const correspondeGenero =
        generoSelecionado === "todos" ||
        genero === generoSelecionado;

      const mostrar = correspondeBusca && correspondeGenero;

      card.hidden = !mostrar;

      if (mostrar) {
        quantidadeVisivel++;
      }
    });

    if (contadorGames) {
      const texto =
        quantidadeVisivel === 1 ? "jogo encontrado" : "jogos encontrados";

      contadorGames.textContent =
        `${quantidadeVisivel} ${texto}`;
    }

    if (mensagemVazia) {
      mensagemVazia.hidden = quantidadeVisivel !== 0;
    }

    if (gradeGames) {
      gradeGames.hidden = quantidadeVisivel === 0;
    }

    if (limparBusca && campoBusca) {
      limparBusca.hidden = campoBusca.value.length === 0;
    }
  }

  if (campoBusca) {
    campoBusca.addEventListener("input", atualizarCatalogo);
  }

  if (limparBusca && campoBusca) {
    limparBusca.addEventListener("click", () => {
      campoBusca.value = "";
      atualizarCatalogo();
      campoBusca.focus();
    });
  }

  if (filtrosGenero) {
    filtrosGenero.querySelectorAll(".filtro").forEach((botao) => {
      botao.addEventListener("click", () => {
        generoSelecionado = botao.dataset.genero || "todos";

        filtrosGenero.querySelectorAll(".filtro").forEach((filtro) => {
          const ativo = filtro === botao;

          filtro.classList.toggle("ativo", ativo);
          filtro.setAttribute("aria-pressed", String(ativo));
        });

        atualizarCatalogo();
      });
    });
  }

  function restaurarFiltros() {
    if (campoBusca) {
      campoBusca.value = "";
    }

    generoSelecionado = "todos";

    if (filtrosGenero) {
      filtrosGenero.querySelectorAll(".filtro").forEach((botao) => {
        const ativo = botao.dataset.genero === "todos";

        botao.classList.toggle("ativo", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
      });
    }

    atualizarCatalogo();
  }

  if (limparFiltros) {
    limparFiltros.addEventListener("click", () => {
      restaurarFiltros();

      if (campoBusca) {
        campoBusca.focus();
      }
    });
  }

  // 7. ANIMAÇÕES DE ENTRADA

  const elementosAnimados = document.querySelectorAll(".animacao");

  if ("IntersectionObserver" in window) {
    const observador = new IntersectionObserver(
      (entradas, observadorAtual) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
            observadorAtual.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px"
      }
    );

    elementosAnimados.forEach((elemento, indice) => {
      elemento.classList.add("animacao-pendente");

      elemento.style.transitionDelay =
        `${Math.min(indice % 3, 2) * 100}ms`;

      observador.observe(elemento);
    });
  }

  // 8. IMAGENS INDISPONÍVEIS

  document.querySelectorAll(".imagem img").forEach((imagem) => {
    function verificarImagem() {
      if (imagem.complete && imagem.naturalWidth === 0) {
        imagem.style.visibility = "hidden";
        imagem.parentElement.classList.add("imagem-indisponivel");
      }
    }

    imagem.addEventListener("error", verificarImagem);
    verificarImagem();
  });

  // 9. ANO AUTOMÁTICO

  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  // 10. ATUALIZAÇÃO DURANTE A ROLAGEM

  let aguardandoAtualizacao = false;

  function atualizarInterface() {
    atualizarCabecalho();
    atualizarBarraLeitura();
    atualizarBotaoTopo();
  }

  window.addEventListener(
    "scroll",
    () => {
      if (aguardandoAtualizacao) return;

      aguardandoAtualizacao = true;

      window.requestAnimationFrame(() => {
        atualizarInterface();
        aguardandoAtualizacao = false;
      });
    },
    { passive: true }
  );

  window.addEventListener("resize", atualizarInterface);

  // Inicialização
  atualizarCatalogo();
  atualizarInterface();
});
