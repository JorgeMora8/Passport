import {obtenerId} from "./IdModel.js";
import {hash} from "../hashPassword.js"


//=>Datos de usuario
async function crearUsuario({id=obtenerId(), username, password, name, location, phoneNumber, age}){ 
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

    let newPassword = await hash(password)

    console.log(username, password, name, phoneNumber)

    

    return { 
        id,
        username, 
        password : newPassword, 
        name, 
        location, 
        phoneNumber,
        age, 
    }

}


export { 
    crearUsuario
}

