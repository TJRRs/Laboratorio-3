document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const toggleButton = document.getElementById("toggleMenu");
    const desplegableMenu = document.getElementById("desplegable");

    abrir.addEventListener("click", () => {
        nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
    });

    toggleButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        desplegableMenu.classList.toggle("mostrar"); // Alterna la visibilidad del menú
    });
});
