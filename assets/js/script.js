document.addEventListener("DOMContentLoaded",()=>{

/*=========================================
LOADING SCREEN
=========================================*/

const loading=document.querySelector(".loading-screen");

if(loading){

setTimeout(()=>{

loading.style.opacity="0";
loading.style.transition=".6s";

setTimeout(()=>{

loading.style.display="none";

},600);

},900);

}

/*=========================================
MENU MOBILE
=========================================*/

const menuButton=document.querySelector(".menu-mobile");
const navbar=document.querySelector(".navbar");

if(menuButton){

menuButton.addEventListener("click",()=>{

navbar.classList.toggle("active");
menuButton.classList.toggle("active");

});

}

document.querySelectorAll(".navbar a").forEach(link=>{

link.addEventListener("click",()=>{

navbar.classList.remove("active");
menuButton.classList.remove("active");

});

});

/*=========================================
HEADER
=========================================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="rgba(5,8,22,.95)";
header.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(5,8,22,.75)";
header.style.boxShadow="none";

}

});

/*=========================================
CURSOR GLOW
=========================================*/

const cursor=document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});

/*=========================================
SCROLL REVEAL
=========================================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:.15
});

document.querySelectorAll("section,.benefit-card,.tool-card,.business-card,.resource-card,.post-card,.course-card,.number-card").forEach(el=>{

el.classList.add("reveal");

observer.observe(el);

});

/*=========================================
COUNTERS
=========================================*/

const counters=document.querySelectorAll(".number-card h3");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const finalValue=parseInt(counter.innerText.replace(/\D/g,""));

let current=0;

const speed=Math.max(10,Math.floor(finalValue/40));

const timer=setInterval(()=>{

current+=speed;

if(current>=finalValue){

counter.innerText=counter.innerText.includes("+")?`+${finalValue}`:finalValue;

clearInterval(timer);

}else{

counter.innerText=counter.innerText.includes("+")?`+${current}`:current;

}

},30);

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
  /*=========================================
BOTÃO VOLTAR AO TOPO
=========================================*/

const backTop=document.createElement("button");

backTop.className="back-top";

backTop.innerHTML="↑";

document.body.appendChild(backTop);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*=========================================
MENU ATIVO
=========================================*/

const sections=document.querySelectorAll("section[id]");

const navLinks=document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.offsetHeight;

if(window.pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

const href=link.getAttribute("href");

if(href==="#"+current){

link.classList.add("active");

}

});

});

/*=========================================
PARALLAX HERO
=========================================*/

const heroImage=document.querySelector(".hero-image");

window.addEventListener("scroll",()=>{

const offset=window.scrollY*0.15;

if(heroImage){

heroImage.style.transform=`translateY(${offset}px)`;

}

});

/*=========================================
HOVER 3D
=========================================*/

const cards=document.querySelectorAll(".benefit-card,.business-card,.tool-card,.resource-card,.course-card,.post-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

const rotateY=((x/rect.width)-0.5)*12;

const rotateX=((y/rect.height)-0.5)*-12;

card.style.transform=`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

});

});

/*=========================================
SCROLL PROGRESS
=========================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const progressWidth=(window.pageYOffset/total)*100;

progress.style.width=progressWidth+"%";

});

/*=========================================
ANO AUTOMÁTICO
=========================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

/*=========================================
FINAL
=========================================*/

});
/*=========================================
NEWSLETTER IA BUSINESS
=========================================*/

const newsletter = document.getElementById("newsletterForm");

if (newsletter) {

newsletter.addEventListener("submit", async function(e){

e.preventDefault();

const botao = document.getElementById("btnEnviar");
const mensagem = document.getElementById("mensagemNewsletter");

const email = document.getElementById("email").value.trim();

if(email===""){

mensagem.innerHTML="Digite um e-mail.";

return;

}

botao.disabled=true;
botao.innerHTML="Enviando...";

try{

const resposta = await fetch("https://script.google.com/macros/s/AKfycbwycV0sF98fUkBcDLSL0GBaV0zDWQXwx1vj0P0FL_7HRGx-dGfOFhWWKFeFWcVnchau/exec",{

method:"POST",

headers:{
"Content-Type":"text/plain;charset=utf-8"
},

body:JSON.stringify({

email:email,

origem:"Home"

})

});

botao.innerHTML="Receber Conteúdo";
botao.disabled=false;

mensagem.innerHTML="✅ Cadastro realizado com sucesso!";

newsletter.reset();

}catch(error){

botao.innerHTML="Receber Conteúdo";
botao.disabled=false;

mensagem.innerHTML="❌ Erro ao enviar. Tente novamente.";

console.error(error);

}

});

}
