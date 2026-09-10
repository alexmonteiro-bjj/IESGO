
/* =========================================================
   CJDF - JAVASCRIPT PRINCIPAL
   Conselho Jedi do Distrito Federal
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTOS PRINCIPAIS
    ====================================================== */

    const header = document.getElementById("cabecalho");
    const preloader = document.getElementById("preloader");
    const voltarTopo = document.getElementById("voltar-topo");

    const elementosAnimacao =
        document.querySelectorAll(".animacao");

    const linksMenu =
        document.querySelectorAll(".menu-link");

    const secoes =
        document.querySelectorAll("main section[id]");


    /* =====================================================
       ACESSIBILIDADE
    ====================================================== */

    const reduzirMovimento = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       HEADER
    ====================================================== */

    function controlarHeader() {

        if (!header) return;

        if (window.scrollY > 60) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    }


    /* =====================================================
       BOTÃO VOLTAR AO TOPO
    ====================================================== */

    function controlarBotaoTopo() {

        if (!voltarTopo) return;

        if (window.scrollY > 500) {
            voltarTopo.classList.add("mostrar");
        } else {
            voltarTopo.classList.remove("mostrar");
        }
    }


    if (voltarTopo) {

        voltarTopo.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: reduzirMovimento
                    ? "auto"
                    : "smooth"
            });

        });

    }


    /* =====================================================
       MENU ATIVO
    ====================================================== */

    function atualizarMenu() {

        if (!secoes.length || !linksMenu.length) {
            return;
        }

        let secaoAtual = "inicio";

        const posicaoScroll =
            window.scrollY + 200;


        secoes.forEach(secao => {

            const topo = secao.offsetTop;
            const altura = secao.offsetHeight;

            if (
                posicaoScroll >= topo &&
                posicaoScroll < topo + altura
            ) {

                secaoAtual =
                    secao.getAttribute("id");

            }

        });


        linksMenu.forEach(link => {

            link.classList.remove("ativo");

            const destino =
                link.getAttribute("href");


            if (
                destino === `#${secaoAtual}`
            ) {

                link.classList.add("ativo");

            }

        });

    }


    /* =====================================================
       SCROLL OTIMIZADO
    ====================================================== */

    let scrollEmAndamento = false;

    window.addEventListener(
        "scroll",
        () => {

            if (scrollEmAndamento) return;

            scrollEmAndamento = true;

            requestAnimationFrame(() => {

                controlarHeader();
                controlarBotaoTopo();
                atualizarMenu();

                scrollEmAndamento = false;

            });

        },
        {
            passive: true
        }
    );


    /* =====================================================
       ANIMAÇÕES AO ENTRAR NA TELA
    ====================================================== */

    if (
        reduzirMovimento ||
        !("IntersectionObserver" in window)
    ) {

        elementosAnimacao.forEach(elemento => {

            elemento.classList.add("aparecer");

        });

    } else {

        const observador =
            new IntersectionObserver(
                entradas => {

                    entradas.forEach(entrada => {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "aparecer"
                            );

                            observador.unobserve(
                                entrada.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.15,
                    rootMargin: "0px 0px -50px 0px"
                }
            );


        elementosAnimacao.forEach(elemento => {

            observador.observe(elemento);

        });

    }


    /* =====================================================
       SLIDESHOW
    ====================================================== */

    const slides =
        document.querySelectorAll(".slide");

    const indicadores =
        document.querySelectorAll(".indicador");

    const botaoAnterior =
        document.querySelector(".anterior");

    const botaoProximo =
        document.querySelector(".proximo");

    const slideshow =
        document.querySelector(".slideshow");


    let slideAtual = 0;
    let intervaloSlideshow = null;


    /* =====================================================
       MOSTRAR SLIDE
    ====================================================== */

    function mostrarSlide(numero) {

        if (!slides.length) return;


        if (numero >= slides.length) {
            numero = 0;
        }

        if (numero < 0) {
            numero = slides.length - 1;
        }


        slides.forEach((slide, indice) => {

            slide.classList.toggle(
                "ativa",
                indice === numero
            );

        });


        indicadores.forEach((indicador, indice) => {

            indicador.classList.toggle(
                "ativo",
                indice === numero
            );

        });


        slideAtual = numero;

    }


    /* =====================================================
       PRÓXIMO SLIDE
    ====================================================== */

    function proximoSlide() {

        mostrarSlide(slideAtual + 1);

    }


    /* =====================================================
       SLIDE ANTERIOR
    ====================================================== */

    function slideAnterior() {

        mostrarSlide(slideAtual - 1);

    }


    /* =====================================================
       INICIAR AUTOPLAY
    ====================================================== */

    function iniciarSlideshow() {

        if (
            slides.length <= 1 ||
            reduzirMovimento ||
            document.hidden
        ) {
            return;
        }


        pararSlideshow();


        intervaloSlideshow = setInterval(
            () => {

                proximoSlide();

            },
            7000
        );

    }


    /* =====================================================
       PARAR AUTOPLAY
    ====================================================== */

    function pararSlideshow() {

        if (intervaloSlideshow !== null) {

            clearInterval(
                intervaloSlideshow
            );

            intervaloSlideshow = null;

        }

    }


    /* =====================================================
       BOTÃO PRÓXIMO
    ====================================================== */

    if (botaoProximo) {

        botaoProximo.addEventListener(
            "click",
            () => {

                proximoSlide();
                iniciarSlideshow();

            }
        );

    }


    /* =====================================================
       BOTÃO ANTERIOR
    ====================================================== */

    if (botaoAnterior) {

        botaoAnterior.addEventListener(
            "click",
            () => {

                slideAnterior();
                iniciarSlideshow();

            }
        );

    }


    /* =====================================================
       INDICADORES
    ====================================================== */

    indicadores.forEach(indicador => {

        indicador.addEventListener(
            "click",
            () => {

                const numero =
                    Number(
                        indicador.dataset.slide
                    );


                if (Number.isNaN(numero)) {
                    return;
                }


                mostrarSlide(numero);
                iniciarSlideshow();

            }
        );

    });


    /* =====================================================
       PAUSAR NO MOUSE
    ====================================================== */

    if (slideshow) {

        slideshow.addEventListener(
            "mouseenter",
            pararSlideshow
        );


        slideshow.addEventListener(
            "mouseleave",
            iniciarSlideshow
        );


        /* ================================================
           TOUCH
        ================================================ */

        let toqueInicialX = 0;
        let toqueFinalX = 0;


        slideshow.addEventListener(
            "touchstart",
            evento => {

                pararSlideshow();

                toqueInicialX =
                    evento.changedTouches[0].screenX;

            },
            {
                passive: true
            }
        );


        slideshow.addEventListener(
            "touchend",
            evento => {

                toqueFinalX =
                    evento.changedTouches[0].screenX;


                const distancia =
                    toqueFinalX - toqueInicialX;


                /*
                   Arrastar para esquerda
                   = próximo slide
                */

                if (distancia < -50) {

                    proximoSlide();

                }


                /*
                   Arrastar para direita
                   = slide anterior
                */

                if (distancia > 50) {

                    slideAnterior();

                }


                iniciarSlideshow();

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       CONTROLE PELO TECLADO
    ====================================================== */

    document.addEventListener(
        "keydown",
        evento => {

            const elemento =
                document.activeElement;


            /*
               Não interfere em campos de formulário.
            */

            if (
                elemento &&
                (
                    elemento.tagName === "INPUT" ||
                    elemento.tagName === "TEXTAREA" ||
                    elemento.tagName === "SELECT"
                )
            ) {

                return;

            }


            if (evento.key === "ArrowRight") {

                proximoSlide();
                iniciarSlideshow();

            }


            if (evento.key === "ArrowLeft") {

                slideAnterior();
                iniciarSlideshow();

            }

        }
    );


    /* =====================================================
       VISIBILIDADE DA ABA
    ====================================================== */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                pararSlideshow();

            } else {

                iniciarSlideshow();

            }

        }
    );


    /* =====================================================
       INICIAR GALERIA
    ====================================================== */

    if (slides.length) {

        mostrarSlide(0);
        iniciarSlideshow();

    }


    /* =====================================================
       MENU COM SCROLL SUAVE
    ====================================================== */

    linksMenu.forEach(link => {

        link.addEventListener(
            "click",
            evento => {

                const destino =
                    link.getAttribute("href");


                /*
                   Links externos continuam
                   funcionando normalmente.
                */

                if (
                    !destino ||
                    !destino.startsWith("#")
                ) {

                    return;

                }


                const elemento =
                    document.querySelector(destino);


                if (!elemento) {
                    return;
                }


                evento.preventDefault();


                elemento.scrollIntoView({

                    behavior:
                        reduzirMovimento
                            ? "auto"
                            : "smooth",

                    block: "start"

                });

            }
        );

    });


    /* =====================================================
       FOCO DOS LINKS
    ====================================================== */

    linksMenu.forEach(link => {

        link.addEventListener(
            "focus",
            () => {

                link.classList.add("foco");

            }
        );


        link.addEventListener(
            "blur",
            () => {

                link.classList.remove("foco");

            }
        );

    });


    /* =====================================================
       EFEITO NOS BOTÕES
    ====================================================== */

    const botoes =
        document.querySelectorAll(
            ".botao-hero, .botao-secao, .botao-galeria, .botao-loja"
        );


    botoes.forEach(botao => {

        botao.addEventListener(
            "click",
            () => {

                botao.classList.add("clicado");


                setTimeout(() => {

                    botao.classList.remove(
                        "clicado"
                    );

                }, 250);

            }
        );

    });


    /* =====================================================
       EFEITO PARALLAX DO HERO
    ====================================================== */

    const hero =
        document.querySelector(".section1");


    if (
        hero &&
        !reduzirMovimento
    ) {

        window.addEventListener(
            "scroll",
            () => {

                const scroll =
                    window.scrollY;


                if (scroll < window.innerHeight) {

                    hero.style.backgroundPosition =
                        `center ${scroll * 0.35}px`;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       PRELOADER
    ====================================================== */

    let paginaCarregada = false;
    let tempoMinimoFinalizado = false;


    function esconderPreloader() {

        if (!preloader) return;

        if (
            !paginaCarregada ||
            !tempoMinimoFinalizado
        ) {

            return;

        }


        preloader.classList.add(
            "preloader-esconder"
        );


        setTimeout(() => {

            preloader.style.display =
                "none";

        }, 1000);

    }


    /*
       Página terminou de carregar.
    */

    window.addEventListener(
        "load",
        () => {

            paginaCarregada = true;

            esconderPreloader();

        }
    );


    /*
       Tempo mínimo de 4 segundos.
    */

    setTimeout(
        () => {

            tempoMinimoFinalizado = true;

            esconderPreloader();

        },
        4000
    );


    /* =====================================================
       GARANTIA CONTRA PRELOADER PRESO
    ====================================================== */

    setTimeout(
        () => {

            if (
                preloader &&
                !preloader.classList.contains(
                    "preloader-esconder"
                )
            ) {

                preloader.classList.add(
                    "preloader-esconder"
                );

            }

        },
        10000
    );


    /* =====================================================
       CARREGAMENTO PROGRESSIVO
    ====================================================== */

    const imagens =
        document.querySelectorAll("img");


    imagens.forEach(imagem => {

        imagem.addEventListener(
            "load",
            () => {

                imagem.classList.add(
                    "imagem-carregada"
                );

            }
        );

    });


    /* =====================================================
       ATUALIZAÇÃO DE TAMANHO DA TELA
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            atualizarMenu();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       ESTADO INICIAL
    ====================================================== */

    controlarHeader();

    controlarBotaoTopo();

    atualizarMenu();


});

