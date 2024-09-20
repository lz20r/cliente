// llueve, salgo, llevo paraguas 
let llueve = confirm("¿Llueve?");
let paraguas = confirm("¿Llevas paraguaas?");
let gorro = confirm("¿Llevas gorro?");
let salgo = confirm("¿Sales a la calle o te quedas en casa?");

(llueve&&salgo)&&!(paraguas||gorro)?alert:("Te mojas")?alert:("No te mojas");
