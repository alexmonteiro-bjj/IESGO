/* =========================
   CJDF - JAVASCRIPT
========================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       ELEMENTOS
    ========================== */

    const header = document.getElementById("cabecalho");

    const preloader = document.getElementById("preloader");

    const voltarTopo = document.getElementById("voltar-topo");

    const elementosAnimacao =
        document.querySelectorAll(".animacao");

    const linksMenu =
        document.querySelectorAll(".menu-link");

    const secoes =
        document.querySelectorAll("main section[id]");


    /* =========================
       HEADER AO ROLAR
    ========================== */

    function controlarHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    /* =========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    function controlarBotaoTopo() {

        if (!voltarTopo) {
            return;
        }

        if (window.scrollY > 500) {

            voltarTopo.classList.add("mostrar");

        } else {

            voltarTopo.classList.remove("mostrar");

        }

    }


    if (voltarTopo) {

        voltarTopo.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       MENU ATIVO
    ========================== */

    function atualizarMenu() {

        let secaoAtual = "";

        secoes.forEach(function (secao) {

            const topoSecao =
                secao.offsetTop - 150;

            const alturaSecao =
                secao.offsetHeight;

            if (
                window.scrollY >= topoSecao &&
                window.scrollY < topoSecao + alturaSecao
            ) {

                secaoAtual = secao.getAttribute("id");

            }

        });


        linksMenu.forEach(function (link) {

            link.classList.remove("ativo");

            const destino =
                link.getAttribute("href");

            if (destino === "#" + secaoAtual) {

                link.classList.add("ativo");

            }

        });

    }


    /* =========================
       SCROLL
    ========================== */

    window.addEventListener("scroll", function () {

        controlarHeader();

        controlarBotaoTopo();

        atualizarMenu();

    });


    /* =========================
       ANIMAÇÃO AO ROLAR
    ========================== */

    if ("IntersectionObserver" in window) {

        const observador =
            new IntersectionObserver(

                function (entradas) {

                    entradas.forEach(function (entrada) {

                        if (entrada.isIntersecting) {

                            entrada.target.classList.add(
                                "aparecer"
                            );

                            /*
                               Depois que apareceu,
                               deixa de observar.
                            */

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


        elementosAnimacao.forEach(function (elemento) {

            observador.observe(elemento);

        });

    } else {

        /*
           Fallback para navegadores antigos.
        */

        elementosAnimacao.forEach(function (elemento) {

            elemento.classList.add("aparecer");

        });

    }


    /* =========================
       SLIDESHOW
    ========================== */

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


    /* =========================
       MOSTRAR SLIDE
    ========================== */

    function mostrarSlide(numero) {

        if (slides.length === 0) {
            return;
        }


        if (numero >= slides.length) {

            numero = 0;

        }


        if (numero < 0) {

            numero = slides.length - 1;

        }


        slides.forEach(function (slide) {

            slide.classList.remove("ativa");

        });


        indicadores.forEach(function (indicador) {

            indicador.classList.remove("ativo");

        });


        slides[numero].classList.add("ativa");


        if (indicadores[numero]) {

            indicadores[numero].classList.add("ativo");

        }


        slideAtual = numero;

    }


    /* =========================
       PRÓXIMO SLIDE
    ========================== */

    function proximoSlide() {

        mostrarSlide(slideAtual + 1);

    }


    /* =========================
       SLIDE ANTERIOR
    ========================== */

    function slideAnterior() {

        mostrarSlide(slideAtual - 1);

    }


    /* =========================
       AUTOPLAY
    ========================== */

    function iniciarSlideshow() {

        if (slides.length <= 1) {
            return;
        }

        pararSlideshow();

        intervaloSlideshow =
            setInterval(
                proximoSlide,
                7000
            );

    }


    function pararSlideshow() {

        if (intervaloSlideshow) {

            clearInterval(
                intervaloSlideshow
            );

            intervaloSlideshow = null;

        }

    }


    /* =========================
       BOTÕES
    ========================== */

    if (botaoProximo) {

        botaoProximo.addEventListener(
            "click",
            function () {

                proximoSlide();

                iniciarSlideshow();

            }
        );

    }


    if (botaoAnterior) {

        botaoAnterior.addEventListener(
            "click",
            function () {

                slideAnterior();

                iniciarSlideshow();

            }
        );

    }


    /* =========================
       INDICADORES
    ========================== */

    indicadores.forEach(function (indicador) {

        indicador.addEventListener(
            "click",
            function () {

                const numero =
                    Number(
                        indicador.dataset.slide
                    );

                mostrarSlide(numero);

                iniciarSlideshow();

            }
        );

    });


    /* =========================
       PAUSA AO PASSAR O MOUSE
    ========================== */

    if (slideshow) {

        slideshow.addEventListener(
            "mouseenter",
            pararSlideshow
        );


        slideshow.addEventListener(
            "mouseleave",
            iniciarSlideshow
        );

    }


    /* =========================
       INICIA SLIDESHOW
    ========================== */

    mostrarSlide(0);

    iniciarSlideshow();


    /* =========================
       PRELOADER
    ========================== */

    window.addEventListener(
        "load",
        function () {

            if (!preloader) {
                return;
            }


            /*
               Tempo mínimo do preloader:
               4 segundos.
            */

            setTimeout(
                function () {

                    preloader.classList.add(
                        "preloader-esconder"
                    );


                    /*
                       Remove depois
                       da animação.
                    */

                    setTimeout(
                        function () {

                            preloader.style.display =
                                "none";

                        },
                        1000
                    );

                },
                4000
            );

        }
    );


    /* =========================
       MENU COM SCROLL SUAVE
    ========================== */

    linksMenu.forEach(function (link) {

        link.addEventListener(
            "click",
            function (evento) {

                const destino =
                    link.getAttribute("href");


                if (
                    destino &&
                    destino.startsWith("#")
                ) {

                    const elemento =
                        document.querySelector(
                            destino
                        );


                    if (elemento) {

                        evento.preventDefault();


                        elemento.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });


    /* =========================
       ESTADO INICIAL
    ========================== */

    controlarHeader();

    controlarBotaoTopo();

    atualizarMenu();

});