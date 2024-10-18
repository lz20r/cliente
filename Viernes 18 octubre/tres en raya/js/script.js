window.onload = function () {
  reiniciar.onclick = function () {
    contador = 0;
    pieza = "X";
    reiniciar.innerHTML = "";
    for (let i = 0; i < frames.length; i++) {
      frames[i].casilla.innerHTML = "";
    }
  };
  contador = 0;
  pieza = "X";
  for (let i = 0; i < frames.length; i++) {
    frames[i].onclick = function () {
      frames[i].casilla.innerHTML == ""
        ? ((frames[i].casilla.innerHTML = pieza),
          (frames[i].casilla.style.color =
            pieza == "X" ? "#FFCBDB" : "#B4D3B2"),
          contador++,
          (pieza = pieza == "X" ? "O" : "X"))
        : alert("Casilla ocupada");
    };

    if (contador == 9) {
      reiniciar.innerHTML = "Empate";
    }
  }
};
