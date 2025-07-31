const contenedorTargetas = document.getElementById("productos__container");
const contenedorUnidades = document.getElementById("unidades");
const contenedorPrecio = document.getElementById("precio");
const carritoVacioElement = document.getElementById("carrito__vacio");
const totalesElement = document.getElementById("totales")
const reiciarCarritoElemen = document.getElementById("reiniciar__cart")
function crearTargetasProductosInicio(){
    contenedorTargetas.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("celulares"));
    console.log(productos)
    if (productos && productos.length > 0){
      productos.forEach(producto => {
        const nuevoCelular = document.createElement ("div");
        nuevoCelular.classList = "tarjeta-producto";
        nuevoCelular.innerHTML = `
        <img src="img/${producto.id}.png">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <div>
            <button>-</button>
            <span class = "cantidad" >${producto.cantidad}</span>
            <button>+</button>
        </div>
        `
        
            
        contenedorTargetas.appendChild(nuevoCelular);

        nuevoCelular.getElementsByTagName("button")[1]
        .addEventListener("click",(e) => {
          agregarAlcarrito(producto)
          const cuentaElement = e.target.parentElement.getElementsByTagName("span")[0];
          cuentaElement.innerText = agregarAlcarrito(producto);
          actualizarTotales();
          revisarMensajeVacio();
        });
        nuevoCelular
          .getElementsByTagName("button")[0]
          .addEventListener("click",(e) => {
            restarAlcarrito(producto)
            crearTargetasProductosInicio();
            actualizarTotales()
            revisarMensajeVacio();
            
          });


       });
    };

}

crearTargetasProductosInicio()
actualizarTotales()

function actualizarTotales(){
  const productos = JSON.parse(localStorage.getItem("celulares"));
  let unidades = 0;
  let precio = 0;
  if(productos && productos.length>0){
    productos.forEach(producto =>{
      unidades += producto.cantidad;
      precio += producto.precio * producto.cantidad;

    })
    contenedorUnidades.innerText  = unidades;
    contenedorPrecio.innerText = precio;
  }

}

function revisarMensajeVacio(){
  const productos = JSON.parse(localStorage.getItem("celulares"))
  carritoVacioElement.classList.toggle("escondido",(productos && productos.length>0));
  totalesElement.classList.toggle("escondido",!(productos && productos.length>0));

}

revisarMensajeVacio();
reiciarCarritoElemen.addEventListener("click", reiniciarCarrito); 
function reiniciarCarrito(){
  localStorage.removeItem("celulares");
  actualizarTotales();
  crearTargetasProductosInicio();
  revisarMensajeVacio(); // <-- Agrega esta línea
}

