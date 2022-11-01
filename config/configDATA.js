//Instalacion de connect-mongo. Sesiones
import MongoStore from "connect-mongo";
import { config } from "dotenv"
config()

// const MongoURL = "mongodb://localhost:27017"
const MongoURL = process.env.MONGO_LINK
const Store = MongoStore.create({mongoUrl: MongoURL, ttl:60})

const procesDATA = { 
    plataforma : process.platform, 
    idProceso : process.pid, 
    directorio: process.cwd(), 
    tituloProceso : process.title, 
    memoriaEnUso: process.memoryUsage(), 
    version:process.version
}

const configSession = { 
    store: Store, 
    saveUninitialized:false, 
    resave:false, 
    secret:"Programacion"
}


export { 
    configSession, 
    procesDATA
}


