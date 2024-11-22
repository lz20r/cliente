
window.onload = function () {

    document.forms[0].onsubmit = function (event) {
        event.preventDefault();

        /*Añadir un botón que añada un elemento a una lista. */
        document.getElementById("calcular").addEventListener("click", function (event) {
            event.preventDefault();
            var trabajadores = document.getElementById("trabajadores").value;
            var salario = document.getElementById("salario").value
            var texto = document.getElementById("texto");
            texto.innerHTML += `${trabajadores} ha trabajado un total de x laborables y por lo tanto le corresponde cobrar ${salario} <input type = "submit" value = "add" id = "add"> <br>`;

            document.getElementById("add").addEventListener("click", function (event) {
                event.preventDefault();
                var trabajadores = document.getElementById("trabajadores").value;
                var texto = document.getElementById("texto");
                texto.innerHTML += `${trabajadores} ${salario} <input type = "submit" value = "delete" id = "delete"> <br>`

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
