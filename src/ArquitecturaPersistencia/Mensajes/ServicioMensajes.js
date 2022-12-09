import Mensaje from "./Mensajes.js"; 
import { chatContenedor} from "../../ContenedorMongoDB/DAOMongo.js";
import {RepositorioMensajes} from "./RepositorioMensajes.js"
import {randomUUID} from "crypto"



export default class ServicioMensajes { 
    constructor(){ 
        this.RepositorioMensajes = new RepositorioMensajes(chatContenedor)
    }

    async guardarMensaje(datosMensajes){ 
        // console.log(datosMensajes)

        const mensaje = 
            new Mensaje({
                name : datosMensajes.name, 
                nickName : datosMensajes.nickName, 
                mail : datosMensajes.mail, 
                message : datosMensajes.message, 
                id: randomUUID()}); 

        await this.RepositorioMensajes.guardar(mensaje); 
        return mensaje;
       
       
    }

    async obtenerMensajes(){ 
        const mensajesGuardados = await this.RepositorioMensajes.obtener(); 
        return mensajesGuardados.map(prod => prod.asDTO());
    }
}