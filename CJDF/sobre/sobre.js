
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       PRELOADER
    ========================== */

    const preloader = document.getElementById("preloader");

    setTimeout(() => {

        if (preloader) {
            preloader.classList.add("esconder");
        }

    }, 4000);


    /* =========================
       CABEÇALHO
    ========================== */

    const cabecalho = document.querySelector(".cabecalho");

    function atualizarCabecalho() {

        if (!cabecalho) return;

        if (window.scrollY > 50) {
            cabecalho.classList.add("scrolled");
        } else {
            cabecalho.classList.remove("scrolled");
        }

    }

    window.addEventListener(
        "scroll",
        atualizarCabecalho,
        { passive: true }
    );

    atualizarCabecalho();


    /* =========================
       ANIMAÇÕES
    ========================== */

    const elementos =
        document.querySelectorAll(".animacao");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add("aparecer");

                        observer.unobserve(entrada.target);

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        elementos.forEach((elemento) => {
            observer.observe(elemento);
        });

    } else {

        elementos.forEach((elemento) => {
            elemento.classList.add("aparecer");
        });

    }


    /* =========================
       BOTÃO TOPO
    ========================== */

    const botaoTopo =
        document.getElementById("topo");

    function atualizarBotaoTopo() {

        if (!botaoTopo) return;

        if (window.scrollY > 500) {

            botaoTopo.classList.add("mostrar");

        } else {

            botaoTopo.classList.remove("mostrar");

        }

    }

    window.addEventListener(
        "scroll",
        atualizarBotaoTopo,
        { passive: true }
    );

    atualizarBotaoTopo();


    if (botaoTopo) {

        botaoTopo.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================
       LINKS INTERNOS
    ========================== */

    const linksInternos =
        document.querySelectorAll('a[href^="#"]');

    linksInternos.forEach((link) => {

        link.addEventListener("click", (evento) => {

            const destino =
                link.getAttribute("href");

            if (!destino || destino === "#") {
                return;
            }

            const elemento =
                document.querySelector(destino);

            if (!elemento) {
                return;
            }

            evento.preventDefault();

            const alturaHeader =
                cabecalho
                    ? cabecalho.offsetHeight
                    : 0;

            const posicao =
                elemento.getBoundingClientRect().top +
                window.scrollY -
                alturaHeader -
                15;

            window.scrollTo({
                top: posicao,
                behavior: "smooth"
            });

        });

    });


    /* =========================
       MENU ATIVO
    ========================== */

    const secoes =
        document.querySelectorAll("section[id]");

    const linksMenu =
        document.querySelectorAll(
            '.menu a[href^="#"]'
        );

    function atualizarMenu() {

        let secaoAtual = "";

        secoes.forEach((secao) => {

            const topo =
                secao.offsetTop -
                (cabecalho
                    ? cabecalho.offsetHeight
                    : 0) -
                120;

            if (window.scrollY >= topo) {

                secaoAtual = secao.id;

            }

        });

        linksMenu.forEach((link) => {

            link.classList.remove("ativo");

            if (
                link.getAttribute("href") ===
                `#${secaoAtual}`
            ) {

                link.classList.add("ativo");

            }

        });

    }

    window.addEventListener(
        "scroll",
        atualizarMenu,
        { passive: true }
    );

    atualizarMenu();


    /* =========================
       TECLA HOME
    ========================== */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Home") {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }

    });

});

