import {createTransport} from "nodemailer";
import {transporterPass, transporterUser} from "../../Configuration/EnviromentVariables.js"
import {config} from "dotenv"; 
config()


const trasporter = createTransport({
    service:"gmail", 
    port: 587, 
    auth:{
        user:transporterUser, 
        pass:transporterPass
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
