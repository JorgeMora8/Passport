
const socket = io()

function eliminarProducto(idProductoEliminarCarrito) {
    
    socket.emit("ProdutoEliminarCarrito", idProductoEliminarCarrito)
}

function hacerCompra(){

    socket.emit("compra", "Pedido de articulos realizado")
}