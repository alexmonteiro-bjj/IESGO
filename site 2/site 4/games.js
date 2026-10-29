
"use strict";

/* ==========================================================
   ALEXVERSO — GAMES
   Pesquisa, filtros, menu, animações e navegação
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Seleção dos elementos
  const preloader = document.getElementById("preloader");
  const cabecalho = document.querySelector(".cabecalho");
  const menuToggle = document.getElementById("menuToggle");
  const menuPrincipal = document.getElementById("menuPrincipal");

  const campoBusca = document.getElementById("campoBusca");
  const limparBusca = document.getElementById("limparBusca");
  const filtrosGenero = document.getElementById("filtrosGenero");
  const gradeGames = document.getElementById("gradeGames");
  const mensagemVazia = document.getElementById("mensagemVazia");
  const limparFiltros = document.getElementById("limparFiltros");

  const contadorGames = document.getElementById("contadorGames");
  const barraLeitura = document.getElementById("barraLeitura");
  const btnTopo = document.getElementById("btnTopo");
  const anoAtual = document.getElementById("anoAtual");

  const cards = gradeGames
    ? Array.from(gradeGames.querySelectorAll(".game-card"))
    : [];

  // 2. Ano automático no rodapé
  if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
  }

  // 3. Preloader
  // O limite de tempo evita que a tela fique bloqueada
  // caso algum recurso externo demore a carregar.
  let preloaderOcultado = false;

  function ocultarPreloader() {
    if (!preloader || preloaderOcultado) return;

    preloaderOcultado = true;
    preloader.classList.add("oculto");
    document.body.classList.remove("carregando");

    window.setTimeout(() => {
      if (preloader.isConnected) {
        preloader.style.display = "none";
      }
    }, 500);
  }

  if (preloader) {
    document.body.classList.add("carregando");

    if (document.readyState === "complete") {
      window.setTimeout(ocultarPreloader, 150);
    } else {
      window.addEventListener("load", ocultarPreloader, {
        once: true
      });
    }

    window.setTimeout(ocultarPreloader, 2500);
  }

  // 4. Menu para celulares
  function fecharMenu() {
    if (!menuToggle || !menuPrincipal) return;

    menuPrincipal.classList.remove("aberto");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
    document.body.classList.remove("menu-aberto");
  }

  function alternarMenu() {
    if (!menuToggle || !menuPrincipal) return;

    const estaAberto = menuPrincipal.classList.toggle("aberto");

    menuToggle.setAttribute("aria-expanded", String(estaAberto));
    menuToggle.setAttribute(
      "aria-label",
      estaAberto
        ? "Fechar menu de navegação"
        : "Abrir menu de navegação"
    );

    document.body.classList.toggle("menu-aberto", estaAberto);
  }

  if (menuToggle && menuPrincipal) {
    menuToggle.addEventListener("click", alternarMenu);

    menuPrincipal.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", fecharMenu);
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape") {
        fecharMenu();
      }
    });

    document.addEventListener("click", (evento) => {
      if (
        menuPrincipal.classList.contains("aberto") &&
        !menuPrincipal.contains(evento.target) &&
        !menuToggle.contains(evento.target)
      ) {
        fecharMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 700) {
        fecharMenu();
      }
    });
  }

  // 5. Pesquisa e filtros
  let generoSelecionado = "todos";

  function normalizarTexto(texto) {
    return String(texto || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("pt-BR")
      .trim();
  }

  function atualizarCatalogo() {
    const termo = normalizarTexto(
      campoBusca ? campoBusca.value : ""
    );

    let quantidadeVisivel = 0;

    cards.forEach((card) => {
      const nome = normalizarTexto(card.dataset.nome);
      const genero = card.dataset.genero || "";
      const textoPesquisa = normalizarTexto(
        (card.dataset.pesquisa || "") + " " + card.textContent
      );

      const correspondeAoTexto =
        !termo ||
        nome.includes(termo) ||
        textoPesquisa.includes(termo);

      const correspondeAoGenero =
        generoSelecionado === "todos" ||
        genero === generoSelecionado;

      const visivel =
        correspondeAoTexto && correspondeAoGenero;

      card.hidden = !visivel;

      if (visivel) {
        quantidadeVisivel++;
      }
    });

    // Atualiza o contador
    if (contadorGames) {
      const singular = quantidadeVisivel === 1;
      contadorGames.textContent =
        `${quantidadeVisivel} ${
          singular ? "jogo encontrado" : "jogos encontrados"
        }`;
    }

    // Mostra ou esconde a mensagem vazia
    if (mensagemVazia) {
      mensagemVazia.hidden = quantidadeVisivel !== 0;
    }

    // Esconde o grid quando nenhum resultado corresponde
    if (gradeGames) {
      gradeGames.hidden = quantidadeVisivel === 0;
    }

    // Botão para limpar a pesquisa
    if (limparBusca) {
      limparBusca.hidden = !termo;
    }
  }

  if (campoBusca) {
    campoBusca.addEventListener("input", atualizarCatalogo);
  }

  if (filtrosGenero) {
    filtrosGenero.addEventListener("click", (evento) => {
      const botao = evento.target.closest("[data-genero]");

      if (!botao || !filtrosGenero.contains(botao)) return;

      generoSelecionado = botao.dataset.genero || "todos";

      filtrosGenero.querySelectorAll("[data-genero]").forEach((filtro) => {
        const selecionado = filtro === botao;

        filtro.classList.toggle("ativo", selecionado);
        filtro.setAttribute("aria-pressed", String(selecionado));
      });

      atualizarCatalogo();
    });
  }

  function restaurarFiltros() {
    if (campoBusca) {
      campoBusca.value = "";
    }

    generoSelecionado = "todos";

    if (filtrosGenero) {
      filtrosGenero.querySelectorAll("[data-genero]").forEach((filtro) => {
        const selecionado = filtro.dataset.genero === "todos";

        filtro.classList.toggle("ativo", selecionado);
        filtro.setAttribute("aria-pressed", String(selecionado));
      });
    }

    atualizarCatalogo();

    if (campoBusca) {
      campoBusca.focus();
    }
  }

  if (limparBusca) {
    limparBusca.addEventListener("click", () => {
      if (campoBusca) {
        campoBusca.value = "";
      }

      atualizarCatalogo();

      if (campoBusca) {
        campoBusca.focus();
      }
    });
  }

  if (limparFiltros) {
    limparFiltros.addEventListener("click", restaurarFiltros);
  }

  // 6. Imagens com erro
  // Se uma capa não existir, o fundo do cartão continua visível.
  cards.forEach((card) => {
    const imagem = card.querySelector("img");

    if (!imagem) return;

    function tratarErroImagem() {
      imagem.hidden = true;
      imagem.alt = "";
    }

    imagem.addEventListener("error", tratarErroImagem);

    // Também trata imagens que já falharam antes do listener.
    if (imagem.complete && imagem.naturalWidth === 0) {
      tratarErroImagem();
    }
  });

  // 7. Animações ao entrar na tela
  const elementosAnimados = document.querySelectorAll(".animacao");

  const movimentoReduzido = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if ("IntersectionObserver" in window && !movimentoReduzido) {
    const observador = new IntersectionObserver(
      (entradas, observadorAtual) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;

          entrada.target.classList.add("aparecer");
          observadorAtual.unobserve(entrada.target);
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -25px 0px"
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

  // 8. Barra de leitura e cabeçalho
  let quadroPendente = false;

  function atualizarRolagem() {
    const rolagemAtual =
      window.scrollY || document.documentElement.scrollTop;

    const alturaDocumento =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progresso =
      alturaDocumento > 0
        ? Math.min(100, Math.max(0, (rolagemAtual / alturaDocumento) * 100))
        : 0;

    if (barraLeitura) {
      barraLeitura.style.width = `${progresso}%`;
    }

    if (cabecalho) {
      cabecalho.classList.toggle("rolado", rolagemAtual > 20);
    }

    if (btnTopo) {
      btnTopo.hidden = rolagemAtual < 400;
    }

    quadroPendente = false;
  }

  function solicitarAtualizacaoRolagem() {
    if (quadroPendente) return;

    quadroPendente = true;
    window.requestAnimationFrame(atualizarRolagem);
  }

  window.addEventListener("scroll", solicitarAtualizacaoRolagem, {
    passive: true
  });

  window.addEventListener("resize", solicitarAtualizacaoRolagem);

  if (btnTopo) {
    btnTopo.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: movimentoReduzido ? "auto" : "smooth"
      });
    });
  }

  // 9. Links internos com rolagem suave
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const destinoId = link.getAttribute("href");

      if (!destinoId || destinoId === "#") return;

      const destino = document.querySelector(destinoId);

      if (!destino) return;

      evento.preventDefault();
      fecharMenu();

      destino.scrollIntoView({
        behavior: movimentoReduzido ? "auto" : "smooth",
        block: "start"
      });

      // Atualiza o fragmento sem provocar um salto na página.
      if (window.location.hash !== destinoId) {
        window.history.replaceState(null, "", destinoId);
      }
    });
  });

  // 10. Inicialização
  atualizarCatalogo();
  atualizarRolagem();
});
