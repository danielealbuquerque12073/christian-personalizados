// ================================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ================================

const elementos = document.querySelectorAll(
".card, .galeria img, .sobre, .contato"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("mostrar");

}

});

},{
threshold:0.15
});

elementos.forEach(el=>{

el.classList.add("esconder");

observer.observe(el);

});

// ================================
// HEADER COM SOMBRA
// ================================

window.addEventListener("scroll",()=>{

const header = document.querySelector("header");

if(window.scrollY > 40){

header.style.boxShadow =
"0 12px 25px rgba(0,0,0,.08)";

}else{

header.style.boxShadow =
"0 6px 18px rgba(0,0,0,.04)";

}

});

// ================================
// BOTÕES COM EFEITO
// ================================

const botoes = document.querySelectorAll(".btn, .btn2");

botoes.forEach(botao=>{

botao.addEventListener("mouseenter",()=>{

botao.style.transform="translateY(-4px) scale(1.03)";

});

botao.addEventListener("mouseleave",()=>{

botao.style.transform="translateY(0) scale(1)";

});

});