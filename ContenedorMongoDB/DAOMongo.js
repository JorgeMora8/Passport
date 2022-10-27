//=>
import contenedorMongoDB from "../ContenedorMongoDB/Contenedor.js";
import {mensajeModel, usuarioModel} from "./Config/Schema.js";


const chatContenedor = new contenedorMongoDB(mensajeModel)

const ContendorUsuarios = new contenedorMongoDB(usuarioModel)

export { 
    chatContenedor, 
    ContendorUsuarios
}


