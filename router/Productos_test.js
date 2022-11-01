import express from "express"; 
const router = express.Router(); 


//=>Productos provenientes de faker.js; 
import {Productos} from "../ProductosFaker/ProductosFaker.js";

router.get("/", (req, res) => { 
    res.render("productos.handlebars", {productos: Productos})
})


export {router}