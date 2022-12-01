import { ContenedorCarrito } from "../ContenedorMongoDB/DAOMongo.js";
import { obtenerPrecioTotal } from "../recurso/obtenerPrecioTotal.js";


export async function carritoController(req, res) { 
    
    try {
        let username = req.user.username  
        let productosEnCarrito = await ContenedorCarrito.obtenerTodos()
        let total = await obtenerPrecioTotal()
        
        res.render("carrito", { productos:productosEnCarrito, precioTotal: total, user: username})      
    } catch (error) {
        res.redirect("/auth/login")

    }

    
   
}