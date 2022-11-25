import { Router } from "express"; 
import {ContenedorCarrito} from "../ContenedorMongoDB/DAOMongo.js"

export const carritoRouter = Router(); 



carritoRouter.get("/", async (req, res) => { 
    let productosEnCarrito = await ContenedorCarrito.obtenerTodosProductosCarrito()
    let total = await ContenedorCarrito.obtenerPrecioTotal()

    res.render("carrito", { productos:productosEnCarrito, precioTotal: total})
})