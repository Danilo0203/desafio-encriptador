export const copiarTexto = () => {
  const btnCopiarTexto = <HTMLButtonElement>document.getElementById("btn-copiarTexto");
  const btnBorrarTexto = <HTMLButtonElement>document.getElementById("btn-borrarTexto");
  const textoSalida = <HTMLTextAreaElement>document.getElementById("texto-salida");
  const textArea = <HTMLTextAreaElement>document.getElementById("area");
  const textoEntrada = <HTMLElement>document.querySelector(".texto-entrada");
  const imagen = <HTMLImageElement>document.getElementById("imagen");

  btnCopiarTexto.classList.remove("hidden");
  btnBorrarTexto.classList.remove("hidden");
  btnCopiarTexto.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(textoSalida.innerHTML);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  });
  btnBorrarTexto.addEventListener("click", () => {
    textArea.value = "";
    textoEntrada.classList.remove("hidden");
    textoSalida.innerHTML = "";
    btnCopiarTexto.classList.add("hidden");
    btnBorrarTexto.classList.add("hidden");
    imagen.classList.remove("lg:hidden");
    imagen.classList.add("lg:block");
  });
};
