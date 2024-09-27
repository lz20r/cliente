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
          ? "Sobresaliente"
          : nota >= 7
          ? "Notable"
          : nota >= 6
          ? "Bien"
          : nota >= 5
          ? "Suficiente"
          : "Insuficiente"
        : "Se debe introducir una nota entre 0 y 10";
  }

  var boton = document.getElementById("boton");

  boton.onclick = function () {
    mostrarNota(prompt("Introduce una nota entre 0 y 10", ""));
    };
    
    return mostrarNota(prompt("Introduce una nota entre 0 y 10", ""));
};
