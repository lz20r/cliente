window.onload = function () {
    const encriptar = () => {
        const texto = document.getElementById("texto").value;
        let resultado = "";
        for (let i = 0; i < texto.length; i++) {
            const caracter = texto.charCodeAt(i);
            const nuevoCaracter = String.fromCharCode(caracter + 3);
            resultado += nuevoCaracter;
        }
        document.getElementById("texto-cifrado").value = resultado;
    };

    const desencriptar = () => {
        const textoCifrado = document.getElementById("texto-cifrado").value;
        let resultado = "";
        for (let i = 0; i < textoCifrado.length; i++) {
            const caracter = textoCifrado.charCodeAt(i);
            const nuevoCaracter = String.fromCharCode(caracter - 3);
            resultado += nuevoCaracter;
        }
        document.getElementById("texto").value = resultado;
    };

    document.getElementById("btn-encriptar").addEventListener("click", encriptar);
    document.getElementById("btn-desencriptar").addEventListener("click", desencriptar);
};