document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const toggleButton = document.getElementById("toggleMenu");
    const desplegableMenu = document.getElementById("desplegable");
    
    function irArriba(){ 
        window.addEventListener('scroll', () => {
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            // console.log(scroll);
            var botonArriba = document.getElementById('go-top');
    
            botonArriba.addEventListener('click', () =>{
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                })
            } )

            if(scroll > 300){
                botonArriba.style.right = "15px";
            } else {
                botonArriba.style.right = "-100px";
            }
        });
    }

    irArriba();

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
