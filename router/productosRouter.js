import { Router } from "express";
import { ClienteMysql } from "../ContenedorMYSQL/ClienteMysql.js";

export const productosRouter = Router(); 

productosRouter.get("/", async (req, res) => {
    let tipoProducto = req.query.prod

    let productosEncontrados = await ClienteMysql.buscarProductosPorGrupo(tipoProducto)

    console.log(productosEncontrados)
    res.render("filtroProducto", productosEncontrados)
})