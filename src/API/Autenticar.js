import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 
import bcrypt from "bcrypt"

//=>Funcion para autenticar a los usuarios
export function autenticar (username, password){
    return new Promise(async (resolve, reject) => {
        let usuario; 
        usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(username); 

        if(!usuario){
            reject("No se encontro ningun usuario"); 
        }else if ((await bcrypt.compare(password, usuario.password) == false)){
            reject("La contraseña no coincide"); 
        }

        resolve(usuario); 

    })
}
