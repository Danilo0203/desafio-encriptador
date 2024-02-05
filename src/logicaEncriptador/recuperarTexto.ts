const textArea = <HTMLTextAreaElement>document.getElementById("area");

export const recuperarTexto = () => {
  return textArea.value;
};
