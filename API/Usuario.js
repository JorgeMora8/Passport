const {ContendorUsuarios} = require("../ContenedorMongoDB/DAOMongo.js"); 


async function asegurarNombreUnico(username){ 
    const user =  ContendorUsuarios.obtenerUsuarioPorNombre(username); 
    if(user){ 
        throw new Error("Nombre de usuario en uso. Agregar otro nombre...")
    }
}

module.exports = {
    asegurarNombreUnico
}