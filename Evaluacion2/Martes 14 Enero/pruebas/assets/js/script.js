
// ------------------- crear elementos de html con js ------------------- //
// crear un elemento de html con js
const h1 = document.createElement("h1");
h1.textContent = "cinaVouches";
document.body.appendChild(h1);

// crear una imagen con js
const img = document.createElement("img");
img.src = "http://node.cinnammon.es:2017/uploads/images/B917F2F3-11CC-472F-B944-BB2190B31D47.png";
img.alt = "Mi primera imagen";
h1.appendChild(img);


// ------------------- cambiar el estilo de los elementos ------------------- //
// cambiar el fondo de la pagina web y ubicarlo en el centro
document.body.style.backgroundColor = "#1a1a1a";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
// cambiar el estilo de la h1
h1.style.marginTop = "50px";
h1.style.marginBottom = "60px";
// cambiar el estilo del h1
h1.style.color = "white";
h1.style.fontSize = "50px";
h1.style.textAlign = "center";
// cambiar el estilo de la imagen
img.style.width = "270px";
img.style.height = "270px"; 
img.style.display = "block";
img.style.margin = "auto";
