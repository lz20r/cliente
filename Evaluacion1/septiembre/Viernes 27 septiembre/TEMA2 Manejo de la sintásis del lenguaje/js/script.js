/* function sumarNumeros(num1, num2) {
    return num1 + num2;
}

sumarNumeros(5, 6);

(function (num1, num2) {
    return num1 + num2;
})(5, 6);

window.onload = function () {
    alert("Hola mundo");
};

window.onload = function () {
    texto.innerHTML = "Hola mundo";
}; 

window.onload = function () {
    var boton = document.getElementById("boton");
    var texto = document.getElementById("texto");

    boton.onclick = function () {
        texto.innerHTML = "Hola mundo";
    }
}*/
window.onload = function () {
  function mostrarNota(nota) {
    texto.innerHTML =
      nota >= 0 && nota <= 10
        ? nota >= 9
          ? "Has sacado un sobresaliente"
          : nota >= 7
          ? "Has sacado un notable"
          : nota >= 6
          ? "Has sacado un bien"
          : nota >= 5
          ? "Has sacado un suficiente"
          : "Has sacado un insuficiente"
        : "Si no introduces una nota entre 0 y 10, no puedo decirte nada";
  }

  var boton = document.getElementById("boton");

  boton.onclick = function () {
    mostrarNota(prompt("Si introduces una nota entre 0 y 10, te diré qué nota has sacado", ""));
    };
     
    return mostrarNota(prompt("Necesito que introduzcas una nota entre 0 y 10", ""));
};
