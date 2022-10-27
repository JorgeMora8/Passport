//=>Exportacion de middlewares de autenticacion; 

function requireAuthentication(req, res, next){ 
    if(req.isAuthenticated()){ 
        next(); 
    }else{ 
        res.status(401).redirect("/auth/login"); 
    }
}

 function isLogedIn(req,res,next){ 
    if(req.isAuthenticated()){ 
        res.redirect("/"); 
    }else{ 
        next()
    }
}

module.exports = { 
    requireAuthentication, 
    isLogedIn
}