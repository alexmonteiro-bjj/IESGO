
/* =========================
   PRELOADER
========================= */

window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader =
            document.getElementById("preloader");

        preloader.classList.add("esconder");

    }, 4000);

});


/* =========================
   ANIMAÇÕES AO ROLAR
========================= */

const elementos =
    document.querySelectorAll(".revelar");

const observer =
    new IntersectionObserver(

        function (entradas) {

            entradas.forEach(function (entrada) {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("aparecer");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach(function (elemento) {

    observer.observe(elemento);

});


/* =========================
   FILTROS
========================= */

const filtros =
    document.querySelectorAll(".filtro");

const cards =
    document.querySelectorAll(".galeria-card");


filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {

        filtros.forEach(function (item) {

            item.classList.remove("ativo");

        });

        filtro.classList.add("ativo");

        const categoria =
            filtro.dataset.filtro;


        cards.forEach(function (card) {

            if (
                categoria === "todos" ||
                card.dataset.categoria === categoria
            ) {

                card.classList.remove("oculto");

            } else {

                card.classList.add("oculto");

            }

        });

    });

});


/* =========================
   MODAL
========================= */

const modal =
    document.getElementById("modal");

const fechar =
    document.getElementById("fechar");

const botoes =
    document.querySelectorAll(".detalhes");


const modalTitulo =
    document.getElementById("modalTitulo");

const modalCategoria =
    document.getElementById("modalCategoria");

const modalDescricao =
    document.getElementById("modalDescricao");

const modalData =
    document.getElementById("modalData");

const modalLocal =
    document.getElementById("modalLocal");


botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        modalTitulo.textContent =
            botao.dataset.titulo;

        modalCategoria.textContent =
            botao.dataset.categoria;

        modalDescricao.textContent =
            botao.dataset.descricao;

        modalData.textContent =
            botao.dataset.data;

        modalLocal.textContent =
            botao.dataset.local;

        modal.classList.add("aberto");

        document.body.style.overflow = "hidden";

    });

});


function fecharModal() {

    modal.classList.remove("aberto");

    document.body.style.overflow = "";

}


fechar.addEventListener(
    "click",
    fecharModal
);


modal.addEventListener("click", function (evento) {

    if (evento.target === modal) {

        fecharModal();

    }

});


document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        fecharModal();

    }

});


/* =========================
   WHATSAPP
========================= */

/*
    COLOQUE O NÚMERO DO CJDF AQUI.

    Exemplo:

    5561999999999

    Não coloque:
    +
    espaços
    parênteses
    hífen
*/

const NUMERO_WHATSAPP = "SEUNUMERO";


const whatsappContato =
    document.getElementById("whatsappContato");


whatsappContato.addEventListener("click", function (evento) {

    evento.preventDefault();

    const mensagem =
        "Olá! Gostaria de saber mais sobre as atividades do CJDF.";

    const link =
        "https://wa.me/" +
        NUMERO_WHATSAPP +
        "?text=" +
        encodeURIComponent(mensagem);

    window.location.href = link;

});


/* =========================
   VOLTAR AO TOPO
========================= */

const topo =
    document.getElementById("topo");


window.addEventListener("scroll", function () {

    if (window.scrollY > 500) {

        topo.classList.add("mostrar");

    } else {

        topo.classList.remove("mostrar");

    }

});


topo.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

