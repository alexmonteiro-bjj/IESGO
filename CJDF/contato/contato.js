
/* =========================
   CONFIGURAÇÕES
========================= */

const NUMERO_WHATSAPP = "SEUNUMERO";

const INSTAGRAM = "SEUINSTAGRAM";

const EMAIL = "SEUEMAIL";


/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const preloader = document.getElementById("preloader");

        preloader.classList.add("esconder");

    }, 4000);

});


/* =========================
   WHATSAPP
========================= */

const whatsappContato =
    document.getElementById("whatsappContato");

if (whatsappContato) {

    const mensagem =
        "Olá! Gostaria de entrar em contato com o CJDF.";

    whatsappContato.href =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

    whatsappContato.target = "_blank";

}


/* =========================
   INSTAGRAM
========================= */

const instagramContato =
    document.getElementById("instagramContato");

if (instagramContato) {

    instagramContato.href = INSTAGRAM;

    instagramContato.target = "_blank";

}


/* =========================
   E-MAIL
========================= */

const emailContato =
    document.getElementById("emailContato");

if (emailContato) {

    emailContato.href = `mailto:${EMAIL}`;

}


/* =========================
   FORMULÁRIO
========================= */

const formContato =
    document.getElementById("formContato");

if (formContato) {

    formContato.addEventListener("submit", function (event) {

        event.preventDefault();

        const nome =
            document.getElementById("nome").value;

        const email =
            document.getElementById("email").value;

        const assunto =
            document.getElementById("assunto").value;

        const mensagem =
            document.getElementById("mensagem").value;


        const texto =
            `Olá, CJDF!

Nome: ${nome}

E-mail: ${email}

Assunto: ${assunto}

Mensagem:
${mensagem}`;


        const url =
            `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;


        window.open(url, "_blank");

    });

}


/* =========================
   ANIMAÇÕES AO ROLAR
========================= */

const elementos =
    document.querySelectorAll(".revelar");


const observador =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("aparecer");

                    observador.unobserve(entrada.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementos.forEach((elemento) => {

    observador.observe(elemento);

});


/* =========================
   VOLTAR AO TOPO
========================= */

const voltarTopo =
    document.getElementById("voltarTopo");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        voltarTopo.classList.add("mostrar");

    } else {

        voltarTopo.classList.remove("mostrar");

    }

});


voltarTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

