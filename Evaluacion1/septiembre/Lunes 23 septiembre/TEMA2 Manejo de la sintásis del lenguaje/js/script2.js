// llueve, salgo, llevo paraguas 
let teoria = confirm("¿Has estudiado la teoria?");
let ejercicios = confirm("¿Has echo los ejercicios?");
let suerte = confirm("¿Tienes suerte?");
let jamon = confirm("¿Diste un jamón al profesor?");
let copiar = confirm("¿Te han pillado copiando?");

((teoria&&ejercicios)||(suerte||jamon))&&!copiar?alert("Aprobaras"):alert("No Aprobaras");