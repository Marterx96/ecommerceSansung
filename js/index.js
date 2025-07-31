const contenedorTargetas = document.getElementById("productos__container")
function crearTargetasProductosInicio(productos){
    productos.forEach(producto => {
        const nuevoCelular = document.createElement ("div");
        nuevoCelular.classList = "tarjeta-producto";
        nuevoCelular.innerHTML = `
    <img src="img/${producto.id}.png">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <div class="boton-container">
        <button>Agregar al carrito</button>
    </div>
        `
        
            
        contenedorTargetas.appendChild(nuevoCelular);

        nuevoCelular.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlcarrito(producto));

    });
}

crearTargetasProductosInicio(celulares)


document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuToggle.addEventListener("click", function(e) {
        dropdownMenu.classList.toggle("escondido");
        e.stopPropagation();
    });

    // Ocultar el menú si se hace clic fuera
    document.addEventListener("click", function(e) {
        if (!dropdownMenu.classList.contains("escondido")) {
            dropdownMenu.classList.add("escondido");
        }
    });

    // Evitar que el menú se cierre si se hace clic dentro
    dropdownMenu.addEventListener("click", function(e) {
        e.stopPropagation();
    });
});