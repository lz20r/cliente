window.onload = function () {
  document.getElementById("comprobar").addEventListener("click", comprobar);
  document.getElementById("limpiar").addEventListener("click", limpiar);

  function comprobar(e) {
    e.preventDefault();
    let numero = document.getElementById("numero").value;
    let texto = document.getElementById("texto");
    let li = document.createElement("li");
    if (numero % 2 == 0) {
      li.textContent = `El numero ${numero} es par`;
    } else {
      li.textContent = `El numero ${numero} es impar`;
    }
    texto.appendChild(li);
  }

  function limpiar(e) {
    e.preventDefault();
    document.getElementById("numero").value = "";
    document.getElementById("texto").innerHTML = "";
  }
};