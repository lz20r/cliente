window.onload = function () {
  document.forms[0].addEventListener("submit", function (event) {
    event.preventDefault();
    let texto = document.querySelector("p").innerText;
    let word = document.forms[0].palabra.value;
    const expresion = new RegExp(word, "gi");
    texto = texto.replace(expresion, "<mark>" + word + "</mark>");
    document.querySelector("p").innerHTML = texto;
  });
};
