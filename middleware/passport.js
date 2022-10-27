import passport from "passport"; 

//=>Importacion de estrategia[Passport.js]
import {registroLocal, loginLocal} from "./passportStrategies.js"; 

import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 

passport.use("registro", registroLocal); 
passport.use("login", loginLocal); 

export const passportMiddleware = passport.initialize(); 

passport.serializeUser((user, done) => { 
    done(null, user.id)
})

passport.deserializeUser( async (id, done) => { 
    try {
        let usuario = await ContendorUsuarios(id); 
        if(!usuario) throw new Error("No se consiguio usuario")
        done(null, usuario);   
    } catch (error) {
        done(null, false)
    }   
})

export const passportSessionHanlder = passport.session()

// module.exports = { 
//     passportMiddleware, 
//     passportSessionHanlder
// }