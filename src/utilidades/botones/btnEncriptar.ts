import { copiarTexto } from "../../logicaEncriptador/copiarTexto";
import { encriptar } from "../../logicaEncriptador/encriptar";
import { recuperarTexto } from "../../logicaEncriptador/recuperarTexto";
import { validarTexto } from "../../logicaEncriptador/validarTexto";

export const botonEncriptarTexto = () => {
  const botonEncriptar = <HTMLButtonElement>document.getElementById("btn-encriptar");
  const textoSalida = <HTMLTextAreaElement>document.getElementById("texto-salida");
  const textoEntrada = <HTMLElement>document.querySelector(".texto-entrada");
  const imagen = <HTMLImageElement>document.getElementById("imagen");
  botonEncriptar.addEventListener("click", () => {
    let texto = recuperarTexto();
    if (validarTexto(texto)) {
      if (texto !== "") {
        textoEntrada.classList.add("hidden");
        textoSalida.innerHTML = encriptar(texto);
        imagen.classList.remove("lg:block");
        imagen.classList.add("lg:hidden");
        copiarTexto();
      } else {
        textoEntrada.classList.remove("hidden");
        textoSalida.innerHTML = "";
      }
    }
  });
};
