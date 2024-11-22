/**
 * @fileoverview  Archivo JS para la página de citas
 * @version       1.0
 * @since         1.0
 * @see           citas.html
 * @autor         Naiara Zhiyao Lezameta Rodrigo
 * @date          08 noviembre 2019
 * @description   Este archivo JS se encarga de validar la fecha de la cita y mostrarla en el formato correcto
 * @param         {string} cita - La fecha de la cita en formato Date
 * @param         {string} fecha - La fecha de la cita
 * @param         {string} getmonth - El mes de la cita
 * @param         {string} getday - El día de la cita
 * @param         {string} getyear - El año de la cita
 */
window.onload = function () {

  document.forms[0].onsubmit = function (event) {
    event.preventDefault();
    if (document.getElementById("cal").value === "") {
      alert("Por favor, seleccione una fecha");
      return false;
    }
    document.getElementById("citarme").addEventListener("click", function () {
      document.getElementById("texto").innerHTML = "";
      let fecha = document.getElementById("cal").value;
      let cita = new Date(fecha);
      let getmonth = cita.getMonth();
      let getday = cita.getDay();
      let getyear = cita.getFullYear();
      switch (getmonth) {
        case 0:
          getmonth = "enero";
          break;
        case 1:
          getmonth = "febrero";
          break;
        case 2:
          getmonth = "marzo";
          break;
        case 3:
          getmonth = "abril";
          break;
        case 4:
          getmonth = "mayo";
          break;
        case 5:
          getmonth = "junio";
          break;
        case 6:
          getmonth = "julio";
          break;
        case 7:
          getmonth = "agosto";
          break;
        case 8:
          getmonth = "septiembre";
          break;
        case 9:
          getmonth = "octubre";
          break;
        case 10:
          getmonth = "noviembre";
          break;
        case 11:
          getmonth = "diciembre";
          break;
      }

      switch (getday) {
        case 0:
          getday = "domingo";
          break;
        case 1:
          getday = "lunes";
          break;
        case 2:
          getday = "martes";
          break;
        case 3:
          getday = "miércoles";
          break;
        case 4:
          getday = "jueves";
          break;
        case 5:
          getday = "viernes";
          break;
        case 6:
          getday = "sábado";
          break;
      }
      if (cita < new Date()) {
        document.getElementById("texto").innerHTML =
          "Lo siento, no se pueden agendar citas para fechas pasadas";
      } else if (cita.getDay() === 0 || cita.getDay() === 6) {
        document.getElementById("texto").innerHTML =
          "Lo siento, no se atienden citas los fines de semana";
      } else {
        document.getElementById("texto").innerHTML =
          getday + ", " + cita.getDate() + " de " + getmonth + " " + getyear;
      }
    });
  };
};
