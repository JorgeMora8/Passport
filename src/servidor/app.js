import express from "express"; 
import {engine} from "express-handlebars"; 
import session from "express-session"; 
import {configSession} from "../Configuration/configDATA.js";
import {passportMiddleware, passportSessionHanlder} from "../middleware/passport.js";


const app = express(); 
 
// //=>Usos
app.use(express.static("public")); 
app.use(express.urlencoded({extended:true})); 
app.use(express.json());
app.use(session(configSession))
app.use(passportMiddleware); 
app.use(passportSessionHanlder)


//=>Handlebars
const handlebarsConfig = {defaultlayout: "main.handlebars"}
app.engine("handlebars", engine(handlebarsConfig)); 
app.set("view engine", ".handlebars"); 
app.set("views", "./views");

//=>Importacion de Routers
import { AuthRouter } from "../router/authRouter.js";
import { HomeRoot } from "../router/root.js";
import { infoRouter } from "../router/infoRouter.js";
import { RandomNumberRouter } from "../router/RandomNumber.js";
import { router } from "../router/Productos_test.js";
import { carritoRouter } from "../router/carritoRouter.js";
import { paginaNoEncontrada } from "../Controllers/paginaNoEncontrada.js";

//=>Instalacion de Routers
app.use("/auth", AuthRouter);
app.use("/info", infoRouter);
app.use("/", HomeRoot);
app.use("/api", RandomNumberRouter);
app.use("/productosFaker", router);
app.use("/carrito", carritoRouter);

app.get("*", paginaNoEncontrada);


export {app}
