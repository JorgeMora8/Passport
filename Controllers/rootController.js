import { loggerInfo } from "../loggeo/loggeoConfig.js"

const getHome = (req, res) => { 
    loggerInfo.info("Rederizado de pagina Home")
    res.render("home")
}

export {getHome}