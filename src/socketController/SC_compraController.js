import { ContenedorCarrito } from "../Contenedores/DAO.js";
import { ContendorUsuarios } from "../Contenedores/DAO.js";
import { renderizarProductos } from "../recurso/renderizarMensaje.js";
import { enviarCorreoCompra } from "../recurso/twilio/Gmail.js";
import { enviarProductosCompra } from "../recurso/twilio/WhatsApp.js";
import { obtenerPrecioTotal } from "../recurso/obtenerPrecioTotal.js";


export async function generarCompra(datosCompra){ 
    let productosEnCarrito = await ContenedorCarrito.obtenerTodos();
    let precioCarritoTotal = await obtenerPrecioTotal()
  
     let mensaje = renderizarProductos(productosEnCarrito)

    let usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(datosCompra); 
 

    await enviarCorreoCompra("Compra de productos.", mensaje, usuario.username); 
    await enviarProductosCompra(usuario.phoneNumber, mensaje, precioCarritoTotal)
    await ContenedorCarrito.eliminarDatos()
}