import Mensajes from "./Mensajes.js";

export class RepositorioMensajes { 
    constructor(dao){ 
        this.dao = dao; 
    }

    async guardar(mensaje){ 
        let datosMensaje = mensaje.asDTO(); 
        await this.dao.guardar(datosMensaje);
        return datosMensaje
    }

    async obtener(){ 
        let datosMensajesGuardados = await this.dao.obtenerTodos(); 
        return datosMensajesGuardados.map(MensGuardado => new Mensajes(MensGuardado))
    }
}