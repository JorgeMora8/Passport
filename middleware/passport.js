const passport = require("passport"); 

const {registroLocal, loginLocal} = require("./passportStrategies.js"); 
const {ContendorUsuarios} = require("../ContenedorMongoDB/DAOMongo.js"); 

passport.use("registro", registroLocal); 
passport.use("login", loginLocal); 

const passportMiddleware = passport.initialize(); 

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

const passportSessionHanlder = passport.session()

module.exports = { 
    passportMiddleware, 
    passportSessionHanlder
}