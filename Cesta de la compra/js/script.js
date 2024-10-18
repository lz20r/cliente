function addProduct(product, price) {
  let cesta = document.getElementById("cesta");
  let total = 0;
  if (cesta.innerHTML != "") {
    total = parseInt(cesta.lastChild.innerHTML.split(" ")[1]);
  }
  total += price;
  cesta.innerHTML += `<div>${product} ${price}€</div>`;
  cesta.innerHTML += `<div>Total: ${total}€</div>`;
}
