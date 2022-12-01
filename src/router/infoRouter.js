import express from "express"; 
import {requireAuthentication} from "../middleware/auth.js";
// import {procesDATA} from "../../config/configDATA.js"; 
import compression from "compression"
import { infoController } from "../Controllers/infoController.js";


const infoRouter = express.Router(); 

//=>Agregado un console.log

//=>Usanndo compresion Gzip
infoRouter.get("/",requireAuthentication,compression(), infoController)




export { infoRouter }
