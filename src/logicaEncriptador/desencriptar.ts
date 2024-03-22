export const desencriptar = (texto: string): string => {
  // Primero, reemplazar las letras encriptadas por las letras originales
  let textoDesencriptado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u")
    .replace(/ai/gi, "a");

  // Luego, reemplazar las palabras encriptadas por letras encriptadas
  textoDesencriptado = textoDesencriptado.replace(
    /(enter|imes|ober|ufat|ai)/gi,
    (match, palabraEncriptada) => {
      switch (palabraEncriptada.toLowerCase()) {
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
        case "ai":
          return "a";
        default:
          return match; // En caso de que ninguna palabra coincida, retornar la palabra encriptada original
      }
    },
  );
  return textoDesencriptado;
};
