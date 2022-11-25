import twilio from "twilio";
import {config} from "dotenv"
config()



const accountSid = process.env.accountSid
const authToken = process.env.authToken

const client = twilio(accountSid, authToken); 

export async function enviarProductosCompra (numeroTelefono, listaProductos, precioTotal){ 

    const options = { 
        from: `whatsapp:+14155238886`, 
        to:`whatsapp:${numeroTelefono}`, 
        body:`${listaProductos}. precio total: ${precioTotal}`
    }
    const message = await client.messages.create(options)
    console.log(message)
}

