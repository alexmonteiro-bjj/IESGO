const preloader = document.getElementById("preloader");

window.addEventListener("load", () => {

setTimeout(() => {

preloader.classList.add("oculto");

}, 2500);

});


const elementos = document.querySelectorAll(".animacao");

const observer = new IntersectionObserver((entradas) => {

entradas.forEach((entrada) => {

if(entrada.isIntersecting){

entrada.target.classList.add("aparecer");

observer.unobserve(entrada.target);

}

});

},{
threshold:0.15
});


elementos.forEach((elemento) => {

observer.observe(elemento);

});


const menuBotao = document.getElementById("menuBotao");

const menu = document.getElementById("menu");


menuBotao.addEventListener("click", () => {

menu.classList.toggle("aberto");

});


const linksMenu = document.querySelectorAll(".menu a");


linksMenu.forEach((link) => {

link.addEventListener("click", () => {

menu.classList.remove("aberto");

});

});


const secoes = document.querySelectorAll("section[id]");

const links = document.querySelectorAll(".menu a");


window.addEventListener("scroll", () => {

let secaoAtual = "";

secoes.forEach((secao) => {

const distancia = secao.offsetTop - 150;

if(window.scrollY >= distancia){

secaoAtual = secao.getAttribute("id");

}

});


links.forEach((link) => {

link.classList.remove("ativo");

if(link.getAttribute("href") === "#" + secaoAtual){

link.classList.add("ativo");

}

});

});


const pontos = document.querySelectorAll(".ponto");


pontos.forEach((ponto) => {

ponto.addEventListener("click", () => {

const estado = ponto.dataset.estado;

alert("Conselho Jedi de " + estado);

});

});


const filtros = document.querySelectorAll(".filtro");


filtros.forEach((filtro) => {

filtro.addEventListener("click", () => {

filtros.forEach((item) => {

item.classList.remove("ativo");

});

filtro.classList.add("ativo");

});

});