function agregarAlcarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("celulares") || "[]");
    console.log(memoria);
    let cuenta = 0
    if(memoria.length === 0){
        const nuevoProducto = getNuevoproductoParaMemoria(producto);
        nuevoProducto.cantidad = 1;
        localStorage.setItem("celulares",JSON.stringify([nuevoProducto]));
        cuenta = 1;
    } else{
        const indiceProducto = memoria.findIndex(celular => celular.id === producto.id);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1 ){
            
            nuevaMemoria.push(getNuevoproductoParaMemoria(producto));
            cuenta = 1;
            
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
            cuenta = nuevaMemoria[indiceProducto].cantidad
        }
        localStorage.setItem("celulares",JSON.stringify(nuevaMemoria));
        
    }
    actualizarNumeroCarrito();
    return cuenta;
}
// creamos una funcion para eliminar productos del carrito
 /*function eliminarDelCarrito(producto){
    const memoria = JSON.parse(localStorage.getItem("celulares" || "[]" ));
    const indiceProducto = memoria.findIndex(celular => celular.id === producto.id) 
    if(memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto,1);
        localStorage.setItem("celulares",JSON.stringify(memoria))
    }

}
*/
function restarAlcarrito(producto) {
  const memoria = JSON.parse(localStorage.getItem("celulares") || []);
  const indiceProducto = memoria.findIndex(celular => celular.id === producto.id);

  if (indiceProducto !== -1) {
    if (memoria[indiceProducto].cantidad === 0) {
      memoria.splice(indiceProducto, 1);
    } else {
      memoria[indiceProducto].cantidad--;
    }
    localStorage.setItem("celulares", JSON.stringify(memoria));
    actualizarNumeroCarrito(); 
  }
}

//-----Toma un producto, le agrega cantidad 1 y lo devuelve
function getNuevoproductoParaMemoria(producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}
const cuentaCarritoElement = document.getElementById("cuenta-carrito")
function actualizarNumeroCarrito(){
    const memoria = JSON.parse(localStorage.getItem("celulares"));
    if(memoria && memoria.length > 0){
        const cuenta = memoria.reduce((acum, current) => acum+current.cantidad,0);
        cuentaCarritoElement.innerText = cuenta;
    } else{
        cuentaCarritoElement.innerText = 0
    }
    

}
actualizarNumeroCarrito();

