const Strategy = require("passport-local").Strategy; 

const {autenticar} = require("../API/Autenticar");
const {asegurarNombreUnico} = require("../API/Usuario"); 
const {crearUsuario} = require("../models/ModelUsuario"); 
const {ContendorUsuarios} = require("../ContenedorMongoDB/DAOMongo.js")


const registroLocal = new Strategy({
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

const loginLocal = new Strategy(
    async (username, password, done) => { 
        try {

            const usuario = await autenticar(username, password); 
            done(null, usuario)

        } catch (error) {

            done(null, false, error)

        }
    }
)
module.exports = { 
    registroLocal, 
    loginLocal
}