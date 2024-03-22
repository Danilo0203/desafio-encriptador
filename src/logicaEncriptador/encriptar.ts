// Arreglo para almacenar palabras ya encriptadas
const palabrasEncriptadas: string[] = [];

export const encriptar = (texto: string): string => {
  
  // Si la palabra ya está en el arreglo de palabras encriptadas, devolverla
  if (palabrasEncriptadas.includes(texto)) {
    return texto;
  }

  // Realizar el reemplazo para encriptar el texto
  let textoEncriptado: string = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  // Almacenar la palabra encriptada en el arreglo
  palabrasEncriptadas.push(textoEncriptado);
  return textoEncriptado;
};
