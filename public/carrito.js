
const socket = io()

function eliminarProducto(idProductoEliminarCarrito) {
    Swal.fire('Producto eliminado')
    console.log(idProductoEliminarCarrito)
    socket.emit("ProdutoEliminarCarrito", idProductoEliminarCarrito)
}

function hacerCompra(username){
    Swal.fire({
        icon: 'success',
        title: 'Compra realizada',
        text: 'Haz realizado la compra',
      })

    socket.emit("compra", username)

}