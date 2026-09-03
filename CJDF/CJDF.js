
let atual = 0;

const slides = document.querySelectorAll('.slide');
const total = slides.length;

function mudarSlide() {
    slides[atual].classList.remove('ativa');

    atual = (atual + 1) % total;

    slides[atual].classList.add('ativa');
}

// Troca a imagem a cada 3 segundos
setInterval(mudarSlide, 7000);

