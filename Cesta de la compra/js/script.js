window.onload = function () {
  const cart = document.querySelector("#cart");
  const tables = cart.querySelectorAll("table");
  const total = tables[0].querySelector("tr").nextSibling.textContent;
  const p = document.createElement("p");
  p.textContent = `Total: ${total}`;
  cart.appendChild(p);

  const products = document.querySelector("#products");
  const buttons = products.querySelectorAll("añadido");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const cart = document.querySelector("#cart");
      const tables = cart.querySelectorAll("table");
      const total = tables[0].querySelector("tr").nextSibling.textContent;
      const p = document.createElement("p");
      p.textContent = `Total: ${total}`;
      cart.appendChild(p);
    });
  });

  const button = document.querySelector("#total");
  button.addEventListener("click", () => {
    const cart = document.querySelector("#cart");
    const tables = cart.querySelectorAll("table");
    const total = tables[0].querySelector("tr").nextSibling.textContent;
    const p = document.createElement("p");
    p.textContent = `Total: ${total}`;
    cart.appendChild(p);
  });
};
