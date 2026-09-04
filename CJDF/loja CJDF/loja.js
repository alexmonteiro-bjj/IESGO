
// ==========================================
// LOJA CJDF - JAVASCRIPT
// ==========================================


// ==========================================
// PRODUTOS
// ==========================================

const dadosProdutos = {

    camiseta: {
        nome: "Camiseta CJDF",
        categoria: "VESTUÁRIO",
        descricao: "Camiseta oficial do Conselho Jedi do Distrito Federal.",
        imagem: "img/camiseta.jpg",
        tamanhos: ["P", "M", "G", "GG"],
        disponibilidade: "disponivel"
    },

    jaqueta: {
        nome: "Jaqueta CJDF",
        categoria: "VESTUÁRIO",
        descricao: "Jaqueta temática do Conselho Jedi do Distrito Federal.",
        imagem: "img/jaqueta.jpg",
        tamanhos: ["P", "M", "G", "GG"],
        disponibilidade: "poucas"
    },

    caneca: {
        nome: "Caneca CJDF",
        categoria: "ACESSÓRIOS",
        descricao: "Caneca personalizada do Conselho Jedi do Distrito Federal.",
        imagem: "img/caneca.jpg",
        tamanhos: [],
        disponibilidade: "disponivel"
    },

    bone: {
        nome: "Boné CJDF",
        categoria: "ACESSÓRIOS",
        descricao: "Boné oficial com identidade visual do CJDF.",
        imagem: "img/bone.jpg",
        tamanhos: [],
        disponibilidade: "esgotado"
    }

};


// ==========================================
// ELEMENTOS
// ==========================================

const modal = document.getElementById("modal");

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

const modalTamanhos =
    document.getElementById("modalTamanhos");

const modalDisponibilidade =
    document.getElementById("modalDisponibilidade");

const whatsappProduto =
    document.getElementById("whatsappProduto");

const botaoTopo =
    document.getElementById("topo");


let tamanhoSelecionado = "";


// ==========================================
// ABRIR MODAL
// ==========================================

document
    .querySelectorAll(".ver-detalhes")
    .forEach(botao => {

        botao.addEventListener("click", function () {

            const id =
                this.dataset.produto;

            abrirProduto(id);

        });

    });


function abrirProduto(id) {

    const produto =
        dadosProdutos[id];

    if (!produto || !modal) {
        return;
    }


    tamanhoSelecionado = "";


    // Imagem
    modalImagem.src =
        produto.imagem;

    modalImagem.alt =
        produto.nome;


    // Informações
    modalCategoria.textContent =
        produto.categoria;

    modalTitulo.textContent =
        produto.nome;

    modalDescricao.textContent =
        produto.descricao;


    // ======================================
    // TAMANHOS
    // ======================================

    modalTamanhos.innerHTML = "";


    if (produto.tamanhos.length > 0) {

        const texto =
            document.createElement("p");

        texto.textContent =
            "Escolha o tamanho:";

        texto.style.color =
            "#888";

        texto.style.fontSize =
            "12px";

        texto.style.marginBottom =
            "10px";

        modalTamanhos.appendChild(texto);


        produto.tamanhos.forEach(tamanho => {

            const elemento =
                document.createElement("span");

            elemento.textContent =
                tamanho;

            elemento.addEventListener(
                "click",
                function () {

                    modalTamanhos
                        .querySelectorAll("span")
                        .forEach(item => {

                            item.style.borderColor =
                                "#444";

                            item.style.color =
                                "#aaa";

                            item.style.background =
                                "transparent";

                        });


                    this.style.borderColor =
                        "#d4af37";

                    this.style.color =
                        "#d4af37";

                    this.style.background =
                        "rgba(212,175,55,.08)";


                    tamanhoSelecionado =
                        tamanho;

                }
            );


            modalTamanhos.appendChild(
                elemento
            );

        });

    }

    else {

        const unico =
            document.createElement("span");

        unico.textContent =
            "TAMANHO ÚNICO";

        unico.style.width =
            "auto";

        unico.style.padding =
            "0 15px";

        modalTamanhos.appendChild(
            unico
        );

    }


    // ======================================
    // DISPONIBILIDADE
    // ======================================

    atualizarDisponibilidade(
        produto
    );


    // ======================================
    // WHATSAPP
    // ======================================

    configurarWhatsApp(
        produto
    );


    // Remove zoom anterior
    modalImagem.classList.remove(
        "imagem-ampliada"
    );


    // Abre
    modal.classList.add(
        "aberto"
    );

    document.body.style.overflow =
        "hidden";

}


