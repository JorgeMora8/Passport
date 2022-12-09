import {enviarCorreoCompra} from "../recurso/twilio/Gmail.js"; 
import {administratorGMAIL} from "../Configuration/EnviromentVariables.js"
import {config} from "dotenv"; 
config()

export async function plantilla({name, age, username, location, phoneNumber}){ 
    let cuerpoMensaje = `
    NUEVO REGISTRO \n
    -Nombre: ${name},\n
    -Edad: ${age},\n
    -Correo: ${username}, \n
    -Direccion: ${location}, \n  
    -Telefono: ${phoneNumber}  
` 
await enviarCorreoCompra("Nuevo registro", cuerpoMensaje, administratorGMAIL )
}