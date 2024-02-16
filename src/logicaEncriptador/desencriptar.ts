export const desencriptar = (texto: string): string => {
  let textoDesencriptado = texto.replace(
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
