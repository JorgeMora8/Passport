import express from "express"; 
import { loggerInfo } from "../loggeo/loggeoConfig.js";
const router = express.Router(); 


//=>Productos provenientes de faker.js; 
import {Productos} from "../ProductosFaker/ProductosFaker.js";


router.get("/", (req, res) => { 
    loggerInfo.info(`Renderizado de pagina ProductosFaker.`)
    res.render("productos.handlebars", {productos: Productos})
})


export {router}