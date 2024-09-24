/** @format */

/* function mostrarNota(nota) {
  if (nota >= 0 && nota <= 10) {
    let resultado =
      nota >= 9
        ? "Sobresaliente"
        : nota >= 7
        ? "Notable"
        : nota >= 6
        ? "Bien"
        : nota >= 5
        ? "Suficiente"
        : "Insuficiente";
    return resultado;
  } else {
    return "Nota incorrecta";
  }
} */


function mostrarNota(nota) {
    return nota >= 0 && nota <= 10
        ? nota >= 9
        ? "Sobresaliente"
        : nota >= 7
        ? "Notable"
        : nota >= 6
        ? "Bien"
        : nota >= 5
        ? "Suficiente"
        : "Insuficiente"
        : "Se debe introducir una nota entre 0 y 10";
    }; 

