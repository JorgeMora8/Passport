import {createTransport} from "nodemailer";
import {config} from "dotenv"; 
config()


const trasporter = createTransport({
    service:"gmail", 
    port: 587, 
    auth:{
        user:process.env.TRANSPORTER_USER, 
        pass:process.env.TRANSPORTER_PASS
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
