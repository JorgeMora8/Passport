import Mensaje from "./Mensajes.js"; 
import { chatContenedor} from "../../Contenedores/DAO.js";
import {RepositorioMensajes} from "./RepositorioMensajes.js"
import {randomUUID} from "crypto"
import { obtenerId } from "../../recurso/models/IdModel.js";



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
                id: obtenerId()}); 

        await this.RepositorioMensajes.guardar(mensaje); 
        return mensaje;
       
       
    }

    async obtenerMensajes(){ 
        const mensajesGuardados = await this.RepositorioMensajes.obtener(); 
        return mensajesGuardados.map(prod => prod.asDTO());
    }
}