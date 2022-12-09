export function validarCorreo(correoObtenido){ 
    if(!correoObtenido) throw new Error ("Theres no email added into the class")
    if(!correoObtenido.includes("@")) throw new Error ("We cant find the @ in the mail supplied")

    return correoObtenido; 
}

export function validarNombre(nombreObtenido){ 
    if(!nombreObtenido) throw new Error ("Its necesary to add a name to identify the author...")
    return nombreObtenido
}

export function validarMensaje (mensajeObtenido){ 
    if(!mensajeObtenido) throw new Error ("You need to add a message to send it... ")
    return mensajeObtenido
}