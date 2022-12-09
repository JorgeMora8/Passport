// import Producto from "./Productos.js";

export class RepositorioMensajes { 
    constructor(dao){ 
        this.dao = dao; 
    }

    async guardar(mensaje){ 
        let datosMensaje = mensaje.asDTO(); 
        await this.dao.guardar(datosMensaje);
        return datosMensaje
        // console.log(mensaje.asDTO(), "repo")
    }

    async obtener(){ 
        let datosMensajesGuardados = await this.dao.obtenerTodos(); 
        return datosMensajesGuardados.map(MensGuardado => new Producto(MensGuardado))
    }
}