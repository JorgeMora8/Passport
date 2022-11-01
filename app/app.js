import express from "express"; 
import {engine} from "express-handlebars"; 
import session from "express-session"; 
import {configSession} from "../config/configDATA.js";
import {passportMiddleware, passportSessionHanlder} from "../middleware/passport.js";


const app = express(); 
 
//=>Usos
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


export {app}