// ==========================================
// DISPONIBILIDADE
// ==========================================

function atualizarDisponibilidade(
    produto
) {

    if (!modalDisponibilidade) {
        return;
    }


    if (
        produto.disponibilidade ===
        "disponivel"
    ) {

        modalDisponibilidade.textContent =
            "● DISPONÍVEL";

        modalDisponibilidade.style.color =
            "#d4af37";

    }

    else if (
        produto.disponibilidade ===
        "poucas"
    ) {

        modalDisponibilidade.textContent =
            "● POUCAS UNIDADES";

        modalDisponibilidade.style.color =
            "#d4af37";

    }

    else {

        modalDisponibilidade.textContent =
            "● ESGOTADO";

        modalDisponibilidade.style.color =
            "#777";

    }

}


// ==========================================
// WHATSAPP
// ==========================================

function configurarWhatsApp(
    produto
) {

    if (!whatsappProduto) {
        return;
    }


    // Produto esgotado
    if (
        produto.disponibilidade ===
        "esgotado"
    ) {

        whatsappProduto.textContent =
            "PRODUTO ESGOTADO";

        whatsappProduto.removeAttribute(
            "href"
        );

        whatsappProduto.style.pointerEvents =
            "none";

        whatsappProduto.style.opacity =
            "0.5";

        return;

    }


    whatsappProduto.textContent =
        "TENHO INTERESSE";

    whatsappProduto.style.pointerEvents =
        "auto";

    whatsappProduto.style.opacity =
        "1";


    whatsappProduto.onclick =
        function (evento) {

            evento.preventDefault();


            // ==================================
            // COLOQUE O WHATSAPP DO CJDF AQUI
            // ==================================

            const numero =
                "5561999131100";


            // ==================================
            // TAMANHO
            // ==================================

            if (
                produto.tamanhos.length > 0
            ) {

                if (!tamanhoSelecionado) {

                    mostrarAviso(
                        "ESCOLHA UM TAMANHO ANTES DE CONTINUAR."
                    );

                    return;

                }

            }


            // ==================================
            // MENSAGEM
            // ==================================

            let mensagem =
                `Olá! Tenho interesse no produto "${produto.nome}"`;


            if (tamanhoSelecionado) {

                mensagem +=
                    `, tamanho ${tamanhoSelecionado}`;

            }


            mensagem += ".";


            // ==================================
            // WHATSAPP
            // ==================================

            const url =
                `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


            window.open(
                url,
                "_blank"
            );

        };

}


// ==========================================
// FECHAR MODAL
// ==========================================

if (fecharModal) {

    fecharModal.addEventListener(
        "click",
        fecharProduto
    );

}


function fecharProduto() {

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "aberto"
    );

    document.body.style.overflow =
        "";

}


// ==========================================
// CLICAR FORA
// ==========================================

window.addEventListener(
    "click",
    function (evento) {

        if (
            modal &&
            evento.target === modal
        ) {

            fecharProduto();

        }

    }
);


// ==========================================
// ESC
// ==========================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            fecharProduto();

        }

    }
);


// ==========================================
// FILTROS
// ==========================================

const botoesFiltro =
    document.querySelectorAll(
        ".filtro"
    );

const cardsProdutos =
    document.querySelectorAll(
        ".produto"
    );


botoesFiltro.forEach(botao => {

    botao.addEventListener(
        "click",
        function () {


            botoesFiltro.forEach(item => {

                item.classList.remove(
                    "ativo"
                );

            });


            this.classList.add(
                "ativo"
            );


            const filtro =
                this.dataset.filtro;


            cardsProdutos.forEach(card => {

                const categoria =
                    card.dataset.categoria;


                if (
                    filtro === "todos" ||
                    categoria === filtro
                ) {

                    card.classList.remove(
                        "oculto"
                    );

                }

                else {

                    card.classList.add(
                        "oculto"
                    );

                }

            });

        }
    );

});


// ==========================================
// IMAGEM AMPLIADA
// ==========================================

if (modalImagem) {

    modalImagem.addEventListener(
        "click",
        function () {

            this.classList.toggle(
                "imagem-ampliada"
            );

        }
    );

}


// ==========================================
// VOLTAR AO TOPO
// ==========================================

window.addEventListener(
    "scroll",
    function () {

        if (!botaoTopo) {
            return;
        }


        if (window.scrollY > 400) {

            botaoTopo.classList.add(
                "mostrar"
            );

        }

        else {

            botaoTopo.classList.remove(
                "mostrar"
            );

        }

    }
);


if (botaoTopo) {

    botaoTopo.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// ==========================================
// AVISOS
// ==========================================

function mostrarAviso(
    mensagem
) {

    let aviso =
        document.querySelector(
            ".aviso-loja"
        );


    if (!aviso) {

        aviso =
            document.createElement(
                "div"
            );

        aviso.classList.add(
            "aviso-loja"
        );


        aviso.style.position =
            "fixed";

        aviso.style.bottom =
            "30px";

        aviso.style.left =
            "50%";

        aviso.style.transform =
            "translateX(-50%)";

        aviso.style.background =
            "#0b0b0b";

        aviso.style.border =
            "1px solid #d4af37";

        aviso.style.color =
            "#d4af37";

        aviso.style.padding =
            "14px 22px";

        aviso.style.fontFamily =
            "Audiowide, sans-serif";

        aviso.style.fontSize =
            "9px";

        aviso.style.letterSpacing =
            "1px";

        aviso.style.zIndex =
            "99999";

        aviso.style.textAlign =
            "center";

        aviso.style.boxShadow =
            "0 0 20px rgba(212,175,55,.2)";

        aviso.style.transition =
            ".3s";


        document.body.appendChild(
            aviso
        );

    }


    aviso.textContent =
        mensagem;

    aviso.style.opacity =
        "1";


    clearTimeout(
        aviso.timer
    );


    aviso.timer =
        setTimeout(
            () => {

                aviso.style.opacity =
                    "0";

            },
            2500
        );

}


// ==========================================
// PRELOADER
// ==========================================

window.addEventListener(
    "load",
    function () {

        const preloader =
            document.getElementById(
                "preloader"
            );


        if (!preloader) {
            return;
        }


        // Mantém o preloader por 4 segundos
        setTimeout(
            () => {

                preloader.classList.add(
                    "esconder"
                );


                // Espera o fade terminar
                setTimeout(
                    () => {

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


// ==========================================
// ANIMAÇÃO DOS ELEMENTOS
// ==========================================

const elementosAnimacao =
    document.querySelectorAll(
        ".produto, .passo, .contato"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observador =
        new IntersectionObserver(

            elementos => {

                elementos.forEach(
                    elemento => {

                        if (
                            elemento.isIntersecting
                        ) {

                            elemento.target.classList.add(
                                "aparecer"
                            );

                            observador.unobserve(
                                elemento.target
                            );

                        }

                    }
                );

            },

            {
                threshold: 0.15
            }

        );


    elementosAnimacao.forEach(
        elemento => {

            observador.observe(
                elemento
            );

        }
    );

}

