// if con ternario para ver si existe una variable o no

window.onload = function () {
  if (localStorage.getItem("nombre") != null) {
    nombre = localStorage.getItem("nombre");
    texto.innerHTML = "Hola " + nombre;
  } else {
    nombre = prompt("Cual es tu nombre?");
    localStorage.setItem("nombre", nombre);
    texto.innerHTML = `Bienvenid@ ${nombre}`;
  }
  if (sessionStorage.getItem("ciudad") != null) {
    ciudad = sessionStorage.getItem("ciudad");
    texto.innerHTML += `, la ciudad en la que vives es ${ciudad}`;
  } else {
    ciudad = prompt("Cual es tu ciudad?");
    sessionStorage.setItem("ciudad", ciudad);
    texto.innerHTML += ", " + ciudad;
  }
};
