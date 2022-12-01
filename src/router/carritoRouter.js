import { Router } from "express"; 
import { carritoController } from "../Controllers/carritoController.js";

export const carritoRouter = Router(); 


carritoRouter.get("/", carritoController)