import {createTransport} from "nodemailer"; 


const trasporter = createTransport({
    service:"gmail", 
    port: 587, 
    auth:{
        user:"jorgeandresmm2002@gmail.com", 
        pass:"lnnpumuxbcvunaie"
    }
})



export async function enviarCorreoCompra(titulo, cuerpo, correo){
    const mailOptions = {
        from:"Servidor Node.js", 
        to:correo, 
        subject:titulo,
        html:cuerpo
    }

    const info = await trasporter.sendMail(mailOptions)
    console.log(info)
}
