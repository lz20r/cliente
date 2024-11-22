window.onload = function () {};

function guardar(e) {
  e.preventDefault();
  let colorElegido = document.forms[0].color.value;
  let tamanioElegido = document.forms[0].tamanio.value;
  let tipografiaElegido = document.forms[0].tipografia.value;
  localStorage.setItem("color", colorElegido);
  localStorage.setItem("tamanio", tamanioElegido);
  localStorage.setItem("tipografia", tipografiaElegido);
  alert("Preferencias guardadas");
}
