
/* =====================================================
   CONFIGURAÇÕES
===================================================== */

// COLOQUE AQUI O WHATSAPP DO CJDF
// Exemplo:
// 5561999999999

const NUMERO_WHATSAPP = "SEUNUMERO";


/* =====================================================
   PRELOADER
===================================================== */

window.addEventListener("load", function () {

    const preloader =
        document.getElementById("preloader");

    setTimeout(function () {

        preloader.classList.add("esconder");

        setTimeout(function () {

            preloader.style.display = "none";

        }, 1000);

    }, 4000);

});


/* =====================================================
   DADOS DOS PROJETOS
===================================================== */

const projetos = {

    eventos: {

        categoria: "EVENTOS",

        titulo: "EVENTOS CJDF",

        descricao:
            "Eventos e encontros realizados para aproximar fãs, criar experiências e fortalecer a comunidade de Star Wars no Distrito Federal.",

        imagem: "img/projeto1.jpg"

    },


    social: {

        categoria: "SOCIAL",

        titulo: "AÇÕES SOCIAIS",

        descricao:
            "Iniciativas de solidariedade que utilizam a força e a união da comunidade para contribuir com ações sociais.",

        imagem: "img/projeto2.jpg"

    },


    comunidade: {

        categoria: "COMUNIDADE",

        titulo: "COMUNIDADE JEDI",

        descricao:
            "Projetos e iniciativas criados para aproximar fãs, promover encontros e fortalecer os laços da comunidade.",

        imagem: "img/projeto3.jpg"

    },


    especial: {

        categoria: "EVENTOS",

        titulo: "PROJETOS ESPECIAIS",

        descricao:
            "Projetos especiais desenvolvidos pelo Conselho Jedi do Distrito Federal para proporcionar experiências diferenciadas à comunidade.",

        imagem: "img/projeto4.jpg"

    }

};


/* =====================================================
   ELEMENTOS DO MODAL
===================================================== */

const modal =
    document.getElementById("modal");

const fecharModal =
    document.getElementById("fecharModal");

const modalImagem =
    document.getElementById("modalImagem");

const modalCategoria =
    document.getElementById("modalCategoria");

const modalTitulo =
    document.getElementById("modalTitulo");

const modalDescricao =
    document.getElementById("modalDescricao");

const modalContato =
    document.getElementById("modalContato");


/* =====================================================
   ABRIR PROJETO
===================================================== */

function abrirProjeto(nomeProjeto) {

    const projeto =
        projetos[nomeProjeto];

    if (!projeto) {
        return;
    }


    modalImagem.src =
        projeto.imagem;

    modalImagem.alt =
        projeto.titulo;

    modalCategoria.textContent =
        projeto.categoria;

    modalTitulo.textContent =
        projeto.titulo;

    modalDescricao.textContent =
        projeto.descricao;


    const mensagem =
        `Olá! Gostaria de saber mais sobre o projeto ${projeto.titulo} do CJDF.`;

    modalContato.href =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;


    modal.classList.add("aberto");

    document.body.style.overflow = "hidden";

}


/* =====================================================
   BOTÕES DOS PROJETOS
===================================================== */

const botoesProjetos =
    document.querySelectorAll(".ver-projeto");


botoesProjetos.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const nomeProjeto =
            botao.getAttribute("data-projeto");

        abrirProjeto(nomeProjeto);

    });

});


/* =====================================================
   PROJETO EM DESTAQUE
===================================================== */

const abrirDestaque =
    document.getElementById("abrirDestaque");


if (abrirDestaque) {

    abrirDestaque.addEventListener(
        "click",
        function () {

            abrirProjeto("eventos");

        }
    );

}


/* =====================================================
   FECHAR MODAL
===================================================== */

function fecharJanela() {

    modal.classList.remove("aberto");

    document.body.style.overflow = "";

}


fecharModal.addEventListener(
    "click",
    fecharJanela
);


modal.addEventListener(
    "click",
    function (evento) {

        if (evento.target === modal) {

            fecharJanela();

        }

    }
);


/* =====================================================
   ESC FECHA O MODAL
===================================================== */

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            fecharJanela();

        }

    }
);


/* =====================================================
   FILTROS
===================================================== */

const filtros =
    document.querySelectorAll(".filtro");

const cardsProjetos =
    document.querySelectorAll(".projeto");


filtros.forEach(function (filtro) {

    filtro.addEventListener(
        "click",
        function () {


            filtros.forEach(function (botao) {

                botao.classList.remove("ativo");

            });


            filtro.classList.add("ativo");


            const categoria =
                filtro.getAttribute("data-filtro");


            cardsProjetos.forEach(function (card) {

                const categoriaCard =
                    card.getAttribute("data-categoria");


                if (
                    categoria === "todos" ||
                    categoria === categoriaCard
                ) {

                    card.classList.remove("oculto");

                } else {

                    card.classList.add("oculto");

                }

            });

        }
    );

});


/* =====================================================
   ANIMAÇÃO DOS CARDS
===================================================== */

const elementosAnimados =
    document.querySelectorAll(
        ".projeto, .contato"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(

            function (entradas, observer) {

                entradas.forEach(
                    function (entrada) {

                        if (
                            entrada.isIntersecting
                        ) {

                            entrada.target.classList.add(
                                "aparecer"
                            );

                            observer.unobserve(
                                entrada.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elementosAnimados.forEach(
        function (elemento) {

            observer.observe(elemento);

        }
    );

} else {

    elementosAnimados.forEach(
        function (elemento) {

            elemento.classList.add(
                "aparecer"
            );

        }
    );

}


/* =====================================================
   CONTADOR DOS NÚMEROS
===================================================== */

const numeros =
    document.querySelectorAll(
        "[data-numero]"
    );


let contadorExecutado = false;


function iniciarContadores() {

    if (contadorExecutado) {
        return;
    }

    contadorExecutado = true;


    numeros.forEach(function (numero) {

        const objetivo =
            Number(
                numero.getAttribute("data-numero")
            );

        let atual = 0;

        const incremento =
            Math.max(
                1,
                Math.ceil(objetivo / 60)
            );


        const contador =
            setInterval(function () {

                atual += incremento;


                if (atual >= objetivo) {

                    atual = objetivo;

                    clearInterval(contador);

                }


                numero.textContent =
                    atual;

            }, 25);

    });

}


/* =====================================================
   OBSERVAR NÚMEROS
===================================================== */

const secaoNumeros =
    document.querySelector(".numeros");


if (
    secaoNumeros &&
    "IntersectionObserver" in window
) {

    const observerNumeros =
        new IntersectionObserver(

            function (entradas, observer) {

                if (
                    entradas[0].isIntersecting
                ) {

                    iniciarContadores();

                    observer.unobserve(
                        secaoNumeros
                    );

                }

            },

            {
                threshold: 0.3
            }

        );


    observerNumeros.observe(
        secaoNumeros
    );

}


/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const botaoTopo =
    document.getElementById("topo");


window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 500) {

            botaoTopo.classList.add(
                "mostrar"
            );

        } else {

            botaoTopo.classList.remove(
                "mostrar"
            );

        }

    }
);


botaoTopo.addEventListener(
    "click",
    function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   WHATSAPP
===================================================== */

const whatsappContato =
    document.getElementById(
        "whatsappContato"
    );


const mensagemContato =
    "Olá! Gostaria de saber mais sobre os projetos do Conselho Jedi do Distrito Federal.";


whatsappContato.href =
    `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagemContato)}`;

