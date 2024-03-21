(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const a=document.getElementById("area"),l=()=>{a.addEventListener("input",()=>{a.style.height="auto",a.scrollHeight>a.clientHeight&&(a.style.height=a.scrollHeight+"px")})},d=()=>{const r=document.getElementById("btn-copiarTexto"),n=document.getElementById("btn-borrarTexto"),t=document.getElementById("texto-salida"),o=document.getElementById("area"),e=document.querySelector(".texto-entrada"),s=document.getElementById("imagen");r.classList.remove("hidden"),n.classList.remove("hidden"),r.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(t.innerHTML)}catch(c){console.error("Error al copiar: ",c)}}),n.addEventListener("click",()=>{o.value="",e.classList.remove("hidden"),t.innerHTML="",r.classList.add("hidden"),n.classList.add("hidden"),s.classList.remove("lg:hidden"),s.classList.add("lg:block")})},u=r=>["enter","imes","ober","ufat","ai"].some(e=>r.includes(e))?r:r.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat").replace(/a/gi,"ai"),i=()=>document.getElementById("area").value,m=r=>{const n=document.querySelector(".error"),t=document.querySelector("#mensajeError"),o=/[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/,e=/[A-Z]/;return o.test(r)||e.test(r)?(n.setAttribute("fill","red"),t.classList.remove("text-gray400"),t.classList.add("text-[red]"),t.classList.add("shake"),setTimeout(()=>{t.classList.remove("shake")},350),!1):(n.setAttribute("fill","#67808E"),t.classList.remove("text-[red]"),t.classList.add("text-gray400"),!0)},g=()=>{const r=document.getElementById("btn-encriptar"),n=document.getElementById("texto-salida"),t=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");r.addEventListener("click",()=>{let e=i();m(e)&&(e!==""?(t.classList.add("hidden"),n.innerHTML=u(e),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),d()):(t.classList.remove("hidden"),n.innerHTML=""))})},p=r=>r.replace(/(enter|imes|ober|ufat|ai)/gi,(t,o)=>{switch(o.toLowerCase()){case"enter":return"e";case"imes":return"i";case"ober":return"o";case"ufat":return"u";case"ai":return"a";default:return t}}),f=()=>{const r=document.getElementById("btn-desencriptar"),n=document.getElementById("texto-salida"),t=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");r.addEventListener("click",()=>{let e=i();i()!==""&&(t.classList.add("hidden"),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),n.innerHTML=p(e),d())})};l(),g(),f();
