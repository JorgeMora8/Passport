//=>Exportacion de middlewares de autenticacion; 

export function requireAuthentication(req, res, next){ 
    if(req.isAuthenticated()){ 
        next(); 
    }else{ 
        res.status(401).redirect("/auth/login"); 
    }
}

export function isLogedIn(req,res,next){ 
    if(req.isAuthenticated()){ 
        res.redirect("/"); 
    }else{ 
        next()
    }
}

