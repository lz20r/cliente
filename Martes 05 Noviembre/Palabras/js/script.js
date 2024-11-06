/**
 * @file script.js
 * @description Script que permite buscar una palabra en un texto y resaltarla.
 * @version 1.0
 * @date 04/11/2022
 * @author Naiara Zhiyao Lezameta Rodrigo
 * @variables {string} texto - Contiene el texto que se va a buscar.
 * @variables {string} word - Contiene la palabra que se va a buscar en el texto.
 * @variables {string} expresion - Contiene la expresión regular que se va a buscar en el texto.
 * @variables {string} innerText - Contiene el contenido de texto de los nodos y sus descendientes.
 * @variables {string} innerHTML - Contiene la sintaxis HTML o XML que describe los descendientes del elemento.
 * @see document.forms[0].addEventListener()
 * @see event.preventDefault()
 * @see document.querySelector()
 * @see document.querySelector('textarea').value
 * @see document.querySelector('p').innerHTML
 *
 * Descipción de las funciones:
 * 1. addEventListener(): El método addEventListener() adjunta un controlador de eventos al elemento especificado.
 * 2. preventDefault(): El método preventDefault() cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.
 * 3. querySelector(): El método querySelector() devuelve el primer elemento que coincide con un selector de grupo de selectores CSS especificado en el documento.
 * 4. replace(): El método replace() devuelve una nueva cadena con algunas o todas las coincidencias de un patrón, reemplazadas por un reemplazo.
 * 5. innerHTML: La propiedad innerHTML establece o devuelve la sintaxis HTML o XML que describe los descendientes del elemento.
 * 6. value: La propiedad value establece o devuelve el valor del atributo value de un campo de texto.
 * 7. new RegExp(): El constructor RegExp crea un objeto de expresión regular para que coincida con el texto con un patrón.
 * 8. gi: g: Encuentra todas las coincidencias en lugar de detenerse después de la primera coincidencia. i: Realiza una búsqueda sin distinción entre mayúsculas y minúsculas.
 * 9. innerText: La propiedad innerText establece o devuelve el contenido de texto de los nodos y sus descendientes.
 * 10. innerHTML: La propiedad innerHTML establece o devuelve la sintaxis HTML o XML que describe los descendientes del elemento.
 */

window.onload = function () {
  document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let texto = document.querySelector("p").innerText;
    let word = document.forms[0].palabra.value;
    const expresion = new RegExp(word, "gi");
    texto = texto.replace(expresion, "<mark>" + word + "</mark>");
    document.querySelector("p").innerHTML = texto;
  });
};
