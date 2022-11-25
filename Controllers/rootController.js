import { loggerInfo } from "../loggeo/loggeoConfig.js"; 
import { ContendorUsuarios } from "../ContenedorMongoDB/DAOMongo.js";

const getHome = async (req, res) => { 
    loggerInfo.info("Rederizado de pagina Home"); 
    let username = req.user.username; 

    console.log("Usuario encontrado")
    const usuario = await ContendorUsuarios.obtenerUsuarioPorNombre(username)
    console.log(usuario.username)

    res.render("home", {correo: username, nombre:usuario.name, edad:usuario.age, numeroTelefono: usuario.phoneNumber, ubicacion: usuario.location })
}

export {getHome}