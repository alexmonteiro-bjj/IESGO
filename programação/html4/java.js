const cards = document.querySelectorAll(".game-card");
const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("aparecer");
        }
    });
}, { threshold: 0.2 });
cards.forEach((card) => {
    observador.observe(card);
});
