import {obtenerId} from "./IdModel.js";


//=>Datos de usuario
function crearUsuario({id=obtenerId(), username, password, name, location, phoneNumber, age}){ 
    if(!username){ 
        throw new Error("Error: No se encuentran datos en el campo username")
    }

    if(!password){ 
        throw new Error("Error:No se encuentran datos en el campo password")
    }

    if(!name){ 
        throw new Error("Error: Es necesario el nombre para poder registrarse")
    }

    if(!location){ 
        throw new Error("Error: No se encuentra el campo location")
    }

    if(!phoneNumber){ 
        throw new Error("Error: No se encuentra el campo phoneNumber")
    }

    if(!age){ 
        throw new Error("Error: No se encuentra el campo age")
    }

    return { 
        id,
        username, 
        password, 
        name, 
        location, 
        phoneNumber,
        age, 
    }

}


export { 
    crearUsuario
}

