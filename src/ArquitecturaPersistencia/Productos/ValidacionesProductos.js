
export function validarNombreProducto(nombreObtenido){ 
    if(!nombreObtenido) throw new Error ("Its neccesary to add a name to identify the product.")
    
    return nombreObtenido
}

export function validarPrecio(precioObtenido){ 
    // if(precioObtenido <= 0) throw new Error ("The price of a producto cant be less than 0")
    // if(!precioObtenido) throw new Error ("Its neccesary to add a price to assign in the product")
    console.log(precioObtenido)

    // return precioObtenido
}

export function ValidarImagen(linkImagenObtenido){ 
    if(!linkImagenObtenido) throw new Error ("Its neccesary to add the link of an image to the product.")

    return linkImagenObtenido
}

export function validarTipoProducto(tipoProductoObtenido){ 
    if(!tipoProductoObtenido) throw new Error ("Its neccesary to add the type of the product to be save"); 

    return tipoProductoObtenido
}