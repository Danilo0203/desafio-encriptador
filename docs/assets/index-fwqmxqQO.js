(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const a=document.getElementById("area"),l=()=>{a.addEventListener("input",()=>{a.style.height="auto",a.scrollHeight>a.clientHeight&&(a.style.height=a.scrollHeight+"px")})},d=()=>{const n=document.getElementById("btn-copiarTexto"),t=document.getElementById("btn-borrarTexto"),r=document.getElementById("texto-salida"),o=document.getElementById("area"),e=document.querySelector(".texto-entrada"),s=document.getElementById("imagen");n.classList.remove("hidden"),t.classList.remove("hidden"),n.addEventListener("click",async()=>{try{await navigator.clipboard.writeText(r.innerHTML)}catch(c){console.error("Error al copiar: ",c)}}),t.addEventListener("click",()=>{o.value="",e.classList.remove("hidden"),r.innerHTML="",n.classList.add("hidden"),t.classList.add("hidden"),s.classList.remove("lg:hidden"),s.classList.add("lg:block")})},u=n=>["enter","imes","ober","ufat","ai"].some(e=>n.includes(e))?n:n.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat").replace(/a/gi,"ai"),i=()=>document.getElementById("area").value,m=n=>{const t=document.querySelector(".error"),r=document.querySelector("#mensajeError"),o=/[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/,e=/[A-Z]/;return o.test(n)||e.test(n)?(t.setAttribute("fill","red"),r.classList.remove("text-gray400"),r.classList.add("text-[red]"),r.classList.add("shake"),setTimeout(()=>{r.classList.remove("shake")},350),!1):(t.setAttribute("fill","#67808E"),r.classList.remove("text-[red]"),r.classList.add("text-gray400"),!0)},g=()=>{const n=document.getElementById("btn-encriptar"),t=document.getElementById("texto-salida"),r=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");n.addEventListener("click",()=>{let e=i();m(e)&&(e!==""?(r.classList.add("hidden"),t.innerHTML=u(e),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),d()):(r.classList.remove("hidden"),t.innerHTML=""))})},p=n=>{let t=n.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u").replace(/ai/gi,"a");return t=t.replace(/(enter|imes|ober|ufat|ai)/gi,(r,o)=>{switch(o.toLowerCase()){case"enter":return"e";case"imes":return"i";case"ober":return"o";case"ufat":return"u";case"ai":return"a";default:return r}}),t},f=()=>{const n=document.getElementById("btn-desencriptar"),t=document.getElementById("texto-salida"),r=document.querySelector(".texto-entrada"),o=document.getElementById("imagen");n.addEventListener("click",()=>{let e=i();i()!==""&&(r.classList.add("hidden"),o.classList.remove("lg:block"),o.classList.add("lg:hidden"),t.innerHTML=p(e),d())})};l(),g(),f();
