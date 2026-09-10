
/* ==================================================
   PRELOADER
================================================== */

window.addEventListener("load", function () {

    setTimeout(function () {

        const preloader =
            document.getElementById("preloader");

        preloader.classList.add("esconder");

    }, 4000);

});



/* ==================================================
   ANIMAÇÕES DE SCROLL
================================================== */

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



/* ==================================================
   FILTROS
================================================== */

const filtros =
    document.querySelectorAll(".filtro");


const fotos =
    document.querySelectorAll(".foto");


filtros.forEach(function (filtro) {

    filtro.addEventListener("click", function () {


        filtros.forEach(function (item) {

            item.classList.remove("ativo");

        });


        filtro.classList.add("ativo");


        const categoria =
            filtro.dataset.filtro;


        fotos.forEach(function (foto) {


            if (
                categoria === "todos" ||
                foto.dataset.categoria === categoria
            ) {

                foto.classList.remove("oculto");

            } else {

                foto.classList.add("oculto");

            }

        });

    });

});



/* ==================================================
   LIGHTBOX
================================================== */

const lightbox =
    document.getElementById("lightbox");


const imagemLightbox =
    document.getElementById("imagemLightbox");


const categoriaLightbox =
    document.getElementById("categoriaLightbox");


const tituloLightbox =
    document.getElementById("tituloLightbox");


const contadorLightbox =
    document.getElementById("contadorLightbox");


const fechar =
    document.getElementById("fechar");


const anterior =
    document.getElementById("anterior");


const proxima =
    document.getElementById("proxima");



const dados = [

    {
        imagem: "img/foto1.jpg",
        categoria: "EVENTO",
        titulo: "Momentos CJDF"
    },

    {
        imagem: "img/foto2.jpg",
        categoria: "ENCONTRO",
        titulo: "Comunidade"
    },

    {
        imagem: "img/foto3.jpg",
        categoria: "SOCIAL",
        titulo: "Ação Comunitária"
    },

    {
        imagem: "img/foto4.jpg",
        categoria: "COMUNIDADE",
        titulo: "Encontro CJDF"
    },

    {
        imagem: "img/foto5.jpg",
        categoria: "EVENTO",
        titulo: "Experiência CJDF"
    },

    {
        imagem: "img/foto6.jpg",
        categoria: "COMUNIDADE",
        titulo: "Nossa Galáxia"
    }

];


let fotoAtual = 0;



function abrirFoto(indice) {

    fotoAtual = indice;


    const foto =
        dados[fotoAtual];


    imagemLightbox.src =
        foto.imagem;


    imagemLightbox.alt =
        foto.titulo;


    categoriaLightbox.textContent =
        foto.categoria;


    tituloLightbox.textContent =
        foto.titulo;


    contadorLightbox.textContent =
        String(fotoAtual + 1).padStart(2, "0")
        + " / "
        + String(dados.length).padStart(2, "0");


    lightbox.classList.add("aberto");


    document.body.style.overflow = "hidden";

}



function fecharLightbox() {

    lightbox.classList.remove("aberto");

    document.body.style.overflow = "";

}



function mudarFoto(direcao) {

    fotoAtual += direcao;


    if (fotoAtual < 0) {

        fotoAtual = dados.length - 1;

    }


    if (fotoAtual >= dados.length) {

        fotoAtual = 0;

    }


    abrirFoto(fotoAtual);

}



fotos.forEach(function (foto) {

    foto.addEventListener("click", function () {

        const indice =
            Number(foto.dataset.indice);

        abrirFoto(indice);

    });

});



fechar.addEventListener("click", function () {

    fecharLightbox();

});


anterior.addEventListener("click", function () {

    mudarFoto(-1);

});


proxima.addEventListener("click", function () {

    mudarFoto(1);

});



lightbox.addEventListener("click", function (evento) {

    if (evento.target === lightbox) {

        fecharLightbox();

    }

});



document.addEventListener("keydown", function (evento) {

    if (!lightbox.classList.contains("aberto")) {

        return;

    }


    if (evento.key === "Escape") {

        fecharLightbox();

    }


    if (evento.key === "ArrowLeft") {

        mudarFoto(-1);

    }


    if (evento.key === "ArrowRight") {

        mudarFoto(1);

    }

});



/* ==================================================
   WHATSAPP
================================================== */

const NUMERO_WHATSAPP =
    "SEUNUMERO";


const whatsappContato =
    document.getElementById("whatsappContato");


whatsappContato.addEventListener("click", function (evento) {

    evento.preventDefault();


    const mensagem =
        "Olá! Gostaria de saber mais sobre o CJDF.";


    const link =
        "https://wa.me/"
        + NUMERO_WHATSAPP
        + "?text="
        + encodeURIComponent(mensagem);


    window.location.href = link;

});



/* ==================================================
   BOTÃO VOLTAR AO TOPO
================================================== */

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

