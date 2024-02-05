export const recuperarTexto = () => {
  const textArea = <HTMLTextAreaElement>document.getElementById("area");
  return textArea.value;
};
