const container = document.querySelector('.container');
container.addEventListener('mouseover', capturar);
container.addEventListener('mouseleave', capturar);
function capturar(event) {
    const clientX = event.clientX;
    const clientY = event.clientY;
    const screenX = event.screenX;
    event.type == "mouseover" ? tipo = "Entrada" : tipo = "Salida";

    innerHTML = `
                            <p>${tipo}</p>
                            <li>clientX: ${clientX}</li>
                            <li>clientY: ${clientY}</li>
                            <li>screenX: ${screenX}</li>  
                        `;
    document.querySelector('.list').innerHTML = innerHTML;

    console.log(innerHTML);
}