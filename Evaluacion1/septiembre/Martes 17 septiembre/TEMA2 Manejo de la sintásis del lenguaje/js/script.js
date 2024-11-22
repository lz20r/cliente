let a = 1;
let b = "1";
let c = true;
const d = 1;

console.log(
    "- El tipo de la variable a" + " es " + typeof(a) +"\n" +
    "- El tipo de la variable b" + " es " + typeof(b) +"\n" +
    "- El tipo de la variable c" + " es " + typeof(c) +"\n" +
    "- El tipo de la variable d" + " es " + typeof(d) 
)
a++;
let e = a++;
b++;
let f = b++;
c++;
let g = c++;
console.log(
    "- La variable e" + " es " + e +"\n" +
    "- La variable f" + " es " + f++ +"\n" +
    "- La variable g" + " es " + g++ +"\n"   
)

//mostrarNumero();
mostrarNumero(10);

alert("El valor de a es " + a)
function mostrarNumero(a){
    //let a = 1;
    alert("El valor de a es: " + a);
}