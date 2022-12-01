import { ContenedorProductos } from "../ContenedorMongoDB/DAOMongo.js";
import { ContenedorCarrito } from "../ContenedorMongoDB/DAOMongo.js";
import { crearProducto } from "../recurso/models/ModelProducto.js";


export class Carrito { 

    async agregarProductosCarrito(idProducto){ 
        let agregarProducto = await ContenedorProductos.obtenerPorId(idProducto)
        
        let producto = crearProducto(agregarProducto)
         await ContenedorCarrito.guardar(producto)
    }

    async eliminarProductoCarrito(idProducto) { 
        await ContenedorCarrito.eliminarPorId(idProducto);
    }

    async obtenerProductosCarrito(){ 
        let productosEnCarrito = await ContenedorCarrito.obtenerTodos()
        return productosEnCarrito
    }
}
