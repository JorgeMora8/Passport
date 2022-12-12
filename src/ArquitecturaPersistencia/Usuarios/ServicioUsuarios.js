import {ContendorUsuarios} from "../../ContenedorMongoDB/DAOMongo.js"; 
import {RepositorioUsuarios} from "./RepositorioUsuarios.js"



export default class ServicioUsuarios { 
    constructor(){ 
        this.RepositorioUsuarios = new RepositorioUsuarios(ContendorUsuarios)
    }

    async guardarUsuarios(datosUsuarios){ 
        // console.log(datosUsuarios)

        const Usuarios = 
            new Usuarios({
                name : datosUsuarios.name, 
                price : datosUsuarios.price, 
                image : datosUsuarios.image, 
                type_of_product : datosUsuarios.type_of_product, 
                id: randomUUID()}); 

        await this.RepositorioUsuarios.guardar(Usuarios); 
        return Usuarios; 
       
    }

    async obtenerUsuarios(){ 
        const UsuariosGuardados = await this.RepositorioUsuarios.obtener(); 
        return UsuariosGuardados.map(user => user.asDTO());
    }
}