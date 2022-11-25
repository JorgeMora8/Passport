
const socket = io()

function eliminarProducto(idProductoEliminarCarrito) {
    Swal.fire('Producto eliminado')
    socket.emit("ProdutoEliminarCarrito", idProductoEliminarCarrito)
}

function hacerCompra(username){
    socket.emit("compra", username)
}