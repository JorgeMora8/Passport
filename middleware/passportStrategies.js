import {Strategy} from "passport-local"

import {autenticar} from "../API/Autenticar.js";
import asegurarNombreUnico from "../API/Usuario.js"; 
import {crearUsuario} from "../models/ModelUsuario.js"; 
import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js";


export const registroLocal = new Strategy({
    passReqToCallback:true, 
}, 
    async (req, username, password, done) => { 
        try {

          await asegurarNombreUnico(username); 
          const usuario = crearUsuario(req.body); 
          await ContendorUsuarios.guardarUsuario(usuario);  
          
          done(null, usuario)

        } catch (error) {

            done(null, false, error)

        }
    }
)

export const loginLocal = new Strategy(
    async (username, password, done) => { 
        try {

            const usuario = autenticar(username, password); 
            done(null, usuario)

        } catch (error) {

            done(null, false, error)

        }
    }
)

