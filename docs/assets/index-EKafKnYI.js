(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=i(e);fetch(e.href,n)}})();const c=document.getElementById("area"),l=()=>{c.addEventListener("input",()=>{c.style.height="auto",c.scrollHeight>c.clientHeight&&(c.style.height=c.scrollHeight+"px")})},d=()=>{const r=document.getElementById("btn-copiarTexto"),t=document.getElementById("btn-borrarTexto"),i=document.getElementById("texto-salida"),o=document.getElementById("area"),e=document.querySelector(".texto-entrada"),n=document.getElementById("imagen");r.classList.remove("hidden"),t.classList.remove("hidden"),r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(i.innerHTML)}catch(a){console.error("Error al copiar: ",a)}}),t.addEventListener("click",()=>{o.value="",e.classList.remove("hidden"),i.innerHTML="",r.classList.add("hidden"),t.classList.add("hidden"),n.classList.remove("lg:hidden"),n.classList.add("lg:block")})},u=r=>r.replace(/a/gi,"ai").replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat"),m=document.getElementById("area"),s=()=>m.value,g=()=>{const r=document.getElementById("btn-encriptar"),t=document.getElementById("texto-salida"),i=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");r.addEventListener("click",()=>{let e=s();e!==""?(i.classList.add("hidden"),t.innerHTML=u(e),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),d()):(i.classList.remove("hidden"),t.innerHTML="")})},p=r=>r.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u"),x=()=>{const r=document.getElementById("btn-desencriptar"),t=document.getElementById("texto-salida"),i=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");r.addEventListener("click",()=>{let e=s();s()!==""&&(i.classList.add("hidden"),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),t.innerHTML=p(e),d())})};l(),g(),x();
