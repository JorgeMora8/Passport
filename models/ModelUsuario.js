import {obtenerId} from "./IdModel.js";


//=>Datos de usuario
function crearUsuario({id=obtenerId(), username, password}){ 
    if(!username){ 
        throw new Error("Error: No se encuentran datos en el campo username")
    }

    if(!password){ 
        throw new Error("Error:No se encuentran datos en el campo password")
    }

    return { 
        id,
        username, 
        password
    }

}


export { 
    crearUsuario
}

