(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();const c=document.getElementById("area"),l=()=>{c.addEventListener("input",()=>{c.style.height="auto",c.scrollHeight>c.clientHeight&&(c.style.height=c.scrollHeight+"px")})},d=()=>{const r=document.getElementById("btn-copiarTexto"),t=document.getElementById("btn-borrarTexto"),o=document.getElementById("texto-salida"),s=document.getElementById("area"),e=document.querySelector(".texto-entrada"),n=document.getElementById("imagen");r.classList.remove("hidden"),t.classList.remove("hidden"),r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(o.innerHTML)}catch(i){console.error("Error al copiar: ",i)}}),t.addEventListener("click",()=>{s.value="",e.classList.remove("hidden"),o.innerHTML="",r.classList.add("hidden"),t.classList.add("hidden"),n.classList.remove("lg:hidden"),n.classList.add("lg:block")})},u=r=>r.replace(/a/gi,"ai").replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat"),a=()=>document.getElementById("area").value,m=r=>{const t=document.querySelector(".error"),o=document.querySelector("#mensajeError"),s=/[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/,e=/[A-Z]/;return s.test(r)||e.test(r)?(t.setAttribute("fill","red"),o.classList.remove("text-gray400"),o.classList.add("text-[red]"),o.classList.add("shake"),setTimeout(()=>{o.classList.remove("shake")},350),!1):(t.setAttribute("fill","#67808E"),o.classList.remove("text-[red]"),o.classList.add("text-gray400"),!0)},g=()=>{const r=document.getElementById("btn-encriptar"),t=document.getElementById("texto-salida"),o=document.querySelector(".texto-entrada"),s=document.getElementById("imagen");r.addEventListener("click",()=>{let e=a();m(e)&&(e!==""?(o.classList.add("hidden"),t.innerHTML=u(e),s.classList.remove("lg:block"),s.classList.add("lg:hidden"),d()):(o.classList.remove("hidden"),t.innerHTML=""))})},p=r=>r.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u"),x=()=>{const r=document.getElementById("btn-desencriptar"),t=document.getElementById("texto-salida"),o=document.querySelector(".texto-entrada"),s=document.getElementById("imagen");r.addEventListener("click",()=>{let e=a();a()!==""&&(o.classList.add("hidden"),s.classList.remove("lg:block"),s.classList.add("lg:hidden"),t.innerHTML=p(e),d())})};l(),g(),x();