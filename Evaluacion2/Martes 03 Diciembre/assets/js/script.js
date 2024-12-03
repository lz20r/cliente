window.onload = function () {
	let palabrasJuego = JSON.parse(localStorage.getItem('palabrasJuego')) || [
		{ palabra: "sol", tabu: ["astro", "estrella", "calor"] },
		{ palabra: "luna", tabu: ["satélite", "nocturno", "cráter"] },
		{ palabra: "mar", tabu: ["agua", "océano", "playa"] },
		{ palabra: "montaña", tabu: ["altura", "cima", "roca"] },
		{ palabra: "árbol", tabu: ["hojas", "tronco", "raíz"] },
		{ palabra: "casa", tabu: ["pared", "ventana", "puerta"] },
		{ palabra: "coche", tabu: ["ruedas", "motor", "llantas"] },
		{ palabra: "moto", tabu: ["llantas", "ruedas", "motor"] },
		{ palabra: "bicicleta", tabu: ["ruedas", "llantas", "motor"] },
		{ palabra: "avión", tabu: ["motor", "ruedas", "llantas"] },
		{ palabra: "barco", tabu: ["motor", "ruedas", "llantas"] },
		{ palabra: "helicoptero", tabu: ["motor", "ruedas", "llantas"] }
	];
	console.log(palabrasJuego);

	let palabraSeleccionada = {};
	let palabrasTabu = [];

	function seleccionarPalabra() {
		palabraSeleccionada = palabrasJuego[Math.floor(Math.random() * palabrasJuego.length)];
		document.getElementById('palabraDescribir').innerHTML = palabraSeleccionada.palabra;
		palabrasTabu = palabraSeleccionada.tabu;
		document.getElementById('texto').value = "";
		document.getElementById('resultado').innerHTML = "";
	}

	function comprobar() {
		let texto = document.getElementById('texto').value.toLowerCase();
		let resultado = document.getElementById('resultado');
		resultado.innerHTML = "";
		let contienePalabraTabu = palabrasTabu.some(palabra => texto.includes(palabra.toLowerCase()));
		if (contienePalabraTabu) {
			resultado.innerHTML = `<p class="text-danger"><strong>¡Atención!</strong> Tu descripción incluye palabras tabú. Intenta de nuevo.</p>`;
		} else {
			resultado.innerHTML = `<p class="text-success"><strong>¡Bien hecho!</strong> No has usado palabras tabú.</p>`;
		}
	}

	function agregarPalabra() {
		let nuevaPalabra = document.getElementById('nuevaPalabra').value.trim();
		let nuevasTabu = document.getElementById('nuevasTabu').value.trim();
		let agregarResultado = document.getElementById('agregarResultado');
		if (nuevaPalabra === "" || nuevasTabu === "") {
			agregarResultado.innerHTML = `<p class="text-danger">Por favor, llena todos los campos.</p>`;
			return;
		}
		const tabuArray = nuevasTabu.split(',').map(palabra => palabra.trim().toLowerCase());
		palabrasJuego.push({ palabra: nuevaPalabra.toLowerCase(), tabu: tabuArray });
		localStorage.setItem('palabrasJuego', JSON.stringify(palabrasJuego));
		agregarResultado.innerHTML = `<p class="text-success">Nueva palabra agregada correctamente.</p>`;
		document.getElementById('nuevaPalabra').value = "";
		document.getElementById('nuevasTabu').value = "";
		seleccionarPalabra();
	}

	document.getElementById('comprobar').addEventListener('click', comprobar);
	document.getElementById('agregar').addEventListener('click', agregarPalabra);
	document.getElementById('volverJugar').addEventListener('click', seleccionarPalabra);

	seleccionarPalabra();
};
