import Usuarios from "./Usuarios.js";

export class RepositorioUsuarios { 
    constructor(dao){ 
        this.dao = dao; 
    }

    async guardar(usuario){ 
        let datosUsuarios = usuario.asDTO(); 
        await this.dao.guardar(datosUsuarios);
        return datosUsuarios
    }

    async obtener(){ 
        let datosUsuariosGuardados = await this.dao.obtenerTodos(); 
        return datosUsuariosGuardados.map(prodGuardado => new Usuarios(prodGuardado))
    }

}