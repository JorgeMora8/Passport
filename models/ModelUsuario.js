const {obtenerId} = require("./IdModel.js")

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


module.exports = { 
    crearUsuario
}

