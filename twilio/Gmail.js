import {createTransport} from "nodemailer"; 

const mail = "jorgeandresmm2002@gmail.com"; 

const trasporter = createTransport({
    service:"gmail", 
    port: 587, 
    auth:{
        user:"jorgeandresmm2002@gmail.com", 
        pass:"lnnpumuxbcvunaie"
    }
})

// const mailOptions = {
//     from:"Servidor Node.js", 
//     to:mail, 
//     subject:"Se envia un mensaje de prueba a este correo",
//     html:"<h1>MENSAJE ENVIADO EXITOSAMENTE</h1>"
// }


export async function enviarCorreoCompra(titulo, cuerpo){
    const mailOptions = {
        from:"Servidor Node.js", 
        to:mail, 
        subject:titulo,
        html:cuerpo
    }

    const info = await trasporter.sendMail(mailOptions)
    console.log(info)
}

// try {
//     const info = await trasporter.sendMail(mailOptions)
//     console.log(info)
// } catch (error) {
//     console.log(error)
// }