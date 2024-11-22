
window.onload = function () {

  document.forms[0].onsubmit = function (event) {
    event.preventDefault();
    if (document.getElementById("cal").value === "") {
      alert("Por favor ingrese tu fecha de nacimiento");
      return false;
    }

    var fecha = new Date(document.getElementById("cal").value);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fecha.getFullYear();
    var m = hoy.getMonth() - fecha.getMonth();
    var texto = document.getElementById("texto");
    if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
      edad--;
    }

    if (edad >= 18) {
      texto.innerHTML = "Eres mayor de edad";
    } else {
      texto.innerHTML = "Eres menor de edad";
    }
    return false;

  };
};
