import { loggerWarn } from "../loggeo/loggeoConfig.js"

const paginaNoEncontrada = (req, res) => {
    loggerWarn.warn("Pagina no encontrada"); 
    res.send("Pagina requerida no existe")
}

export {paginaNoEncontrada}