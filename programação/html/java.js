const elementos = document.querySelectorAll(".animacao, .card");

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

            }

        });

    },

    {
        threshold: 0.6
    }

);


elementos.forEach((elemento) => {

    observador.observe(elemento);

});