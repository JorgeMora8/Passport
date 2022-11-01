import passport from "passport"; 

const registroController = passport.authenticate("registro", { 
    successRedirect:"/auth/successRegister", 
    failureRedirect:"/auth/failureRegister"
})

const loginController = passport.authenticate("login", {
    successRedirect:"/auth/successLogin", 
    failureRedirect:"/auth/failureLogin"
})

function successRegisterController(req, res) { 
    res.redirect("/")
}

function failureRegisterController(req, res) { 
    res.render("failRegister")
}

function successLoginController(req, res) { 
    res.redirect("/")
}

function failLoginController(req, res) {
   
    res.render("failLogin")
}

function logoutController(req, res){
    const username = req.user
    console.log(username)

    if(req.isAuthenticated()) { 
        req.logout((err) => { 
            res.render("logout", {name: username})
        });
    }else{ 
        res.redirect("/")
    }
}

function getRegisterController(req, res) { 
    res.render("register")
}


function getLoginController(req,res){ 
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