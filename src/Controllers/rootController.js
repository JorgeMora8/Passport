import { loggerInfo } from "../test/loggeo/loggeoConfig.js"; 
import { ContendorUsuarios } from "../Contenedores/DAO.js";

const getHome = async (req, res) => { 
    loggerInfo.info("Rederizado de pagina Home"); 
    let username = req.user.username; 

    const {name, age, phoneNumber, location} = await ContendorUsuarios.obtenerUsuarioPorNombre(username)

    res.render("home", {correo: username, nombre:name, edad:age, numeroTelefono: phoneNumber, ubicacion: location })
}

export {getHome}