import { loggerInfo } from "../test/loggeo/loggeoConfig.js";
import { agregarProductosFaker } from "../recurso/ProductosFaker/ProductosFaker.js";


export function productosTestController(req, res) { 
    loggerInfo.info(`Renderizado de pagina ProductosFaker.`)
    res.render("productos.handlebars", {productos: agregarProductosFaker()})
}