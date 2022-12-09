import passport from "passport"; 
import {loggerInfo, loggerError} from "../test/loggeo/loggeoConfig.js"
import { PORT } from "../Configuration/minimistConfig.js";

const registroController = passport.authenticate("registro", { 
    successRedirect:"/auth/successRegister", 
    failureRedirect:"/auth/failureRegister"
})

const loginController = passport.authenticate("login", {
    successRedirect:"/auth/successLogin", 
    failureRedirect:"/auth/failureLogin"
})

function successRegisterController(req, res) { 
    loggerInfo.info(`Se realizo un registro  en [http://localhost:${PORT}/${req.originalUrl}]}`)
    res.redirect("/")
}

function failureRegisterController(req, res) { 
    res.render("failRegister")
}

function successLoginController(req, res) { 
    loggerInfo.info(`Se realizo un login exitoso en [http://localhost:${PORT}/${req.originalUrl}]}`)
    res.redirect("/")
}

function failLoginController(req, res) {
    // loggerError.err("Error: No se pudo realizar un login.")
    res.render("failLogin")
}

function logoutController(req, res){
    const username = req.user
    console.log(username)
    loggerInfo.info(`Peticion de log-out. Usuario ${req.username} hora:${Date.now()}`)

    if(req.isAuthenticated()) { 
        req.logout((err) => { 
            res.render("logout", {name: username})
        });
    }else{ 
        res.redirect("/")
    }
}

function getRegisterController(req, res) { 
    loggerInfo.info(`Peticion de renderizado (Pagina registro). hora:${Date.now()}`)
    res.render("register")
}


function getLoginController(req,res){ 
    loggerInfo.info(`Peticion de renderizado (Pagina Login). hora:${Date.now()}`)
    res.render("login")
}

export { 
    registroController, 
    loginController, 

    successRegisterController, 
    successLoginController,

    failLoginController, 
    failureRegisterController, 

    logoutController, 

    getRegisterController, 
    getLoginController

}