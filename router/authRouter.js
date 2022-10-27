const express = require("express"); 
const {isLogedIn} = require("../middleware/auth.js")

const {
    registroController, 
    loginController, 

    successRegisterController, 
    successLoginController,

    failLoginController, 
    failureRegisterController, 

    logoutController, 

    getRegisterController, 
    getLoginController
} = require("../Controllers/authController.js"); 

const AuthRouter = express.Router(); 

//=>Registro
AuthRouter.get("/register", isLogedIn, getRegisterController); 
AuthRouter.post("/register", registroController); 
AuthRouter.get("/successRegister", successRegisterController); 
AuthRouter.get("/failureRegister", failureRegisterController); 

//=>Login; 
AuthRouter.get("/login", isLogedIn, getLoginController)
AuthRouter.post("/login", loginController); 
AuthRouter.get("/successLogin", successLoginController); 
AuthRouter.get("/failureLogin", failLoginController); 

AuthRouter.get("/logout", logoutController)

module.exports = { 
    AuthRouter
}

