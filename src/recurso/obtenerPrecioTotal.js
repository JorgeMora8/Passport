import { ContenedorCarrito } from "../Contenedores/DAO.js";


export async function obtenerPrecioTotal() { 
    let productosEnCarrito = await ContenedorCarrito.obtenerTodos()

    let total = 0

    productosEnCarrito.forEach((producto) => { 
        let num = Number(producto.price)
        total += num
    })

    return total
}


