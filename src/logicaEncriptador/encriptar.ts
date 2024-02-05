export const encriptar = (texto: string): string => {
  const palabrasEncriptadas = ["enter", "imes", "ober", "ufat", "ai"];

  // Verificar si el texto ya está encriptado
  const yaEncriptado = palabrasEncriptadas.some((palabra) => texto.includes(palabra));

  // Si ya está encriptado, retornar el texto original
  if (yaEncriptado) {
    return texto;
  }

  // Si no está encriptado, realizar el reemplazo
  let textoEncriptado: string = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat")
    .replace(/a/gi, "ai");

  return textoEncriptado;
};
