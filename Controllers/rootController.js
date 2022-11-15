import { loggerInfo } from "../loggeo/loggeoConfig.js"

const getHome = (req, res) => { 
    loggerInfo.info("Rederizado de pagina Home"); 
    let username = req.user.username; 
    res.render("home", {username: username})
}

export {getHome}