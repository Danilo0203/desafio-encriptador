import { copiarTexto } from "../../logicaEncriptador/copiarTexto";
import { desencriptar } from "../../logicaEncriptador/desencriptar";
import { recuperarTexto } from "../../logicaEncriptador/recuperarTexto";

export const botonDesencriptarTexto = () => {
  const botonDesencriptar = <HTMLButtonElement>document.getElementById("btn-desencriptar");
  const textoSalida = <HTMLTextAreaElement>document.getElementById("texto-salida");
  const textoEntrada = <HTMLElement>document.querySelector(".texto-entrada");
  const imagen = <HTMLImageElement>document.getElementById("imagen");

  botonDesencriptar.addEventListener("click", () => {
    let texto = recuperarTexto();
    if (recuperarTexto() !== "") {
      textoEntrada.classList.add("hidden");
      imagen.classList.remove("lg:block");
      imagen.classList.add("lg:hidden");
      textoSalida.innerHTML = desencriptar(texto);
      copiarTexto();
    }
  });
};
