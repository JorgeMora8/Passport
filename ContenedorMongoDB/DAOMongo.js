//=>
import contenedorMongoDB from "../ContenedorMongoDB/Contenedor.js";
import {carritoProductoModel, mensajeModel, usuarioModel, productoModel} from "./Config/Schema.js";


//=>Mensajes / Chat de mensajes
const chatContenedor = new contenedorMongoDB(mensajeModel)

//=>Usuarios registrados
const ContendorUsuarios = new contenedorMongoDB(usuarioModel)

//=>Productos agregados en carrito
const ContenedorCarrito = new contenedorMongoDB(carritoProductoModel)

//=>Productos en stock
const ContenedorProductos = new contenedorMongoDB(productoModel)

export { 
    chatContenedor, 
    ContendorUsuarios, 
    ContenedorCarrito, 
    ContenedorProductos
}


