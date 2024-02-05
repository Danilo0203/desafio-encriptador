const texto = <HTMLElement>document.getElementById("area");
export const heightAuto = () => {
  texto.addEventListener("input", () => {
    texto.style.height = "auto";
    if (texto.scrollHeight > texto.clientHeight) {
      texto.style.height = texto.scrollHeight + "px";
    }
  });
};
