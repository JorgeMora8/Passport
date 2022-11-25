import {Strategy} from "passport-local"; 


import { loggerError, loggerInfo } from "../loggeo/loggeoConfig.js";
import {autenticar} from "../API/Autenticar.js";
import asegurarNombreUnico from "../API/Usuario.js"; 
import {crearUsuario} from "../models/ModelUsuario.js"; 
import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js";
import {enviarCorreoCompra} from "../twilio/Gmail.js"; 
import {hash} from "../recurso/hashPassword.js"
import { plantilla } from "../recurso/plantillaMensaje.js";


export const registroLocal = new Strategy({
    passReqToCallback:true, 
}, 
    async (req, username, password, done) => { 
        try {

          await asegurarNombreUnico(username); 
          const usuario = crearUsuario(req.body); 
          let hashPassword = await hash(usuario.password)
          await ContendorUsuarios.guardarUsuario(usuario, hashPassword);  
          
            loggerInfo.info(`Registro de nuevo usuario. ${usuario}`)

    //    let plantillaMensaje = `
    //        NUEVO REGISTRO \n
    //        -Nombre: ${usuario.name},\n
    //        -Edad: ${usuario.age},\n
    //        -Correo: ${usuario.username}, \n
    //        -Direccion: ${usuario.location}, \n  
    //        -Telefono: ${usuario.phoneNumber}
            
    //    `
   
   let plantillaMensaje = plantilla(usuario.name, usuario.age, usuario.username, usuario.location, usuario.phoneNumber)

            await enviarCorreoCompra("Nuevo Registro", plantillaMensaje, usuario.username)
          done(null, usuario)

        } catch (error) {
            loggerError.error(error)
            done(null, false, error)

        }
    }
)

export const loginLocal = new Strategy(
    async (username, password, done) => { 
        try {
            const usuario = await autenticar(username, password); 
            done(null, usuario)
        } 
        catch (error) {
            loggerError.error(error)
            done(null, false, error)
            
        }      }
)

