//Instalacion de connect-mongo. Sesiones
import MongoStore from "connect-mongo";
import { config } from "dotenv"; 
import os from "os"
config()

const MongoURL = process.env.DB_MONGO_LINK
const Store = MongoStore.create({mongoUrl: MongoURL, ttl:60})

const procesDATA = { 
    plataforma : process.platform, 
    idProceso : process.pid, 
    directorio: process.cwd(), 
    tituloProceso : process.title, 
    memoriaEnUso: process.memoryUsage(), 
    version:process.version, 
    procesadores:os.cpus().length
}

const configSession = { 
    store: Store, 
    saveUninitialized:false, 
    resave:false, 
    secret:"Programacion"
}

//Envioremnt Variables
const mongoLink = process.env.DB_MONGO_LINK
const transporterUser = process.env.TRANSPORTER_USER
const transporterPass = process.env.TRANSPORTER_PASS
const accountSID = process.env.accountSid
const authToken = process.env.authToken


export { 
    configSession, 
    procesDATA
}


