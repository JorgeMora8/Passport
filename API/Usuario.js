import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 


//=>Funcion para asegurar un nombre unico para cada usuario
export default async function asegurarNombreUnico(username){ 
    const user =  await ContendorUsuarios.obtenerUsuarioPorNombre(username); 
    if(user){ 
        throw new Error("Nombre de usuario en uso. Agregar otro nombre...")
    }
}
