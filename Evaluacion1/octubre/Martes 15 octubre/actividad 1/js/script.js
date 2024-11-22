window.onload = function () {
  p1.onclick = cambiar;
  p2.onclick = cambiarynegrita;
  p3.onclick = cambiarpah1;
  p4.onclick = eliminar;
  p5.onclick = anadir;
};

function cambiar() {
  p1.innerHTML = "Parrafo cambiado";
}

function cambiarynegrita() {
  p2.innerHTML = "Parrafo cambiado y en negrita";
  p2.style.fontWeight = "bold";
}

function cambiarpah1() {
  p3.outerHTML = "<h1>Parrafo cambiado a h1</h1>";
}

function eliminar() {
  p4.outerHTML = "";
}

function anadir() {
  // creamos un nuevo parrafo dentro de p5 y que justifique el texto

  let nuevo = document.createElement("p");
  nuevo.innerHTML = "Parrafo nuevo";
  nuevo.style.textAlign = "justify";
  p5.appendChild(nuevo);
}
