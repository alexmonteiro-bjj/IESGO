const elementos = document.querySelectorAll(".animacao");

const observador = new IntersectionObserver((entradas) => {
entradas.forEach((entrada) => {
if(entrada.isIntersecting){
entrada.target.classList.add("aparecer");
observador.unobserve(entrada.target);
}
});
},{
threshold:0.15
});

elementos.forEach((elemento) => {
observador.observe(elemento);
});
