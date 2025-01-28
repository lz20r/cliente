window.onload = function () {
    document.querySelector('input[type="button"]'[0]).onclick = function () { encriptar(0); }
    document.querySelector('input[type="button"]'[1]).onclick = function () { desencriptar(1); }

    function encriptar(action) {
        let text = "";
        let textoCodificar = texting.value;

        if (action == 0) {
            clave = parseInt(Math.random() * 1000);
        } else {
            clave = textoCodificar.charCodeAt(textoCodificar.length - 1);
        }

        for (let i = 0; i < textoCodificar.length; i++) {
            codigoUnicode = textoCodificar.charCodeAt(i);


            action == 0 ? nuevoCaracter = String.fromCharCode(codigoUnicode + clave) : nuevoCaracter = String.fromCharCode(codigoUnicode - clave);
            console.log(textoCodificar[i], nuevoCaracter);
            text += nuevoCaracter;
        }
    }
};