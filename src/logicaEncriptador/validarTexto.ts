export const validarTexto = (texto: string) => {
  const error = <HTMLElement>document.querySelector(".error");
  const mensajeError = <HTMLElement>document.querySelector("#mensajeError");
  const regAcentos = /[ÁÉÍÓÚáéíóúÄËÏÖÜäëïöü]/;
  const letrasMayusculas = /[A-Z]/;
  if (regAcentos.test(texto) || letrasMayusculas.test(texto)) {
    error.setAttribute("fill", "red");
    mensajeError.classList.remove("text-gray400");
    mensajeError.classList.add("text-[red]");
    mensajeError.classList.add("shake");
    setTimeout(() => {
      mensajeError.classList.remove("shake");
    }, 350);
    return false;
  } else {
    error.setAttribute("fill", "#67808E");
    mensajeError.classList.remove("text-[red]");
    mensajeError.classList.add("text-gray400");
    return true;
  }
};
