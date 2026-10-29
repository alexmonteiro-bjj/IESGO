/* ==========================================================
   ALEXVERSO — JAVASCRIPT PRINCIPAL
   Menu, animações, pesquisa, filtros, preloader e navegação
   ========================================================== */

"use strict";

document.documentElement.classList.add("js");

/* PRELOADER SUTIL */

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");

  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("esconder");
    }, 550);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const reduzirMovimento = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* ANO AUTOMÁTICO */

  const anoAtual = document.getElementById("anoAtual");

  if (anoAtual) {
    anoAtual.textContent = String(new Date().getFullYear());
  }


  

  /* BARRA DE LEITURA NO TOPO */

  const barraLeitura = document.getElementById("barraLeitura");

  const atualizarBarraLeitura = () => {
    if (!barraLeitura) return;

    const alturaTotal =
      document.documentElement.scrollHeight - window.innerHeight;

    const progresso =
      alturaTotal > 0 ? (window.scrollY / alturaTotal) * 100 : 0;

    barraLeitura.style.width = `${progresso}%`;
  };

  /* CABEÇALHO AO ROLAR */

  const cabecalho = document.querySelector(".cabecalho");

  const atualizarCabecalho = () => {
    if (!cabecalho) return;

    cabecalho.classList.toggle("rolagem", window.scrollY > 30);
  };

  const gerenciarScroll = () => {
    atualizarCabecalho();
    atualizarBarraLeitura();
  };

  gerenciarScroll();

  window.addEventListener("scroll", gerenciarScroll, {
    passive: true
  });

  /* MENU MOBILE */

  const menuToggle = document.getElementById("menuToggle");
  const menuPrincipal = document.getElementById("menuPrincipal");

  if (menuToggle && menuPrincipal) {
    const linksMenu = menuPrincipal.querySelectorAll("a");

    const menuMobile = () =>
      window.matchMedia("(max-width: 768px)").matches;

    const atualizarMenu = (aberto) => {
      menuPrincipal.classList.toggle("aberto", aberto);
      menuToggle.classList.toggle("ativo", aberto);

      menuToggle.setAttribute("aria-expanded", String(aberto));
      menuToggle.setAttribute(
        "aria-label",
        aberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
      );

      if (menuMobile()) {
        menuPrincipal.setAttribute("aria-hidden", String(!aberto));
        menuPrincipal.inert = !aberto;
      } else {
        menuPrincipal.removeAttribute("aria-hidden");
        menuPrincipal.inert = false;
      }
    };

    atualizarMenu(false);

    menuToggle.addEventListener("click", () => {
      const aberto =
        menuToggle.getAttribute("aria-expanded") !== "true";

      atualizarMenu(aberto);
    });

    linksMenu.forEach((link) => {
      link.addEventListener("click", () => {
        if (menuMobile()) {
          atualizarMenu(false);
        }
      });
    });

    document.addEventListener("click", (evento) => {
      if (
        menuMobile() &&
        menuPrincipal.classList.contains("aberto") &&
        !menuPrincipal.contains(evento.target) &&
        !menuToggle.contains(evento.target)
      ) {
        atualizarMenu(false);
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (
        evento.key === "Escape" &&
        menuPrincipal.classList.contains("aberto")
      ) {
        atualizarMenu(false);
        menuToggle.focus();
      }
    });

    window.addEventListener("resize", () => {
      atualizarMenu(false);
    }, { passive: true });
  }

  /* ANIMAÇÕES DE ENTRADA */

  const elementosAnimados = document.querySelectorAll(
    ".inicio-conteudo, .titulo, .card, .destaque-conteudo, " +
    ".destaque-visual, .obra-card, .favorito-card, " +
    ".sobre-conteudo, .rede-card"
  );

  if (
    reduzirMovimento ||
    !("IntersectionObserver" in window)
  ) {
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add("aparecer");
    });
  } else {
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
        rootMargin: "0px 0px -30px 0px"
      }
    );

    elementosAnimados.forEach((elemento) => {
      observador.observe(elemento);
    });
  }

  /* BIBLIOTECA: PESQUISA, FILTROS E SORTEADOR */

  const campoBusca = document.getElementById("campoBusca");
  const limparBusca = document.getElementById("limparBusca");
  const filtrosContainer = document.getElementById("filtrosCategoria");
  const contadorResultados = document.getElementById("contadorResultados");
  const mensagemVazia = document.getElementById("mensagemVazia");
  const gradeObras = document.getElementById("gradeObras");
  const btnSortear = document.getElementById("btnSortear");

  if (
    campoBusca &&
    limparBusca &&
    filtrosContainer &&
    contadorResultados &&
    mensagemVazia &&
    gradeObras
  ) {
    const obras = Array.from(
      gradeObras.querySelectorAll(".obra-card")
    );

    const filtros = Array.from(
      filtrosContainer.querySelectorAll(".filtro:not(.filtro-sortear)")
    );

    let categoriaAtual = "todos";

    const normalizarTexto = (texto) =>
      texto
        .toLocaleLowerCase("pt-BR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

    const atualizarBiblioteca = () => {
      const consulta = normalizarTexto(campoBusca.value);
      let quantidadeVisivel = 0;

      obras.forEach((obra) => {
        const categoria = obra.dataset.categoria || "";
        const titulo = obra.dataset.titulo || "";
        const conteudo = obra.textContent || "";

        const correspondeCategoria =
          categoriaAtual === "todos" ||
          categoria === categoriaAtual;

        const textoCompleto = normalizarTexto(
          titulo + " " + conteudo
        );

        const correspondeBusca =
          textoCompleto.includes(consulta);

        const visivel =
          correspondeCategoria && correspondeBusca;

        obra.hidden = !visivel;

        if (visivel) {
          quantidadeVisivel++;
        }
      });

      contadorResultados.textContent =
        quantidadeVisivel === 1
          ? "1 obra encontrada"
          : `${quantidadeVisivel} obras encontradas`;

      mensagemVazia.hidden = quantidadeVisivel !== 0;
      limparBusca.hidden = campoBusca.value.length === 0;
    };

    campoBusca.addEventListener("input", atualizarBiblioteca);

    limparBusca.addEventListener("click", () => {
      campoBusca.value = "";
      atualizarBiblioteca();
      campoBusca.focus();
    });

    filtros.forEach((filtro) => {
      filtro.addEventListener("click", () => {
        categoriaAtual = filtro.dataset.categoria || "todos";

        filtros.forEach((outroFiltro) => {
          const ativo = outroFiltro === filtro;

          outroFiltro.classList.toggle("ativo", ativo);
          outroFiltro.setAttribute("aria-pressed", String(ativo));
        });

        atualizarBiblioteca();
      });
    });

    /* BOTÃO "SURPREENDA-ME" */

    if (btnSortear) {
      btnSortear.addEventListener("click", () => {
        // Reseta busca e mostra todas
        campoBusca.value = "";
        categoriaAtual = "todos";
        filtros.forEach((f) => {
          const eTodos = f.dataset.categoria === "todos";
          f.classList.toggle("ativo", eTodos);
          f.setAttribute("aria-pressed", String(eTodos));
        });
        atualizarBiblioteca();

        // Sorteia uma obra aleatória
        const obraSorteada =
          obras[Math.floor(Math.random() * obras.length)];

        if (obraSorteada) {
          obraSorteada.scrollIntoView({
            behavior: reduzirMovimento ? "auto" : "smooth",
            block: "center"
          });

          // Efeito visual sutil de destaque temporário
          obraSorteada.style.borderColor = "var(--cor-dourado-claro)";
          obraSorteada.style.transform = "translateY(-8px)";

          setTimeout(() => {
            obraSorteada.style.borderColor = "";
            obraSorteada.style.transform = "";
          }, 1800);
        }
      });
    }

    atualizarBiblioteca();
  }

  /* MODAL DE TRAILER (CINEMATOGRÁFICO) */

  const modalTrailer = document.getElementById("modalTrailer");
  const btnTrailerDuna = document.getElementById("btnTrailerDuna");
  const btnFecharTrailer = document.getElementById("btnFecharTrailer");
  const iframeTrailer = document.getElementById("iframeTrailer");
  const urlTrailerDuna =
    "https://www.youtube.com/embed/Way9Dexny3w?autoplay=1";

  if (modalTrailer && btnTrailerDuna && btnFecharTrailer && iframeTrailer) {
    const abrirModalTrailer = () => {
      iframeTrailer.src = urlTrailerDuna;
      modalTrailer.classList.add("ativo");
      modalTrailer.setAttribute("aria-hidden", "false");
      btnFecharTrailer.focus();
    };

    const fecharModalTrailer = () => {
      iframeTrailer.src = ""; // Interrompe o áudio imediatamente
      modalTrailer.classList.remove("ativo");
      modalTrailer.setAttribute("aria-hidden", "true");
      btnTrailerDuna.focus();
    };

    btnTrailerDuna.addEventListener("click", abrirModalTrailer);
    btnFecharTrailer.addEventListener("click", fecharModalTrailer);

    modalTrailer.addEventListener("click", (evento) => {
      if (evento.target === modalTrailer) {
        fecharModalTrailer();
      }
    });

    document.addEventListener("keydown", (evento) => {
      if (
        evento.key === "Escape" &&
        modalTrailer.classList.contains("ativo")
      ) {
        fecharModalTrailer();
      }
    });
  }

  /* BOTÃO VOLTAR AO TOPO */

  const btnTopo = document.getElementById("btnTopo");

  if (btnTopo) {
    const atualizarBotaoTopo = () => {
      const visivel = window.scrollY > 350;

      btnTopo.hidden = !visivel;
      btnTopo.setAttribute("aria-hidden", String(!visivel));
      btnTopo.tabIndex = visivel ? 0 : -1;
    };

    atualizarBotaoTopo();

    window.addEventListener("scroll", atualizarBotaoTopo, {
      passive: true
    });

    btnTopo.addEventListener("click", (evento) => {
      evento.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: reduzirMovimento ? "auto" : "smooth"
      });
    });
  }

  /* NAVEGAÇÃO ATIVA POR SEÇÃO */

  const secoes = Array.from(
    document.querySelectorAll("main section[id]")
  );

  const linksInternos = Array.from(
    document.querySelectorAll('.menu a[href^="#"]')
  );

  if (secoes.length && linksInternos.length) {
    const atualizarLinkAtivo = () => {
      const posicao = window.scrollY + 140;
      let secaoAtual = secoes[0];

      secoes.forEach((secao) => {
        if (secao.offsetTop <= posicao) {
          secaoAtual = secao;
        }
      });

      linksInternos.forEach((link) => {
        const ativo =
          link.getAttribute("href") === `#${secaoAtual.id}`;

        link.classList.toggle("ativo", ativo);

        if (ativo) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    atualizarLinkAtivo();

    window.addEventListener("scroll", atualizarLinkAtivo, {
      passive: true
    });
  }
});