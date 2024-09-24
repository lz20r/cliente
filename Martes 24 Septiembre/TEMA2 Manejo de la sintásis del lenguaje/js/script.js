/** @format */

function mario() {
  if (2 == 2) {
    var a = 1;
  }
  console.log(a);
}

mario();

function saludar(nombre) {
  // ifelse (modo largo)
  /* console.log("Hola " + nombre);
  if (nombre == undefined) {
	console.log("Buenos dias, invitado");
  } else {
	console.log("Buenos dias, " + nombre);
  } */

  // ternario (modo corto pero un poco más largo)
  /* nombre == undefined
    ? console.log("Buenos dias, invitado")
    : console.log("Buenos dias, " + nombre); */

  // ternario (modo corto)
  console.log("Buenos dias, " + (nombre == undefined ? "invitado" : nombre));
}

function saludar2(nombre = "invitado") {
  console.log("Buenos dias" + nombre + "!");
}
