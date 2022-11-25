import twilio from "twilio";

const accountSid = "AC3df468f0a947ff1c54f795d54d3945b2"
const authToken = "419ca6d6f96c7df18d24484002bb400e"

const client = twilio(accountSid, authToken); 

// const options = { 
//     from: "whatsapp:+14155238886", 
//     to:"whatsapp:+584149493680", 
//     body:"Holaaaaa"
// }

export async function enviarProductosCompra (numeroTelefono, listaProductos, precioTotal){ 

    const options = { 
        from: `whatsapp:+18304457171`, 
        to:`whatsapp:${numeroTelefono}`, 
        body:`${listaProductos}. precio total: ${precioTotal}`
    }
    const message = await client.messages.create(options)
    console.log(message)
}

