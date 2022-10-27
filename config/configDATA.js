//Instalacion de connect-mongo. Sesiones
import MongoStore from "connect-mongo";


const MongoURL = "mongodb://localhost:27017"
const Store = MongoStore.create({mongoUrl: MongoURL, ttl:60})

export const configSession = { 
    store: Store, 
    saveUninitialized:false, 
    resave:false, 
    secret:"Programacion"
}


