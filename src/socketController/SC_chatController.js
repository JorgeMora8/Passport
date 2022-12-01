import { chatContenedor } from "../ContenedorMongoDB/DAOMongo.js";

export class chat { 
    async obtenerMensajes(){
        let mensajesGuardados = await chatContenedor.obtenerMensajes()
        return mensajesGuardados
    }

    async guardarMensaje(datosMensaje){ 
        await chatContenedor.guardar(datosMensaje)
    }
}
