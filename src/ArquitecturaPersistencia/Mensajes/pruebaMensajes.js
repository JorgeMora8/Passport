// import Mensajes from "./Mensajes.js";

const mensaje1 = { 
    id:123, 
    name:"Jorge Mora", 
    nickName: "George de la selva", 
    mail:"jorgeandresmm2002@gmail.com", 
    message:"Hello world (test)"
}


// const MensServicio = 
//     new Mensajes({
//         id:mensaje1.id, 
//         name:mensaje1.name,
//         nickName: mensaje1.nickName, 
//         mail: mensaje1.mail, 
//         message: mensaje1.message
//     }); 

// console.log(MensServicio.asDTO())


import ServicioMensajes from "./ServicioMensajes.js";

const servMensajes = new ServicioMensajes(); 

await servMensajes.guardarMensaje(mensaje1)