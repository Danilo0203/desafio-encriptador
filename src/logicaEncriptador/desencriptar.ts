export const desencriptar = (texto: string): string => {
  // Reemplazar las letras encriptadas por las letras originales
  let textoDesencriptado = texto
    .replace(/ai/gi, "a")
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  return textoDesencriptado;
};
