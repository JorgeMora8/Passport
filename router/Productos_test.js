import express from "express"; 
import { loggerInfo } from "../loggeo/loggeoConfig.js";
import { agregarProductosFaker } from "../ProductosFaker/ProductosFaker.js";
const router = express.Router(); 

router.get("/", (req, res) => { 
    loggerInfo.info(`Renderizado de pagina ProductosFaker.`)
    res.render("productos.handlebars", {productos: agregarProductosFaker()})
})


export {router}