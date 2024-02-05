export const encriptar = (texto: string): string => {
  let textoEncriptado: string = texto
    .replace(/a/gi, "ai")
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  return textoEncriptado;
};
