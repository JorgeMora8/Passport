import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 

//=>Funcion para autenticar a los usuarios
export function autenticar (username, password){
    return new Promise(async (resolve, reject) => {
        let usuario; 
        usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(username); 

        if(!usuario){
            reject("No se encontro ningun usuario"); 
        }else if (usuario.password !== password){
            reject("La contraseña no coincide"); 
        }

        resolve(usuario); 

    })
}
