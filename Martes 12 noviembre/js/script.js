
window.onload = function () {

  document.forms[0].onsubmit = function (event) {
    event.preventDefault();

    /*Añadir un botón que añada un elemento a una lista. */
    document.getElementById("añadir").addEventListener("click", function (event) {
      event.preventDefault();
      var palabra = document.getElementById("alumnos").value;
      var texto = document.getElementById("texto");
      texto.innerHTML += "<li>" + palabra + "</li>";
    });

    /*Añadir un botón que ordene alfabéticamente los elementos de la lista. */
    document.getElementById("añadir").addEventListener("click", function (event) {
      event.preventDefault();
      var texto = document.getElementById("texto");
      var items = texto.getElementsByTagName("li");
      var itemsArray = Array.from(items);
      itemsArray.sort(function (a, b) {
        return a.innerHTML.localeCompare(b.innerHTML);
      });
      itemsArray.forEach(function (item) {
        texto.appendChild(item);
      });
    });

    /*Añadir un botón que elimine un elemento de la lista. */
    document.getElementById("eliminar").addEventListener("click", function (event) {
      event.preventDefault();
      var texto = document.getElementById("texto");
      texto.removeChild(texto.lastChild);
    });
  };


};

async function mayusculas() {
  nombre = nombre.valuei
  inicial = nombre.charAt(0).toUpperCase();
  resto = nombre.slice(1).toLowerCase();
  nombre = Bueno = inicial + resto;
  return nombreBueno;
}