
window.onload = function () {

    document.forms[0].onsubmit = function (event) {
        event.preventDefault();
        if (document.getElementById("cal").value === "") {
            alert("Por favor, seleccione una fecha");
            return false;
        }
        document.getElementById("visitar").addEventListener("click", function () {
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

            document.getElementById("texto").innerHTML = "Tú ultima visita ha sido " +
                getday + ", " + cita.getDate() + " de " + getmonth + " " + getyear;

            const date = document.getElementById("texto").innerHTML = "Tú ultima visita ha sido " +
                getday + ", " + cita.getDate() + " de " + getmonth + " " + getyear

            localStorage.getItem(date);
        })
    }

    var boton = document.getElementById("historial");

    boton.onclick = function () {
        let hty = document.getElementById("history");
        hty.innerHTML = "Has visitado esta web los siguientes días"
    }


}
