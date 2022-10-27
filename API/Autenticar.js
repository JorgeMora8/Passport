const {ContendorUsuarios} = require("../ContenedorMongoDB/DAOMongo.js"); 

async function autenticar(username, password){ 
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

module.exports = { 
    autenticar
}