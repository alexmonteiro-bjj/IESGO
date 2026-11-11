
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const menuPrincipal = document.getElementById('menuPrincipal');
  const btnTopo = document.getElementById('btnTopo');
  const anoElemento = document.getElementById('anoAtual');

  const movimentoReduzido = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  );

  /* =====================================================
     1. ANO AUTOMÁTICO
     ===================================================== */

  if (anoElemento) {
    anoElemento.textContent = String(new Date().getFullYear());
  }

  /* =====================================================
     2. ANIMAÇÕES DE REVELAÇÃO
     ===================================================== */

  const elementosAnimados = document.querySelectorAll('.animacao');

  const revelarTodos = () => {
    elementosAnimados.forEach((elemento) => {
      elemento.classList.add('aparecer');
    });
  };

  if (
    movimentoReduzido.matches ||
    !('IntersectionObserver' in window)
  ) {
    revelarTodos();
  } else {
    const observador = new IntersectionObserver(
      (entradas, observer) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('aparecer');
            observer.unobserve(entrada.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    elementosAnimados.forEach((elemento) => {
      observador.observe(elemento);
    });

    /*
     * Salvaguarda para elementos que já estão visíveis
     * na tela durante a inicialização.
     */
    requestAnimationFrame(() => {
      elementosAnimados.forEach((elemento) => {
        const retangulo = elemento.getBoundingClientRect();

        if (
          retangulo.top < window.innerHeight &&
          retangulo.bottom > 0
        ) {
          elemento.classList.add('aparecer');
          observador.unobserve(elemento);
        }
      });
    });
  }

  /* =====================================================
     3. MENU MOBILE
     ===================================================== */

  if (menuToggle && menuPrincipal) {
    const larguraMobile = window.matchMedia('(max-width: 768px)');

    const definirMenu = (aberto) => {
      const podeAbrir = larguraMobile.matches;
      const estadoFinal = Boolean(aberto && podeAbrir);

      menuPrincipal.classList.toggle('aberto', estadoFinal);

      menuToggle.setAttribute(
        'aria-expanded',
        String(estadoFinal)
      );

      menuToggle.setAttribute(
        'aria-label',
        estadoFinal
          ? 'Fechar menu de navegação'
          : 'Abrir menu de navegação'
      );
    };

    menuToggle.addEventListener('click', () => {
      const aberto =
        menuToggle.getAttribute('aria-expanded') === 'true';

      definirMenu(!aberto);
    });

    /* Fecha ao escolher um link no celular */
    menuPrincipal.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (larguraMobile.matches) {
          definirMenu(false);
        }
      });
    });

    /* Fecha ao clicar fora */
    document.addEventListener('click', (evento) => {
      const aberto =
        menuPrincipal.classList.contains('aberto');

      if (
        aberto &&
        !menuPrincipal.contains(evento.target) &&
        !menuToggle.contains(evento.target)
      ) {
        definirMenu(false);
      }
    });

    /* Fecha com Escape */
    document.addEventListener('keydown', (evento) => {
      if (
        evento.key === 'Escape' &&
        menuPrincipal.classList.contains('aberto')
      ) {
        definirMenu(false);
        menuToggle.focus();
      }
    });

    /* Sincroniza o estado ao redimensionar a janela */
    const sincronizarLargura = () => {
      if (!larguraMobile.matches) {
        definirMenu(false);
      }
    };

    if (larguraMobile.addEventListener) {
      larguraMobile.addEventListener('change', sincronizarLargura);
    } else {
      larguraMobile.addListener(sincronizarLargura);
    }

    definirMenu(false);
  }

  /* =====================================================
     4. BOTÃO VOLTAR AO TOPO
     ===================================================== */

  if (btnTopo) {
    const controlarBtnTopo = () => {
      const visivel = window.scrollY > 350;

      btnTopo.classList.toggle('visivel', visivel);

      btnTopo.setAttribute(
        'aria-hidden',
        String(!visivel)
      );

      btnTopo.tabIndex = visivel ? 0 : -1;
    };

    window.addEventListener('scroll', controlarBtnTopo, {
      passive: true
    });

    controlarBtnTopo();
  }

  /* =====================================================
     5. NAVEGAÇÃO POR ÂNCORAS
     ===================================================== */

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (evento) => {
      const destinoId = link.getAttribute('href');

      if (!destinoId || destinoId === '#') {
        return;
      }

      const destino = document.getElementById(
        destinoId.slice(1)
      );

      if (!destino) {
        return;
      }

      evento.preventDefault();

      destino.scrollIntoView({
        behavior: movimentoReduzido.matches
          ? 'auto'
          : 'smooth',
        block: 'start'
      });

      /*
       * Atualiza a URL sem recarregar a página.
       */
      if (window.location.hash !== destinoId) {
        window.history.pushState(null, '', destinoId);
      }
    });
  });
});
