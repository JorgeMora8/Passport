import passport from "passport"; 

//=>Importacion de estrategia[Passport.js]
import {registroLocal, loginLocal} from "./passportStrategies.js"; 

// import {ContendorUsuarios} from "../ContenedorMongoDB/DAOMongo.js"; 

passport.use("registro", registroLocal); 
passport.use("login", loginLocal); 

export const passportMiddleware = passport.initialize(); 



passport.serializeUser((user, done) => { 
    done(null, user)
})

passport.deserializeUser( async (user, done) => { 
    try {
        done(null, user);   
    } catch (error) {
        done(null, false)
    }   
})

export const passportSessionHanlder = passport.session()

