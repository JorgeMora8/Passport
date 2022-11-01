import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 


//=>Funcion para autenticar a los usuarios
export async function autenticar(username, password){ 

    let usuario;

    try {
        usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(username); 
    } catch (error) {
        throw new Error("No se encontro el usuario")
    }

    if(usuario.password !== password){ 
       throw new Error("La contraseña no coincide")
    }

    return usuario

}
