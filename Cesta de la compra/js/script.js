window.onload = function () {
  const button = document.querySelector("#total");
  button.addEventListener("click", () => {
    const cart = document.querySelector("#cart");
    const tables = cart.querySelectorAll("table");
    const total = tables[0].querySelector("tr").nextSibling.textContent;
    const p = document.createElement("p");
    p.textContent = `Total: ${total}`;
    cart.appendChild(p);
  });

  const añadir = document.querySelector("#añadir");
  añadir.addEventListener("click", () => {
    const cart = document.querySelector("#cart");
    const tables = cart.querySelectorAll("table");
    const table = tables[0];
    const row = table.insertRow();
    const product = row.insertCell();
    const type = row.insertCell();
    const siniva = row.insertCell();
    const typeiva = row.insertCell();
    const iva = row.insertCell();
    const importe = row.insertCell();
    row.insertCell();

    product.textContent = leerCesta().producto;
  });
};

// funcion para leer la cesta
function leerCesta() {
  const products = document.querySelectorAll(".product-item")[0];
  for (let i = 0; i < products.length; i++) {
    products[i].textContent;
    console.log(products[i].textContent);
  }
  console.log(products);
  return products;
}

function addCesta() {
  const product = document.querySelectorAll(".product-item")[0];

  for (let i = 0; i < product.length; i++) {
    product[i].textContent;
    console.log(product[i].textContent);
  }
  console.log(product);
  return product;
}
