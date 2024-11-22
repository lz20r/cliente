window.onload = function () {
  mostrar();
  window.addEventListener("online", mostrar);
  window.addEventListener("offline", mostrar);
};

function mostrar() {
    ventana.innerHTML = "<h1>Información del navegador</h1>";
    ventana.innerHTML += "<ul>";
    ventana.innerHTML += "<li>Navegador: " + navigator.appName + "</li>";
    ventana.innerHTML += "<li>Versión: " + navigator.appVersion + "</li>";
    ventana.innerHTML += "<li>Plataforma: " + navigator.platform + "</li>";
    ventana.innerHTML += "<li>Cookie habilitada: " + navigator.cookieEnabled + "</li>";
    ventana.innerHTML += "<li>Conexión: " + navigator.onLine + "</li>";
    ventana.innerHTML += "</ul>";
    
}
