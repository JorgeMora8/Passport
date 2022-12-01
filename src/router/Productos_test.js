import express from "express"; 
// import { loggerInfo } from "../loggeo/loggeoConfig.js";
// import { agregarProductosFaker } from "../ProductosFaker/ProductosFaker.js";
import {productosTestController} from "../Controllers/productosTestController.js"


const router = express.Router(); 

router.get("/", productosTestController)

export {router}