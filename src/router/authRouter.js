import express from "express"; 
import {isLogedIn} from "../middleware/auth.js";

import {
    registroController, 
    loginController, 

    successRegisterController, 
    successLoginController,

    failLoginController, 
    failureRegisterController, 

    logoutController, 

    getRegisterController, 
    getLoginController
} from "../Controllers/authController.js"; 

const AuthRouter = express.Router(); 

AuthRouter.use(express.json()); 
AuthRouter.use(express.urlencoded({extended:true}))

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

export { 
    AuthRouter
}

